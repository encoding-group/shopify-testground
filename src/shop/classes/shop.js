import Client from 'shopify-buy';

export class Shop {

    constructor( credentials, callbacks ){

        this._client = Client.buildClient( credentials );
        this._callbacks = callbacks;

        this._checkout = { lineItems: [] };
        this._shop = {};
        this._isCartVisible = false;

        this.fetchCheckout();

    }

    /* client */

    get client(){
        return this._client;
    }

    /* shop info */

    get shopInfo(){
        return this._shop;
    }

    async fetchShopInfo(){
        console.log('Shopify.fetchShopInfo()');
        try {
            this._shop = await this._client.shop.fetchInfo();
            return this._shop;
        } catch (error) {
            console.error( error );
            this._shop = {};
            return {};
        }
    }

    /* checkout */

    get checkout(){
        return this._checkout;
    }

    set checkout( checkout = { lineItems: [] } ){
        this._checkout = checkout;
        this._callbacks.onUpdateCart(this);
    }

    get itemsInCart(){
        return this._checkout.lineItems.length;
    }

    get totalInCart(){
        return this._checkout.paymentDue || '0.00';
    }

    async fetchCheckout(){
        console.log('Shopify.fetchCheckout()');
        try {
            this.checkout = await this._client.checkout.create();
            return this.checkout;
        } catch (error) {
            console.error( error );
            this.checkout = undefined;
            return this.checkout;
        }
    }

    async addVariantToCart( variantId, quantity ){
        console.log(`Shopify.addVariantToCart(${atob(variantId)},${quantity})`);

		const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }];

        try {
            this.checkout = await this._client.checkout.addLineItems( this._checkout.id, lineItemsToAdd );
            return this.checkout;
        } catch (error) {
            console.error( error );
            this.checkout = undefined;
            return this.checkout;
        }
	}

    async updateQuantityInCart( lineItemId, quantity ){
        console.log(`Shopify.updateQuantityInCart(${atob(lineItemId)},${quantity})`);
		const lineItemsToUpdate = [{
            id: lineItemId,
            quantity: parseInt(quantity, 10)
        }];

        try {
            this.checkout = await this._client.checkout.updateLineItems( this._checkout.id, lineItemsToUpdate);
            return this.checkout;
        } catch (error) {
            console.error( error );
            this.checkout = undefined;
            return this.checkout;
        }
	}

    async removeLineItemInCart( lineItemId ){
        console.log(`Shopify.removeLineItemInCart(${atob(lineItemId)})`);
        try {
            this.checkout = await this._client.checkout.removeLineItems( this._checkout.id, [lineItemId] );
            return this.checkout;
        } catch (error) {
            console.error( error );
            this.checkout = undefined;
            return this.checkout;
        }
	}

    redirectToCheckout(){
        console.log('Shopify.redirectToCheckout');
        window.open( this._checkout.webUrl );
    }

    get isCartEmpty (){
        return this._checkout.lineItems.length < 1;
    }

    /* is cart visible? */

    get isCartVisible(){
        return this._isCartVisible;
    }

    set isCartVisible( isVisible = true ){
        this._isCartVisible = isVisible;
        this._callbacks.onToggleCart( isVisible );
    }

    showCart(){
        console.log('Shopify.showCart');
        this.isCartVisible = true;
    }

    hideCart(){
        console.log('Shopify.hideCart');
        this.isCartVisible = false;
    }

    /* products */

    get itemsPerRow(){
        return 12;
    }

    decodeId( id ){
        return atob(id);
    }

    encodeId( id, type = 'Collection' ){
        return btoa(`gid://shopify/${type}/${id}`);
    }

    findVariantForOptions( product, selectedOptions ){
        return this.client.product.helpers.variantForOptions(product, selectedOptions);
    }

    async fetchProducts( ids = [] ){
        console.log(`Shopify.fetchProducts(${ids})`);
        ids = ids.map( id => this.encodeId( id, 'Product' ) );
        return await this.client.product.fetchMultiple( ids )
            .then((products) => {
                return products;
            })
            .catch((error) => {
                console.error( error );
                return [];
            });
    }

    async fetchAllProducts(){
        console.log(`Shopify.fetchAllProducts()`);
        return await this.client.product.fetchAll( this.itemsPerRow )
            .then((products) => {
                return products;
            })
            .catch((error) => {
                console.error( error );
                return [];
            });
    }

    async fetchCollection( id ){
        console.log(`Shopify.fetchCollection(${id})`);
        return await this.client.collection.fetchWithProducts( this.encodeId( id ), {productsFirst: this.itemsPerRow} )
            .then((collection) => {
                return collection.products;
            })
            .catch((error) => {
                console.error( error );
                return [];
            });
    }

    /* collections */

    async fetchCollections(){
        console.log(`Shopify.fetchCollections()`);
        return await this.client.collection.fetchAllWithProducts()
            .then((col) => {
                let collections = [];
                for (const collection of col) {
                    if( collection.products.length > 0 ){
                        collections.push( collection );
                    }
                }
                return collections;
            })
            .catch((error) => {
                console.error( error );
                return [];
            });
    }

}
