<script>

  import ShopifyBuy from '@shopify/buy-button-js';
  import Products from './components/Products.svelte';

  export let domain;
  export let token;

  const client = ShopifyBuy.buildClient({
    domain: `${domain}.myshopify.com`,
    storefrontAccessToken: token
  });

</script>

{#await client.product.fetchAll()}
	<p>Loading</p>
{:then products}

	<Products {products} />

{:catch error}
	<p>Error</p>
{/await}
