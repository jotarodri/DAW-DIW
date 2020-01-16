let arrayClave;
let arrayValor;
let dioses;

let canvas;
let ctx;




//let anguloActual = -0.5 * Math.PI;

function buildGrafico(){
    console.info(" * Construyendo grafico ");
}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
    arrayClave = document.querySelectorAll("input[class='left']");
    arrayValor = document.querySelectorAll("input[class='right']");
    
     dioses = [
        {nombre:arrayClave[0].value, poder: arrayValor[0].value, color:"green"},
        {nombre:arrayClave[1].value, poder: arrayValor[0].value, color:"red"},
        {nombre:arrayClave[2].value, poder: arrayValor[0].value, color:"grey"},
        {nombre:arrayClave[3].value, poder: arrayValor[0].value, color:"purple"}
        ];
}


function init(){
    console.log(" * Init ");
    loadListeners();

    canvas = document.querySelector("canvas");

// contexto -> ctx
    ctx = canvas.getContext("2d");
    
    ctx.moveTo(200,200);

// control, destino
ctx.quadraticCurveTo(100,100,200,0);
ctx.bezierCurveTo(100,100,70,70,200,0);

ctx.beginPath();

ctx.arc(200,200,100,0, 2 * Math.PI);

ctx.stroke();

}



window.onload=init;