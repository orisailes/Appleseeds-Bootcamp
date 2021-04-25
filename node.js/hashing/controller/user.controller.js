const User = require('../models/User')
const jwt = require('jsonwebtoken')

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
        result = await User.find({})
    } catch (err) {
        result = err.message
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
    return {result}
}

module.exports = {
    addUser,
    getUsers,
    login
}