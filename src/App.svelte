<script>

  import { client } from './shop/client.js'

  import Products from './components/Products.svelte';
  import Debug from './components/Debug.svelte';

</script>

{#await client.product.fetchAll()}
	<p>Loading</p>
{:then products}

	<Products {products} />

{:catch error}
	<p>Error</p>
{/await}
