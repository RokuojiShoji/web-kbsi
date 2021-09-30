const sectionOne = document.querySelector(".intro");
const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar-nav");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      navbar.classList.add("navbar-scrolled");
    }
  });
},
sectionOneOptions);


sectionOneObserver.observe(sectionOne);

export default sectionOneObserver;
