<script>

    import { request } from '../utilities/storefront.js';
    let load = request(`{
		shop {
			name
		}
    }`);

</script>

{#if load}
	{#await load}
		<p>Loading</p>
	{:then data}

		Success

	{:catch error}
		<p>Error</p>
	{/await}
{/if}

<style lang="scss">
</style>
