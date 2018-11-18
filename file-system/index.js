var fs = require('fs');

// fs.writeFile('output.txt', 'Hello World', function(){
//     console.log('File was created');
// });

// fs.appendFile('output.txt', '\nHello again...', function(error){
//     console.log(error);
//     console.log('Appended...');
// });

fs.readFile('output.txt', 'utf-8', function(error, data){
    var buff = new Buffer(1024);
    console.log(data);
});