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
var inputAngle = document.getElementById("angle");
inputA.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var angle = Number(document.getElementById("angle").value);
  var result = Math.sqrt(
    Math.pow(a, 2) +
      Math.pow(b, 2) -
      2 * a * b * Math.cos((angle * Math.PI) / 180)
  );
  document.getElementById("res").value = result.toFixed(3) + " (см)";
};
inputAngle.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var angle = Number(document.getElementById("angle").value);
  var result = Math.sqrt(
    Math.pow(a, 2) +
      Math.pow(b, 2) -
      2 * a * b * Math.cos((angle * Math.PI) / 180)
  );
  document.getElementById("res").value = result.toFixed(3) + " (см)";
};
inputB.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var angle = Number(document.getElementById("angle").value);
  var result = Math.sqrt(
    Math.pow(a, 2) +
      Math.pow(b, 2) -
      2 * a * b * Math.cos((angle * Math.PI) / 180)
  );
  document.getElementById("res").value = result.toFixed(3) + " (см)";
};
