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
var inputH = document.getElementById("h");
inputA.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var h = Number(document.getElementById("h").value);
  var result = a * h;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
inputH.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var h = Number(document.getElementById("h").value);
  var result = a * h;
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
