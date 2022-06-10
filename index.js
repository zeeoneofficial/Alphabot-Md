/**
	@ No Re Upload, recode sendiri base nya klo mau 😏
	@ Sc no enc silahkan cek https://github.com/DikaArdnt/alpha-Morou
 
	 「 TqTo 」
	@ My God
	@ My Parents
	@ Fatih A.
	@ Ferdi
	@ DikaArdnt [author]
	@ Mhankbarbar
	@ Nurutomo
	@ Rashid
	@ ZeeoneOfc
	@ Penyedia Module
	@ And All Support
**/


require('./settings')
const { default: makeWASocket, BufferJSON, WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser, makeInMemoryStore} = require('@adiwajshing/baileys')
const translate = require('@vitalets/google-translate-api')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const FormData = require("form-data");
const speed = require('performance-now')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon() 
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const hx = require('hxz-api');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const { performance } = require('perf_hooks')
const zee = require('xfarr-api')

const { toAudio, toPTT} = require('./lib/converter')
const { yta, ytv, ytvd, ytvf, servers } = require('./lib/y2mate')
const { pinterest, wallpaper, wikimedia, hentai, quotesAnime} = require('./lib/scraper')
const {bytesToSize,fileIO,  UploadFileUgu,telesticker, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'
typemenu = 'templateLocation'
moment.tz.setDefault("Asia/Jakarta").locale("id");

// Database Game

const kuismath = db.data.game.math = []
const _family100 = db.data.game.family100 = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const tebakbendera = db.data.game.tebakbendera = []
const siapaaku = db.data.game.siapaaku = []
const tebakkalimat = db.data.game.tebakkalimat = []
const caklontong = db.data.game.caklontong = []
const susunkata = db.data.game.susunkata = []
const tekateki = db.data.game.tekateki = []
const tebakkabupaten = db.data.game.tebakkabupaten = []
const tebakkimia = db.data.game.tebakkimia = []
const tebaklirik = db.data.game.tebaklirik = []
const tebaktebakan = db.data.game.tebaktebakan = []


module.exports = alpha = async (alpha, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 		var budy = (typeof m.text == 'string' ? m.text : ' ')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
		const content = JSON.stringify(mek.message)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const isCreator = [alpha.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == alpha.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const botNumber = alpha.user.id ? alpha.user.id.split(":")[0]+"@s.whatsapp.net" : alpha.user.id
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(from) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		
		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: pp_bot, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: pp_bot}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': pp_bot}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: pp_bot}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
		let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
		
		const reply = async (teks) => {
			return await alpha.sendFakeLink(m.chat,teks,salam, pushname,ownername, thumbnail, myweb, m)
		}
		// DATABASE
try {
let users = global.db.data.users[m.sender]
if (typeof users !== 'object') global.db.data.users[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else global.db.data.users[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('setWelcome' in chats)) chats.setWelcome = ''
if (!('setLeave' in chats)) chats.setLeave = ''
} else global.db.data.chats[m.chat] = {
mute: false,
setWelcome: '',
setLeave: '',
}

let settings = global.db.data.settings[botNumber]
if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
if (!('autorespond' in settings)) settings.autorespond = false
} else global.db.data.settings[botNumber] = {
available: false,
composing: false,
recording: false,
autorespond:false,
}
} catch (err) {
console.log(err)
}

for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? '\nReason : ' + reason : 'Reason : Nothing'}
Waktu : ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	alpha.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${groupMetadata.subject}`}, {quoted:m})
			alpha.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	}
        
        // Public & Self
        if (!alpha.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console
        if (m.message) {
        	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
         }
        
		const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return alpha.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return alpha.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return alpha.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return alpha.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return alpha.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
        
/*if(autorecording){
	if(autorecording== true) return
	await alpha.sendPresenceUpdate('recording', m.chat)
	} else if(autoketik){
		if(autoketik == true) return
		await alpha.sendPresenceUpdate('composing', m.chat)
		} else if(available){
			if(available == true) return
			alpha.sendPresenceUpdate('available', m.chat)
			}*/


 //FUN

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
	alpha.sendButtonText(m.chat, [{ buttonId: 'math medium', buttonText: { displayText: 'Kuis Math' }, type: 1 }], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math *mode*`, `© ${ownername}`, m)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
alpha.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete susunkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = siapaaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak siapa', buttonText: { displayText: 'Tebak Siapa' }, type: 1 }], `🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}



if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: 'Teka Teki' }, type: 1 }], `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}


if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

// Auto Read
if(m.message && global.autoread == true) {
alpha.sendReadReceipt(m.chat, sender, [m.key.id])
}

// Auto Read2
if(!isMedia && global.autoread == true) {
alpha.sendReadReceipt(m.chat, sender, [m.key.id])
}
function _0x505265(_0x1d2b1a,_0x48794e,_0x5559f4,_0x4383e9){return _0x2015(_0x4383e9-0x186,_0x5559f4);}(function(_0x3fd57c,_0x33af7a){function _0x4e5468(_0x2ecc60,_0x111073,_0x3ff466,_0x5682ac){return _0x2015(_0x5682ac- -0x3e4,_0x3ff466);}function _0x54790f(_0x172b40,_0x49f083,_0x274efc,_0x1196c1){return _0x2015(_0x274efc- -0x11,_0x1196c1);}const _0x72b92e=_0x3fd57c();while(!![]){try{const _0x14f68f=-parseInt(_0x54790f(0x10e,0x10b,0x114,0x124))/(0x17a9+0x946+-0x20ee)+parseInt(_0x4e5468(-0x2b2,-0x2aa,-0x295,-0x2aa))/(0x15e3+-0x5b*0x3+-0x9*0x250)+parseInt(_0x4e5468(-0x2c7,-0x2b0,-0x2aa,-0x2b6))/(0xba9*-0x3+-0x2*0xf2b+0x4154)+parseInt(_0x54790f(0x10f,0x11f,0x116,0x10c))/(-0x124b+-0xaa1*0x3+0x3232)*(parseInt(_0x54790f(0x100,0x105,0x112,0x123))/(0x1117+0x6*-0x384+0x406))+-parseInt(_0x4e5468(-0x2c2,-0x2a4,-0x2a0,-0x2af))/(-0x12*0x40+-0x7e6*-0x1+-0x360)+parseInt(_0x54790f(0xf7,0x111,0x107,0x10b))/(-0x4*0x239+-0x1245+0x1b30)*(parseInt(_0x4e5468(-0x2a4,-0x2bd,-0x2bf,-0x2b4))/(-0x25+-0x3b5+0x3e2*0x1))+parseInt(_0x54790f(0x118,0x108,0x10e,0x117))/(-0x11ef+-0x2636+0x382e);if(_0x14f68f===_0x33af7a)break;else _0x72b92e['push'](_0x72b92e['shift']());}catch(_0x291230){_0x72b92e['push'](_0x72b92e['shift']());}}}(_0x1c9c,-0x1*0x3fb93+0x28*-0xbf0+0x88292));function _0x4d3015(_0x436322,_0x5f429c,_0x4afcd8,_0x2e4eb2){return _0x2015(_0x4afcd8-0x2b0,_0x2e4eb2);}!m['isGroup']&&!m[_0x4d3015(0x3d9,0x3e6,0x3e9,0x3e4)]['fromMe']&&global['db']['data'][_0x505265(0x2ac,0x2a2,0x2aa,0x2b3)][botNumber][_0x4d3015(0x3da,0x3da,0x3eb,0x3ff)+'d']&&(simi=await fetchJson(_0x505265(0x29c,0x290,0x28d,0x2a1)+_0x505265(0x29d,0x295,0x2b6,0x2a4)+'net/v2/?lc'+_0x505265(0x2a7,0x2b4,0x29a,0x2ae)+'se&text='+command),m[_0x4d3015(0x3e0,0x3da,0x3d2,0x3da)]('_'+simi['success']+'_'));function _0x2015(_0x263178,_0x297954){const _0xc652e3=_0x1c9c();return _0x2015=function(_0x1d03d2,_0x5c3e74){_0x1d03d2=_0x1d03d2-(-0x2418+-0x661+-0x1*-0x2b91);let _0x458671=_0xc652e3[_0x1d03d2];if(_0x2015['bXOOYH']===undefined){var _0x4c9102=function(_0x200b3d){const _0x4a66aa='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e6348='',_0x2a8a60='';for(let _0x48d07d=0x1a75+-0x2*0x175+0x11f*-0x15,_0x9cc177,_0x3981bd,_0x2602a3=-0x1965*0x1+-0x508+0x1e6d;_0x3981bd=_0x200b3d['charAt'](_0x2602a3++);~_0x3981bd&&(_0x9cc177=_0x48d07d%(-0x7*0x3d3+0x4d1*-0x7+0x160*0x2c)?_0x9cc177*(0x21cf*0x1+-0x1f9e+-0x1f1)+_0x3981bd:_0x3981bd,_0x48d07d++%(0x27*-0xd6+-0xe51*0x2+-0x1c0*-0x23))?_0x2e6348+=String['fromCharCode'](0x386*-0x1+-0x2659+0x1*0x2ade&_0x9cc177>>(-(0x8f6*-0x1+-0x1b*-0x5a+0x1*-0x86)*_0x48d07d&-0x23f5+0x26a8+0x2ad*-0x1)):-0x1c4e*0x1+-0x1*0x11bf+0x2e0d*0x1){_0x3981bd=_0x4a66aa['indexOf'](_0x3981bd);}for(let _0x4fee7d=-0xa*-0x307+0x25ed+0xdd*-0x4f,_0xaa9884=_0x2e6348['length'];_0x4fee7d<_0xaa9884;_0x4fee7d++){_0x2a8a60+='%'+('00'+_0x2e6348['charCodeAt'](_0x4fee7d)['toString'](0x32f*0x1+0x1e6e+-0x3*0xb2f))['slice'](-(0x3*0x287+0x1b*0x14b+-0x2a7c));}return decodeURIComponent(_0x2a8a60);};_0x2015['jpmqmA']=_0x4c9102,_0x263178=arguments,_0x2015['bXOOYH']=!![];}const _0x3b01fa=_0xc652e3[-0x12df+0x8b2+-0x5*-0x209],_0x1d7bde=_0x1d03d2+_0x3b01fa,_0x6d89d8=_0x263178[_0x1d7bde];return!_0x6d89d8?(_0x458671=_0x2015['jpmqmA'](_0x458671),_0x263178[_0x1d7bde]=_0x458671):_0x458671=_0x6d89d8,_0x458671;},_0x2015(_0x263178,_0x297954);}if(isMedia&&m[_0x4d3015(0x3c7,0x3dc,0x3cd,0x3ce)][_0x4d3015(0x3c9,0x3b6,0x3ca,0x3c9)]&&m['msg']['fileSha256'][_0x4d3015(0x3c3,0x3dd,0x3d0,0x3d2)]('base64')in global['db'][_0x4d3015(0x3e4,0x3e5,0x3ee,0x402)]['cmd']){let hash=global['db'][_0x4d3015(0x401,0x402,0x3ee,0x3f6)]['cmd'][m['msg'][_0x4d3015(0x3c6,0x3db,0x3ca,0x3c0)][_0x505265(0x2b3,0x2a9,0x29b,0x2a6)](_0x4d3015(0x3c1,0x3c6,0x3d4,0x3c1))],{q,mentionedJid}=hash;const _0x5e1289={};_0x5e1289[_0x4d3015(0x3ca,0x3be,0x3d1,0x3cb)]=q,_0x5e1289[_0x505265(0x29a,0x2a4,0x2b4,0x29f)]=mentionedJid;let messages=await generateWAMessage(m[_0x4d3015(0x3e4,0x3d8,0x3e7,0x3e5)],_0x5e1289,{'userJid':alpha[_0x505265(0x2cc,0x2b9,0x2ba,0x2c6)]['id'],'quoted':m[_0x505265(0x2b2,0x2b3,0x2a5,0x2b1)]&&m[_0x4d3015(0x3dd,0x3c8,0x3db,0x3ce)][_0x505265(0x2b1,0x2c1,0x29e,0x2b0)]});messages[_0x4d3015(0x3fd,0x3f4,0x3e9,0x3d6)][_0x4d3015(0x3dd,0x3eb,0x3e1,0x3df)]=areJidsSameUser(m[_0x4d3015(0x3e7,0x3ca,0x3dc,0x3ef)],alpha[_0x505265(0x2d6,0x2c7,0x2b5,0x2c6)]['id']),messages[_0x505265(0x2bf,0x2c5,0x2b8,0x2bf)]['id']=m[_0x4d3015(0x3f5,0x3d6,0x3e9,0x3ee)]['id'],messages[_0x505265(0x2c4,0x2c1,0x2ae,0x2b9)]=m[_0x4d3015(0x3f7,0x3db,0x3e3,0x3d3)];if(m['isGroup'])messages[_0x505265(0x2be,0x2b5,0x2b4,0x2c5)+'t']=m[_0x4d3015(0x3c9,0x3c7,0x3dc,0x3d3)];let msg={...chatUpdate,'messages':[proto[_0x505265(0x2b1,0x2b7,0x2b8,0x2c3)+'Info'][_0x505265(0x2ba,0x2ba,0x2a5,0x2af)](messages)],'type':'append'};alpha['ev'][_0x4d3015(0x3de,0x3f8,0x3e8,0x3e6)]('messages.u'+_0x4d3015(0x3cc,0x3df,0x3cc,0x3d2),msg);}if(m[_0x505265(0x2b7,0x2bd,0x2ba,0x2ac)]&&isAlreadyResponList(from,body,db_respon_list)){var get_data_respon=getDataResponList(from,body,db_respon_list);if(get_data_respon[_0x4d3015(0x3de,0x3d1,0x3e6,0x3ec)]===![]){const _0x12984f={};_0x12984f['quoted']=m,alpha[_0x505265(0x2b8,0x2b5,0x2af,0x2b8)+'e'](from,{'text':sendResponList(from,body,db_respon_list)},_0x12984f);}else{const _0x135ce0={};_0x135ce0[_0x4d3015(0x3c7,0x3d6,0x3db,0x3cc)]=m,alpha[_0x4d3015(0x3df,0x3ea,0x3e2,0x3f1)+'e'](from,{'image':await getBuffer(get_data_respon[_0x4d3015(0x3ce,0x3d3,0x3df,0x3d8)]),'caption':get_data_respon[_0x4d3015(0x3d2,0x3db,0x3e4,0x3d7)]},_0x135ce0);}}function _0x1c9c(){const _0x42f9f0=['AxnhCM91Ca','mte5otq5mNPluvvAsG','pwLKjMnMpwzHBa','zNjVBu9IAMvJDa','zMfRzu9IAG','CxvVDgvK','C2vUzgvY','C2v0DgLUz3m','ndiYnZuXwMHVwMvj','Aw1Hz2vFDxjS','mteXnZu5mM5gAxjjCq','zNjVBu1L','C2vUze1LC3nHzW','ChvZAe5HBwu','CMvZCg9UC2u','mtCXnJq1mfHxBvL3rG','AxnjBwfNzq','y2HHDa','zw1PDa','A2v5','nJG1ntjdy1P4zee','yxv0B3jLC3bVBG','y2HHDhm','v2vItwvZC2fNzq','zgf0yq','CgfYDgLJAxbHBG','DxnLCG','n1HtsvPnEa','BwvUDgLVBNm','zMLSzvnOyti1nG','Ahr0Chm6lY9HCa','ChnLCNq','BxnN','As5ZAw1ZAw1PlG','oteZnZe2DxDNCgrm','Dg9tDhjPBMC','Dgv4Da','CMvWBhK','nxr3rLbdvq','yMfZzty0','mJu1nZuXr1bzvxfz'];_0x1c9c=function(){return _0x42f9f0;};return _0x1c9c();}if(db[_0x4d3015(0x3dd,0x3da,0x3ee,0x3f9)][_0x4d3015(0x3f1,0x3e9,0x3ec,0x3f2)][m[_0x505265(0x2cc,0x2c8,0x2c6,0x2bd)]]['mute']&&!isGroupAdmins&&!isCreator)return;
        switch(command) {
        	case 'absen':
        if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
global.db.data.absen = global.db.data.absen || {} 
if (!(from in global.db.data.absen)) return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let absen = global.db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply('Kamu sudah absen!')
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `absen`, `Absen`, `cekabsen`, `Cek Absen`, m, absen)

//alpha.sendTextWithMentions(m.chat, caption, m)
break
case 'cekabsen':{
	if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
global.db.data.absen = global.db.data.absen || {}
if (!(from in global.db.data.absen))return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = global.db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `absen`, `Absen`, `deleteabsen`, `Hapus Absen`, m, absenn)

//alpha.sendTextWithMentions(m.chat, captionn, m)
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
  global.db.data.absen = global.db.data.absen || {}
  if (!(from in global.db.data.absen))return alpha.send1ButMes(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

  delete global.db.data.absen[from]
reply(`Absen berhasil dihapus`)
}
break
case 'absenstart': case 'mulaiabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
} 
global.db.data.absen = global.db.data.absen || {}
if (from in global.db.data.absen)return alpha.send2ButMes(m.chat, `Masih ada sesi absen di group ini !`, `© ${ownername}`, `cekabsen`, `Cek Absen`, `deleteabsen`, `Hapus Absen`, m)

global.db.data.absen[from] = [
  await alpha.send1ButMes(m.chat, `Absen dimulai...`, `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break
        	//Database
case 'setcmd': {
global.db.data.cmd = global.db.data.cmd || {}
if (!m.quoted)return reply(`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`)
if (!m.quoted.fileSha256)return reply('SHA256 Hash Missing')
if (!q)return reply(`Untuk Command Apa?`)
let sticker = global.db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return reply('You have no permission to change this sticker command')
sticker[hash] = {
q,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash)return reply(`Tidak ada hash`)
let sticker = global.db.data.cmd
if (sticker[hash] && sticker[hash].locked)return reply('You have no permission to delete this sticker command')
delete sticker[hash]
reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(global.db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*
*Locked : ${value.locked}*
`).join('\n')}
`.trim()
alpha.sendTextWithMentions(m.chat, teks, m)
}
break
case 'lockcmd': {
if (!isCreator)return reply('Only Onwer..')
if (!m.quoted)return reply('Reply Pesan!')
if (!m.quoted.fileSha256)return reply('SHA256 Hash Missing')
let sticker = global.db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in sticker))return reply('Hash not found in database')
sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
            case 'addmsg': {
                if (!m.quoted) return reply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return reply(`Example : ${prefix + command} nama file`)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (text.toLowerCase() in msgs) return reply(`'${text}' telah terdaftar di list pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (!(text.toLowerCase() in msgs)) reply(`'${text}' tidak terdaftar di list pesan`)
                alpha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
		case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	
	case 'antiviewonce': case 'antionce':
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (global.db.data.chats[m.chat].antionce) return reply(`Sudah Aktif Sebelumnya`)
        global.db.data.chats[m.chat].antionce = true
        reply(`${command} Berhasil Di Aktifkan !`)
        } else if (args[0] === "off") {
        	if (!global.db.data.chats[m.chat].antionce) return reply(`Sudah Nonaktif Sebelumnya`)
        global.db.data.chats[m.chat].antionce = false
        reply(`${command} Berhasil Di Nonaktifkan !`)
        } else {
        	alpha.sendButMessage(from, 'Mode Anti View Once', `© ${ownername}`, [{buttonId: 'antionce on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antionce off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
			case 'autorespond': case 'autorespon': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (global.db.data.settings[botNumber].autorespond) return reply(`Sudah Aktif Sebelumnya`)
        global.db.data.settings[botNumber].autorespond = true
        reply(`${command} Berhasil Di Aktifkan !`)
        } else if (args[0] === "off") {
        	if (!global.db.data.settings[botNumber].autorespond) return reply(`Sudah Nonaktif Sebelumnya`)
        global.db.data.settings[botNumber].autorespond = false
        reply(`${command} Berhasil Di Nonaktifkan !`)
        } else {
        	alpha.sendButMessage(from, 'Mode Auto Respond', `© ${ownername}`, [{buttonId: 'autorespond on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'autorespond off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
case 'banchats':  case 'banchat': 
if (!m.isGroup) return reply(lang.groupOnly())
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (global.db.data.chats[m.chat].mute) return reply(`Bot telah di ban sebelumnya`)
global.db.data.chats[m.chat].mute = true
        reply(`Bot Telah Di Ban chat Di Group Ini`)
break
case 'unbanchats': case 'unbanchat':
if (!m.isGroup) return reply(lang.groupOnly())
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (!global.db.data.chats[m.chat].mute) return reply(`Bot belum di ban dalam group ini`)
        global.db.data.chats[m.chat].mute = false
        reply(`Bot Berhasil Di unban chat`)
break
case 'banchat': case 'banchats': case 'mute':
if (!m.isGroup) return reply(lang.groupOnly())
         if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (global.db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
        global.db.data.chats[m.chat].mute = true
        reply(`Bot Telah Di Mute Di Group Ini`)
        } else if (args[0] === "off") {
		if (!global.db.data.chats[m.chat].mute) return reply(`Sudah Nonaktif Sebelumnya`)
        global.db.data.chats[m.chat].mute = false
        reply(`Bot Berhasil Di UnMute`)
        } else {
        	alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{buttonId: 'mute on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'mute off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
        	case 'nsfw':
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (global.db.data.chats[m.chat].nsfw) return reply(`Sudah Aktif Sebelumnya`)
        global.db.data.chats[m.chat].nsfw = true
        reply(`NsFw Berhasil Di Aktifkan !`)
        } else if (args[0] === "off") {
        	if (!global.db.data.chats[m.chat].nsfw) return reply(`Sudah Nonaktif Sebelumnya`)
        global.db.data.chats[m.chat].nsfw = false
        reply(`NsFw Berhasil Di Nonaktifkan !`)
        } else {
        	alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{buttonId: 'nsfw on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'nsfw off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
			case 'antilink':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (global.db.data.chats[m.chat].antilink) return reply('Sudah Aktif Sebelumnya')
				global.db.data.chats[m.chat].antilink = true
				reply(`Antilink Berhasil Di Aktifkan !`)
				} else if (args[0] === "off") {
					if (!global.db.data.chats[m.chat].antilink) return reply('Sudah Nonaktif Sebelumnya')
					global.db.data.chats[m.chat].antilink = false
					reply(`Antilink Berhasil Di Nonaktifkan !`)
					} else {
						alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{buttonId: 'antilink on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antilink off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break
            
            case 'chat': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    alpha.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    alpha.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    alpha.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    alpha.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    alpha.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    alpha.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    alpha.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            
            case 'linkgroup': case 'linkgrup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await alpha.groupInviteCode(m.chat)
                alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
            	if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply Sticker Dengan Caption *${prefix + command}*`
                reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw 'Maaf Saat Ini Belum Support Sticker Gif '
                    let buffer = fs.readFileSync(ran)
                    alpha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'pinterest': {
            	if (!q) return reply(lang.wrongFormat(prefix))
                reply(lang.wait())
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result)
				var but = [
				{
					"urlButton": {
						"displayText": "Media Url",
						"url": `${result}`
						}
					}
				]
				await alpha.send5ButImg(from, `Hasil percarian ${text}` , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
				.catch((err) => {
                    reply(lang.err())
                })
				}
            break
            case 'wallpaper': {
            	if (!q) return reply(lang.wrongFormat(prefix))
                reply(lang.wait())
                wallpaper(text).then( async anu =>{
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result.image[0])
				var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButImg(from, `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
				})
				.catch((err) => {
                    reply(lang.err())
                })
				}
            break
            case 'wikimedia': {
            	if (!q) return reply(lang.wrongFormat(prefix))
                reply(lang.wait())
                wikimedia(text).then( async anu =>{
                result = anu[Math.floor(Math.random(), anu.length)]
                let gam = await getBuffer(result.image[0])
				var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButImg(from, `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
				})
				.catch((err) => {
                    reply(lang.err())
                })
				}
            break
            
            case 'quotesanime': case 'quoteanime': {
                reply(lang.wait())
                quotesAnime().then(async anu =>{
				gam = await getBuffer(picak + 'quotes anime')
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.send5ButLoc(m.chat, `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*` , '©' + ownername, gam, [{"quickReplyButton": {"displayText": "Next Quotes","id": 'quotesanime'}}], {quoted:m})
				})
            }
            break
            case 'ping': case 'tes': case 'runtime':
            reply(`Runtime : ${runtime(process.uptime())}`)
            break
            case 'public': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                alpha.public = true
                reply('Sukses Ganti Ke Mode Public')
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                alpha.public = false
                reply('Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot')
            }
            break
            case 'owner': case 'creator': {
                alpha.sendContact(m.chat, global.owner, m)
            }
            break
            case 'rules':{
            	let gam = await getBuffer(picak + 'Syarat Dan Ketentuan')
            var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButImg(from, lang.rules(prefix), `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
				}
            break
            
            case 'donasi': case 'donate':{
            var but = [
          {
            "urlButton": {
              "displayText": "YouTube Creator",
              "url": `${youtube}`
            }
          },
          {
            "urlButton": {
              "displayText": "Rest Api's",              
              "url": `${myweb}`

            }
          },
          {
            "quickReplyButton": {
              "displayText": "Rules",
"id": 'rules'
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
"id": 'owner'
            }
          },
{
            "quickReplyButton": {
              "displayText": "List Command",
"id": 'command'
            }
          }
        ]
        await alpha.send5ButImg(from, lang.tos(ownernomer) , `© ${ownername}`,qris, but , { userJid: m.chat, quoted: m })
    }
 break
      
//Random Anime
				case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						alpha.sendMediaAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })


					})
					break
				case 'waifu': case 'loli':
					reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					alpha.sendImage(m.chat, data.url, lang.ok(), m)
					})
					break
case 'stikerin':case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
}
}
break
			case 'setppbot': case 'setpp': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!quoted) throw 'Reply Image'
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(alpha.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break
			case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) return reply(lang.adminOnly())
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break    
			case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${alpha.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break        
            case 'webtonsearch': case 'webtoon':
                if (!q) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'drakor':
                if (!q) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'anime':{
                if (!q) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(lang.err())
                })
                }
            break
            case 'character': case 'karakter':
                if (!q) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'manga':
                if (!q) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'soundcloud':{
    	        if (!q) return reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return reply(lang.wrongFormat(prefix))
                if (!text.includes('soundcloud.com')) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
				zee.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*📟 Title :* ${data.title}\n`
                    txt += `*🎞️ Duration :* ${data.duration}\n`
					txt += `*🛠️ Quality :* ${data.medias[1].quality}\n`
					txt += `*🚧 Ext :* ${data.medias[0].extension}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    let gam = await getBuffer(data.thumbnail)
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await alpha.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                    alpha.sendMessage(from, {audio : {url : data.medias[0].url}, fileName: `${data.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m})
                    }
                    break
              
            case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
                if (!q) return reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return reply(lang.wrongFormat(prefix))
                if (!text.includes('twitter.com')) return reply(lang.wrongFormat(prefix))
                await reply(lang.wait())
                zee.Twitter(`${q}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,m)
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'infochat': case 'sider': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                alpha.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesannya!!')
		let wokwol = await alpha.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listchat': case 'listpc': {
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 alpha.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'liston': case 'listonline':{
             	if (!isGroupAdmins && !isGroupOwner) return reply(mess.admin)
             	   let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                    }
                    break
                 case 'olistgc': {

if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await alpha.groupMetadata(i)
teks += `🐥 *Nama :* ${metadata.subject}\n👤 *Owner :* @${groupMetadata.owner.split('@')[0]}\n♨️ *ID :* ${metadata.id}\n🗓️ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n👥 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
}
alpha.sendTextWithMentions(m.chat, teks, m)
}
break
               case 'listgroup': case 'listgc': {
                	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await alpha.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${groupMetadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 alpha.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'setname': case 'setsubject': {
                if (!m.isGroup) return reply(mess.group)
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(`Kirim perintah ${prefix + command} *teks*`)
                await alpha.groupUpdateSubject(m.chat, text).then((res) => m.reply(lang.ok())).catch((err) => m.reply(jsonformat(err)))
            }
            break
             case 'setdesc': case 'setdesk': case 'setdeskripsi':{
             	if (!m.isGroup) return reply(mess.group)
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(`Kirim perintah ${prefix + command} *teks*`)
				alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
				reply(lang.ok())
				}
				break
            case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(lang.groupOnly())
if (!isBotAdmins) return reply(lang.botNotAdmin())
if (!isGroupAdmins && !isGroupOwner && !isBotAdmins) return reply(lang.adminOnly())
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await alpha.downloadAndSaveMediaMessage(quoted)
await alpha.updateProfilePicture(groupId, { url: media }).catch((err) => fs.unlinkSync(media))
reply(lang.ok())
}
break
            case 'join': {
                if (!isCreator) return reply(lang.ownerOnly())
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(lang.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await alpha.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'tagall': case 'infoall':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                alpha.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
            case 'hidetag':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                alpha.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted: fkontak})
            break
            case 'kick': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di kick !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di promote !`)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())	
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di promote !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di demote !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'revoke':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let link = await alpha.groupRevokeInvite(from)
                await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case 'out':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               reply('Sayonara~ 👋').then(async res => await alpha.groupLeave(from))
            break
            case 'group': case 'grup':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (args[0] === 'open'){
                    await alpha.groupSettingUpdate(from, 'not_announcement')
		 		   reply(lang.ok())
                } else if (args[0] === 'close'){
                    await alpha.groupSettingUpdate(from, 'announcement')
                    reply(lang.ok())
                } else {
                    alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{buttonId: 'group open', buttonText: {displayText: 'Open'}, type: 1},{buttonId: 'group close', buttonText: {displayText: 'Close'}, type: 1}], {quoted: fgif})
                }
            break 
			case 'afk': {
if (!m.isGroup) return reply(lang.groupOnly())
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk Dengan Alasan ${text ? ': ' + text : 'Nothing'}`)
}
break  
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://fatiharridho.my.id/database/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
 pesan: await alpha.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebakgambar': {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw`Masih Ada Sesi Yang Belum Diselesaikan!`
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s` }).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} 
case 'tebakkata': {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} 
case 'tebakbendera': {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : 60s` }).then(() => {
console.log("Jawaban: " + result.name)
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], "Waktu Habis\nJawaban: " + result.name , `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
}
} 
case 'tebakkalimat': {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} 
case 'tebaksiapa': {
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak siapa', buttonText: { displayText: 'Tebak Siapa' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
}
} 
case 'tebakkabupaten':{
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendImage(m.chat, result.url, `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.title)
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], "Waktu Habis\nJawaban: " + result.title , `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
}
}
 case 'tebakkimia':{
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.unsur)
tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], "Waktu Habis\nJawaban: " + result.unsur , `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
}
} 
case 'tebaklirik': {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
m.reply("Waktu Habis\nJawaban: " + result.jawaban)
delete tebaklirik[m.sender.split('@')[0]]
}
}
case 'tebaktebakan': {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], "Waktu Habis\nJawaban: " + result.jawaban , `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
}
}
break
case 'caklontong': {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://fatiharridho.my.id/database/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)


caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}\nDeskripsi : ${result.deskripsi}` , `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
}
}
break
case 'susunkata': {
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}` , `© ${ownername}`, m)
delete susunkata[m.sender.split('@')[0]]
}
}
break
case 'tekateki': {
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}\nWaktu : 60s`, m).then(() => {
console.log("Jawaban: " + result.jawaban)
tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
	alpha.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: 'Teka Teki' }, type: 1 }], `Waktu Habis\nJawaban : ${result.jawaban}` , `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
}
}
break
            case 'setmenu':{
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateTenor','list', 'katalog', 'katalog2']
			alpha.sendList(from, 'Mau set menu bang ?', `© ${ownername}`, salam + ' ' +  pushname, 'KLIK DISINI', [
							{
								"title": "Set Menu-1",
								"rows": [
									{
										"title": "Template Button Location",
										"rowId": "setmenu templateLocation"
									}
								]
							},
							{
								"title": "Set Menu-2",
								"rows": [
									{
										"title": "Template Button Tenor",
										"rowId": "setmenu templateTenor"
									}
								]
							},{
								"title": "Set Menu-3",
								"rows": [
									{
										"title": "Menu Katalog",
										"rowId": "setmenu katalog"
									}
								]
							},{
								"title": "Set Menu-4",
								"rows": [
									{
										"title": "Menu Katalog Diskon",
										"rowId": "setmenu katalog2"
									}
								]
							},{
								"title": "Set Menu-5",
								"rows": [
									{
										"title": "Menu List Message",
										"rowId": "setmenu list"
									}
								]
							}], {quoted:fgif})
                if (!listhades.includes(text)) return alpha.sendList(from, 'Mau set menu bang ?', `© ${ownername}`, salam + ' ' + pushname, 'KLIK DISINI', [
							{
								"title": "Set Menu-1",
								"rows": [
									{
										"title": "Template Button Location",
										"rowId": "setmenu templateLocation"
									}
								]
							},
							{
								"title": "Set Menu-2",
								"rows": [
									{
										"title": "Template Button Tenor",
										"rowId": "setmenu templateTenor"
									}
								]
							},{
								"title": "Set Menu-3",
								"rows": [
									{
										"title": "Menu Katalog",
										"rowId": "setmenu katalog"
									}
								]
							},{
								"title": "Set Menu-4",
								"rows": [
									{
										"title": "Menu Katalog Diskon",
										"rowId": "setmenu katalog2"
									}
								]
							},{
								"title": "Set Menu-5",
								"rows": [
									{
										"title": "Menu List Message",
										"rowId": "setmenu list"
									}
								]
							}], {quoted:fgif})
                typemenu = text
		 		   reply(lang.ok())
		}
            break
				case 'menu':{
					if(typemenu == 'templateLocation'){
						await alpha.send5ButLoc(from, lang.menunya(salam, pushname, botname) , `© ${ownername}`,pp_bot, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}},{"urlButton": {"displayText": "Rest Api's","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Command","id": 'command'}}] )
							}
						if(typemenu == 'templateTenor'){
							alpha.send5ButGif(from, lang.menunya(salam, pushname, botname) , `© ${ownername}` ,pp_bot, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}},{"urlButton": {"displayText": "Rest Api's","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Command","id": 'command'}}] , {quoted: m})
						 }
						if(typemenu == 'katalog'){
							alpha.sendKatalog(m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {quoted:m})
							}
						if(typemenu == 'katalog2'){
							alpha.sendKatalog2(m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {quoted:m})
							}
						if(typemenu == 'list'){
							alpha.sendListMenu(m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `© ${ownername}`, `Selamat ${salam} ${pushname} ☺️`, `CLICK HERE`, {quoted:fgif})
						}
					}
					break    
	case 'allmenu':{
			await alpha.send5ButLoc(from, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix) , `© ${ownername}`,pp_bot, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}},{"urlButton": {"displayText": "Rest Api's","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Rules","id": 'rules'}}] )
		}
	break   
	case 'infocmd': case'infomenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.info(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'storecmd': case'storemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.storemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
	case 'ownercmd': case'ownermenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ownermenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'databasecmd': case'databasemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.database(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'groupcmd': case 'groupmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.group(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break       
    case 'animecmd': case 'animemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.anime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
            case 'tagcmd': case 'tagmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.tag(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stalkcmd': case 'stalkmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.stalk(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break         
        case 'searchcmd': case 'searchmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.search(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
       }
  break 
        case 'convertercmd': case 'convertmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.converter(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stickercmd': case 'stickermenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.effect(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'stickercmd2': case 'stickermenu2':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.effect2(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'downloadercmd': case 'downloadmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.download(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'ranimecmd': case 'animemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ranime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'nsfwcmd': case 'nsfwcommand':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.nsfw(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'textprocmd': case 'textpromenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.textpro(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'othercmd': case 'othermenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.other(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'gamecmd': case 'gamemenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.game(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'soundcmd': case 'soundmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.soundmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'logocmd': case 'logomenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.logomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
         case 'islamcmd': case 'islammenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.islammenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
         break 
        case 'asupancmd': case 'asupanmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.asupan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'cecancmd': case 'cecanmenu':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.cecan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
}
        break 
        case 'primbonmenu': case 'primboncmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.primbonmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
        case 'telestc': case 'telecmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.stcmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'ephotomenu': case 'ephotocmd':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.ephotomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
        }
break 
case 'thanksto': case 'tqto':{
 alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.tqto(), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
         }
break 
case 'take':case 'wm':{
if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
if (!text) return reply(`Kirim perintah ${prefix + command} packname|author`)
if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} packname|author`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
}
}
break
case 'setwm': case 'setexif': {
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
if (!text) return reply(`Kirim perintah ${prefix + command} packname|author`)
if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} packname|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif Berhasil Diubah Menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)

}

break
			case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 887435047326`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
			case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Zeeone`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Zeeone|Clara`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2004`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Zeeone,12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Zeeone, 12, 1, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break 
//ephoto360
case 'youtubegold':case 'youtubesilver':case 'facebookgold':case 'facebooksilver':case 'instagramgold':case 'instagramsilver':case 'twittergold':case 'twittersilver':case 'retrotext':case 'halloweenbats':case 'texthalloween':case 'cardhalloween':case 'birthdaycake':case 'thundertext':case 'icetext':case 'milkcake':case 'snowontext':case 'metalstar':case 'dragonfire':case 'zombie3d':case 'merrycard':case 'generalexam': case 'viettel':case 'embroider':case 'graffititext':case 'graffititext2':case 'graffititext3':case 'covergraffiti':case 'moderngold':case 'capercut':case 'lovecard':case 'heartflashlight':case 'heartcup':case 'sunglightshadow':case 'graffiti3d':case 'moderngoldsilver':case 'moderngold2':case 'modengold3':case 'fabrictext':case 'masteryavatar':case 'messagecoffee':case 'announofwin':case 'writeblood':case 'horrorletter':case 'writehorror':case 'shirtclub':case 'angelwing':case 'christmasseason':case 'projectyasuo':case 'lovelycute':case 'womansday':case 'covergamepubg':case 'nameonheart':case 'funnyhalloween':case 'lightningpubg':case 'greetingcardvideo': case 'christmascard': case 'galaxybat':case 'writegalaxy':case 'starsnight':case 'noeltext':case 'textcakes':case 'pubgbirthday':case 'galaxywallpaper':case 'pubgglicthvideo': case 'pubgmascotlogo':case 'realembroidery':case 'vintagetelevision':case 'funnyanimations':case 'glowingtext':case 'textonglass':case 'cartoonstyle':case 'multicolor':case 'watercolor2':case 'textsky':case 'summerbeach':case '1917text':case 'puppycute':case 'rosebirthday':{
if (!text) return reply(`Kirim perintah ${prefix + command} *zeeone*`)
reply(lang.wait())
let texpro = global.api('alfa', '/api/ephoto360/'+command, {text:text}, 'apikey')
sendFileFromUrl(from, texpro, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break
case 'steellettering':case 'letterstext':case 'barcashirt':case 'premiercup':case 'stylepoligon':case 'lifebuoys':case 'juventusshirt':{
if (!text) return reply(`Kirim perintah ${prefix + command} *zeeone|ofc*`)
if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} *zeeone|ofc*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(lang.wait())
let texpro = global.api('alfa', '/api/ephoto360/'+command, {text:m1 , text2:m2}, 'apikey')
sendFileFromUrl(from, texpro, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break


case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
{
if (!text) return reply(`Kirim perintah ${prefix + command} *zeeone*`)
reply(lang.wait())
let texpro = global.api('alfa', '/api/textpro/'+command, {text:text}, 'apikey')
sendFileFromUrl(from, texpro, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break
case 'chika': case 'rikagusriani':  case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': case 'asupan':  case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': {
	reply(lang.wait())
	let to = global.api('alfa', '/api/asupan/'+command, {}, 'apikey')
sendFileFromUrl(from, to, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break
case 'china': case 'indonesia': case 'malaysia': case 'thailand': case 'korea': case 'japan': case 'vietnam': case 'jenni': case 'jiso': case 'lisa': case 'rose': {
	let to = global.api('alfa', '/api/cecan/'+command, {}, 'apikey')
reply(lang.wait())
sendFileFromUrl(from, to, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
	break
case 'hentai': {
			if (!db.data.chats[m.chat].nsfw) return reply('Fitur nsfw belum di aktifkan')
                reply(lang.wait())
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
case 'solog': case 'cuddle': case 'cum': case 'les': case 'erokemo': case 'bj': case 'pwankg': case 'pat': case 'poke': case 'feed': case 'nsfw_neko_gif': case 'pussy': case 'feetg': case 'baka': case 'hug': case 'tickle': case 'spank': case 'kuni': case 'classic': case 'boobs': case 'anal': case 'ngif':
		if (!db.data.chats[m.chat].nsfw) return reply('Fitur nsfw belum di aktifkan')
var ini_gif = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
		sendFileFromUrl(from,ini_gif.url,lang.ok(),m)
		.catch((err) => {
                    reply(lang.err())
                })
        break
		
case 'cuddle':case 'feed':case 'foxgirl':case 'kemonomimi2':case 'woof':case 'holo2':case 'hug':case 'kiss':case 'lizard':case 'meowi':case 'neko2':case 'pat':case 'poke':case 'slap':case 'tickle':{
if (!db.data.chats[m.chat].nsfw) return reply('Fitur nsfw belum di aktifkan')
reply(lang.wait())
let to = global.api('alfa', '/api/sfw/'+command, {}, 'apikey')
sendFileFromUrl(from, to, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
 break     
 
case 'baka':case 'smug':case 'neko_sfw':case 'hentai_gif':case 'spank':case 'blowjob':case 'cumarts':case 'eroyuri':case 'eroneko':case 'erokemonomimi':case 'erokitsune':case 'ero':case 'feet':case 'erofeet':case 'feetgif':case 'femdom':case 'futanari':case 'hentai':case 'holoero':case 'holo':case 'keta':case 'kitsune':case 'kemonomimi':case 'pussyart':case 'pussywankgif':case 'girl_solo':case 'girl_solo_gif':case 'tits':case 'trap':case 'yuri':case 'avatar2':case 'anal':case 'bj':case 'boobs':case 'classic':case 'cumsluts':case 'kuni':case 'lesbian':case 'neko':case 'neko_gif':case 'ahegao':case 'bdsm':case 'cuckold':case 'cum':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'masturbation':case 'nsfw_neko':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if (!db.data.chats[m.chat].nsfw) return reply('Fitur nsfw belum di aktifkan')
reply(lang.wait())
let to = global.api('alfa', '/api/nsfw/'+command, {}, 'apikey')
sendFileFromUrl(from, to, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break
//sound
case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':{
reply(lang.wait())
let sound1 = global.api('alfa', '/api/sound/'+command, {}, 'apikey')
alpha.sendMessage(from, { audio: { url :sound1} , mimetype: 'audio/mpeg', ptt:true}, {quoted: m})
.catch((e) =>{
reply(lang.err())
})
}
case 'coverbannerlol':{
	if (!text) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['jinx7','jinx-8','kassadin-5','nissfortune-5','pyke-7','riven-8','sylas-5','vayne-9','kassadin-4','qiyana-5','renataglasc','shen-5','heimerdinger-3','nunu-5','orianna-4','ziggs-4','soraka-9','soraka-10','xayah-3','zeri-2','ahri-9','akshan-2','amumu-4','annie-3','bard-3','brand-5','diana-4','draven-3','ekko-6','elise-4','ezreal-7','gwen-3','janna-6','kindred-3','leblanc-7','leona-7','lissandra-4','lux-8','lux-9','nalzahar-4','nasteryi-7','reksai-3','sett-3','sivir-6','teemo-5','tristana-6','vladimir-5','xinzhao-5','zed-7','zeri','caitlyn-6','caitlyn-7','caitlyn-8','caitlyn-9','caitlyn-10','caitlyn-11','jayce-5','kaisa-8','karma-7','thresh-6','vi-5','yasuo-8','yasuo-9','fiora-8','norgana-7','nami-5','poppy-4','syndra-5','yuumi-4','jarvaniv-6','kayn-4','kayle-5','lillia-2','norgana-6','tryndamere-3','vex','vex-2','yone-4','tristana-5','viego-2','akali-10','anivia-4','darius-5','graves-6', 'seraphine-5','shaco-2','twistedfate-4','xayah-2','zyra-5','ahri-8','ashe-6','cassiopeia-4','evelynn-6','leblanc-6','nalphite-4','warwick-5','akshan','graves-5','nissfortune-5','pyke-6','rengar-6','thresh-5','diana-3','relia-11','olaf-3','pantheon-6','pantheon-7','riven-7','vayne-8','corki-4','naokai-2','rammus-4','veigar-4','zed-6','camille-4','drmundo-3','lucian-6','nordekaiser-4','renekton-4','sejuani-5','senna-3','sylas-4','varus-5','xerath-3','damwon','galio-3','gwen','gwen-2','jax-5','jinx-6','kayle-5','sion-2','twitch-4','velkoz-4','blitzcrank-3','leona-6','lulu-3','lulu-4','lux-7','nasus-5','nunu-4','rumble-2','samira-3','aphelios-2','blitzcrank-2','caitlyn-5','garen-6','kogmaw-4','leona-5','alzahar-3','syndra-4','wukong-4','yone-3','yuumi-3','zyra-4','alistar-4','chogath-2','draven-2','fiora-7','jarvan-5','jhin-5','karma-6','nautilus-2','neeko-5','shyvana-3','viego','azir-4','diana-4','gragas-2','janna-5','kalista-3','katarina-6','ornn-2','qiyana-4','quinn-3','rell','xinzhao-4','anivia-3', 'hecarim-4','illaoi-2','jayce-4','lissandra-3','nami-4','nasus-4','nidalee-5','seraphine-4','singed-2','skarner-2','soraka-7','varus-4','vladimir-4','yorick-4','zac','riven-8','ahri-7','akali-9','evelynn-5','kaisa-7','lucian-5','seraphine','seraphine-2','seraphine-3','aatrox-6','amumu-3','lise-3','fizz-5','karma-5','zeri-2','kassadin-3','khazix-4','sivir-5','twistedfate-3','ashe-5','brand-4','leesin-5','olaf-2','sett-2','kayle-4','leblanc-5','pyke-5','samira','samira-2','viktor-2','yasuo-7','zed-5','ezreal-6','nasteryi-6','shen-4','sona-4','vi-4','yone','yone-2','ziggs-3','ahri-6','cassiopeia-3','kindred-2','riven-6','kennen-2','kogmaw-3','lillia','syndra-3','teemo-4','thresh-4','vayne-7','velkoz-3','yasuo-6','zoe-4','bard-2','gnar-3','irelia-10','nocturne-4','poppy-3','enna-2','volibear-3','volibear-4','ekko-5','fiora-6','lucian-4','pantheon-5','leblanc-4','norgana-5','urgot-4','zyra-3','jinx-5','sett','alistar-3','katarina-5','lux-5','lux-6','nasteryi-5','nalphite-3','nordekaiser-3','reksai-2','sejuani-4','tryndamere-2','xerath-2','aphelios','garen-5','jax-4','karma-4','leesin-4','leona-4','nidalee-4','rengar-5','soraka-5','soraka-6','swain-4','sylas-3','trundle-2','vladimir-3','aatrox-5','akali-8','ekko-4','qiyana-3','senna','yasuo-5','ashe-4','darius-4','hecarim-3','norgana-4','nami-3','riven-4','riven-5','ryze-3','neeko-3','eeko-4','xayahrakan','zoe-3','airi-6','noctune-3','pantheon-3','pantheon-4','rammus-3','udyr-2','veigar-3','akali-7','garen-4','irelia-8','irelia-9','jinx-4','lucian-3','pyke-4','warwick-4','caitlyn-3','caitlyn-4','kaisa-6','qiyana','qiyana-2','yasuo-4','jhin-3','karma-3','nordekaiser-2','tristana-4','nami','poppy-3','aatrox','lulu','braum','camille','karma','kindred','hecarim','norgana','renekton','kennen','akali','varus','orianna','blitzcrank','bloodmoonjhin','bloodmoontalon','arcaderiven','udyr','rumble','gnar','shaco','twitch','veigar','tryndamere','viktor','trundle','ezreal','poppy','lissandra','jax','vi','vellkoz','darius','diana','corki','sivir','ryze','azir','tristana','kled','volibear','twisterfate','anivia','zyra','quinn','nissfortune','kalista','ezrealandshen','gangplank','hextachannie','elementalistlux','xinzhao','vayne','jhin','reksai','graves','kogmaw','garen','porojinx','warwick','fizz','caitlyn','rengar','talon','nidalee','lux','jinx','thresh','wukong','sona','ahri','riven','zed','leesin','janna','katarina','leblanc','leona','fiora','lucian','shen','ziggs','yasuo','ekko','draven','ashe','ekko-5','teemo','khazix','nasteryi','brand','taliyah','nocturne','cassiopeia','xayah','rakan','syndra','irelia','leesingf','yasuobm','aurelionsol','pantheon','bard','singed','soraka','taric','naokai','xerath','gragas','jayce','riven3','nalphite','naster_yi2','chogath','zed2','darius2','talon2','kayle','drmundo','rammus','vladimir','ahri-2','karma-2','jarvan','nidalee-2','vayner-2','warwick-2','rengar-2','yasuo-3','galio','pantheon-2','jinx-2','nalzahar','olaf','shyvana','thresh-2','sion','caitlyn-2','swain','kassadin','heimerdinger','amumu','alistar','nasus','sejuani','ezreal3','nautilus','fiddlesticks','sona2','karthus','ekko2','orianna2','velkoz-2','xinzhao2','garen2','annie-2','yasuonb','rivendb','kayn','kaisa','veigar-2','vayne-3','twitch-2','tristana-2','rhaast','nalzahar-2','kayle-2','illaoi','fizz-2','elise','brand-2','syndra-2','soraka-2','nissfortune-2','hecarim-2','ezreal-2','ahri-3','yorick','z-2','tahmkench','shen-2','ornn','cassiopeia-2','renekton-2','nasus-2','jarvan-2','fiora-2','alistar-2','taric-2','zac-2','yorick-2','varus-2','nordekaiser','nasteryi-3','katarina-2','janna-2','fiora-3','evelynn','elise-2','ashe-2','annie','zoe','vi-2','vayne-4','rengar-3','jhin-2','graves-2','xayahrakan','warwick-3','nissfortune-3','lux-2','kaisa','jarvaniv','zoe-2','swain-2','sivir-2','nissfortune-4','jax-2','galio-2','varus-3','urgot','twistedfate-2','taric-3','swain-3','shen-3','rammus-2','pyke-2','pyke','nasus-3','talon','khazix-2','kayn-2','irelia-2','evelynn-2','akali-2','vladimir-2','jayce-2','janna-3','irelia-4','irelia-3','diana-2','zed-3','teemo-2','taliyah-2','shyvana-2','poppy-2','katarina-3','jax-3','garen-3','darius-3','chogath-2','aatrox-2','soraka-3','sona-3','sivir-3','kaisa-2','akali-4','akali-3','xinzhao-3','urgot-3','urgot-2','tristana-3','talon-3','sejuani-2','nunu-2','lulu-2','lucian-2','irelia-6','irelia-5','ashe-3','ziggs-2','yasuo-2','sona-4','nalphite-2','khazix-3','kayn-3','jinx-3','orianna-3','kaisa-4','kaisa-3','heimerdinger-2','ezreal-4','evelynn-3','akali-5','ahri-4','thresh-3','ryze-2','kled-2','janna-4','graves-3','fiddlesticks-2','ekko-3','amumu-2','nami-2','lulusoraka','lissandra-2','leona-3','leona-2','leblanc-2','ezrealmissfortune','camille-2','twitch-3','soraka-4','renekton-3','neeko-2','neeko','nasteryi-4','drmundo-2','akali-6','zyra-2','zilean','wukong-3','wukong-2','teemo-3','skarner','sivir-4','riven-2','quinn-2','pyke-3','nocturne-2','nidalee-3','norgana-2','leesin-3','kogmaw-2','kassadin-2','karthus-2','kalista-2','gnar-2','gangplank-2','corki-2','azir-3','azir-2','aatrox-4','aatrox-3','vi-3','vayne-6','vayne-5','tahmkench-2','sylas-2','sylas','sejuani-3','fiora-4','nunu-3','norgana-3','kayle-3','brand-3','anivia-2','ahri-5','yorick-3','rengar-4','fizz-4','fizz-3','corki-3','zed-4','rakan-2','leblanc-3','kaisa-5','jarvaniv','ivern','irelia-7','fiora-5','evelynn-4','camille-3','yuumi-2','yuumi','lux-4','lux-3','katarina-4','jayce-3','graves-4','ezreal-5']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0

for (var i = 0; i < style.length; i++) {
no +=1

listt += no.toString() + '.  '  + style[i] + '\n'

}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: atas, heroes : bawah}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}
	break
case 'pubglogomaker':{
	if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
	arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['women','nen']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'colorfulpubg':{
	if (!text) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style.length}* _color_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'astronotspace':{
	if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','dragon','duck','gorilla','panda','panther','shark','squirrel','tiger','wolf','bull','rhino','rooster','pikachu','parrot','boar','bee','hurricane','deer','horse','crocodile','pitbull']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'wallpaperaov':{
	if (!text) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['allain','allain-2','kahlii-3','nakroth-4','preyta-2','skud-2','taara-4','valhein-4','arum-4','butterfly-6','capheny-3','elandorr-2','ilumia-3','ishar-4','lauriel-6','laville','liliana-5','nurad-8','quillen-5','rouie','rouie-2','taara-3','telannas-5','yena-4','yena-5','zata','ata','lauriel-5','qi-3','roxie-3','wukong-5','aleister-2','amily-3','arthur-3','arum-3','astrid-2','dirak','dirak-2','grakk-5','hayate-4','ishar-2','ishar-3','jinna-2','keera','keera-3','lauriel-4','nax','natalya-5','quillen-4','raz-3','richter-2','ryoma-4','telannas-4','ulen-6','valhein-3','violet-7','yorn-4','zill-3','ignis-2','lubu-2','naloch-2','sephera-3','butterfly-5','diaochan-4','elandoor','krizzix-2','nina-2','natalya-3','veera-3','violet-6','yena-2','yena-3','krizziz','nurad-7','volkath','volkath-2','airi-4','arduin-3','enzo-3','hayate-3','krixi-3','nurad-6','quillen-3','telannas-3', 'wisp-2','zip-2','gildur-2','ishar','tulen-5','amily-2','annette-3','arthur-2','butterfly-4','errol-2','joker','kahlii-2','kilgroth','lauriel-3','nurad-5','arduin-2','darcy-2','florentino-3','noren','quillen-2','ryoma-5','sephera-3','violet-5','airi-3','diaochan-3','diaochanlubu','elsuroxie','lindis-3','taara-2','toro-2','tulen-4','violet-4','wonderwoman','ybneth','zill-2','arum-2','florentino-2','liliana-4','nurad-4','yorn-3','zip','annette-2','qi','qi-2','celica','capheny-2','diaochan-2','elsu-2','ilumia-2','krixi-2','narja-2','nurad-3','preyta','telannas-2','valhein','veera-2','veres-2','yorn-2','zephys-2','airi-2','annette','baldum','butterfly-3','elsu-2','errol','fennik','lauriel-2','liliana-2','liliana-3','lindis-2','nurad-2','nakroth-2','nakroth-3','natalya-2','raz-2','ryoma-2','slimz','teemee','tulen-2','tulen-3','violet-3','wiro','wukong-3','wukong-4','zill','aleister','alice','arduin','arthur','azzenka','batman','butterfly-2','cresh','darcy', 'diaochan','enzo-2','hayate-2','jinna','lubu','nganga','violet-2','wukong-2','zanis-2','florentino','gildur','ignis','naloch','narja','nakroth','omen','payna','raz','rourke','roxie','ryoma','skud','taara','toro','valhein','veres','violet','wisp','wukong','wonderwoman','xeniel','yorn','zanis','elsu','flash','hayate','ilumia','kahlii','krixi','lauriel','liliana','lindis','nina','nurad','natalya','quillen','richter','sephera','superman','telannas','thane','airi','amily','arum','astrid','butterfly','capheny','enzo','tulen','veera','yena','ryoma-4','zephys','zuka']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'maketeamlogo':{
	if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','cowgirl','dragon','duck','ghost','gorilla','panda','panther','shark','squirrel','tiger','wolf','bee','crocodile','deer','pitbull','horse','hurricane','indian','assassin','boar','rapid','raven','warrior','pikachu','pubg','ninja','drift','yasuo','rhino','phoenix','bull','hornet','eagle','hunter','parrot','rooster','lion','skull','wolver','wolf','cobra','dragon','panther','owl','tiger','reaper','warrior']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'circlemarcotteam':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['panther','rhino','squirrel','unicorn','zebra','lionsnake','bear','bull','dragon','eagle','fox','griffin','hawk','lion','peacock','phoenix','tiger','wolver']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'wallpaperml':{
	if (!text) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aldous','alice-2','angela-2','argus-2','chou','chou-2','estes','eudora','eudora-2','granger','granger-2','gusion-3','hanabi-2','hanzo','helcurt','layla-3','lesley-4','lunox-2','odette-3','saber','thamuz','vexana','argus','dyrroth','esmeralda-2','kadita-2','lancelot','leomord-2','lylia','vale','valir','xborg','zhask','alice','alpha','athena','badang','balmond','bane','diggie','trunks','fanny-2','fanny-3','freya','guinevere','gusion','gusion-2','hanabi','harith','harith-2','hayabusa-2','kadita','kagura-2','kagura-3','karina-2','kimmy','layla-2','leomord','lesley-2','lesley-3','lunox','nartis','niya-2','nana','nana-2','natalia','natalia-2','odette-2','pharsa','rafaela-2','selena-2','zilong','alucard','angela','bruno','change','claude','fanny','hayabusa','hilda','hylos','kagura','karina','karrie', 'layla','lesley','lolita','ninotaur','ninsittar','niya','noskov','odette','rafaela','selena']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'dragonballfb':{
	if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['cabba','caulifla','cooler','cumber','hit','kale','kaminoren','gokuui','xenogokuss3','xenogokuss4','xenovegeta','xenovegito','android-18','blackgoku','bulma','frieza','gotenks-2','kaio','krillinandroid-18','launch','nutenroshi-2','oldkai','oolong','pilaf','tienshinhan','trunks-3','bardock','gotenks','nutenroshi','piccolo','songoku-2','songoku-3','songoten','trunks-2','vegeta-2','vegito','krillin','najinbuu','songohan','songoku','trunks','vegeta']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'bannerofaov':{
	if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aphelios','karma','leesin-2','nidalee-2','soraka-2','soraka-3','swain','akali-4','ekko-2','qiyana','senna','yasuo-3','ahri-2','akali-3','ashe-3','caitlyn','camille','darius','draven','evelynn-2','kaisa','kayle','pantheon','rengar','sivir-2','sona','vayne-3','wukong','zoe-2','zyra','azir','garen','jinx-3','katarina-3','lux-3','nasus','nidalee','sejuani','sylas','vayner-2','vi-2','warwick-2','fiora-2','irelia-3','janna-2','jax','leesin','nasteryi-2','norgana','nami','riven-2','riven-3','talon-2','neeko','neeko-2','xayahrakan','zoe','ahri','ezreal-2','janna','jinx-2','lulu','lux-2','nissfortune','poopy','soraka','syndra','ezreal','graves','jayce','katarina-2','lux','yuumi','aatrox','akali-2','diana','elise','evelynn','jhin-2','kalista-2','kennen','pyke-2','shen','sivir','talon','twistedfate','thresh-2','yasuo-2','zilean','ashe-2','kalista','khazix','riven','riven','shyvana','thresh','zed-2','akali','ashe','ekko','fiora','irelia','irelia-2','jhin','jinx','katarina','leona','lucian','nasteryi','pyke','vayne','vi','warwick','yasuo','zed']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'effect3donbeach':{
	if (!text) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
const style = ['beach-1','beach-2','beach-3','beach-4','beach-5','beach-6']
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	if (!style.includes(m2)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'cutegirlgamer':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6', 'style-7','style-8','style-9', 'style-10','style-11','style-12']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'footballteam':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['nau-1','nau-2','nau-3','nau-4','nau-5','nau-6']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'beautifulshimmering':{
	if (!text) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aleister','alice','butterfly','diaochan','kahlii','krixi','nina','nakroth','natalya','taara','thane','violet','zanis','zata','airi','annette','arthur','arum','astrid','elandorr','gildur','gildur','hayate','ilumia','ishar','lauriel','lindis','nurad','quillen','rouie','sephera','yena','yorn']
if (!style.includes(m2)){ 
let listt = `*Champion Yg Kamu Masukkan Salah*\n\n_Berikut list champion yg benar, Total_ *${style.length}* _champion_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, champion : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'pubgcutelogo':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['chicken','soldier']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'elegantrotation':{
		if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','rhino','tiger']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'logogamingassasin':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10','style-11','style-12','style-13','style-14','style-15','style-16','style-17','style-18','style-19','style-20','style-21','style-22','style-23','style-24']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'introvideomaker':{
		if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','tiger','skull']
 if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {video:{ url: textpro2}, mimetype: 'video/mp4', caption: lang.ok()}, {quoted:m})
}}

	break
case 'gaminglogo4fvs':{
	if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['girl','ghost','soldier-2','swat','woman','soldier','sniper','raccoon','rabbit','panda','chicken']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'blueneon':{
		if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['tiger','shark','dugong','bull','cheetah','lion']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'metalmascot':{
		if (!text) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['snakelion','dragon','ragon-2','eagle','falcon','fox','lion','panther','phoenix','phoenix','rhino','squirrel','tiger','unicorn','wolf','zebra']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'anonymous':{
	if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style1','style2','style3']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'lolpentakill':{
		if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['jhin','syndra','olaf','nocturne','chogath','kassadin','nidalee','fiora','fiddlesticks','garen','irelia-2','janna','lissandra','ezreal','riven','nalphite','khazix','nasteryi','irelia','alista','jayce','singed','galio','velkoz','yi','yasuo','sona','nidalee-2','teemo','leesin','jinx','zed','camille','brand','warwick','rengar','vayne','leona','ashe','ezreal','annie','xerath','ahri','kayle','nissfortune','caitlyn','vi','leesin','darius','fizz','bloodyasuo','ekko','lucian','rakanandayah']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'avatarleagueofking':{
if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','yuumi','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','yasuo','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'avatarff':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','ford','hayato','joseph','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie','wukong']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'overwatchwallpaper':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ana','ashe','ashe-2','baptiste','baptiste-2','brigitte','dva','dva-2','genji','hanzo','junkrat','lucio','nccree','nei','nercy','nercy-2','nercy-3','noira','pharah','reaper','roadhog','soldier-76','sombra','sombra-2','symmetra','tracer','tracer-2','widowmaker','widowmaker-2','zarya']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'rovwallpaperhd':{
if (!text) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-5','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-8','volkath','volkath-2','wisp-4','wukong-6','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja-3','veres-3','violet-10','zip-2','zip-3','diaochan-5','enzo-2','lubu-7','payna-4','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','zephys-3','zephys-2','zephys','zanis-5','zanis-4','zanis-3','zanis-2','zanis','violet-5','violet-4','violet-3','violet-2','violet','veera-4','veera-3','veera-2','valhein-3','valhein-2','valhein','thane-2','thane','nina-3','nina-2','nina','nganga-2','nganga','lubu-5','lubu-4','lubu-3','lubu-2','lubu','krixi-5','krixi-4','krixi-3','krixi-2','krixi','kahlii-3','kahlii-2','kahlii','diaochan-3','diaochan-2','diaochan','chaugnar','butterfly-5','butterfly-4','butterfly-2','butterfly','yorn-4','yorn-3','yorn-2','yorn','wukong-3','wukong-2','wukong','toro-2','toro','taara-2','taara','slimz-3','slimz-2','slimz','payna-2','payna','ormarr-4','ormarr-3','ormarr-2','kaisa-2','ormarr','natalya-5','natalya-4','natalya-3','natalya-2','natalya','nakroth-4','nakroth-3','nakroth-2','nakroth','naloch-3','naloch-2','naloch','lumburr','kriknak-2','kriknak','jinna-2','jinna','grakk-3','grakk-2','grakk','gildur-2','gildur','fennik-4','fennik-3','fennik-2','fennik','cresht','azzenka-2','azzenka','arthur-3','arthur-2','arthur','alice-2','alice','aleister-2','aleister','zuka-2','zuka','zill-2','zill','xeniel-2','xeniel','wonderwoman-2','wonderwoman','telannas-4','telannas-3','telannas-2','telannas','superman-2','superman','skud-2','skud','ryoma-2','ryoma','preyta-3','preyta-2','preyta','nurad-3','nurad-2','nurad','noren-2','noren','lauriel-4','lauriel-3','lauriel-2','lauriel','kilgroth-2','kilgroth','joker','illumia-3','illumia-2','illumia','ignis-2','ignis','batman-2','batman','astrid-2','astrid','arduin-2','arduin','airi-5','airi-4','airi-3','airi-2','airi','teemee-2','teemee','zuka-3','tulen','raz-2','raz','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','toro-3','omen-2','omen','zuka-4','tulen-2','nakroth-5','nax','liliana','zill-3','raz-3','liliana-2','tulen-3','telannas-5','taara-3','ryoma-3','nax-2','kriknak-3','flash','cresht-3','cresht-2','arthur-4','aleister-3','airi-6','arum-2','arum','wisp-2','wisp','rourke-2','rourke','narja-2','narja','butterfly-6','batman-3','astris-3','jinna-3','butterfly-7','arthur-5','valhein-4','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-3','veera-5','liliana4','flash-2','arthur-6','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'rovwallpaper':{
if (!text) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera-2','lorion','grakk-6','keera-2','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','dextra','dextra-2','lindis-6','nurad-10','nakroth-9','quillen-7','sephera-5','yorn-8','airi-10','amily-6','astrid-6','ata-3','capheny-5','darcy-4','diaochan-8','hayate-6','lauriel-10','laville-3','rourke-4','ryoma-7','sinestrea','sinestrea-2','telannas-9','thorne','thorne-2','veres-4','yena-6','zephys-7','allain','allain-2','butterfly-12','kahlii-6','nakroth-8','preyta-4','taara-7','valhein-8','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-6','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','kerra-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','keera','raz-4','ishar-2','nax-4','valhein-7','zill-5','arthur-7','rum-5','lubu-8','naloch-7','sephera-4','diaochan-6','ignis-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','elsu-5','narja-3','annette-4','capheny-3','veres-3','zip-2','zip','diaochan-5','enzo-2','lubu-7','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','errol','yena-2','zuka-8','valhein','violet','airi','skud','zanis','zephis','butterfly','wukong','taara','nakroth','prayta','yorn','natalya','thane','toro','ormarr','omega','nina','nganga','lubu2','lubu','kahlii-2','kahlii','fennik-2','fennik','diaochan','cresht','azzenka','aleister','zuka2','zuka','payna-2','payna','nakroth-2','nortos-2','nortos','kriknak','jinna-2','jinna','batman','airi-2','violet-3','violet-2','skud-2','raz-2','raz','ignis-2','ignis','gildur','butterfly-4','butterfly-3','zanis-2','nurad','yorn-2','slimz','ormarr-2','nurad-2','nina-2','lauriel-2','grakk-2','grakk','diaochan-2','airi-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','taara-2','joker','ilumia-2','batman-2','arduin-2','arduin','wukong-2','nakroth-3','ilumia-3','arthur','ryoma-2','ryoma','astrid-2','astrid','zephis-2','natalya-3','natalya-2','ubu-3','chaugnar','azzenka-2','zanis-4','wukong-3','noren','lubu-4','lauriel-3','aleister-2','nurad-3','noren-2','lubu-5','kilgroth','gildur-2','fennik-3','lauriel-4','zephys-3','xeniel-2','wonderwomen','superman-2','slimz-2','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','xeniel','wonderwoman-2','violet-4','preyta2','diaochan-3','airi-4','valhein-4','preyta-3','nina-3','alice-2','airi-5','telannas-3','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','teemee-2','teemee','lindis','zuka-3','valhein-2','tulen','toro-2','naloch-4','naloch-3','lumburr','lindis-2','grakk-4','gildur-3','toro-3','omen-2','omen','zill-3','telannas-','athur-4','zuka-4','tulen-2','nakroth-5','nax','liliana','raz-3','liliana-2','tulen-3','nax-2','flash','cresht-3','cresht-2','chaugnar-2','aleister-3','ryoma-3','kriknak-3','airi-6','wisp-2','wisp','batman-3','arum-2','arum','butterfly-6','rourke-2','rourke','narja-2','narja','taara-3','jinna-3','butterfly-7','arthur-4','arthur-3','arthur-2','valhein-3','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','astrid-3','amily-2','liliana-4','xeniel-5','veera-5','flash-2','athur-5','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','utterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list Avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'beautifulgalaxylol':{
if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ashe-2','darius-2','hecarim-2','akali-2','jhin-2','jinx-2','kaisa-2','khazix-2','nordekaiser-2','pantheon-2','qiyana','rammus-2','renekton-2','tahmkench-2','teemo-2','udyr-2','yasuo-2','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana-2','kayle-2','akali-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'crossfirecover':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','swat','switcher','redpower','whitenurse','blthefates','jns','natahari','dx','nursezombie','omohswat','sfg','fox','bllaswat','bljtf','grjtf','blarch','hero-4','gsg9','hero-3','opes','abf','shadows','devilhunter']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'lolwallpaper':{
if (!text) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['aatrox-2','arhi-2','akali-3','akali-2','braum','camille','evelynn-5','ezreal-2','fizz','graves-2','irelia-3','irelia-2','jayce-2','jhin-2','jinx-2','kaisa','katarina-2','lux-2','neeko','orianna-2','pantheon','pyke','qiyana','riven-2','sylas','teemo-2','viktor','vladimir','warwick-2','yasuo-3','yasuo-2','zoe','nasteryi','lux','lulu','leesin','jinx','jhin','ezreal','janna','ashe','arhi','poppy','nissfortune','soraka','syndra','zyra','yasuo','vi','vayne','taliyah','sona','sivir','shyvana','riven','quinn','nidalee','norgana','leblanc','kennen','karma','irelia','fiora','elise','diana','caitlyn','zed','xayah','tristana','talon','shen','rakan','orianna','nami','kayn','kayle','katarina','kalista','ekko','azir','udyr','thresh','tf','teemo','ryze','nocturne','lucian','khazik','graves','darius','annie','akali','zilean','ziggs','yorick','warwick','nasteryi-2','janna-2','hecarim','gangplank','fiora-2','draven','brand','aatrox','velkoz','shaco','rengar','reksai','ornn','leona','kindred','jayce','jax','jarvan-iv','garen','xinzhao','nasus','kled','evelynn-4','evelynn-3','evelynn-2','evelynn','cassiopeia','zac','xerath','wukong','velkoz-2','veigar','varus','urgot','twich','kassadin','elise-2','annie-2','alistar']
if (!style.includes(m2)){ 
let listt = `*Wallpaper Yg Kamu Masukkan Salah*\n\n_Berikut list walpaper yg benar, Total_ *${style.length}* _wallpaper_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, wallpaper : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverdota2':{
if (!text) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['void','riki','lycan','ursa','zeus','dragonkinght','warlord','phantomassassin','bountyhunter','antimage','spectre','luna','vengerfulspirit','undying','tusk','tinker','shadowfiend','sandking','nightstalker','nagasiren','nirana','neepo','lina','juggernaut','huskar','emberspirit','emberspirit','emberspirit','earthshaker','drowranger','clockwerk','bristleback','bloodseeker','axe']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverleagueofking':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['thane','orrmarr','omega','nakroth','nina','ngangar','gildur','dieuthuyen','chaugnar','butterfly','azzenka','alice','lubo','kriknak-2','natalya-2','trieu-van','taara-2','naloch','kriknak','natalya','taara','ngo-khong','airi','butterfly-2','butterfly-3','kahlii','krixi','toro','grakk','ilumia','zephys','veera-2','violet','preyta-2','violet-2','valhein','yorn','veera','notos','valhein-2','preyta','illumia-2','fennik-2','lumburr','fennik','nakroth-2','krixi-2','gildur2']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'avatar3q360':{
if (!text) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['tieu_kieu','luu_bi','truong_oanh_oanh','truong_phi','tu_ma_y','van_uong','hoang_nguyet_anh','hoang_nguyet_anh2','hoang_trung','hua_chu','truong_giac','dieu_thuyen','renekton','tahmkench','teemo','udyr','yasuo','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana','kayle','akali','aatrox']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverofwarface':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['warface-4','warface-3','warface-2','warface','sniper-3','sniper-2','sniper','rifleman','nedic-2','nedic','exosuit','engineer']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'newlolavatar':{
if (!text) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['udyr','twitch','twistedfate','trundle','teemo','swain','shyvana','shen','sejuani','renekton','reksai','rammus','zyra','zilean','ziggs','zac','xerath','warwick','vladimir','viktor','vi','velkoz','veigar','vayne','volibear','tristana','taliyah','shaco','leblanc','jinx','graves','fizz','ekko','corki','cassiopeia','caitlyn','blitzcrank','bard','alistar','akali','aatrox','janna','wukong','thresh','taric','talon','ryze','nordekaiser','karma','kalista','irelia','gnar','garen','galio','soraka','sona','sivir','riven','quinn','nocturne','nami','lux','kindred','khazix','katarina','jarvan','fiora','diana','aurelionsol','ashe','ahri','varus','syndra','nidalee','kennen','jhin','zed','yasuo','rengar','lucian','ezreal','azir','annie','leesin','nasteryi','poppy','pantheon','orianna','nasus','norgana','nissfortune','naokai','nalzaha','lulu','lissandra','leona','kled','jayce','jax','illaoi','xayah','rakan','gangplank','naster_yi2','riven2','elise','darius','xayah_rakan','katarina2','nauthilus','hecarim','thresh2','ashe2','xinzhao','tryndamere','syndra-2','sivir-2','lissandra2','karma-2','draven']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'csgocover':{
if (!text) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ump45','tec9','n4a1','xm1014','famas','np9','pp-bizon','p2000','negev','usps','dualberettas','np5','karambit','awpdragonlore','np7','galilar','ak-47','glock','sg-553','ak47','r8revolver','aug','butterflyknife','deserteagle','gsg9','p90asiimov','awphawking','n4a4','sas','awpasiimov','ssg08bitw','sg553ds','r8fade','p90ed','n4a1sdecimator','n4a1howl','karambitds','flipknifemf','awmmedusa','augaa','ak47vulcan','ak47fs']
if (!style.includes(m2)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverloknew':{
if (!text) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-5','teemee-3','telannas-6','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','capheny-4','lsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-4','jinna-5','kerra-2','lauriel-7','nina-5','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-7','volkath','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy','florentino-3','noren-3','ryoma-5','sephera-3','annettte-4','capheny-3','elsu-5','narja-3','vilolet-10','violet-10','zip-2','zip-2a','airi-9','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena','yena-2','zuka-8','yorn','violet','zanis','thane','slimz','skud','preyta','payna','nakroth','nina','naloch','illumia','krixi','diaochan','butterfly','veera','valhein','toro','taara','raz','ormarr','nganga','lubu','kriknak','kahlil','grakk','gildur','alice','omega','wukong','natalya','nortos','cresht','airi','aleister','lumburr','zephis','violet-2','jinna','chaugnar','azzenka','valhein-2','zanis-2','skud-2','payna-2','natalya-3','natalya-2','nortos-2','krixi-2','jinna-2','illumia-2','butterfly-3','butterfly-2','yorn-2','taara-2','nakroth-2','lubu2','lauriel','kahlii-2','zuka-2','zuka','batman','airi-2','airi-3','butterfly-4','diaochan-2','grakk-2','ignis','ignis-2','lauriel2','nina-2','nurad','nurad-2','ormarr-2','raz-2','slimz2','violet-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','joker','illumia-3','batman-2','arduin-2','arduin','zephis-2','wukong-2','ryoma-2','ryoma','nakroth-3','nganga-2','azzenka-2','astrid-2','astrid','arthur','zanis-4','wukong-3','noren','lubu-4','lauriel-3','lubu-3','chaugnar-2','aleister-2','xeniel','telannas-3','preyta-2','nurad-3','kriknak-2','fennik-2','diaochanlubu','alice-2','noren-2','lubu-5','lauriel-4','kilgroth','gildur-2','fennik-3','zephys-3','xeniel-2','xeniel-2','wonderwoman','supeman-2','slimz-3','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','wonderwoman-2','violet-4','prayta-3','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','airi-5','natalya-5','fennik-4','valhein-4','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','telannas-5','athur-2','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','kriknak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','flash','cresht-3','cresht-2','astris-3','arum-2','arum','butterfly-6','lice-3','xeniel-3','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-2','violet-6','valhein-5','superman-3','liliana-3','kilgroth-3','diaochan-3','wirosabaleng-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-4','veera-5','liliana-4','flash-2','arthur-3','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-6','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','veera-6','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverfblol':{
if (!text) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['yasuo','shen','riven','pantheon','orianna','nocturne','nami','norgana','naster-yi','lux','lucian','katarina','kalista','jinx','jhin','irelia','hecarim','graves','garen','fizz','fiora','ezreal','ekko','diana','darius','cassiopeia','caitlyn','braum','azir','ashe','warwick','thresh','leblanc','khazix','kayn','draven','zyra','zed','xayah','taric','talon','sona','sivir','rengar','rakan','leesin','gnar','elise']
if (!style.includes(m2)){ 
let listt = `*letters Yg Kamu Masukkan Salah*\n\n_Berikut list letters yg benar, Total_ *${style.length}* _letters_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, letters : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'overwatchcover':{
if (!text) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zwinston','zjunkrat','zwidowmaker','ztracer','ztorbjorn','zsymmetra','zsombra','zsoldier76','zroadhog','zreinhardt','zreaper','zpharah','zorisa','zmercy','zmei','zmccree','zlucio','zhanzo','zgenji','zenyatta','zdva','zbastion','zarya','zana','yzenyatta','yzarya','ywinston','ywidowmaker','ytracer','ytorbjorn','ysymmetra','ysombra','ysoldier76','yroadhog','yreinhardt','yreaper','ypharah','yorisa','ymercy','ymei','ymccree','ylucio','yjunkrat','yhanzo','ygenji','ydva','ybastion','yana','xzenyatta','xzarya','xwinston','xwidowmaker','xtracer','xtorbjorn','xsymmetra','xsombra','xsoldier76','xroadhog','xreinhardt','xreaper','xpharah','xorisa','xmercy','xmei','xmccree','xlucio','xjunkrat','xhanzo','xgenji','xdva','xbastion','xana','wzenyatta','wzarya','wtracer','wtorbjorn','wsymmetra','wsombra','wsoldier76','wroadhog','wreinhardt','wreaper','wpharah','worisa','wmercy','wmei','wmccree','wlucio','wjunkrat','winston','widowmaker','whanzo','wgenji','wdva','wbastion','wana','vzenyatta','vzarya','vwinston','vwidowmaker','vtracer','vtorbjorn','vsymmetra','vsombra','vsoldier76','vroadhog','vreinhardt','vreaper','vpharah','vorisa','vmercy','vmei','vmccree','vlucio','vjunkrat','vhanzo','vgenji','vdva','vbastion','vana','uzenyatta','uzarya','uwinston','uwidowmaker','utracer','utorbjorn','usymmetra','usombra','usoldier76','uroadhog','ureinhardt','ureaper','upharah','uorisa','umercy','umei','umccree','ulucio','ujunkrat','uhanzo','ugenji','udva','ubastion','uana','tzenyatta','tzarya','twinston','twidowmaker','tsymmetra','tsombra','tsoldier76','troadhog','treinhardt','treaper','tracer','tpharah','torisa','torbjorn','tmercy','tmei','tmccree','tlucio','tjunkrat','thanzo','tgenji','tdva','tbastion','tana','szenyatta','szarya','symmetra','swinston','swidowmaker','stracer','storbjorn','sroadhog','sreinhardt','sreaper','spharah','sorisa','sombra','soldier76','smercy','smei','smccree','slucio','sjunkrat','shanzo','sgenji','sdva','sbastion','sana','rzenyatta','rzarya','rwinston','rwidowmaker','rtracer','rtorbjorn','rsymmetra','rsombra','rsoldier76','rrmei','rpharah','rorisa','roadhog','rmercy','rmccree','rlucio','rjunkrat','rhanzo','rgenji','reinhardt','reaper','rdva','rbastion','rana','qzenyatta','qzarya','qwinston','qwidowmaker','qtracer','qtorbjorn','qsymmetra','qsombra','qsoldier76','qroadhog','qreinhardt','qreaper','qpharah','qorisa','qmercy','qmei','qmccree','qlucio','qjunkrat','qhanzo','qgenji','qdva','qbastion','qana','pzenyatta','pzarya','pwinston','pwidowmaker','ptracer','ptorbjorn','psymmetra','psombra','psoldier76','proadhog','preinhardt','preaper','porisa','pmercy','pmei','pmccree','plucio','pjunkrat','pharah','phanzo','pgenji','pdva','pbastion','pana','ozenyatta','ozarya','owinston','owidowmaker','otracer','otorbjorn','osymmetra','osombra','osoldier76','oroadhog','orisa','oreinhardt','oreaper','opharah','omercy','omei','omccree','olucio','ojunkrat','ohanzo','ogenji','odva','obastion','oana','nzenyatta','nzarya','nwinston','nwidowmaker','ntracer','ntorbjorn','nsymmetra','nsombra','nsoldier76','nroadhog','nreinhardt','nreaper','npharah','norisa','nmercy','nmei','nmccree','nlucio','njunkrat','nhanzo','ngenji','ndva','nbastion','nana','mzenyatta','mzarya','mwinston','mwidowmaker','mtracer','mtorbjorn','msymmetra','msombra','msoldier76','mroadhog','mreinhardt','mreaper','mpharah','morisa','mlucio','mjunkrat','mhanzo','mgenji','mercy','mei','mdva','mccree','mbastion','mana','lzenyatta','lzarya','lwinston','lwidowmaker','lucio','ltracer','ltorbjorn','lsymmetra','lsombra','lsoldier76','lroadhog','lreinhardt','lreaper','lpharah','lorisa','lmercy','lmei','lmccree','ljunkrat','lhanzo','lgenji','ldva','lbastion','lana','kzenyatta','kzarya','kwinston','kwidowmaker','ktracer','ktorbjorn','ksymmetra','ksombra','ksoldier76','kroadhog','kreinhardt','kreaper','kpharah','korisa','kmercy','kmei','kmccree','klucio','kjunkrat','khanzo','kgenji','kdva','kbastion','kana','jzenyatta','jzarya','jwinston','jwidowmaker','junkrat','jtracer','jtorbjorn','jsymmetra','jsombra','jsoldier76','jroadhog','jreinhardt','jreaper','jpharah','jorisa','jmercy','jmei','jmccree','jlucio','jhanzo','jgenji','jdva','jbastion','jana','izenyatta','izarya','iwinston','iwidowmaker','itracer','itorbjorn','isymmetra','isombra','isoldier76','iroadhog','ireinhardt','ireaper','ipharah','iorisa','imercy','imei','imccree','ilucio','ijunkrat','ihanzo','igenji','idva','ibastion','iana','hzenyatta','hzarya','hwinston','hwidowmaker','htracer','htorbjorn','hsymmetra','hsombra','hsoldier76','hroadhog','hreinhardt','hreaper','hpharah','horisa','hmercy','hmei','hmccree','hlucio','hjunkrat','hgenji','hdva','hbastion','hanzo','hana','gzenyatta','gzarya','gwinston','gwidowmaker','gtracer','gtorbjorn','gsymmetra','gsombra','gsoldier76','groadhog','greinhardt','greaper','gpharah','gorisa','gmercy','gmei','gmccree','glucio','gjunkrat','genji','gdva','gbastion','ganafzenyatta','fzarya','fwinston','fwidowmaker','ftracer','ftorbjorn','fsymmetra','fsombra','fsoldier76','froadhog','freinhardt','freaper','fpharah','forisa','fmercy','fmei','fmccree','flucio','fjunkrat','fhanzo','fgenji','fdva','fbastion','fana','ezenyatta','ezarya','ewinston','ewidowmaker','etracer','etorbjorn','esymmetra','esombra','esoldier76','eroadhog','ereinhardt','ereaper','epharah','eorisa','emercy','emei','emccree','elucio','ejunkrat','ehanzo','egenji','edva','ebastion','eana','dzenyatta','dzarya','dwinston','dwidowmaker','dva','dtracer','dtorbjorn','dsymmetra','dsombra','dsoldier76','droadhog','dreinhardt','dreaper','dpharah','dorisa','dmercy','dmei','dmccree','dlucio','djunkrat','dhanzo','dgenji','dbastion','dana','czenyatta','czarya','cwinston','cwidowmaker','ctracer','ctorbjorn','csymmetra','csombra','csoldier76','croadhog','creinhardt','creaper','cpharah','corisa','cmercy','cmei','cmccree','clucio','cjunkrat','chanzo','cgenji','cdva','cbastion','cana','bzenyatta','bzarya','bwinston','bwidowmaker','btracer','btorbjorn','bsymmetra','bsombra','bsoldier76','broadhog','breinhardt','breaper','bpharah','borisa','bmercy','bmei','bmccree','blucio','bjunkrat','bhanzo','bgenji','bdva','bastion','bana','azenyatta','azarya','awinston','awidowmaker','atracer','atorbjorn','asymmetra','asombra','asoldier76','aroadhog','areinhardt','areaper','apharah','aorisa','ana','amercy','amei','amccree','alucio','ajunkrat','ahanzo','agenji','adva','abastion','zdoomfist','ydoomfist','xdoomfist','wdoomfist','vdoomfist','udoomfist','tdoomfist','sdoomfist','rdoomfist','qdoomfist','pdoomfist','odoomfist','ndoomfist','mdoomfist','ldoomfist','kdoomfist','jdoomfist','idoomfist','hdoomfist','gdoomfist','fdoomfist','edoomfist','doomfist','cdoomfist','bdoomfist','adoomfist']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'crossfirestyle':{
if (!text) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','switcher','switcher-2','switcher-3 ','thefates','thefates-2','thefates-3','swat','fox','star','omoh','sabel','sas','sia','navy-seals','jtf','jns','laswat','sraf','shadow','nemesis','nocha','ixions','gsg-9','ghosty','hermes','foxu','dh','angelapt','ac']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'avatarlolbyname':{
if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['katarina-0','zyra-4','zyra-3','zyra-2','zyra-1','zyra-0','zilean-5','zilean-4','zilean-3','zilean-2','zilean-1','zilean-0','ziggs-5','ziggs-4','ziggs-3','ziggs-2','ziggs-1','ziggs-0','zed-3','zed-2','zed-10','zed-1','zed-0','zac-2','zac-1','zac-0','yorick-2','yorick-1','yorick-0','yasuo-4','yasuo-3','yasuo-2','yasuo-1','yasuo-0','xinzhao-6','xinzhao-13','xinzhao-5','xinzhao-4','xinzhao-3','xinzhao-2','xinzhao-1','xinzhao-0','xerath-4','xerath-3','xerath-2','xerath-1','xerath-0','xayah-1','xayah-0','warwick-8','warwick-7','warwick-6','warwick-5','warwick-4','warwick-3','warwick-2','warwick-1','warwick-0','volibear-5','volibear-4','volibear-3','volibear-2','volibear-1','volibear-0','vladimir-7','vladimir-6','vladimir-5','vladimir-4','vladimir-3','vladimir-2','vladimir-1','vladimir-0','viktor-2','viktor-1','viktor-0','vi-5','vi-4','vi-3','vi-2','vi-1','vi-0','velkoz-3','velkoz-2','velkoz-1','velkoz-0','veigar-8','veigar-7','veigar-6','veigar-5','veigar-4','veigar-3','veigar-2','veigar-1','veigar-0','vayne-6','vayne-5','vayne-4','vayne-3','vayne-2','vayne-1','vayne-0','vayne-10','varus-6','varus-5','varus-4','varus-3','varus-2','varus-1','varus-0','urgot-3','urgot-2','urgot-1','urgot-0','udyr-4','udyr-3','udyr-2','udyr-1','udyr-0','twitch-7','twitch-6','twitch-5','twitch-4','twitch-3','twitch-2','twitch-1','twitch-0','twistedfate-9','twistedfate-10','twistedfate-8','twistedfate-7','twistedfate-6','twistedfate-5','twistedfate-4','twistedfate-3','twistedfate-2','twistedfate-1','twistedfate-0','tryndamere-9','tryndamere-8','tryndamere-7','tryndamere-6','tryndamere-5','tryndamere-4','tryndamere-3','tryndamere-2','tryndamere-1','tryndamere-0','trundle-5','trundle-4','trundle-3','trundle-2','trundle-1','trundle-0','tristana-6','tristana-5','tristana-4','tristana-3','tristana-2','tristana-1','tristana-0','tristana-10','tristana-11','thresh-5','thresh-4','thresh-3','thresh-2','thresh-1','thresh-0','teemo-8','teemo-7','teemo-6','teemo-5','teemo-4','teemo-3','teemo-2','teemo-1','teemo-0','teemo-14','taric-4','taric-3','taric-2','taric-1','taric-0','talon-5','talon-4','talon-3','talon-2','talon-1','talon-0','taliyah-1','taliyah-0','tahmkench-2','tahmkench-1','tahmkench-0','syndra-4','syndra-3','syndra-2','syndra-1','syndra-0','swain-3','swain-2','swain-1','swain-0','soraka-6','soraka-5','soraka-4','soraka-3','soraka-2','soraka-1','soraka-0','sona-6','sona-5','sona-4','sona-3','sona-2','sona-1','sona-0','skarner-4','skarner-3','skarner-2','skarner-1','skarner-0','sivir-7','sivir-6','sivir-5','sivir-4','sivir-3','sivir-2','sivir-1','sivir-0','sion-5','sion-4','sion-3','sion-2','sion-1','sion-0','singed-8','singed-7','singed-6','singed-5','singed-4','singed-3','singed-2','singed-1','singed-0','shyvana-6','shyvana-5','shyvana-4','shyvana-3','shyvana-3','shyvana-2','shyvana-1','shyvana-0','shen-6','shen-5','shen-4','shen-3','shen-2','shen-1','shen-0','shaco-7','shaco-6','shaco-5','shaco-4','shaco-3','shaco-2','shaco-1','shaco-0','sejuani-7','sejuani-6','sejuani-5','sejuani-4','sejuani-3','sejuani-2','sejuani-1','sejuani-0','ryze-10','ryze-9','ryze-8','ryze-7','ryze-6','ryze-5','ryze-4','ryze-3','ryze-2','ryze-1','ryze-0','rumble-3','rumble-2','rumble-1','rumble-0','riven-8','riven-7','riven-6','riven-5','riven-4','riven-3','riven-2','riven-1','riven-0','rengar-3','rengar-2','rengar-1','rengar-0','renekton-9','renekton-8','renekton-7','renekton-6','renekton-5','renekton-4','renekton-3','renekton-2','renekton-1','renekton-0','reksai-1','reksai-2','reksai-0','rammus-7','rammus-6','rammus-5','rammus-4','rammus-3','rammus-2','rammus-1','rammus-0','rakan-1','rakan-0','quinn-4','quinn-3','quinn-2','quinn-1','quinn-0','poppy-7','poppy-6','poppy-5','poppy-4','poppy-3','poppy-2','poppy-1','poppy-0','pantheon-8','pantheon-7','pantheon-6','pantheon-5','pantheon-4','pantheon-3','pantheon-2','pantheon-1','pantheon-0','orianna-7','orianna-6','orianna-5','orianna-4','orianna-3','orianna-2','orianna-1','orianna-0','olaf-6','olaf-5','olaf-4','olaf-3','olaf-2','olaf-1','olaf-0','nunu-7','nunu-6','nunu-5','nunu-4','nunu-3','nunu-2','nunu-1','nunu-0','nocturne-6','nocturne-5','nocturne-4','nocturne-3','nocturne-2','nocturne-1','nocturne-0','nidalee-8','nidalee-7','nidalee-6','nidalee-5','nidalee-4','nidalee-3','nidalee-2','nidalee-1','nidalee-0','nautilus-5','nautilus-4','nautilus-3','nautilus-2','nautilus-1','nautilus-0','nasus-6','nasus-5','nasus-4','nasus-3','nasus-2','nasus-1','nasus-0','nasus-10','nami-7','nami-6','nami-5','nami-4','nami-3','nami-2','nami-1','nami-0','norgana-6','norgana-5','norgana-4','norgana-3','norgana-2','norgana-1','norgana-0','norgana-10','norgana-11','nordekaiser-4','nordekaiser-3','nordekaiser-2','nordekaiser-1','nordekaiser-0','nonkeyking-5','nonkeyking-4','nonkeyking-3','nonkeyking-2','nonkeyking-1','nonkeyking-0','nissfortune-9','nissfortune-8','nissfortune-7','nissfortune-6','nissfortune-5','nissfortune-4','nissfortune-3','nissfortune-2','nissfortune-1','nissfortune-0','nasteryi-3','nasteryi-2','nasteryi-1','nasteryi-0','nasteryi-9','nasteryi-5','nasteryi-4','nasteryi-10','naokai-7','naokai-6','naokai-5','naokai-4','naokai-3','naokai-2','naokai-1','naokai-0','nalzahar-5','nalzahar-4','nalzahar-3','nalzahar-2','nalzahar-1','nalzahar-0','nalphite-7','nalphite-6','nalphite-5','nalphite-4','nalphite-3','nalphite-2','nalphite-1','nalphite-0','lux-7','lux-6','lux-5','lux-4','lux-3','lux-2','lux-1','lux-0','lulu-6','lulu-5','lulu-4','lulu-3','lulu-2','lulu-1','lulu-0','lucian-6','lucian-7','lucian-2','lucian-1','lucian-0','lissandra-3','lissandra-2','lissandra-1','lissandra-0','leona-9','leona-8','leona-7','leona-6','leona-5','leona-4','leona-3','leona-2','leona-1','leona-0','leesin-6','leesin-5','leesin-4','leesin-3','leesin-2','leesin-1','leesin-0','leesin-10','leesin-11','leblanc-5','leblanc-4','leblanc-3','leblanc-2','leblanc-1','leblanc-0','kogmaw-9','kogmaw-8','kogmaw-7','kogmaw-6','kogmaw-5','kogmaw-4','kogmaw-3','kogmaw-2','kogmaw-1','kogmaw-0','kled-1','kled-0','kindred-2','kindred-1','kindred-0','khazix-4','khazix-3','khazix-2','khazix-1','khazix-0','kennen-7','kennen-6','kennen-5','kennen-4','kennen-3','kennen-2','kennen-1','kennen-0','kayle-8','kayle-7','kayle-6','kayle-5','kayle-4','kayle-3','kayle-2','kayle-1','kayle-0','katarina-9','katarina-8','katarina-7','katarina-5','katarina-6','katarina-4','katarina-3','katarina-2','katarina-1','kassadin-4','kassadin-3','kassadin-2','kassadin-1','kassadin-0','karthus-9','karthus-5','karthus-4','karthus-3','karthus-2','karthus-1','karthus-0','karma-7','karma-6','karma-5','karma-4','karma-3','karma-2','karma-1','karma-0','kalista-3','kalista-2','kalista-1','kalista-0','jinx-4','jinx-3','jinx-2','jinx-1','jinx-0','jayce-4','jayce-3','jayce-2','jayce-1','jayce-0','jax-9','jax-8','jax-7','jax-6','jax-5','jax-4','jax-3','jax-2','jax-1','jax-0','jarvaniv-6','jarvaniv-5','jarvaniv-4','jarvaniv-3','jarvaniv-2','jarvaniv-1','jarvaniv-0','janna-7','janna-6','janna-5','janna-4','janna-3','janna-2','janna-1','ivern-1','ivern-0','irelia-5','irelia-4','irelia-3','irelia-2','irelia-1','irelia-0','illaoi-1','illaoi-0','heimerdinger-5','heimerdinger-4','heimerdinger-3','heimerdinger-2','heimerdinger-1','heimerdinger-0','hecarim-6','hecarim-5','hecarim-4','hecarim-3','hecarim-2','hecarim-1','hecarim-0','graves-7','graves-6','graves-5','graves-4','graves-3','graves-2','graves-1','graves-0','gragas-9','gragas-8','gragas-7','gragas-6','gragas-5','gragas-4','gragas-3','gragas-3','gragas-2','gragas-1','gragas-0','gnar-4','gnar-3','gnar-2','gnar-1','gnar-0','garen-6','garen-5','garen-4','garen-3','garen-2','garen-1','garen-0','garen-10','garen-11','gangplank-8','gangplank-7','gangplank-6','gangplank-5','gangplank-4','gangplank-3','gangplank-2','gangplank-1','gangplank-0','galio-5','galio-4','galio-3','galio-2','galio-1','galio-0','fizz-9','fizz-8','fizz-4','fizz-3','fizz-2','fizz-1','fizz-0','fiora-5','fiora-4','fiora-3','fiora-2','fiora-1','fiora-0','fiddlesticks-7','fiddlesticks-6','fiddlesticks-5','fiddlesticks-4','fiddlesticks-3','fiddlesticks-2','fiddlesticks-1','fiddlesticks-0','ezreal-9','ezreal-8','ezreal-7','ezreal-6','ezreal-5','ezreal-4','ezreal-3','ezreal-2','ezreal-1','ezreal-0','evelynn-4','evelynn-3','evelynn-2','evelynn-1','evelynn-0','elise-4','elise-3','elise-2','elise-1','elise-0','ekko-3','ekko-2','ekko-1','ekko-0','draven-6','draven-5','draven-4','draven-3','draven-2','draven-1','draven-0','drmundo-9','drmundo-8','drmundo-7','drmundo-6','drmundo-5','drmundo-4','drmundo-3','drmundo-2','drmundo-1','drmundo-0','diana-3','diana-2','diana-1','diana-0','diana-11','darius-8','darius-4','darius-3','darius-2','darius-1','darius-0','darius-14','corki-8','corki-7','corki-6','corki-5','corki-4','corki-3','corki-2','corki-1','corki-0','chogath-6','chogath-5','chogath-4','chogath-3','chogath-2','chogath-1','chogath-0','cassiopeia-4','cassiopeia-3','cassiopeia-2','cassiopeia-1','cassiopeia-0','camille-1','camille-0','caitlyn-6','caitlyn-5','caitlyn-4','caitlyn-3','caitlyn-2','caitlyn-1','caitlyn-0','caitlyn-10','caitlyn-11','braum-3','braum-2','braum-1','braum-0','braum-10','brand-5','brand-4','brand-3','brand-2','brand-1','brand-0','blitzcrank-7','blitzcrank-6','blitzcrank-5','blitzcrank-4','blitzcrank-3','blitzcrank-2','blitzcrank-1','blitzcrank-0','blitzcrank-11','bard-6','bard-5','bard-4','bard-3','bard-2','bard-1','bard-0','azir-4','azir-3','azir-2','azir-1','azir-0','aurelionsol-1','aurelionsol-0','ashe-8','ashe-7','ashe-6','ashe-5','ashe-4','ashe-3','ashe-2','ashe-1','ashe-0','annie-9','annie-8','annie-7','annie-6','annie-5','annie-4','annie-3','annie-2','annie-1','annie-0','annie-10','anivia-7','anivia-6','anivia-5','anivia-4','anivia-3','anivia-2','anivia-1','anivia-0','amumu-8','amumu-7','amumu-6','amumu-5','amumu-4','amumu-3','amumu-2','amumu-1','amumu-0','alistar-9','alistar-8','alistar-7','alistar-6','alistar-5','alistar-4','alistar-3','alistar-2','alistar-1','alistar-0','akali-8','akali-7','akali-6','akali-5','akali-4','akali-3','akali-2','akali-1','akali-0','ahri-7','ahri-6','ahri-5','ahri-4','ahri-3','ahri-2','ahri-1','ahri-0','aatrox-3','aatrox-2','aatrox-1','aatrox-0','zacskt','teemoskt','olafskt','namiskt','syndraskt','jhinskt','ekkoskt','urgot-8','urgot-7','urgot-6','urgot-5','kayn-2','kayn','sona-8','veigaros','twitchos','tristanaos','fizzos','zigg','nalzah01','kayle','hecarim','brand','ornn2','ornn','syndra','soraka','nissfortune','ezreal','ahri','yorick','singed','nasteryi','janna','fiora','cassiopeia','ashe','zed','viktor','nidalee','katarina','gnar','evelynn-7','evelynn-6','evelynn-5','evelynn','elise','annie','rengar','blitzcrank-9','blitzcrank-8','zoe-2','zoe','vi','vayne','varus','poppy','kogmaw','jinx','jhin','jax','graves','draven','xinzhao','warwick','swain-8','swain-7','swain-6','swain-5','swain-4','rakan','nasus','nissfortune-15','nissfortune-14','nissfortune-13','nissfortune-12','nissfortune-11','nissfortune-10','lux','kaisa-2','kaisa','jarvan-iv','illaoi','gragas','wukong','sivir','nissfortune-16','irelia-11','irelia-10','irelia-9','irelia-8','irelia-7','irelia-6','galio','alistar','varus-7','twistedfate','teemo','shen','rumble','riven','evelynn-8','zoe3','xinzhao-7','urgot','thresh','talon','taliya','pyke-2','pyke','poppy-8','nunu-15','nunu-14','nunu-13','nunu-12','nunu-11','nunu-10','nunu-9','nunu-8','lulu','lucian','jarvan-iv-7','irelia-12','garen','gangplank','darius','caitlyn','braum','aurelionsol-2','ashe-9','akali-18','akali-17','akali-16','akali-15','akali-14','akali-13','akali-12','akali-11','akali-10','akali-9','aatrox-7','aatrox-6','aatrox-5','aatrox-4','ziggs-6','yasuo','sona','nalphite','khazix','kayn-3','jinx-5']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'lolcoverbyname':{
if (!text) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zyra','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twictch','tryndamere','trundle','tristana','thresh','twistedfate','teemo','taric','talon','taliyah','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','orianna','olaf','nunu','nasteryi','naokai','nalzahar','nalphite','lux','lulu','lucian','nocturne','nedalee','nautilus','nasus','nami','norgana','noderkaiser','nissfortune','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','jinx','jhin','jayce','jax','jarvan','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','drmundo','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','zoe','sylas','swain-2','pyke','nunu-2','neeko','norgana2','kayle-2','kaisa','evelynn-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'cyberhunterfb':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['1','2','3','4','5','6','7','8','9','10','11','12']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coverfreefirefb':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','hayato','kapella','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'gamingmascot':{
if (!text) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['bear-2','dragon-2','hydra','lion','reaper','wolf-2','bear','eagle','iguana','shark','snake','spartan','griffin','owl','wolf','tiger','wolver','dragon']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'coveronepiecefb':{
if (!text) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ace','brook','chopper','franky','garp','jinbei','law','luffy','nerry','nami','rayleigh','robin','sabo','sanji','shanks','sunny','usopp','zoro']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'bannerytcsgo':{
if (!text) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6','banner-7']
		if (!style.includes(m2)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, banner : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'fbgamepubgcover':{
if (!text) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['cover-1','cover-2','cover-3','cover-4','cover-5','cover-6','cover-7','cover-8','cover-9','cover-10','cover-11','cover-12']
if (!style.includes(m2)){ 
let listt = `*template Yg Kamu Masukkan Salah*\n\n_Berikut list template yg benar, Total_ *${style.length}* _template_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, template : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'banneroflol':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
var memek = args.join(" ").split("|")
var m1 = memek[0]
var m2 = memek[1]
var m3 = memek[2]
const style = ['ahri-2','neeko','nocturne','shen-2','veigar','rakanayah-2','zoe-2','pantheon-2','rammus','udyr','darius-2','ekko-2','lablanc','leona','nissfotune','poppy','quinn','talon-2','akali-2','irelia-2','jinx-2','nordekaiser','pyke-2','renekton','rengar','sivir','sona','soraka','tristana','warwick','yuumi','ziggs','leesin','lulu','lux','naster-yi','norgana','nasus','pantheon','pyke','qiyana','rakan','rakanxayah','riven','shen','sylas','talon','teemo','thresh','tryndamere','varus','vayne','velkoz','vladimir','yasuo','zed','zoe','hecarim','heimerdinger','illaoi','irelia','ivern','janna','jarvan-iv','jax','jayce','jhin','jinx','kaisa','kalista','karma','karthus','kassadin','katarina','kayle','kayn','kennen','khazix','kindred','kled','kogmaw','aatrox','ahri','akali','alistar','amumu','anivia','annie','ashe','aurelionsol','azir','bard','blitzcrank','brand','braum','caitlyn','camille','cassiopeia','chogath','corki','darius','diana','drmundo','draven','ekko','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gnar','gragas','graves']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'bannerofaov2':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['airi-2','aleister','astrid-2','ata','butterfly-2','dirak','ignis-2','ishar','jinna','lauriel-3','nina-2','natalya-2','omen-2','qi-2','quillen3','raz','roxie-2','ryoma-2','taara-2','violet-3','wukong-4','wukong-3','krixi-2','krizziz','nurad-5','volkath','wisp-2','wukong-2','enzo-2','hayate-2','annette-2','capheny-2','celica','gildur-2','lauriel-2','nurad-4','quillen-2','sephera-2','qi','nurad-3','nurad-2','nakroth-2','zip','diao-chan-2','enzo','errol','joker','payna','slimz','thane','toro','veres','violet-2','wisp','yena','zill','arduin','arthur','batman','capheny','darcy','elsu','florentino','gildur','ignis','wukong','yena','zanis','violet','tulen','sephera','nurad','nina','lindis','liliana','lauriel','krixi','kahlii','hayate','diao-chan','butterfly','astrid','arum','annette','amily','airi','zuka','zephys','zanis','yorn','xeniel','veres','veera','tel-annas','taara','superman','skud','ryoma','roxie','quillen','omen','natalya','nakroth','lubu']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'teamlogo':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['cobra','dragon','eagle2','falcon','lion2','tiger2','bear','buffalo','eagle','lion','tiger','wolf']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'companylogo2':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'companylogo':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'gradientlogo':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'pencilsketch':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bird','butterfly','coffee','dove','leaf','like','lotus','milk-tea','panda','tree','woman','bear','bull','dragon','eagle','hawk','ninja','paw','rooster','sabertooth','skull','warrior','zebra']
if (!style.includes(m3)){ 
let listt = `*Icon Yg Kamu Masukkan Salah*\n\n_Berikut list icon yg benar, Total_ *${style.length}* _icon_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, icon : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'gunlogogaming':{
if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['ak47','ak47-s','an94','ar15','aug','awm','g36k','m4a1','m4-s','m14ebr','m16','m60','m82a1','mp5','scar','svd','xm8','xm1014']
if (!style.includes(m3)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'banneroffreefire':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['andrew','caroline','kelly','laura','maxim','miguel','misha','moco','nikita','notora','olivia','steffi']
if (!style.includes(m3)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'letterlogos':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
if (!style.includes(m3)){ 
let listt = `*Thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'bannerofoverwatch':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['widowmaker','tracer','symmetra','sombra','soldier76','reinhardt','reaper','orisa','mercy','mei','genji','dva','doomfist','ashe','ana']
if (!style.includes(m3)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'bannerofapex':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'bannerofpubg':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg11','bg10','bg9','bg8','bg7','bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'mascotstyle':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['dragon-5','jet','knight','skull-3','skull-cyborg','tiger-4','bee-3','dragon-4','fox-3','goat-2','kitsune','octopus-2','piranha','wolf','bear-2','cat','ceberus','crocodile','dinosaur','dragon-3','eagle-3','horse-2','husky','kraken','lynx','sabertooh','assassin','bee','cat2','demon','fox','gorilla','horus','octopus','rounin','scorpion','skull2','tiger3','tiger2','tiger','shark','sabertooth','rooster','rhino','puma','phoenix','panther','owl','lion','horse','hornet','griffin','goat','fox','eagle','dragon2','dragon','devil','cobra','bull','bear','monkey','warrior','rabbit','pirates','owl2','neonwolf','lionking','godzilla','flashwolf','fire','eagle2','dog','mask','team','pubg','drift','bee2']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'logoaccording':{
		if (!text) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bear2','cat2','ceberus','crocodile','dinosaur','dragon3','eagle3','horse2','husky','kraken','lynx','sabertooh','assassin','bee','cat','demon','fox-2','gorilla','horus','octopus','rounin','scorpion','-2','tiger-3','bg-tiger','bg-buffalo','chicken','bull','bg-wolf','jaguar','horse','eagle','dragon','wolver','shark','sabertooth','rhino','phoenix','lion','hornet','griffin','bear','tiger2','panther','owl','monkey','goat','fox','dragon2','devil','cobra','reaper','pirates','owl2','mask','fire','eagle2','chamois','neptune','parrots','samurai']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'avataroverwatch':{
		if (!text ) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!text.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['mccree','mercy','zenyatta','zarya','winston','widowmaker','tracer','torbjorn','symmetra','sombra','soldier76','soldier_76','roadhog','reinhardt','reaper2','reaper','pharah','orisa','mei','lucio','junkrat','hanzo','genji','dva','bastion','ana2','ana','doomfist','bg-1']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
case 'asmaulhusna':{
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let txt = '*Asmaul Husna*\n\n'
		txt += `• Latin : ${data.result.latin}\n`
		txt += `• Arabic : ${data.result.arabic}\n`
		txt += `• Tr id : ${data.result.translation_id}\n`
		txt += `• Tr en : ${data.result.translation_en}`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})
}
	break
case 'kisahnabi':{
	if (!text) return reply(`Ex : ${prefix + command} Adam`)
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {nabi : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Kisah Nabi*\n\n'
		txt += `• Name : ${data.result.name}\n`
		txt += `• Birth : ${data.result.birth}\n`
		txt += `• Death Age : ${data.result.death_age}\n`
		txt += `• Country : ${data.result.country_from}\n`
		txt += `• Story : ${data.result.story}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})}
	break
case 'jadwalshalat':{
	if (!text) return reply(`Ex : ${prefix + command} Makassar`)
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {daerah : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Jadwal Shalat *\n\n'
		txt += `• Daerah : ${q}\n\n`
		txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
		txt += `• Subuh : ${data.result.today.Shubuh}\n`
		txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
		txt += `• Ashr : ${data.result.today.Ashr}\n`
		txt += `• Magrib : ${data.result.today.Maghrib}\n`
		txt += `• Isya : ${data.result.today.Isya}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.err())
})
	}
	break
case 'randomquran':{
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, {audio: {url: short.ayah.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		})
		.catch(e =>{
reply(lang.err())
})
	}
	break
case 'randomquran2':{
	if (!text) return reply(`Ex : ${prefix + command} Juz\nUsage: ${prefix + command} 1`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {juz : q}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		alpha.sendMessage(from, {audio: {url: short.ayah.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		})
		.catch(e =>{
			reply(lang.err())
		})
	}
	break
case 'listsurah':{
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		listt = '*List Surah*\n\n'
		no = 0
		for (var i = 0; i < data.result.listsurah.length; i++) {
		no +=1
		listt += no.toString() + '.  '  + data.result.listsurah[i] + '\n'
		}
		reply(listt)
		})
		.catch(e =>{
reply(lang.err())
})
	}
	break
case 'tafsirsurah':{
	if (!text) return reply(`Ex : ${prefix + command} surah\nUsage: ${prefix + command} Al-fatihah`)
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {surah : q}, 'apikey'))
	.then(async data =>{
		let listt = '*Tafsir Surah*\n\n'
		let no = 0
		for (var i = 0; i < data.result.length; i++) {
		no +=1
		listt += `• Surah : ${data.result[i].surah}\n`
		listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
		}
		reply(listt)
		})
		.catch(e =>{
reply(lang.err())
})
	}
	break
case 'alquranaudio':{
	if(!text) return reply(`Ex : ${prefix + command} surah|ayat\nUsage: ${prefix + command} 1|2`)
	var mon = args.join(' ')
	var m1 = mon.split("|")[0]
	var m2 = mon.split("|")[1]
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {ayat: m2, surah : m1}, 'apikey'))
	let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
		listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
		listt += `• Surah ke : ${short.surah.number}\n`
		listt += `• Urutan : ${short.surah.sequence}\n`
		listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
		listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
		listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		listt += `• Juz : ${short.meta.juz}\n`
		listt += `• Page : ${short.meta.page}\n`
		listt += `• Manzil : ${short.meta.manzil}\n`
		listt += `• Ruku : ${short.meta.ruku}\n`
		listt += `• Quarte : ${short.meta.hizbQuarter}\n`
		listt += `• Arab : ${short.text.arab}\n`
		listt += `• Latin : ${short.text.transliteration.en}\n`
		listt += `• Tr en : ${short.translation.en}\n`
		listt += `• Tr id : ${short.translation.id}\n`
		listt += `• Tafsir short : ${short.tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.audio.primary)
		alpha.sendMessage(from, {audio: {url: short.audio.primary}, mimetype: 'audio/mpeg'}, {quoted:m})
		reply(listt)
		.catch(e =>{
reply(lang.err())
})
		}
	break
case 'awoawo':case 'benedict':case 'chat':case 'dbfly':case 'dino_kuning':case 'doge':case 'gojosatoru':case 'hope_boy':case 'jisoo':case 'kr_robot':case 'kucing':case 'lonte':case 'manusia_lidi':case 'menjamet':case 'meow':case 'nicholas':case 'patrick':case 'popoci':case 'sponsbob':case 'kawan_sponsbob':case 'tyni':{
	reply(lang.wait())
let lp = api('alfa', '/api/telegram-sticker/'+command, {}, 'apikey')
alpha.sendImageAsSticker(m.chat, lp, m, { packname: global.packname, author: global.author })
.catch(e =>{
reply(lang.err())
})
}
break
case 'google': {
                if (!text) return reply(`Example : ${prefix + command} Indonesia`)
                google({'query': text}).then(res => {
                let teks = `*Google Search*\n_Query : ${text}_\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n----------------------------------------\n\n`
                } 
                reply(teks)
                })
                }
                break
 default:
if (budy.startsWith('=>')) {
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
 if (sat == undefined) {
 bang = util.format(sul)
 }
 return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')) {
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
mengtermuk = budy.slice(2)
exec(mengtermuk, (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
})
}
}

//Anti View Once

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」

⭔ Nama : ${m.pushName}
⭔ User : @${m.sender.split("@")[0]}
⭔ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ Date : ${tanggal(new Date())}
⭔ MessageType : ${m.mtype}`

alpha.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
}

const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const match = (prefix instanceof RegExp ? // RegExp Mode?
[[prefix.exec(m.text), prefix]] :
Array.isArray(prefix) ? // Array?
prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof prefix === 'string' ? // String?
[[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
function _0x5617(_0x3df0c5,_0x74616e){const _0x383c2f=_0x28cf();return _0x5617=function(_0x4e9de0,_0x591cf3){_0x4e9de0=_0x4e9de0-(0xc20+0x7df*0x2+-0x1a72);let _0x3edc91=_0x383c2f[_0x4e9de0];return _0x3edc91;},_0x5617(_0x3df0c5,_0x74616e);}function _0x28cf(){const _0x156a95=['gambar\x20jad','h\x20dari\x20bat','QGXiG','」-----*','list\x20messa','edge_saved','gEcpF','AllPartici','*📚\x20Url\x20:*\x20','Win64;\x20x64','smeme2','3.0)\x20Gecko','🥰\x20Name\x20:\x20','RNJqN','/api/textp','ntah\x20','fbsd','fbaudio','ps4','elesai\x20','NO\x20WM','comrade','ytsearch','iKslI','JxyCC','📛\x20*Usernam','0\x20(X11;\x20Ub','ematika*\x0aC','age\x22]','videoCount','603.3.8\x20(K','\x0a│\x20*Runtim','qDuWV','ri/537.36','TAGRAM\x20STO','🔮\x20Public\x20R','5646528vCmPPF','i.github.c','\x22col-md-10','List\x20','0_9_4)\x20App','riPME','H\x20」-------','dnBSf','entries','ggu\x20sebent','gan\x20Captio','0_11_6)\x20Ap','asi\x20lebih\x20','key','e-6','BBcai','\x20Next\x20Orde','CqXvv','.mp4','html','NImtU','z4puTs%3D1','\x0a\x0a©\x20','ninja','&\x20Sfw\x20Comm','*\x0a\x0a','\x20Gecko/201','ete\x20list\x20m','tuk\x20berjua','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','NVGPU','DOppo','RJonv','n\x20dengan\x20k','d@4.0.0\x0a╰─','updated_at','🔥\x20Follower','message','\x0a*⏰\x20Durati','map','Xhpyz','WWzKl','\x20TANGGAL\x20:','\x0a*📺\x20Views\x20','facebookau','fxvKj','XDOYT','\x0a📛\x20Title\x20:','CHrwz','rsation/%s','AAAAAAAAAA','e\x20Gecko)\x20V','Zxfsi','「\x20*TRANSAK','is_private','JdvEu','memegen','kalkulator','Url\x5c(\x27(.*?','created_at','*-----\x20「GI','addlist','\x0a\x0aPesanan\x20','xLeWl','getQuotedO','\x0a_Kepoin\x20s','horror2','sizee','*----「\x20FAC','ffmpeg\x20-i\x20','connected_','me-random-','OVhXq','user-agent','BcjqE','Video\x20:\x20','div.thumb-','get','oEkJL','41c5e073df','nickname','ytstalk','6be38461fb','downloadAn','calc','Sukses\x20del','err','r.setThumb','play','dhWpn','4lfeqxn','rRQQej6DsU','jWbFY','WXUPa','ithub.com/','guest_toke','\x20*user*\x20*r','and\x20bot','\x20*,\x20/,\x20×,\x20','ike\x20Gecko)','Nuqwc','DRBQZ','hAXvT','Mediafire\x20','erintah\x20','.mp3','toLocaleSt','FcKYB','\x20Chrome/88','gctRM','awylU','9\x22]','fvFJE','zfABM','pageProps','hasOwnProp','AM\x20DOWNLOA','telecmd','1\x20Safari/5','koJqe','nUYCJ','uFFBg','ia\x20Link','circle','Kirim/Repl','rdaftar\x20di','href','dcast\x20Ke\x20','\x0a*📺\x20Ext\x20:*','jawaban','ontoh_\x0a\x0a','M8Bym-M%7C','body','downloader','⛩️\x20〉ɞ\x20Anime','╭─⬣「\x20_*INF','imgtag','media','balas\x20stik','f4edf6337e','_Untuk\x20dur','quality','deo:height','xajry','chat','yKEya','iILcC','ytsearch2','rv:57.0)\x20G','fbsd\x20','lan_','photo','igstalk','ytmp3\x20','mimetype','IiTes','57wEkomf','XsbFi','up_','Xscph','instastory','https','HTML,\x20like','\x20bot_','ng\x20:\x20','ersion/11.','append','\x0a_Random\x20g','g\x20:\x20','7.0)\x20Gecko','n\x20Caption\x20','FAGEO','lami_','JKzWI','berapa\x20saa',':*\x20',',\x20)\x20yang\x20d','\x0a🔔\x20Reels\x20:','utube.com/','sendImage','id,en-US;q','.json?twee','ovced','jxgkt','asa*\x0a\x0aDaft','ari/537.36','Rest\x20Api\x27s','cqUia','youtube.co','timestamp','value','\x0a│\x20*Wib*\x20:','e-10','jYYxO','ae15dbf66e','📖\x20Update\x20:','_masturber','UAHam','SlideBig\x5c(','Donasi','qCtMq','.0.3497.92','halloween2','owfqt','IfvDe','JTWMe','IOCYf','\x0a\x0a_Untuk\x20s','g\x20unik_','scale','rYErr','userJid','NYSdA','QNIRO','a06e446de6','subCount','kJWGx','itude','Click\x20Here','om/repos/','eReIu','TEXKa','#video-pla','fVuhF','*\x20tidak\x20ad','sessionid=','ytshortsmp','tiktoknowm','81IUq16cHj','profile','dBypT','gamecmd','Zv7ttfk8LF','jIZRK','cript:nth-','WRkZO','0_9_3)\x20App','605.1.15\x20(','e*\x20:\x20','YKcBu','Kirim/repl','me/65.0.33','instatouch','85.125\x20Saf','cYnWC','dictator','ARPet',')\x27\x5c);','bar\x20anime_','VQMKI','round=','ULKiD','followers','wait','globalObje','SQtRt','「\x20*YOUTUBE','om/users/','hitungmath','mediaType','attr','\x0a_Semua\x20fi','\x0a🚀\x20Diuploa','NpaLH','hlklY','goImk','.0.4430.21','girim\x20Broa','img-','f6c70d7dc8','jBJyd','ksvHI','bHUTP','vVGdo','m/video-13','vxipL','ey\x20*','oNKqv','ljLqI','updatelist','rows','e-21','dellist','*📟\x20Quality','https://xt','sSticker','PjVwD','01.7.7','informasi\x20','\x0a_Membuat\x20','fox/68.0','\x20*text*','qZaDB','yfdxw','tiktok','YYDKc','.0.4324.10','F_CxT9L0um','rty=\x22og:im','SyTDF','t/download','ah,\x20hanya\x20','soHbq','?avatar=','ruxes','u\x20Selesai\x20','BlVeV','\x20*kode\x20bah','*\x20\x0a⏰\x20Duras','facebook.c','result','🆔\x20ID\x20:\x20','Tyqgc','.com/req/','facebookhd','UTMDx','\x20zee|apa','xidUv','data','Qndcr','includes','extension','soal','GbjAp','send5ButIm','ring','ssage','unlinkSync','ddungeon','join','*💾\x20Size\x20MP','tory','timeline','e-3','ate\x20list\x20m','pVXPg','rules','fbhd\x20','exbkR','DWAwT','VYCLN','CQzqY','y\x20Foto/Sti','.tmp','uzKpk','html5playe','Nsemm','QzmDZ','fullName','div[class=','me/36.0.19','ghstalk*\x20z','\x0a│\x20\x20*Numbe','JnmRC','\x20\x0a│\x20*Name*','KjQOW','2621507aiDJlK','RIfVm','\x20Group\x20Cha','PcOHu','SyXrB','dio','invertgrey','.0.4515.10','_Tunggu\x20be','stickermem','bot\x20ini_','🎎\x20〉ɞ\x20Rando','xmSjV','ail','\x20Chrome/69','donate','71c41113cd','0|2','post','_collectio','YdoNz','ize','Source\x20Cod','YrXIq','\x0a💌\x20Biograp','erty','tiktokaudi','HpOgL','terkini\x20me','Username\x20:','XPtMR','legra.ph','githubstal','textprocmd','asa*\x20*teks','AUDIO','e-11','\x20Safari/53','xdcoC','e-2','layered','WBYGi','ierge_de_1','sharpen','📍\x20Location','\x20*soal\x20mat','Reply\x20Imag','wnOVJ','e_hentai*','KHTML,\x20lik','LykiF','wnvideo.ne','aAEbm','\x0a\x0a_Proses\x20','vTXkg','kRjmk','pornhub','\x0a*☕\x20Channe','UrlHigh\x5c(\x27','JFNZY','xnYtY','WKZDR','realistic','ZimRP','LQgwo','variants','stitchEnab','yhyCz','wfijr','authorizat','ng\x20gk\x20pent','ker\x20dengan','DER*\x20」','instavid','GtcrH','🎮\x20〉ɞ\x20Games','ttons','yts','owner','JhGDw','1050055Tgjeli','yang\x20di\x20du','\x0a_________','\x20di\x20dalam\x20','\x20detik','ngan\x20cara\x20','PWOkw','glitch2','match','Contoh\x20:\x0a\x0a','gay','gitclone','glitch','0_10;\x20rv:3','*🎞️\x20Type\x20:*','HhpOq','is_verifie','ality\x20:*\x201','sZJxt','tanyze;\x20Li','rty=\x22og:ti','tiktokwm','kRyCr','dSaveMedia','meta[prope','*----「\x20XNX','\x20:\x20@','IYPyV','linkk','tps://gith','lication/s','\x0a📛\x20Channel','Hayoloh\x20Te','t_mode=ext','🔏\x20Company\x20','Kwata','HVGAg','Adifr','video','\x20Command','\x20Effect\x20Co','AAAAAAAANR','packname','VQupH','fbdl','videos','MTYmW','sesuatu\x20ya','Download','an\x20bot_','ideo.mp4','broadcastg','div.downlo','ch*','fototag','Command','Group','https://do','Owner','(.*?)\x27\x5c);','agVad','sposition','GpZXj','cDcsF','rty=\x22og:vi','moustache','\x20SEARCH*\x20」','37.75.14\x20(','.png','searchcmd','guwVr','https://ww','101\x20Firefo','eator','mYRIB','Facebook\x20V','3:*\x20','\x20」----*\x0a\x0a*','hcTwC','facebookdl','KCKKp','sender','\x20\x20\x20\x20\x20','dho','find','tiktok.com','usus\x20owner','sid_tt=7d0','cript\x20bot\x20','UHUyn','ersi\x20sesua','fileName','jWKLu','cOhaY','all','\x0a⌚\x20JAM\x20\x20\x20\x20','formattedS','e/apng,*/*','\x20dalam\x20ben','VQHqR','jyHtq','cmd','\x20Chrome/91','OfLar','jwKdr','audio/mpeg','Mbejy','applicatio','Sukses\x20set','Subscribe','0\x20(Windows','MedFR','command','redple','ghstalk','.google.co','fullname','rejected','islamcmd','\x20list\x20deng','animecmd','gqoaA','\x20:\x20Pending','Slide\x5c(\x27(.','Broadcast','AvvbO','duration','fkXqd','YbFHp','🌍\x20Public\x20G','\x20Chrome/92','urasi\x20lebi','igfoto','QuZEA','#__NEXT_DA','an\x20key\x20*','stickmeme','Bearer\x20AAA','sezMb','wNtIQ','uniqueId','📭\x20Twitter\x20','25.181\x20Saf','#token','rsion/9.1.','*💢\x20Total\x20:','est/activa','type','Url','n\x20sesuatu\x20','push','ntah\x20*','\x20https://i','3AGWWjCpTn','D/MM/YYYY','durasi','efs/heads/','PubXG','👭\x20〉ɞ\x20Cecan','iafire\x20Dow','ik_','\x0a_Mencari\x20','No\x20media','UEZKt','PdkaY','sendsessio','instagrams','0\x20(X11;\x20Li','ytshortmp3','descriptio','cookie','author','wrongForma','trim','vyoDy','.php','HnfOd','msVty','fUCXo','tuk\x20link_','\x0a_Fitur\x20un','EouYF','/605.1.15','timeout','stiktag','xmlMode','adcast','\x20:*\x20','extended_e','*\x20belum\x20te','__________','4\x20Safari/5','WlvYH','catch','RviOI','epo\x20:\x20','\x20dengan\x20fi','rzorg','src','\x20file,\x20tun','space3d','avatarLarg','EBOOK\x20DOWN','01.2.7','https://ap','ase\x20Comman','nyoLW','\x0a│\x20\x20*Statu','split','mand','CxfYV','kZSbX','generate','high','reel_count','xcgFw','animated_g','\x201/2','token','🔎\x20〉ɞ\x20Searc','y\x20foto\x20den','guages','\x0a_Fitur\x20kh','duetEnable','ps://cloud','WoMvG','on\x20Command','rEWHy','me/67.0.33','1%7Cfpftin','\x0a🌀\x20Url\x20:\x20','\x0a👁️\x20Private','isGroup','619b5067b8','.*?)\x27\x5c);','.jpg','0_10_5)\x20Ap','Firefox/47','ytmp4','✨\x20*Followi','Url169\x5c(\x27(','accept','WSnXi','0\x20(Macinto','HH:mm:ss\x20D','Facebook\x20M','ZAESR','bel','guage','ersion/7.0','pengiriman','Nih','\x20:\x20*','gitude','\x0a│\x20*Wita*\x20','ended','\x20Chrome/85','4|3|1|0|2','UYbzq','tle\x22]','iVpqD','Not\x20a\x20Twit','\x20Mp3\x0a*👍\x20Qu','*\x20:\x20','\x20|\x20','\x20Baileys-M','📝\x20Type\x20:\x20','yer-bg\x20>\x20s','*?\x0a\x0aWaktu:','\x0a\x20\x20\x20\x20\x20\x20','instatv','AsUVQ','📸\x20〉ɞ\x20Text\x20','.0.4430.93','All\x20menu\x20b','lava','thanksto','\x20disajikan','props','HD\x20','\x20:\x20Berhasi','sil\x20dari:\x20','vas/','createTime','.3\x20Safari/','ngan\x20Capti','rsion/9.0.','tur\x20/\x20comm','wtxls','Mengirim\x20B','sQqKA','\x20sedang\x20di','l,applicat','*🔗\x20Link\x20:*','tyatY','./image/to','L*\x20」\x0a\x0a```📆','🧐\x20〉ɞ\x20Stalk','imagetag','r.setVideo','601.7.7\x20(K','yts2','wwHby','x/57.0','bagi','RYNFB','\x20_*INFO\x20BO','JPlwt','lesaikan!','zGPJC','ate\x20respon','iYBQt','rape_ma_de','an\x20dalam\x20b','rAUsl','YouTube\x20Cr','.0.2743.11','ccQrV','EvEHI','7\x20Safari/5','length','LVYmi','👻\x20〉ɞ\x20Stick','igstory','MP3\x20','ratio','TUBE\x20VIDEO','🔗\x20Link:\x20','ago','set-cookie','twitter_us','MGFOi','XyXXR','\x20tes|apa','https://ti','.0.4472.12',';\x20rv:45.0)','\x2018+_','translate','ist\x20>\x20div:','cc;\x20ttwid=','Ex.\x20','sSaEx','kan\x20fitur\x20','*BROADCAST','Format\x20sal','\x20list\x20mess','fbaudio\x20','vOMBD','coolwg','templateMe','locationMe','KkMDh','toFixed','\x0a_Fitur\x20is','Mac\x20OS\x20X\x201','WXXSN','epo*\x20*bran','videotimel','x-guest-to','fb.watch','tQidi','entuk\x20link','😎\x20Views:\x20','under','/15.15063','Belum\x20ada\x20','6f9p3a/att','603.3.8','#results-l','ter\x20URL','\x20Chrome/52','store','RGjMC','KmAJv','displayTex','xnxxsearch','nGiBV','ytshorts','code','togif','sed','e-9','itemInfo','Mozilla/5.','r*\x20:\x20@','GCEwz','\x0a😎\x20Views\x20:','base','p.net','mADja','BOT*','fox/45.0','\x20*teks|tek','EQzam','link','biography','wjEEh','kali','input','TAymt','1.\x20Kirim\x20p','hydratedCo','Selamat\x20','YJHQt','\x0a🎭\x20Width\x20:','oFGsl','ge\x20di\x20data','dPbYr','*/*','\x0a_Mengkorv','./lib/math','nload\x20」---','metalg2','sendText','e-15','nyurl.com/','3|1|2|5|0|','e\x20:*\x20','Url\x20:*\x20','\x20Chrome/65','pating','APIs','Maaf,\x20untu','instagram','then','rpneD','GQPHS','reply','mRbwg','80Kbps\x0a*🌀\x20','locale','instareels','📥\x20〉ɞ\x20Downl','ww.xnxx.co','EzgOQ','NDavF','tambah','CjoAb','metRe','\x0a_Menandai','XEldc','ORIgB','count','update','QzuVd','eQtnA','\x0a🌀\x20Link\x20:\x20','llHmE','hydratedFo','ne_media','full_name','ticker\x20Com','logo\x20menar','Xnxx\x20Searc','qQZOd','ecko/20100','tOvvi','jail','👦\x20〉ɞ\x20Owner','fVIVq','.7,ms;q=0.','load','rKiem','Video','kurang','roadcast\x20K','rty=\x22og:du','filter','passed','QioHN','YPldr','age\x20dengan','vyarK','a\x20di\x20group','com/1.1/gu','apikey','math\x20mediu','TLucy','red','kuismath','adminOnly','DSOvp','Reply\x20stic','eIcCR','child(6)','*?)\x27\x5c);','serializeM','caption\x20*','⬣\x0a│\x20\x20*Name','roup','gdYwz','ludic','erorLink','c_url','Rules','n\x20Command','\x0a_Untuk\x20me','XNXX\x20SEARC','Download\x20V','tuk\x20bermai','INDONESIAN','UTUBE\x20PLAY','\x20Gecko)\x20Ve','getUserMet','xosSG','l```\x0a\x0aTeri','uXDMJ','led','1.2\x20Safari','\x20👋,\x20saya\x20*','cyieG','/webp,imag','fire','YviPK','objou','essage\x20den','node_id','ecko)\x20Chro','ro/','username','tur\x20bot_','601.2.7\x20(K','degreesLon','*🐥\x20Title\x20:','videoType','public','\x27(.*?)\x27\x5c);','com/2/time','QBdtb','URnEX','czRcP','EJEfF','iVIeR','bMayW','and','ZdnmS','q=0.9','om/','stagram.co','DqPlm','Kit/537.36','content-ty','382e886d26','LduSf','deo:type\x22]','jpegThumbn','LzdtM','🆔\x20*ID\x20:*\x20','16xxiQgf','exec','videoHeigh','.0.3325.18','rmation\x20Co','e\x20bot_','low','degreesLat','DONATE','hydratedTe','CgJtV','jKIdN','short','🎀\x20*Followi','triggered','igphoto','i:\x20','UFwnu','ibutors','\x20member\x20gr','\x0a⏰\x20Durasi\x20','\x22input-gro','list','=0.9,en;q=','1638207165','----------','Facebook','ontrole_de','dari\x20batas','converterc','Button','files','./image/im','sQKfD','stiker\x20yan','toLowerCas','\x0a🔭\x20Koleksi','mediafire','zNsRu','rm-urlenco','sticktag','imeline\x20:\x20','rv:47.0)\x20G','%7C9fde9d2','UgihW','graphql','medias','Public-Mod','untu;\x20Linu','allmenu','keys','X\x20DOWNLOAD','smeme','lookwhatka','mage\x20anime','wanted','views','Ozwqh','tweets','w.xnxx.com','uH5E6I8xnZ','div.thumb','NwIzUejRCO','jDqdE','ound_','\x0a_Random\x20v','api','\x0a📲\x20Connect','distort','email','💋\x20*Fullnam','coolg','\x20menggunak','tiker\x20dari','text/html,','vidtag','0_9_5)\x20App','-*\x0a\x0a📬\x20Name','up\x20col-lg-','mEgsA','\x0a_Menampil','*💾\x20Size\x20HD','\x0a📬\x20Timelin','group','YbQxt','tovideo','Audio','Math.E','McoUq','ad\x20>\x20a','gan\x20captio','legra.ph/u','igtv','/search/','Eror','test','ocQED','KGqvu','request','frame','KtkIR','BoFRd','nggunaan:\x20','cWEWO','.0.3945.88','ion/xml;q=','00101\x20Fire','ctMGY','ration\x22]','text2','\x20:\x20','json','Qfzse','QmjvN','User\x20','pTcKY','ttdownload','\x0a*⚙️\x20Size\x20:','aktifkan','ghuser','Message','x/47.0','oWPmH','AgfNl','\x0a*🔗\x20URL\x20Vi','0.8,es;q=0','mkyjB','Instagram\x20','Pro\x20Comman','📅\x20Created\x20','sh;\x20Intel\x20','@s.whatsap','lion','savedmedia','video/mp4','.png?backg','OUGCt','ixomV','ange;v=b3;','t_csrf_tok','lalui\x20bot_','xtmKP','pleWebKit/','*\x20」-----\x0a\x0a','a\x20yang\x20ber','video_info','ded','source','hCxTs','jbWIh','NCRfK','groupFetch','mZDhH','HbdOm','private','yOhsD','blurple','cker\x20Denga','vDIpw','*\x20=\x20_','37.36','*\x20sudah\x20ad','Facebook\x20v','\x0a📁\x20Type\x20:\x20','toCso','ase!','stickertag','7.36','cecancmd','ytmp3','yJyMw','SBvBM','profilePic','bDIdUp-','i.memegen.',';\x20rv:68.0)','nlnhv','CkbAF','bcall','PsWnf','kWHfy','readFileSy','ar..._','s/custom/-','SnXtO','https://so','*\x0a🌀\x20Url\x20:\x20','fFqFg','🤖\x20〉ɞ\x20\x20All\x20','egYMy','qyvki','\x20caption\x20','Hvyhh','instareel','🖼️\x20〉ɞ\x20Logo\x20','channel','📬\x20Title\x20:\x20','deepfry','sxsar','÷,\x20π,\x20e,\x20(','cluded.','ber\x20:\x20','ngan\x20capti','e\x20:\x20','SdwAb','nsfw','full_text','chats','accept-lan','nZOpp','profile_pi','api.ml/can','0\x20Safari/5','content','media_url_','oterText','riQVF','FYGYV','i.twitter.','bPtqG','music','HLS\x5c(\x27(.*?','user/repo','nbkOB','mVTXC',';q=0.8,app','4|6','mp4','e-1','\x20cantik_','VzLsJ','rowId','uuKFV','37.36\x20Edge','info','h\x20Command','caption','makasih\x20@','aajHg','myrpp','💌\x20Bio\x20:\x20','e-7','eeoneofc','nxRHR','BmslT','\x0a*📆\x20Upload','quoted','*💾\x20Size\x20SD','NIgAm','\x20NT\x2010.0;\x20','m\x20Anime\x20Co','aMIYz','vhsWs','urlButton','\x20(KHTML,\x20l','📁\x20〉ɞ\x20Datab','\x0a🔗\x20Url\x20:\x20','tiker\x20anim','\x20key\x20:\x20*','\x0a✅\x20Verifie','UrlLow\x5c(\x27(','.0.4183.12','28Kbps\x0a*🌀\x20','invert','⏰\x20Upload:\x20','waktu','wolf_bw','send5ButLo','False','\x201+2','mi-soeur_v','ar\x20bahasa\x20','/20100101\x20','30383530gYbZRf','headers','on\x20','ken','ncgRb','E7FBAF','\x0a🌀\x20Bio\x20Url','line/conve','fromMe','Sprad','Menu','ing_','e-23','nth-child(','deo\x20:*\x20','green','hy\x20:\x20\x0a','🤳\x20〉ɞ\x20Ephot','nscZn','igdl','\x0a\x0a_Untuk\x20d','0|3','/THUMBNUM/','y\x20audio\x20de','tourl','content-di','subCountLa','KgTnf','rv:88.0)\x20G','d1755f690a','\x20\x20\x0a╰─⬣','nstagram.c','groupcmd','PdIUb','EMjMG','deo:width\x22','pUzlR','ctIAr','📬\x20〉ɞ\x20Nsfw\x20','quickReply','youtu.be','narik_','Htfdn','\x20uid_tt=33','rOolb','CJOps','stalkcmd','EyfjX','No\x20Name\x20In','mbuat\x20logo','OTyyn','LjISD','ini_','1067344DKeHLd','hdTni','URL','TUBE\x20AUDIO','highlight_','Math.PI','sendMessag','getMsgBuff','⁉️\x20〉ɞ\x20\x20Info','0-9\x20dan\x20Si','dkZtt','mfdNy','link/image','45970gMGPXW','videotag','numeric','thub.com/','zbMAk','done','DrQdO','on\x20:*\x20','hydratedBu','YOWTP','facebook','attp','title','an\x20dikirim','\x20Mp4\x0a*👍\x20Qu','Prefix*\x20:\x20','wed_by','/archive/r','ng\x20:*\x20','1050525JVNDKf','\x0a✨\x20STATUS\x20','tu\x20dengan\x20','\x20*key|resp','3:6LxSkBb8','calculator','\x20Media','name','oGcui','kRfCt','metalr','0\x20(X11;\x20Da',')\x0a🎦\x20Total\x20','download','\x20chat\x20deng','following','ML,\x20like\x20G','AcbeT','nux\x20x86_64','cDyXm','♎\x20Followin',')\x20AppleWeb','collection','.json','matika','SD\x20','1\x20Safari/6','\x20Kah?','GnwSl','x/88.0','bio','n/xhtml+xm','Sukses\x20upd','*\x0a2.\x20Reply','\x0a⚠️\x20Size\x20:\x20','SXCqt','oup_','Fatih\x20Arri','uNHsp','s\x20:\x20','BtCIs','tegori_','wmctx','t,\x20Waktu\x20S','YXmDx','nYWwn','\x0a---------','igned-exch','\x0a_Menyimpa','soundcmd','m/translat','YfeCR','\x0a│\x20*Lib*\x20:','VUNTY','_avec_le_c','lIeKz','rain_de_se','_ma_consol','VPQTL','avif,image','XCxQR','primboncmd','sec-fetch-','pload','0.9,image/','_media','https://in','T*_\x20」⬣\x0a│\x20*','SjUqB','QcNuM','an\x20caption','oCcek','relayMessa','📺\x20〉ɞ\x20Asupa','.2\x20Safari/','t\x20media\x20ak','Firefox/33','MQwrz','NpkkA','youtubesta','\x20Chrome/79','replace','\x0a│\x20*Mode*\x20','masa\x20kini_','c_url_hd','Czivx','nIenF','37.36\x20(KHT','\x20*teks*','image','bBmzk','file','TgDVb','📧\x20Email\x20:\x20','SI\x20BERHASI','wCKST','cover','hLTvJu4FA3','mimee','*----「\x20INS','🧿\x20〉ɞ\x20Conve','List\x20respo','IOJdB','BGHnk','\x20dengan\x20bo','rsion/10.1','\x20belum\x20di\x20','0|1|3|4|2','di\x20databas','----\x0a','txFFW','\x201-2','\x0a👻\x20Subscri','96.87\x20Safa','*📫\x20Title\x20:','greyscale','6|5|1|3|4|','_____\x0a\x0a','jbPhG','cts','POST','Isinya?','efAmX','method','sxrCx','avatar_url','RtBiv','BTBrT','edge_felix','donasi','oxQKG','facebooksd','naman','fb_page','ub.com/','GYyJl','e-17','ommand','UmtGP','thMentions','vdrPr','mp3','ozDpN','HHgup','stickercmd','THUB\x20STALK','fc*','usic.mp3','sendImageA','document','atan\x20:\x0a','\x20☺️','tlnGp','5|0|1|3|2|','e-24','YjuJe','kUReK','writeFileS','lti-device','lSxMb','\x20https://g','s/custom/','Gunakan\x20de','rs\x20:*\x20','ality\x20:*\x204','random','Thanks\x20To','y\x20video\x20de','wolf_g','s\x0aJawaban:','🌐\x20Blog\x20:\x20','XsYWK','\x20*zeeone|o','\x20GROUP*\x0a\x0a','sendTextWi','\x20Chrome/77','eatwN','\x20Owner️\x20','ge\x20yang\x20te','leWebKit/5','pCoNT','*-------「\x20','wNjks','.php?url=','ey\x20:\x20*','ngJrm','othercmd','odmvR','external_u','stone','Mode:\x20','💌\x20*Followe','Kirim\x20peri','gitrepo','tiktokwm\x20','slice','usabm','user','\x20TIME*_\x20」⬣','🛍️\x20〉ɞ\x20Store','x\x20x86_64;\x20','ICDAj','2\x20Safari/6','emror','text','clglR','ERtuV','TJUGH','session','🎀\x20Title\x20:*','rter\x20Comma','*Berapa\x20ha','etAYD','ot_','each','CdHtX','qOJFZ','e-25','sepia','\x20Chrome/90','6\x20Safari/5','Procfile\x20U','\x20https://w','TUlkM','url','y\x20Foto\x20Den','api-create','isupport','gTIbQ','posterize','brazzers','existsSync','CYCgN','Fitur\x20nsfw','jWlMy','\x0a_Sumber\x20s','te.json','AsIvy','span.metad','RY\x20」----*','ata','s*\x20:\x20','https://tt','format','*----「\x20YOU','UojCq','status','boleh\x20sama','floor','\x201*2','HEAD','.0.3865.12','asupancmd','LNeYG','8_ans_en_t','.0.3497.10','xhAZp','Sub\x20Menu\x20K','onse*\x0a\x0a_Co','WRUgJ','random\x20gam','\x20*key*\x0a\x0a_C','Maker\x20Comm','ntoh_\x0a\x0a','mmand','h7CEhYgKNa','uFTGf','ILgAAAAAAn','e-5','Url\x20Invali','\x20group\x20ini','instaphoto','oSliG','\x0a_Random\x20s','jdyPK','TyDrK','EAWai','vntag','login','Sesi\x20Yang\x20','https://te','e\x20Code','ion','\x0a_Siapa\x20aj','User-Agent','Github','IzVXA','alfa','\x20zee','bagel','pwhPY','zpdPP','sniper','OlPsv','videoWidth'];_0x28cf=function(){return _0x156a95;};return _0x28cf();}function _0x5546ba(_0x29dca9,_0x1d1de4,_0x519ba7,_0x821b6f){return _0x5617(_0x519ba7- -0x204,_0x821b6f);}function _0x2e98f4(_0x508484,_0x4ad866,_0x350bc2,_0x5c37d5){return _0x5617(_0x4ad866-0x7c,_0x508484);}(function(_0x4ae902,_0x2f0d06){const _0x564a8c=_0x4ae902();function _0x35d96b(_0x15f3c9,_0x518d18,_0x5ecf4e,_0x6c30bf){return _0x5617(_0x518d18-0xa7,_0x6c30bf);}function _0x4e2e09(_0x55e8da,_0x553d65,_0x362531,_0x128f72){return _0x5617(_0x55e8da-0x325,_0x362531);}while(!![]){try{const _0x4891f1=-parseInt(_0x4e2e09(0x81c,0x9f1,0x5a7,0xac9))/(-0x1fab+-0xaf3+0x2a9f)+parseInt(_0x35d96b(0x3a3,0x5ab,0x36a,0x6b0))/(0x1659+0x2d+-0xb42*0x2)*(parseInt(_0x4e2e09(0xa23,0x95b,0x786,0xbd4))/(-0x1119*-0x2+0x1*-0x47f+-0x1db0))+parseInt(_0x4e2e09(0x9e1,0x716,0xa45,0xa97))/(0x2514+0x1b5f+-0x406f*0x1)*(-parseInt(_0x4e2e09(0x4b1,0x6b2,0x6d4,0x453))/(-0x188d*-0x1+0x4cb*-0x6+0x43a))+-parseInt(_0x4e2e09(0x987,0x70e,0x979,0xc0f))/(0x25f5+0x2*-0x106a+-0x1*0x51b)+-parseInt(_0x35d96b(0xb8b,0x86d,0x7cf,0xa0e))/(0x15a7+-0x256a+-0x2b*-0x5e)*(parseInt(_0x4e2e09(0x6d6,0x828,0x920,0x3c8))/(0x1*-0x20ab+-0x1a1+0x2*0x112a))+parseInt(_0x35d96b(0x38e,0x5be,0x704,0x544))/(-0x5d*0x44+0x239d+-0xae0)+parseInt(_0x35d96b(0x24f,0x569,0x379,0x6e4))/(0x25d3+-0x1*0x80c+0x17*-0x14b);if(_0x4891f1===_0x2f0d06)break;else _0x564a8c['push'](_0x564a8c['shift']());}catch(_0x42025e){_0x564a8c['push'](_0x564a8c['shift']());}}}(_0x28cf,-0xc8e*0x17+-0x1fae*-0x83+-0x10bc*0x55));switch(command){case _0x5546ba(0x75,0x2e0,0x30a,0x182):case'fb':case _0x2e98f4(0x2f3,0x234,-0xce,0xdb):case _0x5546ba(0x1a2,0x100,-0x29,-0x1f9):{if(!q)return reply(lang[_0x5546ba(-0x2d9,-0x28d,0x34,-0x51)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x5546ba(0x27a,0x209,0x34,0xaa)+'t'](prefix));if(!text[_0x5546ba(0x2c1,0x326,0x59e,0x489)](_0x5546ba(0x341,0x3f5,0x593,0x814)+'om')&&!text['includes'](_0x5546ba(0x147,0x2cc,0xf0,0x1ed)))return reply(lang[_0x2e98f4(0x5b3,0x2b4,0x242,0x31)+'t'](prefix));await reply(lang[_0x2e98f4(0x82e,0x7db,0x5ae,0x543)]());const API_GUEST='https://ap'+_0x5546ba(0x29c,0x38f,0x287,0x2be)+_0x5546ba(0x7e,0x1f1,0x163,0x386)+_0x5546ba(0x301,-0x214,0x1a,-0x12a)+'te.json',API_TIMELINE=_0x2e98f4(0x56b,0x2d4,0x3c6,0x602)+'i.twitter.'+_0x5546ba(0x228,-0x131,0x198,0x1f0)+_0x2e98f4(0x29f,0x545,0x655,0x303)+_0x2e98f4(0x55e,0x70f,0x4f3,0x976)+'.json?twee'+_0x5546ba(-0x1f5,0x220,-0x57,-0x268)+'ended',AUTH=_0x2e98f4(0x3b9,0x291,0x360,0x350)+_0x5546ba(0x469,0x349,0x490,0x262)+_0x2e98f4(0x401,0x231,-0x58,0x114)+_0x5546ba(0x1c6,0x5bb,0x41e,0x592)+_0x2e98f4(0x1af,0x46b,0x34a,0x304)+_0x2e98f4(0x79d,0x469,0x316,0x4fb)+_0x2e98f4(0x70c,0x6f3,0x803,0x429)+_0x2e98f4(0x525,0x7c6,0x8e8,0x6be)+'81IUq16cHj'+'hLTvJu4FA3'+'3AGWWjCpTn'+'A',UserAgent=()=>{const _0x31217b={};_0x31217b[_0x53f05c(0x6a0,0x44c,0x470,0x29f)]=_0x53f05c(0x1ea,0x33e,0xbd,0x357)+_0x53f05c(-0x11b,-0x1ea,0x30,-0x159)+_0x53f05c(-0xe,0x14c,0x1e4,0xdd)+_0x5b8d38(0x144,0x2a0,0xa0,-0x9)+_0x53f05c(0x25b,0x366,0x41e,0x13c)+_0x53f05c(-0x61,0x103,0x1f0,0xc5)+_0x53f05c(0x686,0x52b,0x500,0x458)+_0x53f05c(-0x3d9,-0x133,-0xe2,0x208)+_0x5b8d38(0x445,0x2e4,0x446,0x214)+_0x5b8d38(0x5fd,0x72a,0x4b8,0x7f6)+_0x53f05c(0x243,0x37e,0x13a,0x32e)+_0x5b8d38(0x41,0x2ca,-0xd,0x321),_0x31217b['oGcui']=_0x53f05c(0x12b,-0xf3,0xbd,0x1db)+_0x53f05c(-0xfd,0x8d,-0x55,-0x83)+_0x5b8d38(0x3bf,0xf5,0x25b,0x330)+'Win64;\x20x64'+')\x20AppleWeb'+_0x53f05c(-0xfb,0x3f,0x15a,0x267)+_0x5b8d38(-0xa,0x463,0x260,-0xd9)+_0x5b8d38(0x4ea,0x54d,0x476,0x72e)+_0x5b8d38(0x612,0x274,0x585,0x629)+_0x53f05c(0x2b7,0x143,0x3c7,0x28b)+_0x5b8d38(0x47f,0x3bd,0x236,-0xfa)+_0x53f05c(0xc7,-0x15,0x202,0x52b);function _0x53f05c(_0x1a961c,_0x32225f,_0x3b7a8d,_0x1acd90){return _0x5546ba(_0x1a961c-0x16e,_0x32225f-0x128,_0x3b7a8d- -0x4b,_0x32225f);}_0x31217b[_0x53f05c(0x49a,0x667,0x4ef,0x4c6)]='Mozilla/5.'+_0x5b8d38(0x42,0x4af,0x2d3,-0x3a)+'tanyze;\x20Li'+_0x5b8d38(0x4ff,0x406,0x2da,0x16a)+')\x20AppleWeb'+'Kit/537.36'+'\x20(KHTML,\x20l'+_0x53f05c(0x694,0x695,0x476,0x2af)+_0x5b8d38(0x318,0x170,0xe1,0x18a)+_0x5b8d38(-0xbc,0x102,0x165,0x1)+_0x53f05c(0x46b,0x14a,0x489,0x368)+_0x53f05c(0xa5,0x415,0x202,-0xbd),_0x31217b[_0x53f05c(0x71,-0x2c1,0x10,0x161)]=_0x53f05c(0x2e4,-0x220,0xbd,0x282)+_0x53f05c(0x1b2,-0x20c,0x30,0x97)+'sh;\x20Intel\x20'+_0x53f05c(0x113,-0x252,0xa0,-0x8b)+_0x53f05c(0x404,0x3ef,0x4ff,0x535)+'leWebKit/5'+_0x53f05c(0x1c2,-0xc9,-0x80,0x261)+'KHTML,\x20lik'+'e\x20Gecko)\x20V'+_0x53f05c(0x226,-0x294,0x36,0x30b)+'.3\x20Safari/'+_0x53f05c(0x3a,0x11b,0x278,0x55a),_0x31217b[_0x5b8d38(0x1bb,0x3c5,0x2ff,0x2ac)]='Mozilla/5.'+_0x53f05c(-0x1c6,0x34f,0x30,0x347)+_0x5b8d38(0x350,-0x69,0x1e4,0x26a)+_0x53f05c(-0x8f,0x2c8,0xa0,-0x3d)+_0x5b8d38(0xbf,-0x1d0,-0xb6,0x266)+_0x53f05c(0x30d,0x51d,0x3fa,0x552)+_0x53f05c(0x308,0x570,0x272,-0x8b)+'Firefox/33'+'.0',_0x31217b['HpOgL']='Mozilla/5.'+_0x53f05c(0x24,-0x8f,-0x55,-0x345)+'\x20NT\x2010.0;\x20'+_0x53f05c(0x704,0xf3,0x3f8,0x18e)+_0x5b8d38(0x44c,0x545,0x2dd,0x51e)+'Kit/537.36'+_0x53f05c(0x1ee,0x286,0x260,0x596)+_0x5b8d38(0x1ac,0x75e,0x476,0x6b5)+_0x5b8d38(0x290,0x7d,0x3a3,0x466)+_0x53f05c(-0x2e3,-0xed,0x4e,-0x2aa)+'\x20Safari/53'+_0x53f05c(0x272,0x16e,0x209,0x1b1),_0x31217b[_0x53f05c(0x2fa,0x406,0x3bd,0x421)]='Mozilla/5.'+'0\x20(Windows'+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+_0x53f05c(0x5f4,0x5c1,0x2dd,0x3c7)+_0x5b8d38(0x172,-0x12b,0x15a,0x293)+_0x53f05c(0x14b,0xa9,0x260,0x56e)+_0x5b8d38(0x232,0x6c6,0x476,0x2ea)+_0x5b8d38(0x2aa,0x26f,0xb0,-0x282)+_0x53f05c(0x245,-0x2c2,0x79,-0x117)+_0x53f05c(0xeb,0x12c,0x3a4,0x69a)+_0x5b8d38(0x249,0x1d8,0x24b,0x3ff)+_0x53f05c(0x21a,-0x1f5,0xaa,-0x30),_0x31217b[_0x53f05c(0x6cb,0x327,0x53a,0x208)]='Mozilla/5.'+_0x5b8d38(-0x344,-0x29d,-0x1c,-0x15b)+_0x53f05c(0x8a,0x2e0,0x2da,0x1e9)+_0x53f05c(0x1d5,0x1e0,0x8d,-0x203)+_0x5b8d38(0x3c8,0x589,0x42d,0x680)+_0x5b8d38(-0x9a,0xb7,0x1cc,0x11b)+'fox/45.0',_0x31217b['CkbAF']=_0x53f05c(0x30b,0x81,0xbd,0x126)+_0x53f05c(0x2ea,0x67a,0x409,0xc4)+_0x5b8d38(0x96,0x2c4,0x192,0x25)+'x\x20x86_64;\x20'+_0x5b8d38(-0x153,0x29b,0x18c,0x467)+'ecko/20100'+_0x5b8d38(0x1af,0xe3,-0x7b,0x18f)+_0x5b8d38(0x155,0x140,0x1db,0x24b),_0x31217b[_0x53f05c(-0x14e,-0x112,0x113,0x398)]=_0x53f05c(-0x22d,0x1a1,0xbd,0x1f2)+_0x5b8d38(-0xf9,0x14d,-0x1c,0x111)+_0x53f05c(0x2bb,0x2eb,0x2da,0x5a7)+')\x20AppleWeb'+_0x5b8d38(0x1a3,0x28e,0x15a,-0x50)+'\x20(KHTML,\x20l'+_0x53f05c(0x150,0x5ed,0x476,0x69c)+_0x5b8d38(0xf9,0x3fe,0x377,0x178)+_0x53f05c(0x5df,0x3c5,0x3c3,0x600)+_0x53f05c(0x47f,0x43f,0x236,0x534)+'37.36',_0x31217b[_0x5b8d38(0x497,0x48b,0x15d,0x3bb)]=_0x53f05c(0x22a,0x340,0xbd,-0x21c)+_0x5b8d38(0x595,0x50d,0x409,0x32a)+'untu;\x20Linu'+'x\x20x86_64;\x20'+_0x5b8d38(0x5ac,0x7ca,0x4a7,0x4f0)+_0x53f05c(-0x63,-0x30,0x105,-0x1ea)+_0x53f05c(0x8a,-0x1dd,-0x7b,0x89)+'x/57.0',_0x31217b['llHmE']=_0x5b8d38(0x22e,0x241,0xbd,-0xe2)+_0x53f05c(0x7,0x32d,0x30,-0xc9)+_0x5b8d38(0x177,-0x11,0x1e4,-0xa3)+_0x5b8d38(0x1dd,-0x25,0xa0,0xa6)+_0x53f05c(-0xec,0x4b4,0x1ae,-0xd0)+'leWebKit/5'+'37.36\x20(KHT'+_0x53f05c(0x5d0,0x426,0x2d8,0x5f)+_0x53f05c(0x74,-0xa2,0x143,0x3d5)+_0x53f05c(-0x1ac,0x33f,0x21,-0x21)+_0x5b8d38(0x14a,0x9,0x339,0x464)+_0x53f05c(0x45a,0x2a3,0x410,0x4d3),_0x31217b[_0x53f05c(0x1c0,0x35b,0x285,0x40)]=_0x5b8d38(0x15d,-0x127,0xbd,0x112)+_0x53f05c(0x202,-0x2e0,0x30,0xec)+_0x5b8d38(0x174,0x3d5,0x1e4,-0x13a)+'Mac\x20OS\x20X\x201'+'0_10_5)\x20Ap'+_0x53f05c(0x426,0x223,0x1f0,0x278)+_0x5b8d38(0x400,-0xa6,0x147,0x1a)+_0x5b8d38(0x66b,0x27a,0x4b5,0x653)+_0x5b8d38(0x2e7,0x226,0x134,0x391)+'rsion/9.0.'+_0x53f05c(0x82,0x56b,0x2e2,0x481)+'01.2.7',_0x31217b[_0x53f05c(0x28e,0x34c,0x56b,0x8af)]=_0x5b8d38(-0x77,0x340,0xbd,-0x1f4)+_0x53f05c(-0xb9,0x2c7,-0x55,-0xe8)+_0x5b8d38(0x14a,0x363,0x25b,0x37)+_0x53f05c(0x3fa,0xe2,0x3f8,0x3a5)+_0x53f05c(0x300,0x4b4,0x2dd,0x40f)+_0x5b8d38(0x23f,-0x197,0x15a,0x213)+'\x20(KHTML,\x20l'+_0x5b8d38(0x744,0x63e,0x476,0x2d1)+_0x5b8d38(-0x372,-0x44,-0x41,0x235)+_0x5b8d38(0x706,0x334,0x57e,0x54e)+_0x53f05c(-0x19d,0x39c,0x7c,-0xe2)+'37.36',_0x31217b[_0x5b8d38(0x57e,0x572,0x48a,0x547)]=_0x53f05c(0x2a2,0x2a1,0xbd,0x31d)+_0x53f05c(0x50e,0x3cb,0x409,0x742)+_0x53f05c(0x294,0x4b0,0x192,0x36c)+_0x53f05c(0x7d,0x29a,0x390,0x69c)+_0x5b8d38(0x10c,-0x1f,0x28f,0x240)+'ecko/20100'+_0x5b8d38(0x2ca,-0x397,-0x7b,0xca)+_0x53f05c(0x3ec,0x381,0x2e5,0x4ac),_0x31217b['OUGCt']=_0x5b8d38(0x28c,0x3d4,0xbd,-0x21f)+_0x5b8d38(-0xa4,0x2d9,-0x1c,-0x95)+_0x5b8d38(0x121,0x2c3,0x2da,0x2f6)+_0x53f05c(0x17f,0x1fe,0x211,-0x79)+_0x53f05c(0x3ac,0x3f1,0x42d,0x606)+'00101\x20Fire'+_0x53f05c(0x63b,0x411,0x535,0x47f),_0x31217b[_0x5b8d38(0xfd,0x3,0x277,0x45b)]=_0x5b8d38(0x1ae,-0x76,0xbd,0x1d5)+_0x5b8d38(-0x242,-0x223,0x30,0x1fd)+_0x53f05c(-0xfa,-0x106,0x1e4,0x51c)+_0x53f05c(0x298,-0xa5,0xa0,0x33f)+_0x5b8d38(-0xb5,0x431,0x1ae,0x431)+_0x5b8d38(0x3a2,0x22a,0x37b,0x41a)+_0x5b8d38(0x1cd,0x434,0x31f,0x3ef)+_0x5b8d38(0x381,0x79,0x2d8,0x3f6)+'ecko)\x20Chro'+_0x53f05c(0x33a,0x553,0x504,0x3e1)+_0x5b8d38(-0x138,-0xb4,-0x35,0x1ea)+'ari/537.36',_0x31217b[_0x53f05c(-0x2c9,-0x187,-0xa0,-0x52)]=_0x53f05c(0x3c0,0x129,0xbd,-0xc0)+_0x53f05c(0xcd,0x202,0x30,0x118)+_0x5b8d38(0x3cb,0x3d4,0x1e4,-0x158)+'Mac\x20OS\x20X\x201'+'0.11;\x20rv:4'+_0x53f05c(0x726,0x6af,0x4bc,0x21e)+_0x53f05c(0x3b0,0x305,0x272,0x3b8)+_0x53f05c(-0xa7,-0x1d9,0x2a,-0xe8)+'.0',_0x31217b[_0x5b8d38(0x1b5,0x50f,0x41a,0x22b)]='Mozilla/5.'+_0x5b8d38(0x336,0x11f,0x30,0x28c)+_0x53f05c(0x528,0x176,0x1e4,-0x14a)+_0x5b8d38(0x1b2,0x3ae,0xa0,-0xd1)+_0x53f05c(-0x70,0x2af,0x29,-0x10d)+_0x53f05c(-0xca,-0xc3,0x1f0,0x521)+_0x5b8d38(0x178,0x642,0x40d,0x646)+_0x5b8d38(0x551,0x699,0x4b5,0x649)+'\x20Gecko)\x20Ve'+_0x53f05c(0x2b0,0x2d3,0x331,0xbb)+_0x53f05c(0x53a,0x427,0x312,0x103)+_0x53f05c(0x345,-0x100,0xad,0x3d9),_0x31217b[_0x53f05c(0x782,0x42a,0x583,0x27f)]=_0x5b8d38(-0x222,0x48,0xbd,-0x5e)+'0\x20(Macinto'+_0x53f05c(0x92,0x465,0x1e4,0x1cd)+'Mac\x20OS\x20X\x201'+_0x53f05c(0x6ac,0x5bb,0x41e,0x5e1)+_0x53f05c(0x497,0x21b,0x1f0,-0xba)+_0x5b8d38(-0x5b,0x34b,0x69,-0x263)+_0x5b8d38(0x69e,0x37b,0x4b5,0x716)+_0x53f05c(0x176,0x277,0x134,0x422)+_0x5b8d38(-0x303,0x2d4,-0x33,0x272)+_0x53f05c(0x494,0x4c7,0x392,0x525)+_0x5b8d38(0x5dd,0x651,0x532,0x3d4),_0x31217b[_0x5b8d38(-0x292,0x1ec,-0x44,0x2f7)]=_0x53f05c(0x3e2,-0x275,0xbd,-0x1c2)+_0x5b8d38(-0x244,0x16d,0x30,-0x3b)+_0x5b8d38(0x32a,-0x131,0x1e4,0x19e)+_0x53f05c(0x2e8,0x2cd,0xa0,0x352)+_0x5b8d38(0x601,0x1b2,0x417,0x172)+_0x5b8d38(0x5f6,0x452,0x37b,0x683)+'37.36\x20(KHT'+'ML,\x20like\x20G'+_0x53f05c(-0x64,0x1c6,0x143,0xa5)+_0x53f05c(0x52e,0x70d,0x571,0x364)+_0x53f05c(0x2e2,0x43b,0x506,0x5f3)+_0x5b8d38(0x786,0x5e7,0x4cc,0x72d),_0x31217b[_0x5b8d38(0x606,0x73c,0x521,0x83b)]=function(_0x4c1aaa,_0x709041){return _0x4c1aaa*_0x709041;};const _0x1537eb=_0x31217b;function _0x5b8d38(_0x3a6d23,_0x549f0e,_0x5f2e5c,_0x6113cb){return _0x5546ba(_0x3a6d23-0x19e,_0x549f0e-0x1c9,_0x5f2e5c- -0x4b,_0x3a6d23);}const _0x1b880e=[_0x1537eb['WXUPa'],_0x53f05c(-0x1c0,0x193,0xbd,0x2f4)+_0x53f05c(-0xb4,0x169,0x30,0x21a)+_0x5b8d38(0x41b,-0x110,0x1e4,-0x25)+'Mac\x20OS\x20X\x201'+_0x5b8d38(0xe3,0x199,0x29,-0x2c4)+_0x53f05c(0x141,0x52b,0x1f0,0x4ae)+'603.3.8\x20(K'+_0x53f05c(0x5fa,0x334,0x4b5,0x5f7)+_0x53f05c(-0x140,0x167,0x134,-0x18e)+'rsion/10.1'+_0x5b8d38(0x35,0x5ed,0x312,0xac)+_0x53f05c(-0x224,-0xa7,0xad,0x206),_0x1537eb[_0x53f05c(0x3ba,0x4f7,0x2d0,0x252)],_0x1537eb['eReIu'],_0x5b8d38(0x17c,0x3ac,0xbd,-0xc7)+_0x5b8d38(0x210,0x237,-0x55,0x1fa)+'\x20NT\x2010.0;\x20'+_0x53f05c(0x37a,0x499,0x3f8,0xd4)+')\x20AppleWeb'+_0x53f05c(-0xdc,-0xa5,0x15a,0x175)+_0x53f05c(0x129,0x239,0x260,0x3cc)+_0x53f05c(0x76b,0x791,0x476,0x2dc)+'\x20Chrome/79'+'.0.3945.88'+_0x53f05c(0x501,0x589,0x59c,0x872)+_0x5b8d38(0x1f3,0x30a,0x209,-0x3),_0x1537eb[_0x5b8d38(0x14e,0x2b,0x10,0x11f)],_0x1537eb['lIeKz'],_0x1537eb[_0x53f05c(0x45b,0x4ff,0x592,0x892)],_0x1537eb[_0x53f05c(0x5d0,0x572,0x3bd,0x34d)],_0x1537eb[_0x5b8d38(0x831,0x21d,0x53a,0x615)],_0x1537eb[_0x5b8d38(0x215,0x21b,0x213,0x14b)],_0x1537eb[_0x5b8d38(0x295,0x203,0x113,0xf6)],_0x53f05c(0x146,0x2bc,0xbd,0x34f)+'0\x20(Windows'+_0x53f05c(0x91,0x1ea,0x25b,0xb5)+_0x5b8d38(0x17d,0x27d,0x3f8,0x1fe)+_0x53f05c(-0x4b,0x66,0x2dd,0x381)+'Kit/537.36'+_0x5b8d38(0x405,0x2a,0x260,0x178)+'ike\x20Gecko)'+'\x20Chrome/85'+_0x53f05c(0x20f,0xb7,0x267,0x1ac)+_0x5b8d38(0x33b,0x4ba,0x489,0x75d)+'37.36',_0x1537eb[_0x5b8d38(0x229,0x212,0x15d,0x1d4)],_0x1537eb[_0x5b8d38(0x107,-0x140,0xfd,-0xb)],_0x1537eb['nscZn'],'Mozilla/5.'+'0\x20(X11;\x20Li'+_0x53f05c(-0x42,0x209,0x2da,-0x5f)+_0x53f05c(0x2b0,0x11e,0x2dd,0x61)+'Kit/537.36'+_0x53f05c(0x49a,0x14f,0x260,0x168)+_0x53f05c(0x3cd,0x305,0x476,0x456)+_0x5b8d38(0x7e7,0x542,0x585,0x7aa)+'.0.3497.92'+_0x53f05c(0x514,0x512,0x59c,0x2bd)+'7.36',_0x53f05c(-0xf9,0x1cc,0xbd,0x127)+'0\x20(Windows'+_0x53f05c(0x3e3,0x33d,0x25b,0x410)+'Win64;\x20x64'+_0x5b8d38(0x5aa,0xca,0x2dd,0x569)+'Kit/537.36'+_0x5b8d38(0xe9,0x54d,0x260,0x2ee)+_0x5b8d38(0x48f,0x5ec,0x476,0x4c4)+_0x53f05c(0x161,0x1db,0x47f,0x3f4)+_0x53f05c(0x6c1,0x6b6,0x53b,0x7c2)+'4\x20Safari/5'+_0x53f05c(0x1f1,0x52a,0x202,0x3a1),_0x1537eb[_0x53f05c(0x293,0x71c,0x56b,0x4f0)],_0x1537eb['koJqe'],_0x1537eb[_0x5b8d38(-0xb2,-0x26,0x1ea,-0x103)],_0x1537eb[_0x5b8d38(0x74,0x2c6,0x277,0x552)],_0x1537eb[_0x53f05c(-0x3b7,0x74,-0xa0,0x158)],_0x1537eb[_0x5b8d38(0x347,0x66e,0x470,0x595)],_0x1537eb[_0x5b8d38(0x4f9,0x5e2,0x41a,0x3bd)],_0x1537eb[_0x5b8d38(0x8c8,0x244,0x583,0x85d)],_0x1537eb[_0x53f05c(0xad,-0x317,-0x44,0x2d2)]],_0x5b5fcd=_0x1b880e[~~_0x1537eb[_0x53f05c(0x4d9,0x61d,0x521,0x692)](Math[_0x5b8d38(0x176,0x31f,0x36d,0x695)](),_0x1b880e['length'])];return _0x5b5fcd;},getID=_0x2e6fb4=>{let _0x1bcabf=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x3dbbc4=_0x1bcabf[_0x13af51(0x324,0x504,0x849,0x7e8)](_0x2e6fb4);function _0x13af51(_0x21ebf6,_0x442ff9,_0x4af371,_0xcfb35a){return _0x2e98f4(_0x4af371,_0x442ff9-0xd6,_0x4af371-0x1e3,_0xcfb35a-0x9a);}return _0x3dbbc4&&_0x3dbbc4[-0xde7*0x2+0x1b50+0x7f*0x1];},getInfo=async function(_0x35c342){function _0x3e3735(_0x3a18c3,_0xa00fca,_0x416d1c,_0xb11eb2){return _0x5546ba(_0x3a18c3-0xdf,_0xa00fca-0x33,_0xb11eb2-0xcd,_0xa00fca);}const _0x4693e2={'UYbzq':function(_0x20a307,_0x102ce5){return _0x20a307(_0x102ce5);},'LVYmi':function(_0x2c1736){return _0x2c1736();},'TyDrK':_0x46358b(0x8dc,0x8d7,0x578,0x795)+_0x46358b(0x412,0x7a5,0x367,0x5c3),'QzmDZ':'tweets','YfeCR':_0x3e3735(0x16e,0x19,-0x4f,0x111)+'ntities','lUBOx':'media','pUzlR':_0x3e3735(0x314,0x1fb,0x241,0x7b),'FcKYB':'full_text','sQqKA':_0x46358b(0x5ee,0x275,0x720,0x477),'iILcC':_0x46358b(0xef,0x388,0x202,0x1b2),'objou':_0x3e3735(0x6dd,0x728,0x54e,0x5c2),'xejdr':function(_0x64597,_0x4ea74a){return _0x64597===_0x4ea74a;},'CgZvo':_0x46358b(0x4e9,-0x5d,-0x52,0x299)+'if','JwWmu':function(_0x4cf434,_0x267ed4){return _0x4cf434===_0x267ed4;},'tonAZ':_0x3e3735(0x2fd,0x211,0x62b,0x3cb),'TJUGH':'ousHN','ljLqI':'Not\x20a\x20Twit'+'ter\x20URL'};function _0x46358b(_0x62c50,_0x44a190,_0x26b1ef,_0x4391f9){return _0x5546ba(_0x62c50-0x1ed,_0x44a190-0x11a,_0x4391f9-0x239,_0x26b1ef);}const _0x5d7642=_0x4693e2[_0x3e3735(0x2c5,0x1ab,0x12,0x157)](getID,_0x35c342);if(_0x5d7642){let _0x4b77ba;try{const _0x3ba7ad=await _0x4693e2[_0x46358b(0x163,0x96,0x5c0,0x302)](getToken);_0x4b77ba=_0x3ba7ad['guest_toke'+'n'];}catch(_0x1c7ef9){throw new Error(_0x1c7ef9);}const _0x3e9111={};_0x3e9111[_0x46358b(0x19e,0x582,0x4fa,0x328)+'ken']=_0x4b77ba,_0x3e9111[_0x3e3735(0x10d,0x154,0x245,0x4a)+_0x3e3735(0x480,0x542,0x4c6,0x4fa)]=AUTH;const _0x402e58={};_0x402e58[_0x46358b(0x2bf,0x570,0x61c,0x4f8)]=_0x3e9111;const _0x5c7afe=await axios['get'](Util[_0x46358b(0x6de,0x41e,0x360,0x63f)](API_TIMELINE,_0x5d7642),_0x402e58);if(!_0x5c7afe[_0x3e3735(0x479,0x49c,0x556,0x669)][_0x4693e2[_0x46358b(0x4ae,0x8b2,0x8d4,0x65f)]][_0x4693e2[_0x46358b(0xadf,0x779,0x68f,0x7f2)]][_0x5d7642][_0x4693e2[_0x46358b(0x59d,0x55b,0x59f,0x57f)]])throw new Error(_0x3e3735(-0xe9,0xa4,-0x96,0xf7));const _0x189354=_0x5c7afe['data'][_0x4693e2[_0x46358b(0x56e,0x606,0x4c0,0x65f)]][_0x4693e2[_0x46358b(0x524,0x80b,0xadd,0x7f2)]][_0x5d7642][_0x4693e2[_0x3e3735(0x318,0x215,0x4c6,0x413)]][_0x4693e2['lUBOx']];if(_0x189354[-0x3b*0x14+-0x1599+0x1a35][_0x46358b(0x1d4,0x23,0x23f,0x254)]===_0x4693e2[_0x46358b(0x28f,0x47d,0x839,0x51b)])return{'type':_0x189354[0x2*0xd5+0xa*0x16f+-0x4*0x400][_0x3e3735(-0x249,-0x20e,0x228,0xe8)],'full_text':_0x5c7afe[_0x3e3735(0x32a,0x73f,0x749,0x669)][_0x3e3735(0x33a,0x5fb,0x32c,0x629)+_0x3e3735(0x128,0x45f,0x4d6,0x457)][_0x4693e2[_0x46358b(0x5e5,0xa14,0x4ce,0x7f2)]][_0x5d7642][_0x4693e2[_0x46358b(0x6e1,0x573,0x5d7,0x702)]],'variants':_0x189354[-0x2391*0x1+-0x1b97+-0x1*-0x3f28][_0x4693e2[_0x46358b(0x3db,0x256,0x138,0x2e3)]][_0x4693e2['iILcC']]};if(_0x189354[-0x2151+0x26ce*0x1+0x1*-0x57d]['type']===_0x4693e2[_0x46358b(0xf1,0x3ec,0x13e,0x3c4)])return{'type':_0x189354[0x2275+-0x1663+-0xce*0xf][_0x3e3735(-0x1e7,0x23b,0x13c,0xe8)],'full_text':_0x5c7afe['data'][_0x4693e2['TyDrK']][_0x46358b(0x176,0x46f,0x1ca,0x420)][_0x5d7642][_0x4693e2[_0x46358b(0x90f,0x99b,0x5a8,0x702)]],'variants':_0x189354[_0x3e3735(0x711,0x315,0x597,0x552)](_0x56962c=>_0x56962c[_0x3e3735(0x60e,0x37f,0x5a6,0x350)+_0x3e3735(0x8fb,0x573,0x58c,0x5cc)])};if(_0x4693e2['xejdr'](_0x189354[-0x725*0x1+-0x751*-0x5+-0x1d70][_0x46358b(0x2ba,0x7e,0x3c3,0x254)],_0x4693e2['CgZvo']))return{'type':_0x189354[0x1a*0x2e+-0x5*0x6bb+0x1*0x1cfb][_0x46358b(-0x93,0x52e,-0x6d,0x254)],'full_text':_0x5c7afe[_0x3e3735(0x583,0x422,0x594,0x669)][_0x4693e2['TyDrK']][_0x46358b(0x54c,0x2df,0x49d,0x420)][_0x5d7642][_0x4693e2[_0x3e3735(0x552,0x87e,0x2fa,0x596)]],'variants':_0x189354[-0x1ad1+-0xdf*0x11+0x29a0][_0x46358b(0x271,0x493,0x23e,0x477)][_0x4693e2[_0x3e3735(0x38b,0x3c1,0x5db,0x5bd)]]};}else{if(_0x4693e2['JwWmu'](_0x4693e2['tonAZ'],_0x4693e2[_0x46358b(0x88a,0x3a2,0x309,0x61b)])){let _0xab4cde=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x22b936=_0xab4cde[_0x3e3735(0x243,0x45b,0x31e,0x27b)](_0x498878);return _0x22b936&&_0x22b936[-0x4*-0x6fd+-0x1*-0x1971+-0x2*0x1ab2];}else throw new Error(_0x4693e2[_0x46358b(0x937,0xac4,0xa92,0x7ad)]);}};async function getToken(){const _0x572413={};_0x572413[_0x444749(0x435,0x521,0x434,0x6e5)]='Mozilla/5.'+'0\x20(Macinto'+_0x4af008(0x5ed,0x321,0x10e,0x1e6)+_0x4af008(0x13e,0x1dd,-0x9f,-0x6a)+'0_11_6)\x20Ap'+_0x444749(0x6fe,0x770,0x935,0x78e)+_0x4af008(0x34d,0x63d,0x8a2,0x491)+_0x4af008(0x280,0x5b,0x285,-0x2c4)+_0x444749(0xb24,0x9c6,0xc40,0xca3)+_0x4af008(0x57a,0x5f5,0x396,0x2b4)+_0x4af008(0x4cb,0x277,0x3ee,0x317)+_0x444749(0x607,0x573,0x5e1,0x7d7);function _0x444749(_0x281e13,_0x32d78c,_0x4f319c,_0x4a4edb){return _0x2e98f4(_0x4a4edb,_0x32d78c-0x2b5,_0x4f319c-0x11a,_0x4a4edb-0x1ef);}_0x572413[_0x4af008(0x737,0x5ed,0x803,0x820)]=_0x444749(0x8f1,0x63d,0x829,0x936)+_0x444749(0x868,0x5b0,0x556,0x76f)+_0x444749(0x6a0,0x764,0xa23,0x446)+'Mac\x20OS\x20X\x201'+_0x444749(0x5ed,0x5a9,0x3a7,0x6a3)+_0x444749(0x7f3,0x770,0x9fd,0x808)+_0x444749(0x881,0x98d,0x768,0x6e3)+_0x444749(0xb83,0xa35,0xd2b,0xc5c)+_0x4af008(-0x9b,0x271,0x493,0x134)+_0x444749(0x7cf,0x8b1,0x8f0,0xabf)+_0x444749(0xa24,0x892,0x857,0x62b)+_0x4af008(0x4b,0x1ea,0x1e6,0xaa),_0x572413[_0x444749(0x513,0x4ac,0x4f7,0x53e)]='Mozilla/5.'+_0x444749(0x81c,0x52b,0x2b8,0x4ba)+_0x4af008(0x672,0x398,0x1f5,0xb6)+_0x444749(0xb01,0x978,0x781,0xa9a)+_0x4af008(0x54e,0x41a,0x6b0,0x296)+_0x4af008(0x3f9,0x297,0x152,0x256)+_0x4af008(0x160,0x39d,0x2b3,0x5f6)+_0x4af008(0x8cf,0x5b3,0x8b1,0x63f)+_0x4af008(0x62d,0x6c2,0x96a,0x4b0)+_0x4af008(0x66c,0x504,0x5da,0x455)+'0\x20Safari/5'+'37.36',_0x572413['rEWHy']=_0x444749(0x724,0x63d,0x4ab,0x6c2)+_0x444749(0x7ba,0x853,0xb26,0x8b5)+_0x4af008(-0x9b,0x8d,0x1ff,0x114)+_0x4af008(0x1ae,0x417,0x388,0x118)+')\x20AppleWeb'+_0x4af008(0x13d,0x297,0x1cf,0x4c1)+_0x4af008(0x296,0x39d,0x28b,0x31a)+_0x444749(0xa99,0x9f6,0x792,0xb41)+_0x444749(0x361,0x661,0x824,0x993)+_0x4af008(0x480,0x2a2,0x153,0xf5)+_0x4af008(0x333,0x5c6,0x3c5,0x666)+_0x4af008(0x11f,0x33f,0x41,0x36e),_0x572413['SdwAb']='Mozilla/5.'+'0\x20(Windows'+_0x4af008(0x69,0x398,0x65d,0x640)+_0x444749(0xb45,0x978,0x8d6,0xb97)+_0x444749(0xb70,0x85d,0xa6b,0x850)+_0x444749(0x67a,0x6da,0x3fa,0x609)+'\x20(KHTML,\x20l'+'ike\x20Gecko)'+_0x444749(0x748,0x898,0x756,0xa84)+'.0.3945.88'+'\x20Safari/53'+_0x444749(0xa8c,0x789,0x7ac,0x912),_0x572413['TLucy']='Mozilla/5.'+'0\x20(Macinto'+_0x4af008(0x646,0x321,0x169,0x18a)+_0x4af008(0x302,0x1dd,-0x152,0x22d)+'0_9_3)\x20App'+'leWebKit/5'+_0x4af008(0x15b,0xbd,0x126,0xd5)+_0x4af008(-0x213,0x5b,0xef,0x138)+_0x444749(0xce4,0x9c6,0x7b5,0xa53)+_0x4af008(0x295,0x173,0x279,-0x82)+_0x444749(0x7f6,0x5d9,0x2a2,0x5a2)+_0x444749(0x5c4,0x7f8,0x6ac,0x7af),_0x572413['vhsWs']=_0x4af008(0x4ad,0x1fa,0x397,0x452)+_0x444749(0x3ac,0x52b,0x50d,0x2ce)+_0x444749(0x51f,0x7db,0xa09,0xad6)+_0x4af008(0x749,0x535,0x86a,0x617)+_0x444749(0x71e,0x85d,0xb0b,0x658)+_0x444749(0x6fc,0x6da,0x949,0x8dc)+'\x20(KHTML,\x20l'+_0x4af008(0x6a9,0x5b3,0x4b7,0x814)+_0x4af008(0xc9,0x1ed,0x18e,-0x6a)+'.0.2743.11'+_0x4af008(0x733,0x4e1,0x2da,0x70c)+_0x444749(0x8fe,0x7cb,0x9d2,0x61b)+'/15.15063',_0x572413[_0x4af008(0x83b,0x6cb,0x4b7,0x6d5)]='Mozilla/5.'+_0x444749(0x446,0x564,0x374,0x5d7)+_0x4af008(0x53b,0x417,0x57c,0x6a9)+';\x20rv:45.0)'+'\x20Gecko/201'+_0x4af008(0x5f5,0x309,0x5ca,0x53a)+_0x444749(0x527,0x645,0x52b,0x6db),_0x572413[_0x4af008(0x5b5,0x5c0,0x44d,0x6c3)]=_0x4af008(0x19b,0x1fa,0x37a,0x39)+'0\x20(Windows'+_0x4af008(0x92,0x398,0x60b,0x55e)+_0x4af008(0x465,0x535,0x60b,0x5f3)+_0x444749(0x582,0x85d,0x66b,0xb45)+_0x4af008(0x45b,0x297,0x2a6,0x4e3)+_0x444749(0x5d8,0x7e0,0x6c7,0x9bd)+_0x444749(0xaf2,0x9f6,0x8e9,0xd28)+_0x4af008(0x4ae,0x17a,-0x183,0x287)+_0x4af008(0x2c1,0x3a4,0x57b,0x51c)+_0x4af008(0x5f0,0x5c6,0x478,0x3a3)+_0x444749(0x56c,0x782,0x6e6,0x803),_0x572413[_0x4af008(0x5fa,0x6dd,0x48b,0x6d1)]=_0x4af008(0x4d8,0x1fa,0x5e,-0x66)+'0\x20(X11;\x20Ub'+_0x4af008(0x5cc,0x2cf,0x295,0x12d)+_0x444749(0x79e,0x910,0x90e,0x86a)+_0x4af008(0x5fa,0x5e4,0x87c,0x598)+_0x4af008(0x227,0x242,0x160,0x460)+_0x4af008(-0x1ae,0xc2,-0x48,0x2ad)+_0x4af008(0x2a7,0x1a9,0x1b7,0x393),_0x572413[_0x444749(0x453,0x547,0x584,0x3b3)]='Mozilla/5.'+_0x444749(0x60e,0x5b0,0x4c0,0x5fc)+_0x444749(0x580,0x764,0x8f4,0x98e)+'Mac\x20OS\x20X\x201'+_0x4af008(0x234,0x2eb,0x2e2,0x4ce)+_0x444749(0xbe1,0x8fb,0x9bf,0xaa9)+_0x4af008(0x590,0x45c,0x708,0x538)+'ML,\x20like\x20G'+_0x444749(0x976,0x6c3,0x941,0x89c)+_0x444749(0x863,0x5a1,0x4ad,0x673)+'96.87\x20Safa'+_0x444749(0x93f,0x990,0xb41,0xb69),_0x572413[_0x4af008(-0x6b,0x1d6,-0x4a,0x48d)]=_0x4af008(0x1ad,0x1fa,0xd5,0x4b4)+'0\x20(Macinto'+_0x444749(0x4a3,0x764,0x4e7,0x746)+_0x4af008(-0x103,0x1dd,0x21c,0x354)+_0x444749(0x264,0x5a9,0x305,0x596)+_0x4af008(0x3c1,0x32d,0x489,0x16d)+'601.2.7\x20(K'+_0x4af008(0x771,0x5f2,0x44a,0x62f)+_0x4af008(0x1dc,0x271,0x29,-0x38)+_0x4af008(-0x5e,0x198,0x414,0x34)+_0x4af008(0x452,0x41f,0x322,0x6b2)+_0x444749(0x3df,0x588,0x745,0x246),_0x572413[_0x4af008(0x39e,0x59e,0x4db,0x6a2)]=_0x4af008(0x454,0x1fa,0x487,0x2c5)+_0x444749(0x759,0x564,0x670,0x231)+'nux\x20x86_64'+_0x4af008(0x3df,0x41a,0x183,0x71c)+_0x444749(0x672,0x6da,0x966,0x6a5)+_0x4af008(0x5f5,0x39d,0x46a,0x237)+_0x444749(0xbe2,0x9f6,0x6c8,0xd1a)+'\x20Chrome/69'+_0x4af008(0x314,0x619,0x79e,0x4d9)+_0x444749(0xb7b,0xb1c,0x883,0xcbd)+_0x444749(0x8e1,0x789,0x5fc,0x779),_0x572413[_0x4af008(0x4e7,0x1de,-0x102,0x463)]='Mozilla/5.'+_0x4af008(-0x26,0xe8,0x400,0x307)+_0x444749(0x894,0x7db,0x593,0x6fc)+_0x444749(0xc65,0x978,0x861,0xaeb)+_0x444749(0x5ba,0x85d,0x5b9,0x67c)+_0x444749(0x566,0x6da,0x4d2,0x738)+'\x20(KHTML,\x20l'+_0x4af008(0x853,0x5b3,0x2f5,0x835)+_0x4af008(0x3e4,0xfc,0xdc,0x9)+'.0.4515.10'+_0x4af008(0x33a,0x1b9,-0x12b,-0x28)+_0x4af008(0x534,0x33f,0x13,0xad),_0x572413['NpkkA']=_0x4af008(-0x8c,0x1fa,0x398,-0x146)+_0x4af008(0x756,0x546,0x333,0x7c7)+'untu;\x20Linu'+_0x4af008(0x339,0x4cd,0x656,0x5f5)+'rv:88.0)\x20G'+'ecko/20100'+_0x4af008(0x18c,0xc2,0x99,0xdb)+_0x4af008(0x18e,0x422,0x6f8,0x725),_0x572413['OfLar']='Mozilla/5.'+_0x444749(0x77a,0x564,0x317,0x6cb)+_0x4af008(0xea,0x417,0x3b2,0x4cb)+_0x4af008(0x7e,0x34e,0x583,0x17d)+_0x4af008(0x599,0x56a,0x824,0x7a6)+_0x4af008(0x74,0x309,0xc1,0x313)+_0x444749(0xc24,0xab5,0x942,0x9d9),_0x572413[_0x444749(0x4c7,0x6d5,0x48d,0x85c)]='Mozilla/5.'+_0x4af008(0x316,0x16d,0x341,0x18a)+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+'0_9_5)\x20App'+_0x4af008(0x2d2,0x4b8,0x286,0x5d1)+_0x4af008(0x193,0x45c,0x5a6,0x54e)+_0x4af008(0x505,0x415,0x57d,0x690)+_0x444749(0x3f1,0x6c3,0x6d2,0x752)+'me/65.0.33'+_0x444749(0x5d0,0x54b,0x4a3,0x4bb)+_0x444749(0xb2b,0xa4c,0x8c1,0xc63),_0x572413[_0x4af008(0x4b5,0x4ed,0x5e2,0x203)]=_0x4af008(0x29,0x1fa,0x252,0x200)+_0x444749(0x7fc,0x5b0,0x5dd,0x691)+_0x444749(0x5c8,0x764,0x9f6,0x7cf)+_0x444749(0x7a4,0x620,0x312,0x8a5)+'0.11;\x20rv:4'+_0x4af008(0x685,0x5f9,0x350,0x8d0)+_0x444749(0xa61,0x7f2,0x4be,0x704)+_0x444749(0x5d4,0x5aa,0x4fb,0x521)+'.0',_0x572413[_0x444749(0x93b,0x61d,0x925,0x640)]='Mozilla/5.'+'0\x20(Macinto'+_0x444749(0x7f8,0x764,0x73a,0x70b)+_0x4af008(0x1ac,0x1dd,0x493,0xd4)+_0x444749(0x6b0,0x99e,0x676,0x70f)+_0x444749(0x7d0,0x770,0x908,0x79a)+_0x4af008(0xfa,0x1a6,0x37b,0xbb)+'HTML,\x20like'+'\x20Gecko)\x20Ve'+_0x444749(0x3cd,0x54d,0x4b4,0x421)+_0x4af008(0x1ba,0x4cf,0x397,0x56a)+_0x4af008(0x334,0x66f,0x78d,0x6d6),_0x572413[_0x444749(0x878,0x875,0x8ef,0x946)]=_0x4af008(0x180,0x1fa,0x38a,0x395)+_0x4af008(0x2b6,0x16d,0x1ca,-0x13f)+_0x4af008(0x3d6,0x321,0x523,0x29c)+'Mac\x20OS\x20X\x201'+'0_9_4)\x20App'+'leWebKit/5'+_0x444749(0xb51,0x89f,0xb1e,0x9be)+_0x444749(0x7d5,0x858,0x847,0x775)+_0x4af008(0x1c0,0x280,0x14b,0x81)+'me/36.0.19'+_0x444749(0xa9c,0xa86,0xc39,0xb30)+_0x4af008(0x84e,0x609,0x810,0x328),_0x572413[_0x4af008(0x449,0x4b0,0x622,0x4fd)]=function(_0x3fbfc5,_0xf25f2c){return _0x3fbfc5*_0xf25f2c;},_0x572413[_0x4af008(0x1fb,0x515,0x69c,0x7c4)]=function(_0x2b17b5,_0x4af03c){return _0x2b17b5===_0x4af03c;};function _0x4af008(_0x599bd4,_0x47b406,_0x254f1f,_0x554770){return _0x5546ba(_0x599bd4-0x1db,_0x47b406-0x1a6,_0x47b406-0xf2,_0x554770);}_0x572413[_0x444749(0xaae,0x79f,0x702,0x702)]=function(_0x45a11a,_0x3dedf){return _0x45a11a!==_0x3dedf;},_0x572413[_0x444749(0x511,0x53a,0x633,0x4ac)]=_0x444749(0xb01,0xa7e,0x7b8,0xb92);const _0x3796f9=_0x572413;try{const _0x3d1533={};_0x3d1533['authorizat'+_0x444749(0x7ec,0x962,0xb66,0x8f5)]=AUTH;const _0x142745={};_0x142745[_0x4af008(0x5d6,0x3b1,0x3c3,0x5ce)]=_0x3d1533;const _0x47ca26=await axios['post'](API_GUEST,null,_0x142745);if(_0x3796f9[_0x444749(0x9ce,0x958,0x8b1,0xb67)](_0x47ca26[_0x4af008(0x693,0x4fb,0x50f,0x2e6)],-0x27*0x5d+0x234a+0x7f*-0x29)&&_0x47ca26[_0x444749(0xcb9,0xad1,0x8f2,0xd97)]){if(_0x3796f9[_0x444749(0x974,0x79f,0x55b,0x8c7)](_0x4af008(0x2c3,0x4d3,0x7e0,0x491),_0x3796f9['AvvbO']))return _0x47ca26[_0x444749(0x9f2,0xad1,0xd1e,0xe06)];else{const _0x196a66=[_0x3796f9[_0x4af008(-0x9c,0xde,0x25a,-0x22b)],_0x3796f9[_0x444749(0x915,0xa30,0xb07,0xbd9)],_0x3796f9['ZimRP'],_0x3796f9[_0x4af008(0x181,0x15d,-0x140,0x12b)],_0x3796f9[_0x444749(0x5c4,0x7ae,0x474,0x616)],_0x3796f9[_0x4af008(0x79,0x258,0x1fe,0x176)],_0x444749(0x733,0x63d,0x8eb,0x607)+_0x444749(0x3e7,0x5b0,0x746,0x274)+_0x444749(0x64d,0x764,0x82d,0x46c)+_0x4af008(0x2cf,0x1dd,0x400,0x4d3)+'0_10;\x20rv:3'+_0x4af008(0x4fd,0x537,0x316,0x669)+'/20100101\x20'+_0x4af008(0x34c,0x451,0x49f,0x188)+'.0','Mozilla/5.'+'0\x20(Windows'+_0x4af008(0xdf,0x398,0x461,0x4cb)+_0x4af008(0x222,0x535,0x434,0x40f)+_0x4af008(0x725,0x41a,0x285,0x64a)+'Kit/537.36'+_0x4af008(0x17b,0x39d,0x28c,0x492)+_0x4af008(0x6e3,0x5b3,0x8b3,0x8bf)+_0x444749(0x8fe,0x923,0x704,0x9dd)+_0x4af008(0x3fa,0x18b,0x3a7,0x160)+_0x4af008(0x8f5,0x6d9,0x923,0x9ca)+_0x444749(0x642,0x789,0x585,0x741),_0x3796f9[_0x4af008(0x1b7,0x39b,0x474,0xeb)],_0x3796f9[_0x444749(0xa4d,0xb0e,0x976,0x7f3)],_0x444749(0x981,0x63d,0x372,0x631)+'0\x20(X11;\x20Ub'+_0x444749(0x98c,0x712,0x7e1,0x484)+_0x4af008(0x307,0x4cd,0x69c,0x3e4)+_0x4af008(-0x1c,0x2c9,0x3d3,0x41d)+_0x4af008(0x1ea,0x242,0x4ae,0x208)+_0x4af008(-0xe5,0xc2,0x304,-0x22f)+'x/47.0',_0x444749(0x51c,0x63d,0x48c,0x77c)+'0\x20(X11;\x20Li'+_0x4af008(0x222,0x417,0x5f1,0x35e)+_0x444749(0x9a9,0x85d,0xa72,0xb70)+_0x444749(0x780,0x6da,0x3f0,0x43d)+_0x444749(0xa5e,0x7e0,0x745,0xa97)+_0x444749(0x9d4,0x9f6,0xd00,0xa85)+_0x4af008(0x598,0x4b4,0x7e1,0x57b)+'.0.3865.12'+_0x4af008(0x459,0x373,0x92,0x686)+'37.36',_0x3796f9[_0x444749(0xce5,0xa03,0x8ea,0x78a)],_0x3796f9[_0x4af008(0x937,0x6dd,0x685,0x548)],_0x3796f9['sezMb'],_0x3796f9[_0x444749(0x3ba,0x619,0x42b,0x522)],_0x3796f9['oEkJL'],_0x444749(0x6e5,0x63d,0x75d,0x78c)+_0x4af008(-0x1a,0xe8,0x18e,0xf9)+_0x444749(0x853,0x7db,0x89c,0x7be)+_0x4af008(0x2e4,0x535,0x7ad,0x6d8)+_0x4af008(0x58b,0x41a,0x646,0x2c9)+_0x4af008(-0x83,0x297,0x42f,0x360)+'\x20(KHTML,\x20l'+_0x444749(0xacd,0x9f6,0xa50,0x798)+'\x20Chrome/88'+_0x4af008(0x426,0x678,0x5ad,0x425)+_0x4af008(0x420,0x139,-0x146,0x359)+_0x4af008(0x683,0x33f,0x26f,0x77),_0x3796f9['WXXSN'],_0x3796f9[_0x444749(0x861,0x896,0x8ea,0x8a4)],_0x3796f9[_0x4af008(-0x30,0xe1,0x1be,-0x150)],_0x3796f9[_0x4af008(0xb2,0x292,0x258,0x4ef)],_0x3796f9[_0x444749(0x9e2,0x930,0x858,0x8d4)],_0x3796f9[_0x4af008(-0x1cb,0xde,0x115,0x1f)],_0x3796f9[_0x444749(0xc5f,0xa30,0xbdd,0x9d2)],_0x3796f9['KkMDh'],_0x3796f9[_0x4af008(0x65d,0x432,0x153,0x182)]],_0x248b37=_0x196a66[~~_0x3796f9[_0x444749(0xb1f,0x8f3,0x684,0xb38)](_0x349216[_0x4af008(0x1f1,0x4aa,0x1dd,0x6a7)](),_0x196a66[_0x444749(0x51d,0x5fd,0x5e1,0x815)])];return _0x248b37;}}}catch(_0x51dcc7){throw new Error(_0x51dcc7);}}const fbdl=async _0x5377cc=>{const _0x5de2e1={'eLroj':function(_0x368321,_0x2b5207){return _0x368321(_0x2b5207);},'Mbejy':_0x669ad5(0x18f,0x114,-0x8b,0x13f),'KjQOW':_0x669ad5(-0x365,0x142,-0x12f,-0x1a3)+_0x669ad5(-0x22f,-0x10c,-0x21c,0x18)+'ration\x22]','rKiem':_0x2cf3aa(0x152,0x458,0x466,0x209)+_0x2cf3aa(0x17a,0x271,0x1e5,0x185)+_0x669ad5(0x11b,0x279,-0x120,0x19e)+']','NImtU':_0x2cf3aa(0x152,-0x25,0x301,0x3bc)+'rty=\x22og:vi'+'deo:height'+'\x22]','oCcek':_0x669ad5(0x5df,0x1ad,0x5bb,0x2be)+_0x2cf3aa(0x5b5,0x6f5,0x5a0,0x28d),'McoUq':'#video-pla'+_0x669ad5(-0x16e,0xc5,0x246,-0xb0)+_0x669ad5(0x72c,0x1a6,0x501,0x405)+'child(6)','oNKqv':_0x2cf3aa(0x769,0x617,0x527,0xa43)+_0x669ad5(-0x2b6,-0x355,-0x2cd,-0x90)+_0x669ad5(-0x12d,0x4a,0x62,0x16e)+_0x669ad5(0xbd,0x53,-0x259,-0xd1),'riPME':'html5playe'+_0x669ad5(0xbb,-0x314,-0x7a,-0x90)+_0x669ad5(-0xaa,0x10d,0x36f,0x147)+_0x669ad5(0x378,0x420,0x632,0x412),'rukHA':_0x669ad5(0x6d8,0x5bd,0x48d,0x474)+_0x2cf3aa(0x667,0x81c,0x5d7,0x3ec)+_0x669ad5(0x3b9,0x626,0xb2,0x355)+_0x2cf3aa(0x707,0x51a,0x83a,0x9fe),'OlPsv':_0x669ad5(0x509,0x70c,0x55c,0x474)+_0x669ad5(0x4d9,0xb7,0x136,0x372)+_0x669ad5(0x112,-0x1ae,-0x205,-0xcb)+_0x669ad5(-0x19c,0xbe,0x18f,-0xd1),'EfWha':_0x669ad5(0x56f,0x581,0x13b,0x474)+_0x669ad5(0x355,0x695,0x62,0x372)+'Slide\x5c(\x27(.'+'*?)\x27\x5c);','uFFBg':_0x2cf3aa(0x769,0x7ed,0x4cb,0x74a)+_0x2cf3aa(0x667,0x535,0x399,0x714)+_0x2cf3aa(0x6d6,0x806,0x4b0,0x9b1)+_0x669ad5(-0x192,0x146,-0xc6,0x54),'JhGDw':function(_0x4c7131,_0x4d3770,_0x486fbd){return _0x4c7131(_0x4d3770,_0x486fbd);},'goImk':_0x669ad5(0x347,0x58,-0x2a5,0x40),'cCWoS':_0x669ad5(0x1d7,0x3ef,-0x20d,0x100),'SBvBM':function(_0x57eaba,_0x3b2c00){return _0x57eaba(_0x3b2c00);},'DRBQZ':_0x669ad5(0x455,0x1c3,0x611,0x3d9),'PWOkw':function(_0x23198c,_0x3c50ba){return _0x23198c===_0x3c50ba;},'BTBrT':_0x669ad5(0x36,0x640,0x615,0x344),'hcTwC':function(_0x27baf5){return _0x27baf5();},'mlTQo':_0x669ad5(0x260,0x376,0x3a3,0x478)+_0x669ad5(-0x62,-0x1c9,-0x15d,0x7f)+_0x2cf3aa(0x3ad,0x15d,0x1bc,0x2b1)+_0x669ad5(0x121,0x6c9,0x269,0x38a),'zfABM':_0x669ad5(-0x28f,0x1f3,-0x35f,-0x2c),'JPlwt':function(_0x57ef18,_0x1aca18){return _0x57ef18(_0x1aca18);},'VUNTY':_0x669ad5(0x56,0x553,0x46c,0x249),'tQidi':_0x2cf3aa(0x293,-0xc,0x115,0x1e7)+_0x2cf3aa(0x73d,0x76d,0x905,0x6d2)+_0x2cf3aa(0x4ae,0x475,0x37c,0x77b)+'mbol\x20-,\x20+,'+_0x2cf3aa(0x672,0x5c9,0x88d,0x9b1)+_0x2cf3aa(0x426,0x5d7,0x214,0x5d3)+_0x2cf3aa(0x6c0,0x752,0x424,0x98b)+_0x2cf3aa(0x5a8,0x28b,0x58b,0x5ff),'tHAiZ':function(_0x280153,_0x5dd61a){return _0x280153!==_0x5dd61a;},'JnmRC':_0x2cf3aa(0x6de,0x611,0x50c,0x54a),'KCKKp':_0x669ad5(0x1d0,0x62e,0x4a7,0x399),'XnFEe':_0x2cf3aa(0x6d5,0x3aa,0x9cd,0x5ae),'GQPHS':_0x2cf3aa(0x41a,0x1d6,0x3b1,0x6dc),'Tyqgc':_0x669ad5(-0x172,0x17f,-0x18e,0x152),'iVpqD':_0x669ad5(0x62,0x197,0xb,0x2a4),'hTmYw':function(_0x1fcd06,_0x426cda){return _0x1fcd06(_0x426cda);},'iKslI':_0x669ad5(0x54b,0x1cb,0x24c,0x248),'AsUVQ':function(_0x22799c,_0x21d848){return _0x22799c(_0x21d848);},'BoFRd':_0x669ad5(0x5ca,0x461,0x23a,0x478)+_0x669ad5(0x125,0xb8,0x8,0x31d)+'\x22]','aMIYz':function(_0x3019fb){return _0x3019fb();}};async function _0x4b3955(){let _0x288591=_0x5de2e1[_0x4239fc(0x1ff,0x4f7,0x31c,0x284)](UserAgent);const _0x2bb494={};function _0x334688(_0x19efac,_0x53f097,_0x150994,_0x2ebf3c){return _0x669ad5(_0x19efac-0xdf,_0x2ebf3c,_0x150994-0x84,_0x150994-0x58a);}_0x2bb494[_0x334688(0x65e,0x597,0x4c0,0x29e)]=_0x334688(0x688,0x79d,0x63e,0x4d6)+'applicatio'+_0x4239fc(0x452,0x936,0x678,0x6fb)+'l,applicat'+_0x4239fc(0x584,0x831,0x55c,0x290)+_0x4239fc(0x426,0x9ab,0x699,0x7dc)+_0x4239fc(0x54a,0x599,0x694,0x8a5)+'/webp,imag'+_0x4239fc(-0x16,0x24c,0x32f,0x25)+_0x334688(0x3ba,0x961,0x6d5,0x7d9)+_0x334688(0x1ed,0x6e4,0x3ed,0x63a)+_0x334688(0x450,0x7e5,0x789,0x9dd)+_0x334688(0x73c,0x3f7,0x67e,0x987)+_0x334688(0x4ec,0x89f,0x5e8,0x8bb),_0x2bb494[_0x334688(0x96a,0x519,0x6c4,0x484)+_0x334688(0x5dd,0x244,0x4c7,0x651)]=_0x4239fc(0xb68,0x91b,0x858,0x898)+_0x334688(0x5a5,0x3c3,0x60b,0x807)+_0x4239fc(0x829,0x2ee,0x570,0x494)+_0x4239fc(0x2ab,0x673,0x49b,0x620)+'6',_0x2bb494[_0x334688(0x638,0x88d,0x798,0x6a3)+'user']='?1',_0x2bb494[_0x4239fc(0xa98,0xa5c,0x775,0x5a3)]=_0x288591;const _0x95d16a={};function _0x4239fc(_0x204c14,_0x53fdd1,_0x7779f4,_0x4f62a0){return _0x669ad5(_0x204c14-0x148,_0x53fdd1,_0x7779f4-0x1d2,_0x7779f4-0x489);}_0x95d16a[_0x4239fc(0x6d1,0x3ba,0x605,0x61b)]=_0x2bb494;const _0x537355=await axios[_0x334688(0x6ed,0xb71,0x8f2,0xbf5)](_0x334688(0x59b,0x5bb,0x408,0x467)+_0x334688(0x4b5,0x513,0x3b2,0x1fb)+'t',_0x95d16a),_0x48b038=cheerio[_0x4239fc(0x4d0,0x425,0x49c,0x338)](_0x537355[_0x334688(0x837,0x6dd,0x9e3,0xb55)]);let _0x2a9a9e;_0x5de2e1['SBvBM'](_0x48b038,_0x5de2e1['mlTQo'])[_0x334688(0x5bc,0x664,0x423,0x35a)](_0x5de2e1[_0x4239fc(0x521,0x88f,0x815,0x5d3)])[_0x334688(0x84b,0x52e,0x830,0x5eb)]((_0x3f1cba,_0x31bfde)=>{function _0x3d2fb6(_0x1ddd4b,_0x22c363,_0x50f082,_0x557d53){return _0x334688(_0x1ddd4b-0x19b,_0x22c363-0x3a,_0x1ddd4b- -0x492,_0x557d53);}function _0x25daf3(_0xac4658,_0xe5e490,_0x1cf981,_0x48e829){return _0x4239fc(_0xac4658-0x18d,_0xe5e490,_0x1cf981- -0x39c,_0x48e829-0xc6);}const _0x436dd2={'jVxgI':function(_0x3f6b05,_0xd6d60f){return _0x5de2e1['eLroj'](_0x3f6b05,_0xd6d60f);},'ocQED':_0x5de2e1[_0x25daf3(-0x7f,0x61,-0x64,-0x1d9)],'vdrPr':_0x5de2e1[_0x25daf3(0x49a,0x72f,0x56b,0x3b0)],'rqNwa':function(_0x4e51ef,_0x5c0aab){return _0x5de2e1['eLroj'](_0x4e51ef,_0x5c0aab);},'mEgsA':_0x5de2e1[_0x25daf3(0xf0,0x3d9,0x101,0x27)],'wmctx':_0x5de2e1[_0x25daf3(0x35c,0x16e,0x41c,0x171)],'Ozwqh':_0x5de2e1[_0x25daf3(0xd6,0x58b,0x304,0x237)],'vTXkg':_0x5de2e1[_0x3d2fb6(0x1ba,0x499,0x410,0x308)],'FnWQS':_0x5de2e1[_0x3d2fb6(0x528,0x222,0x5e3,0x3eb)],'vRlwr':'html5playe'+_0x3d2fb6(0x68,0x299,-0x1af,-0x275)+'UrlHigh\x5c(\x27'+_0x25daf3(-0x178,-0x1cf,-0x93,-0x2e7),'jYYxO':_0x5de2e1[_0x25daf3(0x4a5,0x43b,0x40d,0x3a8)],'zGDFL':_0x5de2e1['rukHA'],'BtCIs':_0x5de2e1[_0x3d2fb6(0x3ed,0xff,0x520,0x3a3)],'Czivx':_0x5de2e1['EfWha'],'Nsemm':_0x5de2e1[_0x3d2fb6(0x48c,0x37f,0x425,0x335)],'EAWai':function(_0x9cf301,_0x26f844,_0x55fe51){function _0x4251e0(_0x1f6c72,_0x57f19a,_0x30bd09,_0x4fdf1b){return _0x3d2fb6(_0x1f6c72-0xdd,_0x57f19a-0x15c,_0x30bd09-0xbf,_0x4fdf1b);}return _0x5de2e1[_0x4251e0(0x19,0x2a7,0x282,-0x173)](_0x9cf301,_0x26f844,_0x55fe51);},'hpACE':'get','nZOpp':'video/mp4'};if(_0x5de2e1[_0x3d2fb6(0x51c,0x20e,0x2b0,0x461)]!==_0x5de2e1['cCWoS']){let _0x3f9065=_0x5de2e1[_0x25daf3(0x456,0x25d,0x202,-0x9b)](_0x48b038,_0x31bfde)['attr'](_0x5de2e1[_0x25daf3(0x1c4,0x651,0x46d,0x6ef)]);if(_0x3f9065){if(_0x5de2e1['PWOkw'](_0x5de2e1[_0x25daf3(0x3b4,0x6b,0x33c,0x2a1)],_0x25daf3(0x194,0x63e,0x4a7,0x1ba)))return new _0x5b510e((_0x584086,_0x29b395)=>{function _0x143ae3(_0x17ed12,_0x5e651d,_0x10c3a8,_0x4d52e2){return _0x3d2fb6(_0x5e651d- -0x43,_0x5e651d-0x137,_0x10c3a8-0xea,_0x10c3a8);}function _0x286816(_0xa8e1c9,_0x2710ee,_0x42b96a,_0x7634db){return _0x25daf3(_0xa8e1c9-0x3d,_0x42b96a,_0xa8e1c9- -0x118,_0x7634db-0x110);}const _0x28f3ea={'RviOI':function(_0x3ca9c2,_0x5abe75){return _0x436dd2['jVxgI'](_0x3ca9c2,_0x5abe75);},'lSxMb':_0x436dd2[_0x286816(0x9f,0x2ec,0xf9,-0x9e)],'LLpFx':_0x436dd2[_0x143ae3(0x4c3,0x311,0x80,0x54d)],'NVGPU':function(_0x57b8a3,_0x3bcd2d){return _0x436dd2['rqNwa'](_0x57b8a3,_0x3bcd2d);},'OPwmr':_0x286816(-0x1ce,-0x2bb,-0x3a8,-0x28e)+'rty=\x22og:vi'+_0x143ae3(0x246,0x11b,0x29d,0xfc),'iYBQt':_0x436dd2[_0x143ae3(0x2df,0x16e,-0x86,0x415)],'mLPdu':_0x436dd2[_0x286816(0x1cf,-0x8,0x45f,0xce)],'CJOps':_0x436dd2[_0x286816(0x78,-0x159,0x31,0x1aa)],'IiTes':_0x436dd2[_0x143ae3(-0x267,-0x120,0x1cb,-0x304)],'zNsRu':_0x436dd2['FnWQS'],'tWdUs':_0x436dd2['vRlwr'],'ozDpN':_0x436dd2[_0x286816(0x3b1,0x559,0x1c9,0x1b4)],'myrpp':_0x436dd2['zGDFL'],'GpZXj':_0x436dd2[_0x286816(0x1cd,0x307,0x25f,0x491)],'NpaLH':_0x436dd2[_0x286816(0x1fa,0x324,0x53d,-0x24)],'jWhsO':_0x436dd2[_0x286816(0x44a,0x4b6,0x48d,0x1ec)]};_0x436dd2[_0x143ae3(0x478,0x399,0x51e,0x2e4)](_0x20d04c,''+_0x21e6aa,{'method':_0x436dd2['hpACE']})[_0x143ae3(0x26b,0xa3,0xc,0x1c3)](_0x58d30e=>_0x58d30e['text']())['then'](_0x3f7dec=>{const _0x53df70={};_0x53df70[_0x204bfa(-0x2f,0x229,0x2c5,0x2aa)]=![];let _0x2e1404=_0x14f8ee[_0x204bfa(0x188,0x425,0x3da,0x584)](_0x3f7dec,_0x53df70);function _0x19e827(_0x7e9ea4,_0x4cf295,_0x2ddf3e,_0x1fedf0){return _0x143ae3(_0x7e9ea4-0x189,_0x1fedf0-0x2de,_0x2ddf3e,_0x1fedf0-0x165);}const _0xb1cbfd=_0x28f3ea[_0x204bfa(0x2aa,-0x74,0x2ce,0x42e)](_0x2e1404,_0x204bfa(0x12b,0x2c7,0x224,0x404)+_0x19e827(0x1d7,0x336,0x1a1,0x1ec)+_0x204bfa(0x43c,0x2e4,0x30f,0x5c8))[_0x204bfa(0x4fc,0xa3e,0x7e6,0x4e1)](_0x28f3ea[_0x204bfa(0x683,0x5b3,0x636,0x8b6)]),_0x531494=_0x28f3ea[_0x204bfa(-0xc,0x2f9,0x2ce,0x57f)](_0x2e1404,_0x28f3ea['LLpFx'])[_0x204bfa(0x501,0x4e0,0x7e6,0xa1c)](_0x28f3ea[_0x204bfa(0x75f,0x613,0x636,0x8eb)]),_0x551977=_0x28f3ea[_0x204bfa(0x6bf,0x9f4,0x700,0x6cf)](_0x2e1404,_0x204bfa(0x3c7,0x103,0x224,0x156)+_0x19e827(0x4dc,0xae3,0x836,0x7d8)+'age\x22]')[_0x204bfa(0xa81,0x650,0x7e6,0xa88)](_0x28f3ea[_0x204bfa(0x6c1,0x45a,0x636,0x31a)]),_0x486664=_0x28f3ea[_0x19e827(0x589,0x2ec,0x41d,0x29a)](_0x2e1404,_0x28f3ea['OPwmr'])[_0x204bfa(0x4e0,0x8e6,0x7e6,0xa60)](_0x28f3ea['lSxMb']),_0x561695=_0x2e1404(_0x28f3ea[_0x19e827(0x513,0x20a,0x603,0x30f)])[_0x19e827(0x64c,0x5fd,0x65d,0x7b2)](_0x28f3ea['lSxMb']),_0x3db285=_0x28f3ea[_0x19e827(0x87c,0x5e9,0x7d5,0x6cc)](_0x2e1404,_0x28f3ea['mLPdu'])['attr'](_0x28f3ea[_0x19e827(0x370,0x849,0x3a2,0x602)]),_0x9153af=_0x28f3ea[_0x204bfa(0x4df,0x43a,0x700,0x46f)](_0x2e1404,_0x28f3ea[_0x19e827(0x432,0x726,0x83b,0x53b)])['text'](),_0x1cdced=_0x28f3ea['RviOI'](_0x2e1404,_0x28f3ea[_0x204bfa(0x8fe,0x75c,0x77d,0x7a4)])['html'](),_0x3d4c58={'low':(_0x1cdced['match'](_0x28f3ea[_0x204bfa(0x567,0x393,0x457,0x5ea)])||[])[0x9d3+-0x4*-0x21b+-0x1d3*0xa],'high':_0x1cdced[_0x204bfa(-0xa5,0x35d,0x214,0x430)](_0x28f3ea['tWdUs']||[])[-0x125b*0x1+-0x26*0xa9+0x2b72],'HLS':_0x1cdced[_0x204bfa(0x39a,0x6b,0x214,0x49e)](_0x28f3ea[_0x204bfa(0x776,0x5a2,0x625,0x2f4)]||[])[0xb1f+-0x1560+0xa42],'thumb':_0x1cdced[_0x204bfa(0x4dc,-0xc8,0x214,0x3a6)](_0x28f3ea[_0x19e827(0x809,0x358,0x79c,0x4ec)]||[])[0xbab+-0x824*-0x1+-0x6*0x34d],'thumb69':_0x1cdced[_0x19e827(0x129,0x22e,0x32e,0x1e0)](_0x28f3ea[_0x204bfa(0x4c4,0x48c,0x24a,0x3a0)]||[])[0x1cbe+-0xd*-0x1e7+-0x3578],'thumbSlide':_0x1cdced['match'](_0x28f3ea[_0x19e827(0x5a1,0x7b6,0xa4d,0x7b5)]||[])[-0x23c9+-0x1a+0x1*0x23e4],'thumbSlideBig':_0x1cdced['match'](_0x28f3ea['jWhsO']||[])[-0x35*-0x89+-0x5c0+0xb4e*-0x2]},_0x2c1c14={};_0x2c1c14['title']=_0xb1cbfd,_0x2c1c14[_0x204bfa(0x488,0x4fe,0x579,0x69d)]=_0x5350a7,_0x2c1c14[_0x204bfa(0x185,0x4b7,0x28a,0xe3)]=_0x531494,_0x2c1c14['image']=_0x551977,_0x2c1c14[_0x19e827(0x3e0,0x384,0x6ee,0x3e5)]=_0x486664,_0x2c1c14[_0x19e827(0x4ef,0x7b0,0x681,0x689)]=_0x561695,_0x2c1c14[_0x19e827(0x664,0xbd,0x548,0x3ff)+'t']=_0x3db285;function _0x204bfa(_0x30ae04,_0x173a2b,_0x5c7b6a,_0x502276){return _0x286816(_0x5c7b6a-0x3f2,_0x173a2b-0x95,_0x30ae04,_0x502276-0x16d);}_0x2c1c14['info']=_0x9153af,_0x2c1c14[_0x204bfa(0x531,0x18f,0x450,0x491)]=_0x3d4c58;const _0x7b8bc4={};_0x7b8bc4[_0x19e827(0x4c2,0x8db,0x31b,0x659)]=0xc8,_0x7b8bc4['result']=_0x2c1c14,_0x28f3ea[_0x204bfa(0x56f,0x550,0x700,0x54a)](_0x584086,_0x7b8bc4);})['catch'](_0x47baaa=>_0x29b395({'code':0x1f7,'status':![],'result':_0x47baaa}));});else _0x2a9a9e=_0x3f9065;}}else{const _0x5b99f3={};_0x5b99f3[_0x3d2fb6(0x3a8,0x1cb,0xde,0x2d4)]=_0x2ec431[_0x25daf3(0xa9,0x497,0x185,0x37c)][0x14c2+-0xe3*-0x29+-0x391d*0x1][_0x25daf3(0x49b,0x3f2,0x39d,0x34c)];const _0x4c683d={};_0x4c683d[_0x3d2fb6(0x35d,0x31b,0x449,0x42b)]=_0x5b99f3,_0x4c683d[_0x25daf3(0x20b,0x26e,0x4a2,0x424)]=_0x436dd2[_0x3d2fb6(0x233,0x321,0xed,0xd7)],_0x4c683d[_0x25daf3(0x26,-0x2b,-0x73,-0x1cf)]=_0x25daf3(-0x14,0xf1,-0x83,-0x1f7)+_0x3d2fb6(-0x91,0x6,0xbd,0xb7);const _0xc0d5dc={};_0xc0d5dc[_0x3d2fb6(0x258,0xbc,0x557,0x43a)]=_0x124ab7,_0x20b334[_0x3d2fb6(0x2ae,-0x97,0x124,0x35f)+'e'](_0x11947d[_0x3d2fb6(0x4a3,0x61c,0x3c5,0x6ad)],_0x4c683d,_0xc0d5dc);}});const _0x500e9d={};return _0x500e9d['ua']=_0x288591,_0x500e9d[_0x4239fc(0x211,0x535,0x3a8,0x5a5)]=_0x2a9a9e,_0x500e9d;}function _0x669ad5(_0x1f97b9,_0x18854e,_0x57a7e3,_0x394371){return _0x2e98f4(_0x18854e,_0x394371- -0x3c3,_0x57a7e3-0x176,_0x394371-0x105);}async function _0x1b9192(_0x4f1759,_0x578fbe){function _0x380c24(_0x12bbf5,_0x304eec,_0xf96241,_0x2510c5){return _0x669ad5(_0x12bbf5-0x74,_0x12bbf5,_0xf96241-0x1d4,_0x304eec-0x4a8);}function _0xabf2d4(_0x255fd0,_0x1b8031,_0x485d2e,_0x19816a){return _0x669ad5(_0x255fd0-0x11e,_0x1b8031,_0x485d2e-0xc,_0x485d2e-0x5b2);}const _0x4a4f70={'cDyXm':function(_0xaee63b,_0xc12931){return _0x5de2e1['tHAiZ'](_0xaee63b,_0xc12931);},'vyarK':_0x5de2e1[_0x380c24(0x621,0x924,0x8f5,0xc36)],'LfQxX':function(_0x9a6875,_0xd4abff){return _0x9a6875(_0xd4abff);},'TgDVb':_0x5de2e1[_0x380c24(0x2dd,0x33d,0x40a,0x124)],'Sgowd':_0x5de2e1['XnFEe'],'MRAWs':_0x5de2e1[_0x380c24(0x3d5,0x498,0x474,0x4ae)]};if(_0x5de2e1[_0x380c24(0x3d0,0x2f3,0x4ab,0x238)](_0x5de2e1[_0x380c24(0x7e8,0x8fb,0x724,0x811)],_0x5de2e1[_0xabf2d4(0x348,0x2fb,0x4fb,0x282)])){if(_0x1a7b1e==_0x1d4efc)_0x5de2e1[_0x380c24(0x14b,0x420,0x51d,0x1aa)](_0x422234,_0x5de2e1[_0xabf2d4(0x7a9,0x8c7,0x7b7,0x6fd)]);_0x570160(_0x5de2e1[_0xabf2d4(0x4ec,0x62f,0x560,0x3e0)]);}else{const _0x56aa7f={};_0x56aa7f[_0x380c24(0x1b4,0x3de,0x54d,0x52a)]=_0x380c24(0x7b7,0x55c,0x4e2,0x846)+_0x380c24(0x343,0x358,0x25f,0x27c)+_0x380c24(0x991,0x697,0x5af,0x632)+_0x380c24(0x1fe,0x411,0x58c,0x397)+_0x380c24(0x428,0x57b,0x3ed,0x2a2)+_0xabf2d4(0xa0e,0xaca,0x7c2,0x530)+_0xabf2d4(0x499,0x8b8,0x7bd,0x71e)+_0x380c24(0x305,0x4ed,0x67b,0x465)+_0xabf2d4(0x533,0x675,0x458,0x614)+_0x380c24(0x6c5,0x5f3,0x2e9,0x35b)+_0xabf2d4(0xf1,0x532,0x415,0x1a4)+_0x380c24(0x4fd,0x6a7,0x3e9,0x61d)+_0x380c24(0x489,0x59c,0x591,0x2b1)+'q=0.9',_0x56aa7f[_0xabf2d4(0x5ec,0x505,0x6ec,0x92c)+_0x380c24(0x2fb,0x3e5,0x2a6,0x397)]=_0xabf2d4(0xc76,0x7a8,0x981,0xc74)+'=0.9,en;q='+_0x380c24(0x565,0x58f,0x4df,0x3d7)+'.7,ms;q=0.'+'6',_0x56aa7f[_0x380c24(0x3d7,0x6b6,0x57b,0x8c0)+_0xabf2d4(0xb2a,0x9b6,0x847,0xb67)]='?1',_0x56aa7f[_0xabf2d4(0x341,0x5e1,0x615,0x781)+'pe']=_0x380c24(0x4da,0x358,0xa3,0x76)+'n/x-www-fo'+_0x380c24(0x377,0x539,0x7cb,0x45c)+_0xabf2d4(0x4f4,0x469,0x6ae,0x54c),_0x56aa7f[_0x380c24(0x665,0x794,0x535,0x487)]=_0x578fbe;const _0xc2bc65=await _0x5de2e1['hTmYw'](axios,{'url':_0xabf2d4(0x100,0x5c9,0x430,0x106)+_0xabf2d4(0x38c,0x338,0x3da,0x1e3)+_0x380c24(0x5dc,0x8ef,0xb98,0x9f7)+'.php','method':_0x5de2e1[_0xabf2d4(0x9f9,0xadf,0x8c0,0xa24)],'data':new URLSearchParams(Object[_0x380c24(0x4eb,0x7cb,0x5b0,0x958)](_0x4f1759)),'headers':_0x56aa7f}),_0x5c782a=cheerio[_0xabf2d4(0x8db,0x35d,0x5c5,0x429)](_0xc2bc65['data']);let _0x2cc34a=[];return _0x5de2e1[_0x380c24(0x440,0x3fc,0x46d,0x391)](_0x5c782a,_0x5de2e1[_0xabf2d4(0x914,0x62f,0x681,0x95f)])[_0x380c24(0x1ec,0x341,0x1a7,0x220)]('a')[_0x380c24(0x71a,0x74e,0x757,0x4ba)]((_0x4ae8a4,_0x8718d7)=>{function _0x3dbf73(_0x18e302,_0x5a9a5f,_0x11adaa,_0x4f198c){return _0xabf2d4(_0x18e302-0x36,_0x5a9a5f,_0x18e302- -0x4af,_0x4f198c-0x10b);}function _0x151822(_0x3a09f4,_0x54382f,_0x34beeb,_0x1111c6){return _0x380c24(_0x34beeb,_0x54382f- -0x3d9,_0x34beeb-0x118,_0x1111c6-0x8e);}const _0x5d326b={'qDuWV':function(_0x232a60,_0x35de0d){return _0x232a60(_0x35de0d);}};if(_0x4a4f70[_0x151822(0x5ea,0x2b2,0x1e5,0x560)](_0x151822(0x40b,0x37e,0x1b9,0x647),_0x4a4f70[_0x3dbf73(0x121,0x41,0x3c5,0x373)])){let _0x4cf644=_0x4a4f70['LfQxX'](_0x5c782a,_0x8718d7)[_0x151822(0x236,0x4ee,0x413,0x1f8)](_0x4a4f70[_0x151822(0x391,0x2fb,0x236,0x45d)]),_0x4d29bb=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x4d29bb[_0x151822(0x27e,0x198,0xd,0x1f)](_0x4cf644)&&(_0x4a4f70['Sgowd']===_0x4a4f70['MRAWs']?_0x5d326b[_0x151822(0x57d,0x3e6,0x2e6,0x324)](_0x26c14e,_0x21593c[_0x3dbf73(0x474,0x651,0x710,0x5cd)]()):_0x2cc34a[_0x3dbf73(-0x22,-0x213,-0x260,0x2a0)](_0x4cf644));}else{const _0x5eb86d={};_0x5eb86d[_0x151822(0x133,0x298,0x5dd,0xc1)]=_0xe83ea7[_0x32abd0],_0x5eb86d[_0x151822(0x4cf,0x223,-0x1e,-0xf0)]=_0x1847f5[_0x2cc028],_0x5eb86d[_0x151822(-0x163,0x9f,-0xab,-0x17)]=_0x2f4beb[_0x4b13e5],_0x3c9dd4[_0x151822(-0x1e4,-0x56,0x15b,0x59)](_0x5eb86d);}}),_0x2cc34a;}}const _0x16451b=await _0x5de2e1[_0x669ad5(-0xd8,0x37,0x11e,0x165)](_0x4b3955),_0x1717e3={};_0x1717e3[_0x2cf3aa(0x4a7,0x4e0,0x448,0x498)]=_0x5377cc,_0x1717e3[_0x2cf3aa(0x214,0x433,0x173,0x3dc)]=_0x16451b[_0x2cf3aa(0x214,0x33,0x1c,0x2f4)];let _0x2c0130=_0x1717e3;function _0x2cf3aa(_0x1827a3,_0x55d45a,_0x2fd938,_0x13e7c0){return _0x5546ba(_0x1827a3-0x1d6,_0x55d45a-0x168,_0x1827a3-0x1b2,_0x2fd938);}const _0x36ddd2=await _0x5de2e1[_0x2cf3aa(0x139,0x279,0x215,0x11a)](_0x1b9192,_0x2c0130,_0x16451b['ua']);return _0x36ddd2;};zee[_0x5546ba(0x4e2,-0x6d,0x1c7,0x481)](''+q)[_0x5546ba(0x1e0,0x294,0x131,0x2e1)](async _0xea6e09=>{const _0x4245af={};_0x4245af[_0x486641(0x2bb,0x79d,0x843,0x5b7)]=_0x1b5b48(0x901,0x93a,0x6d6,0x74c),_0x4245af[_0x1b5b48(0x3ce,0x134,0x3da,0x3df)]=_0x486641(0x75d,0xa1e,0xa3d,0x849),_0x4245af['NmdgB']=function(_0x47e3e5,_0x567218){return _0x47e3e5+_0x567218;},_0x4245af[_0x486641(0x34e,0x7c9,0x67d,0x55f)]=function(_0xa879d6,_0x118870){return _0xa879d6+_0x118870;};const _0x384a31=_0x4245af;let _0x3d19=_0x486641(0x798,0x6b4,0x594,0x8bb)+_0x1b5b48(0x22f,0x21,0x5c8,0x286)+'LOADER\x20」--'+'--*\x0a\x0a';_0x3d19+=_0x1b5b48(0x362,0x75f,0x5f2,0x5b9)+'*\x20'+_0xea6e09[_0x1b5b48(0x45a,0x62e,0x34f,0x540)]+'\x0a',_0x3d19+=_0x1b5b48(0x29b,0x339,0x4d0,0x1ca)+'\x20'+_0xea6e09['medias'][0x1*0x1402+-0x191b+0x519][_0x1b5b48(0x64a,0x9fc,0x518,0x7d3)]+'\x0a',_0x3d19+=_0x486641(0xc2f,0x9f5,0xc22,0x992)+_0x1b5b48(0x98,0x110,0x3a4,0x277)+_0xea6e09[_0x486641(0x85d,0x4f4,0x816,0x5f4)][0x1*-0xaf7+0xdfe+0x5*-0x9b][_0x486641(0x867,0x84e,0x98e,0x904)]+'\x0a',_0x3d19+=_0x1b5b48(0x3d7,0x532,0x79a,0x4d8)+':*\x20'+_0xea6e09[_0x486641(0x667,0x3fb,0x80b,0x5f4)][-0x4*-0x84e+-0x1b0d+-0x62b][_0x486641(0x6fc,0x627,0x3b7,0x401)+_0x486641(0x744,0xa6f,0xa3c,0x9f0)]+'\x0a',_0x3d19+=_0x486641(0x7e5,0x4d4,0x8fa,0x617)+_0x486641(0xb7e,0x668,0xa58,0x926)+_0xea6e09['medias'][0x1*0xa2d+-0x105*0x3+0x71d*-0x1]['formattedS'+_0x486641(0x893,0xd2b,0xb20,0x9f0)]+'\x0a',_0x3d19+=_0x1b5b48(0x771,0x629,0x60c,0x7dc)+_0x486641(0x681,0x448,0x1bf,0x3ed)+_0xea6e09[_0x486641(0x3b8,0x4aa,0x8e8,0x5f4)][-0x727*-0x2+0x1743*-0x1+0x8f5][_0x486641(0x505,0x265,0x1d6,0x401)+'ize']+'\x0a',_0x3d19+=_0x1b5b48(0x907,0x791,0x3ff,0x676)+_0xea6e09['url'];let _0x1b8c6b=await getBuffer(_0xea6e09['thumbnail']);const _0x29e88a={};_0x29e88a[_0x486641(0x494,0x3e8,0x633,0x518)+'t']=_0x384a31[_0x486641(0x44f,0x810,0x41b,0x5b7)],_0x29e88a[_0x486641(0x82c,0xa01,0x91d,0x80c)]=''+myweb;const _0x4abdf9={};_0x4abdf9[_0x1b5b48(0x527,0x482,0x5ea,0x4de)]=_0x29e88a;const _0x46725e={};_0x46725e[_0x486641(0x829,0x72b,0x7cf,0x518)+'t']=_0x384a31['LzdtM'];function _0x486641(_0x3d3d6c,_0xf9f7b1,_0x2ef7c0,_0x217503){return _0x5546ba(_0x3d3d6c-0x1b6,_0xf9f7b1-0x158,_0x217503-0x419,_0x2ef7c0);}_0x46725e[_0x1b5b48(0x6f8,0x3df,0x5c4,0x627)]=''+github;const _0xf2b2ae={};_0xf2b2ae[_0x486641(0x7b2,0x656,0x7f8,0x6c3)]=_0x46725e;const _0x20ebad={};_0x20ebad['displayTex'+'t']=_0x1b5b48(0x2f5,0x31d,0x510,0x560)+_0xea6e09[_0x486641(0x585,0x539,0x82d,0x5f4)][-0x14ba*-0x1+0xf6f+-0x2429][_0x1b5b48(0x63,0x1f7,0x1cd,0x21c)+'ize'],_0x20ebad['id']=_0x486641(0xa97,0x6f9,0x8bc,0x90c)+_0xea6e09[_0x486641(0x5f9,0xa89,0x734,0x80c)];const _0x47276f={};_0x47276f[_0x486641(0x6db,0x9fa,0x5eb,0x6fe)+'Button']=_0x20ebad;const _0x60a082={};_0x60a082[_0x486641(0x208,0x6b6,0x35c,0x518)+'t']=_0x1b5b48(0x52,0x606,0x377,0x2d3)+_0xea6e09[_0x1b5b48(0x224,0x3f0,0x4f8,0x40f)][0x1002+-0x2438+-0x9*-0x23f][_0x1b5b48(0x496,-0x7c,0x37f,0x21c)+'ize'],_0x60a082['id']=_0x486641(0x989,0x845,0x819,0x9c8)+_0xea6e09[_0x486641(0xa2a,0xaae,0x830,0x80c)];const _0x10534a={};_0x10534a[_0x1b5b48(0x2ea,0x5bd,0x2ab,0x519)+_0x486641(0x8ed,0x4f6,0x389,0x5e4)]=_0x60a082;function _0x1b5b48(_0x343c20,_0x8fee90,_0x1b189a,_0x74f2b7){return _0x2e98f4(_0x8fee90,_0x74f2b7- -0x4c,_0x1b189a-0x1d3,_0x74f2b7-0x134);}const _0x4311f4={};_0x4311f4[_0x486641(0x528,0x66a,0x7a6,0x518)+'t']=_0x1b5b48(0x184,-0x28,0x611,0x300)+_0xea6e09[_0x1b5b48(0x423,0x166,0x200,0x40f)][-0x1cb3*-0x1+-0x1f6d+0x2ba][_0x486641(0x32b,0x53c,0x735,0x401)+_0x486641(0xb06,0xbbd,0xb7c,0x9f0)],_0x4311f4['id']=_0x486641(0x5cd,0x69f,0x3a6,0x4fc)+_0xea6e09[_0x1b5b48(0x370,0x6e1,0x8a5,0x627)];const _0x141fc4={};_0x141fc4['quickReply'+'Button']=_0x4311f4;var _0x417a7e=[_0x4abdf9,_0xf2b2ae,_0x47276f,_0x10534a,_0x141fc4];await alpha[_0x1b5b48(0x297,0x31c,0x53f,0x4ec)+'c'](from,_0x384a31['NmdgB'](_0x384a31[_0x486641(0x460,0x473,0x578,0x55f)]('Hai\x20kak\x20'+pushname+_0x1b5b48(0x3b3,0x377,0x18c,0x3ba)+botname+'*\x20','\x0a\x0a'),lang['media']()),'©\x20'+ownername,_0x1b8c6b,_0x417a7e);})['catch'](_0x422fb6=>{const _0x3cf921={'jEvDG':'video/mp4','VILAD':function(_0x1bf013,_0x130cb9){return _0x1bf013(_0x130cb9);}};_0x3cf921['VILAD'](fbdl,''+q)['then'](_0x384345=>{const _0x321692={};_0x321692[_0x254bf7(0x486,0x651,0x7a1,0x4a3)]=_0x384345[0x1*0x1943+0x46b+0x1*-0x1dae];const _0xe80cf5={};function _0x491462(_0x21ad0e,_0x39176e,_0x58487f,_0x5a576c){return _0x5617(_0x5a576c-0x130,_0x21ad0e);}_0xe80cf5[_0x491462(0x4bf,0x926,0x4d8,0x6dc)]=_0x321692,_0xe80cf5[_0x491462(0x58f,0xa26,0xae5,0x82c)]=_0x3cf921['jEvDG'],_0xe80cf5[_0x491462(0x494,0x3c1,0xff,0x317)]=_0x491462(0x284,0x3d0,0x560,0x583)+_0x491462(0x184,0x9a,0x77,0x2ee);function _0x254bf7(_0x1d1c8e,_0x243316,_0x24deff,_0x191e1b){return _0x5617(_0x243316-0x5a,_0x1d1c8e);}alpha['sendMessag'+'e'](m[_0x254bf7(0x52d,0x74c,0x594,0x6d5)],_0xe80cf5,{'quoted':m});});});}break;case _0x5546ba(0x471,0x5f0,0x396,0x2d5):case _0x5546ba(0x3e0,0x150,0x44a,0x62d):if(!q)return reply(lang['wrongForma'+'t'](prefix));if(!isUrl(q))return reply(lang[_0x2e98f4(0xae,0x2b4,0x1a,0x4f9)+'t'](prefix));if(!text[_0x2e98f4(0x646,0x81e,0x685,0x849)](_0x2e98f4(0x9c7,0x813,0x8c6,0x676)+'om')&&!text[_0x5546ba(0x5b8,0x2e2,0x59e,0x4ed)](_0x2e98f4(0xdd,0x370,0x52b,0x4f)))return reply(lang[_0x5546ba(0x2e7,0x1dc,0x34,-0x2fa)+'t'](prefix));await reply(lang[_0x2e98f4(0x849,0x7db,0x4a2,0x665)]()),zee[_0x2e98f4(0x41c,0x447,0x53c,0x1ac)](''+q)['then'](async _0x762c88=>{function _0x440519(_0x1073d4,_0x2b2fa8,_0x2b61cb,_0x1ede93){return _0x2e98f4(_0x1ede93,_0x1073d4-0xa,_0x2b61cb-0x1e5,_0x1ede93-0x91);}const _0xb08652={};_0xb08652[_0x49eb72(0x2bb,0x3d2,0x182,0x2df)]=_0x440519(0x4bd,0x370,0x789,0x7b7);const _0x3ec415=_0xb08652,_0x261716={};_0x261716[_0x440519(0x67d,0x3f9,0x5c0,0x693)]=_0x762c88['medias'][0xc31*0x3+-0x255b+-0xc8*-0x1][_0x440519(0x67d,0x8bc,0x8a9,0x8cb)];function _0x49eb72(_0x3f2056,_0x240a6f,_0x51d980,_0x3c9a44){return _0x2e98f4(_0x240a6f,_0x3c9a44-0xe7,_0x51d980-0x4d,_0x3c9a44-0x1d4);}const _0x595fee={};_0x595fee[_0x49eb72(0x57c,0x785,0x864,0x70f)]=_0x261716,_0x595fee[_0x440519(0x782,0x9ce,0x4e8,0xa66)]=_0x3ec415[_0x440519(0x202,0x2f6,-0x128,0x10c)],_0x595fee[_0x49eb72(0x197,0x614,0x10a,0x34a)]=_0x440519(0x25d,0x14f,0x3f9,0x4bb)+_0x440519(0x244,0x131,0x1c2,0x36a),alpha[_0x49eb72(0x920,0x323,0x5d2,0x660)+'e'](m[_0x49eb72(0x860,0x555,0x547,0x855)],_0x595fee,{'quoted':m});})[_0x5546ba(0xf4,-0x99,0x49,0x32a)](_0x50395d=>{const _0x2dd6b6={'UShyZ':function(_0x12f31d,_0x22557c){return _0x12f31d(_0x22557c);}};function _0x34a999(_0x492443,_0x1937a3,_0x3de2f9,_0xc98506){return _0x2e98f4(_0xc98506,_0x1937a3-0x188,_0x3de2f9-0x1d7,_0xc98506-0x11);}_0x2dd6b6['UShyZ'](reply,lang[_0x34a999(0x9ce,0x8bc,0xaf2,0x92e)]());});break;case _0x2e98f4(0x639,0x70a,0x934,0x92a)+_0x2e98f4(0x86a,0x847,0x781,0xb4d):case _0x2e98f4(0x7ce,0x6cb,0x4bb,0x6b6):{if(!q)return reply(lang[_0x5546ba(-0x175,-0x95,0x34,0x2c8)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x2e98f4(0x178,0x2b4,0x35b,-0x65)+'t'](prefix));if(!text[_0x5546ba(0x275,0x7e4,0x59e,0x728)](_0x5546ba(0x7f0,0x38c,0x593,0x33d)+'om')&&!text[_0x5546ba(0x53b,0x74c,0x59e,0x753)](_0x5546ba(0x30d,-0x1fe,0xf0,-0x235)))return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x5546ba(0x29a,0x808,0x55b,0x7bd)]());const API_GUEST=_0x2e98f4(0xfa,0x2d4,0x3fd,0x322)+_0x5546ba(0x1c9,0x80,0x287,0x589)+'com/1.1/gu'+_0x5546ba(0x228,-0x20e,0x1a,0xc8)+_0x2e98f4(0x7eb,0x67f,0x7f6,0x37b),API_TIMELINE='https://ap'+_0x2e98f4(0x44f,0x507,0x684,0x432)+_0x2e98f4(0x5be,0x418,0x21e,0x55e)+_0x5546ba(0x48f,0x601,0x2c5,0x253)+_0x5546ba(0x2fb,0x556,0x48f,0x734)+_0x5546ba(0x315,0x82a,0x513,0x667)+_0x2e98f4(0x3ca,0x229,0x1ef,-0x58)+_0x5546ba(0x7e,0x153,0x87,0x3c8),AUTH='Bearer\x20AAA'+_0x5546ba(0x52f,0x178,0x490,0x530)+_0x5546ba(0x178,0x244,-0x4f,0x8a)+_0x5546ba(0x423,0x172,0x41e,0x1e0)+_0x5546ba(0x236,0x4e2,0x1eb,0x494)+_0x5546ba(0x368,0xd0,0x1e9,0x4aa)+'z4puTs%3D1'+_0x5546ba(0x651,0x2e5,0x546,0x81a)+_0x5546ba(0x85f,0x822,0x542,0x79d)+_0x2e98f4(0x475,0x5f4,0x8eb,0x74c)+_0x2e98f4(0x4ac,0x2a1,0x4c0,0xb6)+'A',UserAgent=()=>{const _0x1de537={};_0x1de537[_0xd404bd(0x568,0x589,0x39c,0x45e)]='Mozilla/5.'+_0xd404bd(0x6a6,0x203,0x3e1,0x697)+_0xa5a7e7(0x91,-0x1c1,0xaa,-0x180)+_0xd404bd(0x5ac,0x5e4,0x451,0x4d2)+_0xd404bd(0x66f,0x3a1,0x3da,0x415)+_0xd404bd(0x27f,0x879,0x5a1,0x353)+_0xa5a7e7(0x482,0x2f2,0x2d3,0x11d)+_0xa5a7e7(0x331,0x1e7,0x37b,0x31f)+_0xa5a7e7(-0x2c6,0x8a,-0x6,0x156)+_0xa5a7e7(0x4fe,0x1a0,0x1f7,-0x80)+'.2\x20Safari/'+_0xa5a7e7(-0xde,-0x32f,-0x8d,-0x2d),_0x1de537[_0xd404bd(0x5a8,0x91b,0x6e0,0x893)]='Mozilla/5.'+'0\x20(Windows'+_0xa5a7e7(-0xa7,0x142,0x121,0xf2)+_0xd404bd(0x9f4,0x725,0x7a9,0x58a)+')\x20AppleWeb'+_0xa5a7e7(0x1a2,0x277,0x20,-0x257)+_0xd404bd(0x7b8,0x683,0x611,0x7f6)+'ike\x20Gecko)'+_0xa5a7e7(0x566,0x3d7,0x44b,0x5c2)+_0xa5a7e7(0x152,0x321,0x28d,0xf3)+_0xd404bd(0x544,0x634,0x5e7,0x4b0)+'37.36',_0x1de537[_0xa5a7e7(0x11d,0x5e2,0x3ec,0x12e)]=_0xa5a7e7(-0x1ca,-0x161,-0x7d,0x46)+_0xd404bd(0x59b,0x8b1,0x684,0x395)+_0xa5a7e7(-0x35d,-0x42b,-0x1ea,0x5a)+_0xd404bd(0x9bf,0x9cb,0x68b,0x5c2)+')\x20AppleWeb'+_0xa5a7e7(0xa3,0x287,0x20,0x2ce)+'\x20(KHTML,\x20l'+_0xd404bd(0x9c5,0x7fd,0x827,0x729)+_0xd404bd(0x1b0,0x719,0x492,0x329)+'.0.3325.18'+'1\x20Safari/5'+_0xa5a7e7(0x30b,0x391,0xc8,0x12e),_0x1de537[_0xa5a7e7(0x59f,0x142,0x346,0x2f8)]='Mozilla/5.'+_0xd404bd(0x617,0x45c,0x35c,0x43)+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+_0xa5a7e7(-0x38,-0x13,0x1a3,0x277)+_0xd404bd(0x306,0x5eb,0x50b,0x4b9)+_0xa5a7e7(0x145,-0xaa,0x126,-0x1e4)+_0xd404bd(0x617,0x96c,0x827,0x963)+_0xd404bd(0x622,0x43e,0x6c9,0x658)+_0xa5a7e7(0xd8,0x10e,0x90,0x18d)+_0xa5a7e7(0x19a,0x3fe,0x462,0x63f)+_0xa5a7e7(0x18a,0x164,0xcf,-0x4f);function _0xd404bd(_0x261483,_0x5ddbd0,_0x3f1158,_0x5e7bdd){return _0x2e98f4(_0x5ddbd0,_0x3f1158-0xe6,_0x3f1158-0xf5,_0x5e7bdd-0x17b);}_0x1de537[_0xd404bd(0x34d,0x7e7,0x682,0x477)]='Mozilla/5.'+_0xa5a7e7(0x112,0x21f,-0x10a,0xa3)+'sh;\x20Intel\x20'+_0xd404bd(0x50b,0x625,0x451,0x26d)+_0xa5a7e7(0x3ca,0x4e5,0x3c5,0x239)+_0xa5a7e7(0x2b,0x14f,0x241,0x216)+'37.75.14\x20('+'KHTML,\x20lik'+_0xd404bd(0x8e3,0x50e,0x7f7,0x7ff)+'ersion/7.0'+_0xa5a7e7(0x60,0xa5,-0xe1,0xe0)+_0xa5a7e7(-0xce,0x19d,0x13e,0x334),_0x1de537[_0xa5a7e7(0x1bf,0x60d,0x3fd,0x316)]=_0xa5a7e7(0x17f,0xc7,-0x7d,-0x1da)+'0\x20(Windows'+_0xd404bd(0x5d5,0x80b,0x60c,0x488)+_0xd404bd(0x995,0x93f,0x7a9,0x684)+_0xa5a7e7(0x4e0,-0xce,0x1a3,0x296)+_0xd404bd(0x58e,0x768,0x50b,0x632)+_0xd404bd(0x390,0x6e2,0x611,0x74f)+_0xa5a7e7(0x479,0x427,0x33c,0x5e1)+_0xa5a7e7(0x3ab,0x252,0x269,0x304)+'.0.4430.93'+'\x20Safari/53'+'7.36',_0x1de537['CdHtX']=_0xd404bd(0x56f,0x36c,0x46e,0x3b8)+_0xa5a7e7(0x96,-0x3d4,-0x18f,-0x4a2)+_0xa5a7e7(0x3c3,-0xb4,0x121,-0x1f0)+'Win64;\x20x64'+')\x20AppleWeb'+'Kit/537.36'+_0xd404bd(0x34c,0x62f,0x611,0x480)+_0xa5a7e7(0x361,0x4e2,0x33c,0x653)+_0xd404bd(0x470,0x53e,0x461,0x78d)+_0xa5a7e7(-0x248,-0x362,-0xc1,-0x29b)+_0xa5a7e7(0x2fe,0x41,0x26a,0x3b3)+_0xd404bd(0x590,0x6b1,0x5fc,0x704)+_0xd404bd(0x5b3,0x71c,0x45b,0x3b0),_0x1de537[_0xd404bd(0x64a,0x267,0x428,0x17a)]='Mozilla/5.'+_0xa5a7e7(-0x4c,0x81,-0x156,-0x49b)+_0xd404bd(0x7c7,0x797,0x68b,0x776)+_0xa5a7e7(0x97,-0x1fa,-0xad,0x1e)+'\x20Gecko/201'+_0xa5a7e7(0x373,-0x103,0x92,0x287)+_0xa5a7e7(-0x147,-0x56,-0x75,-0x26f),_0x1de537[_0xd404bd(0x7bd,0x7eb,0x4b7,0x791)]='Mozilla/5.'+_0xd404bd(0x4c6,0x268,0x395,0x295)+_0xa5a7e7(0x150,0xdf,0x1a0,0x214)+')\x20AppleWeb'+_0xa5a7e7(0x1f5,-0x1ad,0x20,0x122)+'\x20(KHTML,\x20l'+'ike\x20Gecko)'+_0xa5a7e7(0x37f,0x535,0x23d,0x248)+_0xa5a7e7(0x3fc,0x9b,0x289,0x9c)+'0\x20Safari/5'+_0xa5a7e7(0xac,0x376,0xc8,-0x186),_0x1de537[_0xa5a7e7(-0x95,0x217,0x1db,-0xea)]=_0xd404bd(0x529,0x4b3,0x46e,0x49a)+_0xd404bd(0x1c3,0x34c,0x35c,0x356)+_0xd404bd(0x37f,0x33e,0x60c,0x62e)+_0xd404bd(0xac5,0x914,0x7a9,0x628)+')\x20AppleWeb'+_0xd404bd(0x60a,0x74d,0x50b,0x755)+_0xd404bd(0x552,0x610,0x611,0x623)+_0xd404bd(0x832,0xadc,0x827,0x76e)+'\x20Chrome/85'+_0xd404bd(0x516,0x34a,0x618,0x303)+_0xd404bd(0x93c,0xa34,0x83a,0x525)+_0xd404bd(0x5aa,0x578,0x5b3,0x3ed),_0x1de537[_0xd404bd(0x9bf,0x5d7,0x87b,0xb65)]=_0xa5a7e7(0x22e,-0xcc,-0x7d,-0x28f)+'0\x20(X11;\x20Ub'+'untu;\x20Linu'+'x\x20x86_64;\x20'+_0xd404bd(0x748,0x71a,0x858,0x699)+'ecko/20100'+_0xd404bd(0x2ae,0x3bf,0x336,0x316)+_0xa5a7e7(-0x1c5,0x133,-0xce,-0x134),_0x1de537['QGXiG']=_0xa5a7e7(-0x132,-0x8f,-0x7d,-0x1ce)+_0xa5a7e7(-0x3ff,0x1fd,-0x10a,-0x21b)+_0xa5a7e7(-0xc2,0x47,0xaa,0x337)+_0xd404bd(0x256,0x493,0x451,0x298)+'0_9_5)\x20App'+'leWebKit/5'+_0xa5a7e7(0x2e4,-0xe3,0x1e5,-0xd1)+_0xd404bd(0x52a,0x5fd,0x689,0x684)+_0xd404bd(0x39e,0x7f1,0x4f4,0x2c9)+_0xa5a7e7(-0x246,-0xdd,-0x119,-0x195)+'96.87\x20Safa'+_0xa5a7e7(0x428,0x39f,0x2d6,-0x5a),_0x1de537['dhWpn']=_0xa5a7e7(-0x1c8,-0x22b,-0x7d,0x13b)+_0xd404bd(0x46d,0x46f,0x395,0x65f)+_0xd404bd(0x74d,0x932,0x68b,0x39f)+_0xd404bd(0x94b,0x8bc,0x68e,0x6b0)+_0xd404bd(0x4a2,0x726,0x50b,0x66a)+_0xd404bd(0x72d,0x651,0x611,0x564)+_0xa5a7e7(0x25d,0x360,0x33c,0x542)+_0xa5a7e7(0x705,0x72f,0x44b,0x184)+_0xd404bd(0x742,0x89f,0x88d,0x744)+_0xd404bd(0x720,0x7d2,0x94d,0x649)+'7.36',_0x1de537[_0xd404bd(0x107,0x626,0x444,0x498)]=_0xa5a7e7(-0x314,0x25b,-0x7d,-0x2a5)+_0xa5a7e7(0x18,-0x3e3,-0x18f,-0x246)+_0xd404bd(0x7e0,0x8e4,0x60c,0x906)+_0xd404bd(0x92c,0x8fb,0x7a9,0xae0)+')\x20AppleWeb'+'Kit/537.36'+_0xa5a7e7(-0x13e,0xc5,0x126,-0x1c)+_0xa5a7e7(0x1a4,0x20e,0x33c,0x14a)+_0xd404bd(0x575,0x539,0x370,0x165)+_0xd404bd(0xb1d,0x792,0x92f,0xb68)+_0xa5a7e7(0x13d,-0x76,-0xbe,0xb0)+_0xa5a7e7(0x89,0x1fb,0xc8,-0x248),_0x1de537['ngJrm']=_0xd404bd(0x12c,0x314,0x46e,0x1f1)+'0\x20(X11;\x20Ub'+_0xa5a7e7(0x6a,-0xd9,0x58,0x35a)+_0xd404bd(0x66b,0x69a,0x741,0x502)+_0xd404bd(0x345,0x63e,0x640,0x878)+'ecko/20100'+_0xd404bd(0x2eb,0x4a1,0x336,0x4a9)+_0xa5a7e7(0x4ae,0x3a8,0x1ab,0xbf),_0x1de537[_0xa5a7e7(0x569,0x282,0x404,0xe6)]='Mozilla/5.'+_0xd404bd(0x11d,0xde,0x3e1,0x3e7)+_0xd404bd(0x597,0x588,0x595,0x715)+'Mac\x20OS\x20X\x201'+_0xa5a7e7(0x258,0x14f,0x74,0x38c)+_0xa5a7e7(0x294,0x349,0x241,0x3d7)+_0xd404bd(0xa0a,0x472,0x6d0,0x40b)+_0xd404bd(0x7c9,0x79a,0x689,0x4a9)+'ecko)\x20Chro'+_0xd404bd(0x642,0x5e1,0x8b5,0xa0f)+_0xd404bd(0x2e6,0x312,0x37c,0x331)+_0xa5a7e7(0x5b9,0x616,0x392,0x536),_0x1de537[_0xd404bd(0x537,0x464,0x338,0x355)]=_0xd404bd(0x353,0x772,0x46e,0x62c)+_0xd404bd(0x12a,0x543,0x3e1,0x31e)+'sh;\x20Intel\x20'+_0xa5a7e7(0x274,0x1b1,-0x9a,-0x315)+'0.11;\x20rv:4'+'7.0)\x20Gecko'+'/20100101\x20'+_0xd404bd(0x172,0x388,0x3db,0x3fc)+'.0',_0x1de537[_0xd404bd(0xa14,0x6cc,0x6f3,0x99a)]='Mozilla/5.'+_0xd404bd(0x2cf,0x332,0x3e1,0x649)+_0xd404bd(0x579,0x627,0x595,0x2db)+_0xa5a7e7(-0x60,-0x13c,-0x9a,-0xdd)+_0xa5a7e7(0x4a4,0x50e,0x2e4,0x65)+_0xd404bd(0x4d3,0x840,0x5a1,0x4dc)+_0xa5a7e7(0x23f,0x173,0x3c6,0x5e0)+'KHTML,\x20lik'+'e\x20Gecko)\x20V'+_0xa5a7e7(0x3e5,0x43e,0x37e,0x47e)+_0xd404bd(0x432,0x467,0x4eb,0x47f)+_0xa5a7e7(-0x120,-0x2d0,-0x147,-0x475);const _0x330ce4=_0x1de537,_0x2e00c7=[_0xa5a7e7(0x2b8,-0x56,-0x7d,0x248)+_0xa5a7e7(-0x18c,-0x362,-0x10a,-0x2c0)+_0xa5a7e7(-0x160,0x2ef,0xaa,0x10c)+_0xa5a7e7(0x8d,0x157,-0x9a,-0x56)+_0xd404bd(0xa40,0x86e,0x7cf,0x812)+'pleWebKit/'+_0xa5a7e7(0x36e,0x61a,0x3c6,0x52e)+_0xd404bd(0x54b,0x2a7,0x2cf,0x26a)+_0xa5a7e7(-0x18,0x43b,0x30c,0x5fb)+_0xd404bd(0x7a6,0xb1e,0x869,0x73e)+_0xd404bd(0x7b1,0x1b6,0x4eb,0x2ac)+'/605.1.15',_0x330ce4['vyoDy'],_0x330ce4['BGHnk'],_0x330ce4[_0xa5a7e7(0x2c4,0x56e,0x3ec,0x29a)],_0x330ce4['gctRM'],_0x330ce4['kRfCt'],'Mozilla/5.'+_0xd404bd(0xa3,0x6d9,0x3e1,0x3b7)+_0xa5a7e7(0x172,0x24,0xaa,-0xb4)+'Mac\x20OS\x20X\x201'+'0_10;\x20rv:3'+_0xa5a7e7(0x187,0x288,0x2c0,0x2d0)+_0xd404bd(0x916,0x45d,0x623,0x958)+_0xd404bd(0x9a4,0x9a3,0x6c5,0x8ce)+'.0',_0x330ce4[_0xd404bd(0x9e7,0xa85,0x8e8,0xacd)],_0x330ce4[_0xa5a7e7(0x182,0x598,0x265,0x15f)],_0x330ce4[_0xd404bd(0x303,0x631,0x428,0x677)],'Mozilla/5.'+_0xd404bd(0x77c,0x9d4,0x7ba,0x478)+'untu;\x20Linu'+_0xd404bd(0x69e,0x501,0x741,0x69a)+'rv:47.0)\x20G'+_0xa5a7e7(-0x20a,-0x27a,-0x35,0x161)+_0xd404bd(0x45,0x3ba,0x336,0x2bd)+_0xd404bd(0x39a,0x282,0x58c,0x3fe),_0x330ce4[_0xa5a7e7(-0x24f,0x2,-0x34,-0x346)],_0x330ce4['MQwrz'],_0x330ce4[_0xd404bd(0x639,0x5f4,0x87b,0x815)],_0x330ce4[_0xd404bd(0x7d9,0x670,0x7a2,0x822)],_0xa5a7e7(-0x171,-0x187,-0x7d,-0x3bd)+_0xa5a7e7(0x23b,0x1dd,-0x10a,0xbd)+_0xd404bd(0x3d8,0x2c5,0x595,0x8ab)+_0xd404bd(0x41a,0x4ea,0x451,0x52c)+_0xd404bd(0x67c,0x410,0x3da,0x42d)+_0xd404bd(0x544,0x491,0x5a1,0x5d0)+'601.2.7\x20(K'+'HTML,\x20like'+_0xd404bd(0x3da,0x28a,0x4e5,0x3a5)+'rsion/9.0.'+'1\x20Safari/6'+_0xd404bd(0x210,0x4e8,0x3b9,0x697),_0x330ce4[_0xa5a7e7(0x43b,0x1cc,0x332,0x1cd)],_0xa5a7e7(-0x352,0x1ac,-0x7d,0x110)+_0xa5a7e7(-0x33,-0x433,-0x18f,0x38)+_0xd404bd(0x933,0x449,0x60c,0x588)+_0xa5a7e7(0x4db,0x34d,0x2be,0x371)+_0xd404bd(0x75b,0x829,0x68e,0x62c)+'Kit/537.36'+_0xa5a7e7(-0x20a,-0x50,0x126,-0x37)+_0xd404bd(0x641,0x8e1,0x827,0x8bc)+_0xd404bd(0xab4,0xafc,0x830,0xaa6)+'.0.4324.10'+'4\x20Safari/5'+_0xa5a7e7(-0x1dc,0x352,0xc8,-0x1a3),_0x330ce4['sSaEx'],_0x330ce4[_0xd404bd(0x703,0x585,0x732,0x62b)],_0xd404bd(0x49c,0x769,0x46e,0x5ea)+_0xa5a7e7(-0x41a,-0x405,-0x156,0x10c)+_0xa5a7e7(-0x2e,0x271,0x1a0,-0x4f)+';\x20rv:68.0)'+_0xa5a7e7(0x385,0x4e2,0x2f3,0x398)+'00101\x20Fire'+_0xa5a7e7(0x1d1,0x38d,0x3fb,0x4d2),_0x330ce4[_0xa5a7e7(0x399,0x4b3,0x404,0x458)],_0x330ce4[_0xa5a7e7(0x18c,0x16d,-0x1b3,-0x2d8)],_0x330ce4['efAmX'],_0x330ce4[_0xd404bd(0x60c,0x5ba,0x39c,0x606)],_0xd404bd(0x3e1,0x4b3,0x46e,0x39f)+_0xd404bd(0x5c6,0x5b4,0x3e1,0x462)+_0xd404bd(0x6f6,0x73e,0x595,0x2c7)+_0xd404bd(0x360,0x5e6,0x451,0x217)+_0xa5a7e7(0x30,0xc,0x2e4,0x489)+_0xd404bd(0x5f3,0x89d,0x5a1,0x587)+'601.7.7\x20(K'+_0xa5a7e7(0x40f,0x363,0x37b,0x558)+_0xd404bd(0x3c0,0x718,0x4e5,0x306)+_0xa5a7e7(0xd4,-0x29e,-0x16d,-0x290)+_0xa5a7e7(0x3e2,0x6d,0x258,0x2f2)+_0xa5a7e7(0x6a0,0x1a4,0x3f8,0x3e6),'Mozilla/5.'+'0\x20(Macinto'+'sh;\x20Intel\x20'+_0xa5a7e7(0x115,-0x20e,-0x9a,-0x11b)+'0_9_4)\x20App'+_0xd404bd(0x8be,0x537,0x72c,0x7eb)+_0xd404bd(0x5ba,0x782,0x6d0,0x49d)+'ML,\x20like\x20G'+'ecko)\x20Chro'+'me/36.0.19'+_0xa5a7e7(0x68f,0x365,0x3cc,0x1da)+_0xa5a7e7(0x3b3,0x404,0x392,0x4fe)],_0x48b0b5=_0x2e00c7[~~(Math[_0xa5a7e7(-0xa7,0x55c,0x233,0x472)]()*_0x2e00c7[_0xd404bd(0x364,0x177,0x42e,0x45e)])];function _0xa5a7e7(_0x16db8f,_0x1daf62,_0x3bcda8,_0x26fd30){return _0x2e98f4(_0x16db8f,_0x3bcda8- -0x405,_0x3bcda8-0x140,_0x26fd30-0x158);}return _0x48b0b5;},getID=_0x921f8f=>{let _0x5e5311=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x4e2a3f=_0x5e5311['exec'](_0x921f8f);return _0x4e2a3f&&_0x4e2a3f[0x1dbc+0xe0b+-0x2bc6];},getInfo=async function(_0x51614e){const _0x2d889e={'RYNFB':function(_0x5dfecb,_0x2c6a9e){return _0x5dfecb(_0x2c6a9e);},'YnZjP':function(_0x235e60,_0x2c2b6a){return _0x235e60+_0x2c2b6a;},'wnOVJ':function(_0x2f3f05,_0x2572fa){return _0x2f3f05+_0x2572fa;},'VQupH':function(_0x5e6580,_0x59e183){return _0x5e6580(_0x59e183);},'nyoLW':'/api/textp'+_0x58193a(0x51a,0x447,0x554,0x88e),'fUCXo':_0x58193a(0x6b8,0x3a5,0x64a,0x572),'vVGdo':_0x58193a(0x24d,0x5a4,0x412,0x334),'YviPK':_0x58193a(0x60c,0x5ab,0x5ac,0x89c),'AsIvy':_0x20eff1(0x51c,0x497,0x225,-0x10f)+'ntities','QcNuM':_0x20eff1(0x2c6,0x39d,0x20b,0x409),'aAEbm':_0x20eff1(0x44b,0x92c,0x73d,0x8e8)+_0x20eff1(0x691,0x68b,0x56b,0x833),'gEcpF':'media','pSKqI':function(_0x2554a5,_0x68f826){return _0x2554a5===_0x68f826;},'hCxTs':_0x58193a(0x5d6,0x663,0x640,0x61d),'wwHby':'video_info','iVIeR':_0x20eff1(0x1f8,0x431,0x15a,-0x167),'cWEWO':'photo','yhyCz':function(_0x1ef19a,_0x411d0c){return _0x1ef19a===_0x411d0c;}},_0x353d2f=_0x2d889e[_0x58193a(0x598,0x43a,0x47e,0x3d6)](getID,_0x51614e);function _0x20eff1(_0x88a64c,_0x1eac5d,_0x269124,_0x2486ff){return _0x5546ba(_0x88a64c-0x44,_0x1eac5d-0x1b9,_0x269124-0x1e1,_0x2486ff);}function _0x58193a(_0x1cd448,_0x3e3696,_0x8f1a6b,_0x5ae7d6){return _0x5546ba(_0x1cd448-0xe,_0x3e3696-0xa8,_0x8f1a6b-0x3c5,_0x1cd448);}if(_0x353d2f){let _0x400a29;try{if(_0x2d889e[_0x20eff1(0x56,0x2b1,0x21b,0x478)]===_0x2d889e[_0x20eff1(0x6e5,0x47d,0x750,0x8e8)]){const _0x3377ab={'AgfNl':function(_0x38fd77,_0xb7cf13){function _0x509a20(_0x3bd978,_0xe211f,_0x222510,_0x3d6809){return _0x20eff1(_0x3bd978-0x21,_0xe211f-0x1df,_0xe211f-0x3eb,_0x222510);}return _0x2d889e[_0x509a20(0x7b6,0x685,0x783,0x8fe)](_0x38fd77,_0xb7cf13);}};if(!_0x1adecf)return _0x2d889e['RYNFB'](_0x4b06c0,_0x58193a(0x994,0xa98,0x798,0x8a4)+_0x58193a(0x9f0,0xa1e,0x80e,0x6de)+_0x2d889e['YnZjP'](_0x336341,_0x1718ca)+(_0x20eff1(0x35e,0x39e,0x5a0,0x51e)+_0x20eff1(0x8be,0x728,0x586,0x69e)));if(!_0x16f46a['includes']('|'))return _0x2d889e[_0x58193a(0x18a,0x38b,0x47e,0x680)](_0x1f2d9a,_0x20eff1(0x574,0x8d8,0x5b4,0x2c3)+_0x58193a(0x7ac,0xa2f,0x80e,0xad5)+_0x2d889e[_0x20eff1(0x6f3,0x981,0x7d2,0x68f)](_0xa8522e,_0x80c915)+(_0x20eff1(0x328,0x5e6,0x5a0,0x6aa)+_0x58193a(0x59f,0x707,0x76a,0x663)));_0x40453e=_0x5805c1[_0x20eff1(0x89f,0x815,0x788,0x454)]('\x20'),_0x5dd960=_0x5c9b44[_0x58193a(0x2ab,0x34b,0x41d,0x2df)]('|')[-0x1*0xb1+-0xa64*0x3+0x1fdd],_0x3f659d=_0x2f6a5d['split']('|')[0xe29+0x2612+0x1*-0x343a],_0x2d889e[_0x20eff1(0xe5,0xcd,0x194,-0xd)](_0x425d4e,_0x3a2456[_0x20eff1(0x8d3,0x5e8,0x73c,0x584)]());const _0x3212f8={};_0x3212f8[_0x20eff1(0x26c,0x4b4,0x345,0x458)]=_0x3b15a4,_0x3212f8[_0x20eff1(0x8ac,0x867,0x5c0,0x6d0)]=_0x58f0cf,_0x3212f8[_0x20eff1(0x432,0x681,0x3fb,0x4cd)]=_0x4cc28c;let _0x5b770c=_0x106358[_0x58193a(0x417,0x72e,0x5b4,0x3dd)](_0x3c999b[_0x20eff1(0xd0,0x334,0x30f,0x3a3)][_0x20eff1(0x5a5,0x625,0x613,0x93e)],_0x2d889e[_0x20eff1(0x9ff,0x94c,0x7d2,0x882)](_0x2d889e[_0x20eff1(0x84,0xd0,0x237,0x4e6)],_0xf6835f),_0x3212f8);_0x4f06af(_0x5808aa,_0x5b770c,_0x4506fb['ok'](),_0x571910)[_0x20eff1(0x46c,0x1f,0x22a,-0x10a)](_0x4250ea=>{function _0x1d22dd(_0x5adbbf,_0x11d2ba,_0x46cfb8,_0x52e09b){return _0x20eff1(_0x5adbbf-0xf3,_0x11d2ba-0x1e7,_0x5adbbf- -0xc3,_0x46cfb8);}function _0x394167(_0x3c076f,_0x14e220,_0x486b39,_0x341cf8){return _0x20eff1(_0x3c076f-0x1c3,_0x14e220-0xa5,_0x341cf8-0x26,_0x486b39);}_0x3377ab[_0x1d22dd(0x346,0x381,0x1d4,0x266)](_0x26e7a7,_0x5a5dec[_0x394167(0x4d6,0x970,0x4d9,0x6bb)]());});}else{const _0x4eec29=await getToken();_0x400a29=_0x4eec29[_0x58193a(0xb9f,0x5e3,0x882,0x669)+'n'];}}catch(_0x3bbcda){throw new Error(_0x3bbcda);}const _0x58c307={};_0x58c307[_0x58193a(0x3de,0x28e,0x4b4,0x4f5)+_0x58193a(0x40f,0x537,0x686,0x70b)]=_0x400a29,_0x58c307[_0x58193a(0x450,0x647,0x342,0x2e7)+_0x20eff1(0x5ad,0x894,0x60e,0x624)]=AUTH;const _0x5e827e={};_0x5e827e[_0x20eff1(0x3f6,0x7a2,0x4a0,0x4f4)]=_0x58c307;const _0x2d41af=await axios[_0x58193a(0x82f,0x78b,0x870,0x5c5)](Util[_0x58193a(0x859,0x9e1,0x7cb,0x711)](API_TIMELINE,_0x353d2f),_0x5e827e);if(!_0x2d41af[_0x20eff1(0x99d,0x837,0x77d,0x76e)][_0x20eff1(0x478,0xa10,0x73d,0x719)+_0x58193a(0x8ad,0x58d,0x74f,0xa4c)][_0x2d889e[_0x20eff1(0x2c7,0x522,0x36b,0x257)]][_0x353d2f][_0x2d889e[_0x58193a(0x91b,0x62f,0x7c5,0xa2e)]])throw new Error(_0x2d889e[_0x20eff1(0x7ca,0x3e3,0x539,0x62c)]);const _0x3efa52=_0x2d41af[_0x20eff1(0x7bf,0x916,0x77d,0x515)][_0x2d889e[_0x20eff1(0xab,0x3cf,0x14d,0xea)]]['tweets'][_0x353d2f][_0x2d889e['AsIvy']][_0x2d889e[_0x58193a(0xa7f,0x5f2,0x805,0x773)]];if(_0x2d889e['pSKqI'](_0x3efa52[-0xb*0x1df+0x65f+0xe36*0x1]['type'],_0x58193a(0x63e,0x48e,0x373,0x599)))return{'type':_0x3efa52[0x2192+-0x37*0x9d+-0x1*-0x29][_0x58193a(0x206,0x581,0x3e0,0x43b)],'full_text':_0x2d41af[_0x20eff1(0x8a1,0x676,0x77d,0x811)][_0x2d889e[_0x58193a(0x5f8,0x4c2,0x331,0x9a)]][_0x2d889e['YviPK']][_0x353d2f][_0x2d889e[_0x58193a(0x646,0x2c2,0x606,0x44a)]],'variants':_0x3efa52[-0x22ea+0x8a2+0x1a48][_0x2d889e['wwHby']][_0x2d889e['iVIeR']]};if(_0x3efa52[0x25e0+-0x26a*-0x4+-0x4e*0x9c][_0x20eff1(0x248,0x2bb,0x1fc,-0x98)]===_0x2d889e[_0x20eff1(0x39e,0x29c,0x3f5,0x201)])return{'type':_0x3efa52[0x87d+-0x1d4*0x3+-0x301*0x1][_0x58193a(0xef,0x2fc,0x3e0,0x2fe)],'full_text':_0x2d41af[_0x58193a(0x8d1,0xb70,0x961,0x860)][_0x2d889e['aAEbm']][_0x2d889e[_0x20eff1(0x13a,0x61a,0x36b,0xc0)]][_0x353d2f][_0x2d889e[_0x58193a(0x646,0x5f4,0x606,0x72e)]],'variants':_0x3efa52['map'](_0x57afa4=>_0x57afa4[_0x20eff1(0x137,0x404,0x464,0x418)+_0x20eff1(0x70d,0x8e3,0x6e0,0x8e4)])};if(_0x2d889e[_0x20eff1(0x53,-0x197,0x15c,0x3f2)](_0x3efa52[-0xec*-0x1a+-0x11ab+-0x64d*0x1]['type'],'animated_g'+'if'))return{'type':_0x3efa52[0xd3d+0xd*0x83+-0x86*0x26][_0x58193a(0x522,0x29d,0x3e0,0x725)],'full_text':_0x2d41af[_0x58193a(0xb25,0x9bf,0x961,0xa7b)][_0x2d889e[_0x20eff1(0x304,0x44e,0x14d,0x3c3)]][_0x2d889e['YviPK']][_0x353d2f][_0x2d889e[_0x20eff1(0x5b3,0x2b4,0x422,0x734)]],'variants':_0x3efa52[0x24be+-0x1*0x1f7b+-0x543][_0x2d889e[_0x20eff1(0x206,0x1ae,0x297,0x3fe)]][_0x2d889e[_0x20eff1(0x415,0x4ec,0x37e,0x13b)]]};}else throw new Error(_0x20eff1(0x53d,0x566,0x26e,0x64)+_0x58193a(0x451,0x4e5,0x4bf,0x645));};async function getToken(){const _0x51ee5e={};_0x51ee5e['gdYwz']=function(_0x344d04,_0x5de5e4){return _0x344d04===_0x5de5e4;};function _0x375a47(_0x4cc182,_0x1d45fe,_0x24d5c8,_0x154ef2){return _0x2e98f4(_0x24d5c8,_0x154ef2- -0x422,_0x24d5c8-0x42,_0x154ef2-0x65);}function _0x10cae1(_0x1b7d0f,_0x33b2de,_0x517645,_0x388fe7){return _0x2e98f4(_0x1b7d0f,_0x517645- -0x76,_0x517645-0x1d1,_0x388fe7-0x133);}_0x51ee5e[_0x10cae1(0x455,0x136,0x308,0x1e8)]=function(_0x4af72e,_0x3441ec){return _0x4af72e!==_0x3441ec;},_0x51ee5e['oWPmH']='rxpek';const _0x30dd48=_0x51ee5e;try{const _0xcac5de={};_0xcac5de[_0x10cae1(-0x122,0x44f,0x187,0x2cd)+_0x10cae1(0x8a9,0x877,0x637,0x338)]=AUTH;const _0x55a59c={};_0x55a59c[_0x375a47(0x9a,-0x68,0x42,0x11d)]=_0xcac5de;const _0x679423=await axios[_0x10cae1(0x83b,0xa53,0x7de,0xac8)](API_GUEST,null,_0x55a59c);if(_0x30dd48[_0x375a47(0x30c,0x286,0x2d3,-0x2f)](_0x679423[_0x10cae1(0x7b9,0x69b,0x613,0x6a8)],-0x760*0x1+0xd17+-0x4ef)&&_0x679423[_0x375a47(0x1a0,0x70e,0x594,0x3fa)])return _0x679423[_0x375a47(0xff,0x2bc,0x720,0x3fa)];}catch(_0x92cae1){if(_0x30dd48[_0x375a47(-0x329,-0x362,0x287,-0xa4)](_0x30dd48[_0x375a47(0x14d,-0x16d,0xb2,0x85)],_0x30dd48[_0x10cae1(0x53c,0x37f,0x431,0xec)])){const _0x1c778f={};_0x1c778f['url']=_0x1ef65c['url'];const _0x4b73ba={};_0x4b73ba[_0x10cae1(0x45b,0x67d,0x576,0x4ff)]=_0x1c778f;const _0xbe6302={};_0xbe6302['quoted']=_0x4587e0,_0xe7da49[_0x375a47(0x12,0x1ae,0x396,0x157)+'e'](_0x5e4fa1[_0x375a47(0x25f,0x215,0x68b,0x34c)],_0x4b73ba,_0xbe6302);}else throw new Error(_0x92cae1);}}const fbdl=async _0x31c2eb=>{const _0x3c5714={'dAozZ':'meta[prope'+_0x20b254(0x115,-0xf8,-0x159,0x1e9)+'tle\x22]','EaMRK':_0x28e0a5(0x226,0x149,0x36b,0x311)+_0x20b254(0x264,0xc7,-0x1ff,-0x146)+_0x20b254(0x3da,0x185,-0xb2,0x1a4),'sZJxt':_0x28e0a5(0x624,0x341,0x64d,0x524),'YXmDx':function(_0x33035f,_0x185af5){return _0x33035f(_0x185af5);},'UmtGP':function(_0x541f01,_0x2cef99){return _0x541f01(_0x2cef99);},'jdyPK':_0x28e0a5(0x21d,0x25b,0x36b,0x3e5)+_0x20b254(0xf2,-0xcc,-0x12f,0x209)+'deo:height'+'\x22]','UGrvB':_0x20b254(0x5ef,0x36d,0x37f,0x665)+'ata','lxvDo':'html5playe'+'r.setVideo'+_0x28e0a5(0x7a6,0x3b8,0x67c,0x8ae)+_0x20b254(0x27f,-0x22,-0x306,0x208),'ronTr':'html5playe'+_0x28e0a5(0x271,0x559,0x47e,0x444)+_0x20b254(0x1af,0x1f6,0x1b0,0x238)+_0x28e0a5(0xbce,0x829,0x920,0x995),'LNeYG':_0x28e0a5(0xb99,0xa9c,0x982,0x8dd)+_0x20b254(0x508,0x421,0x60e,0x760)+_0x20b254(0x40d,0x404,0x532,0x4f2)+_0x20b254(0x1ed,0x4c1,0x45e,0x76b),'GjTvb':_0x28e0a5(0x76b,0x9c6,0x982,0x72f)+_0x20b254(0x601,0x421,0x6a3,0x137)+'Slide\x5c(\x27(.'+'*?)\x27\x5c);','vDIpw':function(_0x334d00,_0x238543){return _0x334d00===_0x238543;},'BcjqE':_0x28e0a5(0x55c,0x7c7,0x77a,0x525),'JTWMe':function(_0x350be8){return _0x350be8();},'xYFHb':_0x20b254(0x15f,-0xd3,-0x3da,-0x1e0)+_0x20b254(-0x1e3,-0x129,0x18a,-0x292)+'t','UQQaY':function(_0x4709d1,_0x1addfd){return _0x4709d1(_0x1addfd);},'tqdAI':_0x20b254(0x5e3,0x527,0x5f2,0x42e)+_0x28e0a5(0x7c7,0x59a,0x58d,0x3fa)+'up\x20col-lg-'+_0x20b254(0x1f3,0x439,0x533,0x4cd),'PubXG':'input','VTKXJ':_0x20b254(-0x64,0x145,0x23d,-0x110),'kJWGx':_0x28e0a5(0x86e,0x43e,0x722,0x95d),'khOto':function(_0x26e5bb,_0x2185b4){return _0x26e5bb(_0x2185b4);},'jWKLu':_0x20b254(0x682,0x448,0x538,0x4d6),'VQHqR':_0x20b254(0x307,0x532,0x7c3,0x372),'agVad':_0x28e0a5(0x7a6,0x4ca,0x756,0x6de),'wjEEh':_0x28e0a5(0x680,0xb04,0x986,0x772)+_0x20b254(0x1e9,0x3cc,0x4b3,0x6da)+'\x22]','UvXTf':function(_0x523acd,_0x36c62f,_0x5d2c60){return _0x523acd(_0x36c62f,_0x5d2c60);}};async function _0x1f0014(){const _0x4787b4={'mubMt':_0x3c5714['dAozZ'],'LaKCs':_0x3c5714['EaMRK'],'LaUPE':_0x3c5714[_0x4e5714(0x90,-0xe8,0x41d,0x153)],'pCoNT':function(_0x551cf3,_0x2d4978){function _0x13df93(_0x4b3ba0,_0x5349ac,_0x2431cf,_0x4bf3f8){return _0x4e5714(_0x4b3ba0-0x19,_0x5349ac-0xb8,_0x4b3ba0,_0x5349ac-0x126);}return _0x3c5714[_0x13df93(0x5d5,0x61e,0x5bd,0x8e2)](_0x551cf3,_0x2d4978);},'CgJtV':function(_0x3558e8,_0x4b4729){return _0x3c5714['UmtGP'](_0x3558e8,_0x4b4729);},'foGQy':_0x3c5714[_0x4e5714(0x8d9,0x73f,0x466,0x5de)],'pWVQr':_0x3c5714['UGrvB'],'hWtvk':_0x3c5714['lxvDo'],'ksvHI':_0x3c5714['ronTr'],'IYPyV':_0x3c5714[_0x5015b6(0x1af,0x1cf,0x33d,0x3aa)],'SnXtO':_0x3c5714['GjTvb'],'PcOHu':function(_0x1a76e8,_0x32132e){function _0x35a8e0(_0x4b07de,_0xdde8b4,_0x5c7a51,_0x2b4c60){return _0x5015b6(_0x4b07de-0x55,_0xdde8b4-0xbd,_0x2b4c60,_0x5c7a51-0x600);}return _0x3c5714[_0x35a8e0(0x7c0,0x6c4,0x7e5,0x4ef)](_0x1a76e8,_0x32132e);},'xcgFw':_0x3c5714[_0x4e5714(0x61f,0x5c3,0x434,0x661)],'YdoNz':function(_0x2d98c4,_0xf37e69){return _0x2d98c4(_0xf37e69);},'eIcCR':_0x4e5714(0x446,0x6c6,0x649,0x6d5),'QuZEA':'RBEVE'};let _0x343c6d=_0x3c5714[_0x4e5714(0x524,0x57a,0x4b8,0x6e4)](UserAgent);const _0x5ab837={};_0x5ab837[_0x4e5714(0x241,0x56b,0x10c,0x232)]=_0x4e5714(0x2ff,0x12c,0x6ee,0x3b0)+_0x4e5714(-0xa5,0x359,0x3a8,0x1ac)+'n/xhtml+xm'+'l,applicat'+_0x5015b6(-0xe5,0x96,0x4bd,0x1b0)+_0x5015b6(0x426,0x506,0x455,0x2ed)+_0x4e5714(0x7d4,0x2aa,0x821,0x507)+_0x5015b6(0xdb,0x425,0x20d,0x122)+_0x5015b6(0x234,0x11e,-0x205,-0x7d)+_0x4e5714(0x6f4,0x309,0x5a8,0x447)+_0x4e5714(0xa2,0x17,0x230,0x15f)+'igned-exch'+_0x5015b6(0x336,-0x24,-0xef,0x1d1)+_0x4e5714(0x55f,0x6d,0x203,0x35a),_0x5ab837['accept-lan'+_0x5015b6(-0xa2,-0x1e1,0x20,0x1a)]='id,en-US;q'+'=0.9,en;q='+_0x5015b6(-0xa1,-0x10,0x218,0x1c4)+_0x5015b6(0xe2,0x283,-0x41,0xef)+'6',_0x5ab837[_0x5015b6(0x145,0x440,0x29b,0x2eb)+'user']='?1',_0x5ab837[_0x4e5714(0x8c7,0x7d8,0x558,0x5e8)]=_0x343c6d;const _0x48fa4f={};_0x48fa4f['headers']=_0x5ab837;const _0x2267e8=await axios['get'](_0x3c5714['xYFHb'],_0x48fa4f),_0x259694=cheerio['load'](_0x2267e8[_0x5015b6(0x796,0x7cb,0x2f1,0x536)]);let _0x3ab3c5;_0x3c5714['UQQaY'](_0x259694,_0x3c5714['tqdAI'])[_0x5015b6(0x1cb,0x29e,0x1e9,-0x8a)](_0x3c5714[_0x4e5714(0x100,0x46d,0x412,0x1de)])[_0x5015b6(0x43e,0x64e,0x38f,0x383)]((_0x363786,_0x3424d0)=>{function _0x2e90d5(_0x508964,_0x3d929c,_0x2b0178,_0xbbec1d){return _0x4e5714(_0x508964-0x3c,_0x3d929c-0x178,_0x2b0178,_0xbbec1d- -0x2f4);}const _0x2072e9={'PdkaY':function(_0x2fa377,_0x21513b){return _0x2fa377(_0x21513b);},'WKZDR':_0x4787b4['mubMt'],'JFNZY':_0x4787b4['LaKCs'],'VQMKI':_0x4787b4['LaUPE'],'CQzqY':function(_0x4b5a7d,_0x10f309){function _0xa4e584(_0x56ae43,_0x3a75de,_0x2d7725,_0x504dc1){return _0x5617(_0x3a75de-0x27a,_0x56ae43);}return _0x4787b4[_0xa4e584(0x7f9,0x845,0x978,0x645)](_0x4b5a7d,_0x10f309);},'pwhPY':function(_0x1687a3,_0x9d643b){return _0x4787b4['CgJtV'](_0x1687a3,_0x9d643b);},'ELtrC':_0x4787b4['foGQy'],'xosSG':_0x4787b4['pWVQr'],'Sprad':function(_0x9e3dbe,_0x2cc2da){function _0x10375c(_0x3749f1,_0x52c19f,_0x38ad29,_0x16f7f8){return _0x5617(_0x3749f1-0x1a6,_0x52c19f);}return _0x4787b4[_0x10375c(0x561,0x3ec,0x5f0,0x6c8)](_0x9e3dbe,_0x2cc2da);},'wNtIQ':_0x34cde8(0x40c,0x2ae,0x435,0x372)+_0x2e90d5(0x18d,0x34,-0x1e2,-0xa8)+'cript:nth-'+_0x34cde8(0x3b,0xff,-0x8,-0x5d),'MGVqL':_0x4787b4['hWtvk'],'mRbwg':_0x34cde8(0x217,0x671,0x670,0x3ed)+_0x34cde8(-0x433,-0x33c,-0x3d7,-0x117)+_0x2e90d5(-0x424,-0x439,-0x4a9,-0x1c9)+'(.*?)\x27\x5c);','oxQKG':_0x4787b4[_0x34cde8(0x521,0x3ec,0x5f0,0x3a3)],'DrQdO':_0x4787b4[_0x34cde8(-0x82,-0x3a5,0x18,-0x227)],'xhOZe':_0x34cde8(0x6a4,0x1b6,0x420,0x3ed)+_0x2e90d5(0x2cb,0x563,0x1c6,0x37a)+_0x2e90d5(-0x28a,0x7b,-0x153,-0xc3)+_0x34cde8(-0x352,-0x8c,-0x1e4,-0x158),'rYErr':_0x4787b4[_0x34cde8(0x24e,-0x1b1,0x144,0x9b)]};function _0x34cde8(_0x37035d,_0x5a7c56,_0x6f6fd3,_0x11ae3d){return _0x4e5714(_0x37035d-0xe3,_0x5a7c56-0x164,_0x5a7c56,_0x11ae3d- -0x383);}if(_0x4787b4[_0x34cde8(0x5a5,0x26a,0x2b0,0x3fb)](_0x4787b4[_0x2e90d5(0x260,-0x1f1,-0x40f,-0xdc)],_0x2e90d5(0x104,0x63,0x96,-0x1cc)))throw new _0x3e5664(_0x12c071);else{let _0x5cf9a1=_0x4787b4[_0x2e90d5(0x331,0x1e5,0x655,0x49b)](_0x259694,_0x3424d0)['attr'](_0x4787b4[_0x2e90d5(0x23,0x149,0x1c7,0x31)]);if(_0x5cf9a1){if(_0x4787b4[_0x2e90d5(-0x296,-0x141,-0x2dd,-0x12e)]!==_0x4787b4['QuZEA']){const _0x45a53e={};_0x45a53e[_0x2e90d5(-0x3d0,0x1dc,-0x3e1,-0xfa)]=![];let _0x362ef0=_0x1301a9[_0x2e90d5(0x2e1,0x1d,-0x5b,0x1b)](_0x21dcdc,_0x45a53e);const _0x1e959a=_0x2072e9[_0x34cde8(-0x148,-0x441,0x157,-0x19e)](_0x362ef0,_0x2072e9[_0x2e90d5(-0x85,-0x363,-0x12c,-0x1c6)])['attr'](_0x2e90d5(0xd5,0xdc,-0x95,0x147)),_0x46b3b4=_0x362ef0(_0x2072e9[_0x34cde8(-0x302,-0x39b,0x4,-0x257)])[_0x2e90d5(0x698,0x3f7,0x1d9,0x427)](_0x2072e9[_0x2e90d5(0x174,0x621,0x4ef,0x41c)]),_0x4c449f=_0x2072e9[_0x34cde8(0x216,0x35c,0x47b,0x3e9)](_0x362ef0,'meta[prope'+_0x2e90d5(0x412,0x61c,0x547,0x44d)+_0x34cde8(-0x99,0x2ca,0x54b,0x28c))[_0x34cde8(0x325,0x337,0x546,0x398)](_0x2072e9[_0x34cde8(0x4ae,0xe7,0x56c,0x38d)]),_0x6ae5bb=_0x2072e9[_0x2e90d5(0x51e,0x2a8,0x5fd,0x478)](_0x362ef0,'meta[prope'+'rty=\x22og:vi'+_0x34cde8(0x9,0x240,0x12e,-0x21))['attr'](_0x2072e9[_0x2e90d5(0x588,0x37c,0x1d7,0x41c)]),_0x56b764=_0x2072e9[_0x34cde8(0x578,0x3b3,0x128,0x26b)](_0x362ef0,_0x34cde8(-0x318,-0x319,-0x67,-0x22a)+_0x34cde8(0x4a,-0x483,-0x24e,-0x202)+_0x34cde8(0x40d,0x25a,0x22f,0x117)+']')[_0x2e90d5(0x6ae,0x271,0x6f0,0x427)](_0x2072e9[_0x34cde8(0x378,0x56,0x2db,0x38d)]),_0xe849ea=_0x2072e9[_0x34cde8(0x1d9,0x166,0x31e,0x26b)](_0x362ef0,_0x2072e9['ELtrC'])[_0x2e90d5(0x293,0x250,0x52a,0x427)](_0x2072e9[_0x34cde8(0x111,0x24e,0x6e,0x38d)]),_0x354b05=_0x362ef0(_0x2072e9[_0x34cde8(-0x1cd,0x1d4,0x25f,-0x49)])[_0x34cde8(0x362,-0x101,0x138,0x215)](),_0xd79146=_0x2072e9[_0x34cde8(-0x1c2,0x262,0x23f,0xfd)](_0x362ef0,_0x2072e9[_0x2e90d5(0x1c2,0x129,-0x343,-0x128)])[_0x34cde8(0x3a8,0x38f,0xf3,0x2a7)](),_0x1c3556={'low':(_0xd79146[_0x2e90d5(0x3d,-0x1ee,-0x13f,-0x1ab)](_0x2072e9['MGVqL'])||[])[0x2*0xf67+0x3a2+-0x29*0xd7],'high':_0xd79146[_0x34cde8(-0x504,-0x274,-0x14f,-0x23a)](_0x2072e9[_0x2e90d5(0x16b,0x116,0x192,-0x6)]||[])[0x1b23+0x6f2+-0x2214],'HLS':_0xd79146[_0x2e90d5(-0x4c6,-0x4e8,0x62,-0x1ab)](_0x2072e9[_0x34cde8(-0xb7,-0x71,0xd7,0x1cb)]||[])[-0x1*-0x21cb+-0x806*-0x2+-0x31d6],'thumb':_0xd79146[_0x34cde8(-0x2e1,0x0,-0x2cf,-0x23a)](_0x2072e9[_0x34cde8(0x4b,0x329,0x1bf,0x13c)]||[])[-0x2*0xfd5+-0xb9d+0x2b48],'thumb69':_0xd79146[_0x2e90d5(-0x1c2,-0x260,-0xce,-0x1ab)](_0x2072e9['xhOZe']||[])[-0x2104+-0xd*-0x141+-0xa*-0x1ac],'thumbSlide':_0xd79146[_0x2e90d5(-0x1d4,-0x230,-0x1f3,-0x1ab)](_0x2072e9[_0x34cde8(0x2e3,0x15b,0x5c,0x366)]||[])[-0x2*-0x9fb+-0xb*0x2e+-0x11fb*0x1],'thumbSlideBig':_0xd79146[_0x2e90d5(0x12,-0x305,-0x214,-0x1ab)]('html5playe'+'r.setThumb'+_0x34cde8(0x304,0xd2,0xc0,0x35a)+_0x34cde8(0x17,-0x2e,0x1e7,-0x33)||[])[0x4d1+-0x1005+0xb35]},_0x11da66={};_0x11da66[_0x34cde8(0x1cf,0x3ca,-0x80,0x142)]=_0x1e959a,_0x11da66[_0x2e90d5(0xb1,0x391,0xea,0x1ba)]=_0x3cb299,_0x11da66[_0x2e90d5(0xa7,0x65,-0x35e,-0x135)]=_0x46b3b4,_0x11da66[_0x34cde8(-0x143,0x360,0xdb,0x1a2)]=_0x4c449f,_0x11da66[_0x34cde8(-0x15a,-0x8,-0x379,-0x35)]=_0x6ae5bb,_0x11da66[_0x2e90d5(0x335,0x201,0x448,0x2fe)]=_0x56b764,_0x11da66[_0x2e90d5(-0x1d6,-0xe6,-0xe8,0x74)+'t']=_0xe849ea,_0x11da66['info']=_0x354b05,_0x11da66[_0x34cde8(-0x192,-0x26,-0x216,0x2)]=_0x1c3556;const _0x59d022={};_0x59d022[_0x34cde8(0x48,-0x58,0x189,0x23f)]=0xc8,_0x59d022[_0x2e90d5(0x29f,0x483,0x181,0x459)]=_0x11da66,_0x29e2d3(_0x59d022);}else _0x3ab3c5=_0x5cf9a1;}}});const _0x4f1719={};_0x4f1719['ua']=_0x343c6d;function _0x4e5714(_0x2defad,_0x1f48aa,_0x2acdfa,_0x383939){return _0x20b254(_0x2defad-0x6b,_0x383939-0x24d,_0x2acdfa-0x1f4,_0x2acdfa);}_0x4f1719['token']=_0x3ab3c5;function _0x5015b6(_0xbb554d,_0x1a9576,_0x3e1c58,_0x2d6bd6){return _0x20b254(_0xbb554d-0xa8,_0x2d6bd6-0x2e,_0x3e1c58-0x87,_0x3e1c58);}return _0x4f1719;}function _0x20b254(_0x4df621,_0x4a571a,_0x2fb5fe,_0x17ef52){return _0x5546ba(_0x4df621-0x15c,_0x4a571a-0x81,_0x4a571a- -0x94,_0x17ef52);}async function _0x3937b1(_0x1a838c,_0x37804d){const _0x472fda={'KGqvu':function(_0x5c333,_0x18d698){return _0x5c333(_0x18d698);}},_0x43db84={};_0x43db84['accept']=_0x1d32eb(-0x13b,0x56,0x1ff,0x342)+_0x1911f2(0x127,-0xf3,-0x18,0xb1)+_0x1d32eb(0x401,0x191,-0xd9,0x326)+_0x1911f2(0x1e0,0xa6,-0xfe,0x44f)+_0x1911f2(0x34a,0x445,0x5f1,0x50a)+_0x1911f2(0x487,0x493,0x4f5,0x526)+'avif,image'+_0x1d32eb(-0x37,-0x19,-0xcc,-0x1d1)+_0x1d32eb(-0x119,-0x1b8,0xe5,-0x3c8)+_0x1911f2(0x3c2,0x512,0x253,0x1a8)+_0x1d32eb(-0x2e1,-0x1fb,0x10c,0x121)+'igned-exch'+'ange;v=b3;'+'q=0.9',_0x43db84[_0x1d32eb(0x2ae,0xdc,-0x2e,0xda)+_0x1911f2(0x1b4,0x2b9,-0x89,0x23b)]=_0x1d32eb(0x19f,0x371,0x41e,0x279)+'=0.9,en;q='+'0.8,es;q=0'+_0x1d32eb(-0x211,-0x4c,0xe9,0x153)+'6';function _0x1d32eb(_0x525556,_0x56ac79,_0xd00cce,_0x5df186){return _0x20b254(_0x525556-0x102,_0x56ac79- -0x10d,_0xd00cce-0x1e4,_0x525556);}_0x43db84[_0x1d32eb(-0x5c,0x1b0,-0x181,0x3d1)+_0x1d32eb(-0x5,0x237,-0x88,0x4e7)]='?1',_0x43db84[_0x1911f2(0x2da,0x369,0x5ef,0x1ca)+'pe']=_0x1d32eb(-0xbe,-0x1ae,-0x9,-0xc7)+'n/x-www-fo'+_0x1d32eb(-0x14a,0x33,0x346,-0x23a)+'ded',_0x43db84[_0x1d32eb(0xac,0x28e,0x0,0x2d2)]=_0x37804d;const _0x44b5e7=await _0x3c5714[_0x1911f2(0x4d1,0x774,0x399,0x4cc)](axios,{'url':_0x1d32eb(-0x21d,-0x1e0,-0x4da,-0x442)+_0x1d32eb(0xa8,-0x236,-0x327,-0x338)+_0x1d32eb(0x550,0x3e9,0x11c,0x6ee)+_0x1d32eb(-0x4b,-0x16a,-0xad,-0x2d1),'method':_0x3c5714[_0x1911f2(0xf8,0x236,0x1a5,0x2e2)],'data':new URLSearchParams(Object[_0x1911f2(0x59a,0x85b,0x6c9,0x453)](_0x1a838c)),'headers':_0x43db84});function _0x1911f2(_0xef82ee,_0x4313df,_0x30bbfa,_0x30576e){return _0x20b254(_0xef82ee-0x5c,_0xef82ee-0x1c8,_0x30bbfa-0x1dc,_0x30bbfa);}const _0x186425=cheerio[_0x1d32eb(-0x23d,-0x4b,0x137,-0x36f)](_0x44b5e7['data']);let _0xbf70b=[];return _0x3c5714['UmtGP'](_0x186425,_0x3c5714[_0x1d32eb(-0x73,-0x8c,0xf1,0x13e)])[_0x1911f2(0x110,0x98,-0x224,0x3b6)]('a')['each']((_0x5597a5,_0x1db080)=>{function _0x514fb6(_0x4bd18e,_0xa33b62,_0x557c38,_0x4cadff){return _0x1911f2(_0x4bd18e- -0x163,_0xa33b62-0x18d,_0xa33b62,_0x4cadff-0x6d);}const _0x4f8ede={'IfvDe':function(_0x5cf447,_0x3e0b27){return _0x5cf447(_0x3e0b27);}};function _0x182424(_0x312345,_0x4485ae,_0x233264,_0x4d4145){return _0x1d32eb(_0x233264,_0x4485ae-0x2f6,_0x233264-0x159,_0x4d4145-0x122);}if(_0x3c5714['VTKXJ']!==_0x3c5714[_0x514fb6(0x507,0x7af,0x669,0x7f1)]){let _0x47955b=_0x3c5714['khOto'](_0x186425,_0x1db080)[_0x182424(0x721,0x6b7,0x864,0x3a0)](_0x3c5714[_0x182424(0x46c,0x139,0x254,-0x6a)]),_0x2cd678=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x2cd678[_0x514fb6(0x1dd,0x1f8,0x3b8,0x1b0)](_0x47955b)&&(_0x182424(0x9c0,0x71b,0x713,0x49d)===_0x3c5714[_0x182424(-0x5f,0x140,-0x1c0,-0xd5)]?_0xbf70b[_0x182424(0x3c6,0x173,0x9a,0x127)](_0x47955b):_0x4f8ede[_0x514fb6(0x4fb,0x7ec,0x1ce,0x67a)](_0x632b33,_0x182424(0x330,0x62f,0x626,0x79b)+_0x182424(0x6c9,0x709,0x955,0xa4e)+_0x514fb6(0x21b,0x1a1,0x4a7,0x207)+_0x182424(0x7e6,0x65d,0x83f,0x63d)+(_0x9129ad+_0x53f073)));}else _0x472fda[_0x514fb6(0x1df,-0xb0,-0x12f,0x290)](_0x129fa2,_0x155f09[_0x514fb6(0x485,0x734,0x2cf,0x21a)]());}),_0xbf70b;}const _0x273b99=await _0x3c5714['JTWMe'](_0x1f0014),_0x2092f1={};_0x2092f1['URL']=_0x31c2eb,_0x2092f1[_0x20b254(0x138,-0x32,0x13a,-0x9f)]=_0x273b99[_0x28e0a5(0x372,0x1a5,0x42d,0x67a)];function _0x28e0a5(_0x1a9634,_0x473561,_0x44ab2e,_0x5a0016){return _0x5546ba(_0x1a9634-0x71,_0x473561-0xa1,_0x44ab2e-0x3cb,_0x5a0016);}let _0x369996=_0x2092f1;const _0x1c0bd2=await _0x3c5714['UvXTf'](_0x3937b1,_0x369996,_0x273b99['ua']);return _0x1c0bd2;};zee['Facebook'](''+q)[_0x5546ba(0x39,0x2b4,0x131,-0x87)](async _0x557a3c=>{const _0x3aa704={};_0x3aa704[_0x16ea2b(-0x74,0x3bb,0x15e,0x108)]=_0x537ea0(0x3a2,0x518,0x686,0x3d0);const _0xd6e841=_0x3aa704;function _0x537ea0(_0x1bbc67,_0xbfbeff,_0x57dadf,_0x25fefa){return _0x5546ba(_0x1bbc67-0x3f,_0xbfbeff-0xce,_0x1bbc67-0x3b1,_0xbfbeff);}const _0x1bc068={};_0x1bc068[_0x16ea2b(0x669,0x1f4,0x541,0x4c2)]=_0x557a3c[_0x537ea0(0x58c,0x5f8,0x4c3,0x2d7)][0x3*-0xcb1+0x11c8+0x144b]['url'];function _0x16ea2b(_0x3f8f30,_0x10ea32,_0xc114e1,_0x59e37c){return _0x2e98f4(_0x10ea32,_0x59e37c- -0x1b1,_0xc114e1-0xfd,_0x59e37c-0xe6);}const _0x2ae34c={};_0x2ae34c['document']=_0x1bc068,_0x2ae34c[_0x537ea0(0x8a9,0xa0b,0x939,0x95e)]=_0xd6e841[_0x16ea2b(0x1b0,-0x131,-0x13f,0x108)],_0x2ae34c[_0x16ea2b(0x123,-0x1d5,-0x12,0xb2)]=_0x16ea2b(-0x52,0xd9,0x1f3,0x14c)+_0x16ea2b(0x7b6,0x517,0x3de,0x475),alpha[_0x16ea2b(0x2ba,0x42a,0x412,0x3c8)+'e'](m[_0x537ea0(0x89f,0x86e,0x655,0x7eb)],_0x2ae34c,{'quoted':m});})['catch'](_0x2a3384=>{const _0xa174a5={};_0xa174a5[_0x53cea5(0xb19,0x8d3,0xce5,0xa22)]='audio/mpeg',_0xa174a5[_0x1af334(-0x1b5,-0xe7,0xb2,0x7f)]=_0x53cea5(0x6b2,0x204,0x698,0x542)+_0x53cea5(0x773,0xa10,0x835,0x86b);const _0x410273=_0xa174a5;function _0x53cea5(_0x36c93a,_0x553843,_0x7fb4cb,_0x3301cf){return _0x5546ba(_0x36c93a-0x1eb,_0x553843-0xd1,_0x3301cf-0x4c5,_0x36c93a);}function _0x1af334(_0x5d2194,_0x123597,_0x11a158,_0xd9f953){return _0x2e98f4(_0x123597,_0x5d2194- -0x436,_0x11a158-0xc8,_0xd9f953-0x166);}fbdl(''+q)['then'](_0x5a00a1=>{const _0x5c2da2={};function _0x5c85b(_0x339fe5,_0x12df96,_0x2130aa,_0x4577ee){return _0x53cea5(_0x4577ee,_0x12df96-0xa4,_0x2130aa-0xf3,_0x12df96- -0x1be);}_0x5c2da2[_0x5c85b(0x867,0x6fa,0x5bc,0x464)]=_0x5a00a1[0x398+0xf48*0x2+-0x2228*0x1];const _0x2d605d={};_0x2d605d[_0x5c85b(0x7f9,0x6af,0x799,0x885)]=_0x5c2da2,_0x2d605d[_0x5c85b(0x646,0x7ff,0x905,0xb40)]=_0x410273[_0x4ecdd4(0x782,0x829,0x9a2,0x6cf)],_0x2d605d[_0x5c85b(0xda,0x2ea,0x4c1,0x290)]=_0x410273[_0x4ecdd4(0x6dd,0x354,0x446,0x4e9)];function _0x4ecdd4(_0xb775aa,_0x1db213,_0x227a6a,_0x5db796){return _0x53cea5(_0xb775aa,_0x1db213-0xea,_0x227a6a-0x12b,_0x227a6a- -0x80);}alpha[_0x5c85b(0x906,0x600,0x2cd,0x775)+'e'](m[_0x5c85b(0xada,0x7f5,0x9e4,0x800)],_0x2d605d,{'quoted':m});});});}break;case _0x2e98f4(0xa1d,0x818,0xaf6,0x602):case'fbhd':if(!q)return reply(lang['wrongForma'+'t'](prefix));if(!isUrl(q))return reply(lang[_0x2e98f4(0x576,0x2b4,0x2ad,0x295)+'t'](prefix));if(!text[_0x2e98f4(0x9ca,0x81e,0xad7,0x62b)](_0x2e98f4(0xa20,0x813,0x9d0,0x7a8)+'om')&&!text[_0x5546ba(0x772,0x6de,0x59e,0x5bf)](_0x5546ba(0x20,0x6d,0xf0,-0x9e)))return reply(lang[_0x5546ba(-0x20b,0x352,0x34,-0xb5)+'t'](prefix));await reply(lang[_0x5546ba(0x3a5,0x2eb,0x55b,0x26f)]()),zee[_0x5546ba(-0xea,0x1d3,0x1c7,0x49b)](''+q)[_0x5546ba(0x20d,-0x12f,0x131,-0x33)](async _0x26a625=>{const _0x37811c={};_0x37811c[_0x582659(0xb31,0xab8,0xb8b,0xceb)]='video/mp4';function _0x9d4da6(_0x40610f,_0x2b0a03,_0x488fc2,_0x2c58bc){return _0x2e98f4(_0x2c58bc,_0x488fc2- -0x2e1,_0x488fc2-0x38,_0x2c58bc-0x168);}const _0x3fe867=_0x37811c,_0x2439f3={};_0x2439f3['url']=_0x26a625[_0x9d4da6(0x109,0x157,0x17a,-0x123)][0x295*-0x9+0x4*0x6c5+-0x1*0x3d6][_0x582659(0x78f,0x959,0x985,0x716)];const _0x1ee8eb={};_0x1ee8eb[_0x9d4da6(0xdb,0x1dc,0x347,0x45e)]=_0x2439f3,_0x1ee8eb['mimetype']=_0x3fe867[_0x9d4da6(0x213,0x4b7,0x4f1,0x70d)];function _0x582659(_0x224ba9,_0x2620fa,_0x57a6dd,_0x2143a1){return _0x5546ba(_0x224ba9-0x1bd,_0x2620fa-0x126,_0x2620fa-0x566,_0x57a6dd);}_0x1ee8eb[_0x582659(0x538,0x549,0x726,0x719)]='Facebook\x20V'+_0x582659(0x614,0x520,0x366,0x20f),alpha['sendMessag'+'e'](m['chat'],_0x1ee8eb,{'quoted':m});})[_0x2e98f4(0x43e,0x2c9,0x10b,0x45f)](_0x187f79=>{function _0x35c2d6(_0xf4e89e,_0x675c36,_0x3b9040,_0x22ff2c){return _0x2e98f4(_0x675c36,_0x3b9040- -0x448,_0x3b9040-0x182,_0x22ff2c-0x7c);}function _0x26d44c(_0xf9fcaf,_0xca1b4,_0x152ea1,_0x1690ac){return _0x5546ba(_0xf9fcaf-0x77,_0xca1b4-0xdf,_0xca1b4-0x55,_0x1690ac);}const _0x2d292d={'YJHQt':function(_0x2b952f,_0x184293){return _0x2b952f(_0x184293);}};_0x2d292d[_0x35c2d6(-0x155,-0x81,-0xac,0x1a)](reply,lang[_0x35c2d6(0x16f,0x24e,0x2ec,0x3ca)]());});break;case _0x5546ba(0x331,0x6f1,0x584,0x7c5):if(!q)return reply(lang[_0x2e98f4(0x399,0x2b4,0x34e,0x53b)+'t'](prefix));if(!isUrl(args[0x1615*0x1+-0xf25+0x10*-0x6f])&&!args[-0x1*-0x66a+-0x2*-0x10d+0x2*-0x442]['includes']('tiktok.com'))return reply(lang[_0x5546ba(-0xaf,0x358,0x175,-0x1ca)]());function tiktokDownloader(_0x13c570){const _0x3fb52a={'cXRQj':function(_0x4d80ab,_0x397ed6){return _0x4d80ab+_0x397ed6;},'NFBrO':function(_0x5b72f6,_0x1e51af){return _0x5b72f6(_0x1e51af);},'RJonv':_0x36ec02(0x4c4,0x4ca,0x45e,0x4a8),'ukfBl':_0x36ec02(-0xa5,0x4da,0x256,0x1a),'cDcsF':_0x310f1c(0xb91,0x99b,0xb6a,0x8ea),'toCso':_0x36ec02(0x434,0x61,0x3a2,0x6bc)+'d','jwKdr':'GET','ccQrV':_0x310f1c(0x9e6,0xcf4,0xa4a,0x941)+'downloader'+'.com/','XDOYT':_0x310f1c(0x7d8,0xa2a,0xa90,0x4d2)+_0x36ec02(-0x2c0,0x263,-0x8b,0x11)+_0x310f1c(0x913,0xa16,0x81b,0xc46)+_0x36ec02(-0x307,0x193,0x2e,-0x1b9)+_0x36ec02(0x42b,-0x83,0x198,0x2ae)+_0x310f1c(0x934,0x644,0xa84,0xa9e)+_0x36ec02(0x22e,0x141,0x2d0,0x165)+_0x310f1c(0x769,0x7d1,0x842,0x74a)+_0x36ec02(0x278,-0x232,-0x95,-0xa3)+_0x36ec02(0x210,0x2bf,0x210,-0xb7)+_0x36ec02(-0x10c,-0x36e,-0xd8,-0x5)+_0x36ec02(0x374,0x5b0,0x2c4,0x3e5)+_0x310f1c(0x818,0x81f,0x790,0x9b9)+'q=0.9','owfqt':_0x310f1c(0x6e9,0x73c,0x741,0x805)+_0x310f1c(0x5d7,0x846,0x56c,0x6a5)+'\x20NT\x2010.0;\x20'+_0x36ec02(0x1df,0x53a,0x3c5,0xdd)+_0x310f1c(0x909,0xac0,0xa8c,0x9c2)+_0x310f1c(0x786,0x9e5,0x78d,0x63e)+_0x310f1c(0x88c,0x54b,0x665,0xa6c)+'ike\x20Gecko)'+_0x36ec02(-0x84,0x1dc,-0x90,-0xd4)+_0x36ec02(-0x19f,-0x278,0x59,0x324)+_0x36ec02(0x13e,0x215,-0x37,-0x299)+_0x36ec02(0x4a9,-0x2,0x1cf,0x20),'EvEHI':function(_0x301990,_0x387bc2){return _0x301990(_0x387bc2);},'Allmu':_0x36ec02(0x142,0x12d,-0x67,0x2d5),'xajry':function(_0x30550a,_0x5cc209){return _0x30550a(_0x5cc209);},'EQzam':_0x310f1c(0x9e6,0x98e,0x830,0xc1d)+'downloader'+_0x310f1c(0xb78,0xcf4,0xb6a,0x844),'rpneD':_0x310f1c(0x96c,0x722,0x67e,0x6ec),'PjVwD':_0x310f1c(0x702,0x5f8,0x8ab,0x6cd),'HMIoD':_0x310f1c(0x6b2,0x9e5,0x753,0x667),'sdgds':function(_0x376705,_0x25cbde){return _0x376705(_0x25cbde);},'mkyjB':'div.downlo'+_0x36ec02(0x3f8,0x1a6,0x188,0x33c),'LupOT':function(_0x59bacd,_0x4bfc63){return _0x59bacd(_0x4bfc63);},'QzuVd':_0x36ec02(0x18d,0x13,0x7b,0xe)+_0x310f1c(0x6bc,0x82c,0x7ad,0x6d7)+_0x36ec02(0x25b,0x412,0x24d,0x275)+'4)','GtcrH':function(_0x1eab14,_0x3aaa81){return _0x1eab14*_0x3aaa81;},'yKEya':_0x36ec02(0xff,0x1f1,0x13b,0x155),'tyatY':_0x310f1c(0x8e3,0x6bf,0xa7b,0x918),'PdIUb':'\x20Detik','jbWIh':_0x310f1c(0x953,0x7dd,0xb88,0xab5)};function _0x36ec02(_0x11e2a2,_0x33e6bd,_0x25ae19,_0x289d03){return _0x2e98f4(_0x33e6bd,_0x25ae19- -0x2fe,_0x25ae19-0xfc,_0x289d03-0x114);}function _0x310f1c(_0x566c74,_0x3ba3d5,_0x4255c7,_0x4c372e){return _0x5546ba(_0x566c74-0x1a4,_0x3ba3d5-0x5e,_0x566c74-0x5e1,_0x4c372e);}return new Promise(async(_0x22cf43,_0x487436)=>{const _0x4137b1={};_0x4137b1[_0x58e100(0x806,0x788,0x819,0x75a)]=_0x58e100(0x8f5,0x6d4,0x60a,0x6a0);const _0x5758ec=_0x4137b1;function _0x58e100(_0x52c684,_0x330dfc,_0x15532c,_0x53eb0e){return _0x36ec02(_0x52c684-0x179,_0x52c684,_0x53eb0e-0x4eb,_0x53eb0e-0xf9);}function _0x45f6af(_0x5dd6bc,_0x109afe,_0x514255,_0x56a843){return _0x310f1c(_0x56a843- -0x345,_0x109afe-0x6d,_0x514255-0xb1,_0x5dd6bc);}try{if(_0x58e100(0x746,0x2f2,0x626,0x606)!==_0x3fb52a[_0x58e100(0x699,0x1cd,0x369,0x434)]){let _0x3bab9d=isUrl(_0x13c570);if(!_0x3bab9d)return _0x3fb52a['NFBrO'](_0x487436,new Error(_0x3fb52a['NFBrO'](String,_0x3fb52a[_0x58e100(0x848,0x3e7,0x4a2,0x6be)])));const _0x4b7a9e={};_0x4b7a9e[_0x58e100(0xb9e,0xb70,0xba7,0x89c)]=_0x58e100(0x7f5,0x7f5,0x3eb,0x575)+_0x58e100(0x165,0x73a,0x2f6,0x463)+_0x45f6af(0x43d,0x210,0x257,0x542)+_0x58e100(0x677,0xa5b,0x999,0x8b0)+_0x58e100(0x85f,0x9aa,0x4f1,0x795)+'Kit/537.36'+'\x20(KHTML,\x20l'+_0x58e100(0x9fe,0x883,0x871,0x92e)+'\x20Chrome/90'+_0x58e100(0x6d2,0xa83,0x95b,0x9d5)+'2\x20Safari/5'+'37.36',_0x4b7a9e[_0x58e100(0x2c8,0x5ca,0x342,0x49f)]=_0x45f6af(0xb0,0xcd,0x3d,0x27b)+_0x58e100(0x644,0x4ac,0x5ca,0x748)+'da52a05900'+'1b9ca695f;'+_0x58e100(0x631,0x894,0x68a,0x756)+'a936b6d8d4'+_0x58e100(0x2fe,0x7fb,0x2ec,0x4de)+_0x45f6af(0x835,0x68b,0x7b5,0x74c)+_0x58e100(0x609,0x312,0x516,0x614)+_0x45f6af(0xa8a,0x7f4,0x9ce,0x785)+_0x45f6af(0xab9,0x77d,0x593,0x807)+_0x45f6af(0x325,0xd5,0xad,0x378)+_0x45f6af(0x64b,0x4ed,0x38,0x309)+_0x58e100(0x65a,0x7f3,0x609,0x889)+'0Zi6Tg8okK'+_0x58e100(0x8ee,0x712,0x62b,0x926)+_0x58e100(0xbcd,0xb84,0x659,0x94e)+_0x45f6af(0x5bb,0x6b4,0x30f,0x461)+_0x45f6af(0x1f2,0x669,0x197,0x474)+_0x45f6af(0x5b6,0x974,0x5f9,0x749)+'d7fa32ade7'+_0x58e100(0x7d3,0xb5f,0xc96,0xa3f)+_0x45f6af(0x8c9,0x7f6,0x7f9,0x7d0)+_0x58e100(0xc17,0xc00,0x6eb,0x98d)+'7660997;\x20t'+_0x45f6af(0x4d1,0x621,0x518,0x4d4)+'en=3UThbDQ'+_0x45f6af(0x5ee,0x9ea,0x4e9,0x823)+_0x45f6af(0x639,0x5f5,0x418,0x4f6);const _0x198fa3={};_0x198fa3[_0x58e100(0x5e8,0x9ed,0x878,0x860)]=_0x3bab9d[-0x1382+0x1*0x253c+-0x11ba],_0x198fa3[_0x45f6af(0x6fb,0x7e4,0x43d,0x62a)]=_0x3fb52a[_0x58e100(0x69c,0x531,0x34e,0x45d)],_0x198fa3[_0x58e100(0x67e,0x5cd,0xa2e,0x72c)]=_0x4b7a9e;const _0x5e727a=await axios(_0x198fa3),_0x5ab42a={};_0x5ab42a['url']=_0x3fb52a[_0x45f6af(0x167,0x29a,0x3c0,0x361)],_0x5ab42a[_0x45f6af(0x912,0x788,0x927,0x62a)]=_0x3fb52a[_0x58e100(0x669,0x584,0x59a,0x45d)],_0x5ab42a[_0x58e100(0x89e,0x475,0x718,0x72c)]={},_0x5ab42a[_0x58e100(0x89e,0x475,0x718,0x72c)]['accept']=_0x3fb52a[_0x45f6af(0x67f,0x793,0x40c,0x728)],_0x5ab42a[_0x58e100(0x89e,0x475,0x718,0x72c)][_0x58e100(0x8cd,0xad1,0xc55,0x914)]=_0x3fb52a[_0x45f6af(0x4b1,0x68f,0x4d6,0x7c5)];const _0x17e38a=await axios[_0x45f6af(0x262,0x3c5,0x297,0x4ab)](_0x5ab42a),_0x1e2937=cheerio[_0x58e100(0x579,0x5d7,0x738,0x5c3)](_0x17e38a[_0x58e100(0xa0f,0xc4b,0x893,0xa09)]),_0x20b28a=_0x3fb52a[_0x45f6af(0x4dd,0x4a0,0x133,0x362)](_0x1e2937,_0x3fb52a['Allmu'])[_0x58e100(0x957,0x875,0xcb8,0x9cf)](_0x45f6af(0x54e,0x85b,0x84e,0x7b8));if(!_0x20b28a)return;const _0x52d971={};_0x52d971[_0x45f6af(0x779,0x473,0x824,0x68f)]=_0x3bab9d[-0xec9+0xf*-0x25f+0x509*0xa],_0x52d971[_0x58e100(0x9b1,0x9a0,0x9b5,0x873)]='',_0x52d971[_0x45f6af(0x4b7,0x16c,0x248,0x2fe)]=_0x20b28a;const _0x2c35f7=_0x52d971,_0x378f35=await _0x3fb52a[_0x58e100(0x626,0x689,0x99d,0x95a)](axios,{'url':_0x3fb52a[_0x45f6af(0x464,0x25b,0x8e,0x3ae)],'method':_0x3fb52a[_0x45f6af(0x5de,0x29e,0x233,0x3ce)],'headers':{'accept':_0x3fb52a[_0x58e100(0xc8c,0xbd8,0x79c,0x9e9)],'user-agent':_0x3fb52a[_0x45f6af(0x773,0xaf3,0x5be,0x7c5)],'cookie':_0x17e38a[_0x45f6af(0x2cb,0x226,0x5d9,0x55b)][_0x3fb52a['HMIoD']][-0x229*-0x5+0x18*0xec+-0x20ed]},'data':new URLSearchParams(Object['entries'](_0x2c35f7))}),_0x1ee10f=cheerio[_0x45f6af(0x2d1,0x4e6,0x3fc,0x3f2)](_0x378f35['data']),_0x25fee7={'nowm':_0x3fb52a['sdgds'](_0x1ee10f,_0x58e100(0x771,0x6e9,0x4bf,0x566)+'ist\x20>\x20div:'+_0x45f6af(0x881,0x6cb,0x6af,0x567)+'2)')[_0x45f6af(0x53a,0xff,0xee,0x278)](_0x3fb52a[_0x58e100(0x6da,0x5f5,0x3d0,0x698)])[_0x45f6af(0x8dd,0xaf0,0x55b,0x7fe)](_0x3fb52a['RJonv']),'wm':_0x3fb52a['LupOT'](_0x1ee10f,_0x58e100(0x555,0x4c1,0x75f,0x566)+_0x45f6af(0x50a,0x52f,0x678,0x377)+_0x45f6af(0x33d,0x7f6,0x711,0x567)+'3)')[_0x45f6af(0x26,-0x52,0x378,0x278)](_0x3fb52a['mkyjB'])['attr'](_0x3fb52a[_0x45f6af(0x95d,0x51c,0x47c,0x71a)]),'audio':_0x1ee10f(_0x3fb52a[_0x58e100(0x717,0x694,0x6f6,0x5b2)])[_0x45f6af(0x3bb,0x32,0x360,0x278)](_0x45f6af(0x192,0x380,-0x3e,0x258)+_0x58e100(0x597,0x68c,0x6a4,0x673))[_0x45f6af(0xaf6,0xa28,0x5d6,0x7fe)](_0x3fb52a[_0x45f6af(0x9b0,0x747,0x4b4,0x71a)])},_0xd74d0d=cheerio[_0x58e100(0x2e2,0x757,0x8ac,0x5c3)](_0x5e727a[_0x45f6af(0x58f,0x790,0x9b3,0x838)]),_0x474005=_0x3fb52a['LupOT'](_0xd74d0d,_0x58e100(0x805,0xbb7,0x736,0x94f))[_0x58e100(0x55c,0x197,0x1e1,0x449)](_0x58e100(0x32a,0x48a,0x39f,0x47b)+'TA__')[_0x58e100(0x775,0xaa2,0xa43,0x918)]()[0x3*-0xbee+-0x2*0x1059+0x447c]['children'][-0x21a*0x1+0x2581+-0x39*0x9f],_0x39d2c5=JSON['parse'](_0x474005[_0x58e100(0xcf5,0xc33,0x9b7,0xa09)])[_0x45f6af(0x1d7,0x368,0x365,0x33a)][_0x58e100(0x9f6,0xb29,0x8ac,0x93d)][_0x58e100(0x4aa,0x4c4,0x2c6,0x574)]['itemStruct'],_0x5ab155={'id':_0x39d2c5['id'],'desk':_0x39d2c5['desc'],'tanggal_buat':new Date(_0x3fb52a[_0x45f6af(0x2c3,0x3d5,0x104,0x21e)](_0x3fb52a[_0x45f6af(0x6c5,0x7c6,0x497,0x789)](Number,_0x39d2c5[_0x58e100(0x37f,0x1fd,0x2f8,0x510)]),-0x3aa+-0x1f*-0x4f+-0x1ff))[_0x58e100(0xb7c,0x77a,0xa02,0x935)+_0x58e100(0x8f0,0xcf1,0xc43,0xa10)]('id',{'year':_0x58e100(0x8fb,0x66f,0x61d,0x76f),'month':_0x3fb52a[_0x58e100(0x7f0,0x8c2,0xc8c,0x95c)],'weekday':_0x45f6af(0x2a6,0x2de,0x462,0x455),'hour':_0x3fb52a[_0x45f6af(0x636,0x68f,0x571,0x34a)],'minute':_0x3fb52a['tyatY'],'day':_0x58e100(0x69a,0x918,0x581,0x76f)}),'durasi':_0x39d2c5[_0x45f6af(0x251,-0x6f,0x108,0x24a)]['duration']+_0x3fb52a[_0x45f6af(0x51a,0x7d9,0x738,0x57b)],'resolusi':_0x39d2c5[_0x45f6af(0x16,0x20c,0x419,0x24a)][_0x45f6af(0x58c,0x2f,0x462,0x369)],'url_with_watermark':_0x39d2c5[_0x58e100(0x6ce,0x1a8,0x3cf,0x41b)]['downloadAd'+'dr'],'thumbnail':_0x39d2c5[_0x45f6af(0x447,0x40d,0xd1,0x24a)][_0x58e100(0x964,0x54c,0x9b2,0x7e0)],'format':_0x39d2c5[_0x58e100(0x60b,0x73a,0x702,0x41b)][_0x45f6af(0x4af,0x642,0x3b2,0x6a2)],'username':_0x39d2c5[_0x58e100(0x356,0x3c3,0x4cd,0x4a0)][_0x58e100(0x3db,0x37e,0x685,0x481)],'nickname':_0x39d2c5[_0x45f6af(0xcf,0x35f,0x3dd,0x2cf)][_0x58e100(0xb26,0x5fd,0xc1d,0x91b)],'foto_profil':_0x39d2c5[_0x58e100(0x76c,0x48a,0x374,0x4a0)][_0x58e100(0x585,0x2c5,0x4bd,0x4be)+'er'],'verify':_0x39d2c5['author']['verified'],'music':{..._0x39d2c5[_0x58e100(0x7d6,0x543,0x4ec,0x6f6)]},'statistic':{..._0x39d2c5['stats']},'video_private':_0x39d2c5['privateIte'+'m'],'duetEnabled':_0x39d2c5[_0x58e100(0x509,0x360,0x270,0x4d4)+'d'],'stitchEnabled':_0x39d2c5[_0x58e100(0x4f0,0x2d9,0x2ff,0x3e7)+_0x58e100(0x932,0x7e9,0x709,0x5f1)],..._0x25fee7};return _0x22cf43(_0x5ab155);}else _0x225981[_0x45f6af(0xff,0x11d,0x425,0x2ba)](_0x3fb52a['cXRQj'](_0x3ab020,_0x3fb52a['NFBrO'](_0x3507fd,_0x106198)[_0x45f6af(-0xb6,-0x39,-0x1a,0x278)]('a')['attr'](_0x3fb52a[_0x58e100(0xac2,0xa5a,0xa0a,0x8eb)])[_0x45f6af(0x3bf,0x746,0x30d,0x600)](_0x3fb52a['ukfBl'],'/')));}catch(_0x28fe64){if(_0x3fb52a[_0x45f6af(0x6e0,0x6b7,0x19f,0x4de)]===_0x45f6af(0x39b,0x84e,0x53c,0x60e))return _0x487436(new Error(_0x3fb52a['LupOT'](String,_0x28fe64)));else _0xaaddab(''+_0x59e671)['then'](_0x164a8c=>{const _0x5d7334={};_0x5d7334['url']=_0x164a8c[0x3*-0x561+-0x1*-0xa79+0x5aa];const _0x5df401={};_0x5df401['document']=_0x5d7334,_0x5df401[_0x3653ec(0x998,0x900,0xbdd,0x7ef)]=_0x5758ec[_0x3653ec(0x583,0x6f5,0x82f,0x6aa)],_0x5df401[_0x1b23dc(0x2ce,0x3a2,0x55e,0x15)]=_0x1b23dc(0x53a,0x525,0x362,0x6d8)+_0x1b23dc(0x2a5,0x474,0x8a,0x2c3);function _0x1b23dc(_0x33b03e,_0x1660ac,_0x1bc466,_0x4d890e){return _0x58e100(_0x4d890e,_0x1660ac-0x5d,_0x1bc466-0x18,_0x33b03e- -0x182);}const _0x507dae={};function _0x3653ec(_0x1cf188,_0x598af0,_0xabdda8,_0x267c88){return _0x45f6af(_0x1cf188,_0x598af0-0x120,_0xabdda8-0x39,_0x598af0-0x16c);}_0x507dae[_0x1b23dc(0x58e,0x611,0x58e,0x58f)]=_0x42d629,_0x213e02[_0x1b23dc(0x5e4,0x5e1,0x6f5,0x60d)+'e'](_0x6cff06[_0x1b23dc(0x7d9,0x6c5,0xaf6,0x540)],_0x5df401,_0x507dae);});}});}const _0x57ae1d={};_0x57ae1d[_0x5546ba(0x1fe,0x203,0xff,0x359)+'t']=_0x5546ba(0x30d,0x42c,0x518,0x7b8),_0x57ae1d[_0x5546ba(0x1e5,0x116,0x3f3,0x50a)]=''+myweb;const _0x484500={};_0x484500[_0x5546ba(0x2fb,0x2a2,0x2aa,0x90)]=_0x57ae1d;const _0xbd8735={};_0xbd8735['displayTex'+'t']=_0x5546ba(0x700,0x2fa,0x430,0x3b6),_0xbd8735[_0x5546ba(0x5d9,0x5b2,0x3f3,0x231)]=''+github;const _0x4e7db6={};_0x4e7db6[_0x5546ba(0x19b,0x48,0x2aa,0x532)]=_0xbd8735;const _0xa01952={};_0xa01952[_0x2e98f4(0xb7,0x37f,0x1e6,0x1c7)+'t']=_0x5546ba(0x76e,0x4bf,0x5e5,0x797),_0xa01952['id']=_0x2e98f4(0x7b2,0x85c,0x829,0x657)+'o\x20'+q;const _0x214642={};_0x214642['quickReply'+'Button']=_0xa01952;const _0xd94871={};_0xd94871[_0x5546ba(0x2fb,0x38d,0xff,0x207)+'t']='WM',_0xd94871['id']=_0x2e98f4(0x873,0x655,0x5f1,0x373)+q;const _0x3f488a={};_0x3f488a[_0x2e98f4(0x65e,0x565,0x701,0x3e6)+_0x2e98f4(0x5c0,0x44b,0x672,0x171)]=_0xd94871;const _0x435634={};_0x435634[_0x5546ba(-0xe3,0x266,0xff,0x3df)+'t']=_0x5546ba(0x2a5,0x317,0x44e,0x113),_0x435634['id']=_0x5546ba(0x32a,0x607,0x541,0x429)+'\x20'+q;const _0x5a0bea={};_0x5a0bea[_0x2e98f4(0x5a1,0x565,0x4b2,0x676)+'Button']=_0x435634;var but=[_0x484500,_0x4e7db6,_0x214642,_0x3f488a,_0x5a0bea];await alpha[_0x2e98f4(0x31e,0x538,0x269,0x752)+'c'](from,'Halo\x20'+pushname,lang[_0x2e98f4(0x9d8,0x767,0x57d,0xa19)](),pp_bot,but);break;case _0x2e98f4(0x4ea,0x7c1,0x8d8,0xa8a):if(!q)return reply(lang[_0x5546ba(-0x104,0x17c,0x34,-0x265)+'t'](prefix));if(!isUrl(args[-0x1e18+0x132b+0xaed])&&!args[-0xd*-0xed+-0x163b+0xa32]['includes'](_0x5546ba(0x31d,0x1e0,-0x23,-0x18f)))return reply(lang['erorLink']());reply(lang[_0x5546ba(0x413,0x3c9,0x55b,0x6bd)]()),hx[_0x5546ba(-0xfa,-0x115,0x221,0x166)+'er'](text)[_0x2e98f4(0x2dd,0x3b1,0x18c,0x359)](_0x2a607e=>{const _0x37a211={};_0x37a211[_0x319753(0xa78,0x78c,0xa63,0x6bd)]=_0x319753(0x8e1,0x6dc,0x78a,0x6a1);const _0x15edc8=_0x37a211,{wm:_0xf3cbcd,nowm:_0x3cc723,audio:_0x5cbe0e}=_0x2a607e;function _0x29f2fa(_0x309b33,_0x48a8c8,_0x1002a0,_0x302dd9){return _0x2e98f4(_0x48a8c8,_0x1002a0-0x38,_0x1002a0-0x3f,_0x302dd9-0x3d);}function _0x319753(_0x3926b6,_0x3eaa22,_0x2d4d7f,_0xea9046){return _0x2e98f4(_0x3926b6,_0x3eaa22-0x229,_0x2d4d7f-0x39,_0xea9046-0x1cc);}axios[_0x319753(0xac2,0x954,0x70f,0xc1c)](_0x29f2fa(0x298,0x287,0x38e,0x208)+_0x319753(0x54b,0x5d1,0x8ce,0x76e)+_0x29f2fa(0x465,0x449,0x6ad,0x419)+_0x29f2fa(0x4a7,0x8e9,0x682,0x346)+_0x3cc723)[_0x29f2fa(0x20f,0x1f6,0x3e9,0x59d)](async _0x34bb99=>{me='*Link*\x20:\x20'+_0x34bb99[_0xfe5913(0x65e,0x943,0x849,0x68e)];const _0x515120={};function _0x237f18(_0x18948f,_0x4a4172,_0x227d06,_0x4770a1){return _0x319753(_0x4a4172,_0x227d06- -0x135,_0x227d06-0xa1,_0x4770a1-0x1de);}_0x515120[_0xfe5913(0x488,0x9c7,0x6a0,0x5fd)]=_0x3cc723;function _0xfe5913(_0x3ba732,_0x4e33fb,_0x52c7c9,_0x11b90e){return _0x29f2fa(_0x3ba732-0x64,_0x11b90e,_0x52c7c9- -0xb,_0x11b90e-0x2a);}alpha[_0xfe5913(0x38a,0x63f,0x5a6,0x3fa)+'e'](m[_0xfe5913(0x9a2,0x9f0,0x79b,0x9dc)],{'video':_0x515120,'caption':lang['ok'](),'mimetype':_0x15edc8['ctIAr']},{'quoted':m});});});break;case _0x2e98f4(0x3fd,0x21d,0x12d,0x4ef):if(!q)return reply(lang[_0x5546ba(0x18c,0x14,0x34,-0x22b)+'t'](prefix));if(!isUrl(args[0xbc+0x1*0x1e6d+-0x1f29])&&!args[-0x490+-0x5d5*0x1+-0x377*-0x3]['includes'](_0x5546ba(0x213,0x22,-0x23,-0xe2)))return reply(lang['erorLink']());reply(lang[_0x2e98f4(0x864,0x7db,0x9fc,0x6d5)]()),hx['ttdownload'+'er'](text)[_0x5546ba(0x138,0x453,0x131,-0x77)](_0xefff7d=>{function _0x1b6c19(_0x285e51,_0x47a1f6,_0x1be831,_0x4b2a3b){return _0x2e98f4(_0x4b2a3b,_0x47a1f6- -0x2b4,_0x1be831-0x15d,_0x4b2a3b-0x1b5);}function _0x237e14(_0x4a5ffe,_0x5cf8ef,_0x4588ff,_0x3eb128){return _0x2e98f4(_0x4588ff,_0x5cf8ef-0x225,_0x4588ff-0x85,_0x3eb128-0xad);}const _0xc40392={'LykiF':function(_0x3ad025,_0x106ff2){return _0x3ad025(_0x106ff2);},'UKyBq':function(_0x409038,_0x56edc0){return _0x409038+_0x56edc0;},'ORIgB':function(_0x2c53e7,_0x247c5c){return _0x2c53e7!==_0x247c5c;},'EMjMG':_0x237e14(0xb4a,0xa42,0xc8a,0xc13),'ctMGY':'video/mp4'},{wm:_0x319ba1,nowm:_0x5b8573,audio:_0x2e2b76}=_0xefff7d;axios[_0x237e14(0xc60,0x950,0x652,0xb33)]('https://ti'+_0x237e14(0x538,0x5cd,0x4a1,0x3ed)+_0x237e14(0x617,0x89a,0x608,0x76d)+_0x237e14(0x82e,0x86f,0xb4c,0x595)+_0x5b8573)['then'](async _0x18b254=>{function _0x57e795(_0x1b404d,_0x9db9e,_0x50d790,_0x5273e5){return _0x237e14(_0x1b404d-0xce,_0x9db9e-0x84,_0x5273e5,_0x5273e5-0x46);}function _0x3d397d(_0x8fd32d,_0x5ed087,_0x38b7fd,_0x11cfdc){return _0x237e14(_0x8fd32d-0x39,_0x11cfdc- -0x658,_0x8fd32d,_0x11cfdc-0x9e);}if(_0xc40392[_0x3d397d(0x8,-0x36d,-0x239,-0x71)](_0xc40392[_0x57e795(0x7cf,0x809,0x6cb,0x7db)],_0x57e795(0xd4c,0xac6,0xa0e,0xb51)))_0xc40392[_0x3d397d(-0x238,-0x1ee,-0x4e1,-0x249)](_0x579207,_0x3d397d(0x483,0x8a,0x2d6,0x327)+'y\x20Foto/Sti'+_0x57e795(0x515,0x773,0x7f3,0x746)+'n\x20Caption\x20'+_0xc40392['UKyBq'](_0x536ee6,_0x4d8371));else{me='*Link*\x20:\x20'+_0x18b254[_0x57e795(0xadb,0xac5,0xa60,0x914)];const _0x5b1869={};_0x5b1869['url']=_0x319ba1,alpha[_0x3d397d(-0x12e,0x257,0x2e4,0x146)+'e'](m[_0x57e795(0x8b9,0xa17,0xacc,0xbef)],{'video':_0x5b1869,'mimetype':_0xc40392[_0x3d397d(-0xb6,-0x111,-0x231,0x65)],'caption':lang['ok']()},{'quoted':m});}});});break;case _0x5546ba(0x8c3,0x4d2,0x5dc,0x6a6)+'o':if(!q)return reply(lang[_0x2e98f4(0x366,0x2b4,0xfb,0x455)+'t'](prefix));if(!isUrl(args[0xebe+0x2a*0x65+0x6*-0x538])&&!args[-0x1*0x2039+0x224+0x1e15][_0x5546ba(0x795,0x8e0,0x59e,0x2b4)](_0x2e98f4(0x286,0x25d,0xd6,0x4e6)))return reply(lang[_0x5546ba(0xa4,0x246,0x175,0x405)]());reply(lang['wait']());let tiktokaudio=q;hx['ttdownload'+'er'](tiktokaudio)[_0x2e98f4(0x1ab,0x3b1,0x56d,0x395)](async _0x5aa55b=>{const _0x475ddd={};_0x475ddd[_0xd9a67c(0x4ce,0x533,0x60e,0x7fa)]=_0xe5c5fc(0x4cb,0x410,0xe2,0x221);const _0x5de1b4=_0x475ddd;function _0xe5c5fc(_0x29dd48,_0x4db5ef,_0x4cc840,_0x2cce69){return _0x2e98f4(_0x29dd48,_0x2cce69- -0x50,_0x4cc840-0x1f2,_0x2cce69-0x69);}const {wm:_0x12ecbc,nowm:_0x31bf5d,audio:_0x54e7be}=_0x5aa55b,_0x7a6852={};_0x7a6852[_0xd9a67c(0x606,0x450,0x1ca,0x3f2)]=_0x31bf5d;function _0xd9a67c(_0x35fe6f,_0x10f24b,_0x3d8579,_0x1036ea){return _0x5546ba(_0x35fe6f-0x10c,_0x10f24b-0x55,_0x10f24b-0x5d,_0x3d8579);}const _0x218860={};_0x218860['audio']=_0x7a6852,_0x218860[_0xd9a67c(0x29a,0x555,0x600,0x753)]=_0x5de1b4[_0xe5c5fc(0x829,0x3e5,0x80d,0x706)],alpha[_0xd9a67c(0x500,0x356,0x5c5,0x68e)+'e'](m[_0xe5c5fc(0x93a,0x99d,0x8dd,0x71e)],_0x218860,{'quoted':m});});break;case _0x2e98f4(0x16b,0x34b,0x4cb,0x2e6):case _0x5546ba(0x26c,0x353,0x4fe,0x407):case _0x5546ba(-0x72,0x1a2,0x2e,-0x2db)+_0x2e98f4(0x8d8,0x829,0xa54,0xb23):if(!q)return reply(lang[_0x5546ba(-0x4d,0x8e,0x34,0x33)+'t'](prefix));pepe=''+q,hx[_0x2e98f4(0x26d,0x34b,0x609,0x624)](pepe)[_0x2e98f4(0x6b1,0x3b1,0x39b,0x28e)](async _0x20812a=>{const _0x365039={'cqUia':_0x56e693(0x8d0,0x7d0,0x7ef,0x572),'DWAwT':function(_0x4daea2,_0x250463){return _0x4daea2(_0x250463);},'usabm':_0x56e693(0x9b6,0x9dc,0xa91,0x76c),'mVTXC':'OWNER','QNIRO':'RULES','sxsar':_0x3ea430(0x361,0x4fd,0x19b,0x28d),'EouYF':_0x3ea430(0x29d,0x174,0x501,0x368),'CqXvv':function(_0x583420,_0x3cc53a){return _0x583420(_0x3cc53a);},'AcbeT':function(_0x59376c,_0x59b50a){return _0x59376c!==_0x59b50a;},'Zxfsi':_0x56e693(0x273,0x598,0x856,0x762),'OTyyn':function(_0x1bd6ef,_0x32bed2){return _0x1bd6ef(_0x32bed2);}};let _0x1bb7fa=await _0x365039[_0x56e693(0xb36,0xa75,0xb54,0xd7d)](getBuffer,_0x20812a[_0x56e693(0xa68,0x89c,0x566,0x6cb)][_0x56e693(0x56d,0x71d,0x848,0x916)+_0x56e693(0x265,0x4e0,0x70e,0x4f9)]);const _0xa43760={};_0xa43760['displayTex'+'t']=_0x365039[_0x3ea430(0x781,0x71f,0x5b4,0x4af)];function _0x56e693(_0xcb1a7b,_0x382979,_0x222088,_0x34a10d){return _0x2e98f4(_0x222088,_0x382979-0x244,_0x222088-0xf5,_0x34a10d-0x192);}_0xa43760[_0x56e693(0xbaf,0x8b7,0xa65,0x67d)]=''+myweb;const _0x487669={};_0x487669[_0x3ea430(0xdc,0x337,0x342,0x382)]=_0xa43760;const _0x19eeb9={};_0x19eeb9[_0x3ea430(-0x153,0x119,0x1c4,0x1d7)+'t']=_0x3ea430(0x296,0x519,0x3ba,0x508),_0x19eeb9['url']=''+github;const _0x22ad5d={};_0x22ad5d[_0x3ea430(0x1c2,0x66e,0xba,0x382)]=_0x19eeb9;const _0x4584d9={};_0x4584d9[_0x56e693(0x37e,0x5c3,0x3ae,0x4c9)+'t']=_0x365039[_0x56e693(0x442,0x751,0x911,0x633)],_0x4584d9['id']=_0x3ea430(-0x20d,0x76,-0x2b7,0x5e);const _0x53a3c3={};_0x53a3c3[_0x56e693(0x820,0x7a9,0x75a,0x77b)+_0x3ea430(0x45d,0x1f1,-0x94,0x2a3)]=_0x4584d9;function _0x3ea430(_0x4b0afd,_0x408cda,_0x7ff3c9,_0xa16dd5){return _0x5546ba(_0x4b0afd-0x141,_0x408cda-0xd8,_0xa16dd5-0xd8,_0x4b0afd);}const _0x510183={};_0x510183[_0x3ea430(0x2be,0x466,-0x109,0x1d7)+'t']=_0x365039[_0x56e693(0xd05,0x9f7,0xa3c,0xb89)],_0x510183['id']=_0x56e693(0xb09,0xa72,0xd69,0xc94);const _0x4b6a62={};_0x4b6a62[_0x56e693(0x883,0x7a9,0x7a9,0x4b6)+_0x56e693(0x350,0x68f,0x9cb,0x77c)]=_0x510183;const _0x2fd606={};_0x2fd606[_0x3ea430(0x1c4,0x3c,-0x11,0x1d7)+'t']=_0x365039[_0x56e693(0xa64,0x737,0x74c,0x7a1)],_0x2fd606['id']=_0x3ea430(0x4f2,0x4b9,0x691,0x6a9);const _0x570a49={};_0x570a49['quickReply'+_0x56e693(0x447,0x68f,0x62d,0x687)]=_0x2fd606;var _0x4bd6b8=[_0x487669,_0x22ad5d,_0x53a3c3,_0x4b6a62,_0x570a49];await alpha['send5ButLo'+'c'](from,_0x3ea430(0x41b,0x763,0x56b,0x44e)+_0x3ea430(0x83a,0x5a1,0x4cd,0x534)+_0x3ea430(0x458,0x2d9,0x1d2,0x4da)+enter+enter+_0x3ea430(0x33d,-0x37,0x356,0x284)+_0x20812a[_0x56e693(0x99f,0x89c,0xad0,0x5ee)]['id']+enter+(_0x56e693(0x614,0x917,0x994,0xa41)+_0x56e693(0x6e1,0x5ee,0x654,0x60a))+_0x20812a[_0x56e693(0x7cb,0x89c,0xa12,0x7e5)][_0x3ea430(0x1f5,-0xaa,0x2c3,0x268)]+enter+'🍁\x20*Bio*\x20:\x20'+_0x20812a[_0x3ea430(0x504,0x60c,0x2d5,0x4b0)][_0x3ea430(-0x7,0x265,0x5b,0x1ec)]+enter+(_0x56e693(0x411,0x6b7,0x642,0x862)+_0x3ea430(0x2ed,0x2c7,-0xf7,0x202))+_0x20812a[_0x3ea430(0x190,0x1ea,0x484,0x4b0)][_0x56e693(0x95a,0xa7e,0x85d,0x7dd)]+enter+(_0x56e693(0x9ae,0x896,0xb4e,0x5c2)+_0x3ea430(0x639,0x294,0x638,0x48e))+_0x20812a[_0x3ea430(0x7b8,0x424,0x5a9,0x4b0)][_0x3ea430(0x2f8,0x351,0x4fa,0x632)]+enter+(_0x56e693(0x514,0x67e,0x52c,0x720)+_0x3ea430(0x33e,0x662,0x145,0x3ea))+_0x20812a[_0x56e693(0x731,0x89c,0x609,0x70e)][_0x3ea430(0x6c5,0x3be,0x423,0x3fa)]+enter+(_0x56e693(0x80d,0x571,0x850,0x245)+_0x3ea430(-0x110,0x2b6,-0x15,0xf8)+_0x3ea430(0x37e,0x3b5,0x268,0x3b5)+_0x3ea430(0x186,0x46c,0x55e,0x27a))+_0x20812a['user'][_0x56e693(0x912,0x654,0x65e,0x7c1)]+enter+(_0x56e693(0x601,0x4dd,0x2f9,0x413)+'*\x20')+_0x20812a[_0x56e693(0x466,0x69f,0x98f,0x68a)][_0x56e693(0x501,0x58c,0x58c,0x769)]+_0x56e693(0x5d2,0x7dd,0x89c,0x4a9)+enter+enter+(_0x56e693(0xc7b,0xa8e,0xbcc,0x8c7)+_0x3ea430(0x3d9,0x3da,0x6df,0x5e4)+_0x56e693(0x7a5,0x822,0xb20,0x5dc)+_0x3ea430(0x470,0xb9,0x697,0x3e5)+'_'),'©\x20'+ownername,_0x1bb7fa,_0x4bd6b8);for(let _0x2a79f1 of _0x20812a[_0x3ea430(0x438,0x25d,-0x4,0x2b3)]){if(_0x2a79f1[_0x3ea430(0x493,0x3fe,0x432,0x4cb)][_0x56e693(0xa76,0xa62,0x9e8,0xa5b)](_0x365039[_0x3ea430(-0x1fd,0x435,0x34d,0x115)])){let _0x2a15d7=await _0x365039[_0x3ea430(0x691,0x560,0x438,0x547)](getBuffer,_0x2a79f1[_0x56e693(0x8d6,0x8b7,0x691,0xa63)]);const _0x43575f={};_0x43575f[_0x56e693(0x3d9,0x472,0x5fd,0x75b)]=_0x2a15d7,_0x43575f[_0x56e693(0x9d1,0x75d,0x4e5,0x4bd)]=_0x3ea430(0x520,0x5d2,0x433,0x304)+'•\x20'+_0x2a79f1[_0x56e693(0x28c,0x4df,0x326,0x2a0)];const _0x263a5c={};_0x263a5c[_0x56e693(0xa0d,0x767,0x874,0x472)]=m,alpha['sendMessag'+'e'](from,_0x43575f,_0x263a5c);}else{if(_0x365039[_0x3ea430(0x483,0x671,0x1cb,0x3fc)](_0x365039[_0x3ea430(0x6b0,0x454,0x72c,0x56a)],_0x3ea430(0x2c5,0xff,0x12e,0x1ac)))_0x507e2e[_0x56e693(0x3ca,0x4e2,0x431,0x761)](_0x111932(_0x30d9e5)[_0x3ea430(0x473,0x909,0x59e,0x63a)](_0x365039[_0x3ea430(0x377,0x6d0,0x6d1,0x5f1)]));else{let _0x4f8a01=await _0x365039[_0x56e693(0xa80,0x7b4,0x748,0x56f)](getBuffer,_0x2a79f1[_0x3ea430(0x70b,0x3bf,0x58c,0x4cb)]);const _0x2caeff={};_0x2caeff[_0x56e693(0x8eb,0x830,0x74f,0x72a)]=_0x4f8a01,_0x2caeff['caption']='Instagram\x20'+'•\x20'+_0x2a79f1[_0x3ea430(0xe0,0x9f,0x140,0xf3)];const _0x43bc13={};_0x43bc13[_0x3ea430(0x406,0x2ef,0xc3,0x37b)]=m,alpha['sendMessag'+'e'](from,_0x2caeff,_0x43bc13);}}}})[_0x2e98f4(0x165,0x2c9,0x27d,0x21d)](_0x1ecc6f=>{const _0x51cac9={'JhDVw':function(_0x21de32,_0x493071){return _0x21de32(_0x493071);}};_0x51cac9['JhDVw'](reply,lang['err']());});break;case'ig':case _0x5546ba(0x330,0x5cc,0x2d1,0x473):case _0x2e98f4(0x24c,0x43c,0x113,0x4de):case _0x2e98f4(0x732,0x6a2,0x6c5,0x850):case'instafoto':case _0x2e98f4(0x463,0x28c,0x3b7,0x18):case'igvideo':case'instavideo':case _0x2e98f4(0xd9,0x201,-0x48,-0xfe):case'igreels':case _0x2e98f4(0x562,0x3b8,0x16e,0x45a):case _0x5546ba(0x3e6,0x505,0x26e,0x132):case _0x2e98f4(0x677,0x489,0x22e,0x3a7):case _0x2e98f4(0x288,0x316,0x355,0x4fc):if(!q)return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x2e98f4(0x618,0x7db,0x7ab,0x7de)]());var urlnya=''+q;hx['igdl'](urlnya)['then'](async _0x11f776=>{const _0x1d1fbb={};_0x1d1fbb['uNHsp']=_0x11a80e(0x2d6,0x49a,0x401,0x6e8),_0x1d1fbb['HFceN']=_0x3beb60(0x3b7,0x68a,0x54f,0x6ab);const _0x4e71c6=_0x1d1fbb,_0x10184a={};function _0x11a80e(_0x50b39a,_0x2daa7e,_0x33d2fd,_0x292a59){return _0x5546ba(_0x50b39a-0x1b9,_0x2daa7e-0xc8,_0x2daa7e-0x20a,_0x50b39a);}function _0x3beb60(_0x496732,_0x555078,_0x38348c,_0x2c3f3b){return _0x5546ba(_0x496732-0x154,_0x555078-0xfd,_0x38348c-0x31c,_0x496732);}_0x10184a[_0x11a80e(0x39a,0x5fd,0x5c0,0x511)]=_0x11f776[_0x11a80e(0x3d9,0x5e2,0x351,0x44c)]['profilePic'+_0x3beb60(0x16,0x3b0,0x338,0x40)];const _0xf21a6={};_0xf21a6['image']=_0x10184a,_0xf21a6[_0x11a80e(0x198,0x4a3,0x426,0x509)]='「\x20*INSTAGR'+_0x11a80e(0x957,0x6dc,0x616,0x77c)+_0x11a80e(0x127,0x18a,0x60,0x5a)+enter+enter+'🆔\x20*ID\x20:*\x20'+_0x11f776['user']['id']+enter+(_0x3beb60(0x7e7,0x779,0x76f,0x87d)+_0x11a80e(0x5a,0x334,0x5db,0x410))+_0x11f776[_0x11a80e(0x7f8,0x5e2,0x91e,0x8ff)]['username']+enter+(_0x11a80e(0x42f,0x3fd,0x27a,0x1ff)+_0x11a80e(0x620,0x334,0x65c,0x516))+_0x11f776[_0x11a80e(0x7a1,0x5e2,0x35e,0x78c)]['fullName']+enter+(_0x11a80e(0x623,0x5dc,0x3f7,0x8c7)+_0x11a80e(0x78b,0x5c0,0x8cf,0x301))+_0x11f776[_0x11a80e(0x2ed,0x5e2,0x3d9,0x683)][_0x11a80e(0x694,0x764,0x6a0,0x80b)]+enter+(_0x3beb60(0x56,0x128,0x393,0x3f3)+'ng\x20:*\x20')+_0x11f776['user'][_0x11a80e(0x530,0x52c,0x701,0x43c)]+enter+(_0x3beb60(0x560,0x3f5,0x3c9,0x11b)+_0x11a80e(0x4c2,0x22a,0x270,0x7e)+_0x11a80e(0x5b8,0x4e7,0x37f,0x74d)+_0x11a80e(0x17c,0x3ac,0x12a,0x620))+_0x11f776[_0x11a80e(0x8c7,0x5e2,0x34a,0x676)]['username']+enter+(_0x3beb60(0x16b,0x31b,0x335,0x553)+'*\x20')+_0x11f776['medias'][_0x11a80e(0x12b,0x2d2,0x5dd,0x3e)]+_0x3beb60(0x737,0x361,0x635,0x46a)+enter+enter+(_0x3beb60(0xb16,0xbf6,0x8e6,0xb73)+_0x3beb60(0x8ec,0x932,0x828,0xae7)+_0x3beb60(0x82b,0x56d,0x67a,0x65f)+'an\x20dikirim'+'_'),await alpha[_0x11a80e(0x735,0x503,0x467,0x635)+'e'](m['chat'],_0xf21a6,{'quoted':m});for(let _0x7d5b0 of _0x11f776[_0x3beb60(0x69d,0x77a,0x4f7,0x589)]){if(_0x7d5b0[_0x3beb60(0x933,0x6b2,0x70f,0x6af)][_0x3beb60(0x7f9,0xa0f,0x8ba,0x58a)](_0x4e71c6[_0x11a80e(0x76b,0x543,0x2f3,0x517)])){const _0x3ecbe5={};_0x3ecbe5[_0x11a80e(0x33c,0x5fd,0x796,0x908)]=_0x7d5b0['url'];const _0x1b484e={};_0x1b484e[_0x11a80e(-0xf0,0x1b8,0x30d,-0x12d)]=_0x3ecbe5,_0x1b484e[_0x11a80e(0x5da,0x702,0x7e4,0x4d4)]=_0x4e71c6['HFceN'],alpha['sendMessag'+'e'](m[_0x3beb60(0x8bf,0x703,0x80a,0x868)],_0x1b484e,{'quoted':m});}else{const _0x64e390={};_0x64e390[_0x3beb60(0x801,0x6fa,0x70f,0x957)]=_0x7d5b0[_0x3beb60(0x6a4,0x47d,0x70f,0x740)];const _0x189926={};_0x189926[_0x3beb60(0x3fc,0x719,0x688,0x979)]=_0x64e390,alpha[_0x3beb60(0x78d,0x3c0,0x615,0x762)+'e'](m[_0x11a80e(0x9f5,0x6f8,0x8a9,0x7ec)],_0x189926,{'quoted':m});}}})[_0x5546ba(-0x53,0x360,0x49,-0x2f7)](_0x174ae9=>{const _0x14dac1={'ybZHR':function(_0x5dc22b,_0x25617b){return _0x5dc22b(_0x25617b);}};_0x14dac1['ybZHR'](reply,lang['err']());});break;case _0x5546ba(0x31f,0x3be,0x540,0x248)+'3':case _0x5546ba(0x26a,0x70,0x30,0x12c):case _0x2e98f4(0x583,0x620,0x869,0x4f6):case _0x5546ba(0x8,0x387,0x256,0x3a8):{if(!q)return reply(lang[_0x5546ba(0x54,0x263,0x34,0x296)+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text['includes'](_0x2e98f4(0x888,0x566,0x581,0x822))&&!text[_0x5546ba(0x594,0x3f4,0x59e,0x7a1)](_0x5546ba(0x45e,0x619,0x51a,0x514)+'m'))return reply(lang[_0x2e98f4(0x469,0x2b4,0x213,0x4a2)+'t'](prefix));await reply(lang[_0x2e98f4(0x5af,0x7db,0x6ef,0xa8e)]()),ytmp3=args['join']('\x20'),yta(ytmp3)[_0x2e98f4(0xb4,0x3b1,0x589,0x30d)](async _0x458297=>{const _0x7ace57={};_0x7ace57[_0x4f834c(0x291,0x5a9,0x5a2,0x4c9)]=function(_0x20215c,_0x2cf4bc){return _0x20215c>=_0x2cf4bc;},_0x7ace57[_0x31aba7(0x5d,-0x210,0xfa,0x3b)]='\x20MB',_0x7ace57[_0x31aba7(0x2ed,0x3a1,0x274,0x446)]='Download\x20V'+_0x4f834c(0x5d1,0x76b,0x5ef,0x60b),_0x7ace57[_0x31aba7(0x465,0x3fe,0x77c,0x66a)]=_0x31aba7(0x534,0x3e2,0x550,0x450)+'e',_0x7ace57[_0x4f834c(0x8cb,0x73f,0x5bd,0x4f7)]='donasi';function _0x31aba7(_0x1fbcde,_0x374253,_0x532d47,_0xb60440){return _0x5546ba(_0x1fbcde-0x56,_0x374253-0x46,_0x1fbcde- -0xa4,_0x374253);}_0x7ace57['CxfYV']=_0x31aba7(-0xe2,-0x199,-0x9,-0x2dc),_0x7ace57[_0x31aba7(0xf8,-0x1fe,0x316,0xc)]=_0x4f834c(-0xc1,-0x18,0x9d,0x372),_0x7ace57[_0x31aba7(0x3c9,0x323,0x45b,0x3e2)]=_0x4f834c(0x403,-0x13,0x108,-0x182);const _0x5bc463=_0x7ace57,{dl_link:_0x129dbd,filesizeF:_0x19186a,filesize:_0x2554e7,title:_0x36f7bb,thumb:_0x6b172}=_0x458297;let _0x4a9ece=await getBuffer(_0x6b172);if(_0x5bc463[_0x4f834c(0x536,0x8b6,0x5a2,0x5d5)](Number(_0x19186a[_0x4f834c(0x71e,0x605,0x47b,0x440)](_0x5bc463[_0x31aba7(0x5d,0x19e,-0x120,0x163)],'')),0x2*0x10f1+0x234+-0x5f8*0x6))return await alpha[_0x31aba7(0x214,-0x64,0x1be,0x30a)+'c'](from,'*----「\x20YOU'+_0x4f834c(0x5ac,0x4cd,0x40d,0x40b)+_0x31aba7(-0xcf,-0x392,-0x382,-0x2e2)+_0x31aba7(0x340,0x125,0x5f1,0x282)+'\x20'+_0x36f7bb+(_0x4f834c(0x2a,0x2e0,0x339,0x1e8)+'*\x20')+_0x19186a+('\x0a*📺\x20Ext\x20:*'+'\x20Mp3\x0a*👍\x20Qu'+_0x4f834c(0x220,0x179,0xb0,0x3e2)+_0x31aba7(0x20f,-0x11d,0x124,0xb8)+_0x31aba7(0x87,-0x5c,0x1b6,0xa0))+_0x129dbd+(_0x31aba7(0x22e,0x348,-0x75,0x8d)+_0x4f834c(-0x16,0x22d,0x122,-0xad)+_0x4f834c(0x31d,0x516,0x552,0x877)+'as\x20disajik'+_0x31aba7(0x1d,0x331,0xd3,0x2ef)+_0x31aba7(0x4e,-0x25a,0x27b,0xfc)+'_'),'©\x20'+ownername,_0x4a9ece,[{'urlButton':{'displayText':_0x5bc463['RtBiv'],'url':''+_0x129dbd}}]);let _0x4f5a9d=_0x31aba7(0x363,0x2fb,0x8f,0x463)+'TUBE\x20AUDIO'+_0x4f834c(0x27f,0x3af,0xec,-0x18d)+'🎀\x20Title\x20:*'+'\x20'+_0x36f7bb+(_0x4f834c(0x53f,0x518,0x339,0x611)+'*\x20')+_0x19186a+('\x0a*📺\x20Ext\x20:*'+_0x4f834c(0x196,0x343,0x1a5,-0x168)+'ality\x20:*\x201'+_0x31aba7(0x20f,-0x114,-0x9f,-0x20)+'Url\x20:*\x20')+q;const _0x43d27d={};_0x43d27d[_0x31aba7(0x5b,0x292,0xc1,-0x2d)+'t']=_0x5bc463[_0x31aba7(0x465,0x4d8,0x2a6,0x56a)],_0x43d27d[_0x31aba7(0x34f,0x187,0x1d5,0x636)]=''+youtube;const _0x2060b0={};_0x2060b0['urlButton']=_0x43d27d;const _0x41c8b6={};_0x41c8b6[_0x4f834c(0x4a4,0x194,0x216,0x2b0)+'t']=_0x31aba7(0x481,0x3ca,0x1cb,0x413),_0x41c8b6['id']=_0x5bc463[_0x4f834c(0x5e9,0x7db,0x5bd,0x408)];const _0x37befd={};_0x37befd['quickReply'+_0x4f834c(0x590,0x190,0x2e2,0x31f)]=_0x41c8b6;const _0x1d9d3e={};_0x1d9d3e[_0x4f834c(0x11a,0x4d9,0x216,0x4b8)+'t']=_0x5bc463[_0x4f834c(0x83,-0xfc,0x171,0x173)],_0x1d9d3e['id']=_0x5bc463[_0x31aba7(0xf8,-0x238,0x3c5,-0x117)];const _0x1d1c75={};_0x1d1c75['quickReply'+_0x4f834c(0xe3,0x208,0x2e2,0x33c)]=_0x1d9d3e;var _0x27f0b9=[_0x2060b0,_0x37befd,_0x1d1c75];await alpha['send5ButLo'+'c'](from,_0x4f5a9d,'©\x20'+ownername,_0x4a9ece,_0x27f0b9);const _0xcf82f7={};_0xcf82f7[_0x4f834c(0x311,0x30a,0x50a,0x697)]=_0x129dbd;const _0x20c1bc={};_0x20c1bc[_0x4f834c(0x22c,0x296,0x4bf,0x572)]=_0xcf82f7,_0x20c1bc[_0x31aba7(0x454,0x44e,0x2a1,0x399)]=_0x5bc463[_0x31aba7(0x3c9,0x222,0x90,0x5f9)];function _0x4f834c(_0x38b123,_0x26da2b,_0x4e22e0,_0x2f742d){return _0x2e98f4(_0x26da2b,_0x4e22e0- -0x169,_0x4e22e0-0x1dc,_0x2f742d-0x1d1);}_0x20c1bc[_0x31aba7(-0xc1,-0xc,-0x294,-0x303)]=_0x36f7bb+_0x31aba7(0x423,0x74f,0x568,0x1f4),alpha[_0x31aba7(0x255,0x3bb,0x531,0x38)+'e'](m[_0x4f834c(0x50b,0x462,0x605,0x51a)],_0x20c1bc,{'quoted':m});});}break;case _0x5546ba(0x63,-0xcf,0x1d2,0x395):{if(!q)return reply(lang[_0x5546ba(0x6d,0x307,0x34,0x165)+'t'](prefix));if(!text[_0x2e98f4(0x687,0x81e,0x9f6,0x581)](_0x5546ba(0x50c,0x31,0x1d2,0x43c)))return reply(lang['wrongForma'+'t'](prefix));const mf=async _0x528401=>{const _0x287f5c={'xLeWl':function(_0x5603b1,_0x1f2676){return _0x5603b1(_0x1f2676);},'HHgup':'a#download'+'Button','hAVhm':_0x4ec0cc(0x556,0x6cc,0x33a,0x71d),'JxyCC':_0x4ec0cc(0x4f5,0x1e4,0x1d6,0x6f9)+_0x4314a7(0x15a,0x4fc,0x1e2,0x307)+_0x4314a7(0x99,0x127,-0x49,-0x19a)},_0x2ccd49=await axios[_0x4ec0cc(0x525,0x2b7,0x258,0x51f)](_0x528401),_0xd94f5b=cheerio['load'](_0x2ccd49['data']),_0x1a9ab0=[],_0x39e73f=_0x287f5c[_0x4ec0cc(0x517,0x671,0x5af,0x7cc)](_0xd94f5b,_0x287f5c[_0x4314a7(0x3d5,0x455,0x189,0x22e)])[_0x4314a7(0x28d,0x175,0x2e7,0x3ee)](_0x287f5c['hAVhm']),_0x41d9a7=_0xd94f5b('a#download'+'Button')[_0x4ec0cc(0x459,0x394,0x298,0x1fd)]()[_0x4ec0cc(0x3de,0x5dc,0x581,0xdf)]('Download','')[_0x4314a7(-0xb2,0x382,-0x1b,0x1f0)]('(','')[_0x4ec0cc(0x3de,0x5d4,0x3e4,0x651)](')','')['replace']('\x0a','')[_0x4ec0cc(0x3de,0x5cc,0x426,0x6e7)]('\x0a','')[_0x4314a7(0x380,0x411,-0x52,0x1f0)](_0x287f5c[_0x4ec0cc(0x4cc,0x3d1,0x486,0x3e8)],''),_0x1fc6ef=_0x39e73f['split']('/'),_0x203bcd=_0x1fc6ef[-0xec8*-0x1+0x1fb6+0x2e79*-0x1];mimep=_0x203bcd[_0x4ec0cc(0xd2,-0x12e,-0x126,-0x148)]('.'),mimee=mimep[0x1e52+0xb*-0x15d+-0xf52];const _0x59b7e8={};function _0x4314a7(_0x26b4e9,_0x47f792,_0x3b3165,_0x12697f){return _0x5546ba(_0x26b4e9-0x42,_0x47f792-0x150,_0x12697f- -0x174,_0x3b3165);}_0x59b7e8['naman']=_0x203bcd,_0x59b7e8[_0x4ec0cc(0x3ef,0x559,0x3bb,0x4fe)]=mimee,_0x59b7e8[_0x4314a7(0x27b,0x19c,0xf7,0x32d)]=_0x41d9a7,_0x59b7e8[_0x4ec0cc(0x1e,0x20e,-0xb7,0x132)]=_0x39e73f,_0x1a9ab0[_0x4ec0cc(0x98,-0x109,0x1e3,0xa5)](_0x59b7e8);function _0x4ec0cc(_0x13ee6f,_0x5f1eb3,_0x25e880,_0xb5ba12){return _0x5546ba(_0x13ee6f-0x19,_0x5f1eb3-0x121,_0x13ee6f-0x7a,_0xb5ba12);}return _0x1a9ab0;};kom=q,mf(''+kom)[_0x2e98f4(0x6e2,0x3b1,0x3ef,0x47b)](async _0x32a6eb=>{const _0x38e3fd={};_0x38e3fd[_0x3a8a38(-0x1ef,0x1a9,0x3cd,0xbc)]=function(_0x1b5fd4,_0x13ca0c){return _0x1b5fd4<_0x13ca0c;};function _0x3a8a38(_0x1768e7,_0x1516ce,_0x123ef5,_0x25bffc){return _0x5546ba(_0x1768e7-0x1,_0x1516ce-0xa6,_0x25bffc- -0x102,_0x1516ce);}_0x38e3fd[_0xf0a0cf(0x3e,0x7a,0x22e,0x1c)]=function(_0x152252,_0x322db4){return _0x152252+_0x322db4;},_0x38e3fd[_0x3a8a38(0x354,0x508,0x663,0x409)]=_0xf0a0cf(0x3eb,0x6ae,0x615,0x683)+_0xf0a0cf(-0x122,-0x2e2,-0x277,-0x23c);function _0xf0a0cf(_0x4c56c2,_0x34bfd1,_0x542382,_0x577aca){return _0x5546ba(_0x4c56c2-0x54,_0x34bfd1-0x113,_0x4c56c2- -0xda,_0x34bfd1);}_0x38e3fd[_0xf0a0cf(0x506,0x529,0x81e,0x698)]=function(_0x246cb6,_0x2c6b41){return _0x246cb6>=_0x2c6b41;};const _0x1a100a=_0x38e3fd;for(var _0x151459=-0x593*-0x1+-0x5*-0x616+0x2401*-0x1;_0x1a100a[_0x3a8a38(-0x148,0x1c8,-0x1cb,0xbc)](_0x151459,_0x32a6eb[_0xf0a0cf(-0x12,0x1aa,-0x3,0x44)]);_0x151459++){let _0xc9ab50=await getBuffer(_0x1a100a[_0xf0a0cf(0x3e,0x2b7,0x5a,-0x174)](picak,_0x1a100a[_0xf0a0cf(0x431,0x345,0x678,0x651)]));if(_0x32a6eb[_0x151459]['sizee'][_0xf0a0cf(0x28a,0xa4,-0x63,0x1c1)]('MB','')>=0x20c8+0x4b7+-0x254d||_0x1a100a[_0x3a8a38(0x39d,0x2c6,0x441,0x4de)](_0x32a6eb[_0x151459]['sizee'][_0x3a8a38(0x1e3,-0x2e,0xdc,0x262)]('GB',''),0x34*0xac+0x1367+0xa*-0x56f))return await alpha[_0xf0a0cf(0x1de,0x518,0x1f6,0x4f6)+'c'](from,'*----「\x20Med'+_0x3a8a38(0x1b0,0x12d,0xc9,-0xdb)+_0x3a8a38(0x5e,0x95,-0x18,0x22)+_0x3a8a38(0x88,0xe9,-0x12d,0xf8)+'\x20:\x20'+_0x32a6eb[_0x151459][_0x3a8a38(0xb3,0x13c,0x1d2,0x295)]+_0xf0a0cf(0x176,0x1f7,0x32d,-0xcf)+_0x32a6eb[_0x151459][_0x3a8a38(0x405,0x146,-0x81,0x273)]+'\x0a⚠️\x20Size\x20:\x20'+_0x32a6eb[_0x151459]['sizee']+_0x3a8a38(0x98,-0x97,0x87,0x45)+_0x32a6eb[_0x151459][_0x3a8a38(0xb3,0xdf,-0x1c5,-0x15e)]+(_0xf0a0cf(0x453,0x363,0x24b,0x348)+'ize\x20lebih\x20'+_0x3a8a38(-0x48,0xa8,0x8e,0xc7)+_0x3a8a38(0x21b,-0x2d5,0x2a3,-0x65)+_0xf0a0cf(-0xf0,-0x22e,-0x372,-0x27)+_0xf0a0cf(-0x9f,-0x246,0xe3,-0x2d3)),'©\x20'+ownername,_0xc9ab50,[{'urlButton':{'displayText':_0xf0a0cf(0xa1,-0x262,-0x17e,0x3e2)+_0xf0a0cf(0x3fe,0x72a,0x3a2,0x22a),'url':''+_0x32a6eb[_0x151459]['linkk']}}]);alpha[_0xf0a0cf(0x1de,0x275,0x40d,-0x72)+'c'](from,'*----「\x20Med'+'iafire\x20Dow'+'nload\x20」---'+_0xf0a0cf(0x120,-0x1b4,0x6a,-0x171)+_0xf0a0cf(0x141,0x24c,0x31,0x1ff)+_0x32a6eb[_0x151459]['naman']+_0xf0a0cf(0x176,0x169,0x42d,0x7e)+_0x32a6eb[_0x151459][_0xf0a0cf(0x29b,0x47f,0x25b,0x4)]+_0x3a8a38(0x6f,0x2f4,-0x73,0x233)+_0x32a6eb[_0x151459]['sizee']+'\x0a🌀\x20Link\x20:\x20'+_0x32a6eb[_0x151459][_0x3a8a38(-0x106,0x1c6,0x1bc,-0x15e)]+(_0xf0a0cf(-0x16d,0x16f,0x124,0xe3)+_0xf0a0cf(-0x58,-0x215,0x231,-0x336)+_0x3a8a38(-0x6d,-0x25d,-0x375,-0xb3)+_0x3a8a38(0x55a,0x60f,0x3b5,0x365)+_0xf0a0cf(0x189,0x208,0x3b,0x3fc)),'©\x20'+ownername,_0xc9ab50,[{'urlButton':{'displayText':_0x3a8a38(0x159,-0x289,-0xac,0x79)+_0xf0a0cf(0x3fe,0x480,0x28a,0x2fc),'url':''+_0x32a6eb[_0x151459][_0x3a8a38(-0x1c,0x14d,-0x29e,-0x15e)]}}]);const _0x17b35e={};_0x17b35e[_0xf0a0cf(0x319,0x43e,0x629,0x255)]=_0x32a6eb[_0x151459][_0xf0a0cf(-0x136,0x5a,0x82,-0x2ba)];const _0x421907={};_0x421907[_0x3a8a38(-0x39,0x146,0x48d,0x2a6)]=_0x17b35e,_0x421907[_0x3a8a38(0x33f,0x493,0xed,0x3f6)]=_0xf0a0cf(-0xe7,-0x134,-0xbf,-0xbc)+'n/zip',_0x421907[_0xf0a0cf(-0xf7,0x158,0x1b2,0x1a6)]=''+_0x32a6eb[_0x151459][_0x3a8a38(0x2a3,0x4e5,0x152,0x295)];const _0x53d198={};_0x53d198[_0x3a8a38(0x3c2,-0x11,0x3a8,0x1a1)]=m,alpha[_0xf0a0cf(0x21f,0x2a,0x203,0x311)+'e'](from,_0x421907,_0x53d198);}})['catch'](_0x3ee69b=>{function _0x24e4ce(_0x5c4a60,_0x4eec37,_0x5d0f12,_0x33e754){return _0x2e98f4(_0x4eec37,_0x5c4a60- -0x2a4,_0x5d0f12-0x119,_0x33e754-0x10b);}const _0x3f34ad={'Htfdn':function(_0x86556c,_0x42f4a3){return _0x86556c(_0x42f4a3);}};function _0x35e77b(_0x335a49,_0x1bf0df,_0x5cabd2,_0x3b903f){return _0x5546ba(_0x335a49-0x28,_0x1bf0df-0x187,_0x1bf0df-0x47b,_0x335a49);}_0x3f34ad[_0x35e77b(0x62e,0x763,0x6f4,0x5e0)](reply,lang[_0x35e77b(0x80c,0x92f,0x5ed,0x6a1)]());});}break;case _0x2e98f4(0x1ce,0x510,0x68b,0x6cf):case _0x2e98f4(0x14c,0x2f6,0x4c4,0x2ff):case _0x5546ba(0x9c,-0x1d5,0x102,0x3c9):case'ytshort':{if(!q)return reply(lang[_0x5546ba(0x25e,-0x35,0x34,0x297)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x5546ba(-0x145,-0x1b2,0x34,-0x2ed)+'t'](prefix));if(!text['includes']('youtu.be')&&!text[_0x5546ba(0x384,0x78b,0x59e,0x6df)](_0x5546ba(0x441,0x544,0x51a,0x5fa)+'m'))return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x2e98f4(0xb0c,0x7db,0xb01,0x792)]()),ytv(''+q)[_0x5546ba(-0x15c,0x422,0x131,-0x35)](async _0x16065a=>{const _0x1d4559={};_0x1d4559[_0x5b0b62(0x4c8,0x249,0x279,0x570)]=function(_0x3af1bd,_0x764e6e){return _0x3af1bd>=_0x764e6e;},_0x1d4559[_0xf569f6(0x23c,0x2ce,0x1d2,0x479)]=_0xf569f6(0x1a6,0x102,0xed,0x1f3)+_0x5b0b62(0x6d0,0x392,0xbf,0x518),_0x1d4559['slbqa']='Source\x20Cod'+'e',_0x1d4559['SXCqt']=_0x5b0b62(0x43a,0x3df,0x555,0x501),_0x1d4559['qQZOd']=_0x5b0b62(-0x163,-0x184,-0x404,-0x4ba),_0x1d4559[_0xf569f6(0x6c,-0x3d,0x7c,-0x138)]=_0x5b0b62(-0x239,0xed,0x35d,0x1fb);const _0x478764=_0x1d4559;function _0x5b0b62(_0x3fa6ad,_0x39aded,_0x58281f,_0x5676ee){return _0x2e98f4(_0x3fa6ad,_0x39aded- -0x3c6,_0x58281f-0x139,_0x5676ee-0x117);}const {dl_link:_0x2c457b,filesizeF:_0x298436,filesize:_0x4654d1,title:_0x27b8f2,thumb:_0x181422}=_0x16065a;let _0x181ca5=await getBuffer(_0x181422);if(_0x478764['sxrCx'](Number(_0x298436[_0x5b0b62(0x12c,0x21e,0x4a,0x525)]('\x20MB','')),0x1d0a+0x1*0x1066+-0x2d2a))return await alpha[_0x5b0b62(-0xec,0x172,0x1db,0x111)+'c'](from,_0x5b0b62(0x123,0x2c1,0x361,-0x43)+_0xf569f6(-0xaf,0x68,0x40,0x31e)+_0x5b0b62(-0x84,-0x171,0x98,-0x3da)+_0xf569f6(0xdb,0x17d,0x356,0x5e5)+'\x20'+_0x27b8f2+(_0x5b0b62(0x209,0xdc,0x15d,-0x37)+'*\x20')+_0x298436+(_0x5b0b62(0x658,0x398,0x3d5,0x664)+_0x5b0b62(0x18b,0x1c8,0x30,0x48f)+_0x5b0b62(-0xbd,0x271,0x152,0x375)+_0x5b0b62(0x22d,-0x10,0x8f,-0xb5)+'Url\x20:*\x20')+_0x2c457b+enter+enter+(_0xf569f6(0x75b,0x716,0x45c,0x4bd)+_0x5b0b62(0x398,0x324,0x527,0x187)+_0xf569f6(0xe6,-0xf0,0x13b,0x451)+_0x5b0b62(-0x33d,-0xa9,-0x270,0x19e)+_0xf569f6(-0x29c,0x292,-0xa4,0x17d)+_0x5b0b62(-0x377,-0x10b,0x1ea,0x14f)),'©\x20'+ownername,_0x181ca5,[{'urlButton':{'displayText':_0x478764[_0x5b0b62(-0x7c,0x11a,0x10c,-0x1bb)],'url':''+_0x2c457b}}]);let _0x3f41c6=_0xf569f6(0x442,0x417,0x379,0x630)+'TUBE\x20VIDEO'+'\x20」----*\x0a\x0a*'+'🎀\x20Title\x20:*'+'\x20'+_0x27b8f2+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0x298436+('\x0a*📺\x20Ext\x20:*'+'\x20Mp4\x0a*👍\x20Qu'+_0xf569f6(0x16e,0x91,0x329,0x377)+'80Kbps\x0a*🌀\x20'+_0xf569f6(-0x1,-0x130,0x9d,-0x10d))+q;_0x3f41c6+='';function _0xf569f6(_0x3dbad6,_0x1723e0,_0x54cf03,_0x3a5252){return _0x2e98f4(_0x3a5252,_0x54cf03- -0x30e,_0x54cf03-0xa7,_0x3a5252-0x47);}const _0x497e23={};_0x497e23[_0x5b0b62(0xa0,-0x47,0x29d,-0x279)+'t']=_0x478764['slbqa'],_0x497e23[_0x5b0b62(0xaf,0x2ad,0xf0,0x4b2)]=''+youtube;const _0x3709ee={};_0x3709ee[_0x5b0b62(0x339,0x164,-0x105,0x193)]=_0x497e23;const _0x1509c2={};_0x1509c2[_0xf569f6(0x97,0x105,0x71,-0x14e)+'t']=_0x478764[_0xf569f6(0x119,0x2f5,0x2a8,0x5a3)],_0x1509c2['id']=_0x5b0b62(0x58,0x24e,0x10f,0x3e3);const _0x30f5dc={};_0x30f5dc[_0xf569f6(0x53,0x13c,0x257,0x35f)+_0xf569f6(0x112,-0xb9,0x13d,-0x170)]=_0x1509c2;const _0xe9c47e={};_0xe9c47e['displayTex'+'t']=_0x478764[_0x5b0b62(0x196,0x9,0x23a,0x43)],_0xe9c47e['id']='owner';const _0x5add9d={};_0x5add9d['quickReply'+_0x5b0b62(0x18e,0x85,0x29f,-0x22d)]=_0xe9c47e;var _0x3e806e=[_0x3709ee,_0x30f5dc,_0x5add9d];await alpha[_0xf569f6(0xf1,0x1f6,0x22a,0x13b)+'c'](from,_0x3f41c6,'©\x20'+ownername,_0x181ca5,_0x3e806e);const _0x92a263={};_0x92a263[_0x5b0b62(0x561,0x2ad,0x19,-0x25)]=_0x2c457b;const _0x55165f={};_0x55165f[_0x5b0b62(0x1f9,0x262,0x5d,-0xd2)]=_0x92a263,_0x55165f[_0xf569f6(0x507,0x4a2,0x46a,0x613)]=_0x478764[_0xf569f6(0x132,-0x152,0x7c,-0x186)],_0x55165f[_0xf569f6(0xde,-0x359,-0xab,-0x22)]=_0x27b8f2+_0xf569f6(0x3c6,0x5ab,0x3e2,0x401),alpha[_0x5b0b62(0xbe,0x1b3,-0x8e,-0x10c)+'e'](m['chat'],_0x55165f,{'quoted':m});});}break;case _0x5546ba(0x2a9,0x310,0x4b6,0x63d):if(!q)return reply(lang[_0x2e98f4(0x56c,0x2b4,0x443,-0x8a)+'t'](prefix));reply(lang[_0x5546ba(0x470,0x660,0x55b,0x379)]()),res=await yts(''+q),lok=await getBuffer(res[_0x5546ba(-0x228,-0x4,-0x1a,-0x79)][0x1*-0x445+-0xa32+0x1*0xe77][_0x5546ba(0x143,0x3b4,0x36c,0x527)]);let thumbInfo='-----「\x20*YO'+_0x5546ba(0x329,0x448,0x17e,0x3a)+_0x2e98f4(0x712,0x4bc,0x525,0x24c)+_0x5546ba(0x40d,-0x1b1,0x194,0x47b)+'*\x20'+res['all'][-0xb76+0x10b1+0x67*-0xd][_0x5546ba(0x1cc,0x4ef,0x30c,0x164)]+(_0x5546ba(0x5ab,0x292,0x489,0x407)+_0x2e98f4(0x74f,0x78d,0xa94,0x86e))+res[_0x5546ba(-0xa0,0x26a,-0x1a,-0x1dd)][-0xc77*-0x1+0x103a+-0x235*0xd]['views']+(_0x2e98f4(0xa13,0x704,0x690,0x9b2)+_0x2e98f4(0x5da,0x587,0x5b4,0x64c))+res[_0x5546ba(-0xe8,0x248,-0x1a,-0x336)][-0x18*-0x6a+0x5*-0x687+-0x27*-0x95][_0x2e98f4(0x4c6,0x79b,0x929,0x6a2)]+(_0x5546ba(0x288,0x24a,-0x8f,0x120)+'l\x20:*\x20')+res[_0x5546ba(0x1cd,-0x124,-0x1a,-0x57)][0xa*0x305+0x21f1*0x1+-0x4023][_0x5546ba(-0x2da,0x1b,0x33,-0x2ec)][_0x2e98f4(0x4cf,0x59a,0x74f,0x8c5)]+(_0x2e98f4(0x3e6,0x522,0x6c6,0x4b7)+'\x20:*\x20')+res[_0x2e98f4(0x187,0x266,0x1fe,0x3d1)][-0x1780+0x1596+0xe*0x23][_0x5546ba(-0xb8,0x187,0xd0,0xe9)]+(_0x2e98f4(0x1ee,0x4a9,0x3b5,0x2e5)+_0x5546ba(0x150,0x2d3,0x2cc,0x16b))+res[_0x2e98f4(0xb4,0x235,0x401,0x3da)][-0x42*0x72+-0x215b*-0x1+-0x5*0xcb][_0x2e98f4(0x796,0x673,0x47a,0x3d6)];const _0xa6b6a6={};_0xa6b6a6[_0x5546ba(0x189,0x395,0x1b4,0x379)+_0x2e98f4(0x570,0x7b7,0x637,0x4c3)]=0x0,_0xa6b6a6[_0x2e98f4(0x63c,0x413,0x40f,0x1d1)+_0x2e98f4(0x54e,0x305,0x513,0x248)]=0x0,_0xa6b6a6[_0x2e98f4(0x4e3,0x42a,0x1c0,0x549)+_0x5546ba(0x599,0x3e0,0x5cf,0x911)]=lok;const _0x346559={};_0x346559['displayTex'+'t']=_0x2e98f4(0x8aa,0x798,0x78b,0x8ba),_0x346559[_0x2e98f4(0x6e4,0x673,0x848,0x3a8)]=''+myweb;const _0x4f037d={};_0x4f037d[_0x2e98f4(0x626,0x52a,0x4e4,0x3b2)]=_0x346559;const _0x432939={};_0x432939[_0x2e98f4(0x49d,0x37f,0x4f,0x26c)+'t']=_0x5546ba(0x4b9,0x388,0x430,0x5bf),_0x432939[_0x2e98f4(0x754,0x673,0x78c,0x82c)]=''+github;const _0x1a55b0={};_0x1a55b0[_0x2e98f4(0x67b,0x52a,0x84d,0x3a5)]=_0x432939;const _0x1a4a0e={};_0x1a4a0e[_0x2e98f4(0x261,0x37f,0x10f,0x146)+'t']=_0x5546ba(0x453,-0x36,0x203,0x21d),_0x1a4a0e['id']=_0x5546ba(0x371,0x5e5,0x4f7,0x500)+res[_0x2e98f4(0x299,0x235,-0x11,0x1d4)][-0x964+-0x514+-0x39*-0x41][_0x5546ba(0x185,0x120,0x3f3,0x20f)];const _0x16ca4c={};_0x16ca4c[_0x2e98f4(0x260,0x565,0x3c4,0x401)+_0x2e98f4(0x34a,0x44b,0x2a5,0x644)]=_0x1a4a0e;const _0x57fd86={};_0x57fd86[_0x2e98f4(0x5af,0x37f,0x292,0x3f5)+'t']=_0x5546ba(0x3e5,0x2e9,0x158,0x2f9),_0x57fd86['id']='ytmp4\x20'+res[_0x2e98f4(-0x38,0x235,0x516,0x38d)][-0x22ea+-0x2bf*0x7+0x3624][_0x2e98f4(0x82f,0x673,0x80d,0x5eb)];const _0x189df1={};_0x189df1[_0x2e98f4(0x283,0x565,0x48e,0x834)+_0x5546ba(0x3de,0x174,0x1cb,0x4ff)]=_0x57fd86;const _0x283901={};_0x283901[_0x2e98f4(0x5e2,0x367,0x34f,0x543)+_0x5546ba(0x4d7,0x318,0x5a4,0x2d8)]=_0xa6b6a6,_0x283901[_0x5546ba(-0x103,0x1fd,0x11a,0x207)+'ntentText']=thumbInfo,_0x283901[_0x2e98f4(0x546,0x3c9,0x666,0x51d)+_0x5546ba(0x166,0x3ff,0x284,0x2fc)]='©\x20'+ownername,_0x283901[_0x5546ba(0xa4,0x1b4,0x308,0x1d6)+_0x2e98f4(0x2f3,0x204,-0xff,0x546)]=[_0x4f037d,_0x1a55b0,_0x16ca4c,_0x189df1];const _0x2ad5e3={};_0x2ad5e3[_0x2e98f4(0x6d3,0x436,0x3ca,0xf4)+'mplate']=_0x283901;const _0xcf9e5e={};_0xcf9e5e[_0x2e98f4(0x295,0x366,0x5d6,0x13c)+_0x2e98f4(0xaa6,0x824,0x948,0xb4e)]=_0x2ad5e3;var buatpesann=generateWAMessageFromContent(m['chat'],_0xcf9e5e,{'quoted':m});await alpha[_0x2e98f4(0x559,0x5db,0x6b2,0x3e7)+'ge'](m['chat'],buatpesann[_0x2e98f4(0x409,0x703,0x43c,0x7cb)],{'messageId':buatpesann[_0x2e98f4(0x485,0x6eb,0x3e9,0xa21)]['id']});break;case'sc':case _0x5546ba(0x134,0x52c,0x240,0x28):{let gam=await getBuffer(picak+(_0x2e98f4(0x562,0x858,0x80c,0x570)+'e'));const _0x52f642={};_0x52f642['displayTex'+'t']=_0x2e98f4(0x2f4,0x275,0x26d,0x312),_0x52f642[_0x2e98f4(0x602,0x673,0x465,0x86d)]='https://yo'+_0x2e98f4(0x598,0x790,0x8cb,0x580)+'c/zeeoneof'+'c';const _0x3097fc={};_0x3097fc['urlButton']=_0x52f642;var but=[_0x3097fc];const _0x4e4ffb={};_0x4e4ffb['userJid']=m[_0x5546ba(0x6ba,0x3bc,0x4ee,0x779)],_0x4e4ffb[_0x2e98f4(0x3ed,0x523,0x42a,0x55c)]=m,await alpha['send5ButLo'+'c'](from,lang[_0x2e98f4(0x26b,0x4c0,0x5bc,0x32a)](),'©\x20'+ownername,gam,but,_0x4e4ffb);}break;case _0x5546ba(0x137,0xfb,0x152,0x450):case _0x2e98f4(0x13f,0x3e7,0x6d9,0x2dc):case _0x5546ba(0xab,-0x4,-0x6e,-0x2ff):case'blue':case _0x2e98f4(0x6b6,0x66d,0x538,0x3b1):case _0x5546ba(0x1c0,0x33d,0x2cd,0x263):case'glass':case _0x2e98f4(0x69e,0x534,0x2d0,0x6e3):case _0x2e98f4(0x508,0x4c9,0x540,0x6ec):case'blurple2':case'wasted':case _0x2e98f4(0x468,0x3dd,0x36e,0x3fb):case _0x5546ba(0x340,0x435,0x1bb,0x241):case _0x5546ba(0x41f,0x23d,0x44f,0x6c9):case _0x5546ba(0x5c0,0x449,0x386,0x661):case'threshold':case'brightness':case _0x5546ba(0x5f9,0x82f,0x5c8,0x5e0)+_0x5546ba(0x734,0x479,0x52f,0x7d9):{if(!quoted)return reply(_0x2e98f4(0x955,0x75a,0x515,0x8c6)+_0x5546ba(0x7cb,0x335,0x5b4,0x5f1)+_0x2e98f4(0x418,0x4ca,0x654,0x2c5)+_0x2e98f4(0x4e8,0x788,0x4ed,0x83a)+(prefix+command));if(!/webp/['test'](mime)&&/image/[_0x2e98f4(0x69b,0x48c,0x7c4,0x393)](mime)){reply(lang[_0x2e98f4(0xa8f,0x7db,0x920,0x6e5)]());let sefek=await alpha[_0x5546ba(0x279,0x2b0,0x4b1,0x31d)+'dSaveMedia'+_0x5546ba(0x373,-0x5,0x225,-0x46)](quoted),fatz=await TelegraPh(sefek),stikfek=_0x5546ba(0x140,0x2d1,0x266,0x11d)+_0x5546ba(0x4cf,0x27a,0x4a5,0x727)+_0x5546ba(0x117,0xcd,0x280,-0x20)+_0x2e98f4(0xc,0x322,0xf5,0x5fe)+command+'?avatar='+fatz;const _0x2ae12c={};_0x2ae12c[_0x5546ba(-0x237,-0x247,-0x4e,0x177)]=global[_0x5546ba(-0x163,-0x26c,-0x4e,-0x86)],_0x2ae12c['author']=global[_0x2e98f4(0x29f,0x2b3,0x1b1,-0x86)];let fatmd=await alpha[_0x5546ba(0x5c8,0x121,0x3a7,0x599)+_0x5546ba(0x714,0x55d,0x57b,0x6dc)](m[_0x5546ba(0x44c,0x828,0x4ee,0x547)],stikfek,m,_0x2ae12c);await fs[_0x5546ba(0x784,0x55c,0x5a5,0x38c)](fatmd),await fs['unlinkSync'](sefek);}else{if(/webp/[_0x5546ba(-0xcc,0x6b,0x20c,0x23a)](mime)){reply(lang[_0x2e98f4(0x6e0,0x7db,0x7ee,0x8e4)]());let media=await alpha[_0x5546ba(0x2c5,0x3c2,0x4b1,0x16e)+_0x5546ba(-0xb4,0xec,-0x61,-0x380)+_0x2e98f4(0x265,0x4a5,0x62e,0x6f4)](quoted),ran=await(_0x5546ba(0x35e,0x36b,0xaf,0x2ea)+'img-')+getRandom(_0x2e98f4(0x3fd,0x24c,0x1a6,-0x4f));exec(_0x2e98f4(0xa16,0x723,0x7a7,0x90c)+media+'\x20'+ran,_0x206189=>{function _0xc64874(_0x2318e9,_0x34afd7,_0x13735c,_0x1e27b9){return _0x5546ba(_0x2318e9-0x32,_0x34afd7-0x47,_0x34afd7- -0x48,_0x2318e9);}const _0x3b51c1={'UHUyn':_0xc64874(0x137,0x396,0x536,0x30f),'GnwSl':function(_0x23b676,_0x3865cd){return _0x23b676(_0x3865cd);}};fs[_0x2b2e74(0x773,0x9b9,0x76b,0x688)](media);function _0x2b2e74(_0xe97f2f,_0xb8510a,_0x4b3e7e,_0x40454a){return _0x5546ba(_0xe97f2f-0xa1,_0xb8510a-0xad,_0x4b3e7e-0x1c6,_0x40454a);}if(_0x206189)return reply(_0x3b51c1[_0xc64874(-0x55,-0x67,-0xe4,-0x1b3)]);_0x3b51c1[_0xc64874(0x262,0x2e7,0x208,0x217)](TelegraPh,ran)[_0xc64874(0x13f,0xe9,0x2fb,0xf3)](async _0x5b3d47=>{function _0x1ca740(_0x46123a,_0x5a5cb0,_0x7b1b6c,_0x519dbc){return _0xc64874(_0x46123a,_0x7b1b6c-0x114,_0x7b1b6c-0x11b,_0x519dbc-0x22);}let _0x31cf26=_0x1ca740(0x121,0x1f3,0x332,0x139)+_0x1ca740(0x767,0x269,0x571,0x8a1)+_0x1aaa11(0x232,-0xe1,0x1ae,0x29a)+_0x1ca740(-0xa1,0xb9,0x16e,0x2e1)+command+_0x1ca740(0x955,0x400,0x659,0x4f8)+_0x5b3d47;const _0x54a1b9={};_0x54a1b9['packname']=global['packname'];function _0x1aaa11(_0x3b6a9d,_0x362135,_0x34cc72,_0x245f28){return _0xc64874(_0x245f28,_0x34cc72- -0x8a,_0x34cc72-0xd9,_0x245f28-0x75);}_0x54a1b9[_0x1aaa11(0x29e,-0x1c0,-0x9f,0x1d7)]=global[_0x1aaa11(-0x311,0x270,-0x9f,0x11e)];let _0xfaf670=await alpha['sendImageA'+_0x1ca740(0x688,0x887,0x647,0x95d)](m[_0x1ca740(0x5e1,0x38f,0x5ba,0x63e)],_0x31cf26,m,_0x54a1b9);await fs[_0x1aaa11(0x649,0x485,0x4d3,0x5f4)](_0xfaf670),await fs[_0x1ca740(0x66d,0x469,0x671,0x7eb)](ran);});});}else reply(_0x2e98f4(0x425,0x75a,0x971,0x83e)+_0x2e98f4(0x8a2,0x834,0x717,0x9ad)+'cker\x20Denga'+_0x2e98f4(0x467,0x788,0xaa6,0x4cf)+(prefix+command));}}break;case'rip':case _0x5546ba(-0xfb,0x35a,0x189,0x175):case _0x5546ba(0x5b0,0x358,0x44c,0x12b):case'burn':case _0x2e98f4(0x89b,0x759,0x929,0x8f9):case _0x2e98f4(0x3cd,0x214,0x4bf,0x51d):case'scary':case _0x5546ba(0x17b,0x3b9,0x437,0x303):case _0x5546ba(-0x10e,-0x31a,-0x7,0x197):case _0x5546ba(0x2dc,0x3a0,0x210,0xd2):case _0x5546ba(0x1c,0x480,0x1f1,0x46d):case'utatoo':case _0x2e98f4(0x1ed,0x464,0x73d,0x449):case'thanos':case'pixelize':case _0x5546ba(0x5fd,0x557,0x553,0x471):case _0x5546ba(0x1a2,0x452,0x272,0x153):case _0x5546ba(0x863,0x369,0x5ed,0x5a9):case _0x5546ba(-0x229,0x75,-0x3,0x2cc):case _0x2e98f4(0x55f,0x679,0x387,0x7ed):case'beautiful':case _0x5546ba(0x1e0,0x250,0x3f8,0x6c4):case _0x2e98f4(0xf6,0x3b0,0x2c8,0x50c):case _0x2e98f4(0x5ab,0x826,0xb43,0x6e6):case'challenger':case'unsharpen':case _0x5546ba(0x1bb,-0x92,-0x37,-0x349):case'missionpas'+_0x2e98f4(0x29d,0x385,0x5bc,0x19f):case _0x2e98f4(0x1b9,0x462,0x65b,0x564)+'renhave':{if(!quoted)return reply(_0x2e98f4(0x9e4,0x75a,0x41b,0x841)+_0x5546ba(0x410,0x322,0x5b4,0x87c)+_0x5546ba(0x43,0x19f,0x24a,0x2a7)+'n\x20Caption\x20'+(prefix+command));if(!/webp/[_0x5546ba(0x27a,0x2b9,0x20c,0x337)](mime)&&/image/[_0x2e98f4(0x77d,0x48c,0x749,0x559)](mime)){reply(lang[_0x5546ba(0x686,0x688,0x55b,0x7ce)]());var ini_gen=''+command,ciclee=await alpha[_0x5546ba(0x5c0,0x220,0x4b1,0x76d)+'dSaveMedia'+_0x5546ba(0x3e3,0x2e2,0x225,0x50e)](quoted),annnu=await TelegraPh(ciclee);const _0x206072={};_0x206072['url']=annnu;var imoj=await ameApi[_0x2e98f4(0x244,0x2dc,0x33e,0x555)](ini_gen,_0x206072)[_0x2e98f4(0x5d0,0x3b1,0x4e2,0xa9)](async _0x303263=>{function _0x572621(_0x8a17b,_0x5bcfd9,_0x24d80b,_0x42722c){return _0x2e98f4(_0x42722c,_0x8a17b- -0xc9,_0x24d80b-0x15,_0x42722c-0x1ae);}const _0x3d3a18={'VPQTL':_0x4f60e6(0x1b3,0x1f4,0x4a,0x235),'ruxes':function(_0x3ee187,_0x3e266d){return _0x3ee187+_0x3e266d;},'yOhsD':function(_0x11b495,_0x4d3456){return _0x11b495(_0x4d3456);}};function _0x4f60e6(_0x293ca2,_0x5697d2,_0x18acec,_0x48c7bb){return _0x5546ba(_0x293ca2-0x1,_0x5697d2-0xe9,_0x48c7bb-0x1ac,_0x293ca2);}const _0x49d92c=_0x3d3a18[_0x4f60e6(0x622,0x5ac,0x1be,0x4f9)]['split']('|');let _0x3e5989=-0x14e0+-0x7*0x2b9+0x27ef;while(!![]){switch(_0x49d92c[_0x3e5989++]){case'0':await fs['unlinkSync'](emm);continue;case'1':alpha['sendMessag'+'e'](m[_0x572621(0x6a5,0x382,0x559,0x502)],{'image':fs[_0x4f60e6(0xf1,0x53c,0x16a,0x40e)+'nc'](emm),'caption':lang['ok']()},{'quoted':m});continue;case'2':await fs['unlinkSync'](ciclee);continue;case'3':await fs[_0x4f60e6(0x6c1,0x6de,0x69b,0x55c)+'ync'](emm,_0x303263);continue;case'4':emm=_0x3d3a18[_0x4f60e6(0x97d,0x87b,0x6cb,0x73a)](await(_0x4f60e6(0x113,0x3d0,0x1d3,0x379)+'geff-'),_0x3d3a18[_0x572621(0x3ff,0x416,0x3e8,0x705)](getRandom,_0x572621(0x183,0x245,-0x90,0x1b4)));continue;}break;}});}else{if(/webp/['test'](mime)){reply(lang['wait']());var inigen=''+command;let media=await alpha['downloadAn'+_0x2e98f4(0x4c0,0x21f,0x352,0x45e)+'Message'](quoted),ran=await(_0x5546ba(0x23b,0x28e,0xaf,0x256)+_0x5546ba(0x649,0x432,0x56a,0x480))+getRandom('.png');exec(_0x2e98f4(0x4c2,0x723,0x9f9,0x914)+media+'\x20'+ran,_0x275638=>{const _0x51e287={'uFTGf':function(_0x257054,_0x4f2862){return _0x257054===_0x4f2862;},'ARPet':_0x1edad0(0x2d2,0x2c1,0x5ff,0x56a),'HbdOm':function(_0x1ef020,_0x5c4b5e){return _0x1ef020+_0x5c4b5e;},'MedFR':_0x2cacaa(0x313,0x240,0x2d4,0x547)+'geff-','awylU':function(_0x20ec62,_0x2075a3){return _0x20ec62(_0x2075a3);},'Nuqwc':_0x2cacaa(0x35,0x3f,0x1a,-0x1c2),'SDhPW':function(_0x4780bc,_0x161b85){return _0x4780bc(_0x161b85);}};function _0x2cacaa(_0x113ddf,_0x3b9962,_0x477ac5,_0x5d79bc){return _0x5546ba(_0x113ddf-0x1ed,_0x3b9962-0x43,_0x3b9962-0x73,_0x5d79bc);}if(_0x275638)return reply(_0x1edad0(-0x1a7,0x14e,-0x20,-0xf0));function _0x1edad0(_0x2bce80,_0x33aba6,_0xd125d,_0x4e5d8e){return _0x2e98f4(_0xd125d,_0x33aba6- -0x33d,_0xd125d-0x1b6,_0x4e5d8e-0x30);}_0x51e287['SDhPW'](TelegraPh,ran)[_0x1edad0(-0x103,0x74,-0x4f,0x14e)](async _0x317320=>{const _0x3f6440={'YankO':function(_0xfca6ea,_0x2c67a7){function _0x12ff65(_0x1b5e5b,_0x16a2dc,_0x5292b3,_0x29fb80){return _0x5617(_0x16a2dc- -0x133,_0x29fb80);}return _0x51e287[_0x12ff65(0x474,0x4ee,0x50c,0x70b)](_0xfca6ea,_0x2c67a7);},'yJyMw':_0x159724(0xcb,0x3c0,0x3b2,0x2ae),'metRe':_0x51e287[_0x43d49f(0x5a8,0x5fd,0x58c,0x4e6)],'kRyCr':function(_0x38bfa0,_0x144fa7){function _0x3fbfd2(_0x73d1fb,_0x2fa42d,_0x46f475,_0x58bbcc){return _0x43d49f(_0x73d1fb-0x5,_0x2fa42d-0xc,_0x46f475-0xf5,_0x58bbcc);}return _0x51e287[_0x3fbfd2(0x29f,0x525,0x531,0x1d9)](_0x38bfa0,_0x144fa7);},'Fegkv':_0x51e287[_0x43d49f(0x4b,0x2fd,0x53,-0xa4)],'HnfOd':function(_0x2f9b70,_0x3643a1){function _0x3eca11(_0x203970,_0x4f447c,_0x20f959,_0x2d8fbc){return _0x43d49f(_0x2d8fbc-0x18,_0x4f447c-0x192,_0x20f959-0x138,_0x4f447c);}return _0x51e287[_0x3eca11(0x864,0x71a,0x3e7,0x538)](_0x2f9b70,_0x3643a1);},'tlnGp':_0x51e287[_0x159724(0x439,0x6fd,0x719,0x60d)]},_0x435c0e={};function _0x43d49f(_0xe3e5a9,_0x52cfa3,_0x2526a3,_0x1407f0){return _0x2cacaa(_0xe3e5a9-0x32,_0xe3e5a9- -0x1f,_0x2526a3-0xd3,_0x1407f0);}_0x435c0e[_0x159724(0x36a,0x142,0x30e,0x4a6)]=_0x317320;function _0x159724(_0x546d71,_0x6a6b7d,_0x3b9a93,_0x554387){return _0x1edad0(_0x546d71-0x28,_0x546d71-0x34,_0x3b9a93,_0x554387-0x139);}ameApi[_0x159724(-0x2d,-0x29,0x118,-0x2a2)](inigen,_0x435c0e)['then'](async _0x411aa0=>{function _0x5ea185(_0x3b7da1,_0xe1955b,_0x5642e2,_0x5a4451){return _0x159724(_0x5642e2-0x40e,_0xe1955b-0x6b,_0xe1955b,_0x5a4451-0x5e);}function _0x50f96a(_0x42820a,_0x394ded,_0x493d96,_0x71537b){return _0x159724(_0x394ded-0x38a,_0x394ded-0x1f,_0x493d96,_0x71537b-0x198);}if(_0x3f6440['YankO'](_0x3f6440[_0x50f96a(0x888,0x558,0x5e8,0x325)],_0x50f96a(0x5a5,0x455,0x119,0x2cc))){const _0x30a98f=_0x3f6440[_0x5ea185(0x26a,0x4e1,0x4c4,0x352)][_0x5ea185(0x23b,0x2e5,0x3dd,0x678)]('|');let _0x44239c=-0x30e+0x1*-0x1cf3+0x2001;while(!![]){switch(_0x30a98f[_0x44239c++]){case'0':emh=_0x3f6440[_0x5ea185(0x1bd,0x3f9,0x323,0x4f2)](await _0x3f6440['Fegkv'],_0x3f6440[_0x5ea185(0xaf,0x5a6,0x3bd,0x3b3)](getRandom,_0x3f6440[_0x5ea185(0x575,0x604,0x730,0x677)]));continue;case'1':await fs[_0x50f96a(0x9ce,0x6b1,0x699,0x567)+'ync'](emh,_0x411aa0);continue;case'2':await fs['unlinkSync'](ran);continue;case'3':alpha[_0x50f96a(0x8dc,0x5fa,0x840,0x7fe)+'e'](m[_0x5ea185(0x61b,0x80b,0x873,0x734)],{'image':fs['readFileSy'+'nc'](emh),'caption':lang['ok']()},{'quoted':m});continue;case'4':await fs[_0x5ea185(0x982,0x750,0x92a,0xb93)](emh);continue;}break;}}else throw new _0x5c29bb(_0x4b7990);});}),fs[_0x2cacaa(0x894,0x618,0x32e,0x50f)](media);});}else reply(_0x5546ba(0x2ba,0x459,0x4da,0x691)+_0x5546ba(0x3bc,0x2ba,0x5b4,0x7f7)+'cker\x20Denga'+'n\x20Caption\x20'+(prefix+command));}}break;case'github':case'gitdl':case _0x2e98f4(0x14a,0x213,-0xe5,-0x75):{if(!text)return reply(_0x2e98f4(0x5ae,0x653,0x8bc,0x5aa)+_0x2e98f4(0x735,0x6c9,0x6b9,0x455)+(prefix+command)+(_0x2e98f4(0x381,0x633,0x5c8,0x645)+_0x2e98f4(0x866,0x73c,0x746,0x985)+_0x2e98f4(0x776,0x50b,0x252,0x686)));let gitRegex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!gitRegex[_0x5546ba(0x46a,0xf3,0x20c,0x407)](args[0x2*-0xa6f+0x2*-0x2a8+0x1a2e]))return reply('Itu\x20bukan\x20'+'link\x20githu'+'b');reply(lang[_0x2e98f4(0x550,0x7db,0xb07,0xa02)]());let [,user,repo]=args[-0x1*0x25b4+-0x6*-0x40a+0xd78]['match'](gitRegex)||[];repo=repo['replace'](/.git$/,'');let url=_0x5546ba(0x20f,-0x1c4,0x54,0x306)+_0x5546ba(0x19f,0x216,0x45f,0x223)+_0x5546ba(0x610,0x80d,0x539,0x5b4)+user+'/'+repo+'/zipball';const _0x172d3f={};_0x172d3f[_0x5546ba(0x262,0x687,0x38e,0x18b)]=_0x5546ba(0x55b,0x18c,0x40d,0x1bc);let filename=(await fetch(url,_0x172d3f))['headers'][_0x2e98f4(0x4f4,0x72b,0x87c,0x675)](_0x2e98f4(0x631,0x557,0x3f4,0x878)+_0x2e98f4(0x4fd,0x245,0x308,0x3ce))[_0x2e98f4(0xa5,0x210,0x9d,0x57)](/attachment; filename=(.*)/)[-0x100e+-0x665*0x2+0x1cd9];alpha['sendMedia'](m[_0x2e98f4(0x6e2,0x76e,0x72b,0x827)],url,filename,m);}break;case _0x5546ba(0x313,0x63e,0x3d4,0x2b0):{if(!args[-0x1*0x2105+-0x3d*-0xb+0x1e66])return reply(_0x2e98f4(0x54c,0x653,0x94d,0x5ac)+_0x5546ba(0x234,0x143,0x449,0x2ec)+(prefix+command)+(_0x2e98f4(0x498,0x73e,0x963,0x5f4)+'epo*\x20*bran'+'ch*'));if(!args[-0x4*0x52f+-0x17*0xe3+-0x15f*-0x1e])return reply(_0x2e98f4(0x6ff,0x653,0x3d7,0x360)+_0x5546ba(0x2ac,0x157,0x449,0x43a)+(prefix+command)+(_0x5546ba(0x7af,0x325,0x4be,0x2bb)+_0x2e98f4(0x59a,0x36d,0x508,0x131)+'ch*'));if(!args[0x21*-0x12f+-0x1a3*0x5+0x2f40])return reply('Kirim\x20peri'+_0x5546ba(0x6bf,0x5e2,0x449,0x1ce)+(prefix+command)+(_0x5546ba(0x323,0x53a,0x4be,0x612)+_0x2e98f4(0x305,0x36d,0x228,0x4d2)+_0x5546ba(-0xa8,0x22,-0x43,-0x74)));let url='https://gi'+_0x2e98f4(0x454,0x583,0x4fb,0x2e5)+args[0xcb5+0x21bb+0x1738*-0x2]+'/'+args[-0x24e5*0x1+0x1b5*0x7+0x851*0x3]+(_0x5546ba(0x645,0x411,0x311,0x130)+_0x5546ba(0x25d,0x46,0x24,0x205))+args[0x89d+-0x1025*0x2+-0x1*-0x17af]+'.zip';reply(lang[_0x5546ba(0x2c1,0x691,0x55b,0x778)]()),alpha['sendMedia'](m[_0x2e98f4(0xa69,0x76e,0x4ae,0x77e)],url,args[-0x21b7+-0x10*-0x1c1+0x1*0x5a7]+'-'+args[-0x1bf5+-0x3*0x73b+0x31a7]+'-'+args[0x17f*-0x8+-0x1*-0x1cd+-0x5*-0x209]+'.',m);}break;case _0x5546ba(0x23f,0x532,0x4f6,0x2c5):{if(!text)return reply('Usernameny'+'a?');var halzmal=text;const ig=require(_0x2e98f4(0xad6,0x7d0,0x5ee,0x4a2)),_0x2d3d9e={};_0x2d3d9e[_0x5546ba(0x2da,-0xdc,0x143,0x1c7)]=0x0,_0x2d3d9e[_0x5546ba(0x7ba,0x7f0,0x561,0x37e)]=_0x2e98f4(0xab,0x266,0x99,0x4db),_0x2d3d9e[_0x5546ba(-0x29a,0x1a1,0x3f,0x188)]=0x0,_0x2d3d9e[_0x5546ba(0x6a8,0x1b4,0x3e3,0x4f3)]=_0x2e98f4(0x638,0x7bf,0x5c2,0x922)+'2989573374'+_0x5546ba(0x560,0x4c1,0x317,0x4ac)+'nCfoNR:9';const options=_0x2d3d9e,igstalk=_0x4f63b1=>new Promise((_0x3015f5,_0x27d1f3)=>{const _0x5896b8={'bPtqG':function(_0x5bb0c8,_0x26a69b){return _0x5bb0c8(_0x26a69b);},'hdTni':function(_0xcb5d12,_0xaadc6d){return _0xcb5d12+_0xaadc6d;},'czRcP':function(_0x3aac83,_0x3b4153){return _0x3aac83(_0x3b4153);},'NYSdA':_0x11a7d3(0x204,0x501,0x157,0x376)+_0x11a7d3(0x218,0x2ce,0x304,0x19),'ovced':_0x11a7d3(0xc2,-0x330,-0x342,-0x14),'GmWGb':_0x11a7d3(0x5ae,0x2a5,0xa7,0x2ae),'ICDAj':function(_0x33e8c1,_0x5ceeef){return _0x33e8c1===_0x5ceeef;},'tbfAF':function(_0x48fbaf,_0x415ff5){return _0x48fbaf===_0x415ff5;},'ueLtA':_0x11a7d3(0x1f,0x22b,0x1a2,0x20c),'ZAESR':_0x11a7d3(-0x1df,-0x238,0x2ec,-0x16),'txFFW':function(_0x5a7c99,_0x47f18f){return _0x5a7c99(_0x47f18f);},'bHUTP':_0x11a7d3(0x38a,0x37f,0x45b,0x32c)+_0x11d009(0x7ea,0x60d,0x5d8,0x6d8),'Xhpyz':function(_0x44e582,_0x373978){return _0x44e582===_0x373978;},'zpdPP':'lWqms'};user=_0x4f63b1[_0x11d009(0x6f8,0x99a,0x6c7,0x806)](/@/gi,'');function _0x11d009(_0x529083,_0x4a5bd2,_0x497953,_0x438d37){return _0x2e98f4(_0x438d37,_0x497953-0xe3,_0x497953-0x102,_0x438d37-0x48);}function _0x11a7d3(_0x1170e9,_0x14e30f,_0x5c24ff,_0x1b54cd){return _0x5546ba(_0x1170e9-0x133,_0x14e30f-0x35,_0x1b54cd-0x3e,_0x1170e9);}(_0x5896b8[_0x11a7d3(0x2c5,0x62f,0x6a8,0x41a)](user,undefined)||!user)&&(_0x5896b8['tbfAF'](_0x5896b8['ueLtA'],_0x5896b8[_0x11d009(0x69f,0x62c,0x3e1,0x47b)])?_0x5896b8[_0x11d009(0x7bc,0x478,0x5eb,0x8ac)](_0x52e45e,_0x11d009(0x545,0x9e3,0x83d,0x95d)+'y\x20Foto/Sti'+_0x11a7d3(0x258,0x13,0x50e,0x288)+'n\x20Caption\x20'+_0x5896b8[_0x11a7d3(0x13a,0x238,0x3ed,0x332)](_0x4a15e1,_0x3b0d8b)):_0x5896b8[_0x11d009(0x8ab,0x8fa,0x6e4,0x481)](_0x27d1f3,_0x5896b8[_0x11a7d3(0x511,0x434,0x6cb,0x5ac)]));try{if(_0x5896b8[_0x11a7d3(0x367,0x39e,0x308,0x4c4)](_0x5896b8[_0x11a7d3(0x2ff,0x73f,0x3d7,0x474)],_0x5896b8[_0x11d009(0x4b3,0x4a0,0x799,0x55e)]))ig[_0x11d009(0x57c,0x4bd,0x4e3,0x782)+'a'](user,options)[_0x11d009(0x667,0x5d8,0x494,0x282)](async _0x341c63=>{const _0x4c16f5={};_0x4c16f5[_0x2a6ee3(0x23c,0x249,-0x7b,0x10e)]=_0x341c63['graphql']['user'][_0x2a6ee3(0x308,0x283,0x34b,0x411)+_0x2a6ee3(0x1ff,0x112,-0xcd,0xe9)],_0x4c16f5['high']=_0x341c63[_0x2a6ee3(0x263,0x54a,0x504,0x528)]['user'][_0x4e9ada(-0x174,0xd7,-0x7e,0x1c3)+_0x2a6ee3(0x3f0,0xd4,0x39b,0x5f7)];const _0x43e5e1={};function _0x2a6ee3(_0x1c5fa7,_0x4ed89a,_0x576b01,_0x55944b){return _0x11a7d3(_0x4ed89a,_0x4ed89a-0x1ef,_0x576b01-0xbf,_0x1c5fa7-0x4b);}_0x43e5e1['url']=_0x341c63[_0x2a6ee3(0x263,0x464,0x45e,0x49f)][_0x2a6ee3(0x461,0x58e,0x123,0x1d8)][_0x2a6ee3(0x458,0x77a,0x2d6,0x2b0)+'rl'];function _0x4e9ada(_0x2728cb,_0x41419c,_0x1298b1,_0x1b611a){return _0x11d009(_0x2728cb-0x1b0,_0x41419c-0x77,_0x1b611a- -0x41f,_0x1298b1);}_0x43e5e1['id']=_0x341c63[_0x4e9ada(0x255,0x19b,0x236,0x11e)][_0x4e9ada(0x39f,0x210,0x16f,0x31c)]['id'],_0x43e5e1['username']=user,_0x43e5e1[_0x4e9ada(-0x2b2,-0x42,0xce,-0xc0)]=_0x341c63[_0x2a6ee3(0x263,0x3e3,0x512,0x295)][_0x2a6ee3(0x461,0x393,0x347,0x1d1)][_0x2a6ee3(0x1d4,-0xbe,0x319,-0x37)],_0x43e5e1['link_profi'+'le']=_0x2a6ee3(0x3de,0x60f,0x520,0x6d7)+_0x2a6ee3(0x22c,0x3fd,0x434,0x370)+'m/'+user,_0x43e5e1[_0x4e9ada(0x13b,-0x2,0x22,0x18b)]=_0x341c63[_0x4e9ada(0x322,-0x1f3,-0x1f,0x11e)]['user'][_0x2a6ee3(0x51d,0x587,0x253,0x75f)],_0x43e5e1['verified']=_0x341c63[_0x4e9ada(-0x18b,-0xea,-0x1c8,0x11e)][_0x2a6ee3(0x461,0x49e,0x309,0x71b)][_0x2a6ee3(0x21,-0x27a,0x1cb,-0x31)+'d'],_0x43e5e1[_0x2a6ee3(0x3ba,0x3b3,0x6e3,0x332)]=_0x341c63[_0x4e9ada(-0x25,0x5,-0xa,0x11e)][_0x4e9ada(0x17d,0x21,0xea,0x31c)]['biography'],_0x43e5e1['follower']=_0x341c63[_0x2a6ee3(0x263,-0x5d,0x1d0,0x4fe)][_0x4e9ada(0x4cd,0x23d,0x1ce,0x31c)]['edge_follo'+_0x2a6ee3(0x399,0x581,0x5ea,0x617)]['count'],_0x43e5e1[_0x4e9ada(0x580,0x423,0x15b,0x266)]=_0x341c63['graphql'][_0x4e9ada(0x2c9,0x151,0x6b,0x31c)]['edge_follo'+'w'][_0x4e9ada(-0x1e7,-0x2ab,0x174,0x87)],_0x43e5e1['conneted_f'+'b']=_0x341c63['graphql'][_0x2a6ee3(0x461,0x446,0x5d6,0x423)][_0x2a6ee3(0x52d,0x750,0x7b3,0x75e)+_0x4e9ada(0x170,0x4ea,0x298,0x2dc)],_0x43e5e1[_0x4e9ada(-0xcd,0xb9,-0x157,0x32)+'ine']=_0x341c63[_0x2a6ee3(0x263,0xdd,-0xd,0xfc)]['user'][_0x2a6ee3(0x41c,0x626,0x4cc,0x40e)+'_video_tim'+'eline'][_0x4e9ada(-0x199,-0x1b7,-0x23f,0x87)],_0x43e5e1[_0x4e9ada(0x61e,0x245,0x59e,0x4ee)]=_0x341c63['graphql']['user']['edge_owner'+'_to_timeli'+_0x2a6ee3(0x1d3,0x511,0x48a,0x4a)]['count'],_0x43e5e1[_0x4e9ada(0x15,-0x139,0x12c,0x176)]=_0x341c63[_0x4e9ada(-0x83,0x97,-0x1e4,0x11e)][_0x2a6ee3(0x461,0x3bd,0x270,0x210)][_0x2a6ee3(0x4c8,0x3ed,0x3b7,0x21d)+_0x2a6ee3(0x3dd,0x5d0,0x4bc,0x379)][_0x2a6ee3(0x1cc,0x438,0x4c6,0x1dd)],_0x43e5e1[_0x2a6ee3(0x3b2,0x601,0x198,0x2f1)+'s']=_0x341c63[_0x2a6ee3(0x263,0x246,0x38b,0x147)]['user']['edge_media'+_0x4e9ada(0x814,0x3b7,0x493,0x519)+'ns']['count'],_0x43e5e1['total_reel'+'s']=_0x341c63['graphql'][_0x4e9ada(0x5e6,0x548,0x26,0x31c)][_0x4e9ada(0x401,0xf2,0x75,0x23b)+_0x2a6ee3(0xe7,-0x90,-0x22d,0x14)],_0x5896b8[_0x2a6ee3(0x224,0x13d,0x1b9,-0xbb)](_0x3015f5,{'status':0xc8,'creator':_0x5896b8[_0x4e9ada(0x79d,0x512,0x303,0x476)],'profile':_0x4c16f5,'data':_0x43e5e1});})[_0x11d009(0x451,0x94,0x3ac,0x3b5)](_0x26a48e=>_0x27d1f3({'status':0x1f4,'message':toString(_0x26a48e['message'])}));else switch(_0x167a97[_0x11a7d3(-0x1a1,-0x290,0x1be,0x59)]){case _0x5896b8[_0x11d009(0x58b,0x729,0x877,0x915)]:return(_0x11d009(0x59c,0x7c1,0x7f0,0x6d2)+'\x20*'+_0x506d00[_0x11d009(0x7cc,0x839,0x66f,0x6b1)]+(_0x11a7d3(0x361,0x698,0x5c7,0x5d0)+'i:\x20')+_0x1013d1[_0x11a7d3(0x59e,0x6c6,0x739,0x559)]+(_0x11d009(0x825,0x9d3,0x8c7,0xa5c)+'d\x20')+_0x4fad70[_0x11d009(0x138,0x6c4,0x433,0x5b6)]+('\x0a😎\x20Views\x20:'+'\x20')+_0x22c8b6[_0x11d009(0x7cf,0x56f,0x548,0x542)]+_0x11a7d3(0x3bf,0x24f,-0xc4,0xac)+_0x90bd83[_0x11a7d3(0x334,0x598,0x3a7,0x431)]+_0x11d009(0x6bb,0x33a,0x3f8,0x6f9))[_0x11d009(0x3b2,0x172,0x398,0x53f)]();case _0x5896b8['GmWGb']:return(_0x11a7d3(-0x13,0x23e,-0x1b7,-0x1b)+_0x11a7d3(-0x7c,0x121,0x10b,0xc2)+_0x5c8ad6[_0x11d009(0x871,0x564,0x67d,0x655)]+_0x11d009(0x388,0x655,0x5ca,0x391)+_0x11f699[_0x11d009(0x6f8,0x685,0x756,0x7ba)]+(_0x11a7d3(0x34a,0x396,0x22f,0x3c1)+'ber\x20:\x20')+_0x9c0ba[_0x11d009(0x8ba,0x321,0x63b,0x554)+'bel']+'\x20('+_0x2ad2aa[_0x11d009(0x813,0x84e,0x898,0x59b)]+(_0x11a7d3(0x5dc,0x5a2,0x3be,0x35d)+_0x11d009(0x5b2,0x840,0x80c,0x972))+_0x140f84[_0x11d009(0xab4,0x932,0x7ba,0x980)]+'\x0a')['trim']();}}catch(_0x5958c7){_0x5896b8[_0x11d009(0x7e0,0x49c,0x5eb,0x6ee)](_0x27d1f3,_0x5958c7);}});igstalk(halzmal)[_0x5546ba(-0x15e,-0x45,0x131,0x342)](async _0xd7530e=>{const _0x40ef5f={'dBypT':function(_0x21415b,_0xdadbcb){return _0x21415b(_0xdadbcb);},'YjuJe':_0x3eda87(0x85a,0x95b,0x6bb,0x788),'jWbFY':_0x6e56ea(0x734,0x98d,0x77d,0xb8e)};let {url:_0x32d2e3,id:_0x5d3dee,username:_0x5d1ffd,fullname:_0x171c3f,link_profile:_0x229b5a,private:_0x21ccc4,verified:_0x5cbab5,bio:_0x28a33a,follower:_0x51bbbd,following:_0x2e733b,connected_fb:_0xd42b96,videotimeline:_0x560509,timeline:_0x4eb8d5,savedmedia:_0x318764,collections:_0x47d36f,total_reels:_0x25c981}=_0xd7530e[_0x6e56ea(0x9b1,0xa04,0x98d,0x884)],_0x5bfa03=await _0x40ef5f[_0x3eda87(0xae5,0x814,0xd6a,0xc13)](getBuffer,_0xd7530e[_0x6e56ea(0x95a,0x9ab,0xa18,0x766)][_0x3eda87(0x5fe,0x3fa,0x638,0x715)]);const _0x1764bd='🎀\x20Username'+_0x6e56ea(0x459,0x683,0x3b3,0x694)+_0x5d1ffd+'\x0a🆔\x20Id\x20:\x20'+_0x5d3dee+('\x0a👻\x20Fullnam'+_0x6e56ea(0x661,0x6e0,0x7f3,0x8a6))+_0x171c3f+('\x0a🏷️\x20Followe'+'rs\x20:\x20')+_0x51bbbd+('\x0a✴️\x20Followi'+_0x3eda87(0xaa3,0xb08,0xc3f,0xd18))+_0x2e733b+(_0x3eda87(0x7a0,0x95a,0x972,0x5c8)+'e\x20:\x20')+_0x4eb8d5+('\x0a🕹️\x20Video\x20T'+_0x6e56ea(0x6dc,0x63e,0x469,0x4d5))+_0x560509+(_0x6e56ea(0x9ed,0x977,0x6c4,0xb77)+'\x20')+_0x25c981+(_0x3eda87(0x610,0x786,0x30f,0x87c)+_0x3eda87(0x7bc,0x63f,0x88e,0xa42))+_0x21ccc4+(_0x6e56ea(0x3e4,0x718,0x847,0x9f8)+'d\x20:\x20')+_0x5cbab5+(_0x3eda87(0x791,0x9eb,0x66d,0x8fa)+'\x20Fb\x20:\x20')+(_0xd42b96?_0xd42b96:_0x40ef5f[_0x3eda87(0x94f,0x765,0x6ac,0xa94)])+('\x0a🗃️\x20Savemed'+'ia\x20:\x20')+_0x318764+(_0x6e56ea(0x367,0x639,0x657,0x598)+_0x3eda87(0x7bc,0x53c,0x85e,0x989))+_0x47d36f+(_0x3eda87(0x865,0xa50,0xb93,0x921)+_0x6e56ea(0x3bd,0x683,0x93f,0x762))+_0x32d2e3+(_0x3eda87(0xb7b,0xe0c,0xa6e,0xced)+_0x6e56ea(0x78a,0x736,0x6e5,0x830))+_0x28a33a,_0xf0ed44={};_0xf0ed44[_0x6e56ea(0x320,0x567,0x552,0x8a7)+'t']=_0x3eda87(0x991,0x9af,0xb39,0x84e)+'rl',_0xf0ed44[_0x6e56ea(0x5c0,0x85b,0x881,0x9a2)]=''+_0x229b5a;const _0x8a7c3b={};function _0x3eda87(_0x103e19,_0x243e1d,_0x166b90,_0x234246){return _0x5546ba(_0x103e19-0xb8,_0x243e1d-0x1cc,_0x103e19-0x5a1,_0x243e1d);}_0x8a7c3b['urlButton']=_0xf0ed44;const _0x238feb={};_0x238feb['displayTex'+'t']=_0x40ef5f[_0x6e56ea(0xc29,0x922,0xbfd,0x903)],_0x238feb['id']=_0x6e56ea(0x6e3,0x7fc,0x992,0xb2b);const _0x2581aa={};_0x2581aa[_0x6e56ea(0x8d8,0x74d,0x7ed,0x42e)+_0x3eda87(0x76c,0x7b6,0x7c2,0x816)]=_0x238feb;const _0x25f987={};_0x25f987[_0x6e56ea(0x413,0x567,0x600,0x291)+'t']='Owner',_0x25f987['id']=_0x6e56ea(0x18b,0x3ee,0x6bf,0x36b);const _0x206522={};_0x206522[_0x3eda87(0x886,0x6c6,0x5e4,0x7b4)+_0x3eda87(0x76c,0xa4b,0xa17,0x928)]=_0x25f987;var _0xe52ff7=[_0x8a7c3b,_0x2581aa,_0x206522];const _0xf2c470={};function _0x6e56ea(_0x472289,_0x58875c,_0x3c426f,_0x1380d9){return _0x2e98f4(_0x1380d9,_0x58875c-0x1e8,_0x3c426f-0xc1,_0x1380d9-0x15b);}_0xf2c470[_0x6e56ea(0xc53,0x999,0x790,0x8c4)]=m[_0x6e56ea(0x86a,0x956,0xc8c,0x96f)],_0xf2c470[_0x3eda87(0x844,0xb3e,0xb5f,0x57b)]=m,await alpha[_0x3eda87(0x859,0x63a,0x59f,0xaf9)+'c'](from,_0x1764bd,'©\x20'+ownername,_0x5bfa03,_0xe52ff7,_0xf2c470);})['catch'](_0x339df6=>{function _0x3a9293(_0xbd8170,_0x2fadd9,_0x555aa4,_0x4f9429){return _0x2e98f4(_0xbd8170,_0x4f9429-0x174,_0x555aa4-0xf1,_0x4f9429-0x19a);}const _0x3b5a7d={'mZDhH':function(_0x13df99,_0x22fc84){return _0x13df99(_0x22fc84);}};function _0x51496a(_0x59aa77,_0x42a2e2,_0x87752d,_0x139aa3){return _0x2e98f4(_0x42a2e2,_0x87752d- -0x398,_0x87752d-0x87,_0x139aa3-0x163);}_0x3b5a7d[_0x51496a(-0x124,0x2c0,0x12d,-0x1a9)](reply,lang[_0x3a9293(0xaf9,0xaf8,0x911,0x8a8)]());});}break;case _0x5546ba(0x570,0x30a,0x4af,0x4a9):case _0x5546ba(0x3f,0x16d,0x362,0x49f)+'lk':{if(!q)return reply(lang['wrongForma'+'t'](prefix));srch=''+q,yts(''+srch)['then'](async _0x5cae9f=>{const _0x4749e9={'PwkNW':_0x8b451(0x2e4,0xd9,0x3d3,0xb7),'bBmzk':_0x4a70d8(0x7e2,0x6d4,0x478,0x3a2),'XCxQR':function(_0xe7a450,_0x339826){return _0xe7a450(_0x339826);},'VDpjf':'\x0a---------'+_0x8b451(0x548,0x255,0x58f,0x2cf)+'----------'+_0x4a70d8(0x40a,0x62a,0x872,0x6fa)+'-\x0a'};aramat=_0x5cae9f['all'];var _0x4815d1=await _0x4749e9[_0x4a70d8(0x611,0x7b3,0x632,0x673)](getBuffer,aramat[0xb8*0xc+0x851+0x1*-0x10f1][_0x8b451(0x3c3,0x387,0x5f9,0x475)]);let _0x31defd=_0x5cae9f[_0x8b451(-0x194,0x377,-0x9f,0xef)][_0x8b451(0x32d,0x6f5,0x740,0x58e)](_0xe98578=>{function _0x5cc0fc(_0x22c8ff,_0x2892ae,_0x349eb0,_0x9e0e3a){return _0x8b451(_0x22c8ff-0xf9,_0x9e0e3a,_0x349eb0-0x1a7,_0x2892ae-0x3e8);}function _0x21fc9e(_0x5d8ad3,_0x6d27b4,_0x34bb0f,_0x139b49){return _0x4a70d8(_0x6d27b4,_0x5d8ad3- -0x3f1,_0x34bb0f-0x39,_0x139b49-0x2e);}switch(_0xe98578[_0x5cc0fc(0x39c,0x50c,0x56b,0x2d0)]){case _0x4749e9['PwkNW']:return'\x0a'[_0x21fc9e(0xa8,-0xfe,-0x24e,-0x174)]();case _0x4749e9[_0x21fc9e(0x3e0,0x38d,0x3b5,0x3fd)]:return('\x0a📛\x20Channel'+_0x5cc0fc(0x635,0x575,0x83c,0x653)+_0xe98578['name']+'*\x0a🌀\x20Url\x20:\x20'+_0xe98578['url']+(_0x21fc9e(0x3f6,0x2b2,0x623,0x17a)+_0x21fc9e(0x2e9,0xdf,0x234,0x230))+_0xe98578[_0x5cc0fc(0x7fa,0x7c9,0x4d4,0x875)+'bel']+'\x20('+_0xe98578[_0x21fc9e(0x5a8,0x4d7,0x6f1,0x48f)]+(_0x21fc9e(0x392,0x5e,0x479,0x59)+'Video\x20:\x20')+_0xe98578['videoCount']+'\x0a')[_0x21fc9e(0xa8,0x10e,-0xf7,0x164)]();}})[_0x4a70d8(0x5d0,0x5c0,0x32b,0x744)](_0x50019f=>_0x50019f)['join'](_0x4749e9['VDpjf']);function _0x8b451(_0x1d5e84,_0x2454c6,_0x52953b,_0x3449e9){return _0x2e98f4(_0x2454c6,_0x3449e9- -0x177,_0x52953b-0xaf,_0x3449e9-0x1ac);}const _0x21ffd3={};_0x21ffd3[_0x4a70d8(0x41d,0x563,0x853,0x74d)+'t']=_0x4a70d8(0x672,0x459,0x1f8,0x591);function _0x4a70d8(_0x2c76d2,_0x477867,_0x18dfbf,_0x4b7d67){return _0x2e98f4(_0x2c76d2,_0x477867-0x1e4,_0x18dfbf-0x1bc,_0x4b7d67-0x126);}_0x21ffd3['url']=aramat[0x2525*0x1+-0x1fa3+-0x582]['url'];const _0x317881={};_0x317881[_0x4a70d8(0x9e6,0x70e,0x820,0x9ba)]=_0x21ffd3;let _0x22088c=[_0x317881];alpha[_0x4a70d8(0x651,0x71c,0x464,0x6f8)+'c'](m[_0x4a70d8(0xb11,0x952,0xba6,0xb35)],_0x31defd,'©\x20'+ownername,_0x4815d1,_0x22088c);})[_0x2e98f4(0x37,0x2c9,0x1a1,0x332)](_0x4fdcdd=>{const _0x1fcd89={'ixomV':function(_0x17df5f,_0x4b393a){return _0x17df5f(_0x4b393a);}};function _0x4aeb6c(_0x4d24a9,_0x47a598,_0x449d15,_0x1c4d47){return _0x2e98f4(_0x47a598,_0x1c4d47-0x189,_0x449d15-0x14d,_0x1c4d47-0x84);}function _0xd96bb1(_0x41c65e,_0x5e90a8,_0x89e56d,_0x171c90){return _0x2e98f4(_0x171c90,_0x5e90a8-0x30c,_0x89e56d-0xe0,_0x171c90-0xe6);}_0x1fcd89[_0xd96bb1(0x8cc,0x7c2,0x7db,0x83f)](reply,lang[_0xd96bb1(0x98e,0xa40,0xa85,0x989)]());});}break;case _0x2e98f4(0x1d6,0x205,0x326,-0xbc):case _0x5546ba(0x5e4,0x63d,0x450,0x1ed):{if(!q)return reply(lang[_0x5546ba(-0x4e,-0x120,0x34,-0x248)+'t'](prefix));srch=''+q,yts(''+srch)[_0x2e98f4(0x18a,0x3b1,0x72,0x47d)](async _0x2c801c=>{const _0x356523={'CHrwz':function(_0x30c028,_0x192f83){return _0x30c028===_0x192f83;},'wfijr':_0x47899c(0x5cc,0x417,0x795,0x484),'jbPhG':_0x27b8f0(0xbc6,0x923,0x94e,0xaf7),'eYLXY':_0x27b8f0(0x66f,0x50e,0x5ea,0x56d),'gTIbQ':_0x47899c(0x5b0,0x595,0x29a,0x4cb),'YOWTP':function(_0x477e99,_0x54f570){return _0x477e99(_0x54f570);},'qyvki':_0x27b8f0(0xb8f,0x8a1,0xa2b,0xa4a)+_0x27b8f0(0x3f6,0x726,0x486,0x901)+'----------'+_0x27b8f0(0x41a,0x726,0x401,0x75a)+'-\x0a'};aramat=_0x2c801c[_0x27b8f0(0x7da,0x546,0x30f,0x3a2)];var _0xf61e19=await _0x356523[_0x47899c(0x649,0x409,0x364,0x86e)](getBuffer,aramat[0x15aa+-0x123*-0x5+-0x1b59][_0x27b8f0(0x833,0x8cc,0x807,0x756)]);let _0x56307d=_0x2c801c[_0x27b8f0(0x6ee,0x546,0x66c,0x563)][_0x47899c(0x7c5,0x939,0xa2c,0x6ae)](_0x3369b3=>{function _0x5cf1fa(_0x2927ed,_0x5e48ce,_0x480fec,_0x29fbce){return _0x27b8f0(_0x2927ed-0x1c3,_0x5e48ce- -0x597,_0x480fec-0x6c,_0x29fbce);}function _0x2b5cb7(_0x1ab92b,_0x23f15d,_0x4949eb,_0x58328f){return _0x27b8f0(_0x1ab92b-0x7d,_0x58328f- -0xe6,_0x4949eb-0x5b,_0x4949eb);}const _0x497d9f={'fmUYH':function(_0x1caee1,_0x315391,_0x33dc4a,_0x3b1965,_0x39341d,_0x16fbeb,_0x157519){return _0x1caee1(_0x315391,_0x33dc4a,_0x3b1965,_0x39341d,_0x16fbeb,_0x157519);},'Qfzse':function(_0x484055,_0x5d09d1){return _0x484055(_0x5d09d1);}};if(_0x356523[_0x2b5cb7(0xc48,0x876,0x905,0x908)](_0x356523[_0x2b5cb7(0x5e3,0x51d,0x3ed,0x3f6)],_0x356523[_0x2b5cb7(0xaca,0xb27,0x79b,0x803)]))_0x497d9f['fmUYH'](_0x55269e,_0x56fac1,_0x73e93d,_0xf791a9,![],'-',_0x581ed0),_0x497d9f[_0x5cf1fa(0x29,0x1e6,0x258,0x3bf)](_0x2b2d20,'Sukses\x20set'+_0x2b5cb7(0x2c9,0x640,0x75f,0x55c)+'age\x20dengan'+_0x5cf1fa(0x41b,0x278,0x34c,0x23a)+_0x1848d3+'*');else switch(_0x3369b3[_0x5cf1fa(0x73,-0x1c,-0x153,0xf2)]){case _0x356523['eYLXY']:return(_0x2b5cb7(0x639,0xa53,0x8cd,0x907)+'\x20*'+_0x3369b3[_0x2b5cb7(0x613,0x90e,0x5a4,0x786)]+(_0x5cf1fa(0x58d,0x55b,0x791,0x64c)+_0x2b5cb7(0x8cf,0x6e5,0x862,0x637))+_0x3369b3[_0x2b5cb7(0xc89,0x796,0xbcd,0x995)]+('\x0a🚀\x20Diuploa'+'d\x20')+_0x3369b3[_0x5cf1fa(0xa9,0x99,0x3cc,0x267)]+(_0x5cf1fa(0x206,0xd4,0x41,0x26d)+'\x20')+_0x3369b3['views']+_0x5cf1fa(-0x2f4,0x37,0x267,0x267)+_0x3369b3[_0x2b5cb7(0x734,0x8fa,0x64d,0x86d)]+_0x2b5cb7(0x52f,0x36f,0x51a,0x50f))[_0x2b5cb7(0x2c3,0x242,0x4f1,0x4af)]();case _0x356523[_0x5cf1fa(0x4ea,0x3c0,0x316,0x701)]:return(_0x2b5cb7(0x24c,0x580,0x75e,0x421)+_0x2b5cb7(0x40c,0x602,0x253,0x4fe)+_0x3369b3[_0x5cf1fa(0x4d1,0x2e3,0x1d1,0x35e)]+_0x2b5cb7(0x4eb,0x884,0x5dd,0x6e1)+_0x3369b3[_0x5cf1fa(0x437,0x3bc,0x1e0,0x275)]+(_0x2b5cb7(0x4ba,0xa8c,0x4e2,0x7fd)+'ber\x20:\x20')+_0x3369b3[_0x5cf1fa(0x5b7,0x2a1,0x191,0x4d7)+_0x2b5cb7(0x53e,0x334,0x290,0x4f9)]+'\x20('+_0x3369b3[_0x5cf1fa(0x648,0x4fe,0x7e5,0x6ad)]+(')\x0a🎦\x20Total\x20'+_0x2b5cb7(0xb67,0x7b7,0x8f8,0x923))+_0x3369b3[_0x2b5cb7(0x69e,0xa09,0x916,0x8d1)]+'\x0a')[_0x2b5cb7(0x266,0x69a,0x398,0x4af)]();}})[_0x47899c(0x49c,0x5bd,0x182,0x1c3)](_0x339c2f=>_0x339c2f)['join'](_0x356523[_0x47899c(0x5ab,0x538,0x7f1,0x801)]);function _0x27b8f0(_0x3fe950,_0x2cafe5,_0x69fb86,_0x36d662){return _0x5546ba(_0x3fe950-0xe,_0x2cafe5-0x17d,_0x2cafe5-0x560,_0x36d662);}const _0x48b823={};_0x48b823['displayTex'+'t']=aramat[-0x1*0x363+-0x2+0x365][_0x47899c(0x64c,0x38c,0x78e,0x586)],_0x48b823[_0x27b8f0(0xb82,0x953,0x78b,0xa49)]=aramat[0x1bd8+-0x10f*0x24+0xa44][_0x47899c(0x733,0x4dd,0x56b,0xa6f)];const _0x29bd35={};_0x29bd35[_0x47899c(0x5ea,0x2f3,0x5ab,0x3eb)]=_0x48b823;const _0x1288cf={};_0x1288cf['displayTex'+'t']=aramat[0x16f1+-0x15b9*0x1+-0x137][_0x27b8f0(0x58d,0x86c,0x6cf,0x61b)];function _0x47899c(_0x5b03f5,_0xb958a8,_0x42402b,_0x41cd1a){return _0x5546ba(_0x5b03f5-0x1f4,_0xb958a8-0x132,_0x5b03f5-0x340,_0x42402b);}_0x1288cf[_0x27b8f0(0x63d,0x953,0xb55,0x612)]=aramat[0x179*-0x1a+0x8*0x27+0x2513][_0x27b8f0(0x85b,0x953,0x7ae,0xb87)];const _0x763143={};_0x763143[_0x47899c(0x5ea,0x619,0x773,0x7a9)]=_0x1288cf;const _0xbc6fb4={};_0xbc6fb4[_0x27b8f0(0x326,0x65f,0x91a,0x649)+'t']=aramat[0xc3e+-0x2481+0x1845][_0x47899c(0x64c,0x77b,0x4ce,0x492)],_0xbc6fb4[_0x47899c(0x733,0x78b,0x931,0x7e4)]=aramat[0xcdc+-0x2*0x261+-0x818][_0x27b8f0(0xb33,0x953,0x74c,0x860)];const _0x570604={};_0x570604[_0x47899c(0x5ea,0x49b,0x355,0x7a5)]=_0xbc6fb4;let _0x10506b=[_0x29bd35,_0x763143,_0x570604];alpha[_0x27b8f0(0x96a,0x818,0x8ca,0xac0)+'c'](m[_0x47899c(0x82e,0x4f6,0x893,0xaf8)],_0x56307d,'©\x20'+ownername,_0xf61e19,_0x10506b);});}break;case _0x2e98f4(0xe3,0x335,0x254,0xb0):case _0x2e98f4(0x885,0x771,0x846,0x853):if(!q)return reply(lang['wrongForma'+'t'](prefix));srch=''+q;var aramas=await yts(srch);aramat=aramas[_0x5546ba(-0x1f6,0x33,-0x1a,-0xd4)];var tbuff=await getBuffer(aramat[-0xdd7*0x1+-0x10fd*-0x1+-0x326][_0x5546ba(0x1bc,0x166,0x36c,0x70)]),ytresult='';ytresult+=_0x5546ba(0x37b,0x661,0x55e,0x38a)+_0x5546ba(-0xd4,-0x2c5,-0x36,0x307),ytresult+=_0x2e98f4(0x2ca,0x20a,0x224,0x2d7)+_0x2e98f4(0x3e9,0x2c6,0x20d,0x25)+_0x5546ba(0x231,0x385,0x388,0x623),aramas[_0x2e98f4(0x48a,0x266,0xdc,0x315)]['map'](_0x3e0386=>{const _0x37c320={};_0x37c320[_0x3f7455(0x760,0x465,0x982,0x667)]=function(_0x43f764,_0xfcb61e){return _0x43f764+_0xfcb61e;},_0x37c320[_0x3f7455(0x40e,-0x13,0x554,0x301)]='🐣\x20Title:\x20',_0x37c320[_0x429158(0x4c6,0x63f,0x479,0x53b)]=function(_0x718324,_0x2871ee){return _0x718324+_0x2871ee;},_0x37c320[_0x3f7455(0x5ac,0x2d9,0x4e7,0x488)]=function(_0x5c9703,_0x1372f7){return _0x5c9703+_0x1372f7;},_0x37c320[_0x3f7455(0x8b3,0x72f,0x941,0x654)]=_0x3f7455(0x5c0,0x495,0x1d7,0x45d),_0x37c320[_0x3f7455(0x608,0x472,0x314,0x5c7)]=_0x3f7455(0x516,0x31f,0x8fd,0x61f);const _0xa13f72=_0x37c320;function _0x429158(_0x55138e,_0x100fe8,_0x24736b,_0x10185f){return _0x2e98f4(_0x24736b,_0x100fe8-0x56,_0x24736b-0xea,_0x10185f-0x117);}ytresult+=_0xa13f72[_0x3f7455(0x606,0x406,0x75a,0x667)](_0xa13f72[_0x3f7455(0x3fa,0x8c,0x303,0x301)],_0x3e0386[_0x429158(0x8b7,0x5e2,0x471,0x6fa)])+'\x0a',ytresult+=_0xa13f72[_0x429158(0x815,0x5d3,0x808,0x552)](_0x429158(0x4aa,0x3a5,0x9d,0x3f4)+_0x3e0386['url'],'\x0a'),ytresult+=_0xa13f72[_0x3f7455(0x8d1,0x46a,0x4f1,0x6d3)]('⏳\x20Durasi:\x20',_0x3e0386[_0x429158(0xa2b,0x7f1,0x881,0x5c8)])+'\x0a',ytresult+=_0xa13f72[_0x3f7455(0x721,0x490,0x4ff,0x6d3)](_0xa13f72[_0x3f7455(0x2d9,0x149,0x1cf,0x488)](_0xa13f72[_0x429158(0x4e1,0x5c0,0x311,0x6ee)],_0x3e0386[_0x3f7455(0x373,0x5f1,0x7fb,0x54f)]),'\x0a');function _0x3f7455(_0x8f0b65,_0x576d10,_0x3f4dbb,_0x31d5e7){return _0x5546ba(_0x8f0b65-0x19c,_0x576d10-0xf,_0x31d5e7-0x36a,_0x3f4dbb);}ytresult+=_0xa13f72['oFGsl'](_0xa13f72[_0x429158(0x32c,0x533,0x33a,0x7d7)],_0x3e0386[_0x429158(0x181,0x3a6,0x19f,0x215)])+('\x0a_________'+_0x3f7455(0x5c3,0x6da,0x4f2,0x3b0)+'_____\x0a\x0a');}),ytresult+='*WHATSAPP-'+_0x5546ba(0x186,0x154,0x10f,0x427);const _0x1269a1={};_0x1269a1[_0x2e98f4(0x5c7,0x5ec,0x5e2,0x6b5)]=tbuff,_0x1269a1[_0x5546ba(-0x93,0x13f,0x299,-0x41)]=ytresult;const _0xb9dcb8={};_0xb9dcb8['quoted']=m,alpha[_0x5546ba(0x615,0x2d8,0x2f9,0x4fc)+'e'](from,_0x1269a1,_0xb9dcb8);break;case _0x5546ba(-0x2b3,-0x8b,-0x6,0x251):case _0x2e98f4(0x80c,0x862,0x5b1,0xb4b)+'k':case _0x2e98f4(0x3ad,0x4a4,0x36e,0x4b1):{if(!text)return reply('Kirim\x20peri'+_0x2e98f4(0x28,0x29f,0xb1,0x1d5)+prefix+(_0x5546ba(0x83f,0x5ec,0x5bd,0x637)+_0x5546ba(0x544,0x28,0x29f,0x474)));reply(lang[_0x5546ba(0x4dd,0x7f1,0x55b,0x283)]());let y=await fetchJson(_0x2e98f4(-0x21,0x2d4,0x2ec,0x550)+_0x2e98f4(0x774,0x6df,0x527,0x89b)+_0x5546ba(0x863,0x53c,0x55f,0x6b5)+q),ppgt=await getBuffer(y[_0x5546ba(0x659,0xb5,0x390,0x96)]),textt=_0x2e98f4(0x5c1,0x71a,0x907,0x5d4)+_0x5546ba(0x1ec,0x69f,0x3a4,0xd8)+_0x2e98f4(0x876,0x6bd,0x978,0x67f)+enter+enter+('📛\x20Username'+'\x20:\x20')+y[_0x5546ba(0x76c,0x34a,0x429,0x227)]+enter+_0x2e98f4(0x4f9,0x6c6,0x99c,0x78c)+y['name']+enter+_0x2e98f4(0x631,0x815,0x4e2,0xab0)+y['id']+enter+('🉑\x20Node\x20ID\x20'+':\x20')+y[_0x2e98f4(0x5aa,0x40d,0x52f,0x3b0)]+enter+(_0x5546ba(0x38e,0x2de,0x482,0x52c)+_0x5546ba(0x665,0x33f,0x33a,0x3a4))+y['followers']+enter+(_0x2e98f4(0x548,0x5a7,0x303,0x735)+_0x5546ba(0x642,0x5a6,0x506,0x417))+y[_0x2e98f4(0x50e,0x5a2,0x505,0x80e)]+enter+_0x5546ba(0x1c3,0x2c0,0x92,-0x30)+y[_0x5546ba(0x312,0x2d5,0x1b,0x355)]+enter+(_0x2e98f4(0x10e,0x22a,0x288,0x222)+':\x20')+y['company']+enter+_0x2e98f4(0x860,0x63d,0x66f,0x4de)+y['blog']+enter+(_0x2e98f4(0xa68,0x86e,0x793,0x9fb)+'\x20:\x20')+y['location']+enter+_0x2e98f4(0x652,0x5f0,0x570,0x35b)+y[_0x2e98f4(0x785,0x472,0x1c3,0x35b)]+enter+_0x5546ba(-0x8b,0x122,0x29d,0x47e)+y[_0x5546ba(0x53f,0x52a,0x331,0x484)]+enter+(_0x5546ba(0x10d,-0x278,0x15,-0x31c)+_0x5546ba(0x42c,0x5cb,0x5df,0x7f4)+'\x20')+y[_0x5546ba(-0x22d,-0xa4,0xd2,0x130)+'ername']+enter+(_0x2e98f4(0x8db,0x6dd,0x765,0x698)+_0x2e98f4(0x3a6,0x2cb,-0x4c,0xd1))+y['public_rep'+'os']+enter+(_0x2e98f4(0x40,0x289,0x519,0x3f1)+'its\x20:\x20')+y['public_gis'+'ts']+enter+(_0x5546ba(0x10e,0x306,0x22e,-0xc7)+':\x20')+moment(y[_0x5546ba(0x792,0x2e0,0x499,0x205)])['tz']('Asia/Jakar'+'ta')[_0x5546ba(0x77,0x12a,0x137,0x3a5)]('id')[_0x5546ba(0x581,0x640,0x406,0x10d)](_0x5546ba(-0x3d,-0x283,0x7c,-0x88)+'D/MM/YYYY')+enter+(_0x2e98f4(0x679,0x7a1,0x5da,0x709)+'\x20')+moment(y[_0x5546ba(0x151,0x5ff,0x481,0x2c9)])['tz']('Asia/Jakar'+'ta')[_0x5546ba(0x3f,-0x105,0x137,-0x4)]('id')[_0x2e98f4(0x8a1,0x686,0x74a,0x68c)]('HH:mm:ss\x20D'+_0x2e98f4(0x2d2,0x2a2,0x2b3,0x26b))+enter+('➿\x20Url\x20:\x20ht'+_0x5546ba(-0x99,-0x289,-0x5b,-0xf)+_0x2e98f4(0x5f8,0x619,0x2e1,0x554))+q;const _0x554000={};_0x554000['displayTex'+'t']=_0x5546ba(0x304,0x616,0x5d8,0x814)+'e',_0x554000[_0x2e98f4(0x93d,0x673,0x75e,0x8f2)]=''+youtube;const _0x2e9465={};_0x2e9465['urlButton']=_0x554000;const _0x32c539={};_0x32c539[_0x5546ba(0x3d0,0x29b,0xff,0xd7)+'t']=_0x5546ba(0x2c9,0x529,0x525,0x711),_0x32c539['id']=_0x2e98f4(0x3ab,0x614,0x5c1,0x7db);const _0x3a4329={};_0x3a4329['quickReply'+_0x2e98f4(0x3aa,0x44b,0x6e5,0x516)]=_0x32c539;const _0x5d8e15={};_0x5d8e15[_0x2e98f4(0x5af,0x37f,0xe2,0x1f1)+'t']='Owner',_0x5d8e15['id']=_0x2e98f4(0x4ac,0x206,-0xfd,0x4d3);const _0x5dbcaf={};_0x5dbcaf[_0x2e98f4(0x451,0x565,0x608,0x2fc)+_0x5546ba(0x4de,-0x8b,0x1cb,0x7f)]=_0x5d8e15;var but=[_0x2e9465,_0x3a4329,_0x5dbcaf];const _0x59dd82={};_0x59dd82['userJid']=m[_0x5546ba(0x383,0x1d6,0x4ee,0x717)],_0x59dd82['quoted']=m,await alpha[_0x2e98f4(0x7ca,0x822,0xb24,0x740)+'g'](from,textt,'©\x20'+ownername,ppgt,but,_0x59dd82);break;}break;case'hitungmate'+_0x5546ba(0x58e,0xc6,0x32b,0xb1):case _0x2e98f4(0x62b,0x7e0,0xa26,0x742):case _0x5546ba(0x2c4,0x74f,0x4b2,0x740):case _0x5546ba(0x419,0x37a,0x318,0x250):case _0x5546ba(0x2d6,0x561,0x497,0x792):{if(kuismath[_0x5546ba(0x60b,0x473,0x4d1,0x3c2)+_0x5546ba(0x766,0x79a,0x5db,0x3da)](m[_0x2e98f4(-0x47,0x259,0x214,0x3e5)]['split']('@')[0x0+0xe1c+-0xe1c]))return reply(_0x5546ba(-0x3d,-0x334,-0x58,-0x10e)+'rcyduk,\x20Ma'+'u\x20Ngecheat'+_0x2e98f4(0x8d5,0x5ae,0x275,0x766));if(!text)return reply(_0x5546ba(0x4df,0x60e,0x3d3,0x4ed)+_0x2e98f4(0x9e2,0x6c9,0x9cd,0x41c)+(prefix+command)+(_0x5546ba(0x6b0,0x2dd,0x5ef,0x3f0)+_0x2e98f4(0x9d3,0x6d5,0x3bd,0x888)+'ontoh\x20:\x20')+(prefix+command)+'\x208\x20+\x209');let val=text['replace'](/[^0-9\-\/+*×÷πEe()piPI/]/g,'')[_0x2e98f4(0x7e2,0x5e4,0x7d0,0x601)](/×/g,'*')[_0x2e98f4(0x844,0x5e4,0x70c,0x3c6)](/÷/g,'/')[_0x5546ba(0x246,0x4cf,0x364,0x37e)](/π|pi/gi,_0x5546ba(0x37a,0x416,0x2f8,0x573))['replace'](/e/gi,_0x2e98f4(0x1b9,0x484,0x4f8,0x508))[_0x2e98f4(0x5bf,0x5e4,0x743,0x7a0)](/\/+/g,'/')[_0x5546ba(0x64c,0x51f,0x364,0x22d)](/\++/g,'+')['replace'](/-+/g,'-'),format=val[_0x5546ba(0x86,0x5ae,0x364,0x632)](/Math\.PI/g,'π')['replace'](/Math\.E/g,'e')[_0x5546ba(0x35f,0x3bc,0x364,0x2a6)](/\//g,'÷')['replace'](/\*×/g,'×');try{console['log'](val);let result=new Function('return\x20'+val)();if(!result)throw result;reply('Hasil\x20Dari'+'\x20*'+format+_0x2e98f4(0x693,0x4cc,0x1e3,0x187)+result+'_');}catch(_0x17b850){if(_0x17b850==undefined)reply(_0x2e98f4(0x657,0x60c,0x394,0x77a));reply(_0x2e98f4(0x20f,0x361,0x4ed,0x11a)+_0x5546ba(0x6c8,0x6b2,0x58b,0x516)+_0x5546ba(0x437,0xf4,0x2fc,0xfe)+'mbol\x20-,\x20+,'+_0x5546ba(0x4a1,0x4a8,0x4c0,0x1f8)+_0x5546ba(0x76,0xd1,0x274,0x2d4)+_0x2e98f4(0x579,0x78e,0x738,0x479)+_0x5546ba(0x72a,0x46e,0x3f6,0x62b));}}break;case'ttp':case _0x5546ba(0x646,0x33e,0x30b,0x298):if(!text)return reply(_0x5546ba(0x536,0x299,0x3d3,0x5ed)+_0x2e98f4(0x865,0x6c9,0x7b6,0x565)+(prefix+command)+_0x2e98f4(0x52a,0x5eb,0x451,0x529));const _0x2a83f2={};_0x2a83f2[_0x5546ba(0x5d,-0x21f,-0x4e,-0x1b9)]=global[_0x2e98f4(0x310,0x232,0x2bc,-0x50)],_0x2a83f2[_0x2e98f4(0x55e,0x2b3,0x42c,0x3e8)]=global['author'];let encmedia=await alpha['sendMediaA'+_0x2e98f4(0x844,0x7fb,0x76b,0xb0b)](m[_0x2e98f4(0x66e,0x76e,0x61d,0x4ff)],_0x2e98f4(0x765,0x7fa,0x794,0x50c)+'eam.xyz/'+command+('?file&text'+'=')+text,m,_0x2a83f2);await fs[_0x2e98f4(0x887,0x825,0x665,0x639)](encmedia);break;case'tomp4':case _0x2e98f4(0x370,0x482,0x5a5,0x52c):{if(!quoted)throw _0x5546ba(0x70e,0x69c,0x5f0,0x3d0)+'e';if(!/webp/['test'](mime))throw _0x5546ba(0x670,0x454,0x4e8,0x1c3)+'er\x20dengan\x20'+_0x2e98f4(0x1a5,0x3f0,0x1b8,0x6a8)+(prefix+command)+'*';m[_0x2e98f4(0x1bc,0x3b4,0x142,0x6a7)](lang['wait']());let media=await alpha[_0x5546ba(0x642,0x4b2,0x4b1,0x360)+_0x2e98f4(0x2fd,0x21f,0x2c6,0x31c)+_0x2e98f4(0x5d3,0x4a5,0x2b0,0x414)](quoted),webpToMp4=await webp2mp4File(media);const _0x4b1f6e={};_0x4b1f6e[_0x2e98f4(0x793,0x673,0x934,0x7f8)]=webpToMp4['result'],await alpha[_0x5546ba(0x3ee,0x386,0x2f9,0x20c)+'e'](m[_0x2e98f4(0x5ff,0x76e,0xa20,0x9c0)],{'video':_0x4b1f6e,'caption':lang['ok']()},{'quoted':m}),await fs[_0x2e98f4(0x729,0x825,0x5bd,0x723)](media);}break;case _0x2e98f4(0x6bc,0x384,0x6ad,0x578):{if(!quoted)throw _0x5546ba(0x6a7,0x630,0x5f0,0x91e)+'e';if(!/webp/[_0x5546ba(0x4a8,0x518,0x20c,0x4e4)](mime))throw'balas\x20stik'+'er\x20dengan\x20'+'caption\x20*'+(prefix+command)+'*';reply(lang['wait']());let media=await alpha['downloadAn'+_0x5546ba(0x287,0x58,-0x61,-0xd)+_0x2e98f4(0x750,0x4a5,0x707,0x672)](quoted),webpToMp4=await webp2mp4File(media);const _0x4e897a={};_0x4e897a[_0x2e98f4(0x6db,0x673,0x427,0x35c)]=webpToMp4['result'],await alpha['sendMessag'+'e'](m[_0x5546ba(0x4c8,0x7ae,0x4ee,0x40d)],{'video':_0x4e897a,'caption':lang['ok'](),'gifPlayback':!![]},{'quoted':m}),await fs[_0x2e98f4(0x8bd,0x825,0x5f6,0x516)](media);}break;case _0x5546ba(0xe2,0x293,0x2d6,0x439):{if(!quoted)return reply(_0x2e98f4(0xa4a,0x75a,0xa7e,0x694)+'y\x20Media\x20De'+_0x2e98f4(0x10d,0x325,0x296,0x528)+_0x5546ba(0x42b,0x3a7,0x2c0,0x103)+(prefix+command));reply(mess[_0x2e98f4(0x811,0x7db,0x839,0x8fc)]);if(!/webp/[_0x5546ba(0xe7,-0x63,0x20c,0x4c8)](mime)&&/image|video|gif/[_0x2e98f4(0x4d9,0x48c,0x468,0x687)](mime)){let media=await alpha[_0x2e98f4(0x8b6,0x731,0x6af,0x83f)+'dSaveMedia'+_0x2e98f4(0x296,0x4a5,0x6b7,0x1b2)](quoted),anu=await TelegraPh(media);reply(util[_0x5546ba(0x475,0x5f1,0x406,0x2a0)](anu)),await fs['unlinkSync'](media);}else{if(!/video|gif/[_0x5546ba(0xdc,0x45f,0x20c,-0x5b)](mime)){let media=await m[_0x5546ba(0x422,0x9a,0x2fa,0x241)+'er'](quoted),anu=await fileIO(media,mime[_0x2e98f4(0x14b,0x2d8,0x5e2,-0x4e)]('/')[-0x29f+-0x2*-0x10e3+-0x1f26]);reply(util[_0x2e98f4(0x821,0x686,0x637,0x57a)](anu[_0x5546ba(-0x113,0x28,0x113,0x26c)]+'\x20('+anu['mimeType']+')'));}}}break;case'halloween2':case'horror':case'game8bit':case _0x2e98f4(0x8fc,0x86a,0x8b0,0x67d):case _0x5546ba(-0x368,0x182,-0x71,-0x206):case _0x2e98f4(0x3e2,0x474,0x49d,0x6e0):case _0x2e98f4(0x6a6,0x365,0x367,0x645):case _0x2e98f4(-0x93,0x1f6,0x20,0x425):case _0x2e98f4(0x433,0x2d0,0x3b5,0x517):case'gtiktok':case _0x5546ba(0x50a,0x372,0x3d0,0x5f6):case'marvel':case'marvel2':case _0x5546ba(0x19e,-0x2e,-0x90,-0xa):case'avengers':case _0x2e98f4(0x7e4,0x59d,0x6b4,0x3f9):case'metalg':case _0x5546ba(0x110,-0x22,0x125,0x2f8):case _0x5546ba(0x565,0x5d6,0x528,0x5da):case _0x5546ba(0xf6,0x353,0x231,0x2d0):case _0x5546ba(0x61,0x31a,0x2b7,-0x7e):case _0x5546ba(0x405,0x4d3,0x3bb,0x4cd):case _0x5546ba(0x35d,0x69b,0x475,0x23d):case'3dsteel':case _0x5546ba(0x792,0x4e8,0x4a0,0x5f1):case _0x2e98f4(0x4e0,0x31b,0x271,0x566):case _0x5546ba(0x54f,0x4cc,0x434,0x3cf):{if(!text)return reply(_0x5546ba(0x46a,0xca,0x3d3,0x55c)+'ntah\x20'+(prefix+command)+(_0x2e98f4(0x529,0x63f,0x356,0x582)+'fc*'));if(!text[_0x2e98f4(0x68d,0x81e,0x924,0x8c7)]('|'))return reply(_0x5546ba(0x531,0xd6,0x3d3,0x532)+_0x2e98f4(0x523,0x6c9,0x69a,0x7e7)+(prefix+command)+('\x20*zeeone|o'+_0x5546ba(0xae,0x644,0x3a5,0x65)));mm=args[_0x2e98f4(0x6d7,0x827,0x4e6,0x7d3)]('\x20'),m1=mm['split']('|')[0x26d4+-0xec8+-0x180c],m2=mm['split']('|')[0x1cae+-0x173d+0x3*-0x1d0],reply(lang['wait']());const _0xace12e={};_0xace12e[_0x2e98f4(0x4a7,0x3e4,0x245,0x57d)]=alphabot,_0xace12e[_0x2e98f4(0x555,0x65f,0x7f4,0x3a4)]=m1,_0xace12e['text2']=m2;let texproo=global['api'](global[_0x5546ba(-0x6e,0x207,0x12e,0x3d3)][_0x5546ba(0x184,0x585,0x432,0x33c)],_0x5546ba(0x684,0x3d9,0x448,0x5e2)+_0x5546ba(0x397,-0x19c,0x18f,0x2ff)+command,_0xace12e);sendFileFromUrl(from,texproo,lang['ok'](),m)[_0x5546ba(-0x21f,0x1d9,0x49,-0x277)](_0x2adb98=>{const _0x1d8d18={'hAXvT':function(_0x1ced43,_0x387d73){return _0x1ced43(_0x387d73);}};function _0x19b925(_0x33b562,_0x327818,_0x17691c,_0x4c998){return _0x2e98f4(_0x33b562,_0x17691c-0x53,_0x17691c-0xbf,_0x4c998-0x1f0);}function _0xaf9b36(_0x12bfbe,_0x5c31ae,_0x29f2a3,_0x2c8b91){return _0x2e98f4(_0x12bfbe,_0x5c31ae-0xd6,_0x29f2a3-0x106,_0x2c8b91-0x96);}_0x1d8d18[_0x19b925(0x481,0x63d,0x797,0x4c3)](reply,lang[_0x19b925(0x7f0,0x7a0,0x787,0x6d8)]());});}break;case'sendsesi':case _0x2e98f4(0x52b,0x663,0x39c,0x517):case _0x5546ba(0x33a,0x1f5,0x2d,0x29f)+'n':if(!m[_0x5546ba(0x6a6,0x44a,0x46b,0x57e)][_0x5546ba(0xf5,0x24a,0x2c6,0x5a6)]&&!isCreator)return reply(mess[_0x5546ba(0xdc,0xdb,-0x7a,-0x23a)]);alpha[_0x5546ba(0x180,0x310,0x2f9,0x526)+'e'](m['chat'],{'document':fs[_0x5546ba(0x349,0x1e3,0x262,0x252)+'nc'](sessionName+_0x5546ba(0x397,0x109,0x32a,0x53d)),'mimetype':_0x5546ba(0x2dc,0x42c,0x21c,-0x109),'fileName':'session-mu'+_0x5546ba(0x17e,0x2f3,0x3b1,0x1f0)+_0x2e98f4(0x5f5,0x5aa,0x6e9,0x511)},{'quoted':m});break;case _0x5546ba(0x8a,-0x23f,-0x8,0x28a):const _0x240e86={};_0x240e86[_0x2e98f4(0x43a,0x58c,0x52b,0x8af)]=_0x5546ba(0x186,0x280,0x269,0x518)+_0x5546ba(0x194,0x33d,0x2c8,0x572),_0x240e86[_0x5546ba(0x597,0x446,0x294,0x52)]=_0x5546ba(0x10d,0x4fd,0x1de,0x1aa),_0x240e86['descriptio'+'n']=_0x2e98f4(0x741,0x7e3,0x7c8,0x940)+_0x5546ba(-0x3,-0x2e,0x191,0x2a4);const _0x5656ae={};_0x5656ae[_0x5546ba(0x17f,0x206,0x30c,0x5a3)]=_0x5546ba(-0x66,0x234,0x9a,-0x219)+'ot',_0x5656ae[_0x2e98f4(0x5b8,0x7f6,0xa8e,0x68f)]=[_0x240e86];const _0x1ff0fb={};_0x1ff0fb[_0x5546ba(0x1f,0x64f,0x30c,0x4f2)]=_0x5546ba(0x55b,-0x2b,0x2fb,0x3ac)+_0x2e98f4(0x379,0x431,0x2a2,0x440)+_0x5546ba(0x3af,0x3d1,0x41b,0x226),_0x1ff0fb[_0x5546ba(0x23d,0x15e,0x294,0x52a)]='infocmd',_0x1ff0fb[_0x2e98f4(0x229,0x2b1,0x321,0xb4)+'n']=_0x5546ba(0x7f,0x178,0x29,-0x2d1)+_0x5546ba(0x721,0x80a,0x57e,0x786)+_0x5546ba(0x33b,0x40c,0x5de,0x73a)+_0x2e98f4(0x5d4,0x4b9,0x24c,0x62c);const _0x392c4f={};_0x392c4f[_0x2e98f4(0x54b,0x58c,0x77b,0x664)]=_0x5546ba(0x5a9,0x505,0x414,0x161)+_0x2e98f4(0x3a2,0x511,0x841,0x496),_0x392c4f[_0x5546ba(0x37f,0x87b,0x576,0x5c1)]=[_0x1ff0fb];const _0x2d164c={};_0x2d164c[_0x5546ba(0x47a,0x1c0,0x30c,0x503)]=_0x5546ba(0xcf,-0x1ea,0x153,0x411)+_0x5546ba(-0x1a8,0x22e,-0x51,0x1e6),_0x2d164c[_0x5546ba(0x114,0x311,0x294,0xdd)]='ownercmd',_0x2d164c[_0x5546ba(-0x305,-0x2e5,0x31,-0x21e)+'n']=_0x2e98f4(0x621,0x2e6,0x158,0x5b7)+_0x5546ba(-0x75,-0x1e8,-0x22,0x1fb)+_0x2e98f4(0x488,0x781,0x8e7,0x8f4);const _0x2a6b1f={};_0x2a6b1f['title']=_0x2e98f4(0x910,0x694,0x506,0x544)+_0x5546ba(0x619,0x45d,0x5e9,0x4c0),_0x2a6b1f[_0x2e98f4(0x6ec,0x7f6,0x9c3,0x81b)]=[_0x2d164c];const _0x32f1b7={};_0x32f1b7[_0x5546ba(0x568,0x2d2,0x30c,0x5e2)]=_0x5546ba(0x442,0x465,0x2ac,0x4f9)+_0x5546ba(-0x45,0x19d,0x55,0x1ce)+'d',_0x32f1b7[_0x5546ba(0x69,0x430,0x294,0x288)]='databasecm'+'d',_0x32f1b7[_0x5546ba(-0xb1,0x369,0x31,0x33e)+'n']=_0x5546ba(0x539,0x563,0x343,0xce)+_0x5546ba(0x133,0xd3,0x1d,0x301)+_0x2e98f4(0x6ac,0x5ff,0x530,0x79d)+_0x5546ba(-0x71,0x224,0x1b2,0x1cf);const _0x5e2ccc={};_0x5e2ccc['title']=_0x5546ba(0x62a,0x1a4,0x414,0x3a5)+_0x5546ba(0x715,0x3e1,0x5ab,0x85b),_0x5e2ccc[_0x5546ba(0x742,0x82b,0x576,0x3e2)]=[_0x32f1b7];const _0x20929e={};_0x20929e[_0x2e98f4(0x8a2,0x58c,0x566,0x2a3)]='👥\x20〉ɞ\x20Group'+_0x2e98f4(0x88,0x22f,-0x7f,0xd9),_0x20929e['rowId']=_0x2e98f4(0x2bc,0x55e,0x535,0x4e6),_0x20929e['descriptio'+'n']=_0x5546ba(0x34,0x81,0x1fd,0x50d)+_0x5546ba(-0x11d,0x24d,0xdf,0x34e)+'khusus\x20gro'+_0x5546ba(0x841,0x5b9,0x4fc,0x5b4);const _0x34458a={};_0x34458a['title']=_0x2e98f4(0x438,0x694,0x89e,0x9d0)+'e-4',_0x34458a[_0x2e98f4(0x9cc,0x7f6,0x4bf,0x557)]=[_0x20929e];const _0x22cfff={};_0x22cfff[_0x5546ba(0x423,0x3f9,0x30c,0xdf)]=_0x2e98f4(0x67a,0x764,0x99b,0x530)+_0x2e98f4(0x548,0x22f,0x317,-0x65),_0x22cfff[_0x2e98f4(0x316,0x514,0x1cf,0x2e6)]=_0x5546ba(-0x77,-0x72,0x0,0xc8),_0x22cfff[_0x5546ba(0x34f,-0x1b0,0x31,0x2f7)+'n']='\x0a_Mencari\x20'+_0x2e98f4(0x4d5,0x697,0x72d,0x623)+_0x2e98f4(0xa46,0x7d6,0x5b9,0x79d);const _0xdc3534={};_0xdc3534[_0x2e98f4(0x621,0x58c,0x440,0x551)]='Sub\x20Menu\x20K'+_0x5546ba(0x1a1,0x180,0x41f,0x537),_0xdc3534[_0x5546ba(0x336,0x4a0,0x576,0x4b6)]=[_0x22cfff];const _0x55702a={};_0x55702a[_0x5546ba(0x267,0xfd,0x30c,0x359)]='⚠️\x20〉ɞ\x20Tag\x20C'+_0x2e98f4(0x36c,0x61c,0x515,0x6f2),_0x55702a[_0x2e98f4(0x828,0x514,0x22e,0x6c3)]='tagcmd',_0x55702a[_0x5546ba(0x2a2,0x263,0x31,0x29e)+'n']=_0x5546ba(0x42b,0x38,0x140,-0x19c)+_0x5546ba(0x1ac,0x462,0x1c0,0x2c)+_0x5546ba(0x5e8,0x1a6,0x337,0x8c);const _0x36e88b={};_0x36e88b[_0x5546ba(0x4af,0x224,0x30c,0x3ae)]=_0x2e98f4(0x39f,0x694,0x393,0x98b)+_0x5546ba(0x2b4,0x15d,0x46c,0x222),_0x36e88b[_0x5546ba(0x47b,0x7f3,0x576,0x778)]=[_0x55702a];const _0x5a9d67={};_0x5a9d67[_0x2e98f4(0x36e,0x58c,0x41a,0x52d)]=_0x5546ba(0x2b2,0x156,0xb1,0x1d)+'ing\x20Comman'+'d',_0x5a9d67['rowId']=_0x2e98f4(0x2e1,0x56c,0x854,0x478),_0x5a9d67[_0x5546ba(-0x2ce,0x306,0x31,-0xdd)+'n']=_0x5546ba(0x6f7,0x3bc,0x49f,0x28f)+'osmed\x20oran'+'g_';const _0x3c23e0={};_0x3c23e0['title']=_0x2e98f4(0x94b,0x694,0x7a0,0x546)+_0x5546ba(0x1b7,0x34b,0x29e,0x207),_0x3c23e0['rows']=[_0x5a9d67];const _0x1d4f06={};_0x1d4f06[_0x2e98f4(0x3e0,0x58c,0x7ae,0x6ee)]=_0x5546ba(0x354,0x228,0x63,0x1ca)+_0x5546ba(0x145,-0x4d,0x298,0x371),_0x1d4f06['rowId']=_0x2e98f4(0x16a,0x24d,0x81,0x3d4),_0x1d4f06['descriptio'+'n']=_0x2e98f4(0x8b,0x2a9,0x271,0x551)+_0x2e98f4(0x432,0x237,-0x10d,0x1e)+_0x2e98f4(-0x8e,0x1fe,0x372,0x3b9)+_0x5546ba(0x215,0x20,0x2c9,0x57d);const _0x6412d5={};_0x6412d5[_0x5546ba(0x1d0,0x195,0x30c,0x3b2)]='Sub\x20Menu\x20K'+'e-8',_0x6412d5[_0x2e98f4(0x836,0x7f6,0xa9d,0x672)]=[_0x1d4f06];const _0x37539b={};_0x37539b['title']=_0x2e98f4(0x7fc,0x5f7,0x784,0x7cd)+_0x2e98f4(0x8ee,0x665,0x888,0x58c)+'nd',_0x37539b['rowId']=_0x2e98f4(0x3f2,0x44a,0x637,0x1b1)+'md',_0x37539b[_0x2e98f4(0xd,0x2b1,0x2b1,0x320)+'n']=_0x5546ba(0xf3,-0x5,0x122,-0x11f)+_0x2e98f4(0x34c,0x262,0x300,0x255)+_0x2e98f4(0x7a0,0x595,0x5c6,0x55c)+'bot_';const _0x4242f0={};_0x4242f0['title']=_0x2e98f4(0x605,0x694,0x66b,0x60a)+_0x2e98f4(0xa3,0x386,0x3b8,0x29c),_0x4242f0[_0x5546ba(0x42c,0x237,0x576,0x4cd)]=[_0x37539b];const _0x1c1a4c={};_0x1c1a4c[_0x2e98f4(0x3e4,0x58c,0x310,0x526)]='🖼️\x20〉ɞ\x20Image'+_0x2e98f4(0x298,0x230,-0x10a,0x29)+_0x5546ba(0x438,0x1db,0x41b,0x559),_0x1c1a4c['rowId']=_0x5546ba(0x5f4,0x5e8,0x3a3,0x1af),_0x1c1a4c[_0x2e98f4(0x5c6,0x2b1,0x1bb,0x4f2)+'n']=_0x5546ba(0x298,0x4a6,0x57f,0x80d)+_0x2e98f4(0x417,0x6ba,0x638,0x5c9)+'i\x20lebih\x20me'+_0x2e98f4(0x6c1,0x567,0x796,0x4d6);const _0x52930d={};_0x52930d[_0x5546ba(0x5e9,-0x2b,0x30c,0x561)]=_0x2e98f4(0x74b,0x694,0x9ae,0x445)+_0x5546ba(0x2b5,0x2be,0x51e,0x20a),_0x52930d['rows']=[_0x1c1a4c];const _0x4425d0={};_0x4425d0[_0x2e98f4(0x4bf,0x58c,0x6d3,0x5ed)]=_0x5546ba(0xb5,-0x1ea,0xca,-0x168)+'er\x20Effect\x20'+_0x5546ba(-0x89,-0x19,-0x41,-0x36),_0x4425d0[_0x5546ba(0x230,0x1e1,0x294,0x2fb)]=_0x2e98f4(0x6b2,0x623,0x713,0x550)+'2',_0x4425d0['descriptio'+'n']=_0x5546ba(0x3b3,0x81f,0x57f,0x7af)+_0x2e98f4(0x143,0x44f,0x2a7,0x37a)+_0x5546ba(0x2ce,0x6b1,0x52e,0x833);const _0x51b75d={};_0x51b75d[_0x2e98f4(0x82e,0x58c,0x459,0x778)]=_0x2e98f4(0x434,0x694,0x759,0x4a0)+_0x5546ba(0x2de,0x3da,0x5e6,0x49e),_0x51b75d[_0x5546ba(0x667,0x832,0x576,0x697)]=[_0x4425d0];const _0x4e33f8={};_0x4e33f8[_0x5546ba(0x1ec,0xc6,0x30c,0x4ea)]=_0x5546ba(0x397,-0x17a,0x139,-0x97)+'oader\x20Comm'+_0x5546ba(-0x2,0xda,0x19f,0x1),_0x4e33f8[_0x2e98f4(0x5a8,0x514,0x2ec,0x543)]=_0x5546ba(0x4aa,0x436,0x4e3,0x6d8)+_0x5546ba(-0x20e,-0x163,-0x13,-0x2e6),_0x4e33f8[_0x2e98f4(0x5dd,0x2b1,0x3df,0x16a)+'n']=_0x2e98f4(0x1b7,0x47d,0x442,0x7b2)+'kan\x20fitur\x20'+'download_';const _0x5e925d={};_0x5e925d[_0x5546ba(0x379,0x57e,0x30c,0x1c)]=_0x2e98f4(0x877,0x694,0x64c,0x68a)+'e-12',_0x5e925d['rows']=[_0x4e33f8];const _0x8113a5={};_0x8113a5['title']=_0x2e98f4(0xa48,0x84d,0x756,0x80b)+_0x5546ba(0xc1,0x4f6,0x2a7,0x2ed)+_0x5546ba(0x700,0x3a8,0x41b,0x41b),_0x8113a5[_0x2e98f4(0x7f4,0x514,0x623,0x334)]='ranimecmd',_0x8113a5[_0x2e98f4(0x1da,0x2b1,0x4cb,-0x6f)+'n']='\x0a_Random\x20s'+_0x2e98f4(0x409,0x52e,0x610,0x213)+'e_';const _0x424deb={};_0x424deb[_0x2e98f4(0x818,0x58c,0x6e4,0x32d)]=_0x5546ba(0x5d4,0x519,0x414,0x634)+'e-13',_0x424deb['rows']=[_0x8113a5];const _0x33902d={};_0x33902d[_0x2e98f4(0x43d,0x58c,0x865,0x727)]=_0x5546ba(0x1f9,0x245,0x2e4,0xf2)+_0x2e98f4(0x86c,0x6f6,0x660,0x60f)+_0x2e98f4(0x542,0x41f,0x3f1,0x20d),_0x33902d[_0x2e98f4(0x72d,0x514,0x379,0x83d)]='nsfwcmd',_0x33902d['descriptio'+'n']='\x0a_Random\x20i'+_0x5546ba(0x316,0xbd,0x1e3,0x182)+_0x2e98f4(0x555,0x359,0x3b3,0x15b);const _0x3e35c8={};_0x3e35c8[_0x2e98f4(0x7a9,0x58c,0x637,0x79f)]=_0x5546ba(0x37d,0x1c3,0x414,0x273)+'e-14',_0x3e35c8[_0x2e98f4(0xb01,0x7f6,0xab4,0x6f1)]=[_0x33902d];const _0x5e1d0b={};_0x5e1d0b[_0x2e98f4(0x59b,0x58c,0x405,0x5eb)]=_0x2e98f4(0x5e1,0x318,0x553,-0x1b)+_0x2e98f4(0x52e,0x4ad,0x329,0x3fb)+'d',_0x5e1d0b[_0x5546ba(0x4fc,0x367,0x294,0x1ab)]=_0x5546ba(0x2d9,0x405,0x5e3,0x6a5),_0x5e1d0b[_0x5546ba(-0x27,-0x42,0x31,0x11c)+'n']=_0x2e98f4(0x596,0x3f9,0xd1,0x3e7)+_0x5546ba(0x2d8,0x3c9,0x2ef,0x567)+_0x2e98f4(0x341,0x475,0x5c2,0x2c5)+_0x2e98f4(0x57,0x239,0x202,-0x10b);const _0x66fd18={};_0x66fd18['title']=_0x5546ba(0x398,0x5ad,0x414,0x111)+_0x2e98f4(0x425,0x3a7,0x6a0,0x4ab),_0x66fd18[_0x5546ba(0x6ae,0x87c,0x576,0x48d)]=[_0x5e1d0b];const _0x47eb07={};_0x47eb07[_0x5546ba(0x1e5,0x636,0x30c,0x593)]='🌁\x20〉ɞ\x20Other'+'s\x20Command',_0x47eb07[_0x5546ba(0xa1,0x223,0x294,0xcb)]=_0x2e98f4(0x626,0x64d,0x97d,0x7ad),_0x47eb07[_0x5546ba(0x35b,-0x1f5,0x31,-0x1dc)+'n']='\x0a_Tanpa\x20ka'+_0x5546ba(0x387,0x3e6,0x33c,0x16f);const _0x423283={};_0x423283[_0x2e98f4(0x48c,0x58c,0x65b,0x466)]=_0x5546ba(0x43e,0x2a2,0x414,0x184)+'e-16',_0x423283[_0x2e98f4(0x67e,0x7f6,0x5e0,0xa05)]=[_0x47eb07];const _0x164844={};_0x164844[_0x5546ba(0x544,0x102,0x30c,0x316)]=_0x5546ba(0xcb,0x15,-0x7d,0x57)+_0x2e98f4(-0x90,0x22f,0x3ac,0x49c),_0x164844[_0x5546ba(0x2d8,0x467,0x294,0x48a)]=_0x5546ba(0x518,0x80b,0x545,0x240),_0x164844[_0x5546ba(0x30d,-0x164,0x31,-0x2fc)+'n']='\x0a_Fitur\x20un'+_0x5546ba(0x4a0,-0x169,0x17c,0x2e5)+'n\x20dengan\x20b'+_0x2e98f4(0x6f2,0x668,0x97b,0x451);const _0x49f6ed={};_0x49f6ed['title']='Sub\x20Menu\x20K'+_0x5546ba(0x3c4,0x402,0x39b,0x19f),_0x49f6ed[_0x5546ba(0x4ce,0x26c,0x576,0x426)]=[_0x164844];const _0x1396ee={};_0x1396ee[_0x2e98f4(0x35d,0x58c,0x3ed,0x66e)]=_0x2e98f4(0x814,0x5dc,0x4fb,0x833)+_0x2e98f4(0x3df,0x3f8,0x518,0x526),_0x1396ee['rowId']=_0x2e98f4(0x4bf,0x68f,0x7de,0x7d8),_0x1396ee['descriptio'+'n']=_0x5546ba(0x515,0x370,0x1ee,0xd0)+'ideo\x20tikto'+'k_';const _0x1fb8e8={};_0x1fb8e8[_0x5546ba(0x165,0x51a,0x30c,0x2f1)]='Sub\x20Menu\x20K'+'e-18',_0x1fb8e8[_0x5546ba(0x436,0x7dd,0x576,0x33b)]=[_0x1396ee];const _0x45a535={};_0x45a535[_0x2e98f4(0x575,0x58c,0x276,0x699)]=_0x2e98f4(0x139,0x2a6,0x112,0x336)+_0x2e98f4(0x9c,0x22f,0x6c,0x1de),_0x45a535[_0x2e98f4(0x3cd,0x514,0x818,0x81d)]=_0x5546ba(0x1e8,0x4a0,0x255,0x126),_0x45a535[_0x5546ba(-0x151,-0x2bb,0x31,-0x1b9)+'n']=_0x2e98f4(0x7d4,0x785,0x830,0x91a)+'ambar\x20cewe'+_0x2e98f4(0x68e,0x512,0x3a5,0x4be);const _0x4a532c={};_0x4a532c[_0x2e98f4(0x7c2,0x58c,0x7f5,0x253)]=_0x5546ba(0x3df,0x6e6,0x414,0x4a1)+'e-19',_0x4a532c[_0x5546ba(0x2a6,0x684,0x576,0x6c8)]=[_0x45a535];const _0x43df9a={};_0x43df9a[_0x2e98f4(0x79d,0x58c,0x668,0x879)]='🌟\x20〉ɞ\x20Primb'+_0x2e98f4(0x3f8,0x2ea,0x134,0x85),_0x43df9a[_0x5546ba(0x365,0x57f,0x294,0x56)]=_0x2e98f4(0x6bb,0x5d0,0x895,0x5be),_0x43df9a[_0x5546ba(0xc7,-0x13f,0x31,-0x27c)+'n']='\x0a_Ramalan\x20'+_0x2e98f4(0x5d6,0x5e6,0x6f1,0x7c3);const _0xf1f32={};_0xf1f32['title']=_0x5546ba(0x33b,0x541,0x414,0x356)+'e-20',_0xf1f32[_0x2e98f4(0x9bb,0x7f6,0x761,0x513)]=[_0x43df9a];const _0x436552={};_0x436552[_0x5546ba(0x64,-0x2e,0x30c,0x48f)]='🥁\x20〉ɞ\x20Teles'+_0x2e98f4(0x33d,0x3cc,0x4f1,0x317)+_0x2e98f4(0x607,0x2d9,0x65,0x25f),_0x436552[_0x5546ba(0x6b,0x413,0x294,0x1d6)]=_0x5546ba(0x353,0x20d,0x4d3,0x317),_0x436552[_0x5546ba(-0x119,0x1ef,0x31,-0x312)+'n']=_0x2e98f4(0x7f3,0x6a4,0x637,0x41e)+_0x2e98f4(0x20f,0x476,0x3db,0x190)+'\x20telegram_';const _0x153ab0={};_0x153ab0['title']=_0x5546ba(0x372,0x73e,0x414,0x4fb)+_0x2e98f4(0x5ab,0x7f7,0x4b5,0x9d5),_0x153ab0[_0x2e98f4(0x7c2,0x7f6,0xa92,0xa64)]=[_0x436552];const _0x325afb={};_0x325afb[_0x5546ba(0x7,0x4b2,0x30c,0x2ee)]=_0x5546ba(0x231,0x378,0x2cf,0x55b)+'o360\x20Comma'+'nd',_0x325afb[_0x2e98f4(0x56f,0x514,0x61a,0x753)]='ephotocmd',_0x325afb[_0x2e98f4(0x46f,0x2b1,0x472,0x22d)+'n']=_0x5546ba(0x2c3,0x4d1,0x57f,0x8ba)+'logo\x20keren'+_0x5546ba(0x47c,0x365,0x37b,0x4eb)+'t_';const _0x7fc495={};_0x7fc495['title']='Sub\x20Menu\x20K'+'e-22',_0x7fc495['rows']=[_0x325afb];const _0x4263c7={};_0x4263c7[_0x2e98f4(0x5a0,0x58c,0x3f2,0x543)]='🎧\x20〉ɞ\x20Sound'+'\x20Command',_0x4263c7[_0x5546ba(0x494,0xb8,0x294,0x153)]=_0x5546ba(0x5ab,0x479,0x344,0x33b),_0x4263c7[_0x5546ba(0x276,0xe5,0x31,-0x1b6)+'n']=_0x5546ba(0x29a,0x6fd,0x424,0x1c3)+_0x2e98f4(0x4ee,0x46d,0x5b9,0x3f4);const _0x35f55f={};_0x35f55f[_0x5546ba(0xf2,0x5bf,0x30c,0x3d0)]=_0x5546ba(0x74f,0x373,0x414,0x3e6)+_0x5546ba(0xb9,0x1c,0x2ca,0x32b),_0x35f55f[_0x2e98f4(0x610,0x7f6,0x9be,0x4da)]=[_0x4263c7];const _0x5c62a0={};_0x5c62a0[_0x5546ba(-0x4,0xb2,0x30c,0x5e1)]=_0x2e98f4(0x54b,0x4ef,0x4b8,0x3a2)+_0x2e98f4(0x53c,0x699,0x53d,0x583)+_0x2e98f4(0x1b9,0x41f,0x33c,0x462),_0x5c62a0[_0x5546ba(0x4f1,0x4ef,0x294,0x2ec)]='logocmd',_0x5c62a0[_0x2e98f4(0x43b,0x2b1,0x1cb,0x6b)+'n']=_0x5546ba(0x509,0x716,0x57f,0x2c4)+_0x2e98f4(0x311,0x3cd,0x139,0x678)+_0x2e98f4(0x222,0x2a8,0x1f8,-0xb);const _0x45badf={};_0x45badf[_0x5546ba(0xff,0x443,0x30c,0x4ec)]=_0x5546ba(0x225,0x3cd,0x414,0x3f7)+_0x2e98f4(0x793,0x62d,0x743,0x823),_0x45badf[_0x5546ba(0x44e,0x7e6,0x576,0x240)]=[_0x5c62a0];const _0x5c8557={};_0x5c8557[_0x5546ba(0x47f,0x1b9,0x30c,0x34f)]='🕌\x20〉ɞ\x20Islam'+'ic\x20Command',_0x5c8557['rowId']=_0x2e98f4(0xb7,0x27e,0x5a0,0xab),_0x5c8557[_0x5546ba(0x249,0x161,0x31,0x63)+'n']=_0x5546ba(-0xeb,-0x87,0xea,0x1a8)+_0x2e98f4(0x645,0x78a,0x9eb,0x94c);const _0x1c680b={};_0x1c680b[_0x5546ba(0x5d,0x608,0x30c,0x38e)]='Sub\x20Menu\x20K'+_0x5546ba(0x3ed,0x67b,0x3ec,0x16d),_0x1c680b[_0x5546ba(0x333,0x715,0x576,0x359)]=[_0x5c8557];const _0x968964={};_0x968964['title']=_0x2e98f4(0x878,0x65a,0x552,0x8fa)+_0x5546ba(0x16a,0xda,-0x51,-0x9b),_0x968964[_0x2e98f4(0x7ed,0x514,0x7cb,0x3e6)]='storecmd',_0x968964[_0x5546ba(-0x3b,0x19c,0x31,-0x11d)+'n']=_0x5546ba(-0x2bb,-0x80,0x3c,0x60)+_0x5546ba(0x3f3,0x683,0x47a,0x670)+_0x5546ba(0x2d8,0x281,0x4f4,0x470);const _0x39a244={};_0x39a244['title']=_0x2e98f4(0x4fa,0x694,0x38d,0x473)+'e-26',_0x39a244['rows']=[_0x968964];const _0x5cb9eb={};_0x5cb9eb['title']='⛲\x20〉ɞ\x20Sourc'+_0x5546ba(0x30e,0x48d,0x42c,0x194),_0x5cb9eb[_0x2e98f4(0x5f6,0x514,0x360,0x33a)]='sc',_0x5cb9eb[_0x5546ba(0x123,0x25,0x31,0x2a8)+'n']=_0x2e98f4(0x7df,0x67e,0x9ab,0x94a)+_0x2e98f4(0x37e,0x260,-0x5d,0x3e0)+_0x2e98f4(0x410,0x572,0x7c9,0x560);const _0x18a340={};_0x18a340[_0x2e98f4(0x409,0x58c,0x527,0x7f2)]=_0x2e98f4(0x92d,0x858,0x599,0x930)+'e',_0x18a340[_0x2e98f4(0xa08,0x7f6,0x985,0x885)]=[_0x5cb9eb];const _0x541b22={};_0x541b22[_0x2e98f4(0x420,0x58c,0x6e3,0x3e2)]='👨‍💻\x20〉ɞ\x20Contr'+_0x2e98f4(0x6e8,0x43f,0x233,0x311),_0x541b22[_0x5546ba(0x351,-0x5a,0x294,-0x6d)]=_0x2e98f4(0x643,0x31c,0x4be,0x83),_0x541b22['descriptio'+'n']=_0x2e98f4(0x7b2,0x6ae,0x447,0x500)+_0x2e98f4(0x2f9,0x4bd,0x758,0x1c5)+'kontribusi'+_0x2e98f4(0x176,0x20b,0x1c0,0x52b)+_0x2e98f4(0x88b,0x84c,0x78e,0x7d2);const _0x57eaa0={};_0x57eaa0[_0x5546ba(0x2d7,0x1d7,0x30c,0x309)]=_0x5546ba(0x39c,0xce,0x3b9,0x64e),_0x57eaa0[_0x2e98f4(0x866,0x7f6,0x4f6,0x6c7)]=[_0x541b22];const sections=[_0x5656ae,_0x392c4f,_0x2a6b1f,_0x5e2ccc,_0x34458a,_0xdc3534,_0x36e88b,_0x3c23e0,_0x6412d5,_0x4242f0,_0x52930d,_0x51b75d,_0x5e925d,_0x424deb,_0x3e35c8,_0x66fd18,_0x423283,_0x49f6ed,_0x1fb8e8,_0x4a532c,_0xf1f32,_0x153ab0,_0x7fc495,_0x35f55f,_0x45badf,_0x1c680b,_0x39a244,_0x18a340,_0x57eaa0],listMessage={'text':_0x2e98f4(0x9e6,0x765,0xa46,0x708)+'O\x20USER*_\x20」'+_0x5546ba(-0x22,0x194,0x171,0x169)+_0x5546ba(-0x152,-0x13,0x8f,0xc5)+pushname+(_0x5546ba(0x8d3,0x2b9,0x5be,0x671)+_0x5546ba(-0x219,-0x42,0x109,0x417))+sender[_0x2e98f4(0x25a,0x2d8,0x495,0x257)]('@')[0x9*-0x317+-0x1*-0x225f+-0x690]+(_0x2e98f4(-0x24,0x2d7,0x5d9,-0x33)+_0x5546ba(0x327,0x2ca,0x404,0x264))+(isCreator?_0x5546ba(0x4cc,0x4f1,0x3c4,0x3e3)+botname:_0x2e98f4(0x5ef,0x49f,0x20e,0x71b)+botname)+('\x0a╰─⬣\x0a\x0a╭─⬣「'+_0x5546ba(-0x96,-0x22d,0xba,0x3cc)+_0x2e98f4(0x3a3,0x5d6,0x78a,0x4e4)+_0x2e98f4(0x3a1,0x58f,0x6db,0x2ff)+'\x20')+prefix+(_0x2e98f4(0x992,0x840,0x9d5,0x8d6)+_0x5546ba(-0x126,0x3b6,0x21b,0x115))+botname+('\x0a│\x20*Owner*'+_0x5546ba(0x199,0x197,-0x5e,-0xef))+ownernomer[_0x5546ba(-0xb5,-0x13a,0x58,0x1b4)]('@')[0x19eb*0x1+0x1*0x25d6+0x35b*-0x13]+(_0x5546ba(0x2e4,0x5c2,0x365,0x4bc)+':\x20')+(alpha[_0x5546ba(0x13c,0x76,0x196,-0x5)]?_0x2e98f4(0x3fa,0x45c,0x295,0x6c7)+'e':'Self-Mode')+(_0x5546ba(0x1ce,0x202,0x459,0x3f6)+_0x5546ba(0x604,0x7e8,0x54c,0x755))+runtime(process['uptime']())+(_0x2e98f4(0x2cd,0x5c7,0x834,0x744)+_0x5546ba(-0x76,-0x135,0x91,0x344)+_0x2e98f4(0x6e3,0x700,0x821,0x59f)+'⬣\x0a\x0a╭─⬣「\x20_*'+_0x5546ba(0x165,-0x80,0x17d,-0xd9)+_0x2e98f4(0x5a9,0x659,0x971,0x35a)+_0x2e98f4(0x6ba,0x79d,0x5cd,0x70c)+'\x20')+time+(_0x5546ba(-0x18d,0x221,0x86,-0x249)+':\x20')+wita+('\x0a│\x20*Wit*\x20:'+'\x20')+wit+_0x5546ba(0x536,0x523,0x2dc,0xfb),'footer':'©\x20'+ownername,'title':_0x5546ba(-0x11e,-0x14,0x11b,0x1ac)+salam+'\x20'+pushname+_0x5546ba(0xa4,0x571,0x3aa,0xda),'buttonText':'CLICK\x20HERE','mentions':[sender,ownernomer+(_0x2e98f4(0x6a5,0x4b0,0x706,0x4d7)+_0x2e98f4(0x169,0x38d,0x338,0x1b4))],'sections':sections},_0x1c13f2={};_0x1c13f2[_0x5546ba(0x249,0x3a3,0x2a3,0x2ff)]=fgif,alpha['sendMessag'+'e'](m[_0x5546ba(0x225,0x6c9,0x4ee,0x1bd)],listMessage,_0x1c13f2);break;case _0x5546ba(-0x14,0x29c,0x1e1,0x151):case _0x5546ba(0x303,0x83f,0x5cb,0x7ea)+'e':case _0x2e98f4(0x3f3,0x290,0x4c4,0x38c):{if(!text)return reply(_0x5546ba(0x7ba,0x7f8,0x4da,0x4b7)+_0x5546ba(0x5d3,0x361,0x3f4,0x442)+_0x2e98f4(0x6bd,0x6e8,0x848,0x98a)+'n\x20'+(prefix+command)+_0x2e98f4(0x639,0x5eb,0x48a,0x802));if(text[_0x2e98f4(0x858,0x81e,0x5db,0x6c0)]('|'))return reply(_0x5546ba(0x72b,0x3a1,0x4da,0x75c)+_0x5546ba(0x533,0x689,0x3f4,0xe1)+_0x5546ba(0x3d7,0x28c,0x468,0x234)+'n\x20'+(prefix+command)+_0x2e98f4(0x709,0x5eb,0x7cd,0x336));if(!/webp/[_0x5546ba(0x502,-0xbf,0x20c,0x2c9)](mime)&&/image/[_0x5546ba(0x3e7,0xe7,0x20c,0x11)](mime)){const TCYTIE=(_0x5546ba(0x295,0x27a,0x129,-0x106)+'4')[_0x2e98f4(0x5,0x2d8,0x1b3,0xed)]('|');let BcTePa=0xe50+-0x245d+-0x5*-0x469;while(!![]){switch(TCYTIE[BcTePa++]){case'0':const _0x1e583f={};_0x1e583f['packname']=global[_0x5546ba(0x2e9,-0x168,-0x4e,-0x24c)],_0x1e583f[_0x2e98f4(0x5b0,0x2b3,0x35d,0x5d9)]=global[_0x5546ba(-0x2a1,-0x153,0x33,-0x149)],memek=await alpha[_0x5546ba(0x46a,0x268,0x3a7,0xc7)+'sSticker'](m[_0x5546ba(0x48d,0x78d,0x4ee,0x45d)],meme,m,_0x1e583f);continue;case'1':mee=await alpha[_0x2e98f4(0x6c4,0x731,0xa1e,0x604)+_0x2e98f4(0x1af,0x21f,0x46c,0x42d)+_0x5546ba(0x37e,0xac,0x225,0x535)](quoted);continue;case'2':mem=await TelegraPh(mee);continue;case'3':reply(lang[_0x2e98f4(0x523,0x7db,0xb0a,0x759)]());continue;case'4':await fs['unlinkSync'](memek);continue;case'5':meme=_0x5546ba(-0x27c,-0x1e8,0x54,0x69)+_0x2e98f4(0x6bb,0x4db,0x3c9,0x3a6)+_0x5546ba(0x68,0x318,0x2ff,0x2f4)+'s/custom/-'+'/'+text+('.png?backg'+_0x5546ba(0x388,0x856,0x558,0x374))+mem;continue;}break;}}else{if(/webp/[_0x5546ba(0x32e,0x108,0x20c,0x2c7)](mime)){reply(lang[_0x5546ba(0x389,0x6d4,0x55b,0x3ed)]());let media=await alpha[_0x5546ba(0x2a6,0x6b5,0x4b1,0x76c)+_0x5546ba(0x184,0x4f,-0x61,0xae)+_0x2e98f4(0x720,0x4a5,0x533,0x4dd)](quoted),ran=await(_0x5546ba(0x335,0x2d0,0xaf,0x149)+'img-')+getRandom(_0x2e98f4(0x1be,0x24c,0x58c,0x3e4));exec(_0x2e98f4(0x803,0x723,0x6ff,0x445)+media+'\x20'+ran,_0x5c1235=>{const _0x3bac12={'IOJdB':function(_0x5d26d6,_0x1b4a0b){return _0x5d26d6(_0x1b4a0b);}};fs['unlinkSync'](media);function _0x40f0d8(_0xe87c3c,_0x45dfba,_0x43b273,_0x24a68e){return _0x2e98f4(_0x43b273,_0xe87c3c-0x1d4,_0x43b273-0x38,_0x24a68e-0x25);}function _0x348e19(_0x86ed59,_0x5a50dc,_0x58d5f1,_0x6ae131){return _0x2e98f4(_0x6ae131,_0x5a50dc- -0x1c3,_0x58d5f1-0x63,_0x6ae131-0x13c);}if(_0x5c1235)return reply(_0x40f0d8(0x832,0x726,0x8e4,0x89f));_0x3bac12[_0x348e19(0x351,0x436,0x4a7,0x5e7)](TelegraPh,ran)['then'](async _0x303ac2=>{let _0x301f56=_0x116b4b(-0x8,-0x2d,0x268,0x2af)+_0x5f2a21(0x30f,0x3bc,0x461,0x341)+_0x116b4b(0x2a3,0x103,0x4e8,0x3)+_0x5f2a21(0x664,0x2a7,0x56b,0x34a)+'/'+text+(_0x116b4b(0x1d8,-0x14f,0x2cb,0x468)+_0x5f2a21(0x818,0x786,0x5c7,0x63e))+_0x303ac2;const _0x37fd8a={};_0x37fd8a[_0x116b4b(-0xaa,-0x295,-0xba,-0x289)]=global[_0x116b4b(-0xaa,-0x2b9,0xbe,0x22c)];function _0x5f2a21(_0x3edfe0,_0x405b60,_0x1e653d,_0xbcc88){return _0x348e19(_0x3edfe0-0xe8,_0xbcc88-0x29,_0x1e653d-0x14d,_0x1e653d);}function _0x116b4b(_0x31cb18,_0x863a49,_0x325d1b,_0x3235b4){return _0x40f0d8(_0x31cb18- -0x4b0,_0x863a49-0x62,_0x863a49,_0x3235b4-0x128);}_0x37fd8a[_0x116b4b(-0x29,0x14d,-0x35e,-0x32e)]=global[_0x116b4b(-0x29,-0x223,-0x233,-0x1c2)];let _0x12dcfd=await alpha['sendImageA'+_0x5f2a21(0x3f8,0x8b0,0x448,0x661)](m['chat'],_0x301f56,m,_0x37fd8a);await fs[_0x5f2a21(0x662,0x360,0x970,0x68b)](_0x12dcfd),await fs[_0x5f2a21(0x7e0,0x406,0x6da,0x68b)](ran);});});}else reply(_0x5546ba(0x7e1,0x4f0,0x4da,0x212)+'y\x20Foto/Sti'+_0x2e98f4(0x738,0x4ca,0x508,0x7fc)+_0x2e98f4(0x644,0x788,0x546,0x593)+(prefix+command));}}break;case _0x5546ba(0x6a4,0x1cc,0x444,0x55f):{if(!text)return reply(_0x2e98f4(0x6a9,0x75a,0x4e2,0x635)+_0x2e98f4(0x7a5,0x674,0x5ab,0x77d)+_0x5546ba(0x341,0x773,0x468,0x159)+'n\x20'+(prefix+command)+(_0x2e98f4(0x5ba,0x391,0x84,0xe1)+'s*'));if(!text[_0x5546ba(0x737,0x3ee,0x59e,0x30a)]('|'))return reply(_0x5546ba(0x256,0x5c3,0x4da,0x3a3)+_0x2e98f4(0x980,0x674,0x45c,0x7b3)+_0x5546ba(0x20c,0x693,0x468,0x64e)+'n\x20'+(prefix+command)+(_0x2e98f4(0x332,0x391,0x1a7,0x570)+'s*'));if(!/webp/['test'](mime)&&/image/[_0x2e98f4(0x302,0x48c,0x2fc,0x591)](mime)){reply(lang[_0x2e98f4(0x923,0x7db,0x64b,0x9d4)]()),arg=args[_0x2e98f4(0xb12,0x827,0xb0a,0x721)]('\x20'),atas=arg['split']('|')[-0x7a8+0x1*-0x282+0xa2a],bawah=arg[_0x5546ba(-0x26b,0x298,0x58,0x0)]('|')[-0x2341+-0x1*-0x17b+0x21c7];let abeb=await alpha[_0x5546ba(0x550,0x5d5,0x4b1,0x623)+'dSaveMedia'+_0x5546ba(0x191,0x277,0x225,0x4f5)](quoted),abe=await TelegraPh(abeb),upz=_0x5546ba(-0x142,0x19b,0x54,-0x251)+_0x5546ba(0x85,0x534,0x25b,0x156)+_0x5546ba(0x57,0x492,0x2ff,0x3ef)+_0x5546ba(0x6f2,0x369,0x3b4,0x3b0)+atas+'/'+bawah+(_0x5546ba(0x51e,0x521,0x234,-0xa4)+_0x2e98f4(0x90a,0x7d8,0xa96,0x622))+util[_0x5546ba(0x66d,0x6ee,0x406,0x2bb)](abe);const _0x470ab8={};_0x470ab8['packname']=global['packname'],_0x470ab8[_0x2e98f4(0x1ed,0x2b3,-0x7,0x5c)]=global[_0x2e98f4(0x578,0x2b3,0x322,0x5ba)];let mengmeme=await alpha[_0x2e98f4(0x79f,0x627,0x5db,0x73f)+_0x5546ba(0x408,0x6bd,0x57b,0x570)](m[_0x2e98f4(0x5aa,0x76e,0x7a8,0x8b6)],upz,m,_0x470ab8);await fs[_0x5546ba(0x63b,0x88f,0x5a5,0x5d6)](mengmeme),await fs[_0x2e98f4(0x979,0x825,0x530,0x7ac)](abeb);}else{if(/webp/[_0x2e98f4(0x4ca,0x48c,0x219,0x516)](mime)){reply(lang[_0x5546ba(0x6fc,0x6c8,0x55b,0x421)]()),arg=args[_0x2e98f4(0x73a,0x827,0x96e,0x7db)]('\x20'),atas=arg[_0x5546ba(-0x1de,-0x1f2,0x58,-0x29e)]('|')[-0x1*-0xb38+0x1*0x2449+0x2f81*-0x1],bawah=arg[_0x2e98f4(0x1d1,0x2d8,-0x60,0x69)]('|')[-0x205*0x1+-0x1211+0x1417];let media=await alpha[_0x2e98f4(0x70c,0x731,0x6b0,0x62b)+'dSaveMedia'+_0x2e98f4(0x3a9,0x4a5,0x76b,0x160)](quoted),ran=await(_0x2e98f4(0x22a,0x32f,0x70,0x4e3)+_0x5546ba(0x603,0x2eb,0x56a,0x4df))+getRandom(_0x5546ba(-0x17f,0x248,-0x34,0x1ce));exec(_0x2e98f4(0x7fa,0x723,0x9f2,0x81d)+media+'\x20'+ran,_0x4a4bf5=>{const _0x3b8056={'wtxls':function(_0x19daa1,_0x1f743d){return _0x19daa1(_0x1f743d);},'mcpiS':_0x57f81c(0x6d4,0xb9e,0x9c5,0x963)};fs['unlinkSync'](media);function _0x443ce8(_0x261780,_0x150db6,_0x24e921,_0x54b565){return _0x5546ba(_0x261780-0xbb,_0x150db6-0x146,_0x54b565- -0x11d,_0x150db6);}function _0x57f81c(_0x2faa1e,_0x1517d2,_0x4fa3a0,_0x469d22){return _0x2e98f4(_0x469d22,_0x4fa3a0-0x367,_0x4fa3a0-0xef,_0x469d22-0x17e);}if(_0x4a4bf5)return _0x3b8056[_0x57f81c(0x68e,0x7cc,0x68f,0x8e5)](reply,_0x3b8056['mcpiS']);_0x3b8056['wtxls'](TelegraPh,ran)[_0x443ce8(-0xce,0x25a,-0x56,0x14)](async _0x3cacba=>{let _0x1d3107=_0x217254(0x1c8,0x21b,0x20e,-0x5)+_0x312819(0x9c6,0x6d8,0x710,0x81c)+_0x312819(0x54a,0x506,0x7b4,0x7fd)+_0x217254(0x528,0x385,0x2b2,0x6f3)+atas+'/'+bawah+('.png?backg'+_0x217254(0x6cc,0x85d,0x9a4,0x53d))+_0x3cacba;const _0x462606={};_0x462606[_0x312819(0x6cf,0x667,0x467,0x68c)]=global[_0x217254(0x126,0x3a8,-0x120,-0x99)];function _0x217254(_0x103b91,_0x5849bc,_0x4141aa,_0x2f2d43){return _0x57f81c(_0x103b91-0xb8,_0x5849bc-0x47,_0x103b91- -0x473,_0x5849bc);}_0x462606['author']=global['author'];let _0x5af088=await alpha[_0x312819(0xa32,0x7b8,0x85c,0x70e)+_0x312819(0xabf,0x6ff,0xa30,0x9fd)](m[_0x312819(0xcc1,0xc6b,0x9a3,0xa4c)],_0x1d3107,m,_0x462606);function _0x312819(_0x5d36c7,_0x3ca25f,_0x5d48eb,_0xaed36a){return _0x443ce8(_0x5d36c7-0x16c,_0xaed36a,_0x5d48eb-0x16c,_0x5d48eb-0x5d2);}await fs['unlinkSync'](_0x5af088),await fs[_0x217254(0x719,0x480,0x746,0x941)](ran);});});}else reply('Kirim/Repl'+_0x5546ba(0x60e,0x898,0x5b4,0x44a)+'cker\x20Denga'+_0x2e98f4(0x979,0x788,0x966,0x920)+(prefix+command));}}break;case _0x5546ba(0x2fb,0x6ae,0x496,0x55c):{if(!text)return reply(_0x2e98f4(0x77f,0x75a,0x90f,0x5f3)+_0x2e98f4(0x9b6,0x674,0x99c,0x663)+'gan\x20Captio'+'n\x20'+(prefix+command)+(_0x5546ba(0x249,0x1da,0x111,0x2dc)+'s*'));if(!text[_0x5546ba(0x8a5,0x39d,0x59e,0x558)]('|'))return reply(_0x5546ba(0x657,0x6bf,0x4da,0x444)+'y\x20Foto\x20Den'+_0x5546ba(0x692,0x6da,0x468,0x69a)+'n\x20'+(prefix+command)+(_0x2e98f4(0x4bb,0x391,0x12c,0x8e)+'s*'));if(!/webp/['test'](mime)&&/image/['test'](mime)){reply(lang[_0x5546ba(0x6c9,0x771,0x55b,0x788)]()),arg=args['join']('\x20'),atas=arg[_0x5546ba(-0x18,0xe6,0x58,-0x129)]('|')[-0x13e5*-0x1+0x347+-0x172c],bawah=arg[_0x5546ba(-0x17e,0x5,0x58,0x351)]('|')[0x1*-0x1655+0x150b+0x1*0x14b];let abeb=await alpha[_0x5546ba(0x54a,0x1f2,0x4b1,0x558)+_0x2e98f4(0x2b,0x21f,0x39d,0x8e)+_0x5546ba(0x4ee,0x102,0x225,0x20)](quoted),abe=await TelegraPh(abeb),upz=_0x2e98f4(0x1f6,0x2d4,0x1da,0x511)+_0x2e98f4(0x1fe,0x4db,0x47a,0x6fa)+_0x2e98f4(0x487,0x57f,0x6cf,0x27b)+_0x5546ba(0x579,0x6f9,0x3b4,0x4f8)+atas+'/'+bawah+(_0x5546ba(0x3ea,0x17c,0x234,0x226)+_0x5546ba(0x221,0x557,0x558,0x541))+util[_0x5546ba(0x382,0x6eb,0x406,0x5be)](abe),mengmeme=await alpha[_0x5546ba(0x356,0x326,0x511,0x6e6)](m[_0x2e98f4(0x4a7,0x76e,0x8b3,0x451)],upz,_0x5546ba(0x318,0x28e,0x83,0x30e),m);await fs[_0x2e98f4(0x925,0x825,0x675,0x614)](abeb);}else{if(/webp/['test'](mime)){reply(lang['wait']()),arg=args[_0x2e98f4(0x5e6,0x827,0x650,0x851)]('\x20'),atas=arg[_0x5546ba(0x66,0x212,0x58,-0xae)]('|')[-0x1288+0x1*0x14b1+-0x229],bawah=arg[_0x2e98f4(0x5c3,0x2d8,-0x67,0x510)]('|')[-0x50d*0x1+0x1c*0x139+-0x1d2e];let media=await alpha[_0x5546ba(0x16d,0x42b,0x4b1,0x2e3)+'dSaveMedia'+_0x5546ba(0x45f,-0x107,0x225,0x364)](quoted),ran=await(_0x5546ba(0xd0,0xb7,0xaf,0x2bd)+_0x5546ba(0x3aa,0x70b,0x56a,0x4fd))+getRandom(_0x2e98f4(0x39e,0x24c,0x22f,0x1df));exec(_0x2e98f4(0x698,0x723,0x7ff,0x73c)+media+'\x20'+ran,_0x5cfa5e=>{function _0x275d2f(_0x43175d,_0x2e66c4,_0x346e6f,_0x4ab206){return _0x5546ba(_0x43175d-0x17d,_0x2e66c4-0x129,_0x43175d-0x1c6,_0x346e6f);}function _0x19466d(_0x9820ba,_0x2ece89,_0x360f54,_0x5631b0){return _0x2e98f4(_0x360f54,_0x5631b0-0xd5,_0x360f54-0x107,_0x5631b0-0x165);}const _0x46a5b5={'QmjvN':function(_0x142904,_0x2cbef8){return _0x142904!==_0x2cbef8;},'jIZRK':_0x275d2f(0x2c3,0x3d6,0x608,0x83),'TEXKa':_0x19466d(0x64f,0x20d,0x6e2,0x3d8),'xidUv':function(_0x139dd9,_0x40d404){return _0x139dd9(_0x40d404);},'hlklY':'emror'};fs['unlinkSync'](media);if(_0x5cfa5e)return _0x46a5b5[_0x19466d(0x5db,0x99e,0x899,0x8f0)](reply,_0x46a5b5[_0x19466d(0x6a4,0x6d6,0xada,0x8bb)]);_0x46a5b5[_0x275d2f(0x761,0x6ba,0x42c,0x689)](TelegraPh,ran)['then'](async _0x36affa=>{function _0x7c7874(_0x402d26,_0x4728d0,_0x50952b,_0x113e86){return _0x19466d(_0x402d26-0x2f,_0x4728d0-0x1b5,_0x4728d0,_0x402d26- -0x4c6);}function _0x3e13d5(_0x19e26b,_0x30eb6c,_0xfd83b4,_0x52ad69){return _0x275d2f(_0x19e26b- -0x1c2,_0x30eb6c-0x1a8,_0x52ad69,_0x52ad69-0x1a1);}if(_0x46a5b5[_0x7c7874(0xad,0x22a,0x123,0x2fc)](_0x46a5b5[_0x7c7874(0x3d6,0x314,0x265,0x6e5)],_0x7c7874(0x115,0x264,0x2af,-0xba))){let _0x35a763=_0x7c7874(-0x11d,-0x19c,0x6,0x46)+_0x3e13d5(0x25f,0x2a2,0x3c5,0x572)+_0x3e13d5(0x303,0x447,0x50b,0x1bb)+_0x7c7874(0x243,0x485,0x30b,0x47a)+atas+'/'+bawah+(_0x3e13d5(0x238,0x35a,-0x107,0x50a)+_0x3e13d5(0x55c,0x5e6,0x515,0x79b))+_0x36affa,_0x13bbe4=await alpha['sendImage'](m[_0x3e13d5(0x4f2,0x830,0x684,0x696)],_0x35a763,_0x46a5b5[_0x3e13d5(0x53f,0x2e0,0x286,0x447)],m);await fs[_0x3e13d5(0x5a9,0x870,0x60c,0x29a)](ran);}else _0x4c7c35=_0x42f635;});});}else reply(_0x2e98f4(0x88e,0x75a,0x65b,0x99a)+'y\x20Foto/Sti'+'cker\x20Denga'+_0x2e98f4(0x80c,0x788,0x754,0x799)+(prefix+command));}}break;case _0x5546ba(0x217,0x13,0x168,-0xbc):case'math':{if(kuismath[_0x5546ba(0x798,0x7e9,0x4d1,0x50d)+_0x2e98f4(0x568,0x85b,0x681,0x538)](m['sender'][_0x2e98f4(0x2a2,0x2d8,0x8f,0x240)]('@')[-0x1ec6+0x1e6+-0x2a0*-0xb]))throw'Masih\x20Ada\x20'+_0x2e98f4(0x684,0x6aa,0x482,0x856)+'Belum\x20Dise'+_0x5546ba(0x233,-0x20b,0xbc,0x282);let {genMath,modes}=require(_0x5546ba(-0xc2,0x41c,0x123,0x1c8));if(!text)throw _0x5546ba(0x556,0x113,0x3d1,0x264)+Object[_0x5546ba(-0xb1,0x480,0x1df,0x135)](modes)[_0x5546ba(0x7cb,0x7a3,0x5a7,0x730)](_0x2e98f4(0x451,0x310,0x484,0x4ab))+('\x0aContoh\x20pe'+_0x5546ba(0x3f1,0x9d,0x213,0x3fc))+prefix+(_0x2e98f4(0x31c,0x3e5,0x652,0x279)+'m');let result=await genMath(text[_0x2e98f4(0x21d,0x450,0x3ae,0x1a2)+'e']());alpha['sendText'](m[_0x2e98f4(0x945,0x76e,0xa29,0x9c4)],_0x2e98f4(0x4a1,0x666,0x617,0x4aa)+_0x5546ba(0x213,-0x32,0xa1,0x354)+result[_0x2e98f4(0x6a3,0x820,0xb5d,0x8e1)][_0x5546ba(0x1d0,0x4d1,0x1d0,0x3af)+'e']()+(_0x5546ba(0x76,0x103,0x94,-0xe0)+'\x20')+(result['waktu']/(0x9bc+0x10ea+-0x16be))[_0x5546ba(0x118,0x13d,0xe9,0x343)](0x11*-0x153+-0x1bf5+-0x1f1*-0x1a)+'\x20detik',m)['then'](()=>{function _0x2dbab9(_0x3817b9,_0x2776f0,_0x580c3b,_0x3727fd){return _0x5546ba(_0x3817b9-0xbf,_0x2776f0-0x169,_0x3727fd-0x3bc,_0x3817b9);}const _0x148082={};_0x148082[_0x4aceff(0x4f1,0x452,0x2c0,0x5f1)]=function(_0x4e8331,_0x394abc){return _0x4e8331+_0x394abc;},_0x148082[_0x4aceff(0x8b7,0x722,0x427,0x70b)]='Jawaban:\x20';const _0x3b0ca7=_0x148082;function _0x4aceff(_0x138b24,_0x3c41e9,_0x343668,_0x5eab89){return _0x2e98f4(_0x5eab89,_0x3c41e9- -0x9b,_0x343668-0xa,_0x5eab89-0x82);}console['log'](_0x3b0ca7[_0x4aceff(0x40c,0x452,0x602,0x73f)](_0x3b0ca7[_0x2dbab9(0xbce,0x61d,0x5dd,0x8f9)],result[_0x2dbab9(0x866,0xb23,0xba5,0x89b)])),kuismath[m[_0x2dbab9(0x29c,0x38d,0x3c9,0x395)]['split']('@')[0x89*-0x1b+0x24*-0xa6+-0x183*-0x19]]=result[_0x4aceff(0x91f,0x6c4,0x749,0x5fd)];}),await sleep(result[_0x2e98f4(0x6cc,0x536,0x67d,0x356)]),kuismath[_0x5546ba(0x2ce,0x56a,0x4d1,0x669)+_0x5546ba(0x437,0x499,0x5db,0x8d1)](m[_0x5546ba(0x1cc,-0x3b,-0x27,0x1a1)]['split']('@')[0x2b3+0x2*0xfab+-0x2209])&&(m[_0x2e98f4(0x464,0x3b4,0x3eb,0xf9)]('Waktu\x20Habi'+_0x5546ba(0x7c,0x2cf,0x3bc,0x369)+'\x20'+result['jawaban']),delete kuismath[m['sender'][_0x2e98f4(0x553,0x2d8,0x35e,-0xa)]('@')[-0x4*0x62b+0x1601*0x1+0x2ab]]);}break;case'bc':case'broadcast':case _0x2e98f4(0x478,0x4df,0x505,0x1d8):{if(!isCreator&&!m[_0x5546ba(0x551,0x216,0x46b,0x34f)][_0x2e98f4(0x7f7,0x546,0x28c,0x5e5)])throw mess[_0x5546ba(-0xb0,0x258,-0x7a,0x1b8)];let anu=await store[_0x2e98f4(0x526,0x4fc,0x3f7,0x206)]['all']()[_0x5546ba(0x647,0x31c,0x485,0x576)](_0x5d2050=>_0x5d2050['id']);cc=await alpha[_0x5546ba(0x361,-0x18f,0x16f,0x2d)](q?m:m[_0x5546ba(0x1c4,0x4e7,0x2a3,0x1e6)]?await m[_0x2e98f4(0x786,0x71e,0x80c,0x541)+'bj']():![]||m),cck=q?q:cc['text'];let ranflam=await getBuffer(picak+_0x5546ba(0x30c,-0x164,0x4,0x144));m[_0x5546ba(-0x136,0x33d,0x134,0x104)](_0x5546ba(-0x1bf,-0x19b,0xa9,0x7f)+_0x2e98f4(0xae,0x3da,0x380,0x5e2)+'e\x20'+anu[_0x2e98f4(0x501,0x348,0x5da,0x3df)]+('\x20Chat\x0aWakt'+_0x2e98f4(0x65d,0x80f,0xab0,0x950))+anu[_0x2e98f4(0x5c4,0x348,0x503,0xf5)]*(0x1391+0x1ccc+-0x305c*0x1+0.5)+_0x2e98f4(0xc3,0x20c,0x1e1,0x45a));for(let yoi of anu){await sleep(-0xb*-0x338+-0x25*0xa3+-0x5fd);const _0x1b7c47={};_0x1b7c47[_0x5546ba(0x1a2,0x20,0xff,0x1b7)+'t']=_0x5546ba(0x170,0x22b,0xc3,0x2ff)+'eator',_0x1b7c47['url']=''+youtube;const _0x15211e={};_0x15211e[_0x2e98f4(0x2c9,0x52a,0x399,0x5ea)]=_0x1b7c47;const _0x202886={};_0x202886[_0x2e98f4(0xe7,0x37f,0x4b,0x38e)+'t']='Rest\x20Api\x27s',_0x202886[_0x2e98f4(0x613,0x673,0x612,0x58e)]=''+myweb;const _0x31624c={};_0x31624c[_0x2e98f4(0x2dc,0x52a,0x82d,0x3fb)]=_0x202886;const _0x206f7f={};_0x206f7f[_0x5546ba(0x2a8,0x131,0xff,0xf)+'t']=_0x2e98f4(0x938,0x7a5,0x6d2,0x715),_0x206f7f['id']=_0x5546ba(0x5f7,0x5a2,0x5d1,0x2af);const _0x5d6785={};_0x5d6785[_0x5546ba(-0x2,0x8c,0x2e5,0x1f5)+_0x2e98f4(0x5a6,0x44b,0x1a7,0x23f)]=_0x206f7f;const _0x320546={};_0x320546['displayTex'+'t']='Owner',_0x320546['id']=_0x2e98f4(-0x60,0x206,0x1ac,-0x5e);const _0xe99a14={};_0xe99a14[_0x2e98f4(0x6da,0x565,0x247,0x469)+_0x5546ba(-0x15,0x38d,0x1cb,0x492)]=_0x320546;const _0x49e842={};_0x49e842[_0x5546ba(0x425,0x36c,0xff,0x280)+'t']=_0x2e98f4(0x5c9,0x3f7,0x6e6,0x5b0),_0x49e842['id']=_0x2e98f4(0x569,0x82e,0x528,0x7af);const _0xd79ce4={};_0xd79ce4[_0x5546ba(0x3e6,0x3df,0x2e5,0x42)+_0x5546ba(0x4a2,0x29a,0x1cb,0x117)]=_0x49e842;var but=[_0x15211e,_0x31624c,_0x5d6785,_0xe99a14,_0xd79ce4];alpha['send5ButLo'+'c'](yoi,_0x2e98f4(0x5a7,0x360,0x4d1,0x429)+_0x5546ba(0x2fb,0x549,0x477,0x276)+cck,'©\x20'+ownername,ranflam,but);}m[_0x5546ba(0x3b7,-0x15d,0x134,0x10d)]('Sukses\x20Bro'+_0x2e98f4(0x465,0x2c2,0x42b,0x4de));}break;case _0x2e98f4(0xe6,0x23b,0x4ca,0xe0)+'c':case _0x2e98f4(-0x6,0x23b,0x10a,0x4d1)+_0x2e98f4(0x324,0x3f2,0xc9,0x187):case'bcgc':{if(!isCreator&&!m[_0x2e98f4(0x8de,0x6eb,0x68e,0x80f)][_0x5546ba(0xcf,0x21a,0x2c6,0x4d4)])return reply(mess[_0x2e98f4(0x52b,0x206,0x4d6,-0x32)]);if(!text)return reply('Kirim\x20peri'+_0x2e98f4(0x59e,0x6c9,0x964,0x440)+(prefix+command)+_0x5546ba(0x5c0,0x4a2,0x581,0x37d));let getGroups=await alpha[_0x2e98f4(0x6d1,0x4c4,0x2e1,0x614)+_0x2e98f4(0x671,0x6c1,0x9da,0x97d)+_0x5546ba(0x75,0x31,0x12d,0x33c)](),groups=Object[_0x5546ba(0x4eb,0x72a,0x466,0x362)](getGroups)[_0x2e98f4(0x6ff,0x656,0x618,0x3d4)](-0x770+-0x319+0x57*0x1f)[_0x2e98f4(0x6f1,0x705,0x984,0x47e)](_0x1b4bc6=>_0x1b4bc6[0x6e4+-0x128a+0xba7]),anu=groups[_0x5546ba(0x515,0x675,0x485,0x290)](_0x2480f8=>_0x2480f8['id']);reply(_0x2e98f4(0x544,0x329,0x652,0x31f)+_0x5546ba(-0x130,-0xa2,0x15a,0x271)+'e\x20'+anu[_0x2e98f4(0x4e1,0x348,0x416,0x2d7)]+(_0x2e98f4(0x9eb,0x844,0x69d,0x73f)+_0x5546ba(0x436,0x5bf,0x33e,0x1c8)+_0x5546ba(0x776,0x123,0x44d,0x151))+anu[_0x5546ba(0x16,0x29d,0xc8,0x43)]*(0x2*-0x7ab+0x1b*-0x125+0x2e3e+0.5)+_0x5546ba(0x24a,-0x50,-0x74,0x208));for(let i of anu){await sleep(-0x1*0x1fb9+-0x3*0xae+0x279f);let ranflam=await getBuffer(picak+('Broadcast\x20'+_0x5546ba(-0x168,0x272,-0x40,-0x169)));const _0x150b05={};_0x150b05[_0x5546ba(-0x13e,0xaf,0xff,0xe1)+'t']='YouTube\x20Cr'+_0x2e98f4(0x178,0x251,0x465,0x277),_0x150b05[_0x5546ba(0x296,0x592,0x3f3,0x638)]=''+youtube;const _0x4aeaa9={};_0x4aeaa9[_0x2e98f4(0x586,0x52a,0x545,0x277)]=_0x150b05;const _0x165274={};_0x165274[_0x5546ba(0x1a,-0x1e0,0xff,0x1c3)+'t']='Rest\x20Api\x27s',_0x165274['url']=''+myweb;const _0x5c9288={};_0x5c9288['urlButton']=_0x165274;const _0x5942d6={};_0x5942d6[_0x5546ba(0x10a,0x3f9,0xff,0x5a)+'t']=_0x5546ba(0x7be,0x50c,0x525,0x741),_0x5942d6['id']='donate';const _0x1352c2={};_0x1352c2['quickReply'+_0x5546ba(0x2a7,0x31e,0x1cb,0x2c0)]=_0x5942d6;const _0x22ddba={};_0x22ddba[_0x2e98f4(0x5ad,0x37f,0x3a1,0x1a1)+'t']=_0x2e98f4(0x1af,0x242,0x89,0x17f),_0x22ddba['id']='owner';const _0x1d2023={};_0x1d2023[_0x2e98f4(0x5bd,0x565,0x623,0x587)+_0x2e98f4(0x6ab,0x44b,0x2b4,0x1e2)]=_0x22ddba;const _0x385821={};_0x385821[_0x5546ba(0xec,0x1ab,0xff,0x1f3)+'t']=_0x2e98f4(0x15e,0x3f7,0x6e9,0x407),_0x385821['id']=_0x2e98f4(0xa40,0x82e,0x91f,0x6c2);const _0x496d89={};_0x496d89['quickReply'+'Button']=_0x385821;var but=[_0x4aeaa9,_0x5c9288,_0x1352c2,_0x1d2023,_0x496d89];alpha['send5ButLo'+'c'](i,_0x5546ba(0x201,0x367,0xe0,0x154)+_0x5546ba(0x2c6,0x5eb,0x3c0,0x177)+text,'©\x20'+ownername,ranflam,but);}reply('Sukses\x20Men'+_0x5546ba(0x409,0x78c,0x569,0x7cc)+_0x2e98f4(0x777,0x75d,0xa1b,0x6d9)+anu[_0x5546ba(0x3f3,0x10d,0xc8,-0x16d)]+(_0x2e98f4(0x848,0x844,0xad7,0xb37)+'t'));}break;case _0x2e98f4(0x610,0x4d3,0x231,0x4e5):case _0x2e98f4(0x263,0x455,0x48b,0x1fd):case _0x2e98f4(0x482,0x2c0,0x5ca,0xfc):{if(!m['isGroup'])return reply(mess['group']);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x5546ba(0x15a,0xf7,0x169,0x49c)]());if(!/webp/[_0x2e98f4(0x582,0x48c,0x429,0x254)](mime))return reply(_0x2e98f4(0x693,0x3eb,0x311,0x4ba)+_0x2e98f4(-0xfa,0x1ff,-0xb1,0x501)+_0x2e98f4(0x569,0x4ec,0x604,0x53a)+(prefix+command));quoted[_0x5546ba(0x55a,0x30f,0x320,0x4d3)]()[_0x2e98f4(0x66f,0x3b1,0x38a,0x43c)](async _0x5cdf76=>{const _0x4c1dae={};_0x4c1dae[_0x515537(0x4cf,0x58f,0x8cc,0x3fd)]=fkontak;function _0x515537(_0x3c1b12,_0xfb261e,_0x43fef6,_0x1768b0){return _0x2e98f4(_0x3c1b12,_0xfb261e-0x6c,_0x43fef6-0x19b,_0x1768b0-0xb5);}function _0x4b7527(_0x49f251,_0x1da9d9,_0x12745b,_0x59aaf9){return _0x5546ba(_0x49f251-0x104,_0x1da9d9-0x1cd,_0x12745b-0x129,_0x49f251);}alpha[_0x4b7527(0x75e,0x559,0x422,0x234)+'e'](m[_0x515537(0xac1,0x7da,0x6cf,0x60a)],{'sticker':_0x5cdf76,'mentions':groupMembers[_0x515537(0x54d,0x771,0x978,0x4c5)](_0x4681ac=>_0x4681ac['id'])},_0x4c1dae);});}break;case _0x2e98f4(0x5a6,0x581,0x7e6,0x54f):case _0x2e98f4(0x457,0x478,0x3dc,0x1fd):{if(!m['isGroup'])return reply(mess[_0x2e98f4(0x148,0x480,0x3fc,0x2b7)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x5546ba(0x1b4,-0x16c,0x169,0x2ae)]());if(!/video/[_0x5546ba(0x12d,-0xc7,0x20c,0x3d8)](mime))return reply(_0x2e98f4(0x786,0x7ce,0x5b3,0xa63)+_0x5546ba(0x2ec,0x400,0x3ba,0x372)+_0x2e98f4(0x64f,0x4f7,0x3fa,0x813)+_0x5546ba(0x4d5,0x600,0x2c0,0x273)+(prefix+command));quoted['download']()[_0x5546ba(0x1de,0x302,0x131,0x475)](async _0x1cf8c5=>{function _0x1bc583(_0x297e75,_0x88e3a4,_0x52c122,_0x5d7c9d){return _0x2e98f4(_0x88e3a4,_0x5d7c9d-0x1f7,_0x52c122-0x1c1,_0x5d7c9d-0xab);}function _0x4a1bb0(_0x10cee8,_0x5d7db9,_0xfa70c7,_0x31f101){return _0x2e98f4(_0xfa70c7,_0x5d7db9-0x171,_0xfa70c7-0x178,_0x31f101-0x7d);}const _0x3c008b={};_0x3c008b[_0x4a1bb0(0x598,0x694,0x684,0x63d)]=fkontak,alpha[_0x1bc583(0x794,0x503,0x583,0x770)+'e'](m[_0x4a1bb0(0xa31,0x8df,0xb20,0x666)],{'video':_0x1cf8c5,'mentions':groupMembers['map'](_0x283bfa=>_0x283bfa['id'])},_0x3c008b);});}break;case _0x2e98f4(0x516,0x6a8,0x580,0x605):case'voicetag':{if(!m[_0x2e98f4(0x2d,0x2f0,0x323,0x553)])return reply(mess['group']);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x5546ba(0x1ed,0x14b,0x169,-0x5c)]());if(!/audio/[_0x2e98f4(0x577,0x48c,0x636,0x1af)](mime))return reply(_0x5546ba(0x82f,0x5a6,0x54e,0x81b)+_0x2e98f4(0x280,0x555,0x6d1,0x3f9)+'ngan\x20capti'+_0x2e98f4(0x452,0x540,0x673,0x475)+(prefix+command));quoted['download']()[_0x2e98f4(0x158,0x3b1,0x351,0x55b)](async _0x472abd=>{const _0x2c1ff1={};function _0x2b744c(_0x4607dd,_0x2d702f,_0x1d1ba7,_0x3e681b){return _0x5546ba(_0x4607dd-0x2b,_0x2d702f-0x167,_0x1d1ba7- -0x18f,_0x4607dd);}function _0x341060(_0x2a57d1,_0x3cfba1,_0x1d5363,_0x37f0d0){return _0x5546ba(_0x2a57d1-0x12e,_0x3cfba1-0x1d2,_0x3cfba1-0x4fc,_0x1d5363);}_0x2c1ff1[_0x2b744c(0xa7,0x422,0x114,0xda)]=fkontak,alpha[_0x341060(0xab2,0x7f5,0x6b9,0xa86)+'e'](m['chat'],{'audio':_0x472abd,'ptt':!![],'mimetype':'audio/mpeg','mentions':groupMembers[_0x341060(0xbcb,0x981,0x767,0xb3c)](_0x25e11e=>_0x25e11e['id'])},_0x2c1ff1);});}break;case _0x5546ba(0x136,-0x1fc,0xb2,-0x1ce):case _0x5546ba(-0x15,0x16a,-0x42,-0x6):case _0x5546ba(0x7ff,0x2c2,0x4e6,0x6e4):{if(!m[_0x2e98f4(0x2ce,0x2f0,0x5dc,0x495)])return reply(mess[_0x2e98f4(0x7c3,0x480,0x6c9,0x4eb)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x2e98f4(0x49f,0x3e9,0x57e,0x722)]());if(!/image/[_0x2e98f4(0x148,0x48c,0x5c0,0x416)](mime))return reply('Kirim/repl'+_0x2e98f4(0x18c,0x2e4,0x482,0x24d)+_0x2e98f4(0x341,0x487,0x184,0x4d6)+'n\x20'+(prefix+command));quoted[_0x5546ba(0x47f,0x329,0x320,0x53f)]()[_0x2e98f4(0x234,0x3b1,0x1d4,0x2e3)](async _0x1e4526=>{const _0x3f31c4={};function _0xc4a8ae(_0x25e8d6,_0x5dc67b,_0x2996ac,_0x4ffaa9){return _0x5546ba(_0x25e8d6-0x18,_0x5dc67b-0x47,_0x2996ac-0x1b5,_0x5dc67b);}_0x3f31c4[_0x16e89c(0x5a8,0x811,0x8c2,0x7ba)]=fkontak;function _0x16e89c(_0x3a2e9d,_0x20f34e,_0x175af4,_0x51cf18){return _0x2e98f4(_0x51cf18,_0x20f34e-0x2ee,_0x175af4-0x132,_0x51cf18-0x15c);}alpha[_0x16e89c(0xaac,0x867,0x5db,0x907)+'e'](m[_0x16e89c(0xa8c,0xa5c,0x976,0x74c)],{'image':_0x1e4526,'mentions':groupMembers[_0xc4a8ae(0x825,0x369,0x63a,0x4cf)](_0x1c4b35=>_0x1c4b35['id'])},_0x3f31c4);});}break;case _0x2e98f4(0x1ca,0x35a,0x1bc,0x565):case'tr':{if(!text)return reply(_0x2e98f4(0x326,0x211,0x1e5,0x527)+_0x2e98f4(0x306,0x399,0x539,0x7a)+_0x2e98f4(0x799,0x746,0x514,0x83b)+(prefix+command)+(_0x2e98f4(0x516,0x811,0x859,0x7c0)+_0x5546ba(0x761,0x592,0x5e4,0x6eb)+_0x5546ba(0x60,0xc6,0x334,0x4d3)+_0x2e98f4(0x899,0x5a1,0x41d,0x83c)+_0x5546ba(0xf6,0x50e,0x359,0x1cb)+'\x20')+(prefix+command)+(_0x5546ba(0x329,0x85a,0x591,0x596)+_0x5546ba(0x5fa,0x206,0x516,0x56c)+_0x5546ba(0x10d,0xd4,0x2bc,0x246)+_0x2e98f4(0x1b0,0x209,0x34e,0x549)+'kung\x20:\x20htt'+_0x2e98f4(0x5e6,0x2e8,0x29,0x36e)+_0x5546ba(0x2d3,-0x128,-0x5,-0x198)+_0x5546ba(0x10f,0x191,0x345,0x3ec)+'e/docs/lan'+_0x5546ba(0x2f9,-0x217,0x65,0x11e)));let teks=m[_0x5546ba(0x1d5,-0x23,0x2a3,-0x89)]?quoted[_0x5546ba(0x509,0x38e,0x3df,0x271)]:quoted[_0x5546ba(0x224,0x25f,0x3df,0x265)][_0x5546ba(-0x23d,-0x28a,0x58,0x27b)](args[-0xeeb+0x9*-0x14b+0x1a8e])[-0x2*0xde7+0x2*0x110b+-0x647];const _0x36000e={};_0x36000e['to']=args[-0x1*-0x9c3+-0x6c2+0x301*-0x1],translate(teks,_0x36000e)[_0x2e98f4(0x562,0x3b1,0x5cb,0x313)](_0xa28fe6=>{function _0x20eeb1(_0x93bf7d,_0x1fded3,_0x2798c2,_0x238bb5){return _0x5546ba(_0x93bf7d-0x1c8,_0x1fded3-0x113,_0x93bf7d-0x517,_0x1fded3);}function _0x3e12e5(_0x43eba1,_0x417c90,_0xe3aa50,_0x2690e6){return _0x2e98f4(_0x417c90,_0x43eba1-0x107,_0xe3aa50-0x4f,_0x2690e6-0x130);}alpha[_0x3e12e5(0x4ad,0x266,0x242,0x1ac)](m[_0x20eeb1(0xa05,0xcff,0xa49,0x78c)],''+_0xa28fe6['text'],m);});}break;case _0x2e98f4(0x5e0,0x380,0x542,0x336):{if(!db[_0x2e98f4(0x650,0x81c,0x65a,0x5aa)][_0x2e98f4(0x50e,0x4fc,0x552,0x45a)][m['chat']][_0x5546ba(-0x4b,0xcc,0x27a,-0x73)])return reply(_0x2e98f4(0x55c,0x67c,0x537,0x3be)+'\x20belum\x20di\x20'+_0x2e98f4(0x484,0x4a3,0x227,0x5d3));if(!text)return reply(_0x5546ba(0x5dd,0x616,0x3d3,0x69f)+'ntah\x20*'+(prefix+command)+(_0x5546ba(0x487,0x5bc,0x3f1,0x699)+_0x5546ba(0x321,0x10d,0x13a,0x302)+'m/video-13'+_0x5546ba(0x3f6,0x170,0xf7,-0x1c4)+_0x5546ba(-0x4b,-0xdc,0xc0,-0x198)+_0x5546ba(0x3b3,0x1af,0x2bb,0x197)+_0x5546ba(0x572,0x4a2,0x5ec,0x8a6)+'8_ans_en_t'+_0x2e98f4(0x2e1,0x5cb,0x6f2,0x756)+_0x2e98f4(0xac5,0x7a2,0x685,0x595)+_0x5546ba(0x21a,0x52f,0x349,0x19a)+_0x2e98f4(0x22b,0x448,0x211,0x4cd)+_0x2e98f4(0x69c,0x5cc,0x4df,0x347)+_0x5546ba(-0x2d3,-0x272,-0x98,-0x252)));function xnxxsearch(_0x3a5d22){const _0x219b24={'BmslT':_0x1ba446(0x593,0x41e,0x3ed,0x41e),'VYCLN':function(_0x3ca194,_0x3ed860){return _0x3ca194===_0x3ed860;},'xhAZp':'xicwJ','jWlMy':_0x4f5adb(0x692,0x228,0x365,0x435),'yfdxw':function(_0x122aa9,_0x45bc7d){return _0x122aa9(_0x45bc7d);},'NIgAm':function(_0x3029f6,_0x110d36){return _0x3029f6+_0x110d36;},'romOH':_0x4f5adb(0x812,0x2f7,0x591,0x3f4),'LnfMC':function(_0x5b9db,_0x51f1b1){return _0x5b9db!==_0x51f1b1;},'MTYmW':_0x1ba446(0x370,-0x4,-0xbd,0x265),'xdcoC':function(_0xf623d9,_0x3239b9){return _0xf623d9(_0x3239b9);},'oRYjc':_0x4f5adb(0x702,0x3e6,0x56a,0x759),'KgTnf':'p.metadata','GkaoJ':function(_0x260928,_0x1c15eb){return _0x260928<_0x1c15eb;},'mADja':function(_0x44f616,_0x273869){return _0x44f616(_0x273869);},'BQMnD':_0x1ba446(-0x167,0x283,0x263,0x1ba)+_0x4f5adb(0x396,0x663,0x568,0x323),'RIfVm':function(_0x5d7b6d,_0x423d1a,_0x2d3a8e){return _0x5d7b6d(_0x423d1a,_0x2d3a8e);},'pVXPg':function(_0x1b0764,_0x169225){return _0x1b0764*_0x169225;},'eBvie':'get'};function _0x1ba446(_0x22418c,_0x1ba394,_0x358e2d,_0x828f5f){return _0x2e98f4(_0x22418c,_0x828f5f- -0x95,_0x358e2d-0xc2,_0x828f5f-0xa2);}function _0x4f5adb(_0x49c185,_0x1f866d,_0x263a03,_0x213357){return _0x2e98f4(_0x1f866d,_0x263a03-0x100,_0x263a03-0xe0,_0x213357-0x61);}return new Promise((_0x37bcc0,_0x108e06)=>{function _0x56a924(_0x428ef8,_0xe6f1c9,_0x441a2c,_0x3c177d){return _0x1ba446(_0x441a2c,_0xe6f1c9-0x191,_0x441a2c-0x106,_0xe6f1c9-0x1e4);}const _0x33f69d={'xtmKP':_0x219b24[_0x5c91eb(0x83f,0xa66,0x841,0x960)],'iRuQx':_0x5c91eb(0x8aa,0x974,0x867,0x996),'XcmYO':function(_0x4a2de8,_0x5456f3){function _0x34a573(_0x252916,_0x8bdee4,_0x680412,_0x191ff9){return _0x5c91eb(_0x8bdee4- -0x229,_0x680412,_0x680412-0x1e8,_0x191ff9-0x198);}return _0x219b24[_0x34a573(0xbe5,0x927,0x9e9,0x6a6)](_0x4a2de8,_0x5456f3);},'YKcBu':_0x219b24[_0x56a924(0x83f,0x7e2,0x4c3,0x5a1)],'ULKiD':_0x219b24[_0x5c91eb(0x99b,0xc58,0x6ce,0xa33)],'CjoAb':function(_0x4a02a4,_0x55e78e){function _0x442724(_0x555774,_0xdaabc0,_0x3a5b59,_0x465f8b){return _0x56a924(_0x555774-0x15b,_0x465f8b-0x8e,_0x3a5b59,_0x465f8b-0xce);}return _0x219b24[_0x442724(0xb33,0xc71,0x806,0x9e0)](_0x4a02a4,_0x55e78e);},'ludic':_0x56a924(0x553,0x879,0x882,0x8e7)+_0x56a924(0x6a1,0x4c3,0x650,0x6ff),'DOppo':function(_0x32964c,_0x29cc4b){return _0x219b24['NIgAm'](_0x32964c,_0x29cc4b);},'BlVeV':_0x219b24['romOH'],'XSxrW':function(_0xccc12f,_0x1ac59a){return _0x219b24['LnfMC'](_0xccc12f,_0x1ac59a);},'pTcKY':_0x219b24[_0x56a924(0xb8,0x385,0x5b8,0xa3)],'DqPlm':function(_0x3d52b2,_0x2c3cb4){function _0x2864c4(_0xf7cfe7,_0x1487d5,_0x5d8f33,_0x264f85){return _0x5c91eb(_0x5d8f33- -0x185,_0xf7cfe7,_0x5d8f33-0x19,_0x264f85-0x12b);}return _0x219b24[_0x2864c4(0xb2c,0xc2b,0xa01,0x909)](_0x3d52b2,_0x2c3cb4);},'IzVXA':_0x219b24['oRYjc'],'YZupU':_0x219b24[_0x5c91eb(0x877,0x634,0x8c3,0xb29)],'UTMDx':'div.mozaiq'+'ue','odmvR':function(_0x1f2ad6,_0x48061d){return _0x1f2ad6(_0x48061d);},'clglR':function(_0x1faedc,_0xdbc29){return _0x219b24['GkaoJ'](_0x1faedc,_0xdbc29);},'cyieG':function(_0x3cd22d,_0x3506d7){function _0x3dd350(_0x528ae4,_0x19aa86,_0x2dc179,_0x1643a5){return _0x56a924(_0x528ae4-0x1e,_0x19aa86-0x149,_0x2dc179,_0x1643a5-0x40);}return _0x219b24[_0x3dd350(0x920,0x626,0x34a,0x872)](_0x3cd22d,_0x3506d7);}};function _0x5c91eb(_0x3fb298,_0x314df9,_0x3a71a3,_0x549ab6){return _0x1ba446(_0x314df9,_0x314df9-0x12,_0x3a71a3-0x56,_0x3fb298-0x3b3);}const _0x4cc394=_0x219b24['BQMnD'];_0x219b24[_0x56a924(0x982,0x992,0x820,0x9c0)](fetch,_0x4cc394+_0x5c91eb(0x7a8,0x947,0x628,0x8a7)+_0x3a5d22+'/'+_0x219b24[_0x5c91eb(0x843,0x7d8,0x5c1,0xb03)](Math[_0x56a924(0x70f,0x7da,0xab2,0x6e9)](_0x219b24[_0x5c91eb(0xb4b,0xe7c,0x8e5,0xa6b)](Math[_0x5c91eb(0x956,0xb17,0xa19,0x910)](),-0x508+-0x168d+0x1b98)),0x26e+0x29*-0x28+-0x1*-0x3fb),{'method':_0x219b24['eBvie']})[_0x5c91eb(0x6cf,0x749,0x483,0x79a)](_0x4ddb73=>_0x4ddb73['text']())[_0x5c91eb(0x6cf,0x62c,0x5ce,0x984)](_0x281969=>{const _0x2767de={'dfuyg':function(_0x41d62b,_0x4f12e8){function _0x295b62(_0x2d1995,_0x47ae87,_0x204651,_0x4845f6){return _0x5617(_0x47ae87- -0x231,_0x2d1995);}return _0x33f69d[_0x295b62(0x437,0x450,0x3bb,0x5d9)](_0x41d62b,_0x4f12e8);},'kWHfy':_0x33f69d[_0x4095b8(0xc68,0xaff,0xd9c,0xaa5)],'WlvYH':function(_0x310895,_0x292319){return _0x33f69d['XSxrW'](_0x310895,_0x292319);},'wNjks':_0x33f69d[_0x4095b8(0x53f,0x89e,0x819,0x735)],'WoMvG':function(_0x433934,_0x201585){function _0x167a60(_0x5b0b6a,_0x553b78,_0x3ac4b7,_0x28523e){return _0x471ba8(_0x5b0b6a-0x170,_0x553b78-0x194,_0x5b0b6a,_0x28523e-0x9e);}return _0x33f69d[_0x167a60(0x2b6,0x405,0x6d6,0x440)](_0x433934,_0x201585);},'NDavF':_0x33f69d[_0x4095b8(0xae0,0xc1d,0x78f,0x946)],'LjISD':_0x33f69d['YZupU'],'DSOvp':function(_0x570b09,_0x1561ed){function _0xa8938b(_0x496f97,_0x3f97d6,_0x2dbd92,_0x325a05){return _0x4095b8(_0x496f97-0xa4,_0x325a05,_0x2dbd92-0x19a,_0x2dbd92-0x90);}return _0x33f69d[_0xa8938b(0x89d,0xa1e,0x6e3,0x661)](_0x570b09,_0x1561ed);}},_0x2f81d2={};_0x2f81d2['xmlMode']=![];let _0x28d90b=cheerio[_0x4095b8(0x872,0x6a1,0x795,0x66b)](_0x281969,_0x2f81d2),_0x314b5e=[];function _0x471ba8(_0x427caa,_0x5930b3,_0x3ed30f,_0x1c0301){return _0x5c91eb(_0x1c0301- -0x3a0,_0x3ed30f,_0x3ed30f-0x14f,_0x1c0301-0x141);}let _0x211bd7=[],_0x36916f=[],_0x78cb03=[];_0x33f69d[_0x4095b8(0x38c,0x7e3,0x7df,0x6b9)](_0x28d90b,_0x33f69d['UTMDx'])[_0x471ba8(0x308,0x68d,0x4a7,0x5e7)](function(_0x558450,_0x47a158){const _0x526340={'jDqdE':function(_0x5496be,_0x1c7a77){return _0x5496be(_0x1c7a77);},'YbFHp':function(_0x395d00,_0x4a0c12){return _0x395d00(_0x4a0c12);},'EzgOQ':function(_0x2d5fb5,_0x26671f){return _0x2d5fb5-_0x26671f;},'oFgLt':function(_0x1ccd98,_0x20c731){return _0x2767de['dfuyg'](_0x1ccd98,_0x20c731);},'YPldr':_0x2767de[_0x50167f(0x4f7,0x2c6,0x6ad,0x543)],'nJNvE':_0x50167f(0x84e,0x2d0,0x6a8,0x5b6)};function _0x50167f(_0x47374a,_0x5be216,_0x3e61ac,_0x4bb1b2){return _0x4095b8(_0x47374a-0x4d,_0x3e61ac,_0x3e61ac-0x112,_0x4bb1b2- -0x233);}function _0x27845a(_0x2cb63f,_0x33481a,_0x546f6d,_0x544931){return _0x4095b8(_0x2cb63f-0x119,_0x546f6d,_0x546f6d-0x62,_0x2cb63f- -0x206);}if(_0x2767de[_0x50167f(0x376,0x511,0x47f,0x32a)](_0x2767de[_0x50167f(0x881,0x71c,0x60d,0x6ab)],_0x2767de[_0x27845a(0x6d8,0x741,0x4d9,0x3a0)])){const _0x19a61d=('5|1|4|6|2|'+_0x27845a(0x5e2,0x782,0x703,0x423))[_0x27845a(0x367,0x1e3,0x21b,0x2a7)]('|');let _0x2352c1=-0xc06+-0xde0+0x1fe*0xd;while(!![]){switch(_0x19a61d[_0x2352c1++]){case'0':var _0x4eec12=_0x526340[_0x50167f(0x21d,0x537,0x240,0x4ce)](_0x2f094e,_0x33a75a);continue;case'1':_0x3a591f=_0x5c6b15['join']('\x20');continue;case'2':var _0x581c71=_0x526340[_0x50167f(0x282,0x3d,0x50e,0x2ea)](_0x1b8a85,_0x54fa49);continue;case'3':_0x526340[_0x50167f(0x4b1,0x60f,0x26d,0x2ea)](_0x3b6f3e,''+_0x526340[_0x50167f(0x5b5,0x54f,0x5af,0x41d)](_0x581c71,_0x4eec12));continue;case'4':_0x491a74=_0x2beafd[_0x50167f(-0x6,0x23c,0x47d,0x33a)]('-')[-0x51b*-0x6+0x2c5*-0x1+-0x3fb*0x7];continue;case'5':if(!_0x4084f0[_0x50167f(0xa87,0xae9,0xaa3,0x880)]('-'))return _0x3e4dab(_0x50167f(0x2de,0x23c,0x2c4,0x3bf)+_0x526340['oFgLt'](_0x289300,_0x5f0ae2)+'\x201-2');continue;case'6':_0x25a512=_0x86f915[_0x27845a(0x367,0x352,0x68f,0x1b8)]('-')[-0xd54+0x2563+-0xc07*0x2];continue;}break;}}else _0x2767de['WoMvG'](_0x28d90b,_0x47a158)[_0x27845a(0x2eb,0x517,0x27e,0x423)](_0x2767de[_0x27845a(0x44b,0x373,0x42d,0x443)])[_0x27845a(0x6f8,0x6da,0x3da,0xa20)](function(_0x1ce2a1,_0x29f9ae){function _0x41e117(_0x54d2d3,_0x4276f7,_0x3941d7,_0xeacbaf){return _0x50167f(_0x54d2d3-0x11c,_0x4276f7-0x1d8,_0x4276f7,_0xeacbaf- -0x256);}function _0x345624(_0x533f24,_0x535e99,_0x2a0550,_0x28b9c7){return _0x50167f(_0x533f24-0x109,_0x535e99-0xf3,_0x533f24,_0x2a0550- -0x461);}if(_0x526340[_0x41e117(0x2d5,-0x144,-0x10e,0x1eb)]===_0x526340[_0x41e117(0x39a,0x2a,0x1d0,0x1eb)])_0x211bd7[_0x345624(-0x3f4,-0x160,-0x161,-0x85)](_0x4cc394+_0x526340[_0x345624(-0x2e1,-0x72,-0x177,0xa4)](_0x28d90b,_0x29f9ae)[_0x41e117(-0xff,0x358,-0x245,0x68)]('a')['attr'](_0x41e117(0x69e,0x397,0x722,0x568))[_0x345624(0x24c,0x1ae,0x1e5,0x4cb)](_0x526340['nJNvE'],'/'));else return _0x5974d4[_0x41e117(0x885,0x49c,0x6e7,0x628)];});}),_0x33f69d[_0x471ba8(0x8f4,0x7ba,0x435,0x5cc)](_0x28d90b,_0x33f69d[_0x471ba8(0x5ab,0x732,0x577,0x797)])[_0x4095b8(0x829,0x782,0x9fb,0x8fe)](function(_0x51846a,_0x534bed){function _0x3b0ba5(_0x3ff97f,_0xf61c60,_0x22c18a,_0x366297){return _0x4095b8(_0x3ff97f-0x108,_0xf61c60,_0x22c18a-0x5f,_0x366297- -0x4fe);}const _0x2ceab9={};_0x2ceab9['qkzWF']=_0x33f69d[_0x25e34d(0x881,0x6ba,0x5ff,0x9ad)],_0x2ceab9[_0x3b0ba5(0xa4,0x92,0x2da,0x2aa)]=_0x33f69d['iRuQx'];const _0x5494f2=_0x2ceab9;function _0x25e34d(_0x98e201,_0x2270aa,_0x223dcd,_0x201ce4){return _0x471ba8(_0x98e201-0xe7,_0x2270aa-0x1da,_0x201ce4,_0x2270aa-0x282);}if(_0x33f69d['XcmYO'](_0x33f69d[_0x3b0ba5(0x591,0x7b4,0x6f2,0x564)],_0x33f69d[_0x25e34d(0x7e5,0x9d9,0x777,0x923)])){const _0xdeb66c={};_0xdeb66c['url']=_0x22acc5[_0x25e34d(0x693,0x65b,0x7d6,0x680)][0x4*-0x381+0x10bd*-0x2+0x2f7f][_0x3b0ba5(0x2ad,0x444,0x38e,0x40a)];const _0xcf258c={};_0xcf258c[_0x3b0ba5(0xdc,0x673,0x5ab,0x3bf)]=_0xdeb66c,_0xcf258c['mimetype']=_0x5494f2['qkzWF'],_0xcf258c[_0x25e34d(0x2a3,0x463,0x72b,0x651)]=_0x25e34d(0x366,0x453,0x59e,0x5e8)+_0x25e34d(0x5af,0x43a,0x188,0x4ed);const _0x290d8f={};_0x290d8f[_0x25e34d(0x5f0,0x723,0x804,0x86b)]=_0xafd0a6,_0x5b5175[_0x3b0ba5(0x603,0x380,0xd4,0x310)+'e'](_0x4f20b4[_0x25e34d(0x8b4,0x96e,0x694,0xc7c)],_0xcf258c,_0x290d8f);}else _0x33f69d[_0x3b0ba5(0x2ad,0x12e,-0x8c,0x155)](_0x28d90b,_0x534bed)['find'](_0x33f69d[_0x3b0ba5(0x47e,-0x16a,-0x2,0x18b)])[_0x3b0ba5(0x51f,0x5b6,0x482,0x400)](function(_0x208b96,_0x203bed){function _0x3394da(_0x4ae6ce,_0x12b5b2,_0x5cda2c,_0x593357){return _0x25e34d(_0x4ae6ce-0x1f1,_0x12b5b2-0x106,_0x5cda2c-0x1de,_0x4ae6ce);}function _0x4e4166(_0x200c77,_0x491ae5,_0x2b825f,_0x82dba7){return _0x3b0ba5(_0x200c77-0x8,_0x491ae5,_0x2b825f-0x76,_0x200c77-0x443);}_0x4e4166(0x612,0x5c7,0x564,0x313)!==_0x4e4166(0x8a1,0x726,0x6bd,0x5bf)?(_0x36916f['push'](_0x2767de[_0x3394da(0x51e,0x5ef,0x722,0x404)](_0x28d90b,_0x203bed)['find'](_0x2767de[_0x3394da(0x8ff,0x877,0x5aa,0x9d3)])[_0x3394da(0xc68,0x965,0xba6,0xb3d)]()),_0x2767de[_0x3394da(0x538,0x6f0,0x46c,0x85d)](_0x28d90b,_0x203bed)['find']('a')[_0x3394da(0x6fc,0x96f,0x685,0x809)](function(_0x18ecb2,_0x6d29d9){function _0x187683(_0x2a0eb0,_0x49b07e,_0x461f1a,_0x498c8d){return _0x3394da(_0x2a0eb0,_0x498c8d- -0x12,_0x461f1a-0x1a4,_0x498c8d-0x13e);}function _0x4496f6(_0x518884,_0x21c14c,_0x433c98,_0x2d401f){return _0x3394da(_0x433c98,_0x21c14c- -0x419,_0x433c98-0x188,_0x2d401f-0xd8);}_0x314b5e[_0x4496f6(-0x18a,0x18b,0x175,0x2a7)](_0x28d90b(_0x6d29d9)[_0x4496f6(0x5d3,0x6cf,0x780,0x460)](_0x5494f2[_0x4496f6(0x2fa,0x400,0x2a7,0x1c9)]));})):_0x110ad1['push'](_0x5bf2f7);});});function _0x4095b8(_0x15c7b4,_0x1a4ce1,_0x273f61,_0x174dda){return _0x5c91eb(_0x174dda- -0x89,_0x1a4ce1,_0x273f61-0x150,_0x174dda-0x3e);}for(let _0xe9c3f1=-0x230d+0xd56+-0x11*-0x147;_0x33f69d[_0x4095b8(0x641,0x9e7,0xc12,0x8f5)](_0xe9c3f1,_0x314b5e['length']);_0xe9c3f1++){const _0x4bcb59={};_0x4bcb59['title']=_0x314b5e[_0xe9c3f1],_0x4bcb59['info']=_0x36916f[_0xe9c3f1],_0x4bcb59[_0x4095b8(0x5dd,0x8fd,0x3ca,0x628)]=_0x211bd7[_0xe9c3f1],_0x78cb03[_0x4095b8(0x713,0x305,0x2cf,0x533)](_0x4bcb59);}const _0x35e04c={};_0x35e04c[_0x4095b8(0x5ee,0x555,0x3db,0x618)]=0xc8,_0x35e04c[_0x471ba8(0x6eb,0x338,0x2c5,0x607)]=!![],_0x35e04c[_0x4095b8(0x8d5,0xd42,0x844,0xaa9)]=_0x78cb03,_0x33f69d[_0x4095b8(0x550,0x453,0x7f4,0x69c)](_0x37bcc0,_0x35e04c);})[_0x56a924(0x489,0x418,0x734,0x55a)](_0x3b6283=>_0x108e06({'code':0x1f7,'status':![],'result':_0x3b6283}));});}xnxxsearch(''+q)[_0x5546ba(0x402,0x247,0x131,0x3b8)](async _0x4c334b=>{const _0xc6c8bc={'GYyJl':function(_0x4bbe4e,_0x1aa199){return _0x4bbe4e(_0x1aa199);},'qCtMq':function(_0x397069,_0x2bf230){return _0x397069!==_0x2bf230;},'soHbq':function(_0x43f18a,_0xa763a1){return _0x43f18a+_0xa763a1;},'SQRRq':_0x4433b6(0x367,0x1ed,0x1eb,0x5b4)+'h'};let _0x59de56=_0x4141c8(0xaad,0x7bc,0x894,0x7ec)+_0x4433b6(0x393,0x11c,0x17d,0x105)+_0x4433b6(0x67d,0x42a,0x721,0x3a8)+'*\x0a\x0a';function _0x4433b6(_0x4da020,_0xd0e97d,_0x25c310,_0x4a342f){return _0x2e98f4(_0xd0e97d,_0x4da020- -0x67,_0x25c310-0x10b,_0x4a342f-0x15);}function _0x4141c8(_0x2cf589,_0x2a034c,_0x3578dd,_0x2ea257){return _0x2e98f4(_0x3578dd,_0x2a034c-0x174,_0x3578dd-0x13f,_0x2ea257-0x166);}for(let _0x4d3e02 of _0x4c334b['result']){_0xc6c8bc[_0x4141c8(0x8fc,0x91a,0xb52,0xbe1)]('WRUgJ',_0x4141c8(0x61f,0x80a,0x600,0x978))?_0xc6c8bc[_0x4433b6(0x5b3,0x42b,0x62f,0x5d9)](_0x1961ea,_0x27fcc3[_0x4433b6(0x6cd,0x8d8,0x5f5,0x839)]()):(_0x59de56+='*📫\x20Title\x20:'+'*\x20'+_0x4d3e02['title']+'\x0a',_0x59de56+=_0x4433b6(0x65b,0x5d6,0x911,0x43a)+_0x4d3e02[_0x4141c8(0x752,0x507,0x2e4,0x231)]+('\x0a---------'+_0x4433b6(0x3df,0x6a9,0x5dd,0x5ff)+'----------'+_0x4433b6(0x3df,0x4a9,0x280,0xa7)+_0x4433b6(0x3df,0x695,0x1a2,0x4d2)+_0x4433b6(0x599,0x3a2,0x568,0x352)));}await alpha['sendMessag'+'e'](m['chat'],{'image':{'url':_0xc6c8bc[_0x4433b6(0x7a5,0x6d0,0x5f2,0xad7)](picak,_0xc6c8bc['SQRRq'])},'caption':_0x59de56},{'quoted':m});})['catch'](_0x9ee5bf=>{function _0x3ef4a0(_0xe34fd9,_0x43b7e1,_0x1f73c7,_0x51e487){return _0x5546ba(_0xe34fd9-0x12,_0x43b7e1-0xe8,_0x51e487-0x594,_0x43b7e1);}function _0x8e14ed(_0x5e66dd,_0x4d3368,_0x5a2bc8,_0x3599f0){return _0x5546ba(_0x5e66dd-0xd8,_0x4d3368-0xc4,_0x5a2bc8-0x3c,_0x5e66dd);}const _0x1d3956={'qOJFZ':function(_0x22a02c,_0xf880c){return _0x22a02c(_0xf880c);}};_0x1d3956[_0x8e14ed(0x349,0x149,0x427,0x745)](reply,lang[_0x3ef4a0(0x7d6,0xcf9,0x861,0xa48)]());});}break;case'xnxxdl':case'xnxxdownlo'+'ad':{if(!db[_0x2e98f4(0xb16,0x81c,0xb1a,0x7bf)][_0x2e98f4(0x7a5,0x4fc,0x58b,0x7f6)][m[_0x2e98f4(0x4e3,0x76e,0x439,0x867)]]['nsfw'])return reply('Fitur\x20nsfw'+_0x5546ba(0x45,0x3f1,0x37d,0x31c)+'aktifkan');if(!text)return reply('Kirim\x20peri'+_0x2e98f4(0x6e,0x29f,0x37a,-0x7a)+(prefix+command)+(_0x5546ba(0x2f3,0x3d3,0x3f1,0x416)+_0x5546ba(0x29f,-0x68,0x13a,0x129)+'m/video-13'+'6f9p3a/att'+_0x2e98f4(0x28a,0x340,0x45,0x456)+_0x2e98f4(0x301,0x53b,0x7d7,0x78e)+_0x2e98f4(0xab8,0x86c,0xafc,0x62e)+'8_ans_en_t'+'rain_de_se'+_0x5546ba(0x791,0x701,0x522,0x6cc)+_0x2e98f4(0x6a1,0x5c9,0x67c,0x8a1)+_0x2e98f4(0x5c9,0x448,0x10c,0x4ae)+_0x2e98f4(0x543,0x5cc,0x8a8,0x7b4)+'e_hentai*'));if(!text[_0x5546ba(0x2b7,0x288,0x59e,0x812)](_0x5546ba(0x119,0x289,-0x31,-0x2b7)+'w.xnxx.com'+'/'))return reply(_0x2e98f4(0x3cb,0x653,0x5ad,0x7ab)+'ntah\x20*'+(prefix+command)+(_0x2e98f4(0x703,0x671,0x8ae,0x5b2)+'ww.xnxx.co'+_0x5546ba(0x724,0x5ae,0x570,0x696)+_0x5546ba(0x1f6,-0x52,0xf7,0x385)+_0x2e98f4(0x315,0x340,0x4d9,0x45)+_0x5546ba(0x2c4,0x26a,0x2bb,0xa2)+_0x5546ba(0x6e9,0x4fb,0x5ec,0x91e)+_0x5546ba(0x44c,0x2d0,0x411,0x1a8)+'rain_de_se'+'_masturber'+'_avec_le_c'+_0x2e98f4(0x1ef,0x448,0x245,0x246)+_0x2e98f4(0x34c,0x5cc,0x414,0x8e5)+_0x5546ba(-0xa0,0x1d9,-0x98,-0xba)));function xnxxdl(_0x52b771){function _0x4a1450(_0x570159,_0x525546,_0x54c214,_0x855cf4){return _0x2e98f4(_0x54c214,_0x570159- -0x293,_0x54c214-0x108,_0x855cf4-0x87);}const _0x5314aa={'vqkMC':function(_0x52ef44,_0x7cb48f){return _0x52ef44(_0x7cb48f);},'guwVr':_0x24b92e(0x1a5,0x284,-0xef,-0x8c)+'rty=\x22og:ti'+_0x4a1450(0x78,-0x1a7,0x92,0x220),'zbMAk':_0x4a1450(0x26f,0x2ad,0x2a7,0x39),'GbjAp':function(_0x483aa0,_0x591388){return _0x483aa0(_0x591388);},'XEldc':_0x4a1450(-0x73,-0x326,-0x23e,-0xaa)+_0x24b92e(0x360,0x23a,0x194,0x25f)+_0x24b92e(0x41e,0x32e,0x28a,0x3d2),'Adifr':function(_0x154c32,_0x1148fe){return _0x154c32(_0x1148fe);},'aajHg':function(_0x113d43,_0x538066){return _0x113d43(_0x538066);},'URnEX':function(_0x46e90c,_0x8012b9){return _0x46e90c(_0x8012b9);},'BvNPB':'meta[prope'+'rty=\x22og:vi'+_0x24b92e(0x4e6,0x5c8,0x1e5,0x5b7)+']','YbQxt':function(_0x3308ea,_0x5062f0){return _0x3308ea(_0x5062f0);},'uqIel':_0x4a1450(0x5a4,0x5e2,0x3c7,0x7d1)+_0x24b92e(0x2b8,0x37a,0x21e,0x118)+_0x24b92e(0x177,-0xbe,-0xf1,-0xf5)+_0x4a1450(-0x50,-0x289,-0x94,0x23e),'nxRHR':_0x24b92e(0x7bc,0x862,0xa19,0x831)+_0x4a1450(0xa0,0xec,0x75,-0x16f)+_0x24b92e(0x48f,0x525,0x368,0x383)+')\x27\x5c);','JdvEu':_0x24b92e(0x7bc,0x9bd,0x874,0x973)+_0x24b92e(0x6ba,0x4ee,0x9c5,0x621)+_0x4a1450(0x485,0x524,0x527,0x5a4)+')\x27\x5c);','UEZKt':_0x4a1450(0x5a4,0x4e6,0x2c0,0x8bd)+'r.setThumb'+_0x4a1450(0x511,0x4e5,0x734,0x28a)+'\x27(.*?)\x27\x5c);','xnYtY':_0x4a1450(0x498,0x39d,0x2fb,0x541)};function _0x24b92e(_0x43f372,_0x20b887,_0x3fa600,_0x464453){return _0x5546ba(_0x43f372-0x127,_0x20b887-0x197,_0x43f372-0x205,_0x464453);}return new Promise((_0x134590,_0x30e773)=>{const _0x5821f1={};function _0x2ad3a9(_0x38d0b1,_0xc827cb,_0x3bb53d,_0x3f9a28){return _0x4a1450(_0x38d0b1-0x505,_0xc827cb-0x5b,_0x3bb53d,_0x3f9a28-0x149);}function _0x3d6779(_0x1fb925,_0x37b7fc,_0x37cad9,_0x3d3812){return _0x4a1450(_0x3d3812-0x3ed,_0x37b7fc-0x120,_0x37cad9,_0x3d3812-0x57);}_0x5821f1[_0x3d6779(0x78b,0x5f3,0x8a3,0x768)]=_0x5314aa[_0x2ad3a9(0x466,0x3cc,0x239,0x343)],fetch(''+_0x52b771,_0x5821f1)[_0x3d6779(0x76a,0x849,0x492,0x50b)](_0x42fdf7=>_0x42fdf7[_0x2ad3a9(0x8d1,0x6c3,0x8bf,0xa0b)]())[_0x2ad3a9(0x623,0x3c6,0x956,0x4a5)](_0x2b5734=>{const _0x188ba4={};_0x188ba4[_0x24abef(-0x115,-0x10c,-0x387,-0x425)]=![];let _0x26cb70=cheerio[_0x157b11(0x70a,0x586,0x7bf,0x9f7)](_0x2b5734,_0x188ba4);const _0x3a9d90=_0x5314aa['vqkMC'](_0x26cb70,_0x5314aa[_0x157b11(0x582,0x3d6,0x6af,0x843)])[_0x157b11(0xb16,0xb17,0xae3,0xdbe)](_0x5314aa[_0x157b11(0x8b8,0xb71,0x9e1,0x6c8)]),_0x5a84bf=_0x5314aa[_0x157b11(0xb55,0xdf6,0xe37,0xd81)](_0x26cb70,_0x5314aa[_0x157b11(0x6f5,0x86f,0x732,0x6ec)])[_0x157b11(0xb16,0xbb7,0xc72,0xbd6)](_0x5314aa[_0x24abef(-0xa6,0x1b7,-0x70,-0x138)]),_0x5d7fc9=_0x5314aa[_0x157b11(0x561,0x550,0x3fe,0x35f)](_0x26cb70,'meta[prope'+'rty=\x22og:im'+'age\x22]')[_0x24abef(0x65e,0x415,0x387,0x2ad)](_0x5314aa[_0x157b11(0x8b8,0x687,0xb36,0xa5c)]),_0x53e815=_0x5314aa[_0x157b11(0x84f,0x5dd,0xb23,0xb26)](_0x26cb70,_0x157b11(0x554,0x72a,0x5e8,0x2dd)+_0x157b11(0x57c,0x763,0x425,0x356)+_0x157b11(0x75d,0x499,0x6ef,0x9c9))[_0x157b11(0xb16,0x9b2,0xd0c,0xc7c)](_0x5314aa[_0x24abef(0xc1,0x1b7,0x2da,0x22f)]),_0x52fcb3=_0x5314aa[_0x24abef(-0x204,0x4d,0x314,-0xf)](_0x26cb70,_0x5314aa['BvNPB'])[_0x24abef(0x330,0x415,0x3eb,0x670)](_0x157b11(0x836,0xb06,0x69f,0x9d9)),_0xf755b7=_0x5314aa[_0x24abef(0x32f,0x14e,-0x17f,0x191)](_0x26cb70,_0x157b11(0x554,0x70c,0x712,0x5d4)+'rty=\x22og:vi'+_0x157b11(0xaa0,0x75e,0xa2b,0xd8a)+'\x22]')[_0x157b11(0xb16,0x899,0xa39,0x9ed)](_0x5314aa[_0x157b11(0x8b8,0xad4,0x6d5,0x7f1)]),_0x2ad5ee=_0x5314aa['URnEX'](_0x26cb70,'span.metad'+'ata')['text'](),_0x16b721=_0x5314aa[_0x24abef(0x3ca,0xb4,-0x48,-0xd0)](_0x26cb70,_0x24abef(0x1e0,0x3ef,0x6d2,0x12f)+_0x24abef(0xac,-0xba,-0x2a6,-0x3c0)+'cript:nth-'+'child(6)')['html']();function _0x24abef(_0x2582aa,_0x15088c,_0x25b676,_0x3f7601){return _0x3d6779(_0x2582aa-0x191,_0x15088c-0x12f,_0x3f7601,_0x15088c- -0x527);}const _0x187469={'low':(_0x16b721[_0x24abef(-0x2fc,-0x1bd,0x66,-0x21b)](_0x157b11(0xb6b,0x93d,0x89e,0xa0d)+_0x24abef(-0x32,-0x9a,0x1cd,-0x103)+_0x24abef(0x32c,0x164,0x32,0x3e2)+'.*?)\x27\x5c);')||[])[0x1d8b+-0x2341+0x5b7],'high':_0x16b721[_0x24abef(-0x80,-0x1bd,0x89,-0x2d)](_0x5314aa['uqIel']||[])[-0x4*-0x2e+0x26b*0xd+-0x2026],'HLS':_0x16b721['match'](_0x5314aa[_0x157b11(0x854,0x577,0x5f7,0x5e7)]||[])[-0x1*-0xb30+0x3*-0x706+0x1*0x9e3],'thumb':_0x16b721[_0x24abef(-0x2f0,-0x1bd,0xab,0x160)](_0x5314aa[_0x24abef(0x572,0x348,0x56e,0x312)]||[])[0x1*0x2203+0x173d+-0x393f],'thumb69':_0x16b721[_0x157b11(0x544,0x35e,0x768,0x457)](_0x24abef(0x151,0x46a,0x2ce,0x344)+_0x24abef(0x1b0,0x368,0x5eb,0x26f)+_0x24abef(-0x24d,-0xd5,-0x39a,0xf7)+_0x157b11(0x626,0x829,0x61d,0x83e)||[])[0x80*-0x2e+-0x2*-0x8fe+0x505*0x1],'thumbSlide':_0x16b721['match'](_0x157b11(0xb6b,0xe5f,0xa10,0xc03)+_0x157b11(0xa69,0x989,0x795,0xcdd)+_0x24abef(-0x249,-0x14a,-0x3f,-0x481)+_0x157b11(0x722,0x486,0x925,0x89d)||[])[0x2330+-0x4*0x646+-0xa17],'thumbSlideBig':_0x16b721[_0x24abef(0x19,-0x1bd,-0x406,-0x44d)](_0x5314aa[_0x157b11(0x5df,0x7e0,0x794,0x5c4)]||[])[0x1d02+-0x596+0x5*-0x4af]},_0x27e36e={};function _0x157b11(_0x430d71,_0x46a3a5,_0x26b1f9,_0x493097){return _0x2ad3a9(_0x430d71-0xc2,_0x46a3a5-0xa6,_0x493097,_0x493097-0x58);}_0x27e36e[_0x24abef(0x2f6,0x1bf,0x118,0x17e)]=_0x3a9d90,_0x27e36e['URL']=_0x52b771,_0x27e36e[_0x157b11(0x5ba,0x563,0x7f3,0x2b8)]=_0x5a84bf,_0x27e36e[_0x24abef(0x3f9,0x21f,0x51b,-0xae)]=_0x5d7fc9,_0x27e36e[_0x157b11(0x749,0x5ad,0x889,0x6af)]=_0x53e815,_0x27e36e[_0x157b11(0x9ed,0x803,0x6d7,0x83b)]=_0x52fcb3,_0x27e36e[_0x157b11(0x763,0x535,0x971,0x454)+'t']=_0xf755b7,_0x27e36e[_0x157b11(0x84b,0x6a9,0x5c7,0x8a5)]=_0x2ad5ee,_0x27e36e[_0x157b11(0x780,0x9d3,0x8ad,0x978)]=_0x187469;const _0x55427e={};_0x55427e['status']=0xc8,_0x55427e[_0x24abef(0x65c,0x447,0x65c,0x505)]=_0x27e36e,_0x5314aa['YbQxt'](_0x134590,_0x55427e);})['catch'](_0x2f7d93=>_0x30e773({'code':0x1f7,'status':![],'result':_0x2f7d93}));});}xnxxdl(args[0x1537*0x1+0x2327*0x1+-0xa*0x5a3])[_0x2e98f4(0x5ff,0x3b1,0x157,0x1e1)](async _0x463c67=>{function _0x4a73e9(_0xcb9862,_0x30a831,_0x26573b,_0x47dce1){return _0x2e98f4(_0xcb9862,_0x47dce1- -0x462,_0x26573b-0x14,_0x47dce1-0x1ef);}function _0x70788(_0x3c442d,_0x4ce0d5,_0x3e2bce,_0x1d73ac){return _0x2e98f4(_0x1d73ac,_0x3c442d-0xcb,_0x3e2bce-0x44,_0x1d73ac-0x7);}let _0x1cf855=_0x4a73e9(-0x499,0xab,-0xb4,-0x241)+_0x70788(0x52b,0x205,0x817,0x341)+'\x20」----*\x0a\x09\x0a'+_0x70788(0x5bc,0x40f,0x3e3,0x45c)+_0x463c67['result'][_0x70788(0x657,0x737,0x36b,0x409)]+(_0x70788(0x50c,0x306,0x226,0x760)+':\x20')+_0x463c67['result'][_0x70788(0x36e,0x56e,0x5f4,0x46b)]+(_0x4a73e9(-0x1d8,-0x2f8,0x225,-0xc5)+'\x20')+_0x463c67[_0x70788(0x8df,0xaea,0xa77,0x7d7)][_0x70788(0x784,0x8d4,0x808,0x5f7)]+('\x0a🌐\x20Height\x20'+':\x20')+_0x463c67[_0x70788(0x8df,0x90b,0xbe3,0xa1e)][_0x4a73e9(0xd3,0x234,-0x85,-0x33)+'t']+_0x4a73e9(0x375,-0x199,-0x27,0xcb)+_0x463c67[_0x70788(0x8df,0x976,0xa5e,0xae2)][_0x4a73e9(0x3fd,0x2ab,0x3c6,0x113)];await sendFileFromUrl(m[_0x70788(0x839,0x825,0x87a,0x716)],_0x463c67[_0x70788(0x8df,0xb5b,0x7f4,0x940)][_0x70788(0x6b7,0x832,0x814,0x9db)],_0x1cf855,m),sendFileFromUrl(m[_0x4a73e9(0x4df,0x221,0x5db,0x30c)],_0x463c67[_0x70788(0x8df,0x7da,0x8ca,0x75f)][_0x4a73e9(0x1ac,0x27c,0x41,-0x16)][_0x4a73e9(-0x454,0x4a,-0xc4,-0x185)],lang['ok'](),m);})[_0x2e98f4(0x154,0x2c9,0x1eb,0x1e5)](_0x2cee14=>{function _0x4c9095(_0x4e93d4,_0x2b12e7,_0x40c873,_0x3fce16){return _0x5546ba(_0x4e93d4-0xea,_0x2b12e7-0x1d4,_0x2b12e7-0x290,_0x40c873);}function _0x4d90f3(_0x55bf7b,_0x4e2550,_0x1b51db,_0x239fa2){return _0x5546ba(_0x55bf7b-0xe0,_0x4e2550-0x194,_0x239fa2- -0xdb,_0x1b51db);}const _0x1a2750={'MGFOi':function(_0x4d860f,_0x259017){return _0x4d860f(_0x259017);}};_0x1a2750[_0x4c9095(0x1e3,0x363,0x4e,0x26c)](reply,lang[_0x4d90f3(0x36e,0x617,0x68c,0x3d9)]());});}break;case _0x5546ba(-0x173,0xf3,0x1c3,0x23c):case _0x5546ba(-0x46,0x284,0xfc,0x396):if(db_respon_list[_0x5546ba(-0x80,0x398,0xc8,-0xee)]===-0x897+-0x1bd2*0x1+0x2469)return reply('Belum\x20ada\x20'+'list\x20messa'+_0x5546ba(0x156,-0x3,0x11f,-0x131)+_0x2e98f4(0x120,0x38c,0x5ce,0x4b5));if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x5546ba(0x1a3,0x1a8,0xf6,-0x53)+_0x5546ba(0x652,0x298,0x43e,0x5af)+_0x5546ba(0x3fb,0x52c,0x3c5,0x2bf)+_0x2e98f4(0x8c5,0x75b,0x655,0x86c)+_0x5546ba(0x3c7,0x18e,0x421,0x59f));var arr_rows=[];for(let x of db_respon_list){if(x['id']===from){const _0x55cd44={};_0x55cd44['title']=x['key'],_0x55cd44['rowId']=x[_0x5546ba(0x705,0x133,0x46b,0x2eb)],arr_rows[_0x5546ba(0x9,0x34f,0x1e,0x117)](_0x55cd44);}}var listMsg={'text':salam+'\x20@'+sender[_0x2e98f4(0x4fd,0x2d8,0x58d,0x2d1)]('@')[0x1d*0x1d+0x6*-0x2e+-0x235],'buttonText':_0x5546ba(0x442,0x831,0x538,0x318),'footer':_0x2e98f4(0x597,0x6e1,0x851,0x92d)+groupName+_0x5546ba(0x526,0x1ef,0x474,0x466)+ownername,'mentions':[sender],'sections':[{'title':groupName,'rows':arr_rows}]};alpha[_0x2e98f4(0x350,0x579,0x4c2,0x7fa)+'e'](from,listMsg);break;case _0x2e98f4(0x951,0x71b,0x5ea,0x3f2):if(!m[_0x2e98f4(0x113,0x2f0,0x4fd,0x5de)])return reply(mess[_0x5546ba(-0x14,0x49e,0x200,-0x8c)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x5546ba(0xf,0x3db,0x169,0x1b4)]());var args1=q[_0x2e98f4(0x80,0x2d8,0x4e0,0x4af)]('|')[-0x2431+-0x11b6+0x35e7];if(args1[_0x5546ba(0x8d2,0x337,0x59e,0x88a)](command))return reply('Key\x20tidak\x20'+_0x5546ba(0x604,0x663,0x40a,0x4f2)+_0x5546ba(0x328,0x88,0x4c,0x32d)+_0x5546ba(-0xc9,0x362,0xa7,-0xd0)+_0x5546ba(0x801,0x1b3,0x4bf,0x21c));var args2=q[_0x5546ba(0x367,-0x241,0x58,-0x202)]('|')[-0x25*0x2b+0x104b+0x1*-0xa13];if(!text[_0x5546ba(0x859,0x7e4,0x59e,0x7e4)]('|'))return reply('Gunakan\x20de'+_0x2e98f4(0x3b8,0x20d,0x134,0x33c)+command+(_0x2e98f4(0x77e,0x596,0x418,0x457)+'onse*\x0a\x0a_Co'+'ntoh_\x0a\x0a')+command+_0x5546ba(0x2d8,0x8d3,0x59a,0x380));if(isAlreadyResponList(from,args1,db_respon_list))return reply(_0x2e98f4(0x315,0x5f8,0x91f,0x8dd)+_0x2e98f4(0x724,0x6ff,0x6af,0x5cd)+_0x5546ba(0x690,0x5b3,0x3cb,0x5ee)+args1+(_0x5546ba(0x1cc,0x3e3,0x24e,0x7f)+_0x5546ba(-0x159,0x331,0x162,0x35f)+'\x20ini.'));if(/image/['test'](mime)){let media=await alpha[_0x5546ba(0x627,0x262,0x4b1,0x202)+_0x5546ba(-0x2af,0x275,-0x61,-0xe1)+_0x5546ba(0x317,0x1ca,0x225,-0x23)](quoted);const fd=new FormData();fd[_0x2e98f4(0x896,0x784,0x4fa,0x937)](_0x5546ba(0x42,0x638,0x36e,0x5a5),fs['readFileSy'+'nc'](media),'.tmp',_0x2e98f4(0x1e3,0x2f3,0x65,0xad));const _0x5ac5f6={};_0x5ac5f6[_0x5546ba(0x1d0,0xae,0x38e,0x381)]=_0x5546ba(0x3d4,0x50a,0x38b,0x25e),_0x5ac5f6[_0x5546ba(0x384,0x43d,0x4e2,0x49f)]=fd,fetch(_0x2e98f4(0x606,0x6ab,0x852,0x879)+_0x2e98f4(0x163,0x488,0x719,0x5c4)+_0x5546ba(0x326,0x1b9,0x352,0x360),_0x5ac5f6)[_0x5546ba(-0x1f3,-0x12e,0x131,-0xf3)](_0x306ebf=>_0x306ebf['json']())[_0x2e98f4(0x28b,0x3b1,0xb7,0x119)](_0x53cedf=>{function _0x4c3033(_0x384b50,_0x30db65,_0x226706,_0x468663){return _0x2e98f4(_0x226706,_0x384b50- -0x38d,_0x226706-0x7c,_0x468663-0x1b7);}const _0xd5dacf={'zGPJC':function(_0x2896a3,_0x14ecc0){return _0x2896a3(_0x14ecc0);}};function _0x3ac0f6(_0x17954c,_0x10c972,_0x3f38a5,_0x2ca92f){return _0x5546ba(_0x17954c-0x106,_0x10c972-0xa4,_0x2ca92f- -0x100,_0x10c972);}addResponList(from,args1,args2,!![],_0x4c3033(0x31e,0x2c4,0x223,0x3b9)+_0x4c3033(0x4d4,0x1a5,0x6a8,0x4f3)+_0x53cedf[0x17d1+-0x30*-0x8b+0x1*-0x31e1][_0x4c3033(-0xbf,-0x37e,0x193,0x7b)],db_respon_list),_0xd5dacf[_0x3ac0f6(-0x35c,0x1b1,-0x1be,-0x43)](reply,_0x3ac0f6(-0x1c6,-0x3f4,0x109,-0x10c)+_0x4c3033(-0x2b,0x1f0,-0x140,-0xc5)+_0x4c3033(0x53,0x11c,-0xd4,0x1ff)+_0x4c3033(0x1a2,0x4e5,0x138,-0x2)+args1+'*');if(fs[_0x4c3033(0x2ed,0x516,0x431,0x54f)](media))fs[_0x4c3033(0x498,0x574,0x62b,0x77b)](media);});}else addResponList(from,args1,args2,![],'-',db_respon_list),reply('Sukses\x20set'+_0x2e98f4(0x4c7,0x362,0x490,0x158)+_0x5546ba(0x208,0x146,0x160,0x46c)+_0x5546ba(0x3e,0x330,0x2af,0x0)+args1+'*');break;case _0x2e98f4(0x943,0x7f8,0x6ed,0x5df):if(!m[_0x2e98f4(0xc1,0x2f0,0x271,0x1f0)])return reply(mess[_0x2e98f4(0x554,0x480,0x710,0x5d1)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x2e98f4(0x371,0x3e9,0x20b,0x125)]());if(db_respon_list['length']===-0x1d*-0x6f+0xee9*0x1+-0x1b7c)return reply(_0x2e98f4(0x5b2,0x376,0x223,0x216)+_0x5546ba(0x289,0x2d3,0x43e,0x32d)+_0x5546ba(-0x16b,-0x8f,0x11f,0x16c)+_0x5546ba(-0x129,0x429,0x10c,0x214));if(!q)return reply(_0x5546ba(0x148,0x525,0x3b5,0x2cc)+_0x5546ba(-0xca,-0x2c4,-0x73,-0x320)+command+(_0x5546ba(0x306,0x563,0x418,0x347)+_0x2e98f4(0x7ba,0x760,0x508,0x4f2))+command+_0x2e98f4(0x7c5,0x6b3,0x7aa,0x755));if(!isAlreadyResponList(from,q,db_respon_list))return reply(_0x5546ba(0x10d,0x109,0x378,0x698)+_0x5546ba(0x525,0x61a,0x47f,0x2e1)+_0x5546ba(0x3a3,0x244,0x572,0x621)+q+(_0x2e98f4(0x4c2,0x7be,0x722,0x780)+'a\x20di\x20datab'+_0x5546ba(0x596,0x138,0x252,-0xb5)));delResponList(from,q,db_respon_list),reply(_0x2e98f4(0x970,0x733,0x794,0x998)+_0x5546ba(0x659,0x6f6,0x479,0x2a6)+_0x2e98f4(0x5c1,0x40c,0x1b5,0x5ad)+'gan\x20key\x20*'+q+'*');break;case _0x2e98f4(0x50a,0x7f5,0xadd,0x791):case _0x5546ba(0x3a0,-0x3f,0x144,-0xad):if(!m['isGroup'])return reply(mess[_0x2e98f4(0x5e3,0x480,0x530,0x78f)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x5546ba(-0x6,0x484,0x169,-0x1ab)]());var args1=q[_0x5546ba(0x31b,0x225,0x58,-0x1ab)]('|')[-0x8e2+-0xd*-0x43+-0x1*-0x57b],args2=q[_0x5546ba(-0x237,-0x222,0x58,0x137)]('|')[0x17d9+-0x366*-0x4+-0x10*0x257];if(!q['includes']('|'))return reply(_0x2e98f4(0x8cb,0x635,0x51a,0x5a1)+_0x5546ba(-0x286,-0x141,-0x73,-0x2ae)+command+('\x20*key|resp'+_0x2e98f4(0x463,0x695,0x548,0x5dc)+_0x2e98f4(0x60b,0x69a,0x4e0,0x57c))+command+_0x2e98f4(0x256,0x355,0x5fc,0x128));if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x5546ba(-0x70,0x3f4,0x12f,-0x4d)+'k\x20key\x20*'+args1+(_0x2e98f4(0x3cb,0x2c5,0x5a,0x286)+'rdaftar\x20di'+_0x2e98f4(0x5c6,0x6a1,0x444,0x72e)));if(/image/['test'](mime)){let media=await alpha[_0x2e98f4(0x6b6,0x731,0x5d1,0x7a5)+_0x5546ba(-0xe4,0xfa,-0x61,-0x3a1)+'Message'](quoted);const fd=new FormData();fd['append'](_0x5546ba(0xaa,0x2a,0x36e,0x9f),fs[_0x5546ba(0x19c,0x215,0x262,0x50a)+'nc'](media),_0x5546ba(0x711,0x61b,0x5b5,0x62e),_0x2e98f4(0x1fb,0x2f3,0x628,0x5f7));const _0x1eb55b={};_0x1eb55b['method']='POST',_0x1eb55b[_0x5546ba(0x6ac,0x6bc,0x4e2,0x77a)]=fd,fetch(_0x5546ba(0x17a,0x474,0x42b,0x6a8)+_0x2e98f4(0x5cc,0x488,0x6ea,0x205)+_0x2e98f4(0x796,0x5d2,0x5c4,0x89e),_0x1eb55b)['then'](_0x1e9a83=>_0x1e9a83[_0x2e98f4(0x506,0x49c,0x6f0,0x188)]())['then'](_0x1b62d7=>{const _0x1d193f={'dPbYr':function(_0x2758d4,_0x4ff721,_0x13336a,_0x563239,_0x2096e0,_0x390e4e,_0x35d047){return _0x2758d4(_0x4ff721,_0x13336a,_0x563239,_0x2096e0,_0x390e4e,_0x35d047);},'Igoxg':function(_0x16b78e,_0x377279){return _0x16b78e(_0x377279);}};_0x1d193f[_0x49a343(0x578,0x64c,0x7b4,0x432)](updateResponList,from,args1,args2,!![],'https://te'+'legra.ph'+_0x1b62d7[0xb2a*-0x2+0x1fe7*0x1+0x13*-0x81][_0x49a343(0x4a6,0x195,0x29e,0x6dc)],db_respon_list),_0x1d193f['Igoxg'](reply,_0x49a343(0x78b,0xa87,0x833,0x87c)+_0x4751f3(0x878,0x598,0x8a1,0xa7b)+'essage\x20den'+'gan\x20key\x20:\x20'+'*'+args1+'*');function _0x49a343(_0x164403,_0x4c94dc,_0x38925a,_0x1a3ebd){return _0x2e98f4(_0x1a3ebd,_0x164403-0x1d8,_0x38925a-0xeb,_0x1a3ebd-0x5c);}function _0x4751f3(_0x257328,_0x44cd75,_0x493dc8,_0x5689ed){return _0x2e98f4(_0x5689ed,_0x257328-0x4c,_0x493dc8-0x127,_0x5689ed-0x170);}if(fs[_0x4751f3(0x6c6,0x6fb,0x4a5,0x4ef)](media))fs[_0x49a343(0x9fd,0xb25,0xb93,0x77e)](media);});}else updateResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x2e98f4(0x522,0x5b3,0x471,0x57b)+_0x2e98f4(0xee,0x33e,0x21e,0x38c)+_0x2e98f4(0x1d7,0x27f,0x2f2,0x40a)+_0x5546ba(0xc9,-0x163,0xf,-0x88)+args1+'*');break;case _0x2e98f4(0x122,0x3bd,0x573,0x320):{const nwvYth=(_0x2e98f4(0x4a2,0x607,0x849,0x31e)+_0x5546ba(0x726,0x762,0x5d3,0x707))[_0x2e98f4(0x8,0x2d8,0x365,0x616)]('|');let ukXpHk=0x18d*0xd+-0x703*-0x1+0xd96*-0x2;while(!![]){switch(nwvYth[ukXpHk++]){case'0':var nilai_two=Number(bawah);continue;case'1':atas=arg[_0x2e98f4(0x18e,0x2d8,0xf8,0x5f1)]('+')[0x752*0x1+-0x1097+-0x7*-0x153];continue;case'2':reply(''+(nilai_one+nilai_two));continue;case'3':bawah=arg[_0x5546ba(-0x2c7,-0x275,0x58,0x167)]('+')[-0x123+0x4*0x95f+-0x2458];continue;case'4':var nilai_one=Number(atas);continue;case'5':arg=args[_0x2e98f4(0x6fc,0x827,0x4fa,0x995)]('\x20');continue;case'6':if(!text[_0x2e98f4(0x4eb,0x81e,0x6fa,0x79c)]('+'))return reply('Ex.\x20'+(prefix+command)+_0x2e98f4(0x7af,0x53a,0x636,0x5f1));continue;}break;}}break;case _0x2e98f4(0x682,0x3d9,0x316,0x58a):{if(!text[_0x5546ba(0x48c,0x517,0x59e,0x5a3)]('-'))return reply(_0x5546ba(0x2d6,0x24e,0xdd,0x1de)+(prefix+command)+_0x5546ba(0x447,0x589,0x382,0x55b));arg=args[_0x5546ba(0x3ee,0x73d,0x5a7,0x47a)]('\x20'),atas=arg[_0x2e98f4(0x3d8,0x2d8,0x12c,0x52d)]('-')[0xb39*0x3+0x1672+-0x5*0xb39],bawah=arg[_0x5546ba(-0x2c6,-0x1aa,0x58,0x2a3)]('-')[-0x4*0x44f+0x3*-0x59+0x1248];var nilai_one=Number(atas),nilai_two=Number(bawah);reply(''+(nilai_one-nilai_two));}break;case _0x5546ba(0x2d1,-0x1b7,0x116,0x3bd):{const TzBCLR=(_0x2e98f4(0x7b3,0x62c,0x3df,0x8e5)+_0x2e98f4(0x2ce,0x50f,0x453,0x49b))[_0x5546ba(0x1f7,0x1e0,0x58,-0x1a1)]('|');let iKMzbZ=0x2*-0xa81+0x1d0e+-0x80c;while(!![]){switch(TzBCLR[iKMzbZ++]){case'0':arg=args['join']('\x20');continue;case'1':atas=arg[_0x5546ba(-0xf0,0x368,0x58,-0xd8)]('*')[-0x14d3+0xdf*0x27+0x42*-0x33];continue;case'2':var nilai_one=Number(atas);continue;case'3':bawah=arg['split']('*')[0xa*0x232+-0x1*-0x1886+-0x2e79];continue;case'4':var nilai_two=Number(bawah);continue;case'5':if(!text['includes']('*'))return reply('Ex.\x20'+(prefix+command)+_0x2e98f4(0x5f0,0x68c,0x3a0,0x8fe));continue;case'6':reply(''+nilai_one*nilai_two);continue;}break;}}break;case _0x2e98f4(0x517,0x338,0x51f,0x2c):{if(!text['includes']('/'))return reply(_0x5546ba(0x26b,0x21c,0xdd,0x33c)+(prefix+command)+_0x5546ba(-0x217,0x1d6,0x61,-0x277));arg=args[_0x2e98f4(0x4e9,0x827,0x996,0x673)]('\x20'),atas=arg['split']('/')[-0x8e+0x25*0x19+-0x1d*0x1b],bawah=arg[_0x5546ba(0x256,-0x29d,0x58,0x24c)]('/')[0x83c*-0x1+0xedb*0x2+0x17*-0xef];var nilai_one=Number(atas),nilai_two=Number(bawah);reply(''+nilai_one/nilai_two);}break;case'p':case'proses':{if(!m[_0x2e98f4(0xbb,0x2f0,0x388,0x53d)])return reply(mess[_0x5546ba(0x51f,0xf2,0x200,0x1bf)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang['adminOnly']());let tek=m[_0x2e98f4(0x64b,0x523,0x41b,0x615)]?quoted[_0x5546ba(0x61d,0x402,0x3df,0x2ca)]:quoted['text'][_0x5546ba(-0x5f,-0x1f5,0x58,-0x118)](args[0x1*-0x1337+-0x187*0x16+-0x1*-0x34d1])[-0x1d*-0xc7+0x148b+-0x10d*0x29],proses=_0x2e98f4(0x47a,0x713,0x839,0x9eb)+'SI\x20PENDING'+'*\x20」\x0a\x0a```📆\x20'+'TANGGAL\x20:\x20'+tanggal(new Date())+('\x0a⌚\x20JAM\x20\x20\x20\x20'+_0x2e98f4(0x6c0,0x49b,0x62a,0x54f))+time+(_0x2e98f4(0x2ed,0x594,0x46b,0x6b9)+_0x5546ba(0x27,0x1a,0x2,-0x301)+'```\x0a\x0a📝\x20Cat'+_0x5546ba(0x6bc,0x2b8,0x3a9,0xb4))+tek+(_0x2e98f4(0x8fd,0x71c,0x6a0,0x726)+'@')+sender[_0x2e98f4(0x108,0x2d8,0x41f,0x2ca)]('@')[0x573+0xb15+-0x1088]+(_0x5546ba(0x2da,-0x149,0xab,0x292)+'\x20proses!');alpha[_0x2e98f4(0x6bc,0x641,0x684,0x412)+_0x2e98f4(0x65e,0x61e,0x874,0x961)](m['chat'],proses,m);}break;case'd':case _0x5546ba(0x1c0,-0x2d,0x305,0x58e):{if(!m['isGroup'])return reply(mess[_0x5546ba(0x85,-0x11e,0x200,0x2d9)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x2e98f4(0x3cd,0x3e9,0x19e,0x3db)]());let tek=m[_0x5546ba(0xbe,0x372,0x2a3,0x22c)]?quoted[_0x2e98f4(0x3cb,0x65f,0x511,0x45e)]:quoted[_0x2e98f4(0x7a3,0x65f,0x5c3,0x6f9)][_0x5546ba(-0x20d,0x1d6,0x58,-0x11b)](args[0x128c*0x2+0x1133+-0x364b])[-0x1*0x1ae1+0x1*0x1fc3+0x1*-0x4e1],sukses=_0x5546ba(0x473,0x4ba,0x493,0x375)+_0x2e98f4(0x696,0x5f1,0x81c,0x6c4)+_0x2e98f4(0x2f4,0x330,0x2b1,0x5b9)+_0x2e98f4(0xa38,0x708,0x848,0x53a)+'\x20'+tanggal(new Date())+(_0x2e98f4(0x2fa,0x267,-0x53,0x446)+'\x20:\x20')+time+('\x0a✨\x20STATUS\x20'+_0x5546ba(-0x22f,-0x19e,0xa0,-0xb9)+_0x2e98f4(0x5bc,0x402,0x266,0x44e)+_0x5546ba(0x56,0x4fe,0x29a,0x39e))+sender['split']('@')[-0x24eb+-0x1b2+0x269d*0x1]+(_0x5546ba(0x545,0x5d1,0x46e,0x48f)+'r\x20ya🙏');alpha[_0x2e98f4(0x600,0x641,0x494,0x4db)+_0x2e98f4(0x368,0x61e,0x3a0,0x592)](m[_0x2e98f4(0x689,0x76e,0x705,0x936)],sukses,m);}break;}
} catch (err) {
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})