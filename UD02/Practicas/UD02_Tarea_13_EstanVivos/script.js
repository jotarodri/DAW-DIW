

var contador = 0;
var rotar = false;
var botar = false;
var stop = false;

function init() {
   const header = document.querySelector("header");
   
    crearDivsImg(header);
    document.querySelector("button").addEventListener("click", crearCaja);
    document.querySelector(".imagenRotar").addEventListener("click", puedeRotar);
    document.querySelector(".imagenBotar").addEventListener("click", puedeBotar);
    document.querySelector(".imagenStop").addEventListener("click", puedeParar);
  

    
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
function puedeParar(){
stop = true;
}

function ejercerMovimiento(e){

if (rotar) {
    rotarCaja(e);
}
if (botar) {
    botarCaja(e);
}
if (stop) {
    pararCaja(e);
}

botar = false;
rotar = false;
stop = false;
}

function rotarCaja(e) {
   
    e.target.classList.remove("ultimate");
    e.target.classList.remove("transicionBotar");
    e.target.classList.add("transicionRotar");
    
}


function botarCaja(e) {
    e.target.classList.remove("ultimate");
    e.target.classList.remove("transicionRotar");
    e.target.classList.add("transicionBotar");
    
}

function pararCaja(e) {


    e.target.classList.remove("transicionBotar");
    e.target.classList.remove("transicionRotar");
    e.target.classList.add("ultimate");
     
}


function crearDivsImg(header) {
   
    let div1 = document.createElement("div");
   
    div1.classList.add("imagenRotar");
    header.appendChild(div1);

    let div2 = document.createElement("div");
   
    div2.classList.add("imagenBotar");
    header.appendChild(div2);


    let div3 = document.createElement("div");
   
    div3.classList.add("imagenStop");
    header.appendChild(div3);
}

window.onload = init;