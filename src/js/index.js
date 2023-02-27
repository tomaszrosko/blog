const menuItems = document.querySelectorAll(".menuItem")
const activeShow = document.querySelector('.offcanvas-end')
const backdropShow = document.getElementsByClassName("offcanvas-backdrop")
const bodyStyle = document.querySelector('body')

const handle = () => {
    if (activeShow.classList.contains("show") && backdropShow[0].classList.contains("show"))  {
        activeShow.classList.remove("show")
        backdropShow[0].classList.remove("show")
        bodyStyle.style.overflow = 'auto'

    }
}

for (const elementA of menuItems) {
    elementA.addEventListener("click", handle);
}
