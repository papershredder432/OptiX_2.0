exports.run = (OptiX, message) => {
    const Discord = require('discord.js');

    let helpEmbed = new Discord.RichEmbed()
        .setTitle("Commands")
        .addField("Client", "`help`, `ping`, `showconf`, `stats`")
        .addField("Information", "`avatar`, `ip`, `user`")
        .addField("Fun", "`clapify`")
        .addField("Sounds", "`leeroy`, `mlg`")
        .addField("NSFW", "`4k`, `ahegao`, `amateur`, `anal`, `artsy`, `asian`, `ass`, `boobs`, `ecchi`, `futa`, `hentai`, `neko`")
        .addField("Game Stats", "`csgo`, `fortnite`, `overwatch`, `unturned`")
        .addField("Mod", "`purge`")
        .addField("Admin", "`setconf`")
        .addField("Op", "`emit`")
        .setTimestamp();

    message.channel.send(helpEmbed);
}