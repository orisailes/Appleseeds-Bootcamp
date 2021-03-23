// landing page 
const toolsExplain = document.querySelector(`.tools-explain`);
const hero = document.querySelector('#landing-page')
const heroContainer = document.querySelector('.landing-container')
const goBtn = document.querySelector(`.btn`)
goBtn.addEventListener('click', showGo)
const rules = document.querySelector(`.rules`)
const startGame = document.querySelector(`.start-game`)
startGame.addEventListener('click', showWorld)
//! world variables below



// pop up display
function showGo() {
    hero.style.background = "url(./img/background/light-background.jpg)no-repeat center center/cover";
    heroContainer.style.display = "none"
    rules.style.display = "block"
}


// game display
function showWorld() {
    hero.style.display = "none"
    document.querySelector(`#game`).style.display = "grid"
}
//first initiallize the map

function makeWorld() {
    makeSky()
    makeGrass()
    makeMud()
    makeCloud(randomMapPlaceX, randomMapPlaceY);
    makeCloud(randomMapPlaceXTwo, randomMapPlaceYTwo);
    makeTallGrass()
    makeRock()
    makeTree()
}

function makeSky() {
    for (let ro = 0; ro < 18; ro++) {
        for (let col = 0; col < 25; col++) {
            let skyDiv = document.createElement(`div`)
            skyDiv.setAttribute(`data-row`, `${ro}`)
            skyDiv.setAttribute('data-col', `${col}`)
            skyDiv.classList.add(`sky`)
            skyDiv.style.background = `url(./img/blocks/sky.jpg)`
            skyDiv.addEventListener('click', handleClick)
            world.appendChild(skyDiv)
        }
    }
}

function makeGrass() {
    for (let col = 0; col < 25; col++) {
        let grassDiv = document.createElement(`div`)
        grassDiv.classList.add(`grass`)
        grassDiv.setAttribute(`data-row`, `18`)
        grassDiv.setAttribute('data-col', `${col}`)
        grassDiv.style.background = `url(./img/blocks/grass.jpg)`
        grassDiv.addEventListener('click', handleClick)
        world.appendChild(grassDiv)
    }
}

function makeMud() {
    for (let ro = 19; ro < 25; ro++) {
        for (let col = 0; col < 25; col++) {
            let mudDiv = document.createElement(`div`)
            mudDiv.classList.add(`mud`)
            mudDiv.setAttribute(`data-row`, `${ro}`)
            mudDiv.setAttribute('data-col', `${col}`)
            mudDiv.style.background = `url(./img/blocks/mud.jpg)`
            mudDiv.addEventListener('click', handleClick)
            world.appendChild(mudDiv)
        }
    }
}

function makeCloud(x, y) {
    let start = document.querySelector(`[data-row="${y}"][data-col="${x}"]`);
    start.style.background = `url(./img/blocks/cloud.jpg)`;
    start.classList.remove(`sky`);
    start.classList.add(`cloud`);
    for (let i = 0; i < 2; i++) {
        start = document.querySelector(`[data-row="${y}"][data-col="${x+i}"]`);
        start.style.background = `url(./img/blocks/cloud.jpg)`;
        start.classList.remove(`sky`);
        start.classList.add(`cloud`);
    }
    for (let i = -1; i < 3; i++) {
        start = document.querySelector(`[data-row="${y-1}"][data-col="${x+i}"]`);
        start.style.background = `url(./img/blocks/cloud.jpg)`;
        start.classList.remove(`sky`);
        start.classList.add(`cloud`);
    }
    for (let i = -2; i < 4; i++) {
        start = document.querySelector(`[data-row="${y-2}"][data-col="${x+i}"]`);
        start.style.background = `url(./img/blocks/cloud.jpg)`;
        start.classList.remove(`sky`);
        start.classList.add(`cloud`);
    }
    for (let i = -1; i < 3; i++) {
        start = document.querySelector(`[data-row="${y-3}"][data-col="${x+i}"]`);
        start.style.background = `url(./img/blocks/cloud.jpg)`;
        start.classList.remove(`sky`);
        start.classList.add(`cloud`);
    }
    for (let i = 0; i < 2; i++) {
        start = document.querySelector(`[data-row="${y-4}"][data-col="${x+i}"]`);
        start.style.background = `url(./img/blocks/cloud.jpg)`;
        start.classList.remove(`sky`);
        start.classList.add(`cloud`);
    }

}

function makeTallGrass() {
    for (let i = 0; i < 11; i++) {
        let start = document.querySelector(`[data-row="17"][data-col="${tallGrassPlaces[i]}"]`)
        start.style.background = `url(./img/blocks/tallGrass.jpg)`;
        start.removeAttribute(`class`);
        start.classList.add(`tallGrass`);
    }
}


function makeRock() {
    if (randomRock === 1) {
        for (let i = 0; i < 7; i++) {
            for (let x = 0; x < 7 - i; x++) {
                let start = document.querySelector(`[data-row="${17-i}"][data-col="${x}"]`)
                start.style.background = `url(./img/blocks/rock.jpg)`;
                start.removeAttribute(`class`);
                start.classList.add(`rock`);
            }
        }
    } else {
        for (let i = 0; i < 7; i++) {
            for (let x = 24; x > 17 + i; x--) {
                let start = document.querySelector(`[data-row="${17-i}"][data-col="${x}"]`)
                start.style.background = `url(./img/blocks/rock.jpg)`;
                start.removeAttribute(`class`);
                start.classList.add(`rock`);
            }
        }
    }
}

function makeTree() {
    let row = 17;
    while (row != 12) {
        let start = document.querySelector(`[data-row="${row}"][data-col="${11}"]`)
        start.style.background = `url(./img/blocks/wood.jpg)`;
        start.removeAttribute(`class`);
        start.classList.add(`wood`);
        row--;
    }
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 4; x++) {
            let start = document.querySelector(`[data-row="${12-x}"][data-col="${9+i-x}"]`)
            start.style.background = `url(./img/blocks/tree.jpg)`;
            start.removeAttribute(`class`);
            start.classList.add(`tree`);
        }
    }
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 2; x++) {
            let start = document.querySelector(`[data-row="${8-x}"][data-col="${8+i+x}"]`)
            start.style.background = `url(./img/blocks/tree.jpg)`;
            start.removeAttribute(`class`);
            start.classList.add(`tree`);
        }
    }
    for (let i = 0; i < 3; i++) {
        let start = document.querySelector(`[data-row="${6}"][data-col="${11+i}"]`)
        start.style.background = `url(./img/blocks/tree.jpg)`;
        start.removeAttribute(`class`);
        start.classList.add(`tree`);
    }
}

//make bollian change in user click
function gameNavClick(e) {

    inventoryItems.mud.action = false
    inventoryItems.grass.action = false
    inventoryItems.tallGrass.action = false
    inventoryItems.rock.action = false
    inventoryItems.tree.action = false
    inventoryItems.wood.action = false
    tools.shovelClicked = false;
    tools.picAxeClicked = false;
    tools.axeClicked = false;
    switch (e.target.alt) {
        case `axe`:
            tools.shovelClicked = false;
            tools.picAxeClicked = false;
            tools.axeClicked = true;
            document.body.style.cursor = "url('./img/tools/axe-cursor.png'), auto";
            break;
        case `picaxe`:
            tools.shovelClicked = false;
            tools.picAxeClicked = true;
            tools.axeClicked = false;
            document.body.style.cursor = "url('./img/tools/picaxe-cursor.png'), auto";
            break;
        case `shovel`:
            tools.shovelClicked = true;
            tools.picAxeClicked = false;
            tools.axeClicked = false;
            document.body.style.cursor = "url('./img/tools/shovel-cursor.png'), auto";
            break;
        case `mud`:
            canUserPut(`mud`)
            break;
        case `grass`:
            canUserPut(`grass`)
            break;
        case `tallGrass`:
            canUserPut(`tallGrass`)
            break;
        case `tree`:
            canUserPut(`tree`)
            break;
        case `rock`:
            canUserPut(`rock`)
            break;
        case `wood`:
            canUserPut(`wood`)
            break;

    }
}

//check if the user got sources
function canUserPut(element) {

    document.body.style.cursor = "auto";
    axeClicked = false;
    shovelClicked = false;
    picAxeClicked = false;
    inventoryItems.mud.action = false
    inventoryItems.grass.action = false
    inventoryItems.tallGrass.action = false
    inventoryItems.rock.action = false
    inventoryItems.tree.action = false
    inventoryItems.wood.action = false
    if (inventoryItems[element].qty > 0) {
        inventoryItems[element].action = true

    }
    if (inventoryItems[element].qty == 0) {
        document.querySelector(`#${element}`).classList.add(`redding`)
        setTimeout(function () {
            document.querySelector(`#${element}`).classList.remove('redding');
        }, 2000);

    }
}



//check if user remove was valid
function isSkyAboveMe(element) {
    let row = Number(element.getAttribute(`data-row`))
    let col = Number(element.getAttribute(`data-col`))
    let testUp = document.querySelector(`[data-row="${row-1}"][data-col="${col}"]`)
    let testLeft = document.querySelector(`[data-row="${row}"][data-col="${col-1}"]`);
    let testRight = document.querySelector(`[data-row="${row}"][data-col="${col+1}"]`);
    let testDown = document.querySelector(`[data-row="${row+1}"][data-col="${col}"]`);
    if (testUp.className === "sky" || testUp.className === "cloud") {
        return true
    }
    if (testRight.className === "sky" || testUp.className === "cloud") {
        return true
    }
    if (testLeft.className === "sky" || testUp.className === "cloud") {
        return true
    }
    if (testDown.className === "sky" || testUp.className === "cloud") {
        return true
    }
}


// handle user clicking on world
function handleClick(element) {
    switch (element.currentTarget.getAttribute(`class`)) {
        case `grass`:
            if (tools.shovelClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`sky`)
                inventoryItems.grass.qty++
                inventoryBlocks[0].children[1].textContent = `${inventoryItems.grass.qty}`
            };
            if (tools.shovelClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[2].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[2].style.animation = null;
                }, 2000);
            }
            break;
        case `mud`:
            if (tools.shovelClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`sky`)
                inventoryItems.mud.qty++
                inventoryBlocks[1].children[1].textContent = `${inventoryItems.mud.qty}`
            }
            if (tools.shovelClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[2].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[2].style.animation = null;
                }, 2000);
            }
            break;
        case `tallGrass`:
            if (tools.shovelClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`sky`)
                inventoryItems.tallGrass.qty++
                inventoryBlocks[2].children[1].textContent = `${inventoryItems.tallGrass.qty}`
            }
            if (tools.shovelClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[2].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[2].style.animation = null;
                }, 2000);
            }
            break;
        case `tree`:
            if (tools.picAxeClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`sky`)
                inventoryItems.tree.qty++
                inventoryBlocks[3].children[1].textContent = `${inventoryItems.tree.qty}`
            }
            if (tools.picAxeClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[1].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[1].style.animation = null;
                }, 2000);
            }
            break;
        case `wood`:
            if (tools.picAxeClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`wood`)
                inventoryItems.wood.qty++
                inventoryBlocks[4].children[1].textContent = `${inventoryItems.wood.qty}`
            }
            if (tools.picAxeClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[1].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[1].style.animation = null;
                }, 2000);
            }
            break;
        case `rock`:
            if (tools.axeClicked == true && isSkyAboveMe(element.currentTarget)) {
                element.currentTarget.style.background = `url(./img/blocks/sky.jpg)`
                element.currentTarget.removeAttribute(`class`)
                element.currentTarget.classList.add(`sky`)
                inventoryItems.rock.qty++
                inventoryBlocks[5].children[1].textContent = `${inventoryItems.rock.qty}`
            }
            if (tools.axeClicked == false) {
                document.querySelectorAll(`.game-nav .tool`)[0].style.animation = "makeBorderRed 1s backwards";
                setTimeout(function () {
                    document.querySelectorAll(`.game-nav .tool`)[0].style.animation = null;
                }, 2000);
            }
            break;
            //user building
        default:
            let block = "";
            for (let i = 0; i < 6; i++) {
                blockName = Object.keys(inventoryItems)[i];
                blockValue = Object.values(inventoryItems)[i];
                if (blockValue.action == true) {
                    if (blockValue.qty == 0) {
                        blockValue.action = false;
                        document.querySelector(`#${blockName}`).classList.add(`redding`)
                        setTimeout(function () {
                            document.querySelector(`#${blockName}`).classList.remove('redding');
                        }, 1000);
                    } else {
                        element.currentTarget.style.background = `url(./img/blocks/${blockName}.jpg)`
                        element.currentTarget.removeAttribute(`class`)
                        element.currentTarget.classList.add(`${blockName}`)
                        blockValue.qty--
                        document.querySelector(`#${blockName}`).children[1].textContent = `${inventoryItems[blockName].qty}`
                        newItems.push(element.currentTarget)
                    }
                }
            }
    }
}

//reset game
function resetGame() {
    inventoryBlocks.forEach(function (el, i) {
        inventoryBlocks[i].children[1].textContent = "0"
    });
    for (let item in inventoryItems) {
        inventoryItems[item].qty = 0;
    };
    newItems.forEach(function (e, i) {
        let row = newItems[i].getAttribute(`data-row`);
        let col = newItems[i].getAttribute(`data-col`);
        let suspect = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
        suspect.classList.add(`sky`)
        suspect.style.background = `url(./img/blocks/sky.jpg)`
    })
    makeSky();
    makeTallGrass();
    makeTree();
    makeRock();
    // makeMud(); //! cant be re-used
    // makeGrass(); //!cant be re-used
    //* making grass
    for (let i = 0; i < 24; i++) {
        let start = document.querySelector(`[data-row="18"][data-col="${i}"]`)
        start.style.background = `url(./img/blocks/grass.jpg)`
        start.removeAttribute(`class`)
        start.classList.add(`grass`)
    }

    //*making mud
    for (let col = 0; col < 24; col++) {
        for (let row = 0; row < 6; row++) {
            let start = document.querySelector(`[data-row="${19+row}"][data-col="${col}"]`)
            start.style.background = `url(./img/blocks/mud.jpg)`
            start.removeAttribute(`class`)
            start.classList.add(`mud`)
        }
    }

}

//new world button
function makeNewWorld() {

    //delete all the inner details
    resetGame()

    //make clear sky
    for (let row = 0; row < 18; row++) {
        for (let col = 0; col < 25; col++) {
            let start = document.querySelector(`[data-row="${row}"][data-col="${col}"]`)
            start.style.background = `url(./img/blocks/sky.jpg)`;
            start.removeAttribute(`class`);
            start.classList.add(`sky`);
        }
    }

    //!re-random the location

    //random rock
    randomRock = Math.floor(Math.random() * 2)

    // randomize columns in tallGrassPlaces
    for (let i = 0; i < 11; i++) {
        tallGrassPlaces[i] = Math.floor(Math.random() * 25);
    }

    //randomize place for clouds
    randomMapPlaceY = Math.floor(Math.random() * (5) + 5);
    randomMapPlaceX = Math.floor(Math.random() * 4 + 4);
    randomMapPlaceYTwo = randomMapPlaceY + 6
    randomMapPlaceXTwo = randomMapPlaceX + 14


    //make new world
    makeWorld()
}

//world
const resetGameButton = document.querySelector(`.reset-game`)
resetGameButton.addEventListener('click', resetGame)
let world = document.querySelector(`.world`)

let gameNavUls = document.querySelectorAll(`.game-nav ul`)
gameNavUls.forEach(element => {
    element.addEventListener('click', gameNavClick)
});
let inventoryBlocks = document.querySelectorAll(`.inventory li`)
inventoryBlocks.forEach(element => {
    element.children[1].textContent = `0`;
});
let randomRock = Math.floor(Math.random() * 2)
let newItems = [];
let tallGrassPlaces = [];
let newMapBtn = document.querySelector(`.new-map`)
newMapBtn.addEventListener(`click`, makeNewWorld)

// randomize columns in tallGrassPlaces
for (let i = 0; i < 11; i++) {
    tallGrassPlaces[i] = Math.floor(Math.random() * 25);
}

//randomize place for clouds
let randomMapPlaceY = Math.floor(Math.random() * (5) + 5);
let randomMapPlaceX = Math.floor(Math.random() * 4 + 4);
let randomMapPlaceYTwo = randomMapPlaceY + 6
let randomMapPlaceXTwo = randomMapPlaceX + 14





//initialize user properties
let tools = {
    axeClicked: false,
    picAxeClicked: false,
    shovelClicked: false,
}

let inventoryItems = {
    grass: {
        action: false,
        qty: 0
    },
    mud: {
        action: false,
        qty: 0
    },
    tallGrass: {
        action: false,
        qty: 0
    },
    tree: {
        action: false,
        qty: 0
    },
    wood: {
        action: false,
        qty: 0
    },
    rock: {
        action: false,
        qty: 0
    },
}

let inventoryBlocksImg = document.querySelectorAll(`.inventory img`)

//first world initiallize
makeWorld()
let worldDivs = document.querySelectorAll(`.world > div`)
//handle the block building event