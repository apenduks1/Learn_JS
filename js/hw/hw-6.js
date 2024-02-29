//Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const btn = document.querySelector(".btn");
const p = document.querySelector(".paragraph");
btn.addEventListener("click", () => {
  btn = p;
});


//Створити розмітку  зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const list = document.querySelector(".list")
const item1 = list.childNodes
item1.addEventListener("click", () => {
    item1 = "new text";
  });