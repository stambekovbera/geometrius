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

var inputR = document.getElementById("r");
inputR.oninput = function square() {
  var r = Number(document.getElementById("r").value);
  var result = Math.PI * Math.pow(r, 2);
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
