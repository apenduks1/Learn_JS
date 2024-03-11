"use strict";


//Сумма покупки зберігається в змінній payment - отримати з інпуту

//const balance = document.querySelector(".input");
//const payment = document.querySelector(".input2");
//if (!balance.value === "0" && !payment.value === "0") //{
// alert(
//    `Загальна вартість замовлення ${payment} //кредитів. Перевіряємо кількість`
//  );
//}
//if (payment < balance) {
//  balance = +balance - +payment;
//  alert(`На рахунку залишилося ${balance} кредитів`);
//} else {
//  alert("На рахунку недостатньо коштів для проведення //операції!");
//}
///const end = alert("Операція завершена");

const totalSpend = 600;
const payment = Number(document.querySelector(".input2"));
let discount = 0;

const btn = document.querySelector(".btn");
function checkDicount() {
  if (totalSpend > 1000 || totalSpend < 5000) {
    discount = "бронзовий партнер, знижка 2%";
  } else if (totalSpend > 100 || totalSpend < 1000) {
    discount = "срібний партнер, знижка 5%";
  } else if (totalSpend > 5000) {
    discount = "золотий партнер, знижка 10%";
  } else {
    discount = "не партнер, знижка 0%";
  }

  const end = `Оформляемо замовлення на суму ${payment} зі знижкою ${discount}`;
}

btn.addEventListener("click", checkDicount);
