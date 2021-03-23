const numbers = [1, 22, 125, 765, 3, 0, 23, 4, 345];

let max = numbers.reduce(function (acc, currentNum) {
    if (currentNum > acc) {
        return currentNum
    } else {
        return acc;
    }
}, 0);

console.log(max)


// even sum (zugi)

let evenSumming = numbers.reduce(function (acc, currentNum) {
    if (currentNum % 2 === 0) {
        acc = acc + currentNum;
    }
    return acc
}, 0)

console.log(evenSumming)


let sum = numbers.reduce(function (accu, currentNum) {
    return accu + currentNum;
}, 0);

console.log(sum / numbers.length);