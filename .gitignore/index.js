const Discord = require('discord.js')

const bot = new Discord.Client()

bot.login('NTUxMTMxNjYwMjI2MjY1MDkw.D1sjEw.RMQYsNjnfA1LxrEJgt_y7W202Do')

bot.on('ready', () => {
  bot.user.setActivity('The Elder Scrolls');
  console.log(`${bot.user.username} is connected`);
})

//==============================================================================
bot.on('message', message => {
  const prefix = '>';
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'embed') {
    if(!message.content.startsWith('>')) return
    let text = args.join(" ");
    message.delete();
    const embed = new Discord.RichEmbed()
    .setDescription(text)
    .setColor('#FFD700')
    message.channel.send(embed);
  }

    if (command === 'say') {
      if(!message.content.startsWith('>')) return
      let text = args.join(" ");
      message.delete();
      message.channel.send(text);
    }
})
