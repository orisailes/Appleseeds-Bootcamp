async function dataFetch(title) {
    loader.classList.remove(`hidden`)
    title = title.toLowerCase();
    userInput.value = ""
    const response = await fetch(`${endpoint}/&t=${title}`)
    const data = await response.json()
    console.log(data)
    if (data.Error) {
        movieContainer.innerHTML = `
        <h1>Movie not found</h1>
        `
    } else {
        const youtubeRespone = await fetch(`${youtubeAPIEndpoint}${title}+movie+trailer`);
        const youtubeData = await youtubeRespone.json();
        myData.push(youtubeData)
        youtubeVideo = `${youtubeDisplay}${myData[0].items[0].id.videoId}`
        console.log(youtubeVideo)
        myData.push({
            [data.Title]: data
        });
        const divsTopDisplay = `
    <div class="card">
    <div>
    ${data.Poster!=="N/A"?`<img src="${data.Poster}no-repeat center center/cover "alt="${data.Title}"></img>`:``}
    <h2><a href=https://www.imdb.com/title/${data.imdbID}/>${data.Title}</a></h2>
    ${data.Plot}
    </div>
    <div class="grid-container">
    <div class="card-rating">
    <h3>Rating:</h3>
    <div class="flex-container">
    <div class="IMDB"><img src="./img/imdb.png" alt="imdb-logo"><p>${data.imdbRating}</p>  </div>
    ${data.Ratings[1]?`<div class="tomato-rotten"><img src="./img/tomato-rotten.png" alt="tomato-rotten-logo"><p>${data.Ratings[1].Value}</p> </div>`:``}
    ${data.Ratings[2]?`<div class="metacritic"><img src="./img/metacritic.png" alt="metacritic-logo"><p>${data.Ratings[2].Value}</p>  </div>`:``}
    </div>
    </div>
    <div><h3>Genre:</h3> ${data.Genre}</div>
    <div><h3>Writers:</h3> ${data.Writer}</div>
    <div><h3>Actors:</h3> ${data.Actors}</div>
    <div><h3>Release date:</h3> ${data.Released}</div>
    <div><h4>Duration:</h4> ${data.Runtime}</div>
    </div>
    `;
        loader.classList.add(`hidden`);
        movieContainer.innerHTML = divsTopDisplay;
        document.querySelector(`#background`).appendChild(trailerBtn)
        trailerBtn.classList.remove(`hidden`);
    }
}

let myData = [];
const loader = document.querySelector(`.lds-facebook`)
const endpoint = `http://www.omdbapi.com/?apikey=8da3a52d&`
const userInput = document.querySelector(`.search`)
userInput.addEventListener('keyup', (e) => {
    e.keyCode === 13 ? userInputBtn.click() : null;
})
const userInputBtn = document.querySelector(`.search-btn`)
userInputBtn.addEventListener('click', (e) => {
    dataFetch(`${userInput.value}`)
})
const movieContainer = document.querySelector(`.movie-container`)
const YOUTUBE_API_KEY = `AIzaSyCE-GwTGYuGzHANrWpiN31a8g7qly79iAk`;
const youtubeAPIEndpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&maxResults=1&q=`
const youtubeDisplay = `https://www.youtube.com/embed/`
const trailerBtn = document.querySelector(`.trailer`)
const trailerContainer = document.querySelector(`.trailer-container`)
trailerBtn.addEventListener('click', function (e) {
    trailerContainer.classList.remove(`hidden`)
    trailerContainer.innerHTML += `
    <iframe width="560" height="315" src="${youtubeVideo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
})

const movieSection = document.querySelector(`#background`)