const request = require('request');

const url = 'https://api.darksky.net/forecast/d08c05a51ac0554fc0553a9cfe47524e/37.8267,-122.4233?lang=hi'

request({ url: url, json: true }, (error, response)=> {
        // console.log(response.body.currently);
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
});


// Geocoding
// Address -> Lat/Long -> Weather


// 
// Goal: Print the lat/long for los Angeles
// 
// 1. Fire off a new request to the URL explored in the browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longtitude to the terminal
// 4. Test your work! 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGFsc2EiLCJhIjoiY2s3bHZ4ZnFpMDdscDNmcGF1MXl2dGs2dSJ9.eTfuEtnSRT_2IcA4t3DiOg&limit=1';

request({ url: geocodeURL, json: true}, (error, response) => {
        const latitude = response.body.features[0].center[1];
        const longtitude = response.body.features[0].center[0];
        console.log(latitude, longtitude);
});