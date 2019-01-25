exports.run = async (OptiX, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.guild.roles.find("name", "Moderator")) return message.channel.send("You do not have the proper permissions to use this command.");

    if (isNaN(args[0])) return message.channel.send("Please specify a valid amount of messages to purge.");
    if (args[0] > 100 || args[0] < 0) return message.channel.send("Please specify a valid amount of messages to purge.");

    message.channel.bulkDelete(args[0]).catch(e => console.log(`[ERROR] ${e}`));
}