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
            var radiusrandom = parseInt(Math.random()*MAXRADIUS)+1;
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

    var arrMembers = [];
    var oldBest = this.members[0];

   for(var i = 0; i < this.members.length-1; i+=2){

       var father1 = this.members[i].copy();
       arrMembers.push(father1);
       var father2  = this.members[i+1].copy();
       arrMembers.push(father2);
       var ch = this.members[i].crossover(this.members[i+1],  CROSSOVER );

       ch.forEach(function(item){
           item.mutate();
           item.calcFitness(this.imageTarget);
           arrMembers.push(item);
       });

   }

    arrMembers.sort(function(a, b) {
        return a.fitness - b.fitness;
    });

    for(var j = 0; j < this.members.length-1; j++){
        this.members[j] = arrMembers[j];
    }

    /*
    var newMember = new Chromosomu(this.members[0].copyGenes());
    //newMember.mutate();
    //newMember.calcFitness(this.imageTarget);
    */

    if(oldBest.fitness > this.members[0].fitness){

        if ( (oldBest.fitness - Math.abs(view.getLastPrint()) > 2000000) && (this.generationNumber!= 0)){
            view.saveCanvas(this.members[0].fitness,  clock.getTime() );
            view.setLastPrint(this.members[0].fitness);
        }

        //this.members[0] =  oldBest;
    }


    $("#sub-view2").text("Fitness: "+this.members[0].fitness+" - "+this.members[0].genes.length+" Circles");

    view.drawChromossomu(this.members[0]);

    $("#numgen2").text("Evolution Image | G: "+(this.generationNumber+1));

    this.generationNumber++;

    //if(this.generationNumber < 4)
    if(!stopNow)
      setTimeout(function(){ this.generation(numGeneration)}.bind(this), 100);

};





