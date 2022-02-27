let menu = {
    width: 200,
    height: 300,
    title: "My menu" };
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
function multiplyNumeric(obj) {
    for (let i in obj) {
        (typeof (obj[i]) == "number") ? (obj[i] *= 2) : (false);
    }
}