// import Swiper from 'swiper';
//
// window.Swiper = Swiper;
//
// Swiper.instances = {};
//
// let swipers = document.getElementsByClassName('swiper-container');
// for (let swiper of swipers) {
//     let preset = swiper.dataset.preset;
//     let options;
//     switch (preset) {
//         case 'products-swiper':
//             options = {
//                 loop: false,
//                 breakpoints: {
//                     0: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1440: {
//                         slidesPerView: 4,
//                     },
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }
//             };
//             break;
//         case 'salads-swiper':
//             options = {
//                 loop: false,
//                 breakpoints: {
//                     0: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1440: {
//                         slidesPerView: 4,
//                     },
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }
//             };
//             break;
//         case 'deserts-swiper':
//             options = {
//                 loop: false,
//                 breakpoints: {
//                     0: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1440: {
//                         slidesPerView: 4,
//                     },
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }
//             };
//             break;
//         case 'reviews-swiper':
//             options = {
//                 loop: false,
//                 breakpoints: {
//                     0: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1440: {
//                         slidesPerView: 3,
//                     },
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 }
//             };
//             break;
//         default:
//             let slidesPerView = parseInt(swiper.dataset.slidesperview || 1);
//             let spaceBetween = parseInt(swiper.dataset.spacebetween || 0);
//             let nextButton = swiper.dataset.next;
//             let prevButton = swiper.dataset.prev;
//             let loop = swiper.dataset.loop !== 'false';
//             let autoplay = swiper.dataset.autoplay;
//             let paginationEl = swiper.dataset.paginationel;
//             let paginationType = swiper.dataset.paginationtype || 'bullets';
//             let direction = swiper.dataset.direction || 'horizontal';
//             let name = swiper.dataset.name;
//             let allowTouchMove = swiper.dataset.allowtouchmove !== 'false';
//             let mousewheel = swiper.dataset.mousewheel ? {invert: false, releaseOnEdges: false} : false;
//             options = {
//                 observer: true,
//                 observeParents: true,
//                 observeSlideChildren: true,
//                 slidesPerView: slidesPerView,
//                 spaceBetween: spaceBetween,
//                 allowTouchMove: allowTouchMove,
//                 direction: direction,
//                 mousewheel: mousewheel,
//                 loop: loop,
//                 ...(direction === 'vertical' ? {
//                     mousewheelReleaseOnEdges: true,
//                 } : {}),
//                 ...(autoplay ? {
//                     autoplay: {
//                         delay: autoplay,
//                         disableOnInteraction: true,
//                     }
//                 } : {}),
//                 navigation: {
//                     nextEl: nextButton,
//                     prevEl: prevButton,
//                 },
//                 pagination: {
//                     el: paginationEl,
//                     type: paginationType,
//                     clickable: true
//                 }
//             };
//             break;
//     }
//
//     // console.log(options);
//
//     let sw = new Swiper(swiper, options);
//
//     if (name) {
//         Swiper.instances[name] = sw;
//     }
// }
//
// for (let swiper of swipers) {
//     let name = swiper.dataset.name;
//     let controlSwiper = swiper.dataset.controlswiper;
//
//     if (controlSwiper) {
//         Swiper.instances[name].controller.control = Swiper.instances[controlSwiper];
//     }
// }