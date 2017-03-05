function Population(sizepopulation, imageTarget) {

    //Population type Chromosomu
    this.members = [];
    this.generationNumber = 0;
    this.imageTarget = imageTarget;
    this.fitness = Infinity;

    //to complete population desired
    while(this.members.length < sizepopulation){
        //number of genes
        chromosomu = new Chromosomu();
        //number of genes
        genesNumber = parseInt(Math.random()*MAXCIRCLE) + 1;

        //for number genes time
        for(var i=0; i < genesNumber; i++){
            var xrandom = parseInt(Math.random()*200);
            var yrandom = parseInt(Math.random()*250);
            var radiusrandom = parseInt(Math.random()*MAXRADIUS);
            var colorrandom = null;

            if(COLORMODE=="gray"){
                colorrandom = Util.getRandomColorGrayScale();
            }else{
                colorrandom = Util.getRandomColor();
            }

            //temp gene
            var tempGene = new Gene(xrandom, yrandom, radiusrandom, colorrandom);
            //add gene in chromosomu
            chromosomu.addGene(tempGene);
        }

        //calculate fitness
        chromosomu.calcFitness(imageTarget);
        //add chromosomu in population
        this.members.push(chromosomu);
    }

};

Population.prototype.sort = function() {
    this.members.sort(function(a, b) {
        return a.fitness - b.fitness;
    });

    this.members.sort()
};


Population.prototype.generation = function(numGeneration){

    var newMember = new Chromosomu(this.members[0].copyGenes());
    newMember.mutate();
    newMember.calcFitness(this.imageTarget);

    if(newMember.fitness < this.members[0].fitness){

        if ( (Math.abs(view.getLastPrint() - newMember.fitness) > 2000000) && (this.generationNumber!= 0)){
            view.saveCanvas();
            view.setLastPrint(this.members[0].fitness);
        }

        this.members[0] = newMember;
    }

    $("#sub-view2").text("Fitness: "+this.members[0].fitness+" - "+this.members[0].genes.length+" Circles");

    view.drawChromossomu(this.members[0]);

    $("#numgen2").text("Evolution Image | G: "+(this.generationNumber+1));

    this.generationNumber++;

    if(!stopNow)
      setTimeout(function(){ this.generation(numGeneration)}.bind(this), 10);

};





