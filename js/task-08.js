const form = document.querySelector(".login-form");
const callback = function (event) {
  event.preventDefault();
  const form = event.target;
  const inputEmail = form.elements.email.value;
  const inputPassword = form.elements.password.value;
  if (inputEmail === "" || inputPassword === "") {
    alert("Uzupełnij pola!");
  } else {
    const inputValues = {
      email: inputEmail,
      password: inputPassword,
    };
    console.log("Dane formularza", inputValues);
    form.reset();
  }
};
form.addEventListener("submit", callback);
