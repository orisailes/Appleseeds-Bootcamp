// Create a webpage that has a ticking clock with the hours, minutes and
// seconds. 

// const clock = document.querySelector('.clock')
// let myClock = document.createElement(`p`)
// myClock.classList.add(`myClock`)
// clock.appendChild(myClock)
// myClock.textContent = new Date().toLocaleTimeString()

let hours = 0;
let hours2 = 0;
let minutes = 0;
let minutes2 = 0;
let seconds = 0;
let seconds2 = 0;

let clockString = document.createElement(`p`)
document.querySelector(`.clock`).appendChild(clockString)
clockString.textContent = `${hours}${hours2}:${minutes}${minutes2}:${seconds}${seconds2}`

function ticking(){
    seconds2++
    if(seconds2 > 9 ){
        seconds2 = 0;
        seconds++;
    }
    if(seconds>5){
        minutes2++;
    }
    if(minutes2>9){
        minutes2=0;
        minutes++;
    }
    if(minutes>5){
        minutes=0;
        hours2++;
    }
    if(hours2>9){
        hours2=0;
        hours++;
    }
    if(hours==2 && hours2==4){
        newDay()
    }

   clockString.textContent = `${hours}${hours2}:${minutes}${minutes2}:${seconds}${seconds2}`
}

function newDay(){
    console.log(`new day has come`)
    location.reload();
}

setInterval(ticking, 1000)
