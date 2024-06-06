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
  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(sub(num1, num2));
      break;
    case "*":
      console.log(mult(num1, num2));
      break;
    case "/":
      console.log(div(num1, num2));
      break;
    default:
      console.log("Please select a valid operator");
      break;
  }
}

//Necessary Variable Declaration.
let num1Array = [];
let operator = [];
let num2Array = [];
const numbers = [];
let display = document.querySelector("#display-container")
const clear = document.querySelector("#clear");

for (let i = 0; i <= 9; i++) {
  numbers[i] = document.querySelector("#num" + i);
};
const operators = [];
for (let i = 1; i <= 5; i++) {
  operators[i] = document.querySelector("#btn" + i);
};

// to store the numbers in the firstNum array
numbers.map((item) => {
  return item.addEventListener("click", () => { return num1Array.push(item.textContent) });
})

clear.addEventListener("click", () => { display.textContent = " " })

//to run the opearate function when equals to sign is pressed.
const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  console.log(operate("**", parseInt(num1Array.join("")), 2));
})
