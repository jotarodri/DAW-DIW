let arrayMapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let posicionPersonajeX = 9; //ARRIBA(-1) ABAJO(+1)
let posicionPersonajeY = 0; //IZQUIERDA(-1) DERECHA(+1)

let posicionHuellaX = posicionPersonajeX - 1; //ARRIBA(-1) ABAJO(+1)
let posicionHuellaY = posicionPersonajeY - 1; //IZQUIERDA(-1) DERECHA(+1)


window.onload = function() {

    establecerMovimiento();

}

function establecerMovimiento(img) {


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

            } else if (arrayMapa[i][j] == 1) {
                newDiv.classList.add("muro");

            } else if (arrayMapa[i][j] == 3) {

                newDiv.classList.add("huella");
            }
            document.querySelector(".mapa").appendChild(newDiv);
        }
    }

    document.onkeydown = moverse;

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

                if (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 1) {
                    reiniciarMapa();
                    moverArriba();
                    establecerMovimiento("batmanArriba");

                    if (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] == 1) {
                        arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] = 8;
                        console.log("Muro a tu ?");

                    }

                }
            }
            break;



        case "s":
        case "S":
        case "ArrowDown":
            if (posicionPersonajeY + 1 != 14) {
                if (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 1) {
                    reiniciarMapa();
                    moverAbajo();
                    establecerMovimiento("batmanAbajo");
                    arrayMapa[8][0] == 0;
                }
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if (posicionPersonajeX - 1 != -1) {


                if (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 1) {
                    reiniciarMapa();
                    moverIzquierda();
                    establecerMovimiento("batmanIzquierda");
                }
            }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if (posicionPersonajeX + 1 != 21) {


                if (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 1) {
                    reiniciarMapa();
                    moverDerecha();
                    establecerMovimiento("batmanDerecha");
                }
            }
            break;

    }
    arrayMapa[posicionPersonajeY][posicionPersonajeX] = 3;
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