// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

console.log("Task5:");

const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const SpanRef = document.querySelector("#name-output");
console.log(SpanRef);

inputRef.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    // console.log(e.target.value);
    SpanRef.textContent = e.target.value;
    console.log(SpanRef);
    e.target.value = "";
    if (SpanRef.textContent === "") {
      SpanRef.textContent = "незнакомец";
    }
  }
});

// inputRef.addEventListener("keypress", () => {
//   console.log("keypress");
// });

// inputRef.addEventListener("keyup", () => {
//   console.log("keyup");
// });
