const request = require('request');

const url = 'https://api.darksky.net/forecast/d08c05a51ac0554fc0553a9cfe47524e/37.8267,-122.4233?lang=hi'

request({ url: url, json: true }, (error, response)=> {
        // console.log(response.body.currently);
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
});

// Goal: Print a small forecast to the user
// 
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work.