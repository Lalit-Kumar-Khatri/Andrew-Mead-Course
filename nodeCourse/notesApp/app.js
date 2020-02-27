const chalk = require('chalk');
const getNotes = require('./notes');

const myNotes = getNotes();
console.log(myNotes);

const greenMsg = chalk.blue.inverse.bold('Error!');
console.log(greenMsg);