"use strict";

//Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента]. Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
const logItems = function (array) {
  for (let i = 0; i <= logItems.length; i++) {
    console.log(`${logItems(i)} - ${logItems(i)}`);
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// .calculateEngravingPrice(message, pricePerWord)
const calculateEngravingPrice = function calculateEngravingPrice(
  message,
  pricePerWord
) {
  pricePerWord = message.length;

  return pricePerWord;
};

calculateEngravingPrice("tik tak");

//Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function findLongestWord(words, longestWord) {
  for (var i = 1; i < words.length; i++) {
    longestWord = words[i];
  }
  return longestWord;
};
findLongestWord("I love u");

const formatString = function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.substring(0, 40) + "...";
  }
};
formatString("This is a test string to demonstrate the truncate function.");

//Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function checkForSpam(message) {
  if ((message = "spam" && message == "sale")) {
    return true;
  } else {
    return false;
  }
};
checkForSpam("This is a test string to demonstrate the truncate function.");

const input = promt("Введіть число")
let totalSum = 0;
const fn = function fn(input) {
  if (typeof input == number) {
    for (o of input) {
     totalSum = +o;
    }
    return totalSum
  } else {
    return "Помилка"

  }
};
