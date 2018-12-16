const request = require('request');

class Gallery {
    constructor(endpoint, io, num, timer) {
        this.endpoint = endpoint;
        this.io = io;
        this.num = num;
        this.timer = timer;
        this.pictures = [];
        this.index = 0;
    }

    create() {
        console.info('create');
        return new Promise( (resolve, reject) => {
            for (let i=0;i<this.num;i++){
                request(this.endpoint, (err, res, body) => {
                    if (err) {
                        return console.error(err);
                    }
                    body = JSON.parse(body);
                    this.pictures.push({url: body.url, counter: 0});
                    if (this.pictures.length === this.num) {
                        resolve(this.pictures);
                    }
                });
            }
        });
    }

    async start() {
        console.info('start');
        const pictures = await this.create();
        let interval = setInterval( () => this.io.emit('file', this.next()), this.timer );
    }

    next() {
        console.info('next', new Date());
        this.index = this.index === this.num ? 0 : ++this.index;
        return this.pictures[this.index];
    }
}

module.exports = Gallery;