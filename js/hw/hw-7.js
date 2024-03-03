"use strict"

const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    btn.style.backgroundColor("#fffff")
})



const h = document.querySelector(".title")
h.addEventListener("click", () => {
    h.classList.toggle("h1")
})



const int = document.querySelector(".int")
const btn1 = document.querySelector(".btn1")
const p = document.querySelector('.p')
btn1.addEventListener("click", () => {
    p.textContent= int.value
})


