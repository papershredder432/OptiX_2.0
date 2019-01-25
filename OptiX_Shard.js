const Discord = require('discord.js');

const Manager = new Discord.ShardingManager('./OptiX.js');
Manager.spawn(2);

console.log(`[SHARD] Sharding Manager Started with ${Manager.totalShards}`);
Manager.on('spawn', () => { console.log(`[SHARD] Shard ${Manager.id} of ${Manager.count}`)});