exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        Enmap = require('enmap');

    const defaultSettings = {
        prefix: "^",
        modLogChannel: "logs",
        modRole: "Moderator",
        adminRole: "Administrator",
        welcomeChannel: "welcome",
        autoRole: "Member"
    }
    const guildConf = OptiX.settings.ensure(message.guild.id, defaultSettings);

    const confEmbed = new Discord.RichEmbed()
        .setTitle("Current Configurations")
        .setThumbnail(message.guild.iconURL, true)
        .addField("Prefix", guildConf.prefix, true)
        .addField("Mod Log Channel", guildConf.modLogChannel, true)
        .addField("Mod Role", guildConf.modRole, true)
        .addField("Admin Role", guildConf.adminRole, true)
        .addField("Welcome Channel", guildConf.welcomeChannel, true)
        .addField("Auto Role Role", guildConf.autoRole, true)
        .setFooter("Setting not changed? It shows the default option.")
        .setTimestamp();

    message.channel.send(confEmbed);
}