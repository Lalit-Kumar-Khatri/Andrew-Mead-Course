require('../src/db/mongoose');
const User = require('../src/models/user');


User.findByIdAndUpdate('5e85b85a49e06e3ab87431d8', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
