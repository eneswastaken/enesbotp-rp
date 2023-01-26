const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "destek",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({ name: `Duster Bot Sunucuları`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414")
    .setDescription("•")
    .setColor("808080")
    .setFooter({ text: `Duster • Mercy Botlist Sunucuları`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:971472504872915105:1068254460129849484>")
.setLabel("Mercy Code - Botlist 5k")
.setStyle(Discord.ButtonStyle.Secondary)
.setURL("https://discord.gg/ZyQWrgKg66"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504864510002:1068254488491724820>")
.setLabel("Mercy Botlist #1 | 1.7k")
.setStyle(Discord.ButtonStyle.Secondary)
.setURL("moderasyon"),
new Discord.ButtonBuilder()
.setEmoji("<:r_kullanici:1034207931178168412>")
.setLabel("Mercy Botlist #2 | 2.5k")
.setStyle(Discord.ButtonStyle.Secondary)
.setURL("Kullanıcı"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504914849903:1068254517533098044>")
.setLabel("Davet Et")
.setStyle(Discord.ButtonStyle.Link)
.setURL("Mercy Code - Altyapılar"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504558325801:1068254544624111686>")
.setLabel("mryuptime.tk #7/24 Hizmet")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/ZyQWrgKg66"),)
interaction.reply({embeds: [embed], components: [row],})
  }

};