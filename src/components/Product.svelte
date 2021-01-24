<script>

    import Button from './Button.svelte';

    export let product;
    console.log( product );

    let showData = false;

</script>

<article>

    <h1>{product.title}</h1>

    <p>[Price] EUR</p>

    <p>[Attributes (Material, Size, Color, ...)]</p>

    <Button id={product.id} />

    <p>[Small notes about payment and shipping]</p>

    <p>[Details (Care instructions, About brand, ...)]</p>

    <button on:click={()=>{ showData = !showData }}>Toggle Data</button>
    {#if showData}
        <pre>{JSON.stringify(product, null, 4)}</pre>
    {/if}

</article>

<style lang="scss">

    article {
        @include border;
        padding: 1rem;
    }

    p {
        margin: 1rem 0;
    }

</style>
