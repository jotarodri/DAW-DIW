let dioses;
let totalValor;

let tipoGrafico;

var myCanvas = document.querySelector("canvas");
myCanvas.width = 500;
myCanvas.height = 500;

var ctx = myCanvas.getContext("2d");

var arrayClave = document.querySelectorAll("input[class='left']");
var arrayValor =  document.querySelectorAll("input[class='right']");
let inputValor;
var myVinyls;

var miGraficoBarras;
var miGraficoTartas;

//let anguloActual = -0.5 * Math.PI;

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
    document.querySelector("select").addEventListener("click",establecerGrafico);
     
   document.querySelectorAll("input[class='right']")[0].addEventListener("input",function() {
        dioses[0].poder = arrayValor[0].value;

        myVinyls = [    arrayValor[0].value,
        arrayValor[1].value,
        arrayValor[2].value,
        arrayValor[3].value
        ];
        crearGraficos();
    })

    document.querySelectorAll("input[class='right']")[1].addEventListener("input",function() {
        dioses[1].poder = arrayValor[1].value;

        myVinyls = [    arrayValor[0].value,
        arrayValor[1].value,
         arrayValor[2].value,
        arrayValor[3].value
        ];
        crearGraficos();
    })

    document.querySelectorAll("input[class='right']")[2].addEventListener("input",function() {
        dioses[2].poder = arrayValor[2].value;

        myVinyls = [ arrayValor[0].value,
        arrayValor[1].value,
         arrayValor[2].value,
        arrayValor[3].value
        ];
        crearGraficos();
    })

    document.querySelectorAll("input[class='right']")[3].addEventListener("input",function() {
        dioses[3].poder = arrayValor[3].value;
      
        myVinyls = [arrayValor[0].value,
        arrayValor[1].value,
        arrayValor[2].value,
        arrayValor[3].value
        ];

crearGraficos();

})

  
    
}
function buildGrafico(){
    console.info(" * Construyendo grafico ");

    
    if (tipoGrafico=="barras") {
        borrarCanvas();
    miGraficoBarras.draw();
    }else if(tipoGrafico=="tartas"){
        borrarCanvas();
     miGraficoTartas.draw();
    }else if(tipoGrafico=="puntos"){
buildLineGraph();
    }else{
        borrarCanvas();
    }
}



function establecerGrafico() {
    tipoGrafico = this.value;
}


function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
 
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}



 
var GraficoBarra = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  
    this.draw = function(){
        var maxValue = 0;
        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
 
        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
             
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom"; 
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();
 
            gridValue+=this.options.gridScale;
        }      
  
        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;
 
        for (categ in this.options.data){
            var val = this.options.data[categ];
            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.ctx,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
 
            barIndex++;
        }
 
        //drawing series name
        this.ctx.save();
        this.ctx.textBaseline="bottom";
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "bold 14px Arial";
     //   this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.restore();  
        dibujaMarcoGrafica();
       
    }
}
 
 


function dibujaMarcoGrafica(ctx){
 
    let x = 800;
    let y = 480;

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 1;
 

     for (let i = 0; i < 2; i++) {
         
        this.ctx.moveTo(0,480);
     
        this.ctx.lineTo(x,y);
         x = 0;
         y = 0;
     }

     this.ctx.stroke();
 
}


function borrarCanvas() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}



function drawLineTarta(ctx, startX, startY, endX, endY){
 
    ctx.beginPath();
 
    ctx.moveTo(startX,startY);
 
    ctx.lineTo(endX,endY);
 
    ctx.stroke();
 
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
 
    ctx.beginPath();
 
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
 
    ctx.stroke();
 
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
 
    ctx.fillStyle = color;
 
    ctx.beginPath();
 
    ctx.moveTo(centerX,centerY);
 
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
 
    ctx.closePath();
 
    ctx.fill();
 
}


var Piechart = function(options){
 
    this.options = options;
 
    this.canvas = options.canvas;
 
    this.ctx = this.canvas.getContext("2d");
 
    this.colors = options.colors;

    
 
    this.draw = function(){
 
        var total_value = 0;
 
        var color_index = 0;
 
        for (var categ in this.options.data){
 
            var val = parseInt(this.options.data[categ]);
           // console.log(val);
            total_value += val;
            console.log(total_value);
 
        }
 
 
 
        var start_angle = 0;
 
        for (categ in this.options.data){
 
            val = this.options.data[categ];
 
            var slice_angle = 2 * Math.PI * val / total_value;
 
 
 
            drawPieSlice(
 
                this.ctx,
 
                this.canvas.width/2,
 
                this.canvas.height/2,
 
                Math.min(this.canvas.width/2,this.canvas.height/2),
 
                start_angle,
 
                start_angle+slice_angle,
 
                this.colors[color_index%this.colors.length]
 
            );
 
 
 
            start_angle += slice_angle;
 
            color_index++;
 
        }
 
 
 
    }
 
}



var myPiechart = new Piechart(
 
    {
 
        canvas:myCanvas,
 
        data:myVinyls,
 
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]
 
    }
 
);
 
function crearGraficos() {
    
   miGraficoBarras = new GraficoBarra(
        {
            canvas:myCanvas,
            seriesName:"Vinyl records",
            padding:20,
            gridScale:5,
            gridColor:"#eeeeee",
            data: myVinyls,
            colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
        }
    );


    miGraficoTartas = new Piechart(
 
        {
     
            canvas:myCanvas,
     
            data:myVinyls,
     
            colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]
     
        }
     
    );




}

function buildLineGraph() {

    buildCartesianCoordinates();

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 1;

    let pointPositionX = 0;
    let godValue = myCanvas.height;

    ctx.font = '20px Arial';

    ctx.moveTo(pointPositionX, godValue);

    dioses.forEach(god => {
        pointPositionX += 100;
        godValue = god.poder;
        ctx.lineTo(pointPositionX, myCanvas.height - godValue);
        ctx.fillText(god.nombre, pointPositionX, myCanvas.height - god.poder);
        console.log(god.nombre);
        ctx.moveTo(pointPositionX, myCanvas.height - godValue);

    });
    ctx.stroke();
}

function buildCartesianCoordinates() {

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 1;

    for (let i = myCanvas.height - 100; i >= 100; i -= 100) {
        ctx.moveTo(0, i);
        ctx.lineTo(myCanvas.width, i);
        ctx.fillText(myCanvas.height - i, 0, i)
    }

    ctx.stroke();

    ctx.closePath();
}



function init(){
    console.log(" * Init ");
    loadListeners();

    dioses = [
        {nombre:arrayClave[0].value, poder: arrayValor[0].value, color:"green"},
        {nombre:arrayClave[1].value, poder: arrayValor[1].value, color:"red"},
        {nombre:arrayClave[2].value, poder: arrayValor[2].value, color:"grey"},
        {nombre:arrayClave[3].value, poder: arrayValor[3].value, color:"purple"}
        ];

}


window.onload=init;