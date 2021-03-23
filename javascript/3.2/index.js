// From function expressions to function declarations
// one
const hello = () => "Hello!";



function myHello() {
    return "Hello There!"
}

console.log(hello(), myHello())


// two
const squareRoot = a => Math.sqrt(a);



function mySquareRoot(a) {
    return Math.sqrt(a)
}


console.log(squareRoot(5), mySquareRoot(5))

// three
const randomNumbers = (a, b) => Math.random() * (a - b) + b;



function myRandomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}

console.log(randomNumbers(4, 10), myRandomNumbers(4, 10))