;(function () {
    const cartDOMElement = document.querySelector('.js-cart');
    if (!cartDOMElement) {
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemsCountersDOMElement = document.querySelectorAll('.js-cart-total-count-items');
    const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
    const cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
    const cartWrapperDOMElement = document.querySelector('.js-cart-wrapper');

    const renderCartItem = ({id, name, price, src, quantity}) => {
        const cartItemDOMElement = document.createElement('div');
        const cartItemTemplate = `
<div class="cart-item">
        <div class="cart-item__start">
            <button class="cart-item__btn cart-item__btn--remove js-btn-cart-item-remove" type="button"><i class="fas fa-times js-btn-cart-item-remove"></i></button>
        <div class="cart-item__img-wrapper">
            <img class="cart-item__img" src="${src}" alt="">
        </div>
        </div>
        <div class="cart-item__content">
            <div class="cart-item__title">${name}</div>
            <input type="hidden" name="${id}-Товар" value="${name}">
            <input class="js-cart-input-quantity" type="hidden" name="${id}-Количество" value="${quantity}">
            <input class="js-cart-input-price" type="hidden" name="${id}-Цена" value="${price * quantity}">
            <div class="cart-item__end">
                 <div class="cart-item__actions">
                    <button class="cart-item__btn js-btn-product-decrease-quantity" type="button"><i class="fas fa-minus-circle js-btn-product-decrease-quantity"></i></button>
                    <span class="cart-item__quantity js-cart-item-quantity">${quantity}</span>
                    <button class="cart-item__btn js-btn-product-increase-quantity" type="button"><i class="fas fa-plus-circle js-btn-product-increase-quantity"></i></button>
                </div>
                <p class="cart-item__price"><span class="js-cart-item-price">${price * quantity}</span>&#8381;</p>
            </div>
        </div>
</div>
`;
        cartItemDOMElement.innerHTML = cartItemTemplate;
        cartItemDOMElement.setAttribute('data-product-id', id);
        cartItemDOMElement.classList.add('js-cart-item');
        cartDOMElement.appendChild(cartItemDOMElement);
    };
    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    const updateDeliveryPrice = (deliveryPrice)=>{
        const cartDeliveryPriceDOMElement = document.querySelector('.js-cart-delivery');
        const cartDeliveryPriceInputDOMElement = document.querySelector('.js-cart-input-delivery');
        if  ( cartDeliveryPriceDOMElement){
            cartDeliveryPriceDOMElement.innerHTML = deliveryPrice;
        }
        if  ( cartDeliveryPriceInputDOMElement){
            cartDeliveryPriceInputDOMElement.value = deliveryPrice;
        }
    };
    const updateCartTotalPrice = () => {
        const ids = Object.keys(cart);
        let totalPrice = 0;
        let deliveryPrice = 0;
        const cityDeliveryPrice = 50;
        const minAmountFreeShipping = 1000;
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            totalPrice += cart[id].price * cart[id].quantity;
        }
        if (totalPrice < minAmountFreeShipping){
            totalPrice += cityDeliveryPrice;
            deliveryPrice = cityDeliveryPrice;
        }
        updateDeliveryPrice(deliveryPrice);
        if (cartTotalPriceInputDOMElement) {
            cartTotalPriceInputDOMElement.value = totalPrice;
        }
        if (cartTotalPriceDOMElement) {
            cartTotalPriceDOMElement.textContent = totalPrice;
        }
    };
    const updateCartTotalItemsCounter = () => {
        const ids = Object.keys(cart);
        let totalQuantity = 0;
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            totalQuantity += cart[id].quantity;
        }
        cartItemsCountersDOMElement.forEach((element) => {
            if (element) {
                element.textContent = totalQuantity;
            }
        });
        return totalQuantity;
    };
    const updateCart = () => {
        const totalQuantity = updateCartTotalItemsCounter();
        updateCartTotalPrice();
        saveCart();
        if (totalQuantity === 0) {
            cartWrapperDOMElement.classList.add("is-empty");
        } else {
            cartWrapperDOMElement.classList.remove("is-empty");
        }
    };
    const deleteCartItem = (id) => {
        const cartItemDOMElement = cartDOMElement.querySelector(`[data-product-id="${id}"]`);
        cartDOMElement.removeChild(cartItemDOMElement);
        delete cart[id];
        updateCart();
    };
    const addCartItem = (data) => {
        const {id} = data;
        if (cart[id]) {
            increaseQuantity(id);
            return;
        }
        cart[id] = data;
        renderCartItem(data);
        updateCart();
    };
    const updateQuantity = (id, quantity) => {
        const cartItemDOMElement = cartDOMElement.querySelector(`[data-product-id="${id}"]`);
        const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
        const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-price');
        const cartItemInputPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-input-price');
        const cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-input-quantity');
        cart[id].quantity = quantity;
        cartItemQuantityDOMElement.textContent = quantity;
        cartItemPriceDOMElement.textContent = quantity * cart[id].price;
        cartItemInputPriceDOMElement.value = quantity * cart[id].price;
        cartItemInputQuantityDOMElement.value = quantity;
        updateCart();
    };
    const decreaseQuantity = (id) => {
        const newQuantity = cart[id].quantity - 1;
        if (newQuantity >= 1) {
            updateQuantity(id, newQuantity);
        }
    };
    const increaseQuantity = (id) => {
        const newQuantity = cart[id].quantity + 1;
        updateQuantity(id, newQuantity);
    };
    const generateID = (string1) => {
        return `${string1}`.replace(new RegExp(" ", "g"), '-');
    };
    const getProductData = (productDOMElement) => {
        const name = productDOMElement.getAttribute('data-product-name');
        const price = productDOMElement.getAttribute('data-product-price');
        const src = productDOMElement.getAttribute('data-product-src');
        const quantity = 1;
        const id = generateID(name);
        return {name, price, src, quantity, id};
    };
    const renderCart = () => {
        const ids = Object.keys(cart);
        ids.forEach((id) => renderCartItem(cart[id]));
    };
    const resetCart = () => {
        const ids = Object.keys(cart);
        ids.forEach((id) => deleteCartItem(cart[id].id));
    };

    const carInit = () => {
        renderCart();
        updateCart();

        document.addEventListener('reset-cart', resetCart);

        document.querySelector('body').addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains('js-btn-add-to-card')) {
                e.preventDefault();
                const productDOMElement = target.closest('.js-product');
                const data = getProductData(productDOMElement);
                addCartItem(data);
            }
            if (target.classList.contains('js-btn-cart-item-remove')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.js-cart-item');
                const productID = cartItemDOMElement.getAttribute('data-product-id');
                deleteCartItem(productID);
            }
            if (target.classList.contains('js-btn-product-increase-quantity')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.js-cart-item');
                const productID = cartItemDOMElement.getAttribute('data-product-id');
                increaseQuantity(productID);
            }
            if (target.classList.contains('js-btn-product-decrease-quantity')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.js-cart-item');
                const productID = cartItemDOMElement.getAttribute('data-product-id');
                decreaseQuantity(productID);
            }
        });
    };
    carInit();
})();