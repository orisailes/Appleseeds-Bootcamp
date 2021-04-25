const express = require("express")
const router = express.Router()

const userController = require('../controller/user.controller')

router.get('/', async (req, res) => {
    const result = await userController.getUsers(req, res)
})
.get('/login', async (req,res) => {
    const result = await userController.login(req,res)
    res.send(result)
})
router.post('/', async (req, res) => {
   let result = await userController.addUser(req, res)
   console.log(result);
   res.send(result)
})



module.exports = router