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
var inputD = document.getElementById("d");
inputA.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var d = Number(document.getElementById("d").value);
  var d1 = Math.sqrt(
    Math.pow(c, 2) + d * b - (d * (Math.pow(c, 2) - Math.pow(a, 2))) / (d - b)
  );
  document.getElementById("d1").value = d1.toFixed(2) + " (см)";
  var d2 = Math.sqrt(
    Math.pow(a, 2) + d * b - (d * (Math.pow(a, 2) - Math.pow(c, 2))) / (d - b)
  );
  document.getElementById("d2").value = d2.toFixed(2) + " (см)";
};

inputB.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var d = Number(document.getElementById("d").value);
  var d1 = Math.sqrt(
    Math.pow(c, 2) + d * b - (d * (Math.pow(c, 2) - Math.pow(a, 2))) / (d - b)
  );
  document.getElementById("d1").value = d1.toFixed(2) + " (см)";
  var d2 = Math.sqrt(
    Math.pow(a, 2) + d * b - (d * (Math.pow(a, 2) - Math.pow(c, 2))) / (d - b)
  );
  document.getElementById("d2").value = d2.toFixed(2) + " (см)";
};

inputC.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var d = Number(document.getElementById("d").value);
  var d1 = Math.sqrt(
    Math.pow(c, 2) + d * b - (d * (Math.pow(c, 2) - Math.pow(a, 2))) / (d - b)
  );
  document.getElementById("d1").value = d1.toFixed(2) + " (см)";
  var d2 = Math.sqrt(
    Math.pow(a, 2) + d * b - (d * (Math.pow(a, 2) - Math.pow(c, 2))) / (d - b)
  );
  document.getElementById("d2").value = d2.toFixed(2) + " (см)";
};

inputD.oninput = function square() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);
  var d = Number(document.getElementById("d").value);
  var d1 = Math.sqrt(
    Math.pow(c, 2) + d * b - (d * (Math.pow(c, 2) - Math.pow(a, 2))) / (d - b)
  );
  document.getElementById("d1").value = d1.toFixed(2) + " (см)";
  var d2 = Math.sqrt(
    Math.pow(a, 2) + d * b - (d * (Math.pow(a, 2) - Math.pow(c, 2))) / (d - b)
  );
  document.getElementById("d2").value = d2.toFixed(2) + " (см)";
};
