var arrayMapa = new Array();

arrayMapa = [
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
];

let posicionPersonajeX = 9;
let posicionPersonajeY = 0;
let stringImagen = "personajeDerecha";
let posicionVillanoX = 14;
let posicionVillanoY = 13;

let posicionHuellaX = posicionPersonajeX - 1;
let posicionHuellaY = posicionPersonajeY - 1;

var arrayMuros = [];


let objetosMuro = [];
let objetosPersonaje = [];

let llave = false;
let momia = false;
let pergamino = false;
let urna = false;

window.onload = function() {

    establecerMovimiento();
    setInterval(movimientoMomia, 1000);

}


function establecerMovimiento(img) {


    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (arrayMapa[i][j] == 2) {

                newDiv.classList.add("puerta");

            }



            if (i == posicionPersonajeY & j == posicionPersonajeX) {
                posicionPersonajeY = i;
                posicionPersonajeX = j;
                switch (img) {

                    case "batmanIzquierda":
                        newDiv.classList.add("personajeIzquierda");
                        break;

                    case "batmanDerecha":
                        newDiv.classList.add("personajeDerecha");
                        break;

                    case "batmanAbajo":
                        newDiv.classList.add("personajeAbajo");
                        break;

                    case "batmanArriba":
                        newDiv.classList.add("personajeArriba");
                        break;
                        /*default:
                            newDiv.classList.add(stringImagen);*/

                }
            }


            if (arrayMapa[i][j] == 0) {

                newDiv.classList.add("camino");

            } else if ((arrayMapa[i][j] == 1)) {
                newDiv.classList.add("muro");

            } else if (arrayMapa[i][j] == 3) {

                newDiv.classList.add("huella");

            } else if (arrayMapa[i][j] == 4) {
                newDiv.classList.add("villano");


            } else if (arrayMapa[i][j] == 5) {

                newDiv.classList.add("muroRevelado");

            } else if (arrayMapa[i][j] == 20 && arrayMapa[i][j - 1] == 20 && arrayMapa[i][j + 1] == 20 && arrayMapa[i + 1][j] == 20 && arrayMapa[i + 1][j - 1] == 20 && arrayMapa[i + 1][j + 1] == 20) {

                if (objetosPersonaje.includes("Llave")) {} else {
                    objetosPersonaje.push("Llave");
                }

                newDiv.classList.add("llave");

            } else if (arrayMapa[i][j] == 30 && arrayMapa[i][j - 1] == 30 && arrayMapa[i][j + 1] == 30 && arrayMapa[i + 1][j] == 30 && arrayMapa[i + 1][j - 1] == 30 && arrayMapa[i + 1][j + 1] == 30) {
                if (objetosPersonaje.includes("Cofre")) {} else {
                    objetosPersonaje.push("Cofre");
                }
                newDiv.classList.add("sarcofago");


            } else if (arrayMapa[i][j] == 40 && arrayMapa[i][j - 1] == 40 && arrayMapa[i][j + 1] == 40 && arrayMapa[i + 1][j] == 40 && arrayMapa[i + 1][j - 1] == 40 && arrayMapa[i + 1][j + 1] == 40) {

                if (objetosPersonaje.includes("Pergamino")) {} else {
                    objetosPersonaje.push("Pergamino");
                }

                newDiv.classList.add("pergamino");

            } else if (arrayMapa[i][j] == 50 && arrayMapa[i][j - 1] == 50 && arrayMapa[i][j + 1] == 50 && arrayMapa[i + 1][j] == 50 && arrayMapa[i + 1][j - 1] == 50 && arrayMapa[i + 1][j + 1] == 50) {

                newDiv.classList.add("momia");

            } else if (arrayMapa[i][j] == 60) {

                newDiv.classList.add("nada");

            }


            document.querySelector(".mapa").appendChild(newDiv);
            objetosRandom();

        }

        document.onkeydown = moverse;

    }

}



function reiniciarMapa() {

    let padre = document.querySelector("#container");
    let borrar = document.querySelector(".mapa");
    let creado = document.createElement("div");
    creado.classList.add("mapa");

    padre.removeChild(borrar);
    padre.appendChild(creado);

}

function moverse(params) {



    switch (params.key) {

        case "w":
        case "W":
        case "ArrowUp":
            if (posicionPersonajeY - 1 != 0) {

                if ((arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 1) && (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 5)) {
                    reiniciarMapa();
                    moverArriba();
                    establecerMovimiento("batmanArriba");
                    stringImagen = "batmanArriba";
                    comprobarMuro();

                }
            }
            break;



        case "s":
        case "S":
        case "ArrowDown":
            if (posicionPersonajeY + 1 != 14) {
                if ((arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 1) && (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 5)) {
                    reiniciarMapa();
                    moverAbajo();
                    establecerMovimiento("batmanAbajo");
                    stringImagen = "batmanAbajo";
                    comprobarMuro();

                }
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if (posicionPersonajeX - 1 != -1) {


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 1) && (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 5)) {
                    reiniciarMapa();
                    moverIzquierda();
                    establecerMovimiento("batmanIzquierda");
                    stringImagen = "batmanIzquierda";
                    comprobarMuro();
                }
            }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if (posicionPersonajeX + 1 != 21) {


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 1) && (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 5)) {
                    reiniciarMapa();
                    moverDerecha();
                    establecerMovimiento("batmanDerecha");
                    stringImagen = "batmanDerecha";
                    comprobarMuro();
                }
            }
            break;

    }
    if (arrayMapa[posicionPersonajeY][posicionPersonajeX] != 3) {
        arrayMapa[posicionPersonajeY][posicionPersonajeX] = 3;
    }


}

function moverAbajo() {

    //posicionPersonajeY++;
    posicionPersonajeY += 1;

}

function moverArriba() {

    // posicionPersonajeY--;
    posicionPersonajeY -= 1;


}

function moverIzquierda() {

    // posicionPersonajeX--;

    posicionPersonajeX -= 1;

}

function moverDerecha() {

    // posicionPersonajeX++;
    posicionPersonajeX += 1;

}



function comprobarMuro(params) {

    let contador = 0;
    let contadorPilar = 0;

    for (let coordernadaY = 1; coordernadaY < 13; coordernadaY += 3) { //columnas

        for (let coordernadaX = 0; coordernadaX < 20; coordernadaX += 4) { //filas

            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 5; x++) {

                    if (arrayMapa[coordernadaY + y][coordernadaX + x] == 3) {
                        contador++;
                    }

                }

            }
            //console.log("pilar " + contadorPilar + " -> " + contador);


            if (contador == 13) {
                // console.log("pilar " + contadorPilar + " completado")
                pintarMuro(contadorPilar);
            }
            contadorPilar++;
            contador = 0;
        }

    }

}


function pintarMuro(contadorPilar) {

    let comparador = 0;

    for (let coordernadaY = 1; coordernadaY < 13; coordernadaY += 3) { //columnas

        for (let coordernadaX = 0; coordernadaX < 20; coordernadaX += 4) {
            if (contadorPilar == comparador) {

                for (let y = 0; y < 4; y++) {
                    for (let x = 0; x < 5; x++) {

                        if (arrayMapa[coordernadaY + y][coordernadaX + x] == 1) {
                            arrayMapa[coordernadaY + y][coordernadaX + x] = objetosMuro[comparador];
                        }

                    }
                }
            }

            comparador++;
        }
    }

}


function objetosRandom() {



    for (let index = 0; index < 20; index++) {

        let random = Math.floor(Math.random() * 10);

        if (random == 0 && !llave) { //LLAVE 20
            objetosMuro.push(20);
            llave = true;

        } else if (random == 1 && !urna) { //URNA 30
            objetosMuro.push(30);

            urna = true;

        } else if (random == 2 && !momia) { //MOMIA 40
            objetosMuro.push(40);
            momia = true;

        } else if (random == 3 && !pergamino) { //PERGAMINO 50
            objetosMuro.push(50);

            pergamino = true;

        } else { //NADA 60
            objetosMuro.push(60);

        }


    }


}

function movimientoMomia() {


    if (posicionVillanoX < posicionPersonajeX && arrayMapa[posicionVillanoY][posicionVillanoX + 1] != 1) {
        console.log("derecha")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        posicionVillanoX++;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
        reiniciarMapa();



    } else if (posicionVillanoX > posicionPersonajeX && arrayMapa[posicionVillanoY][posicionVillanoX - 1] != 1) {
        console.log("izquierda")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        posicionVillanoX--;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
        reiniciarMapa();



    } else if (posicionVillanoY < posicionPersonajeY && arrayMapa[posicionVillanoY + 1][posicionVillanoX] != 1) {
        console.log("abajo")

        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        posicionVillanoY++;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
        reiniciarMapa();

    } else if (posicionVillanoY > posicionPersonajeY && arrayMapa[posicionVillanoY - 1][posicionVillanoX] != 1) {
        console.log("arriba")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        posicionVillanoY--;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
        reiniciarMapa();


    }
    console.log("Momia Y -> " + posicionVillanoY + " Momia X -> " + posicionVillanoX);
    establecerMovimiento(stringImagen);

}