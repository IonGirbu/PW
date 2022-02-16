document.bgColor = "red";
setTimeout(() => {
    document.bgColor = "green";
}, 3000);
const elem = document.getElementById("container");
elem.innerHTML = "Orange";
elem.addEventListener("click", ()=>{
    document.bgColor = "Orange";
});