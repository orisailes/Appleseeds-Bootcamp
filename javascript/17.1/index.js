const plus = document.querySelector(`.plus`)
const minus = document.querySelector(`.minus`)
const heading = document.querySelector(`h1`)
let heading_style = window.getComputedStyle(heading)



function minimize() {
    heading.style.fontSize = `${Number(window.getComputedStyle(heading).fontSize.replace("px",""))-3}px`
}

function larging() {
    heading.style.fontSize = `${Number(window.getComputedStyle(heading).fontSize.replace("px",""))+3}px`
}

// minus.addEventListener('click', minimize())
// plus.addEventListener('click', larging())