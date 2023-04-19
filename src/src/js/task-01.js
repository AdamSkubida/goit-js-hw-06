"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log("Number of categories:", totalCategories.length);

const category = totalCategories.forEach((element) => {
  const categoryName = element.querySelector("h2");
  console.log("Category:", categoryName.innerHTML);

  const totalElements = element.querySelectorAll("li");
  console.log("Elements:", totalElements.length);
});
