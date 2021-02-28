<script>

    export let option;
    export let handleOptionChange;
    export let key;

</script>

<select name={option.name} key={option.name} on:change={handleOptionChange} >

    {#each option.values as value}
        <option {value} key={`${option.name}-${value}`}>{value}</option>
    {/each}

</select>

<style lang="scss">

</style>
