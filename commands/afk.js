
/* Codded by @Janith sadaanuwan


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

kingbot-Janith sadanuwan
*/
const ravibutton = require('coded-by-Janith sadanuwan');
const kingbot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('afk');

var AFK = {
    isAfk: false,
    reason: false,
    lastseen: 0
};

// https://stackoverflow.com/a/37096512
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " " + Lang.HOUR + ", " : " " + Lang.HOUR + ", ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " " + Lang.MINUTE + ", " : " " + Lang.MINUTE + ", ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " " + Lang.SECOND : " " + Lang.SECOND) : "";
    return hDisplay + mDisplay + sDisplay; 
}

kingbot.newcmdaddtoking({on: 'text', fromMe: false, delownsewcmd: false}, (async (message, match) => {
    if (Config.AFKMSG == 'default') {

        if (AFK.isAfk && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Lang.AFK_TEXT + '\n' + 
                        (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                        (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});            
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    await message.client.sendMessage(message.jid,Lang.AFK_TEXT + '\n' + 
                        (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                        (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});
                }
            } else {
                await message.client.sendMessage(message.jid,Lang.AFK_TEXT + '\n' + 
                (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});
            }
        }
    }
    else {
        if (AFK.isAfk && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        await message.client.sendMessage(message.jid,Config.AFKMSG + '\n' + 
                        (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                        (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});            
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    await message.client.sendMessage(message.jid,Config.AFKMSG + '\n' + 
                        (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                        (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});
                }
            } else {
                await message.client.sendMessage(message.jid,Config.AFKMSG + '\n' + 
                (AFK.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK.reason + '```' : '') + 
                (AFK.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK.lastseen) + Lang.AGO : ''), MessageType.text, {quoted: message.data});
            }
        }
    }
}));

kingbot.newcmdaddtosew({on: 'text', fromMe: true, delownsewcmd: false}, (async (message, match) => {
    if (AFK.isAfk && !message.id.startsWith('3EB0')) {
        AFK.lastseen = 0;
        AFK.reason = false;
        AFK.isAfk = false;

        await message.client.sendMessage(message.jid,Lang.IM_NOT_AFK,MessageType.text);
    }
}));

kingbot.newcmdaddtosew({pattern: 'afk ?(.*)', fromMe: true, delownsewcmd: false, desc: Lang.AFK_DESC}, (async (message, match) => {     
    if (!AFK.isAfk) {
        AFK.lastseen = Math.round((new Date()).getTime() / 1000);
        if (match[1] !== '') { AFK.reason = match[1]; }
        AFK.isAfk = true;

        await message.client.sendMessage(message.jid,Lang.IM_AFK + (AFK.reason !== false ? ('\n*' + Lang.REASON +':* ```' + AFK.reason + '```') : ''),MessageType.text);
    }
}));

module.exports = { secondsToHms };
