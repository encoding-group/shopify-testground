<script>

    import Item from './CartItem.svelte';
    import Debug from './Debug.svelte';

    export let shop;
    export let isCartVisible;

    let checkout = shop.checkout;
    console.log( checkout );

    /*
    * help required: cart must shop and update according to the inner workings of the shop class
    */

    $: empty = shop.isCartEmpty;

</script>

{#if isCartVisible}
    <div class="wrapper">
        <div class="cart">

            <div class="close">
                <button on:click={shop.hideCart}>×</button>
            </div>

            <header>
                <h2>Your cart</h2>
            </header>

            {#if empty}

                <p>Your cart is currently empty.</p>

            {:else}

                <ul>
                    {#each shop.checkout.lineItems as item}
                        <Item {item} {shop}
                            key={item.id.toString()}
                        />
                    {/each}
                </ul>

                <footer>
                    <dl class="subtotal">
                        <dt>Subtotal</dt>
                        <dd>{shop.checkout.currencyCode} {shop.checkout.subtotalPrice}</dd>
                    </dl>
                    <dl class="taxes">
                        <dt>Taxes</dt>
                        <dd>{shop.checkout.currencyCode} {shop.checkout.totalTax}</dd>
                    </dl>
                    <dl class="subtotal">
                        <dt>Total</dt>
                        <dd>{shop.checkout.currencyCode} {shop.checkout.subtotalPrice}</dd>
                    </dl>
                    <button class="checkout" on:click={shop.openCheckout}>Checkout</button>
                </footer>

            {/if}

            <Debug data={shop.redirectToCheckout}>Checkout dataset</Debug>

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
