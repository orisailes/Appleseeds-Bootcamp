const mongoose = require('mongoose');
const url = require('../keys/mongoUrl')

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})