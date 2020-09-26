const discord = require('discord.js');
const config = require('./config/config.json');
const client = new discord.Client();
client.login(config.DISCORD_BOT.TOKEN);
