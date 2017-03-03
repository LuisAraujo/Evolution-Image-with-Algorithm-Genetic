//cromossomo
function Chromosomu(genes){
    this.fitness;
    //array of Genes
    this.genes = [];

    if(genes != undefined){
        this.genes = genes;
    }

}

Chromosomu.prototype.mutate = function(){

    //factor of mutation
    var randomFactor = Math.random();
    //get a gene with random index over genes length
    var indexGene = nextInt(this.genes.length-1);
    var currentGene = this.genes[indexGene];

    //change color with 40%
    if(randomFactor < 0.4){
        var col = null;

        //grayscale mode
        if(COLORMODE = "gray"){
            var aTemp = currentGene.color.a;
            //r, g and b has same values
            var valueScale = currentGene.color.r;

            //20%
            if(randomFactor < 2){
                valueScale = nextInt(255);
            //15%
            }else{
                aTemp = Math.random();
            }

            var col = new Color(valueScale, valueScale, valueScale, aTemp);

        //color mode
        }else{
            var rTemp = currentGene.color.r;
            var gTemp = currentGene.color.g;
            var bTemp = currentGene.color.b;
            var aTemp = currentGene.color.a;

            //10%
            if(randomFactor  < 0.1)
                rTemp = nextInt(255);
            //10%
            else if(randomFactor  < 0.2)
                gTemp = nextInt(255);
            //10%
            else if(randomFactor < 0.3)
                bTemp = nextInt(255);
            //10%
            else
                aTemp = Math.random();

            var col = new Color(rTemp, gTemp, bTemp, aTemp);

        }

        currentGene.color = col;

    //30%
    }else if(randomFactor < 0.7){

        //5% move x and y
        if(randomFactor < 0.45){
            currentGene.x = nextInt(200);
            currentGene.y = nextInt(250);

        //15% - move only one
        }else if(randomFactor < 0.60){
            //10% - move x
            if(randomFactor < 0.50 ){
                currentGene.x = nextInt(200);
            //10% move y
            }else{
                currentGene.y = nextInt(250);
            }

        //10% - change radius
        }else{
            currentGene.radius = parseInt(Math.random()*MAXRADIUS) ;
        }

    //15% remove gene
    }else if(randomFactor < 0.85) {

        var xrandom = parseInt(Math.random()*200);
        var yrandom = parseInt(Math.random()*250);
        var radiusrandom = parseInt(Math.random()*MAXRADIUS);
        var colorrandom = Util.getRandomColorGrayScale();
        var tempGene = new Gene(xrandom, yrandom, radiusrandom, colorrandom);
        this.addGene(tempGene);

    //15% add gene
    }else{

        this.removeGene( nextInt(this.genes.length) );

    }

};

Chromosomu.prototype.setGenes = function(genes){

    this.genes = genes;
};

Chromosomu.prototype.addGene = function(gene){
   this.genes.push(gene);
};

Chromosomu.prototype.removeGene = function(index){
    this.genes.splice(index, 1);
};



/* not using */
Chromosomu.prototype.crossover = function(anotherCromo){


};

Chromosomu.prototype.copyGenes = function(part){

    var newGenes = [];

    for(var i = 0; i < this.genes.length; i++){
        newGenes.push(this.genes[i].copy());
    }

    return newGenes;

}

Chromosomu.prototype.calcFitness = function(imageTarget){

    //draw this image for calculate pixel by pixel
    view.drawChromossomuTemp(this);
    //get image with image tempo
    var imgdata =  view.getContextTemp().getImageData(0, 0, 200, 250);
   //get data of image
    var currentTarget = imgdata.data;

    this.fitness = 0;

    //turn all image and calculate difference of points
    for(var i = 0, len = imageTarget.length; i < len; i += 4) {

        var off1 = i + 1, off2 = i + 2;
        var rA = imageTarget[i], gA = imageTarget[off1], bA = imageTarget[off2];
        var rB = currentTarget[i], gB = currentTarget[off1], bB = currentTarget[off2];
        var rDelta = rA-rB;
        var gDelta = gA-gB;
        var bDelta = bA-bB;

        this.fitness += Math.abs(rDelta) +  Math.abs(gDelta) + Math.abs(bDelta)

    }

};




