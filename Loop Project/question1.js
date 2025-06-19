//1.Write javascript program to print 1 to n number print using while loop .
let i = 1;
let n = 10;
let output = "";
while (i <= n) {
  console.log(i);
  output += i + "      ,       ";
  i++;
  document.getElementById("output").innerHTML = output;
}
