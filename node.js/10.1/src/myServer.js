const express = require("express");
const path = require("path");

const setPublicPath = path.join(__dirname,'./views')
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(setPublicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'My server',
        name: 'Ori Sailes'
    })
})

app.get('/users', (req, res) => {
    res.render('users', {
        users: require('./users.json')
    })
})

app.listen(3002, () => {
    console.log(`server is on air`)
})