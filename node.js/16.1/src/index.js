const express = require('express')
require('./db/mongoose')
const productRouter = require('./routers/product')
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(productRouter);
app.listen(port, () => {
    console.log(`server is on http://localhost:${port}`);
})