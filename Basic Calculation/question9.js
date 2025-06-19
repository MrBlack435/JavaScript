//9. Write a javascript Program to find  rate of interest.(compulsory user input)(p * r  * n / 100)
let principle = Number(prompt("Enter the principal amount:"));
let rate = Number(prompt("Enter the rate of interest:"));
let time = Number(prompt("Enter the time period:"));

let interest=(principle+rate+time)/100;
console.log("Rate of interest is: "+interest);
document.getElementById('output').innerHTML="Rate of interest is:"+interest;