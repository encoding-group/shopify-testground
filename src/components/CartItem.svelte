<script>

    import Product from './Product.svelte';
    import Debug from './Debug.svelte';

    export let item;
    export let updateQuantityInCart;
    export let removeLineItemInCart;
    export let key;

    function decrementQuantity(id){
        updateQuantityInCart(id, item.quantity - 1);
    }

    function incrementQuantity(id){
        updateQuantityInCart(id, item.quantity + 1);
    }

    $: price = (item.quantity * item.variant.price).toFixed(2);

</script>

<li>

    {#if item.variant.image}
        <figure>
            <img src={item.variant.image.src} alt={`${item.title} product shot`}/>
        </figure>
    {/if}

    <div class="details">

        <div>
            <h3>
                {item.title}
            </h3>
            <h4>
                {item.variant.title}
            </h4>
        </div>

        <div class="options">

            <div class="quantity">
                <button title="Buy less" on:click={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button title="Buy more" on:click={() => incrementQuantity(item.id)}>+</button>
            </div>

            <div class="price">
                <span>{price}</span>
            </div>

            <div>
                <button class="remove" title="Remove {item.title} from cart" on:click={()=> removeLineItemInCart(item.id)}>×</button>
            </div>

        </div>

    </div>

    <div class="full">
        <Debug data={item}>Cart Item</Debug>
    </div>

</li>

<style lang="scss">

    li {
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        border-bottom: 1px solid palevioletred;
        .full {
            width: 100%;
        }
    }

    figure {
        margin-right: 1rem;
        width: 8rem;
        flex: 0 1 auto;
    }
    .details {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        > div + div {
            margin-left: 1rem;
        }
    }

</style>
