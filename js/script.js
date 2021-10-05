const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
