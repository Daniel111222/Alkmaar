const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Credits naar...")
        .setDescription("_de credits_")
        .setColor("#6dad3e")
        .setThumbnail("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setImage("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setFooter("Bot maker: @Daniël#2939 - Owner Gelderland: @playfruitje#9860", "https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
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