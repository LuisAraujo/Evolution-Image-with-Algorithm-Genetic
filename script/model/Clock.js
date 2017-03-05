//Clock
//status: ok
function Clock(){
    this.hours = 0;
    this.minutes = 0;
    this.secunds = 1;
    this.targetFunction = null;
}



Clock.prototype.start = function () {
    this.targetFunction = window.setInterval(function() {

        if (this.secunds == 60) {
            this.minutes++;
            this.secunds = 0;
        }

        if (this.minutes == 60) {
            this.hours++;
            this.secunds = 0;
            this.minutes = 0;
        }

        var stringh, stringm, strings  = "";

        if(this.hours<10)
            stringh = "0"+this.hours;
        else
            stringh = ""+this.hours;
        if(this.minutes<10)
            stringm = "0"+this.minutes;
        else
            stringm = ""+this.minutes;
        if(this.secunds<10)
            strings = "0"+this.secunds;
        else
            strings = ""+this.secunds;

        $("#current_temp").text(stringh+":"+stringm+":"+strings);

        this.secunds++;
    }.bind(this),1000);
}

Clock.prototype.stop = function () {
    window.clearInterval(this.targetFunction);
}


Clock.prototype.getTime = function(){
    return this.hours+"_"+this.minutes+" "+this.secunds;
}