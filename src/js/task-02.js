"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

const listElements = ingredients.map((element) => {
  const newListElem = document.createElement("li");

  newListElem.classList.add("item");

  newListElem.innerHTML = element;

  return newListElem;
});

list.append(...listElements);
