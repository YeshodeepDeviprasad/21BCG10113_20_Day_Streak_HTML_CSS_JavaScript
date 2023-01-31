function calculateBMI() {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let bmi = weight / (height / 100 * height / 100);
    let bmiStatus;
    if (bmi < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiStatus = "Healthy";
    } else if (bmi >= 25 && bmi < 30) {
      bmiStatus = "Moderate";
    } else {
      bmiStatus = "Unhealthy";
    }
    document.querySelector("#output").innerHTML =
      "Your BMI is " + bmi.toFixed(2) + " (" + bmiStatus + ")";
  }
  