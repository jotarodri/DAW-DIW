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

let posicionVillanoX = 14;
let posicionVillanoY = 13;

var villanos = new Array();
var numeroVillanos = 1;

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
    setInterval(moverMomia, 1000);
//movimientoMomia
}

anyadirMomias();

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

            if (arrayMapa[posicionPersonajeY][posicionPersonajeX] == 99) {
                nivel++;
                anyadirMomias();
              subirNivel();
               
            } 

           // anyadirMomias();

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
        if ((posicionPersonajeY == villanos[i].posicionVillanoX && posicionPersonajeX ==  villanos[i].posicionVillanoY)) {
            vidas--;
           matarPersonaje();
          
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
    posicionVillanoX = 14;
    posicionVillanoY = 13;

 //   stringImagen = "batmanDerecha";

llavePJ = false;
urnaPJ = false;
pergaminoPJ = false;
momiaPJ = false;


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
    posicionVillanoX = 0;
    posicionVillanoY = 0;

llavePJ = false;
urnaPJ = false;
pergaminoPJ = false;
momiaPJ = false;


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
    establecerMovimiento();

}

//objeto momia
function Villano(posicionVillanoX = 0, posicionVillanoY = 0) {

    this.posicionVillanoX = posicionVillanoX;
    this.posicionVillanoY = posicionVillanoY;

}

//crear la momia
function crearVillano(x, y) {

    let villano = new Villano(x, y);

    return villano;

}

//anyado momias segun el nivel
function anyadirMomias() {


    for (let i = 0; i < numeroVillanos; i++) {

        villanos[i] = crearVillano(13, Math.floor(Math.random() * (13 - 8)) + 8);

        arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY] = 4;
    }


}

//movimiento de la momia
function moverMomia() {


    //como evitar que la momia traspase los pilares seguramente sea con una condicion que lleve contains
  


        for (let i = 0; i < villanos.length; i++) {


            //si la x de la momia es menor que la posicion del personaje esta se suma.
            if (villanos[i].posicionVillanoX < posicionPersonajeY) {

                //si arriba hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (arrayMapa[villanos[i].posicionVillanoX + 1][villanos[i].posicionVillanoY] != 1 && arrayMapa[villanos[i].posicionVillanoX + 1][villanos[i].posicionVillanoY] != 5) {
                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY] = 0;
                    villanos[i].posicionVillanoX++;
                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY] = 4;
                }

                reiniciarMapa();

                //si es mayor esta se resta
            } else if (villanos[i].posicionVillanoX > posicionPersonajeY) {

                //si abajo hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (arrayMapa[villanos[i].posicionVillanoX - 1][villanos[i].posicionVillanoY] != 1 && arrayMapa[villanos[i].posicionVillanoX - 1][villanos[i].posicionVillanoY]!=5) {

                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]= 0;
                    villanos[i].posicionVillanoX--;
                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]=4;
                }
                reiniciarMapa();

            }
            //si la posicion Y de la momia es menor de la Y del personaje se suma
            if (villanos[i].posicionVillanoY < posicionPersonajeX) {

                //si a tu derecha hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY + 1]!=1 && !arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY + 1]!=5) {

                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]=0;
                    villanos[i].posicionVillanoY++;
                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]=4;

                }
                reiniciarMapa();


                //si es mayor esta se resta
            } else if (villanos[i].posicionVillanoY > posicionPersonajeX) {

                //si a tu izquierda hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY - 1]!= 1 && arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY - 1]!=5) {

                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]= 0;
                    villanos[i].posicionVillanoY--;
                    arrayMapa[villanos[i].posicionVillanoX][villanos[i].posicionVillanoY]=4;

                }

                reiniciarMapa();
            }

            /*if (momias[i].momiaX == x && momias[i].momiaY == y && !pergamino) {

                quitarVida(momias[i].momiaX, momias[i].momiaY);

            } else if (momias[i].momiaX == x && momias[i].momiaY == y && pergamino) {

                matarPergamino(momias[i].momiaX, momias[i].momiaY);
            }*/
        }

        for (let i = 0; i < villanos.length; i++) {
            if ((villanos[i].posicionVillanoX ==  posicionPersonajeY && villanos[i].posicionVillanoY == posicionPersonajeX)) {
                vidas--;
               matarPersonaje();
              
            }
            
    
        }

establecerMovimiento(stringImagen);

}