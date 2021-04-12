const chalk = require('chalk');
const fs = require('fs');

const getUsers = () => {
    let users = [];
    try {
        users = JSON.parse(fs.readFileSync('users-data.json'));
    } catch (err) {
        return users;
    }
    return users;
}

const create = (user) => {
    const users = getUsers();
    users.push(user);
    setUsersJSON(users, 'create')
}

const remove = (id) => {
    let users = getUsers();
    users = users.filter(user => user.id !== id);
    setUsersJSON(users, 'remove');
}

const update = (id, userName, email, password) => {
    let users = getUsers();
    let found = users.find(user=>user.id===id);
    try{
        userName ? found.userName=userName:null
        email ? found.email=email:null
        password ? found.password=password:null
        users.forEach(user => {
            user.id===id?user=found:null
        });
        setUsersJSON(users,'update')
    }catch(err){
        console.log(chalk.inverse.red('something went wrong. update cant be done'))
    }
}

const setUsersJSON = (users, action) => {
    if (users.length || getUsers().length) {
        fs.writeFileSync('users-data.json', JSON.stringify(users));
        console.log(chalk.green.inverse(`user ${action} succesfully`));
    } else {
        console.log(chalk.red.inverse(`user not ${action}, something went wrong`));
    }
}

module.exports = {
    create,
    getUsers,
    remove,
    update
}