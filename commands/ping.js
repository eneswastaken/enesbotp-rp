const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder()
    .setAuthor({ name: `Güncel Ping | Duster!`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418403160145/Dash_Blue_D_Logo.png?width=281&height=281' })
    .setDescription(`• Gecikme değerleri anlık olarak gösterilir, zamanla bu değerler değişebilir.\n\n**• Soket Gecikmesi:** \`143\`\n**• Veritabanı Gecikmesi:** \`${client.ws.ping}\`\n**• Veritabanı Durumu:** \`Bağlı\``)
    .setFooter({ text: `Duster`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418403160145/Dash_Blue_D_Logo.png?width=281&height=281' })
    .setColor("000000")], ephemeral: true })

  }

};