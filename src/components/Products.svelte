<script>

    import Product from './Product.svelte';
    import Debug from './Debug.svelte';

    export let products;
    export let client;
    export let addVariantToCart;

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

<style lang="scss">

</style>
