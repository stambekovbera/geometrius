//ВЕШАЕТСЯ ФУНКЦИЯ КОТОРАЯ ПРИ ВВОДЕ ДАННЫХ В ПОЛЕ INPUT СРАБАТЫВАЕТ
document.getElementById("search__input").oninput = function () {
  //ДАННЫЕ КОТОРЫЕ ВВЕЛИ СОХРАНЯЕТСЯ В ПЕРЕМЕННОЙ VAL
  let val = this.value.trim();
  //В ПЕРЕМЕННЫЕ СОХРАНЯЕМ ЭЛЕМЕНТЫ DIV И NAV ПО НАЗВАНИЮ КЛАССА ЭЛЕМЕНТА
  let searchItem = document.querySelectorAll(".search__nav-menu-link");
  var searchPanel = document.querySelector(".search__nav");
  //ПРОВЕРКА НА ТО ЧТО ПОЛЕ ВВОДА НЕ ПУСТОЕ
  if (val != "") {
    searchPanel.classList.add("unhide");
    //ПРОХОДИТ ПО ГОТОВЫМ ЭЛЕМЕНТАМ LINK
    searchItem.forEach(function (element) {
      //ПРОВЕРКА ЕСЛИ ЭЛЕМЕНТ НЕ СОВПАДАЕТ С ЭЛЕМЕНТОМ КОТОРЫЙ ИЩЕМ, ТО ОН СКРЫВАЕТСЯ
      if (element.innerText.search(RegExp(val, "gi")) == -1) {
        element.parentNode.classList.add("hide");
        element.innerHTML = element.innerText;
      }
      //В ИНОМ СЛУЧАЕ ОН СТАНОВИТСЯ ВИДНЫМ
      else {
        element.parentNode.classList.remove("hide");
        let str = element.innerText;
        element.innerHTML = insertMark(
          str,
          element.innerText.search(RegExp(val, "gi")),
          val.length
        );
      }
    });
  }
  //ЕСЛИ ПУСТОЕ ТО СКРЫВАЕТСЯ БЛОК С ГОТОВЫМИ ЭЛЕМЕНТАМИ LINK
  else {
    searchPanel.classList.remove("unhide");
    searchItem.forEach(function (element) {
      element.parentNode.classList.remove("hide");
      element.innerHTML = element.innerText;
    });
  }
  //КОГДА НЕТ ФОКУСИРОВКИ НА ПОЛЕ INPUT, ТО СРАБАТЫВАЕТ ФУНКЦИЯ КОТОРОЕ ОЧИЩАЕТ ЭТО ПОЛЕ
  document.getElementById("search__input").onblur = function () {
    document.getElementById("search__input").value = "";
    searchPanel.classList.remove("unhide");
  };
};
//ФУНКЦИЯ ДЛЯ ПОДСВЕТКИ БУКВ ПО КОТОРЫМ НАШЛИСЬ СОВПАДЕНИЯ. ТЕГ <mark></mark> АВТОМАТИЧЕСКИ ПОДСВЕЧИВАЕТ ЭЛЕМЕНТ ВНУТРИ ЖЕЛТЫМ ЦВЕТОМ
function insertMark(string, pos, len) {
  return (
    string.slice(0, pos) +
    "<mark>" +
    string.slice(pos, pos + len) +
    "</mark>" +
    string.slice(pos + len)
  );
}
