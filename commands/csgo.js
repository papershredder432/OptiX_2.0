exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        request = require('request'),
        cheerio = require('cheerio');

    let steamID = args[0];

    if(!steamID) return message.channel.send('*Please provide a valid Steam ID64.*');
        
    var UR_L = `http://csgo.tracker.network/profile/${steamID}`;
        
    request(UR_L, function(err, resp, body) {
          
        $ = cheerio.load(body);
          
        var KD = getStatData(0, message, $);
        var WIN = getStatData(1, message, $);
        var HS = getStatData(4, message, $);
        var MONEY = getStatData(5, message, $);
        var SCORE = getStatData(6, message, $);
        var KILLS = getStatData(7, message, $);
        var DEATHS = getStatData(8, message, $);
        var MVP = getStatData(9, message, $);
        var BS = getStatData(13, message, $);
        var BD = getStatData(14, message, $);
        var HR = getStatData(15, message, $);
        var DOM = getStatData(16, message, $);
        var GAMES = getStatData(2, message, $);
        var WINS = getStatData(3, message, $);
        var PTIME = getStatData(10, message, $);
        var ROUNDS = getStatData(11, message, $);
        var RWINS = getStatData(12, message, $);
      
        let csEmbed = new Discord.RichEmbed()
            .setTitle('CSGO Stats')
            .setURL(UR_L)
            .addField('Win %', WIN, true)
            .addField('MVPs', MVP, true)
            .addField('Score', SCORE, true)
            .addField('Kills', KILLS, true)
            .addField('Deaths', DEATHS, true)
            .addField('K/D', KD, true)
            .addField('Headshots', HS, true)
            .addField('Dominations', DOM, true)
            .addField('Bomb Stats', `**Planted:** ${BS} \n**Defused:** ${BD}`, true)
            .addField('Hostages Rescued', HR, true)
            .addField('Money Earned', MONEY, true)
            .addField('Games', `**Total:** ${GAMES} \n**Wins:** ${WINS} \n**Losses:** ${GAMES - WINS}`, true)
            .addField('Rounds', `**Total:** ${ROUNDS} \n**Wins:** ${RWINS}**`, true)
            .addField('Playtime', PTIME, true);
          
        message.channel.send(csEmbed);
    });
        
}
      
    function getStatData(location, message , $){
      
        var selector = $('.stats-stat .value').eq(location).text();
      
        var stat_array = $.parseHTML(selector);
      
        var stat = 0;
      
        if(stat_array == null || stat_array.lengh == 0){
            message.channel.send("Invalid User");
            return " ";
        } else {
            stat = stat_array[0].data;
        }
    return stat;
}