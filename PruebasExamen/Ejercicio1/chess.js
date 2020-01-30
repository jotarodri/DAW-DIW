let usuario;
let json;
let divPadre;
let divID;
let divRanked;
let divMovimientos;
let checked; 
let divSeparador;
let enemigo;


function establecerUsuario() {
    usuario =this.value;
    
}

function mostrarDatos() {
    

    fetch('https://api.chess.com/pub/player/'+usuario+'/games')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
     
      let numPartida = 1;
        
      myJson.games.forEach(partida => {
        crearDivs();
        
        divID.innerHTML= "<h1>Partida "+ numPartida +"</h1><br />"+ "ID Partida: "+partida.url+"<br /> <br />";
        crearRated(divRanked,partida.rated);
       divMovimientos.innerHTML="<br /> "+partida.pgn+"<br /> <br />";
        divEnemigo.innerHTML = "Enemigo: "+ comprobarEnemigo(partida);
       let separador = document.createElement("hr");
       divSeparador.appendChild(separador);
       
       
        numPartida++;
      });

    });
}

function crearDivs() {
    divPadre = document.getElementById("padre");
    divID = document.createElement("div");
    divRanked = document.createElement("div");
    divMovimientos = document.createElement("div");
    divEnemigo = document.createElement("div");
    divSeparador = document.createElement("div");

    divPadre.appendChild(divID);
    divPadre.appendChild(divRanked);
    divPadre.appendChild(divMovimientos);
    divPadre.appendChild(divEnemigo);
    divPadre.appendChild(divSeparador);

}

function crearRated(divRanked, israted) {
   let checkbox = document.createElement("input");
   checkbox.setAttribute("type","checkbox")
   if (israted) {
    checkbox.setAttribute("checked",true) 
   }
   divRanked.innerHTML="Ranked:";
    divRanked.appendChild(checkbox);

}

function comprobarEnemigo(partida) {
   
    let white = partida.white.split("/",partida.white.length);
    let black = partida.black.split("/",partida.black.length);

    let usuarioWhite = white[white.length-1];
    let usuarioBlack = black[black.length-1];

    console.log(usuarioWhite);
    console.log(usuarioBlack);

    if (usuarioWhite == usuario) {
        enemigo = usuarioBlack;
    }else{
        enemigo = usuarioWhite;
    }

    return enemigo;
    

}

function init() {

    document.getElementById("nombreUsuario").addEventListener("input",establecerUsuario);
    document.getElementById("dameloTodo").addEventListener("click", mostrarDatos);

}

window.onload = init;
