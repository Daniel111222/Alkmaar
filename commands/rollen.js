const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("De rollen zijn:")
        .setDescription("_De rollen_")
        .setColor("#6dad3e")
        .setThumbnail("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setImage("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setFooter("Bot maker: @Daniël#2939 - Owner Alkmaar: christian#2266, Joey.rmu#9947 en kansloss0100#3437", "https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "rollen"
}