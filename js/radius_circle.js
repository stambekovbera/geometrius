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

var inputP = document.getElementById("p");
inputP.oninput = function square() {
  var p = Number(document.getElementById("p").value);
  var result = p / (2 * Math.PI);
  document.getElementById("res").value = result.toFixed(2) + " (см)";
};
