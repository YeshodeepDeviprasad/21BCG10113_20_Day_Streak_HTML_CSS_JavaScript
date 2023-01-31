function calculateFactorial() {
    let number = document.querySelector("#number").value;
    let result = factorial(number);
    document.querySelector("#output").innerHTML = `
      <p>The factorial of ${number} is ${result}.</p>
    `;
  }
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  