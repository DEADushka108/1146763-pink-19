let btnMenu = document.querySelector(".main-nav__toggle");
let siteMenu = document.querySelector(".main-nav__list");

function toggleMenu (toggle, menu) {
  toggle.addEventListener('click', function() {
    menu.classList.toggle("main-nav__list--open");
    toggle.classList.toggle("main-nav__toggle--close");
  });
}

// btnMenu.classList.toggle("main-nav__toggle--close");
// menu.classList.toggle("main-nav__list--open");
toggleMenu (btnMenu, siteMenu);