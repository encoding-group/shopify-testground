<script>

	import { onMount } from 'svelte';
	import { Shopify } from './shopify.js';

	import ShopInfo from './ShopInfo.svelte';
	import Products from './Products.svelte';
	import Cart from './Cart.svelte';
	import Debug from './Debug.svelte';

	export let credentials;

	let shop = new Shopify( credentials );
	$: isCartVisible = shop.isCartVisible;
	$: itemsInCart = shop.itemsInCart;
	$: totalInCart = shop.totalInCart;

</script>

<main>

	<Debug data={shop}>Shopify Class</Debug>

	{#if !isCartVisible}
		<div class="cart-button">
			<button on:click={()=> shop.showCart()}>Open cart ( {itemsInCart} | {totalInCart} )</button>
		</div>
	{/if}

	<ShopInfo {shop} />

	<Products {shop} />

	<Cart {shop} {isCartVisible} />

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
