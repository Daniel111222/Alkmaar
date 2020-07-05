const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Credits naar...")
        .setDescription("_de credits_")
        .setColor("#6dad3e")
        .setThumbnail("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setImage("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setFooter("Bot maker: @Daniël#2939 - Owners Alkmaar: @christian#2266, @Joey.rmu#9947 en @kansloss0100#3437", "https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "credits"
}

// @playfruitje die de game het meest heeft gemaakt
// @head developer die ook best veel hebben gemaakt
// @developer die hebben geholpen
// @proef developer die wat kleine mooie gebouwen heeft ge maakt