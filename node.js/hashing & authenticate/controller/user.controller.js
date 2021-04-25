const User = require('../models/User')

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

module.exports = {
    addUser,
    getUsers,
    login,
    logout
}