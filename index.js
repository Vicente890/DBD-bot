const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN_DE_TU_BOT", 
prefix: "$getServerVar[prefix]" 
})

bot.variables({
prefix: "!", 
})

bot.status({
text: "cambia este texto!", 
type: "WATCHING", 
time: 12
})

bot.status({
text: "cambiame!", 
type: "STREAMING", 
time: 12
});

bot.onMessage()
bot.command({
name: "ping", 
code: `🏓Pong!, \`$ping\`MS`
}) 
bot.command({
name: "set-prefix", 
code: `$setServerVar[prefix;$message[1]]
$description[cambie mi prefix!

El anterior era:
$getServerVar[prefix] 

Ahora es:
$message[1]]
$color[RANDOM]

$onlyIf[$charCount[$message]<=5;mi prefix no puede contener más de 5 letras] 
$onlyIf[$checkContains[$message[1];$;=;(;);-;_;+;?;/;:;';";#;@{;};<;>;[;];¿]==false;este no puede ser mi prefix!]

$onlyPerms[admin;no tienes los permisos suficientes!]
$argsCheck[1;escribe mi nuevo prefix!]`
}) 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
nonPrefixed: command.nonPrefixed,
code: command.code
})
} 
} 



const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'LINK',
    title: 'BOTNEW',
    interval: 2 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error)); 
