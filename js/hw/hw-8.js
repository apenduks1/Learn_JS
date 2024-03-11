"use strict";
const open = document.querySelector('[data-action="open-modal"]');
const modal = document.querySelector(".js-backdrop");
const close = document.querySelector('[data-action="close-modal"]');
const body = document.body;

function toOpenModal() {
  body.classList.toggle("show-modal");
}

open.addEventListener("click", toOpenModal);
close.addEventListener("click", toOpenModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    body.classList.remove("show-modal");
  }
});
//Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
/* 
const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener('input', function(event) {
    const newValeu =  event.target.valeu;
    title.textContent = "Привіт, " + newValeu.value
}
) */

//


const textControl = document.getElementById('font-size-control')
const changeText = document.getElementById('text')

textControl.addEventListener('input', function(){
  changeText.style.fontSize = textControl.valeu +' px'
})