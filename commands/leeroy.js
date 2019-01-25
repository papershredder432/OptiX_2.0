exports.run = (OptiX, message) => {
    const Discord = require('discord.js');
    const os = require('opusscript'),
        ffmpeg = require('ffmpeg-binaries');

    var vChannel = message.member.voiceChannel;
    if (!vChannel) return message.channel.send("Please be in a voice channel to use this command.");
    vChannel.join()
        .then(connection => {
            const dispatcher = connection.playFile('./sounds/LeeroyJenkins.mp3', {
                volume: 1
            });
            dispatcher.on('end', end => { vChannel.leave(); });
        }).catch(err => { console.log(`[ERROR] ${err}`) });
}