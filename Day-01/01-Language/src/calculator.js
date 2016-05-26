function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n)
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) 
		+ add([].slice.call(arguments,1));
}

/*;
1. As a method of obj
	this -> obj

2. As a function
	this -> window

3. Using the call()

4. Using the apply()




*/