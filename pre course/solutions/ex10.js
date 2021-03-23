const input = require('readline-sync');

var n = input.question('please insert a Mishpat\n');
var arr = [n];

n=n.replace(/ /g, "*");
console.log(n);