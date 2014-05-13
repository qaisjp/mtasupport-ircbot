CrashTalkers = [];
ASITalkers = [];
UnderTen = [];

addCommand("reinstall", "Please reinstall MTA using this link: http://nightly.mtasa.com/?mtasa-1.3.5-full-latest", "!reinstall gives instructions for reinstalling, giving a link to the latest mtasa build");
addCommand("update", "Please update MTA using this link: http://nightly.mtasa.com/?mtasa-1.3.5-full-latest", "!update gives instructions for updating, giving a link to the latest mtasa build");
addCommand("crash", "If your MTA is crashing, please visit this link: https://forum.mtasa.com/viewtopic.php?t=31668.", "!crash gives a link to the crash forum topic");
addCommand("diag", "Please run MTADiag. You may find it here: https://forum.mtasa.com/viewtopic.php?t=37813", "!diag gives a link to the diag message");
addCommand("dataja", "Don't ask to ask, just ask!™", "!dataja says don't ask to ask just ask");
addCommand("asi", "Remove your ASI files using the ASI Remover: https://goo.gl/cBxSVz", "!asi gibs asi remover link");
addCommand("faq", "Please visit the FAQ: https://goo.gl/i4az9t", "!faq gives faq link");
addCommand("console", "Here's a link to the console: http://gtanetunmibbit.eu01.aws.af.cm/", "!console gives a link to the cool console");
addCommand("help", function(from, to) {
	client.say(from, "-- qaisjp's uber mtasupport bot --");
	for (var i = 0; i < HelpMessages.length; i++) {
		client.say(from, HelpMessages[i]);
	}
}, "!help shows dis message");	


addMessageListener( function(message, from, to){
	if (message.search("crash") != -1){

		if (CrashTalkers.indexOf(from) == -1){
			CrashTalkers.push(from);
			console.log("Received crash message from " + from + ".");
			client.say(to, "If MTA is crashing for you, " + from + ", please visit this link: https://forum.mtasa.com/viewtopic.php?t=31668.");
			return true;
		}

	}
},
"saying crash in a message will show the crash topic. this will only show once per nick, per join");

addMessageListener( function(message, from, to){
	if (message.search(" asi ") != -1){
		if (ASITalkers.indexOf(from) == -1){
			ASITalkers.push(from);
			console.log("Received ASI message from " + from + ".");
			client.say(to, from  + ", remove your ASI files using the ASI Remover: https://goo.gl/cBxSVz");
			return true;
		}
	}
},
"saying asi in a message will show the asi remove. this will only show once per nick, per join");

addMessageListener( function(message, from, to){
	if (message.isASCII() == false){
		client.notice(from, from + ", only English is permitted in this channel. Try using http://translate.google.com.");
		return "%s spoke in a foreign language";
	}
},
"saying something in a foreign language or saying a weird symbol will tell you to speak english")

addMessageListener( function(message, from, to){
	if (message.allValuesPresent(["can", "i", "ask"])){
		client.notice(from, from + ", don't ask to ask, just ask!™");
		return "%s asked if he could ask a question";
	}
},
"saying {can,i,ask} in a sentence will tell you to just ask")

addMessageListener( function(message, from, to){
	if (message.search("help").between(0, 20, true) || message.search("halp").between(0, 20, true)){
		client.notice(from, from + ", please state and explain your issue in detail so we can help you.");
		return "%s said help or halp...";
	}
},
"saying help will ask you to tell us what your issue is")

addMessageListener( function(message, from, to){
	if (message.length < 10){
		if (UnderTen.indexOf(from) == -1){
			UnderTen.push(from);
			client.notice(from, "If you have a problem, please state your issue and someone will be with you soon");
			return "%s said a very small message"
		}
	}
},
"saying smth under 10 chars gives you a msg, once per join")

addMessageListener( function(message, from, to){
	if (message.search("samp") != -1){
			console.log("Received SAMP message from " + from + ".");
			client.say(to, from  + ", get the fuck out you fucking samp faggot, bitch!");
			return true;
	}
},
"saying samp is a bad idea");



client.addListener('join', function(channel, nick, message) {
	CrashTalkers.remove(nick);
	UnderTen.remove(nick);
	ASITalkers.remove(nick);
});
