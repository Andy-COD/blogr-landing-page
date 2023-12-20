const dropdown = document.querySelectorAll(".dropbtn");
const icon = document.querySelector(".mobile-menu");
const dropDownContent = document.querySelectorAll(".dropdown-content");
const content = document.querySelectorAll(".dropdown");

content.forEach((item) => {
  item.addEventListener("click", (e) => {
    const arrow = e.target.nextElementSibling;
    let key = e.target.textContent;
    let rotateUp = 0;
    let rotateDown = 0;

    switch (key) {
      case "Product":
        if (!document.querySelector(".product").classList.contains("show")) {
            document.querySelector(".product").classList.add("show");
            arrow.style.transform = `rotate(${rotateUp + 180}deg)`
        }else {
            document.querySelector(".product").classList.remove("show")
            arrow.style.transform = `rotate(${rotateDown - 1}deg)`
        }
        break;
      case "Company":
        if (!document.querySelector(".company").classList.contains("show")) {
            document.querySelector(".company").classList.add("show");
            arrow.style.transform = `rotate(${rotateUp + 180}deg)`
        }else {
            document.querySelector(".company").classList.remove("show")
            arrow.style.transform = `rotate(${rotateDown - 1}deg)`
        }
        break;
      case "Connect":
        if (!document.querySelector(".connect").classList.contains("show")) {
            document.querySelector(".connect").classList.add("show");
            arrow.style.transform = `rotate(${rotateUp + 180}deg)`
        }else {
            document.querySelector(".connect").classList.remove("show")
            arrow.style.transform = `rotate(${rotateDown - 1}deg)`
        }
        break;
      default:
        null;
    }
  });
});

// Hambuger animation
icon.addEventListener("click", () => {
  let img = document.querySelector("#hamburger");
  let menus = document.querySelector(".mobile-menus");
  if (menus.classList.contains("display")) {
    menus.classList.remove("display");
    img.setAttribute("src", "/images/icon-close.svg");
  } else {
    menus.classList.add("display");
    img.setAttribute("src", "/images/icon-hamburger.svg");
  }
});

// show dropdown and rotate arrow
// dropdown.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // let content = e.target.nextElementSibling.nextElementSibling;
//     // let arrow = e.target.nextElementSibling;
//     // let rotateUp = 0;
//     // let rotateDown = 0;
//     // if(!content.classList.contains('show-links')) {
//     //     content.classList.add('show-links')
//     //     arrow.style.transform = `rotate(${rotateUp + 180}deg)`
//     // }else {
//     //     content.classList.remove('show-links');
//     //     arrow.style.transform = `rotate(${rotateDown - 1}deg)`
//     // }

//     console.log(e.target.nextElementSibling.nextElementSibling);
//   });
// });
// CLose all dropdowns on window click
window.addEventListener("mouseup", (e) => {
  if (
    !e.target.classList.contains("dropdown") &&
    !e.target.parentNode.classList.contains("dropdown")
  ) {
    dropDownContent.forEach((item) => {
      if (item.classList.contains("show-links")) {
        item.classList.remove("show-links");
      }
    });
  }
});
