// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function removing(string){
    return string.split('').slice(1,string.length-1).join('').toString();
}

console.log(removing(`XsdacasdfsdfvnjernvsdX`))