const express = require("express");
const path = require("path");
// const indexRouter = require("./routers/index");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').Server(app);

app.use(bodyParser.urlencoded());
app.use(session({ secret: "mySecret" }));

app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/', indexRouter);

server.listen(3000, function() {
    console.log(`Server is running...`);
});
