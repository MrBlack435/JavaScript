//6. Write a javascript Program to find gross salary.(compulsory user input)
//Ex. Base Salary: 100 RS, HRA=10%, DA=5%, TA=8%.
let baseSalary = Number (prompt("Enter the base salary:"));
let hra = Number( prompt("Enter the HRA percentage:"));
let da =  Number(prompt("Enter the DA percentage:"));  
let ta =Number( prompt("Enter the TA percentage:")); 

console.log("basesalary",baseSalary);
console.log("hra",hra);
console.log("da",da);
console.log("ta",ta);

hra =(baseSalary)/100*hra;
da =(baseSalary)/100*da;
ta =(baseSalary)/100*ta;

let grossSalary = baseSalary + hra + da + ta;

console.log("Gross Salary: "+grossSalary);
document.getElementById('output').innerHTML="GrossSalary is:"+grossSalary;