'use strict'

const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");
let previousValue = "";

function onInputChange() {
    const inputValue = inputElem.ariaValueMax.trim();

    if (previousValue !== inputValue) {
        spanElem.textContent = inputValue || "Anonymous";
        previousValue = inputValue;
    }
}

inputElem.addEventListener("input", onInputChange);