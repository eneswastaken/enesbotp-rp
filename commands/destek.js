const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1064266269907492994/IMG_7693.gif?width=434&height=434")
    .setAuthor({ name: `Mercy Botlist İstatistik`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1064266269907492994/IMG_7693.gif?width=434&height=434' })
    .addFields({ name: '<:r_tac:1034208114091769866> Bot Sahibi', value: `data#9999`, inline: false})
    .addFields({ name: '<:r_mod:1033846559600807996> Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '<:r_ayarlar:1033687954419367936> Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: '<:r_kullanici:1034207931178168412> Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '<:r_discord:1034208049348485211> Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: '<:r_kanal:1034208224401965151> Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: '<:r_dunya:1034209747336957992> İşletim Sistemi', value: `Windows 11 Pro 64 Bit`, inline: false})
    .addFields({ name: '<:r_dunya:1034209747336957992> İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: '<:r_js:1034209357950365716> Discord.JS sürüm', value: `14.2.0`, inline: true})
    .addFields({ name: '<:r_js:1034209357950365716> Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: '<:r_bot:1033846888681722007> Bot Kuruluş', value: `05.09.2022`, inline: true})
    .addFields({ name: '<:r_yesil:1034210144260718633> Ping', value: `${client.ws.ping}`, inline: true})
    .setColor("808080")
    .setFooter({ text: `Mercy Botlist • Data Net.`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1064266269907492994/IMG_7693.gif?width=434&height=434' })
    interaction.reply({embeds: [embed]})
  }
};