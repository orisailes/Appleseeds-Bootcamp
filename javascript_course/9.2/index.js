// 1. Sort the array of numbers from descending to ascending
// order
// 2. Sort the array of numbers from descending to ascending
// order.


const numbers = [1, -5, 666, 2, 400, 11];

const numberSorted = numbers.sort(function(first, second){
    return second - first;
})

console.log(numberSorted);

const numberSorted2 = numbers.sort(function(first, second){
    return first - second;
})

console.log(numberSorted2);