const superagent = require("snekfetch");
const Discord = require("discord.js");


module.exports = {
	name: 'lewdneko',
	description: 'get a lewd neko',
	cooldown: 5,
    execute: async (client, message, args)  => {
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
}};

// great now we have nsfw stuff
