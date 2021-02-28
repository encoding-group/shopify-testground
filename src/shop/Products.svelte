<script>

    import Product from './Product.svelte';
    import Debug from './components/Debug.svelte';
    export let shop;

    let loadProducts = shop.fetchProducts();

    /*
    * help required, loading a collection doesn’t work
    */
    // let loadProducts = shop.fetchCollection( '234610983111' );

    function loadMore(){
        /*
        * help required for implementing 'load next page'
        */
        alert('[Placeholder: Load next page of products]');
    }

</script>

{#await loadProducts}
    Loading products
{:then products}

    <ul>
        {#each products as item}
            <li>
                <Product {item} {shop} />
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
