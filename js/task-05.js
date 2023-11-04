// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input)
// wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste,
// w spanie powinien wyświetlić się tekst "Anonymous".

const input = document.getElementById("name-input");
const span = document.getElementById("name-output");
input.addEventListener("input", () => {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
});
