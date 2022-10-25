const { EmbedBuilder } = require("discord.js");

module.exports = {
  slash: true,
  name: "şikayet",
  description: 'Botun sorununu bildirirsiniz',
  option: [{
      name: "mesaj", 
      description: "Botun şikayetini yazınız.", 
      type: String, 
      required: true 
      }
     ],

  async execute(client, interaction) {
    interaction.reply("şikayetinizi başarı ile aldım, developer ekibi sizlerin şikayetlerinize uygun olarak botumuzu geliştiriyor")
let sikayet = new EmbedBuilder()
    .setAuthor(`${interaction.user.tag} adlı kişinin bir şikayeti var`, client.user.avatarURL())
    .setColor(0xFFD700)
    .setTimestamp()
    .setDescription(`` + interaction.options.getString("mesaj"))

    .setFooter({text:`${interaction.user.tag} Tarafından istendi`, iconURL:interaction.user.displayAvatarURL()}) 
 
    client.channels.cache.get("Şikayet Kanal ID").send({ embeds: [sikayet] });


  },
};