

var contador = 0;
var rotar = false;
var botar = false;

function init() {
   const header = document.querySelector("header");
   
    crearDivsImg(header);
    document.querySelector("button").addEventListener("click", crearCaja);
    document.querySelector(".imagenRotar").addEventListener("click", puedeRotar);
    document.querySelector(".imagenBotar").addEventListener("click", puedeBotar);
  

    
}

function crearCaja() {


    const container = document.querySelector("container");

    if (contador <= 19) {

    let caja = document.createElement("div");
     
    caja.setAttribute("class","box");
    caja.addEventListener("click", evolucionar);

    container.appendChild(caja); 
    contador++; 
   }
   
}

function evolucionar() {
    this.classList.remove("ultimate");
    this.classList.add("evoluciona");
    this.addEventListener("click", desevolucionar);
}

function desevolucionar() {
    this.classList.remove("evoluciona");
    this.classList.add("desevoluciona");
    this.addEventListener("click", megaEvolucionar);
}

function megaEvolucionar() {
    this.classList.remove("desevoluciona");
    this.classList.add("ultimate");
    this.addEventListener("click", ejercerMovimiento);
}

function puedeRotar(){
rotar = true;
}
function puedeBotar(){
botar = true;
}

function ejercerMovimiento(e){

if (rotar) {
    rotarCaja(e);
}else if (botar) {
    botarCaja(e);
}
rotar = false;
botar = false;

}

function rotarCaja(e) {
    console.log("Entra")
    e.target.classList.add("transicionRotar");
}


function botarCaja(e) {
    e.classList.add("transicionBotar");
}


function crearDivsImg(header) {
   
    let div1 = document.createElement("div");
   
    div1.classList.add("imagenRotar");
    header.appendChild(div1);

    let div2 = document.createElement("div");
   
    div2.classList.add("imagenBotar");
    header.appendChild(div2);
}

window.onload = init;