
const Discord = require("discord.js");


module.exports = {
	name: 'leave',
	description: 'leave a voice channel',
	cooldown: 5,
    execute: async (client, message, args)  => {
            if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        let embed = new Discord.RichEmbed()
        .setDescription('Left Voice Channel.')
        .setColor('#654321')
      message.channel.send(embed);
    };
}};