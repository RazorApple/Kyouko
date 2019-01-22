

const Discord = require("discord.js");


module.exports = {
	name: 'kick',
	description: 'Kick an user.',
	usage: '[user] [reason]',
	cooldown: 5,
	execute(client, message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("KICK_MEMBERS");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
    let kReason = args.join(" ").slice(22);
 


    message.guild.member(kUser).kick(kReason);
    message.channel.send("Kicked!\nKicked User "+ kUser + " this user has a id of " + kUser.id + "\nKicked by  <@" + message.author.id + "> with ID " + message.author.id + "\nKicked at " + message.createdAt + "\nWith reason  " + kReason)
	},
};                                                                  