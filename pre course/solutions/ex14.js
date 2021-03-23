'use strict'
const input = require('readline-sync');
var arr = [];
var max = 0;
var min = 51 ;
var usernum = Number(input.question('Please insert a number\n'));
for (var i=0; i<usernum; i++)
{
var x = Math.floor(Math.random() * 50)
arr.push(x)
}
for (var a=0; a<usernum; a++)
{
if (arr[a]>max)
{
  max=arr[a]
}
if (arr[a]<min)
{
  min=arr[a]
}
}
console.log('The array is- ' + arr )
console.log ('Min is - ' + min + ' Max is ' + max)