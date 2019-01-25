module.exports = (OptiX, message, guild) => {
    const Enmap = require('enmap');
    // Enmap Configurations
    OptiX.settings = new Enmap({
        name: "settings",
        fetchAll: false,
        autoFetch: true,
        cloneLevel: "deep"
    });

    const defaultSettings = {
        prefix: "^",
        modLogChannel: "logs",
        modRole: "Moderator",
        adminRole: "Administrator",
        operatorRole: "Operator",
        welcomeChannel: "welcome",
        autoRole: "Member"
    }

    OptiX.settings.create(guild.id);
}