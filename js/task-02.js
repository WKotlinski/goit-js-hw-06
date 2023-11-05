const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const list = ingredients
  .map((veggie) => {
    const li = document.createElement("li");
    li.textContent = veggie;
    li.classList.add("item");
    ingredientsList.appendChild(li);
  })
  .join("");

ingredientsList.append(...list);
