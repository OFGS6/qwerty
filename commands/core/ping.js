const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message, args) {
      
      const embed = new MessageEmbed();
      embed.setColor("BLURPLE")   
      embed.setDescription(`**${client.ws.ping}ms** 🛰️`);
        message.channel.send({ embeds: [embed] });
    },
};