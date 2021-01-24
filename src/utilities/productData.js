export function productData( product ){
    let p = {};

    for (const key in product.attrs) {
        if (Object.hasOwnProperty.call(product.attrs, key)) {
            const attr = product.attrs[key];
            switch (true) {
                case attr === null:
                case Array.isArray( attr ):
                case typeof attr === 'boolean':
                case typeof attr === 'string':
                case typeof attr === 'number':
                    p[key] = attr;
                    break;
                case typeof attr === 'object':
                    if (Object.hasOwnProperty.call(attr, 'value')) {
                        p[key] = attr.value;
                    }
                    break;
                default:
                    p[key] = attr;
                    break;
            }
        }
    }

    return p;
}
