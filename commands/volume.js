const { RichEmbed } = require("discord.js");



const Discord = require("discord.js");
module.exports = {
	name: 'volume',
	description: 'change the volume',
  usage: "[volume]",
	cooldown: 5,
	execute(client, message, args) {
     let vol = args.join(" ");
const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
if (voiceConnection === null) return message.channel.send('No music is being played!');
const dispatcher = voiceConnection.player.dispatcher;
const currentvol = dispatcher.volume * 100;
if(!vol) {
    let embed = new RichEmbed()
    .setDescription(`**Current Volume:** ${currentvol}%`)
    .setColor('#A65EA5')
    return message.channel.send(embed);
}
		if (vol > 200 || vol < 0) return message.channel.send('Volume out of range!').then((response) => {
			response.delete(5000);
		});

        let embed = new RichEmbed()
        .setDescription("Volume set to " + vol)
        .setColor('#A65EA5')
		dispatcher.setVolume((vol/100));
		message.channel.send(embed);
	},
}