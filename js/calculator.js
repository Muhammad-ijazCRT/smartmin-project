window.onload = calcthis();

function calcthis() {
  var depo1 = document.getElementById("money").value;
  var price = document.getElementById("btcval").value;

  var convertprices = price * depo1;
  var depo = convertprices.toFixed(2);

  if (depo < 0.001) {
  } else if (depo1 < 0.105) {
    var n1 = (depo / 100) * 8 * 7.8;
    var m1 = n1.toFixed(2);
    var n2 = (depo / 100) * 8;
    var m2 = n2.toFixed(2);

    var n5 = (depo / 100) * 8 * 20;
    var m5 = n5.toFixed(2);

    var dollar = 1 / price;
    var btcamount = dollar * m2;
    var btcamountm5 = dollar * m5;

    var amountout = btcamount.toFixed(8);
    var amountoutm5 = btcamountm5.toFixed(8);

    document.getElementById("inpvar3").innerHTML = m1 + " ";
    document.getElementById("inpvar5").innerHTML = +amountout + " ";
    document.getElementById("inpvar6").innerHTML = "8.0%";
    document.getElementById("inpvar7").innerHTML = +amountoutm5 + " ";
    var porsent = "8";
  } else if (depo1 < 0.505) {
    var n1 = (depo / 100) * 10 * 7.8;
    var m1 = n1.toFixed(2);
    var n2 = (depo / 100) * 10;
    var m2 = n2.toFixed(2);

    var n5 = (depo / 100) * 10 * 20;
    var m5 = n5.toFixed(2);

    var dollar = 1 / price;
    var btcamount = dollar * m2;
    var btcamountm5 = dollar * m5;

    var amountout = btcamount.toFixed(8);
    var amountoutm5 = btcamountm5.toFixed(8);

    document.getElementById("inpvar3").innerHTML = m1 + " ";
    document.getElementById("inpvar5").innerHTML = +amountout + " ";
    document.getElementById("inpvar6").innerHTML = "10.0% ";
    document.getElementById("inpvar7").innerHTML = +amountoutm5 + " ";

    var porsent = "10";
  } else if (depo1 < 10.0) {
    var n1 = (depo / 100) * 15 * 6.73;
    var m1 = n1.toFixed(2);
    var n2 = (depo / 100) * 15;
    var m2 = n2.toFixed(2);
    var n5 = (depo / 100) * 15 * 20;
    var m5 = n5.toFixed(2);

    var dollar = 1 / price;
    var btcamount = dollar * m2;
    var btcamountm5 = dollar * m5;

    var amountout = btcamount.toFixed(8);
    var amountoutm5 = btcamountm5.toFixed(8);

    document.getElementById("inpvar3").innerHTML = m1 + " ";
    document.getElementById("inpvar5").innerHTML = +amountout + " ";
    document.getElementById("inpvar6").innerHTML = "15.0% ";
    document.getElementById("inpvar7").innerHTML = +amountoutm5 + " ";
    var porsent = "15";
  } else {
  }
}
