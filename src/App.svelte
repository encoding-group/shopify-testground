<script>

  const product = {
    title: 'T-Shirt',
    price: '39.99',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: 'https://cdn.shopify.com/s/files/1/0070/7693/7775/products/1200x1800px_weiss-tshirt-rotetypo-vorne_1800x1800.jpg'
  };

  import Product from "./components/Product.svelte";

</script>

<main>
  <Product {product} />
</main>

<style lang="scss">

  main {
    padding: 2rem;
  }

</style>
