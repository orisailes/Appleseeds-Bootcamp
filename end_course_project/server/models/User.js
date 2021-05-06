const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
       
    },

    password: {
        type: String,
        required: true,
        validate(value) {
            // if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
            //     throw new Error('Invalid password');
            // }
            if(value.length<6){
                throw new Error('Invalid password')
            }
        }
    },

    pokemons:[],

    money:{
        type:Number,
        default:0
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.statics.loginByEmail = async (email, password) => {
    const user = await User.findOne({
        email
    })
    if (!user) throw new Error('invalid password or email')
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error('invalid password or email')
    return user
}

const User = mongoose.model('users', userSchema)

module.exports = User