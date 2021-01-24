<script>

    export let product;
    console.log( product );

    let showData = false;

</script>

<article>

    <h1>{product.title}</h1>

    <p>[Price] EUR</p>

    <div>[Attributes (Material, Size, Color, ...)]</div>

    <button>Add To Cart</button>

    <p>[Small notes about payment and shipping]</p>

    <div>[Details (Care instructions, About brand, ...)]</div>

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

</style>
