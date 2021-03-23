const input = require('readline-sync');

var string = input.question('please insert a Mishpat and i will give you the longest word\n');
string=string.replace(';', '')
string=string.replace('<', '')
string=string.replace('>', '')
string=string.replace('|', '')
string=string.replace(',', '')
string=string.replace('.', '')
string=string.replace('/', '')
string=string.replace('~', '')
string=string.replace('`', '')
string=string.replace('-', '')
string=string.replace('=', '')
string=string.replace(/'/g, '')
string=string.replace('"', '')
string=string.replace('}', '')
string=string.replace('{', '')
string=string.replace(']', '')
string=string.replace('[', '')
string=string.replace(')', '')
string=string.replace('(', '')
string=string.replace(':', '')
string=string.replace('?', '')
string=string.replace('+', '')
string=string.replace('_', '')
string=string.replace('*', '')
string=string.replace('&', '')
string=string.replace('^', '')
string=string.replace('%', '')
string=string.replace('$', '')
string=string.replace('#', '')
string=string.replace('@', '')
string=string.replace('!', '')



var arr = string.split(' ');

for(var i=0; i<arr.length; i++)
{
  for(var y=0;y<arr[i].length;y++)
  if(isNaN(arr[i][y])==false)
  arr[i]=arr[i].replace(arr[i][y], '')
}
var big=arr[0];
for(var i = 0; i < arr.length; i++)
{
    if(arr[i].length > big.length)
    {
	big = arr[i]
    }
}
console.log(big);