function Population(sizepopulation, imageTarget) {

    //Population type Chromosomu
    this.members = [];
    this.generationNumber = 0;
    this.imageTarget = imageTarget;
    this.fitness = Infinity;

    //to complete population desired
    //while(this.members.length < sizepopulation){

        //chromosomu = new Chromosomu();
        //random number of gene
        //loop building genes and input in chromosomu
        //calculate fit
        //this.members.push(chromosomu);
    //}
};

Population.prototype.sort = function() {
    this.members.sort(function(a, b) {
        return a.fitness - b.fitness;
    });

    this.members.sort()
};


Population.prototype.generation = function(numGeneration){

    $("#numgen2").text("Evolution Image | G: "+(this.generationNumber+1));

    //selection
    //cross
    //mutetation

    //draw best chromossomu
    this.generationNumber++;

    if(!stopNow)
      setTimeout(function(){ this.generation(numGeneration)}.bind(this), 100);

};



Population.prototype.mutate = function(type, chromo){

        for(var i=0; i<chromo.length; i++){

            chromo[i].mutate(type);

        }

}





