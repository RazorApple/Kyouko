



const Discord = require("discord.js");


module.exports = {
	name: 'say',
	description: 'Make the bot say something.',
	usage: '[text]',
	cooldown: 1,
	execute(client, message, args) {
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
	}
}