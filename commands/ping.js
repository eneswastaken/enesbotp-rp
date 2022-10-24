const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`<:Yesil:1033666717974548500> | \`${client.ws.ping}\` **Ms**`).setColor("000000") ], ephemeral: true })

  }

};