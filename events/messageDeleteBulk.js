module.exports = (OptiX, message, messages) => {
    const Discord = require('discord.js');

    const messageDeleteBulkEmbed = new Discord.RichEmbed()
        .setTitle("Bulk Delete")
        .setTimestamp()
        .setDescription(`Bulk deleted \`${message.size}\` messages.`);

    message.guild.channels
        .find("name", OptiX.settings.get(message.guild.id, "logs"))
        .send(messageDeleteBulkEmbed)
        .catch(e => console.log(`[ERROR] ${e}`));
}