function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const colorTextElem = bodyElem.querySelector(".color");
const buttonElem = bodyElem.querySelector(".change-color");

function onButtonClick() {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  colorTextElem.textContent = randomColor;
}

buttonElem.addEventListener("click", onButtonClick)