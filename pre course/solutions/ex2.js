const input = require(`readline-sync`);

let num1 = Number(input.question("Enter your first number "));
let num2 = Number(input.question("Enter your second number "));
var sum;
sum = (num1+num2)
if (sum==10)
{
  console.log("Makes 10,Hurray!");
}
else
{
  console.log("nope");
}