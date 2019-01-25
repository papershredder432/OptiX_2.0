exports.run = (OptiX, message, args) => {
    const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
    message.delete();
  
    if (args.length < 1) return message.channel.send("Please specify valid arguments to clapify.");
    message.channel.send(args.map(randomizeCase).join(':clap:'));
}