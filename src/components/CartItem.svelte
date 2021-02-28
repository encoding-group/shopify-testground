<script>

    import QuantitySelector from './QuantitySelector.svelte';
    import Debug from './Debug.svelte';

    export let item;
    export let shop;

    let key = item.id.toString();

    $: price = (item.quantity * item.variant.price).toFixed(2);

    function handleUpdateQuantity( event ) {
        shop.updateQuantityInCart( item.id, event.detail );
    }
    function handleRemoveItem() {
        shop.removeLineItemInCart( item.id );
    }

</script>

<li>

    {#if item.variant.image}
        <figure>
            <img src={item.variant.image.src} alt={`${item.title} product shot`}/>
        </figure>
    {/if}

    <div class="details">

        <div>
            <h3>{item.title}</h3>
            {#if item.variant.title !== 'Default Title'}
                <h4>{item.variant.title}</h4>
            {/if}
        </div>

        <div class="options">

            <QuantitySelector value={item.quantity} on:change={handleUpdateQuantity} />

            <div class="price">
                <span>{item.variant.priceV2.currencyCode} {price}</span>
            </div>

            <div>
                <button class="remove" title="Remove {item.title} from cart" on:click={handleRemoveItem}>×</button>
            </div>

        </div>

    </div>

    <div class="full">
        <Debug data={item}>Cart Item dataset</Debug>
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
