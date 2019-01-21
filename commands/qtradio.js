const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");



module.exports = {
	name: 'qtradio',
	description: 'Play QTRadio in your voicechannel!',
	cooldown: 5,
	execute(client, message, args) {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription('**Connected!** Playing qtradio.')
            .setColor('#654321')
            connection.playArbitraryInput(`https://qtradio.moe/stream`);
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
	},
};