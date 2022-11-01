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
    .setDescription("\n**__Kısa Bilgi__**\n\n**<:r_mod:1033846559600807996> prefix:** */*\n<:r_tac:1034208114091769866> Sahib: <@847596022020309013>\n<:r_dunya:1034209747336957992> Ping: \`15\`\n\n**__Komutlar__**\n\n<:r_bot:1033846888681722007> \`Botlist\` Komutları İçin Tıkla\n<:r_mod:1033846559600807996> \`Moderasyon\` Komutları İçin Tıkla\n<:r_kullanici:1034207931178168412> \`Kullanıcı\` Komutları İçin Tıkla")
    .setColor("000000")
    .setFooter({ text: "Mercy Botlist" })
    const row = new Discord.ActionRowBuilder()
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};