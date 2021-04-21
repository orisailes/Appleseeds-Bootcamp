const express = require('express')
require('./db/mongoose')
const Product = require('./models/Product')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/product', async (req, res) => {
    const product = new Product(req.body);
    try {
        const result = await product.save();
        res.send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }

})

app.get('/product', async (req, res) => {
    if(!req.query){
        try {
            const result = await Product.find({});
            res.send(result);
        } catch (err) {
            res.send(err.message);
        }
    }
    if (req.query) {
        if (Object.keys(req.query)[0] || Object.keys(req.query)[1] ===("isActive")) {
            try {
                const result = await Product.find(req.query);
                console.log('result:', result)
                res.send(result);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
    }

})

app.get('/product/findByPriceRange',async(req,res)=>{
    if(req.query){
        const {min,max} = req.query
        try{
            const result = await Product.find({"details.price":{$gte:min,$lte:max}}) 
            res.send(result)
        }catch(err){
            res.status(400).send(err.message)
        }
    }
})

app.get('/product/:id', async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const result = await Product.findOne({
            _id: id
        });
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
})

app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})