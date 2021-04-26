const mongoose = require('mongoose')
let url = require('./keys.js')

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})