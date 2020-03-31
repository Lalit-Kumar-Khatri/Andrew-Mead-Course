// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectioinURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectioinURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    
    // Goal: Use deleteOne to remove a task
    
    // 1. Grab the description for the task you want to remove
    // 2. Set up the call with the query
    // 3. Use promise method to set up the success/error handlers
    // 4. Test your work.

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})