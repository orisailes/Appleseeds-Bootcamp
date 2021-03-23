//! Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);

//* line 4 will give us the window object (as long as we on browser)


//! Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//* a.the this in line 15 will reference to the window because the function doesnt consider the object that she inside
//*b.we need change the arrow function to a regular function "greet: function(){ console.log(`Hello ${this.name}`)}"

//! Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//  console.log(this);
// };
// myFuncDec()
//* this is will point to the window object it self

//! Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();
//* this is will point also to the window object it self

//! Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });
//*this is will point us to the window, we need to change the function to a function declaration
