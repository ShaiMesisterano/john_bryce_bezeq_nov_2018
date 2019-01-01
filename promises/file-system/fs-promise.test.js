var fsPromise = require('./fs-promise');

// Promise
test('Promise - file content', function(){
    return fsPromise.readFile('1.txt').then(function(content){
        expect(content).toBe('temp');
    });
});
// async/await
test('async/await - file content', async function(){
    var data = await fsPromise.readFile('1.txt');
    expect(data).toBe('temp');
});