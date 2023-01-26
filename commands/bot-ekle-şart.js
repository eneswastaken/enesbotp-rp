const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "botekleme-şart",
  description: "Bot ekleme şartları",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail("https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414")
    .setAuthor({ name: `Duster Bot Ekleme Kuralları`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    .setDescription("> **:flag_tr: Türkçe Şartlar;**\n> \n> <:r_dikkat:1037060772284604536> | *Botunuz en az 1 hafta önce kurulmalıdır.*\n> <:r_dikkat:1037060772284604536> | *Botunuz en az 10 sunucuda ekli olmalı.*\n> <:r_dikkat:1037060772284604536> | *Botunuzda dm duyuru, özel mesaj gönderme, spam gibi komutlar olmamalıdır.*\n> <:r_dikkat:1037060772284604536> | *Ekleyeceğiniz botun kendinize ait olması gerekmektedir.*\n> \n> **:flag_gb: English Conditions;**\n> \n> <:r_dikkat:1037060772284604536> | *Your bot should be installed at least 1 week ago.*\n> <:r_dikkat:1037060772284604536> | *Your bot must be on at least 10 servers.*\n> <:r_dikkat:1037060772284604536> | *Your bot should not have commands such as dm announcement, private message sending, spam.*\n> <:r_dikkat:1037060772284604536> | *The bot you add must be your own.*")
    .setColor("808080")
    .setFooter({ text: `Duster • Bot Ekletme Şartları`, iconURL: 'https://media.discordapp.net/attachments/1064266014671503380/1068234418201825320/wB4SYe8GAAhThFpK5m7Bow2Bp_lHE3CoWfMMcu2lrM4rK7Z6S0c3nUXTOKCtPlRKrCTQQCoHNaJEzBeiYK45rP3n.jpg?width=414&height=414' })
    interaction.reply({embeds: [embed]})

  }

};