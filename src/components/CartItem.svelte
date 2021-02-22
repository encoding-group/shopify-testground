<script>

    import Product from './Product.svelte';

    export let item;

    function decrementQuantity(id){
        console.log(`updateQuantityInCart(${id}, ${item.quantity - 1})`);
        // updateQuantityInCart(id, item.quantity - 1);
    }

    function incrementQuantity(id){
        console.log(`updateQuantityInCart(${id}, ${item.quantity + 1})`);
        // updateQuantityInCart(id, item.quantity + 1);
    }

    function removeLineItemInCart(id){
        console.log(`removeLineItemInCart(${id})`);
        // removeLineItemInCart(id);
    }

    $: price = (item.quantity * item.variant.price).toFixed(2);

</script>

<li>

    {#if item.variant.image}
        <figure>
            <img src={item.variant.image.src} alt={`${item.title} product shot`}/>
        </figure>
    {/if}

    <div>

        <div>
            <h3>
                {item.variant.title}
            </h3>
            <h4>
                {item.title}
            </h4>
        </div>

        <div>
            <div class="quantity">
                <button on:click={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button on:click={() => incrementQuantity(item.id)}>+</button>
            </div>
            <span class="price">
                {price}
            </span>

            <button class="remove" on:click={()=> removeLineItemInCart(item.id)}>×</button>

        </div>

    </div>

</li>

<style lang="scss">

</style>
