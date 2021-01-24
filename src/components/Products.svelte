<script>

    import { productData } from '../utilities/productData.js';
    import Product from './Product.svelte';

    export let products;

</script>

<ul>
    {#each products as product}
        <li>
            <Product product={productData( product )} />
        </li>
    {/each}
</ul>

<style lang="scss">

    ul {
        @include grid;
    }

</style>
