const express = require('express');
const utils = require('../utils')
const path = require('path')
const router = new express.Router()

router.use(express.json());


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, './client/build')))
// } else {
//     app.use(express.static(path.join(__dirname, './client/public')))
// }


// router.get('/api/clients', (req, res) => {
//     const clients = utils.getAllClients();
//     console.log(`get clients commited`);
//     res.status(200).send(clients);
// })

// router.get('/api/clients/filter', (req, res) => {
//     let clients = utils.getAllClients();
//     console.log(`get clients with filter commited`);
//     const sortTerms = req.query;
//     const sortKey = Object.keys(sortTerms)[0]
//     const order = sortTerms[sortKey]
//     clients = clients.sort((a, b) => {
//         return order === "up" ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]
//     })
//     res.status(200).send(clients);
// })

// router.get('/api/clients/:id', (req, res) => {
//     const {
//         id
//     } = req.params
//     const client = utils.getClientById(id);
//     console.log(`get client commited`);
//     res.status(200).send(client);
// })

// router.post('/api/clients', (req, res) => {
//     const clients = utils.createClient(req.body);
//     console.log(`post client commited`);
//     res.status(200).send(clients);
// })

// router.put('/api/clients/desposit/cash/:id', (req, res) => {
//     const {
//         id
//     } = req.params;
//     const {
//         amount
//     } = req.query;
//     console.log(`put client commited`);
//     res.status(200).send(utils.despositCash(id, amount));
// })

// router.put('/api/clients/desposit/credit/:id', (req, res) => {
//     const {
//         id
//     } = req.params;
//     const {
//         amount
//     } = req.query;
//     console.log(`put client commited`);
//     if (amount > 0) res.status(200).send(utils.updateCredit(id, amount));
//     if (amount <= 0) res.status(400).send(`invalid request`)
// })

// router.put('/api/clients/withdraw/:id', (req, res) => {
//     const {
//         id
//     } = req.params;
//     const {
//         amount
//     } = req.query;
//     console.log(`put client commited`);
//     res.status(200).send(utils.withdrawMoney(id, amount));
// })

// router.put('/api/clients/transfer', (req, res) => {
//     const {
//         from,
//         to,
//         amount
//     } = req.query;
//     if (!from || !to || !amount) res.status(400).send('invalid queries. transfer hasnt been made')
//     res.status(200).send(utils.transferMoney(from, to, amount))
// })

