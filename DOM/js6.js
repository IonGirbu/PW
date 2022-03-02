function showNotification(option){
	div = document.createElement("div");
	div.className = "notification";
	div.innerHTML = option;
	div.style.marginTop = "10px";
	div.style.marginLeft = "10px";
	document.body.appendChild(div);
	const b = setTimeout(()=>{div.innerHTML = ""}, 1500);
}

showNotification("Message");