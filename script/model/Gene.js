//Gene
//status ok
function Gene( x, y, radius, color){
   this.radius = radius;
   this.x = x;
   this.y = y;
   this.color = color;
}

Gene.prototype.copy = function(){
    return new Gene(this.x, this.y, this.radius, new Color(this.color.r, this.color.g, this.color.b, this.color.a) );
}

Gene.prototype.mutate = function(chromo){

    //factor of mutation
    var randomFactor = Math.random();

    //change color with 40%
    if(randomFactor < 0.4){
        var col = null;

        //grayscale mode
        if(COLORMODE == "gray"){
            var aTemp = this.color.a;
            //r, g and b has same values
            var valueScale = this.color.r;

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
            var rTemp = this.color.r;
            var gTemp = this.color.g;
            var bTemp = this.color.b;
            var aTemp = this.color.a;

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

        this.color = col;

        //30%
    }else if(randomFactor < 0.7){

        //5% move x and y
        if(randomFactor < 0.45){
            this.x = nextInt(200);
            this.y = nextInt(250);

            //15% - move only one
        }else if(randomFactor < 0.60){
            //10% - move x
            if(randomFactor < 0.50 ){
                this.x = nextInt(200);
                //10% move y
            }else{
                this.y = nextInt(250);
            }

            //10% - change radius
        }else{
            this.radius = parseInt(Math.random()*MAXRADIUS) ;
        }

        //15% remove gene
    }else if(randomFactor < 0.85) {

        var xrandom = parseInt(Math.random()*200);
        var yrandom = parseInt(Math.random()*250);
        var radiusrandom = parseInt(Math.random()*MAXRADIUS);
        var colorrandom = null;
        if(COLORMODE == "gray"){
            colorrandom = Util.getRandomColorGrayScale();
        }else{
            colorrandom = Util.getRandomColor();
        }

        var tempGene = new Gene(xrandom, yrandom, radiusrandom, colorrandom);
        chromo.addGene(tempGene);

        //15% add gene
    }else{

        chromo.removeGene( nextInt( chromo.genes.length) );

    }

}