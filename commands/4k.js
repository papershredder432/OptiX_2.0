exports.run = (OptiX, message) => {
    const Discord = require('discord.js'),
        randomPuppy = require('random-puppy');

    if (!message.channel.nsfw) return message.channel.send("This command can not be used here, go to a NSFW channel instead.");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ];

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub).then(url => { 
        const kEmbed = new Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Requested by: ${message.author.tag}`);

        message.channel.send(kEmbed);
    });
}