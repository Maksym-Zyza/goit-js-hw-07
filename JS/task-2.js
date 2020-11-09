const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const createList = (value) => {
  const liRef = document.createElement("li");
  liRef.textContent = value;
  //   liRef.classList.add("list");
  //   console.log(liRef);
  return liRef;
};

const listRef = ingredients.map((value) => createList(value));
// console.log(listRef);

const productsListRef = document.querySelector("#ingredients");
productsListRef.append(...listRef);
console.log(productsListRef);
