<script>

    import Item from './CartItem.svelte';

    export let checkout;

    function openCheckout(){
        window.open(checkout.webUrl);
    }
    function handleCartClose(){
        console.log(`handleCartClose()`);
    }

    export let open;

</script>

<div class:open>

    <header>
        <h2>Your cart</h2>
        <button on:click={handleCartClose} class="close">×</button>
    </header>

    <ul>
        {#each checkout.lineItems as item}
            <Item />
        {/each}
    </ul>

    <footer>
        <dl class="subtotal">
            <dt>Subtotal</dt>
            <dd>{checkout.subtotalPrice}</dd>
        </dl>
        <dl class="taxes">
            <dt>Taxes</dt>
            <dd>{checkout.totalTax}</dd>
        </dl>
        <dl class="subtotal">
            <dt>Total</dt>
            <dd>{checkout.subtotalPrice}</dd>
        </dl>
        <button class="checkout" on:click={openCheckout}>Checkout</button>
    </footer>
</div>

<style lang="scss">

</style>
