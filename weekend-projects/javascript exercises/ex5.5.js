// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function kata(str1,str2){
   str1=str1[0].toUpperCase() + `.`;
   str2=str2[0].toUpperCase();
   return str1+str2
}
console.log(kata(`ori`,`sailes`));