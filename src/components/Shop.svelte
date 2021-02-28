<script>

	import { onMount } from 'svelte';
	import { Shopify } from './shopify.js';

	import ShopInfo from './ShopInfo.svelte';
	import Products from './Products.svelte';
	import Cart from './Cart.svelte';
	import Debug from './Debug.svelte';

	export let credentials;

	const shopifyUpdateCallback = (client) => {
		itemsInCart = client.itemsInCart;
		totalInCart = client.totalInCart;
		showCart();
	}

	let shop = new Shopify( credentials, shopifyUpdateCallback );

	/*
	* help required: how to make them reactive?
	*/
	let isCartVisible = shop.isCartVisible;
	let itemsInCart = shop.itemsInCart;
	let totalInCart = shop.totalInCart;

	function showCart(){
		shop.showCart();
		isCartVisible = shop.isCartVisible;
	}

	function hideCart(){
		shop.hideCart();
		isCartVisible = shop.isCartVisible;
	}

</script>

<main>

	<div class="cart">

		<button on:click={showCart}>Show Cart</button>
		<button on:click={hideCart}>Hide Cart</button>

		<span>{itemsInCart} items in Cart = {totalInCart}</span>

	</div>

	<Debug data={shop}>Shopify Class</Debug>

	<ShopInfo {shop} />

	<Products {shop} />

	<Cart {shop} {hideCart} {isCartVisible} />

</main>

<style lang="scss">

	main {
		padding: 1rem;
	}

</style>
