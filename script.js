window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.addEventListener("click", function () {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      menuToggle.classList.add("active");
      checkActiveMenu(menu, menuToggle);
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style = "";
    }
  });
}

function checkActiveMenu(menu, menuToggle) {
  var menuItems = menu.querySelectorAll("li");
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style = "";
    });
  });
}

toggleMenu();