const User = require('../models/User')
const sharp = require('sharp')
const multer = require('multer')

const addUser = async (req, res) => {
    let result
    try {
        result = await new User(req.body).save()
    } catch (err) {
        result = err.message
    }
    return result
}

const getUsers = async (req, res) => {
    let result
    try {
        user = await User.find({})
        result = user
    } catch (err) {
        result = false
    }
    return result
}

const login = async (req, res) => {
    let result
    let token
    try {
        const user = await User.loginByUserName(req.body.user_name, req.body.password)
        if (!user) result = false
        if (user){ 
           token = await user.generateAuthToken()
            result = user
        }
    } catch (err) {
        result = err.message
    }
    return {result,token}
}

const logout = async (req,res) => {
    let result
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
       result = await req.user.save()
    }catch(err){
        result = err.message
    }
    return result
}


const addAvatarPic = async (req,res) => {
    let result
    try{
        req.user.avatar = req.file.buffer
        result = await req.user.save()
    }catch(err){
        result = err.message
    }
    return result
}

const getUserAvatar = async (req,res) => {
    let result
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error('Avatar not found')
        }
        result = user.avatar
    }catch(err){
        result = err.message
    }
    return result
}

module.exports = {
    addUser,
    getUsers,
    login,
    logout,
    addAvatarPic,
    getUserAvatar
}