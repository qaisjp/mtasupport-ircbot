CHANNEL = "#mta.support";
irc = require('irc');
client = new irc.Client('irc.gtanet.com', 'MTASupport', {
	showErrors:true,
	userName:"MTASupportBot",
	realName: "qaisjp",
    channels: [CHANNEL],
});
