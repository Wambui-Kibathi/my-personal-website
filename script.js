function toggleMenu() {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");

   menu.classList.toggle("menu-links-open");
   icon.classList.toggle("open");
}  