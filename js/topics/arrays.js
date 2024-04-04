"use strict";

const array = [];

const arr = new Array();

console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[2]);

console.log(typeof fruits);

fruits[2] = 1;
console.log(fruits);

const fruits = ["apple", "orange", "kiwi"];
console.log(fruits.length);

const arr1 = ["Apple", { name: "kiril" }, true];
console.log(arr1[1].name);

console.log(fruits[fruits.length - 1]);

fruits[fruits.length] = "plum";

console.log(fruits.at(-1));

//ітерація

const clients = ["Arina", "Max", "Sasha", "Kostya"];
for (let i = 0; i < clients.length; i++) {
  console.log(clients[i]);
}

const numbers = [];
for (let i = 0; i < 3; i++) {
  number.push(`name-${i}`);
}

console.log(numbers);

// for...of
for (let client of clients) {
  console.log(client);
}

const team = ["Misha", "Rostik", "Tim", "Adriana", "Tim"];

const teamNameToFind = "Tim";
let message;
for (let member of team) {
  if (member === teamNameToFind) {
    message = "ye";
  } else {
    message = "nema";
  }
}
console.log(message);

const numbers1 = [1, 2, 3, 7, 9, 80, 40, 50];
const thershold = 15;
for (i of numbers1) {
  if (i > thershold) {
    console.log(i);
  } else {
    continue;
  }
}
//Створити масив елементів простих типів.2. Продемонструвати звернення до елементів масиву, змінити елемент, додати елемент. Приклад коду можна взяти з конспекту.Показати та пояснити різницю між індексом та довжиною масиву.Перебрати масив за допомогою:циклу forцикл у for…of
let arr2 = ["1", "2", "3", "4", "5"];
arr2[2] = "banana";
arr2 = arr2 + "miks"
console.log(arr2)
for(let o = 0; o < arr2.length; o++) {
    console.log(arr2[o])

}
for( o of arr2){
    console.log(arr2[o])
    o++
}



const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9      ]
];


for(let i = 0; i< matrix.length; i++){
    console.log(matrix[i]) 
    for(let  j = 0; j < matrix.length; j++){
        console.log(matrix[i][j]) 
    }
}


//Cтворити масив Arr1 за значеннями: 1, 5, “4”, “hello” ; і Arr2 зі значеннями: true,2, {}, [“a”], 222 . Вивести в консоль 2-гий елемент (по індексу) кожного з масивів і їх суму.

const Arr1 = [1, 5, '4', 'hello']
const Arr2 = [true,2, {}, ['a'], 222]
console.log(Arr1[2])
console.log(Arr2[2])
console.log(Arr1[2] + Arr2[2])