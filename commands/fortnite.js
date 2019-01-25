exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        Client = require('fortnite'),
        fortnite = new Client('22ebd3c9-2085-4020-888c-b7dd1e275ddf');

    let username = args[0];
    let platform = args[2] || 'pc';
    let gamemode = args[1];
        
    if(gamemode != 'solos' && gamemode != 'duos' && gamemode != 'squads' && gamemode != 'lifetime') return message.channel.send('Please specify a valid gamemode: `solos`, `duos`, `squads`, `lifetime`.');
        
    if (!username) return message.channel.send("Please specify a valid username.");
        
    let data = fortnite.user(username, platform).then(data => {
          
        let stats = data.stats;
          
        if (gamemode === 'solos') {
          
            let solos = stats.solo;
            
            let score = solos.score;
            let kd = solos.kd;
            let matches = solos.matches;
            let kills = solos.kills;
            let wins = solos.wins
            let top3 = solos.top_3;
            
            let statsEmbed = new Discord.RichEmbed()
                .setTitle(`Fortnite Tracker Solo Stats - ${platform}`)
                .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
                .setAuthor(data.username)
                .setColor('RANDOM')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matches, true)
                .addField('Top 3s', top3, true)
                .addField('Kill/Death Ratio', kd, true);
          
            message.channel.send(statsEmbed);
        } else if (gamemode === 'duos') {
          
            let duos = stats.duo;
            
            let score = duos.score;
            let kd = duos.kd;
            let matches = duos.matches;
            let kills = duos.kills;
            let wins = duos.wins
            let top3 = duos.top_3;
            
            let statsEmbed = new Discord.RichEmbed()
                .setTitle(`Fortnite Tracker Duo Stats - ${platform}`)
                .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
                .setAuthor(data.username)
                .setColor('RANDOM')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matches, true)
                .addField('Top 3s', top3, true)
                .addField('Kill/Death Ratio', kd, true);

            message.channel.send(statsEmbed);
        } else if (gamemode === 'squads') {
          
            let squads = stats.squad;
            
            let score = squads.score;
            let kd = squads.kd;
            let matches = squads.matches;
            let kills = squads.kills;
            let wins = squads.wins
            let top3 = squads.top_3;
            
            let statsEmbed = new Discord.RichEmbed()
                .setTitle(`Fortnite Tracker Squads Stats - ${platform}`)
                .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
                .setAuthor(data.username)
                .setColor('RANDOM')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', matches, true)
                .addField('Top 3s', top3, true)
                .addField('Kill/Death Ratio', kd, true);

            message.channel.send(statsEmbed);
        } else {
          
            let stats = data.stats;
            let lifetime = stats.lifetime;
          
            let score = lifetime[6]['Score'];
            let mplayed = lifetime[7]['Matches Played'];
            let wins = lifetime[8]['Wins'];
            let winper = lifetime[9]['Win%'];
            let kills = lifetime[10]['Kills'];
            let kdr = lifetime[11]['K/d'];
          
            let statsEmbed = new Discord.RichEmbed()
                .setTitle(`Fortnite Tracker Lifetime Stats - ${platform}`)
                .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
                .setAuthor(data.username)
                .setColor('RANDOM')
                .addField('Wins', wins, true)
                .addField('Kills', kills, true)
                .addField('Score', score, true)
                .addField('Matches Played', mplayed, true)
                .addField('Win Percentage', winper, true)
                .addField('Kill/Death Ratio', kdr, true);
          
            message.channel.send(statsEmbed);
        }
    });
}