// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.
// change-color i wyświetla wartość koloru w span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const callback = function () {
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};
button.addEventListener("click", callback);
