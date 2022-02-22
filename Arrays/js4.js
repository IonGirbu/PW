let array = [];
sumInputNumbers();
console.log(array);

function sumInputNumbers(){
	let sum = 0;
	do{
		n = prompt("Introduce a number");
		let check = (n == "") ? n = null : n == n;
		array.push(Number(n)); 
	}while(n != null);
	array.pop();
	
	for (let i = 0; i < array.length; i++) {
		sum = sum + array[i]; 
	}
	console.log(sum);
}