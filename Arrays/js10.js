let array = [5, 7,  2,  2,  3, 4, 1,  1, 5, 1, 7, 2, 5, 9, 0, 1];

console.log(uniqueSorted(array));

function uniqueSorted (arr){
	let unicarray = arr.filter(function(item, index){ return arr.indexOf(item) === index}); 
	unicarray.sort((a,b) => a - b); 
	return unicarray;
}