Commands = [];
HelpMessages = [];
Listeners = [];

addCommand = function(cmd, fn, help){
	Commands[cmd] = fn;
	HelpMessages.push(help);
}

addMessageListener = function(fn, help){
	Listeners.push(fn);
	HelpMessages.push(help);
}