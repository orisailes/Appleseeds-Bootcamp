const express = require('express');
const utils = require('./utils')
const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/api/movies', (req, res) => {
    const movies = utils.getAllMovies();
    console.log(`get movies commited`);
    res.status(200).send(movies);
})

app.get('/api/movies/:id', (req, res) => {
    const {id} = req.params;
    console.log(`get movies by id commited`);
    res.status(200).send(utils.getMovieById(id));
})

app.post('/api/movies', (req, res) => {
    const movies = utils.createMovie(req.body);
    console.log(`post movies commited`);
    res.status(200).send(movies);
})

app.put('/api/movies/:id',(req,res)=>{
    const {id} = req.params;
    console.log(`put movies commited`);
    res.status(200).send(utils.updateMovie(id,req.body));
})

app.delete('/api/movies/:id',(req,res)=>{
    const {id} = req.params;
    console.log(`delete movies commited`);
    res.status(200).send(utils.deleteMovie(id));
})

app.listen(PORT, () => {
    console.log(`listening...`)
})