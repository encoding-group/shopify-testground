<script>

	import Debug from './Debug.svelte';
	export let shop;

	let info = shop.fetchShopInfo();

</script>

<header>

	<div>
		{#await info}
			Loading shop info
		{:then data}

			<h1>{data.name}</h1>

			{#if data.description}
				<h2>{data.description}</h2>
			{/if}

			<Debug {data}>Shop</Debug>

		{:catch error}
			{error}
		{/await}
	</div>

</header>

<style lang="scss">

	header {
		margin: 1rem;
	}

</style>
