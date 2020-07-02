// import './myLib';

;(function () {

    var body = document.querySelector('body');
    var closestAttr = function (item, attr) {
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
    var closestItemByClass = function (item, className) {
        var node = item;
        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };
    var toggleScroll = function () {
        body.classList.toggle('no-scroll');
    };

    var showPopup = function (target) {
        target.classList.add('is-active');
    };
    var closePopup = function (target) {
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
            if (target.classList.contains('popup-close') ||
                target.classList.contains('popup__inner') || target.classList.contains('page_item')||target.hasAttribute('href')) {
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