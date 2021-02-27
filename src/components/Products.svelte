<script>

    import Product from './Product.svelte';
    import Debug from './Debug.svelte';
    export let shop;

    let loadProducts = shop.fetchProducts();

    /*
    * help required, loading a collection doesn’t work
    */
    // let loadProducts = shop.fetchCollection( '234610983111' );

    function loadMore(){
        alert('[Placeholder: Load next page of products]');
    }

</script>

{#await loadProducts}
    Loading products
{:then products}

    <ul>
        {#each products as product}
            <li>
                <Product {product} {shop} key={product.id.toString()} />
            </li>
        {/each}
    </ul>

    <p>Showing {products.length}</p>

    <button on:click={loadMore}>Load more</button>

{:catch error}
    {error}
{/await}

<style lang="scss">

</style>
