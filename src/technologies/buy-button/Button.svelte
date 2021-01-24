<script>

  import { onMount } from 'svelte';
  import ShopifyBuy from '@shopify/buy-button-js';
  // import { options } from './options.js';

  var client = ShopifyBuy.buildClient({
    domain: `encoding-group.myshopify.com`,
    storefrontAccessToken: '8dab23e99be5dccb58cca35e4a49d473'
  });

  let element;
  var ui = ShopifyBuy.UI.init(client);

  onMount(()=>{

    ui.createComponent('product', {
      id: '6243604725953',
      node: element,
      // options: options
    });

  });


</script>

<div bind:this={element}></div>

<style lang="scss">
</style>
