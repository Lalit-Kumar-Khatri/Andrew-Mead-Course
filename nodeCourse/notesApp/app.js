const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Challenge: Setup command option and function
// 
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Challenge 2: Wire up removeNote
// 
// 1. Load existing notes
// 2. Use array method filter to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

// Challenge 3: Use chalk to provide useful logs for remove
// 
// 1. if a note is removed, print the "note removed!" with a green background
// 2. if no note is removed, print "no note found!" with a red background

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
})

yargs.parse();
