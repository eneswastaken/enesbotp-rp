const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "sitemiz",
  description: "Duster Bota Ait Siteler",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({ name: `Mercy Code - Botlist | Uptime!`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414")
    .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.\n\n**<:callofdutymobilelogopng59:1068961254049325087> | Mercy Botlist**\nDiscord Botlist Sitesi! Bu siteden kolayca botlarınızı siteye giriş yaparak ekleyebilirsiniz Mercy Code - Botlist Sitesi Türkiyenin en büyük ve en gelişmiş sitesidir.\n\n**<:13f8a8efd29469c2535530716604e6f9:1069952722733912114> | Data Uptimer**\nBotlarınızın 7/24 kalmasını mı istiyorsunuz? DataUptime ile5 monitöre kadar projelerinizi ücretsiz aktif tutun!")
    .setColor("808080")
    .setFooter({ text: `Duster • data#9999`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:callofdutymobilelogopng59:1068961254049325087>")
.setLabel("Mercy Botlist")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://mercylist.tk"),
new Discord.ButtonBuilder()
.setEmoji("<:13f8a8efd29469c2535530716604e6f9:1069952722733912114>")
.setLabel("Data Uptimer")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://mryuptime.tk"),)
interaction.reply({embeds: [embed], components: [row],})
  }

};