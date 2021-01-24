export const options = {
  product: {
    iframe: true,
    buttonDestination: 'cart',
    isButton: false,
    layout: 'vertical',
    manifest: ['product', 'option'],
    width: '280px',
    order: [
      'img',
      'imgWithCarousel',
      'title',
      'variantTitle',
      'price',
      'options',
      'quantity',
      'button',
      'buttonWithQuantity',
      'description',
    ],
    contents: {
      img: true,
      imgWithCarousel: false,
      title: true,
      variantTitle: false,
      price: true,
      unitPrice: true,
      options: true,
      quantity: false,
      quantityIncrement: false,
      quantityDecrement: false,
      quantityInput: true,
      button: true,
      buttonWithQuantity: false,
      description: false,
    },
    templates: productTemplates,
    classes: {
      wrapper: 'shopify-buy__product-wrapper',
      product: 'shopify-buy__product',
      img: 'shopify-buy__product__variant-img',
      imgWrapper: 'shopify-buy__product-img-wrapper',
      carousel: 'shopify-buy__carousel',
      carouselNext: 'carousel-button--next',
      carouselPrevious: 'carousel-button--previous',
      carouselItem: 'shopify-buy__carousel-item',
      carouselItemSelected: 'shopify-buy__carousel-item--selected',
      blockButton: 'shopify-buy__btn--parent',
      button: 'shopify-buy__btn',
      buttonWrapper: 'shopify-buy__btn-wrapper',
      title: 'shopify-buy__product__title',
      prices: 'shopify-buy__product__price',
      price: 'shopify-buy__product__actual-price',
      compareAt: 'shopify-buy__product__compare-price',
      unitPrice: 'shopify-buy__product__unit-price',
      loweredPrice: 'shopify-buy__price--lowered',
      variantTitle: 'shopify-buy__product__variant-title',
      description: 'shopify-buy__product-description',
      options: 'shopify-buy__product__variant-selectors',
      disabled: 'shopify-buy__btn-disabled',
      buttonBesideQty: 'shopify-buy__beside-quantity',
      quantity: 'shopify-buy__quantity-container',
      quantityInput: 'shopify-buy__quantity',
      quantityButton: 'shopify-buy__btn--seamless',
      quantityIncrement: 'shopify-buy__quantity-increment',
      quantityDecrement: 'shopify-buy__quantity-decrement',
      buttonWithQuantity: 'shopify-buy__btn-and-quantity',
      quantityWithButtons: 'shopify-buy__quantity-with-btns',
      vertical: 'shopify-buy__layout-vertical',
      horizontal: 'shopify-buy__layout-horizontal',
    },
    text: {
      button: 'ADD TO CART',
      outOfStock: 'Out of stock',
      unavailable: 'Unavailable',
      unitPriceAccessibilityLabel: 'Unit price',
      unitPriceAccessibilitySeparator: 'per',
      regularPriceAccessibilityLabel: 'Regular price',
      salePriceAccessibilityLabel: 'Sale price',
    },
  },
  modalProduct: {
    iframe: false,
    layout: 'horizontal',
    contents: {
      img: true,
      imgWithCarousel: false,
      title: true,
      variantTitle: false,
      price: true,
      unitPrice: true,
      options: true,
      button: true,
      buttonWithQuantity: false,
      quantity: false,
      quantityIncrement: false,
      quantityDecrement: false,
      description: true,
    },
    order: [
      'img',
      'imgWithCarousel',
      'title',
      'variantTitle',
      'price',
      'options',
      'buttonWithQuantity',
      'button',
      'description',
    ],
    classes: {
      wrapper: 'shopify-buy__modal-product-wrapper',
      hasImage: 'has-image',
    },
    buttonDestination: 'cart',
    text: {
      button: 'ADD TO CART',
    },
  },
  modal: {
    iframe: true,
    manifest: ['modal', 'product', 'option'],
    classes: {
      overlay: 'shopify-buy__modal-overlay',
      modal: 'shopify-buy__modal',
      contents: 'shopify-buy__modal-contents',
      close: 'shopify-buy__btn--close',
      wrapper: 'shopify-buy__modal-wrapper',
      product: 'shopify-buy__product-modal',
      img: 'shopify-buy__modal-img',
      imgWithCarousel: 'shopify-buy__modal-img',
      footer: 'shopify-buy__modal-footer',
      footerWithImg: 'shopify-buy__modal-footer--has-img',
      imgWithImg: 'shopify-buy__modal-img--has-img',
      contentsWithImg: 'shopify-buy__modal-contents--has-img',
      scrollContents: 'shopify-buy__modal-scroll-contents',
    },
    contents: {
      contents: true,
    },
    order: ['contents'],
    templates: modalTemplates,
  },
  productSet: {
    iframe: true,
    manifest: ['product', 'option', 'productSet'],
    contents: {
      title: false,
      products: true,
      pagination: true,
    },
    order: ['title', 'products', 'pagination'],
    templates: {
      title: '<h2 class="{{data.classes.productSet.title}}">{{data.collection.attrs.title}}</h2>',
      products: '<div class="{{data.classes.productSet.products}}"></div>',
      pagination: '<button class="{{data.classes.productSet.paginationButton}} {{data.nextButtonClass}}">{{data.text.nextPageButton}}</button>',
    },
    classes: {
      wrapper: 'shopify-buy__collection-wrapper',
      productSet: 'shopify-buy__collection',
      title: 'shopify-buy__collection__title',
      collection: 'shopify-buy__collection',
      products: 'shopify-buy__collection-products',
      product: 'shopify-buy__collection-product',
      paginationButton: 'shopify-buy__collection-pagination-button shopify-buy__btn',
    },
    text: {
      nextPageButton: 'Next page',
    },
  },
  option: {
    templates: optionTemplates,
    contents: {
      option: true,
    },
    order: ['option'],
    classes: {
      option: 'shopify-buy__option-select',
      wrapper: 'shopify-buy__option-select-wrapper',
      select: 'shopify-buy__option-select__select',
      label: 'shopify-buy__option-select__label',
      optionDisabled: 'shopify-buy__option--disabled',
      optionSelected: 'shopify-buy__option--selected',
      selectIcon: 'shopify-buy__select-icon',
      hiddenLabel: 'visuallyhidden',
    },
  },
  cart: {
    iframe: true,
    templates: cartTemplates,
    startOpen: false,
    popup: true,
    manifest: ['cart', 'lineItem', 'toggle'],
    contents: {
      title: true,
      lineItems: true,
      footer: true,
      note: false,
      discounts: true,
    },
    order: ['title', 'lineItems', 'footer'],
    classes: {
      wrapper: 'shopify-buy__cart-wrapper',
      cart: 'shopify-buy__cart',
      header: 'shopify-buy__cart__header',
      title: 'shopify-buy__cart__title',
      lineItems: 'shopify-buy__cart-items',
      footer: 'shopify-buy__cart-bottom',
      discount: 'shopify-buy__cart__discount',
      discountText: 'shopify-buy__cart__discount__text',
      discountIcon: 'shopify-buy__cart__discount__text__icon',
      discountAmount: 'shopify-buy__cart__discount__amount',
      subtotalText: 'shopify-buy__cart__subtotal__text',
      subtotal: 'shopify-buy__cart__subtotal__price',
      notice: 'shopify-buy__cart__notice',
      currency: 'shopify-buy__cart__currency',
      button: 'shopify-buy__btn shopify-buy__btn--cart-checkout',
      close: 'shopify-buy__btn--close',
      cartScroll: 'shopify-buy__cart-scroll',
      cartScrollWithDiscounts: 'shopify-buy__cart-scroll--discounts',
      cartScrollWithCartNote: 'shopify-buy__cart-scroll--cart-note',
      empty: 'shopify-buy__cart-empty-text',
      note: 'shopify-buy__cart__note',
      noteDescription: 'shopify-buy__cart__note__description',
      noteTextArea: 'shopify-buy__cart__note__text-area',
    },
    text: {
      title: 'Cart',
      empty: 'Your cart is empty.',
      button: 'CHECKOUT',
      total: 'SUBTOTAL',
      currency: 'CAD',
      notice: 'Shipping and discount codes are added at checkout.',
      noteDescription: 'Special instructions for seller',
      closeAccessibilityLabel: 'Close cart',
    },
  },
  lineItem: {
    templates: lineItemTemplates,
    contents: {
      image: true,
      variantTitle: true,
      title: true,
      price: false,
      priceWithDiscounts: true,
      quantity: true,
      quantityIncrement: true,
      quantityDecrement: true,
      quantityInput: true,
    },
    order: [
      'image',
      'title',
      'variantTitle',
      'price',
      'priceWithDiscounts',
      'quantity',
    ],
    classes: {
      lineItem: 'shopify-buy__cart-item',
      image: 'shopify-buy__cart-item__image',
      variantTitle: 'shopify-buy__cart-item__variant-title',
      itemTitle: 'shopify-buy__cart-item__title',
      price: 'shopify-buy__cart-item__price',
      priceWithDiscounts: 'shopify-buy__cart-item__price-and-discounts',
      fullPrice: 'shopify-buy__cart-item__full-price',
      discount: 'shopify-buy__cart-item__discount',
      discountIcon: 'shopify-buy__cart-item__discount__icon',
      quantity: 'shopify-buy__quantity-container clearfix',
      quantityInput: 'shopify-buy__quantity shopify-buy__cart-item__quantity-input',
      quantityButton: 'shopify-buy__btn--seamless',
      quantityIncrement: 'shopify-buy__quantity-increment',
      quantityDecrement: 'shopify-buy__quantity-decrement',
    },
    text: {
      quantityInputAccessibilityLabel: 'Quantity',
      quantityDecrementAccessibilityLabel: 'Reduce item quantity by one',
      quantityIncrementAccessibilityLabel: 'Increase item quantity by one',
    },
  },
  toggle: {
    templates: toggleTemplates,
    manifest: ['toggle'],
    iframe: true,
    sticky: true,
    contents: {
      count: true,
      icon: true,
      title: false,
    },
    order: [
      'count',
      'icon',
      'title',
    ],
    classes: {
      wrapper: 'shopify-buy__cart-toggle-wrapper',
      toggle: 'shopify-buy__cart-toggle',
      title: 'shopify-buy__cart-toggle__title',
      count: 'shopify-buy__cart-toggle__count',
      icon: 'shopify-buy__icon-cart shopify-buy__icon-cart--side',
      iconPath: 'shopify-buy__icon-cart__group',
    },
    text: {
      title: 'cart',
    },
  },
  window: {
    height: 600,
    width: 400,
    toolbar: 0,
    scrollbars: 1,
    status: 0,
    resizable: 1,
    center: 0,
    createnew: 1,
    location: 0,
    menubar: 0,
    onUnload: null,
    titlebar: 'yes',
  },
};
