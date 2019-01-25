exports.run = (OptiX, message) => {
    const Discord = require('discord.js');

    const then = Date.now();
    const time = Date.now() - then;
  
    let pingembed = new Discord.RichEmbed()
      .setColor(0x000080)
      .addField(`Message Ping`, `${time}ms`)
      .addField(`Discord Heartbeat Ping`, `${Math.round(OptiX.ping)}ms`)
      .setTimestamp(new Date());

    return message.channel.send(pingembed);
}