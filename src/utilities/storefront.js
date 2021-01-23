export async function request( query ){

    const shop = 'encoding-group';
    const token = '8dab23e99be5dccb58cca35e4a49d473';

    const res = await fetch( `https://${shop}.myshopify.com/api/2021-01/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': token,
            'Accept': 'application/json'
        },
        body: query,
    });

    const data = await res.json();
    console.log( data );

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}
