// Napisz skrypt zarządzania formularzem logowania.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//     Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie
//     wydarzenia submit
//     Podczas przesyłania formularza strona nie powinna się odświeżać.
//     Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym,
//     że wszystkie pola powinny zostać wypełnione.
//     Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako
//      obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości.
//      Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
//     Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.
const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[name="email"]').value;
const inputPassword = document.querySelector('input[name="password"]').value;
const callback = function (event) {
  event.preventDefault();
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
