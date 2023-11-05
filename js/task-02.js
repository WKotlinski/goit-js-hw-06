const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const elements = [];
for (const veggie of ingredients) {
  const li = document.createElement("li");
  li.textContent = veggie;
  elements.push(li);
}

ingredientsList.append(...elements);
