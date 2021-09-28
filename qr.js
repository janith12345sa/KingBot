/* Codded by @Janithsadanuwan 


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Janithsadanuwan 
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./Kingbot/');
const fs = require('fs');

async function Kingbot () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('King')}${chalk.blue.bold('bot')}
${chalk.white.italic('KingbotString')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Kingbot String: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ASENA_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*King*', MessageType.text)
            console.log(
                chalk.blue.bold('King.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do Not Share This Code With Anyone!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node King.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

Kingbot ()
