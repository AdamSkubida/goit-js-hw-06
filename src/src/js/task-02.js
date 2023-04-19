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

ingredients.forEach((element) => {
  const listItem = document.createElement("li");

  listItem.classList.add("item");

  listItem.innerHTML = element;
  list.appendChild(listItem);
});
