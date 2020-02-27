const chalk = require('chalk');
const getNotes = require('./notes');

const myNotes = getNotes();
console.log(myNotes);

const greenMsg = chalk.green('Success!');

console.log(greenMsg);

console.log(chalk.bold.green('Success!'));

console.log(chalk.inverse.green('Success!'));


// Challenge
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus: Use docs to mess around with other styles. Make text bold and inversed