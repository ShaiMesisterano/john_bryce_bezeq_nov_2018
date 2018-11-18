var fsPromise = require('./fs-promise');

async function init() {
    // CREATE
    await fsPromise.createFile('1.txt', 'שלום עולם!');
    // UPDATE
    await fsPromise.updateFile('1.txt', '\nHello world!');
    // READ
    var data = await fsPromise.readFile('1.txt');
    console.log(data);
    // DELETE
    //await fsPromise.deleteFile('1.txt');
}

init();