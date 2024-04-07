"use strict";

// Методи join та split

// Метод join

const clients = ["Arina", "Max", "Rost"];
const stringClients = clients.join(", ");

console.log(clients.join("")); // ArinaMaxRost
console.log(clients.join(" ")); // Arina Max Rost
// console.log(clients.join(", ")); // Arina, Max, Rost
console.log(clients.join("-")); // Arina-Max-Rost

console.log(typeof stringClients); // string

// split - перетворює рядок в масив

const message = "Ласкаво просимо!";

console.log(message.split("")); // ['Л', 'а', 'с', 'к','а', 'в', 'о', ' ','п', 'р', 'о', 'с','и', 'м', 'о', '!']
console.log(message.split(" ")); // [ 'Ласкаво', 'просимо!' ]

//  Методи IndexOf() та includes()
const setFruits = ["Манго ", "Ківі", "Яблуко", "Слива", "Кавун"];
console.log(setFruits.indexOf("Яблуко")); //2
console.log(setFruits.indexOf("Апильсин")); //-1

console.log(setFruits.includes("Кавун")); // true
console.log(setFruits.includes("Апильсин")); // false

// Перевіка множини умов
const fruit = "Слива";
if (fruit === "Слива" || fruit == "Яблуко") {
  console.log("It is red");
}
if (setFruits.includes(fruit)) {
  console.log("It is red");
}

//  Методи push() та pop()

const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);

const array = ["aga", 2, true];
array.pop();
console.log(array);

const users = ["Jon", "Alisa", "Bob"];
users.shift();
console.log(users);

users.unshift("Mark");
console.log(users);

const setFruits1 = ["Манго ", "Ківі", "Яблуко", "Слива", "Кавун"];

const setFruitsCopy = setFruits1.slice(1, 4);
console.log(setFruitsCopy);
const setFruitsCopy1 = setFruits1.slice(1);
console.log(setFruitsCopy1);

const numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 3)
console.log(numbers);


/* console.log(numbers.splice(4, 0, "pink"))

const languages  = ('JS', "Java", "C++")
languages.splice(1, 1, "Python") 
 */
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [10, 20, 30, 40, 50];
const allNumbers = numbers1.concat(numbers2)
console.log(allNumbers);