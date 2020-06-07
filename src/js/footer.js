;(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var footer = document.querySelector('.footer');
        var cartBtn = document.querySelector('.cart-btn');


        var footerPaddingTop = parseInt(getComputedStyle(footer).paddingTop);
        var cartBtnHeight = parseInt(getComputedStyle(cartBtn).height);
        var cartBtnNewPosition = cartBtnHeight / 2 + footerPaddingTop;


        var cartBtnBottomValue = parseInt(getComputedStyle(cartBtn).bottom);
        window.addEventListener('scroll', function () {
            if (window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition - cartBtnBottomValue > 0) {
                cartBtn.style.bottom = window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition + 'px';
            } else {
                cartBtn.style.bottom = cartBtnBottomValue + 'px';
            }
        });
    });
})();