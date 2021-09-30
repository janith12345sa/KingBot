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
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('tagall');

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

QueenSew.newcmdaddtosew({pattern: 'tag ?(.*)', fromMe: true, desc: Lang.TAGALL_DESC }, (async (message, match) => {
var nwjson = await message.client.groupMetadata(message.jid)
    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (message.reply_message && match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        await message.client.sendMessage(message.jid,message.reply_message.text, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    
}));


QueenSew.newcmdaddtosew({pattern: 'tag ?(.*)', fromMe: false, desc: Lang.TAGALL_DESC }, (async (message, match) => {
var us = await checkUsAdmin(message)
if (!us) return;
var nwjson = await message.client.groupMetadata(message.jid)
    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (message.reply_message && match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
        await message.client.sendMessage(message.jid,message.reply_message.text, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,nwjson.subject + '\n\n   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    
}));
