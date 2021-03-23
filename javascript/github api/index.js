async function dataFetch(user) {
    userInput.value = ""
    const response = await fetch(`${endpoint}/${user}`)
    const data = await response.json()
    console.log(data)
    if (data.message == `Not Found` || checkMatch(data.name)) {
        console.log(`invalid user`)
    } else {
        usersObj.push({
            name: data.name,
            url: data.url,
            avatar: data.avatar_url,
            repositories: data.public_repos,
        })
        displayUserHTML(usersObj, usersObj.length - 1)
    }
}

function displayUserHTML(usersObj, i) {
    const user = `
    <div class="card">
    <h2>Name : <a href="${usersObj[i].url}"> ${usersObj[i].name}</h2></a>
    <img src="${usersObj[i].avatar}" alt="${usersObj[i].name}">
    <h3>Number of repos : ${usersObj[i].repositories}</h3>
    </div>
    `
    cards.innerHTML += user
}

function checkMatch(name){
    for(let user of usersObj){
        if(name===user.name){
            return true;
        }
    }
    return false;
}


let usersObj = []
const cards = document.querySelector(`.cards-container`)
const endpoint = `https://api.github.com/users`
const userInput = document.querySelector(`#search`)
userInput.addEventListener('keyup', (e) => {
    e.keyCode === 13 ? userInputBtn.click() : null;
})
const userInputBtn = document.querySelector(`.search-btn`)
userInputBtn.addEventListener('click', (e) => {
    dataFetch(`${userInput.value}`)
})