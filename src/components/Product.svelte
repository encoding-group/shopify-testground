<script>

    import VariantSelector from './VariantSelector.svelte';
    import Debug from './Debug.svelte';

    export let product;

    let defaultOptionValues = () => {
        for (const selector of product.options) {
            defaultOptionValues[selector.name] = selector.values[0].value;
        }
    };
    let state = { selectedOptions: defaultOptionValues };
    let variantImage = state.selectedVariantImage || product.images[0];
    let variant = state.selectedVariant || product.variants[0];
    let variantQuantity = state.selectedVariantQuantity || 1;

    function findImage(images, variantId) {
        console.log(`findImage()`);
        const primary = images[0];

        const image = images.filter((image)=>{
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    function handleOptionChange(event) {
        console.log(`handleOptionChange()`, event);
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    function handleQuantityChange(event) {
        console.log(`handleQuantityChange()`, event);
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    function addVariantToCart(id, quantity){
        console.log(`addVariantToCart(${id}, ${quantity})`);
    }

</script>

<article>

    <h1>{product.title}</h1>

    {#if product.images.length}
        <img src={variantImage.src} alt={`${product.title} product shot`}/>
    {/if}

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

    <span class="price">${variant.price}</span>

    {#each product.options as option}
        <VariantSelector
            handleOptionChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
        />
    {/each}

    <label class="option">
        Quantity
        <input min="1" type="number" value={variantQuantity} on:change={handleQuantityChange} />
    </label>

    <button class="buy" onClick={() => addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>

    <Debug data={product}>Product</Debug>

</article>

<style lang="scss">

    article {
        background-color: cadetblue;
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }

    img {
        width: 8rem;
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

</style>
