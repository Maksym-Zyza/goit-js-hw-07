// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */

console.log("Task4:");

let counterValue = 0;
const valueRef = document.querySelector("#value");
// console.log(valueRef);

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  //   console.log(valueRef.textContent);
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
  //   console.log(valueRef.textContent);
};

const battonDecRef = document.querySelector("button");
// console.log(battonDecRef);
battonDecRef.addEventListener("click", decrement);

const battonIncRef = document.querySelector("[data-action='increment']");
// console.log(battonIncRef);
battonIncRef.addEventListener("click", increment);
