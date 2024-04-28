"use strict";

const user = {
  name: "Іван", //? Ключ
  age: 30,
  isAdmin: true,
};
console.log(user["name"]); //Іван
console.log(user.age); //30

console.log(user.capcity);

user.age = 15;
user["isAdmin"] = false;
console.log(user);

user.capcity = 100;
console.log(user);
//? Видалення

delete user.isAdmin;
console.log(user);

delete user.capcity;
console.log(user);

let name = "Resort hote";
let stars = 5;

const es6Hotel = {
  name,
  stars,
  capcity: 100,
};

const key = "person";
const object = {};
object[key] = "Андрюша";

const getKey = function () {
  return "age";
};

console.log(object);
const obj2 = {
  [key]: "Андрюша",
};
const hotel = {
  name: "Resort hotel",
  stars: 5,
  capcity: 100,
  //!ES5
  greethES5: function () {
    console.log("Welcome!");
  },
  //!ES6
  /*   greethES6() {
    console.log("Welcome!");
  } */
};

hotel.greeth = function () {
  console.log("add metod to object");
};
hotel.greeth();

delete hotel.greeth;

console.log(hotel);

//? Доступ до обєкту через This

const user = {
  name: "Петрик",
  age: 60,
  hobby: "sleep",
  /* showName() {
    console.log(`Привіт ${this.name}`);
}, */
  changeAge(value) {
    return (this.age = 60);
  },
  showName() {
    console.log(`Привіт ${this.name}`);
  },
};

/* user.showName() */
user.showName(user.changeAge(70));

//

const datdArra = [
  { name: "irena", age: 15, isStudent: true },
  { name: "ira", age: 40, isStudent: true },
  { name: "Alina", age: 145, isStudent: false },
];

// /Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

const person = {
  name: "vlad",
  age: 13,
  gender: men,
  user(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
  }
};
