const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Andrew.');

// Challenge : append a message to notes.txt
// 1. use appendFileSync to append to the file
// 2. run the script
// 3. check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' My name is Lalit from India and I am 38 years old.');