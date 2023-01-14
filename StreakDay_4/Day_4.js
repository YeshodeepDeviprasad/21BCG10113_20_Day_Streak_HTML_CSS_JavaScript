document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
    if (age >= 16) {
      result.innerHTML = "You are legally allowed to drive.";
    } else {
      result.innerHTML = "You are not legally allowed to drive.";
    }
  });