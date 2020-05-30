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

let smoothScrollUp = document.getElementById('scroll-up');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(backToTop, 0);
    }
}

smoothScrollUp.addEventListener('click', backToTop);

;(function () {
    const cartDOMElement = document.querySelector('.js-cart');
    if (!cartDOMElement) {
        return;
    }
    const cart = {};
    const cartItemsCounterDOMElements = document.querySelector('js-cart-total-count-items');
    const cartTotalPriceDOMElements = document.querySelector('js-cart-total-price');
    const cartTotalPriceInputDOMElements = document.querySelector('js-cart-total-price-input');

    const renderCartItem = ({id, name, price, src, quantity}) => {
        const cartItemDOMElement = document.createElement('div');
        const cartItemTemplate = `
<div class="cart-item cart__item">
    <div class="cart-item__main">
        <div class="cart-item__start">
            <button class="cart-item__btn cart-item__btn--remove js-btn-cart-item-remove" type="button"></button>
        </div>
        <div class="cart-item__img-wrapper">
            <img class="cart-item__img" src="${src}" alt="">
        </div>
        <div class="cart-item__content">
            <div class="cart-item__title">${name}</div>
            <input type="hidden" name="${id}-Товар" value="${name}">
            <input class="js-cart-input-quantity" type="hidden" name="${id}-Количество" value="${quantity}">
            <input class="js-cart-input-price" type="hidden" name="${id}-Цена" value="${price * quantity}">
        </div>
    </div>
    <div class="cart-item__end">
        <div class="cart-item__actions">
            <button class="cart-item__btn js-btn-product-decrease-quantity" type="button">-</button>
            <span class="cart-item__quantity js-cart-item-quantity">${quantity}</span>
            <button class="cart-item__btn js-btn-product-increase-quantity" type="button">+</button>
        </div>
        <p class="cart-item__price"><span class="js-cart-item-price">${price * quantity}</span> руб.</p>
    </div>
</div>
`;
        cartItemDOMElement.innerHTML = cartItemTemplate;
        cartItemDOMElement.setAttribute('data-product-id', id);
        cartItemDOMElement.classList.add('js-cart-item');

        cartDOMElement.appendChild(cartItemDOMElement);
    };

    const updateCart = () => {
        console.log(cart);
    };

    const deleteCartItem = (id) => {
        const cartItemDOMElement = cartDOMElement.querySelector(`[data-product-id="${id}"]`);
        cartDOMElement.removeChild(cartItemDOMElement);
        delete cart[id];
        updateCart();
    };

    const addCartItem = (data) => {
        const {id} = data;
        cart[id] = data;
        renderCartItem(data);
        updateCart();
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

    const carInit = () => {
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

        });
    };
    carInit();
})();