/* Load Libraries */
const Discord = require('discord.js');
require('dotenv').config();
const yaml = require('config-yaml');
const fs = require('fs');
const { exception } = require('console');

/* Create Discord Client */
const client = new Discord.Client();

/* Import Files */
const config = yaml(`${__dirname}/config.yml`);

/* Set Config's Placeholders */
// Function to Object paths from Strings
function parsePath(o,is){return is.length ? parsePath(o[is[0]],is.slice(1)) : o}
// Check and replace every placeholder {{}} (e.g. {{Global.Prefix}})
function configPH(str){try{return str.replace(/\{\{[a-zA-Z1-9_.]+\}\}/g,(ph)=>{ph=ph.replace('{{','').replace('}}','');try{return parsePath(config,ph.split('.'))}catch(err){console.warn(`The config path '${ph}' doesn't exist.`);return ph}})} catch(err){console.log}}
// Loop through the config to find placeholders
function loopPH(obj){for(const key in obj){if(obj[key] && obj[key] instanceof Object){loopPH(obj[key])}else if (obj[key] && typeof obj[key] === 'string'){obj[key]=configPH(obj[key])}}}; loopPH(config)

/* Load Commands */
// Create command collection
client.commands = new Discord.Collection();
// Read every JavaScript file in the specified command folder (default='./commands/')
const files = fs.readdirSync(config.Paths.Commands).filter(file => file.endsWith('.js'));
// Loop through them and add them to the collection
for(const file of files){const c = require(config.Paths.Commands+file); client.commands.set(c.config.id, c)}

/* Hook Events */
client.on('ready', ()=>{
    // Set Activity from the config (e.g. Playing d!help )
    client.user.setActivity(config.Initialization.Activity);
    // Set Status from the config (e.g. Online)
    client.user.setStatus(config.Initialization.Status);
    console.log('Bot Online.')
});
client.on('message', (msg)=>{
    // Check for Prefix/Mention
    if((!msg.content.startsWith(config.Global.Prefix) && !msg.mentions.has(client.user)) || msg.author.bot) return; 
    // Remove Prefix/Mention
    content = msg.content; if(msg.content.startsWith(config.Global.Prefix)) content=content.replace(config.Global.Prefix,''); else if(msg.mentions.has(client.user)) content=content.replace(`<@!${client.user.id}>`,'');
    // Call the command if it exists
    try{
        args=content.split(' ').filter((el)=>{return el});
        const c = client.commands.get(args[0]); args.shift();
        c.execute(client, config, msg, content, args);
    } catch(err){/* Executed if the command doesn't exist */}
    
})

/* Login using the Token in the '.env' file */
client.login(process.env.TOKEN);
