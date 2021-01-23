<script>

	import Product from './Product.svelte';
	import { request } from '../utilities/storefront.js';

    let load = request(`{
		products(first: 50) {
			edges {
				node {
					id
					title
					description
					productType
					vendor
				}
			}
		}
    }`);

</script>

{#if load}
	{#await load}
		<p>Loading</p>
	{:then data}

		{#each data.products.edges as product}

			<Product product={product.node} />

		{/each}

	{:catch error}
		<p>Error</p>
	{/await}
{/if}

<style lang="scss">
</style>
