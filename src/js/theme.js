import lazySizes from 'lazysizes';
lazySizes.cfg.lazyClass = 'lazy';
import {Dropdown} from "bootstrap";

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
});


const menuItems = document.querySelectorAll(".menuItem")
const activeShow = document.querySelector('.offcanvas-end')
const backdropShow = document.getElementsByClassName("offcanvas-backdrop")
const bodyStyle = document.querySelector('body')

//color active
const menuItems1 = document.querySelector('.one')
const menuItems2 = document.querySelector('.two')
const menuItems3 = document.querySelector('.three')
const menuItems4 = document.querySelector('.four')

//burger

const handle = () => {
    if (activeShow.classList.contains("show") && backdropShow[0].classList.contains("show")) {
        activeShow.classList.remove("show")
        backdropShow[0].classList.remove("show")
        bodyStyle.style.overflow = 'auto'
    }
}

for (const elementA of menuItems) {
    elementA.addEventListener("click", handle);
}
const observerActive = () => {
    for (let i = 0; i < menuItems.length; i++) {
        (menuItems[i].classList.remove("active"))
        console.log(menuItems[i])
    }
    setTimeout(() => {
        let locationObject = location.href;
        let adressSearch = locationObject.replace("https://magdalenarosko.pl/", "");

        if (adressSearch === "index.html" || adressSearch === "") {
            menuItems1.classList.add("active")
        } else if (adressSearch === "all-entries.html") {
            menuItems2.classList.add("active")
        } else if (adressSearch === "index.html#about") {
            menuItems3.classList.add("active")
        } else if (adressSearch === "index.html#contact") {
            menuItems4.classList.add("active")
        }
    }, 1200)
}

document.addEventListener("DOMContentLoaded", (event) => {
    observerActive()
});
menuItems3.addEventListener('click', observerActive)
menuItems4.addEventListener('click', observerActive)

