// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function myFunc (num){

    if(num>10){
        return Promise.resolve(num)
    }
    else{
        return Promise.reject(num)
    }

}

console.log(myFunc(2)
.then(function(value){console.log(`${value} make resolved`)})
.catch(function(value){console.log(`${value} make rejected`)})
)

