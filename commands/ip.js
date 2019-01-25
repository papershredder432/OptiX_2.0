exports.run = (OptiX, message, args) => {
    const Discord = require('discord.js'),
        iplocation = require('iplocation');

    let IP = args[0];
  
    if (!IP) return message.channel.send('*Please specify a valid IP address.*');
       
    iplocation(IP).then(res => {
       
        let ipEmbed = new Discord.RichEmbed()
            .setTitle('IP Address Search')
            .addField('Country', res.country_name, true)
            .addField('Country Code', res.country, true)
            .addField('Region', res.region, true)
            .addField('Region Code', res.region_code, true)
            .addField('City', res.city, true)
            .addField('Postal Code', res.postal, true)
            .addField('Latitude', res.latitude, true)
            .addField('Longitude', res.longitude, true)
            .addField('Time Zone', res.timezone, true)
            .addField('Country Calling Code', res.country_calling_code, true)
            .addField('Currency', res.currency, true)
            .addField('Languages', res.languages.replace(',', '\n').replace(',', '\n').replace(',', '\n'), true)
            .addField('IP', res.ip, true)
            .addField('Internet Service Provider', res.org, true)
          
        message.channel.send(ipEmbed);
    }).catch(err => { console.log(`[ERROR] ${err}`) });
}