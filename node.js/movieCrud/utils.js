const fs = require('fs');

const getAllMovies = () => {
    let movies = [];
    try {
        movies = JSON.parse(fs.readFileSync('./movies.json'));
        return movies;
    } catch (err) {
        return movies;
    }

}

const getMovieById = (id) => {
    const movies = getAllMovies();
    const found = movies.find(mov => mov.id === id);
    return found;
}

const createMovie = (movie) => {
    const movies = getMovies();
    movies.push(movie);
    fs.writeFileSync('./movies.json', JSON.stringify(movies));
    return movies;
}

const updateMovie = (id, newMovie) => {
    const movies = getAllMovies();
    movies.find((mov, i) => {
        if (mov.id === id) movies[i] = newMovie
    });
    fs.writeFileSync('./movies.json', JSON.stringify(movies));
    return movies;
}

const deleteMovie = (id) => {
    const movies = getAllMovies();
    for (let i = 0; i < movies.length ; i++) {
        movies[i].id === id && movies.splice(i,1)
    }
    fs.writeFileSync('./movies.json', JSON.stringify(movies));
    return movies;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}