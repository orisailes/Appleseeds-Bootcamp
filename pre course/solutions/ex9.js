'use strict'
const input = require('readline-sync');

var n = Number(input.question('please insert a number\n'));
var arr = [];
var i = 2;
var isPrime=false;
var primes = [];


if (isNaN(n)==true)
{
  console.log('a NUMBER');
  throw 'try again';
}

if (n==2)
{
  console.log(2)
}
if (n==0 || n==1)
{
  console.log('No one is prime');
}

while (i<n+1)
{
  arr.push(i)
  i++;
}

 for (var y=0; y<n; y++)
 {
   isPrime=true;

  for ( var x=2; x<(arr.length); x++)
{
  if ((arr[y])%x==0)
  {
    isPrime = false;
    break;
  }

  if (isPrime=true)
  {
    primes.push(arr[y]);
    break;
  }

}
 }

 if (n!==2)
 {
   primes.unshift(2);
console.log(primes)
 }