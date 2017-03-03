/**
 This class
 @constructor
 @param {canvas} canvas - is a reference to canvas of HTML
 @param {context} ctx - is a reference to context of canvas
 */
function View(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = [];
    this.canvasTemp = document.getElementById("view3");
    this.ctxTemp = this.canvasTemp.getContext("2d");
    this.theLastPrint = 0;
}



/**
 Draw locals and trucks
 @param {array} arrRoute - Is a array of type Gene
 */

View.prototype.drawChromossomu = function(chromo){

    this.cleanCanvas();



}


/**
 Clean canvas
 */
View.prototype.cleanCanvas = function() {
    //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}


View.prototype.cleanCanvasTemp = function() {
    //this.ctxTemp.clearRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);
    this.ctxTemp.fillStyle = "white";
    this.ctxTemp.fillRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);

}


