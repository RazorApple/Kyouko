const Discord = require('discord.js');



module.exports = {
    name: 'invite',
    description: 'invite link',
    cooldown: 5,
    execute: async (message, args) => {
message.author.send("https://bit.ly/2DcCwmq")
 .then(msg => {
    msg.delete(4000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
}}

