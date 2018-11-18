var rp = require('request-promise');

async function init() {
    await getHtml('google.com');
    await getHtml('facebook.com');
}

async function getHtml(domain) {
    console.log('going to ' + domain);
    var html = await rp('https://www.' + domain);
    console.log(html);
}

init();