document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     HAMBURGER MENU 
  ========================= */

  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });

    // Chiude menu quando clicchi un link
    const links = navMenu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  /* =========================
     POLICY MODAL SYSTEM
  ========================= */

  const modal = document.getElementById("policyModal");
  const frame = document.getElementById("policyFrame");
  const closeBtn = document.querySelector(".policy-close");
  const policyLinks = document.querySelectorAll(".open-policy");

  policyLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const page = this.getAttribute("href").replace(".html", "-modal.html");

      if (modal && frame) {
        frame.src = page;
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (modal && frame) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      frame.src = "";
      document.body.style.overflow = "auto";
    }
  }

  /* =========================
     COPYRIGHT YEAR
  ========================= */

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
