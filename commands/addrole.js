const Discord = require("discord.js");


module.exports = {
	name: 'addrole',
	description: 'Add a role to an user',
	usage: '[user] [role]',
	cooldown: 5,
	execute(client, message, args) {
  if (!message.member.hasPermission("MANAGE_ROLES")) return  message.reply("You dont have the permission MANAGE_ROLES");
  let role = args.join(" ").slice(22);
  let gRole = message.guild.roles.find(`name`, role);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Member not found.");
  if (!role) return message.reply("Specify a role!");
  if (!gRole) return message.reply("The role does not seem to exist.");
  if (rMember.roles.has(gRole.id)) return message.reply("This user already has that role.");
rMember.addRole(role).catch(console.error);
message.reply("Role added.")
	},
};