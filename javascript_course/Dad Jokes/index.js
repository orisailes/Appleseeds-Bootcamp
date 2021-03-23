const btnText = [
    `Another one!`,
    `Hilarious!`,
    `Please stop!`,
    `I am about to dad`,
    `More jokes!`,
    `You are the best dad ever!`,
    `I cant handle it anymore`,
    `Stop or i call the cups`
]

const loader = document.querySelector(`.loader`)
const endpoint = `https://icanhazdadjoke.com/`
const jokeBtn = document.querySelector('.joke-btn')
const joke = document.querySelector(`.the-joke`)
//*make true random word on button
jokeBtn.addEventListener('click',
    (e => {
        let randomText = Math.floor(Math.random() * btnText.length);
        if (btnText[randomText] == jokeBtn.textContent) {
            while (btnText[randomText] == jokeBtn.textContent) {
                randomText = Math.floor(Math.random() * btnText.length);
            }
        }
        jokeBtn.textContent = btnText[randomText];
        fetchJoke(endpoint);
    }));

async function fetchJoke(url) {
    loader.classList.remove(`hidden`)
    const response = await fetch(url,{
        headers:{
            Accept:'application/json',
        }
    })
    data = await response.json()
    loader.classList.add(`hidden`)
    joke.textContent = data.joke
}

fetchJoke(`${endpoint}`)
