var Permissions = [];

client.addListener('message', function (from, to, message) {
	// First check if it's a command
	if (message.charAt(0) == "!"){
		var args = message.substring(1).split(' ');
		var fn = Commands[args[0]]
		if (fn != null){
			sendConsoleMessage(from + " executed command \"" + message + "\"")
			if (typeof(fn) == "string"){
				client.say(to, fn)
			}else{
				fn(from, to, args);
			}
		}
		return
	}

	// Check if part of listeners
	if (Permissions[from] == ""){
		for (var i = 0; i < Listeners.length; i++) {
			var msg = Listeners[i](message, from, to)
			if (msg){
				return sendConsoleMessage(util.format(msg, from));
			}
		};
	}

	sendConsoleMessage('SAY ' + from + " > " + to + ": " + message)
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});


client.addListener('join', function(channel, nick) {
    client.send('names', CHANNEL)
    sendConsoleMessage('JOIN: ' + nick + ' joined ' + channel);
});


client.addListener('part', function(channel, nick, reason) {
    client.send("names", CHANNEL)
    sendConsoleMessage(util.format('PART: %s left %s (%s)', nick, channel, reason));
});


client.addListener('names', function(channel, nicks) {
	updateUsers(Object.size(nicks));
    Permissions = nicks
});


client.addListener('registered', function(message) {
    client.send('ns', 'identify', process.env.ircPass || '');
});
