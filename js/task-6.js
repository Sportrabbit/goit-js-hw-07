function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myElems = document.querySelector("#controls");
const inputElem = myElems.firstElementChild;
const buttonElemCreate = myElems.querySelector("[data-create]");
const buttonElemDestroy = myElems.querySelector("[data-destroy]");
const containerElem = document.querySelector("#boxes");

buttonElemCreate.addEventListener("click", onCreateButtonClick); 
buttonElemDestroy.addEventListener("click", onDestroyButtonClick);

function createBoxes(amount) {
  const result = [];
  for (let i=0; i < amount; i++) {
    const str = `<div style='width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()}'></div>`
    result.push(str);
  }
  containerElem.innerHTML = result.join("");
}

function destroyBoxes() {
  containerElem.innerHTML = "";
}

function onCreateButtonClick() {
  const amount = +inputElem.value;
  if (amount <= 100) {
    createBoxes(amount);
    inputElem.value = "";
  }
}

function onDestroyButtonClick() {
  destroyBoxes();
}