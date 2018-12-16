// let counter;
// let interval;

// loadFile();

// function loadFile() {
//     (async function() {
//         const response = await fetch("http://random.dog/woof.json");
//         const data = await response.json();
//         const fileUrl = data.url;
//         if (fileUrl.indexOf('mp4') > -1 || fileUrl.indexOf('webm') > -1) {
//             document.querySelector('#dogVideo').className = '';
//             document.querySelector('#dogPic').className = 'hide';
//             document.querySelector('#dogVideo').src = fileUrl;    
//         }
//         else {
//             document.querySelector('#dogPic').className = '';
//             document.querySelector('#dogVideo').className = 'hide';
//             document.querySelector('#dogPic').src = fileUrl;
//         }
//         counter = 0;
//         showCounter();
//         restartTimer();
//     })();
// }

// function restartTimer(){
//     clearInterval(interval);
//     interval = setInterval(loadFile, 2000);
// }

// document.querySelector('#btnAdopt').addEventListener('click', function(){
//     counter++;
//     showCounter();
//     restartTimer();
// });

// document.querySelector('#btnDrop').addEventListener('click', function(){
//     counter--;
//     showCounter();
//     restartTimer();
// });

// function showCounter() {
//     document.querySelector('#counter').innerHTML = counter;
// }

(async () => {
    await initUsername();
    initSocket();
})();

async function initUsername() {
    const response = await fetch('/user');
    const username = await response.text();
    document.querySelector('#username').innerText = "Hello " + username;
}

function initSocket() {
    const socket = io();

    socket.on('file', file => {
        console.log(file);
        enableButtons();
        if (file.url.indexOf('mp4') > -1 || file.url.indexOf('webm') > -1) {
            document.querySelector('#dogVideo').className = '';
            document.querySelector('#dogPic').className = 'hide';
            document.querySelector('#dogVideo').src = file.url;
        }
        else {
            document.querySelector('#dogPic').className = '';
            document.querySelector('#dogVideo').className = 'hide';
            document.querySelector('#dogPic').src = file.url;
        }
    });

    socket.on('loading completed', () => {
        document.querySelector('#loading').className = 'hide';
        document.querySelector('#content').className = '';
    });

    socket.on('counter', counter => document.querySelector('#counter').innerText = counter);

    document.querySelector('#btnAdopt').addEventListener('click', function () {
        disableButtons();
        socket.emit('vote', { type: 'adopt' });
    });

    document.querySelector('#btnDrop').addEventListener('click', function () {
        disableButtons();
        socket.emit('vote', { type: 'drop' });
    });
}

function enableButtons() {
    document.querySelector('#btnAdopt').disabled = false;
    document.querySelector('#btnDrop').disabled = false;
}

function disableButtons() {
    document.querySelector('#btnAdopt').disabled = true;
    document.querySelector('#btnDrop').disabled = true;
}