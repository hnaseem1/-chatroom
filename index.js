// Setup basic express server
var express = require('express');
var app = express();

var server = require('http').createServer(app);

// This is how we tell our web server where to find the files to serve
app.use(express.static('public'));

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  // when the client emits 'new message', this listens and executes
  socket.on('message', function (msg) {
    console.log('Message received')
    io.emit('message', msg);
  });
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
