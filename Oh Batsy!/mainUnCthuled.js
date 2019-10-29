
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


let posicionVillanoCajaX = 2;
let posicionVillanoCajaY = 10;

let posicionHuellaX = posicionPersonajeX - 1;
let posicionHuellaY = posicionPersonajeY - 1;

var arrayMuros = [];

var nivel = 1;
var arrayVillano = [];
var vidas = 4;

let objetosMuro = [];
let objetosPersonaje = [];

let llavePJ = false;
let momiaPJ = false;
let pergaminoPJ = false;
let urnaPJ = false;

window.onload = function() {
    mostrarVidasScore();
    establecerMovimiento();
    setInterval(movimientoMomia, 1000);

}


function establecerMovimiento(img,array) {


    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (arrayMapa[i][j] == 2) {

                newDiv.classList.add("puerta");

            }

            if (arrayMapa[i][j] == 8) {

                newDiv.classList.add("muro");
            }

            if (llavePJ && urnaPJ) {
                arrayMapa[0][9] = 99;
            }

            if (arrayMapa[i][j] == 99) {

                newDiv.classList.add("salida");
            }

/*try {
    if (arrayMapa[i-1][j] == 2) {
        arrayMapa[i-1][j] = 8;
    }
} catch (error) {   }*/
           


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
                llavePJ = true;
                newDiv.classList.add("llave");

            } else if (arrayMapa[i][j] == 30 && arrayMapa[i][j - 1] == 30 && arrayMapa[i][j + 1] == 30 && arrayMapa[i + 1][j] == 30 && arrayMapa[i + 1][j - 1] == 30 && arrayMapa[i + 1][j + 1] == 30) {
                if (objetosPersonaje.includes("Cofre")) {} else {
                    objetosPersonaje.push("Cofre");
                }
                urnaPJ = true;
                newDiv.classList.add("sarcofago");


            } else if (arrayMapa[i][j] == 40 && arrayMapa[i][j - 1] == 40 && arrayMapa[i][j + 1] == 40 && arrayMapa[i + 1][j] == 40 && arrayMapa[i + 1][j - 1] == 40 && arrayMapa[i + 1][j + 1] == 40) {

                if (objetosPersonaje.includes("Pergamino")) {} else {
                    objetosPersonaje.push("Pergamino");
                }
                pergaminoPJ = true;

                newDiv.classList.add("pergamino");

            } else if (arrayMapa[i][j] == 50 && arrayMapa[i][j - 1] == 50 && arrayMapa[i][j + 1] == 50 && arrayMapa[i + 1][j] == 50 && arrayMapa[i + 1][j - 1] == 50 && arrayMapa[i + 1][j + 1] == 50) {

                newDiv.classList.add("momia");
                momiaPJ = true;

            } else if (arrayMapa[i][j] == 60) {

                newDiv.classList.add("nada");

            }

            if (llavePJ && urnaPJ) {
                arrayMapa[0][9] = 99;
            }

            if (posicionPersonajeY == 0 && posicionPersonajeX == 9 && arrayMapa[0][9]== 99) {
                nivel++;
                reiniciarTodo();
               
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

    //try {
         
   // } catch (error) {}

    switch (params.key) {

        case "w":
        case "W":
        case "ArrowUp":
            
          
      //  if ((posicionPersonajeY - 1 != 0)) {

                if ((arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 1) && (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 5)&& (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 20)&& (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 30)&& (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 40)&& (arrayMapa[posicionPersonajeY- 1][posicionPersonajeX] != 50)&& (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 60)&& (arrayMapa[posicionPersonajeY - 1][posicionPersonajeX] != 8)) {
                    reiniciarMapa();
                    moverArriba();
                    if (arrayMapa[0][9] != 8) {
                        arrayMapa[0][9] = 8;
                    }
                    establecerMovimiento("batmanArriba");
                    stringImagen = "batmanArriba";
                    comprobarMuro();

                }
          // }
         break;



        case "s":
        case "S":
        case "ArrowDown":
            if (posicionPersonajeY + 1 != 14) {
                if ((arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 1) && (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 5)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 20)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 30)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 40)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 50)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 60)&& (arrayMapa[posicionPersonajeY + 1][posicionPersonajeX] != 8)) {
                    reiniciarMapa();
                    moverAbajo();
                    if (arrayMapa[0][9] != 8) {
                        arrayMapa[0][9] = 8;
                    }
                    
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


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 1) && (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 5)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 20)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 5)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] !=30)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 40)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 50)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 60)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX - 1] != 8)) {
                    reiniciarMapa();
                    moverIzquierda();
                    if (arrayMapa[0][9] != 8) {
                        arrayMapa[0][9] = 8;
                    }
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


                if ((arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 1) && (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 5)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 20)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 5)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] !=30)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 40)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 50)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 60)&& (arrayMapa[posicionPersonajeY][posicionPersonajeX + 1] != 8)) {
                    reiniciarMapa();
                    moverDerecha();
                    if (arrayMapa[0][9] != 8) {
                        arrayMapa[0][9] = 8;
                    }
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
    if ((posicionPersonajeX == posicionVillanoX && posicionPersonajeY == posicionVillanoY )) {
        vidas--;
        reiniciarTodo();
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

    let llave = false;
    let momia = false;
    let pergamino = false;
    let urna = false; 
    let random = 0;
    for (let index = 0; index < 20; index++) {

        random = Math.floor(Math.random() * 5);

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
var huellaAnterior = false;
   
        //ESTABLECER QUE NO ATRAVIESE MURO REVELADO(LLAVE, PERGAMINO, URNA);
    
    if (posicionVillanoX < posicionPersonajeX && arrayMapa[posicionVillanoY][posicionVillanoX + 1] != 1) {
        //console.log("derecha")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;

        if ((arrayMapa[posicionVillanoY][posicionVillanoX+1] == 3)&&(arrayMapa[posicionVillanoY][posicionVillanoX-1] == 0)) {
            huellaAnterior = true;
        }else{
            huellaAnterior = false;
        }
        posicionVillanoX++;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;

        if (huellaAnterior) {
            
        arrayMapa[posicionVillanoY][posicionVillanoX-1]=3;
        }

        reiniciarMapa();



    } else if (posicionVillanoX > posicionPersonajeX && arrayMapa[posicionVillanoY][posicionVillanoX - 1] != 1) {
     //   console.log("izquierda")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
       
        if ((arrayMapa[posicionVillanoY][posicionVillanoX-1] == 3)&&(arrayMapa[posicionVillanoY][posicionVillanoX+1] ==0)) {
            huellaAnterior = true;
        }else{
            huellaAnterior = false;
        }
        posicionVillanoX--;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;

        if (huellaAnterior) {
            arrayMapa[posicionVillanoY][posicionVillanoX+1]=3;            
        }

        reiniciarMapa();



    } else if (posicionVillanoY < posicionPersonajeY && arrayMapa[posicionVillanoY + 1][posicionVillanoX] != 1) {
       // console.log("abajo")

        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        
        if ((arrayMapa[posicionVillanoY+1][posicionVillanoX] == 3)&&(arrayMapa[posicionVillanoY-1][posicionVillanoX] == 0)) {
            huellaAnterior = true;
        }else{
            huellaAnterior = false;
        }

        posicionVillanoY++;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
       
        if (huellaAnterior) {
            arrayMapa[posicionVillanoY-1][posicionVillanoX] = 3;
        }
        
        reiniciarMapa();

    } else if (posicionVillanoY > posicionPersonajeY && arrayMapa[posicionVillanoY - 1][posicionVillanoX] != 1) {
       // console.log("arriba")
        arrayMapa[posicionVillanoY][posicionVillanoX] = 0;
        
        if ((arrayMapa[posicionVillanoY-1][posicionVillanoX] == 3)&&(arrayMapa[posicionVillanoY+1][posicionVillanoX] == 0)) {
            huellaAnterior = true;
        }else{
            huellaAnterior = false;
        }

        posicionVillanoY--;
        arrayMapa[posicionVillanoY][posicionVillanoX] = 4;
        
        if (huellaAnterior) {
            arrayMapa[posicionVillanoY+1][posicionVillanoX] = 3;
        }
     
        reiniciarMapa();


    }


   // console.log("Momia Y -> " + posicionVillanoY + " Momia X -> " + posicionVillanoX);
    establecerMovimiento(stringImagen);

    if ((posicionVillanoX == posicionPersonajeX && posicionVillanoY == posicionPersonajeY)) {
        vidas--;
       reiniciarTodo();

    }

if (vidas == 0) {
    alert("Fin del juego! F5 para volver a jugar")
}

}

function mostrarVidasScore() {
    
    let padre = document.getElementById("header");
    
    for (let i = 0; i < 4; i++) {

        let vidas = document.createElement("div");
        vidas.setAttribute("class", "vidas");
        vidas.setAttribute("id", i);
        padre.appendChild(vidas);

    }


}


function reiniciarTodo() {
    reiniciarMapa();
    posicionPersonajeY = 0;
   posicionPersonajeX = 9;
    posicionVillanoX = 14;
    posicionVillanoY = 13;

stringImagen = "batmanDerecha";

llavePJ = false;
urnaPJ = false;
pergaminoPJ = false;
momiaPJ = false;

   objetosMuro = [];

    
    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {
     
     if (arrayMapa[i][j] == 3) {
        arrayMapa[i][j] = 3;
     }
     if (arrayMapa[i][j] == 5) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 4) {
        arrayMapa[i][j] = 0;
     }

     if (arrayMapa[i][j] == 20) {
        arrayMapa[i][j] = 20;
     }
     if (arrayMapa[i][j] == 30) {
        arrayMapa[i][j] = 30;
     }
     if (arrayMapa[i][j] == 40) {
        arrayMapa[i][j] = 40;
     }
     if (arrayMapa[i][j] == 50) {
        arrayMapa[i][j] = 50;
     }
     if (arrayMapa[i][j] == 60) {
        arrayMapa[i][j] = 60;
     }
     
     
       
     
    }
}
arrayMapa[0][9] = 2;    
objetosRandom();
    establecerMovimiento();
}


function Villano(posicionX, posicionY){

this.posicionY = posicionY;
this.posicionX = posicionX;
}

function crearVillano(x, y){

let villano = Villano(x,y);

return villano;


}