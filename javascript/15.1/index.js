// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.


// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;

//     function foo() {
//         return 2;
//     }
// }
// funcA();

// ! line7 will be undefined because the variable a is created but has no value in it, it can 
// ! be fixed if we move it below line 9
// ! line 8 will log 2 because the function is 'hoisting' , like we wrote it on top of the function block which mean that the
// ! function foo exist from the moment we get in the 'father' function


// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };

// console.log(obj.prop.getFullName());

// var test = obj.prop.getFullName;

// console.log(test());

// ! line 34 log line 27 beacuse 'this' is relevant to the 'obj' variable  
// ! line 38 log line 23 because the function he store in it will be relevant to the var 'fullName' (wrong) actually 
// ! the variable test did get the function, but 'this' wasnt relevant to line 23, because this is a object method

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// ! line 50 log us undefiend because nothing store it, the function did return a, but nothing log it
// ! or store it. 
// ! line 51 log us undefiend because b is relevant only in the function, afterwards its dumped 
// ! the variable b in the syntax in line 45 actually put b as a global variable. thats why it log us
// ! number in line 51. 
// * the correct way to fix it is to delcare each variable in individual line.


// function funcC() {
//     console.log("1");
// }
// funcC();

// function funcC() {
//     console.log("2");
// }
// funcC();

//! both line 64 and 69 log '2' because line 67 is overwriting line 62.



// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);

// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);

// ! line 76 is set b to a global variable. thus, line 79 will log '1';
// ! on the other hand, line 82 declare the variable e inside the function and it will be available only inside the function.
// ! thus, line 85 will log us undefiend. funcD2 doesnt return anything to anywhere and the way to fix it is to return the 
// ! value and store it


// function funcE() {
//     console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// ! invoke the function will log thhe value of f as: 1. because the function get the global value before she run.
// ! in line 96 we will get that f is not defiend, but exist . because the variable f is exist, but not the value.
// ! the value will exist only after line 97.
// * we can fix it by move line 96 below line 97.