// ul#categories

// Количество категорий
const Categories = document.querySelectorAll("li.item");
console.log(`В списке ${Categories.length} категории.`);
// console.log(Categories);

// Текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
for (let i = 0; i < Categories.length; i++) {
  console.log(`Категория: ${Categories[i].children[0].textContent}`);
  console.log(
    `Количество элементов: ${Categories[i].children[1].children.length}`
  );
}
