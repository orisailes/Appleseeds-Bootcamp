// const myFirstDiv = document.querySelector("#myFirstDiv");
// const mySecondDiv = document.querySelector("#mySecondDiv");
// const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");

// Is there a better way you can store the individual elements
// with giving them different names?

//! we can use for loop that runs through the father children, declare a variable for each one and then push it into array


let foo = document.getElementById(`foo`)
let divs = [];
for (let i = 0; i < foo.children.length; i++) {
    let myDiv = document.getElementById(`${foo.children[i].id}`);
    divs.push(myDiv) 
}


console.log(divs)
