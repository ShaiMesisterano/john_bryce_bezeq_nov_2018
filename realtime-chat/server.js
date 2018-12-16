const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const eventNames = ["chat message", "join"];

// Middleware for providing static assets
app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
    socket.on(eventNames[0], function(msg){
        io.emit(eventNames[0], {
            sender: socket.id,
            text: msg
        });
    });
});

server.listen(3000, function() {
    console.log(`Server is running...`);
});