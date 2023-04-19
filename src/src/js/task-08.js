"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordlInput = event.target.elements.password;

  if (!emailInput.value || !passwordlInput.value) {
    alert(`Please fill in all fields!`);
  }
  const formData = {
    email: emailInput.value,
    password: passwordlInput.value,
  };

  console.log(formData);
  form.reset();
});
