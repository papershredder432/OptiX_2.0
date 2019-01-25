exports.run = (OptiX, message, args) => {
    var msg = message.channel.send("Generating avatar...");
    var target = message.mentions.users.first() || message.author;

    var avatarEmbed = new Discord.RichEmbed()
        .setAuthor(target.tag)
        .setFooter(message.author.tag)
        .setImage(target.displayAvatarURL)
    message.channel.send(avatarEmbed);
}