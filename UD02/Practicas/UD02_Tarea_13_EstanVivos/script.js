window.onload=init;

var contador = 0;
var rotar = false;
var v = false;

function init() {
    document.querySelector("button").addEventListener("click", crearCaja);
    document.querySelector(".rotar").addEventListener("click", puedeRotar);
    document.querySelector(".v").addEventListener("click", puedeV);
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
    this.classList.add("evoluciona");
    this.addEventListener("click", desevolucionar);
}

function desevolucionar() {
    this.classList.add("desevoluciona");
    this.addEventListener("click", megaEvolucionar);
}

function megaEvolucionar() {
    this.classList.add("ultimate");
    this.addEventListener("click", ejercerMovimiento);
}

function puedeRotar(){
rotar = true;
}
function puedeV(){
v = true;
}

function ejercerMovimiento(e){

if (rotar) {
    rotarCaja(e);
}else if (v) {
    vCaja(e);
}

}

function rotarCaja(e) {
    console.log("Entra")
    e.target.classList.add("transicionRotar");
}


function vCaja(e) {
    e.classList.add("transicionV");
}