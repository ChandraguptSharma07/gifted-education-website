const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (!header) return;

  if (current > 32 && current > lastScrollY) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScrollY = current;
});
