let a = 2 + 3;
switch (a) {
  case 3:
    console.log("false");
    break;
  case 4:
    console.log("true");
    break;
  case 5:
    console.log("false");
    break;
  default:
    console.log("no no no");
}

let b = 3;

switch (b) {
  case 4:
  case 2:
    console.log("false");
    break;

  case 3:
    xonsole.lo("true");
    break;

  case 10:
  case 11:
    console.log("false");
    break;
  default:
    console.log("no no no");
}

let age = 23;
let gender = "men";

switch (true) {
  case age >= 10 && gender === "men":
    console.log("old man");
    break;
  case age >= 10 && gender === "women":
    console.log("young women");
    break;
  default:
    console.log("i dont no");
}

let arg = 0;

switch (arg) {
  case "0":
  case "1":
    console.log("1 or 0");
    break;

  case "2":
    console.log(" 2");
    break;

  case "3":
    console.log("3");
    break;
  default:
    console.log("i dont n");
}

// * область видимості  *   //

const value = "Hey";
if (true) {
  const a = " ok";
  console.log("value");
  console.log(a);
}
console.log("global scope", value);
console.log("Block scope", a);