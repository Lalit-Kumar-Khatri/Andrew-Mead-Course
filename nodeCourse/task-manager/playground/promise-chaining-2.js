// 
// Goal: Mess around with promise chaining
// 
// 1. Create promise-chaining-2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete tasks
// 5. Test your work.

require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5e85c08974738345da71ea7e').then((task) => {
    console.log(task);
    return Task.countDocuments({ complete: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})