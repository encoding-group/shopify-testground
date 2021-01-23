<script>

    export let product;

    /*
    id
    title
    description
    productType
    vendor
    */

</script>

<article>
    <div>

        <figure>
            <!-- <img alt="T-Shirt" src="{product.image}" /> -->
        </figure>

    </div>
    <div>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

    </div>
</article>

<style lang="scss">

    article {
        @include border;
        @include grid;
        margin-bottom: 2rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    .buy {
        margin-top: 2rem;
    }

</style>
