function addNumbers(a, b) {
  return a + b;
}
function subtractNumbers(a, b) {
  return a - b;
}
function multiplyNumbers(a, b) {
  return a * b;
}
function divideNumbers(a, b) {
  if (b == 0) {
    return null;
  }
  return a / b;
}

function selectOperation(num1, num2, operator) {
  if (operator === '+') {
    return addNumbers(num1, num2);
  }
  else if (operator === '-') {
    return subtractNumbers(num1, num2);
  }
  else if (operator === '*') {
    return multiplyNumbers(num1, num2);
  }
  else if (operator === '/') {
    return divideNumbers(num1, num2);
  }
  else {
    return null;
  };
}
// Assigning variables to be used.
let num1;
let num2;
let finalResult = null;
let operatorChoosen = null;
// Dom elements.
let resultDisplay = document.querySelector(".resultDisplay");
let currentDisplay = document.querySelector(".currentDisplay");
let clearButton = document.querySelector(".clear");
let operatorButtons = document.querySelectorAll(".opr");
let numberButtons = document.querySelectorAll(".num");
let equalButton = document.querySelector(".equal")
clearButton.addEventListener("click", () => {
  resultDisplay.textContent = " ";
  currentDisplay.textContent = " ";
  num1 = "";
  num2 = "";
  operatorChoosen = null;
  finalResult = null;
});

//operators.
let operatorButtons = document.querySelectorAll(".opr");
operatorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    operatorChoosen = btn.textContent;
    currentDisplay.textContent = operatorChoosen;
    resultDisplay.textContent = finalResult;
  })
});

//numbers.
let numberButtons = document.querySelectorAll(".num");
numberButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (operatorChoosen === null) {
      if (num1 === undefined) {
        num1 = btn.textContent;
        currentDisplay.textContent = num1;
      }
      else {
        num1 += btn.textContent;
        currentDisplay.textContent = num1;
      };
    }
    else {
      if (num2 === undefined) {
        num2 = btn.textContent;
        currentDisplay.textContent = num2;
      }
      else {
        num2 += btn.textContent;
        currentDisplay.textContent = num2;
      };
    };
  });
})

//run operation function 
let equalButton = document.querySelector(".equal")
equalButton.addEventListener("click", () => {
  if (finalResult === null) {
    finalResult = selectOperation(parseInt(num1), parseInt(num2), operatorChoosen);
    currentDisplay.textContent = finalResult;
  }
  else {
    finalResult = selectOperation(parseInt(finalResult), parseInt(num2), operatorChoosen);
    currentDisplay.textContent = finalResult;
  };
  num1 = "";
  num2 = "";
  operatorChoosen = "";
})

