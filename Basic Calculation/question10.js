//10.Use ternary Opratore and make a program to check the age to determine the eligibility to vote.
let age = Number(prompt("Enter your age:"));
let message= (age>=18)?"you can vote":"you can't vote";
console.log(message);
document.getElementById('output').innerHTML=message;