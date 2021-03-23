// Ex2.5 - 
// SummationWrite a program that finds the summation of every number from 1 to num.
// The number willalways be a positive integer greater than 0.
// For example:summation(2) -> 3 1 + 2summation(8) -> 36 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function summationWrite(num){     
    let number = 0;
    for(let i =1; i<=num; i++){
      number = number+i
    }
    return number;
}

console.log(summationWrite(8))