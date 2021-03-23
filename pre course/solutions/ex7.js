'use strict'
const input = require('readline-sync');

var i = Number(input.question('Please enter a positive number.\n'))


while (i<=0 || isNaN(i)==true || Number.isInteger(i)==false)
{
var i = Number(input.question('Please enter positive number.\n'))
}

var z=1;

for (var y = 2; y < i+1; y++)
{

z=z*y

}

console.log(z)