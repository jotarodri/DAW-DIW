window.onload=init;

var contador = 0;

function init() {
    document.querySelector("button").addEventListener("click", crearCaja);
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
}