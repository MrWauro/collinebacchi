const elements = document.querySelectorAll('.feature, .banner');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.9s ease";
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");

  toggle.addEventListener("click", function() {
    nav.classList.toggle("active");
  });
});
