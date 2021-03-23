'use strict'
const input = require('readline-sync');
var i=1;

while (i<101)
{
if ((i%7==0) || ((i%10)==7) || Math.floor(i/10)==7)
{
  console.log('BOOM')
}
else
{
  console.log(i)
}

i++
}
