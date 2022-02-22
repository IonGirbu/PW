let array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100]
filter();
console.log(array);
console.log(filter()); 
function filter(){
	return array.filter(function(arr){ return typeof(arr) == "number"});
}