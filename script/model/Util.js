function Util(){

}
/**
 To generate a random color
 */
Util.getRandomColor = function() {
    return new Color(nextInt(255), nextInt(255), nextInt(255), Math.random())
}

/**
 To generate a random color with a gray
 */
Util.getRandomColorGrayScale = function() {
    var value = nextInt(255);
    return new Color(value, value, value, Math.random());
}


/**
 * get a random number up until n.
 */
function nextInt(n) {
    return Math.floor(Math.random()*(n+1));
}