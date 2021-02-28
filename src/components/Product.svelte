<script>

    import VariantSelector from './VariantSelector.svelte';
    import QuantitySelector from './QuantitySelector.svelte';
    import Debug from './Debug.svelte';

    import { Product } from './product.js';

    export let shop;
    export let item;

    const callbacks = {
        onSelectionUpdate: ( s ) => {
            selection = s;
        }
    };

    let product = new Product( item, callbacks );

    let quantity = 1;
    let selection = product.selection;

    function handleOptionChange(event) {
        const target = event.target;
        console.log(`Product.handleOptionChange(${target.name} = ${target.value})`);
        let selectedOptions = product.selection.options;
        selectedOptions[target.name] = target.value;

        const selectedVariant = shop.client.product.helpers.variantForOptions(product.product, selectedOptions);

        product.selection = {
            options: selectedOptions,
            variant: selectedVariant,
            image: selectedVariant.attrs.image,
        };
    }

    function handleQuantityChange(event) {
        quantity = event.detail;
        console.log(`Product.handleQuantityChange(${quantity})`);
    }

    function handleAddVariantToCart(){
        shop.showCart();
        shop.addVariantToCart(selection.variant.id, quantity);
    }

</script>

<article>

    {#if product.images.length}
        <div class='gallery'>
            {#each product.images as image}
                <figure>
                    <img src={image.src} alt={`${product.title} product shot`}/>
                </figure>
            {/each}
        </div>
    {/if}

    <div class="details">

        <h1>{product.title}</h1>

        <dl>

            <dt>Type</dt>
            <dd>{product.type}</dd>

            <dt>Brand</dt>
            <dd>{product.brand}</dd>

            <dt>Description</dt>
            <dd>{@html product.description}</dd>

            <dt>Slug</dt>
            <dd>{product.slug}</dd>

            <dt>ID</dt>
            <dd>{product.id}</dd>

        </dl>

        <div class="buy">

            <span class="price">{product.currency} {selection.variant.price}</span>

            {#if product.options.length > 1}
                {#each product.options as option}
                    <VariantSelector
                        {handleOptionChange}
                        {option}
                        key={option.id.toString()}
                    />
                {/each}
            {/if}

            <QuantitySelector value={quantity} on:change={handleQuantityChange} />

            <button class="buy" on:click={handleAddVariantToCart}>Add to Cart</button>

        </div>

    </div>

    <div class="full">
        <Debug data={product}>Product dataset</Debug>
    </div>

</article>


<style lang="scss">

    article {
        background-color: royalblue;
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        > .details {
            flex: 1;
        }
        > .full {
            width: 100%;
        }
    }

    .gallery {
        width: 20%;
        flex: 0 1 auto;
        margin-right: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }

    h1 {
        margin-bottom: 1rem;
    }
    dl {
        dd {
            margin-bottom: 0.5em;
            margin-left: 0.5em;
        }
    }

    .buy {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
