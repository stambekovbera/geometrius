// ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ВВОДА ДАННЫХ, ЭТА ФУНКЦИЯ ВЕШАЕТСЯ В HTML ДОКУМЕНТА НА НУЖНОЕ ПОЛЕ ВВОДЕ, ТО ЕСТЬ НА НУЖНЫЙ ТЕГ INPUT
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
// В ПЕРЕМЕННЫЕ СОХРАНЯЕМ ЭЛЕМЕНТ INPUT ИЗ DOM ДЕРЕВА ПО ID
var inputB = document.getElementById("b");
var inputC = document.getElementById("c");
var inputH = document.getElementById("h");
// ПРИ ИЗМЕНЕНИИ В INPUT СРАБАТЫВАЕТ ФУНКЦИЯ КОТОРАЯ И ЗАНИМАЕТСЯ ВЫЧИСЛЕНИЕМ
inputB.oninput = function square() {
  // В ПЕРЕМЕННЫЕ СОХРАНЯЕМ ЗНАЧЕНИЯ ИЗ ПОЛЯ INPUT
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var h = Number(document.getElementById("h").value);
  // В ПЕРЕМЕННУЮ RESULT СОХРАНЯЕТСЯ КОНЕЧНЫЙ РЕЗУЛЬТАТ ВЫЧИСЛЕНИЯ
  var result = 0.5 * (b + c) * h;
  // С ПОМОЩЬЮ ID ОБРАЩАЕМСЯ К INPUT В КОТОРОМ ВЫВОДИТСЯ РЕЗУЛЬТАТ ВЫЧИСЛЕНИЯ СОБСТВЕННО УЖЕ НА САЙТЕ
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
// ПРИ ИЗМЕНЕНИИ В INPUT СРАБАТЫВАЕТ ФУНКЦИЯ КОТОРАЯ И ЗАНИМАЕТСЯ ВЫЧИСЛЕНИЕМ
inputC.oninput = function square() {
  // В ПЕРЕМЕННЫЕ СОХРАНЯЕМ ЗНАЧЕНИЯ ИЗ ПОЛЯ INPUT
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var h = Number(document.getElementById("h").value);
  // В ПЕРЕМЕННУЮ RESULT СОХРАНЯЕТСЯ КОНЕЧНЫЙ РЕЗУЛЬТАТ ВЫЧИСЛЕНИЯ
  var result = 0.5 * (b + c) * h;
  // С ПОМОЩЬЮ ID ОБРАЩАЕМСЯ К INPUT В КОТОРОМ ВЫВОДИТСЯ РЕЗУЛЬТАТ ВЫЧИСЛЕНИЯ СОБСТВЕННО УЖЕ НА САЙТЕ
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
// ТУТ ВСЕ ТАКЖЕ КАК И В ФУНКЦИЯХ СВЕРХУ
inputH.oninput = function square() {
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var h = Number(document.getElementById("h").value);
  var result = 0.5 * (b + c) * h;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
