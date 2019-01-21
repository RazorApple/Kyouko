





const Discord = require("discord.js");

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text; 
}

module.exports = {
    name: "eval",
    description: "Eval Text.",
    usage: "[js]",
	cooldown: 5,
	execute(client, message, args) {
	 message.react('š‘');
if (message.author.id != "384342022955466753") return message.reply("no.");
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}}}