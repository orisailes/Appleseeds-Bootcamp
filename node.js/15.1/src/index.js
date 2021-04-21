const express = require('express')
require('./db/mongoose')
const Product = require('./models/Product')
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());

app.post('api/product', async (req, res) => {
    const product = new Product(req.body);
    try {
        const result = await product.save();
        res.send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }

})

app.get('api/product', async (req, res) => {
    if (!req.query) {
        try {
            const result = await Product.find({});
            res.send(result);
        } catch (err) {
            res.send(err.message);
        }
    }
    if (req.query) {
        if (Object.keys(req.query)[0] || Object.keys(req.query)[1] === ("isActive")) {
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

app.get('api/product/findByPriceRange', async (req, res) => {
    if (req.query) {
        const {
            min,
            max
        } = req.query
        try {
            const result = await Product.find({
                "details.price": {
                    $gte: min,
                    $lte: max
                }
            });
            res.send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
})

app.get('api/product/:id', async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const result = await Product.findOne({
            _id: id
        });
        res.send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

app.put('/api/product/:id', async (req, res) => {
    const {
        id
    } = req.params;

    if (Object.keys(req.body).length) {
        const allowOnly = ['name', '_id', 'category', 'isActive', 'details.discount', 'details.description', 'details.price', 'details.phone', 'details.img'];
        const isValidUpdate = Object.keys(req.body).every(key => allowOnly.includes(key))
        if (isValidUpdate) {
            try {
                const result = await Product.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!result) return res.status(400).send();
                res.send(result);
            } catch (err) {
                res.status(400).send(err.message);
            }
        } else {
            res.status(400).send('invalid update. please double check your update fields');
        }
    }


    if (Object.keys(req.query).length) {
        try {
            let helper = {}
            if (req.query.discount) {
                helper["details.discount"] = req.query.discount
            }
            if (req.query.isActive) {
                helper["isActive"] = req.query.isActive
            }
            console.log(helper);
            const result = await Product.findByIdAndUpdate(id, helper, {
                new: true,
                runValidators: true
            })
            res.status(200).send(result)
        } catch (err) {
            res.status(400).send('invalid update. queries in invalid')
        }
    }

    if(!Object.keys(req.query).length && !Object.keys(req.body).length) res.status(400).send('invalid put request')
})

app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})