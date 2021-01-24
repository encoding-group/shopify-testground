<script>

	import Product from './Product.svelte';
	import Client from 'shopify-buy';

	const shop = 'encoding-group';
    const token = '8dab23e99be5dccb58cca35e4a49d473';

	// Initializing a client to return content in the store's primary language
	const client = Client.buildClient({
		domain: `${shop}.myshopify.com`,
		storefrontAccessToken: token
	});

</script>

{#await client.product.fetchAll()}
	<p>Loading</p>
{:then products}

	{#each products as product}

		<h1>Product found</h1>

	{/each}

{:catch error}
	<p>Error</p>
{/await}

<style lang="scss">
</style>
