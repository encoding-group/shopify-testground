<script>

	import Debug from './Debug.svelte';
	export let shop;

	let loadInfo = shop.fetchShopInfo();

</script>

<header>

	<div>
		{#await loadInfo}
			Loading shop info
		{:then info}

			<h1>{info.name}</h1>

			{#if info.description}
				<h2>{info.description}</h2>
			{/if}

			<Debug data={info}>Shop dataset</Debug>

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
