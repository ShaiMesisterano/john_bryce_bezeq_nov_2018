const request = require('request');

class Gallery {
    constructor(endpoint, socket, io, num, timer) {
        this.endpoint = endpoint;
        this.io = io;
        this.num = num;
        this.timer = timer;
        this.pictures = [];
        this.index = 0;
        socket.on('vote', msg => this.vote.call(this, msg));
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
        this.io.emit('loading completed');
        this.io.emit('file', this.next());
        let interval = setInterval( () => this.io.emit('file', this.next()), this.timer );
    }

    next() {
        console.info('next', new Date());
        this.index = this.index === this.num - 1 ? 0 : ++this.index;
        this.emitCounter();
        return this.pictures[this.index];
    }

    vote(msg) {
        console.log("MSG: " + msg.type);
        let counter = this.pictures[this.index].counter;
        counter = msg.type === "adopt" ? ++counter : --counter;
        this.pictures[this.index].counter = counter;
        this.emitCounter();
        console.log("COUNT " + this.index + ": " + this.pictures[this.index].counter);
    }

    emitCounter() {
        this.io.emit('counter', this.pictures[this.index].counter);
    }
}

module.exports = Gallery;