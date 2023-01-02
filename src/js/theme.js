import lazySizes from 'lazysizes';
lazySizes.cfg.lazyClass = 'lazy';
import {Dropdown} from "bootstrap";

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
});
//
// window.lazySizesConfig = window.lazySizesConfig || {};
// //page is optimized for fast onload event
// lazySizesConfig.loadMode = 1;
// Object.assign(lazySizes.cfg, {
//     loadMode: 1
// });
//
// $(document).ready(() => {
//     lazySizes.cfg.loadMode = 1;
//     Object.assign(lazySizes.cfg, {
//         loadMode: 1
//     });
//
//
//     document.addEventListener('lazyloaded', function (e) {
//         $(e.target).parent().addClass('rc--lazyload');
//     });
// //not work
//     window.addEventListener('load', function () {
//         lazySizes.cfg.loadMode = 1;
//     });
// import {
//     Navigation,
//     Pagination,
//     Swiper
// } from 'swiper';
//
// var swiper = new Swiper(".swiper-how", {
//     slidesPerView: 1,
//     spaceBetween: 2,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 6,
//             spaceBetween: 32,
//         },
//     },
// });
//
