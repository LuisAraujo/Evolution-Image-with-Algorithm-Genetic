//USEI ISSO NO OUTRO... tem que modificar

function Statistic(){
    this.generation = [];
}


Statistic.prototype.getTheBest = function(callback){

    theBest = Object;
    theBest.index = 0;
    theBest.solution = null;
    theBest.fitness = Infinity;

    for(var i=0; i<this.generation.length; i++){

        if(this.generation[i][0].fitness < theBest.fitness){
            theBest.fitness = this.generation[i][0].fitness;
            theBest.index = i;
            theBest.solution = this.generation[i];
        }
    }

    if(callback!=undefined)
        callback(theBest);

    return theBest;
}


Statistic.prototype.getTheFitnessByGeneration = function(callback){
    bestFitness = [];

    for(var i=0; i<this.generation.length; i++){
    /*    this.generation[i].sort(function(a, b){
            return a.fitness - b.fitness;
        });

        this.generation[i].sort();*/

        var tempFitness = this.generation[i][0].fitness;
        console.log(tempFitness);
        bestFitness.push(tempFitness);

        if(callback!=undefined)
            callback(tempFitness, i);
    }

    return bestFitness;
}


Statistic.prototype.getAVGFitnessByGeneration = function(callback){
    var avgFitness = [];

    for(var i=0; i<this.generation.length; i++){
        var tempSum = 0;

        for(var j=0; j<this.generation[i].length; j++){
            tempSum += this.generation[i][j].fitness;
        }

        tempSum = tempSum/this.generation[i].length;
        avgFitness.push(tempSum);

        if(callback!=undefined)
            callback(tempSum, i);
    }


    return avgFitness;
}


Statistic.prototype.addGeneration = function(generation){
    var temgen = []
    generation.forEach(function(item){
        temgen.push(item.copy());
    });

    this.generation.push(temgen);
}

Statistic.prototype.showTheFitnessByGeneration = function(){

    this.getAVGFitnessByGeneration(function(item, index){
        console.log("Generation "+index+" - avg: "+ item);
    })
}


Statistic.prototype.showTheBestFitnessByGeneration = function(){

    this.getTheFitnessByGeneration(function(item, index){
        console.log("The best of generation "+index+" : "+ item);
    })
}


Statistic.prototype.showAllFitnessByGeneration = function(){

    for(var i=0; i<this.generation.length; i++){
        var tempSum = 0;

        for(var j=0; j<this.generation[i].length; j++){
            tempSum += this.generation[i][j].fitness;
        }

        tempSum = tempSum/this.generation.length ;
        avgFitness.push(tempSum);

        if(callback!=undefined)
            callback(tempSum, i);
    }
}


Statistic.prototype.showTheBest = function(){
    this.getTheBest(function(item){
       console.log("The best fitness: "+item.fitness+" with in "+item.index+" generations");
    });
}