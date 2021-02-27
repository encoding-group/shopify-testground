<script>

    import VariantSelector from './VariantSelector.svelte';
    import QuantitySelector from './QuantitySelector.svelte';
    import Debug from './Debug.svelte';

    export let product;
    export let shop;

    let key = product.id.toString();

    let defaultOptionValues = {};
    product.options.forEach((selector) => {
        defaultOptionValues[selector.name] = selector.values[0].value;
    });

    let selection = { selectedOptions: defaultOptionValues };

    function findImage(images, variantId) {
        console.log(`Product.findImage(${images},${variantId})`);
        const primary = images[0];

        const image = images.filter((image) => {
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    function handleOptionChange(event) {
        console.log(`Product.handleOptionChange(${event})`);
        const target = event.target;
        let selectedOptions = selection.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = shop.client.product.helpers.variantForOptions(product, selectedOptions);

        selection.selectedVariant = selectedVariant;
        selection.selectedVariantImage = selectedVariant.attrs.image;
    }

    function handleQuantityChange(event) {
        console.log(`Product.handleQuantityChange(${event})`);
        selection.selectedVariantQuantity = event.detail;
    }

    $: variantImage = selection.selectedVariantImage || product.images[0];
    $: variant = selection.selectedVariant || product.variants[0];
    $: variantQuantity = selection.selectedVariantQuantity || 1;

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
            <dd>{product.productType}</dd>

            <dt>Vendor</dt>
            <dd>{product.vendor}</dd>

            <dt>Description</dt>
            <dd>{@html product.description}</dd>

            <dt>Handle</dt>
            <dd>{product.handle}</dd>

            <dt>ID</dt>
            <dd>{atob(product.id)}</dd>

        </dl>

        <div class="buy">

            <span class="price">{variant.priceV2.currencyCode} {variant.price}</span>

            {#if product.options.length > 1}
                {#each product.options as option}
                    <VariantSelector
                        {handleOptionChange}
                        {option}
                        key={option.id.toString()}
                    />
                {/each}
            {/if}

            <QuantitySelector value={variantQuantity} on:change={handleQuantityChange} />

            <button class="buy" on:click={() => shop.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>

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
