const mongoose = require('mongoose');
const validator = require('validator')

const Product = mongoose.model("products", {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    details: {
        description: {
            type: String,
            required: true,
            minLength: 10,
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        discount: {
            type: Number,
            default: 0,
        },
        img: {
            type: [String],
            validate(value){
                if(value.length<2) throw new Error('image must include at least 2 pictures')
            }
        },
        phone: {
            type: String,
            required: true,
            validate(value) {
                if(!validator.isMobilePhone(value, ['he-IL'])) throw new Error('invalid phone number')
            }
        },
        dateAdded: {
            type: String,
            default: new Date()
        }
    }
})

module.exports = Product