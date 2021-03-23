let elmPreviousCard = null;
let isFirstCardFlipped = 1;
let container = document.querySelector('.grid-container');
let stopwatchInterval;
let startTime;
let passedTime = 0;
let runing = false;
let time;
let newGameBtn = document.querySelector(`.new-game`)
newGameBtn.addEventListener(`click`, resetGame)
randomize()
setEventListener()
let currectGussesElement = document.querySelector(`.currect-guesses`)
let incurrectGussesElement = document.querySelector(`.incurrect-guesses`)
let cards = document.querySelectorAll(`.card`)

window.state = {
  numberOfWrongGuesses: 0,
  numberOfRightGuesses: 0,
  timePassed: 0,
  rightGuesses: 0,
  numberOfCouples: 6,
};

function init() {
  isFirstCardFlipped = 1;
  stopAndRestart()
  state.numberOfWrongGuesses = 0;
  state.numberOfRightGuesses = 0;
  timePassed = 0;
  rightGuesses = 0;
  incurrectGussesElement.textContent = state.numberOfWrongGuesses
  currectGussesElement.textContent = state.numberOfRightGuesses
  cards.forEach(element => {
    element.removeAttribute(`class`)
    element.classList.add(`card`)
    element.classList.add(`bg`)
  });
  randomize()
}

function cheackGameStatus() {
  if (state.numberOfRightGuesses === 6) {
    return 'you win!';
  }
  if (state.numberOfWrongGuesses === 12) {
    return 'you lost!';
  } else {
    return 'another try';
  }
}

function randomize() {
  let sourceArray = [];
  let targetArray = [];
  for (let i = 1; i <= 6; i++) {
    sourceArray.push(i);
    sourceArray.push(i);
  }
  for (let i = 11; i >= 0; i--) {
    let random = Math.floor(Math.random() * i);
    targetArray.push(sourceArray[random]);
    sourceArray.splice(random, 1);
  }
  randomCard(targetArray)
}

function randomCard(array) {
  for (let i = 0; i < 12; i++) {
    document.querySelectorAll(`.card`)[i].classList.add(`background-${array[i]}`)
  }
}

function wait(delayTime) {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

function cardEvent(e) {
  if (e.target.className.includes(`grid-container`) == false) {
    let elmCard = e.target;
    cardClicked(elmCard)
  };
}

function setEventListener() {
  container.addEventListener('click', cardEvent)

}

async function cardClicked(card) {
  let card1, card2;
  if (isFirstCardFlipped == 1) {
    isFirstCardFlipped = 0;
    startTimer(60, stopwatchInterval)
  }
  if (card.className.split(' ').includes('flipped')) {
    return;
  }
  card.classList.add('flipped');
  card.classList.remove('bg');
  if (elmPreviousCard === null) {
    elmPreviousCard = card; //first card
  } else {
    card1 = elmPreviousCard.classList;
    card2 = card.classList;
  }
  if (card2) {
    if (card1.item(1) !== card2.item(1)) {
      console.log(card);
      console.log(elmPreviousCard);
      state.numberOfWrongGuesses++
      container.removeEventListener(`click`, cardEvent)
      await wait(800)
      setEventListener()
      elmPreviousCard.classList.remove('flipped');
      card.classList.remove('flipped');
      elmPreviousCard.classList.add('bg');
      card.classList.add('bg');

    } else if (card1.item(1) == card2.item(1)) {
      state.numberOfRightGuesses++;
      elmPreviousCard = null;
    }
    elmPreviousCard = null;
    incurrectGussesElement.textContent = state.numberOfWrongGuesses
    currectGussesElement.textContent = state.numberOfRightGuesses
  }

  isWon();
}



function stopAndRestart() {
  runing = false;
  document.querySelector(".timer").textContent = `00:00`;
}

function startTimer(seconds, timerVar) {
  document.querySelector(".timer").textContent = `00:00`;
  runing = true;
  startTime = Date.now();
  setTimeout(() => {
    clearInterval(timerVar);
  }, (seconds * 1000 + 1));
  timerVar = setInterval(() => {
    if (runing === true) {
      const run = new Date(Date.now() - startTime + passedTime);
      const sec = ("0" + run.getSeconds()).slice(-2);
      const minutes = ("0" + run.getMinutes()).slice(-2);
      time = `${minutes}:${sec}`;
      document.querySelector(".timer").textContent = time;
      if (seconds === run.getSeconds()) {
        document.querySelector(`.heading`).innerHTML = `<h1 style="color:red">Time Out!<br> Game over!</h1>`
      }
    }
  }, 10);
}




function resetGame() {
  document.querySelector(`.heading`).innerHTML=`<h1>Memory Game! <small><br>By team Seven</small> </h1>`
  init();
}

function isWon() {
  if (state.numberOfRightGuesses === state.numberOfCouples) {
    document.querySelector(`.heading`).innerHTML = `<h1>Winner!<br> Amazing!</h1><h3>Watch your stats and improve next time</h3>`
    let winTime = document.querySelector(`.timer`).textContent
    stopAndRestart()
    document.querySelector(`.timer`).innerHTML = `<p style="color:green">${winTime}</p>`
  }
}