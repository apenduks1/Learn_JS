"use strict";

// 1) Створіть функцію, яка обчислюватиме об'єм і площу повної поверхні куба (теж базова математика, іноді використовується у створенні анімацій). Ця функція приймає в себе ціле число зі значенням довжини ребра куба. Відповідь виведіть у форматі рядка, який зображений у прикладах.
// Якщо у функцію потрапив неправильний аргумент або обчислити значення неможливо - повернути рядок "При обчисленні сталася помилка"
// НЕ ВИКОРИСТОВУЙТЕ ОПЕРАТОР СТУПЕНЯ ** - в онлайн середовищі браузера він не працює і тести будуть ламатися. Це через те, що цей оператор із новішого стандарту, ніж тут доступний.
// Приклади:
// calculateVolumeAndArea(5) => 'Об'єм куба: 125, площа всієї поверхні: 150'
// calculateVolumeAndArea(15) => 'Об'єм куба: 3375, площа всієї поверхні: 1350'
// calculateVolumeAndArea(15.5) => 'Під час обчислення сталася помилка'
// calculateVolumeAndArea('15 ') => 'Під час обчислення сталася помилка'
// calculateVolumeAndArea(-15) => 'Під час обчислення сталася помилка'

const calculateVolumeAndArea = function (num) {
  if (!Number.isInteger(num) || num <= 0 || typeof num === "") {
    return "Під час обчислення сталася помилка";
  }
  const V = Math.pow(num, 3);
  const S = 6 * Math.pow(num, 2);
  return `'Об'єм куба: ${V}, площа всієї поверхні: ${S}'`;
};

//console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(-15));
//calculateVolumeAndArea('15 ') => 'Під час обчислення сталася помилка'
//calculateVolumeAndArea(15.5) => 'Під час обчислення сталася помилка'
//calculateVolumeAndArea(-15) => 'Під час обчислення сталася помилка'

/* Напиши скрипт пошуку логіна
 - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
; */
    const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
    const loginToFind = "aj4xth3m4n";
    const loginCheck = function (loginToFind, logins) {
    if (logins.includes(loginToFind)) {
        console.log("Користувач [логін] не знайдено."); 
    } else{
        console.log("Користувач [логін] знайдено.") 
    }

    
    };
    loginCheck(loginToFind, logins)