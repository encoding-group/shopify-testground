<script>

    export let data;
    export let show = false;

</script>

<section>

    <header>

        <h3>Show <slot /> Dataset</h3>
        <button on:click={()=> show = !show}>Toggle</button>

    </header>

    {#if show}
        <pre>{JSON.stringify( data, null, 2 )}</pre>
    {/if}

</section>

<style>

    section {
        background-color: #eee;
        border-radius: 0.5rem;
        color: #000;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    pre {
        margin-top: 1rem;
        font-family: monospace;
        overflow-x: auto;
    }

</style>
