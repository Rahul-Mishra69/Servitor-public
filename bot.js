const discord = require('discord.js');
const config = require('./config/config.json');
const client = new discord.Client();
client.login(config.DISCORD_BOT.TOKEN);

const channelID = '757495037310533665' //welcome channel

client.on("guildMemberAdd", member =>{
    const message = 'Hey! <@${member.id}>, Welcome to Intellects AMC Official discord server, be sure to read the rules.'
    const channel = member.guild.channels.chache.get(channelID);
    channel.send(message);
});

client.on("guildMemberRemove", member =>{
    const leave = '@${member.id} has left!'
    const welcomechannel = member.guild.channels.cache.get(channelID);
    channel.send(leave);
});

client.on("message", message =>{
    if(message.content === '.ping')
    {
        message.channel.send('Why have you summoned me master?');
    }
});

client.on('message', message => {
    if (message.content === '.avatar') {
      message.reply(message.author.displayAvatarURL());
    }
  });

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.kick')) {
    if (message.member.roles.cache.has('757497699179298877')){
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  }});

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.ban')) {
    if (message.member.roles.cache.has('757497699179298877')){
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
  }});

  client.on('message', message =>{
    if (message.content === '.tutorial')
    {
        message.channel.send('https://www.youtube.com/watch?v=rnYGrq95ezA');
    }
  });

  client.on('message', message =>{
    if (message.content === '.tutorialmobile')
    {
        message.channel.send('https://www.youtube.com/watch?v=HKvUpY8IIr8');
    }
  });

  client.on('message', message =>{
    if (message.content === '.invite')
    {
        message.channel.send('https://discord.gg/r7nEU6U');
    }
  });

  client.on('message', message =>{
    if (message.content === '.sourcecode')
    {
        message.channel.send('https://github.com/Rahul-Mishra69/Servitor-public');
    }
  });