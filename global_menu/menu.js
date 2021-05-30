const mainMobileMenu = document.querySelector(".mainMobileMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMobileMenu.style.display = "flex";
  mainMobileMenu.style.top = "0";
}

function close() {
  mainMobileMenu.style.top = "-100%";
}
