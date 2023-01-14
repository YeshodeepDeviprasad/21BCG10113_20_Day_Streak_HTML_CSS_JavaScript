function generatePrimes() {
    var input = document.getElementById("inputNumber").value;
    var output = document.getElementById("output");
    var primes = "";
    for (var i = 2; i <= input; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes += i + " ";
      }
    }
    output.innerHTML = "Prime numbers until " + input + ": " + primes;
  }