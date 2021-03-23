// From function declarations to function expressions

// one
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const myWelcome = function(){
    return "Welcome to the Bootcamp!!"
}

console.log(myWelcome())

// two
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}


const powering = function(a){
return Math.pow(a,2);
}


console.log(power(2), powering(2))


// three
function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}


const myAdd = function(a,b = 5){
return (a + b);
}

console.log(add(2,3) , myAdd(2,3))


