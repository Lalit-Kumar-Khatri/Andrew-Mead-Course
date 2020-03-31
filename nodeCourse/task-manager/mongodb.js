// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectioinURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectioinURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("5e82e6227514843cadbcf8b9") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count);
    // })

    // 
    // Goal: Use find and findOne with tasks
    // 
    // 1. Use findOne to fetch the last task by its id (print doc to the console)
    // 2. Use find to fetch all the tasks that are not completed (print docs to the console)
    // 3. Test your work!
    
    db.collection('tasks').findOne({ _id: new ObjectID("5e82dd37ae2d773658298693") }, (error, task) => {
        console.log(task);
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    })
})