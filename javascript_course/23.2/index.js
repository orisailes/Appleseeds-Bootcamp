// Create a web page that has a stopwatch with a start and stop button.
// • The stop watch should have milliseconds, seconds and minutes.
// • When you click on the start button for the first time, the timer will start
// running (from 00:00:00 to 60:00:00 minutes)
// • When you click on the stop button, it will freeze the time that elapsed
// from the start.
// • When you click start again it will continue counting the time, from
// where it stopped.

const myClock = document.querySelector(`.ticking-clock`)

let ms = 0
let s2 = 0
let s = 0
let m2 = 0
let m = 0

myClock.textContent = `${m}${m2}:${s}${s2}:${ms}0`

function timeRun() {
    ms++
    if (ms > 99) {
        ms = 0
        s++
    }
    if (s > 9) {
        s = 0
        s2++
    }
    if (s2 > 5) {
        s2 = 0
        m2++
    }
    if (m2 > 9) {
        m2 = 0
        m++;
    }
    if (m > 9) {
        stop();
    }
    myClock.textContent = `${m}${m2}:${s2}${s}:${ms}`
}

function stop() {
clearInterval(go);
}

function start() {
    go = setInterval(timeRun, 10)
}

const stopBtn = document.querySelector(`.stop`)
const startBtn = document.querySelector(`.start`)

stopBtn.addEventListener('click',stop)
startBtn.addEventListener('click',start)

let go = setInterval(timeRun, 10)