// const menuItems = document.querySelectorAll(".menuItem")
// const activeShow = document.querySelector('.offcanvas-end')
// const backdropShow = document.getElementsByClassName("offcanvas-backdrop")
// const bodyStyle = document.querySelector('body')


// burger
//
// const handle = () => {
//     if (activeShow.classList.contains("show") && backdropShow[0].classList.contains("show")) {
//         activeShow.classList.remove("show")
//         backdropShow[0].classList.remove("show")
//         bodyStyle.style.overflow = 'auto'
//     }
// }
//
// for (const elementA of menuItems) {
//     elementA.addEventListener("click", handle);
// }
//
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
//         let adres = location.href;
//         let adress = adres.replace("https://magdalenarosko.pl/", "");
//         // let adress = adres.replace("http://localhost:9000/", "");
//
//         if (adress === "index.html" || adress === "") {
//             menuItems1.classList.add("active")
//         } else if (adress === "all-entries.html") {
//             menuItems2.classList.add("active")
//         } else if (adress === "index.html#about") {
//             menuItems3.classList.add("active")
//         } else if (adress === "index.html#contact") {
//             menuItems4.classList.add("active")
//         }
//     }, 1200)
// }
//
// document.addEventListener("DOMContentLoaded", (event) => {
//     observerActive()
// });
// menuItems3.addEventListener('click', observerActive)
// menuItems4.addEventListener('click', observerActive)
