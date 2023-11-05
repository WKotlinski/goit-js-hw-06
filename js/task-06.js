// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość
// wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

const input = document.getElementById("validation-input");
const checkFunction = function () {
  const inputValue = input.value;
  const neededLength = input.getAttribute("data-length");
  if (inputValue.length >= neededLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener("blur", checkFunction);
