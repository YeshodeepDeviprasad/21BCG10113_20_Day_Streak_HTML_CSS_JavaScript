
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var result = document.getElementById("result");
  var chances = document.getElementById("chances");
  var remainingChances = 3;

  function guessNumber() {
    var guess = document.getElementById("guess").value;

    if (guess == secretNumber) {
      result.innerHTML = "Congratulations! You guessed the correct number!";
    } else {
      remainingChances--;
      chances.innerHTML = "You have " + remainingChances + " chances left.";
      result.innerHTML = "Sorry, that's not the correct number. Please try again.";
    }
    if (remainingChances == 0) {
      result.innerHTML = "You have used all your chances. The correct number was " + secretNumber + ".";
      document.getElementById("submit").setAttribute("disabled", true);
    }
  }


