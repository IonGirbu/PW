let arraymain = [1,2,"Mine",4,5,16,17,19,300,"c","Harry"];
console.log("Main array: ", arraymain);
convert(what_A_Number, arraymain);

function convert (func, array) {
	let newarray = array.slice();
	let check;						
	for (var i = 0; i < newarray.length; i++) {		
		check = func(newarray[i]);
		newarray[i] = check;
	}
	console.log("Converted Array: ", newarray);
}

function what_A_Number(n){
	let result = (typeof(n) != "number") ? n = "Wrong Number!" : 					
	(n % 2 == 0) ? n = n + " - numar par." : n = n + " - numar impar.";
	return n;
}