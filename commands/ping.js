const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder()
    .setAuthor({ name: `Moderasyon menüsü | Mercy Botlist!`, iconURL: 'https://media.discordapp.net/attachments/1022843509016895568/1033978189078331392/f5e9db50825d34cd7bbe85a46091c791.png?width=316&height=316' })
    .setDescription(`• Gecikme değerleri anlık olarak gösterilir, zamanla bu değerler değişebilir.\n\n**• Soket Gecikmesi:** \`143\`\n**• Veritabanı Gecikmesi:** \`${client.ws.ping}\`\n**• Veritabanı Durumu:** \`Bağlı\``)
    .setColor("000000")], ephemeral: true })

  }

};