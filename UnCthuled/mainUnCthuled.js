/*la matriz es de numeros 0 camino, 1 pilar*/
let arrayMapa = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0]
];

let posicionPersonajeX = 0; //ARRIBA(-1) ABAJO(+1)
let posicionPersonajeY = 8; //IZQUIERDA(-1) DERECHA(+1)

window.onload = function() {



    document.onkeydown = moverse;

    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 & j != 8) {
                newDiv.classList.add("techo");

            }


            if (i == posicionPersonajeX & j == posicionPersonajeY) {
                newDiv.classList.add("personaje");
            }

            if (i == 13 & j == 15) {
                newDiv.classList.add("villano");
            }

            if (arrayMapa[i][j] == 0) {

                newDiv.classList.add("camino");

            } else {
                newDiv.classList.add("muro");
            }
            document.querySelector(".mapa").appendChild(newDiv);
        }
    }
}

function moverse(params) {

    switch (params.key) {

        case "s":

            if (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 1) {
                moverAbajo();
            }

            break;

        default:
            break;
    }

}

function moverAbajo() {

    posicionPersonajeX++;
    console.log(posicionPersonajeY);
    console.log(posicionPersonajeX);

}