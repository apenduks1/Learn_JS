//Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

let drink;

switch (drink) {
  case "coffe":
    drink = alert("Кава");
    break;
  case "tea":
    drink = alert("Чай");
    break;
  case "juice":
    drink = alert("Сік");
    break;
  default:
    drink = alert("Немає такого напою");
}
alert(drink);

//  Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.

const input = document.querySelector(".int");
const btn = document.querySelector(".btn");
let day;

function weak() {
  switch (input) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "пятниця":
      day = "Будній";
      break;
    case "субота":
    case "неділя":
      day = "Вихідний";
      break;
    default:
      day = "Некоректно вказан день тижня";
  }
  alert(day);
}
btn.addEventListener("click", weak);

//Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

//викорасттані зміні з попереднього завдання

let season;
function mounth() {
  switch (input) {
    case "Грудень":
    case "Лютий":
    case "Січень":
      alert("Зима");
      break;
    case "Березень":
    case "Квітень":
    case "Травень":
      alert("Весна");
      break;
    case "Червень":
    case "Липень":
    case "Серпень":
      alert("Літо");
      break;
    case "Вересень":
    case "Жовтень":
    case "Листопад":
      alert("Осінь");
      break;
    default:
      alert("Некоректно вказаний місяць");
  }
}

btn.addEventListener("click", mounth);

// Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.

//викорасттані зміні з попереднього завдання

function MounthToDays() {
  switch (input) {
    case "Грудень":
        alert("31");
      break;
    case "Лютий":
        alert("28");
      break;
    case "Січень":
        alert("31");
      break;

    case "Березень":
        alert("31");
      break;
    case "Квітень":
        alert("30");
      break;
    case "Травень":
        alert("31");
      break;

    case "Червень":
        alert("30");
      break;
    case "Липень":
        alert("31");
      break;
    case "Серпень":
        alert("31");
      break;

    case "Вересень":
        alert("30");
      break;
    case "Жовтень":
        alert("31");
      break;
    case "Листопад":
        alert("30");
      break;
    default:
      alert("Некоректно вказаний місяць");
  }
}

btn.addEventListener("click", MounthToDays);

//Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" - "стоп", якщо "зелений" - "йти", якщо "жовтий" - "чекати".

//викорасттані зміні з попереднього завдання

function color() {
    switch (input) {
      case "червоний":
          alert("стоп");
        break;
      case "зелений":
          alert("йти");
        break;
      case "жовтий":
          alert("чекати");
        break;
      default:
        alert("Некоректно вказаний коліір");
    }
  }
  
  btn.addEventListener("click", color);

  //Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.

  const number1 = document.querySelector('.number1')
  const number2 = document.querySelector('.number2')
  const operation = document.querySelector('.operation')

  
function caculator() {
    switch (operation) {
      case "/":
          alert(+number1 / +number2);
        break;
      case "+":
          alert(+number1 + +number2);
        break;
      case "-":
          alert(+number1 - +number2);
        break;
        case "*":
            alert(+number1 * +number2);
          break;
      default:
        alert("Некоректно вказана дія");
    }
  }

  btn.addEventListener("click", );