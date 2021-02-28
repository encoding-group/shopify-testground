export class Product {

    constructor( product, callbacks ){

        this._product = product;
        this._callbacks = callbacks;

        this._selection = {
            options: this.defaultOptionValues,
            variant: this.variant,
            image: this.variant.image,
            quantity: 1
        };

    }

    /* general */

    get product(){
        return this._product;
    }

    get slug(){
        return this.product.handle;
    }

    get key(){
        return this.product.id.toString();
    }

    get id(){
        return atob(this.product.id);
    }

    encodeId( id, type = 'Product' ){
        return btoa(`gid://shopify/${type}/${id}`);
    }

    get currency(){
        return this.variant.priceV2.currencyCode;
    }

    /* data */

    get title(){
        return this.product.title;
    }

    get brand(){
        return this.product.vendor;
    }

    get type(){
        return this.product.productType;
    }

    get description(){
        return this.product.description;
    }

    get image(){
        return this.product.images[0];
    }

    get images(){
        return this.product.images;
    }

    findImage( variantId ){
        console.log(`Product.findImage(${variantId})`);

        return this.images.filter((img) => {
            return img.variant_ids.includes( variantId );
        })[0] || this.image;
    }

    /* options */

    get options(){
        return this.product.options;
    }

    get defaultOptionValues(){
        let values = {};
        this.options.forEach((selector) => {
            values[selector.name] = selector.values[0].value;
        });
        return values;
    }

    /* variants */

    get variant(){
        return this.product.variants[0];
    }

    get variants(){
        return this.product.variants;
    }

    /* selection */

    set selection( selection ){
        if( selection.hasOwnProperty('options') ){
            this._selection.options = selection.options;
        }
        if( selection.hasOwnProperty('variant') ){
            this._selection.variant = selection.variant;
        }
        if( selection.hasOwnProperty('quantity') ){
            this._selection.quantity = selection.quantity;
        }
        if( selection.hasOwnProperty('image') ){
            this._selection.image = selection.image;
        }

        this._callbacks.onSelectionUpdate( this.selection );
    }

    get selection(){
        return this._selection;
    }

}
