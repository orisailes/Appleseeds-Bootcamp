const yargs = require('yargs');
const uniqid = require('uniqid');
const utils = require('./usersUtils');

yargs.command({
    command: 'create',
    describe: 'create user',
    builder: {
        userName: {
            type: 'string',
            demandOption: true,
        },
        email: {
            type: 'string',
            demandOption: true,
        },
        password: {
            type: 'string',
            demandOption: true,
        },
    },
    handler({userName,email,password}) {
        const user = {
            userName,
            email,
            password,
            id: uniqid()
        }
        utils.create(user);
    }
})

yargs.command({
    command: 'read',
    handler() {
        console.log(utils.getUsers())
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove user (using id)',
    builder: {
        id: {
            demandOption: true,
            type: 'string',
        }
    },
    handler({
        id
    }) {
        utils.remove(id)
    }
})

yargs.command({
    command: 'update',
    describe: 'update',
    builder: {
        id: {
            demandOption: true,
            type: 'string',
        },
        userName: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
    },
    handler({
        id,
        userName,
        password,
        email
    }) {
        utils.update(id, userName, email, password);
    }
})

yargs.parse()