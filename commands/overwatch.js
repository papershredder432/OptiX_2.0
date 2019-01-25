exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        request = require('request');

    let battletag = args[0].replace('#', '-');
    let region = args[1];
    let gamemode = args[2];
    let platform = args[3] || 'pc';

    if (!battletag) return message.channel.send('Please specify a valid BattleTag.');
    if (!region) return message.channel.send('Please specify a valid region: `us`, `eu`, `asia`');
    if (gamemode != 'quickplay' && gamemode != 'competitive') return message.channel.send('Please specify a valid gamemode: `quickplay`, `competitive`');

    const api = `https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`;

    function callback (e, res, data) {
        if (!e) {
            if (res && res.statusCode === 200) {
                var data = JSON.parse(data);
            
                let quickStats = data.quickPlayStats;
                let compStats = data.competitiveStats; 
            
                    if (gamemode === 'quickplay') {
              
                        let quickEmbed = new Discord.RichEmbed()
                            .setThumbnail(data.icon)
                            .addField('Userinfo --- Quickplay', `Name: ${data.name} \nLevel: ${data.level} \nPrestige: ${data.prestige} \nRating: ${data.rating} \nRating Name: ${data.ratingName}`)
                            .addField('Stats', `Average Eliminations: ${quickStats.eliminationsAvg} \nAverage Damage Dealt: ${quickStats.damageDoneAvg} \nAverage Deaths: ${quickStats.deathsAvg} \nHealing Done: ${quickStats.healingDoneAvg}`)
                            .addField('Games', `Games Played: ${quickStats.games.played} \nGames Won: ${quickStats.games.won}`)
                            .addField('Awards', `Cards: ${quickStats.awards.cards} \nMedals: ${quickStats.awards.medals} \nBronze / Silver / Gold \n${quickStats.awards.medalsBronze} / ${quickStats.awards.medalsSilver} / ${quickStats.awards.medalsGold}`)
            
                        message.channel.send(quickEmbed);
              
              
                    } else if (gamemode === 'competitive') {
              
                        let compEmbed = new Discord.RichEmbed()
                            .setThumbnail(data.icon)
                            .addField('Userinfo --- Competitive', `Name: ${data.name} \nLevel: ${data.level} \nPrestige: ${data.prestige} \nRating: ${data.rating} \nRating Name: ${data.ratingName}`)
                            .addField('Stats', `Average Eliminations: ${compStats.eliminationsAvg} \nAverage Damage Dealt: ${compStats.damageDoneAvg} \nAverage Deaths: ${compStats.deathsAvg} \nHealing Done: ${compStats.healingDoneAvg}`)
                            .addField('Games', `Games Played: ${compStats.games.played} \nGames Won: ${compStats.games.won}`)
                            .addField('Awards', `Cards: ${compStats.awards.cards} \nMedals: ${compStats.awards.medals} \nBronze / Silver / Gold \n${compStats.awards.medalsBronze} / ${compStats.awards.medalsSilver} / ${compStats.awards.medalsGold}`)
            
                        message.channel.send(compEmbed)
                    }
            
                console.log(data);
            }
        } else {
            console.log ("Response error: " + res.toString());
        }
    }
        request(api, callback);
}