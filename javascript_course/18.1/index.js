// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have to make them
// appear on the screen.
// If the user enters an input that is not a number show him an error message.



var smile = document.createElement("img");
smile.setAttribute("src", "https://mpng.subpng.com/20180928/zgk/kisspng-megadeth-dave-tumblr-5bae41dad049e2.5155379115381467788532.jpg");
smile.setAttribute("height", "100");
smile.setAttribute("width", "300");
smile.style.display = "inline";

var smileyDiv = document.querySelector(".smiley");

document.querySelector("button[type=submit]").addEventListener("click",popItUp())
function popItUp() {
    debugger;
    let userInput = Number(document.querySelector("#enterBox").value)
    console.log(userInput)
    for (let i = 0; i < userInput; i++) {
        smileyDiv.appendChild(smile);
        smileyDiv.innerHTML += ``; // not the best practice
    }
}
