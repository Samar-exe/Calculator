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

const numbers = [];
for (let i = 1; i <= 9; i++) {
  numbers[i] = document.querySelector("#num" + i);
};
const operators = [];
for (let i = 1; i <= 6; i++) {
  operators[i] = document.querySelector("#btn" + i);
};
