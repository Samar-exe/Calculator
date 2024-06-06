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
let firstNum;
const numbers = [];
for (let i = 1; i <= 9; i++) {
  numbers[i] = document.querySelector("#num" + i);
};
const operators = [];
for (let i = 1; i <= 6; i++) {
  operators[i] = document.querySelector("#btn" + i);
};
const clear = document.querySelector("#clear");
firstNum = firstNum + numbers.map((item) => {
  return item.addEventListener("click", () => { return console.log(item.textContent) });
})
