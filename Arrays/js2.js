let database = [
	{
		name: "Danu Drapiciuc",
		marks: [3,8,6,3,5]
	},
	{
		name: "Denis Hadirca",
		marks: [9,6,6,9,10]
	},
	{
		name: "Eugeniu Andriut",
		marks: [3,7,4,8,9,8]
	},
	{
		name: "Victor Cucos",
		marks: [3,9,4,9,5]
	},
	{
		name: "Alexandru Antonovici",
		marks: [6,7,2,1,10]
	},
	{
		name: "Ionela Alexandrova",
		marks: [1,1,2,5,2]
	}
]

media();
smallerthen5();
maxminmark();
sort();
MVS();



function media (){
	let avmark = 0;
	console.log('Average marks');
		for (let j = 0; j < database.length; j++){						
			for (let i = 0; i < database[j].marks.length; i++) {		
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			console.log(database[j].name + ' = ' + avmark.toFixed(2)); 
			avmark = 0;
		}
}

function smallerthen5 () {
	let avmark = 0;
	console.log('Average marks < 5');
		for (let j = 0; j < database.length; j++){				
			for (let i = 0; i < database[j].marks.length; i++) {		
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			if (avmark < 5) {
				console.log(database[j].name + ' = ' + avmark.toFixed(2));
			}
			avmark = 0;
		}
}

function maxminmark() {
	let avmark = 0;
	let themarks = [];   		
	let min;
	let max = 0;
	let namemin;
	let namemax;
	console.log('The lowest and the highest mark');
		for (let j = 0; j < database.length; j++){					
			for (let i = 0; i < database[j].marks.length; i++) {		
			 avmark += database[j].marks[i];
			}
			avmark = avmark / database[j].marks.length;
			themarks[j] = avmark;
			avmark = 0;
		}
		min = themarks[0];
		for (let i = 0; i < themarks.length; i++) {
			if (themarks[i] < min) {
				min = themarks[i];
				namemin = database[i].name;
			} 
			if (themarks[i] > max) {
				max = themarks[i];
				namemax = database[i].name;
			}
		}
		console.log('The lowest mark have ' + namemin + ' with mark of: ' + min.toFixed(2));
		console.log('The highest mark have ' + namemax + ' with mark of: ' + max.toFixed(2));
}

function sort () {
	let avmark = 0;
	let clonedata = JSON.parse(JSON.stringify(database)); 
	for (let j = 0; j < clonedata.length; j++){						
			for (let i = 0; i < clonedata[j].marks.length; i++) {		
			 avmark += clonedata[j].marks[i];
			}
			avmark = avmark / clonedata[j].marks.length;
			clonedata[j].marks = avmark;
			avmark = 0;
		}
	clonedata.sort(function(a,b){return b.marks - a.marks}); 		
	console.log('Sorted marks [+ to -]');
	for (let j = 0; j < clonedata.length; j++){				

		console.log(clonedata[j].name + ' = ' + clonedata[j].marks.toFixed(2));
	}
}

function MVS () { 				
		let avmark = 0;
		let counter = 0;
		let avmclass = 0;
		let clonedata = JSON.parse(JSON.stringify(database));
		console.log('Average marks > ACM');
		for (let j = 0; j < clonedata.length; j++){				     	
			for (let i = 0; i < clonedata[j].marks.length; i++) {		
				avmark += clonedata[j].marks[i];
			}
			avmark = avmark / clonedata[j].marks.length;
			clonedata[j].marks = avmark;
			avmclass += avmark;
			avmark = 0;
		}
		avmclass = avmclass / clonedata.length;
		for (let j = 0; j < clonedata.length; j++){				     
			if (clonedata[j].marks > avmclass) {
				console.log(clonedata[j].name + ' = ' + clonedata[j].marks.toFixed(2));
			}
		}
}