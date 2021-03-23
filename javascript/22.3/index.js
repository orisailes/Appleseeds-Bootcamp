document.addEventListener('keypress', handlePress)
const randomLetter = String.fromCharCode(Math.floor(Math.random() * 25) + 97)
let inputs = [];
let letters = document.querySelector(`#letters`)
let btn = document.querySelector(`#continuo`)
const secretWord = document.querySelector(`#the-word`)
secretWord.textContent = `?`
let talker = document.querySelector(`#talker`)
talker.style.marginTop = "20px"
btn.addEventListener('click', handleBtnClick)
talker.textContent = `Guess a letter`



// taking user input to array
function handlePress(ev) {
    if (ev.key > `a` && ev.key < `z`) {
        letters.textContent += ev.key + `,`
        talker.textContent = `Guess a letter`
    }
    if (ev.key < `a` || ev.key > `z`) {
        talker.textContent = `Wrong input`
        talker.style.color="red"
    } else if (inputs.includes(ev.key)) {
        talker.textContent = `${ev.key} already been declared`
        talker.style.color="red"
    } else if (ev.key == randomLetter) {
        win();
    } else {
        talker.textContent = `Try again!`
        talker.style.color="red"
    }
    inputs.push(ev.key)
}

//when user guess right
function win() {
    document.removeEventListener('keypress', handlePress)
    secretWord.textContent = randomLetter
    btn.style.visibility = "visible"
    document.querySelector(`#guessed`).innerHTML = "<h2 style=color:green>Correct!!! <br> Wanna play Again??</h2>"
    talker.textContent = "";
}

// when click yes after win
function handleBtnClick() {
    location.reload();
}