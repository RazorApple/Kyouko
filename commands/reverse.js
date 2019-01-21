 
const Discord = require("discord.js");


module.exports = {
	name: 'reverse',
	description: 'reverse text message',
  usage: "[text]",
	cooldown: 2,
	execute(client, message, args) {
 function reverseString(str) {
return str.split("").reverse().join("");
}
let argsJ = args.join(" ");
message.channel.send(reverseString(argsJ))
message.react("👌")
	},
};