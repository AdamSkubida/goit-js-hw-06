"use strict";

const counterValue = document.querySelector("#value");

let number = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  number++;
  counterValue.textContent = number;
});

decrementBtn.addEventListener("click", () => {
  number--;
  counterValue.textContent = number;
});
