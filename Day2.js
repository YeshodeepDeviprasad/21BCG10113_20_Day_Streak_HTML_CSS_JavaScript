function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("result");
    result.innerHTML = "The result is: " + (parseFloat(num1) + parseFloat(num2));
  }