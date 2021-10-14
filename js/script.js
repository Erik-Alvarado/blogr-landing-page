const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const innerNav = document.querySelectorAll(".dropdown");
const dropContent = document.querySelectorAll(".dropdown-content");

// EventListeners

hamBurger.addEventListener("click", hamburgerToggle);
innerNav.forEach((inner) =>
  inner.addEventListener("click", (ev) => innerToggle(ev))
);

// Functions

function innerToggle(ev) {
  let clickedItem = ev.target.parentNode;
  innerNav.forEach((inner) => {
    if (inner.isSameNode(clickedItem)) {
      if (inner.classList.contains("open")) {
        inner.classList.remove("open");
      } else {
        inner.classList.add("open");
      }
    } else {
      inner.classList.remove("open");
    }
  });
}

function hamburgerToggle() {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
