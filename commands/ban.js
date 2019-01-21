

const Discord = require("discord.js");


module.exports = {
	name: 'ban',
	description: 'Ban an user.',
	usage: '[user] [reason]',
	cooldown: 5,
	execute(client, message, args) {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("BAN_MEMBERS");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.reply("User does not exist.")
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.reply("No reason stated.");

    message.guild.member(bUser).ban(bReason);
	},
};