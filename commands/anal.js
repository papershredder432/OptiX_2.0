exports.run = async (OptiX, message) => {
    const Discord = require('discord.js'),
        snekfetch = require('snekfetch');

    if (!message.channel.nsfw) return message.channel.send("This command can not be used here, go to a NSFW channel instead.");

    const { body } = await get("https://nekobot.xyz/api/image?type=anal").catch(e => console.log(`[ERROR] ${e}`));

    const analEmbed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${message.author.tag}`);

    message.channel.send(analEmbed);
}