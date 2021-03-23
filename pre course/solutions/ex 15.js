'use strict'
const input = require('readline-sync');
var output = [];
var one = input.question('Please insert a word/s\n');
var two = input.question('Please type another word/s\n');
var splitone = one.split(" ");
var splitwo = two.split(" ");



for (var i=0; i<splitone.length; i++)
{
  output.push(splitone[i])
}

for (var x=0; x<splitwo.length; x++)
{
  output.push(splitwo[x])  
}

console.log(output);