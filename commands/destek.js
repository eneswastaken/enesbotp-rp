const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "destek",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({ name: `Yardım menüsü | Duster!`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414")
    .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.\n\n**<:r_arti:1033844966360879245> | Yenilikler/Güncellemeler**\n• Botlist sistemini yeniledik ve sorunları giderdik. Artık daha kullanışlı. [Daha Fazla Bilgi.](https://discord.gg/ZyQWrgKg66)\n\n**<:r_ayarlar:1033687954419367936> | Komutlar [3]**\n**• Botlist -** Komutları İçin Tıkla!\n**• Moderasyon -** Komutları İçin Tıkla!\n**• Kullanıcı -**Komutları İçin Tıkla!\n\n**<:r_dikkat:1037060772284604536> | Bilgilendirme**\n• Katagoriler arasında geçiş yaparak daha fazla bilgiye ulaş.\n• Daha fazla botlist sunucusu istiyosan [Buraya Tıkla.](https://discord.gg/ZyQWrgKg66)")
    .setColor("808080")
    .setFooter({ text: `Duster • data#9999 Net`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:971472504872915105:1068254460129849484>")
.setLabel("Botlist")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504864510002:1068254488491724820>")
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504923250768:1068254583715024996>")
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("Kullanıcı"),
new Discord.ButtonBuilder()
.setEmoji("<:971472504914849903:1068254517533098044>")
.setLabel("Davet Et")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1034130573796593714&permissions=8&scope=bot"),
new Discord.ButtonBuilder()
.setEmoji("<:r_discord:1034208049348485211>")
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/ZyQWrgKg66"),)
interaction.reply({embeds: [embed], components: [row],})
  }

};