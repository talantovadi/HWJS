// 1) Дан некоторый массив. Объедините элементы этого массива в строку с разделителем '-'
const arr = ["h", "e", "l", "l", "o"];
const join = arr.join("-");
console.log(join);

// 2) Пользователь вводит строку(prompt). Разделите эту строку на слова и выведите их на экран.
const user = prompt("Enter any words:");
const split = user.split(" ");
alert(split);
console.log(split); //или здесь нужно использовать join?

// 3) Преобразуйте дату из формата гггг-мм-дд в формат дд.мм.гггг, используя split и join.
const enter = "гггг-мм-дд";
const reversed = enter.split("-").reverse().join(".");
console.log(reversed);

// 4) Вывести пользователей используя map foreach
let usersRecords = [
  { name: "John", id: 123, marks: 98, pole: "mentor", age: 35 },
  { name: "Baba", id: 101, marks: 23, pole: "student", age: 12 },
  { name: "yaga", id: 200, marks: 45, pole: "student", age: 18 },
  { name: "Wick", id: 115, marks: 75, pole: "mentor", age: 24 },
];
const map = usersRecords.map((item) => item.name);
console.log(map);

const forEach = usersRecords.forEach((item) => console.log(item.name));

// 5) Получить индекс пользователя у которого age равен 18
let findIndex = usersRecords.findIndex((item) => item.age === 18);
console.log(findIndex);

// 6) Получить имена студентов и вывести из в одну СТРОКУ
let filtered = usersRecords.filter((item) => typeof item.pole === "string");
let getName = usersRecords.map((item) => item.name);
let toString = getName.join(", ");
console.log(toString);

// 7) Получить студентов у которых marks больше 44 и добавить к ним еще 20 marks, т.е было 30 станет 50
let marks = usersRecords.filter(item => item.marks > 44 && item.pole === "student");
let adding = marks.map(item => item.marks + 20);
console.log(adding);
