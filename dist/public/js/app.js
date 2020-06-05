/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./src/js/cart.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phoneNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneNumber */ "./src/js/phoneNumber.js");
/* harmony import */ var _phoneNumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phoneNumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smoothScroll */ "./src/js/smoothScroll.js");
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smoothScroll__WEBPACK_IMPORTED_MODULE_5__);
// import './utils/initSwipers';
// import 'swiper/js/swiper.min';





 // import 'bootstrap.native/dist/bootstrap-native-v4.min';
// import 'bootstrap.native/lib/V4/utils'
// import 'bootstrap.native/lib/V4/tab-native'
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/js/dist/util'
// import 'bootstrap/js/dist/tab'
//
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

console.log('test');

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var cartDOMElement = document.querySelector('.js-cart');

  if (!cartDOMElement) {
    return;
  }

  var cart = JSON.parse(localStorage.getItem('cart')) || {};
  var cartItemsCountersDOMElement = document.querySelectorAll('.js-cart-total-count-items');
  var cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
  var cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
  var cartWrapperDOMElement = document.querySelector('.js-cart-wrapper');

  var renderCartItem = function renderCartItem(_ref) {
    var id = _ref.id,
        name = _ref.name,
        price = _ref.price,
        src = _ref.src,
        quantity = _ref.quantity;
    var cartItemDOMElement = document.createElement('div');
    var cartItemTemplate = "\n<div class=\"cart-item\">\n        <div class=\"cart-item__start\">\n            <button class=\"cart-item__btn cart-item__btn--remove js-btn-cart-item-remove\" type=\"button\"><i class=\"fas fa-times js-btn-cart-item-remove\"></i></button>\n        <div class=\"cart-item__img-wrapper\">\n            <img class=\"cart-item__img\" src=\"".concat(src, "\" alt=\"\">\n        </div>\n        </div>\n        <div class=\"cart-item__content\">\n            <div class=\"cart-item__title\">").concat(name, "</div>\n            <!--       id-\u0422\u043E\u0432\u0430\u0440     -->\n            <input type=\"hidden\" name=\"\u0422\u043E\u0432\u0430\u0440\" value=\"").concat(name, "\">\n            <!--       id-\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E     -->\n            <input class=\"js-cart-input-quantity\" type=\"hidden\" name=\"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\" value=\"").concat(quantity, "\">\n            <!--       id-\u0426\u0435\u043D\u0430     -->\n            <input class=\"js-cart-input-price\" type=\"hidden\" name=\"\u0426\u0435\u043D\u0430\" value=\"").concat(price * quantity, "\">\n            <div class=\"cart-item__end\">\n                 <div class=\"cart-item__actions\">\n                    <button class=\"cart-item__btn js-btn-product-decrease-quantity\" type=\"button\"><i class=\"fas fa-minus-circle js-btn-product-decrease-quantity\"></i></button>\n                    <span class=\"cart-item__quantity js-cart-item-quantity\">").concat(quantity, "</span>\n                    <button class=\"cart-item__btn js-btn-product-increase-quantity\" type=\"button\"><i class=\"fas fa-plus-circle js-btn-product-increase-quantity\"></i></button>\n                </div>\n                <p class=\"cart-item__price\"><span class=\"js-cart-item-price\">").concat(price * quantity, "</span>&#8381;</p>\n            </div>\n        </div>\n</div>\n");
    cartItemDOMElement.innerHTML = cartItemTemplate;
    cartItemDOMElement.setAttribute('data-product-id', id);
    cartItemDOMElement.classList.add('js-cart-item');
    cartDOMElement.appendChild(cartItemDOMElement);
  };

  var saveCart = function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  var updateCartTotalPrice = function updateCartTotalPrice() {
    var ids = Object.keys(cart);
    var totalPrice = 0;

    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      totalPrice += cart[id].price * cart[id].quantity;
    }

    if (cartTotalPriceInputDOMElement) {
      cartTotalPriceInputDOMElement.value = totalPrice;
    }

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = totalPrice;
    }
  };

  var updateCartTotalItemsCounter = function updateCartTotalItemsCounter() {
    var ids = Object.keys(cart);
    var totalQuantity = 0;

    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      totalQuantity += cart[id].quantity;
    }

    cartItemsCountersDOMElement.forEach(function (element) {
      if (element) {
        element.textContent = totalQuantity;
      }
    });
    return totalQuantity;
  };

  var updateCart = function updateCart() {
    var totalQuantity = updateCartTotalItemsCounter();
    updateCartTotalPrice();
    saveCart();

    if (totalQuantity === 0) {
      cartWrapperDOMElement.classList.add("is-empty");
    } else {
      cartWrapperDOMElement.classList.remove("is-empty");
    }
  };

  var deleteCartItem = function deleteCartItem(id) {
    var cartItemDOMElement = cartDOMElement.querySelector("[data-product-id=\"".concat(id, "\"]"));
    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  var addCartItem = function addCartItem(data) {
    var id = data.id;

    if (cart[id]) {
      increaseQuantity(id);
      return;
    }

    cart[id] = data;
    renderCartItem(data);
    updateCart();
  };

  var updateQuantity = function updateQuantity(id, quantity) {
    var cartItemDOMElement = cartDOMElement.querySelector("[data-product-id=\"".concat(id, "\"]"));
    var cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
    var cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-price');
    var cartItemInputPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-input-price');
    var cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-input-quantity');
    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.textContent = quantity;
    cartItemPriceDOMElement.textContent = quantity * cart[id].price;
    cartItemInputPriceDOMElement.value = quantity * cart[id].price;
    cartItemInputQuantityDOMElement.value = quantity;
    updateCart();
  };

  var decreaseQuantity = function decreaseQuantity(id) {
    var newQuantity = cart[id].quantity - 1;

    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  var increaseQuantity = function increaseQuantity(id) {
    var newQuantity = cart[id].quantity + 1;
    updateQuantity(id, newQuantity);
  };

  var generateID = function generateID(string1) {
    return "".concat(string1).replace(new RegExp(" ", "g"), '-');
  };

  var getProductData = function getProductData(productDOMElement) {
    var name = productDOMElement.getAttribute('data-product-name');
    var price = productDOMElement.getAttribute('data-product-price');
    var src = productDOMElement.getAttribute('data-product-src');
    var quantity = 1;
    var id = generateID(name);
    return {
      name: name,
      price: price,
      src: src,
      quantity: quantity,
      id: id
    };
  };

  var renderCart = function renderCart() {
    var ids = Object.keys(cart);
    ids.forEach(function (id) {
      return renderCartItem(cart[id]);
    });
  };

  var resetCart = function resetCart() {
    var ids = Object.keys(cart);
    ids.forEach(function (id) {
      return deleteCartItem(cart[id].id);
    });
  };

  var carInit = function carInit() {
    renderCart();
    updateCart();
    document.addEventListener('reset-cart', resetCart);
    document.querySelector('body').addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains('js-btn-add-to-card')) {
        e.preventDefault();
        var productDOMElement = target.closest('.js-product');
        var data = getProductData(productDOMElement);
        addCartItem(data);
      }

      if (target.classList.contains('js-btn-cart-item-remove')) {
        e.preventDefault();
        var cartItemDOMElement = target.closest('.js-cart-item');
        var productID = cartItemDOMElement.getAttribute('data-product-id');
        deleteCartItem(productID);
      }

      if (target.classList.contains('js-btn-product-increase-quantity')) {
        e.preventDefault();

        var _cartItemDOMElement = target.closest('.js-cart-item');

        var _productID = _cartItemDOMElement.getAttribute('data-product-id');

        increaseQuantity(_productID);
      }

      if (target.classList.contains('js-btn-product-decrease-quantity')) {
        e.preventDefault();

        var _cartItemDOMElement2 = target.closest('.js-cart-item');

        var _productID2 = _cartItemDOMElement2.getAttribute('data-product-id');

        decreaseQuantity(_productID2);
      }
    });
  };

  carInit();
})();

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var forms = document.querySelectorAll('.form-send');

  if (forms.length === 0) {
    return;
  }

  var serialize = function serialize() {
    var items = document.querySelectorAll('input, select, textarea');
    var str = '';

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var name = item.name;
      var value = item.value;
      var separator = i === 0 ? '' : '&';

      if (value !== 'Поиск' && name !== 's') {
        str += separator + name + '=' + value;
      }
    }

    return str;
  };

  var formSend = function formSend(form) {
    var data = serialize(form);
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + '?action=send_mail';
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      console.log(xhr.response);
      var activePopup = document.querySelector('.popup.is-active');

      if (activePopup) {
        activePopup.classList.remove('is-active');
      }

      if (xhr.response === 'success') {
        document.querySelector('.popup-thanks').classList.add('is-active');
        document.dispatchEvent(new CustomEvent('reset-cart'));
      } else {
        document.querySelector('.popup-error').classList.add('is-active');
      }

      form.reset();
    };

    xhr.send(data);
  };

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      formSend(form);
    });
  }
})();

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var fixedHeader = function fixedHeader() {
    if (window.pageYOffset > navHead.offsetHeight) {
      header.classList.add('is-active');
      navHead.style.marginBottom = navWrap + 'px';
    } else {
      header.classList.remove('is-active');
      navHead.style.marginBottom = 0;
    }
  };

  var header = document.querySelector(".header");
  var navWrap = document.querySelector(".navbar-wrap").offsetHeight;
  var navHead = document.querySelector(".nav-head");
  document.addEventListener("DOMContentLoaded", fixedHeader);
  window.addEventListener('scroll', function () {
    fixedHeader();
  });
})();

/***/ }),

/***/ "./src/js/phoneNumber.js":
/*!*******************************!*\
  !*** ./src/js/phoneNumber.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var phoneNumberDOMElement = document.querySelector('.js-phone-number');

  if (!phoneNumberDOMElement) {
    return;
  }

  var generateNumber = function generateNumber(phoneNumberDOMElement) {
    var phoneNumberDOMElementContent = phoneNumberDOMElement.textContent;
    return phoneNumberDOMElementContent.replace(/\D/g, "");
  };

  var phoneNumberDOMElements = document.querySelectorAll('.js-phone-number');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = phoneNumberDOMElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      element.setAttribute('href', 'tel:' + generateNumber(phoneNumberDOMElement));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})();

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import './myLib';
;

(function () {
  var body = document.querySelector('body');

  var closestAttr = function closestAttr(item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);

      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  var closestItemByClass = function closestItemByClass(item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  var toggleScroll = function toggleScroll() {
    body.classList.toggle('no-scroll');
  };

  var showPopup = function showPopup(target) {
    target.classList.add('is-active');
  };

  var closePopup = function closePopup(target) {
    target.classList.remove('is-active');
  };

  body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      toggleScroll();
    }
  });
  body.addEventListener('click', function (e) {
    var target = e.target;
    var popupIsActive = document.querySelector('.popup.is-active');

    if (popupIsActive) {
      if (target.classList.contains('popup-close') || target.classList.contains('popup__inner') || target.classList.contains('page_item') || target.hasAttribute('href')) {
        var popup = closestItemByClass(target, 'popup');
        closePopup(popup);
        toggleScroll();
      }
    }
  });
  body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      toggleScroll();
    }
  });
})();

/***/ }),

/***/ "./src/js/smoothScroll.js":
/*!********************************!*\
  !*** ./src/js/smoothScroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var smoothScroll = function smoothScroll(linkAttribute) {
    var section = document.querySelector(linkAttribute); // var targetTop = section.getBoundingClientRect().top;
    // var scrollTop = window.pageYOffset;
    // var targetOffsetTop = targetTop + scrollTop;

    window.scrollTo({
      top: getOffset(section).top,
      left: 0,
      behavior: 'smooth'
    });
  };

  var closestAttr = function closestAttr(item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);

      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  var body = document.querySelector('body');
  body.addEventListener('click', function (e) {
    var target = e.target; // console.log(target);

    var linkAttribute = closestAttr(target, 'href');

    if (linkAttribute) {
      if (linkAttribute.indexOf('#', 0) !== -1 && linkAttribute.length > 1) {
        e.preventDefault();
        smoothScroll(linkAttribute);
      } else {
        return;
      }
    }
  });
})();

function getOffset(elem) {
  if (elem.getBoundingClientRect) {
    // "правильный" вариант
    return getOffsetRect(elem);
  } else {
    // пусть работает хоть как-то
    return getOffsetSum(elem);
  }
}

function getOffsetSum(elem) {
  var top = 0,
      left = 0;

  while (elem) {
    top = top + parseInt(elem.offsetTop);
    left = left + parseInt(elem.offsetLeft);
    elem = elem.offsetParent;
  }

  return {
    top: top,
    left: left
  };
}

function getOffsetRect(elem) {
  // (1)
  var box = elem.getBoundingClientRect(); // (2)

  var body = document.body;
  var docElem = document.documentElement; // (3)

  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft; // (4)

  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0; // (5)

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/vendor.scss":
/*!******************************!*\
  !*** ./src/sass/vendor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/vendor.scss ./src/sass/app.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\js\app.js */"./src/js/app.js");
__webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\sass\vendor.scss */"./src/sass/vendor.scss");
module.exports = __webpack_require__(/*! D:\notWIN\desktop\web\pizzeria\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });