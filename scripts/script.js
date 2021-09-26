const scrollElement = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  window.pageYOffset > 300
    ? (scrollElement.style.display = "block")
    : (scrollElement.style.display = "none");
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});

sr.reveal(
  `
nav,
.main-container,
.service-container,
.milestones-container,
.about-us-container,
.questions-container
,`,
  {
    interval: 200,
  }
);

const narbarToggle = document.querySelector(".toggle");

navbarToggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  links.classList.toggle("nav-toggle");
});
