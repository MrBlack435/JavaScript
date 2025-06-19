//7.Write a javascript Program to find circle area.(compulsory user input)(formula  3.14 * r * r)
let r = Number(prompt("Enter the radius of the circle:"));
let area = 3.14 * r * r;
console.log("Area of the circle is: "+area);
document.getElementById('output').innerHTML="Area of the circle is:"+area;