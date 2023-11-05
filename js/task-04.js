let counterValue = 0;
const valueText = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const incrementation = function () {
  counterValue += 1;
  valueText.textContent = counterValue;
};
const decrementation = function () {
  counterValue -= 1;
  valueText.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementation);

decrementBtn.addEventListener("click", decrementation);
