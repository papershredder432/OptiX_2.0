module.exports = (OptiX, member, message) => {
    const Discord = require('discord.js');

    console.log(`[NEW_USER] ${member.user.tag} joined guild ${member.guild}`);

    const joinEmbed = new Discord.RichEmbed()
        .setTitle('Member Joined')
        .setThumbnail(member.user.avatarURL)
        .setTimestamp()
        .addField('User', `${member.user.tag} (${member.id})`)
        .addField('New Member Count', member.guild.memberCount + 1)
        .addField('Account Creation Date', `${member.user.createdAt}`)

    member.guild.channels
        .find("name", OptiX.settings.get(member.guild.id, "welcomeChannel"))
        .send(joinEmbed)
        .catch(e => console.log(`[ERROR] ${e}`));

}