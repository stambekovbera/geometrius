$(document).ready(function () {
  //ЗДЕСЬ ПРОПИСЫВАЮТСЯ СВОЙСТВА ДЛЯ СЛАЙДЕРА
  $(".bottom__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    waitForAnimate: false,
  });
  //В ПЕРЕМЕННУЮ СОХРАНЯЕТСЯ ЭЛЕМЕНТ С КЛАССОМ .burger
  const burgerBtn = document.querySelector(".burger");
  //ПРОВЕРКА НА ТО ЕСТЬ ЛИ ЭЛЕМЕНТ НА СТРАНИЦЕ С КЛАССОМ .burger
  if (burgerBtn) {
    const leftSide = document.querySelector(".left__sidebar");
    const header = document.querySelector(".header");
    //ПРИ КЛИКЕ НА ВЫШЕОПИСАННЫЙ ЭЛЕМЕНТ СРАБАТЫВАЕТ ФУНКЦИЯ, ОНА ВЫДВИГАЕТ ПАНЕЛЬ НАВИГАЦИИ НА СТРАНИЦЕ
    burgerBtn.addEventListener("click", function (e) {
      burgerBtn.classList.toggle("_active");
      leftSide.classList.toggle("_active");
      header.classList.toggle("_active");
      document.body.classList.toggle("_lock");
    });
  }
  //ФУНКЦИЯ РАБОТАЮЩАЯ ПРИ СКРОЛЛЕ СТРАНИЦЫ
  window.onscroll = function fixedHeader() {
    var headerFixed = document.querySelector(".header__inner");
    var sidebarSize = document.querySelector(".left__sidebar");
    var searchMenu = document.querySelector(".search__nav");
    //ЕСЛИ СТРАНИЦА ПРОСКРОЛИЛАСЬ ТО ХЕДЕР УМЕНЬШИТСЯ В РАЗМЕРЕ И СТАНЕТ ВИСЯЧИМ
    if (window.pageYOffset > 1) {
      headerFixed.classList.add("_fixed");
      sidebarSize.classList.add("_sizing");
      searchMenu.classList.add("_sizing");
    }
    //В ИНОМ СЛУЧАЕ ХЕДЕР БУДЕТ ВЫГЛЯДЕТЬ ОБЫЧНО
    else {
      headerFixed.classList.remove("_fixed");
      sidebarSize.classList.remove("_sizing");
      searchMenu.classList.remove("_sizing");
    }
  };
});
