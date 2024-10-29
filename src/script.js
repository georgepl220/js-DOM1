function calculate(operation) {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const errorMessage = document.getElementById("error-message");
    const resultDiv = document.getElementById("result");
  
    errorMessage.textContent = "";
    resultDiv.textContent = "";
  
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      errorMessage.textContent = "Будь ласка, введіть коректні числа.";
      return;
    }
  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
  
    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          errorMessage.textContent = "Ділення на нуль неможливе.";
          return;
        }
        result = number1 / number2;
        result = Math.round(result * 100) / 100;
        break;
      default:
        errorMessage.textContent = "Невідома операція.";
        return;
    }
  
    resultDiv.textContent = `Результат: ${result}`;
  }
  