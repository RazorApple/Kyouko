const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'chuck',
	description: 'chuck norris joke',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://api.chucknorris.io/jokes/random').then(res => {
message.channel.send(`${res.body.value}`);
return;
});
} catch(err) {
return message.channel.send(err.stack);
}
	},
};