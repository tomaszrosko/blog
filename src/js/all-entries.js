const  menuItems2 = document.querySelector('.two')
const menuItems = document.querySelectorAll(".menuItem")
const observerActive = () => {
    for (let i = 0; i < menuItems.length; i++) {
        (menuItems[i].classList.remove("active"))
        console.log(menuItems[i])

        setTimeout(() => {
            let adres = location.href;
            let adress = adres.replace("https://magdalenarosko.pl/", "");

            if (adress === "all-entries.html") {
                menuItems2.classList.add("active")
            }
        },1200)
    }
}
document.addEventListener("DOMContentLoaded", (event) => {
    observerActive()
});
