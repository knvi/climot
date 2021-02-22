// Getting constants of discord library and creating a client.

const Discord = require('discord.js')
const Client = new Discord.Client()
const config = require("./config.json")

// Show into console that the bot is alive.

Client.once('ready', function() {
    console.log("helo im alive")
})

// When bot starts, keep waiting for a message

Client.on("message", async (message) => {
    if (message.content == "!foo") {
        message.channel.send("bar")
    } else if (message.content == "!trol") {
        // yeah const doesnt allow any changes i learnt that!
        let attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/813408702643175447/813409567844990976/3355_troll_face.png')
        message.channel.send("have a picture of trol:", attachment)
    } else if (message.content == "!howareyou")
    {
        message.channel.send("Oh someone cares about me! Thanks, I am good.")
    }
    
})
//ok give it a go again
// why did they make it so commplicated

Client.login(config.token)