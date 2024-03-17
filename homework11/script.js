// Есть объект
let userData = {
  name: "John",
};

//1) Добавьте к объекту свойство age, получите его через prompt

userData.age = prompt("Enter your age");
console.log(userData);

//2) Добавьте свойство underage c булевым значением, получаем значение через confirm

userData.underAge = confirm("Are you underage?");
18;
console.log(userData);

//3) C помощью prompt получите ключ объекта. С помощью метода delete удалите это свойство с объекта

let getKey = prompt("Enter the key do delete:", "age");
delete userData[getKey];
console.log(userData);

//4) Добавьте к объекту свойство address, которая в свою очередь является объектом со свойствами: country, city, street. Постарайтесь использоваться несколько вариантов добавления чтобы закрепить каждый метод

let address = {
  country: "Kyrgyzstan",
  city: "Bishkek",
  street: "Umetalieva 113",
};
console.log(userData.address);

if (!!userData.address) {
    console.log("true object");
} else {
    console.log("doesn't exist");
}

if ("address" in userData) {
    console.log("true object");
} else {
    console.log("doesn't exist");
}

//5) В консоле выведите все значения включая свойство в address

for(let key in userData){
    console.log(userData[key]);
    if(typeof address === "object") {
        for(let key in address){
            console.log(address[key]);
        }
    }
}
