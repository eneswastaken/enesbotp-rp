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
    .setDescription("**・Moderasyon Sistemi ↷**\n > Moderasyon Sistemi hakkında bilgi alabilirsiniz.⠀⠀⠀⠀⠀\n\n**・Kayıt Sistemi ↷**\n> Kayıt Sistemi hakkında bilgi alabilirsiniz.\n\n**・Kullanıcı Sistemi ↷**\n> Kullanıcı Sistemi hakkında bilgi alabilirsiniz.")
    .setColor("000000")
    .setFooter({ text: "Mercy Botlist" })
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Botu Ekle")
                    .setStyle(Discord.ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=1034130573796593714&scope=bot&permissions="),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("kullanıcı"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};