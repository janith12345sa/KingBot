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
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('conventer');
let RS = Config.WORKTYPE == 'public' ? false : true

    QueenSew.newcmdaddtosew({pattern: 'tblend ?(.*)', fromMe: false, desc: Lang.T_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Dodge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Or TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Multiply TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Grainmerge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - And TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Burn TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Difference TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Grainextract TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Divide TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Xor TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Hardmix TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Negation TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
    QueenSew.newcmdaddtosew({pattern: 'tblend ?(.*)', fromMe: true, desc: Lang.T_DESC, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);

        if (message.repy_message && match[1] === '') return await message.client.sendMessage(message.jid, Lang.T_NOT, MessageType.text);

        if (match[1] === 'dodge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=dodge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Dodge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'or') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=or')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Or TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'multiply') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=multiply')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Multiply TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainmerge') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainmerge')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Grainmerge TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'and') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=and')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - And TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'burn') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=burn')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Burn TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'difference') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=difference')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Difference TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'grainextract') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=grainextract')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Grainextract TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'divide') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=divide')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Divide TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'xor') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=xor')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Xor TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'hardmix') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=hardmix')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Hardmix TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (match[1] === 'negation') {

            var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters('tblend=all_mode=negation')
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: Config.CPK + ' - Negation TBlend'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

        }
        else {
            return await message.client.sendMessage(message.jid,Lang.T_FALSE, MessageType.text);
        }
    }));
