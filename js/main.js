document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  }
});

const links = navMenu.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
