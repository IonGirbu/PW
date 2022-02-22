let counter = 0;
let num = 0;
let arr = [];

alert('Introduce number');
do{
	n = prompt('Introduce ' + num + ' number:');
	arr[num] = n;
	num ++;
}while (n != null);
arr.pop(); 								

console.log('1). for method: ');		
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

console.log('2). do...while method: ');		
do{
	console.log(arr[counter]);
	counter++;
}while(arr.length != counter);

console.log('3). while method: ');		
counter = 0;
while(arr.length != counter){
	console.log(arr[counter]);
	counter++;
}

console.log('4). for-in method: ');		
for (let key in arr) {
	console.log(arr[key]);
}

console.log('5). for-of method: ');		
for (let key of arr) {
	console.log(key);
}