"use strict";
//Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.Спочатку через for Потім через join()


for(let i = 0; i<=friends.length; i++){

string +=  friends[i]
if(i<3){
    
}

}
console.log(string)

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
string = friends.join(', ')
console.log(string)

//Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
//Видалити

const card = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
]
card.splice(2, 1 , )
console.log(card)
//Додати
const card1 = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
]
card1.push("Карточка-6")
console.log(card1)
// Оновити
const card2 = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
]
card2.splice(3, 1,"Карточка-4 (оновленна)")
console.log(card2)
