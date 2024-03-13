// 1) Измените программу, которая будет выводить только ключи объекта на консоль.
let obj = {
  name: "Jason",
  age: 56,
};
for (const key in obj) {
  console.log(obj[key]);
}

// 2) Напишите программу, которая перебирает свойства объекта и удаляет свойства, значение которых равно null.
const obj2 = {
  a: 10,
  b: null,
  c: "string",
  d: null,
  e: "another string",
};
for (let key in obj2) {
  if (obj2[key] !== null) {
    console.log(obj2[key]);;
  }
}

// 3) Напишите программу, которая проверяет, содержит ли объект определенное свойство.
const obj3 = ["string", 23, NaN];
let type = 0;
for (const item of obj3) {
  if (typeof item === "number") {
    console.log("true");
  } else {
    console.log("false");
  }
}

// 4) Напишите программу, которая находит среднее значение числовых элементов массива. Чтобы найти среднее значение, вы должны сперва суммировать эти значения и поделить сумму на количество значений
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
    sum += number;
}
let middle = sum / numbers.length;
console.log(middle);

// 5) Вывести все ключи и значения массива, содержащего списки студентов по классам.
const studentsByClass = [
["1A", ["Alice", "Bob", "Charlie"]],
["2B", ["David", "Emily", "Frank"]],
["3C", ["Grace", "Henry", "Ivy"]]
];
// Вывод: Class: 1A - Alice, Bob, Charkie и т.д

for (const [className, students] of studentsByClass) {
  console.log(`Class: ${className} - ${students.join(', ')}`);
}
