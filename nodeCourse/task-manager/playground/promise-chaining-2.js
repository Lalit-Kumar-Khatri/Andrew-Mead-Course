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