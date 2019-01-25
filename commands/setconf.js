exports.run = (OptiX, message, args) => {
    const Enmap = require('enmap');

    const adminRole = message.guild.roles.find("name", "Administrator");
    if(!adminRole) return message.channel.send("`Administrator` role not found.");

    if(!message.member.roles.has(adminRole.id)) return message.channel.send("You do not have the proper permissions to use this command.");

    const [prop, ...value] = args;
    
    if(!OptiX.settings.has(message.guild.id, prop)) return message.channel.send("This key is not in the configuration.");

    OptiX.settings.set(message.guild.id, value.join(" "), prop);

    message.channel.send(`Guild configuration item \`${prop}\` has been changed to: \`${value.join(" ")}\``);
}