;(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const footer = document.querySelector('.footer');
        let cartBtn = document.querySelector('.cart-btn');
        if (!cartBtn) {
            return;
        }
        let footerPaddingTop;
        let cartBtnHeight;
        if (window.matchMedia('(max-widht: 575px)').matches) {
            footerPaddingTop = parseInt(getComputedStyle(footer).paddingTop);
            cartBtnHeight = parseInt(getComputedStyle(cartBtn).height);
        } else {
            footerPaddingTop = parseInt(getComputedStyle(footer).paddingTop);
            cartBtnHeight = parseInt(getComputedStyle(cartBtn).height);
        }
        let cartBtnNewPosition = cartBtnHeight / 2 + footerPaddingTop;
        let cartBtnBottomValue = parseInt(getComputedStyle(cartBtn).bottom);
        window.addEventListener('scroll', function () {
            if (window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition - cartBtnBottomValue > 0) {
                cartBtn.style.bottom = window.innerHeight - footer.getBoundingClientRect().y - cartBtnNewPosition + 'px';
            } else {
                cartBtn.style.bottom = cartBtnBottomValue + 'px';
            }
        });
    });
})();