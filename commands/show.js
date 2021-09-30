/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const ravibutton = require('coded-by-ravindu-manoj');
const SewQueen = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('sewshow');
const { errorMessage, infoMessage } = require('../helpers');
const config = require('../config')
let RS = config.WORKTYPE == 'public' ? false : true
SewQueen.newcmdaddtosew({ pattern: 'show ?(.*)', fromMe: RS , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴘᴇᴇɴ' , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)