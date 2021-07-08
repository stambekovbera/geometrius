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
var inputAngle = document.getElementById("angle");
inputA.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var angle = Number(document.getElementById("angle").value);
  var result = a * Math.sqrt(2 + 2 * Math.cos((angle * Math.PI) / 180));
  document.getElementById("res").value = result.toFixed(3) + " (см)";
};
inputAngle.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var angle = Number(document.getElementById("angle").value);
  var result = a * Math.sqrt(2 + 2 * Math.cos((angle * Math.PI) / 180));
  document.getElementById("res").value = result.toFixed(3) + " (см)";
};
