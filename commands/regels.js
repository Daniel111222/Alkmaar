const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("De standaard regels zijn: ")
        .setDescription("\n\n\n **_NIET SPAMMEN_** \n\n\n **_NIET SCHELDEN_** \n\n\n **_NIET ONNODIG MENSEN TAGGEN_** \n\n\n **_IN DE JUISTE KANALEN PRATEN_** \n\n\n **_NIET ADVERTEREN ZONDER TOESTEMMING_** \n\n\n\n _Houd u zich niet aan de regels, zullen er consequenties voor u komen._ \n\n")
        .setColor("#eb4034")
        //.setThumbnail("https://cdn.discordapp.com/attachments/726380441266815038/727930984997060608/regels.jpg")
        .setImage("https://media.discordapp.net/attachments/727563359276236950/728606802152914984/image0.png?width=400&height=300")
        .setFooter("Bot maker: @Daniël#2939 - Owners Alkmaar: @christian#2266, @Joey.rmu#9947 en @kansloss0100#3437")//, "https://cdn.discordapp.com/attachments/726380441266815038/727930984997060608/regels.jpg")
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "regels"
}