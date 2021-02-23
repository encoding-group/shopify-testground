<script>

    import VariantSelector from './VariantSelector.svelte';
    import QuantitySelector from './QuantitySelector.svelte';
    import Debug from './Debug.svelte';

    export let product;
    export let client;
    export let addVariantToCart;
    export let key;

    let defaultOptionValues = {};
    product.options.forEach((selector) => {
        defaultOptionValues[selector.name] = selector.values[0].value;
    });

    let selection = { selectedOptions: defaultOptionValues };

    function findImage(images, variantId) {
        const primary = images[0];

        const image = images.filter(function (image) {
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    function handleOptionChange(event) {
        const target = event.target
        let selectedOptions = selection.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = client.product.helpers.variantForOptions(product, selectedOptions);

        selection.selectedVariant = selectedVariant;
        selection.selectedVariantImage = selectedVariant.attrs.image;
    }

    function handleQuantityChange(event) {
        selection.selectedVariantQuantity = event.detail;
    }

    $: variantImage = selection.selectedVariantImage || product.images[0];
    $: variant = selection.selectedVariant || product.variants[0];
    $: variantQuantity = selection.selectedVariantQuantity || 1;

</script>

<article>

    {#if product.images.length}
        <figure>
            <img src={variantImage.src} alt={`${product.title} product shot`}/>
        </figure>
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
            <dd>{product.id}</dd>

        </dl>

        <div class="buy">

            <span class="price">{variant.priceV2.currencyCode} {variant.price}</span>

            {#each product.options as option}
                <VariantSelector
                    {handleOptionChange}
                    {option}
                    key={option.id.toString()}
                />
            {/each}

            <QuantitySelector value={variantQuantity} on:change={handleQuantityChange} />

            <button class="buy" on:click={() => addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>

        </div>

    </div>

    <div class="full">
        <Debug data={product}>Product</Debug>
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
        > figure {
            width: 20%;
            flex: 0 1 auto;
            margin-right: 1rem;
        }
        > .details {
            flex: 1;
        }
        > .full {
            width: 100%;
        }
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
