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
/**
 Draw locals and trucks
 @param {array} arrRoute - Is a array of type Gene
 */

View.prototype.drawChromossomu = function(chromo){

    this.cleanCanvas();
    for(var i = 0; i < chromo.genes.length; i++){
        this.ctx.beginPath();
        this.ctx.globalAlpha = chromo.genes[i].a;
        this.ctx.arc(chromo.genes[i].x, chromo.genes[i].y, chromo.genes[i].radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = chromo.genes[i].color;
        this.ctx.fill();
    }
}



View.prototype.drawChromossomuTemp = function(chromo){

    this.cleanCanvasTemp();

    for(var i = 0; i < chromo.genes.length; i++){
        this.ctxTemp.beginPath();
        this.ctxTemp.globalAlpha = 0.5;
        this.ctxTemp.arc(chromo.genes[i].x, chromo.genes[i].y, chromo.genes[i].radius, 0, 2 * Math.PI, false);
        this.ctxTemp.fillStyle = chromo.genes[i].color;
        this.ctxTemp.fill();
    }

}


View.prototype.getDataByCanvas = function(ctx) {

    // Get the CanvasPixelArray from the given coordinates and dimensions.
    var imgdata = ctx.getImageData(0, 0, 199, 249);
    var pixel = imgdata.data;
    var arrpixel = [];
    //Loop over each pixel and invert the color.
    for (var i = 0, n = pixel.length; i < n; i += 4) {
        var red = pixel[i]; // red
        var green = pixel[i+1]; // green
        var blue = pixel[i+2]; // blue
        arrpixel.push(new Color(red, green, blue));
        // i+3 is alpha (the fourth element)
    }

    return arrpixel;

}


View.prototype.getContextTemp = function(){
    return this.ctxTemp;
}

View.prototype.saveCanvas = function(){
    var dataURL =view.canvas.toDataURL("image/png");

    $.ajax({
        type: "POST",
        url: "saveimage.php",
        data: {
            imgBase64: dataURL,
            id: "print_"+ p.generationNumber,
            local: LOCALFOLDER
        }
    }).done(function(o) {
        console.log("salved");
    });

};


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


