const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        var text = "**Alkmaar bot** \n\n **_Commands_** \n !hallo - Stuurt hallo terug. \n !sps (steen of papier of schaar) - Je speelt steen, papier, schaar met de bot. \n !info - Geeft info. \n !serverinfo - Geeft info over de server. \n !rollen - Je ziet van hoog naar laag alle rollen. \n !credits - Je ziet wie er allemaal gewerkt heeft aan de game/discord server. \n !regels - Geeft de hoofd regels in deze discord server. \n !new - Voor ticket aanmaken. \n !ticket - Voor ticket aanmaken. \n\n **_staff_** \n !ban (mention id) (reden) - Als je iemand wilt ban geven. \n !kick (mention id) (reden) - Als je iemand kick wilt geven. \n !tempmute (mention id) (tijd) - als je iemand wilt muten voor een bepaalde tijd. \n !warn (mention id) (reden) - Als je iemand een warn wilt geven \n !close - Als je een ticket wilt afsluiten. \n\n\n Namens het hele staff team wensen we u veel plezier in de game! \n\n **Support server: https://discord.gg/2E5fhn3**";

        message.author.send(text);

        message.reply("Alle commands kan je vinden in je privé berichten 📬");

    } catch (error) {
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}