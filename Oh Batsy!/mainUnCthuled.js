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

let posicionPersonajeX = 8; //ARRIBA(-1) ABAJO(+1)
let posicionPersonajeY = 0; //IZQUIERDA(-1) DERECHA(+1)


window.onload = function() {

establecerMovimiento();

}
function establecerMovimiento(img) {
    

    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 & j != 8) {
                newDiv.classList.add("techo");

            }


            if (i == posicionPersonajeY & j == posicionPersonajeX) {
               /* if (img == "batmanIzquierda") {
                    newDiv.classList.add("personajeIzquierda");

                }else{
                    newDiv.classList.add("personaje");

                }*/

                newDiv.classList.add("puerta");

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

            if (arrayMapa[posicionPersonajeY - 1] [posicionPersonajeX] != 1) {
                reiniciarMapa();
                moverArriba();
                establecerMovimiento("batmanArriba");
            }

            break;

       

        case "s":

            if (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 1) {
                reiniciarMapa();
                moverAbajo();
                establecerMovimiento("batmanAbajo");
            }

            break;

            case "a":

            if (arrayMapa[posicionPersonajeY][posicionPersonajeX-1] != 1) {
                reiniciarMapa();
                moverIzquierda();
                establecerMovimiento("batmanIzquierda");
            }

            break;

            case "d":

                if (arrayMapa[posicionPersonajeY][posicionPersonajeX +1] != 1) {
                    reiniciarMapa();
                    moverDerecha();
                    establecerMovimiento("batmanDerecha");
                }
    
                break;
    
    
       
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