/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
const { thumbnail } = require('../media/thumbnail');
const imgthumb = await thumbnail()
thumbnail: imgthumb, quoted: message.data 
Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Raviya = require('../config'); // GAN STYLE Support
const request = require('request');
const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey(Raviya.DEEPAI); // Users API Key
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
let RS = Raviya.WORKTYPE == 'public' ? false : true
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support
var noAPI = ''
if (Raviya.LANG == 'SI') {
  noAPI = '*DeepAI API Key එකක් ඇතුලත් කර නැත!*'
} else {
  noAPI = '*DeepAI API Key Not Found!*'
}
    QueenSew.newcmdaddtosew({pattern: 'deepai$', fromMe: RS, delownsewcmd: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
const imgthumb = await thumbnail()
        
            await message.sendMessage('❄ Command: *.moodai <text>*\n✨ Discretion: It finds your mood from the article you wrote.\n\n❄ Command: *.colorai*\n✨ Discretion: It colorize bw photos.\n\n❄ Command: *.faceai*\n✨ Discretion: Generates human faces with artificial intelligence, that never existed before.\n\n❄ Command: *.animai*\n✨ Discretion: Generates anime faces with artificial intelligence, that never existed before.\n\n❄ Command: *.superai*\n✨ Discretion: Improves the quality of photos with Neural AI.\n\n❄ Command: *.waifuai*\n✨ Discretion: Combines the color palettes of photos with artificial intelligence.\n\n❄ Command: *.dreamai*\n✨ Discretion: Applies deepdream effect to the photo.\n\n❄ Command: *.neuraltalkai*\n✨ Discretion: Explain the phenomenon in the photo with artificial intelligence.\n\n❄ Command: *.ttiai <text>*\n✨ Discretion: Converts text to a picture. (Text-to-Image)\n\n❄ Command: *.toonai*\n✨ Discretion: Turns the face in the photo into a cartoon character.\n\n❄ Command: *.textai <text>*\n✨ Discretion: It creates an artificial story for you from your sentence.\n\n❄ Command: *.nudityai*\n✨ Discretion: It shows the NSFW value between 1 and 0 in the photo.\n\n❄ Command: *.ganstyle*\n✨ Discretion: Combines the photo you answered with the selected picture.\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ');
        
    }));
    QueenSew.newcmdaddtosew({pattern: 'faceai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {
const imgthumb = await thumbnail()
        var image_an = await Pach.face()
        var webimage = await axios.get(image_an, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
    }));
    QueenSew.newcmdaddtosew({pattern: 'animai', fromMe: RS, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {
const imgthumb = await thumbnail()
        var anim_img = await Pach.anime()
        var IMGWADATA = await axios.get(anim_img, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK}
        )
    }));
    QueenSew.newcmdaddtosew({pattern: 'colorai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);   
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'waifuai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'superai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'moodai ?(.*)', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msgdata = await Pach.mood(match[1], Raviya.DEEPAI)
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: msgdata,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    QueenSew.newcmdaddtosew({pattern: 'dreamai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'neuraltalkai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'ttiai ?(.*)', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msg_tt = await Pach.tti(match[1], Raviya.DEEPAI)
        var resp = await deepai.callStandardApi("text2img", {
            text: msg_tt,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
    }));
    QueenSew.newcmdaddtosew({pattern: 'toonai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data,})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'nudityai$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'textai ?(.*)', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var text_ai = await Pach.text(match[1], Raviya.DEEPAI)
        var resp = await deepai.callStandardApi("text-generator", {
            text: text_ai
        });
        await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    QueenSew.newcmdaddtosew({pattern: 'ganstyle$', fromMe: RS, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (!Raviya.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Raviya.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Raviya.CPK})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));