


const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'cat',
	description: 'A cat picture',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://aws.random.cat/meow').then(res => {

return message.channel.send({files: [{attachment: res.body.file}]});
});
} catch(err) {
return message.channel.send(err.stack);
} 
	},
};