exports.run = (OptiX, message, ops) => {

    let fetched = ops.active.get(message.guild.id);
    if (!message.member.hasPermission("ADMINISTRATOR") && message.member.id !== "76063689064583168") return message.channel.send("Sorry, you do not have permission to use this command.");
    if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild.');

    if (message.author.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you aren\'t connected to the same voicechannel.');

    if (fetched.dispatcher.paused) return message.channel.send('The music is already paused.');

    fetched.dispatcher.pause();
    message.channel.send(`Successfully pasued ${fetched.queue[0].songTitle}`);
}