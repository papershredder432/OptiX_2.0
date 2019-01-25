exports.run = async (OptiX, message) => {
    const Discord = require('discord.js'),
        snekfetch = require('snekfetch');

    const id = [Math.floor(Math.random() * 10930)];

    if (!message.channel.nsfw) return message.channel.send("This command can not be used here, go to a NSFW channel instead.");
    
    const res = await snekfetch.get(`http://api.obutts.ru/butts/${id}`);
    const preview = res.body[0]["PREVIEW".toLowerCase()];
    const image = `http://media.obutts.ru/${preview}`;
 

    const boobEmbed = new Discord.RichEmbed()
        .setImage(image)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${message.author.tag}`);

    message.channel.send(boobEmbed);
}