//__proto__

//hiding is costly


function Spinner(){
	//this.__count = 0;
	var count = 0;
	/*
	this.up = function(){ return ++count; };
	this.down = function(){ return --count; };
	*/
}
Spinner.prototype.up = function(){ return ++this.__count; };
Spinner.prototype.down = function(){ return --this.__count; };

//static method
Spinner.isSpinner = function(obj){
	return obj instanceof Spinner;
};


var s1 = new Spinner();
s1.up()
var s2 = new Spinner();
var s3 = new Spinner();
var s4 = new Spinner();
var s5 = new Spinner();
