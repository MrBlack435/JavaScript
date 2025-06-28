function calculate() {
  // Get values
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operator = document.getElementById("operator").value;

  // Validate input
  if (num1 === "" || num2 === "") {
    document.getElementById("result").textContent =
      "Result: Please enter both numbers.";
    return;
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
      break;
  }

  document.getElementById("result").textContent = "Result: " + result;
}
