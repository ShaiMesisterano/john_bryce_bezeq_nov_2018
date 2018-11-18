var fsPromise = require('../../promises/file-system/fs-promise');

function log(request, response, next) {
    var fileName = 'log.txt';
    var params = JSON.stringify(request.params);
    var body = JSON.stringify(request.body);
    var query = JSON.stringify(request.query);
    var date = new Date();

    var data = params + "," +
        body + "," +
        query + "," +
        date + "\n";

    updateFile(fileName, data);

    next();
}

async function updateFile(fileName, content) {
    await fsPromise.updateFile(fileName, content);
}

module.exports = log;