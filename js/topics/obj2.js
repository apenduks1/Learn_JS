"use strict";

//* For in

const user = {
  name: "Jonh",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  //виодимо ключі обєкта
  console.log(key);
  console.log(user[key]);
}
//*Методи масиву

const hotel = {
  name: "Moto top",
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotel);
console.log(keys);

const values = Object.values(hotel);
console.log(values);

const entries = Object.entries(hotel);
console.log(entries);

//* Комбінація for...of та Object.keys

const person = {
  name: "Ivan",
  age: 20,
  job: "Web developer",
};

const keysOfPerson = Object.keys(person);

for(let key of keysOfPerson){
    console.log("value:", key);
}

for(let i= o; i <keysOfPerson; i++){
    console.log(keysOfPerson);
    console.log("value", person[keysOfPerson[i]]);
}


//* Spread

const temperatureCity = [90,23, 3, -6, 4308]

const min = Math.min(...temperatureCity)
console.log(min);

const houses = ["Arryn", "kgk", "hdfss", 'fjjh']
 
const copyOfHouses = [...houses]




const completeHouses = [...houses, "4308"]


const first = ["Arryn", "kgk", "hdfss",]
const second = ['fjjh',"4308"]
const third = first.concat(second)
const four = [...first, ...second]
