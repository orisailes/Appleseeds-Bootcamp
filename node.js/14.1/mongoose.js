const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/myShop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

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

const iphone = new Product({
    name: 'iPhone 12 P2ro xMaxscs',
    category: 'Electronics',
    details: {
        description: 'the new iphone 12 xpro xmam build by apple can be yours today!',
        price: 200,
        discount: 0.1,
        img: ['img2','img3'],
        phone: '0524148133'
    }
})

const bike = new Product({
    name: 'Mountain bikes',
    category: 'Viechles',
    details: {
        description: 'motor bike with 6 plugs reach up to 40  km/h',
        price: 300,
        img: ['img1','img2'],
        phone: '0503145130'
    }
})

const vasa = new Product({
    name: 'Planet vasa',
    category: 'Home decor',
    details: {
        description: 'vasa made of gold, one you go vasa you never go back',
        price: 15,
        img: ['img1','img2'],
        phone: '0541572463'
    }
})

const saveProd = async (products) => {
    for (let product of products) {
        try {
            let savedProduct = await product.save()
            console.log(savedProduct);
        } catch (err) {
            console.log(err)
        };
    }
}

saveProd([iphone,bike,vasa])