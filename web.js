var fs        = require('fs'),
	app       = require('express')(),
	server    = require('http').createServer(app),
	io        = require('socket.io').listen(server),
	indexFile = '';

fs.readFile('index.html', 'utf8', function (err,data) {
 	if (!err) {
    	indexFile = data;
  	}
});

app.get('/favicon.ico', function(_, res){res.sendfile('favicon.ico')});
app.get('/', function(req, res) {
    res.send('<h1>#MTASupport bot</h1>' + HTMLContent());

});
server.listen(Number(process.env.PORT || 5000));


HTMLContent = function() {
	return indexFile;
};


var connectedMembers = 0;
var connectedRecord  = 0;
var peopleInChannel  = 0;
io.sockets.on('connection', function (socket) {
	connectedMembers++;
	if (connectedMembers > connectedRecord){
		connectedRecord = connectedMembers;
	}

	io.sockets.emit('updateConnected', connectedMembers, connectedRecord);
  	socket.emit('consoleMessage', "Connected to MTASupport panel");
  	updateUsers(peopleInChannel, socket);

	socket.on('disconnect', function (soc) {
		connectedMembers--;
	    io.sockets.emit('updateConnected', connectedMembers);
	});

	/*for (var i = 0; i < 100; i++) {
		io.sockets.emit('consoleMessage', 'LOLL' + i)
	};*/
});

sendConsoleMessage = function(msg){
	io.sockets.emit('consoleMessage', msg);
}

updateUsers = function(n, sock){
	(sock || io.sockets).emit('usersOnChannel', n)
	peopleInChannel = n;
}
