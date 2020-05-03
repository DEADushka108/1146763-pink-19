let btnMenu = document.querySelector(".main-nav__toggle");
let siteMenu = document.querySelector(".main-nav__list");
let pageHeader = document.querySelector(".page-header");

if (document.querySelector(".upload")) {
  let uploadForm = document.querySelector(".upload");
  let form = uploadForm.querySelector("form");
  let crop = document.getElementById("crop");
  let cropBar = document.getElementById("crop-bar");
  let fill = document.getElementById("fill");
  let fillBar = document.getElementById("fill-bar");
  let contrast = document.getElementById("contrast");
  let contrastBar = document.getElementById("contrast-bar");

  function getValue (elem, elemBar) {
    let style = getComputedStyle(elem);
    let styleBar = getComputedStyle(elemBar);
    let percent = (parseInt(style.left)/parseInt(styleBar.width)) * 100;
    return percent;
  };

  function sendRequest(evt){
    evt.preventDefault();
    var formData = new FormData(form);
    formData.append("crop", getValue(crop, cropBar));
    formData.append("fill", getValue(fill, fillBar));
    formData.append("contrast", getValue(contrast, contrastBar));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.send(formData);
  }

  function resetChar (elem) {
    elem.style.left = 0;
  }

  form.addEventListener("submit", sendRequest);
  form.addEventListener("reset", function(evt) {
  evt.preventDefault();
  resetChar(crop);
  resetChar(fill);
  resetChar(contrast);
  })
}

function toggleMenu (toggle, menu, bg) {
  toggle.addEventListener('click', function() {
    menu.classList.toggle("main-nav__list--open");
    toggle.classList.toggle("main-nav__toggle--close");
    bg.classList.toggle("page-header--active");
  });
}
btnMenu.classList.remove("main-nav__toggle--nojs");
btnMenu.classList.toggle("main-nav__toggle--close");
siteMenu.classList.toggle("main-nav__list--open");
pageHeader.classList.toggle("page-header--active");
toggleMenu (btnMenu, siteMenu, pageHeader);
