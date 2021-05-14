const hamMenu = document.getElementById("mobile-btn");
const mobBtnOpen = document.getElementById("mobile-btn-ham");
const mobBtnClose = document.getElementById("mobile-btn-close");

const nav = document.querySelector("nav");
const submenu = document.querySelectorAll(".submenu");

const toggleMenu = (close, open) => {
  open.classList.toggle("close");
  close.classList.toggle("open");
};

const showMenu = (handle, nav) => {
  handle.addEventListener("click", (evt) => {
    toggleMenu(mobBtnClose, mobBtnOpen);
    nav.classList.toggle("fold");
  });
};

const showSubMenu = (items) => {
  items.forEach((item) => {
    const parent = item.parentElement;
    const arrowUp = parent.querySelector("img");

    parent.addEventListener("click", (evt) => {
      item.classList.toggle("fold");
      arrowUp.classList.toggle("rotate");
    });
  });
};

showSubMenu(submenu);

showMenu(hamMenu, nav);
