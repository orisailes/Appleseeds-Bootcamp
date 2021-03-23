// Please make the following changes to the html file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your

const first = document.querySelector(`.start-here`);
first.textContent = `main title`

const subUl = first.nextElementSibling.children[0]

const newLi = document.createElement(`li`)
newLi.textContent = `sub title 4`
subUl.appendChild(newLi)

first.parentElement.lastElementChild.remove()

first.parentElement.firstElementChild.textContent = "Master of the dom"
first.parentElement.parentElement.children[1].textContent = "start from the buttom,now were here"


