<script>

	import { onMount } from 'svelte';
	import { Shopify } from './shopify.js';

	import ShopInfo from './ShopInfo.svelte';
	import Products from './Products.svelte';
	import Cart from './Cart.svelte';
	import Debug from './Debug.svelte';

	export let credentials;

	const callbacks = {
		// onUpdateCart: ( ref ) => {
		// 	itemsInCart = ref.itemsInCart;
		// 	totalInCart = ref.totalInCart;
		// 	ref.showCart();
		// },
		onToggleCart: ( isVisible ) => {
			isCartVisible = isVisible;
		}
	};

	let shop = new Shopify( credentials, callbacks );

	let isCartVisible = shop.isCartVisible;
	let itemsInCart = shop.itemsInCart;
	let totalInCart = shop.totalInCart;

	function handleShowCart(){
		shop.showCart();
	}
	function handleHideCart(){
		shop.hideCart();
	}

</script>

<main>

	<div class="cart">

		<button on:click={handleShowCart}>Show Cart</button>
		<button on:click={handleHideCart}>Hide Cart</button>

		<span>{itemsInCart} items in Cart = {totalInCart}</span>

	</div>

	<Debug data={shop}>Shopify Class</Debug>

	<ShopInfo {shop} />

	<Products {shop} />

	<Cart {shop} {isCartVisible} />

</main>

<style lang="scss">

	main {
		padding: 1rem;
	}

</style>
