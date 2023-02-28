const menuItems = document.querySelectorAll(".menuItem")
const activeShow = document.querySelector('.offcanvas-end')
const backdropShow = document.getElementsByClassName("offcanvas-backdrop")
const bodyStyle = document.querySelector('body')


// burger

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

// (function () {
//     let current = location.pathname.split('/')[1];
//     if (current !== '');
//     const menuItems = document.querySelectorAll('.menuItem a');
//     for (let i = 0 ; i < menuItems.length; i++) {
//         if (menuItems[i].getAttribute("href").includes(current) !== -1) {
//             menuItems[i].className += "active";
//         }
//     }
// })();


// (function () {
//     let current = location.pathname.split('/')[1];
//     if (current !== '');
//     const menuItems = document.querySelectorAll('.menuItem a');
//     for (let i = 0 ; i < menuItems.length; i++) {
//         if (menuItems[i].getAttribute("href").includes(current) !== -1) {
//             menuItems[i].className += "active";
//         }
//     }
// })();

// color active

// const liFirst = document.querySelector('li.menuItem:first-child')
// const liSecond = document.querySelector('li.menuItem:nth-child(2)')
// const liThird = document.querySelector('li.menuItem:nth-child(3)')
// const liLast = document.querySelector('li.menuItem:last-child')
//
//
// const activeThird = () => {
//     liLast.classList.remove('active');
//     liThird.classList.add('active');
//
// }
// const activeLast = () => {
//     liThird.classList.remove('active');
//     liLast.classList.add('active');
//
// }
//
// liThird.addEventListener('click', activeThird)
// liLast.addEventListener('click', activeLast)

//color active
const  menuItems1 = document.querySelector('.one')
const  menuItems2 = document.querySelector('.two')
const  menuItems3 = document.querySelector('.three')
const  menuItems4 = document.querySelector('.four')

const observerActive = () => {
    for (let i = 0; i < menuItems.length; i++) {
        (menuItems[i].classList.remove("active"))
        console.log(menuItems[i])

        let adres = location.href;
        let adress = adres.replace("https://mabb44.netlify.app/", "");

        if (adress === "index.html" || adress === "" ) {
            menuItems1.classList.add("active")
        } else if (adress === "all-entries.html") {
            menuItems2.classList.add("active")
        } else if (adress === "index.html#about") {
            menuItems3.classList.add("active")
        } else if (adress === "index.html#contact") {
            menuItems4.classList.add("active")
        }
    }

}
setInterval(observerActive, 1200);
