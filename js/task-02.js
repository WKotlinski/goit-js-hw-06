const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
ingredients.forEach((veggie) => {
  const li = document.createElement("li");
  li.textContent = veggie;
  ingredientsList.appendChild(li);
});
