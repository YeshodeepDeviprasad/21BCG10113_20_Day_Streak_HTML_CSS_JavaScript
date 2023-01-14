function rotateTriangle() {
    let angle = document.getElementById("angle").value;
    let triangle = document.getElementById("triangle");
    triangle.style.transform = "rotate(" + angle + "deg)";
  }
  