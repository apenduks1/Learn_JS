"use strict"
const Arr = [1, 'aga', true, anay]

// /Cтворити масив Arr1 за значеннями: 1, 5, “4”, “hello” ; і Arr2 зі значеннями: true,2, {}, [“a”], 222 . Вивести в консоль 2-гий елемент (по індексу) кожного з масивів і їх суму.
const Arr1 = [1, 5, '4', 'hello']
const Arr2 = [true,2, {}, ['a'], 222]
console.log(Arr1[2])
console.log(Arr2[2])
console.log(Arr1[2] + Arr2[2])


//Створіть масив рядків. Виведіть в консоль значення першого елементу. Змініть значення останнього елементу.
const arr2 = ["ugu", 'aga', "uga", "buga"]
console.log(arr2[0])
arr2[-1] = "guga"
console.log(arr2)

//Що буде в консолі? Розібрати чому саме такий результат:
const array = [10, 25, 13, 44, 15];
array[5] = 5;

for(let i = 0; i <array.value;i++ ){
    console.log(array[i])
}
for( o of array){
    console.log(array[o])
    o++
}


//Через індекс елемента додати в кінець масиву Arr1 новий елемент зі значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.

const arr1 = ["8", '2', "3", '7']   
arr1[4] = 22
for( let o of arr1){
    console.log(o)
   
}
//Створіть масив styles з елементами “Jazz” та “Blues”. Додайте “Rock-n-Roll” в кінець масиву. Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини. Видаліть перший елемент масиву та покажіть його. Вставте Rap та Reggae на початок масиву.
const styles = ['Jazz', 'Blues']
styles[styles.length] = "Rock-n-Roll"
styles[2] = "Classics"
styles.shift()
console.log(styles[0])
styles[1] = 'Reggae'
styles[0] = 'Rap'
console.log(styles)

//Порахувати загальну суму покупок в корзині
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for( let o of cart){
total = total + o

}
console.log(total)

//Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).
const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0] ;
for(let i = 1; i < numbers.length; i++){
    if(smallestNumber > numbers[i]){
        smallestNumber = numbers[i]
        console.log(smallestNumber)
}
}

//Знайдемо кількість додатних чисел у масиві:

const numbers1 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
let result = 0;
for(o of numbers1){
    if(o % 2 == 0){
        result = result +1
    }
}
console.log(result)