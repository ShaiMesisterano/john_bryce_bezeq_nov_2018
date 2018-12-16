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

const socket = io();
socket.on('pictures', pictures => console.log(pictures));