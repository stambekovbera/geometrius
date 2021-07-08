$(document).ready(function () {
  const burgerBtn = document.querySelector(".burger");

  if (burgerBtn) {
    const leftSide = document.querySelector(".left__sidebar");
    const header = document.querySelector(".header");
    burgerBtn.addEventListener("click", function (e) {
      burgerBtn.classList.toggle("_active");
      leftSide.classList.toggle("_active");
      header.classList.toggle("_active");
      document.body.classList.toggle("_lock");
    });
  }

  window.onscroll = function fixedHeader() {
    var headerFixed = document.querySelector(".header__inner");
    var sidebarSize = document.querySelector(".left__sidebar");
    var navPanel = document.querySelector(".row__nav");
    var searchMenu = document.querySelector(".search__nav");
    if (window.pageYOffset > 1) {
      headerFixed.classList.add("_fixed");
      sidebarSize.classList.add("_sizing");
      navPanel.classList.add("_lowHead");
      searchMenu.classList.add("_sizing");
    } else {
      headerFixed.classList.remove("_fixed");
      sidebarSize.classList.remove("_sizing");
      navPanel.classList.remove("_lowHead");
      searchMenu.classList.remove("_sizing");
    }
  };
});
