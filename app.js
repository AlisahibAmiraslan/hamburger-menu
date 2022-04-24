const btn = document.querySelector(".btn");
let menu = document.querySelector("ul");
const nav = document.querySelector("nav");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});



document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    nav.style.backgroundColor = '#eee';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});