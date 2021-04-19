const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'findMyRestaurant';

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) return console.log('unable to connet to DB');
    const db = client.db(databaseName);
    db.collection('restaurants').insertOne({
        name: 'nodejs insert test',
        work: true
    }, (err, result) => {
        if(err) return console.log('error:', error)
        console.log('result.ops:', result.ops)
    });


})