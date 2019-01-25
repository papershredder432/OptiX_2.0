module.exports = (OptiX) => {

    var activities = [
        `^help | ${OptiX.guilds.size} Guilds | ${OptiX.users.size} Members`,
        /*`Shard ${OptiX.shard.id} of ${OptiX.shard.count}`*/];

    function randomActivites() {
        let activity = activities[Math.floor(Math.random() * activities.length)];

        OptiX.user.setActivity(activity);
    }

    OptiX.user.setActivity(`Test`, { type: "PLAYING" });
    setInterval(randomActivites, 7000);
    console.log (`[OPTIX] Ready!`);
}