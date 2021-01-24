<script>

    import { productData } from '../utilities/productData.js';

    export let product;

    let data = productData( product );
    console.log( data );

</script>

<article>
    <pre>{JSON.stringify(data, null, 4)}</pre>
</article>

<style lang="scss">

    article {
        @include border;
        padding: 1rem;
    }

</style>
