let arrayClave;
let arrayValor;
let dioses;
let totalValor;

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
        {nombre:arrayClave[0].name, poder: arrayValor[0].name, color:"green"},
        {nombre:arrayClave[1].name, poder: arrayValor[1].name, color:"red"},
        {nombre:arrayClave[2].name, poder: arrayValor[2].name, color:"grey"},
        {nombre:arrayClave[3].name, poder: arrayValor[3].name, color:"purple"}
        ];
}


function init(){
    console.log(" * Init ");
    loadListeners();

    canvas = document.querySelector("canvas");

// contexto -> ctx
    ctx = canvas.getContext("2d");
    
    ctx.moveTo(200,200);
 
    dioses.reduce(function(suma,dioses) {
        totalValor=suma =+ dioses.poder; 
    },0);

    console.log(totalValor);

    graficoQuesitos();

}

function graficoQuesitos() {

    // el radio del gráfico;					
    var r = 100;

    // las coordenadas del centro del canvas
    var X = canvas.width / 2
    var Y = canvas.height / 2;

    // dibuja un circulo gris en el centro del canvas
    ctx.fillStyle = '#ddd';
    ctx.moveTo(X, Y);
    ctx.arc(X, Y, r, 0, 2 * Math.PI);
    ctx.fill();

    // dibuja un sector circular		
    var ap = 0;
    var af = (2 * Math.PI / 100)* totalValor ;
    var Xap = X + r * Math.cos(ap);
    var Yap = Y + r * Math.sin(ap);

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(X, Y);
    ctx.lineTo(Xap, Yap);
    ctx.arc(X, Y, r, ap, af);
    ctx.closePath();
    ctx.fill();
}

window.onload=init;