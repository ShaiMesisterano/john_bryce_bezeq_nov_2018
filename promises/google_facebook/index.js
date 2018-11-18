//var rp = require('request-promise');
var rp = require('./custom-request-promise');

console.log('going to google.com');
rp('https://www.google.com')
    .then( function(htmlGoogle){
        console.log(htmlGoogle);
        console.log('going to facebook.com');
        rp('https://www.facebook.com')
            .then( function(htmlFacebook) {
                console.log(htmlFacebook);
            })
    } )