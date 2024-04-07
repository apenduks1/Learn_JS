'use strict'
//  Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const arr = [1, 2, 3]
arr[1] = 10
console.log(arr)
//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const arr1 = ['aga', 'ugu', 'gugu' ]
arr1[3] = "for"
console.log(arr1)

// Створити скрипт який поверне суму всіх чисел в масиві.
const arr2 = [1, 2, 3]
let sum = 0
for( o of arr2){
    sum = sum + o
}
console.log(sum)
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const arr3 = [1, 2, 3, 4, 5]
for(let i = 0; i<arr3.length; i++){
    console.log(arr3(i))
}
//Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const arr4 = ['aga', 'ugu', 'gugud', "ugasa", "buga" ]
for( o of arr4){
 
    if(o.length <= 5 ){

    }
}
//ПОМИЛКА
//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numbers = [51, 18, 13, 24, 7, 85, 19 , 8 , 9, 100];
let bigestNumber = numbers[0] ;
for(let i = 1; i < numbers.length; i++){
    if(bigestNumber < numbers[i]){
        bigestNumber = numbers[i]
        console.log(bigestNumber)
}
}
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numbers1 = [51, 18, 13, 24, 7, 85, 19 , 8 , 9, 100];
for(o of numbers1){
    if(o % 2 == 0){
        console.log(o)
    }
}