const mongoose = require('mongoose');
const Product = require('../models/Product')

mongoose.connect('mongodb://127.0.0.1:27017/myShop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

