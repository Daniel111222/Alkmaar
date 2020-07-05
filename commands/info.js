const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Info")
    .setColor("#6dad3e")
    .addFields(
        { name: "Dit is de bot van Alkmaar.", value: "De bot is gemaakt door @Daniël#2939 en de owners van Alkmaar zijn: \n @christian#2266 \n @Joey.rmu#9947 \n @kansloss0100#3437"},
        { name: "Dit is De officiële support server van de bot: Daniël bot", value: "[Klik Hier!](https://discord.gg/2E5fhn3)" },
        { name: "Dit is de officiële website van de eigenaar van de bot.", value: "[Klik Hier!](https://danielbot.webnode.nl)"}
    )
    .setThumbnail("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
    .setImage("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
    .setFooter("Bot maker: @Daniël#2939 - Owners Alkmaar: @christian#2266, @Joey.rmu#9947 en @kansloss0100#3437", "https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
    .setTimestamp();

return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}