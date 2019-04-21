const Config = require('../config.json')
const data = require('../tickets.json')
exports.use = async (client, message, nothing, args, command) => {
    const Discord = require('discord.js')
    const fs = require('fs')

    if (args[0]) {
        message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setDescription('Your ticket has been created!\nStaff will contact you in the ticket shortly!').setTimestamp().setAuthor('Tickets'))
        message.guild.createChannel(`ticket-${data.id}`).then(async c => {
            let reason = args.join(" ");
            if (message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-')) {
                if (message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').type === 'category') {
                    c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').id)
                } else {
                    c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').id)
                }
                c.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false
                })
                c.overwritePermissions(message.member, {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'SB | Server Bots'), {
                VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'Support Team'), {
                VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'ST | Sales Team'), {
                VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'EST| Emergency Support Team'), {
                VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'BC | Bot Creator'), {
                VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'LC | Logo Creator'), {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'CS | Console Server Creator'), {
                    VIEW_CHANNEL: true
                })
                 c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'SC | Server Creator Team'), {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'CD | Cad Developer'), {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'ST | Staff Team'), {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'C | Chairman'), {
                    VIEW_CHANNEL: true
                })
                message.delete();
                }
            await c.send(new Discord.RichEmbed().addField('Subject', `${reason}`).addField('Explain', "Explain in detail what you need for a faster response!").setDescription(`Thank you for creating a ticket.\nThe support team will assist you soon!`).setColor(Config.ticketcolor))
        })
        data.id++;
        fs.writeFile('./tickets.json', '{\n"id":' + data.id + "\n}", (err) => {
            if (!err) return;
            console.error(err)
        })

    }
}
