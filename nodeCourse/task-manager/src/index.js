const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((e) => {
        res.status(400).send(e); 
    })
})

// 
// Goal: Set up the task creation endpoint
// 
// 1. Create a separate file for the task model (load it into index.js)
// 2. Create the task create endpoint (handle success and error)
// 3. Test the endpoint from postman with good and bad data

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})