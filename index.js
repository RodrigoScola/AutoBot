const env = require('./.env')
const story = require('./story');
const Discord = require('discord.js');
const client = new Discord.Client();
const readyDiscord = () => console.log('I Am Online')



function onMessage(msg) {
const message = msg.content.toString().toLowerCase()

console.log(msg)

    if (message == 'lol') {
        msg.reply(msg);
    }
}

client.on('message',onMessage)

client.login(env.token);
client.on('ready', readyDiscord);

// to reply messages use msg.reply('');
// to send a normal message use msg.channel.send('');
