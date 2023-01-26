const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
const Discord = require("discord.js")
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "destek",
  description: "destek sunucusu",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const embed = new EmbedBuilder()
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414")
    .setAuthor({ name: `Duster Bot Sunucuları`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    .setDescription("")
    .setColor("808080")
    .setFooter({ text: `Duster • Mercy Botlist Sunucular`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:r_bot:1033846888681722007>")
.setLabel("Botlist")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("kayıt"),)
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
    
  }

};