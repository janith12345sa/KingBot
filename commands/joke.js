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
QueenSew.newcmdaddtosew({pattern: 'joke ?(.*)', fromMe: RS, desc: Lang.JOKE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://official-joke-api.appspot.com/random_joke`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🗣️ ' + Lang.JOKE +'* ```' + json.setup + '```\n\n' +
		'*😆' + Lang.PUNCHLINE +'* ```' + json.punchline+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
});

