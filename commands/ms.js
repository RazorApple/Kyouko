
const Discord = require("discord.js");


module.exports = {
	name: 'ms',
	description: 'Latency info.',
	cooldown: 5,
    execute: async (client, message, args)  => {
const m = await message.channel.send("Wating for input.");
message.react('👌');
		m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}};