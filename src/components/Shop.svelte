<script>

	import { onMount } from 'svelte';
	import { Shopify } from './shopify.js';

	import ShopInfo from './ShopInfo.svelte';
	// import Products from './Products.svelte';
	// import Cart from './Cart.svelte';
	// import Debug from './Debug.svelte';

	export let credentials;

	let shop = new Shopify( credentials );
	let shopInfo = shop.fetchShopInfo();

</script>

<main>

	<!-- {#if !showCart}
		<div class="cart-button">
			<button on:click={()=> showCart = true}>Open cart ( {itemsInCart} | {totalInCart} )</button>
		</div>
	{/if} -->

	<ShopInfo {shop} />

	<!-- <Products
		{products}
		{client}
		{addVariantToCart}
		{loadMore}
	/>

	<Cart
		{checkout}
		{showCart}
		{handleCartClose}
		{updateQuantityInCart}
		{removeLineItemInCart}
	/> -->

</main>

<style lang="scss">

	main {
		padding: 1rem;
	}

	.cart-button {
		position: fixed;
		top: 0;
		right: 0;
		padding: 1rem;
	}

</style>
