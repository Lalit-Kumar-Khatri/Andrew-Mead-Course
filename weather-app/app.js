const request = require('request');

const url = 'https://api.darksky.net/forecast/d08c05a51ac0554fc0553a9cfe47524e/37.8267,-122.4233'

request({ url: url }, (error, response)=> {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});