require('./utils.js') // util fns
require('./ircInit.js') // init irc system
require('./commandSystem.js') // adds help/command/listener helper functions
require('./commands.js') // adds real commands/listeners that work with the system
require('./listeners.js') // adds irc listeners that work with the commandSystem
require('./web.js') // Add web server so AF knows it's alive