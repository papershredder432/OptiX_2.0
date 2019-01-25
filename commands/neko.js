exports.run = async (OptiX, message) => {
    const Discord = require('discord.js'),
        snekfetch = require('snekfetch');

    const options = ["nsfw_neko_gif", "bj", "lewd", "cum", "les", "nsfw_avatar", "anal", "pussy", "boobs"];

    if (!message.channel.nsfw) return message.channel.send("This command can not be used here, go to a NSFW channel instead.");

    const option = options[Math.floor(Math.random() * options.length)];

    const { body } = await snekfetch.get(`https://nekos.life/api/v2/img/${option}`).catch(e => console.log(`[ERROR] ${e}`));

    const nekoEmbed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${message.author.tag}`);

    message.channel.send(nekoEmbed);
}