function Compute() {
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var y = document.getElementById("years").value;
  var year = new Date().getFullYear();
  console.log("XD");

  var i = p * ((r / 100) * y);
  document.getElementById("result").innerHTML =
    "If you deposit " +
    p +
    ",<br />" +
    "at an interest rate of " +
    r +
    ".<br />" +
    "You will receive an amount of " +
    i.toFixed(0) +
    ",<br />" +
    "in the year " +
    year +
    " <br />";
}
