"use strict";

console.log(navigator.userAgent);
console.log(location.href);

location.href =
  "https://edu.goiteens.com/uk/calendarhttps://edu.goiteens.com/uk/calendar";

const htmlElement = document.documentElement;
console.log(htmlElement);

const headElement = document.head;
console.log(headElement);

const bodyElement = document.body;
console.log(bodyElement);

const title = document.querySelector(".title");
const parentElemenNode = title.parentNode;
console.log(parentElemenNode);

const childOfList = document.querySelector(".list");
const childElemetNode = list.childNodes;
console.log(childElemetNode);

const firstChild = childOfList.firstChild;
const lastChild = childOfList.lastChildChild;

const container = document.querySelector(".container");
const firstChildElement = container.firstElementChild;
console.log("Преший дочірний елемент", firstChildElement);

const secondElementElement = firstChildElement.nextElementSibling;
console.log("Другий дочірний елемент", secondElement);
const firstParagraph = document.querySelector("p");
console.log("Перший елмент",firstParagraph )


const allParagraph = document.querySelectorAll("p");
console.log("Всі елменти",allParagraph )

const secondParagraph = document.querySelector(".second")

btnHidden.addEventListner("click", () =>{
    container.hidden = !container.hidden;
})