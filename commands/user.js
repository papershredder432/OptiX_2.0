exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js');

    let user = message.guild.member(message.mentions.members.first() || message.author); 
    let kickable = user.kickable ? "✅" : "❎";
    let bannable = user.bannable ? "✅" : "❎";
    let icon = user.user.displayAvatarURL;

    let nickname = user.nickname;
    if (nickname) {
        nickname = user.nickname;
    } else {
        nickname = 'None'
    };

    let createdAtRaw = user.user.createdAt.toDateString();
    let createdAt = createdAtRaw.split(" ");
    let joinedAtRaw = user.joinedAt.toDateString();
    let joinedAt = joinedAtRaw.split(" ");

    let playingStatus = user.presence.game;
    if (playingStatus) {
        playingStatus = user.presence.game.name;
    } else {
        playingStatus = 'None'
    }

    let userEmbed = new Discord.RichEmbed()
        .setTitle(`Information about ${nickname}`)
        .setColor(0xFF00FF)
        .setThumbnail(icon)
        .addField('Username', user.user.tag, true)
        .addField('Nickname', nickname, true)
        .addField('User ID', user.id, true)
        .addBlankField(true)
        .addField('Status', user.presence.status, true)
        .addField('Playing Status', playingStatus, true)
        .addField('Account Created On', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
        .addField('Joined This Guild On', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
        .addField('Bannable', bannable, true)
        .addField('Kickable', kickable, true)
        .addField('Roles', user.roles.map(roles => `${roles.name}`).join(', '));

    message.channel.send(userEmbed);
}