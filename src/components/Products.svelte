<script>

    import Product from './Product.svelte';

    export let products;
    export let client;
    export let addVariantToCart;
    export let loadMore;

</script>

<ul>
    {#each products as product}
        <li>
            <Product {product}
                {client}
                {addVariantToCart}
                key={product.id.toString()}
                />
        </li>
    {/each}
</ul>

<p>Showing {products.length}</p>

<button on:click={loadMore}>Load more</button>

<style lang="scss">

</style>
