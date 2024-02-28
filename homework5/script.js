// 1) Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
let age = 18;
if (age >= 14 && age <= 90) {
    console.log("находится в диапазоне между 14 и 90 включительно");
} else {
    console.log("не находится в диапазоне между 14 и 90 включительно");
}

// 2) Выберите правильный логический оператор в следующем выражении, чтобы в результате было отображено значение переменной b.
let a = "";
let b = 7;
let c = 1;
let d = 2; 
alert( a || c && b || d );

// 3) Напишите условие, которая принимает 2 переменные: age (возраст) и hasLicense (есть ли у человека водительские права).Условие должно возвращать true, если человеку уже исполнилось 18 лет и у него есть водительские права, и false в противном случае.
let aGe = 17;
let hasLicense = true;
if (aGe >= 18 && hasLicense) {
    console.log("true");
} else {
    console.log("false");
}

// 4) Создайте переменную age и присвойте ей значение вашего возраста.Создайте условие, которое проверяет, является ли ваш возраст либо меньше 18, либо больше 65. Если условие истинно, выведите сообщение в консоль о том, что вы либо слишком молоды, либо вам нужно отдыхать и не писать код. Если условие ложно, выведите сообщение о том, что ваш возраст подходит для выполнения этой задачи.
let agE = 18;
if (agE < 18 || agE > 65) {
    console.log("Вы либо слишком молоды, либо вам нужно отдыхать и не писать код.");
} else {
    console.log("ваш возраст подходит для выполнения этой задачи");
}