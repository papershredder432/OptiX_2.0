exports.run = (OptiX, message) => {
    const Discord = require('discord.js'),
        randomPuppy = require('random-puppy');

    if (!message.channel.nsfw) return message.channel.send("This command can not be used here, go to a NSFW channel instead.");

    randomPuppy('ahegao').then(url => { 
        const kEmbed = new Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${message.author.tag}`);

        message.channel.send(kEmbed);
    });
}