"use strict";

//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "monobank",
  accountNumber: "Kostya",
  balance: 4000,
  deposit(deposit) {
    this.balance += deposit;
  },
  withdraw(withdraw) {
    this.balance -= withdraw;
  },
};

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const temperature = document.getElementById(input);
const weather = {
  temperature: temperature,
  humidity: 1,
  windSpeed: 10,
  temperaturePlusOrMinus() {
    if (temperature < 0) {
      prompt("температура нижче 0 градусів Цельсія");
    } else if ((temperature = 0)) {
      prompt("температура  0 градусів Цельсія");
    } else {
      prompt("температура вище 0 градусів Цельсія");
    }
  },
};

//Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: "Kostya",
  email: "myemail@gmail.com",
  password: 10203040,
  login(emailInput,passwordInput ) {
if(emailInput == this.email && passwordInput == this.password ) {

} else {
    prompt("EROR")
}
  }
};

//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
    title: 'My life',
    director: "I am",
    year: 2011,
    rating: 10,
  ratingCheck(){
if(this.rating >= 8){

} else{
    
}
  }

}