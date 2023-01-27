// script.js
function convert() {
    var hours = document.getElementById("hours").value;
    var seconds = hours * 3600;
    document.getElementById("output").innerHTML = hours + " hours is equal to " + seconds + " seconds.";
  }
  