const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("serverinfo")
        .setDescription("Info:")
        .setColor("#6dad3e")
        .addFields(
            { name: "Bot naam", value: client.user.username },
            { name: "Je bent de server gejoined op", value: message.member.joinedAt },
            { name: "Totaal members", value: message.guild.memberCount },
            { name: "Aantal servers", value: client.guilds.cache.size }
        )
        .setThumbnail("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setImage("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setFooter("Bot maker: @Daniël#2939 - Owners Alkmaar: @christian#2266, @Joey.rmu#9947 en @kansloss0100#3437", "https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"
}