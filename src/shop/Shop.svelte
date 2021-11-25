<script>

	import { Shop } from './classes/shop.js';

	import ShopInfo from './ShopInfo.svelte';
	import Products from './Products.svelte';
	import Cart from './Cart.svelte';
	import Debug from './components/Debug.svelte';

	export let credentials;

	const callbacks = {
		onUpdateCart: ( ref ) => {
			itemsInCart = ref.itemsInCart;
			totalInCart = ref.totalInCart;
			checkout = ref.checkout;
		},
		onToggleCart: ( isVisible ) => {
			isCartVisible = isVisible;
		}
	};

	let shop = new Shop( credentials, callbacks );
	let checkout = shop.checkout;
	let isCartVisible = false;
	let itemsInCart = 0;
	let totalInCart = (0).toFixed(2);

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

	<Cart {shop} {checkout} {isCartVisible} />

</main>

<style lang="scss">

	main {
		padding: 1rem;
	}

</style>
