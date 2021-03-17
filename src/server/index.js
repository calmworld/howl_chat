var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.send(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('new connection');
  socket.on('chat messeage', function(msg){
      console.log('msg:' + JSON.stringify(msg))
      io.emit('chat messeage', msg)
  })
});

server.listen(3001, function(){
    console.log('listening on 3001')
})