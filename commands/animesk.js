/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Raviya = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
let wk = Raviya.WORKTYPE == 'public' ? false : true
var pic = ''
var giff = ''
var wr_usage = ''
if (Raviya.LANG == 'SI') pic = 'අහඹු ලෙස එනිම් ෆොටෝ සෙන්ඩ් කරයි.', wr_usage = ' ', giff = 'අහඹු ලෙස එනිම් වීඩියෝ සෙන්ඩ් කරයි'
if (Raviya.LANG == 'EN') pic = 'Sends random anime photo.', wr_usage = ' ', giff = 'Sends random anime video.'

const { thumbnail } = require('../media/thumbnail');
QueenSew.newcmdaddtosew({pattern: 'anime ?(.*)', fromMe: wk, desc: pic, usage: '.anime pic / .anime gif'}, (async (message, match) => {
 if (match[1] == 'pic') {
    const imgthumb = await thumbnail()
    var image_link = await Pach.anime_wall('pic')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: Raviya.CPK, thumbnail: imgthumb, quoted: message.data })
}else if (match[1] == 'gif') {
    var gif_link = await Pach.anime_gif('gif')
    var gif_buffer = await axios.get(gif_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(gif_buffer.data), MessageType.video, { caption: Raviya.CPK, mimetype: Mimetype.gif })
    }
}));

