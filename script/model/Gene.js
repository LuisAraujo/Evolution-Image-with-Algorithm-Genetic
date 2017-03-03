//gene
function Gene( x, y, radius, color){
   this.radius = radius;
   this.x = x;
   this.y = y;
   this.color = color;
}

Gene.prototype.copy = function(){
    return new Gene(this.x, this.y, this.radius, new Color(this.color.r, this.color.g, this.color.b, this.color.a) );
}



