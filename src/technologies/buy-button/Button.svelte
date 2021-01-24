<script>

  import { onMount } from 'svelte';
  import ShopifyBuy from '@shopify/buy-button-js';
  import { options } from './options.js';

  var client = ShopifyBuy.buildClient({
    domain: `encoding-group.myshopify.com`,
    storefrontAccessToken: '8dab23e99be5dccb58cca35e4a49d473'
  });

  let element;
  let component;
  let ui = ShopifyBuy.UI.init(client);
  console.log( ui );

  onMount(()=>{

    ui.createComponent('product', {
      id: '6243604725953',
      node: element,
      options: options
    });

  });

  function openCart(){
    console.log( ui.openCart );
    ui.openCart();
  }


</script>

<div bind:this={element}></div>

<style lang="scss">
</style>
