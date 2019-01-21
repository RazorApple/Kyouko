



const Discord = require("discord.js");


module.exports = {
	name: 'msgdelete',
	description: 'Delete a message by its ID.',
	usage: '[id]',
	cooldown: 5,
	execute(client, message, args) {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("MANAGE_MESSAGES");
message.channel.fetchMessage(args[0]).then(response => {
console.log(response.content)
response.delete().then(response => {
console.log(`Deleted message from ${message.author.username}`)
}).catch(error => {
  console.error(error);
});

}).catch(error => {
  console.error(error);
});
message.delete(500);
	},
};