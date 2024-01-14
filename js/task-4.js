"use strict"

const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const userEmail = formElem.elements.email.value.trim();
    const userPassword = formElem.elements.password.value.trim();

    const userData = {
        email: userEmail,
        password: userPassword,
    };

    if (userEmail === "" || userPassword === "") {
        alert("All form fields must be filled in");
    } else {
        console.log(userData);
        formElem.reset();
    }
}