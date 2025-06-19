//8. Write a javascript Program to find triangle area.(compulsory user input)(formula  0.5 * b * h)
let b = Number(prompt("Enter the base of the triangle:"));
let h= Number(prompt("Enter the height of the triangle:"));
let area =0.5*b*h;
console.log("Area of the triangle is: "+area);
document.getElementById("output").innerHTML="Area of the triangle is:"+area;