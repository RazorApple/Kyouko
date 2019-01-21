
  
  
const Discord = require("discord.js");


module.exports = {
	name: 'setnick',
	description: 'Change a nickname of a user.',
	usage: '[user] [nickname]',
	cooldown: 5,
	execute: async (client, message, args) => {

   // Fetches User
   const person = message.mentions.members.first();
   if (!person) return message.reply("Please mention someone to change nickname.");
   let user = args[0]
   let kappa = args.slice(1).join(" ");
   // Checks for Permissions 
   if (!person.manageable) return message.reply("I have no control over that person.");
 
   // Sets Their Nickname
   try {
      await person.setNickname(kappa);
	  const embed = {
  "color": 9299529,
  "footer": {
    "text": "."
  },
  "fields": [
    {
      "name": "Setting Suceeded!",
      "value": `User's ${user} name has been set to ${kappa}`
    }
  ]
};
message.react('👌');
message.channel.send({embed});
   } catch(e) {
      message.reply(`Sorry, I got an error saying: ${e.message}`);
   }
args.slice(1).join(" ");
	},
};

