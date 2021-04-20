const {
    MongoClient,
    ObjectID
} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'Blog4U';

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) return console.log('unable to connet to DB');
    const db = client.db(databaseName);
    //* users already created
    //! adding blogs and ref to their authors
    // db.collection('blogs').insertMany([{
    //     authorID: new ObjectID("607e95bd43721236d489e10c"),
    //     title: "How to live forever",
    //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     comments:[],
    // },
    // {
    //     authorID: new ObjectID("607e95bd43721236d489e10c"),
    //     title: "How to succed in everything",
    //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     comments:[],
    // },
    // {
    //     authorID: new ObjectID("607e95bd43721236d489e10d"),
    //     title: "How to make a million dollar in 1 min",
    //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     comments:[],
    // },
    // {
    //     authorID: new ObjectID("607e95bd43721236d489e10d"),
    //     title: "3 Tips for good housekeeping",
    //     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     comments:[],
    // }])
    //! adding comments and ref to their authors,blogs
    // db.collection('comments').insertMany([{
    //         blogID: new ObjectID("607e9ffd9d6e4622080ab7b4"),
    //         authorId:new ObjectID("607e95bd43721236d489e10c"),
    //         author:"Ori",
    //         date:new Date(),
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     },
    //     {
    //         blogID: new ObjectID("607e9ffd9d6e4622080ab7b5"),
    //         authorId:new ObjectID("607e95bd43721236d489e10c"),
    //         author:"Ori",
    //         date:new Date(),
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     },
    //     {
    //         blogID: new ObjectID("607e9ffd9d6e4622080ab7b6"),
    //         authorId:new ObjectID("607e95bd43721236d489e10d"),
    //         author:"Shay",
    //         date:new Date(),
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     },
    //     {
    //         blogID: new ObjectID("607e9ffd9d6e4622080ab7b7"),
    //         authorId:new ObjectID("607e95bd43721236d489e10d"),
    //         author:"Shay",
    //         date:new Date(),
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     }
    // ])
    //! adding blog refs to the relevant user
    // db.collection('users').updateOne({
    //     _id: new ObjectID("607e95bd43721236d489e10c")
    // }, {
    //     $push: {
    //         blogs: {
    //             $each: [new ObjectID("607e9ffd9d6e4622080ab7b4"),
    //                 new ObjectID("607e9ffd9d6e4622080ab7b5")
    //             ]
    //         },
    //     }
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("607e95bd43721236d489e10d")
    // }, {
    //     $push: {
    //         blogs: {
    //             $each: [new ObjectID("607e9ffd9d6e4622080ab7b6"),
    //                 new ObjectID("607e9ffd9d6e4622080ab7b7")
    //             ]
    //         },
    //     }
    // })
    //! adding comments refs to the relevant blog
    // db.collection('blogs').updateOne(
    //     {_id:new ObjectID("607e9ffd9d6e4622080ab7b4")},
    //     {$push:{comments:new ObjectID("607ea67c4968d13ef09c3f53"),}}
    // )
    // db.collection('blogs').updateOne(
    //     {_id:new ObjectID("607e9ffd9d6e4622080ab7b5")},
    //     {$push:{comments:new ObjectID("607ea67c4968d13ef09c3f54"),}}
    // )
    // db.collection('blogs').updateOne(
    //     {_id:new ObjectID("607e9ffd9d6e4622080ab7b6")},
    //     {$push:{comments:new ObjectID("607ea67c4968d13ef09c3f55"),}}
    // )
    // db.collection('blogs').updateOne(
    //     {_id:new ObjectID("607e9ffd9d6e4622080ab7b7")},
    //     {$push:{comments:new ObjectID("607ea67c4968d13ef09c3f56"),}}
    // )
})