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
const got = require('got');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('nekobin');
 let RS = Config.WORKTYPE == 'public' ? false : true

    QueenSew.newcmdaddtosew({pattern: 'neko', fromMe: RS, desc: Lang.NEKO_DESC}, (async (message, match) => {

        if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY);
        if (!message.reply_message.text) return await message.sendMessage(Lang.MUST_TEXT);
        let base_URI = "https://nekobin.com/api/documents";
        try {
            const response = await got.post(base_URI, {json : {content : message.reply_message.text}}); 
            json = JSON.parse(response.body);
            neko_url = 'https://nekobin.com/' + json.result.key;
            await message.reply(neko_url);        
        } catch (err) {
            await message.reply(err.message, MessageType.text);
            console.log(err.message);
        }
       
    }));
    