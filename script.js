function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function operate(operator, num1, num2) {

}

//Necessary Variable Declaration.
let firstNum = [];
let operator = [];
let secondNum = [];
const numbers = [];
let display = document.querySelector("#display-container")
const clear = document.querySelector("#clear");

for (let i = 1; i <= 9; i++) {
  numbers[i] = document.querySelector("#num" + i);
};
const operators = [];
for (let i = 1; i <= 6; i++) {
  operators[i] = document.querySelector("#btn" + i);
};

// to store the numbers in the firstNum array
numbers.map((item) => {
  return item.addEventListener("click", () => { return firstNum.push(item.textContent) });
})

clear.addEventListener("click", () => { display.textContent = " " })
