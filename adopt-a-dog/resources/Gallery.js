const request = require('request');

const pictures = [];

const getGallery = () => {
    return new Promise( (resolve, reject) => {
        for (let i=0;i<10;i++){
            request('http://random.dog/woof.json', (err, res, body) => {
                if (err) {
                    return console.error(err);
                }
                body = JSON.parse(body);
                pictures.push({url: body.url, counter: 0});
                if (pictures.length === 10) {
                    resolve(pictures);
                }
            });
        }
        
    });
}

module.exports = getGallery;