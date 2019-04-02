const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Nasser");


client.on("ready", () => {
let channel =     client.channels.get("562342761064431656")
setInterval(function() {
channel.send(`spam     spam    spam    spam     spam     spam     spam     spam    spam    spam    spam`);
}, 30)
})

client.login(process.env.TOKEN);
