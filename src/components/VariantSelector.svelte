<script>

    import Product from './Product.svelte';

    export let option;

    function handleOptionChange(){
        console.log('handleOptionChange()');
    }

</script>

<select name={option.name} key={option.name}
    onChange={handleOptionChange} >

        {#each option.values as value}
            <option {value} key={`${option.name}-${value}`}>{value}</option>
        {/each}

</select>

<style lang="scss">

</style>
