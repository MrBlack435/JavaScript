//5. Write a javascript program to convert temperature from degree Celsius to Fahrenheit.(compulsory user input)

let c = prompt("Enter the temperature in degree Celsius:");
 c=parseFloat(c);
 let f = (c * 9/5 )+ 32;
 console.log("Temperature in Fahrenheit is: "+f);
document.getElementById('output').innerHTML=
"Temperature in Celsius:"+c+"<br>"+
"Temperature in Fahrenheit:"+f;