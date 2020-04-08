let btnMenu = document.querySelector(".main-nav__toggle");
let siteMenu = document.querySelector(".main-nav__list");
let pageHeader = document.querySelector(".page-header");

function toggleMenu (toggle, menu, bg) {
  toggle.addEventListener('click', function() {
    menu.classList.toggle("main-nav__list--open");
    toggle.classList.toggle("main-nav__toggle--close");
    bg.classList.toggle("page-header--active");
  });
}

btnMenu.classList.toggle("main-nav__toggle--close");
siteMenu.classList.toggle("main-nav__list--open");
pageHeader.classList.toggle("page-header--active");
toggleMenu (btnMenu, siteMenu, pageHeader);