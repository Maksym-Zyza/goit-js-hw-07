// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

console.log("Task2:");

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
