<script>

	import { onMount } from 'svelte';
	import { client } from './client.js';
	import Products from './Products.svelte';
	import Cart from './Cart.svelte';
	import Debug from './Debug.svelte';

	function encodeShopifyId( id, type = 'Collection' ){
		return btoa(`gid://shopify/${type}/${id}`);
	}

	const collectionId = '234610983111';
	// const collectionId = false;

	let showCart = false;
	let checkout = { lineItems: [] };
	let products = [];
	let shop = {};

	const productsPerPage = 15;

	onMount(()=>{

		// load checkout
		client.checkout.create().then((res) => {
			checkout = res;
		}).catch((error)=>{
			console.error(error);
		});

		// load shop info
		client.shop.fetchInfo().then((res) => {
			shop = res;
		}).catch((error)=>{
			console.error(error);
		});

		if( collectionId ){

			// load products from collection
			client.collection.fetchWithProducts( encodeShopifyId(collectionId), {productsFirst: productsPerPage} ).then((res) => {
				products = res.products;
			}).catch((error)=>{
				console.error(error);
			});

		} else {

			console.log( client.product );

			// load all products from shop
			client.product.fetchAll( productsPerPage ).then((res) => {
				products = res;
			}).catch((error)=>{
				console.error(error);
			});

		}
	});

	function addVariantToCart(variantId, quantity){
		showCart = true;
		const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
		return client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(res => {
			checkout = res;
		});
	}

	function updateQuantityInCart(lineItemId, quantity) {
		const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];
		return client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then(res => {
			checkout = res;
		});
	}

	function removeLineItemInCart(lineItemId) {
		return client.checkout.removeLineItems(checkout.id, [lineItemId]).then(res => {
			checkout = res;
		});
	}

	function handleCartClose(){
		showCart = false;
	}

	function loadMore(){
		console.log('[ToDo] load more...');
	}

	$: itemsInCart = checkout.lineItems.length;
	$: totalInCart = checkout.paymentDue;

</script>

<main>

	{#if !showCart}
		<div class="cart-button">
			<button on:click={()=> showCart = true}>Open cart ( {itemsInCart} | {totalInCart} )</button>
		</div>
	{/if}

	<header>

		<div>
			<h1>{shop.name}</h1>
			{#if shop.description}
				<h2>{shop.description}</h2>
			{/if}
		</div>

		<Debug data={shop}>Shop</Debug>

	</header>

	<Products
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
	/>

</main>

<style lang="scss">

	main {
		padding: 1rem;
	}

	header {
		margin: 1rem;
	}

	.cart-button {
		position: fixed;
		top: 0;
		right: 0;
		padding: 1rem;
	}

</style>
