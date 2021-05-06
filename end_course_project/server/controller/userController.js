const User = require('../models/User')

const register = async (req, res) => {
    let result
    try {
        result = await new User(req.body).save()
    } catch (err) {
        console.log('err:', err.message)
        res.status(400).send(`error:${err}`)
    }
    return result
}

const login = async (req, res) => {
    let user
    try {
        user = await User.loginByEmail(req.body.email, req.body.password)
    } catch (err) {
        res.status(400).send(err.message)
    }
    return user
}


module.exports = {
    register,
    login

}