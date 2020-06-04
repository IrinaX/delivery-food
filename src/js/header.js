(function () {
    var header = document.querySelector(".header");
    var navHead = document.querySelector(".nav-head");
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > navHead.clientHeight) {
            header.classList.add('is-active');
        } else {
            header.classList.remove('is-active');
        }
    });
}());
