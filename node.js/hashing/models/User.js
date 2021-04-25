const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id:user._id.toString() },'thisismyvalidation',{expiresIn:'7 days'})
    !user.tokens.length && user.tokens.push({token})
    await user.save()
    return token
}

userSchema.statics.loginByUserName = async (user_name, password) => {
    const user = await User.findOne({
        user_name
    })
    if (!user) return false
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return false
    return user
}

userSchema.methods.toJSON = function (){
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('users', userSchema)

module.exports = User