import './utils/initSwipers';
import 'swiper/js/swiper.min'

import 'bootstrap.native/dist/bootstrap-native-v4.min'
// import 'bootstrap.native/lib/V4/utils'
// import 'bootstrap.native/lib/V4/tab-native'

// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/js/dist/util'
// import 'bootstrap/js/dist/tab'
//
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

// let smoothScrollUp = document.getElementById('scroll-up');
//
// function backToTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -60);
//         setTimeout(backToTop, 0);
//     }
// }
// smoothScrollUp.addEventListener('click', backToTop);

;(function () {
    const cartDOMElement = document.querySelector('.js-cart');
    if (!cartDOMElement) {
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartItemsCounterDOMElement = document.querySelector('.js-cart-total-count-items');
    const cartItemsCountersDOMElement = document.querySelectorAll('.js-cart-total-count-items');
    const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
    const cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
    const cartWrapperDOMElement = document.querySelector('.js-cart-wrapper');

    const renderCartItem = ({id, name, price, src, quantity}) => {
        const cartItemDOMElement = document.createElement('div');
        const cartItemTemplate = `
<div class="cart-item">
<!--    <div class="cart-item__main">-->
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
<!--    </div>-->
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

    const updateCartTotalPrice = () => {
        const ids = Object.keys(cart);
        let totalPrice = 0;

        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            totalPrice += cart[id].price * cart[id].quantity;
        }
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
        cart[id].quantity = quantity;
        cartItemQuantityDOMElement.textContent = quantity;
        cartItemPriceDOMElement.textContent = quantity * cart[id].price;
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
    const carInit = () => {
        renderCart();
        updateCart();
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

//mylib
;(function() {
    window.myLib = {};

    window.myLib.body = document.querySelector('body');

    window.myLib.closestAttr = function(item, attr) {
        var node = item;

        while(node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.closestItemByClass = function(item, className) {
        var node = item;

        while(node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    window.myLib.toggleScroll = function() {
        myLib.body.classList.toggle('no-scroll');
    };
})();
//end mylib

;(function() {
    var showPopup = function(target) {
        target.classList.add('is-active');
    };

    var closePopup = function(target) {
        target.classList.remove('is-active');
    };

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        var popupClass = myLib.closestAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('popup-close') ||
            target.classList.contains('popup__inner')) {
            var popup = myLib.closestItemByClass(target, 'popup');

            closePopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('keydown', function(e) {
        if (e.keyCode !== 27) {
            return;
        }

        var popup = document.querySelector('.popup.is-active');

        if (popup) {
            closePopup(popup);
            myLib.toggleScroll();
        }
    });
})();