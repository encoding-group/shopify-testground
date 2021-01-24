<script>

  import { onMount } from 'svelte';
  import ShopifyBuy from '@shopify/buy-button-js';
  import { options } from './buttonOptions.js';

  export let id;
  id = atob( id ).split('/').pop();

  let element;
  let ui = ShopifyBuy.UI.init( window.shopify );

  onMount(()=>{

    ui.createComponent('product', {
      id: id,
      node: element,
      options: options
    });

  });

</script>

Shopify Product ID: {id}

<div bind:this={element}></div>

<style lang="scss">
</style>
