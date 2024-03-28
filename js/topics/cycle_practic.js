"use strict";
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

for (let b = 0; a <= 5; a++) {
  console.log(a);
}

//for (let number = 0; number < 5;) {
// console.log(`Число ${number}`);
// }

let number = 0;
while (number < 5) {
  console.log(`Число ${number}`);
}

//Написати скрипт який буде перевіряти середній бал успішності учня. Прервати роботу циклу, коли середній бал буде меньше 7.

const grades = [8, 7, 6, 9, 8];
let sum = 0;
let average = 0;
let b = 0;
while (b < grades.length) {
  sum += grades[b];
  average = sum / (1 + b);
  console.log(`Оцінка ${b++}: ${grades[b]}`);
  console.log(`Поточний середній бал ${average.toFixed(2)}`);
  if (average < 7) {
    break;
  }
  b++;
}

for (let b = 0; b < grades.length; b++) {
  sum += grades[b];
  average = sum / (1 + b);
  console.log(`Оцінка ${b++}: ${grades[b]}`);
  console.log(`Поточний середній бал ${average.toFixed(2)}`);

  if (average < 7) {
    break;
  }
}

//Виведіть в консоль всі непарні числа за допомогою циклу for

for (let num = 0; num < 100; num++) {
  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}

//Виведіть в консоль всі парні числа за допомогою циклу for

for (let num = 0; num < 100; num++) {
  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}

//Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д
do {
  let d = prompt("Введіть число більше 100");
  if (d < 100) {
    continue;
  } else {
    break;
  }
} while (d < 100);


//Напиши скрипт який підраховує загальну суму зп працівників. Кількість робітників зберігається в змінній employees. ЗП кожного працівника це випадкове число від 500 до 5000. Записати суму в змінну totalSalary і вивести в на сторінку.
 
const employees = 10
let totalSalary = 0
for(let i = 1; i < employees; i++){
    let salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
    totalSalary += salary

} console.log(totalSalary)