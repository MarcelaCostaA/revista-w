const hamburguer = document.querySelector(".nav__hamburguer");
const navMenu = document.querySelector(".nav__menu");
const opacity = document.querySelector(".nav__opacidade")
hamburguer.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    opacity.classList.toggle("active");
}