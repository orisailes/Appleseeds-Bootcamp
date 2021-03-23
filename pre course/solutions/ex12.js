const input = require('readline-sync');

var n = input.question('please insert a Mishpat\n');


n=n.replace(/a/g, "A");
n=n.replace(/e/g, "E");
n=n.replace(/u/g, "U");
n=n.replace(/o/g, "O");
n=n.replace(/y/g, "Y");
n=n.replace(/i/g, "I");
console.log(n);