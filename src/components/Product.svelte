<script>

    import Debug from './Debug.svelte';

    export let product;

</script>

<article>

    <div className="Product">

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

        <!-- {#if product.images.length > 0}
            <img src={variantImage.src} alt={`${product.title} product shot`}/>
        {/if} -->


        <!-- <span className="Product__price">${variant.price}</span> -->

        <!-- {variantSelectors} -->

        <!-- <label className="Product__option">
          Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>

        <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button> -->

    </div>

    <Debug data={product}>Product</Debug>

</article>

<style lang="scss">

    article {
        background-color: darkkhaki;
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }

    h1 {
        margin-bottom: 1rem;
    }
    dl {
        margin-bottom: 1rem;
        dt {
            font-weight: bold;
        }
        dd {
            margin-bottom: 0.5em;
            margin-left: 0.5em;
        }
    }

</style>
