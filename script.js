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
let html = document.querySelector("html");
let resultDisplay = document.querySelector(".resultDisplay");
let currentDisplay = document.querySelector(".currentDisplay");
let clearButton = document.querySelector(".clear");
let operatorButtons = document.querySelectorAll(".opr");
let numberButtons = document.querySelectorAll(".num");
let equalButton = document.querySelector(".equal");
let decimalButton = document.querySelector(".dec");
let sign = document.querySelectorAll(".sign");
let deleteButton = document.querySelector(".del");
let regexForHandlingNumbers = /[0-9]/;
let regexForHandlingOperators = /[\/+*-]/;
html.addEventListener("keyup", function() {
	if (regexForHandlingNumbers.test(event.key)) {
		if (operatorChoosen === null) {
			if (num1 === undefined) {
				num1 = event.key;
				currentDisplay.textContent = num1;
			}
			else {
				num1 += event.key;
				currentDisplay.textContent = num1;
			};
		}
		else {
			if (num2 === undefined) {
				num2 = event.key;
				currentDisplay.textContent = num2;
			}
			else {
				num2 += event.key;
				currentDisplay.textContent = num2;
			};
		};
	}
	else {
		if (event.key === "Backspace" || event.key === "Delete") {

			if (operatorChoosen === null) {
				if (num1 != undefined) {
					if (num1 === "") {
						num1 = undefined;
					}
					else {
						num1 = num1.slice(0, -1);
						currentDisplay.textContent = num1;
						;
					};
				}
			}
			else {
				if (num2 != undefined) {
					if (num2 === "") {
						num2 = undefined;
					}
					else {
						num2 = num2.slice(0, -1);
						currentDisplay.textContent = num2;
					};
				}
			}
		}
		else if (event.key === "+" || event.key === "-") {

			if (num1 === undefined && operatorChoosen === null) {
				setNum1(event.key);
				currentDisplay.textContent = event.key;
			}
			else if (num2 === undefined && operatorChoosen != null) {
				setNum2(event.key)
				currentDisplay.textContent = event.key;
			};
		}
		else if (regexForHandlingOperators.test(event.key)) {

			if ((num1.charAt(0) === '+' && num1.length === 1) || (num1.charAt(0) === '-' && num1.length === 1)) {
				operatorChoosen = null;
			}
			else {
				if (operatorChoosen === null) {
					operatorChoosen = event.key;
					currentDisplay.textContent = operatorChoosen;
					resultDisplay.textContent = finalResult;
				};
			};
		}
	}
});

deleteButton.addEventListener("click", () => {
	if (operatorChoosen === null) {
		if (num1 != undefined) {
			if (num1 === "") {
				num1 = undefined;
			}
			else {
				num1 = num1.slice(0, -1);
				currentDisplay.textContent = num1;
				;
			};
		}
	}
	else {
		if (num2 != undefined) {
			if (num2 === "") {
				num2 = undefined;
			}
			else {
				num2 = num2.slice(0, -1);
				currentDisplay.textContent = num2;
			};
		}
	}
})

decimalButton.addEventListener("click", () => {
	if (operatorChoosen === null) {
		if (num1 === undefined) {
			num1 = decimalButton.textContent;
			currentDisplay.textContent = decimalButton.textContent;
			//decimalButton.disabled = true;

		}
		else if (num1.indexOf('.') === -1) {
			num1 += decimalButton.textContent;
			currentDisplay.textContent += decimalButton.textContent;
		}
		else {
			console.log("Found a Decimal!!");
		};
	}
	else {
		if (num2 === undefined) {
			num2 = decimalButton.textContent;
			currentDisplay.textContent += decimalButton.textContent;
		}
		else if (num2.indexOf('.') === -1) {
			num2 += decimalButton.textContent;
			currentDisplay.textContent += decimalButton.textContent;
		}
		else {
			console.log("Found a Decimal!!");
		};
	};
})

function setNum1(value) {
	if (num1 === undefined) {
		num1 = value;
	}
	else {
		num1 += value;
	};
}
function setNum2(value) {
	if (num2 === undefined) {
		num2 = value;
	}
	else {
		num2 += value;
	};
}
// clear display and variables.
clearButton.addEventListener("click", () => {
	resultDisplay.textContent = " ";
	currentDisplay.textContent = " ";
	num1 = undefined;
	num2 = undefined;
	operatorChoosen = null;
	finalResult = null;
});
//Event Listener for selecting sign;
sign.forEach(e => {
	e.addEventListener("click", () => {
		if (num1 === undefined && operatorChoosen === null) {
			setNum1(e.textContent);
			currentDisplay.textContent = e.textContent;
		}
		else if (num2 === undefined && operatorChoosen != null) {
			setNum2(e.textContent)
			currentDisplay.textContent = e.textContent;
		};

	})

});
//Select Operator
operatorButtons.forEach(btn => {
	btn.addEventListener("click", () => {
		if ((num1.charAt(0) === '+' && num1.length === 1) || (num1.charAt(0) === '-' && num1.length === 1)) {
			operatorChoosen = null;
		}
		else {
			if (operatorChoosen === null) {
				operatorChoosen = btn.textContent;
				currentDisplay.textContent = operatorChoosen;
				resultDisplay.textContent = finalResult;
			};
		};
	})
});

//Select numbers.
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
equalButton.addEventListener("click", () => {
	if (finalResult === null) {
		finalResult = selectOperation(parseFloat(num1), parseFloat(num2), operatorChoosen);
		currentDisplay.textContent = finalResult.toFixed(1);
	}
	else {
		finalResult = selectOperation(parseFloat(finalResult), parseFloat(num2), operatorChoosen);
		currentDisplay.textContent = finalResult.toFixed(1);
	};
	num1 = "";
	num2 = undefined;
	operatorChoosen = null;
})
