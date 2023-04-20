"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxOfBoxes = document.querySelector("#boxes");

const controls = document.querySelector("#controls");
const amountInput = controls.querySelector("#controls input");
const createBtn = controls.querySelector(`[data-create]`);
const destroyBtn = controls.querySelector(`[data-destroy]`);

function createBoxes(amount) {
  if (amount > 100) {
    amount = 100;
  }

  let size = 30;

  for (let i = 0; i <= amount; i++) {
    const newBox = document.createElement(`div`);

    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxOfBoxes.append(newBox);

    size += 10;
  }
}

function destroyBoxes() {
  boxOfBoxes.innerHTML = "";
}

createBtn.addEventListener(`click`, () => {
  const amount = Number(amountInput.value);
  createBoxes(amount);
});

destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});
