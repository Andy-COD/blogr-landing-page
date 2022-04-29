const dropdown = document.querySelectorAll(".dropbtn");
const icon = document.querySelector(".mobile-menu");
const dropDownContent = document.querySelectorAll('.dropdown-content');


// Hambuger animation
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
// show dropdown and rotate arrow
dropdown.forEach(item => {
    item.addEventListener("click", (e) => {
        let content = e.target.nextElementSibling.nextElementSibling;
        let arrow = e.target.nextElementSibling;
        let rotateUp = 0;
        let rotateDown = 0;
        if(!content.classList.contains('show-links')) {
            content.classList.add('show-links')
            arrow.style.transform = `rotate(${rotateUp + 180}deg)`
        }else {
            content.classList.remove('show-links');
            arrow.style.transform = `rotate(${rotateDown - 1}deg)`
        }
        
    });
});
// CLose all dropdowns on window click
window.addEventListener('mouseup', (e) => {
    if(!e.target.classList.contains("dropdown") && !e.target.parentNode.classList.contains("dropdown")) {
        dropDownContent.forEach(item => {
            if(item.classList.contains('show-links')) {
                item.classList.remove('show-links')
            }
        })
    }
})
