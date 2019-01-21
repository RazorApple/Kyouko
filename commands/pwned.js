const superagent = require("superagent");

const Discord = require("discord.js");

module.exports = {
	name: 'pwned',
	description: 'Has my EMAIL got leaked?',
  usage: "[email]",
	cooldown: 5,
  execute: async (client, message, args)  => {
  await message.delete(300);
    let {
        body
    } = await superagent
        .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[0]}`)
        .catch(err => {
            message.channel.send(`Phew.. no results found for \`\`${args[0]}\`\``)
        });

    let out = `Oh NO! breaches found for: ${args[0]}`;
    let po = 0;
    const format = body.forEach(i => {
        po++;
        out += `\n${po}.   ${i.Name}   breached on:   ${i.BreachDate}`
    })
    message.author.send(out);
}};