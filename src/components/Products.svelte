<script>

    import Product from './Product.svelte';
    import Debug from './Debug.svelte';

    export let products;

</script>

<ul>
    {#each products as product}
        <li>
            <Product {product} />
        </li>
    {/each}
</ul>

<Debug data={products}>Products</Debug>

<style lang="scss">

</style>
