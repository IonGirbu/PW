let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(returnElement(2, 6));

function returnElement(start, end){
	return array.slice(start, end);
}