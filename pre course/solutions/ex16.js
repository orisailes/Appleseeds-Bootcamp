const input = require('readline-sync');

var n = input.question('please insert a number\n');
var x=n.replace(/ /g, "");
if (isNaN(x)==true)
{
  throw '';
}
n = n.split(" ")
console.log('Your numbers ' + n)
n.reverse();
console.log('My numbers ' + n)
