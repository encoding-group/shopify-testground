<script>

  import { onMount } from 'svelte';
  import { client } from './client.js';
  import Products from './Products.svelte';
  import Cart from './Cart.svelte';
  import Debug from './Debug.svelte';

  let showCart = false;
  let checkout = { lineItems: [] };
  let products = [];
  let shop = {};

  onMount(()=>{
    client.checkout.create().then((res) => {
      checkout = res;
    });
    client.product.fetchAll().then((res) => {
      products = res;
    });
    client.shop.fetchInfo().then((res) => {
      shop = res;
    });
  });

  function addVariantToCart(variantId, quantity){
    console.log(`addVariantToCart(${variantId},${quantity})`);

    showCart = true;
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];

    return client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(res => {
      checkout = res;
    });
  }

  function updateQuantityInCart(lineItemId, quantity) {
    console.log(`updateQuantityInCart(${lineItemId}, ${quantity})`);

    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    return client.checkout.updateLineItems(checkout.id, lineItemsToUpdate).then(res => {
      checkout = res;
    });
  }

  function removeLineItemInCart(lineItemId) {
    console.log(`removeLineItemInCart(${lineItemId})`);

    return client.checkout.removeLineItems(checkout.id, [lineItemId]).then(res => {
      checkout = res;
    });
  }

  function handleCartClose(){
    showCart = false;
  }

</script>

<main>

  {#if !showCart}
    <div class="open-cart">
      <button on:click={()=> showCart = true}>Open cart</button>
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

  .open-cart {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
  }

</style>
