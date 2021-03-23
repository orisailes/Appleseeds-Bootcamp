function passwordValid(pass) {
    if (pass.length > 7) {
        return `strong`;
    } else {
        return `weak`;
    }
}

function passwordValid2(pass) {
    return (pass.length > 7 ? 'strong' : 'weak');
}

function passwordValid3(pass) {
    return (pass.length >= 7  && 'weak');
   
}


function advancePasswordValid(pass) {
    if (((pass.match(/[A-Z]/)) !== null) && pass.length > 7 ){
      return `Very Strong`;
    } else {
         return `Not Very strong`
    }
}

let myPass = `1234567`;
let myPass2 = `12327673D`;

console.log(passwordValid(myPass));
console.log(passwordValid2(myPass));
console.log(passwordValid3(myPass));
console.log(advancePasswordValid(myPass2));