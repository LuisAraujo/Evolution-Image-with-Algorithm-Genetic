//cromossomo
function Chromosomu(genes1, genes2){
    this.fitness;
    //array of Genes
    this.genes = [];

}

Chromosomu.prototype.mutate = function(){

   //get random
   //make if with percent

   //options:
   //change x
   //change y
   //change x and y
   //change color
   //change transparency
   //change radius
   //add new gene
   //remove gene

};

Chromosomu.prototype.setGenes = function(){

};

Chromosomu.prototype.addGene = function(gene){
   this.genes.push(gene);
};


/* not using */
Chromosomu.prototype.crossover = function(anotherCromo){


};

Chromosomu.prototype.copyGenes = function(part){

    var newGenes = [];

    for(var i = 0; i < this.genes.length; i++){
        newGenes.push(this.genes1[i].copy());
    }


    return newGenes;

}

Chromosomu.prototype.calcFitness = function(imageTarget){

    //draw this image
    // get imagedata
    // for target data and calculate distance point
    //get fitness
};




