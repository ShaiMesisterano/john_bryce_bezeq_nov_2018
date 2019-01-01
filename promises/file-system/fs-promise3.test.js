var fs = require('fs');
var fsPromise = require('./fs-promise');

fs.readFile = jest.fn(function (filename, encoding, cb) {
    return new Promise(function (resolve) {
        console.log(`Filename: ${filename}
Encoding: ${encoding}
Callback: ${cb}`);
        resolve(filename);
    });
});

test('fs methods', async function () {
    var filename = '1.txt';
    expect(fsPromise.readFile(filename)).resolves.toBe(filename);
});