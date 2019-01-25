exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        request = require('request');

    let steamID = args[0];
  
    const api = `http://unturnedstats.com/api.php?player=${steamID}`;
        
    if(!steamID) return message.channel.send('Please provide a valid Steam ID64.');
        
        function callback(e, res, data) {
            if (!e) {
                if (res && res.statusCode === 200) {
                    var data = JSON.parse(data);
              
                    let statsEmbed = new Discord.RichEmbed()
                        .setTitle(data.steamid)
                        .setDescription(`***${data.name}*** with ***${data.hours_played}*** hours`)
                        .setThumbnail(data.avatar)
                        .setURL(`https://unturnedstats.com/stats/${data.steamid}`)  
                        .addField('Zombie Kills', `**Normal & Special:** ${data.zkills} \n**Brute (Mega) & Bosses:** ${data.mzkills}`, true)
                        .addField('Deaths', data.pdeaths, true)
                        .addField('Kill / Death Ratio', Math.round(10000*data.kd)/10000, true)
                        .addField('Wildlife Kills', `**Animal:** ${data.animal_kills} \n**Fish:** ${data.fish}`, true)
                        .addField('Shots', `**Fired:** ${data.shots} \n**Hits:** ${data.shots_hit} \n**Headshots:** ${data.headshots}`, true)
                        .addField('Accuracy', `${Math.round(data.accuracy)}%`, true)
                        .addField('Found:', `**Items:** ${data.found_items} \n**Resources:** ${data.found_resources} \n**EXP:** ${data.found_exp}`, true)
                        .addField('Made', `**Crafted:** ${data.crafted} \n**Harvested:** ${data.harvested}`, true)
                        .addField('Travels', `**On Foot:** ${data.travel_foot} meters \n**In Vehicle:** ${data.travel_car} meters`, true)
                        .addField('Buildables', data.buildables, true)
                        .setFooter(`Last Updated: ${data.last_updated}`);
             
                    message.channel.send(statsEmbed)
                }
            } else {
                console.error("Response error: " + res.toString());
            }
        }  
    request(api, callback);
}