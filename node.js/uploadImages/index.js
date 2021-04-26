require('./db/mongoDB')
const express = require('express')
const router = require('./router/index.router')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)

const port = 5000
app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})
