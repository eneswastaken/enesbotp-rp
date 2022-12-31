const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle(client.user("https://media.discordapp.net/attachments/1022843509016895568/1033978189078331392/f5e9db50825d34cd7bbe85a46091c791.png"), "Yardım menüsü | Mercy Botlist!")
    .setThumbnail("https://media.discordapp.net/attachments/1022843509016895568/1033978189078331392/f5e9db50825d34cd7bbe85a46091c791.png")
    .setDescription("• Yardım almak için en doğru yerdesin, bir sorunun olursa destek sunucusunda seni bekliyor olacağız.\n\n**<:r_arti:1033844966360879245> | Yenilikler/Güncellemeler**\n• Botlist sistemini yeniledik ve sorunları giderdik. Artık daha kullanışlı. [Daha Fazla Bilgi.](https://discord.gg/ZyQWrgKg66)\n\n**<:r_ayarlar:1033687954419367936> | Komutlar [3]**\n**• Botlist 🠮** Komutları İçin Tıkla!\n**• Moderasyon 🠮** Komutları İçin Tıkla!\n**• Kullanıcı 🠮**Komutları İçin Tıkla!\n\n**<:r_dikkat:1037060772284604536> | Bilgilendirme**\n• Katagoriler arasında geçiş yaparak daha fazla bilgiye ulaş.\n• Daha fazla botlist sunucusu istiyosan [Buraya Tıkla.](https://discord.gg/ZyQWrgKg66)")
    .setColor("000000")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setEmoji("<:r_bot:1033846888681722007>")
.setLabel("Botlist")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setEmoji("<:r_mod:1033846559600807996>")
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setEmoji("<:r_kullanici:1034207931178168412>")
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("Kullanıcı"),
new Discord.ButtonBuilder()
.setEmoji("<:r_link:1034158510851772567>")
.setLabel("Davet Et")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1034130573796593714&permissions=8&scope=bot"),
new Discord.ButtonBuilder()
.setEmoji("<:r_discord:1034208049348485211>")
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/ZyQWrgKg66"),)
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};