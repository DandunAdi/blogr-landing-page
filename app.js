const menus = document.querySelectorAll(".navbar__dropdown");
const buttons = document.querySelectorAll(".navbar__dropdown button");

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
