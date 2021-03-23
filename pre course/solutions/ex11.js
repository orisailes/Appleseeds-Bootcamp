
const input = require('readline-sync');

var n = input.question('please insert a Mishpat\n');
var y = n.length-1;
var x = (n.length)/2;
var middle=Math.floor(x);
var pali = false;

for (var i=0; i<middle; i++)
{
  if (n[i]==n[y-i])
  pali = true;
}
if (pali==true)
{
  console.log('Palindrom!');
}
if (pali==false)
{
  console.log("NO!")
}


