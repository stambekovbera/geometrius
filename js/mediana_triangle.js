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

var inputA = document.getElementById("a");
var inputB = document.getElementById("b");
var inputC = document.getElementById("c");

inputA.oninput = function perimetr() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  if ((a > 0) & (b > 0) & (c > 0)) {
    var resultA =
      0.5 * Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2));
    document.getElementById("res").value = resultA.toFixed(2) + " см";
    var resultB =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(c, 2) - Math.pow(b, 2));
    document.getElementById("resB").value = resultB.toFixed(2) + " см";
    var resultC =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2));
    document.getElementById("resC").value = resultC.toFixed(2) + " см";
  } else {
    document.getElementById("res").value = "Сторона";
    document.getElementById("resB").value = "должна быть";
    document.getElementById("resC").value = ">0!";
  }
};
inputB.oninput = function perimetr() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  if ((b > 0) & (c > 0) & (a > 0)) {
    var resultA =
      0.5 * Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2));
    document.getElementById("res").value = resultA.toFixed(2) + " см";
    var resultB =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(c, 2) - Math.pow(b, 2));
    document.getElementById("resB").value = resultB.toFixed(2) + " см";
    var resultC =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2));
    document.getElementById("resC").value = resultC.toFixed(2) + " см";
  } else {
    document.getElementById("res").value = "Сторона";
    document.getElementById("resB").value = "должна быть";
    document.getElementById("resC").value = ">0!";
  }
};
inputC.oninput = function perimetr() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  if ((c > 0) & (a > 0) & (b > 0)) {
    var resultA =
      0.5 * Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2));
    document.getElementById("res").value = resultA.toFixed(2) + " см";
    var resultB =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(c, 2) - Math.pow(b, 2));
    document.getElementById("resB").value = resultB.toFixed(2) + " см";
    var resultC =
      0.5 * Math.sqrt(2 * Math.pow(a, 2) + 2 * Math.pow(b, 2) - Math.pow(c, 2));
    document.getElementById("resC").value = resultC.toFixed(2) + " см";
  } else {
    document.getElementById("res").value = "Сторона";
    document.getElementById("resB").value = "должна быть";
    document.getElementById("resC").value = ">0!";
  }
};
