const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Mercy Botlist - Yardım!")
    .setThumbnail("https://media.discordapp.net/attachments/1022843509016895568/1033978189078331392/f5e9db50825d34cd7bbe85a46091c791.png")
    .setDescription("<:r_bot:1033846888681722007> \`Botlist\` Komutları İçin Tıkla\n<:r_mod:1033846559600807996> \`Moderasyon\` Komutları İçin Tıkla\n<:r_kullanici:1034207931178168412> \`Kullanıcı\` Komutları İçin Tıkla")
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