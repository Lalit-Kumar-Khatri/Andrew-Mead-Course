const request = require('request');

// const url = 'https://api.darksky.net/forecast/d08c05a51ac0554fc0553a9cfe47524e/37.8267, -112'

// request({ url: url, json: true }, (error, response)=> {
//         if (error) {
//                 console.log('Unable to connect to weather service!');
//         } else if (response.body.error) {
//                 console.log('Unable to find location')
//         } else {
//                 console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' +    response.body.currently.precipProbability + '% chance of rain.');
//         }
// });
        

// 
// Goal: Handle error geocoding request
// 
// 1. Setup an error handler for low-level errors.
// 2. Test by disabling the network request and running the app
// 3. Setup error handling for no matching results.
// 4. Test by altering the search term and running the app 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibGFsc2EiLCJhIjoiY2s3bHZ4ZnFpMDdscDNmcGF1MXl2dGs2dSJ9.eTfuEtnSRT_2IcA4t3DiOg&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
                console.log('Unable to connect to location services!')
        } else if (response.body.features.length === 0) {
                console.log('Unable to find location. Try another search.');
        } else {
                const longtitude = response.body.features[0].center[1]
                const latitude = response.body.features[0].center[0]
                console.log(longtitude, latitude);
        }
})
