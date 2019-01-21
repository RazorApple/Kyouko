
const Discord = require("discord.js");


module.exports = {
	name: 'stop',
	description: 'Stop the bot.',
	cooldown: 5,
	execute(client, message, args) {
if (message.author.id != "384342022955466753") return message.reply("Acesss Denied.");
message.react('👌');
process.exit(1)
}
}

