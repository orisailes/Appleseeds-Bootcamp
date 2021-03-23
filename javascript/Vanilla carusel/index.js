const imgArray = [];
const caruselUl = document.querySelector(`.carusel-ul`);
const currentList = document.querySelector(`.current`)
let id = 1;
const rightArrow = document.querySelector(`.right-arrow`)
rightArrow.addEventListener(`click`, moveRight)
const leftArrow = document.querySelector(`.left-arrow`)
leftArrow.addEventListener(`click`, moveLeft)

let current = document.querySelectorAll(`.location`)
current.forEach((e) => {
    e.addEventListener(`click`, (e) => {
        console.log(caruselUl.children[0])
        current.forEach((e) => {
            e.removeAttribute(`id`)
        })
        e.target.setAttribute(`id`, `current-location`)
        state.currentId = Number(caruselUl.children[0].getAttribute(`id`))
        state.currentLocation = e.target
        render();
    })
})
const state = {
    currentId: 0,
    imageToDisplay: null,
    currentLocation: null,
}
for (let i = 1; i < 5; i++) {
    const img = `
    <li id=${i} class="img-${i}"></li>
    `
    imgArray.push({
        HTMLText: img,
        id: i,
    })
}
state.imageToDisplay = imgArray[state.currentId].HTMLText
state.currentLocation = currentList.children[0]
caruselUl.innerHTML = state.imageToDisplay
state.currentLocation.click();

function moveLeft() {
    state.currentId--
    state.currentId < 1 ? state.currentId = 4 : null;
    render();
}

function moveRight() {
    state.currentId++;
    state.currentId > 4 ? state.currentId = 1 : null;
    render();
}

function render() {
    console.log(state)
}