const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "botekleme-şart",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail("https://media.discordapp.net/attachments/1022843509016895568/1033978189078331392/f5e9db50825d34cd7bbe85a46091c791.png")
    .setTitle("Bot Ekleme Şart!")
    .setDescription("<:r_dikkat:1037060772284604536> | **Botunuz en az 1 hafta önce kurulmalıdır.** <:r_dikkat:1037060772284604536> | **Botunuz en az 10 sunucuda ekli olmalı.** **Botunuzda dm duyuru, özel mesaj gönderme, spam gibi komutlar olmamalıdır.**")
    .setColor("000000")
    .setFooter({ text: "Bot Ekleme Şartları!" })
    interaction.reply({embeds: [embed]})

  }

};