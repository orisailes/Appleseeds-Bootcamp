const User = require('../models/User')

const register = async (req, res) => {
    let result
    try {
        result = await new User(req.body).save()
    } catch (err) {
        result = err.message
    }
    return result
}

const login = async (req, res) => {
    let user
    try {
        user = await User.loginByEmail(req.body.email, req.body.password)
    } catch (err) {
        res.send(err.message)
    }
    return user
}


module.exports = {
    register,
    login

}