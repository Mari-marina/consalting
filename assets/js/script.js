const button = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const curtain = document.querySelector('.header__list');

button.addEventListener('click', function () {
  menu.classList.toggle('active');
});

button.addEventListener('click', function () {
  button.classList.toggle('burger_active');
});

curtain.addEventListener('click', function () {
  menu.classList.toggle('active');
  button.classList.toggle('burger_active');
});



let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const goTop = document.querySelector(".go_top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    goTop.style.opacity = 1;
  } else {
    goTop.style.opacity = 0;
  }
});
