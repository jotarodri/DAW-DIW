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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


let posicionPersonajeX = 9;
let posicionPersonajeY = 0;
let stringImagen = "personajeDerecha";

let posicionVillanoY = 14;
let posicionVillanoX = 13;

var villanos = new Array();
var numeroVillanos = 1;

let posicionVillanoCajaX = 2;
let posicionVillanoCajaY = 10;

let posicionHuellaX = posicionPersonajeX - 1;
let posicionHuellaY = posicionPersonajeY - 1;

var arrayMuros = [];

var aux;

var nivel = 1;
var arrayVillano = [];
var vidas = 4;


let objetosMuro = [];
let objetosPersonaje = [];
let arrayVidas = new Array();

let llavePJ = false;
let momiaPJ = true;
let pergaminoPJ = false;
let urnaPJ = false;

var auxPergamino = true;
var matarV = false;

var auxY;
var auxX;

var auxPY;
var auxPX;

window.onload = function() {
    mostrarVidasScore();
    arrayVidas = document.getElementsByClassName("vidas");
    ponerNivel();
    establecerMovimiento();
    setInterval(moverVillano, 1000);
//movimientoMomia
}

añadirVillano();

function establecerMovimiento(img) {

    

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
                arrayMapa[i][j] = 41;


                
                newDiv.classList.add("pergamino");

            }else if (arrayMapa[i][j] == 41) {
                newDiv.classList.add("pergamino");
            } else if (arrayMapa[i][j] == 50 && arrayMapa[i][j - 1] == 50 && arrayMapa[i][j + 1] == 50 && arrayMapa[i + 1][j] == 50 && arrayMapa[i + 1][j - 1] == 50 && arrayMapa[i + 1][j + 1] == 50) {
    
                newDiv.classList.add("momia");
                arrayMapa[i][j] = 51;
                
                auxY = i;
                auxX = j;
                
    
                } else if (arrayMapa[i][j] == 51) {

                    newDiv.classList.add("momia");
    
                } else if (arrayMapa[i][j] == 60) {

                newDiv.classList.add("nada");

            }

            if (llavePJ && urnaPJ) {
                arrayMapa[0][9] = 99;
            }

            if (arrayMapa[posicionPersonajeY][posicionPersonajeX] == 99) {
                nivel++;
                ponerNivel();
                numeroVillanos++;
                añadirVillano();
                 subirNivel();
               
            } 

            if (momiaPJ) {
                momiaCaja(auxY,auxY);
                
            }

           // añadirVillano();

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
            
          
     //   if ((posicionPersonajeY - 1 != 0)) {

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

    for (let i = 0; i < villanos.length; i++) {
        if ((posicionPersonajeY == villanos[i].posicionVillanoY && posicionPersonajeX ==  villanos[i].posicionVillanoX) ) {
           
           if (objetosPersonaje.includes("Pergamino")) {
            arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=3;
            matarVillano(i);   
             establecerMovimiento();

           
                    for (let i = 0; i < objetosPersonaje.length; i++) {
                       
                        if (objetosPersonaje[i] == "Pergamino") {
                            aux = i;
                            objetosPersonaje.splice(aux, 1);
                        }
                        
                    }
                    
                    

           }else{
            arrayMapa[posicionPersonajeY][posicionPersonajeX] = 3;
            
           matarPersonaje();
           quitarVida();
           }
             
        }
        

    }

   

if (vidas == 0) {
    alert("Fin del juego! F5 para volver a jugar")
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
    var random = 0;

    for (let index = 0; index < 20; index++) {

        random = Math.floor(Math.random() * 4);

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


function mostrarVidasScore() {
    
    let padre = document.getElementById("header");
    
    for (let i = 0; i < 4; i++) {

        let vidas = document.createElement("div");
        vidas.setAttribute("class", "vidas");
        vidas.setAttribute("id", i);
        padre.appendChild(vidas);

    }


}


function subirNivel() {
    reiniciarMapa();
   
    posicionPersonajeY = 0;
    posicionPersonajeX = 9;
    posicionVillanoY = 14;
    posicionVillanoX = 13;

 //   stringImagen = "batmanDerecha";

llavePJ = false;
urnaPJ = false;
pergaminoPJ = false;
momiaPJ = true;


stringImagen = "personajeDerecha";
   objetosMuro = [];
   

    
    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 21; j++) {
     
     if (arrayMapa[i][j] == 3) {
        arrayMapa[i][j] = 0;
     }
     if (arrayMapa[i][j] == 5) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 4) {
        arrayMapa[i][j] = 0;
     }
     if (arrayMapa[i][j] == 41) {
        arrayMapa[i][j] = 1;
     }if (arrayMapa[i][j] == 51) {
        arrayMapa[i][j] = 1;
     }

     if (arrayMapa[i][j] == 20) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 30) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 40) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 50) {
        arrayMapa[i][j] = 1;
     }
     if (arrayMapa[i][j] == 60) {
        arrayMapa[i][j] = 1;
     }
    
     
    }


}
arrayMapa[0][9] = 2;
    establecerMovimiento();

}

function matarPersonaje() {
    reiniciarMapa();
   
    posicionPersonajeY = 0;
    posicionPersonajeX = 9;
    

llavePJ = false;
urnaPJ = false;
pergaminoPJ = false;
momiaPJ = true;


stringImagen = "personajeDerecha";
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
        arrayMapa[i][j] = 41;
     }
     if (arrayMapa[i][j] == 40) {
        arrayMapa[i][j] = 41;
     }
     if (arrayMapa[i][j] == 50) {
        arrayMapa[i][j] = 50;
     }
     if (arrayMapa[i][j] == 51) {
        arrayMapa[i][j] = 50;
     }
     if (arrayMapa[i][j] == 60) {
        arrayMapa[i][j] = 60;
     }
    
     
    }
}
arrayMapa[0][9] = 2;

    establecerMovimiento();

}

function Villano(posicionVillanoY = 0, posicionVillanoX = 0) {

    this.posicionVillanoY = posicionVillanoY;
    this.posicionVillanoX = posicionVillanoX;

}

function crearVillano(x, y) {

    let villano = new Villano(x, y);

    return villano;

}

function añadirVillano() {


    for (let i = 0; i < numeroVillanos; i++) {

        villanos[i] = crearVillano(13, Math.floor(Math.random() * 21));

        arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX] = 4;
    }


}

function moverVillano() {
  
var huellaAnterior;

        for (let i = 0; i < villanos.length; i++) {


            if (villanos[i].posicionVillanoY < posicionPersonajeY) {

                if (arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 1 && arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 5&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 20&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 30&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 40&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 50 && arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 60&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 41&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 8&& arrayMapa[villanos[i].posicionVillanoY + 1][villanos[i].posicionVillanoX] != 51) {

                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX] = 0;
                    if (arrayMapa[villanos[i].posicionVillanoY+1][villanos[i].posicionVillanoX] == 3 ) {
                        villanos[i].posicionVillanoY++;
                        arrayMapa[villanos[i].posicionVillanoY-1][villanos[i].posicionVillanoX] = 3;
                    }else{
                        villanos[i].posicionVillanoY++;
                    }
                    
                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX] = 4;
                   
                    
                }

                reiniciarMapa();

            } else if (villanos[i].posicionVillanoY > posicionPersonajeY) {

                if (arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX] != 1 && arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=5&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=20&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=30&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=40&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=50 && arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=60&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=41&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=8&& arrayMapa[villanos[i].posicionVillanoY - 1][villanos[i].posicionVillanoX]!=51) {

                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]= 0;
                    if (arrayMapa[villanos[i].posicionVillanoY-1][villanos[i].posicionVillanoX] == 3 ) {
                        villanos[i].posicionVillanoY--;
                        arrayMapa[villanos[i].posicionVillanoY+1][villanos[i].posicionVillanoX] = 3;
                    }else{
                        villanos[i].posicionVillanoY--;
                    }
                   
                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=4;
                    
                }
                reiniciarMapa();

            }
            if (villanos[i].posicionVillanoX < posicionPersonajeX) {

                if (arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=1 && arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=5&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=20&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=30&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=40&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=50 && arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=60&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=41&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=8&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX + 1]!=51) {

                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=0;
                    if (arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX+1] == 3) {
                        villanos[i].posicionVillanoX++;
                        arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX-1] = 3;
                        
                }else{
                    villanos[i].posicionVillanoX++;
                }
                    
                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=4;
                 
                   

                }
                reiniciarMapa();


            } else if (villanos[i].posicionVillanoX > posicionPersonajeX) {

                if (arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!= 1 && arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=5&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=20&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=30&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=40&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=50&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=60&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=41&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=8&& arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX - 1]!=51) {

                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]= 0;
                    if (arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX-1] == 3) {
                        villanos[i].posicionVillanoX--;
                        arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX+1] = 3;
                        
                }else{
                    villanos[i].posicionVillanoX--;
                }
                   
                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=4;
                    
                   

                }

                reiniciarMapa();
            }

        }

        for (let i = 0; i < villanos.length; i++) {
          
            if ((villanos[i].posicionVillanoY ==  posicionPersonajeY && villanos[i].posicionVillanoX == posicionPersonajeX) ) {
                if (objetosPersonaje.includes("Pergamino")) {
                    arrayMapa[villanos[i].posicionVillanoY][villanos[i].posicionVillanoX]=3;
                    matarVillano(i);   
                     establecerMovimiento();
                     
                     for (let i = 0; i < objetosPersonaje.length; i++) {
                        
                         if (objetosPersonaje[i] == "Pergamino") {
                             aux = i;
                             objetosPersonaje.splice(aux, 1);
                         }
                         
                     }
                    
                    
                   }else{
                    arrayMapa[posicionPersonajeY][posicionPersonajeX] = 3;
                    
                   matarPersonaje();
                   quitarVida();
                   }
                }
    
        }

establecerMovimiento(stringImagen);

}

function matarVillano(idVillano) {
    for (let i = 0; i < villanos.length; i++) {

        if (i == idVillano) {

            villanos.splice(i, 1);
            
            
        }

    }
    numeroVillanos--;
  
   
 
}

function momiaCaja() {
  
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 21; j++) {
           
            if (momiaPJ) {
                if (arrayMapa[i][j] == 50) {
                    villanos.push(crearVillano(i - 1, j));
                    momiaPJ = false;
                    numeroVillanos++;
                }
            }
        }
    }


}

function quitarVida() {
       
    arrayVidas[0].classList.remove("vidas");
    vidas--;
}

function ponerNivel() {
    let divNivel = document.getElementById("nivel");
    let texto = document.createTextNode("Nivel " + nivel);
    divNivel.innerText = "";
    divNivel.appendChild(texto);
}