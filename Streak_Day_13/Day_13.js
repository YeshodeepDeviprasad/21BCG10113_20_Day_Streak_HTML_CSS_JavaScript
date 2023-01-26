var currentPlayer = "X";

for (var i = 1; i <= 9; i++) {
  var cell = document.getElementById("cell-" + i);
  cell.addEventListener("click", function(event) {
    event.target.innerHTML = currentPlayer;
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  });
}
