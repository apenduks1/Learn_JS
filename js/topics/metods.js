"use strict";

const user = [
  { name: "Max", isActive: true },
  { name: "Alex", isActive: false },
  ,
  { name: "Kiril", isActive: true },
  { name: "Dasha", isActive: false },
];

const activeUser = user.filter((user) => user.isActive);
const disactiveUser = user.filter((user) => !user.isActive);

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

const fruiitsForFilter = ["apples", "bananas", "cherrys"];

const searchterm = "a";

const mathingFruits = fruiitsForFilter.filter((fruit) =>
  fruit.includes(searchterm)
);

console.log(mathingFruits);

const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Clothing" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Pants", price: 100, category: "Clothing" },
];

const elctronicWidthCateogryAndPrise = products.filter(
  (product) => product.category === "Electronics" && product.price > 500
);

//? find

const trees = ["birch", "maple", "oak", "popular"];

const searchTree = trees.find((tree) => tree.includes("m"));

//? every

const users = [
  { name: "Anton ", isPremium: false },
  { name: "Roma ", isPremium: true },
  { name: "Bob ", isPremium: true },
];

const isPremiumForEvery = user.every(user => user.isPremium)

//? some

const isPremiumForSome = user.some(user => user.isPremium)

const formFields = [ 'name', "email", "password"]

const formValue = {name: "jonh", email: 'ruetri'}





//Отримати масив імен всіх гравців

const allNames = players.map(players => players.name)

console.log(allNames);

//Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

const newPlayers = players.map(players =>{
    
   return { ...players, points: Math.round(  players.points *1.1)}    
} )

console.log(newPlayers);

//Збільшити кількість годин гравця по id. Переписати на тернарник

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    ];

    const playerId = 'player-3'

    const updataHours = {...players.find(player => player.id === playerId), timePlayed: players.find(player => player.id === playerId)}
  
   