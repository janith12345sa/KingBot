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
const Lang = Language.getString('weather');
let RS = Config.WORKTYPE == 'public' ? false : true

QueenSew.newcmdaddtosew({pattern: 'tiny ?(.*)', fromMe: RS, desc: Lang.TIN_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_LINK);
	const url = `https://tobz-api.herokuapp.com/api/tinyurl?url=${match[1]}&apikey=BotWeA`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'\n *🔗 ' + Lang.SLINK +'* ```' + json.result + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDLI, MessageType.text);
	}
});