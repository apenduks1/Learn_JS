"use stict";
//Створіть об'єкт "book" з властивостями "title", "title", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.
const book = {
  title: "Гаррі Потер",
  year: 1997,
  genre: "Фантастика",
  autor: "Джоан Роулінг",
  chengeProperty(key, value) {
    //   this.title = "Згодом";
    //  this.year = 2020
    //? Перевіряє чи є цей ключ в об'єкті
    if (this.hasOwnProperty(key)) {
      this[key] = value;
    } else {
      console.log("Не правильно вказанні дані");
    }
  },
};
book.chengeProperty("autor", "Едгар По");
book.chengeProperty("year", 2130);
console.log(book);

// Основне завдання - це написати функцію isBudgetEnough, яка буде повертати рядок. Якщо бюджету вистачає для опалення всього обсягу торгового центру - виводиться 'Бюджету достатньо', якщо ні - 'Бюджету недостатньо'. І все 🙂 🙂 🙂 Але ця задача є підзадачею.
// Але це завдання містить кілька підзадач всередині:


// - визначення того, чи вистачає бюджету на оплату такого обсягу;


const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
  isBudgetEnoug() {
    let S = 0;
    let V = 0;
    for( let shop of this.shops){
    S += shop.width * shop.length
    return S
    }
    V = S * shoppingMallData.height
    const spendings = this.budget - (V * this.moneyPer1m3 )
        if(spendings >= 0) {
         return 'Бюджету вистачає'
    } else {
        return 'Бюджету не вистачає'
    }
  },
  

};
console.log(shoppingMallData.isBudgetEnoug());
