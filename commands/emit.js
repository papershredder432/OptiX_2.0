exports.run = (OptiX, message, args) => {

    let op = "76063689064583168";
    if (message.author.id !== op) return message.channel.send("You do not have the proper permissions to use this command.");

    if (args) {
        OptiX.emit(args, message.member);
    } else if(!args) {
        const filter = message => message.author.id;
        message.reply("Please specify an event to emit. This will expire in **10** seconds...").then(r => r.delete(10000));

        message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
            if (collected.first().content === "cancel") return message.channel.send("Command canceled.");
            OptiX.emit(collected.first().content, message.member);
        }).catch(err => message.reply("Command timed out."));
    }
}