<script>

    export let product;

    function handleBuy(){
        console.log('put in basket');
    }

</script>

<article>
    <div>

        <figure>
            <img alt="T-Shirt" src="{product.image}" />
        </figure>

    </div>
    <div>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <div class="buy">

            <input id="quantity" type="number" value="1" min="1" />
            <button on:click={handleBuy}>Put in basket</button>

        </div>

    </div>
</article>

<style lang="scss">

    article {
        @include border;
        @include grid;
    }

    h1 {
        margin-bottom: 1rem;
    }

    .buy {
        margin-top: 2rem;
    }

</style>
