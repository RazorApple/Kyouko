
const Discord = require('discord.js');
const reddit = require('redwrap');


module.exports = {
    name: 'reddit',
    description: 'Fetch reddit.',
    usage: "[subredditname]",
    cooldown: 5,
    execute(client, message, args) {

        let command = message.content.split(' ');
        if(command.length > 2){ //too many arguments
            message.channel.send('There is too many arguments.');
        }
        else{
            let max = 100;
            reddit.r(args[0]).sort('top').from('all').limit(max, function(err, data, res){
                if(err) return console.error(err);
                let nb = 0;
                do{
                    nb = Math.floor(Math.random() * max);
                }while(!data.data.children[nb].data.url.endsWith('.jpg' || '.png' || '.gif'));
                let embed = new Discord.RichEmbed()
                    .setTitle(data.data.children[nb].data.title)
                    .setColor(0xFF6AD5)
                    .setURL('http://reddit.com' + data.data.children[nb].data.permalink)
                    .setImage(data.data.children[nb].data.url)
                message.channel.send({embed});
            });
        }
}}

