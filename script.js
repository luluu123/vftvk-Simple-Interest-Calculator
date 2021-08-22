function Compute() {
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var y = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(y);
  console.log("XD");

  if(parseInt(p) > 0){
  var i = p * ((r / 100) * y);
  document.getElementById("result").innerHTML =
    "<br />If you deposit <mark>" +
    p +
    "</mark>,<br />" +
    "at an interest rate of <mark>" +
    r +
    "%</mark>.<br />" +
    "You will receive an amount of <mark>" +
    i.toFixed(0) +
    "</mark>,<br />" +
    "in the year <mark>" +
    year +
    "</mark> <br />";
  } else {
    alert("Amount must be a positive number!");
    document.getElementById("principal").focus();
  }
}
