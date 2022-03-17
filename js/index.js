const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

const largeScreen = window.matchMedia("(min-width: 800px)").matches;

if (largeScreen) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open-partial");
  });
} else {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.body.classList.remove("nav-open-partial");
  });
});
