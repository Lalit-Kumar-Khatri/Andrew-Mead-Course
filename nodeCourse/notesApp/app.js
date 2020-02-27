const validator = require('validator');

const getNotes = require('./notes');

const myNotes = getNotes();
console.log(myNotes);

console.log(validator.isEmail('example.com'));

console.log(validator.isURL('https/mead.io'));