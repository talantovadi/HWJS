// Задание 1
// Напишите функцию, которая принимает в себя строку(параметр) и убирает из неё все пробелы. (возвращает строку без пробелов)
// "    hello my friends   " --> "hellomyfriends"

function deleteSpace(str) {
  return str.split(" ").join("");
}
let spaceText = "    hello my friends   ";
let result = deleteSpace(spaceText);
console.log(result);

// Задание 2
// Напишите функцию, которая принимает массив и возвращает его последний элемент

const arr = [1, 2, 3];

function lastElement(arr) {
  return arr[arr.length - 1];
}
let lastItem = lastElement(arr);
console.log(lastItem);

// Задание 3
// Напишите функцию, которая принимает два массива, соединяет их и возвращает

const arr1 = ["Hello"];
const arr2 = [2024];

function concatenateArr(arr1, arr2) {
  return arr1.concat(arr2);
}
let joinArrays = concatenateArr(arr1, arr2);
console.log(joinArrays);

// Задание 4
// Напишите функцию, которая принимает в себя строку и делает первую букву заглавной
// Например: 'привет' --> 'Привет'

let str = "привет";

function upperCase(str){
    let toUpper = str.toUpperCase(-1);
    console.log(toUpper);
}
upperCase(str);
// чутка сложновато