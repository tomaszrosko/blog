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

// //color active
// const menuItems1 = document.querySelector('.one')
// const menuItems2 = document.querySelector('.two')
// const menuItems3 = document.querySelector('.three')
// const menuItems4 = document.querySelector('.four')
//
// const observerActive = () => {
//     for (let i = 0; i < menuItems.length; i++) {
//         (menuItems[i].classList.remove("active"))
//         console.log(menuItems[i])
//     }
//     setTimeout(() => {
//     let adres = location.href;
//     // let adress = adres.replace("https://mabb44.netlify.app/", "");
//     let adress = adres.replace("http://localhost:9000/", "");
//
//     if (adress === "index.html" || adress === "") {
//         menuItems1.classList.add("active")
//     } else if (adress === "all-entries.html") {
//         menuItems2.classList.add("active")
//     } else if (adress === "index.html#about") {
//         menuItems3.classList.add("active")
//     } else if (adress === "index.html#contact") {
//         menuItems4.classList.add("active")
//     }
//     }, 1200)
// }
//
// document.addEventListener("DOMContentLoaded", (event) => {
//     observerActive()
// });
// menuItems3.addEventListener('click', observerActive)
// menuItems4.addEventListener('click', observerActive)
