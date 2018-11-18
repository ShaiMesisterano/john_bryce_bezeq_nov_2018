var request = require('request');

console.log("going to google.com");
request('https://www.google.com', function (error, response, bodyGoogle) {
    console.log(bodyGoogle + "\n" + "-".repeat(20));
    console.log("going to facebook.com");
    request('https://www.facebook.com', function (error, response, bodyFacebook) {
        console.log(bodyFacebook + "\n" + "-".repeat(20));
    });
});