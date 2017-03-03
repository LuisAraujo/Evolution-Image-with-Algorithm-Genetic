/* this script run when page is loaded*/

//10 is defalt
window.MAXRADIUS = 0;
window.MAXCIRCLE = 0;
window.COLORMODE = 0;
window.LOCALFOLDER = "";
window.stopNow = false;
window.imageTarget = null;
window.view = null;
window.verbose = false;
window.p  = null;
window.clock = null;

//save ref of function interval for time
var funcIntervalo;
//secunf, minute, hours
var s = 1;
var m = 0;
var h = 0;

$(window).on("load",function(){
    //set seed #01
    //Math.seedrandom('AAaBbCc');



     //get canvas of html
     var canvas = document.getElementById("view");
     //get context 2d of canvas
     var ctx = canvas.getContext("2d");

    //get canvas of html
    var canvas2 = document.getElementById("view2");
    //get context 2d of canvas
    var ctx2 = canvas2.getContext("2d");

    clock = new Clock();
    view = new View(canvas2, ctx2);

    //play button of main screen
    $("#bt-play").click( function(){
        //falg stop is false
        stopNow = false;

        //call funtion count time
        clock.start();

        //hide this button and show pause button
        $(this).hide();
        $("#bt-pause").css("display","inline");

        //print image target in canvas
        ctx.drawImage(image,0,0);

        //if is the first time of click play
        if(imageTarget == null){

            MAXRADIUS =  parseInt( $("#text-radius-limite").val() );
            MAXCIRCLE = parseInt( $("#text-number-circle").val() );
            COLORMODE =  parseInt( $("#select-typecolor option:selected").val());
            LOCALFOLDER = $("#text-testname").val();

            //get data of image
            window.imageTarget = ctx.getImageData(0, 0, 200, 250).data;
            //p is global
            p = new Population(1, imageTarget);
            //call generations process
            p.generation();


        }else{
            p.generation();
        }
    });

    $("#bt-pause").click( function(){
        stopNow = true;
        $(this).hide();
        $("#bt-play").css("display","inline");
        clock.stop();
    });


    //trigger file with button
    $("#bt-file-data").click(function(){
        $("#file-data").trigger("click");
    });

    //geting image target
    document.getElementById('file-data').onchange = function() {
        readFileByLine(this, function(data){
                window.arrLocals = [];
                setLocals(data)},
            function(data){
                window.arrTrucks = [];
                setTrucks(data)
            });
    };
});


/*
 * copyArray [Method]
 * this method copy array of Locals and Vehicles
 * newDemand [array] - array of Local or Vehicle
 */
copyArray = function(array){
    newarray = new Array();
    for(var i = 0; i< array.length; i++){
        newarray.push( array[i].copy() );
    }
    return newarray;
}




