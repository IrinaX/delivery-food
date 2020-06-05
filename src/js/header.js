(function () {
    var fixedHeader = function () {
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
}());