<script>

    import CartItem from './CartItem.svelte';
    import Debug from './Debug.svelte';

    export let shop;
    export let checkout;
    export let isCartVisible;

    let currency = checkout.currencyCode;

    function handleHideCart(){
		shop.hideCart();
	}

    function handleCheckout(){
        shop.redirectToCheckout
    }

</script>

{#if isCartVisible}
    <div class="wrapper">
        <div class="cart">

            <div class="close">
                <button on:click={handleHideCart}>×</button>
            </div>

            <header>
                <h2>Your cart</h2>
            </header>

            {#if checkout.lineItems.length < 1}

                <p>Your cart is currently empty.</p>

            {:else}

                <ul>
                    {#each checkout.lineItems as item}
                        <CartItem {item} {shop} />
                    {/each}
                </ul>

                <footer>
                    <dl class="subtotal">
                        <dt>Subtotal</dt>
                        <dd>{currency} {checkout.subtotalPrice}</dd>
                    </dl>
                    <dl class="taxes">
                        <dt>Taxes</dt>
                        <dd>{currency} {checkout.totalTax}</dd>
                    </dl>
                    <dl class="subtotal">
                        <dt>Total</dt>
                        <dd>{currency} {checkout.subtotalPrice}</dd>
                    </dl>
                    <button class="checkout" on:click={handleCheckout}>Checkout</button>
                </footer>

            {/if}

            <Debug data={checkout}>Checkout dataset</Debug>

        </div>
    </div>
{/if}

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

    .close {
        position: absolute;
        padding: 1rem;
        top: 1rem;
        right: 1rem;
    }

    footer {
        margin-top: 0.5rem;
        dl {
            margin: 0.5rem 0;
            + dl {
                padding-top: 0.5rem;
                border-top: 1px solid palevioletred;
            }
        }
    }

</style>
