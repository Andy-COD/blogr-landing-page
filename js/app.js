const dropdown = document.querySelectorAll(".dropbtn");
// const arrow = document.querySelectorAll(".arrow");
const icon = document.querySelector(".mobile-menu");

icon.addEventListener("click", () => {
    let img = document.querySelector("#hamburger");
    let menus = document.querySelector(".mobile-menus");
    if(menus.classList.contains("display")) {
        menus.classList.remove("display");
        img.setAttribute("src", "/images/icon-close.svg");
    }
    else {
        menus.classList.add("display");
        img.setAttribute("src", "/images/icon-hamburger.svg");
    }
});

dropdown.forEach(item => {
    item.addEventListener("click", (e) => {
        let content = e.target.nextElementSibling;
        content.classList.toggle("show-links");
    });
});
