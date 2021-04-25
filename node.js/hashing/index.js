require('./db/mongoDB')
const express = require('express')
const router = require('./router/index.router')

const app = express()
app.use(express.json())
app.use("/api",router)

const port = 5000
app.listen(port,()=>{
    console.log(`server is on http://localhost:${port}`);
})


// const bcrypt = require('bcrypt')

// const myFunction = async () => {
//     const password = `123456`
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log(hashedPassword);
//     const isMatch = await bcrypt.compare('123456',hashedPassword)
//     console.log(isMatch);
// }

// myFunction()