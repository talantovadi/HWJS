//1) Используя конструкцию if..else, напишите программу, которая проверяет, является ли число четным. Если число четное, выведите сообщение "Число четное", в противном случае выведите "Число нечетное".
const even = 5;
if (even % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//2) Используя конструкцию if..else, напишите программу, которая проверяет, является ли введенное число положительным, отрицательным или нулем. Выведите соответствующее сообщение: "Число положительное", "Число отрицательное" или "Число равно нулю".
let number = 0;
if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//3) Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
//  0, если значение равно нулю.
const num = prompt("Enter the number:");
if (num > 0) {
  alert("1");
} else if (num < 0) {
  alert("-1");
} else {
  alert("0");
}

//4)  Используя конструкцию switch...case, напишите код, который будет спрашивать: "Введите арифметический оператор ( +, -, *, %)", в зависимости от оператора выполните математическую операцию. В добавок создайте 2 переменные с числами и используйте их в этих операциях.
let sCase = prompt("Введите арифметический оператор ( +, -, *, %)");
let num1 = 3;
let num2 = 9;
switch (sCase) {
  case "+":
    console.log("Addition", num1 + num2);
    break;
  case "-":
    console.log("Subtraction", num2 - num1);
    break;
  case "%":
    console.log("Division", num2 % num1);
    break;
  case "*":
    console.log("Multiplication", num1 * num2);
    break;
  default:
    console.log("Не является оператором");
    break;
}

//5) Перепишите конструкцию if с использованием условного оператора '?' (тернарное выражение):
// let result;
// if (a + b < 4) { 
//  result = 'Мало'; 
// } else { 
//  result = 'Много'; 
// }
let a = 8;
let b = 5;
let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);


