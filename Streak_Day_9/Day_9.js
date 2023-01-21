function createTriangle(event) {
    var triangle = document.createElement("div");
    triangle.classList.add("triangle");
    triangle.style.left = event.clientX + "px";
    triangle.style.top = event.clientY + "px";
    document.getElementById("triangle-flow").appendChild(triangle);
    setTimeout(() => triangle.remove(), 2000);
  }
  