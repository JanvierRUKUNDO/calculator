let firstNumber = null;
    let operator = null;
    let secondNumber = null;

    function addNumber(number) {
      const display = document.getElementById("display");
      display.value += number;
    }

    function addOperator(clickedOperator) {
      const display = document.getElementById("display");
      firstNumber = parseFloat(display.value);
      operator = clickedOperator;
      display.value = "";
    }

    function operate(operator, num1, num2) {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          if (num2 === 0) {
            display.value = "Error: Division by zero";
            return null;
          } else {
            return num1 / num2;
          }
        default:
          return null;
      }
    }

    function equals() {
      const display = document.getElementById("display");
      secondNumber = parseFloat(display.value);
      const result = operate(operator, firstNumber, secondNumber);
      if (result !== null) {
        display.value = result;
        firstNumber = result;
        operator = null;
        secondNumber = null;
      }
    }

    function clearCalculator() {
      const display = document.getElementById("display");
      display.value = "";
      firstNumber = null;
      operator = null;
      secondNumber = null;
    }