const Discord = require("discord.js")
const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"medya",
    description: 'Raven sosyal medya',
    type:1,
    options: [

    ],
  run: async(client, interaction) => {

   const embed = new EmbedBuilder()
.setTitle("Raven medya")
.setDescription("Sosyal Medya")
.setColor("Random")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Youtube")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://www.youtube.com/channel/UCiQwzE1llmvseYcTvh8Xegg"),
new Discord.ButtonBuilder()
.setLabel("Spotify")
.setStyle(Discord.ButtonStyle.Link)
.setURL(""),
new Discord.ButtonBuilder()
.setLabel("Beta Development")
.setStyle(Discord.ButtonStyle.Link)
.setURL("https://discord.gg/altyapilar"))
interaction.reply({embeds: [embed], components: [row]})
}
}