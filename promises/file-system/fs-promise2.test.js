var fs = require('fs');
var fsPromise = require('./fs-promise');

test('fs methods', async function(){
    var fsSpy = jest.spyOn(fs, 'readFile');
    var filename = '1.txt';
    await fsPromise.readFile(filename);
    expect(fsSpy).toHaveBeenCalled();
});