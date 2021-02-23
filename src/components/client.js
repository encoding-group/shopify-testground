import Client from 'shopify-buy';

const sample = {
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
    domain: 'graphql.myshopify.com'
};

const volume = {};

export const client = Client.buildClient( sample );
