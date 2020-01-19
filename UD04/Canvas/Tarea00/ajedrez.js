const canvas = document.querySelector("canvas");

// contexto -> ctx
let ctx = canvas.getContext("2d");

let color;

//ctx.fillRect(10,10,100,200);

ctx.lineWidth=1;
//ctx.strokeRect(10,10,100,200);

let posicionX = 0;
let posicionY = 0;
var bucle = 0;

for (let i = 0; i < 8; i++) {
bucle = 1;
for (let j = 0; j < 8; j++) {

if (i%2== 0) {

if (j%2==0) {
color = "white";
}else{
color= "black";
}

}else{

if (j%2==0) {
color = "black";
}else{
color= "white";
}

}

ctx.fillStyle = color;
//  ctx.beginPath();
ctx.fillRect(posicionX,posicionY,100,100);
posicionX+=50;


}    
// ctx.beginPath();
posicionY+=50;
posicionX = 0;
}


/*ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.moveTo(200,200);

// control, destino
//ctx.quadraticCurveTo(100,100,200,0);
//ctx.bezierCurveTo(100,100,70,70,200,0);

ctx.beginPath();

//ctx.arc(200,200,50,0.2,1 * Math.PI);



ctx.stroke();

const dioses = [
{nombre:"Cthulhu",poder:1000,color:"green"},
{nombre:"Nyarlatothep",poder:600,color:"red"},
{nombre:"Azazoth",poder:1400,color:"grey"},
{nombre:"Pepe",poder:800,color:"purple"}
];

//let anguloActual = -0.5 * Math.PI;
*/ 