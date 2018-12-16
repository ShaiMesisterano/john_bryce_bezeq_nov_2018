const socket = io();
const eventNames = ["chat message", "join"];

const inpMessage = document.querySelector('#message');
const btnSend = document.querySelector('#send');
const divMessages = document.querySelector('#messages');

btnSend.addEventListener('click', function() {
    socket.emit(eventNames[0], inpMessage.value);
});

socket.on(eventNames[0], function(msg){
    divMessages.innerHTML += `${msg.sender}: ${msg.text}<br /><br />`
});