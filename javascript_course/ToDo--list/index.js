let userData;
const input = document.querySelector(`.text-input`)
const inputBtn = document.querySelector(`.submit-task`)
inputBtn.addEventListener(`click`, handleInput)
const myUl = document.querySelector(`.tasks-list`)
const updateInput = document.querySelector(`.update-input`);
updateInput.addEventListener(`keyup`, updateTask)
const checkBox = [];
const userTask = [];
let deleteIcon;
let editIcon;
let helperBools=[];
const today = new Date();
const time = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}`
let id = 0;
const state = {
    today: new Date(),
    time: `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}`,
    id: 0,
    currentSpan: null,
    currentSpanID: null,
    userTask: userTask,
}


function handleInput(e) {
    e.preventDefault();
    if (input.value) {
        userTask.push({
            text: input.value,
            timeAdded: time,
            ID: id,
            isDone: false,
        })
        myUl.innerHTML += `
        <li><label><input id="checkbox-${id}" class="checkbox" type="checkbox"><span id="${id}">${userTask[userTask.length-1].text}</span></label><div class="optins"> <i class="far fa-edit edit"></i> <i class="far fa-trash-alt delete"></i></div>
        `
        checkBox.push(document.querySelector(`#checkbox-${id}`))
        deleteIcon = document.querySelectorAll(`.delete`)
        deleteIcon.forEach((e) => {
            e.addEventListener(`click`, deleteTask)
        })
        editIcon = document.querySelectorAll(`.edit`)
        editIcon.forEach((e) => {
            e.addEventListener(`click`, editTask)
        })
    }
    input.value = ""
    for (let i = 0; i <= id; i++) {
        document.querySelector(`#checkbox-${i}`).addEventListener(`change`, handleCheck)
    }
    id++;
    window.localStorage.setItem(`state`, JSON.stringify(state))
}

function handleCheck(e) {
    let thisId = e.target.id.slice(9);
    userTask[thisId].isDone = !userTask[thisId].isDone;
    if (userTask[thisId].isDone) {
        document.getElementById(`${thisId}`).classList.add(`done`);
    } else {
        document.getElementById(`${thisId}`).classList.remove(`done`);
    }
    window.localStorage.setItem(`state`, JSON.stringify(state))

}

function deleteTask(e) {
    let li = e.path[2];
    let listPlace = e.path[2].children[0].children[1].getAttribute('id');
    userTask.splice(listPlace, 1)
    userTask.forEach((e) => {
        e.ID -= 1
    })
    myUl.removeChild(li)
    for (let i = 0; i < userTask.length; i++) {
        myUl.children[i].children[0].children[0].removeAttribute(`id`);
        myUl.children[i].children[0].children[0].setAttribute(`id`, `checkbox-` + `${i}`);
        myUl.children[i].children[0].children[1].removeAttribute(`id`);
        myUl.children[i].children[0].children[1].setAttribute(`id`, i);
    }
    id = myUl.children.length;
    window.localStorage.setItem(`state`, JSON.stringify(state))
}

function editTask(e) {
    updateInput.classList.remove(`hidden`)
    updateInput.focus()
    state.currentSpan = e.path[2].children[0].children[1];
    state.currentSpanID = Number(state.currentSpan.id);
    updateInput.value = state.currentSpan.textContent
    window.localStorage.setItem(`state`, JSON.stringify(state))
}

function updateTask(e) {
    if (e.keyCode === 13) {
        updateInput.classList.add(`hidden`)
        state.currentSpan.textContent = updateInput.value;
        userTask[state.currentSpanID].text = state.currentSpan.textContent
    }
    state.currentSpan.textContent = updateInput.value;
    window.localStorage.setItem(`state`, JSON.stringify(state))
}

// if window got data
function temp (){if (window.localStorage) {
    data = JSON.parse(localStorage.state)
    data.userTask.forEach((e) => {
        helperBools.push(e.isDone);
        input.value = e.text;
        inputBtn.click();
    })
    helperBools.forEach((e,i)=>{
        if(e==true){
           myUl.children[i].children[0].children[0].click()
        }
    })
}
}
