/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DataB = require('../DataBase/greetings');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('greetings');

QueenSew.newcmdaddtosew({pattern: 'welcome$', fromMe: true, desc: Lang.WELCOME_DESC}, (async (message, match) => {
    var hg = await DataB.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_WELCOME,MessageType.text);
    } else {
        await message.client.sendMessage(message.jid,Lang.WELCOME_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

QueenSew.newcmdaddtosew({pattern: 'welcome (.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_WELCOME_TEXT);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.WELCOME_DELETED,MessageType.text); return await DataB.deleteMessage(message.jid, 'welcome'); }
        await DataB.setMessage(message.jid, 'welcome', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.WELCOME_SETTED,MessageType.text)
    }
}));

QueenSew.newcmdaddtosew({pattern: 'goodbye$', fromMe: true, desc: Lang.GOODBYE_DESC}, (async (message, match) => {
    var hg = await DataB.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_GOODBYE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.GOODBYE_ALREADY_SETTED + hg.message + '```',MessageType.text);
    }
}));

QueenSew.newcmdaddtosew({pattern: 'goodbye (.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_GOODBYE_TEXT,MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.GOODBYE_DELETED,MessageType.text); return await DataB.deleteMessage(message.jid, 'goodbye'); }
        await DataB.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.GOODBYE_SETTED,MessageType.text)
    }
}));
