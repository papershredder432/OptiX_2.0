const Discord = require('discord.js'),
    fs = require('fs'),
    Enmap = require("enmap") ;

    // Required Things
const OptiX = new Discord.Client();
const OptiX_Info = JSON.parse(fs.readFileSync("./strg/OptiX.Info.json"));
const OptiX_Conf = OptiX_Info.OptiX;
OptiX.login(OptiX_Conf.client_token);

    // Enmap
OptiX.commands = new Enmap();
OptiX.settings = new Enmap({ name: "settings", fetchAll: false, cloneLevel: "deep" });

OptiX.settings.defer.then( () => {
    console.log(`[ENMAP] ${OptiX.settings.size} keys loaded.`)
});

const active = new Map();

    // Event Handler
fs.readdir("./events/", (err, files) => {
    if (err) return console.log(`[ERROR] ${err}`);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        OptiX.on(eventName, event.bind(null, OptiX));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

    // Command Handler
fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(`[ERROR] ${err}`);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        OptiX.commands.set(commandName, props)
    });
});