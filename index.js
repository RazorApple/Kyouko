const fs = require('fs');
const Discord = require('discord.js');

class Bot extends Discord.Client {
  constructor(options) {
    super(options);
  }
}
const client = new Bot();
const express = require('express')
const app = express()
const port = 3000
client.music = require("discord.js-musicbot-addon");
app.get('/', (req, res) => res.send('Hello World! 2'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

client.commands = new Discord.Collection();
// Now we start the music module.
client.music.start(client, {
  // Set the api key used for YouTube.
  // This is required to run the bot.
  youtubeKey: process.env.YOUTUBEKEY,
  botPrefix: process.env.PREFIX,
  help: {
    name: "mhelp",
    exclude: false,
    ownerid: ""
  }
});

var http = require("http");
setInterval(function() {
    http.get("http://kyoukooz.glitch.me");
}, 300000); // every 5 minutes (300000)

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();
      
function changing_status() {
    let status = ['v13', 'Nyaaa Branch', 'k.help','xd']
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(random)
}

client.on('ready', () => {
    setInterval(changing_status, 2000);
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

	const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${process.env.PREFIX}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(client,message,args)
	}
	catch (error) {
		message.channel.send(error.message);
	}
	if (message.channel.type == "dm") return;
});

client.login(process.env.TOKEN);
