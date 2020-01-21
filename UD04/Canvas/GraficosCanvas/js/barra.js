var myCanvas = document.querySelector("canvas");
myCanvas.width = 300;
myCanvas.height = 300;
   
var arrayClave = document.querySelectorAll("input[class='left']");
var arrayValor = document.querySelectorAll("input[class='right']");

var ctx = myCanvas.getContext("2d");
 
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
 
/*var myVinyls = {
    nombre:arrayClave[0].value, poder: arrayValor[0].value,
    nombre:arrayClave[1].value, poder: arrayValor[1].value,
    nombre:arrayClave[2].value, poder: arrayValor[2].value,
    nombre:arrayClave[3].value, poder: arrayValor[3].value,
       
};*/

var myVinyls = {
    "Classical music":arrayValor[0].value,
    "Alternative rock": arrayValor[1].value,
    "Pop": arrayValor[2].value,
    "Jazz": arrayValor[3].value
};
 
var Barchart = function(options){
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
         
       
    }
}
 
 
var myBarchart = new Barchart(
    {
        canvas:myCanvas,
        seriesName:"Vinyl records",
        padding:20,
        gridScale:5,
        gridColor:"#eeeeee",
        data:myVinyls,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);

function dibujaMarcoGrafica(ctx){
 
    let x = 800;
    let y = 480;

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;

     for (let i = 0; i < 2; i++) {
         
        ctx.moveTo(0,500);
     
        ctx.lineTo(x,y);
         x = 0;
         y = 0;
     }

    ctx.stroke();
 
}

myBarchart.draw();
