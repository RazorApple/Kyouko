const Discord = require('discord.js');



module.exports = {
    name: 'invite',
    description: 'invite link',
    cooldown: 5,
    execute: async (client, message, args) => {
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=436093947358740480&permissions=8&scope=bot")

}}

