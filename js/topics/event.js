"use strict";

/* const sigleBtn = document.querySelector(".btn--single");
const multipleBtn = document.querySelector(".btn--multiple");

function handleClick() {
  alert("Click!");
}

sigleBtn.addEventListener("click", handleClick);

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

multipleBtn.addEventListener("click", () => {
  alert("Second callBack!");
});

/* multipleBtn.onClick = function() {
    alert('Thanks')
} 

const addBtn = document.querySelector('[data-action="add"] ');
const remuveBtn = document.querySelector('[data-action="remuve"] ');
const btn = document.querySelector("#btn ");

addBtn.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
  console.log(event.this);

  console.log(event);

  btn.removeEventListener("click", handleClick);
});
remuveBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
});

//event.target – “цільовий” елемент, який ініціював подію, він не змінюється в процесі спливання.
//this – “поточний” елемент, той, на якому в даний момент виконується обробник.

const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
}); */

//lesson 2

//submit

const form = document.querySelector(".form");
const loginInput = document.querySelector('[type="text"]');
const passInput = document.querySelector('[type="password"]');

function handleSubmit(event) {
  event.preventDefault();
  const login = loginInput.valeu.trim();
  const password = passInput.valeu.trim();
  form.reset();
  alert(`Дякуємо за ргістрацію 
  Логін: ${login}
  Пароль: ${password}`);
}
form.addEventListener("submit", handleSubmit);

const focusBtn = document.querySelector(".focus--btn");
const blurBtn = document.querySelector(".blur--btn");

focusBtn.addEventListener("click", function () {
  loginInput.focus();
  console.log("Input is focuset");
});

blurBtn.addEventListener("click", function () {
  loginInput.blur();
  console.log("Input is blur");
});

//change

loginInput.addEventListener("change", function (event) {
  const newValeu = event.target.valeu;
  console.log("Input valeu change:", newValeu);
});

//input

loginInput.addEventListener("input", function (event) {
  const newValeu = event.target.valeu;
  console.log("Input valeu input:", newValeu);
});

//keydown

/* document.addEventListener('keydown', (event) =>{
  if(event.key === "Enter"{
    console.log('enter')
  })


})
 */

// const box = document.querySelector(".box");

// let leftPosition = box.offsetLeft;
// function translatePosition(event) {
//   console.log("keydown");
//   if (event.key === "ArrowRight") {
//     leftPosition += 10;
//     box.style.left = leftPosition + "px";
//   } else if (event.key === "ArrowLeft") {
//     leftPosition -= 10;
//     box.style.left = leftPosition - "px";
//   }
// }

// document.addEventListener("keydown", translatePosition);

const box = document.querySelector(".box");

let leftPosition = box.offsetLeft; // початкова позиція
let topPosition = box.offsetLeft;

function translatePosition(event) {
  if (event.key === "ArrowRight") {
    // leftPosition = leftPosition + 10
    leftPosition += 10;
    box.style.left = leftPosition + "px";
  } else if (event.key === "ArrowLeft") {
    // leftPosition = leftPosition - 10
    leftPosition -= 10;
    box.style.left = leftPosition + "px";
  } 
}

function translateSecondPosition(event) {
  if (event.key === "ArrowUp") {
    // leftPosition = leftPosition - 10
    topPosition += 10;
    box.style.bottom = topPosition + "px";
  }
  else if (event.key === "ArrowDown") {
    // leftPosition = leftPosition - 10
    topPosition -= 10;
    box.style.bottom = topPosition + "px";
  }
}

document.addEventListener("keydown", translatePosition);
document.addEventListener("keydown", translateSecondPosition);
