const express = require("express");
const path = require("path");
const hbs = require("hbs")

const publicPath = path.join(__dirname, './views');
const partialPath = path.join(__dirname, './partials');
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'My server',
        name: 'Ori Sailes'
    })
})

app.get('/users', (req, res) => {
    res.render('users', {
        users: JSON.stringify(require('./users.json'))
    })
})

app.get('/users/*',(req,res)=>{
    res.render('userNotFound',{
        errorMassage:'user cannot be found.',
        name:'Ori Sailes'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
            errorMassage:'page cannot be found.',
            name:'Ori Sailes'
    })
})

app.listen(3002, () => {
    console.log(`server is on air`)
})