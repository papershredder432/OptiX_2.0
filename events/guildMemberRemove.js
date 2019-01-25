module.exports = (OptiX, member, message) => {
    const Discord = require('discord.js');

    console.log(`[REMOVED_USER] ${member.user.tag} left guild ${member.guild}`);

    const leaveEmbed = new Discord.RichEmbed()
        .setTitle('Member Left')
        .setThumbnail(member.user.avatarURL)
        .setTimestamp()
        .addField('User', `${member.user.tag} (${member.id})`)
        .addField('New Member Count', member.guild.memberCount - 1)

    member.guild.channels
        .find("name", OptiX.settings.get(member.guild.id, "welcomeChannel"))
        .send(leaveEmbed)
        .catch(e => console.log(`[ERROR] ${e}`));
}