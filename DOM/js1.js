document.bgColor = "red";
setTimeout(() => {
    document.bgColor = "green";
}, 3000);
const elem = document.getElementById("container");
elem.innerHTML = "Orange";
elem.addEventListener("click", ()=>{
    document.bgColor = "Orange";
});
let counter = 0;
const ol_list = document.querySelector(".list");

listCreation = setInterval(() => {

    let li = document.createElement("li");
    li.textContent = `Элемент ${counter + 1}`;
    ol_list.append(li);

    if (counter % 2 == 0) {
        li.style.backgroundColor = "green";
    } else {
        li.style.backgroundColor = "violet";
    }

    if (counter == 19) {

        clearInterval(listCreation);

    }
    counter++;
}, 100);
