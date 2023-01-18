const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder()
    .setAuthor({ name: `Güncel Ping | Mercy Botlist!`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1064266269907492994/IMG_7693.gif?width=434&height=434' })
    .setDescription(`• Gecikme değerleri anlık olarak gösterilir, zamanla bu değerler değişebilir.\n\n**• Soket Gecikmesi:** \`143\`\n**• Veritabanı Gecikmesi:** \`${client.ws.ping}\`\n**• Veritabanı Durumu:** \`Bağlı\``)
    .setFooter({ text: `Mercy Botlist • Data Net.`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1064266269907492994/IMG_7693.gif?width=434&height=434' })
    .setColor("000000")], ephemeral: true })

  }

};