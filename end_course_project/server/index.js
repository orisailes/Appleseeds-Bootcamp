require('./db/mongoDB')
const express = require('express')
const router = require('./router/index.router')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(cors())
app.use(express.json())
app.use("/api", router)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')))
} else {
    app.use(express.static(path.join(__dirname, '../client/public')))
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})