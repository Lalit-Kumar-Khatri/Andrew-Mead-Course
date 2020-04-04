require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e85c08974738345da71ea7e').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ complete: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count; 
}

deleteTaskAndCount('5e85c12f69bc9046f89b5785').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})

// 
// Goal: Use async/await
// 
// 1. Create deleteTaskAndCount as an async function
// - accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach then/catch to log results
// 5. Test your work!