function Color(r,g,b, a){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}


Color.prototype.toString = function() {
    var s = "rgba(";
    s += this.r;
    s += ",";
    s += this.g;
    s += ",";
    s += this.b;
    s += ",";
    s += this.a;
    s += ")";
    return s;
};
