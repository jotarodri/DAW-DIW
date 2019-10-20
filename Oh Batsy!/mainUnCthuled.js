let arrayMapa = [
    [8,8, 8, 8, 8, 8, 8, 8, 8, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
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

            } else if ((arrayMapa[i][j] == 1) ||(arrayMapa[i][j] == 8 )) {
                newDiv.classList.add("muro");



            } else if (arrayMapa[i][j] == 3) {

                newDiv.classList.add("huella");
            } else if (arrayMapa[i][j] == 5) {

                newDiv.classList.add("muroRevelado");
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

                if ((arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 1)&&(arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 5)) {
                    reiniciarMapa();
                    moverArriba();
                    establecerMovimiento("batmanArriba");
                    comprobarMuro();


                }
            }
            break;



        case "s":
        case "S":
        case "ArrowDown":
            if (posicionPersonajeY + 1 != 14) {
                if ((arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 1)&&(arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 5)) {
                    reiniciarMapa();
                    moverAbajo();
                    establecerMovimiento("batmanAbajo");
              
                   comprobarMuro();
                }
            }
            break;

        case "a":
        case "A":
        case "ArrowLeft":
            if (posicionPersonajeX - 1 != -1) {


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 1)&&(arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 5)) {
                    reiniciarMapa();
                    moverIzquierda();
                    establecerMovimiento("batmanIzquierda");
                    comprobarMuro();
                }
            }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if (posicionPersonajeX + 1 != 21) {


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 1)&&(arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 5))  {
                    reiniciarMapa();
                    moverDerecha();
                    establecerMovimiento("batmanDerecha");
                    comprobarMuro();
                }
            }
            break;

    }
    
    /*
    if (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] == 1) {
        console.log("Muro a tu izquierda");


    }

    if (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] == 1) {
        console.log("Muro a tu derecha");

    }

    if (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] == 1) {
        console.log("Muro abajo tuya");


    }
    if (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] == 1) {
        console.log("Muro arriba");




    }*/
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


function comprobarMuro() {
if ((posicionPersonajeY<= 13 && posicionPersonajeX <= 20) )  {
    

    if ((arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] == 1)) {
        console.log("Muro a tu izquierda");
        if (arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 3 ) {
            arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] = 5;
        }
        else if (arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] == 3) {
            arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] = 5;
        }
     }

     if (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] == 1) {
        console.log("Muro a tu derecha");

        if (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 3 ) {
            arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] = 5;
        }
        else if (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 3) {
            arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] = 5;
        }

    }
try {
    if ((arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] == 1)) {
        console.log("Muro abajo tuya");

        if (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 3 ) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;

        }else if (arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] == 3) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] == 1)&& (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 1)) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] ==3)&& (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 3)) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] == 1)&& (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 5)) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] ==5)&& (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 1)) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY+1][posicionPersonajeX-1] ==5)&& (arrayMapa[posicionPersonajeY+1][posicionPersonajeX+1] == 5)) {
            arrayMapa[posicionPersonajeY+1][posicionPersonajeX] = 5;
        }

       
        
    
} 
   }catch (error) {
    
    }

    if (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] == 1) {
        console.log("Muro arriba");

        if (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 3 ) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;

        }else if (arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 3) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 1) && (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 1)) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }
        
        else if ((arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 3) && (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 5)) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 1) && (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 5)) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }
        else if ((arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 5) && (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 1)) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }

        else if ((arrayMapa[posicionPersonajeY-1][posicionPersonajeX-1] == 5) && (arrayMapa[posicionPersonajeY-1][posicionPersonajeX+1] == 5)) {
            arrayMapa[posicionPersonajeY-1][posicionPersonajeX] = 5;
        }


    }
}

  }
