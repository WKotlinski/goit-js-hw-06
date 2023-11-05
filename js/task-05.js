const input = document.getElementById("name-input");
const span = document.getElementById("name-output");
input.addEventListener("input", () => {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
});
