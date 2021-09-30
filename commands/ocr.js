/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const tesseract = require("node-tesseract-ocr")
const langs = require('langs');
const Language = require('../language');
const Lang = Language.getString('ocr');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
 let RS = Config.WORKTYPE == 'public' ? false : true

    QueenSew.newcmdaddtosew({pattern: 'ocr ?(.*)', fromMe: RS, desc: Lang.OCR_DESC}, (async (message, match) => { 

        if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);    
	var info = await message.reply(Lang.DOWNLOADING);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        var dil;
        if (match[1] !== '') {
            dil = langs.where("1", match[1]);
        } else {
            dil = langs.where("1", Config.LANG.toLowerCase());
        }

        try {
            var result = await tesseract.recognize(location, {
                lang: dil[2]
            });    
        } catch (e) {
            return await message.reply(Lang.ERROR.format(e));
        }

        await info.delete();
        if ( result === ' ' || result.length == 1 ) {
            return await message.reply(Lang.ERROR.format(' Empty text'));
        }

        return await message.reply(Lang.RESULT.format(dil[2], result));
    }));
    