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
  const ids = [];

  items.forEach((item, idx) => {
    const parent = item.parentElement;
    const arrowUp = parent.querySelector("img");

    //keep track of item
    ids.push(idx);

    parent.addEventListener("click", (evt) => {
      ids.filter((id) => {
        if (id !== idx) {
          items[id].classList.remove("fold");
          items[id].parentElement.querySelector("img").classList.remove("rotate");
        }
      });

      item.classList.toggle("fold");
      arrowUp.classList.toggle("rotate");
    });
  });
};

showSubMenu(submenu);
showMenu(hamMenu, nav);
