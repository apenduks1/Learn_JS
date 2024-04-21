"use strict";

1;

const fnA = function () {
  console.log("Почала виконуватися функція fnA");
  console.log("Далі виконується fnA");

  /*     return */
};
const fnВ = function () {
  console.log("Почала виконуватися функція fnВ");
  /*     return */
};

console.log("Почла виконуватися функція");

fnA();

/* const count = function(countForm = 0, countTo = 10, step = 1) {
 console.log(`countFrom = ${countfrom}`)  

} */

count(2, 5);

count(2);

count(undefined, 5, 2);

count();

const withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log("Введіть суму більше 0");
  } else if (amount > balance) {
    console.log("So small balance");
  } else {
    console.log("ok");
  }
};

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);

const withdraw2 = function (amount, balance) {
  if (amount === 0) {
    console.log("Введіть суму більше 0");
    return;
  }
  if (amount > balance) {
    console.log("So small balance");
    return;
  }
};

withdraw2(0, 300);
withdraw2(500, 300);
withdraw2(100, 300);

const a = 10;

function showMessage() {
  console.log(a);
  console.log("Hey");

  function red() {
    console.log("Hey red");
  }
}

showMessage();

console.log(a);
console.log(red());

/* function(){} */
const fn = function () {};

// Псевдо масив arguments

const sum = function () {
  /* console.log(arguments) */
  const args = Array(arguments);
  console.log(args);
  let totalSum = 0;
  for (let num of args) {
    totalSum += num;


  }
  console.log()
  return totalSum
  
};

sum(1, 2, 3, 4, 5, 6, 7);

const fn1 = function(...args){
  console.log(args)
}

fn1(1, 2 , 3, 5, 6,)




if(true) {
  function checkList (){
    console.log("list")
  }
}

function type (){
  console.log("list")

}

console.log(0);

console.log(value)
var value = 5
if(true){
  console.log(value)
  var value =10
  console.log(value)
}
var value =15
console.log(value);

const data = 3
if(true) {
  const data = 6
  console.log(data);
}