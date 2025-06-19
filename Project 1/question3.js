 // 3.Write a javascript Program to two variable addition, subtraction, multiplication, division .(compulsory user input)
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
 
let sum = parseInt(num1) + parseInt(num2);
let difference = parseInt(num1) - parseInt(num2);
let product = parseInt(num1) * parseInt(num2);
let quotient = parseInt(num1) / parseInt(num2);

console.log("Addition"+sum);
console.log("Subtraction"+difference);
console.log("Multiplication"+product);
console.log("Division"+quotient);

document.getElementById('output').innerHTML = 
    "Addition: " + sum + "<br>" +
    "Subtraction: " + difference + "<br>" +
    "Multiplication: " + product + "<br>" +
    "Division: " + quotient;