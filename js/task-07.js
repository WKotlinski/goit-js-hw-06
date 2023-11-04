const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
const changeFont = function () {
  const inputValue = input.value;
  text.style.fontSize = inputValue + "px";
};

input.addEventListener("input", changeFont);
