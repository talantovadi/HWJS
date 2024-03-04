// 1) В массив const brandsArr = ['google', 'apple', 'microsoft'] добавьте строки 'xiaomi', 'huawei', 'oneplus'
// Для сохранения новых элементов используйте как минимум два разных способа, экспериментируйте и постарайтесь понять разницу между разными способами. Выведите результаты всех найденных способов в консоль.
const brandsArr = ["google", "apple", "microsoft"];
const newBrandsArr = brandsArr.concat(["xiaomi", "huawei", "oneplus"]);
console.log(newBrandsArr);

const brandsArr1 = ["google", "apple", "microsoft"];
brandsArr.push("xiaomi", "huawei", "oneplus");
console.log(brandsArr1);

// 2) Создайте массив имен и с добавьте в конец массива новое имя использую prompt, после таким же образом добавляем второе имя, только уже в начало массива
// Создаем пустой массив для имен
const namesArray = [];
const nameEnd = prompt("Имя в конец массива:");
namesArray.push(nameEnd);

const nameStart = prompt("Имя в начало массива:");
namesArray.unshift(nameStart);

console.log(namesArray);

// 3) У вас есть массив colors, содержащий цвета. Используйте метод splice, чтобы удалить второй элемент массива и затем добавить новый элемент "green". Выведите обновленный массив в консоль.
const colors = ["red", "yellow", "blue"];
colors.splice(1, 2, "green");
console.log(colors);

// 4) У вас есть массив numbers, содержащий числа от 1 до 10. Используйте метод slice, чтобы получить подмассив, содержащий элементы с пятого по восьмой включительно. Выведите полученный подмассив в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slcNum = numbers.slice(4, 8);
console.log(slcNum);
