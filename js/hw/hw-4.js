"use strict";

//Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result = `5+5+’5’`;
console.log(typeof result);

//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = "k77154313@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

//Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const firstWord = "My";
const secondWord = "name";
const thirdWord = "is";
const fullName = firstWord + secondWord + thirdWord + `Viktor`;
console.log(fullName);

//Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Олександр";
const payment = 300;
const message = `Дякуємо,` + userName + `! До сплати` + payment + `гривень`;
alert(message);
