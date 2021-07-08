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

var inputB = document.getElementById("b");
var inputH = document.getElementById("h");
inputB.oninput = function square() {
  var b = Number(document.getElementById("b").value);
  var h = Number(document.getElementById("h").value);
  var result = 0.5 * b * h;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
inputH.oninput = function square() {
  var b = Number(document.getElementById("b").value);
  var h = Number(document.getElementById("h").value);
  var result = 0.5 * b * h;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
