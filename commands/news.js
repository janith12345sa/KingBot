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
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('weather');
const Config = require('../config')
let RS = Config.WORKTYPE == 'public' ? false : true
QueenSew.newcmdaddtosew({pattern: 'news ?(.*)', fromMe: RS, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*💠 ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
                '*💠 ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n'+ 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[5].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[5].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[6].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[6].readMoreUrl + '```\n\n'+									 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[7].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[7].readMoreUrl + '```\n\n'+									 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[8].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[8].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[9].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[9].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[10].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
