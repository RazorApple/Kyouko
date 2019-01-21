







const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'fox',
	description: 'A fox picture',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://randomfox.ca/floof/').then(res => {

return message.channel.send({files: [{attachment: res.body.image}]});
});
} catch(err) {
return message.channel.send(err.stack);
} 
	},
};