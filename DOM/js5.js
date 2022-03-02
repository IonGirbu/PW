input = document.createElement("input");
btn = document.createElement("button");
ol_list = document.createElement("ol");

ol_list.className = "mainList";
ol_list.setAttribute("id","mylist");

btn.innerHTML = "Introduce";
input.style.fontSize = "20px";
btn.style.fontSize = "20px";
document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(ol_list);

btn.disabled = true;

input.addEventListener('keyup', () => {
	if(input.value == ""){
		btn.disabled = true;
	} else {
		btn.disabled = false;
	}
})

btn.onclick = () => {
	let li = document.createElement("li");
	li.textContent = input.value;
	ol_list.appendChild(li);
	input.value = null;
	btn.disabled = true;
	
}

document.getElementById('mylist').addEventListener('click', function(event) {
  if ('LI' != event.target.tagName) return;
  alert(event.target.innerText);
}, false);