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
    var calcPanel = document.querySelector(".content__calc");
    var searchMenu = document.querySelector(".search__nav");
    if (window.pageYOffset > 1) {
      headerFixed.classList.add("_fixed");
      sidebarSize.classList.add("_sizing");
      searchMenu.classList.add("_sizing");
      calcPanel.classList.add("_lowHead");
    } else {
      headerFixed.classList.remove("_fixed");
      sidebarSize.classList.remove("_sizing");
      searchMenu.classList.remove("_sizing");
      calcPanel.classList.remove("_lowHead");
    }
  };
});
