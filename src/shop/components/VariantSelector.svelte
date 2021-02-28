<script>

    export let option;
    export let handleUpdateSelection;
    export let key;

</script>

<select name={option.name} key={option.name} on:change={handleUpdateSelection} >

    {#each option.values as value}
        <option {value} key={`${option.name}-${value}`}>{value}</option>
    {/each}

</select>

<style lang="scss">

</style>
