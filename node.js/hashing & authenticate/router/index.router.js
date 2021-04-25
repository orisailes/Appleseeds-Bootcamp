const express = require("express")
const router = express.Router()
const userRoute = require('./user.router')

router.use('/users',userRoute)

module.exports = router