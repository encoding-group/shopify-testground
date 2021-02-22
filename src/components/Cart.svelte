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

<div class="wrapper">
    <div class="cart" class:open>

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
</div>

<style lang="scss">

    .wrapper {
        position: fixed;
        top: 0;
        right: 0;
        width: 90vw;
        z-index: 10;
        max-height: 100vh;
        overflow-y: auto;
        padding: 1rem;
        @media (min-width: 720px){
            width: 50vw;
        }
    }
    .cart {
        background-color: cornflowerblue;
        border-radius: 1rem;
        padding: 1rem;
    }

</style>
