const fs = require('fs'); 

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge:

// 1. Load and parse the json data
// 2. Change the name and age property using your infor
// 3. Stringify the changed object and otherwise the original data
// 4. Test your work by viewing data in the JSON file


const dataBuffer = fs.readFileSync('1-json.json');
const stringifyData = dataBuffer.toString();
const parsedData = JSON.parse(stringifyData);

parsedData.name = 'Lalit';
parsedData.age = 34;

const parsedDataJSON = JSON.stringify(parsedData);

fs.writeFileSync('1-json.json', parsedDataJSON);