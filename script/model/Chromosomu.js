//cromossomo
function Chromosomu(genes){
    this.fitness = Infinity;
    //array of Genes
    this.genes = [];

    if(genes != undefined){
        this.genes = genes;
    }

}

Chromosomu.prototype.mutate = function(){

    //amount of genes could can mutate  20% of genes
    var countGene = parseInt(this.genes.length*0.2);

    //loop for change gene
   while(countGene > 0){
       countGene--;

       //get a gene with random index over genes length
       var indexGene = nextInt(this.genes.length-1);
       var currentGene = this.genes[indexGene];

       currentGene.mutate(this);
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
Chromosomu.prototype.crossover = function(anotherCromo, type){

    if(type == "halfimage_v"){
        //half image vertical
       return this.crossoverHalfImageV(anotherCromo);
    }else if(type == "halfimage_h"){
        //half image horizontal
        return this.crossoverHalfImageH(anotherCromo);
    }else if(type == "onefourthimage"){
        //one fourth image
        return this.crossoverOneFourthImage(anotherCromo);
    }
};



Chromosomu.prototype.crossoverHalfImageV = function(anotherCromo){

    var child1 = new Chromosomu();
    var child2 = new Chromosomu();

    this.genes.forEach(function(item){

        if(item.y < 125){
            child1.addGene(item.copy());
        }else{
            child2.addGene(item.copy());
        }
    });


    anotherCromo.genes.forEach(function(item){

        if(item.y < 125){
            child2.addGene(item.copy());
        }else{
            child1.addGene(item.copy());
        }
    });


    return [child1, child2];

}


Chromosomu.prototype.crossoverOneFourthImage = function(anotherCromo){

    var child1 = new Chromosomu();
    var child2 = new Chromosomu();

    this.genes.forEach(function(item){
     // Filho 1 quadrante 1
        if ( (item.x < 100 && item.y <125) || (item.x >= 100 && item.y >= 125) ){
            child1.addGene(item.copy());
        }else{
            child2.addGene(item.copy());
        }
    });

    anotherCromo.genes.forEach(function(item){

        if ( (item.x < 100 && item.y <125) ||  (item.x >= 100 && item.y >= 125) ){
            child2.addGene(item.copy());
        }
        else{
            child1.addGene(item.copy());
        }
    });

    return [child1, child2];

}



Chromosomu.prototype.crossoverHalfImageH = function(anotherCromo){

    var child1 = new Chromosomu();
    var child2 = new Chromosomu();

    this.genes.forEach(function(item){

        if(item.x < 100){
            child1.addGene(item.copy());
        }else{
            child2.addGene(item.copy());
        }
    });


    anotherCromo.genes.forEach(function(item){

        if(item.x < 100){
            child2.addGene(item.copy());
        }else{
            child1.addGene(item.copy());
        }
    });

    return [child1, child2];

}


Chromosomu.prototype.copyGenes = function(){

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

    //this.fitness += this.genes.length * 5;

};



Chromosomu.prototype.copy = function(){
    var c = new Chromosomu( this.copyGenes() );
    c.fitness = this.fitness;

    return c;
}


