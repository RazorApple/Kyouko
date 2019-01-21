


const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'dog',
	description: 'A dog picture',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://dog.ceo/api/breeds/image/random').then(res => {

return message.channel.send({files: [{attachment: res.body.message}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
	},
};