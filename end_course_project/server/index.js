require('./db/mongoDB')
const express = require('express')
const router = require('./router/index.router')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)


app.use(express.static(path.join(__dirname, 'build')));



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})