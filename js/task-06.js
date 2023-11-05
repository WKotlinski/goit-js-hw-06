const input = document.getElementById("validation-input");
const checkFunction = function () {
  const inputValue = input.value;
  const neededLength = input.getAttribute("data-length");
  if (inputValue.length == neededLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener("blur", checkFunction);
