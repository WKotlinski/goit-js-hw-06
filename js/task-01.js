const allLi = document.querySelectorAll(".item");
console.log(`Number of categories:${allLi.length}`);
allLi.forEach((item) => {
  const category = item.firstElementChild;
  console.log(` Category:${category.textContent}`);
  console.log(`Elements:${item.lastElementChild.children.length}`);
});
