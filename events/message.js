module.exports = (OptiX, message) => {
    const Enmap = require('enmap');

    const active = new Map();
    let ops = {
        ownerID: "76063689064583168",
        active: active
    }

    const defaultSettings = {
        prefix: "^",
        modLogChannel: "logs",
        modRole: "Moderator",
        adminRole: "Administrator",
        welcomeChannel: "welcome",
        autoRole: "Member"
    }

    const guildConf = OptiX.settings.ensure(message.guild.id, defaultSettings);

    if (message.author.bot) return;
    if (message.content.indexOf(guildConf.prefix) !== 0) return;

    const args = message.content.slice(guildConf.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = OptiX.commands.get(command);
    if (!cmd) return;

    cmd.run(OptiX, message, args, active, ops);


    console.log(`[COMMAND] (Guild_${message.guild.id}) ${message.author.tag} ran command ${command}`);
}