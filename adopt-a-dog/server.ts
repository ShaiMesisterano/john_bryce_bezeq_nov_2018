import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as socketIO from 'socket.io';
import * as indexRouter from './routers/index';
import * as userRouter from './routers/user';
import * as Gallery from './resources/Gallery'

const app: express = express();
const server: http.Server = http.createServer(app);
let gallery;

app.use(bodyParser.urlencoded());
app.use(session({ secret: "mySecret" }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/user', userRouter);

const io: socketIO.Server = socketIO(server);

// io.on('connection', function(socket){
//     console.log('socket is connected...');
// });

io.on('connection', async socket => {
    // console.log('socket is connected...');
    // const pictures = await gallery();
    // io.emit('pictures', pictures);
    // socket.on('init', (msg) => {
    //     const gallery = new Gallery('http://random.dog/woof.json', io, 3, 5000);
    //     gallery.start();
    // })
    gallery = new Gallery('http://random.dog/woof.json', socket, io, 3, 5000);
    gallery.start();
});

// server.listen(3000, function() {
//     console.log(`Server is running...`);
// });

server.listen(8080, () => console.log(`Server is running...`));