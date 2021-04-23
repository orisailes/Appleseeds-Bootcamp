const fs = require('fs');
const Client = require('../model/client');
const Account = require('../model/account');
const {
    ObjectID
} = require('mongodb');

const getAllClients = async () => {
    let clients = [];
    try {
        clients = await Client.find({});
        return clients;
    } catch (err) {
        return clients;
    }
}

const getClientById = async (id) => {
    const found = await Client.findById(id);
    return found;
}

const createClient = async (body) => {
    const newClient = new Client(body);
    let clientResult;
    let newAccount;
    try {
        clientResult = await newClient.save();
        newAccount = await new Account();
        newAccount._id = new ObjectID(clientResult._id);
        await newAccount.save();

    } catch (err) {
        console.log(err.message);
    }
    return clientResult;
}

const despositCash = async (id, amount) => {
    const result = await Account.findByIdAndUpdate(id, {
        $inc: {
            cash: amount
        }
    }, {
        new: true,
        runValidators: true
    });
    return result;
}

const updateCredit = async (id, amount) => {
    const result = await Account.findByIdAndUpdate(id, {
        credit: amount
    }, {
        new: true,
        runValidators: true
    });
    return result;
}

const withdrawMoney = async (id, amount) => {
    let result;
    try {
        const accountFound = await Account.findById(id);
        if (accountFound.cash - amount >= accountFound.credit * -1) {
            accountFound.cash = accountFound.cash - amount
        }
        result = await accountFound.save();
    } catch (err) {
        return err.message
    }
    return result
}

const transferMoney = async (fromID, toID, amount) => {
    let isValid = false;
    let fromClient;
    let toClient;
    let fromClientResult;
    let toClientResult;
    try {
        fromClient = await Account.findById(fromID);
        toClient = await Account.findById(toID);
        if (fromClient.cash - amount >= fromClient.credit * -1) isValid = true; // make transfer validation 
        if (isValid) {
            fromClient.cash = fromClient.cash - amount;
            toClient.cash = toClient.cash + amount;
            console.log(fromClient);
            console.log(toClient);
            fromClientResult = await fromClient.save();
            toClientResult = await toClient.save();
        }
    } catch (err) {
        return 'failed to tranfer money'
    }

    return [fromClientResult,toClientResult]
}

module.exports = {
    getAllClients,
    createClient,
    despositCash,
    updateCredit,
    getClientById,
    withdrawMoney,
    transferMoney,
}