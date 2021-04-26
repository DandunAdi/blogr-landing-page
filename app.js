const desktopMenus = document.querySelectorAll(".navbar__dropdown");
const desktopButtons = document.querySelectorAll(".navbar__dropdown button");
const mobileMenus = document.querySelectorAll(".mobile__nav__dropdown");
const mobileButtons = document.querySelectorAll(
  ".mobile__nav__dropdown button"
);

const hamburgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile");

const addMenuHandler = (buttons, menus) => {
  for (var i in buttons) {
    buttons[i].onclick = function () {
      const menuClasses = this.parentElement.classList;
      if (menuClasses.contains("open")) {
        menuClasses.remove("open");
      } else {
        menus.forEach((menu) => {
          menu.classList.remove("open");
        });
        menuClasses.add("open");
      }
    };
  }
};

hamburgerBtn.onclick = function () {
  hamburgerBtn.classList.toggle("close");
  mobileNav.classList.toggle("hide");
};

addMenuHandler(desktopButtons, desktopMenus);
addMenuHandler(mobileButtons, mobileMenus);
