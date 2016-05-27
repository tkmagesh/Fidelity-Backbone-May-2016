/*
Create a function that checks if the given number is a prime number or not
The algorithm should NOT be executed for the same number more than once
*/

isPrime(100)
isPrime() 

function getPrimeFinder(){
	var cache = {};
	function isPrime(n){
		if (typeof cache[n] === 'undefined'){
			console.log('processing ',n);
			if (n <= 3) {
				cache[n] = true;
			} else {
				for(var i=2; i<=(n/2); i++){
					if (n % i === 0){
						cache[n] = false;
						break;
					}
					cache[n] = true;
				}
			}
		}
		return cache[n];
	}
	return isPrime;
}

function getPrimeFinder(){
	var cache = {};
	function checkPrime(n){
		console.log('processing ',n);
		if (n <= 3) return true;
		for(var i=0; i<= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
}

function getOddEvenFinder(){
	var cache = {};
	function isOddOrEven(n){
		console.log('processing ',n);
		return n % 2 === 0 ? "even" : "odd";
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = isOddOrEven(n);
		return cache[n];
	}
}

function memoize(fn){
	var cache = {};
	
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = fn(n);
		return cache[n];
	}
}

/*
The above function (memoize) can be used to cache the result of any function but that takes only 1 argument
See below for a more generic implementation that works with any function for any number of arguments
*/
function memoize(fn){
	var cache = {};
	return function(){
		//var key = [].join.call(arguments, '-');
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(this,arguments);
		return cache[key];
	}
}