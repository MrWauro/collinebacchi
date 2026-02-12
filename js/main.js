document.addEventListener("DOMContentLoaded", function() {

  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle && navMenu) {

    toggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });

    // Chiude menu quando clicchi un link
    const links = navMenu.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ANNO AUTOMATICO
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
