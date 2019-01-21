const Discord = require("discord.js");
const { get } = require("snekfetch"); 
module.exports = {
	name: 'yesno',
	description: 'Yes or No?',
	cooldown: 5,
	execute(client, message, args) {
message.react('👌');
try {
get('https://yesno.wtf/api/').then(res => {

return message.channel.send({files: [{attachment: res.body.image}]});
});
} catch(err) {
return message.channel.send(err.stack);
} 
	},
};