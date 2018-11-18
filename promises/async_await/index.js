var rp = require('request-promise');

async function init() {
    try {
        var googleHtml = await rp('https://www.google.com');
        return googleHtml;
    }
    catch (ex) {
        console.error(ex);
    }
}

async function _init() {
    console.log(await init());
    console.log(await init());
    console.log(await init());
    console.log(await init());
}

_init();