var ball = document.getElementById("ball");
var xSpeed = 5;
var ySpeed = 5;

function animate() {
  var x = parseFloat(getComputedStyle(ball).left);
  var y = parseFloat(getComputedStyle(ball).top);

  if (x + 14 >= window.innerWidth || x <= 0) {
    xSpeed = -xSpeed;
  }

  if (y + 14 >= window.innerHeight || y <= 0) {
    ySpeed = -ySpeed;
  }

  ball.style.left = x + xSpeed + "px";
  ball.style.top = y + ySpeed + "px";

  requestAnimationFrame(animate);
}

animate();
