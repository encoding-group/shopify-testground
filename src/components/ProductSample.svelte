<script>

    const product = {
        title: 'T-Shirt',
        price: '39.99',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://cdn.shopify.com/s/files/1/0070/7693/7775/products/1200x1800px_weiss-tshirt-rotetypo-vorne_1800x1800.jpg'
    };

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
