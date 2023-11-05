function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("input").value;
const container = document.getElementById("boxes");
console.log(inputValue);
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

const creating = function () {
  for (const i = 0; i <= inputValue; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = box.style.width = 30 + i * 10 + "px";
    box.style.border = "1px red solid";
    container.appendChild(box);
  }
};
const destroy = function () {
  container.innerHTML = "";
};
createBtn.addEventListener("click", creating);
createBtn.addEventListener("click", destroy);
