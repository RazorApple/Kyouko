const Discord = require("discord.js");
const {
    get
} = require("snekfetch");
module.exports = {
    name: 'birb',
    description: 'A birb picture',
    cooldown: 5,
    execute(client, message, args) {
        message.react('👌');
        try {
            get('http://shibe.online/api/birds').then(res => {
                const regex = /[a-z://.12345678910]+/g;
                const str = `${res.body}`;
                let m;

                while ((m = regex.exec(str)) !== null) {

                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    m.forEach((match, groupIndex) => {
                        message.channel.send({
                            files: [{
                                attachment: match
                            }]
                        });
                    });
                }
                return;
            });
        } catch (err) {
            return message.channel.send(err.stack);
        }
    }
};