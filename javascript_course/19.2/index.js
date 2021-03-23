const password = document.querySelector(`.user-pass`)
const myForm = document.querySelector(`.my-form`)

let array = [];
for (let i = 0; i < 6; i++) {
    const x = Math.floor(Math.random() * 10)
    password.append(x)
    array.push(x)
}


let inputs = document.querySelectorAll(`form > input`)
let form = document.querySelector(`form`)

const handleInput = (e) => {
    const input = e.target;
    if (input.value && input.nextElementSibling) {
        input.nextElementSibling.focus();
    }
};

const handlePaste = (e) => {
    let paste = e.clipboardData.getData("text").split('')
    paste.forEach((element, i) => {
        console.log(inputs[i].value , element)
        inputs[i].value = element
        
    });
    inputs[inputs.length-1].focus();

};

form.addEventListener("input", handleInput)
inputs[0].addEventListener("paste", handlePaste)




//! not good practice below

// function isMatch(num, numPlace) {
//     console.log(`Number: ${num}, Number place:${numPlace} Correct number:${array[numPlace-1]}`)
//     // if(num === array[numPlace]){
//     //     return true;
//     // }
//     return num == array[numPlace - 1]
// }

// function maxLengthOne(a, b) {
//     // a=the box element
//     // b=input
//     userInput.push(b);

//     // checking if the input same as the verification code
//     if (!isMatch(b, a.tabIndex)) {
//         alert(`Wrong!`)
//         console.log(b);
//         b = "";             //* not working
//         return;
//     }

//     //jumping to the next input box
//     if (b.length == a.maxLength) {
//         var next = a.tabIndex;
//         if (next < myForm.length) {
//             myForm.children[next].focus();
//         }
//     }
// }


// function doCopy(ev){
//     let userCopy
//     let selection = document.getSelection().toString().split(''); 
//     copyInfo = selection; // store in another variable
// }

// function doPaste(){

// }

// function isValid(){

//    for(let i =0;i<password.textContent.length;i++){
//     if(userInput[i] !== password.textContent[i]){
//         alert(`incorrect password`)
//         break;
//     }
//    }

// }