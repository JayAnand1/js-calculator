class Calculator {
  constructor() {
    this.operator = "";
    this.currentNumber = "0";
    this.previousNumber = "";
    this.result = 0;
  }
  addNumber(num) {
    if (this.currentNumber === "0") {
      this.currentNumber = num;
    } else {
      this.currentNumber += num;
    }
    return this.currentNumber;
  }

  addOperator(op) {
    this.operator = op;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "0";
  }

  clearDisplay() {
    this.operator = "";
    this.currentNumber = "0";
    this.previousNumber = "";
    this.result = 0;
    return this.currentNumber;
  }

  calculate() {
    switch (this.operator) {
      case "+":
        this.result =
          parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
        break;
      case "-":
        this.result =
          parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
        break;
      case "*":
        this.result =
          parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
        break;
      case "/":
        this.result =
          parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
        break;
    }
    return this.result;
  }
}

// The functions below provide an interface for the index.html file to perform functions
// Logic is inside a seperate class, this decouples the actual logic from functions that 
// update the view

const myCalculator = new Calculator();

function addNumber(num) {
  document.getElementById("display").innerHTML = myCalculator.addNumber(num);
}

function addOperator(num) {
  myCalculator.addOperator(num);
}
function clearDisplay() {
  document.getElementById("display").innerHTML = myCalculator.clearDisplay();
}

function calculate() {
  document.getElementById("display").innerHTML = myCalculator.calculate();
}

// let operator = '';
// let currentNumber = '0';
// let previousNumber = '';
// let result = 0;

// function addNumber(num) {
//   if (currentNumber === '0') {
//     currentNumber = num;
//   } else {
//     currentNumber += num;
//   }
//   document.getElementById('display').innerHTML = currentNumber;
// }

// function addOperator(op) {
//   operator = op;
//   previousNumber = currentNumber;
//   currentNumber = '0';
// }

// function clearDisplay() {
//   operator = '';
//   currentNumber = '0';
//   previousNumber = '';
//   result = 0;
//   document.getElementById('display').innerHTML = currentNumber;
// }

// function calculate() {

//   switch (operator) {
//     case '+':
//       result = parseFloat(previousNumber) + parseFloat(currentNumber);
//       break;
//     case '-':
//       result = parseFloat(previousNumber) - parseFloat(currentNumber);
//       break;
//     case '*':
//       result = parseFloat(previousNumber) * parseFloat(currentNumber);
//       break;
//     case '/':
//       result = parseFloat(previousNumber) / parseFloat(currentNumber);
//       break;
//   }
//   document.getElementById('display').innerHTML = result;
// }
