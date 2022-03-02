let addLinkAddress = (selector, link, thecolor) => {for (let i = 0; i < selector.length; i++) {
	selector[i].href = link;
	selector[i].style.color = thecolor;
}};

for (let i = 0; i < 20; i++) {
	
	link = document.createElement('a');

	if (i % 2 == 0) {
		
		link.className = "external";
		link.title = `External Link ${i}` ;
		link.innerHTML = `External Link ${i}<br/>`;

	} else {
		
		link.className = "internal";
		link.title = `Internal Link ${i}` ;
		link.innerHTML = `Internal Link ${i}<br/>`;

	}

	document.body.appendChild(link);
	console.log(link);
}

extLink = document.querySelectorAll(".external");
intLink = document.querySelectorAll(".internal");

addLinkAddress(extLink,"https://www.google.com","red");
addLinkAddress(intLink, "C:/");