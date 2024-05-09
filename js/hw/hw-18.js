"use strict";
//Напиши скрипт, який, для об'єкта user, послідовно: додає поле mood зі значенням 'hap замінює значення hobby на 'skydivi замінює значення premium на fa виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  mood: "hap",
  hobby: "voleyboll",
  premium: "na",
};
user.hobby = "skydivi";
user.premium = "fa";
const Arr = Object.keys(user)
for (let o of Arr) {
  console.log(o);
}


//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
let arr = []
let num = 0
const countProps = (obj) => {
arr = Object.keys
for(let o of arr){
    num+=o
    console.log(num);
}
}

//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
let theBest = 0
const findBestEmployee = (employees) =>{

    for(let o in employees){

    if(o.exesice > theBest){
     theBest = this.exesice
     console.log(o.name);
    }
    
    }
}

//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const allSalary = 0
const countTotalSalary= (employees) =>{

    for(let o in employees){
    allSalary+=o.salary
    }
}

//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).


const calculateTotalPrice = (allProdcuts) => {
for(let o in allProdcuts) {
log(o.price * o.number)
}
}