const Discord = require("discord.js");
const latestTweets = require('latest-tweets');

module.exports = {
	name: 'twitter',
	description: 'get tweets from other people',
  usage: "[user]",
	cooldown: 1,
	execute(client, message, args) {
       let command = message.content.split(' ');
        if(command.length > 2){ //too many arguments
            message.channel.send('There is too many arguments.').then(msg => {
                msg.react('❌');
            });
        }
        else{
            latestTweets(args[0], function (err, tweets) {
                var text = tweets[0].content;
                text = text.split("pic.twitter");
                var embed = new Discord.RichEmbed()
                    .setTitle(tweets[0].username)
                    .setDescription(text[0])
                    .setColor(0x4099FF)
                    .setURL(tweets[0].url)
                    .setTimestamp(tweets[0].date)
                /*if(text.length == 2) {
                    embed.setImage("https://pic.twitter" + text[1])
                }*/ //TODO pic.twitter refers to the tweet itself and not the image
                message.channel.send({embed});
            });
        }
    }
}
