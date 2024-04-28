"use strict";

//Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const btn =  document.getElementById(btn);
const fn = () => {
prompt("Hello World!")
}
btn.addEventListener('click'), fn

//Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2


const input = document.getElementById(guessField);

let randomNumber = Math.floor(Math.random() * 100) + 1;
const fn1 = (randomNumber, input) => {
  if ((input = input.value)) {
    prompt("Правильно");
  } else {
    prompt("Не правильно");
  }
};


// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

const body = document.getElementById(body);

const fn2 = () => {
    for(let i = 1; ;i++){
        prompt(i)
    }
}

body.addEventListener('click'), fn2

//Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

const fn3 = ( callback) => {
console.log(callback);
}

const arr = [1, 2, 3, 4 ,5]
const callback = (arr,squareArr)=>{
    for(let o of arr){
        squareArr.pop(arr[o])
        console.log(squareArr);
    }
}
const squareArr = []

// Розрахунок дисконтної ціни Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const fn4 = (price, discot)=>{
console.log(price ** di);
}