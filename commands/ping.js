const Discord = require('discord.js');
const sys = require('systeminformation');
module.exports = {
    config: {
        id: 'ping', /* Used when calling the command (e.g. !ping ) */
        name: 'Ping',
        description: "Shows the Bot's current latency."
    },
    execute(client, config, message, content, args){
        message.channel.send(new Discord.MessageEmbed().setTitle('Pinging...')).then(m=>{
            sys.inetChecksite('https://google.com').then(net=>{
            const e = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} - Ping`)
            .addField('Latency',`${m.createdTimestamp-message.createdTimestamp}ms`)
            .addField('Discord API',`${Math.round(client.ws.ping)}ms`)
            .addField('Network',`${net.ms}ms`)
            .setFooter(`Requested by ${message.author.tag}`)
            m.edit(e);
            })
        })
        
    }
}