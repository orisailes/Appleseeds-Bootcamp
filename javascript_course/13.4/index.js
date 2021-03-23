// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

function myFunc(N){
    for(let i=0; i<=N ;i++){

        console.log(`#`.repeat(i))  

    }
}

let N = 4;

myFunc(N)