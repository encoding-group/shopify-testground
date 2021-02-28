import Client from 'shopify-buy';

export class Shopify {

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

    fetchCollection( id ){
        console.log(`Shopify.fetchCollection(${id})`);
        /*
        * help required, this doesn’t work
        */
        let collection = this.encodeId( id );
        try {
            return this._client.collection.fetchWithProducts( collection, {productsFirst: this.itemsPerRow} );
        } catch (error) {
            console.error( error );
            return [];
        }
    }

    fetchProducts( ids = [] ){
        console.log(`Shopify.fetchProducts(${ids})`);
        // if( ids.length > 0 ){
        //     get list of products by specified ids
        // } else {
        //     get all products
        // }

        try {
            return this._client.product.fetchAll( this.itemsPerRow );
        } catch (error) {
            console.error( error );
            return [];
        }
    }

}
