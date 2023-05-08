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