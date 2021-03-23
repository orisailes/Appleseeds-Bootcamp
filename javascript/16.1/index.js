// Without running the code below, explain in your own words what the result
// of each block of code will be and why.



// var b = 1;

// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(firstResult)
// console.log(result)

// ! line 15 will return 5. (mistake - it returns the inner funtion. because the inner function did not invoked.
//! afterwards it will return 5 as well)
// ! line 16 will return also 5.





// var a = 1;

// function b2() {
//     a = 10;
//     return;

//     function a() {}
// }
// b2();
// console.log(a);
// console.log(b2());

// ! line 33 will return undefiend because the return statement at line 31 return nothing
// ! line 36 will log 1 because the scope that relevant to it is the  global one and not what inside
// ! the function.





let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

// ! the loop will log 0 than 1 than 2 (mistake - the i is 3 because the value is stay in it even if the father function
// ! stops and not invoke any more. the LAST value of i is available to him when the father function(the loop) firstly invoked.

