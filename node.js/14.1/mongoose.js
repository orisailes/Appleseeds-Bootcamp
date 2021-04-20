const mongoose = require('mongoose');
const validator = require('validator');

// mongoose.connect('mongodb://127.0.0.1:27017/}' + myDBName,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
// })

mongoose.model("user",{
    name:{
        type:String,
        require:true
    }
})

//! change DB name above

