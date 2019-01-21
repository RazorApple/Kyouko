


const Discord = require("discord.js");
const doge = require('dogeify-js');

module.exports = {
	name: 'doged',
	description: 'doge your messages.',
	usage: '[message]',
	cooldown: 3,
	execute(client, message, args) {
    message.delete();
let argsall = args.join(" ");
    message.channel.send(doge(argsall));
	},
};