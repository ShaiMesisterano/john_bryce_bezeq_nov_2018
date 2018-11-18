var request = require('request');

function rp(url) {
    return new Promise( function(resolve, reject) {
        request(url, function(error, response, body) {
            if (error) reject(error);
            
            resolve(body);
        })
    });
}

module.exports = rp;