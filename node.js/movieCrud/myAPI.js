const express = require('express');
const utils = require('./utils')
const app = express();
app.use(express.json());
const PORT = 3000;

const moviesSort = (direction, movies) => {
    movies.sort((a, b) => {
        return direction === "down" ? a.rating - b.rating : b.rating - a.rating;
    })
    return movies
}

const getMoviesByGenre = (genre = [], movies = []) => {
    genre = genre.split(',');
    const result = [];
    for (let i = 0; i < movies.length; i++) {
        for (let x = 0; x < genre.length; x++) {
            if (movies[i].genre.includes(genre[x])) {
                result.push(movies[i]);
                x = genre.length;
            }
        }
    }
    return result
}

app.get('/api/movies', (req, res) => {
    const {
        rating_sort_up,
        rating_sort_down,
        genre
    } = req.query
    let movies = utils.getAllMovies();
    console.log(`get movies commited`);
    if (rating_sort_up) movies = moviesSort("up", movies);
    if (rating_sort_down) movies = moviesSort("down", movies);
    if (genre) movies = getMoviesByGenre(genre, movies)
    res.status(200).send(movies);
})

app.get('/api/movies/:id', (req, res) => {
    const {
        id
    } = req.params;
    console.log(`get movies by id commited`);
    res.status(200).send(utils.getMovieById(id));
})

app.post('/api/movies', (req, res) => {
    const movies = utils.createMovie(req.body);
    console.log(`post movies commited`);
    res.status(200).send(movies);
})

app.put('/api/movies/:id', (req, res) => {
    const {
        id
    } = req.params;
    console.log(`put movies commited`);
    res.status(200).send(utils.updateMovie(id, req.body));
})

app.delete('/api/movies/:id', (req, res) => {
    const {
        id
    } = req.params;
    console.log(`delete movies commited`);
    res.status(200).send(utils.deleteMovie(id));
})



app.listen(PORT, () => {
    console.log(`listening...`)
})