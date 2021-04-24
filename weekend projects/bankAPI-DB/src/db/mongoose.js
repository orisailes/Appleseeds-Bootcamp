const mongoose = require('mongoose');
let url;

if(process.env.NODE_ENV==='production'){
    url = process.end.urlKey
}else{
    url = require('../keys/mongoUrl')
}

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})