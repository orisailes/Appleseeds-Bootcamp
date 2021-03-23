// a.1. Sort the array of strings from descending to ascending
// order
// a.2. Sort the array of strings from descending to ascending
// order.


const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];



console.log(foods.sort())
console.log(foods.reverse())

// ! with upper case challange

const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];


console.log(foodsWithUpperCase.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
}))

console.log(foodsWithUpperCase.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) return 0;
    if (a > b) return -1;
    return 1;
}))

//  Longest word
//  Sort the array of strings from the longest word to the
// shortest word only using the sort function

const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];

console.log(words.sort(function (a, b) {
return b.length - a.length;
}))
