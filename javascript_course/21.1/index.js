// Create a webpage that has an input field for the user’s age and a button.
// If the user enters a number above 18, make the text “you can drink appear”.
// If the user enters a number below 18, make the text “you’re too young”
// appear.

const inputHandle = () => {
if (userInput.value>18){
    alert(`you are allowd to drink`)
}else{
    alert( `too young for drinking`)
}
}

const userInput = document.querySelector(`body > input`)
const button = document.querySelector(`.myBtn`)
button.addEventListener('click', inputHandle)
