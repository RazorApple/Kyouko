

const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'duck',
	description: 'A duck picture',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://random-d.uk/api/v1/quack').then(res => {

return message.channel.send({files: [{attachment: res.body.url}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
} 
}