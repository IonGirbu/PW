const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}
translate(weekDays);
console.log(weekDays);

function translate(obj) {
    let days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Simbata", "Duminica"];
    let counter = 0;
    for (let i in obj) {
        obj[i] = days[counter];
        counter++;
    }

}