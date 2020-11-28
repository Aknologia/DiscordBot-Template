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
function parsePath(o,is){return is.length ? parsePath(o[is[0]],is.slice(1)) : o}
function configPH(str){
    try{
    str.replace(/\{\{[a-zA-Z1-9_.]+\}\}/g,(ph)=>{
        ph=ph.replace('{{','').replace('}}',''); try{return parsePath(config,ph.split('.'))}catch(err){console.warn(`The config path '${ph}' doesn't exist.`)}
    })
    console.log(str)
    } catch(err){console.log}
}
console.log(configPH(config.Initialization.Status))
/*
for(const entry in config){
    if(entry && entry instanceof Object){
        while(true){
            if(entry)
        }
    } else {}
}
*/
/* Load Commands */
/*
client.commands = new Discord.Collection();
const files = fs.readdirSync(config.Paths.Commands).filter(file => file.endsWith('.js'));
for(const file of files){const c = require(config.Paths.Commands+file); client.commands.set(c.config.id, c)}
*/
/* Hook Events */
/*
client.on('ready', ()=>{

})
*/