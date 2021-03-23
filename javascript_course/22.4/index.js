// alert(`instroctions:
// player 1 can use the arrows to move

// player 2 can use the letter "d,a" to move

// the first who achive the finish line wins!
// `)

const p1 = document.querySelector(`#player1-race`)
const p2 = document.querySelector(`#player2-race`)
let p1CurrentChild = 0;
let p2CurrentChild = 0;
document.addEventListener('keyup', handlePress)


function handlePress(ev){
    switch(ev.key){
        case `ArrowRight`:
            p1CurrentChild++
            p1.children[p1CurrentChild].classList.add('active')
            p1.children[p1CurrentChild-1].classList.remove('active')
            break;
        case `ArrowLeft`:
            p1CurrentChild--
            p1.children[p1CurrentChild].classList.add('active')
            p1.children[p1CurrentChild+1].classList.remove('active')
            break;
        case `d`:
            p2CurrentChild++
            p2.children[p2CurrentChild].classList.add('active')
            p2.children[p2CurrentChild-1].classList.remove('active')
            break;
        case `a`:
            p2CurrentChild--
            p2.children[p2CurrentChild].classList.add('active')
            p2.children[p2CurrentChild+1].classList.remove('active')
            break;
    }
    if(p1CurrentChild===11 || p2CurrentChild ==11){
        win()
    }
}

function win(){
    if (window.confirm("Do you want to play again?")) {
        location.reload();
      }
}