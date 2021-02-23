<script>

    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();

    export let value = 1;

    function decrement(){
        if( value > 1 ){
            value--;
            dispatcher("change", value);
        } else {
            value = 1;
        }
    }
    function increment(){
        value++;
        dispatcher("change", value);
    }
    function handleChange(){
        dispatcher("change", value);
    }

</script>

<label>
    <p><slot>Quantity</slot></p>
    <button title="Buy less" on:click={decrement}>-</button>
    <input min="1" type="number" bind:value on:change={handleChange} />
    <button title="Buy more" on:click={increment}>+</button>
</label>

<style lang="scss">

    label {
        background-color: lightpink;
        padding: 0.2em 0.6em;
        border-radius: 2em;
        width: auto;
        display: flex;
        align-items: center;
    }
    p {
        margin-right: 0.5em;
    }
    button {
        padding: 0.2em 0.6em;
    }
    input {
        background: transparent;
        font: inherit;
        border: none;
        width: 2em;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>
