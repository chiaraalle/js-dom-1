let lampadina = document.getElementById('white_lamp');
let button = document.getElementById('btn');

button.addEventListener("click", function() {
  //lampadina.src = "./imgs/yellow_lamp.png";

 if(lampadina.src.includes("white")){
  button.innerHTML = "Spegni la lampadina";
  lampadina.src = "./imgs/yellow_lamp.png";
 } else {
  button.innerHTML = "Accendi la lampadina";
  lampadina.src = "./imgs/white_lamp.png";
 }
  

});





