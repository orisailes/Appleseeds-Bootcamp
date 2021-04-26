const express = require("express")
const router = express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')

const userController = require('../controller/user.controller')


const upload = multer({
    limits: {
        fileSize: 2000000 // limit file size in bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})


router.get('/', async (req, res) => {
        const result = await userController.getUsers(req, res)
        result ? res.send(result) : res.send('couldnt get users')
    })
    .get('/me', auth, (req, res) => {
        res.send(req.user)
    })
    .get('/:id/avatar',async(req,res)=>{
        const result = await userController.getUserAvatar(req,res)
        res.set('Content-Type','image/jpg').send(result)
    })


router.post('/register', async (req, res) => {
    let result = await userController.addUser(req, res)
    res.send(result)
})


router.put('/login', async (req, res) => {
        const result = await userController.login(req, res)
        res.send(result)
    })
    .put('/logout', auth, async (req, res) => {
        const result = await userController.logout(req, res)
        res.send(result)
    })
    .put('/me/avatar',auth, upload.single('avatar'), async (req, res) => {
        let result = await userController.addAvatarPic(req, res)
        res.send(result)
    })

    router.delete('/me/:id/delete/avatar',auth,async(req,res)=>{
        const result = await userController.deleteUserAvatar(req,res)
        res.send(result)
    })


module.exports = router