

const Discord = require("discord.js");


module.exports = {
	name: 'smoke',
	description: '420 rekt mlg weed ',
	cooldown: 5,
    execute: async (client, message, args)  => {
    message.channel.send('**SMOKIN THAT GOOD KUSH KUSH**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3500);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 4000);
        setTimeout(() => {
            msg.edit(`ahh that was good`);
        }, 4500);
    });
}};