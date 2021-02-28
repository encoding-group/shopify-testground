<script>

    import Product from './Product.svelte';
    import Debug from './components/Debug.svelte';
    export let shop;

    // let load = shop.fetchAllProducts();
    let load = shop.fetchProducts([ '9895318531', '9895313027' ]);
    // let load = shop.fetchCollection( '389242819' );

    function loadMore(){
        /*
        * help required for implementing 'load next page'
        */
        alert('[Placeholder: Load next page of products]');
    }

</script>

{#await load}
    Loading products
{:then data}

    <ul>
        {#each data as item}
            <li>
                <Product {item} {shop} />
            </li>
        {/each}
    </ul>

    <p>Showing {data.length}</p>

    <button on:click={loadMore}>Load more</button>

{:catch error}
    {error}
{/await}

<style lang="scss">

</style>
