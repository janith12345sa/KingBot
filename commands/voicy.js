const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const { MessageType } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');


const recognizeAudio = () => {

    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })

    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }

    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}

const convertToWav = file => {
    return ffmpeg(file)
        .inputFormat('ogg')
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}

let RS = conf.WORKTYPE == 'public' ? false : true
    QueenSew.newcmdaddtosew({ pattern: 'voicy', desc: Lang.USAGE, fromMe: RS }, (async (message, match) => {

        try {
            if (message.reply_message) {
                if (!message.reply_message.text && !message.reply_message.video && !message.reply_message.image) {
                    const file = await message.client.downloadAndSaveMediaMessage({
                        key: {
                            remoteJid: message.reply_message.jid,
                            id: message.reply_message.id
                        },
                        message: message.reply_message.data.quotedMessage
                    })


                    convertToWav(file).on('end', async () => {
                        const recognizedText = await recognizeAudio()

                        await message.client.sendMessage(message.jid, Lang.TEXT + '```' + recognizedText + '```', MessageType.text)
                    });


                } else {
                    await message.client.sendMessage(message.jid, Lang.ONLY_AUDIO, MessageType.text)

                }
            } else {
                await message.client.sendMessage(message.jid, Lang.NEED_REPLY, MessageType.text)

            }

        } catch (err) {
            console.log(err)
        }


    }));