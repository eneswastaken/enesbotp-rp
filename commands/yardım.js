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
    .setDescription("Botlist Komutlar\n\n**<:r_bot:1033846888681722007> /botlist-ayarla** - Butonlu Botlist Ayarlama Komutu Kolay Ve Basit\n\nEk Komutlar\n\n**<:r_yesil:1034210144260718633> /ban** - Sunucudan Kullanıcı Banlama\n**<:r_yesil:1034210144260718633> /forceban** - Sunucudan Kalıcı Ban Atar\n**<:r_yesil:1034210144260718633> /kick** - Sunucudan Kullanıcı Atma\n**<:r_yesil:1034210144260718633> /sil** - Kanaldaki Mesajları Temizler\n**<:r_yesil:1034210144260718633> /rol-al** - Beriltilen Kişiden Rolü Alır\n**<:r_yesil:1034210144260718633> /rol-ver** - Beriltilen Kişiye Rol Verir\n**<:r_yesil:1034210144260718633> /ping** - Botun Ping Durumunu Gösterir\n**<:r_yesil:1034210144260718633> /avatar** - Etiketlenen Kişinin Avatarını Atar\n**<:r_yesil:1034210144260718633> /istatistik** - Botun İstatistik Bilgilerini Listeler")
    .setColor("000000")
    .setFooter({ text: "Mercy Botlist" })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Botu Ekle")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.com/api/oauth2/authorize?client_id=1034130573796593714&permissions=8&scope=bot"),
new Discord.ButtonBuilder()
.setLabel("Destek Sunucusu")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/ZyQWrgKg66"),)
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};