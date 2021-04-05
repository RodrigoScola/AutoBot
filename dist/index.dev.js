"use strict";

var env = require('./.env');

var story = require('./story');

var Discord = require('discord.js');

var client = new Discord.Client();

var readyDiscord = function readyDiscord() {
  return console.log('I Am Online');
};

function onMessage(msg) {
  var message = msg.content.toString().toLowerCase();
  console.log(msg);

  if (message == 'lol') {
    msg.reply(msg);
  }
}

client.on('message', onMessage);
client.login(env.token);
client.on('ready', readyDiscord); // to reply messages use msg.reply('');
// to send a normal message use msg.channel.send('');