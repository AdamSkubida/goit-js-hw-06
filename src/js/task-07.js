"use strict";

const controlBar = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

controlBar.addEventListener("input", () => {
  text.style.fontSize = `${controlBar.value}px`;
});
