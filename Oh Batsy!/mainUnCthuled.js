let arrayMapa = [
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

let posicionPersonajeX = 9; //ARRIBA(-1) ABAJO(+1)
let posicionPersonajeY = 0; //IZQUIERDA(-1) DERECHA(+1)

let posicionHuellaX = posicionPersonajeX - 1; //ARRIBA(-1) ABAJO(+1)
let posicionHuellaY = posicionPersonajeY - 1; //IZQUIERDA(-1) DERECHA(+1)

var arrayMuros = [];


window.onload = function() {

    establecerMovimiento();

}


function establecerMovimiento(img) {

    let contadorPar = 0;
    let contadorImpar = 0;

    let muroPar = 1;
    let muroImpar = 1;



    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (arrayMapa[i][j] == 2) {

                newDiv.classList.add("puerta");

            }



            if (i == posicionPersonajeY & j == posicionPersonajeX) {

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

                }
            }

            /* if (i == 13 & j == 15) {
                 newDiv.classList.add("villano");
             }*/




            if (arrayMapa[i][j] == 0) {

                newDiv.classList.add("camino");

            } else if ((arrayMapa[i][j] == 1)) {
                newDiv.classList.add("muro");



                /*  if (i % 2 == 0 && contadorPar < 3) {

                    newDiv.classList.add("Muro" + muroPar);
                    arrayMuros.push(newDiv);

                    contadorPar++;

                } else if (i % 2 != 0 && contadorImpar < 3) {

                    newDiv.classList.add("Muro" + muroImpar);
                    arrayMuros.push(newDiv);
                    contadorImpar++;

                }

                if (contadorPar == 3) {

                    contadorPar = 0;
                    muroPar++;
                }

                if (contadorImpar == 3) {

                    contadorImpar = 0;
                    muroImpar++;
                }
*/


            } else if (arrayMapa[i][j] == 3) {

                newDiv.classList.add("huella");

            } else if (arrayMapa[i][j] == 4) {

                newDiv.classList.add("momia");

            } else if (arrayMapa[i][j] == 5) {

                newDiv.classList.add("muroRevelado");

            }


            document.querySelector(".mapa").appendChild(newDiv);
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
                    // comprobarMuro();
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
                    comprobarMuro();
                    // comprobarMuro();
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
                    //  comprobarMuro();
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
                    // comprobarMuro();
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

    posicionPersonajeY++;


}

function moverArriba() {

    posicionPersonajeY--;



}

function moverIzquierda() {

    posicionPersonajeX--;



}

function moverDerecha() {

    posicionPersonajeX++;


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
                            arrayMapa[coordernadaY + y][coordernadaX + x] = 5;
                        }

                    }
                }


            }

            comparador++;
        }
    }


}