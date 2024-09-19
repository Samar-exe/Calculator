// Operation Functions
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

//function to perform operation.
function operation(num1, num2, operator) {
  if (operator === '+') {
    add(num1, num2);
  }
  else if (operator === '-') {
    sub(num1, num2);
  }
  else if (operator === '*') {
    mult(num1, num2);
  }
  else if (operator === '/') {
    div(num1, num2);
  }
  else {
    return -1;
  };
}
// Assigning variables to be used.
let num1;
let num2;
let operator;
