let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let = document.getElementById("")
let = document.getElementById("")
boxPlus.addEventListener("click", function(){
    let auxCant = boxCantidad.innerHTML;
if(auxCant < 10) {
      auxCant++;
      boxCantidad.innerHTML = auxCant;
}
});


boxMinus.addEventListener("click", function(){
    let auxCant = boxCantidad.innerHTML;
if(auxCant >= 1 && auxCant <= 10) {
      auxCant--;
      boxCantidad.innerHTML = auxCant;
}
});