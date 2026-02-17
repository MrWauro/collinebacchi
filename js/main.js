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
   COOKIE CONSENT SYSTEM
========================= */

const banner = document.getElementById("cookie-banner");
const acceptAll = document.getElementById("accept-all");
const rejectAll = document.getElementById("reject-all");
const customizeBtn = document.getElementById("customize");
const settingsPanel = document.getElementById("cookie-settings");
const savePrefs = document.getElementById("save-preferences");

const analyticsCheckbox = document.getElementById("analytics-consent");
const marketingCheckbox = document.getElementById("marketing-consent");

const storedConsent = localStorage.getItem("cookieConsent");

const overlay = document.getElementById("cookie-overlay");

if (!storedConsent && banner && overlay) {
  banner.style.display = "block";
  overlay.style.display = "block";
}

function applyConsent(analytics, marketing) {

  localStorage.setItem("cookieConsent", JSON.stringify({
    analytics: analytics,
    marketing: marketing
  }));

  if (banner) banner.style.display = "none";
  if (overlay) overlay.style.display = "none";

  if (typeof gtag === "function") {
    gtag('consent', 'update', {
      'analytics_storage': analytics ? 'granted' : 'denied',
      'ad_storage': marketing ? 'granted' : 'denied',
      'ad_user_data': marketing ? 'granted' : 'denied',
      'ad_personalization': marketing ? 'granted' : 'denied'
    });
  }
}

/* Ripristina consenso salvato */
if (storedConsent) {
  const parsed = JSON.parse(storedConsent);

  if (typeof gtag === "function") {
    gtag('consent', 'update', {
      'analytics_storage': parsed.analytics ? 'granted' : 'denied',
      'ad_storage': parsed.marketing ? 'granted' : 'denied',
      'ad_user_data': parsed.marketing ? 'granted' : 'denied',
      'ad_personalization': parsed.marketing ? 'granted' : 'denied'
    });
  }
}

if (acceptAll) {
  acceptAll.addEventListener("click", function () {
    applyConsent(true, true);
  });
}

if (rejectAll) {
  rejectAll.addEventListener("click", function () {
    applyConsent(false, false);
  });
}

if (customizeBtn) {
  customizeBtn.addEventListener("click", function () {
    if (settingsPanel) settingsPanel.style.display = "flex";
  });
}

if (savePrefs) {
  savePrefs.addEventListener("click", function () {
    applyConsent(
      analyticsCheckbox ? analyticsCheckbox.checked : false,
      marketingCheckbox ? marketingCheckbox.checked : false
    );
  });
}
  
  /* =========================
     COPYRIGHT YEAR
  ========================= */

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
