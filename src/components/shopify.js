import Client from 'shopify-buy';

export class Shopify {

    constructor( credentials ){

        this._client = Client.buildClient( credentials );
        this._checkout = { lineItems: [] };
        this._shop = {};
        this._isCartVisible = false;

        // this.fetchShopInfo();

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
        const context = this;

        this._shop = await this._client.shop.fetchInfo();
            // .reject(( error ) => {
            //     console.error( error );
            //     context._shop = {};
            // });
        return this._shop;
    }

    /* checkout */

    get checkout(){
        return this._checkout;
    }

    get itemsInCart(){
        return this._checkout.lineItems.length;
    }

    get totalInCart(){
        return this._checkout.paymentDue;
    }

    async fetchCheckout(){
        const context = this;

        this._checkout = await this._client.checkout.create()
            .reject(( error ) => {
                console.error( error );
                context._checkout = { lineItems: [] };
            });
        return this._checkout;
    }

    async addVariantToCart( variantId, quantity ){
		this.showCart();
        const context = this;
		const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }];

        this._checkout = await this._client.checkout.addLineItems( this._checkout.id, lineItemsToAdd )
            .reject(( error ) => {
                console.error( error );
                context._checkout = { lineItems: [] };
            });
        return this._checkout;
	}

    async updateQuantityInCart( lineItemId, quantity ){
        const context = this;
		const lineItemsToUpdate = [{
            id: lineItemId,
            quantity: parseInt(quantity, 10)
        }];

		this._checkout = await this._client.checkout.updateLineItems( this._checkout.id, lineItemsToUpdate)
            .reject(( error ) => {
                console.error( error );
                context._checkout = { lineItems: [] };
            });
        return this._checkout;
	}

    async removeLineItemInCart( lineItemId ){
        const context = this;

		this._checkout = await this._client.checkout.removeLineItems( this._checkout.id, [lineItemId] )
            .reject(( error ) => {
                console.error( error );
                context._checkout = { lineItems: [] };
            });
        return this._checkout;
	}

    /* is cart visible? */

    get isCartVisible(){
        return this._isCartVisible;
    }

    showCart(){
        this._isCartVisible = true;
    }

    hideCart(){
        this._isCartVisible = false;
    }

    toggleCart( callback ){
        this._isCartVisible = !this._isCartVisible;
        if( callback !== undefined ){
            callback( this._isCartVisible );
        }
    }

    /* products */

    get itemsPerRow(){
        return 12;
    }

    encodeId( id, type = 'Collection' ){
        return btoa(`gid://shopify/${type}/${id}`);
    }

    fetchCollection( id ){
        id = this.encodeId( id );
        return this._client.collection.fetchWithProducts( id, {productsFirst: this.itemsPerRow} )
            .reject(( error ) => {
                console.error( error );
            });
    }

    fetchProducts( ids = [] ){
        // if( ids.length > 0 ){
        //     get list of products by specified ids
        // } else {
        //     get all products
        // }

        return this._client.product.fetchAll( this.itemsPerRow )
            .reject(( error ) => {
                console.error( error );
            });
    }

}
