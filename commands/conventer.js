/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
let RS = Config.WORKTYPE == 'public' ? false : true
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('conventer');

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: Config.CPK,
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}

    QueenSew.newcmdaddtosew({pattern: 'mp3$', fromMe: RS, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'photo$', fromMe: RS, desc: Lang.STİCKER_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.jpg')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'vsticker$', desc: Lang.ANİM_STİCK, fromMe: RS}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/QueenSewWhatsappBot/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/QueenSewWhatsappBot/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: Config.CPK, quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/QueenSewWhatsappBot/stweb.mp4')) fs.unlinkSync('/root/QueenSewWhatsappBot/stweb.mp4')
                })
            })
        })
    }));
