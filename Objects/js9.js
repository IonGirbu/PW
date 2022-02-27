const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
}
weekSwaper(weekDays);
console.log(weekDays);
function weekSwaper(obj) {
    let name;
    let abr;
    for (let i in obj) {
        name = i;
        abr = obj[i];
        delete obj[i];
        i = abr;
        obj[i] = name;
    }
} 