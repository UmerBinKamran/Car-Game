var car1 = document.getElementById("car");
var position = 1;
var currentLight = "red";

//Traffic Light
function changeLight() {
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var green = document.getElementById("green");

  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  //Lights
  if (currentLight === "red") {
    currentLight = "green";
    green.classList.add("active");
  } else if (currentLight === "green") {
    currentLight = "yellow";
    yellow.classList.add("active");
  } else {
    currentLight = "red";
    red.classList.add("active");
  }
}

setInterval(changeLight, 2000);
changeLight();

//Move Car
function moveCar() {
  if (currentLight === "red") {
    alert(" Challan ho gya — Signal Red!");
    return;
  }

  position += 5;
  if (position > 90) position = 90;
  car1.style.left = position + "%";
}

car1.addEventListener("click", moveCar);
