<script>

    import Product from './Product.svelte';

    export let products;

</script>

<ul>
    {#each products as product}
        <li>
            <Product {product} />
        </li>
    {/each}
</ul>

<style lang="scss">

    ul {
        display: grid;
        gap: 2rem;
    }

</style>
