


const Discord = require("discord.js");


module.exports = {
	name: 'purge',
	description: 'Purge a amount of messages.',
	usage: '[number]',
	cooldown: 3,
  execute: async (client, message, args)  => {
	if (!member.hasPermission('MANAGE_MESSAGES')) { message.channel.send('You do not have the permission MANAGE_MESSAGES'); }
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	},
};