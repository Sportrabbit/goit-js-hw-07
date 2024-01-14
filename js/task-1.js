'use strict'

const liElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElements.length}`);

liElements.forEach((liElem) => {
    const liTitle = liElem.querySelector("h2");
    const liText = liElem.textContent;
    const liChildren = liElem.querySelectorAll("li");

    console.log(`Category: ${liText}`);
    console.log(`Elements: ${liChildren.length}`);
});