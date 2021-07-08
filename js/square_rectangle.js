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
inputA.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var result = a * b;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
inputB.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var result = a * b;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
