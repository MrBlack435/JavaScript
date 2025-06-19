// 4.Write a javascript Program to perform a swapping of two 
// variables.(compulsory user input)
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");

console.log("Before swapping: ", a,b);
let c=0;
c=a;
a=b;
b=c;

console.log("After swapping: a:"+a,"b:"+b);
document.getElementById('output').innerHTML =
"A =:"+ a +"<br>"+
"B =:"+ b;