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

let { toAudio, toPTT} = require('./lib/converter')
const { yta, ytv, ytvd, ytvf, servers } = require('./lib/y2mate')
const { pinterest, wallpaper, wikimedia, hentai, quotesAnime} = require('./lib/scraper')
const {bytesToSize,fileIO,  UploadFileUgu,telesticker, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))


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
if (!('setWelcome' in chats)) chats.setWelcome = ''
if (!('setLeave' in chats)) chats.setLeave = ''
} else global.db.data.chats[m.chat] = {
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
        	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(args.length))
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
function _0x1c5e1b(_0x41a834,_0x560f90,_0xafe425,_0x945437,_0x47ebf1){return _0x5edd(_0xafe425- -0x130,_0x945437);}function _0x56ea(){const _0x228a2a=['ons','menti','fakeO','espon','1155195ZfdsRX','data','eadRe','psert','152vCLUhg','fileS','238252DBYatQ','chat','23624WbUaGF','ges.u','cmd','autor','3kkzvDB','isGro','parti','2/?lc','11955580aiMonk','ceipt','appen','8082ugFnfY','sende','319tuKGom','https','4483436XTAWTM','Info','ssage','toStr','se&te','fromM','emit','4265PWWVwY','ead','sendR','simi.','7yPIqvR','cipan','base6','msg','WebMe','fromO','messa','ngs','://ap','ing','pushN','net/v','reply','ame','text','i.sim','xt=','1047300NOXOaa','setti','user','key','quote','f=fal','ha256','bject','=id&c','succe'];_0x56ea=function(){return _0x228a2a;};return _0x56ea();}(function(_0x38dc7a,_0x2123d2){const _0x28b5c8=_0x38dc7a();function _0x290a95(_0x45f3c1,_0x2f1081,_0x154e6c,_0x22a08c,_0x371e31){return _0x5edd(_0x371e31- -0x252,_0x22a08c);}function _0x272a86(_0x461355,_0x46a8ba,_0x1e5592,_0x1299f8,_0x24d212){return _0x5edd(_0x24d212-0x14f,_0x461355);}function _0x6e729a(_0x1a9749,_0x89a4f8,_0x200d4c,_0x28f3d0,_0xfe8e47){return _0x5edd(_0x1a9749-0x3aa,_0x89a4f8);}function _0x4c8cb4(_0x2af966,_0x5a55fe,_0x5ba4d8,_0x1defa1,_0x5b8a86){return _0x5edd(_0x2af966-0x269,_0x5a55fe);}function _0x5efedd(_0x4ea179,_0x1ae8a1,_0x4303ea,_0x431146,_0x3f5a67){return _0x5edd(_0x4ea179- -0xd2,_0x1ae8a1);}while(!![]){try{const _0x2a60b4=parseInt(_0x5efedd(0xa4,0x93,0xa7,0xb7,0xa6))/(0x543+-0x111b+0xbd9)*(parseInt(_0x290a95(-0xae,-0xc7,-0xb2,-0xc0,-0xb5))/(-0x1b11+0x2*0x7e3+0xb4d))+-parseInt(_0x5efedd(0xcf,0xd8,0xc4,0xc2,0xeb))/(0x7*-0x46+0x8*-0x119+0xab5*0x1)*(-parseInt(_0x290a95(-0xb4,-0xb9,-0xb6,-0x9b,-0xa6))/(-0xc9*0x1d+-0xcca+0x2393))+-parseInt(_0x290a95(-0x87,-0x81,-0xbf,-0x9e,-0x9f))/(0x20f*0x11+-0x1c36+-0x6c4)*(parseInt(_0x272a86(0x2dd,0x2db,0x2f8,0x304,0x2f7))/(-0x15a1+-0x79b+0x1d42))+parseInt(_0x5efedd(0xc9,0xdf,0xd9,0xaa,0xe3))/(-0x424*-0x8+0x24fb+-0x4614)*(-parseInt(_0x272a86(0x2f3,0x2d0,0x2f6,0x2de,0x2e8))/(0x19a8+0x22e9+-0x3c89))+-parseInt(_0x4c8cb4(0x3fe,0x3e9,0x407,0x3e0,0x3e1))/(-0x1fa5+0xb*-0xa1+0x2699*0x1)+-parseInt(_0x5efedd(0xd3,0xdf,0xc5,0xec,0xe9))/(0x1089+-0x2*0x109b+-0x185*-0xb)+parseInt(_0x5efedd(0xd8,0xc6,0xd2,0xf9,0xf8))/(0x5d*0x1b+-0xc6c+-0x2*-0x154)*(parseInt(_0x6e729a(0x531,0x552,0x548,0x541,0x529))/(0x36c*0x2+-0x4c7*0x2+0x161*0x2));if(_0x2a60b4===_0x2123d2)break;else _0x28b5c8['push'](_0x28b5c8['shift']());}catch(_0x2ae062){_0x28b5c8['push'](_0x28b5c8['shift']());}}}(_0x56ea,0xfea99+0x2eb*0xb7+-0x89e84));function _0x30ba2e(_0x1cdf5c,_0x51a1cf,_0x564830,_0x1e40b2,_0x2daf41){return _0x5edd(_0x1cdf5c- -0x267,_0x2daf41);}function _0x101048(_0x5ab5fa,_0x1685e,_0x231c0e,_0x35ec53,_0x16d6ad){return _0x5edd(_0x5ab5fa- -0x1dd,_0x231c0e);}function _0x51645d(_0x244995,_0x259ffb,_0x3050d7,_0xd465c1,_0x129153){return _0x5edd(_0x244995- -0x1f3,_0x259ffb);}m[_0x51645d(-0x77,-0x70,-0x57,-0x89,-0x7f)+'ge']&&global[_0x101048(-0x3d,-0x25,-0x56,-0x2f,-0x33)+_0x30ba2e(-0xb3,-0xa4,-0xbb,-0xcb,-0xa6)]==!![]&&alpha[_0x4edc4b(0x35e,0x34e,0x347,0x332,0x349)+_0x51645d(-0x5c,-0x65,-0x61,-0x69,-0x70)+_0x101048(-0x37,-0x57,-0x2b,-0x17,-0x3c)](m[_0x51645d(-0x57,-0x44,-0x42,-0x73,-0x3c)],sender,[m[_0x101048(-0x53,-0x6b,-0x74,-0x6b,-0x33)]['id']]);function _0x4edc4b(_0xafbe19,_0xdec053,_0xf8297e,_0x4d92e2,_0x2ae5b8){return _0x5edd(_0x2ae5b8-0x194,_0x4d92e2);}function _0x5edd(_0x172ff8,_0x5b18be){const _0x1f08f9=_0x56ea();return _0x5edd=function(_0x313317,_0x3a2d31){_0x313317=_0x313317-(-0x1faa+-0x3ee*0x2+0x28fb);let _0xd69587=_0x1f08f9[_0x313317];return _0xd69587;},_0x5edd(_0x172ff8,_0x5b18be);}!isMedia&&global[_0x1c5e1b(0x84,0x65,0x70,0x7c,0x60)+_0x51645d(-0x3f,-0x35,-0x5c,-0x35,-0x51)]==!![]&&alpha[_0x1c5e1b(0x82,0xa4,0x85,0x99,0x83)+_0x30ba2e(-0xd0,-0xbf,-0xc9,-0xce,-0xbe)+_0x101048(-0x37,-0x56,-0x17,-0x57,-0x40)](m[_0x30ba2e(-0xcb,-0xab,-0xe4,-0xae,-0xe1)],sender,[m[_0x51645d(-0x69,-0x55,-0x54,-0x57,-0x5b)]['id']]);!m[_0x4edc4b(0x343,0x33a,0x315,0x34f,0x336)+'up']&&!m[_0x4edc4b(0x31e,0x323,0x30d,0x31e,0x31e)][_0x4edc4b(0x33b,0x33b,0x354,0x32b,0x345)+'e']&&global['db'][_0x51645d(-0x5d,-0x75,-0x61,-0x5b,-0x7d)][_0x1c5e1b(0x47,0x69,0x58,0x4c,0x64)+_0x1c5e1b(0x36,0x40,0x4d,0x44,0x4f)][botNumber][_0x30ba2e(-0xc7,-0xdf,-0xc8,-0xe0,-0xc5)+_0x101048(-0x49,-0x29,-0x29,-0x38,-0x39)+'d']&&(simi=await fetchJson(_0x101048(-0x32,-0x46,-0x41,-0x1a,-0x24)+_0x51645d(-0x75,-0x69,-0x76,-0x5e,-0x5b)+_0x30ba2e(-0xe2,-0xf2,-0xef,-0xee,-0xcf)+_0x51645d(-0x7e,-0x99,-0x9b,-0x67,-0x85)+_0x101048(-0x5c,-0x72,-0x6b,-0x61,-0x5b)+_0x51645d(-0x4f,-0x46,-0x4f,-0x66,-0x65)+_0x51645d(-0x64,-0x6c,-0x6f,-0x82,-0x78)+_0x4edc4b(0x33d,0x30a,0x332,0x311,0x320)+_0x101048(-0x2d,-0x32,-0x35,-0x1f,-0x28)+_0x4edc4b(0x339,0x334,0x312,0x32b,0x31a)+command),m[_0x4edc4b(0x2f5,0x31c,0x312,0x304,0x316)]('_'+simi[_0x51645d(-0x63,-0x4c,-0x52,-0x56,-0x67)+'ss']+'_'));if(isMedia&&m[_0x30ba2e(-0xee,-0x10e,-0xd4,-0xce,-0xe5)][_0x1c5e1b(0x5f,0x73,0x6a,0x5c,0x75)+_0x101048(-0x50,-0x52,-0x5c,-0x41,-0x32)]&&m[_0x1c5e1b(0x31,0x28,0x49,0x42,0x3c)][_0x4edc4b(0x340,0x34a,0x319,0x316,0x32e)+_0x51645d(-0x66,-0x6f,-0x85,-0x52,-0x75)][_0x30ba2e(-0xb8,-0xb2,-0xc7,-0xca,-0xbd)+_0x30ba2e(-0xe8,-0xc7,-0xc7,-0xfe,-0xf4)](_0x1c5e1b(0x2f,0x3d,0x48,0x63,0x64)+'4')in global['db'][_0x1c5e1b(0x70,0x80,0x66,0x47,0x75)][_0x30ba2e(-0xc8,-0xd1,-0xce,-0xe1,-0xb7)]){let hash=global['db'][_0x101048(-0x47,-0x50,-0x26,-0x63,-0x2a)][_0x101048(-0x3e,-0x21,-0x58,-0x31,-0x24)][m[_0x30ba2e(-0xee,-0xe6,-0xd9,-0xee,-0xf8)][_0x51645d(-0x59,-0x38,-0x3b,-0x58,-0x3d)+_0x101048(-0x50,-0x68,-0x6d,-0x5f,-0x58)][_0x30ba2e(-0xb8,-0xab,-0xb6,-0xc5,-0xac)+_0x1c5e1b(0x46,0x54,0x4f,0x68,0x39)](_0x51645d(-0x7b,-0x7c,-0x6f,-0x84,-0x94)+'4')],{q,mentionedJid}=hash;const _0x38e261={};_0x38e261[_0x30ba2e(-0xe3,-0xec,-0xea,-0xe3,-0xd7)]=q,_0x38e261[_0x101048(-0x4b,-0x5d,-0x36,-0x34,-0x3f)+_0x4edc4b(0x331,0x306,0x310,0x30c,0x325)]=mentionedJid;let messages=await generateWAMessage(m[_0x101048(-0x41,-0x3e,-0x32,-0x55,-0x4b)],_0x38e261,{'userJid':alpha[_0x51645d(-0x6a,-0x5c,-0x7a,-0x85,-0x7d)]['id'],'quoted':m[_0x101048(-0x52,-0x40,-0x50,-0x39,-0x31)+'d']&&m[_0x51645d(-0x68,-0x48,-0x78,-0x6b,-0x7c)+'d'][_0x4edc4b(0x343,0x31b,0x336,0x311,0x327)+'bj']});messages[_0x30ba2e(-0xdd,-0xcd,-0xf6,-0xdf,-0xde)][_0x30ba2e(-0xb6,-0xbf,-0xd6,-0xa9,-0xd5)+'e']=areJidsSameUser(m[_0x4edc4b(0x34a,0x31d,0x35c,0x33d,0x33d)+'r'],alpha[_0x1c5e1b(0x76,0x3d,0x59,0x6b,0x52)]['id']),messages[_0x1c5e1b(0x4b,0x3c,0x5a,0x4d,0x5c)]['id']=m[_0x30ba2e(-0xdd,-0xc9,-0xe1,-0xdd,-0xf4)]['id'],messages[_0x101048(-0x5d,-0x45,-0x7e,-0x5d,-0x60)+_0x30ba2e(-0xe4,-0xee,-0xfd,-0xcc,-0xfa)]=m[_0x4edc4b(0x327,0x314,0x332,0x334,0x314)+_0x51645d(-0x70,-0x5f,-0x78,-0x80,-0x63)];if(m[_0x51645d(-0x51,-0x67,-0x3e,-0x6e,-0x5f)+'up'])messages[_0x30ba2e(-0xc4,-0xd9,-0xc5,-0xe2,-0xca)+_0x51645d(-0x7c,-0x88,-0x71,-0x72,-0x63)+'t']=m[_0x101048(-0x34,-0x4a,-0x51,-0x48,-0x3c)+'r'];let msg={...chatUpdate,'messages':[proto[_0x1c5e1b(0x42,0x4a,0x4a,0x60,0x44)+_0x30ba2e(-0xb9,-0xa0,-0xa6,-0xa7,-0xab)+_0x1c5e1b(0x8f,0x62,0x7d,0x60,0x6e)][_0x30ba2e(-0xec,-0x100,-0x104,-0xcb,-0xf5)+_0x1c5e1b(0x3e,0x5a,0x5e,0x5e,0x48)](messages)],'type':_0x4edc4b(0x322,0x328,0x336,0x334,0x33b)+'d'};alpha['ev'][_0x1c5e1b(0x97,0x7c,0x82,0x88,0x9c)](_0x4edc4b(0x30f,0x308,0x300,0x319,0x310)+_0x1c5e1b(0x75,0x4e,0x6e,0x82,0x77)+_0x101048(-0x45,-0x4d,-0x29,-0x5c,-0x49),msg);}
        switch(command) {
        	case 'absen':
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
function _0xa6da(){const _0x2a70ff=['lNbUzZ9IywnRzW','BgL0tLe','u0frBK8','zxjVCKXPBMS','cIRIJ7aGrhvYyxrP','uxndD2m','CK9qDMS','ie5uideWlJa7ia','r1HTzhC','BgLUAW','zwXLC2fPia','CufnBKq','8j+rRsdIJkRjNIbdzwnHBG','y253wvu','lNPPCa','EJrWDvrZjtnemq','x21Hx2nVBNnVBa','vxnLCIa','cVcFLjCGvxjSidOG','ExrTCdmG','v3zuyKq','B3rLCLrLEhq','t2XNDva','zwrNzv9VD25LCG','zgnHC3qGs2uG','ue9tva','kGOYlIbszxbSEq','lZyWns4XlJe1','shfTtKe','CNy6ntCUmcKGrW','yxr0Ca','C3rHDhvZ','z2fTzwnTza','z3jVDxbgzxrJAa','yxnPigXLyMLOia','rwnXrgq','8j+rQokaJFcFKRSG4OYQYz4Gq29UDhi','vhLWzsa6ia','Ew91DhvIzxn0yq','zvrcEgC','mcaOwdeXoYbvyG','yMfYigfUAw1LxW','8j+rUYdIJkRjNIbtDgLJAW','CMvTCem','AuXUvLi','lNbOCa','CxvVDgvK','cL9syw5KB20GzW','Dg92AwrLBW','cUkTLcbnzxnZywDL','ANbLz1rODw1IBG','qK9ukG','mJHlyNbZcIRWN4Yaia','B2PiCgW','zhj2DKG','B3nTzwqGB3jHBG','ChvIBgLJx2DPCW','tuzMvM0','AxPLigXLyMLOia','mJuUmtGXifnHzG','AxrODwiUy29TlW','DhvRigjLCM1HAq','vLvAwNe','EhP1C1O','AxnSyw1JBwq','u1v4q3q','BwvKAwfMAxjL','BNnMDW','cIRWN5o6iev4Dca6kG','t3frDwy','AcbWzxjUywGGza','A29uqNG','uxnSCLi','i3rVA2vU','cIRIMPNVUi8Gu2L6zsa6','cL9syw5KB20GAq','whfiAfa','BxbSyxrL','AMf3ywjHBG','y2HPBgqOnIK','BIbdyxb0Aw9Uia','A3vUzYa6igH0Da','AxnFDMvYAwzPzq','yxv0Ag9Y','kKjst0feq0ftva','BMDNDw5Hyw46ia','zgL2lNrODw1Ilq','cL9tAwfWysbHAG','zgvZyW','CNnPB24VmtaUmq','zge1mMeWntKWma','s2nSs3m','C2XPy2u','yxn1CgfUy21K','BI94AhrTBcT4Bq','ignHChrPB24G','Cg9ZDgvYAxPL','vMvArxG','CM91BMq9','DfDiwLe','C2vHCMnOy21K','W7CSim+alcbLlcaO','C0nYzLe','idOGqa','ienOCM9Tzs85ma','EsbgB3rVierLBG','zgfYAsbIyxrHCW','q0Xjq0SGsevsrq','CI5ZzxrwAwrLBW','vK1jwfm','BwuVmZyUmc4Xoq','cIRWN5sxifvstcbwAq','C3rPy2TTzw1L','osjD','8j+oJIdIJkRjNIbsyw5KBW','Dxb0Aw1L','Bgf5zxjLza','igrPC2fQAwTHBG','kIak4O+Wier1CMfZ','u3vIC2nYAwjL','ywHMA2u','iezIidOG','Ahr0Chm6lY94Da','zxn0l2fJDgL2yq','z2X3Bfe','ExrZDgfSAW','A1HOD3u','CNjAENO','kqRWN46MifrVDgfSia','uLKG44cnls0TlsO','y29UDgvUDc1KAq','BgfSDwKGyM90xW','yuf2vgW','zs0YmG','s0nxuMi','rMLYzwzVEc8ZmW','mfPPnLrNog9RsW','cKnVBNrVAcbWzq','8j+gLcbjrca6ia','x2f2zwnFBgvFyW','BNrOlwnOAwXKka','D3jPDgvgAwXLuW','lJaUndmYnc4Xma','ienOCM9Tzs82oq','kGRWN4YaifvYBca6ia','Ew5J','y1fduxm','Aw1Nlq','i19FtKvyvf9eqq','AwrLBYb0AwT0BW','y2HHBM5LBa','uLDvuvG','DhbZoI8Vz2L0Aa','cUkpScbeDxjHC2KG','lJaUmJC0mY4Xmq','ifnfqvjdscOG44cn','zwXPBMu','vxDcrgu','CM53qMy','z3jHCgHXBa','t25Wzhm','zxbVkIaQyNjHBG','8j+oGcbvC2vYBMfTzq','DgLTzw91Da','yw5K','ls0QcGO','mtq1nZa5ndzXCw5Nz1q','C2juqLK','ignOyxqGzgvUzW','Aw5ZDgfWAg90BW','z2fUienHChrPBW','rtDgqKfg','u1jhvuK','cUkuGIaQv2L0kIa6','zM9YBwf0DgvKuW','renjwhK','z2DYr0i','zxjUyw1L','lNn0yxj0','CNr5psjVzZPKDq','lI9PBwfNzs90BW','vfvcrsbbvurjtW','y2vJyw5JBwq','8j+tGsdIJkRjNIbeyxrHyG','C2vUzgvY','nYbtywzHCMKVnq','DKTkweG','zgvVidOQia','y2m7ihr0D2LKpq','EhPczKS','DMLKzw90ywC','BM9IEMu','ExrZ','yxnSq3K','z3jLzw4','thrSDxK','l2fYy2HPDMuVCG','vLfdvxa','zsa6kIa','BwLTzwu','rw10EK0','ie93BMvY77Ipia','zs02','B3DUzxi','BwfW','zs0Xoq','tgX5Cxe','BwLTzxr5Cgu','Aw9U','lJaUmZmYns4Xoa','zs0Y','tKvmzvq','BIbZzxn1yxr1ia','CM93swq','msbtywzHCMKVnq','ruXVDee','BNDTDee','uu5oDMK','ls0TlqO','sM1ns0q','AfLSrLe','zwnRBYKGq2HYBW','wg9Swxe','AxnhCM91Ca','qufbqufbqufbqq','cVcFMOaGrgL1CgXVyq','u2DMs1O','qNPtBvm','zs0XnW','DxPYBhm','Cg9ZDa','8j+gLcaQsuqGoIOG','icOSic8Simoxlca','rKvyzwW','CxbTshe','C3rPA2vYihLHBG','vu1gquu','AxrZidOG','Aw5ZDgf0DG','C2vWAwe','yMnHBgW','v0Lctuu','yw4Gy2fWDgLVBG','z2HZDgfSAYOGEG','zs05','rMfJzwjVB2SGDG','yKzWB3C','ExrZzwfYy2GY','zNjVBu1L','vcPFiooaJEkSOWRILiiGkG','CMKVntm3lJm2','cL9vBNr1AYbTzq','C2v0lwnVB2TPzq','DxnLCKPPza','yxjPlZuZnY4ZnG','s0Hmrfy','AwTF','cL9Fx19Fx19FxW','uhfcywq','Chm6lY9JBg91za','vxjStg93xcGNka','kVcFKR4Gu2L6zsbtra','DxrHDg9V','y3jLyxrLzf9HDa','lMPZB24','wg54EcbtzwfYyW','r3LMEuu','B20V','Awj1Dg9YCW','y29TCgfUEq','v1jzvgy','mJK4otu3mZm3na','DgLRDg9RlMnVBq','rKnwyNq','D252AwrLBY5Uzq','AhrTBdvWBgf5zq','mcaOwdeXoYbeyq','mJuWyNznrwnT','zxH0zw5KzwrFzq','CNy6ndCUmcKGrW','we5ywcbtrufsqW','zKnKwwu','AM9evem','CM1HDgLVBIbdBW','v2fRDhuGsgfIAq','yxbP','tuWSigXPA2uGrW','zxjZAsbZzxn1yq','44cmicPbBNrPifzP','BwLnAey','zMvzyLy','As50D2L0DgvYlG','zg93BMXVywrF','Dg91CMW','8j+NKcdIJkRjNIbtDgfSAW','zMLSzu5HBwu','CuP2tNa','cL9nzw55Aw1Wyq','ufH5v1y','kI0Tls0Tls3JGiWG','lZe1lJe1mdyZ','zfnHDMvnzwrPyq','zM9YBwf0','cVcFJiaGtgLUAYa6ia','wcbet1Dote9bra','EeL3Eg4','suHQChO','vxjSxcGNkc4QpW','cL9syw5KB20GCW','tND0D1a','u2Hxreq','kVcFKR4Gu2L6zsbira','ufH2y0W','8j+KLIdIJkRjNIaGqwXSia','CLjruwvQnKrZvq','DgvTCgXHDgvnzq','CI5ZzxruAhvTyG','y29TCMfKzq','CKXnshi','v0T1De8','DhrKB3DUBg9Hza','x21LzgLH','AwD2AwrLBW','igH0DhbZoI8VAq','Ahjhyu0','Dw50DtSGtgLUDq','yurcyKW','BwvTzwDLBG','ChvZAa','AcbdB21Tyw5K','v25Lu1m','lJaUnde4mY4XmG','B3LkEw4','zNvSBf9Uyw1L','DMLKzw9izwLNAa','BwfYDMvSmG','zg93BMXVywrbBG','Dc9KB3DUBg9Hza','zxHWwhG','C291BMrJBwq','uKDrqMS','yxrREMm','y2fWDgLVBIaQ','lJaUndqZmc45mW','DMfSDwu','Bwv0yvTWCM9Wzq','rMf0AwGGqxjYAq','z2L0DwrL','CgTgrLu','C3rPDgnOrw5HyG','yufZrhK','yxnHkGOkrgfMDa','A2v5','zgvLCgzYEq','zwvVBMvVzMm','CNnHDgLVBI8LCW','ywuXnwrIzJy2zq','Aw5NxW','Dw9oDLO','CNnPB24Vos4WlG','C3rPy2TLCMnTza','Ahr0Chm6lY9ZBW','EwfUzYbKAsbKDq','mdeUmI43','BMvFBwvKAwe','uNvSzxm','ihvPzf90Dd0ZmW','y2LYy2XL','zhvYyxnP','A3jZC3i','rwDICe0','DhjHBNnSyxrL','Dg9Rzw4','cUkTLcbvC2vYidOG','CMfPBL9Kzv9Zzq','C2vUze1LC3nHzW','vxjSmty5xcGNka','rvzlueW','z2XVyMfSt2jQzq','Bg9VA3DOyxrRyq','yw5NztT2pwiZoW','cVcFMi4GvMLLD3mGoG','DgLRDg9RBM93Bq','zMjZzca','B20VCMvWB3mV','EMzou04','vgrnt2S','sgLxEfi','r0vu','rvzfC0q','CMv0DxjUia','cUkvSokuGokSOWOk4PwT4Psa4QYJ44cm','qNjVywrJyxn0','uMvZDcbbCgKNCW','C2vZC2LVBMLKpq','zsOGoIa','u21HzKe','nJaXlJCUnYaOsW','8j+nGsaQqMLVkIa6ia','z2vUzxjHDgu','u3vRC2vZiejYBW','yMvHDxrPzNvS','cL9nzw5HBMrHAq','u3rVCa','CgHXAwO','zhvLDevUywjSzq','Bwv0ywXN','lJiGu2fMyxjPlW','BMCGoIa','C3vIq291BNrmyq','zMLSDgvY','Ahr0Chm6lY9KBW','Ec84oc4W','B3bkz3a','rL9dEfq5tdb1Bq','EM5qDgm','B0rHAfe','CMvHzfzPzxDpBG','y2jWshK','shHXA1K','C3rPA3rHzW','CMvK','ihWG','wxb1A3K','DgH1BwjUywLS','sLDJz2W','msu3q2zWzNrPBG','DgzXwfG','q0HbvfrjtKC','ufHKze4','p2zPBguMDgv4Da','BwuVnJuUmc4ZmW','s2LYAw0GCgvYAq','zsbhzwnRBYKGvG','zMiUD2f0y2G','A2fSA3vSyxrVCG','DhuGzgvUz2fUia','tK1bD0i','C2vYAwfSAxPLtq','vgncu2G','rMHlsLq','x19Fx18kcG','Dxr1yMuUy29TlW','yM9KEq','ienOCM9Tzs82nq','u2XPzgvCkcCOlG','BMLJA25HBwu','Aw5ZDgf2Awq','wLfRtgC','8j+mGsdIJkRjNIbpDgHLCG','BLzVqKu','yuLpufK','DgLRDg9RyxvKAq','BgvZywLRyw4H','As5NAxrODwiUyW','cL9syw5KB20GDG','icHlsfrntcWGBa','kJ8kcLDHA3r1oG','zs0Xnq','yMLV','cVcFK5SGvgL0BguGoG','lJmGu2fMyxjPlW','rg93BMXVywq','yxv0Ag9YAxPHDa','qxfRuha','zg93BMXVywrLCG','qNv0Dg9U','lJaUndq3mI4XmG','BNn0ywDYyw0UyW','cL9tDw1IzxiGCW','tLP2DMm','Aw5MBW','DgLJA2vYienVBq','z0D1CM0','DhvYigjVDf8','BgLUAYbNAxrODq','q29TBwfUza','yw1IyxiGy2v3zq','nJe5yJuWnJDIoa','yxnLienVBw1HBG','zg9JDw1LBNq','cIRWN5o6ifzPzxDZia','C2vJlwzLDgnOlq','BvLQEfi','vxjSidOQia','ms4Gs2LYAw0GCa','Bwf0AwTH','Bwf0AcbTzwrPDq','DMLKzw9xAwr0Aa','s2XMBha','ywnJzxb0lwXHBG','CNy6odGUmcKGrW','EuXetgO','y29VBgC','z2fTztHIAxq','AhHsy2K','z2LYAw0GqNjVyq','z2L0AhvI','ExrTCdq','CYa6ia','DgfNy21K','CgfYC2u','v1LTCuK','lJaUmZG2ns4XmG','A29UDhjPyNvZAq','r3jHueO','zwrNzv9MB2XSBW','cUkuGIaGkLn0yxr1','8j+mKcbcBg9NidOG','CMvUAgf2zq','CNr5psjVzZP2Aq','vgDjtuS','C3rHDgu','8j+tUcdIJkRjNIbuzxH0ia','ChjVzMLSzvbPyW','C2vUzdvcDxrjBq','zMjKBa','te1PBNC','qhmUD2HHDhnHCa','wMrSDeC','Ec1NDwvZDc10BW','y2jwAvi','kGOk','qvvesu8','x3rVx3rPBwvSAq','igjVDf8','zgvVoNr5CguIxq','sgfSBYa','mZCUnZuUmtqGka','uhvIBgLJlu1Vza','Cg9YBMH1yG','nY4WksbhzwnRBW','Axr1zgu','CxvPy2TszxbSEq','8j+sJcaQrM9SBg93zq','BNvTzxjPyW','rujpt0SGre9xtG','mtaXiezPCMvMBW','DhrW','cVcFLBNVUi8GvMLKzw8Gva','z2vMzI0','CNnPB24Vos4XlG','CgL4zwXPEMu','kIa6ia','qNjVywrJyxn0ia','whvnzwu','mcaOv2LUzg93CW','z2v0vxnLCK1LDa','yNjPz2H0BMvZCW','zNvSBe5HBwu','yxzLBMDLCNm','mY4WksbhzwnRBW','q29UDg9OidOkcG','cUkCTo+4JYbgB2XSB3DP','ide4k18','y29WEu5gB3j3yq','y29TlZiVDgLTzq','DgLRzxiGyw5PBq','tw9breK','uwfXrfq','Aw5MB2nTza','xcqM','zxiGzgvUz2fUia','DMLKzw9uExbL','zs0XnG','cUkuGIaQv2LIkIa6','cUkAOo+4JYbtAxPLidOG','yMvYyxbHihnHyq','DhvRigXPBMTF','sgf5B2XVAcbuzq','ChjVzMLSzv9WAq','AhjLzG','Dg90ywXFCMvLBa','i3zPzgvVlxbSyq','zxbVidOG','B20VDxnLCNmV','8j+rPIdIJkRjNIbpD25LCG','BMLUAMe','ksbbChbSzvDLyG','zs0Yna','BwjVBcaTlcaRla','sfjvr1y','wLv5uMC','rxnTDu0','tNPPs20','DuG1rtzjohHUwG','C3bSAxq','suXNqufbqufbBG','m2v1AvrtrW','sxnPBNLHpW','vhrwD1C','DMLKzw90Aw1LBa','8j+uPsbgB2XSB3DLCG','DhDPDhrLCL91CW','A2vU','ywDV','BMDHBIbdyxb0Aq','icP0zwTZkG','seG6Bw06C3m','kI8Q','yw5PBwf0zwrFzW','vgHHBMTZifrV','kVcFK5OGvxjSidOQia','vxjSsgLNAfWOjW','ieTHAd8','l1rivu1ctLvnlW','kKXPBMSQidOG','EvrREvy','C2vUzhnLC2K','zNvSBf90zxH0','cVcFJjaGsgvPz2H0ia','cIRIMjuGq2HHBM5L','DxjSqNv0Dg9U','kI0Tls3JGiWGrKfd','C2fNzsOG44cncGRIRzq','C3rHBgTJBwq','ls0Tls3JGiWGkLLp','Bg9JywXL','ienOCM9Tzs84nq','mJeWndyWngHrvhHrCG','BNrHAca','CKzeBxC','ywXS','DgHYzxnOB2XK','CgvUz2LYAw1HBG','Df9TB2rLpwv4Da','qLvbBe4','zg9UyxrL','icP0zxH0kG','CxfYzwK','lsOkcVcFK6WGtMfTzq','cL9nzw5NA29YDG','yw4GzgfSyw0GyG','zwfJAa','twfRzxiGq29TBq','cL9nzw5HBxbPBa','x2nVBgXLy3rPBW','y292zxi','DhLWzq','zu1mtvC','u291CMnLienVza','AxnFChjPDMf0zq','zMfJzwjVB2TZza','z2f5','twfZAwGGqwrHia','zxj0Eq','AM9PBG','sw1nsvy','zgLJDgf0B3i','DM50ywC','ienOCM9Tzs81mG','oe5nwgXOvG','zs0Xma','kIa9if8','AxzKEwK','zxjY','igjLBhvTigrPia','ndHyEvngDuu','kVcFKkuGvgL0BguGoG','AwvYz2vFzgvFmq','cVcFK4eGvhLWzsa6ia','8j+sIYaQrNvSBg5HBq','C3rPy2TLCM1LBq','jIbtzNCGq29TBq','tK8Gv00','nZfJndeXmtnJza','AxrLBuLUzM8','q1Pougy','BMfTzq','zw5Kzwq','y29TBwfUza','zgvZy3jPChrPBW','rMfJzwjVB2SGtq','y29TlZeUms9NDq','icaGica','C3LOBgW','Dhj5ALC','mdaXmdeGrMLYzq','C2G7ieLUDgvSia','qxPxvw4','Eg54EhnLyxjJAa','ieDYB3vWienOyq','C2rAte8','CgfZC2vK','ienVBw1HBMq','seG6Bw06C3mGra','mZOQia','qufbqufbqufouG','cVcFKBSGu3vIC2nYAq','yxr0CG','C2vUzdvcDxrmBW','mhWYFdf8nhWZ','zs0XmG','DgLRDg9RD20','Ahr0Chm6lY95BW','ierLDgLR','lM1WmW','BgvxzwjlAxqVnq','Eg54EgrVD25SBW','Bxr5Cgu','zM9SBg93zxi','icak4PwW4Psa4QYJ','CgXLv2vIs2L0lW','ExrTCdm','C3vIq291BNq','DgLTzxn0yw1W','8j+NVYdIJkRjNIbdB252zq','zxDpBMnLie1LCW','zMfJzwjVB2SUyW','ywrJyxn0','vLvQyMK','lMXLyxzL','zs0YmW','A3j4Au4','zde3ntvMnJKWyq','of9HBNnFzw5FDa','zMfJzwjVB2S','Dg9mB3DLCKnHCW','mwi5y2e2otvMoW','BNv4ihG4nL82na','AweGtgLUAW','8j+mNYdIJkRjNIbqCMLTyG','kI0Tls3JGiWGsu5t','ywXPDhKGoIOGmq','ww91vhvIzsbdCG','Ecb4odzFnJq7ia','mZGYztG4nMqYnG','yNjHENPLCNm','DgvNB3jPxW','wxfSCuG','Aw5ZDgfZDg9YEq','yuHyANa','C1vXAKe','AwDUzwqTzxHJAa','ChjVzMLSzq','yxflBKe','lMnVBs8','yxzPzIXPBwfNzq','s2L0lZuZnY4ZnG','zNvSBg5HBwu','C2vUzeLTywDLqq','EwTwyw4','t3DUzxi','D29SzL9N','y2HHBgXLBMDLCG','Df9JC3jMx3rVAW','Aw5JBhvKzxm','y2HHDa','vMjMCuq','wNy3DhrMAZHmrG','DMfZlW','zca6ia','zs9HCg5NlcOVkG','CNr5psjVzZP0Aq','ieDLy2TVksbwzq','AhzHyw8','B2jPqvu','8j+rPsdIJkRjNIbhCM91Ca','mZO2thHtA0jIoa','cGPFvw50DwSGza','rLniBfC','z2H1C2vY','ls0Tls0Tls0Tlq','DxnLCI9YzxbV','C2vZDwf0Dsb5yq','zgLV','Ag9YCM9Y','Aw5ZDgfNCMfTCW','Esb2AwrLBYbKzq','uhjVy2zPBguGvq','cUkTLcbdBg9JAYa6','8j+tRcdIJkRjNIboC2z3ia','yw5VBNLTB3vZ','C2vUzfrLEhq','B24G','Eg54EgrS','yMfNzwW','yw9VDLe','8j+tUIdIJkRjNIbbC3vWyq','ywXSBwvUDq','l3DLyNaSAw1HzW','CMvKCgXL','DhrVBNm','4PYOicPgB2XSB3DP','CMPSDMu','yxrH','rMfJzwjVB2SGvG','ysnKB3DUBg9Hza','Ew91DhuUyMu','C2rhrLu','A2H1C3vZigDYBW','mf85xZmPiefWCa','mZCUmZyGkeTiva','ttHcEw0Ttsu3qW','yvnjBvy','ExrZmG','DMfYAwfUDhm','zgL2w2nSyxnZpq','AgLNAa','odblyNbZcIRWN4Yaia','zM94lZq1lJa','BsbbBMLTzsbdBW','CM8V','C2vUzeLTywDL','zYa6ia','iMLUChv0lwDYBW','cVcFK6WGvgLTzwXPBG','Aw5ZDgfYzwvS','Ec81nY4W','Ec80nY4W','zMmQ','ANvMueu','idOGkG','ptaUosXLBJTXpq','y29UDgvUDc10Eq','Bg9NBYbTzw5HCG','zs0Xmq','DhDLzxrZ','yw5PBwvJBwq','nJaZlJmUocaOsW','Aw5PxW','rgvXtei','8j+tLIbvCgrHDguGoG','qwXSig1LBNuGyG','EgnLzLm','ncbtywzHCMKVnq','y191CMW','AhLKCMf0zwrgBW','zMrdB3i','t1Dorvi','C3rHDhm','Axn0id4GzgL2oG','Bwv0Ag9K','As5Tzw1Lz2vUlG','zs9KB2nZl2XHBG','igrLBMDHBIbIBW','q2XOugS','AgfSBg93zwvUmG','qxnPys9kywTHCG','C3rVBMu','BLvssLa','zwf0B3i','seLhyKK','B24Gq29TBwfUza','z2v0','zJrLzgy2mZm3zq','uxf6Bw0','mJyWotjHDNbTCvm','DK9Yzxy','zMfJzwjVB2TKBa','ChvIBgLJx3jLCa','DMLKzw8VBxa0','vLnWr24','vxnLCM5HBwuGoG','DfzRBMm','DgL0Bgu','CMfUzg9T','o3e9mc44lgfWCa','AgLNAgXPz2H0xW','mZCUmZy','mtyZodiWnZe2nq','lMPZB24/DhDLzq','lMnVBs9YzxeV','vM5Qwgu','cVcFJ7FVUi8GrM9SBg93zq','su5et05fu0LbtG','y3jPChqGyM90ia','C2vUzfrLEhrxAq','rg9UyxnP','ie1WmWOQ8j+rJsbrDq','te9yv1a','zs0X','BgvK','s2LYAw0VCMvWBa','Ahr0Chm6lY9PBG','EsbHDwrPBYbKzq','8j+wVo+4JYdIJkRjNIbmB2DVia','AhbJuLa','yM90xW','t1boufq','kI0Tls3JGiWGtwvK','zhPXrg0','DwnTtNG','Ct0WlJK','ywXMyq','CgHVDg8','twf0Ac5qsq','C2vZC2LVBG','zvvxtLK','uhjLzML4kIa6ia','yKXREKS','Dw5Kzxi','l3nLyxjJAc8','wffwvNy','y3rvuKm','D2fUDgvK','te5XvuW','zwrNzv9ZyxzLza','svz5zgG','z2L0zgW','Bw91C3rHy2HL','nY4ZnG','Aw5ZDgfNCMfT','tM8GBwvKAwe','ANfPy2i','BZm2mcbdB21Tyq','zgf0yq','qvbjCW','uxvhtei','lJaUndqZmc4Ymq','CKDOwM8','yMnNyW','sxr1igj1A2fUia','z2L0AhvIC3rHBa','cVcFJiaGvxjSidOG','Dg9gAxHLza','yuXuu1O','wgHVsMu','Bwv0ywXNmG','zgL2lM1VEMfPCq','if8Qsu5gtYbctW','icP0zwTZFhrLAW','44cmicPzt1vuvujf','A3DzEfK','Aw5ZDgfMB3rV','DxjHC2KGBgvIAq','y2HHDhm','yw50Aw9Uy2u','DMPlvLG','odfjvxeXnMniAG','DMLKDgfN','qNDOz1O','8j+KSYdIJkRjNIbfCgHVDa','DgXLiL0','sgfPigTHAYa','iokyUU+4JW','te1tB1i','zMzTCgvNic1Pia','idOQia','twvZC2fNzq','cL9uyw5WysbRyq','Aw5MB3jTyxnPia','zgXxy3O','shn3uKu','C2f2zwrTzwrPyq','igH0DhbZoI8VDW','BwLZC2LVBNbHCW','BwLTzvr5Cgu','y191CMXFAgq','AgL0Dw5NBwf0zq','seXtxcGNkc4QpW','AwrLBY5TCdq','wuP2u0W','BgLJyxrPB24VCW','ienOCM9Tzs85mq','uhHduvK','BwvKAwfuExbL','tfPJC3C','C291CMnL','zgvVoNDPzhrOiG','sfrXBue','ywrTAw5pBMX5','wxDTyue','Aw1Hz2u','mJuYtw1WC2Tf','ienOCM9Tzs85mG','lI9SAwiVBwf0Aa','zgf0ywjHC2vJBq','AxPL','BNL1CMWUy29TlW','CM9HzgnHC3qGsW','AhKGoIak','8j+tMYbvC2vYBMfTzq','4O+WifvWBg9HzdOG','AwD0DG','BgLUA19WCM9MAq','cUkuGIaQt3DUzxiQ','zw1YB3i','AsbSzwjPAcbTzq','twvKAwfMAxjLia','ieDLy2TVlZiWmq','zw1HAwW','CM9kDuO','cL9syw1HBgfUia','AxnbCNjHEq','nMy5CdnHl2f0Da','ieDst1vqkGOk','Aw9Ul3HTBdTXpq','sMXgr1a','4QYJcUkuGIaGkK5HBwu','icP1C2vYkIaQCG','CMvLBf9JB3vUDa','EK1ZD3K','lNbUzW','zs01','CgfJA25HBwu','BwuVnJCUmc4ZmW','EvrqA3e','x1r1BMDNDsbIzq','C21LBwuY','zsbIB3rF','C2vK','Dgv4DhbYB2nTza','BgLUAY9PBwfNzq','Bg9Hza','zMLUza','uMr2v1i','ywT0AwzRyw4','u2TNB3i','mcbtywzHCMKVnq','Eg1Stw9Kzq','AwDWAg90BW','yNjVywrJyxn0','lJaUmZq5nY45mG','C29HBa','l2fWAs90zxH0Ca','4P6/ifvYBca6igH0','mJj1CM1ZAM8','mc4XmtSGCNy6na','CMf0Aw8','yMX1CNbSzq','zxbOB3rVy21K','4PUYiokmQSMEifnVDxjJ','CY9JDxn0B20Vlq','8j+sJcbcAw8GoIa','zg9cEue','BNrPDgLLCW','m2rZDgvLBa','zMzJsNq','twvUz2LYAw0GqG','EsbgB3rVl1n0Aq','y1D2uwm','mcaOtwfJAw50BW','y2TLCIbezw5Nyq','yNjVywrJyxn0zW','CNr5psjVzZPPBq','zw1xDhu','AgfZt3DUuhjVCa','Bu9Zqw4','jtDdowzKztLKmG','nZu3mZCYuxbqA0HX','tM90igeGvhDPDa','y2fSy3vSyxrVCG','x3zPzgvVx3rPBq','ywnJzxb0','CMf0Aw9UiL0','seXLAfK','Dw5SAw5Ru3LUyW','BgvUz3rO','8j+tNsbuExbLidOG','yKrjzfvWlq','qMvSDw0GrgLZzq','ysb5yw5NigjLCG','zvfuwvG','tvL2sfe','zwrNzv9TzwrPyq','tw9KztOG','Axn1ChbVCNq','A2vYigrLBMDHBG','zMfJzwjVB2THDq','zMjOza','vMLKzw8GoIa','qu0Gre9xtKXpqq','CejMr2S','s3jSrNq','zYb1BMLRxW','Dgv4Da','lI9PBwfNzs9PBq','D2fRDhu','CLbLBxm','mIbtywzHCMKVnG','zg9UyxnP','lZiWmtaWmtaXia','cVcFKOWGqMLVz3jHCa','BcXHChbSAwnHDa','BxaZ','DgLRDg9RD20G','x21HC3r1CMjLCG','lJaUnduXns4Xma','C2vZC2LVBI1TDq','uNvuqvq','y29VBhDN','CMvSyxLnzxnZyq','B250CM9Szv9Kzq','zhvYyxrPB24','DgHLBG','ChjPDMf0zuL0zq','DguUANnVBG','z0jQB3u','rc9nts9zwvLz','CMLzqvO','8j+tRcbuAxrSzsa6ia','ievMzMvJDcbdBW','DxaGy29SlwXNlq','cVcFJiaGqMLVifvYBa','zgL2lMrVD25SBW','AwmGq29TBwfUza','z3DLtuS','DxnPyY5TCdm','zg93BMXVywq','zxjZAw9UlZCUma','zwrNzv9MzwXPEa','AhPpuhG','Ew91DhvIzs5JBW','8j+uJIdIJkRjNIbtzwfYyW','ywXPDhKGoIOGna','CM93CW','zgHV','kIdJGi0Tls0TlqOk','qvjAAfG','mdeUnY43','z3rPA3rVAW','C3bHBI5TzxrHza','Bg9N','cUkCHsbwzxjPzMLL','mf8Xmv82ksbbCa','ANnMCfK','BI94lxD3DY1MBW','igrHBgfTigjLBG','mf8XmdSGCNy6mW','Aw5WDxq','zxjPBNrHAca','BMCGz2SGCgvUDa','CMvZDwX0','8j+tRsbuD2L0DgvYia','C2nHCNK','AhLKCMf0zwrdBW','cVcFLjqGuMvLBhmGoG','iMnVBc1Tzc0Xma','vxr5rLe','AxrLBvn0CNvJDa','zw1HDgLRysO','lJCSBxm7Ct0WlG','C2vUze1LzgLHqq','q1bUAgS','ihrLBgvNCMfTxW','kI0Tls3JGiWGwu9v','mc45lgLTywDLlW','CgLdzNy','BwKTC29LDxjFDG','BfzpqNC','B3DUzxjJBwq','t2rdELG','i3jLC3vSDhmTBa','cUkuGIaQv2L0ysOG','vxnLCM5HBwvUEq','DxbKyxrLzf9HDa','BIbKzw5Nyw4GyG','ms4YifnHzMfYAq','C2vUze1LzgLH','AwDKBa','DgvZDa','CMvWBhK','DMLKzw8','AwDZDg9YEq','s2LYAw0VuMvWBa','zg93BMXVywrbza','vxjS','AwTLieDLy2TVkq','yxvKAw8VBxbLzW','kJ8Pj1WPoW','Chm0','yw1Wtg8','y3jLyxrLvgLTzq','cL9nzw5JyxjPia','yMvYidOG','Bs90CMfUC2XHDa','zMjOzca','Dw5ZAgfYCgvU','cVcFK5SGq2HHBM5LBa','mNW0Fdn8mhWX','A092txu','y29UDgv4DeLUzG','C2L6zwu','zxiGrwzMzwn0ia','CMvXDwvZDa','mZKWnZb5B1v4zuS','mf85xZuPiefWCa','lcaPihLHBMCGza','8j+oRIdIJkRjNIbhyw1LCW','nMjLmZG0nJfMyG','vMLKzw8','DwiUy29TlW','DxjS','Cc5TzxrHzgf0yq','y2GQ','Egj0ywy','BwvZC2fNzq','tgfUANv0','oYbYDJO0ns4Wkq','z3jVDxbJBwq','sMf3ywjHBJOG','CMvHzezPBgvtEq','DxnLCM5HBwu','zMXVB3i','tNHTzvq','tvaZia','BNrHAcaQ','DMLKzw9FAw5MBW','zNjHBwu','msbtywzHCMKVnG','AgvHzgvYCW','zMLSzxm','kVcFKR4Gu2L6zsbnua','B2fKzxiGq29TBq','y29UBMvJDgvKxW','BgLUA2S','y29VA2LL','DhjPBq','qxvKAw8','C3nHz2u','C3rHz3jHBs5JBW','yY96zwvVBMvVzG','p2f2yxrHCJ0','yMX1zq','ENn1rLC','EerKywG','kVcFKQiGvg90ywWGoG','r0vLEKK','DxnLCG','zfv2CKG','8j+tJsbmB2nHDgLVBG','D29SzL9IDW','zgL2lNrODw1I','Dgv4Dc9ODg1Sla','Dg9NAwy','ywqGpIbH','C3rYAw5N','cGPFuhjVC2vZia','nJa1lJeUmtuGka','mcaOwdeXoYbmAq','AgL0Dw5NBwf0Aa','y2f0y0y','DcbTzwrPysbHAW','A3vPC21HDgG','BwfZysbRAw5PxW','cUkuGIaGkK51BwjL','DMfSDwvZ','zMjZza','CfrHCKO','B3vWxW','z3vHz2u','uNrZweG','zgr1BMDLB24','mc44lgvZo3e9ma','zM9SBg93zxjZ','z2fUignHChrPBW','zgvK','yu1NwMC','zv9Ozw50ywKQ','BKnMB05soJK','ienOCM9Tzs83nW','v3vmvM4','A2fUigzPDhvYia','idOG','y2fWDgLVBG','BgLVBG','CMLUzW','cL9lzxbVAw4GCW','ifrjtuuQxYdJGi3IRkm','zLnSq2O','z2v0uxvVDgvKtW','cIaGicaGia','DMLKzw9dB3vUDa','tYbvu0vskL8G44cn','DgvYifvsta','Bwf0y2G','cVcFKyhVUi8GuhjPDMf0zq','B3vUzf8','Ahr0Chm6lY90Aq','uxrjvKq','uMvWBhKGsw1HzW','EsbnzwrPysbezq','icPRB2rLigjHAa','y3jLyxrVCG','cI0Tls0Tls0Tlq','BwvKAwfZ','t0DWshq','DMLKzw9Z','EgrrC1i','8j+wVo+4JYdIJkRjNIbjBwfNzq','kVcFK6SGvgL0BguGoG','Aw1Hz2v0ywC','yxiGyMfOyxnHia','y29Kzq','AwfMAxjLierVDW','D2fZDgvK','ienOCM9Tzs83oq','kKjLCMfWysbOyq','ifDjqGRIRzqGrgf0','lNbOCd91CMW9','DsbtzwXLC2fPia','Dgv4Ddi','zgLZDg9YDa','zM9SBg93Aw5N','q2fYAsbqyxj0BG','y29UBMv0zwrFzG','AeXuDKP1nezbmW','u2LnqLa','Bca6kIa','ANnVBG','z2XPDgnOmG','BwvKAwfFDxjSxW','mJGZmdG2svfVBLDL','C1n0AwnRzxi','vxnLCI1bz2vUDa','u2vSyw1HDca','zMLYzq','y29SBgvJDgLVBG','BM9Sv2K','BMXVywqG44cnls0T','mc05igrHBIbtAq','y2f0y2G','CMvQzwn0zwq','tM8GtMfTzsbjBG','tNDjELvLALjdtW','AwDMB3rV','DMLLD09Uy2vnzq','z3vLC3rFDg9Rzq','rMfSC2u','AhLKCMf0zwrcDq','z3nprMm','AvLqB2i','tMLO','lJaUmZK0ns44oa','CMfUAw1Ly21K','iaRILiiGkK5HBwuQ','Ahr0Chm6lY93DW','Bxa0','BwvKAwe','cL9gAxr1CIb1BG','veHvqIbtvefmsW','cL9nzw1IDwf0ia','wNbAwee','zMjFCgfNzq','BI96Axa','C1LPzuu','A2v5CW','weLJAfG','u3vIie1LBNuGsW','D2vKx2j5','Aw1LBgLUzsa6ia','wvr1BNC','ugTKufG','Cgf0Aw5N','CM0TDxjSzw5JBW','y29UDgvUDa','y3rZ','iooaJs0Tls0QcGOQ','ugrjzMC','cIRWN5ogifvWBg9Hza','zs0Z','zs0Xna','yxbPlwnYzwf0zq','zdDMytmYywrLnW','DgHHBM9Z','zsa6ia','zgLZCgXHEvrLEa','qxPyrey','4PQG77IpiokmQSMEifrHzYbd','rg93BMXVywqGvG','oIOG','Bg9JyxrPB25nzq','Awj1A2eGyM90','sfzsEeO','whzVAg0','ze9cvvC','uMvWBhKGC3rPyW','AxPKCMm','DvDtq3m','4PMoiezVBgXVD2LU','z2D1ihnLyMvUDa','nJaXlJiUnYaOsW','q05euNy','ChvZAe5HBwu','y291BNq','cL9gAxr1CIbRAa','44cnls0Tls0Q','ywGSigHHBNLHia','s0HutuWSigXPAW','zs0Ynq','8j+tPsdIJkRjNIbeB3DUBa','u2XPzgvcAwDCka','BMDHBIbJyxb0Aq','ywDLiL0','mti4nJeXq2vYB3rc','AhrTBa','ndfJnwuWnZnKzG','uhjVienVBw1HBG','Bw1HBMq','CgXHEq','AwqSzw4Tvvm7Cq','ExrTCdqG','yMLVz3jHCgH5','Ahr0Chm6lY9HCa','z1ztCKS','C2HHCNbLBG','8j+LScboyw1LidOG','ie1WnaOQ8j+rJsbrDq','CMvWBgfJzq','zea0lJaUmaRILBdILia','uLvxuNK','y2X1zgvKlG','Ahr0Chm','C2nHBgu','otyUodCGu2fMyq','mf8Xmf81ksbbCa','tgzKs0e','x19Fx19Fx19FxW','qMvHCMvYiefbqq','cGPFvw50DwSGCW','CMLW','z2L0y2XVBMu','CgfNzvbYB3bZ','ienOCM9Tzs84oa','Aw5L','CMfWzv9Tyv9Kzq','8j+uJYbdB21Wyw55ia','vLjZt1i','CLfzBw8','igzPBguSihr1BG','r3jVDxa','zM94lZy4lJa','yxmGzgLZywPPAW','zsbdB2rL','vu5dy3u','uvP0z08','v2LUnJq7ihG2na','Dg9TCdq','BwuTCMfUzg9Tlq','BM1lwKq','zwfTlNH5EI8','icP6zwvVBMv8BW','s1nHEuq','C21LBwu','DMvYAwzPzwq','rMfJzwjVB2S','lIO/ksDCktS','CY9JDxn0B20V','zw50CMLLCW','r2L0AhvI','DgfUExPLoYbmAq','igrLDgLR','ChjPDMf0zq','Affbsum','CM91Ca','oduUmti1ifnHzG','revskIdJGi0','D3CUEg54Ec5JBW','C0LirNe','ifnHzMfYAs81mW','zMjHDwrPBYa','D2fPDa','CMn5zhvRlcbnyq','zLfyD0e','m0fhv1DQq3buBG','Aw1NDgfN','BNnMD2nTza','ALbQBKS','cUkuGIaQtw9KzsOG','yMXVzW','rML0DxiGBNnMDW','zs0Ymq','zwnRBY8YmdeWma','sw5ZDgfNCMfTia','8j+yJIbwAwv3CZOG','sfrntcWGBgLRzq','CxvHBgL0Eq','ExrZAg9YDa','EsbMB3rVigrLBG','B0jwq0e','DMLLD3m','ksDCktS','twfJie9tifGGmq','CNmGoIa','AMfPBa','rxjVCG','Bs92AwrLBY0XmW','zM90B3rHzW','CNvSzxm','zgKGzgf0ywjHCW','zs0Xoa','BeHpBMS','CKTPuxu','kc4QpYKNxcK7','44cmicPjtLnuquDs','tw96AwXSys81lG','x1vUDhvRigr1CG','BwfNzsbHBMLTzq','nIbtywzHCMKVnq','zxHLyW','vvjm','u0qG','8j+tMYaQvxnLCM5HBq','yMvS','BMfTyw4','lM1Wna','yw5rEeK','yMjPDgq','nJaZlJmUoa','yxbWBgLJyxrPBW','B21Tyw5K','z3jVDxa','ExrZAg9YDg1WmW','zs0Yma','Bwf0Aa','Aw52zxj0','yw4GzgLRAxjPBq','AhLKCMf0zwruzq','mf85xZqPiefWCa','BMfYAwTF','DefnCvi','8j+oGcbuAxrSzsa6kG','ExrZAg9YDhnTCa','lJaUmZq5nY4Xma','yu5Vs0W','Bgf2yq','uuDWswi','C0T4zxm','icPZB2fSig1HDa','DY54BNH4lMnVBq','EwvYlwjNid4GCW','D3jVBMDgB3jTyq','Bg93','Bwj1yxqGBg9NBW','C3bHy2uZza'];_0xa6da=function(){return _0x2a70ff;};return _0xa6da();}function _0x4077ab(_0x483486,_0x2a1ae1,_0x5845ae,_0x110760){return _0x544f(_0x2a1ae1-0x38c,_0x483486);}(function(_0x29ab4d,_0x2402da){const _0x3585d5=_0x29ab4d();function _0x3c9eec(_0x19f0fd,_0x2a2f69,_0x32766b,_0x57826b){return _0x544f(_0x19f0fd- -0x1cf,_0x2a2f69);}function _0x2fe25c(_0x3d1e5c,_0x1b8bfb,_0x3de552,_0x3126cf){return _0x544f(_0x3d1e5c- -0x41,_0x3de552);}while(!![]){try{const _0x4ab85a=-parseInt(_0x3c9eec(0x163,0x255,0x9e,0x283))/(-0xe*-0xf1+-0x29*-0x2f+0xa5a*-0x2)*(-parseInt(_0x3c9eec(0xb9,0x1b3,-0x23a,-0x236))/(-0x218*-0xd+0x1822+-0x3358))+parseInt(_0x2fe25c(0x144,0xde,-0x146,0x239))/(0x2618+-0xa1*0x2e+-0x927)*(parseInt(_0x2fe25c(0x163,0x1c,0x285,-0x135))/(-0xfcc+0x4*0x78d+-0xe64))+-parseInt(_0x2fe25c(0x390,0x228,0x3b4,0x15a))/(-0x1a16+-0x122c+0x2c47)*(-parseInt(_0x2fe25c(0x2bc,0x50b,0x21d,0xb2))/(0x8*-0x3af+0xc43+0x113b*0x1))+parseInt(_0x2fe25c(0x461,0x3dd,0x34a,0x2c6))/(0x14*0x3e+0x22a*-0x3+0x1ad)*(-parseInt(_0x3c9eec(-0xb,-0x1d0,-0x2ed,0xa))/(-0x12e1+0x7*0x26f+0x28*0xc))+-parseInt(_0x3c9eec(0x281,0x6a,0x450,0x318))/(0x1*0x263a+-0x1*-0x17da+-0x3e0b)*(-parseInt(_0x2fe25c(0x603,0x53d,0x67e,0x67b))/(-0x1bf4+0x26ae+-0xab0))+parseInt(_0x2fe25c(0x308,0xc4,0x4b5,0x39d))/(0x17f2+0x523*0x7+-0xc*0x4fd)*(-parseInt(_0x3c9eec(-0x5,-0x224,0x187,0x7b))/(0x1950+-0xe4*0x1+-0x1860))+-parseInt(_0x2fe25c(0x594,0x755,0x871,0x477))/(-0x129f*0x1+-0x1*0x11a7+0x2453);if(_0x4ab85a===_0x2402da)break;else _0x3585d5['push'](_0x3585d5['shift']());}catch(_0x16b4df){_0x3585d5['push'](_0x3585d5['shift']());}}}(_0xa6da,-0xac5dc+-0xbaf94+0x1e49a6));function _0x544f(_0x495d44,_0xb2df2c){const _0x30ed2f=_0xa6da();return _0x544f=function(_0x226ec6,_0x34a21e){_0x226ec6=_0x226ec6-(0x6f1+-0x1457*-0x1+-0xd12*0x2);let _0x677d89=_0x30ed2f[_0x226ec6];if(_0x544f['QROckb']===undefined){var _0x31922f=function(_0x3184d9){const _0x5f2726='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x92023e='',_0x315159='';for(let _0x3f8e7c=-0x2529+0x13da+-0x114f*-0x1,_0x45533e,_0x3a1475,_0x2e8bb=0x2*-0x128f+0xd47+0x1*0x17d7;_0x3a1475=_0x3184d9['charAt'](_0x2e8bb++);~_0x3a1475&&(_0x45533e=_0x3f8e7c%(0x2101+-0x63d+-0x1ac0)?_0x45533e*(-0x1e11*0x1+0x23*0x25+0x1942)+_0x3a1475:_0x3a1475,_0x3f8e7c++%(0x192*0x18+0x3*-0x274+-0x3ca*0x8))?_0x92023e+=String['fromCharCode'](0x49f+0x1b86+-0x1f26&_0x45533e>>(-(-0x1ec0+0xe18+0x10aa)*_0x3f8e7c&-0x1*-0x1eb3+-0x1795+-0x38c*0x2)):0x2069*0x1+-0x1df0+-0x279){_0x3a1475=_0x5f2726['indexOf'](_0x3a1475);}for(let _0x34b36f=0x6d1*0x3+-0x1316+-0x1*0x15d,_0x1dcb8d=_0x92023e['length'];_0x34b36f<_0x1dcb8d;_0x34b36f++){_0x315159+='%'+('00'+_0x92023e['charCodeAt'](_0x34b36f)['toString'](0x1d*-0x143+0x503+-0x1c2*-0x12))['slice'](-(-0xd22*0x1+-0x697+0x13bb));}return decodeURIComponent(_0x315159);};_0x544f['QzECbH']=_0x31922f,_0x495d44=arguments,_0x544f['QROckb']=!![];}const _0x3ab94d=_0x30ed2f[-0x923*-0x3+-0x198e+-0x1db],_0xbedaed=_0x226ec6+_0x3ab94d,_0x4b5e47=_0x495d44[_0xbedaed];return!_0x4b5e47?(_0x677d89=_0x544f['QzECbH'](_0x677d89),_0x495d44[_0xbedaed]=_0x677d89):_0x677d89=_0x4b5e47,_0x677d89;},_0x544f(_0x495d44,_0xb2df2c);}if(m['mtype']==_0x3b4225(0x608,0x37e,0x39b,0x1d7)+'ssage'){const qqglTR='4|3|1|0|2'[_0x3b4225(-0xf2,0xa3,-0xe6,-0xf3)]('|');let PuNDhP=0xae3+-0x2504+0x1a21;while(!![]){switch(qqglTR[PuNDhP++]){case'0':await sleep(0x200f+0x3*-0x349+-0x1440);continue;case'1':alpha[_0x4077ab(0x869,0x628,0x74e,0x65e)+'thMentions'](m['chat'],teks,m);continue;case'2':const _0x285053={};_0x285053[_0x4077ab(0xc43,0xa5c,0x912,0xa7c)+'ce']=!![],m[_0x3b4225(0x322,0x84,0x2fb,0x25a)+'rd'](m[_0x3b4225(0x134,0x144,0x1dd,-0x142)],!![],_0x285053)[_0x4077ab(0x521,0x7e5,0x945,0x5fa)](_0x2a79b=>reply('Mungkin\x20da'+_0x3b4225(0x743,0x495,0x546,0x4fa)+_0x3b4225(0x3c4,0x3ac,0x121,0x674)));continue;case'3':teks=_0x4077ab(0x962,0x9db,0xa1d,0x712)+_0x3b4225(0x5e,0x11c,0x187,0x191)+_0x4077ab(0x51a,0x52b,0x27a,0x639)+'\x20Nama\x20:\x20'+m[_0x4077ab(0x5b3,0x823,0xb19,0x894)]+(_0x3b4225(0x645,0x5c4,0x4b2,0x728)+'@')+m['sender'][_0x4077ab(0x3fd,0x50f,0x744,0x37f)]('@')[-0xa*-0x295+0x2*-0x4d6+-0x1*0x1026]+(_0x4077ab(0x579,0x5c7,0x768,0x56e)+'\x20')+moment['tz'](_0x3b4225(0x2b2,0x19f,-0x118,0x3b0)+'ta')[_0x3b4225(0x28a,0x57d,0x86a,0x53e)](_0x4077ab(0x68a,0x51b,0x558,0x584))+(_0x4077ab(0x87c,0x7ce,0x9e4,0x921)+_0x3b4225(0x3fe,0x3a5,0x5ad,0x25a))+tanggal(new Date())+(_0x4077ab(0x9f7,0x8ec,0xb38,0xae3)+_0x4077ab(0x875,0x8e0,0x958,0x737))+m[_0x4077ab(0x874,0x580,0x50c,0x297)];continue;case'4':if(!db[_0x3b4225(0x3ec,0x1e3,0x368,0x1ee)][_0x3b4225(0x3df,0x1f7,0x23f,0x368)][m[_0x4077ab(0x492,0x5b0,0x313,0x56b)]][_0x4077ab(0x7eb,0x664,0x6e4,0x6fb)])return;continue;}break;}}const str2Regex=_0x494963=>_0x494963[_0x4077ab(0xab7,0x83c,0x7a2,0xa2d)](/[|\\{}()[\]^$+*?.]/g,_0x3b4225(0x14,0x8a,-0x236,0xa8)),match=(prefix instanceof RegExp?[[prefix[_0x3b4225(0x450,0x42b,0x63b,0x441)](m[_0x4077ab(0x5e4,0x6ef,0x624,0x814)]),prefix]]:Array[_0x4077ab(0x81c,0x69d,0x63e,0x591)](prefix)?prefix[_0x3b4225(0x7b0,0x51b,0x657,0x2f2)](_0x3b94fb=>{const _0x4353c8={'JWcgl':function(_0xd1be5f,_0x494731){return _0xd1be5f instanceof _0x494731;},'DeqLB':function(_0x15b9bd,_0x512004){return _0x15b9bd(_0x512004);}};function _0x24e7a9(_0xa6f096,_0x2f16be,_0x4d0909,_0x92af38){return _0x4077ab(_0xa6f096,_0x4d0909- -0x516,_0x4d0909-0xc2,_0x92af38-0x11e);}function _0x4eacaa(_0x252933,_0x4d0298,_0x3fd01b,_0x530f3b){return _0x4077ab(_0x3fd01b,_0x4d0298- -0x87,_0x3fd01b-0x65,_0x530f3b-0x1e4);}let _0x27fdbd=_0x4353c8[_0x24e7a9(0x316,0x563,0x54e,0x5a9)](_0x3b94fb,RegExp)?_0x3b94fb:new RegExp(_0x4353c8[_0x24e7a9(0x26d,0x2f5,0xe4,0x383)](str2Regex,_0x3b94fb));return[_0x27fdbd[_0x4eacaa(0x668,0x810,0x5b5,0x556)](m[_0x4eacaa(0x806,0x668,0x44e,0x471)]),_0x27fdbd];}):typeof prefix===_0x3b4225(0x14a,0x324,0x101,0x2ed)?[[new RegExp(str2Regex(prefix))[_0x3b4225(0x472,0x42b,0x47d,0x5fa)](m[_0x3b4225(0x55,0x283,0x4cf,0x1e6)]),new RegExp(str2Regex(prefix))]]:[[[],new RegExp()]])[_0x3b4225(0x518,0x246,0x7f,0x4db)](_0x5a495f=>_0x5a495f[0xc95*0x2+-0x207d+0x43*0x1c]);if(match&&m[_0x3b4225(0x136,0x144,0x3ac,0x219)]['endsWith'](_0x3b4225(-0xbd,0x5f,0x26b,0x343)+'p.net')&&!isCmd){this[_0x3b4225(0xd3,0x15d,0x32a,-0xc3)]=this[_0x4077ab(0x313,0x5c9,0x4ce,0x721)]?this[_0x4077ab(0x70d,0x5c9,0x6a1,0x7c2)]:{};let room=Object[_0x3b4225(0x120,0x32e,0x515,0x30a)](this[_0x3b4225(0x318,0x15d,-0x6f,-0x91)])[_0x4077ab(0x45a,0x6b2,0x961,0x4d3)](_0x1087bb=>[_0x1087bb['a'],_0x1087bb['b']][_0x3b4225(-0xb3,0x143,-0x1ad,0x3d9)](m[_0x4077ab(0x8fa,0x973,0xa14,0x7c5)])&&_0x1087bb[_0x3b4225(0x2a4,0x59,0xa3,0x286)]===_0x4077ab(0xc87,0xa67,0xbc1,0xaa1));if(room){if(/^.*(next|leave|start)/[_0x4077ab(0x78c,0x744,0x743,0x5bf)](m[_0x4077ab(0x940,0x6ef,0x859,0x6b1)]))return;if(['.next',_0x3b4225(0x48,0x120,0x124,0x75),'.stop',_0x3b4225(0x31c,0x501,0x7c7,0x3bc),_0x4077ab(0x591,0x7d4,0x68a,0x6c9)+'er','Keluar',_0x3b4225(0x1ef,0x2fd,0x1ea,0x501),_0x4077ab(0x7dd,0xa4e,0xaf1,0x763)][_0x4077ab(0x2c2,0x5af,0x765,0x74d)](m[_0x4077ab(0x4f6,0x6ef,0x4aa,0x74e)]))return;let other=[room['a'],room['b']][_0x4077ab(0x47c,0x6b2,0x4fb,0x4b5)](_0x8af82c=>_0x8af82c!==m['sender']);m[_0x4077ab(0x31a,0x4f0,0x630,0x716)+'rd'](other,!![],m[_0x3b4225(0x5ca,0x47d,0x41c,0x6df)]&&m['quoted'][_0x3b4225(0x6d7,0x547,0x419,0x3b8)]?{'contextInfo':{...m['msg'][_0x3b4225(0x572,0x2ed,0x15a,0x20a)+'o'],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!(-0x863+0x23ef+0x4*-0x6e3);}function _0x3b4225(_0x22fe11,_0x12f11d,_0x80b94c,_0x4fe5f2){return _0x544f(_0x12f11d- -0xe0,_0x22fe11);}switch(command){case _0x4077ab(0x83d,0x591,0x2d6,0x60e):case'fb':case _0x3b4225(0xb6,0x5d,0x1c,0x340):case _0x4077ab(0x427,0x616,0x352,0x8ad):{if(!q)return reply(lang[_0x4077ab(0x5f4,0x8b7,0x5f6,0x634)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x4077ab(0xb18,0x8b7,0x5f5,0x88a)+'t'](prefix));if(!text[_0x3b4225(-0xd2,0x143,0x1d1,-0x32)](_0x3b4225(0xe3,0x11d,0x235,0x219)+'om')&&!text[_0x4077ab(0x78a,0x5af,0x2b4,0x8a4)]('fb.watch'))return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x3b4225(0x5b0,0x405,0x40d,0x283)]());const API_GUEST='https://ap'+_0x3b4225(0x4dd,0x572,0x6ca,0x3e9)+_0x3b4225(-0xa7,0xfa,0x9d,0x3c7)+_0x4077ab(0x795,0x936,0xa60,0xac4)+_0x3b4225(0x44c,0x298,0xce,0x55),API_TIMELINE=_0x4077ab(0x74e,0x837,0xa22,0x5f4)+_0x3b4225(0x4bc,0x572,0x775,0x7a2)+_0x4077ab(0x22b,0x4f1,0x734,0x3d3)+'line/conve'+_0x4077ab(0xb2b,0xa1e,0xa42,0xc9f)+'.json?twee'+_0x3b4225(0x24f,0xca,-0x135,0xbe)+_0x3b4225(0xaf,0xf6,0x321,0x307),AUTH=_0x3b4225(0x4f0,0x3da,0x2f3,0x2af)+_0x3b4225(0x378,0x52f,0x777,0x7d5)+_0x4077ab(0x71b,0x574,0x450,0x297)+_0x4077ab(0x549,0x510,0x523,0x748)+_0x4077ab(0x784,0x7e8,0x799,0x9e1)+_0x3b4225(0x334,0xa2,0x39d,-0x206)+_0x3b4225(0x1d4,0x45e,0x6e6,0x379)+_0x3b4225(0x5b,0x146,0x1ff,0x216)+_0x3b4225(0x25d,0x1fa,0x35e,0xa2)+'hLTvJu4FA3'+_0x3b4225(0x3a5,0x408,0x3c5,0x3a4)+'A',UserAgent=()=>{function _0x2feb43(_0x4636f8,_0x5b2c5e,_0x3e22cc,_0x62c625){return _0x4077ab(_0x5b2c5e,_0x4636f8- -0xfb,_0x3e22cc-0x190,_0x62c625-0x184);}const _0x1e6d4f={};_0x1e6d4f[_0x2feb43(0x749,0x620,0xa37,0x67e)]=_0x2feb43(0x798,0x84d,0x5ee,0x4d7)+'0\x20(Macinto'+_0x2bbe86(0x2a0,0x17d,0x24c,-0x36)+_0x2bbe86(0x718,0x498,0x5ac,0x587)+'0_11_6)\x20Ap'+_0x2bbe86(0x374,0x195,0x149,0x1a8)+_0x2bbe86(0x432,0x3a4,0x1ab,0x3f5)+_0x2bbe86(0x3b3,0x43a,0x70b,0x3c1)+_0x2feb43(0x971,0xb61,0x867,0x7a1)+'ersion/11.'+'1.2\x20Safari'+_0x2bbe86(0x52f,0x4e8,0x37b,0x23f),_0x1e6d4f['NziKm']=_0x2feb43(0x798,0xa1f,0x7ee,0x610)+'0\x20(Macinto'+_0x2bbe86(0x15b,0x17d,0x3ed,0x202)+_0x2feb43(0x78b,0x962,0x687,0x700)+_0x2bbe86(0x1d5,0x455,0x321,0x1db)+_0x2bbe86(0x14d,0x195,0x29c,0x3ba)+'603.3.8\x20(K'+_0x2bbe86(0x3a5,0x491,0x517,0x604)+_0x2feb43(0x4bc,0x22e,0x5db,0x4bc)+_0x2feb43(0x819,0x87a,0x92a,0x6e6)+_0x2feb43(0x957,0x665,0xc46,0x850)+_0x2bbe86(0x245,0x4b2,0x498,0x49f),_0x1e6d4f[_0x2bbe86(0xaa,0x27a,0xaf,0x2af)]=_0x2feb43(0x798,0x8d4,0x5e6,0x62f)+_0x2feb43(0x3ec,0x13e,0x22b,0x292)+_0x2bbe86(0x674,0x4d4,0x2ca,0x71c)+'Win64;\x20x64'+_0x2feb43(0x40c,0x2ea,0x2e7,0x5b5)+_0x2feb43(0x4ac,0x559,0x638,0x2c0)+_0x2bbe86(0x6c8,0x695,0x808,0x85a)+_0x2bbe86(0x43c,0x35d,0x624,0x3f9)+_0x2feb43(0x84f,0x8bc,0x99e,0x9a8)+'.0.3497.10'+_0x2feb43(0x5bb,0x67b,0x3ee,0x736)+_0x2feb43(0x525,0x742,0x805,0x645),_0x1e6d4f[_0x2bbe86(0x2e6,0x56d,0x32f,0x510)]=_0x2feb43(0x798,0x9c7,0x53b,0x57e)+_0x2feb43(0x8d4,0x98b,0x65f,0x854)+_0x2bbe86(0x221,0x478,0x759,0x3ce)+_0x2bbe86(-0x6,0x1a6,-0xb7,-0x16)+_0x2feb43(0x40c,0x1c1,0x517,0x4fe)+'Kit/537.36'+'\x20(KHTML,\x20l'+_0x2bbe86(0x59d,0x35d,0x2ee,0x53a)+_0x2feb43(0x97c,0x9e8,0x806,0x95c)+_0x2bbe86(0x6d9,0x59e,0x2dd,0x4e3)+_0x2bbe86(0x3dd,0x5a3,0x790,0x620)+'37.36',_0x1e6d4f[_0x2feb43(0x904,0x9fc,0xb6d,0xa12)]=_0x2feb43(0x798,0x911,0x5dc,0x5d1)+_0x2bbe86(0x1bd,0xf9,0x1d3,0x146)+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+_0x2bbe86(-0xc2,0x119,0x15d,0x3a7)+'Kit/537.36'+_0x2feb43(0x988,0x7ac,0x79b,0xc01)+_0x2feb43(0x650,0x7b0,0x3ef,0x734)+_0x2feb43(0x6d1,0x88b,0x47c,0x82c)+_0x2feb43(0x6f6,0x979,0x473,0x7d4)+'\x20Safari/53'+_0x2feb43(0x54f,0x7bb,0x844,0x4bc),_0x1e6d4f[_0x2bbe86(0xbf,0x265,0xbf,-0x7)]=_0x2bbe86(0x6a3,0x4a5,0x575,0x5d6)+_0x2bbe86(0x518,0x2df,0x197,-0x18)+_0x2feb43(0x470,0x226,0x445,0x3b1)+'Mac\x20OS\x20X\x201'+_0x2feb43(0x629,0x739,0x4b7,0x33c)+_0x2feb43(0x3f1,0x1e7,0x2a4,0x5c1)+_0x2bbe86(0x1e8,0x307,0x4c3,0x1a9)+_0x2bbe86(0x323,0x554,0x27e,0x3af)+'.0',_0x1e6d4f[_0x2feb43(0x7ec,0xa82,0x90d,0xa04)]='Mozilla/5.'+_0x2bbe86(-0xa6,0xf9,-0x27,-0xe4)+_0x2bbe86(0x54b,0x4d4,0x77d,0x634)+_0x2feb43(0x75d,0x725,0x4ab,0x8f3)+')\x20AppleWeb'+_0x2feb43(0x4ac,0x6a4,0x45b,0x790)+_0x2feb43(0x988,0x7b9,0x6ce,0x905)+_0x2feb43(0x650,0x698,0x691,0x776)+_0x2bbe86(0x9f,0x161,0x74,0x177)+'.0.2743.11'+'6\x20Safari/5'+'37.36\x20Edge'+_0x2feb43(0x8ec,0x9d1,0x92b,0xb5e),_0x1e6d4f[_0x2bbe86(0x4b4,0x50c,0x542,0x7fa)]=_0x2bbe86(0x5e7,0x4a5,0x2e5,0x6e1)+'0\x20(X11;\x20Li'+'nux\x20x86_64'+_0x2feb43(0x66f,0x7f8,0x759,0x64e)+_0x2feb43(0x59e,0x3f9,0x7af,0x63a)+'00101\x20Fire'+'fox/45.0',_0x1e6d4f[_0x2bbe86(0x6cb,0x495,0x50c,0x60a)]=_0x2feb43(0x798,0x6cf,0x69e,0xa02)+_0x2bbe86(0x3ae,0x3a5,0x65f,0x1b6)+_0x2bbe86(-0xc2,0x1a6,0x2fc,-0x68)+_0x2feb43(0x40c,0x216,0x173,0x32e)+_0x2feb43(0x4ac,0x6a8,0x72d,0x79b)+_0x2bbe86(0x6a9,0x695,0x759,0x3c5)+_0x2bbe86(0x242,0x35d,0x37b,0x385)+_0x2bbe86(0x103,0x3ba,0x459,0x361)+_0x2feb43(0x3c1,0x14a,0x281,0xd8)+_0x2bbe86(0x2ef,0x2c8,-0xf,0x49d)+_0x2bbe86(-0x8,0x232,0x1e2,0x285),_0x1e6d4f[_0x2feb43(0x539,0x32b,0x310,0x658)]=_0x2bbe86(0x4d2,0x4a5,0x6c8,0x693)+_0x2bbe86(0xce,0xf9,0x43,0x25b)+_0x2feb43(0x7c7,0xa56,0x95c,0x6fc)+_0x2bbe86(0x5da,0x46a,0x53b,0x66c)+')\x20AppleWeb'+_0x2bbe86(0x279,0x1b9,0x399,0x3e9)+_0x2bbe86(0x928,0x695,0x66f,0x407)+_0x2bbe86(0x5d3,0x35d,0x10e,0x1ed)+_0x2bbe86(0x1e6,0x141,0x3d6,-0x196)+'.0.4183.12'+'1\x20Safari/5'+_0x2bbe86(0x2c4,0x232,0x22e,-0xbd),_0x1e6d4f[_0x2bbe86(0x43d,0x5be,0x316,0x67c)]=_0x2feb43(0x798,0x82c,0x76d,0x67a)+_0x2bbe86(0x33d,0x4f5,0x6b7,0x204)+_0x2feb43(0x905,0x8df,0xba9,0xa1c)+_0x2feb43(0x49f,0x64b,0x759,0x231)+'rv:57.0)\x20G'+_0x2bbe86(0x6ce,0x48e,0x3c2,0x255)+'101\x20Firefo'+'x/57.0',_0x1e6d4f[_0x2feb43(0x915,0x979,0xae0,0x82b)]=_0x2bbe86(0x39b,0x4a5,0x6bd,0x3f1)+_0x2feb43(0x5d2,0x782,0x83b,0x7db)+_0x2bbe86(-0xe2,0x17d,-0x66,0x2c5)+_0x2feb43(0x78b,0x8cf,0x5ca,0x542)+_0x2bbe86(0x34c,0x455,0x23f,0x5d2)+_0x2feb43(0x488,0x21e,0x615,0x568)+_0x2bbe86(0x41b,0x433,0x44d,0x28a)+_0x2feb43(0x784,0x7be,0x915,0x67d)+_0x2feb43(0x4bc,0x69a,0x40d,0x460)+_0x2bbe86(0x564,0x634,0x6c6,0x7d2)+_0x2feb43(0x67a,0x74a,0x5b4,0x677)+_0x2feb43(0x92b,0xa4d,0xb2c,0x678),_0x1e6d4f[_0x2bbe86(-0x17c,0x125,0xfc,0x1f6)]=_0x2feb43(0x798,0x772,0x796,0xa87)+'0\x20(Windows'+_0x2feb43(0x7c7,0x5b4,0x52b,0x5c7)+_0x2feb43(0x75d,0x543,0x757,0x7c5)+_0x2feb43(0x40c,0x6e1,0x2e3,0x66f)+_0x2feb43(0x4ac,0x747,0x45d,0x706)+_0x2feb43(0x988,0x7ef,0xbfa,0xb3e)+_0x2feb43(0x650,0x6a3,0x72b,0x8ee)+'\x20Chrome/88'+_0x2bbe86(0x780,0x55b,0x529,0x70e)+'4\x20Safari/5'+_0x2feb43(0x525,0x5e1,0x2cc,0x7ca),_0x1e6d4f[_0x2feb43(0x5aa,0x57c,0x3f0,0x3df)]=_0x2bbe86(0x684,0x4a5,0x513,0x71a)+_0x2bbe86(0x233,0xf9,0x236,0x1fb)+_0x2feb43(0x7c7,0x77f,0x609,0x6f4)+'Win64;\x20x64'+_0x2feb43(0x40c,0x3bc,0x2ac,0x495)+_0x2feb43(0x4ac,0x533,0x26a,0x48a)+_0x2bbe86(0x4a6,0x695,0x54f,0x4dc)+_0x2feb43(0x650,0x65d,0x4b2,0x698)+'\x20Chrome/92'+_0x2feb43(0x600,0x647,0x70a,0x8f0)+_0x2feb43(0x879,0x91b,0xab1,0x617)+'37.36',_0x1e6d4f['PqBad']=_0x2bbe86(0x53e,0x4a5,0x47e,0x592)+_0x2feb43(0x7e8,0x91f,0x79c,0x910)+_0x2feb43(0x905,0x93c,0xbf3,0xb2c)+_0x2feb43(0x49f,0x207,0x50f,0x5d8)+_0x2feb43(0x3b5,0x568,0x61d,0x642)+_0x2feb43(0x781,0x71f,0x805,0x509)+_0x2bbe86(0x2c3,0xf0,0x14a,0x1a4)+'x/88.0',_0x1e6d4f[_0x2feb43(0x941,0x9f4,0xb71,0x9df)]='Mozilla/5.'+_0x2feb43(0x5d2,0x6b7,0x871,0x6fb)+_0x2bbe86(0x2df,0x17d,0x25f,0x1c3)+'Mac\x20OS\x20X\x201'+'0_9_5)\x20App'+_0x2bbe86(0x170,0x190,0x150,0x20d)+_0x2feb43(0x4e2,0x797,0x580,0x259)+_0x2bbe86(0x8ca,0x5eb,0x3aa,0x819)+_0x2bbe86(0x7da,0x5aa,0x356,0x6a9)+_0x2bbe86(0x83b,0x67c,0x615,0x428)+'25.181\x20Saf'+_0x2feb43(0x8be,0xa7c,0xb7e,0xba8),_0x1e6d4f['hzOPx']=_0x2feb43(0x798,0x7e2,0x716,0x6f5)+_0x2bbe86(0x42,0x2df,0x2fa,0x43d)+_0x2bbe86(-0x166,0x17d,-0xe8,0x1a1)+_0x2feb43(0x78b,0x612,0x6f7,0x604)+_0x2bbe86(0x4a3,0x2d1,0x16f,0x462)+'7.0)\x20Gecko'+_0x2bbe86(0x4b3,0x307,0x46c,0x39c)+'Firefox/47'+'.0',_0x1e6d4f['XuMee']=function(_0x3a5111,_0x3c303d){return _0x3a5111*_0x3c303d;};const _0x54993e=_0x1e6d4f;function _0x2bbe86(_0x3c0d6f,_0x57ff0d,_0xe3cfa3,_0x24c8ed){return _0x3b4225(_0x3c0d6f,_0x57ff0d-0x7e,_0xe3cfa3-0xeb,_0x24c8ed-0x25);}const _0x2d2192=[_0x54993e[_0x2feb43(0x749,0x5f9,0x4e6,0x821)],_0x54993e[_0x2bbe86(0x159,0x11f,0x165,-0x99)],_0x54993e['BwhgZ'],_0x54993e[_0x2feb43(0x860,0xb5a,0x7e1,0x5de)],_0x54993e[_0x2bbe86(0x71a,0x611,0x561,0x537)],_0x2bbe86(0x211,0x4a5,0x305,0x669)+'0\x20(Macinto'+'sh;\x20Intel\x20'+_0x2bbe86(0x57f,0x498,0x5c0,0x5e9)+_0x2bbe86(0x7f,0x1ee,-0x58,0x13c)+_0x2feb43(0x483,0x3e6,0x287,0x42c)+_0x2feb43(0x3da,0x58b,0x69e,0x1ca)+'KHTML,\x20lik'+_0x2feb43(0x971,0x958,0x7ca,0x92a)+_0x2bbe86(0x1b6,0x323,0x224,0x5a7)+'.3\x20Safari/'+_0x2bbe86(0x292,0x578,0x521,0x36a),_0x54993e[_0x2feb43(0x558,0x4f1,0x669,0x475)],_0x2bbe86(0x652,0x4a5,0x6c4,0x3ac)+_0x2bbe86(0x4d,0xf9,0x2b6,-0x1f0)+_0x2feb43(0x7c7,0x52a,0x8c9,0x575)+_0x2bbe86(0x565,0x46a,0x281,0x712)+_0x2bbe86(0x384,0x119,0x10e,0x31f)+_0x2bbe86(0x297,0x1b9,0x2ba,0x234)+_0x2bbe86(0x772,0x695,0x512,0x429)+_0x2bbe86(0x3c8,0x35d,0x43f,0x556)+'\x20Chrome/90'+'.0.4430.93'+'\x20Safari/53'+'7.36',_0x54993e[_0x2feb43(0x7ec,0x62d,0x6ea,0x7b0)],_0x54993e[_0x2feb43(0x7ff,0x6c2,0x53b,0xa27)],_0x2bbe86(0x427,0x4a5,0x79b,0x752)+_0x2bbe86(0x689,0x4f5,0x266,0x28a)+_0x2bbe86(0x55a,0x612,0x67b,0x3e7)+'x\x20x86_64;\x20'+_0x2bbe86(0x711,0x5e4,0x8c2,0x8df)+_0x2feb43(0x781,0x95c,0x7a1,0x689)+_0x2bbe86(0x52,0xf0,0x17e,0x56)+_0x2feb43(0x4f3,0x672,0x7de,0x659),_0x54993e[_0x2feb43(0x788,0x951,0x9bc,0x66e)],_0x54993e['OPNPT'],_0x54993e[_0x2feb43(0x8b1,0x5f4,0x9d3,0x5dd)],'Mozilla/5.'+_0x2feb43(0x5d2,0x560,0x5dd,0x73c)+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+_0x2feb43(0x663,0x46b,0x959,0x8fd)+'leWebKit/5'+_0x2bbe86(0x2c1,0x1ef,0x222,0x19f)+'ML,\x20like\x20G'+_0x2feb43(0x89d,0x643,0x8b3,0x89a)+_0x2feb43(0x5ae,0x782,0x408,0x391)+_0x2bbe86(0x16a,0x454,0x283,0x362)+'ri/537.36',_0x54993e[_0x2feb43(0x915,0xa53,0x811,0xb26)],'Mozilla/5.'+_0x2bbe86(0x380,0x3a5,0x24a,0x477)+'nux\x20x86_64'+')\x20AppleWeb'+'Kit/537.36'+_0x2feb43(0x988,0xa1c,0x771,0x864)+_0x2bbe86(0x89,0x35d,0x57c,0xf8)+'\x20Chrome/69'+_0x2bbe86(0xb5,0x2cc,0x3ba,0x4b4)+_0x2feb43(0x774,0x957,0x991,0x5ee)+_0x2feb43(0x54f,0x25c,0x4a0,0x527),_0x54993e['TtVwW'],_0x54993e['zMswy'],_0x54993e[_0x2feb43(0x8c2,0x8e1,0xb82,0xb00)],_0x2feb43(0x798,0x6c1,0x952,0x75a)+_0x2bbe86(0x643,0x3a5,0x593,0x256)+'nux\x20x86_64'+';\x20rv:68.0)'+'\x20Gecko/201'+_0x2feb43(0x46f,0x674,0x591,0x731)+_0x2bbe86(0x4ed,0x465,0x2ee,0x1ea),_0x54993e['zfNSN'],_0x54993e[_0x2bbe86(0x5c3,0x325,0xc3,0x454)],_0x54993e[_0x2feb43(0x749,0x54d,0x66b,0x4c6)],_0x54993e['NziKm'],_0x2bbe86(0x757,0x4a5,0x229,0x1db)+_0x2feb43(0x5d2,0x3c4,0x5ca,0x713)+_0x2bbe86(0x368,0x17d,0x2f7,0x3c0)+_0x2bbe86(0x569,0x498,0x256,0x4ea)+'0_11_6)\x20Ap'+'pleWebKit/'+'601.7.7\x20(K'+'HTML,\x20like'+_0x2feb43(0x4bc,0x409,0x30d,0x7a6)+_0x2bbe86(0x2a7,0xf4,0x89,-0x75)+'2\x20Safari/6'+'01.7.7',_0x2bbe86(0x268,0x4a5,0x688,0x24f)+_0x2feb43(0x5d2,0x5da,0x6a7,0x86d)+_0x2bbe86(0xac,0x17d,0x476,0x1e9)+_0x2bbe86(0x2cf,0x498,0x27c,0x556)+_0x2bbe86(0x594,0x4bc,0x307,0x77f)+_0x2feb43(0x483,0x31a,0x224,0x3c3)+'37.36\x20(KHT'+_0x2bbe86(0x4d8,0x5eb,0x642,0x325)+_0x2feb43(0x89d,0x6e4,0x996,0x7c2)+_0x2feb43(0x82e,0x9d7,0x698,0x68b)+'85.125\x20Saf'+_0x2feb43(0x8be,0x97d,0x5f4,0x5cc)],_0x4ae8c1=_0x2d2192[~~_0x54993e[_0x2bbe86(-0xb2,0xf8,-0x1f0,0x3dc)](Math[_0x2bbe86(0xab,0x22f,0x3f1,0x40d)](),_0x2d2192['length'])];return _0x4ae8c1;},getID=_0x73b11d=>{let _0x54ad0c=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x16d230=_0x54ad0c['exec'](_0x73b11d);return _0x16d230&&_0x16d230[0x75a+0x1c0f+-0x2368];},getInfo=async function(_0x203a79){const _0x30e0ee={'pBfGk':function(_0xd27d6e,_0xeddc5b){return _0xd27d6e(_0xeddc5b);},'ATrab':function(_0x55665b,_0x549f1c){return _0x55665b!==_0x549f1c;},'xcefS':'wOtNM','cnwYU':function(_0x1856d2){return _0x1856d2();},'emWtu':function(_0x384508,_0x2faa31){return _0x384508===_0x2faa31;},'doByA':_0x114bda(0x5cf,0x684,0x8c3,0x84b),'cbViR':_0x114bda(0x61f,0x774,0x439,0x3d7)+_0x45c375(0x860,0x8f1,0x4a6,0x609),'KCWRb':_0x114bda(0x1e0,0xf6,-0x33,0x18a),'QNNvi':_0x45c375(0x746,0x5cf,0x524,0x44d),'fSlCj':'extended_e'+_0x45c375(0x310,0x372,0x62c,0x4c8),'Ypuky':_0x45c375(0x3b4,0x5de,0x4d9,0x547),'ahfke':_0x45c375(0x61c,0x369,0x287,0x327),'aoovQ':_0x114bda(0x35d,0x3e4,0x19e,0x20c),'rjlve':_0x114bda(0x224,0x99,0x36c,0x48c),'tfqXX':function(_0x434318,_0x5b1057){return _0x434318===_0x5b1057;},'Mnvak':_0x114bda(0x1cb,-0xef,0x3a0,-0x98),'vDQZu':_0x114bda(0x2c0,0x27f,0x28,0x362)+_0x45c375(0x66a,0x4d1,0x537,0x5b7)};function _0x114bda(_0x1a5ced,_0x536e5f,_0x4410d1,_0x57effd){return _0x4077ab(_0x57effd,_0x1a5ced- -0x416,_0x4410d1-0x1c8,_0x57effd-0x51);}function _0x45c375(_0x419d21,_0x583e85,_0x16cb33,_0x5c82de){return _0x4077ab(_0x583e85,_0x5c82de- -0x1ff,_0x16cb33-0x1e2,_0x5c82de-0x34);}const _0x3ada58=getID(_0x203a79);if(_0x3ada58){let _0x4d120c;try{if(_0x30e0ee['ATrab'](_0x30e0ee[_0x45c375(0x5d3,0x262,0x51d,0x3fe)],_0x30e0ee[_0x45c375(0x6ee,0x10e,0x3da,0x3fe)])){const _0x4b442e={};_0x4b442e['url']=_0x156acc[_0x45c375(0x5f2,0x53d,0x837,0x5c2)][0x2669+0x45*0x83+-0x49b8][_0x114bda(0x34e,0x14c,0x52a,0xe1)];const _0x5f8b9={};_0x5f8b9['document']=_0x4b442e,_0x5f8b9[_0x45c375(0x4a8,0x9ec,0x735,0x78b)]=_0x45c375(0x497,0x242,0x463,0x419),_0x5f8b9[_0x45c375(0x5e8,0x79b,0x6ae,0x7e3)]=_0x114bda(0x1c1,0x1d0,0x1b3,0x83)+_0x114bda(0x266,0x48a,0x357,0x541);const _0x4cc3dd={};_0x4cc3dd[_0x114bda(0x4d3,0x3f5,0x68f,0x28b)]=_0x3f61ad,_0x4ff74c['sendMessag'+'e'](_0xf17b31[_0x114bda(0x19a,0x81,0x1,0xee)],_0x5f8b9,_0x4cc3dd);}else{const _0x48fc2a=await _0x30e0ee[_0x114bda(0x4b2,0x3c8,0x65a,0x46d)](getToken);_0x4d120c=_0x48fc2a[_0x114bda(0x3d5,0x3a1,0x626,0x518)+'n'];}}catch(_0xdb2b50){if(_0x30e0ee[_0x45c375(0x36c,0x57f,0x72e,0x4d2)](_0x30e0ee[_0x114bda(0x2b0,0x22c,0x2b0,0x394)],_0x30e0ee['doByA']))throw new Error(_0xdb2b50);else _0x30e0ee[_0x45c375(0x79a,0x5cb,0x5c1,0x4ed)](_0xb82bf6,_0x1ba792[_0x45c375(0x91,0x3db,0x1c3,0x355)]());}const _0xb1cabb={};_0xb1cabb[_0x45c375(0x2a9,0x2f8,0x55a,0x2ce)+_0x114bda(0x101,-0x99,0xeb,0xc0)]=_0x4d120c,_0xb1cabb[_0x114bda(0x674,0x93a,0x965,0x5fa)+_0x45c375(0x5e6,0x7c8,0x8cd,0x78c)]=AUTH;const _0x51e097={};_0x51e097[_0x114bda(0x360,0x1dd,0x31e,0x1e8)]=_0xb1cabb;const _0x1f23bc=await axios[_0x45c375(0x1e0,0x4df,0x697,0x412)](Util['format'](API_TIMELINE,_0x3ada58),_0x51e097);if(!_0x1f23bc[_0x114bda(0x239,0x50e,0x1aa,0x11a)][_0x30e0ee[_0x45c375(0x2c3,0x397,-0xe,0x2cf)]][_0x30e0ee[_0x114bda(0x52b,0x384,0x35c,0x3cd)]][_0x3ada58][_0x45c375(0x9b1,0x4f4,0x863,0x7d2)+_0x114bda(0x2b1,0x373,0x4a,0x250)])throw new Error(_0x30e0ee[_0x114bda(0x57e,0x7e2,0x533,0x83e)]);const _0x41800b=_0x1f23bc[_0x114bda(0x239,0x402,0x3b2,-0xb4)][_0x30e0ee['cbViR']][_0x45c375(0x673,0x5d4,0x362,0x3f7)][_0x3ada58][_0x30e0ee[_0x114bda(0x39b,0xbe,0x495,0x578)]][_0x114bda(0x3e0,0x2f8,0x5c8,0x3a8)];if(_0x30e0ee[_0x45c375(0x212,0x3ae,0x45f,0x4d2)](_0x41800b[0x2f+0x20c*0xb+-0x16b3*0x1][_0x45c375(0x402,0xd1,0x1a3,0x344)],_0x30e0ee[_0x114bda(0x64c,0x679,0x8e0,0x7b4)]))return{'type':_0x41800b[-0x226c+-0x11*0x1d6+-0x10f*-0x3e][_0x114bda(0x12d,0x312,0x411,-0x13f)],'full_text':_0x1f23bc['data'][_0x30e0ee['cbViR']][_0x30e0ee[_0x114bda(0x52b,0x5c9,0x567,0x784)]][_0x3ada58][_0x30e0ee[_0x45c375(0x6bc,0x5a3,0x780,0x734)]],'variants':_0x41800b[-0x1d*0x27+-0x1*0x680+0xaeb][_0x30e0ee[_0x45c375(0x6b3,0xfb,0x4a5,0x3cf)]][_0x45c375(0x374,0x661,0x300,0x3e2)]};if(_0x41800b[-0x43*-0x39+0x5*-0x239+-0x3ce][_0x114bda(0x12d,-0x126,0x179,0x19c)]===_0x30e0ee[_0x45c375(0x3db,0x1ba,0x586,0x3d6)])return{'type':_0x41800b[-0x81d+-0x152a+0x5*0x5db][_0x45c375(0x3f6,0x274,0x2bb,0x344)],'full_text':_0x1f23bc[_0x114bda(0x239,0x386,0x1d6,0x1d7)][_0x30e0ee[_0x114bda(0xb8,0x18c,0x28a,0xb2)]][_0x30e0ee[_0x45c375(0x80d,0x4b1,0x846,0x742)]][_0x3ada58][_0x30e0ee[_0x114bda(0x51d,0x54c,0x5fe,0x56b)]],'variants':_0x41800b[_0x45c375(0x50e,0x7c7,0x8f3,0x788)](_0x374f96=>_0x374f96['media_url_'+'https'])};if(_0x30e0ee[_0x45c375(0xaeb,0x96e,0x86a,0x867)](_0x41800b[-0xa37+0x1*0x8ec+-0x1*-0x14b]['type'],_0x114bda(0x107,-0x169,-0x7e,-0x23)+'if'))return{'type':_0x41800b[-0x186b*-0x1+0x4db*-0x1+-0x4e4*0x4][_0x114bda(0x12d,0x68,0x3e6,-0xc9)],'full_text':_0x1f23bc['data'][_0x45c375(0xa90,0x9c3,0x9be,0x836)+_0x45c375(0x7b8,0x317,0x741,0x609)][_0x30e0ee[_0x114bda(0x52b,0x3e3,0x4af,0x30b)]][_0x3ada58][_0x30e0ee[_0x45c375(0x737,0x730,0x8e8,0x734)]],'variants':_0x41800b[0x2653+-0x1338+0x43*-0x49][_0x30e0ee[_0x114bda(0x1b8,0x21b,0x42,0x1a5)]][_0x30e0ee['Mnvak']]};}else throw new Error(_0x30e0ee['vDQZu']);};async function getToken(){function _0x442eac(_0x244a49,_0x95f552,_0x4c2227,_0x49c75e){return _0x3b4225(_0x4c2227,_0x49c75e-0x1ae,_0x4c2227-0x16e,_0x49c75e-0x17);}function _0x191d5d(_0x467f8e,_0x3cc81f,_0x3b1071,_0x194291){return _0x4077ab(_0x3b1071,_0x194291- -0x2fb,_0x3b1071-0x1e9,_0x194291-0xeb);}const _0x4db252={'YoeYz':_0x442eac(0x41f,0x4ac,0x1cb,0x4a7),'XhoJe':function(_0x203ad4,_0x3bde63){return _0x203ad4(_0x3bde63);},'tVknc':function(_0x45f4df,_0xa741cd){return _0x45f4df===_0xa741cd;},'WuLVn':_0x442eac(0x4f2,0x23b,0x4b4,0x279),'WYmqI':_0x191d5d(0x7a1,0x48d,0x4bf,0x5b7)};try{if(_0x4db252[_0x191d5d(0x5c3,0x2df,0x223,0x320)](_0x4db252[_0x191d5d(0x5fe,0x271,0x2d1,0x4ae)],_0x4db252[_0x191d5d(-0x49,-0x97,0x180,0x1c0)])){const _0x5ef4f1={'SZitu':function(_0x2d2e1e,_0x3a5541){return _0x2d2e1e(_0x3a5541);},'uWSCs':_0x4db252['YoeYz'],'aLTSZ':function(_0x35b406,_0x20737){function _0x429cb8(_0xa0991d,_0x300ee5,_0x4da9d6,_0x44ea62){return _0x191d5d(_0xa0991d-0x85,_0x300ee5-0x37,_0x4da9d6,_0x44ea62- -0x11f);}return _0x4db252[_0x429cb8(0x2ad,0x4e7,0x435,0x240)](_0x35b406,_0x20737);}};_0x2f621c(_0x4ae3f7)[_0x191d5d(0x152,0xc3,0x4e4,0x3b7)](_0x442eac(0x456,0x4a8,0x6fc,0x653)+_0x442eac(0xc6,0x439,0x4ee,0x382))[_0x442eac(0x28d,-0x6b,0x390,0x280)](function(_0x2fc71c,_0x1c565b){const _0x4c3594={'SlVhd':function(_0x4a1e96,_0x4693b2){return _0x5ef4f1['SZitu'](_0x4a1e96,_0x4693b2);}};_0x1e2259[_0x2ef508(0x602,0x6f2,0x629,0x55b)](_0x5ef4f1['SZitu'](_0xa6e69,_0x1c565b)['find'](_0x5ef4f1[_0x4fe844(0x444,0x36c,0x5d9,0x5fa)])[_0x2ef508(0x39e,0x16c,0x2c9,0x247)]());function _0x4fe844(_0x180d41,_0x44d3ce,_0x401eb6,_0xe3a1b5){return _0x191d5d(_0x180d41-0x97,_0x44d3ce-0x159,_0x180d41,_0xe3a1b5-0xd7);}function _0x2ef508(_0x3084be,_0x26d57e,_0x91b33f,_0x5d5e91){return _0x442eac(_0x3084be-0x2c,_0x26d57e-0x18e,_0x3084be,_0x5d5e91- -0x1ea);}_0x5ef4f1[_0x2ef508(-0xf6,0x32d,0x6a,0x1b1)](_0x2d5020,_0x1c565b)[_0x4fe844(0x2b0,0x3de,0x2f5,0x48e)]('a')['each'](function(_0x271ddf,_0xe56b81){function _0x1b0fee(_0x14c910,_0x4e8557,_0x5ccdd1,_0x5109ca){return _0x4fe844(_0x5109ca,_0x4e8557-0x19f,_0x5ccdd1-0x61,_0x5ccdd1- -0x1fe);}function _0x3ad214(_0xe3526e,_0x23dd83,_0x3aa096,_0x2c717b){return _0x4fe844(_0x2c717b,_0x23dd83-0x1e4,_0x3aa096-0x4e,_0x3aa096- -0x435);}_0x18cefd[_0x1b0fee(0x67c,0x81f,0x5e1,0x5dd)](_0x4c3594['SlVhd'](_0x47bb4f,_0xe56b81)[_0x3ad214(0x1a9,0x15,-0xe3,0x1eb)](_0x3ad214(-0x117,-0x26c,-0x3d,0x1a7)));});});}else{const _0x469166={};_0x469166[_0x191d5d(0x745,0x619,0x98e,0x78f)+'ion']=AUTH;const _0x4d386c={};_0x4d386c[_0x191d5d(0x251,0x3cb,0x64b,0x47b)]=_0x469166;const _0x2bbce7=await axios[_0x191d5d(0x459,0x877,0x960,0x6a6)](API_GUEST,null,_0x4d386c);if(_0x2bbce7['status']===0x36d+-0x1bf*-0x16+-0x1*0x290f&&_0x2bbce7[_0x191d5d(0x178,0x2c2,0x5f1,0x354)])return _0x2bbce7['data'];}}catch(_0x9e41bc){throw new Error(_0x9e41bc);}}const fbdl=async _0x241e3a=>{const _0x124b42={'eUWNY':function(_0x146217,_0x2b0018){return _0x146217(_0x2b0018);},'bxcmv':_0x123dc5(0x329,0x217,0x4e8,0x353)+_0x436915(0x6c0,0x5c3,0x3a4,0x566)+'t','qpmHq':function(_0x22e4a3,_0x1b1fb9){return _0x22e4a3(_0x1b1fb9);},'aHXjp':_0x436915(0x15c,-0x8c,0x6d,0x99),'sdGFU':function(_0x22642f,_0x32fa67){return _0x22642f(_0x32fa67);},'ykVan':'https://do'+_0x123dc5(0x6e6,0x314,0x45f,0x1e2)+_0x436915(0x6cd,0x466,0x705,0x5a5)+_0x436915(0x49e,0x58a,0x338,0x481),'anQxI':_0x123dc5(0x1dd,0x5a5,0x366,0x2f3),'HTqmA':function(_0x2ff1a3,_0x59d68d){return _0x2ff1a3(_0x59d68d);},'Skgor':_0x123dc5(-0x14c,0x258,0x74,0x233)+_0x436915(0x3be,0x16c,0x18a,0x2c6)+'\x22]','litNQ':function(_0x1ae118,_0x5e7a63,_0x21c86c){return _0x1ae118(_0x5e7a63,_0x21c86c);}};async function _0xa7c1f(){function _0x4925a2(_0x5c93dd,_0x567c54,_0x436d91,_0x125d49){return _0x436915(_0x5c93dd-0x128,_0x125d49,_0x436d91-0x7f,_0x567c54-0x443);}function _0x2416cd(_0x5863ac,_0x1b9932,_0x34f7aa,_0x4aaf17){return _0x436915(_0x5863ac-0xa3,_0x5863ac,_0x34f7aa-0x100,_0x4aaf17- -0x252);}let _0x5635b6=UserAgent();const _0x5bf1ec={};_0x5bf1ec[_0x4925a2(0x7a0,0x6b5,0x466,0x3ee)]=_0x4925a2(0x874,0x769,0x68a,0x59c)+_0x4925a2(0x759,0x87d,0x63e,0x82e)+_0x4925a2(0x7d8,0x8f5,0x7e9,0x98e)+_0x4925a2(0x772,0x6d3,0x619,0x7d7)+_0x4925a2(0x3a2,0x67c,0x5b1,0x604)+_0x2416cd(0x36b,-0xf8,0x1bd,0x7d)+'avif,image'+_0x4925a2(0x7ce,0x5ad,0x3ba,0x4e0)+'e/apng,*/*'+_0x4925a2(0x803,0x5fa,0x35f,0x7be)+_0x2416cd(0x29d,-0x2ea,0x190,-0x3b)+'igned-exch'+'ange;v=b3;'+_0x4925a2(0x840,0x614,0x424,0x493),_0x5bf1ec[_0x4925a2(0xd51,0xa81,0xd3f,0xaa6)+_0x2416cd(0x388,0x66,0xf7,0xe5)]=_0x2416cd(0x1f6,-0xd4,0x15c,0x17b)+_0x4925a2(0x3a7,0x5ce,0x71e,0x532)+'0.8,es;q=0'+_0x2416cd(0x234,0x249,-0x87,0x78)+'6',_0x5bf1ec['sec-fetch-'+'user']='?1',_0x5bf1ec[_0x2416cd(-0x26,0x228,-0x15e,0x125)]=_0x5635b6;const _0xebf2f3={};_0xebf2f3['headers']=_0x5bf1ec;const _0x263424=await axios[_0x4925a2(0x66b,0x5ed,0x770,0x4e9)](_0x124b42['bxcmv'],_0xebf2f3),_0x2752db=cheerio['load'](_0x263424[_0x4925a2(0x5bf,0x62b,0x45b,0x43f)]);let _0x1825a0;_0x2752db('div[class='+_0x2416cd(-0x3a7,-0x5e,0x15,-0xcf)+_0x4925a2(0x60a,0x6e6,0x8ee,0x760)+_0x4925a2(0x9d5,0x908,0xbb0,0xbe9))[_0x2416cd(-0x1d5,0x262,0x16a,-0x7)](_0x2416cd(0x1f3,0x7a,0x1dd,0x6c))['each']((_0x460b0b,_0x19d984)=>{function _0x4faef5(_0x429a47,_0x189d11,_0x4d1ebf,_0x66104b){return _0x2416cd(_0x189d11,_0x189d11-0x174,_0x4d1ebf-0x19e,_0x429a47-0x22b);}function _0x26ad99(_0x28e886,_0x35ec28,_0x342ba2,_0x423175){return _0x2416cd(_0x35ec28,_0x35ec28-0x19a,_0x342ba2-0x1ac,_0x342ba2-0x1f0);}let _0x6c8257=_0x124b42[_0x26ad99(0xbc,0xf3,0x174,-0x15d)](_0x2752db,_0x19d984)[_0x26ad99(0x39e,0x1e6,0xad,0x1a0)](_0x26ad99(0x75c,0x489,0x54a,0x52e));_0x6c8257&&(_0x1825a0=_0x6c8257);});const _0x429aa4={};return _0x429aa4['ua']=_0x5635b6,_0x429aa4[_0x2416cd(0x40f,0x89,0x16b,0x376)]=_0x1825a0,_0x429aa4;}async function _0x5af407(_0x403df3,_0x2f4c4a){const _0x43d64a={'fXTRS':function(_0x39bf35,_0x5031d2){function _0x250f75(_0x5da013,_0x6dc440,_0x56b57d,_0x5135fa){return _0x544f(_0x5135fa- -0x72,_0x5da013);}return _0x124b42[_0x250f75(0x30c,0x4b5,0x489,0x5a7)](_0x39bf35,_0x5031d2);},'kwYxY':_0x124b42[_0x392e6e(0x4ca,0x3b9,0x31d,0x402)]},_0x7c7df8={};_0x7c7df8[_0x2c347a(0x40e,0x2cf,0x35c,0x437)]='text/html,'+'applicatio'+_0x2c347a(0x64e,0x3d4,0x3d0,0x8d3)+_0x2c347a(0x42c,0x6c5,0x1b5,0x4dc)+_0x392e6e(0x5ca,0x6ef,0x47b,0x84a)+'0.9,image/'+_0x2c347a(0x2db,0x44e,0x4e0,0x14c)+_0x392e6e(0x4fb,0x2d5,0x2ef,0x794)+_0x2c347a(0x2ea,0x4ec,0x56b,0x54a)+';q=0.8,app'+'lication/s'+_0x392e6e(0x4cc,0x733,0x30c,0x37a)+_0x2c347a(0x76c,0x6b5,0x864,0xa18)+_0x392e6e(0x562,0x344,0x6ea,0x679),_0x7c7df8['accept-lan'+_0x392e6e(0x6c8,0x7b7,0x981,0x3e7)]=_0x2c347a(0x569,0x79e,0x4ef,0x460)+_0x392e6e(0x51c,0x477,0x621,0x5e7)+_0x2c347a(0x4d6,0x318,0x22d,0x41f)+_0x2c347a(0x466,0x552,0x548,0x4d2)+'6',_0x7c7df8[_0x2c347a(0x7d2,0xaa4,0x8cf,0x83e)+_0x392e6e(0x6b2,0x699,0x43a,0x40e)]='?1',_0x7c7df8['content-ty'+'pe']=_0x2c347a(0x5d6,0x744,0x789,0x3c9)+_0x392e6e(0x64c,0x362,0x409,0x8a3)+_0x392e6e(0x730,0x853,0x8fa,0x943)+_0x392e6e(0x6ce,0x9aa,0x69f,0x43e);function _0x392e6e(_0x423b35,_0x2ee59d,_0xf7e823,_0x4d7765){return _0x436915(_0x423b35-0xf0,_0x2ee59d,_0xf7e823-0x9d,_0x423b35-0x391);}_0x7c7df8['User-Agent']=_0x2f4c4a;const _0x9f037a=await _0x124b42[_0x392e6e(0x504,0x3ad,0x73c,0x663)](axios,{'url':_0x124b42[_0x392e6e(0x4d4,0x42e,0x218,0x444)],'method':_0x124b42[_0x392e6e(0x7c8,0x9da,0x9c7,0x581)],'data':new URLSearchParams(Object[_0x2c347a(0x599,0x7a3,0x2a6,0x755)](_0x403df3)),'headers':_0x7c7df8});function _0x2c347a(_0x5106bb,_0x5af28a,_0x2b4821,_0x2ccb71){return _0x123dc5(_0x2b4821,_0x5af28a-0x1c6,_0x5106bb-0x2a3,_0x2ccb71-0x79);}const _0x3a7ce7=cheerio[_0x392e6e(0x5db,0x43d,0x794,0x7de)](_0x9f037a[_0x2c347a(0x384,0x660,0x473,0x665)]);let _0x1342ba=[];return _0x124b42[_0x2c347a(0x3ba,0x29d,0x552,0x4e2)](_0x3a7ce7,_0x124b42[_0x392e6e(0x5df,0x594,0x633,0x3ad)])[_0x392e6e(0x5dc,0x5fe,0x722,0x750)]('a')[_0x2c347a(0x273,0x313,0x1c,0x4c)]((_0x4d818b,_0x3d0ac7)=>{let _0x1aca2c=_0x43d64a['fXTRS'](_0x3a7ce7,_0x3d0ac7)[_0x42bbda(0x5a9,0x3de,0x815,0x5e1)](_0x43d64a[_0x4ee17c(0x38d,0x120,0x2bb,0xee)]);function _0x42bbda(_0x44b99d,_0x346b33,_0x131153,_0x4e30fd){return _0x392e6e(_0x44b99d-0x109,_0x131153,_0x131153-0xf5,_0x4e30fd-0x78);}let _0x397c44=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;function _0x4ee17c(_0x105b1c,_0x3966c9,_0x59938c,_0x346e32){return _0x2c347a(_0x105b1c- -0x8,_0x3966c9-0x18,_0x346e32,_0x346e32-0x117);}_0x397c44[_0x4ee17c(0x471,0x6d5,0x61d,0x2d6)](_0x1aca2c)&&_0x1342ba[_0x4ee17c(0x730,0x710,0x9a3,0x8da)](_0x1aca2c);}),_0x1342ba;}const _0x225db3=await _0xa7c1f();function _0x123dc5(_0x502c14,_0x412a3e,_0x4f9cb6,_0x9429eb){return _0x3b4225(_0x502c14,_0x4f9cb6- -0x102,_0x4f9cb6-0x13e,_0x9429eb-0x18);}const _0x530ebd={};_0x530ebd['URL']=_0x241e3a,_0x530ebd[_0x123dc5(0x6b5,0x79a,0x4c1,0x49d)]=_0x225db3[_0x123dc5(0x307,0x21d,0x4c1,0x5f8)];let _0x31ba38=_0x530ebd;function _0x436915(_0x4995e7,_0x3f2d40,_0x4fa010,_0x31cf9d){return _0x4077ab(_0x3f2d40,_0x31cf9d- -0x467,_0x4fa010-0x1f2,_0x31cf9d-0x1d2);}const _0x470df1=await _0x124b42[_0x436915(0x6fb,0x6e2,0x25f,0x455)](_0x5af407,_0x31ba38,_0x225db3['ua']);return _0x470df1;};zee['Facebook'](''+q)['then'](async _0x557409=>{const _0x35363a={'VSpGn':function(_0x56361a,_0x49fcd8){return _0x56361a(_0x49fcd8);},'UNCcu':function(_0x3d6062,_0x17a410){return _0x3d6062+_0x17a410;}};let _0x18e22a=_0x732948(-0x1db,-0x1cf,0x4c,0x9a)+_0x51c4e0(0x6b4,0x2ce,0x4a7,0x4fd)+'LOADER\x20」--'+_0x51c4e0(0xb52,0x715,0x92a,0x67e);function _0x732948(_0x5bd6df,_0x300416,_0x12ccc5,_0x3f4da7){return _0x4077ab(_0x3f4da7,_0x300416- -0x6f9,_0x12ccc5-0x27,_0x3f4da7-0x1df);}_0x18e22a+='*📫\x20Title\x20:'+'*\x20'+_0x557409[_0x51c4e0(0x815,0x2f1,0x5e6,0x74d)]+'\x0a';function _0x51c4e0(_0x501fd4,_0x45ce20,_0x5e0fd5,_0x40ec04){return _0x4077ab(_0x501fd4,_0x5e0fd5- -0x36,_0x5e0fd5-0x130,_0x40ec04-0x1e8);}_0x18e22a+='*🎞️\x20Type\x20:*'+'\x20'+_0x557409[_0x51c4e0(0x890,0x732,0x78b,0x4bd)][0x3*-0x527+0x3b2+0xbc3*0x1]['extension']+'\x0a',_0x18e22a+='*📟\x20Quality'+_0x732948(-0xc8,-0x8a,-0x13c,-0x3)+_0x557409[_0x732948(-0x1ff,0xc8,0xdf,0x25e)][-0x1*-0x1925+0xa9e*0x2+-0x2e61][_0x51c4e0(0xa87,0xaa9,0x84a,0xb1d)]+'\x0a',_0x18e22a+=_0x732948(0x4c4,0x2c7,0x58b,0x153)+_0x51c4e0(0xa68,0x7a7,0x7e0,0x6bc)+_0x557409[_0x51c4e0(0x552,0xa4d,0x78b,0x648)][-0x18fe+-0x1523+-0xf1*-0x31][_0x51c4e0(0x7a9,0xab3,0x933,0x72e)+'ize']+'\x0a',_0x18e22a+=_0x51c4e0(0xbfe,0xaa2,0x9bc,0xb2a)+_0x51c4e0(0x64d,0x840,0x7e0,0x4ff)+_0x557409[_0x732948(0xd7,0xc8,0x9,-0x3c)][-0x57c+-0x1693*0x1+-0x1c10*-0x1][_0x51c4e0(0x807,0xb7b,0x933,0xa83)+_0x51c4e0(0x620,0x83f,0x657,0x6c7)]+'\x0a',_0x18e22a+=_0x51c4e0(0x5bb,0x4d8,0x742,0xa0d)+_0x51c4e0(0x4b8,0x49a,0x53d,0x4aa)+_0x557409[_0x732948(0x7a,0xc8,-0x9e,0x274)][-0x100b*-0x2+-0x1*-0x1d4b+-0x3d61][_0x732948(0x3cf,0x270,0x3a7,0x9d)+_0x732948(0x102,-0x6c,0x15a,-0x346)]+'\x0a',_0x18e22a+=_0x51c4e0(0x7e2,0x57a,0x4e9,0x41f)+_0x557409['url'];let _0x219b54=await _0x35363a[_0x732948(-0x185,-0xe0,-0x382,-0x265)](getBuffer,_0x557409[_0x732948(0x62b,0x36a,0x5e1,0x1a9)]);const _0x267c77={};_0x267c77['displayTex'+'t']=_0x51c4e0(0x88c,0x7ca,0xa0e,0xb6e),_0x267c77[_0x732948(0x1d6,0x6b,-0x37,-0xc4)]=''+myweb;const _0x5dba84={};_0x5dba84[_0x732948(-0x2d0,-0x1d0,-0x20,-0x399)]=_0x267c77;const _0x38b9b8={};_0x38b9b8[_0x51c4e0(0xa25,0x622,0x7dc,0x7d0)+'t']=_0x51c4e0(0x62e,0x694,0x82f,0x69c),_0x38b9b8[_0x732948(-0x193,0x6b,-0x28e,0x99)]=''+github;const _0x23d9d9={};_0x23d9d9[_0x732948(-0x5c,-0x1d0,-0xed,-0x17c)]=_0x38b9b8;const _0x49982c={};_0x49982c['displayTex'+'t']=_0x732948(0x11e,0x1a0,0xd1,0x376)+_0x557409[_0x732948(-0xf8,0xc8,0x16a,0x31a)][-0x2*-0xbc3+-0x2399+0x1*0xc13][_0x732948(0x36c,0x270,0x355,0x1a4)+'ize'],_0x49982c['id']=_0x732948(0x244,0x341,0xd0,0x267)+_0x557409['url'];const _0x30a1e8={};_0x30a1e8['quickReply'+_0x732948(0x408,0x394,0x486,0x5d4)]=_0x49982c;const _0x414311={};_0x414311[_0x732948(-0x114,0x119,0x231,0x75)+'t']='HD\x20'+_0x557409[_0x51c4e0(0x914,0x6ad,0x78b,0x56b)][-0x9ee+0x7b2+-0x23d*-0x1]['formattedS'+'ize'],_0x414311['id']=_0x732948(-0xa0,0x5b,0x1d8,-0x209)+_0x557409[_0x51c4e0(0x5b6,0x800,0x72e,0x588)];const _0x19bd1d={};_0x19bd1d['quickReply'+_0x51c4e0(0x8cf,0x7d7,0xa57,0x8a8)]=_0x414311;const _0x3e5570={};_0x3e5570[_0x51c4e0(0x7d4,0x73d,0x7dc,0x8b4)+'t']=_0x732948(0x1a0,0x78,0x63,-0x1e8)+_0x557409[_0x51c4e0(0x8ae,0x80d,0x78b,0x83c)][-0x1a3+-0x4f7*0x1+0x69a]['formattedS'+_0x51c4e0(0x72e,0x50b,0x657,0x389)],_0x3e5570['id']=_0x732948(0x277,0x177,0x1d6,0x46f)+_0x557409['url'];const _0x4456fb={};_0x4456fb['quickReply'+'Button']=_0x3e5570;var _0x2c02a5=[_0x5dba84,_0x23d9d9,_0x30a1e8,_0x19bd1d,_0x4456fb];await alpha['send5ButLo'+'c'](from,_0x35363a[_0x51c4e0(0xa68,0x9f8,0x820,0x7a6)](_0x51c4e0(0x815,0x6c2,0x635,0x91f)+pushname+'\x20👋,\x20saya\x20*'+botname+'*\x20'+'\x0a\x0a',lang[_0x51c4e0(0xab5,0x647,0x7c0,0x608)]()),'©\x20'+ownername,_0x219b54,_0x2c02a5);})[_0x4077ab(0x7af,0x7e5,0x658,0x9da)](_0x46dcb9=>{const _0x101470={'KSayD':'video/mp4','daDsG':function(_0xb89742,_0x5c93fc){return _0xb89742(_0x5c93fc);}};function _0x171ee0(_0x3e863b,_0x368d20,_0x395cdc,_0x36468b){return _0x3b4225(_0x36468b,_0x3e863b-0x20b,_0x395cdc-0xb7,_0x36468b-0x24);}_0x101470['daDsG'](fbdl,''+q)[_0x171ee0(0x4a1,0x22c,0x6fc,0x4d7)](_0x3be2ea=>{const _0x33efc6={};function _0x4f4055(_0x2911d5,_0x27eb1e,_0x225d7d,_0x4fd0db){return _0x171ee0(_0x27eb1e- -0xcf,_0x27eb1e-0x1e3,_0x225d7d-0x12a,_0x225d7d);}_0x33efc6['url']=_0x3be2ea[0x14f7+0x1af*-0x9+-0x5d0];const _0x1c6d6b={};function _0x283b79(_0x5db806,_0x22e5d4,_0x3aa783,_0x357ff5){return _0x171ee0(_0x22e5d4-0x28d,_0x22e5d4-0x6d,_0x3aa783-0x1a6,_0x3aa783);}_0x1c6d6b[_0x4f4055(0x529,0x76b,0x7a7,0x91e)]=_0x33efc6,_0x1c6d6b['mimetype']=_0x101470[_0x4f4055(0x761,0x52e,0x344,0x455)],_0x1c6d6b[_0x4f4055(0x5ba,0x6b2,0x5a1,0x5f5)]=_0x4f4055(0x55c,0x680,0x4fa,0x420)+'ideo.mp4',alpha['sendMessag'+'e'](m[_0x283b79(0x54a,0x5dc,0x62a,0x6eb)],_0x1c6d6b,{'quoted':m});});});}break;case _0x4077ab(0x6fe,0x547,0x2c5,0x40d):case _0x4077ab(0x8c0,0x79b,0x6e3,0x7b0):if(!q)return reply(lang[_0x4077ab(0xa81,0x8b7,0x84b,0x631)+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text[_0x3b4225(0x241,0x143,-0x48,0x41c)](_0x3b4225(-0x5d,0x11d,0x371,-0x70)+'om')&&!text[_0x4077ab(0x7f7,0x5af,0x3f4,0x6bc)]('fb.watch'))return reply(lang[_0x4077ab(0x678,0x8b7,0x956,0x88f)+'t'](prefix));await reply(lang['wait']()),zee[_0x4077ab(0x6d7,0x861,0x603,0x7c5)](''+q)[_0x4077ab(0x433,0x702,0x997,0x7dd)](async _0x54b964=>{const _0x3d80e2={};_0x3d80e2['AzWUn']=_0xf997e(0x288,0x497,0x5c,0x10);const _0x24ad2d=_0x3d80e2;function _0x28996e(_0x404101,_0x327e81,_0x37b81b,_0x360f58){return _0x3b4225(_0x327e81,_0x360f58- -0x28c,_0x37b81b-0x8e,_0x360f58-0x3b);}const _0x73d4bb={};function _0xf997e(_0x53954b,_0x123a6f,_0x235cb5,_0x3d78a0){return _0x4077ab(_0x123a6f,_0x53954b- -0x390,_0x235cb5-0x115,_0x3d78a0-0x1e9);}_0x73d4bb[_0xf997e(0x3d4,0x5fb,0x5ae,0x3b5)]=_0x54b964[_0xf997e(0x431,0x2f1,0x406,0x248)][-0x231d*0x1+-0x1599+0x38b6]['url'];const _0x235137={};_0x235137[_0xf997e(0x70b,0x92a,0x905,0x484)]=_0x73d4bb,_0x235137['mimetype']=_0x24ad2d[_0x28996e(-0x2a8,-0x277,-0x178,-0x18c)],_0x235137[_0xf997e(0x652,0x6d0,0x51e,0x5a3)]='Facebook\x20V'+_0xf997e(0x2ec,0x272,0xb4,0x471),alpha['sendMessag'+'e'](m[_0x28996e(-0x1dd,-0x7c,0x130,-0x148)],_0x235137,{'quoted':m});})[_0x4077ab(0x909,0x7e5,0xab4,0xa50)](_0x2ee7a7=>{function _0x43513b(_0x1d4384,_0x38d857,_0x11d823,_0x57bf5a){return _0x4077ab(_0x11d823,_0x57bf5a- -0x74b,_0x11d823-0x1ac,_0x57bf5a-0x158);}function _0x22d924(_0x156c3e,_0x2ee8a0,_0x26f801,_0x489636){return _0x4077ab(_0x489636,_0x2ee8a0- -0x44f,_0x26f801-0x110,_0x489636-0x16a);}const _0x165565={'drvvH':function(_0x3aa384,_0x1ad4d4){return _0x3aa384(_0x1ad4d4);}};_0x165565[_0x22d924(0x4a7,0x4a2,0x1f2,0x5a4)](reply,lang[_0x22d924(0x397,0x105,0x12b,-0x65)]());});break;case _0x3b4225(0xff,0x27c,0x41f,0x51e)+_0x3b4225(-0xe7,0x156,0x255,0x397):case'fbaudio':{if(!q)return reply(lang['wrongForma'+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text['includes'](_0x3b4225(-0x14e,0x11d,0x146,-0x162)+'om')&&!text[_0x3b4225(0x3d5,0x143,-0x30,0x330)](_0x3b4225(0x474,0x601,0x73b,0x8ba)))return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x4077ab(0x790,0x871,0x5a1,0x6b6)]());const API_GUEST=_0x4077ab(0x716,0x837,0x894,0x786)+_0x3b4225(0x306,0x572,0x508,0x802)+_0x4077ab(0x296,0x566,0x71e,0x6a0)+_0x3b4225(0x4a6,0x4ca,0x58a,0x688)+_0x4077ab(0x76f,0x704,0x6cc,0x631),API_TIMELINE=_0x3b4225(0x296,0x3cb,0x4ec,0x481)+_0x3b4225(0x7f7,0x572,0x51e,0x4b2)+_0x4077ab(0x771,0x4f1,0x356,0x799)+'line/conve'+'rsation/%s'+_0x3b4225(-0x76,0x1b6,0x16b,0x274)+_0x3b4225(-0xa5,0xca,-0x76,-0x190)+_0x3b4225(0x1a4,0xf6,-0x199,0x326),AUTH=_0x4077ab(0x6f7,0x846,0x571,0x673)+_0x3b4225(0x253,0x52f,0x61e,0x6d4)+_0x4077ab(0x54c,0x574,0x7ef,0x7ab)+'ILgAAAAAAn'+_0x4077ab(0x561,0x7e8,0x966,0x89f)+_0x4077ab(0x575,0x50e,0x360,0x2dd)+_0x3b4225(0x4bc,0x45e,0x5db,0x17b)+_0x4077ab(0x2ee,0x5b2,0x769,0x3db)+_0x3b4225(0x3e7,0x1fa,0x90,0x59)+_0x3b4225(0x3d1,0x36a,0xf0,0x264)+_0x3b4225(0x333,0x408,0x4f5,0x2e5)+'A',UserAgent=()=>{const _0xac17c3={};_0xac17c3[_0xa7a096(0x718,0x60a,0x780,0x7bd)]='Mozilla/5.'+_0x36e9a1(0x188,-0x1da,0x0,0x4a)+'sh;\x20Intel\x20'+_0xa7a096(0x79f,0xa05,0x7c0,0x5ba)+_0x36e9a1(-0x163,0x1d3,-0xeb,0x9d)+_0xa7a096(0x49c,0x5dc,0x6f7,0x726)+_0x36e9a1(0x385,0x253,-0xe0,0x10f)+_0xa7a096(0x741,0x59b,0x50a,0x8b9)+'e\x20Gecko)\x20V'+'ersion/11.'+_0xa7a096(0x65a,0x49b,0x4da,0x779)+_0xa7a096(0x7ef,0x64b,0x83f,0x565),_0xac17c3[_0x36e9a1(0x73,0x13e,0x486,0x31d)]=_0x36e9a1(-0x3,0x1cb,0x4cd,0x210)+'0\x20(Macinto'+_0x36e9a1(0x18f,-0x2d2,-0x1cc,-0x118)+_0x36e9a1(-0x33,0x3c2,0x481,0x203)+_0xa7a096(0x75c,0x55a,0x7e6,0x83d)+_0x36e9a1(-0x231,0x12d,-0x28d,-0x100)+_0x36e9a1(-0x1a,-0x11a,0x146,-0x8b)+_0x36e9a1(0x43c,0x0,0x362,0x1fc)+_0x36e9a1(0x1f6,-0x332,0x1c1,-0xcc)+_0x36e9a1(0x299,0x3bb,-0x17,0x291)+_0xa7a096(0x96b,0x82c,0x6af,0xc36)+_0xa7a096(0x7b9,0x68b,0x7c2,0xa90);function _0x36e9a1(_0x22616e,_0x7dadf8,_0x33c87b,_0x28079f){return _0x3b4225(_0x22616e,_0x28079f- -0x217,_0x33c87b-0x1ef,_0x28079f-0x145);}_0xac17c3['MIEvX']=_0x36e9a1(0x273,0x326,0x214,0x210)+_0xa7a096(0x400,0x6c8,0x3e2,0x533)+_0x36e9a1(0x4da,-0x81,0x3ec,0x23f)+_0xa7a096(0x771,0x809,0x81e,0x5d5)+_0xa7a096(0x420,0x3dd,0x2fc,0x4e6)+_0xa7a096(0x4c0,0x3c4,0x4f0,0x784)+_0x36e9a1(0x32c,0x22e,0x131,0x400)+_0x36e9a1(0x1d0,-0x49,-0x141,0xc8)+_0x36e9a1(0x3cd,0x2ee,0x2a4,0x2c7)+_0x36e9a1(0x227,0x224,0x3a3,0x22c)+'0\x20Safari/5'+_0x36e9a1(0x188,-0xfe,0x17c,-0x63),_0xac17c3[_0x36e9a1(0x300,0x2c0,0x65,0x181)]='Mozilla/5.'+_0xa7a096(0x5e6,0x418,0x6a5,0x40b)+_0x36e9a1(0xe9,0x64,-0x3db,-0x118)+_0x36e9a1(0x33d,0x3db,0x9f,0x203)+_0x36e9a1(-0x234,0x77,-0x2c5,-0xa7)+_0xa7a096(0x497,0x6d0,0x6b5,0x42a)+'37.75.14\x20('+'KHTML,\x20lik'+_0x36e9a1(0x501,0x6d4,0x262,0x3e9)+_0xa7a096(0x62a,0x4f3,0x4f6,0x7d7)+_0xa7a096(0x9a1,0xbec,0x937,0xc36)+_0x36e9a1(0x54,0x2b6,0x456,0x2e3);function _0xa7a096(_0x505bd0,_0x4fc1c7,_0x4a2a9e,_0x32cc40){return _0x3b4225(_0x4a2a9e,_0x505bd0-0x385,_0x4a2a9e-0x55,_0x32cc40-0x1a6);}_0xac17c3[_0x36e9a1(0x3e,0x2c0,0x2d7,0xab)]=_0xa7a096(0x7ac,0x797,0x7a5,0x5e7)+_0xa7a096(0x5e6,0x6ac,0x594,0x86e)+_0x36e9a1(0xe8,-0x7c,0x11c,-0x118)+_0xa7a096(0x79f,0x78e,0x57e,0xa06)+_0x36e9a1(-0x4b,-0x1dc,0xcc,0xa1)+_0x36e9a1(-0x44e,0x11d,-0x33,-0x197)+'/20100101\x20'+_0x36e9a1(0xcf,0x25f,0x52b,0x2bf)+'.0',_0xac17c3[_0xa7a096(0x8b2,0xa40,0x5d5,0x76e)]=_0x36e9a1(-0xe6,0x1bb,0x4e1,0x210)+_0xa7a096(0x400,0x3cc,0x1d2,0x4c1)+'\x20NT\x2010.0;\x20'+_0xa7a096(0x771,0x857,0x6b9,0x80a)+_0xa7a096(0x420,0x359,0x219,0x5e6)+'Kit/537.36'+_0x36e9a1(0x345,0x6d3,0x292,0x400)+_0x36e9a1(0x289,0x61,-0x1ec,0xc8)+'\x20Chrome/52'+_0xa7a096(0x86e,0x951,0xa3c,0x6af)+_0x36e9a1(0x237,0x38d,0x480,0x213)+'37.36\x20Edge'+_0xa7a096(0x900,0xbc6,0xb67,0xb95),_0xac17c3[_0xa7a096(0x9ad,0xa92,0xc19,0xab4)]=_0xa7a096(0x7ac,0x5d8,0x4dc,0x697)+_0xa7a096(0x6ac,0x955,0x95f,0x3bf)+_0xa7a096(0x4ad,0x666,0x2b5,0x5a8)+';\x20rv:45.0)'+_0xa7a096(0x5b2,0x665,0x4b2,0x531)+_0xa7a096(0x483,0x71b,0x324,0x76f)+_0xa7a096(0x4fe,0x69e,0x686,0x627),_0xac17c3[_0xa7a096(0x82f,0x9fd,0x53b,0x632)]='Mozilla/5.'+'0\x20(X11;\x20Li'+_0xa7a096(0x4ad,0x291,0x1fa,0x2d3)+_0x36e9a1(-0x3c8,-0x16d,-0x468,-0x17c)+_0x36e9a1(-0x2d1,-0xcc,-0x57,-0xdc)+_0x36e9a1(0x66d,0x56b,0x5a1,0x400)+_0x36e9a1(-0x1a,0x8f,-0x215,0xc8)+'\x20Chrome/77'+'.0.3865.12'+_0xa7a096(0x5cf,0x58a,0x62c,0x72b)+_0xa7a096(0x539,0x492,0x7b5,0x4e1),_0xac17c3[_0xa7a096(0x3ca,0x24a,0x485,0x516)]='Mozilla/5.'+'0\x20(Windows'+_0x36e9a1(0x38e,0x3bd,0x34f,0x23f)+_0xa7a096(0x771,0x7a2,0x6b9,0x5a4)+_0x36e9a1(-0x202,-0x133,-0x4a,-0x17c)+_0x36e9a1(0x19b,0x1b8,-0x349,-0xdc)+_0x36e9a1(0x293,0x473,0x64f,0x400)+_0x36e9a1(0x2e2,-0x1d1,-0x103,0xc8)+'\x20Chrome/85'+_0xa7a096(0x91f,0x842,0x983,0xaf2)+'1\x20Safari/5'+'37.36',_0xac17c3[_0x36e9a1(0x1a1,0x2cd,0x537,0x2d6)]=_0x36e9a1(0x351,0x3a5,-0x1e,0x210)+_0x36e9a1(-0x23,0x12f,0x3ee,0x260)+_0xa7a096(0x919,0x786,0x813,0x8d3)+_0xa7a096(0x4b3,0x6d8,0x553,0x4a2)+_0x36e9a1(0x411,0x4b1,0x518,0x255)+_0xa7a096(0x795,0x4ef,0x4ba,0x763)+_0x36e9a1(-0x279,0x105,-0x38,-0x1a5)+_0x36e9a1(-0x2f0,0xa7,0xcf,-0x96),_0xac17c3['catcF']=_0xa7a096(0x7ac,0x4c4,0x5c1,0x5de)+_0x36e9a1(0x333,-0x226,0x1e6,0x4a)+_0xa7a096(0x484,0x421,0x34e,0x515)+'Mac\x20OS\x20X\x201'+_0xa7a096(0x75c,0x905,0x6d0,0x4e8)+'pleWebKit/'+_0xa7a096(0x73a,0x86e,0x48b,0x7f4)+_0x36e9a1(0x1ea,0x1cf,0xb2,0x1fc)+_0xa7a096(0x4d0,0x5e7,0x6a2,0x5f4)+_0xa7a096(0x93b,0xb4a,0xc0a,0x8c8)+_0x36e9a1(0xe8,0x34,0x3cf,0xf2)+_0xa7a096(0x93f,0x91f,0xa89,0x701),_0xac17c3[_0x36e9a1(0x1e3,0x56e,0x454,0x384)]=_0xa7a096(0x7ac,0x9ca,0x71c,0x678)+_0x36e9a1(-0x54,-0xca,0x307,0x110)+_0x36e9a1(-0xb3,-0x16a,-0xba,-0xef)+')\x20AppleWeb'+_0xa7a096(0x4c0,0x1e8,0x5d4,0x246)+_0xa7a096(0x99c,0xafa,0xa99,0x6c2)+_0x36e9a1(0x383,0x227,-0x48,0xc8)+_0x36e9a1(0x2dd,0x54f,0xd1,0x2c7)+_0x36e9a1(-0x231,-0x9d,0x238,0x37)+_0x36e9a1(0x44d,0xf7,0x3e,0x1ec)+_0xa7a096(0x563,0x45a,0x3e0,0x851),_0xac17c3[_0x36e9a1(0x3d5,0x2a4,0x586,0x3ef)]=_0x36e9a1(0x4f2,0x329,0x9,0x210)+'0\x20(X11;\x20Ub'+'untu;\x20Linu'+_0x36e9a1(-0x2fa,0xf3,-0x2e2,-0xe9)+_0x36e9a1(-0x3dd,-0x13e,0x8,-0x1d3)+_0x36e9a1(0x303,0x111,-0x12,0x1f9)+_0xa7a096(0x3f7,0x423,0x175,0x5e5)+_0xa7a096(0x970,0x9f9,0x9b9,0x873),_0xac17c3[_0x36e9a1(0x3f2,0x12d,0x2e6,0x254)]=_0xa7a096(0x7ac,0x8b6,0x81c,0x645)+_0x36e9a1(-0x69,0x1c6,0x8d,0x110)+_0xa7a096(0x4ad,0x6c9,0x3df,0x591)+';\x20rv:68.0)'+_0xa7a096(0x5b2,0x3e6,0x3a6,0x6d3)+_0xa7a096(0x483,0x35d,0x1cf,0x3d9)+_0xa7a096(0x76c,0x4a8,0x9ed,0x64c),_0xac17c3[_0xa7a096(0x453,0x487,0x3ea,0x5f2)]=_0xa7a096(0x7ac,0x781,0x92a,0x6d7)+_0x36e9a1(0x1ce,-0x217,-0x31,0x4a)+_0x36e9a1(-0x11,-0x1e2,-0x202,-0x118)+_0x36e9a1(0x2f4,0x112,0x16e,0x203)+'0_9_5)\x20App'+_0x36e9a1(-0x18a,-0x1e5,-0x40,-0x105)+_0xa7a096(0x4f6,0x77e,0x73c,0x5b6)+'ML,\x20like\x20G'+'ecko)\x20Chro'+_0x36e9a1(0x111,0x47b,0x64a,0x3e7)+_0xa7a096(0x80f,0x7a7,0x5f3,0x5e2)+_0xa7a096(0x8d2,0x86c,0x805,0x862),_0xac17c3[_0x36e9a1(-0x87,-0x193,0x74,-0x3e)]=_0xa7a096(0x7ac,0x4c3,0x7a5,0x7a6)+_0xa7a096(0x5e6,0x5cf,0x8a1,0x7bd)+_0xa7a096(0x484,0x214,0x252,0x268)+'Mac\x20OS\x20X\x201'+_0x36e9a1(-0x2c,0x199,0x1e1,0x3c)+_0x36e9a1(0xde,-0x5a,-0x37c,-0x1ab)+'/20100101\x20'+'Firefox/47'+'.0',_0xac17c3[_0x36e9a1(0x249,0x40e,-0xb5,0x23e)]='Mozilla/5.'+_0xa7a096(0x5e6,0x5a4,0x36a,0x39d)+_0x36e9a1(-0x2f7,0x4a,-0x374,-0x118)+_0x36e9a1(0x1ae,0x400,0x108,0x203)+_0xa7a096(0x639,0x353,0x7de,0x882)+_0xa7a096(0x49c,0x67b,0x53d,0x54a)+_0xa7a096(0x961,0xaa1,0x6da,0xa22)+_0x36e9a1(0x483,0x2b1,0x31,0x1fc)+_0xa7a096(0x4d0,0x23c,0x79b,0x2c5)+_0x36e9a1(-0x80,-0x47e,0xef,-0x1a1)+_0xa7a096(0x60c,0x68d,0x535,0x8ba)+_0x36e9a1(-0x1c9,-0x177,0x255,0x98);const _0x5ac3ba=_0xac17c3,_0x533505=[_0x5ac3ba[_0x36e9a1(0x217,0x34c,-0x136,0x17c)],_0x5ac3ba[_0xa7a096(0x8b9,0x62a,0x9d3,0xb50)],_0x5ac3ba['MIEvX'],_0xa7a096(0x7ac,0x5b3,0x818,0x703)+_0xa7a096(0x8e8,0x6f9,0x863,0x74c)+_0x36e9a1(0x209,-0x6e,-0xaa,0x1e3)+_0x36e9a1(-0x268,0x19a,0x15,-0xef)+')\x20AppleWeb'+_0x36e9a1(0xca,-0x397,-0x1bf,-0xdc)+_0x36e9a1(0x6f0,0x1b2,0x497,0x400)+'ike\x20Gecko)'+_0x36e9a1(0x10f,0x1e1,0x598,0x3f4)+_0x36e9a1(0x3c0,0x1f3,0x21c,0x309)+_0xa7a096(0x8aa,0x5fe,0x77d,0xa20)+'37.36',_0x36e9a1(0x4f2,0x4d3,0x188,0x210)+_0x36e9a1(-0x136,-0x297,-0x279,-0x19c)+_0x36e9a1(0x290,0x469,0x319,0x23f)+_0xa7a096(0x771,0x731,0x89e,0x6b5)+_0xa7a096(0x420,0x607,0x6ee,0x538)+_0x36e9a1(-0x19,-0x9,-0x2fc,-0xdc)+'\x20(KHTML,\x20l'+_0x36e9a1(0x339,-0x231,0x277,0xc8)+_0xa7a096(0x6e5,0x9b8,0x3fc,0x4f7)+_0xa7a096(0x70a,0x722,0x853,0x691)+_0x36e9a1(0x3c6,0x15a,0x49e,0x1ec)+_0xa7a096(0x563,0x6bd,0x734,0x3bd),_0x5ac3ba[_0xa7a096(0x71d,0x5b5,0x81d,0x6f7)],_0x5ac3ba['UtyFQ'],_0xa7a096(0x7ac,0x699,0x8b1,0x76c)+_0x36e9a1(-0x1e4,-0x119,-0x37,-0x19c)+_0x36e9a1(0xd3,0x437,0x1fe,0x23f)+_0xa7a096(0x771,0x5ca,0x89e,0x848)+_0x36e9a1(-0x236,-0x13d,0x116,-0x17c)+_0xa7a096(0x4c0,0x40b,0x1c7,0x525)+_0xa7a096(0x99c,0x7a5,0x828,0xb8a)+'ike\x20Gecko)'+'\x20Chrome/90'+_0x36e9a1(0x334,0x121,0x5c0,0x38f)+'\x20Safari/53'+_0xa7a096(0x563,0x36d,0x83c,0x69a),_0x5ac3ba['XolYq'],_0x5ac3ba[_0x36e9a1(0x443,0x6f6,0x693,0x411)],'Mozilla/5.'+'0\x20(X11;\x20Ub'+_0xa7a096(0x919,0xbb4,0xa0d,0x792)+_0xa7a096(0x4b3,0x361,0x599,0x38a)+_0xa7a096(0x8eb,0xbb2,0x8dc,0x973)+_0xa7a096(0x795,0x710,0x8b7,0x88a)+_0x36e9a1(-0x483,-0x3aa,-0x2da,-0x1a5)+'x/47.0',_0x5ac3ba[_0x36e9a1(0x423,0x3b,0x32f,0x293)],_0x5ac3ba['yLDLj'],_0x5ac3ba[_0x36e9a1(0x59c,-0x8,0x4c4,0x2d6)],_0xa7a096(0x7ac,0x663,0x5a4,0x9de)+_0xa7a096(0x5e6,0x7ce,0x323,0x845)+_0xa7a096(0x484,0x704,0x624,0x6d1)+'Mac\x20OS\x20X\x201'+_0xa7a096(0x677,0x921,0x402,0x719)+_0x36e9a1(-0x263,-0x22c,0x14d,-0x105)+_0xa7a096(0x4f6,0x5b4,0x556,0x55d)+'ML,\x20like\x20G'+_0x36e9a1(0x402,0x590,0x13b,0x315)+'me/67.0.33'+_0x36e9a1(0x239,0x273,0x3e8,0x1bf)+_0xa7a096(0x8ce,0x667,0x9e6,0x9fe),_0x5ac3ba[_0x36e9a1(0x10b,0x105,0x279,0x112)],_0x5ac3ba['oyJyn'],_0x36e9a1(-0xe3,0x2a0,0x215,0x210)+'0\x20(Windows'+_0xa7a096(0x7db,0x5e4,0x65e,0xaa7)+_0xa7a096(0x771,0x611,0xa45,0x7cf)+_0x36e9a1(-0x3ff,-0x24c,0x70,-0x17c)+_0x36e9a1(0x209,-0x128,-0x3b9,-0xdc)+_0xa7a096(0x99c,0x77d,0xc27,0x814)+'ike\x20Gecko)'+_0x36e9a1(-0x4,0x203,-0x2d,0x1c8)+_0x36e9a1(0x1f2,0x48d,0x68,0x2c6)+_0xa7a096(0x517,0x59b,0x460,0x2d9)+_0x36e9a1(-0x1f0,-0x29d,0x1c9,-0x63),_0xa7a096(0x7ac,0x813,0x836,0x805)+_0xa7a096(0x400,0x4a4,0x5ed,0x4d0)+_0xa7a096(0x7db,0x955,0x9d8,0x7e3)+_0x36e9a1(0x1f6,0x1b8,0x41b,0x1d5)+_0xa7a096(0x420,0x333,0x248,0x56a)+_0x36e9a1(-0x289,-0x333,-0xe2,-0xdc)+_0xa7a096(0x99c,0x6da,0x6da,0xc5b)+_0x36e9a1(0x39d,-0x16b,-0x138,0xc8)+_0xa7a096(0x5a3,0x3db,0x467,0x4f0)+_0x36e9a1(0x2df,-0x171,-0x25b,0x78)+_0x36e9a1(0x94,0x488,0x306,0x2f1)+'37.36',_0x5ac3ba[_0x36e9a1(0x508,0x2ac,0x65b,0x3ef)],_0x5ac3ba[_0x36e9a1(0x4a9,0x33e,0x525,0x254)],_0x5ac3ba[_0x36e9a1(-0x88,-0x9e,-0x7c,-0x149)],_0x5ac3ba['LNqUL'],_0x5ac3ba[_0xa7a096(0x718,0x6d7,0x55e,0x65f)],_0x5ac3ba['uzrls'],_0x5ac3ba[_0xa7a096(0x7da,0x659,0x6fd,0x52a)],'Mozilla/5.'+_0xa7a096(0x5e6,0x7eb,0x844,0x467)+_0x36e9a1(-0x242,-0xf3,-0x2ea,-0x118)+_0x36e9a1(0x168,0x346,0x3cf,0x203)+'0_9_4)\x20App'+'leWebKit/5'+_0x36e9a1(0x47,0x13,-0x25a,-0xa6)+_0xa7a096(0x8f2,0x8c4,0x7db,0x744)+_0xa7a096(0x8b1,0x86c,0xac9,0x805)+'me/36.0.19'+_0xa7a096(0x784,0x782,0x5cc,0x4ed)+_0xa7a096(0x8d2,0x85b,0x6fe,0x608)],_0x16140b=_0x533505[~~(Math['random']()*_0x533505[_0xa7a096(0x5f6,0x3ef,0x3ac,0x8b5)])];return _0x16140b;},getID=_0x20d93b=>{let _0x4cf922=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x1100c6=_0x4cf922[_0x174aea(0x18,0x40,0x313,0x112)](_0x20d93b);function _0x174aea(_0x26d204,_0x2d1bf5,_0x520f0b,_0x5193a6){return _0x4077ab(_0x26d204,_0x520f0b- -0x584,_0x520f0b-0x156,_0x5193a6-0x1b4);}return _0x1100c6&&_0x1100c6[-0xbcf+0x7f9+0x3d7];},getInfo=async function(_0x556cf4){const _0x3f6704={'WKutO':function(_0x5b4504,_0x279bf8){return _0x5b4504(_0x279bf8);},'gweMK':_0x16021e(0x926,0x643,0x926,0x7d4)+_0x16021e(0x392,0x791,0x393,0x5a7),'joDTC':_0x16021e(0x550,0x611,0x260,0x395),'YqlqH':_0x16021e(0x74e,0x853,0x4d5,0x770)+_0x16021e(0x3be,0x32a,0x6a2,0x466),'ctURC':_0x16021e(0x54e,0x862,0x4fc,0x595),'rKiQu':_0x208bb1(-0xa2,-0x92,0x3ac,0x1b8),'HVRxJ':_0x16021e(0x2c9,0x60,0x499,0x2c5),'vOrev':_0x16021e(0x589,0x635,0x7c4,0x512),'UMFAE':_0x16021e(0x58a,0x311,0x379,0x380),'xdQsR':function(_0x31ad1f,_0x36c25d){return _0x31ad1f===_0x36c25d;},'krssr':function(_0x3cb0ab,_0x3a09d5){return _0x3cb0ab===_0x3a09d5;},'fQXwA':_0x16021e(0x29a,0xea,0x1b6,0x2bc)+'if','jqicb':_0x208bb1(0x2b1,0x419,-0x128,0x148)+_0x16021e(0x7ad,0x51b,0x7e7,0x555)},_0x5f248d=_0x3f6704[_0x208bb1(0x385,0x4a0,0x3ea,0x46c)](getID,_0x556cf4);function _0x16021e(_0x11e0da,_0x6d063f,_0x125d04,_0x3f70b2){return _0x3b4225(_0x6d063f,_0x3f70b2-0x20b,_0x125d04-0x152,_0x3f70b2-0x1bb);}function _0x208bb1(_0x2f8410,_0x4c7d0f,_0xc33d4c,_0x14961b){return _0x3b4225(_0xc33d4c,_0x14961b- -0x122,_0xc33d4c-0x123,_0x14961b-0x5);}if(_0x5f248d){let _0x1b20c8;try{const _0xab769e=await getToken();_0x1b20c8=_0xab769e[_0x208bb1(0x2f0,0x416,0x3f0,0x25d)+'n'];}catch(_0x1b3d72){throw new Error(_0x1b3d72);}const _0x5e035d={};_0x5e035d[_0x208bb1(0x1e5,-0x33e,-0x306,-0xc1)+_0x208bb1(0x102,-0x10a,-0xf0,-0x77)]=_0x1b20c8,_0x5e035d[_0x16021e(0x9cb,0x5d4,0xaeb,0x829)+_0x208bb1(0x642,0x1a7,0x3a7,0x3fd)]=AUTH;const _0x583972={};_0x583972[_0x208bb1(0x1cf,0x9a,0x2a,0x1e8)]=_0x5e035d;const _0x1f1163=await axios[_0x208bb1(0x2cf,0x1e7,-0x1a1,0x83)](Util[_0x16021e(0x71a,0x858,0x58d,0x788)](API_TIMELINE,_0x5f248d),_0x583972);if(!_0x1f1163[_0x16021e(0x5a4,0x5bc,0x6b5,0x3ee)][_0x3f6704[_0x16021e(0x58c,0x2b0,0x447,0x4ad)]][_0x3f6704['joDTC']][_0x5f248d][_0x16021e(0x6e4,0x894,0x7f7,0x770)+_0x16021e(0x717,0x727,0x49f,0x466)])throw new Error(_0x16021e(0x589,0x519,0x4a1,0x3eb));const _0xb2497e=_0x1f1163[_0x208bb1(-0x1bc,0x1d9,0x169,0xc1)][_0x3f6704[_0x208bb1(0x2e4,0x1c9,-0x135,0x180)]][_0x3f6704['joDTC']][_0x5f248d][_0x3f6704[_0x16021e(0x307,0x18e,0x7c,0x33d)]][_0x3f6704[_0x16021e(0x1b4,0x674,0x5f4,0x3e2)]];if(_0xb2497e[0x35*-0x92+-0x1231+0x306b]['type']===_0x3f6704[_0x208bb1(0xb2,0x117,0x25e,0x302)])return{'type':_0xb2497e[0x8f*0x33+0xbca+-0x2847]['type'],'full_text':_0x1f1163[_0x16021e(0x6d3,0x6b5,0x5c3,0x3ee)][_0x3f6704['gweMK']][_0x208bb1(-0x18d,0x17d,-0x190,0x68)][_0x5f248d][_0x3f6704[_0x208bb1(0x4c5,-0x70,0xf2,0x28b)]],'variants':_0xb2497e[-0x51f+-0x1346+-0x4e1*-0x5][_0x3f6704[_0x16021e(0x381,0x65a,0x40a,0x3b4)]][_0x3f6704[_0x16021e(0x4a4,0x5a8,0x4ba,0x746)]]};if(_0x3f6704[_0x16021e(0x661,0x7bc,0x69a,0x563)](_0xb2497e[0x1*0x419+0x16f2*-0x1+0x12d9]['type'],_0x208bb1(-0x239,0x15,0x148,0xac)))return{'type':_0xb2497e[-0xb5*0x2d+0x10b1*-0x1+0x3082][_0x208bb1(0x9,0x14d,-0x90,-0x4b)],'full_text':_0x1f1163['data'][_0x3f6704['gweMK']][_0x3f6704[_0x16021e(0x794,0x7f1,0x65e,0x774)]][_0x5f248d][_0x3f6704['HVRxJ']],'variants':_0xb2497e[_0x208bb1(0x1ad,0x654,0x19c,0x3f9)](_0x2bb549=>_0x2bb549[_0x16021e(0x4c8,0x444,0x4e7,0x57a)+_0x208bb1(0x4b,0xf3,0x2bb,0x2b2)])};if(_0x3f6704[_0x16021e(0x9e2,0x8ab,0x87c,0x7cb)](_0xb2497e[-0x3*-0x7aa+0x1*0x2302+-0x3a00]['type'],_0x3f6704[_0x16021e(0x64a,0x41d,0x86b,0x612)]))return{'type':_0xb2497e[0x967+0x396*0x1+-0xcfd*0x1][_0x16021e(0x40e,0x528,0xa4,0x2e2)],'full_text':_0x1f1163[_0x16021e(0x3ba,0x327,0x58c,0x3ee)][_0x3f6704[_0x16021e(0x479,0x1e9,0x3d7,0x4ad)]][_0x208bb1(0x14d,0x306,0x32e,0x68)][_0x5f248d][_0x208bb1(0x218,-0x21,-0x1b9,-0x68)],'variants':_0xb2497e[-0x299+-0x18ae+0x1b47][_0x3f6704[_0x208bb1(-0x10d,0xd1,-0x115,0x87)]][_0x3f6704[_0x16021e(0x537,0x874,0x9d6,0x746)]]};}else throw new Error(_0x3f6704[_0x208bb1(0x202,-0x3c,0x321,0xbf)]);};async function getToken(){function _0x1dd45c(_0x497282,_0x362f99,_0x45447e,_0x998fdf){return _0x3b4225(_0x45447e,_0x362f99-0x375,_0x45447e-0x24,_0x998fdf-0x128);}function _0x5bf51f(_0x235a54,_0xfd37c8,_0x565987,_0xa76a53){return _0x3b4225(_0x235a54,_0xa76a53-0x94,_0x565987-0x6c,_0xa76a53-0x171);}try{const _0x5c1cb9={};_0x5c1cb9[_0x1dd45c(0xa94,0x993,0x753,0x89c)+_0x5bf51f(0x624,0x44d,0x73a,0x5b3)]=AUTH;const _0x442599={};_0x442599[_0x5bf51f(0x2ab,0x3a7,0xa9,0x39e)]=_0x5c1cb9;const _0x4f278d=await axios[_0x1dd45c(0x8ae,0x8aa,0xb51,0xaf8)](API_GUEST,null,_0x442599);if(_0x4f278d['status']===-0x183*-0x9+0xe5f+-0x2*0xd99&&_0x4f278d['data'])return _0x4f278d[_0x5bf51f(0x1cf,0x321,0x479,0x277)];}catch(_0x25502b){throw new Error(_0x25502b);}}const fbdl=async _0x20c004=>{const _0xde8c6c={'cWvQc':function(_0x5a9055,_0xaae734){return _0x5a9055!==_0xaae734;},'JSfGQ':_0x2910f2(0x4b1,0x3ab,0x33f,0x51b),'ENfhA':function(_0x1944a2,_0x180a61){return _0x1944a2(_0x180a61);},'lVOBw':'value','ucmNx':function(_0x26f56e){return _0x26f56e();},'tAMqR':_0x2910f2(0x4ca,0x764,0x4e0,0x42a)+_0x2910f2(0x441,0x39a,0x4cb,0x585)+'t','aAvTl':function(_0x3549ac,_0x1d54ac){return _0x3549ac(_0x1d54ac);},'PXvcL':_0x2910f2(0x56,0x1cc,-0x79,-0x69)+_0x339818(0x380,0x88,0x9b,-0x56)+_0x2910f2(0x17e,-0x4d,0x14b,0x2f0)+_0x339818(0x492,0x58d,0x3dd,0x361),'IVydh':_0x339818(0x488,0x21,0x1d6,-0x117),'ZpZXA':function(_0xf43bb0,_0x54819a){return _0xf43bb0 instanceof _0x54819a;},'znPtc':function(_0x2ccddc,_0x416ba2){return _0x2ccddc(_0x416ba2);},'cQCQs':function(_0x3a4ccd,_0x2e0394){return _0x3a4ccd+_0x2e0394;},'FSHlW':'qoNsl','JmMKD':_0x2910f2(-0x8c,-0xee,0x115,0x210),'MiOcg':function(_0x4729e5,_0x230886){return _0x4729e5===_0x230886;},'jCbcW':_0x339818(0x440,0x3ab,0x2d3,0x523),'sCrfQ':_0x2910f2(0x4ca,0x527,0x2d2,0x70f)+_0x339818(0x1cc,0x464,0x47e,0x6f5)+'t/download'+'.php','OqQuf':_0x339818(0x566,0x563,0x385,0x2f8),'aslCy':function(_0x340d01,_0xfcdb48){return _0x340d01(_0xfcdb48);},'QBTMf':function(_0x43bb40,_0x5471d4,_0x575d05){return _0x43bb40(_0x5471d4,_0x575d05);}};async function _0x4c2116(){let _0x31add1=_0xde8c6c[_0x5097a2(0xc5,0x186,0xe4,0x2d4)](UserAgent);const _0x2d8a22={};function _0x5097a2(_0x3f38c3,_0x491a08,_0x551063,_0x5d47ef){return _0x339818(_0x3f38c3-0x164,_0x491a08-0x164,_0x551063- -0x4,_0x3f38c3);}_0x2d8a22[_0x5097a2(0xa8,0x188,0x186,-0x5e)]=_0x5097a2(0x2dd,0x119,0x23a,0x266)+_0x1b4f4c(0x7ea,0xa58,0x800,0x8b4)+_0x1b4f4c(0x862,0x85a,0x8ba,0x738)+'l,applicat'+_0x1b4f4c(0x5e9,0x3c6,0x85d,0x696)+_0x5097a2(0x201,0x260,0x1e3,0x32e)+_0x1b4f4c(0x4ef,0x338,0x546,0x33b)+'/webp,imag'+'e/apng,*/*'+_0x5097a2(0x1c,-0x9c,0xcb,-0xff)+_0x5097a2(0x3b7,0x9e,0x12b,-0x12f)+'igned-exch'+_0x5097a2(0x5dd,0x33b,0x4e4,0x504)+_0x1b4f4c(0x581,0x3ec,0x55f,0x4c1),_0x2d8a22[_0x5097a2(0x82e,0x589,0x552,0x7f6)+'guage']=_0x5097a2(0x2e2,0x3f1,0x2e1,0x2f7)+_0x1b4f4c(0x53b,0x323,0x38a,0x31e)+_0x5097a2(-0x59,0x159,0x24e,-0x54)+'.7,ms;q=0.'+'6',_0x2d8a22[_0x1b4f4c(0x9e6,0x6fc,0x83a,0x78f)+_0x5097a2(0x2d,0x182,0x235,0x3cc)]='?1',_0x2d8a22[_0x1b4f4c(0x727,0x6da,0x854,0x8cd)]=_0x31add1;const _0x2c7521={};function _0x1b4f4c(_0x2d4ef8,_0x1e034d,_0x335a7a,_0x1a03fa){return _0x339818(_0x2d4ef8-0x19e,_0x1e034d-0x1b8,_0x2d4ef8-0x498,_0x335a7a);}_0x2c7521[_0x5097a2(0x46d,0x1b5,0x223,-0xd2)]=_0x2d8a22;const _0xda4b34=await axios['get'](_0xde8c6c[_0x1b4f4c(0x7f5,0x5f4,0xa53,0xa27)],_0x2c7521),_0x58e1da=cheerio[_0x5097a2(0x24f,0x25b,0x15e,0x3ba)](_0xda4b34[_0x1b4f4c(0x598,0x3ef,0x6fd,0x48f)]);let _0x57f250;_0xde8c6c[_0x5097a2(0x5d7,0x105,0x3ec,0x362)](_0x58e1da,_0xde8c6c[_0x5097a2(0x728,0x449,0x4a0,0x594)])[_0x5097a2(-0x18c,-0x4d,0x15f,0x33a)](_0xde8c6c[_0x1b4f4c(0x590,0x807,0x6c2,0x4f7)])[_0x1b4f4c(0x487,0x5a9,0x534,0x1e2)]((_0x2ca0f9,_0x29f93a)=>{function _0x364d86(_0x49f3bd,_0x4a8017,_0x1a2f73,_0x19692a){return _0x5097a2(_0x1a2f73,_0x4a8017-0x0,_0x49f3bd-0x21c,_0x19692a-0x69);}function _0x19d716(_0x4fcec5,_0xd2f95,_0x1f46ea,_0x1fa4b7){return _0x5097a2(_0x1fa4b7,_0xd2f95-0x131,_0x4fcec5-0x220,_0x1fa4b7-0x1a8);}if(_0xde8c6c[_0x19d716(0x399,0x3bf,0x16f,0x2a3)](_0xde8c6c['JSfGQ'],'QpUHC')){let _0x2a7b76=_0xde8c6c['ENfhA'](_0x58e1da,_0x29f93a)[_0x364d86(0x23f,0x419,0x139,0x105)](_0xde8c6c[_0x364d86(0x402,0x4d5,0x142,0x51c)]);_0x2a7b76&&(_0x57f250=_0x2a7b76);}else return _0x226ec6[_0x19d716(0x31c,0x2d,0x5ac,0xa4)];});const _0x4d953c={};return _0x4d953c['ua']=_0x31add1,_0x4d953c[_0x1b4f4c(0x978,0x8a5,0x711,0x6bf)]=_0x57f250,_0x4d953c;}async function _0x338017(_0x5684ea,_0x215e7b){function _0x21f6ac(_0x43f411,_0x109105,_0x15fc4e,_0x53afe4){return _0x2910f2(_0x15fc4e-0x2b5,_0x109105-0xdf,_0x109105,_0x53afe4-0x5b);}const _0x3d0681={'sKxes':function(_0x412cac,_0x2fdde2){return _0xde8c6c['znPtc'](_0x412cac,_0x2fdde2);},'sJhUW':function(_0x2b85c8,_0x41c951){function _0x225858(_0x366c18,_0x1c3aec,_0x94d714,_0x5d70ab){return _0x544f(_0x94d714- -0x2f1,_0x366c18);}return _0xde8c6c[_0x225858(0x233,0x4bc,0x2d0,0x126)](_0x2b85c8,_0x41c951);},'gVTwp':function(_0x5b33ab,_0x974125){return _0x5b33ab!==_0x974125;},'OGpHt':_0xde8c6c[_0x358dcb(0xa5,-0x18b,0xfb,-0x3bb)],'obiAU':'unrvn','Otvvi':_0xde8c6c[_0x21f6ac(0x84b,0x9b6,0x6bf,0x696)]};function _0x358dcb(_0x35a64b,_0x3df262,_0x3f31e9,_0x91c441){return _0x2910f2(_0x3df262- -0x1bc,_0x3df262-0x160,_0x91c441,_0x91c441-0xc4);}if(_0xde8c6c['MiOcg'](_0xde8c6c['jCbcW'],_0xde8c6c['jCbcW'])){const _0x2122ea={};_0x2122ea[_0x358dcb(-0x2d2,-0x6f,-0x6,-0x39)]=_0x21f6ac(0x6df,0x5c4,0x4b6,0x3fc)+'applicatio'+_0x21f6ac(0x904,0x826,0x642,0x921)+_0x21f6ac(0x5a1,0x61c,0x420,0x2f3)+'ion/xml;q='+_0x21f6ac(0x3a4,0x261,0x45f,0x2b1)+'avif,image'+_0x21f6ac(0x511,0x172,0x2fa,0x470)+_0x358dcb(-0x187,-0x193,-0x302,0xae)+_0x358dcb(0x110,-0x12a,-0xe5,-0x141)+_0x358dcb(-0x2c4,-0xca,0xac,-0x46)+'igned-exch'+_0x21f6ac(0x6d5,0xa3a,0x760,0x9b7)+_0x21f6ac(0xee,0x576,0x361,0x2ac),_0x2122ea['accept-lan'+_0x358dcb(-0x3f,0x56,0x44,0x76)]=_0x358dcb(-0x1b3,0xec,0x26f,0x108)+'=0.9,en;q='+_0x358dcb(0x29f,0x59,-0x10c,0x2e1)+'.7,ms;q=0.'+'6',_0x2122ea[_0x358dcb(0x195,0x355,0x4a4,0x40a)+'user']='?1',_0x2122ea[_0x358dcb(-0x133,-0x155,-0x19b,-0x17f)+'pe']=_0x358dcb(0xdb,0x159,0x3f6,0x156)+_0x21f6ac(0x4d1,0x15d,0x44b,0x56e)+_0x358dcb(0x377,0xbe,0x2f7,-0x1a6)+_0x358dcb(-0x293,0x5c,0x2a4,0x10c),_0x2122ea[_0x21f6ac(0x2aa,0x697,0x507,0x374)]=_0x215e7b;const _0x588f6b=await _0xde8c6c[_0x358dcb(0x410,0x312,0x153,0x403)](axios,{'url':_0xde8c6c[_0x358dcb(0x4c9,0x1d9,-0x95,0x209)],'method':_0xde8c6c[_0x21f6ac(0x41b,0x607,0x629,0x664)],'data':new URLSearchParams(Object[_0x21f6ac(0x37e,0x380,0x58d,0x32a)](_0x5684ea)),'headers':_0x2122ea}),_0x436523=cheerio[_0x358dcb(-0x287,-0x97,0x131,-0x153)](_0x588f6b[_0x358dcb(-0xe8,-0xf9,0x16e,0xdc)]);let _0x4fda6c=[];return _0xde8c6c[_0x358dcb(0x176,0x234,0x4f4,0x1ed)](_0x436523,_0x21f6ac(0x1e5,0x3d2,0x30b,0x54b)+_0x21f6ac(0x15d,0x2ac,0x456,0x1af)+'\x22]')['find']('a')[_0x21f6ac(0x4f5,0x4d6,0x267,0x27d)]((_0x48c744,_0x2903d2)=>{function _0x4179d4(_0x3f016b,_0x13340f,_0x400951,_0x15cd46){return _0x358dcb(_0x3f016b-0x1a7,_0x13340f-0x547,_0x400951-0x92,_0x15cd46);}function _0x424b99(_0x3d5379,_0x4bf874,_0x48b89b,_0x47f268){return _0x21f6ac(_0x3d5379-0xc9,_0x3d5379,_0x4bf874-0x274,_0x47f268-0x1dd);}if(_0x3d0681['gVTwp'](_0x3d0681[_0x424b99(0x748,0x75f,0x6c1,0x4d4)],_0x3d0681[_0x424b99(0x2c0,0x556,0x666,0x34b)])){let _0x3fd628=_0x3d0681[_0x424b99(0x95c,0x850,0x7f6,0x64b)](_0x436523,_0x2903d2)[_0x4179d4(0x3bd,0x375,0x36d,0x3ac)](_0x3d0681['Otvvi']),_0x38dccc=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x38dccc[_0x4179d4(0x253,0x543,0x348,0x2a4)](_0x3fd628)&&_0x4fda6c['push'](_0x3fd628);}else _0x3d0681['sKxes'](_0x3c98a9,_0x424b99(0x8c0,0x6e5,0x95d,0x8e4)+_0x4179d4(0x6a4,0x4ca,0x1f0,0x6d6)+_0x424b99(0x37a,0x66b,0x567,0x6da)+'n\x20Caption\x20'+_0x3d0681['sJhUW'](_0x1b786e,_0x47aa81));}),_0x4fda6c;}else{let _0x32182e=_0xde8c6c[_0x358dcb(0x1ac,0xb2,0x0,0x100)](_0x248556,_0x4e50cb)?_0x3078df:new _0x57f87a(_0xde8c6c[_0x21f6ac(0x4b0,0x4ee,0x668,0x3ea)](_0x2812fa,_0x1593a1));return[_0x32182e[_0x21f6ac(0x5af,0x3a1,0x5c0,0x3df)](_0x459a33['text']),_0x32182e];}}function _0x2910f2(_0x36b280,_0x28dfa6,_0x449a68,_0x1c777c){return _0x3b4225(_0x449a68,_0x36b280- -0x120,_0x449a68-0x1a2,_0x1c777c-0x1e6);}const _0x1fe259=await _0x4c2116(),_0x12aa24={};_0x12aa24[_0x2910f2(0x30c,0x4d9,0x19f,0x54d)]=_0x20c004,_0x12aa24['token']=_0x1fe259[_0x339818(0x6dd,0x442,0x4e0,0x6e1)];function _0x339818(_0x2a42d7,_0x19763e,_0x5558a3,_0x2237af){return _0x3b4225(_0x2237af,_0x5558a3- -0xe3,_0x5558a3-0x1cf,_0x2237af-0x185);}let _0x5cbb8f=_0x12aa24;const _0x4fec07=await _0xde8c6c['QBTMf'](_0x338017,_0x5cbb8f,_0x1fe259['ua']);return _0x4fec07;};zee[_0x3b4225(0x30e,0x3f5,0x28c,0x3d3)](''+q)['then'](async _0x442282=>{const _0xa71b00={};_0xa71b00[_0x3c62c3(0x822,0x744,0x7a1,0x91f)]=_0x13dcd5(0x12b,0x8f,0x17,-0x7f);const _0x476c3a=_0xa71b00,_0x6b03d5={};_0x6b03d5[_0x13dcd5(0x143,0x1d0,0x38e,0x2b8)]=_0x442282[_0x3c62c3(0x5df,0x8d5,0x858,0x7dd)][-0x1072+-0xe43+-0x1eb5*-0x1][_0x3c62c3(0x655,0x580,0x720,0x780)];const _0x4bace4={};_0x4bace4[_0x13dcd5(0x47a,0x5da,0x2bc,0x6ad)]=_0x6b03d5,_0x4bace4['mimetype']=_0x476c3a['QslrR'],_0x4bace4[_0x3c62c3(0xca0,0x9e3,0x707,0x9fe)]=_0x13dcd5(-0xbc,-0x273,-0x96,-0x127)+_0x13dcd5(0xee,0x249,0x34f,0x269);function _0x13dcd5(_0x3cbefd,_0xc957fb,_0x376475,_0x3dbb46){return _0x4077ab(_0xc957fb,_0x3cbefd- -0x621,_0x376475-0xdd,_0x3dbb46-0x15a);}function _0x3c62c3(_0x48bcdd,_0xc0afab,_0x1f4f3d,_0x334fd7){return _0x3b4225(_0xc0afab,_0x334fd7-0x488,_0x1f4f3d-0x15d,_0x334fd7-0x100);}alpha[_0x13dcd5(0x411,0x1db,0x4aa,0x193)+'e'](m[_0x13dcd5(-0x71,-0xa3,0x1cb,-0x345)],_0x4bace4,{'quoted':m});})[_0x4077ab(0x581,0x7e5,0x505,0x794)](_0x5f10ea=>{function _0xde8db7(_0x25af2c,_0x43f517,_0x41c3ba,_0x1962f2){return _0x4077ab(_0x43f517,_0x41c3ba- -0x612,_0x41c3ba-0x7,_0x1962f2-0x9a);}const _0x47cf36={'PicdX':function(_0x4cb4d7,_0x3eba87){return _0x4cb4d7(_0x3eba87);},'ClhPk':_0xde8db7(0x3e8,0x528,0x39f,0x546),'PdIfg':'audio/mpeg','LmmcQ':function(_0x21a97d,_0x491ca6){return _0x21a97d(_0x491ca6);}};function _0x580203(_0x20f63a,_0x36eb01,_0x34a937,_0x509926){return _0x3b4225(_0x20f63a,_0x509926- -0x42,_0x34a937-0x6d,_0x509926-0x18);}_0x47cf36['LmmcQ'](fbdl,''+q)[_0xde8db7(-0x209,-0xf0,0xf0,0x298)](_0x520dd2=>{function _0x247223(_0x226a8e,_0x4fd0d0,_0x193a6a,_0x320bfc){return _0x580203(_0x193a6a,_0x4fd0d0-0x19e,_0x193a6a-0xf,_0x226a8e-0xe1);}const _0x50c9bd={'QtIVD':function(_0x377b1e,_0x1d0622){return _0x47cf36['PicdX'](_0x377b1e,_0x1d0622);}};function _0x5369fd(_0x454dde,_0x184576,_0x55ff60,_0x29afc0){return _0x580203(_0x29afc0,_0x184576-0x18,_0x55ff60-0x143,_0x184576- -0x2b0);}if(_0x47cf36[_0x5369fd(-0x39e,-0x155,-0x33a,-0x3a4)]!==_0x47cf36[_0x5369fd(-0x3af,-0x155,-0x418,-0x2ca)])_0x50c9bd[_0x5369fd(-0x1b5,0x5d,0x23f,-0xf9)](_0xd1068e,_0x101b58);else{const _0x3d6041={};_0x3d6041['url']=_0x520dd2[-0x1b69+-0x2249+0x1ed9*0x2];const _0x4d8487={};_0x4d8487[_0x247223(0x6ce,0x969,0x834,0x65a)]=_0x3d6041,_0x4d8487[_0x5369fd(0x413,0x22c,-0xcd,0xd6)]=_0x47cf36[_0x5369fd(0x26e,0xac,0xf9,-0xcd)],_0x4d8487[_0x247223(0x615,0x82a,0x61d,0x8e9)]='Facebook\x20M'+_0x247223(0x342,0x1da,0x2a9,0x4a0),alpha[_0x247223(0x665,0x89d,0x3ad,0x62b)+'e'](m[_0x247223(0x1e3,0x3da,-0xe,0x1e3)],_0x4d8487,{'quoted':m});}});});}break;case'facebookhd':case _0x3b4225(0x4c7,0x27d,0x535,0x7d):if(!q)return reply(lang[_0x3b4225(0x3c9,0x44b,0x431,0x3ba)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x3b4225(0x353,0x44b,0x389,0x709)+'t'](prefix));if(!text[_0x4077ab(0x605,0x5af,0x756,0x57f)](_0x4077ab(0x668,0x589,0x70a,0x7d3)+'om')&&!text[_0x4077ab(0x31e,0x5af,0x318,0x82e)](_0x3b4225(0x30a,0x601,0x5f1,0x48a)))return reply(lang[_0x3b4225(0x4ed,0x44b,0x1e0,0x1e0)+'t'](prefix));await reply(lang[_0x4077ab(0x7d1,0x871,0x9c1,0x6e3)]()),zee['Facebook'](''+q)[_0x4077ab(0x552,0x702,0x59d,0x9bf)](async _0x549bfa=>{const _0x2cd3bb={};_0x2cd3bb[_0x3166a7(0x409,0x2bf,0x1fa,0x36f)]=_0x3166a7(0x3d7,0x36f,0x5d9,0x1da);const _0x208d29=_0x2cd3bb,_0x3b3a3c={};_0x3b3a3c[_0x47bb1a(0x341,0x55a,0x379,0x2f5)]=_0x549bfa[_0x3166a7(0x4ba,0x518,0x530,0x61b)][0x2*0x991+0x1460+-0x3*0xd2b][_0x47bb1a(0x341,0x20b,0x606,0x603)];function _0x47bb1a(_0x53fc17,_0x25a230,_0x40b0df,_0xe4ea1a){return _0x4077ab(_0xe4ea1a,_0x53fc17- -0x423,_0x40b0df-0x117,_0xe4ea1a-0x17a);}const _0x32f6e9={};_0x32f6e9[_0x47bb1a(0x678,0x7c9,0x382,0x38c)]=_0x3b3a3c,_0x32f6e9[_0x3166a7(0x4b7,0x6e1,0x8b8,0x411)]=_0x208d29[_0x3166a7(0x435,0x2bf,0x42,0x52)];function _0x3166a7(_0x473808,_0x405c9a,_0x468b6c,_0x55be9e){return _0x3b4225(_0x55be9e,_0x405c9a-0x1c3,_0x468b6c-0x2d,_0x55be9e-0x17d);}_0x32f6e9[_0x47bb1a(0x5bf,0x7a9,0x2ec,0x357)]=_0x47bb1a(0x1b4,-0xe3,0x4ac,0x336)+_0x3166a7(0x4ce,0x3d3,0x4ee,0x264),alpha[_0x3166a7(0x639,0x789,0x80f,0x7e3)+'e'](m[_0x47bb1a(0x18d,0x203,0x13a,-0x14b)],_0x32f6e9,{'quoted':m});})[_0x3b4225(0x23a,0x379,0x51a,0x112)](_0x14ad80=>{function _0x30309(_0x50c82f,_0x1321e4,_0x1c9a74,_0x15a009){return _0x3b4225(_0x15a009,_0x1321e4- -0x2b5,_0x1c9a74-0x19a,_0x15a009-0x16);}reply(lang[_0x30309(0x44,-0x1cd,-0xe,-0x206)]());});break;case'tiktok':if(!q)return reply(lang['wrongForma'+'t'](prefix));if(!isUrl(args[0x1*0x205b+0xfbc*0x1+-0x3017])&&!args[-0x4e4+0x599+-0x1*0xb5]['includes']('tiktok.com'))return reply(lang[_0x3b4225(0x4ed,0x452,0x610,0x5f6)]());function tiktokDownloader(_0x4509ec){function _0xd05a74(_0x5acd37,_0x2e4987,_0x13721b,_0x33e1bd){return _0x3b4225(_0x13721b,_0x2e4987-0x71,_0x13721b-0x1de,_0x33e1bd-0x11f);}const _0x58f354={'DSsyC':function(_0xb010e6,_0x3684cb){return _0xb010e6+_0x3684cb;},'dzqDm':_0x39d7e7(0xbac,0x93a,0x7b5,0x6ef),'LOXWP':function(_0x51b388,_0xdea7a2){return _0x51b388(_0xdea7a2);},'zNkji':'sid_tt=7d0'+_0x39d7e7(0x6ef,0x43e,0x1cd,0x3bf)+_0xd05a74(0x61e,0x51a,0x5a1,0x68a)+_0x39d7e7(0x3f9,0x442,0x6a4,0x728)+_0x39d7e7(0x709,0x8d8,0xa24,0x8fc)+'a936b6d8d4'+_0xd05a74(0x54c,0x69e,0x609,0x430)+_0xd05a74(0x5c8,0x366,0x326,0x4ea)+_0x39d7e7(0x62a,0x44a,0x261,0x56a)+_0xd05a74(0x4cb,0x217,0x17f,-0x53)+'f6c70d7dc8'+_0x39d7e7(0x9c1,0x826,0x912,0x573)+_0xd05a74(0x5bd,0x66a,0x37c,0x8fa)+'h7CEhYgKNa'+_0xd05a74(0x4c6,0x548,0x3b8,0x7e7)+_0x39d7e7(0x67f,0x8a4,0x72c,0x6fb)+_0xd05a74(0x119,0x1e3,0x2bb,0x3e4)+_0xd05a74(0x4cc,0x226,0x40f,0x120)+_0x39d7e7(0x7a0,0x583,0x6bc,0x614)+_0x39d7e7(0x913,0x6df,0x9a0,0x981)+_0xd05a74(0x3d0,0x414,0x214,0x497)+_0x39d7e7(0x2eb,0x40d,0x147,0x682)+'a06e446de6'+_0xd05a74(0x851,0x624,0x466,0x893)+'7660997;\x20t'+_0x39d7e7(0x5f3,0x45d,0x658,0x1b1)+'en=3UThbDQ'+_0xd05a74(0x4dd,0x65e,0x7c6,0x8d1)+_0x39d7e7(0x4cc,0x58e,0x58d,0x78d),'RdvWR':'https://tt'+_0x39d7e7(0x864,0x93b,0x7e8,0x909)+_0xd05a74(0x4f,0x1aa,0x196,0x39b),'GRCEQ':_0xd05a74(0x65a,0x392,0x20e,0x1c8)+_0x39d7e7(0x45f,0x750,0x69e,0x9c0)+'n/xhtml+xm'+'l,applicat'+'ion/xml;q='+_0xd05a74(0x18e,0x33b,0x3d9,0x3b1)+_0xd05a74(0x398,0x1ab,-0xef,0xfa)+_0xd05a74(0xdb,0x1d6,0x44d,-0x5)+_0xd05a74(-0xee,0x1ba,0x18,0x30c)+_0x39d7e7(0x77d,0x4cd,0x2d6,0x5ce)+'lication/s'+_0x39d7e7(0x202,0x451,0x457,0x521)+_0x39d7e7(0xb36,0x8e6,0x779,0xbb4)+_0x39d7e7(0x7ab,0x4e7,0x73e,0x515),'SHtil':_0x39d7e7(0x725,0x742,0x8aa,0x78e)+_0x39d7e7(0x508,0x396,0x409,0x201)+_0xd05a74(0x5b6,0x4c7,0x57c,0x6fb)+'Win64;\x20x64'+_0xd05a74(-0xbd,0x10c,-0x1b4,0x3f1)+_0x39d7e7(0x71f,0x456,0x1a1,0x472)+_0xd05a74(0x51e,0x688,0x8cc,0x5e3)+_0x39d7e7(0x8d7,0x5fa,0x5c5,0x82a)+_0x39d7e7(0x660,0x52e,0x601,0x450)+_0xd05a74(0x50e,0x693,0x852,0x7fe)+'4\x20Safari/5'+_0xd05a74(0x4cf,0x225,0x10d,0x27c),'kOvMu':function(_0x43d196,_0x2481c9){return _0x43d196(_0x2481c9);},'glwlQ':_0xd05a74(0x4b2,0x509,0x3f4,0x5c6),'aDBbL':_0xd05a74(0x4bd,0x618,0x7c9,0x762),'hpcRP':'https://tt'+'downloader'+_0x39d7e7(0x5d3,0x4d2,0x2c9,0x399),'SgfKZ':_0xd05a74(0x54c,0x4d9,0x25f,0x6bb),'qjFRR':_0xd05a74(0x1a9,0x121,0x6d,0x3ad),'tryjW':_0xd05a74(0x455,0x5bc,0x51e,0x6cf),'AzXDF':function(_0x2d7ad4,_0x2aba11){return _0x2d7ad4(_0x2aba11);},'sUqjA':_0xd05a74(0x1f7,0x311,0x220,0x327)+'ad\x20>\x20a','SmafA':_0x39d7e7(0x695,0x3af,0x5f0,0x4c6),'piCfv':function(_0x1e1a60,_0x127e07){return _0x1e1a60(_0x127e07);},'ShWDD':_0x39d7e7(0x6bc,0x5eb,0x764,0x3bd)+_0x39d7e7(0x261,0x4b3,0x607,0x6f7)+'nth-child('+'3)','dlWcz':_0x39d7e7(0x9ec,0x7fe,0x806,0x79e)+'TA__','FEXel':function(_0x566f25,_0x84a4ea){return _0x566f25*_0x84a4ea;},'tWHZQ':function(_0x5b1f79,_0x21037e){return _0x5b1f79(_0x21037e);},'gXfXx':'short','ffcJt':'numeric','QFbFG':_0xd05a74(0xea,0x181,0x19d,0x2f2),'PxCQY':function(_0x275ac7,_0x1e3b19){return _0x275ac7(_0x1e3b19);}};function _0x39d7e7(_0x419dca,_0x5839e2,_0x42fa60,_0x47ef00){return _0x3b4225(_0x47ef00,_0x5839e2-0x31b,_0x42fa60-0x165,_0x47ef00-0x1f4);}return new Promise(async(_0xc761fa,_0x474d07)=>{function _0x2aacdb(_0x4f27ac,_0x520018,_0x1494cb,_0x2acd66){return _0x39d7e7(_0x4f27ac-0x160,_0x1494cb-0x109,_0x1494cb-0x7e,_0x520018);}function _0x4d66a1(_0x54f08e,_0x2114ae,_0x4bc3d8,_0x3716f0){return _0xd05a74(_0x54f08e-0xfe,_0x2114ae-0x353,_0x54f08e,_0x3716f0-0x16);}if(_0x58f354['dzqDm']===_0x58f354[_0x2aacdb(0x7d4,0x3df,0x5ee,0x30d)])try{let _0x12c12f=_0x58f354[_0x2aacdb(0x383,0x399,0x5e3,0x51a)](isUrl,_0x4509ec);if(!_0x12c12f)return _0x58f354['LOXWP'](_0x474d07,new Error(_0x58f354[_0x4d66a1(0x2d4,0x583,0x59f,0x658)](String,'Url\x20Invali'+'d')));const _0x1c1e2f={};_0x1c1e2f[_0x4d66a1(0x643,0x736,0x7ed,0x7af)]='Mozilla/5.'+_0x2aacdb(0x255,0x267,0x49f,0x446)+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+')\x20AppleWeb'+_0x2aacdb(0x5d8,0x45c,0x55f,0x2ef)+_0x2aacdb(0xcd4,0xa9f,0xa3b,0x751)+_0x4d66a1(0x4a9,0x6a3,0x5e2,0x641)+_0x4d66a1(0x808,0x87b,0xb64,0x824)+_0x2aacdb(0x707,0x89c,0x60a,0x7cd)+'2\x20Safari/5'+_0x2aacdb(0x4b7,0x3af,0x5d8,0x3b6),_0x1c1e2f[_0x2aacdb(0x631,0x4e3,0x734,0x80e)]=_0x58f354['zNkji'];const _0x4ffbd0={};_0x4ffbd0[_0x4d66a1(0x7d2,0x6bc,0x6ce,0x699)]=_0x12c12f[-0x1ce1*0x1+0x1*-0xfca+0x8ef*0x5],_0x4ffbd0[_0x2aacdb(0x83c,0x680,0x5bd,0x575)]='GET',_0x4ffbd0['headers']=_0x1c1e2f;const _0x41895b=await axios(_0x4ffbd0),_0xd0cddf={};_0xd0cddf[_0x2aacdb(0x996,0x553,0x71c,0x45f)]=_0x58f354[_0x4d66a1(0x340,0x60b,0x884,0x650)],_0xd0cddf[_0x4d66a1(0x4e2,0x55d,0x4cd,0x695)]=_0x4d66a1(0x983,0x997,0x9fd,0x97d),_0xd0cddf[_0x2aacdb(0x8ab,0x8ed,0x72e,0x87e)]={},_0xd0cddf[_0x2aacdb(0x8ab,0x8ed,0x72e,0x87e)][_0x2aacdb(0x3d1,0x443,0x691,0x4ab)]=_0x58f354['GRCEQ'],_0xd0cddf[_0x2aacdb(0x8ab,0x8ed,0x72e,0x87e)]['user-agent']=_0x58f354['SHtil'];const _0x5435f3=await axios[_0x2aacdb(0x819,0x98e,0x714,0x53d)](_0xd0cddf),_0x3aa09c=cheerio[_0x4d66a1(0x6eb,0x609,0x4f3,0x7b2)](_0x5435f3[_0x2aacdb(0x68c,0x657,0x607,0x86b)]),_0x1ee653=_0x58f354[_0x2aacdb(0x91b,0x94f,0x710,0x518)](_0x3aa09c,_0x58f354[_0x2aacdb(0x8c4,0xb4c,0x8ef,0x66a)])[_0x4d66a1(0x3fb,0x4ce,0x254,0x25e)](_0x58f354[_0x4d66a1(0x6f8,0x959,0x8f3,0xa36)]);if(!_0x1ee653)return;const _0x1e8f2b={};_0x1e8f2b[_0x4d66a1(0x85e,0x6bc,0x7b0,0x5b3)]=_0x12c12f[-0x1f6f*-0x1+0x2228+0x4197*-0x1],_0x1e8f2b['format']='',_0x1e8f2b[_0x2aacdb(0xa42,0xcb0,0x9e7,0x6f5)]=_0x1ee653;const _0xf333f6=_0x1e8f2b,_0x4198db=await _0x58f354['LOXWP'](axios,{'url':_0x58f354[_0x4d66a1(0x366,0x58a,0x414,0x6cc)],'method':_0x58f354[_0x2aacdb(0x80c,0xc31,0x955,0x6d1)],'headers':{'accept':_0x58f354['qjFRR'],'user-agent':_0x58f354['SHtil'],'cookie':_0x5435f3[_0x4d66a1(0x6c8,0x6ce,0x5da,0x3d6)][_0x58f354[_0x4d66a1(0x6a2,0x4c1,0x3bc,0x791)]][-0x197*-0xc+0x208a+-0x339e]},'data':new URLSearchParams(Object['entries'](_0xf333f6))}),_0x2a50b0=cheerio[_0x4d66a1(0x380,0x609,0x753,0x61c)](_0x4198db[_0x4d66a1(0x4d9,0x5a7,0x641,0x5f8)]),_0x1fc590={'nowm':_0x58f354[_0x2aacdb(0x6c7,0x90d,0x7cb,0x706)](_0x2a50b0,_0x2aacdb(0x7ac,0x675,0x6f4,0x832)+_0x4d66a1(0x70b,0x55c,0x743,0x2d3)+_0x4d66a1(0x9d2,0x89f,0x8ff,0x821)+'2)')['find'](_0x58f354[_0x4d66a1(0x341,0x4f9,0x2ac,0x795)])[_0x2aacdb(0x800,0x67b,0x52e,0x2d4)](_0x58f354[_0x4d66a1(0x73e,0x99f,0x8b1,0x9bd)]),'wm':_0x58f354[_0x4d66a1(0x8b1,0x68f,0x87d,0x53a)](_0x2a50b0,_0x58f354[_0x4d66a1(0x8ef,0x949,0x764,0x753)])[_0x2aacdb(0x446,0x3cc,0x66a,0x8fb)](_0x58f354[_0x4d66a1(0x563,0x4f9,0x34d,0x7c6)])[_0x2aacdb(0x423,0x6b5,0x52e,0x2de)](_0x58f354[_0x2aacdb(0xaf3,0xa85,0x9ff,0x773)]),'audio':_0x2a50b0(_0x2aacdb(0x88b,0x946,0x6f4,0x668)+_0x4d66a1(0x4fd,0x55c,0x7bd,0x4ed)+_0x2aacdb(0x8bb,0xbe2,0x8ff,0xa0d)+'4)')[_0x2aacdb(0x6fc,0x4c5,0x66a,0x48b)](_0x4d66a1(0x74d,0x664,0x41a,0x523)+_0x4d66a1(0x88f,0x6e7,0x4a8,0x9a7))[_0x2aacdb(0x421,0x718,0x52e,0x610)](_0x58f354['SmafA'])},_0x1bd1a6=cheerio['load'](_0x41895b[_0x2aacdb(0x706,0x88f,0x607,0x8e4)]),_0x276b39=_0x1bd1a6(_0x4d66a1(0xa27,0x9ce,0xa63,0xabe))[_0x4d66a1(0x52d,0x60a,0x369,0x86f)](_0x58f354[_0x4d66a1(0x7dd,0x5cb,0x6ba,0x4d6)])[_0x4d66a1(0x818,0x569,0x597,0x775)]()[-0x1b78+0x1*-0x1a81+0x29*0x151]['children'][-0x1716+0x1*-0x25b3+-0x75*-0x85],_0x5e263c=JSON[_0x2aacdb(0x40b,0x704,0x472,0x65e)](_0x276b39['data'])['props'][_0x2aacdb(0x765,0x696,0x802,0x9cc)][_0x2aacdb(0x2b0,0x4d8,0x517,0x769)][_0x4d66a1(0x717,0x687,0x6ef,0x584)],_0xf54974={'id':_0x5e263c['id'],'desk':_0x5e263c[_0x4d66a1(0xb37,0x86b,0xa8c,0xa89)],'tanggal_buat':new Date(_0x58f354[_0x2aacdb(0xbb0,0x670,0x95c,0x72c)](_0x58f354[_0x2aacdb(0xa55,0x774,0x8d6,0xa7b)](Number,_0x5e263c[_0x2aacdb(0x7d0,0x80c,0x708,0x9b2)]),-0x1*-0xb51+0x2*-0x665+0x1cb*0x3))['toLocaleSt'+_0x4d66a1(0x8a8,0x706,0x6c2,0x77f)]('id',{'year':'numeric','month':_0x58f354['gXfXx'],'weekday':_0x58f354['gXfXx'],'hour':_0x58f354[_0x2aacdb(0x849,0x604,0x681,0x715)],'minute':_0x4d66a1(0x544,0x434,0x36c,0x56c),'day':_0x58f354[_0x2aacdb(0x4d5,0x4de,0x681,0x8ed)]}),'durasi':_0x5e263c[_0x4d66a1(0x3e1,0x69e,0x92d,0x3f1)][_0x2aacdb(0x76d,0x515,0x6b9,0x69f)]+_0x58f354['QFbFG'],'resolusi':_0x5e263c['video'][_0x2aacdb(0x5e1,0x6ba,0x678,0x830)],'url_with_watermark':_0x5e263c[_0x2aacdb(0x9da,0x6e6,0x6fe,0x95d)][_0x2aacdb(0x4c1,0x7f9,0x701,0x7e4)+'dr'],'thumbnail':_0x5e263c[_0x4d66a1(0x525,0x69e,0x539,0x748)][_0x2aacdb(0x79f,0x45d,0x4fa,0x363)],'format':_0x5e263c['video'][_0x2aacdb(0x6f2,0x6d7,0x9a1,0x9b4)],'username':_0x5e263c['author']['uniqueId'],'nickname':_0x5e263c['author'][_0x4d66a1(0x778,0x9d1,0x8e8,0xb83)],'foto_profil':_0x5e263c[_0x2aacdb(0x946,0xb08,0x8c6,0x621)]['avatarLarg'+'er'],'verify':_0x5e263c[_0x2aacdb(0x7ce,0x692,0x8c6,0x847)][_0x2aacdb(0x6de,0x91e,0x818,0x65b)],'music':{..._0x5e263c['music']},'statistic':{..._0x5e263c[_0x2aacdb(0x6cc,0x7e0,0x5bb,0x624)]},'video_private':_0x5e263c[_0x4d66a1(0x6ad,0x65b,0x5ce,0x937)+'m'],'duetEnabled':_0x5e263c[_0x4d66a1(0x7f8,0x9a8,0x6e0,0x8a1)+'d'],'stitchEnabled':_0x5e263c[_0x2aacdb(0x9ce,0xa09,0x9d0,0x938)+_0x4d66a1(0x559,0x585,0x2c6,0x605)],..._0x1fc590};return _0xc761fa(_0xf54974);}catch(_0x4e7072){return _0x58f354[_0x2aacdb(0x706,0x3e9,0x638,0x6d3)](_0x474d07,new Error(String(_0x4e7072)));}else _0x20cc20[_0x2aacdb(0x4e0,0x66d,0x6d6,0x48c)](_0x58f354['DSsyC'](_0x4d66a1(0x512,0x6c4,0x810,0x680),_0x4a29fa['jawaban'])),_0xc8b3ac[_0x3ed75a[_0x4d66a1(0x924,0x8cb,0x95f,0x887)][_0x2aacdb(0x512,0x331,0x4c7,0x2a2)]('@')[0x473*0x1+-0xd03+0x890]]=_0x3788f5[_0x2aacdb(0xade,0x957,0x8c1,0x794)];});}const _0x1c302d={};_0x1c302d[_0x4077ab(0x5ac,0x812,0x9ce,0x956)+'t']=_0x4077ab(0xbd1,0xa44,0xa0e,0x9e4),_0x1c302d[_0x3b4225(0x2bb,0x2f8,0x141,0x215)]=''+myweb;const _0x161493={};_0x161493['urlButton']=_0x1c302d;const _0x356fd4={};_0x356fd4['displayTex'+'t']=_0x3b4225(0x412,0x3f9,0x6a3,0x1db),_0x356fd4[_0x3b4225(0x121,0x2f8,0x213,0x31d)]=''+github;const _0x3fb45b={};_0x3fb45b[_0x3b4225(-0x13c,0xbd,-0x223,-0x227)]=_0x356fd4;const _0xbc2aee={};_0xbc2aee[_0x4077ab(0x663,0x812,0xa65,0x90e)+'t']=_0x4077ab(0x6e1,0x4d0,0x7ca,0x766),_0xbc2aee['id']=_0x3b4225(0x3a8,0x613,0x560,0x3a8)+'o\x20'+q;const _0x556eda={};_0x556eda['quickReply'+_0x3b4225(0x8a8,0x621,0x488,0x5d4)]=_0xbc2aee;const _0x4a8177={};_0x4a8177['displayTex'+'t']='WM',_0x4a8177['id']=_0x4077ab(0x6a8,0x6f9,0x83f,0x513)+q;const _0x36b32a={};_0x36b32a[_0x4077ab(0x623,0x4da,0x3fc,0x31f)+_0x4077ab(0xc4f,0xa8d,0x973,0xc4e)]=_0x4a8177;const _0x554096={};_0x554096[_0x3b4225(0x59c,0x3a6,0x4b9,0x2e8)+'t']=_0x4077ab(0x331,0x55d,0x281,0x788),_0x554096['id']=_0x4077ab(0x7e7,0xa39,0x9d5,0xc6b)+'\x20'+q;const _0x553aa0={};_0x553aa0['quickReply'+_0x4077ab(0x99f,0xa8d,0xd4c,0x829)]=_0x554096;var but=[_0x161493,_0x3fb45b,_0x556eda,_0x36b32a,_0x553aa0];await alpha[_0x4077ab(0x81e,0x577,0x625,0x3c5)+'c'](from,_0x4077ab(0x4bc,0x4d4,0x56b,0x539)+pushname,lang[_0x4077ab(0x74b,0x7f6,0x80d,0x65f)](),pp_bot,but);break;case _0x3b4225(0x6e2,0x5cd,0x7b6,0x679):if(!q)return reply(lang[_0x3b4225(0x5aa,0x44b,0x1c8,0x519)+'t'](prefix));if(!isUrl(args[-0x1*-0x12f9+-0x1d6c+0xa73])&&!args[-0x9*0x1e7+0x1*-0x26d5+0x37f4][_0x4077ab(0x71f,0x5af,0x379,0x2cc)]('tiktok.com'))return reply(lang[_0x3b4225(0x6c3,0x452,0x745,0x196)]());reply(lang[_0x4077ab(0x726,0x871,0x7ef,0x88a)]()),hx['ttdownload'+'er'](text)[_0x4077ab(0x769,0x702,0x7dd,0x54d)](_0x3818aa=>{const _0x53d42f={};_0x53d42f[_0x109db6(0x5de,0x5c7,0x7fe,0x778)]=_0x109db6(0x632,0x600,0x611,0x878);const _0x38117f=_0x53d42f;function _0x109db6(_0x375a82,_0x3b478d,_0x42c54f,_0x38ae64){return _0x3b4225(_0x42c54f,_0x3b478d-0x454,_0x42c54f-0x1e9,_0x38ae64-0x11b);}function _0x35fd44(_0x1a099d,_0x52ae40,_0x53ee00,_0x96aa89){return _0x4077ab(_0x1a099d,_0x52ae40- -0x4e1,_0x53ee00-0xb5,_0x96aa89-0xd0);}const {wm:_0xcf0544,nowm:_0xa2328f,audio:_0x2c41c8}=_0x3818aa;axios['get'](_0x35fd44(0x77,0x2d9,0x52f,-0x14)+_0x109db6(0x904,0x676,0x957,0x6e3)+'api-create'+_0x109db6(0x70f,0x7b7,0x4eb,0x8bf)+_0xa2328f)[_0x109db6(0x8d5,0x6ea,0x86b,0x842)](async _0x26f100=>{function _0x63c25e(_0x135265,_0x2387c9,_0x52eb28,_0x59490f){return _0x109db6(_0x135265-0x15b,_0x59490f- -0x57f,_0x52eb28,_0x59490f-0xeb);}me=_0x63c25e(-0xe9,0x180,0x1df,-0x74)+_0x26f100[_0x63c25e(-0x14c,-0x5e,0x193,0xb8)];function _0x48e700(_0x5bfdf7,_0x5de44a,_0x13665a,_0x499aae){return _0x109db6(_0x5bfdf7-0x1b4,_0x5de44a- -0x441,_0x13665a,_0x499aae-0x43);}const _0x3b12c1={};_0x3b12c1['url']=_0xa2328f,alpha['sendMessag'+'e'](m[_0x63c25e(0x249,-0x19e,-0x20f,0x19)],{'video':_0x3b12c1,'caption':lang['ok'](),'mimetype':_0x38117f[_0x63c25e(-0x107,-0xd4,0x288,0x48)]},{'quoted':m});});});break;case _0x4077ab(0x683,0x57a,0x7d7,0x5fc):if(!q)return reply(lang[_0x4077ab(0x93f,0x8b7,0x6ba,0xbae)+'t'](prefix));if(!isUrl(args[-0x1626+-0x1*-0x202+0x1424])&&!args[0x1*-0xb14+-0x2b4*0x1+0x3f*0x38][_0x3b4225(-0x15e,0x143,0x287,0xa8)](_0x3b4225(0x69c,0x55f,0x83a,0x436)))return reply(lang[_0x4077ab(0xac1,0x8be,0x95c,0x839)]());reply(lang[_0x4077ab(0x919,0x871,0xb02,0xb40)]()),hx['ttdownload'+'er'](text)['then'](_0x12a2a5=>{function _0x392b61(_0x1d19c4,_0x64ca68,_0x26b913,_0x3b2777){return _0x4077ab(_0x26b913,_0x1d19c4- -0x342,_0x26b913-0x3b,_0x3b2777-0x18b);}const _0x4a8fb7={};_0x4a8fb7[_0x5f59cd(0x4a9,0x7a1,0x863,0x818)]=_0x392b61(0x2d6,0x563,0x18,0x49c);const _0x14a446=_0x4a8fb7;function _0x5f59cd(_0x1d045c,_0x10a1f3,_0x2d0664,_0x4c0305){return _0x4077ab(_0x4c0305,_0x10a1f3-0x1d,_0x2d0664-0x199,_0x4c0305-0x3f);}const {wm:_0x34b9c3,nowm:_0xbc3d1,audio:_0x34059a}=_0x12a2a5;axios[_0x5f59cd(0x428,0x62e,0x4ad,0x686)](_0x392b61(0x478,0x2ac,0x54c,0x687)+_0x392b61(0x34c,0x4a5,0x617,0x7d)+_0x392b61(0x4cc,0x6fc,0x6c1,0x56a)+_0x5f59cd(0x89b,0x7ec,0x5f6,0x8d4)+_0xbc3d1)[_0x5f59cd(0x4f2,0x71f,0x91f,0x573)](async _0x3712ab=>{function _0xe3e360(_0x3938de,_0x30ef8d,_0x94cb6c,_0xbd482c){return _0x5f59cd(_0x3938de-0xec,_0xbd482c-0x5,_0x94cb6c-0xed,_0x94cb6c);}function _0xa9a7cf(_0x52cc21,_0x1433aa,_0xe2172d,_0x8f4478){return _0x5f59cd(_0x52cc21-0x169,_0x1433aa- -0x56e,_0xe2172d-0x89,_0xe2172d);}me=_0xe3e360(0x825,0x57f,0x48d,0x545)+_0x3712ab[_0xa9a7cf(0x36a,0xfe,0x351,0x284)];const _0x606c74={};_0x606c74[_0xa9a7cf(-0x62,0x213,0x225,0x3a3)]=_0x34b9c3,alpha[_0xe3e360(0x892,0xafb,0xbaf,0xa54)+'e'](m[_0xa9a7cf(0x16f,0x5f,-0x23b,0x213)],{'video':_0x606c74,'mimetype':_0x14a446[_0xe3e360(0x5a1,0x867,0x56b,0x7a6)],'caption':lang['ok']()},{'quoted':m});});});break;case _0x3b4225(0x35d,0x613,0x901,0x8c7)+'o':if(!q)return reply(lang[_0x4077ab(0xa70,0x8b7,0x97c,0x73b)+'t'](prefix));if(!isUrl(args[-0x4f*-0x61+0x43f*0x3+-0x1556*0x2])&&!args[0x1*-0x14f6+0x1fc5+-0xacf*0x1][_0x4077ab(0x4c2,0x5af,0x3f7,0x619)](_0x4077ab(0x990,0x9cb,0xaac,0x6f9)))return reply(lang[_0x4077ab(0x982,0x8be,0x7ca,0x8c5)]());reply(lang[_0x4077ab(0x919,0x871,0xa74,0x7dd)]());let tiktokaudio=q;hx[_0x4077ab(0x73f,0x9fb,0xba7,0xa60)+'er'](tiktokaudio)[_0x3b4225(0xdb,0x296,0x262,0x24a)](async _0x3d0f5d=>{function _0x169391(_0x4d732c,_0x13151d,_0x5a2cc8,_0x337306){return _0x4077ab(_0x337306,_0x4d732c- -0x466,_0x5a2cc8-0x1b5,_0x337306-0x83);}const _0x53bc92={};function _0x4b9e9c(_0x16c0b3,_0x44b0c3,_0x466b01,_0xf37b4f){return _0x4077ab(_0x44b0c3,_0xf37b4f- -0x620,_0x466b01-0x11e,_0xf37b4f-0x4e);}_0x53bc92['xfFCN']=_0x169391(0x2e6,0x129,0xd9,0x1c2);const _0x1bfa74=_0x53bc92,{wm:_0x3ebdeb,nowm:_0x28bfc3,audio:_0x47cfde}=_0x3d0f5d,_0x1bc4d8={};_0x1bc4d8[_0x4b9e9c(0x5c,0x27f,-0xb0,0x144)]=_0x28bfc3;const _0x44b304={};_0x44b304['audio']=_0x1bc4d8,_0x44b304['mimetype']=_0x1bfa74['xfFCN'],alpha[_0x4b9e9c(0x60c,0x477,0x153,0x412)+'e'](m[_0x169391(0x14a,0x1c9,0x2c8,0x136)],_0x44b304,{'quoted':m});});break;case _0x4077ab(0x567,0x747,0x7c1,0x552):case _0x3b4225(-0x67,0x133,0x421,-0xa):case _0x3b4225(0x42,0x158,-0x125,0x2cd)+'tory':if(!q)return reply(lang[_0x4077ab(0x8e0,0x8b7,0xb0a,0x870)+'t'](prefix));pepe=''+q,hx[_0x4077ab(0x8dc,0x747,0x745,0x45e)](pepe)['then'](async _0x4c8a62=>{const _0x277480={'rLMHr':function(_0x2c6fd5,_0x375e72){return _0x2c6fd5(_0x375e72);},'DCIXy':_0x3e3e22(0x420,0x603,0x1b8,0x3f5),'STZSe':_0x12d9de(0xa6,0x43b,0x2a1,0x15f),'GyfyE':'RULES','SAQnO':'DONATE','ZUyRg':'mp4'};let _0x514f1d=await _0x277480[_0x12d9de(0x59b,0x25f,0x3dd,0x556)](getBuffer,_0x4c8a62[_0x3e3e22(0x214,-0xcd,0x415,0x139)][_0x3e3e22(-0x10e,0x15e,0x3e,-0x188)+_0x3e3e22(0x1b8,-0x174,0x2a6,0xfb)]);const _0x1790b3={};_0x1790b3['displayTex'+'t']=_0x277480[_0x12d9de(0x44b,0x340,0x546,0x4c7)],_0x1790b3[_0x12d9de(0x47e,0x506,0x4da,0x2c1)]=''+myweb;const _0x4e8da6={};_0x4e8da6['urlButton']=_0x1790b3;const _0x1d9726={};_0x1d9726[_0x3e3e22(-0xfd,0x364,0xe4,0x1c3)+'t']=_0x3e3e22(-0x8d,0x1a5,0x1e5,0x216),_0x1d9726['url']=''+github;const _0x4fb8f4={};_0x4fb8f4[_0x12d9de(0x46,-0x89,-0x18a,0x86)]=_0x1d9726;function _0x3e3e22(_0x3dba43,_0x1d5f3a,_0x3bac1c,_0x173726){return _0x4077ab(_0x1d5f3a,_0x173726- -0x64f,_0x3bac1c-0x130,_0x173726-0x1ac);}const _0x941f7a={};_0x941f7a['displayTex'+'t']=_0x277480['STZSe'],_0x941f7a['id']=_0x12d9de(0x23e,0x321,0x357,0x4e3);const _0x27359a={};_0x27359a[_0x12d9de(-0x1b1,-0x80,-0x21,0x37)+'Button']=_0x941f7a;function _0x12d9de(_0x3e2432,_0x3e4719,_0xebfebc,_0xcaa677){return _0x3b4225(_0xebfebc,_0xcaa677- -0x37,_0xebfebc-0x4c,_0xcaa677-0x57);}const _0x2aed84={};_0x2aed84[_0x3e3e22(0xd8,0x179,0x35c,0x1c3)+'t']=_0x277480[_0x12d9de(0x48e,0x6c9,0x3eb,0x522)],_0x2aed84['id']=_0x12d9de(0x40d,0x2ff,0x592,0x3e9);const _0x47c3d3={};_0x47c3d3[_0x12d9de(-0x55,0x19b,0x23a,0x37)+'Button']=_0x2aed84;const _0x39d67a={};_0x39d67a['displayTex'+'t']=_0x277480[_0x12d9de(0x493,0x2a8,0x303,0x41a)],_0x39d67a['id']=_0x3e3e22(-0xbd,-0x273,-0x305,-0x117);const _0x59e44f={};_0x59e44f['quickReply'+_0x3e3e22(0x63a,0x30e,0x1e7,0x43e)]=_0x39d67a;var _0x3ebc9f=[_0x4e8da6,_0x4fb8f4,_0x27359a,_0x47c3d3,_0x59e44f];await alpha[_0x12d9de(-0x29,-0x104,-0x88,0xd4)+'c'](from,_0x3e3e22(-0x2e0,0x205,0x240,-0xb8)+'TAGRAM\x20STO'+_0x3e3e22(0xee,0x427,-0x8,0x2ed)+enter+enter+_0x3e3e22(0x2c4,0x526,0x63c,0x353)+_0x4c8a62[_0x12d9de(0x451,0xe,0x36c,0x2e5)]['id']+enter+(_0x12d9de(0x6a8,0x56d,0x256,0x3f7)+_0x3e3e22(0x17e,0x423,0x300,0x332))+_0x4c8a62[_0x12d9de(0x104,0x3d0,0x30a,0x2e5)]['username']+enter+_0x12d9de(0x636,0x5ea,0x874,0x5a6)+_0x4c8a62['user'][_0x3e3e22(0x2c0,0x441,0x3a7,0x1e7)]+enter+(_0x3e3e22(-0x1d3,0x122,-0x10e,-0xf5)+_0x12d9de(0x1ee,0x70d,0x67f,0x4de))+_0x4c8a62[_0x3e3e22(0x16f,-0xec,-0x9f,0x139)][_0x3e3e22(-0x175,0x2b,0x117,-0x165)]+enter+(_0x12d9de(-0x21,-0x13d,-0x268,0x38)+'rs\x20:*\x20')+_0x4c8a62[_0x3e3e22(0x2d5,0x90,0x1d8,0x139)][_0x12d9de(0x57,0xc,0x1f8,0x2ff)]+enter+('🎀\x20*Followi'+'ng\x20:*\x20')+_0x4c8a62[_0x3e3e22(-0x144,0x24d,0x321,0x139)][_0x12d9de(0x4eb,0x236,0x303,0x330)]+enter+('*🔗\x20Link\x20:*'+_0x12d9de(0x2e1,0x404,0x609,0x55b)+_0x3e3e22(0x6a5,0x47b,0x4f2,0x440)+_0x12d9de(0x4a1,0x603,0x417,0x523))+_0x4c8a62[_0x12d9de(0x352,0x4c2,0x40f,0x2e5)][_0x12d9de(0x4be,0x52b,0x7f,0x2cb)]+enter+(_0x12d9de(0x1e8,0x52,-0xf,0x2e3)+'*\x20')+_0x4c8a62[_0x12d9de(0x2e9,0x11e,0x5ee,0x31e)]['length']+'\x20Media'+enter+enter+(_0x3e3e22(0x25f,0x28c,-0x28f,0x5c)+_0x12d9de(-0x94,-0x237,-0x1b3,0x59)+_0x3e3e22(0x299,0x424,-0x18,0x147)+_0x12d9de(0x64c,0x45c,0x3a8,0x405)+'_'),'©\x20'+ownername,_0x514f1d,_0x3ebc9f);for(let _0x17d879 of _0x4c8a62[_0x12d9de(0x398,0x370,0x170,0x31e)]){if(_0x17d879[_0x12d9de(0x319,0x34a,0x51c,0x2c1)][_0x12d9de(-0x23,-0x18,0x211,0x10c)](_0x277480[_0x12d9de(-0x9f,0x43,-0x18e,0x68)])){let _0x4e13e3=await getBuffer(_0x17d879[_0x12d9de(0x21a,0x219,0x570,0x2c1)]);const _0x1764ab={};_0x1764ab[_0x3e3e22(-0xc1,0x226,0x282,0xf7)]=_0x4e13e3,_0x1764ab[_0x3e3e22(0x195,0x2de,-0x18d,0x15d)]=_0x12d9de(0xfa,0x22c,0x552,0x3da)+'•\x20'+_0x17d879[_0x3e3e22(-0x5a,-0x1f5,0x51,-0x10c)];const _0x25ecae={};_0x25ecae[_0x3e3e22(0x36c,0x1ad,0x425,0x29a)]=m,alpha[_0x12d9de(0x3fa,0x587,0x2ba,0x58f)+'e'](from,_0x1764ab,_0x25ecae);}else{let _0x2624d9=await getBuffer(_0x17d879[_0x12d9de(0x494,0x2b3,0x423,0x2c1)]);const _0x2eae90={};_0x2eae90[_0x12d9de(-0xa1,0x479,0x8c,0x1e5)]=_0x2624d9,_0x2eae90['caption']='Instagram\x20'+'•\x20'+_0x17d879[_0x3e3e22(-0x23b,-0x1f1,0x14,-0x10c)];const _0x398298={};_0x398298['quoted']=m,alpha[_0x3e3e22(0x187,0x45d,0x5ae,0x3e3)+'e'](from,_0x2eae90,_0x398298);}}})[_0x4077ab(0x5df,0x7e5,0x8a6,0x645)](_0xa2da4e=>{const _0x5703fc={'EmtzM':function(_0x23ca96,_0x20aceb){return _0x23ca96(_0x20aceb);}};function _0x3e602e(_0x555745,_0x49be1c,_0x4b8640,_0x264b7e){return _0x3b4225(_0x555745,_0x4b8640-0x3b7,_0x4b8640-0x10f,_0x264b7e-0xb6);}_0x5703fc[_0x3e602e(0x94d,0x7c1,0x8ce,0xb53)](reply,lang['err']());});break;case'ig':case _0x3b4225(0x5b,0x2d7,0xd7,0x32b):case _0x3b4225(0xbd,0x24c,0xdd,0x29e):case _0x4077ab(0xa0d,0x964,0x9ff,0xb46):case _0x3b4225(0x416,0x1f5,0x39c,0x4dd):case _0x3b4225(0x43a,0x37d,0x632,0x4b0):case _0x4077ab(0xaf1,0x9fd,0xa54,0xcdb):case'instavideo':case _0x3b4225(0x873,0x60e,0x42f,0x7cf):case'igreels':case'instareels':case _0x4077ab(0x35a,0x5ec,0x6b5,0x710):case _0x4077ab(0x39f,0x693,0x75d,0x54f):case _0x3b4225(0x694,0x53d,0x3c8,0x67b):if(!q)return reply(lang[_0x3b4225(0x291,0x44b,0x4a2,0x5bf)+'t'](prefix));await reply(lang['wait']());var urlnya=''+q;hx[_0x3b4225(0x45,0x2d7,0x2ba,0x56b)](urlnya)[_0x4077ab(0x69d,0x702,0x619,0x76f)](async _0x1a129a=>{function _0x871858(_0x520c13,_0x27df23,_0x48bfab,_0x29089d){return _0x4077ab(_0x48bfab,_0x27df23- -0x5ce,_0x48bfab-0xc0,_0x29089d-0xe2);}const _0x59c98f={};_0x59c98f[_0x219db7(-0x41e,0x2f,0x15d,-0x17c)]=_0x219db7(-0x324,0x14c,-0x113,-0x57);function _0x219db7(_0x1b1b4b,_0x3a5054,_0x1b33c9,_0x12372f){return _0x4077ab(_0x3a5054,_0x12372f- -0x66f,_0x1b33c9-0x119,_0x12372f-0x13b);}const _0x2352b3=_0x59c98f,_0x5b311f={};_0x5b311f[_0x219db7(0x281,0x26f,-0x8b,0xf5)]=_0x1a129a[_0x219db7(-0xfa,0x3dd,0x167,0x119)][_0x871858(-0x3c9,-0x107,0x2b,-0x2cb)+_0x219db7(0x235,-0x21c,0x147,0xdb)];const _0x52abdb={};_0x52abdb[_0x871858(0x274,0xba,-0x17,-0xd7)]=_0x5b311f,_0x52abdb['caption']=_0x219db7(0x203,0x3bb,0xe8,0x223)+_0x219db7(0x335,0x42,0x1f0,0x7c)+_0x219db7(0x384,0x214,0x4f6,0x1fd)+enter+enter+_0x219db7(0x388,0x260,0x540,0x333)+_0x1a129a[_0x871858(0x413,0x1ba,0x49,0x25d)]['id']+enter+(_0x871858(0x4c0,0x2cc,0x6,0x50f)+'e\x20:*\x20')+_0x1a129a['user'][_0x219db7(0x170,-0x1d4,0x350,0xff)]+enter+(_0x219db7(-0x15e,0x92,-0x276,-0x115)+_0x871858(0x47d,0x3b3,0xc0,0x5d8))+_0x1a129a[_0x219db7(-0x196,0x133,0x269,0x119)]['fullName']+enter+(_0x871858(0xc1,-0xf3,-0x111,0x7c)+'rs\x20:*\x20')+_0x1a129a['user'][_0x871858(0x268,0x1d4,0xdb,-0x115)]+enter+(_0x219db7(0xb,-0x3f,-0x188,-0x9b)+'ng\x20:*\x20')+_0x1a129a[_0x219db7(0x342,0x3e5,0x1ef,0x119)][_0x219db7(0x1f0,-0x4,0x245,0x164)]+enter+('*🔗\x20Link\x20:*'+'\x20https://i'+_0x871858(0x652,0x4c1,0x53d,0x787)+_0x871858(0x1af,0x3f8,0x2ea,0x188))+_0x1a129a[_0x871858(0x14a,0x1ba,0x264,0x28d)][_0x219db7(0x25b,0xab,0x97,0xff)]+enter+(_0x219db7(0x231,0x3bc,-0x2e,0x117)+'*\x20')+_0x1a129a[_0x219db7(0x35d,0x1b9,0x3f,0x152)]['length']+'\x20Media'+enter+enter+(_0x871858(0x2fd,0xdd,-0x114,-0xc4)+'berapa\x20saa'+_0x219db7(0x290,0x2c5,0x53,0x127)+_0x219db7(0x4ec,0xe1,0x18b,0x239)+'_'),await alpha[_0x871858(0x183,0x464,0x21a,0x3c9)+'e'](m['chat'],_0x52abdb,{'quoted':m});for(let _0x56a17d of _0x1a129a[_0x871858(-0x6d,0x1f3,-0xa,-0xb8)]){if(_0x56a17d[_0x219db7(-0xfa,-0x19e,0x216,0xf5)][_0x871858(-0x306,-0x1f,0x2b7,0x6b)](_0x871858(0xed,0x227,0x222,0x2b9))){const _0x41eb3b={};_0x41eb3b[_0x219db7(0x9d,0x238,0x276,0xf5)]=_0x56a17d[_0x219db7(0x2f4,0x135,0xa6,0xf5)];const _0x196287={};_0x196287[_0x871858(0x1f6,0x178,0x1e9,0x3f5)]=_0x41eb3b,_0x196287['mimetype']=_0x2352b3['MoADI'],alpha[_0x871858(0x4ac,0x464,0x69e,0x27b)+'e'](m['chat'],_0x196287,{'quoted':m});}else{const _0x25259f={};_0x25259f['url']=_0x56a17d[_0x871858(0x3f6,0x196,0x3b4,0x482)];const _0x5e7146={};_0x5e7146[_0x219db7(-0xd9,0x214,0xb3,0x19)]=_0x25259f,alpha['sendMessag'+'e'](m['chat'],_0x5e7146,{'quoted':m});}}})[_0x4077ab(0x59c,0x7e5,0x605,0x72c)](_0xfa7689=>{function _0x3e3e3f(_0x2f9a2e,_0x196241,_0x502957,_0x4ad62d){return _0x3b4225(_0x196241,_0x4ad62d-0x2d2,_0x502957-0x8f,_0x4ad62d-0xb5);}const _0x5273af={'MYvHQ':function(_0x5066dd,_0x462a1f){return _0x5066dd(_0x462a1f);}};function _0x51e0f9(_0x5511a5,_0x2318d8,_0x189e2d,_0x290f88){return _0x3b4225(_0x5511a5,_0x189e2d-0x3b5,_0x189e2d-0x153,_0x290f88-0x4d);}_0x5273af[_0x51e0f9(0x841,0x680,0x62c,0x858)](reply,lang[_0x3e3e3f(0xf5,0x412,0x631,0x3ba)]());});break;case _0x4077ab(0x5f1,0x8ae,0x74f,0x92d)+'3':case _0x4077ab(0x89a,0x8a4,0xafc,0x6fb):case _0x3b4225(0x357,0x28c,0x384,0x479):case _0x4077ab(0x835,0x584,0x391,0x521):{if(!q)return reply(lang[_0x3b4225(0x69a,0x44b,0x5a5,0x646)+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text[_0x3b4225(0x134,0x143,0x38d,0x1cb)](_0x4077ab(0x75e,0x5d9,0x862,0x44c))&&!text[_0x3b4225(0xe2,0x143,0x138,-0x194)](_0x4077ab(0x8f7,0x714,0x5a8,0x6a2)+'m'))return reply(lang[_0x3b4225(0x3fa,0x44b,0x48b,0x1fd)+'t'](prefix));await reply(lang[_0x4077ab(0x8a2,0x871,0x9ad,0x7e2)]()),ytmp3=args[_0x3b4225(0x3bd,0xdf,0xb7,0x18a)]('\x20'),yta(ytmp3)[_0x4077ab(0x880,0x702,0x708,0x5cd)](async _0x44ff92=>{const _0xe79320={'koTBx':function(_0x507239,_0x382270){return _0x507239>=_0x382270;},'EVKPL':function(_0x9eccd9,_0xba2256){return _0x9eccd9(_0xba2256);},'eTBxg':'\x20MB','qyGtN':_0x88bd56(0xa47,0x5a8,0x797,0x59c)+_0x88bd56(0x735,0x46d,0x517,0x4ab),'rPems':'Source\x20Cod'+'e','yTPkq':_0x88bd56(0x4f2,0x46a,0x5ab,0x328),'Ltluy':_0x88bd56(0x5c1,0x8bf,0x676,0x666),'opJgp':_0x5ba878(0x98,-0x48,0x13e,-0x311),'oeNra':_0x5ba878(0x31c,0x393,0x2e1,0x2b9),'sbTBY':_0x88bd56(0x99b,0x819,0x6ce,0x3e0)},{dl_link:_0x5b4d32,filesizeF:_0x4f04ea,filesize:_0x457ad9,title:_0x2b159d,thumb:_0x54a856}=_0x44ff92;let _0x52a117=await getBuffer(_0x54a856);if(_0xe79320[_0x88bd56(0x965,0x8a9,0x884,0xa0c)](_0xe79320[_0x88bd56(0x7ea,0xb15,0x9b6,0x6c8)](Number,_0x4f04ea[_0x88bd56(0x7ab,0x835,0x7be,0x6aa)](_0xe79320[_0x88bd56(0x619,0xa91,0x864,0x70d)],'')),-0x225c+-0x9d*0x3e+0x307*0x18))return await alpha['send5ButLo'+'c'](from,_0x5ba878(0x3a7,0x142,-0x1b4,0x6c)+_0x88bd56(0x605,0x8d0,0x8f2,0x9de)+'\x20」----*\x0a\x0a*'+'🎀\x20Title\x20:*'+'\x20'+_0x2b159d+(_0x5ba878(0x4df,0x312,0x5ca,0x475)+'*\x20')+_0x4f04ea+(_0x5ba878(0x3d5,0x30c,0xd2,0x296)+'\x20Mp3\x0a*👍\x20Qu'+_0x5ba878(-0x24,-0x5b,-0x1cf,-0x2af)+_0x88bd56(0x70e,0x65c,0x871,0x9d9)+_0x88bd56(0xcab,0xa4b,0xa21,0xc74))+_0x5b4d32+(_0x5ba878(0x23b,-0x37,-0xbb,-0x8f)+_0x5ba878(0xf7,0x6f,-0xdc,-0x27d)+'h\x20dari\x20bat'+_0x88bd56(0x77e,0x74c,0x7d6,0xa1e)+_0x5ba878(-0x2fc,-0xb6,-0xa,-0x1b5)+'entuk\x20link'+'_'),'©\x20'+ownername,_0x52a117,[{'urlButton':{'displayText':_0xe79320['qyGtN'],'url':''+_0x5b4d32}}]);let _0x27c562='*----「\x20YOU'+_0x5ba878(0x3d8,0x37d,0x2aa,0x414)+'\x20」----*\x0a\x0a*'+_0x88bd56(0x6af,0xb29,0x82f,0x6b5)+'\x20'+_0x2b159d+(_0x88bd56(0x7fc,0x86e,0x887,0x76c)+'*\x20')+_0x4f04ea+(_0x88bd56(0xa03,0x631,0x881,0x707)+_0x5ba878(-0xd,0x37,-0xe8,-0x206)+'ality\x20:*\x201'+_0x5ba878(0x307,0x2fc,0x3cc,0x1eb)+_0x5ba878(0x650,0x4ac,0x5de,0x5b5))+q;const _0x2c25f6={};_0x2c25f6[_0x5ba878(0x36d,0x21f,0x189,0x111)+'t']=_0xe79320[_0x5ba878(0x3d5,0xff,0x54,0x2b2)];function _0x5ba878(_0x28e4e8,_0x3a43be,_0x1ed516,_0x30327f){return _0x3b4225(_0x28e4e8,_0x3a43be- -0x187,_0x1ed516-0xe8,_0x30327f-0xab);}_0x2c25f6[_0x5ba878(0x2a9,0x171,0x1e1,0x14e)]=''+youtube;const _0x401d92={};_0x401d92[_0x88bd56(0x615,0x260,0x4ab,0x5a4)]=_0x2c25f6;function _0x88bd56(_0x4a2e6f,_0x16e12a,_0x19e647,_0x18a1d2){return _0x4077ab(_0x18a1d2,_0x19e647- -0x7e,_0x19e647-0x173,_0x18a1d2-0x88);}const _0x325dc6={};_0x325dc6[_0x88bd56(0xa46,0x7aa,0x794,0x6b8)+'t']=_0xe79320[_0x5ba878(0x172,0xb7,0x23b,-0x1e7)],_0x325dc6['id']=_0xe79320[_0x5ba878(0x411,0x38b,0x5c7,0x25d)];const _0x45554a={};_0x45554a[_0x88bd56(0x5d7,0x54b,0x45c,0x6be)+_0x88bd56(0x855,0xbe8,0xa0f,0x9d5)]=_0x325dc6;const _0x59e5f0={};_0x59e5f0[_0x5ba878(-0x20,0x21f,-0x33,-0x81)+'t']=_0xe79320[_0x88bd56(0xb06,0x736,0x9da,0x75e)],_0x59e5f0['id']=_0xe79320['oeNra'];const _0x58cbd2={};_0x58cbd2['quickReply'+_0x88bd56(0xa67,0xaaf,0xa0f,0x9a8)]=_0x59e5f0;var _0xad4bab=[_0x401d92,_0x45554a,_0x58cbd2];await alpha['send5ButLo'+'c'](from,_0x27c562,'©\x20'+ownername,_0x52a117,_0xad4bab);const _0x423e86={};_0x423e86[_0x88bd56(0x47e,0x4a0,0x6e6,0x956)]=_0x5b4d32;const _0x55b02e={};_0x55b02e[_0x88bd56(0x972,0x73d,0xa1d,0x7d7)]=_0x423e86,_0x55b02e[_0x88bd56(0xa2d,0xa4a,0x90c,0x6e4)]=_0xe79320[_0x5ba878(0x52b,0x36f,0x35d,0x56d)],_0x55b02e[_0x5ba878(0x2d8,0x3ef,0x514,0x101)]=_0x2b159d+_0x88bd56(0x5b2,0x77b,0x4ff,0x3a6),alpha[_0x88bd56(0xc64,0x981,0x9b4,0x72e)+'e'](m['chat'],_0x55b02e,{'quoted':m});});}break;case _0x4077ab(0x61b,0x8fd,0x924,0x86b):{if(!q)return reply(lang[_0x4077ab(0x83c,0x8b7,0xae7,0x71f)+'t'](prefix));if(!text['includes']('mediafire'))return reply(lang['wrongForma'+'t'](prefix));const mf=async _0x48e823=>{const _0x163ad3={'IHjpz':function(_0x1384c8,_0x365269){return _0x1384c8(_0x365269);},'ggrGB':_0x150a78(0x98,-0x94,-0x311,-0x18)+_0x150a78(0x686,0x3af,0x6c5,0x49d),'TYDOb':_0x14af9f(0xb8,-0x2cf,-0xf6,-0x312),'jufPE':_0x14af9f(0x309,0x2c1,0x493,0x6da),'rQYmo':'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x150a78(-0x293,0x23f,-0x2c3,-0x89)},_0x726c43=await axios[_0x150a78(-0x112,0x2eb,-0x22e,0x21)](_0x48e823),_0x477704=cheerio[_0x14af9f(0x246,0x1d,0xbb,0x307)](_0x726c43[_0x150a78(-0x1c0,-0x1b6,-0x246,0x5f)]),_0xd9c5b5=[],_0x4a42e2=_0x163ad3[_0x14af9f(0x6c5,0x3ab,0x3f7,0x4dd)](_0x477704,_0x163ad3[_0x150a78(0x650,0x482,0x455,0x37b)])[_0x150a78(0x7f,-0x320,0x159,-0x7a)](_0x163ad3['TYDOb']),_0x5200c8=_0x163ad3[_0x150a78(0x43f,0x56b,0x58a,0x3fd)](_0x477704,_0x163ad3[_0x150a78(0x254,0x5d5,0x4a3,0x37b)])[_0x150a78(0x281,-0xda,-0xa0,0xff)]()['replace'](_0x163ad3[_0x150a78(0xb1,-0x23b,0x1a7,0x0)],'')[_0x150a78(0x49e,0x2f,0xb6,0x24c)]('(','')['replace'](')','')[_0x150a78(0x1d8,0x7e,0x41,0x24c)]('\x0a','')[_0x14af9f(0x41c,-0x2f,0x246,0x240)]('\x0a','')[_0x14af9f(0x420,0x529,0x246,-0x9f)](_0x163ad3[_0x14af9f(-0x6d,0x43,0x25a,0x12b)],''),_0x277635=_0x4a42e2[_0x14af9f(0x16,-0x21f,-0xe7,-0x2d2)]('/'),_0x1c03fd=_0x277635[-0x16da+-0x20*0x9+0x17ff];mimep=_0x1c03fd[_0x14af9f(-0x15a,-0x210,-0xe7,0xf8)]('.'),mimee=mimep[0x575*-0x3+0x461*-0x5+0x2645];const _0x3cedb7={};function _0x14af9f(_0x1c157a,_0x5a5642,_0x3525ab,_0x1e31d1){return _0x4077ab(_0x1e31d1,_0x3525ab- -0x5f6,_0x3525ab-0x1c5,_0x1e31d1-0xc0);}_0x3cedb7[_0x14af9f(0x4e9,0x25f,0x2a6,0x24d)]=_0x1c03fd,_0x3cedb7[_0x150a78(0x13a,0x11b,0x20a,0x392)]=mimee,_0x3cedb7[_0x150a78(0x62,0x2a8,-0x52,0x16a)]=_0x5200c8;function _0x150a78(_0xba061f,_0x2940eb,_0x25a93f,_0x8840b8){return _0x3b4225(_0x2940eb,_0x8840b8- -0x184,_0x25a93f-0x125,_0x8840b8-0x103);}return _0x3cedb7[_0x150a78(0x28b,-0x3e,0x2c8,0x18b)]=_0x4a42e2,_0xd9c5b5[_0x150a78(0x39e,0x6cd,0x4de,0x413)](_0x3cedb7),_0xd9c5b5;};kom=q,mf(''+kom)[_0x3b4225(0x4a4,0x296,0x2df,0x7f)](async _0x1124e6=>{const _0x21c160={'QZtgO':function(_0x119a05,_0x1d367c){return _0x119a05<_0x1d367c;},'Llyqq':function(_0x41dcb8,_0x1e8b13){return _0x41dcb8(_0x1e8b13);},'FCVbt':function(_0x2aaec1,_0x36e65a){return _0x2aaec1+_0x36e65a;},'EcqDd':function(_0xb7aaf6,_0x269e4a){return _0xb7aaf6>=_0x269e4a;},'RUWRy':_0x56bac8(0x619,0x9e6,0x787,0x4ee)+_0x56bac8(0x28c,0x329,0x507,0x25f),'xDdah':'applicatio'+_0x250a8e(0x9ea,0x7f2,0x8f8,0x7af)};function _0x56bac8(_0x5ec3c9,_0x4857d7,_0x5af40d,_0x50003c){return _0x4077ab(_0x50003c,_0x5af40d- -0x8e,_0x5af40d-0x84,_0x50003c-0x17b);}function _0x250a8e(_0x56deda,_0x24b0cf,_0x505003,_0x2e73c3){return _0x3b4225(_0x56deda,_0x24b0cf-0x462,_0x505003-0x198,_0x2e73c3-0x16c);}for(var _0x54c95f=-0x2*0xead+-0x213*-0x3+0x1721;_0x21c160[_0x250a8e(0x80f,0x84d,0xa99,0x86d)](_0x54c95f,_0x1124e6[_0x56bac8(0x49e,0x80f,0x64f,0x375)]);_0x54c95f++){let _0x306561=await _0x21c160[_0x56bac8(0xba4,0x9b1,0x8fb,0x9c4)](getBuffer,_0x21c160[_0x250a8e(0xa50,0x9c2,0x6df,0xa1e)](picak,_0x56bac8(0x674,0x41c,0x60a,0x87f)+'Download'));if(_0x21c160[_0x250a8e(0x858,0x8d4,0x6ae,0xa0a)](_0x1124e6[_0x54c95f][_0x56bac8(0x810,0x89a,0x6cc,0x6a3)][_0x56bac8(0x9c6,0x993,0x7ae,0x6dc)]('MB',''),-0x25d2*0x1+0x22cb+0x339)||_0x21c160[_0x56bac8(0x94c,0x5c7,0x850,0xafc)](_0x1124e6[_0x54c95f]['sizee'][_0x56bac8(0x731,0x6c3,0x7ae,0x660)]('GB',''),0x262f+0x4eb+-0x2b19))return await alpha[_0x56bac8(0x410,0x2b1,0x4e9,0x533)+'c'](from,_0x56bac8(0x341,0x81c,0x5a7,0x720)+_0x250a8e(0x96e,0x7c0,0x88b,0x8ca)+_0x250a8e(0x858,0x7d9,0x9c0,0x911)+_0x250a8e(0x2aa,0x531,0x3ac,0x4c1)+'\x20:\x20'+_0x1124e6[_0x54c95f]['naman']+_0x250a8e(0x566,0x54f,0x423,0x498)+_0x1124e6[_0x54c95f][_0x250a8e(0x978,0x978,0x8c9,0x9c6)]+_0x250a8e(0x3cf,0x4f1,0x766,0x352)+_0x1124e6[_0x54c95f][_0x250a8e(0x6f2,0x750,0x7d7,0x678)]+_0x250a8e(0x7ea,0x9e0,0x97e,0x8fc)+_0x1124e6[_0x54c95f][_0x250a8e(0x9f8,0x771,0x6c1,0x62f)]+(_0x250a8e(0x9af,0x83d,0x7e0,0x80a)+_0x56bac8(0x8ff,0x8a8,0x867,0x758)+_0x56bac8(0xa5b,0xab6,0x897,0x9c7)+_0x56bac8(0x5e2,0x60d,0x8a2,0xa8d)+_0x56bac8(0x8db,0x871,0x695,0x5a5)+'tuk\x20link_'),'©\x20'+ownername,_0x306561,[{'urlButton':{'displayText':_0x56bac8(0x5a1,0x896,0x787,0x94b)+_0x56bac8(0x5a2,0x57f,0x507,0x68f),'url':''+_0x1124e6[_0x54c95f][_0x250a8e(0x545,0x771,0x979,0x485)]}}]);alpha[_0x250a8e(0x5da,0x56d,0x68d,0x64c)+'c'](from,_0x250a8e(0x826,0x62b,0x913,0x41d)+_0x250a8e(0x7f1,0x7c0,0x918,0x59a)+_0x56bac8(0x7df,0x466,0x755,0x50b)+'-*\x0a\x0a📬\x20Name'+_0x56bac8(0x929,0x655,0x71d,0x67c)+_0x1124e6[_0x54c95f][_0x250a8e(0x8e9,0x892,0x894,0xa68)]+_0x250a8e(0x71c,0x54f,0x650,0x54a)+_0x1124e6[_0x54c95f][_0x250a8e(0x975,0x978,0xa6b,0x8ae)]+_0x250a8e(0x1fb,0x4f1,0x667,0x504)+_0x1124e6[_0x54c95f][_0x250a8e(0x51d,0x750,0x8b0,0x634)]+_0x250a8e(0x779,0x9e0,0x71e,0x9d8)+_0x1124e6[_0x54c95f][_0x56bac8(0x600,0x87a,0x6ed,0x7b4)]+(_0x250a8e(0x877,0x787,0x922,0x626)+_0x56bac8(0x446,0x1be,0x4a7,0x245)+_0x56bac8(0x946,0x940,0x7c3,0x86d)+_0x250a8e(0x5d0,0x816,0x8d7,0xac4)+'ar..._'),'©\x20'+ownername,_0x306561,[{'urlButton':{'displayText':_0x21c160[_0x56bac8(0x6cb,0x557,0x7b0,0x74c)],'url':''+_0x1124e6[_0x54c95f][_0x250a8e(0x5c6,0x771,0x525,0x9ef)]}}]);const _0x4530f3={};_0x4530f3[_0x56bac8(0x4a3,0x6f5,0x6d6,0x4f0)]=_0x1124e6[_0x54c95f][_0x56bac8(0x8c8,0x48a,0x6ed,0x7d8)];const _0x5bf22d={};_0x5bf22d[_0x250a8e(0x7aa,0xa91,0x8e6,0x7e0)]=_0x4530f3,_0x5bf22d['mimetype']=_0x21c160[_0x250a8e(0x780,0x77b,0x988,0x4e2)],_0x5bf22d[_0x56bac8(0x831,0xa98,0x954,0x741)]=''+_0x1124e6[_0x54c95f][_0x56bac8(0xa94,0x8ed,0x80e,0x6b5)];const _0x2fd40e={};_0x2fd40e['quoted']=m,alpha[_0x250a8e(0xd14,0xa28,0x78e,0xaeb)+'e'](from,_0x5bf22d,_0x2fd40e);}})[_0x3b4225(0x147,0x379,0x1ef,0x62f)](_0x5d6f3a=>{const _0x3c454b={'HArnw':function(_0xb0921b,_0x28a55a){return _0xb0921b(_0x28a55a);}};function _0x4474d6(_0x2094da,_0x224c7a,_0x15a99a,_0x305fe6){return _0x3b4225(_0x2094da,_0x305fe6-0x169,_0x15a99a-0x15d,_0x305fe6-0x58);}_0x3c454b['HArnw'](reply,lang[_0x4474d6(0x21e,0x2ca,0x510,0x251)]());});}break;case _0x4077ab(0x885,0x7f5,0x67d,0x776):case _0x3b4225(-0x94,0x4b,-0x238,0x136):case'ytshorts':case _0x4077ab(0x98e,0x881,0xaae,0xa51):{if(!q)return reply(lang[_0x3b4225(0x233,0x44b,0x329,0x56b)+'t'](prefix));if(!isUrl(q))return reply(lang[_0x3b4225(0x5e1,0x44b,0x39a,0x1a4)+'t'](prefix));if(!text[_0x4077ab(0x547,0x5af,0x89d,0x76b)](_0x4077ab(0x431,0x5d9,0x55e,0x566))&&!text[_0x4077ab(0x360,0x5af,0x38a,0x405)](_0x4077ab(0x63c,0x714,0x891,0x849)+'m'))return reply(lang[_0x4077ab(0x9cd,0x8b7,0x934,0xabe)+'t'](prefix));await reply(lang['wait']()),ytv(''+q)['then'](async _0x171740=>{const _0x3aeed7={'tzTzY':function(_0x5b7eca,_0x1efaa2){return _0x5b7eca(_0x1efaa2);},'DSEtQ':'\x20MB','YqJbj':_0x21e953(0x631,0x1f3,0x474,0x6fb)+_0x4708c5(0x4c9,0x4d7,0x536,0x3cc),'ilhAs':_0x21e953(0xd9,0x42f,0x1a4,0x3d8)+'e','hvaao':'Donasi','mYjxR':_0x4708c5(0x627,0x8b4,0x695,0x52f),'VMIXS':_0x21e953(0x1f8,0x432,0x20a,-0x6),'EsmuM':_0x21e953(0x817,0x71b,0x5e5,0x331),'vjKVX':_0x4708c5(0x7fa,0x4c0,0x5b9,0x61f)},{dl_link:_0x5be009,filesizeF:_0x377490,filesize:_0x409a82,title:_0x16a2fd,thumb:_0x1d22a3}=_0x171740;let _0x5db6e8=await getBuffer(_0x1d22a3);if(_0x3aeed7['tzTzY'](Number,_0x377490[_0x21e953(0x5f3,0x485,0x49b,0x559)](_0x3aeed7['DSEtQ'],''))>=-0x147*-0xb+0x11b6+-0xa7f*0x3)return await alpha['send5ButLo'+'c'](from,_0x4708c5(0x3ec,0x6ca,0x6d6,0x5e3)+'TUBE\x20VIDEO'+_0x4708c5(0x7a8,0xa11,0x7aa,0x61a)+'🎀\x20Title\x20:*'+'\x20'+_0x16a2fd+(_0x21e953(0x748,0x3ae,0x564,0x517)+'*\x20')+_0x377490+('\x0a*📺\x20Ext\x20:*'+_0x4708c5(0x6ca,0x95d,0x7dc,0x73e)+_0x4708c5(0x3f8,0x66c,0x6b7,0x8ba)+_0x21e953(0x4cb,0x3ff,0x243,0x261)+'Url\x20:*\x20')+_0x5be009+enter+enter+(_0x4708c5(0x855,0x7b2,0x835,0xa43)+_0x4708c5(0x899,0x5af,0x87e,0x5a8)+_0x21e953(0x330,0x605,0x584,0x712)+'\x20disajikan'+_0x21e953(0x48f,0x10c,0x382,0x343)+_0x4708c5(0x47b,0x331,0x49e,0x328)),'©\x20'+ownername,_0x5db6e8,[{'urlButton':{'displayText':_0x3aeed7['YqJbj'],'url':''+_0x5be009}}]);let _0xfcf1f=_0x21e953(0x5b2,0x4f3,0x394,0x3ab)+'TUBE\x20VIDEO'+_0x21e953(0x242,0x1d9,0x468,0x4f4)+_0x21e953(0x4be,0x230,0x50c,0x4a2)+'\x20'+_0x16a2fd+(_0x4708c5(0x6fa,0x94a,0x8a6,0x82c)+'*\x20')+_0x377490+('\x0a*📺\x20Ext\x20:*'+_0x4708c5(0x7d7,0x5f1,0x7dc,0x8db)+_0x21e953(0x608,0x49c,0x375,0x1c5)+_0x4708c5(0x62b,0x533,0x585,0x4ff)+'Url\x20:*\x20')+q;_0xfcf1f+='';const _0x5d3ed9={};_0x5d3ed9[_0x21e953(0x47a,0x71a,0x471,0x256)+'t']=_0x3aeed7['ilhAs'],_0x5d3ed9[_0x21e953(0x316,0x61a,0x3c3,0x488)]=''+youtube;const _0x329023={};_0x329023['urlButton']=_0x5d3ed9;const _0x27ffc9={};_0x27ffc9['displayTex'+'t']=_0x3aeed7[_0x4708c5(0x620,0x2cd,0x559,0x2da)],_0x27ffc9['id']=_0x3aeed7[_0x4708c5(0x86d,0xc70,0xa3f,0xc95)];const _0x3b7421={};_0x3b7421['quickReply'+_0x4708c5(0x818,0xbc2,0xa2e,0x99f)]=_0x27ffc9;const _0x185c2b={};_0x185c2b[_0x4708c5(0x733,0x833,0x7b3,0x6ae)+'t']=_0x3aeed7[_0x4708c5(0x7dc,0x876,0x8c9,0xa38)],_0x185c2b['id']=_0x3aeed7[_0x21e953(0x43c,0xff,0x16b,0x28f)];function _0x4708c5(_0x59a250,_0x2f773a,_0x51989e,_0x3ea93a){return _0x3b4225(_0x59a250,_0x51989e-0x40d,_0x51989e-0x185,_0x3ea93a-0x109);}const _0x1a4ad8={};_0x1a4ad8[_0x4708c5(0x53e,0x45e,0x47b,0x776)+_0x21e953(0x6bc,0x713,0x6ec,0x9dd)]=_0x185c2b;function _0x21e953(_0x56ffe0,_0x2f2569,_0x217a7d,_0xed1a6c){return _0x4077ab(_0x2f2569,_0x217a7d- -0x3a1,_0x217a7d-0x40,_0xed1a6c-0x1c2);}var _0x1ed5a5=[_0x329023,_0x3b7421,_0x1a4ad8];await alpha['send5ButLo'+'c'](from,_0xfcf1f,'©\x20'+ownername,_0x5db6e8,_0x1ed5a5);const _0x5d7d3d={};_0x5d7d3d[_0x21e953(0x1aa,0x611,0x3c3,0x346)]=_0x5be009;const _0xd56a2a={};_0xd56a2a[_0x4708c5(0xb9d,0x794,0xa3c,0xd27)]=_0x5d7d3d,_0xd56a2a[_0x4708c5(0xaed,0xb6e,0x92b,0x6a4)]=_0x3aeed7[_0x4708c5(0x55f,0x8d3,0x606,0x366)],_0xd56a2a['fileName']=_0x16a2fd+_0x4708c5(0xa55,0x5b6,0x83e,0xa68),alpha[_0x21e953(0x98a,0x495,0x691,0x63d)+'e'](m[_0x4708c5(0x2ef,0x7db,0x551,0x5ed)],_0xd56a2a,{'quoted':m});});}break;case _0x4077ab(0xaaf,0x833,0x784,0x72c):if(!q)return reply(lang[_0x4077ab(0x6f0,0x8b7,0xb70,0x8f7)+'t'](prefix));reply(lang[_0x3b4225(0x5c8,0x405,0x42f,0x5d8)]()),res=await yts(''+q),lok=await getBuffer(res[_0x3b4225(0x93,0xc7,-0x1c5,0x215)][-0xe1d+0x767+-0x2*-0x35b][_0x4077ab(0x557,0x688,0x3c0,0x733)]);let thumbInfo=_0x4077ab(0x4a0,0x52d,0x6fb,0x30b)+'UTUBE\x20PLAY'+_0x4077ab(0x6ed,0x719,0x472,0x6f3)+_0x4077ab(0x2c8,0x557,0x6bd,0x3aa)+'*\x20'+res[_0x3b4225(0x23f,0xc7,-0x62,0x20)][0x162f+0x1e01+0x8*-0x686][_0x4077ab(0x3de,0x61c,0x7d3,0x4bc)]+(_0x4077ab(0xca2,0xa9c,0xd60,0x9ef)+_0x3b4225(0x129,0x3aa,0x38f,0x35c))+res['all'][0xc0a+0x25*-0x6d+0x3b7][_0x3b4225(0x3f7,0x418,0x689,0x1fc)]+(_0x3b4225(0x45d,0x453,0x32c,0x3c6)+'on\x20:*\x20')+res['all'][0x22a7+-0x1bb5*0x1+0x7*-0xfe][_0x4077ab(0x671,0x586,0x794,0x610)]+(_0x3b4225(0xf0,0xbc,-0x1b5,0x97)+_0x4077ab(0x915,0x7d8,0x535,0x669))+res[_0x3b4225(0x254,0xc7,0xb7,0x1c4)][0x170e+-0x1394+-0x37a]['author'][_0x4077ab(0x6af,0x561,0x630,0x7b2)]+(_0x3b4225(0xf1,0x39f,0x4d2,0x282)+_0x3b4225(0x65,0x203,0x471,0x39c))+res['all'][-0x1fb0+0x261b+-0x1*0x66b][_0x3b4225(-0x15b,0xac,0x40,-0x202)]+(_0x4077ab(0x85b,0x92a,0xbcb,0x8c9)+_0x3b4225(0x408,0x50a,0x657,0x7de))+res['videos'][0x5*-0x179+0xf1*-0x1f+0x248c*0x1][_0x4077ab(0x713,0x764,0x8a9,0xa56)];const _0x74fd22={};_0x74fd22['degreesLat'+_0x3b4225(0xbc,0x6d,-0x12d,0x313)]=0x0,_0x74fd22['degreesLon'+_0x4077ab(0x739,0xa16,0xa7a,0xcd2)]=0x0,_0x74fd22[_0x4077ab(0xb99,0x8ed,0x8fd,0xa0c)+'ail']=lok;const _0x5d362e={};_0x5d362e[_0x3b4225(0x376,0x3a6,0x2ac,0x4de)+'t']=_0x4077ab(0xadc,0xa44,0xc07,0xb29),_0x5d362e[_0x3b4225(0x5d2,0x2f8,0x3ae,0x5e2)]=''+myweb;const _0x26529b={};_0x26529b['urlButton']=_0x5d362e;const _0x1f5747={};_0x1f5747[_0x3b4225(0x37a,0x3a6,0x26f,0x187)+'t']=_0x4077ab(0x67f,0x865,0x801,0x761),_0x1f5747['url']=''+github;const _0x3b7fac={};_0x3b7fac[_0x4077ab(0x443,0x529,0x2f9,0x5cb)]=_0x1f5747;const _0x256c02={};_0x256c02[_0x4077ab(0x705,0x812,0x816,0xae5)+'t']=_0x4077ab(0x9ad,0x77e,0x48f,0x5dd),_0x256c02['id']=_0x3b4225(0x2b8,0x462,0x5ba,0x741)+res[_0x4077ab(0x520,0x7c3,0x944,0x90a)][-0xc5*0xe+-0xd65+0x182c][_0x4077ab(0x902,0x764,0xa23,0x511)];const _0x533662={};_0x533662['quickReply'+'Button']=_0x256c02;const _0x3fb969={};_0x3fb969[_0x3b4225(0x5df,0x3a6,0x5e8,0x5c8)+'t']=_0x4077ab(0x60a,0x762,0x47b,0x6ef),_0x3fb969['id']=_0x3b4225(0x3a0,0x3c9,0x477,0x224)+res[_0x4077ab(0x5c2,0x7c3,0x931,0x5a6)][0x223*0x3+-0x79*-0x3f+-0x242f]['url'];const _0x4b3db1={};_0x4b3db1[_0x4077ab(0x487,0x4da,0x253,0x327)+_0x4077ab(0x82b,0xa8d,0xca4,0x798)]=_0x3fb969;const _0x4487a1={};_0x4487a1[_0x3b4225(0x3af,0x3ab,0x40c,0x3ad)+'ssage']=_0x74fd22,_0x4487a1[_0x3b4225(0x553,0x2bf,0x283,0x52b)+'ntentText']=thumbInfo,_0x4487a1[_0x4077ab(0x869,0x600,0x58a,0x8eb)+_0x4077ab(0x977,0x8d0,0x6b2,0xb98)]='©\x20'+ownername,_0x4487a1[_0x4077ab(0xa49,0x7ed,0x838,0x6b1)+_0x4077ab(0x529,0x5d3,0x7a5,0x67f)]=[_0x26529b,_0x3b7fac,_0x533662,_0x4b3db1];const _0x57fea1={};_0x57fea1[_0x4077ab(0x622,0x8a9,0x603,0x9e7)+_0x4077ab(0x9b1,0x908,0x63f,0xa28)]=_0x4487a1;const _0x220fab={};_0x220fab[_0x3b4225(0x7e2,0x58a,0x881,0x84d)+_0x3b4225(0x582,0x313,0x100,0x566)]=_0x57fea1;var buatpesann=generateWAMessageFromContent(m[_0x3b4225(0x249,0x144,0x31e,0x2df)],_0x220fab,{'quoted':m});await alpha[_0x4077ab(0x84d,0x6ff,0x4d7,0x84b)+'ge'](m[_0x4077ab(0x840,0x5b0,0x359,0x897)],buatpesann[_0x4077ab(0x7b0,0x768,0x889,0x8e5)],{'messageId':buatpesann[_0x3b4225(0x86b,0x5af,0x509,0x773)]['id']});break;case'sc':case _0x3b4225(0x11,0x217,0x5e,0x60):{let gam=await getBuffer(picak+(_0x3b4225(0x10c,0xd9,-0xd1,0x2d)+'e'));const _0x5b4373={};_0x5b4373[_0x3b4225(0x5b8,0x3a6,0x35a,0x60a)+'t']=_0x4077ab(0x6ca,0x932,0xb85,0x9bb),_0x5b4373['url']=_0x3b4225(0x2e0,0x10f,-0x1d7,-0x30)+_0x4077ab(0xbce,0xa75,0x9f7,0xa35)+_0x4077ab(0x8aa,0x781,0x48d,0x72b)+'c';const _0x339d1a={};_0x339d1a[_0x4077ab(0x7b7,0x529,0x474,0x5e0)]=_0x5b4373;var but=[_0x339d1a];const _0xd81ac9={};_0xd81ac9[_0x4077ab(0xaad,0x9b8,0x711,0x6be)]=m[_0x3b4225(-0x91,0x144,-0xf9,-0x119)],_0xd81ac9[_0x4077ab(0x79c,0x8e9,0x70d,0xb68)]=m,await alpha[_0x3b4225(0x100,0x10b,-0xbb,-0x15c)+'c'](from,lang['source'](),'©\x20'+ownername,gam,but,_0xd81ac9);}break;case _0x4077ab(0x708,0x888,0x88c,0x5a3):case _0x3b4225(0x87c,0x5f4,0x3b1,0x6d3):case _0x4077ab(0x5d8,0x548,0x32d,0x674):case _0x3b4225(0x348,0x317,0x5f6,0x372):case _0x4077ab(0x768,0x9aa,0xb5d,0x72e):case _0x3b4225(0x6c6,0x511,0x70c,0x643):case'glass':case _0x3b4225(0x2c7,0x43b,0x51c,0x48d):case _0x4077ab(0x578,0x6c1,0x67b,0x812):case'blurple2':case _0x3b4225(0x5af,0x35f,0x40b,0x92):case _0x3b4225(0x94,0x104,-0x1ce,0x206):case'triggered':case _0x3b4225(0x322,0x58c,0x675,0x748):case'greyscale':case _0x3b4225(0x127,0xc8,0x188,-0xce):case _0x4077ab(0x52e,0x4e9,0x2e4,0x226):case'invertgrey'+_0x4077ab(0x88f,0x841,0x5cd,0x733):{if(!quoted)return reply(_0x4077ab(0x6b4,0x748,0x5db,0x6e4)+_0x3b4225(0x39c,0x25f,0x22e,0x324)+_0x4077ab(0x454,0x6ce,0x8a0,0x847)+_0x3b4225(0x52a,0x49f,0x43f,0x750)+(prefix+command));if(!/webp/[_0x4077ab(0x77e,0x744,0x5c9,0x603)](mime)&&/image/['test'](mime)){reply(lang[_0x4077ab(0x586,0x871,0x594,0x5a5)]());let sefek=await alpha[_0x3b4225(0x616,0x59f,0x386,0x2be)+_0x4077ab(0xa36,0x9e8,0xb0b,0x81d)+_0x4077ab(0x544,0x670,0x958,0x471)](quoted),fatz=await TelegraPh(sefek),stikfek=_0x4077ab(0x9af,0xa24,0x93f,0x75f)+_0x4077ab(0x857,0x85a,0x63d,0xb13)+'api.ml/can'+_0x4077ab(0x530,0x5b3,0x579,0x618)+command+_0x4077ab(0x687,0x782,0x61c,0x7a8)+fatz;const _0x389555={};_0x389555['packname']=global[_0x4077ab(0x966,0x6a8,0x774,0x74c)],_0x389555[_0x3b4225(0x225,0x4a2,0x4ec,0x589)]=global[_0x4077ab(0x808,0x90e,0x664,0x934)];let fatmd=await alpha[_0x3b4225(0x273,0x13d,0x258,0x62)+'sSticker'](m[_0x4077ab(0x303,0x5b0,0x7fe,0x597)],stikfek,m,_0x389555);await fs[_0x3b4225(0x56a,0x270,0xfb,0x2da)](fatmd),await fs[_0x4077ab(0x500,0x6dc,0x491,0x5f8)](sefek);}else{if(/webp/[_0x3b4225(-0x18,0x2d8,0x1e5,0x29e)](mime)){reply(lang['wait']());let media=await alpha[_0x4077ab(0x934,0xa0b,0x787,0xb48)+'dSaveMedia'+_0x4077ab(0x65a,0x670,0x566,0x655)](quoted),ran=await(_0x3b4225(0x57c,0x503,0x392,0x74b)+_0x3b4225(0x767,0x4e2,0x332,0x45b))+getRandom('.png');exec(_0x4077ab(0x4a2,0x66e,0x7bc,0x6ad)+media+'\x20'+ran,_0x363ca7=>{const _0x4c3ac3={'EgbpM':function(_0x3569e2,_0x10e44c){return _0x3569e2(_0x10e44c);},'HswRE':function(_0x150af2,_0x2d1c4d){return _0x150af2(_0x2d1c4d);}};function _0x4001c8(_0x4df43f,_0x5ca0b2,_0x2f116b,_0x37b997){return _0x3b4225(_0x37b997,_0x4df43f-0x31e,_0x2f116b-0xeb,_0x37b997-0xdf);}fs['unlinkSync'](media);function _0x3cf84a(_0x44664e,_0x57cf88,_0x4fff52,_0x3bf351){return _0x3b4225(_0x4fff52,_0x3bf351-0x191,_0x4fff52-0x113,_0x3bf351-0x2e);}if(_0x363ca7)return _0x4c3ac3[_0x4001c8(0x8df,0x68d,0xb57,0x78b)](reply,_0x3cf84a(0x567,0x1e0,0x190,0x3bb));_0x4c3ac3[_0x3cf84a(0x5c0,0x5a9,0x679,0x399)](TelegraPh,ran)[_0x3cf84a(0x60c,0x515,0x1fd,0x427)](async _0x3befa4=>{function _0x29af5a(_0x47b032,_0x185521,_0xa2ddad,_0x3a4cd2){return _0x3cf84a(_0x47b032-0xde,_0x185521-0x67,_0x47b032,_0xa2ddad-0x138);}let _0x176e63=_0x2af107(0x9eb,0xb50,0x8bf,0x8de)+'me-random-'+'api.ml/can'+_0x2af107(0x57a,0x5e7,0x62d,0x7a6)+command+_0x2af107(0x749,0x9ba,0x639,0x4e3)+_0x3befa4;const _0x2ead85={};_0x2ead85['packname']=global['packname'],_0x2ead85['author']=global['author'];function _0x2af107(_0x122d37,_0x4df6c0,_0x399205,_0x43733e){return _0x4001c8(_0x122d37-0x115,_0x4df6c0-0x148,_0x399205-0x7e,_0x399205);}let _0x8a0044=await alpha[_0x29af5a(0x6ba,0x243,0x406,0x441)+'sSticker'](m[_0x29af5a(0x441,0x6c4,0x40d,0x23d)],_0x176e63,m,_0x2ead85);await fs['unlinkSync'](_0x8a0044),await fs[_0x2af107(0x6a3,0x669,0x84f,0x69d)](ran);});});}else reply(_0x4077ab(0x973,0x748,0x789,0x8bf)+_0x4077ab(0x858,0x6cb,0x7a0,0x56e)+'cker\x20Denga'+_0x4077ab(0xaa6,0x90b,0x82d,0x9f5)+(prefix+command));}}break;case _0x4077ab(0x5b6,0x848,0xa6e,0x87a):case _0x3b4225(0x64e,0x374,0x99,0x1ee):case _0x3b4225(0x1ff,0x2e2,0x59a,0x225):case'burn':case _0x3b4225(0x6c6,0x5be,0x7d5,0x6d2):case'glitch':case _0x3b4225(0x1e,0x2be,0x313,0x276):case'sniper':case _0x3b4225(0x150,0x166,0x2f9,0x1e9):case _0x3b4225(0xf0,0x308,0x47d,0x3f6):case _0x3b4225(0x1ca,0x366,0xd8,0x346):case _0x4077ab(0x8df,0x9c1,0xb93,0x899):case _0x3b4225(0x3d0,0x1d8,0x365,0x36d):case _0x3b4225(0x19c,0x3a4,0x21f,0x34d):case _0x4077ab(0x3a4,0x4e3,0x7da,0x202):case _0x3b4225(-0x1da,0xe1,0x3a4,-0x1d2):case _0x3b4225(0x528,0x5b0,0x2c0,0x748):case _0x3b4225(0x6a0,0x3cd,0x144,0x61f):case _0x4077ab(0x576,0x7e6,0xa43,0xa81):case _0x4077ab(0x7cf,0x59c,0x45a,0x7bb):case _0x4077ab(0x7f8,0xa4c,0x890,0x76f):case _0x4077ab(0x7e9,0x91b,0xa1f,0x9c2):case _0x4077ab(0x873,0x64b,0x6c5,0x715):case _0x4077ab(0x615,0x7a0,0x4ca,0x6de):case _0x3b4225(0x20,0x141,-0x15a,0x147):case _0x3b4225(0x501,0x2e9,0xe9,0xc6):case _0x4077ab(0x385,0x649,0x49d,0x8fb):case _0x4077ab(0x510,0x677,0x611,0x3b0)+_0x4077ab(0x400,0x6ae,0x4b4,0x651):case _0x3b4225(0x37d,0x5ca,0x704,0x369)+_0x3b4225(-0x14e,0x56,-0x21c,-0x20b):{if(!quoted)return reply('Kirim/Repl'+_0x4077ab(0x8ac,0x6cb,0x7fb,0x93d)+_0x3b4225(0x1fe,0x262,0x193,-0x62)+'n\x20Caption\x20'+(prefix+command));if(!/webp/[_0x3b4225(0x487,0x2d8,0x1f5,0x456)](mime)&&/image/['test'](mime)){reply(lang['wait']());var ini_gen=''+command,ciclee=await alpha[_0x4077ab(0x9d7,0xa0b,0x7ab,0xa4f)+'dSaveMedia'+'Message'](quoted),annnu=await TelegraPh(ciclee);const _0x36f68f={};_0x36f68f[_0x4077ab(0x7c9,0x764,0x518,0x877)]=annnu;var imoj=await ameApi[_0x3b4225(0x6fd,0x5de,0x85f,0x643)](ini_gen,_0x36f68f)[_0x4077ab(0x636,0x702,0x956,0x99d)](async _0x2bf50f=>{const _0x185bcd={'bbitd':_0x5c7769(0x2f1,0x3e5,0x525,0x4d4),'MeEum':function(_0x51202a,_0x13a501){return _0x51202a+_0x13a501;},'sYieE':function(_0xa0618,_0x23a9da){return _0xa0618(_0x23a9da);},'AnEey':'.png'},_0x24a373=_0x185bcd[_0x5c7769(0x38e,0x4ca,0x66d,0x660)][_0x3dfaee(-0x35d,-0x130,-0x25a,-0x442)]('|');function _0x3dfaee(_0x51129d,_0x4109eb,_0x40baed,_0xa9fef8){return _0x4077ab(_0xa9fef8,_0x40baed- -0x769,_0x40baed-0x146,_0xa9fef8-0x87);}let _0x36c12a=0x2702+-0x2*0x425+-0x1eb8*0x1;function _0x5c7769(_0xd1664c,_0x3e27ae,_0x587028,_0x1bc4a7){return _0x3b4225(_0xd1664c,_0x587028-0x23a,_0x587028-0x197,_0x1bc4a7-0x13e);}while(!![]){switch(_0x24a373[_0x36c12a++]){case'0':await fs['unlinkSync'](emm);continue;case'1':await fs[_0x5c7769(0x653,0x7a3,0x4aa,0x56f)](ciclee);continue;case'2':emm=_0x185bcd['MeEum'](await(_0x5c7769(0x375,0x7b5,0x4be,0x748)+_0x5c7769(0x58c,0x3b2,0x2af,0x37c)),_0x185bcd[_0x5c7769(0x8bf,0x8bb,0x5cb,0x532)](getRandom,_0x185bcd['AnEey']));continue;case'3':alpha['sendMessag'+'e'](m[_0x3dfaee(-0x11,-0x46e,-0x1b9,-0x320)],{'image':fs[_0x5c7769(0x707,0x34b,0x53b,0x527)+'nc'](emm),'caption':lang['ok']()},{'quoted':m});continue;case'4':await fs[_0x5c7769(0x4c2,0x442,0x716,0x78a)+_0x5c7769(0x6fe,0x5dc,0x71a,0x734)](emm,_0x2bf50f);continue;}break;}});}else{if(/webp/[_0x3b4225(0x58e,0x2d8,0x4b,0xe7)](mime)){reply(lang[_0x4077ab(0xa11,0x871,0x985,0xb17)]());var inigen=''+command;let media=await alpha[_0x4077ab(0xbe3,0xa0b,0xa30,0x958)+_0x4077ab(0x776,0x9e8,0xca3,0xb63)+_0x3b4225(0x253,0x204,0x67,0x14c)](quoted),ran=await('./image/to'+'img-')+getRandom(_0x4077ab(0x860,0x6a6,0x768,0x3ac));exec(_0x3b4225(0x21e,0x202,0xb9,0x13c)+media+'\x20'+ran,_0x494d42=>{function _0x4426a9(_0x9d7524,_0x2d1a9a,_0x1cd3de,_0x3deab4){return _0x4077ab(_0x2d1a9a,_0x3deab4- -0x46,_0x1cd3de-0x65,_0x3deab4-0x18);}const _0x20ceb8={'jsfpY':'3|4|2|0|1','fdCor':function(_0xd17cd,_0x203e30){return _0xd17cd+_0x203e30;},'krxiN':'./image/im'+'geff-','MFfVm':'.png','CbFXJ':function(_0x3863d6,_0x1a2e99){return _0x3863d6(_0x1a2e99);},'GraPJ':_0x3c53a8(0x479,0x1ac,0x37e,0xba),'sIHFq':function(_0x36c6f2,_0x1990f2){return _0x36c6f2(_0x1990f2);}};if(_0x494d42)return _0x20ceb8['CbFXJ'](reply,_0x20ceb8[_0x4426a9(0x19c,0x540,0x666,0x478)]);function _0x3c53a8(_0x36546c,_0x347d44,_0x32c66a,_0x76bb0e){return _0x4077ab(_0x347d44,_0x32c66a- -0x50b,_0x32c66a-0x1ec,_0x76bb0e-0x39);}_0x20ceb8[_0x3c53a8(0x1ed,0x237,0x363,0x4aa)](TelegraPh,ran)[_0x3c53a8(0x1b3,0x364,0x1f7,0x343)](async _0x4aeb68=>{const _0x599ee3={};function _0x4310ef(_0x4ff665,_0x517aaf,_0x4787ab,_0x2d4eb5){return _0x4426a9(_0x4ff665-0x12b,_0x517aaf,_0x4787ab-0x189,_0x4787ab- -0x378);}function _0x436c73(_0x5281a3,_0x4ab09e,_0x31b2ed,_0x2150d5){return _0x3c53a8(_0x5281a3-0x17b,_0x4ab09e,_0x5281a3- -0x23a,_0x2150d5-0x176);}_0x599ee3[_0x436c73(0x1f,-0x176,0x18d,-0x1de)]=_0x4aeb68,ameApi[_0x4310ef(0x8f9,0x482,0x68c,0x719)](inigen,_0x599ee3)[_0x4310ef(0x1d9,0xe5,0x344,0x536)](async _0x3885e4=>{const _0x5df179=_0x20ceb8[_0x50b522(0x5a2,0x34a,0x384,0x650)][_0x50b522(0x390,0x3f4,0xba,0x4fc)]('|');function _0x50b522(_0xdb885b,_0x2e8594,_0x4c1c10,_0x1bba17){return _0x436c73(_0xdb885b-0x5c6,_0x4c1c10,_0x4c1c10-0x105,_0x1bba17-0x57);}let _0x1e6142=-0x637+-0x1a24*0x1+-0x2f1*-0xb;function _0x5f205c(_0x48f175,_0x528725,_0x46aeaf,_0x21b27a){return _0x436c73(_0x21b27a-0x654,_0x528725,_0x46aeaf-0xfc,_0x21b27a-0x198);}while(!![]){switch(_0x5df179[_0x1e6142++]){case'0':await fs[_0x50b522(0x55d,0x4ac,0x4b6,0x370)](emh);continue;case'1':await fs['unlinkSync'](ran);continue;case'2':alpha[_0x5f205c(0x90e,0xbb4,0x8f9,0x941)+'e'](m[_0x5f205c(0x24d,0x6c2,0x65b,0x4bf)],{'image':fs[_0x5f205c(0x977,0x4a7,0x64a,0x67c)+'nc'](emh),'caption':lang['ok']()},{'quoted':m});continue;case'3':emh=_0x20ceb8[_0x50b522(0x482,0x462,0x3ba,0x1e6)](await _0x20ceb8[_0x5f205c(0x6e8,0x2e0,0x286,0x49d)],getRandom(_0x20ceb8[_0x5f205c(0x641,0x51b,0xa62,0x803)]));continue;case'4':await fs[_0x50b522(0x7c9,0xac3,0x523,0x917)+_0x5f205c(0x5b5,0x57f,0x930,0x85b)](emh,_0x3885e4);continue;}break;}});}),fs[_0x4426a9(0x990,0x4e5,0x3ea,0x696)](media);});}else reply('Kirim/Repl'+_0x4077ab(0x9bf,0x6cb,0x796,0x543)+_0x4077ab(0x48b,0x6ce,0x918,0x415)+'n\x20Caption\x20'+(prefix+command));}}break;case _0x3b4225(-0x189,0x4a,-0x13d,0x114):case _0x4077ab(0x6a2,0x648,0x857,0x7d7):case _0x3b4225(0x5ce,0x3dd,0x4d2,0x186):{if(!text)return reply('Kirim\x20peri'+'ntah\x20'+(prefix+command)+('\x20https://g'+_0x3b4225(0x5aa,0x48b,0x2ae,0x2f2)+_0x4077ab(0x5aa,0x5c0,0x69b,0x45c)));let gitRegex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!gitRegex['test'](args[0xb*0x1bb+-0x4f0*0x2+0x1d5*-0x5]))return reply(_0x3b4225(0x3ce,0x1e9,0x2eb,0x3fc)+_0x3b4225(0x634,0x62a,0x824,0x5f3)+'b');reply(lang[_0x3b4225(0x358,0x405,0x4fc,0x2a6)]());let [,user,repo]=args[-0x105*-0x7+-0x1*0x1767+0x2b6*0x6][_0x4077ab(0x549,0x7b7,0x52e,0xa4c)](gitRegex)||[];repo=repo[_0x4077ab(0x884,0x83c,0x676,0x7ce)](/.git$/,'');let url=_0x4077ab(0x704,0x837,0x9ac,0xac9)+_0x4077ab(0xa26,0xa81,0xc47,0x91c)+_0x3b4225(0x3f3,0x5cf,0x6fe,0x5ae)+user+'/'+repo+'/zipball';const _0x15f255={};_0x15f255['method']='HEAD';let filename=(await fetch(url,_0x15f255))[_0x3b4225(0x59f,0x30a,0x488,0x2ca)][_0x4077ab(0x546,0x611,0x397,0x7a6)](_0x4077ab(0x6d5,0x93d,0x848,0x9f7)+'sposition')['match'](/attachment; filename=(.*)/)[-0x155f*0x1+0x58c+0xfd4*0x1];alpha[_0x3b4225(0x50,0x2d6,0x3b6,0x484)](m['chat'],url,filename,m);}break;case'gitrepo':{if(!args[-0x26ab+-0x1270+0x391b])return reply(_0x3b4225(0x695,0x5ff,0x835,0x433)+'ntah\x20'+(prefix+command)+(_0x4077ab(0x6e8,0x6a3,0x606,0x943)+_0x3b4225(0x316,0x4f0,0x24b,0x6fd)+_0x4077ab(0x5b4,0x766,0x6f6,0x8f6)));if(!args[-0x2*0x8d3+-0x4b*0x1b+0x1990])return reply('Kirim\x20peri'+'ntah\x20'+(prefix+command)+('\x20*user*\x20*r'+_0x4077ab(0x826,0x95c,0x923,0x990)+_0x4077ab(0x818,0x766,0x65b,0x71d)));if(!args[-0x1f*0x5b+-0x117*-0x1b+-0x1266])return reply(_0x3b4225(0x331,0x5ff,0x36f,0x4d5)+_0x3b4225(0xc1,0xc5,0x1de,-0xfc)+(prefix+command)+('\x20*user*\x20*r'+_0x4077ab(0xade,0x95c,0xb54,0x98f)+'ch*'));let url='https://gi'+'thub.com/'+args[-0x1ef2+-0x21d*0xa+0x3414]+'/'+args[0xf1*-0x4+0x7ef*-0x1+0xbb4]+(_0x3b4225(0x3bd,0x513,0x59f,0x6fb)+'efs/heads/')+args[-0x25d6+-0x22b7*0x1+0x488f]+_0x4077ab(0x7e1,0x8c9,0xb5e,0x97b);reply(lang[_0x3b4225(0x3d8,0x405,0x3ae,0x6e9)]()),alpha[_0x3b4225(0x4d4,0x2d6,0x5ae,0x157)](m['chat'],url,args[-0x1290+0x1f05*-0x1+-0x3195*-0x1]+'-'+args[0xcd7+-0x19d8+0xd02]+'-'+args[-0x2668+-0x1fe5+-0x464f*-0x1]+'.',m);}break;case'igstalk':{if(!text)return reply(_0x4077ab(0x630,0x73e,0x641,0x577)+'a?');var halzmal=text;const ig=require('instatouch'),_0x449eb7={};_0x449eb7[_0x3b4225(0x259,0x3b8,0x642,0x65f)]=0x0,_0x449eb7[_0x4077ab(0x782,0x681,0x6df,0x5a4)]=_0x3b4225(0x29b,0xc7,0x343,0x17b),_0x449eb7[_0x4077ab(0xa5d,0x95e,0x9a7,0xc0c)]=0x0,_0x449eb7[_0x3b4225(0x370,0x1d0,0xb8,-0xcb)]=_0x3b4225(0x53a,0x5d9,0x63c,0x511)+_0x3b4225(0x60f,0x55e,0x2bd,0x849)+_0x4077ab(0x591,0x5bb,0x411,0x659)+_0x4077ab(0x5e3,0x7a7,0x4f0,0x63c);const options=_0x449eb7,igstalk=_0x50ae79=>new Promise((_0x3a7454,_0x24c7c5)=>{const _0x18cc23={'GEezI':function(_0x752c13,_0x3be923){return _0x752c13(_0x3be923);},'izdrc':_0x96d022(0x8f2,0x4f9,0x776,0x648)+_0x96d022(0x3b9,0x120,0x2b8,0x34b),'rpNre':_0x96d022(0x855,0x514,0x2ff,0x584),'VnjXe':_0x96d022(0x149,0x3ae,-0xa9,0x24b),'pkFFU':function(_0x6195f1,_0x8c6d5f){return _0x6195f1===_0x8c6d5f;},'EVEsD':_0x96d022(0x45f,0x5ef,0x633,0x41a)+_0x96d022(0x244,0x34f,0x2d6,0x472),'ykPOc':'EHmpk','NwtwP':'QBLRC'};function _0x96d022(_0x25ae6f,_0x9b1ddd,_0x2c41cd,_0x1cffd6){return _0x3b4225(_0x9b1ddd,_0x1cffd6-0x9f,_0x2c41cd-0x173,_0x1cffd6-0xf3);}function _0xbd9f95(_0x1c0c27,_0x180a75,_0x2c5b4c,_0x262b4e){return _0x3b4225(_0x1c0c27,_0x180a75- -0x14b,_0x2c5b4c-0x61,_0x262b4e-0x198);}user=_0x50ae79[_0xbd9f95(0x2d3,0x285,0x4be,0x4a1)](/@/gi,'');(_0x18cc23[_0x96d022(0x746,0x8c5,0x46a,0x64a)](user,undefined)||!user)&&_0x18cc23[_0x96d022(0x279,0x49d,0x4b5,0x3ba)](_0x24c7c5,_0x18cc23[_0xbd9f95(0x328,0x489,0x657,0x628)]);try{if('JlFGP'===_0x96d022(0x43c,0x5b5,0x457,0x2d4))ig[_0x96d022(-0x81,-0x17c,0x353,0x11b)+'a'](user,options)['then'](async _0x421e80=>{const _0x3bfd25={};_0x3bfd25[_0x2c3a2f(0xe9,0x1d1,-0xf2,0x151)]=_0x421e80[_0xe7d1ff(0x677,0x890,0x75c,0x879)][_0x2c3a2f(-0x21c,0x207,-0x1b3,0x21)][_0x2c3a2f(-0x303,0x90,-0x2e5,-0x268)+_0xe7d1ff(0x31c,0x407,0x5f9,0xf1)],_0x3bfd25['high']=_0x421e80['graphql']['user']['profile_pi'+_0xe7d1ff(0x396,0x9b,0x600,0x5af)];const _0xc71951={};_0xc71951[_0xe7d1ff(0x481,0x669,0x645,0x2b7)]=_0x421e80['graphql'][_0xe7d1ff(0x4a5,0x329,0x74c,0x319)]['external_u'+'rl'],_0xc71951['id']=_0x421e80['graphql'][_0xe7d1ff(0x4a5,0x6b2,0x6ad,0x1dc)]['id'],_0xc71951[_0x2c3a2f(-0x257,0x27d,-0x270,0x7)]=user,_0xc71951[_0xe7d1ff(0x2c5,0x492,0x497,0x17c)]=_0x421e80[_0x2c3a2f(0x8b,0x198,0x34,0x1f3)][_0x2c3a2f(0xd9,0x29d,-0x1fd,0x21)]['full_name'],_0xc71951[_0x2c3a2f(0xfd,0x1d7,-0x2cb,-0xd3)+'le']=_0xe7d1ff(0x34c,0x38f,0x3da,0x5b7)+'stagram.co'+'m/'+user;function _0xe7d1ff(_0x44468e,_0x524a91,_0xa97f45,_0x3ddda2){return _0xbd9f95(_0xa97f45,_0x44468e-0x2d4,_0xa97f45-0x19f,_0x3ddda2-0x8a);}_0xc71951[_0x2c3a2f(0x1b0,-0x10b,0x221,0x101)]=_0x421e80[_0xe7d1ff(0x677,0x63d,0x5d5,0x859)][_0x2c3a2f(-0x106,-0x16,-0x1d0,0x21)]['is_private'],_0xc71951[_0x2c3a2f(0x3b2,0xec,0x11f,0xf9)]=_0x421e80['graphql'][_0x2c3a2f(0xbb,0x25,-0x53,0x21)][_0x2c3a2f(0xc5,0x3cc,0x116,0x1a6)+'d'],_0xc71951[_0xe7d1ff(0x7a3,0x502,0x9c7,0x72c)]=_0x421e80[_0x2c3a2f(0x38c,0x2a0,-0xda,0x1f3)]['user'][_0x2c3a2f(0x169,0x34c,-0x100,0xcf)],_0xc71951[_0xe7d1ff(0x29e,0x48a,0x45b,0xb)]=_0x421e80['graphql'][_0xe7d1ff(0x4a5,0x4ac,0x47e,0x1fa)]['edge_follo'+_0x2c3a2f(-0x10d,-0x12,-0x205,0x9a)]['count'];function _0x2c3a2f(_0x442d86,_0x1e9b11,_0x2b9ee6,_0x10034a){return _0xbd9f95(_0x1e9b11,_0x10034a- -0x1b0,_0x2b9ee6-0xd0,_0x10034a-0x60);}_0xc71951[_0xe7d1ff(0x4f0,0x375,0x3fb,0x6dc)]=_0x421e80['graphql'][_0x2c3a2f(0x10a,0x131,-0x2d3,0x21)][_0x2c3a2f(0x32,-0x1b5,-0x362,-0x2a8)+'w'][_0x2c3a2f(0x34b,-0x17c,0x17a,0xbd)],_0xc71951[_0x2c3a2f(-0x118,-0x18c,0xfd,0x6e)+'b']=_0x421e80['graphql'][_0x2c3a2f(0x27d,0x62,0x65,0x21)][_0xe7d1ff(0x497,0x6bc,0x45e,0x4ad)+_0xe7d1ff(0x518,0x32e,0x363,0x661)],_0xc71951['videotimel'+_0x2c3a2f(0x11,0x248,0x378,0xe5)]=_0x421e80[_0x2c3a2f(0x19,0x18d,0x32c,0x1f3)][_0x2c3a2f(-0x10c,0x231,-0x2ac,0x21)][_0xe7d1ff(0x42f,0x1f2,0x44b,0x633)+_0xe7d1ff(0x3f5,0x17e,0x5a1,0x3de)+_0xe7d1ff(0x674,0x7ba,0x64e,0x834)][_0x2c3a2f(0x2b8,0x177,0x11d,0xbd)],_0xc71951['timeline']=_0x421e80[_0x2c3a2f(0x16f,0x3d7,0x265,0x1f3)][_0x2c3a2f(-0x2b6,0x24c,-0x232,0x21)][_0xe7d1ff(0x5ef,0x631,0x353,0x3ac)+'_to_timeli'+'ne_media'][_0x2c3a2f(0x0,-0x129,0x1d0,0xbd)],_0xc71951[_0x2c3a2f(0x47,-0x21c,-0xa9,-0xf2)]=_0x421e80[_0x2c3a2f(-0x9d,0x315,0x459,0x1f3)][_0xe7d1ff(0x4a5,0x357,0x4f0,0x2fe)][_0xe7d1ff(0x363,0x1f8,0x595,0xce)+_0xe7d1ff(0x719,0x704,0x62f,0x9f2)][_0xe7d1ff(0x541,0x3f9,0x555,0x2d2)],_0xc71951[_0xe7d1ff(0x4fe,0x7e2,0x238,0x56e)+'s']=_0x421e80[_0xe7d1ff(0x677,0x7be,0x3fa,0x4c9)]['user'][_0xe7d1ff(0x401,0x31c,0x3eb,0x2a6)+_0xe7d1ff(0x25e,0x23,0xb4,0x2a3)+'ns'][_0xe7d1ff(0x541,0x2e4,0x365,0x7bc)],_0xc71951[_0xe7d1ff(0x21e,0x157,-0x4b,0x4e6)+'s']=_0x421e80['graphql'][_0xe7d1ff(0x4a5,0x49f,0x52e,0x680)]['highlight_'+'reel_count'],_0x18cc23[_0xe7d1ff(0x4a4,0x69b,0x375,0x51a)](_0x3a7454,{'status':0xc8,'creator':_0x18cc23[_0xe7d1ff(0x53a,0x43d,0x39b,0x3b1)],'profile':_0x3bfd25,'data':_0xc71951});})[_0x96d022(0x644,0x60c,0x3dd,0x418)](_0x401c93=>_0x24c7c5({'status':0x1f4,'message':toString(_0x401c93[_0x96d022(0x438,0x37c,0x617,0x39b)])}));else switch(_0x28258b[_0x96d022(0x182,0x156,-0x6f,0x176)]){case _0x96d022(0x533,0x30d,0x2b9,0x379):return('\x0a📛\x20Title\x20:'+'\x20*'+_0x26fdfe['title']+('*\x20\x0a⏰\x20Duras'+'i:\x20')+_0x2a2b3c['timestamp']+(_0xbd9f95(0x6dc,0x3e5,0x4a6,0x649)+'d\x20')+_0x73829f['ago']+(_0xbd9f95(0x34b,0x481,0x2f3,0x57b)+'\x20')+_0x51fb25[_0x96d022(0x719,0x446,0x653,0x4b7)]+_0x96d022(0x51,0x4a5,0x47b,0x28a)+_0x4b5b60[_0x96d022(0x58b,0x477,0x35d,0x397)]+_0xbd9f95(0x97,0x1fc,0xc3,0x3c))[_0xbd9f95(0x334,0x1c6,0x38c,0xb0)]();case _0x18cc23['rpNre']:return(_0x96d022(0x4f2,0xd8,0x309,0x389)+'\x20:\x20*'+_0xb24e89['name']+_0xbd9f95(0x190,0x394,0x573,0x49c)+_0x1e43f6[_0xbd9f95(0x435,0x1ad,0x360,0x174)]+(_0xbd9f95(-0x288,-0x42,0xf8,-0x5a)+_0xbd9f95(0x11f,0x19b,0x1a4,0x216))+_0x44ebb1[_0x96d022(0x6cf,0x781,0x5fd,0x687)+_0x96d022(0x42d,0x65d,0x69f,0x4ce)]+'\x20('+_0x5ba6b9['subCount']+(_0xbd9f95(0x281,0x384,0x381,0x340)+_0xbd9f95(-0xd6,0x133,0xcb,-0xff))+_0x539260[_0x96d022(0x6a8,0x1dd,0x563,0x3e7)]+'\x0a')[_0xbd9f95(0x299,0x1c6,-0x9a,0x2d0)]();}}catch(_0x24ac96){if(_0x18cc23['ykPOc']===_0x18cc23[_0x96d022(0x7f3,0x628,0x4b4,0x623)]){const {wm:_0x21eeca,nowm:_0x597c88,audio:_0x152eab}=_0x2f9a31;_0x13a42c[_0x96d022(0x3e0,-0x93,0x9e,0x244)](_0x96d022(0x6c0,0x47f,0x20e,0x3ed)+'nyurl.com/'+_0x96d022(0x2ff,0x38b,0x3cc,0x441)+_0x96d022(0x3b0,0x2cf,0x266,0x402)+_0x597c88)[_0xbd9f95(0x316,0x14b,0xb3,0x380)](async _0xcfba95=>{_0x48d4b3=_0xa0f650(0x208,0x2a0,0x3f3,0x296)+_0xcfba95[_0xc440e0(0x5d,0x2ff,0x253,0x230)];const _0x38340e={};_0x38340e['url']=_0x597c88;function _0xc440e0(_0x9f644b,_0xc8b395,_0x5f4f31,_0x254f53){return _0xbd9f95(_0x5f4f31,_0x9f644b- -0x3b,_0x5f4f31-0x16a,_0x254f53-0x1b1);}function _0xa0f650(_0xca50c1,_0x261f3d,_0xdaf98f,_0x48478e){return _0xbd9f95(_0xdaf98f,_0x261f3d-0x334,_0xdaf98f-0xea,_0x48478e-0x21);}const _0x340c29={};_0x340c29['quoted']=_0x5b3004,_0x3049ad['sendMessag'+'e'](_0x442386[_0xa0f650(0x2a1,0x32d,0x8e,0x42e)],{'video':_0x38340e,'caption':_0x4b63fb['ok'](),'mimetype':_0x18cc23[_0xa0f650(0x143,0x3a1,0x1d9,0x2ec)]},_0x340c29);});}else _0x24c7c5(_0x24ac96);}});igstalk(halzmal)[_0x3b4225(0x313,0x296,0x2e,0x2fb)](async _0x5b4e0f=>{const _0x5415e0={'VUjbi':function(_0x6b8cd1,_0x293350){return _0x6b8cd1(_0x293350);},'KrlFt':_0x55ee17(0x42b,0x2a8,-0x1b,0x104),'dOBUW':_0x55ee17(-0x4d,0x82,0x12a,-0x1f8)+'rl','XQVVv':_0x55ee17(0xb9,0xe5,0x79,0x177),'miMhF':_0x3aabd1(0x7a8,0x542,0x478,0x5d1)};let {url:_0x47d77d,id:_0x35d50b,username:_0x1f8431,fullname:_0x6e403d,link_profile:_0x5caa39,private:_0x53af19,verified:_0x5851ac,bio:_0x41548c,follower:_0x53f57a,following:_0x359ed4,connected_fb:_0x2f7f02,videotimeline:_0xadd0ea,timeline:_0xfea4c,savedmedia:_0x346d25,collections:_0x279193,total_reels:_0x20326a}=_0x5b4e0f['data'],_0x59b105=await _0x5415e0[_0x3aabd1(0x4cf,0x522,0x4e7,0x4c9)](getBuffer,_0x5b4e0f['profile']['high']);const _0x362870=_0x3aabd1(0x9e6,0x8f4,0x8ce,0x7e4)+_0x55ee17(0x184,0x267,0x311,0x430)+_0x1f8431+'\x0a🆔\x20Id\x20:\x20'+_0x35d50b+('\x0a👻\x20Fullnam'+_0x55ee17(0x1f7,0x2cd,0x129,0x2a1))+_0x6e403d+(_0x3aabd1(0x6d6,0x5bc,0x464,0x6a2)+_0x55ee17(0xfd,0x343,0xc3,0x5c9))+_0x53f57a+(_0x55ee17(0x182,-0x56,-0x14b,-0x1ba)+_0x55ee17(0x5ec,0x50f,0x755,0x800))+_0x359ed4+(_0x55ee17(0x34d,0xa7,-0x3b,0x256)+_0x3aabd1(0xa0c,0x7a8,0x818,0x9db))+_0xfea4c+(_0x55ee17(0x28d,-0x64,-0x21f,-0x240)+_0x55ee17(0x43e,0x2be,0x407,0x441))+_0xadd0ea+(_0x55ee17(-0x12,0x1e8,0x245,0x1aa)+'\x20')+_0x20326a+(_0x3aabd1(0x579,0x74f,0x53a,0x465)+_0x3aabd1(0x67d,0x742,0x541,0x50a))+_0x53af19+(_0x3aabd1(0x6d1,0x6b6,0x3c6,0x837)+_0x55ee17(0x33e,0x70,-0x1a9,-0x25e))+_0x5851ac+('\x0a📲\x20Connect'+_0x55ee17(0x20a,0x3f0,0x3c4,0x528))+(_0x2f7f02?_0x2f7f02:_0x5415e0[_0x3aabd1(0x52e,0x684,0x603,0x799)])+('\x0a🗃️\x20Savemed'+'ia\x20:\x20')+_0x346d25+('\x0a🔭\x20Koleksi'+_0x3aabd1(0x480,0x742,0x788,0x9b3))+_0x279193+(_0x3aabd1(0x548,0x6a2,0x98e,0x67f)+_0x3aabd1(0x49e,0x742,0x88f,0x56f))+_0x47d77d+(_0x55ee17(0x155,0x1b2,0x142,0x28)+_0x55ee17(0x188,0x14c,0x17,0x1c9))+_0x41548c,_0x3937fd={};_0x3937fd['displayTex'+'t']=_0x5415e0[_0x3aabd1(0x6f1,0x7b2,0x532,0x667)],_0x3937fd[_0x3aabd1(0x811,0x6fb,0x6ac,0x8b8)]=''+_0x5caa39;const _0x503828={};_0x503828[_0x3aabd1(0x3f3,0x4c0,0x378,0x4a5)]=_0x3937fd;const _0x3b61b3={};_0x3b61b3[_0x55ee17(0x50b,0x2ce,0x2f5,0x580)+'t']=_0x5415e0[_0x55ee17(0x2a,0xfe,-0x199,-0xd9)],_0x3b61b3['id']=_0x3aabd1(0x7a3,0x68b,0x86e,0x504);function _0x55ee17(_0x205889,_0x3724ce,_0x432277,_0x48256a){return _0x4077ab(_0x432277,_0x3724ce- -0x544,_0x432277-0x17f,_0x48256a-0xf0);}function _0x3aabd1(_0x2420e4,_0x1f00c1,_0x8bf688,_0x4d17e2){return _0x4077ab(_0x8bf688,_0x1f00c1- -0x69,_0x8bf688-0x23,_0x4d17e2-0xa5);}const _0x542d28={};_0x542d28[_0x55ee17(-0x17e,-0x6a,0x90,0x12b)+_0x3aabd1(0xd0f,0xa24,0x941,0x84b)]=_0x3b61b3;const _0x45e751={};_0x45e751[_0x55ee17(0x11a,0x2ce,0x262,0xce)+'t']=_0x5415e0[_0x55ee17(0x754,0x498,0x5f1,0x5dc)],_0x45e751['id']=_0x55ee17(0x67f,0x442,0x161,0x664);const _0x3612e7={};_0x3612e7[_0x3aabd1(0x68d,0x471,0x421,0x250)+_0x3aabd1(0x9dd,0xa24,0xcac,0x72f)]=_0x45e751;var _0x3baf4a=[_0x503828,_0x542d28,_0x3612e7];const _0x20bb0e={};_0x20bb0e[_0x55ee17(0x3de,0x474,0x602,0x6e9)]=m[_0x55ee17(0x2a3,0x6c,-0xdd,0x14)],_0x20bb0e['quoted']=m,await alpha[_0x55ee17(0x1c0,0x33,0x74,0x320)+'c'](from,_0x362870,'©\x20'+ownername,_0x59b105,_0x3baf4a,_0x20bb0e);})[_0x3b4225(0x3d4,0x379,0x177,0x9d)](_0x51a1c1=>{const _0x286e52={'ZQkLg':function(_0x4d4a6d,_0x4cf0cc){return _0x4d4a6d(_0x4cf0cc);}};function _0x30d5c8(_0x3b5493,_0x21d258,_0x5be152,_0xd7428){return _0x4077ab(_0x5be152,_0x3b5493- -0x129,_0x5be152-0xe3,_0xd7428-0x54);}function _0xef0733(_0xd3b44c,_0x48197d,_0xb16612,_0x42118e){return _0x4077ab(_0xb16612,_0x48197d- -0x338,_0xb16612-0x1e3,_0x42118e-0x1c8);}_0x286e52[_0xef0733(0x60c,0x743,0x51f,0x9fb)](reply,lang[_0x30d5c8(0x42b,0x381,0x6cf,0x4b0)]());});}break;case _0x4077ab(0x66b,0x938,0x848,0x6df):case _0x4077ab(0xacd,0x8e1,0x694,0xad1)+'lk':{if(!q)return reply(lang[_0x4077ab(0xb7a,0x8b7,0x7cf,0x72b)+'t'](prefix));srch=''+q,yts(''+srch)[_0x4077ab(0x62b,0x702,0x8cf,0x5ad)](async _0x388124=>{const _0x4ce727={'OlguP':_0x245ad4(-0x9,0x1e6,0x2f0,-0x62),'LMinw':_0x1b7ed5(0x378,0x58a,0x2bc,0x265),'YTunw':'icMco','ampLo':function(_0x27c09a,_0x269b3c){return _0x27c09a(_0x269b3c);},'WvTbD':_0x1b7ed5(0x1d1,0x2a3,0x70,0x186)+_0x245ad4(-0x196,-0x458,-0x46,-0x3c3)+_0x1b7ed5(-0x30,-0x200,-0x60,-0x2df)+'----------'+'-\x0a','ZdltG':_0x1b7ed5(0x343,0x4f3,0x5b5,0xf1)};aramat=_0x388124[_0x1b7ed5(-0xbc,-0x1d6,-0x272,-0x1cf)];var _0x3a1473=await _0x4ce727[_0x1b7ed5(0x160,-0x10e,0x28c,-0x173)](getBuffer,aramat[-0x2077+0x1f2f*-0x1+-0x3fa6*-0x1][_0x245ad4(-0xcd,0x206,-0x191,0x1d4)]);let _0x289880=_0x388124['all']['map'](_0x218e23=>{function _0x10949f(_0x317207,_0x1fb3fd,_0x5baa9c,_0x1288fd){return _0x245ad4(_0x5baa9c-0x515,_0x1fb3fd,_0x5baa9c-0x16c,_0x1288fd-0x80);}function _0x5f4a0f(_0x2f2504,_0x4f38cb,_0x442c40,_0x3f8595){return _0x245ad4(_0x3f8595-0x63e,_0x2f2504,_0x442c40-0x1d4,_0x3f8595-0x44);}if(_0x4ce727[_0x5f4a0f(0x413,0x249,0x1e9,0x3b3)]!==_0x4ce727[_0x5f4a0f(0x637,0x5bf,0x71e,0x6ec)])switch(_0x218e23['type']){case _0x10949f(0x672,0x228,0x506,0x31e):return'\x0a'['trim']();case'channel':return(_0x5f4a0f(0x3ff,0x870,0x3bf,0x63f)+_0x5f4a0f(0x289,0x53c,0x3f6,0x4da)+_0x218e23[_0x5f4a0f(0x325,0x345,0x450,0x44a)]+_0x10949f(0x543,0x7e7,0x70b,0x76f)+_0x218e23[_0x10949f(0x536,0x4d5,0x524,0x489)]+(_0x10949f(0x3dc,0x4c4,0x335,0x37b)+_0x10949f(0x679,0x303,0x512,0x7cd))+_0x218e23[_0x10949f(0x9f9,0x6ea,0x814,0x79e)+'bel']+'\x20('+_0x218e23[_0x10949f(0x52c,0x87,0x345,0x4ec)]+(_0x5f4a0f(0xad9,0x85b,0x863,0x824)+_0x10949f(0x463,0x290,0x4aa,0x65a))+_0x218e23[_0x10949f(0x2aa,0x810,0x574,0x83f)]+'\x0a')[_0x10949f(0x75f,0x3b5,0x53d,0x24b)]();}else{const _0x410e09={};_0x410e09[_0x10949f(0x5cf,0x54a,0x6a9,0x456)]=_0x241b65,_0x3bdd4f['sendMessag'+'e'](_0x346463[_0x5f4a0f(0x4ff,0x2ab,0x4e8,0x499)],{'audio':_0x4475aa,'ptt':!![],'mimetype':_0x4ce727[_0x10949f(0x8af,0x8cd,0x691,0x564)],'mentions':_0x3c0a89['map'](_0x47965c=>_0x47965c['id'])},_0x410e09);}})[_0x1b7ed5(0x466,0x3b4,0x5c7,0x2bb)](_0x5cb1da=>_0x5cb1da)[_0x1b7ed5(-0xa4,-0x172,-0x1,0x233)](_0x4ce727[_0x1b7ed5(0x2e0,0xff,0x488,0x3e2)]);const _0xb609c7={};_0xb609c7[_0x245ad4(0xbd,-0x1a3,0x2bc,0x1ed)+'t']=_0x4ce727[_0x245ad4(-0x289,-0x53,-0x524,-0x28)],_0xb609c7[_0x1b7ed5(0x175,0x45c,0x2c5,0x3bc)]=aramat[-0x1*0x381+0x92*-0x15+-0xf7b*-0x1][_0x1b7ed5(0x175,0x33c,0x7,0x108)];const _0xdc72ea={};function _0x1b7ed5(_0x440c4a,_0x36b374,_0x1c724a,_0x2557f8){return _0x3b4225(_0x36b374,_0x440c4a- -0x183,_0x1c724a-0x111,_0x2557f8-0xd1);}_0xdc72ea[_0x1b7ed5(-0xc6,-0x200,-0x378,-0x317)]=_0xb609c7;let _0x69cc0b=[_0xdc72ea];function _0x245ad4(_0x270b62,_0x5224d5,_0x299123,_0xf2e9f4){return _0x3b4225(_0x5224d5,_0x270b62- -0x2e9,_0x299123-0x186,_0xf2e9f4-0x19f);}alpha[_0x1b7ed5(-0x78,0x8e,-0x3c,-0x247)+'c'](m['chat'],_0x289880,'©\x20'+ownername,_0x3a1473,_0x69cc0b);})[_0x3b4225(0x484,0x379,0x80,0x351)](_0x9c27e1=>{function _0x3c5f63(_0x4b38e4,_0x505388,_0x43f52f,_0x3faa82){return _0x3b4225(_0x505388,_0x43f52f- -0x1d8,_0x43f52f-0x4d,_0x3faa82-0xe8);}function _0xde5b01(_0x7f2d7d,_0x25c67b,_0x389db6,_0x4865db){return _0x4077ab(_0x389db6,_0x4865db- -0x2b8,_0x389db6-0x11,_0x4865db-0x8c);}const _0x345658={'ARZhX':function(_0x2ae899,_0x299ab6){return _0x2ae899(_0x299ab6);}};_0x345658[_0x3c5f63(0x38b,0x3a4,0xd6,0x139)](reply,lang[_0x3c5f63(-0xa6,0x193,-0xf0,-0x26d)]());});}break;case _0x3b4225(0x2bb,0x50f,0x400,0x5fc):case'ytsearch':{if(!q)return reply(lang[_0x4077ab(0x78a,0x8b7,0x859,0xa8e)+'t'](prefix));srch=''+q,yts(''+srch)[_0x3b4225(0x54b,0x296,-0x18,0x3a2)](async _0x2b67f8=>{const _0x1f98cd={'aIOPY':function(_0x5c652b,_0x39d31e){return _0x5c652b(_0x39d31e);},'UwBDe':function(_0xd8bd0f,_0x3f0673){return _0xd8bd0f&&_0x3f0673;},'vMLFF':function(_0x9de245,_0x354c45){return _0x9de245(_0x354c45);},'ojHpl':function(_0x5719cb,_0x609da0){return _0x5719cb+_0x609da0;},'BzSmS':function(_0x15f5dd,_0x1878a3){return _0x15f5dd!==_0x1878a3;},'OHUuN':_0x578433(0x969,0xa0d,0x9de,0xaae),'nobze':'video','HxqkY':_0x111e74(0x237,0x2fd,0x1dd,0x5da),'qAMnD':function(_0x54d7e0,_0x46667d){return _0x54d7e0(_0x46667d);},'nwmtA':_0x578433(0xa9b,0x7c0,0x4cf,0x9bf)+_0x111e74(0x20d,-0x95,-0x31a,-0x21f)+_0x578433(0x809,0x5bf,0x38e,0x6d5)+_0x578433(0x5a8,0x5bf,0x57a,0x64a)+'-\x0a'};aramat=_0x2b67f8[_0x578433(0x3a3,0x533,0x6e7,0x354)];var _0x146eb8=await _0x1f98cd[_0x111e74(0x27e,0x272,0x1db,0x438)](getBuffer,aramat[0x1*-0x21f8+-0x1*-0x6ee+-0x1b0a*-0x1][_0x578433(0x538,0x688,0x4ed,0x81f)]);let _0x597003=_0x2b67f8[_0x111e74(-0x113,-0x121,0xe0,0xd7)][_0x578433(0x985,0x987,0x758,0x87b)](_0x333b1b=>{function _0x4832bd(_0x4add20,_0x51bb6e,_0x4f0f83,_0x2b00ff){return _0x111e74(_0x4add20-0x6c,_0x4add20-0x2fa,_0x4f0f83,_0x2b00ff-0xbd);}function _0x1f87f4(_0x5447ed,_0x553eb6,_0x54cbd5,_0x32cb7c){return _0x111e74(_0x5447ed-0xb4,_0x32cb7c- -0xdb,_0x54cbd5,_0x32cb7c-0x9d);}if(_0x1f98cd[_0x1f87f4(-0x5a,0x108,0x18,0x26f)](_0x1f98cd['OHUuN'],_0x4832bd(0x6b3,0x649,0x67d,0x757))){if(!_0x3c2a6d['isGroup'])return _0x1f98cd[_0x1f87f4(0x11d,0x111,0x109,0x34f)](_0x3591d5,_0xdc05c7[_0x1f87f4(0x1ad,0x11,-0x115,0x174)]);if(_0x1f98cd[_0x4832bd(0x5fe,0x49d,0x3bd,0x7ee)](!_0x3c483b,!_0x352e5d)&&!_0x44f7ec)return _0x1f98cd['vMLFF'](_0x8b8dec,_0xe5f924[_0x1f87f4(-0x150,0x238,-0x2fb,-0xa9)]());if(!/webp/[_0x1f87f4(0x7f,0x210,-0x2c1,0x15)](_0x4cddd4))return _0x1c3cb7(_0x1f87f4(0x19b,0x92,0x37,0xed)+_0x4832bd(0x38d,0x4f0,0x1f5,0x476)+_0x4832bd(0x5c0,0x4ca,0x57c,0x2dd)+_0x1f98cd[_0x4832bd(0x596,0x29d,0x7e8,0x30f)](_0x4f7d3f,_0x14bd91));_0xbe7c8d[_0x4832bd(0x3b6,0x22a,0x638,0x599)]()['then'](async _0x57674c=>{const _0x3ade0e={};_0x3ade0e[_0x31d376(0x1c9,0x512,0x10c,0x3d9)]=_0x58a7a5;function _0x31d376(_0x127061,_0xf573d6,_0x3b7809,_0x2f3090){return _0x4832bd(_0x2f3090- -0x1b6,_0xf573d6-0x1d2,_0x3b7809,_0x2f3090-0x88);}function _0x54c330(_0xfb83e6,_0x445883,_0x197125,_0x1fbd21){return _0x1f87f4(_0xfb83e6-0x19e,_0x445883-0x13c,_0x197125,_0x1fbd21-0x38a);}_0x4ae5dd[_0x54c330(0x39b,0x911,0x582,0x68d)+'e'](_0x5043d5[_0x31d376(-0x3e,0x25c,0x1da,0xa0)],{'sticker':_0x57674c,'mentions':_0x372149[_0x31d376(0x740,0x28e,0x6c5,0x477)](_0x579dfe=>_0x579dfe['id'])},_0x3ade0e);});}else switch(_0x333b1b[_0x4832bd(0x1e9,0x323,0x44e,0xa5)]){case _0x1f98cd[_0x4832bd(0x620,0x5c4,0x8ad,0x60d)]:return(_0x4832bd(0x72d,0x7b9,0x60c,0x79d)+'\x20*'+_0x333b1b[_0x4832bd(0x2c2,0x1ff,0x3f2,0x445)]+(_0x1f87f4(0x372,0x46e,0x3aa,0x202)+'i:\x20')+_0x333b1b[_0x4832bd(0x22c,0x4a6,0x401,0xfa)]+(_0x4832bd(0x642,0x422,0x4c0,0x71f)+'d\x20')+_0x333b1b[_0x1f87f4(0x90,-0x8d,-0x130,-0x217)]+(_0x4832bd(0x6de,0x4f9,0x40f,0x56c)+'\x20')+_0x333b1b[_0x1f87f4(0xd5,0xfb,0x105,0x155)]+_0x1f87f4(-0x2a6,-0x17e,0x105,-0xd8)+_0x333b1b[_0x1f87f4(-0x252,-0x19e,-0x24b,0x35)]+'\x0a\x20\x20\x20\x20\x20\x20')['trim']();case _0x1f98cd[_0x1f87f4(0x355,0x61b,0x2b0,0x32f)]:return('\x0a📛\x20Channel'+'\x20:\x20*'+_0x333b1b['name']+_0x4832bd(0x5f1,0x76c,0x8cd,0x7d3)+_0x333b1b[_0x4832bd(0x40a,0x14e,0x6bd,0x3f6)]+(_0x1f87f4(0xc2,-0x399,0xc7,-0x1ba)+'ber\x20:\x20')+_0x333b1b[_0x4832bd(0x6fa,0x4e1,0x9b1,0x7dc)+'bel']+'\x20('+_0x333b1b[_0x4832bd(0x22b,0x252,0x1d,0x233)]+(_0x1f87f4(-0xe4,0x49d,0x8f,0x20c)+_0x1f87f4(0x23f,-0xa0,0x269,-0x45))+_0x333b1b[_0x4832bd(0x45a,0x179,0x3fd,0x710)]+'\x0a')[_0x4832bd(0x423,0x37a,0x67f,0x473)]();}})[_0x111e74(0x48c,0x401,0x449,0x281)](_0x1ff89e=>_0x1ff89e)[_0x578433(0x45f,0x54b,0x74b,0x2ae)](_0x1f98cd[_0x578433(0x84d,0x993,0xa7d,0xad8)]);const _0x4223e9={};_0x4223e9['displayTex'+'t']=aramat[-0x1*0x40b+-0x33e+0x749]['title'],_0x4223e9[_0x578433(0x728,0x764,0x853,0x82b)]=aramat[0x9*-0x1be+-0x11dd+-0x218b*-0x1][_0x111e74(-0x3c,0x110,-0x62,0xfb)];const _0x242281={};_0x242281[_0x578433(0x407,0x529,0x7bc,0x372)]=_0x4223e9;const _0xb0ac67={};_0xb0ac67[_0x578433(0x800,0x812,0x7b8,0x846)+'t']=aramat[-0xd4a+0xfee*0x2+-0x1*0x1291][_0x578433(0x6d7,0x61c,0x613,0x479)];function _0x111e74(_0x496fb4,_0x121e70,_0x4517bd,_0x3a9fbb){return _0x4077ab(_0x4517bd,_0x121e70- -0x654,_0x4517bd-0x94,_0x3a9fbb-0x4c);}_0xb0ac67[_0x578433(0x634,0x764,0x48d,0x8e6)]=aramat[0x2*0x100f+0x143*0x5+0x99b*-0x4][_0x578433(0x475,0x764,0xa5e,0x776)];const _0x285012={};_0x285012['urlButton']=_0xb0ac67;const _0x393b6a={};_0x393b6a[_0x578433(0xa07,0x812,0x807,0x965)+'t']=aramat[0x4c3*-0x7+-0x15*0x79+0x1*0x2b44][_0x111e74(-0x2e7,-0x38,-0x20,0x107)],_0x393b6a[_0x111e74(0x24d,0x110,0x32e,0xa5)]=aramat[0x1c11+0x1386+0x3a9*-0xd][_0x578433(0x930,0x764,0x667,0x537)];const _0x3cc076={};function _0x578433(_0x15a6e5,_0x1ad9ce,_0x168cd0,_0x5b4218){return _0x3b4225(_0x15a6e5,_0x1ad9ce-0x46c,_0x168cd0-0xe8,_0x5b4218-0x12d);}_0x3cc076[_0x111e74(-0x376,-0x12b,0xda,-0x6a)]=_0x393b6a;let _0x28496f=[_0x242281,_0x285012,_0x3cc076];alpha[_0x111e74(-0x2da,-0xdd,-0x329,-0x17e)+'c'](m[_0x111e74(0x184,-0xa4,-0x43,-0x1a)],_0x597003,'©\x20'+ownername,_0x146eb8,_0x28496f);});}break;case _0x3b4225(-0x30,0x174,-0x186,0x35):case _0x3b4225(0x619,0x546,0x4c5,0x346):if(!q)return reply(lang['wrongForma'+'t'](prefix));srch=''+q;var aramas=await yts(srch);aramat=aramas[_0x4077ab(0x677,0x533,0x627,0x45d)];var tbuff=await getBuffer(aramat[-0xd4c*-0x1+-0x28a+-0xac2][_0x4077ab(0x530,0x688,0x656,0x44b)]),ytresult='';ytresult+=_0x3b4225(0x164,0x1f3,0x126,0x377)+_0x3b4225(0x72b,0x4ea,0x41f,0x723),ytresult+=_0x4077ab(0xaec,0x9bc,0x8d3,0x9d2)+'__________'+_0x3b4225(0x901,0x608,0x552,0x61f),aramas[_0x4077ab(0x78b,0x533,0x761,0x652)][_0x4077ab(0xb6a,0x987,0x898,0xa81)](_0x419dda=>{const _0x4d7601={};_0x4d7601[_0x13abbd(0x29c,0x3b5,0x348,0x1d2)]=function(_0x19a9fa,_0x871763){return _0x19a9fa+_0x871763;},_0x4d7601[_0x13abbd(0x3aa,0x2b8,0x514,0x1bd)]='⏳\x20Durasi:\x20',_0x4d7601['aAsDy']=function(_0x10f139,_0x2844ca){return _0x10f139+_0x2844ca;};function _0x13abbd(_0x9cfd32,_0x44bab0,_0x2876df,_0x344c31){return _0x4077ab(_0x2876df,_0x44bab0- -0x62e,_0x2876df-0x16e,_0x344c31-0x122);}_0x4d7601[_0x32c31b(0x392,0x10d,0x10a,-0x94)]='🔗\x20Link:\x20',_0x4d7601[_0x13abbd(0x84,0xcf,0x20a,-0xd7)]=_0x13abbd(0x11f,0x64,0x1af,-0x101),_0x4d7601[_0x32c31b(0x216,-0x21f,-0x78,0x8f)]=function(_0x2ec403,_0x13ce22){return _0x2ec403+_0x13ce22;};const _0x59525f=_0x4d7601;function _0x32c31b(_0x3b10f1,_0x3abbae,_0x9218a7,_0x291a51){return _0x4077ab(_0x3b10f1,_0x9218a7- -0x5d8,_0x9218a7-0x1f0,_0x291a51-0x12a);}const _0x12d20e=_0x32c31b(-0x272,0x28d,-0x60,0x226)[_0x32c31b(-0x349,0x10d,-0xc9,0x1b9)]('|');let _0x35e170=-0x1*-0x13f9+0xbff+-0x1ff8;while(!![]){switch(_0x12d20e[_0x35e170++]){case'0':ytresult+=_0x59525f[_0x13abbd(0x478,0x3b5,0x45d,0x11b)](_0x59525f[_0x32c31b(0x54d,0x2f4,0x40b,0x1e0)]('🐣\x20Title:\x20',_0x419dda['title']),'\x0a');continue;case'1':ytresult+=_0x59525f['rempC']+_0x419dda['timestamp']+'\x0a';continue;case'2':ytresult+=_0x59525f[_0x13abbd(0x61a,0x3b5,0x35d,0x5ce)](_0x59525f[_0x32c31b(0x6ff,0x242,0x441,0x4ce)](_0x59525f['eQTYX'],_0x419dda[_0x32c31b(-0xb9,-0x83,0x18c,0x4f)]),'\x0a');continue;case'3':ytresult+=_0x59525f[_0x32c31b(0x55c,0x195,0x441,0x4c2)](_0x59525f[_0x32c31b(-0xc5,-0x101,0x125,0x17f)]+_0x419dda[_0x32c31b(-0x204,0x58,-0xc0,0xc8)],_0x13abbd(0x5b4,0x38e,0x58b,0x363)+_0x13abbd(0x1b8,0x217,0x2,0x36c)+_0x13abbd(0x167,0x446,0x66b,0x534));continue;case'4':ytresult+=_0x59525f[_0x13abbd(0x566,0x3eb,0x633,0x5db)](_0x59525f[_0x32c31b(-0x2a8,-0xa5,-0x78,-0x9e)](_0x32c31b(0x296,0x3ab,0x2a6,0x1a5),_0x419dda[_0x13abbd(0x100,0x256,0x382,0x4a3)]),'\x0a');continue;}break;}}),ytresult+='*WHATSAPP-'+_0x3b4225(0x1ae,0x482,0x42f,0x596);const _0x1f5d8a={};_0x1f5d8a[_0x4077ab(0x61c,0x688,0x44b,0x5d3)]=tbuff,_0x1f5d8a['caption']=ytresult;const _0x2618b3={};_0x2618b3[_0x3b4225(0x1ef,0x47d,0x2ec,0x5cf)]=m,alpha['sendMessag'+'e'](from,_0x1f5d8a,_0x2618b3);break;case'ghstalk':case _0x4077ab(0x588,0x656,0x860,0x911)+'k':case _0x3b4225(0x240,0x152,0x17c,0x285):{if(!text)return reply(_0x4077ab(0xaff,0xa6b,0x82e,0x947)+'ntah\x20*'+prefix+(_0x4077ab(0xb4f,0x9ae,0x883,0x736)+_0x3b4225(0x688,0x5b1,0x477,0x6c5)));reply(lang[_0x3b4225(0x219,0x405,0x57f,0x629)]());let y=await fetchJson(_0x4077ab(0x7fb,0x837,0xa14,0x933)+_0x4077ab(0x7de,0xa81,0x7f1,0x7ff)+_0x4077ab(0x5d3,0x504,0x79f,0x591)+q),ppgt=await getBuffer(y['avatar_url']),textt='*-----\x20「GI'+_0x3b4225(0x590,0x38c,0x3c5,0x3dc)+_0x4077ab(0x6a7,0x826,0x84a,0x7b9)+enter+enter+(_0x3b4225(0x34b,0x225,0x2d5,0x513)+'\x20:\x20')+y['login']+enter+_0x3b4225(0x6b3,0x3ce,0x58a,0x339)+y[_0x3b4225(0xb5,0xf5,-0x1b7,0x5d)]+enter+_0x4077ab(0xb85,0x945,0xbc2,0x89c)+y['id']+enter+('🉑\x20Node\x20ID\x20'+':\x20')+y['node_id']+enter+(_0x3b4225(0x349,0xa9,0x3b,0x31)+_0x4077ab(0x5fa,0x4b8,0x50f,0x665))+y[_0x3b4225(0x16f,0x336,0x108,0xe1)]+enter+(_0x4077ab(0x561,0x81f,0xa18,0x5b8)+_0x4077ab(0x4e6,0x5e9,0x5cf,0x4ff))+y['following']+enter+_0x4077ab(0x94d,0x6de,0x681,0x7b5)+y[_0x3b4225(-0x7,0xd7,0x2f7,-0x82)]+enter+(_0x4077ab(0x8a4,0x84e,0x916,0xb1e)+':\x20')+y[_0x4077ab(0x9fe,0x9c8,0xc2a,0xc49)]+enter+_0x4077ab(0x614,0x4c1,0x5f7,0x39c)+y[_0x3b4225(0x689,0x40d,0x428,0x5aa)]+enter+(_0x4077ab(0xa3e,0x78a,0xa1b,0x972)+_0x3b4225(0x29b,0x33f,0x518,0x425))+y['location']+enter+'📧\x20Email\x20:\x20'+y[_0x4077ab(0x580,0x69a,0x749,0x696)]+enter+_0x3b4225(0x43c,0x259,-0x92,0x214)+y[_0x4077ab(0xc09,0xa86,0xbae,0x98e)]+enter+(_0x4077ab(0x437,0x729,0x79e,0x518)+_0x3b4225(-0x70,0x1ae,0x2c1,-0xa2)+'\x20')+y[_0x3b4225(0x399,0xaa,0x122,-0x1ba)+_0x3b4225(0x2c3,0x500,0x64a,0x74c)]+enter+('🔮\x20Public\x20R'+_0x4077ab(0x611,0x503,0x600,0x40f))+y[_0x4077ab(0x36a,0x617,0x841,0x4c3)+'os']+enter+('🌍\x20Public\x20G'+_0x3b4225(0x724,0x53c,0x82b,0x39e))+y[_0x4077ab(0x9bb,0x8f3,0x74a,0x824)+'ts']+enter+('📅\x20Created\x20'+':\x20')+moment(y[_0x3b4225(0x6dd,0x556,0x421,0x62f)])['tz'](_0x3b4225(-0xd6,0x19f,-0x45,0x229)+'ta')[_0x4077ab(0x692,0x52e,0x590,0x55f)]('id')[_0x3b4225(0x736,0x57d,0x6ce,0x648)](_0x4077ab(0x3b9,0x572,0x7c0,0x616)+_0x3b4225(0x38a,0x29a,0x4e7,0x61))+enter+(_0x4077ab(0x3ed,0x5fb,0x3a6,0x89b)+'\x20')+moment(y[_0x4077ab(0x451,0x73f,0x707,0x8bc)])['tz'](_0x3b4225(0x435,0x19f,0x32b,0x174)+'ta')[_0x3b4225(-0x3f,0xc2,0x2e6,0x104)]('id')[_0x3b4225(0x6e7,0x57d,0x6dc,0x85b)]('HH:mm:ss\x20D'+_0x3b4225(-0x56,0x29a,-0x54,0x2fb))+enter+(_0x3b4225(0x4a6,0x251,0x537,0x2df)+_0x4077ab(0x6e1,0x953,0xa2b,0x6d6)+_0x3b4225(0x41c,0x2f7,0x170,0x58e))+q;const _0x717ba0={};_0x717ba0[_0x4077ab(0x8be,0x812,0x691,0x9c1)+'t']='Source\x20Cod'+'e',_0x717ba0['url']=''+youtube;const _0x5123e1={};_0x5123e1[_0x3b4225(-0x68,0xbd,-0x235,-0x27)]=_0x717ba0;const _0x5720e4={};_0x5720e4[_0x3b4225(0x373,0x3a6,0x412,0x172)+'t']=_0x3b4225(0x196,0x1bd,-0xca,0xd2),_0x5720e4['id']='donasi';const _0x367986={};_0x367986[_0x3b4225(-0x1c0,0x6e,0x352,0x1aa)+_0x3b4225(0x69a,0x621,0x8c5,0x514)]=_0x5720e4;const _0x3cd990={};_0x3cd990[_0x4077ab(0x9ec,0x812,0x68f,0xad3)+'t']='Owner',_0x3cd990['id']=_0x4077ab(0xc68,0x986,0x874,0xbd9);const _0x120a27={};_0x120a27[_0x4077ab(0x6d1,0x4da,0x6f7,0x6c7)+'Button']=_0x3cd990;var but=[_0x5123e1,_0x367986,_0x120a27];const _0x1b7f47={};_0x1b7f47['userJid']=m['chat'],_0x1b7f47[_0x3b4225(0x402,0x47d,0x5d1,0x650)]=m,await alpha[_0x3b4225(0x23,0x5c,0x28a,0xa7)+'g'](from,textt,'©\x20'+ownername,ppgt,but,_0x1b7f47);break;}break;case _0x3b4225(0x3dc,0x20e,-0x2c,0x49c)+_0x3b4225(0x3ab,0x635,0x577,0x7e2):case _0x4077ab(0x87e,0x794,0x573,0x8c9):case'calc':case _0x3b4225(0xe5,0x26b,0x2eb,0xee):case _0x4077ab(0x9fa,0xa6e,0xc85,0x978):{if(kuismath[_0x4077ab(0x90d,0x6d2,0x7b3,0x3ee)+_0x3b4225(-0x1cd,0xde,0xb9,0x344)](m['sender'][_0x3b4225(0x4d,0xa3,-0x169,0x35)]('@')[0x6de*0x4+-0x15bb*-0x1+0xb*-0x479]))return reply(_0x3b4225(0x2fe,0x92,-0x261,0xd9)+_0x4077ab(0x6c4,0x872,0x829,0xb56)+'u\x20Ngecheat'+_0x3b4225(-0x18a,0xb5,0x16a,-0x1a6));if(!text)return reply('Kirim\x20peri'+'ntah\x20'+(prefix+command)+(_0x4077ab(0x888,0x8b4,0x8db,0x8f4)+_0x4077ab(0x8c6,0x730,0x528,0x614)));let val=text['replace'](/[^0-9\-\/+*×÷πEe()piPI/]/g,'')[_0x4077ab(0x96d,0x83c,0x6f0,0x6f5)](/×/g,'*')['replace'](/÷/g,'/')[_0x4077ab(0x9f2,0x83c,0x601,0x56f)](/π|pi/gi,_0x3b4225(-0x12a,0x1cf,0x31b,0x11b))[_0x4077ab(0x8fb,0x83c,0x5a5,0x9df)](/e/gi,'Math.E')[_0x4077ab(0x946,0x83c,0xa41,0x92d)](/\/+/g,'/')[_0x4077ab(0x7f5,0x83c,0x87d,0xa2d)](/\++/g,'+')[_0x4077ab(0x86d,0x83c,0x626,0x5f6)](/-+/g,'-'),format=val['replace'](/Math\.PI/g,'π')[_0x3b4225(0x4fb,0x3d0,0x167,0x354)](/Math\.E/g,'e')[_0x4077ab(0x8ff,0x83c,0x8d9,0x8bf)](/\//g,'÷')[_0x3b4225(0x599,0x3d0,0x277,0x68c)](/\*×/g,'×');try{console[_0x3b4225(0x173,0x2b2,-0x9,0x3fd)](val);let result=new Function(_0x4077ab(0x767,0xa41,0xa45,0xb5f)+val)();if(!result)throw result;reply('Hasil\x20Dari'+'\x20*'+format+_0x3b4225(0x39b,0xe6,0x191,0x5f)+result+'_');}catch(_0x2bc937){if(_0x2bc937==undefined)reply(_0x3b4225(0x1dc,0xa6,-0x132,0x2ea));reply('Format\x20sal'+_0x4077ab(0x77a,0x827,0x54d,0x617)+_0x4077ab(0x54c,0x7e4,0xa58,0x758)+_0x4077ab(0x7cc,0x509,0x254,0x2be)+_0x3b4225(0x685,0x537,0x72e,0x3ed)+_0x4077ab(0x9e3,0x920,0xa68,0x6c2)+_0x3b4225(0x0,0x2f3,0x529,0x543)+_0x4077ab(0x412,0x6e6,0x4d3,0x6cc));}}break;case _0x4077ab(0x61d,0x4df,0x288,0x554):case _0x3b4225(0x511,0x46d,0x765,0x59f):if(!text)return reply(_0x3b4225(0x71a,0x5ff,0x39b,0x5d3)+_0x3b4225(0xe1,0xc5,-0x30,-0x48)+(prefix+command)+_0x4077ab(0x5ba,0x51a,0x3c4,0x377));const _0x3547e9={};_0x3547e9[_0x3b4225(-0x75,0x23c,-0x35,0x1be)]=global[_0x4077ab(0x5ea,0x6a8,0x520,0x4fd)],_0x3547e9[_0x3b4225(0x635,0x4a2,0x632,0x206)]=global[_0x4077ab(0x6f5,0x90e,0x999,0x9d8)];let encmedia=await alpha[_0x3b4225(0x504,0x2c6,0x48a,0x589)+_0x4077ab(0x62a,0x7dd,0x974,0x7fa)](m['chat'],_0x3b4225(0x6e9,0x4c9,0x67d,0x3d7)+_0x3b4225(0x39d,0x3f0,0x2a6,0x181)+command+(_0x4077ab(0x7f4,0xa69,0xcef,0x98e)+'=')+text,m,_0x3547e9);await fs['unlinkSync'](encmedia);break;case _0x4077ab(0x8fc,0x859,0x929,0x850):case _0x4077ab(0x788,0x8eb,0xa9b,0x72c):{if(!quoted)throw _0x3b4225(0x2e0,0x350,0x454,0xf8)+'e';if(!/webp/['test'](mime))throw'balas\x20stik'+_0x3b4225(0x260,0x8b,-0x64,0x1c1)+_0x3b4225(0x53f,0x5a5,0x3a1,0x766)+(prefix+command)+'*';m[_0x3b4225(0x44b,0x2d9,0x2e4,0x31f)](lang[_0x3b4225(0x2af,0x405,0x54c,0x2e6)]());let media=await alpha['downloadAn'+_0x3b4225(0x333,0x57c,0x77e,0x32a)+_0x4077ab(0x776,0x670,0x37e,0x379)](quoted),webpToMp4=await webp2mp4File(media);const _0x5c3d6e={};_0x5c3d6e['url']=webpToMp4[_0x4077ab(0x59f,0x728,0x9e5,0x71a)],await alpha[_0x3b4225(0x847,0x5c6,0x31c,0x768)+'e'](m['chat'],{'video':_0x5c3d6e,'caption':lang['ok']()},{'quoted':m}),await fs['unlinkSync'](media);}break;case _0x4077ab(0x701,0x78e,0x932,0x9b4):{if(!quoted)throw _0x3b4225(0x170,0x350,0x2d4,0x59c)+'e';if(!/webp/[_0x3b4225(-0x3,0x2d8,0x1b8,0x56b)](mime))throw'balas\x20stik'+_0x3b4225(0x1ce,0x8b,0x1bf,-0x227)+_0x3b4225(0x362,0x5a5,0x57c,0x3a4)+(prefix+command)+'*';reply(lang['wait']());let media=await alpha[_0x3b4225(0x776,0x59f,0x3b0,0x31c)+_0x3b4225(0x4f8,0x57c,0x2e0,0x34c)+_0x3b4225(0x3a9,0x204,0x251,0x38e)](quoted),webpToMp4=await webp2mp4File(media);const _0x264fe8={};_0x264fe8[_0x3b4225(0x4ad,0x2f8,0x4f4,0x34d)]=webpToMp4[_0x4077ab(0xa17,0x728,0x4df,0x7e1)],await alpha[_0x4077ab(0x780,0xa32,0xbef,0xc64)+'e'](m[_0x3b4225(0x42b,0x144,0x333,0x25f)],{'video':_0x264fe8,'caption':lang['ok'](),'gifPlayback':!![]},{'quoted':m}),await fs[_0x3b4225(0x4ac,0x270,0x49d,0x46b)](media);}break;case _0x3b4225(0x67b,0x574,0x4f7,0x2d1):{if(!quoted)return reply(_0x4077ab(0x836,0x748,0x9f7,0x812)+_0x3b4225(0x1f3,0x351,0x59e,0x565)+_0x4077ab(0x47c,0x519,0x766,0x7fd)+_0x4077ab(0x52d,0x5cb,0x39b,0x5a1)+(prefix+command));reply(mess[_0x4077ab(0x95a,0x871,0x7cb,0x988)]);if(!/webp/['test'](mime)&&/image|video|gif/[_0x3b4225(0x49b,0x2d8,0x4af,0x2f2)](mime)){let media=await alpha['downloadAn'+_0x3b4225(0x549,0x57c,0x533,0x3ac)+_0x3b4225(0xb8,0x204,-0xac,0x2b7)](quoted),anu=await TelegraPh(media);reply(util['format'](anu)),await fs[_0x4077ab(0x5a7,0x6dc,0x6eb,0x7cb)](media);}else{if(!/video|gif/[_0x4077ab(0x5ed,0x744,0x554,0x9ea)](mime)){let media=await m['getMsgBuff'+'er'](quoted),anu=await fileIO(media,mime['split']('/')[-0x631+0x22e1+-0x1*0x1caf]);reply(util[_0x3b4225(0x3c2,0x57d,0x5b1,0x380)](anu['link']+'\x20('+anu[_0x3b4225(0x22d,0x20c,0x34a,-0xde)]+')'));}}}break;case'halloween2':case _0x3b4225(-0xc7,0x157,0x430,0x43a):case _0x4077ab(0x5a3,0x4b3,0x791,0x673):case _0x4077ab(0xbb7,0x92f,0xbdc,0x9ec):case _0x3b4225(0x250,0x36e,0x46d,0x65d):case _0x3b4225(-0x1de,0x46,0xf1,-0x222):case _0x3b4225(0x3c3,0x292,0x12,0x4eb):case'realistic':case _0x3b4225(0x2fd,0x44e,0x530,0x1fb):case _0x3b4225(-0x1b,0x2b0,0x4df,0x194):case _0x3b4225(0x30e,0x1a0,-0x60,0xae):case'marvel':case _0x4077ab(0x864,0xa0a,0xba5,0x842):case _0x3b4225(0xbb,0x6b,-0x134,0x45):case _0x3b4225(-0x152,0x7f,-0x105,-0x203):case'metalr':case _0x4077ab(0xcdf,0xa51,0xa97,0x8b5):case _0x4077ab(0x584,0x65b,0x3c4,0x3ad):case _0x4077ab(0x3c2,0x60a,0x6f9,0x3e6):case _0x4077ab(0x93c,0x7ad,0x742,0x8b5):case _0x4077ab(0x7e5,0x78b,0x985,0x63f):case _0x3b4225(-0x77,0x140,0x2e6,0x155):case _0x3b4225(-0x18b,0x9a,-0x149,0x45):case _0x3b4225(0x1c2,0x25c,0x2f6,-0x2f):case'horror2':case _0x3b4225(0x5c3,0x445,0x567,0x37e):case _0x3b4225(0xf0,0x161,-0x4,0x1a3):{if(!text)return reply(_0x3b4225(0x61b,0x5ff,0x4df,0x893)+'ntah\x20'+(prefix+command)+(_0x4077ab(0xb17,0x85d,0xaa4,0x5ad)+_0x4077ab(0x5db,0x5ef,0x6af,0x573)));if(!text[_0x3b4225(0x22,0x143,0x3a6,0x417)]('|'))return reply(_0x4077ab(0xbb8,0xa6b,0xa54,0xb7f)+'ntah\x20'+(prefix+command)+(_0x4077ab(0x5c4,0x85d,0x771,0xb55)+'fc*'));mm=args['join']('\x20'),m1=mm['split']('|')[-0xb03+0x58b+0x5*0x118],m2=mm[_0x4077ab(0x70c,0x50f,0x6fe,0x5ae)]('|')[0xd4e*-0x1+-0x1*-0x4ff+0x2*0x428],reply(lang[_0x4077ab(0x885,0x871,0x8e5,0xaa5)]());const _0x197a51={};_0x197a51['apikey']=alphabot,_0x197a51[_0x4077ab(0x4e4,0x6ef,0x5f5,0x73c)]=m1,_0x197a51[_0x4077ab(0x9c3,0x7d1,0x630,0x736)]=m2;let texproo=global[_0x4077ab(0x982,0x9d8,0x918,0x7e8)](global[_0x3b4225(0x279,0x1e4,0x236,-0xe5)]['alfa'],_0x3b4225(0x16,0x250,-0x4,0x488)+'ro/'+command,_0x197a51);sendFileFromUrl(from,texproo,lang['ok'](),m)[_0x3b4225(0x353,0x379,0x42b,0xf5)](_0x1f9208=>{function _0x3447df(_0x261d42,_0x4c12b3,_0x51a631,_0x3c287e){return _0x3b4225(_0x3c287e,_0x261d42-0x197,_0x51a631-0x11d,_0x3c287e-0x50);}reply(lang[_0x3447df(0x27f,0x185,0x514,0x4b3)]());});}break;case _0x4077ab(0x34a,0x525,0x42e,0x411):case _0x3b4225(0x2c6,0x1d0,-0x8f,0xac):case'sendsessio'+'n':if(!m[_0x4077ab(0x84f,0xa1b,0xb40,0xc38)]['fromMe']&&!isCreator)return reply(mess[_0x4077ab(0x8e8,0x986,0xb80,0x75a)]);alpha['sendMessag'+'e'](m[_0x3b4225(0x3d7,0x144,-0x18e,0x369)],{'document':fs['readFileSy'+'nc'](sessionName+_0x3b4225(0x64d,0x557,0x3ec,0x562)),'mimetype':_0x3b4225(0x1c0,0x36d,0x27d,0x90),'fileName':_0x3b4225(0x1a9,0x290,0x103,0x266)+'lti-device'+'.json'},{'quoted':m});break;case _0x4077ab(0x2e9,0x563,0x311,0x410):const _0x33e4b3={};_0x33e4b3['title']=_0x3b4225(0x2cf,0x588,0x45d,0x5f9)+'Menu',_0x33e4b3[_0x4077ab(0x742,0x990,0x9b1,0xa8d)]=_0x4077ab(0x595,0x5d0,0x6db,0x780),_0x33e4b3[_0x4077ab(0x838,0x564,0x390,0x304)+'n']='\x0a_Semua\x20fi'+_0x3b4225(0x79d,0x629,0x8c1,0x417);const _0xf2ee13={};_0xf2ee13['title']=_0x3b4225(0x1da,0x190,0x46a,-0x9f)+'ot',_0xf2ee13['rows']=[_0x33e4b3];const _0x22bf3b={};_0x22bf3b['title']='⁉️\x20〉ɞ\x20\x20Info'+_0x4077ab(0xa77,0x9d6,0xb0a,0x7cd)+_0x4077ab(0x84c,0x832,0x9ca,0x63f),_0x22bf3b['rowId']=_0x4077ab(0x54c,0x4f5,0x45a,0x48e),_0x22bf3b[_0x4077ab(0x4ff,0x564,0x6c9,0x40c)+'n']=_0x4077ab(0x67b,0x751,0x767,0x98b)+_0x4077ab(0x896,0x672,0x94e,0x8fa)+'terkini\x20me'+_0x3b4225(0x3b9,0x4d2,0x4ba,0x483);const _0x48cdc6={};_0x48cdc6['title']=_0x4077ab(0x87a,0x800,0x99f,0x54b)+_0x3b4225(0x7e,0x1c0,0x1f,0x45e),_0x48cdc6[_0x4077ab(0x901,0x717,0x860,0x6f2)]=[_0x22bf3b];const _0x3998b3={};_0x3998b3[_0x3b4225(0x3d7,0x1b0,0x1c7,-0x120)]=_0x3b4225(-0x40,0x99,0x202,-0x6e)+_0x3b4225(0x175,0x105,-0x6f,0x2fc),_0x3998b3[_0x4077ab(0x6d4,0x990,0x6bd,0xb75)]=_0x3b4225(0xc5,0x2ce,0x19b,0x476),_0x3998b3[_0x3b4225(0x165,0xf8,-0x142,0x1b3)+'n']=_0x3b4225(0x25d,0x3b9,0x1c5,0xd1)+'usus\x20owner'+_0x3b4225(0xb9,0x66,0x2d6,0x1dc);const _0x147f8d={};_0x147f8d[_0x3b4225(0x3ea,0x1b0,0x3d8,0x177)]=_0x3b4225(0x373,0x394,0x653,0x3e2)+_0x3b4225(0x416,0x521,0x6db,0x802),_0x147f8d['rows']=[_0x3998b3];const _0x346414={};_0x346414[_0x4077ab(0x4f6,0x61c,0x869,0x779)]=_0x4077ab(0x8a1,0x972,0xab5,0xac4)+_0x3b4225(0x861,0x62e,0x835,0x62a)+'d',_0x346414[_0x4077ab(0x726,0x990,0x719,0xa07)]=_0x3b4225(0x472,0x220,0x104,0x4d1)+'d',_0x346414[_0x3b4225(0x2d,0xf8,0x2fa,0xd8)+'n']=_0x4077ab(0x889,0x9e4,0x811,0x8ec)+_0x4077ab(0x97e,0x98f,0xa07,0x9ec)+_0x4077ab(0xa6f,0x88d,0xa6d,0xa64)+_0x3b4225(0x17e,0x241,0x251,0x1c5);const _0x45d837={};_0x45d837[_0x4077ab(0x3d3,0x61c,0x631,0x7b1)]='Sub\x20Menu\x20K'+_0x4077ab(0x5fa,0x80c,0x96f,0x98f),_0x45d837['rows']=[_0x346414];const _0x5b8cb4={};_0x5b8cb4[_0x3b4225(0x3d4,0x1b0,0x221,0x451)]=_0x3b4225(0x15,0x14e,-0x101,0x31d)+'\x20Command',_0x5b8cb4['rowId']=_0x3b4225(0x1dd,0x2ff,0x2dc,0x5c6),_0x5b8cb4[_0x4077ab(0x5bb,0x564,0x2f8,0x4e9)+'n']=_0x4077ab(0x4d2,0x540,0x318,0x776)+_0x3b4225(0x45b,0x33e,0x26e,0xc3)+_0x4077ab(0x3ce,0x5db,0x827,0x89c)+'up_';const _0x54f287={};_0x54f287['title']=_0x4077ab(0x8f0,0x800,0x943,0xa58)+'e-4',_0x54f287[_0x3b4225(0x12c,0x2ab,0x1e9,0x44)]=[_0x5b8cb4];const _0x31f9af={};_0x31f9af[_0x4077ab(0x602,0x61c,0x8f6,0x71d)]='⛩️\x20〉ɞ\x20Anime'+_0x4077ab(0x27c,0x571,0x5e0,0x691),_0x31f9af[_0x4077ab(0x9c1,0x990,0x758,0xb4a)]=_0x4077ab(0x656,0x5f7,0x8c1,0x6ae),_0x31f9af[_0x4077ab(0x4ba,0x564,0x348,0x28d)+'n']='\x0a_Mencari\x20'+'random\x20gam'+_0x4077ab(0x85b,0x8e4,0x92c,0x933);const _0x177c73={};_0x177c73[_0x4077ab(0x7b5,0x61c,0x789,0x773)]=_0x3b4225(0x237,0x394,0x387,0x1ec)+_0x4077ab(0x42d,0x6a7,0x7d7,0x670),_0x177c73[_0x3b4225(0xf7,0x2ab,0x128,-0x4)]=[_0x31f9af];const _0x2ecf68={};_0x2ecf68[_0x3b4225(0x205,0x1b0,0xb6,0x3df)]=_0x4077ab(0x874,0x814,0x99c,0x59e)+_0x4077ab(0x7ae,0x8a2,0x99b,0x6eb),_0x2ecf68[_0x4077ab(0x8f1,0x990,0x780,0xa39)]=_0x3b4225(0x1a6,0x4d,-0x1c2,-0x4b),_0x2ecf68[_0x3b4225(0x371,0xf8,0x81,0x204)+'n']=_0x3b4225(0x5c9,0x5e1,0x52c,0x347)+'\x20member\x20gr'+_0x4077ab(0x861,0x79d,0x854,0x73e);const _0x3efa1a={};_0x3efa1a['title']=_0x3b4225(0x67c,0x394,0x2f8,0xc5)+_0x4077ab(0x82c,0x985,0xabc,0x8b7),_0x3efa1a['rows']=[_0x2ecf68];const _0xe5c408={};_0xe5c408[_0x4077ab(0x7b0,0x61c,0x689,0x533)]=_0x3b4225(0x58c,0x575,0x350,0x28d)+'ing\x20Comman'+'d',_0xe5c408[_0x4077ab(0x96f,0x990,0x972,0x842)]=_0x3b4225(-0x1d8,0xc0,-0x50,0x12c),_0xe5c408[_0x4077ab(0x399,0x564,0x48f,0x464)+'n']=_0x3b4225(0x4c,0x343,0x479,0x5eb)+_0x4077ab(0xb72,0x8f2,0x626,0x8f4)+'g_';const _0x4693ea={};_0x4693ea[_0x4077ab(0x4f2,0x61c,0x556,0x37a)]=_0x4077ab(0x6ca,0x800,0xa69,0x53d)+'e-7',_0x4693ea[_0x3b4225(0x1d4,0x2ab,0x4cf,0x596)]=[_0xe5c408];const _0x170f7f={};_0x170f7f['title']=_0x3b4225(0x3b9,0x2a9,0x29f,-0x25)+_0x3b4225(0x78f,0x598,0x602,0x588),_0x170f7f[_0x4077ab(0xb32,0x990,0xc2c,0xc7c)]=_0x4077ab(0x9ca,0x91f,0x9d9,0x739),_0x170f7f[_0x4077ab(0x380,0x564,0x476,0x3c4)+'n']=_0x4077ab(0x97e,0x751,0x638,0x7f3)+_0x4077ab(0x5bd,0x5c1,0x5c1,0x49f)+_0x4077ab(0x95f,0x727,0x67d,0x9fa)+_0x3b4225(0x48a,0x5b4,0x676,0x4b4);const _0x15fe54={};_0x15fe54[_0x3b4225(0x156,0x1b0,0x164,-0x99)]=_0x4077ab(0x9ae,0x800,0x874,0x64f)+'e-8',_0x15fe54['rows']=[_0x170f7f];const _0x268669={};_0x268669[_0x3b4225(0x46e,0x1b0,0x232,-0xca)]=_0x4077ab(0x3c1,0x587,0x5b9,0x818)+'rter\x20Comma'+'nd',_0x268669[_0x4077ab(0xb41,0x990,0xaaf,0x6d3)]='converterc'+'md',_0x268669[_0x3b4225(0x81,0xf8,-0x1df,-0x1e0)+'n']=_0x3b4225(-0x126,0xd0,0x95,-0xc0)+_0x4077ab(0xb42,0x9da,0x9e2,0xcc6)+_0x3b4225(0x8ec,0x603,0x33b,0x372)+_0x3b4225(0x86,0x1c7,0x389,0x433);const _0xe2d295={};_0xe2d295[_0x4077ab(0x782,0x61c,0x5b9,0x8e7)]=_0x3b4225(0x509,0x394,0x22c,0x4aa)+_0x3b4225(0x67b,0x543,0x3f3,0x746),_0xe2d295[_0x4077ab(0x82b,0x717,0x8c3,0x469)]=[_0x268669];const _0x20768b={};_0x20768b[_0x3b4225(0x12,0x1b0,-0x53,0x71)]=_0x3b4225(0x143,0x359,0x46e,0x376)+_0x4077ab(0x84d,0x709,0x450,0x990)+'mmand',_0x20768b['rowId']=_0x3b4225(0x83e,0x5b7,0x457,0x756),_0x20768b['descriptio'+'n']=_0x4077ab(0x7a7,0x7f9,0x7a2,0x85f)+'gambar\x20jad'+_0x4077ab(0x5cd,0x697,0x5b0,0x5bb)+_0x3b4225(0x523,0x43f,0x632,0x537);const _0x53a372={};_0x53a372[_0x3b4225(0x90,0x1b0,0x24f,0x128)]=_0x4077ab(0x5dc,0x800,0xa7c,0x7eb)+_0x3b4225(0x3a8,0xe5,-0xc6,0xf3),_0x53a372[_0x4077ab(0x62c,0x717,0x71c,0x618)]=[_0x20768b];const _0x536dad={};_0x536dad['title']=_0x3b4225(0x311,0x479,0x1df,0x6fa)+_0x4077ab(0x7cf,0x75b,0x9ad,0x97b)+_0x4077ab(0xaa3,0xa97,0xa41,0x907),_0x536dad[_0x3b4225(0x454,0x524,0x6af,0x6e3)]=_0x3b4225(0x84a,0x5b7,0x486,0x6cb)+'2',_0x536dad[_0x4077ab(0x281,0x564,0x7a1,0x449)+'n']=_0x4077ab(0x9aa,0x7f9,0x574,0x9ed)+_0x3b4225(0x69e,0x53a,0x4b2,0x6b8)+_0x3b4225(0x206,0x282,0x317,0xca);const _0x15d356={};_0x15d356[_0x4077ab(0x7cd,0x61c,0x360,0x4ec)]=_0x3b4225(0x3d5,0x394,0x68f,0x547)+_0x4077ab(0x437,0x5f5,0x53c,0x3ad),_0x15d356['rows']=[_0x536dad];const _0x5265a8={};_0x5265a8[_0x3b4225(-0x28,0x1b0,0x170,-0xa8)]=_0x3b4225(0x2e7,0x3be,0x29c,0x552)+_0x4077ab(0x559,0x779,0x995,0x89e)+_0x3b4225(0x3c1,0x4f3,0x230,0x404),_0x5265a8[_0x4077ab(0x985,0x990,0xc15,0x699)]=_0x3b4225(0x598,0x620,0x365,0x58e)+'cmd',_0x5265a8[_0x4077ab(0x2e2,0x564,0x312,0x37f)+'n']=_0x3b4225(0x161,0xd4,0x33c,0x314)+'kan\x20fitur\x20'+_0x4077ab(0xbcb,0x9df,0x767,0xba0);const _0x476826={};_0x476826[_0x4077ab(0x76f,0x61c,0x650,0x3c7)]=_0x4077ab(0x7c4,0x800,0x8c9,0x7c4)+_0x3b4225(0x2a7,0x10d,0x85,0x146),_0x476826[_0x4077ab(0x537,0x717,0x88e,0x749)]=[_0x5265a8];const _0x1a1d82={};_0x1a1d82[_0x4077ab(0x458,0x61c,0x8e9,0x557)]=_0x3b4225(0x20c,0x4c1,0x2fe,0x48a)+_0x3b4225(0xa0,0x17a,0x2fd,0xef)+_0x4077ab(0x65b,0x832,0x71e,0xa8d),_0x1a1d82['rowId']=_0x3b4225(0x4a7,0x386,0x9f,0x1a7),_0x1a1d82[_0x4077ab(0x6c4,0x564,0x32f,0x6a9)+'n']=_0x4077ab(0xbd2,0x9ef,0xa7a,0xc72)+_0x3b4225(-0x224,0x86,-0xd,-0x26e)+'e_';const _0x2f3da5={};_0x2f3da5['title']='Sub\x20Menu\x20K'+'e-13',_0x2f3da5['rows']=[_0x1a1d82];const _0x51089d={};_0x51089d[_0x3b4225(-0x3b,0x1b0,0x22f,0x2d1)]=_0x3b4225(0x24a,0x15c,0x3c,0x2cb)+_0x3b4225(-0xb6,0xf0,0x2e5,0x1f8)+_0x4077ab(0x7f1,0x95f,0x741,0xbb1),_0x51089d[_0x3b4225(0x2b4,0x524,0x80b,0x38a)]=_0x4077ab(0xb6c,0x876,0xa50,0x6fc),_0x51089d[_0x3b4225(0x1f1,0xf8,0x18b,0x276)+'n']=_0x4077ab(0x7e7,0x906,0xbc0,0x8fd)+_0x3b4225(0x41e,0x429,0x5fc,0x4d3)+_0x4077ab(0x27d,0x4ef,0x522,0x20f);const _0x273d54={};_0x273d54[_0x3b4225(0x336,0x1b0,0x23f,0x2de)]=_0x3b4225(0x59b,0x394,0x489,0x5a8)+_0x4077ab(0x8df,0x80d,0x520,0x56b),_0x273d54[_0x4077ab(0x46b,0x717,0x593,0x65f)]=[_0x51089d];const _0x2c2c7a={};_0x2c2c7a[_0x3b4225(-0xf4,0x1b0,-0x132,0x3cb)]=_0x3b4225(-0x275,0x5a,0x328,0x44)+_0x3b4225(0x198,0x3c5,0x179,0x365)+'d',_0x2c2c7a[_0x4077ab(0xc3e,0x990,0x713,0x96e)]=_0x4077ab(0x532,0x6af,0x58c,0x637),_0x2c2c7a[_0x4077ab(0x756,0x564,0x4fd,0x691)+'n']=_0x3b4225(0x7fd,0x54a,0x6f7,0x415)+_0x4077ab(0x969,0x8b9,0xa6c,0x8b7)+'\x20menggunak'+'an\x20bot_';const _0x20a6de={};_0x20a6de[_0x3b4225(-0x57,0x1b0,0x297,-0x142)]=_0x4077ab(0x817,0x800,0x588,0x758)+_0x3b4225(0x420,0x619,0x614,0x741),_0x20a6de[_0x3b4225(0x21e,0x2ab,0x3a,0x4d4)]=[_0x2c2c7a];const _0x2aba83={};_0x2aba83['title']=_0x3b4225(0x89b,0x610,0x8c4,0x3b2)+'s\x20Command',_0x2aba83[_0x3b4225(0x22b,0x524,0x630,0x59b)]='othercmd',_0x2aba83[_0x4077ab(0x665,0x564,0x366,0x768)+'n']=_0x3b4225(0x2a5,0x205,-0x37,-0xd8)+_0x4077ab(0x73d,0x59d,0x404,0x559);const _0x79bec={};_0x79bec['title']=_0x3b4225(0x429,0x394,0x5e2,0x375)+_0x3b4225(-0x7d,0x8d,0x2d,-0xfa),_0x79bec[_0x3b4225(-0x1d,0x2ab,0x3ac,0x4ad)]=[_0x2aba83];const _0x4bedd2={};_0x4bedd2[_0x3b4225(-0x69,0x1b0,0x345,-0x70)]=_0x4077ab(0x990,0x760,0x66e,0x4b2)+'\x20Command',_0x4bedd2[_0x3b4225(0x2ea,0x524,0x629,0x3b6)]=_0x3b4225(0x21c,0x46f,0x435,0x5bd),_0x4bedd2[_0x4077ab(0x6fa,0x564,0x6a1,0x72f)+'n']=_0x4077ab(0xa74,0x7f7,0x91f,0x661)+_0x4077ab(0xabc,0x8f8,0x72f,0xbb5)+_0x4077ab(0x9ff,0x740,0x45a,0x8a5)+'ot_';const _0x4d8074={};_0x4d8074[_0x3b4225(0x1e8,0x1b0,0x301,0x26)]=_0x3b4225(0x63c,0x394,0x5bb,0x628)+_0x4077ab(0x9cd,0x99f,0x968,0x94b),_0x4d8074[_0x3b4225(0x21d,0x2ab,0x4b0,0x447)]=[_0x4bedd2];const _0x2085cb={};_0x2085cb[_0x3b4225(0x199,0x1b0,0x3e0,0x385)]=_0x4077ab(0x3e1,0x5cf,0x8b6,0x3e8)+'n\x20Command',_0x2085cb[_0x3b4225(0x34b,0x524,0x6e8,0x22d)]=_0x4077ab(0x68a,0x918,0x833,0x946),_0x2085cb[_0x3b4225(0x3ba,0xf8,-0x176,0x89)+'n']=_0x4077ab(0xd24,0xa82,0x956,0xbb9)+_0x3b4225(0x71a,0x4e4,0x665,0x602)+'k_';const _0x550af1={};_0x550af1[_0x4077ab(0x3d8,0x61c,0x4fc,0x453)]='Sub\x20Menu\x20K'+_0x4077ab(0xb04,0x88e,0x630,0x9a2),_0x550af1[_0x3b4225(0x58f,0x2ab,0x56a,0x14b)]=[_0x2085cb];const _0x339737={};_0x339737[_0x3b4225(-0xcd,0x1b0,0x214,0x61)]=_0x4077ab(0x8da,0x8c7,0xa9c,0xb35)+_0x3b4225(0x209,0x105,0x12a,-0x16c),_0x339737[_0x4077ab(0xc2c,0x990,0x84d,0xa15)]=_0x4077ab(0x93a,0x971,0x82e,0x755),_0x339737[_0x4077ab(0x341,0x564,0x7db,0x47d)+'n']=_0x4077ab(0x94f,0x8ea,0x73e,0xa26)+_0x3b4225(0x8a6,0x62c,0x694,0x8c5)+'\x20cantik_';const _0x2ac8c8={};_0x2ac8c8['title']=_0x3b4225(0x1d0,0x394,0x3a1,0x499)+_0x4077ab(0x6fd,0x988,0x695,0x882),_0x2ac8c8[_0x4077ab(0x698,0x717,0x7cc,0x499)]=[_0x339737];const _0x1b7f2c={};_0x1b7f2c['title']=_0x4077ab(0x3b2,0x596,0x617,0x7c4)+_0x3b4225(0x48c,0x1a4,0x3a7,-0xec),_0x1b7f2c['rowId']='primboncmd',_0x1b7f2c[_0x4077ab(0x59e,0x564,0x58c,0x5c4)+'n']=_0x4077ab(0x738,0x69c,0x8fe,0x698)+_0x4077ab(0x9f0,0x798,0x9c3,0x98d);const _0x3c6df1={};_0x3c6df1[_0x3b4225(0x415,0x1b0,0x2ce,0x1ab)]='Sub\x20Menu\x20K'+_0x3b4225(0x48e,0x439,0x685,0x2dc),_0x3c6df1[_0x4077ab(0x9f8,0x717,0x6d1,0x82d)]=[_0x1b7f2c];const _0x1b7708={};_0x1b7708[_0x4077ab(0x4a2,0x61c,0x3d8,0x394)]='🥁\x20〉ɞ\x20Teles'+_0x4077ab(0xce5,0xa93,0x8a5,0xb2a)+'mand',_0x1b7708[_0x4077ab(0xac4,0x990,0xbe7,0x9f3)]='telecmd',_0x1b7708[_0x3b4225(0x4c,0xf8,-0x127,0x27f)+'n']=_0x4077ab(0x905,0x9ef,0x799,0x900)+'tiker\x20dari'+_0x3b4225(0x400,0x2c8,0x5ad,0x276);const _0x1bcab5={};_0x1bcab5[_0x3b4225(-0xba,0x1b0,0x284,0x29b)]=_0x3b4225(0x576,0x394,0x1a8,0x176)+_0x4077ab(0x672,0x87b,0x597,0xa53),_0x1bcab5[_0x3b4225(0x3ad,0x2ab,0x335,0x148)]=[_0x1b7708];const _0x28a9af={};_0x28a9af[_0x3b4225(0x11e,0x1b0,0x150,0x2d8)]=_0x4077ab(0x473,0x669,0x522,0x8dc)+_0x4077ab(0x745,0x64e,0x431,0x645)+'nd',_0x28a9af[_0x3b4225(0x810,0x524,0x4cd,0x6e8)]=_0x3b4225(0x2da,0x256,0x458,0x52d),_0x28a9af['descriptio'+'n']=_0x4077ab(0x8d1,0x7f9,0x57c,0x7b8)+'logo\x20keren'+_0x4077ab(0x669,0x608,0x7b5,0x4e6)+'t_';const _0x2dd800={};_0x2dd800['title']=_0x3b4225(0x5ed,0x394,0x29f,0x17d)+_0x4077ab(0xb37,0x940,0xb41,0xb74),_0x2dd800[_0x3b4225(0x27b,0x2ab,0x9b,0x228)]=[_0x28a9af];const _0x483bfe={};_0x483bfe['title']='🎧\x20〉ɞ\x20Sound'+'\x20Command',_0x483bfe[_0x3b4225(0x44f,0x524,0x72e,0x32e)]=_0x4077ab(0x86d,0xa0e,0xaf0,0xc01),_0x483bfe[_0x4077ab(0x68c,0x564,0x77c,0x58e)+'n']=_0x4077ab(0x7de,0x9ef,0x8cb,0xc80)+_0x3b4225(0x202,0x34d,0x5c1,0x3b7);const _0x1ca498={};_0x1ca498[_0x4077ab(0x63b,0x61c,0x326,0x8ab)]='Sub\x20Menu\x20K'+_0x4077ab(0x6f6,0x58d,0x73b,0x3be),_0x1ca498[_0x4077ab(0x617,0x717,0x4c7,0x5db)]=[_0x483bfe];const _0x49613f={};_0x49613f[_0x3b4225(-0x70,0x1b0,0x84,0x279)]=_0x3b4225(0x2cb,0x1c5,-0x15,0x291)+_0x3b4225(0x112,0xd3,0x2a3,0x2d6)+'and',_0x49613f[_0x3b4225(0x675,0x524,0x5b0,0x28c)]='logocmd',_0x49613f[_0x4077ab(0x85d,0x564,0x699,0x514)+'n']=_0x4077ab(0xa24,0x7f9,0x54e,0xa78)+_0x4077ab(0x380,0x5f4,0x688,0x5b5)+_0x3b4225(0x3b2,0x54f,0x413,0x3bf);const _0x599b3d={};_0x599b3d[_0x4077ab(0x36b,0x61c,0x60b,0x45f)]='Sub\x20Menu\x20K'+_0x3b4225(0xbb,0x9c,0x8f,-0x1a3),_0x599b3d[_0x3b4225(0x10d,0x2ab,0x3ee,0x49b)]=[_0x49613f];const _0x50ddeb={};_0x50ddeb[_0x4077ab(0x4e7,0x61c,0x3cd,0x8b6)]='🕌\x20〉ɞ\x20Islam'+_0x4077ab(0x843,0x70d,0x55b,0x70c),_0x50ddeb[_0x3b4225(0x49e,0x524,0x751,0x7fa)]=_0x3b4225(0x26d,0x48f,0x2f7,0x354),_0x50ddeb['descriptio'+'n']='\x0a_Fitur\x20is'+'lami_';const _0x11fed2={};_0x11fed2['title']=_0x4077ab(0x75b,0x800,0x564,0xaf9)+_0x4077ab(0x707,0x829,0x6e9,0x8eb),_0x11fed2[_0x3b4225(0x256,0x2ab,0xf,0x4a5)]=[_0x50ddeb];const _0x175384={};_0x175384[_0x3b4225(-0xbd,0x1b0,-0xf5,-0x4b)]=_0x4077ab(0x73d,0x6c3,0x630,0x41f)+_0x3b4225(0x5f4,0x3e9,0x486,0x3f6),_0x175384[_0x3b4225(0x658,0x524,0x37f,0x621)]='sc',_0x175384['descriptio'+'n']=_0x3b4225(0x35e,0x624,0x335,0x644)+_0x3b4225(0x3a5,0x1bb,0x496,-0x27)+_0x4077ab(0x517,0x5f9,0x3eb,0x51d);const _0x465de7={};_0x465de7[_0x4077ab(0x729,0x61c,0x572,0x665)]=_0x3b4225(-0x1fd,0xd9,0xa7,0x23b)+'e',_0x465de7['rows']=[_0x175384];const _0x24fb50={};_0x24fb50[_0x3b4225(0x26b,0x1b0,-0x3c,0x231)]=_0x3b4225(0x20e,0x473,0x76d,0x2a0)+_0x4077ab(0xa6d,0x9c7,0x974,0x90c),_0x24fb50[_0x3b4225(0x6b3,0x524,0x6c8,0x506)]='thanksto',_0x24fb50[_0x4077ab(0x81f,0x564,0x57a,0x5ad)+'n']=_0x3b4225(0x707,0x4a6,0x510,0x544)+_0x3b4225(0x1c5,0x275,0x3b7,0x2fe)+_0x3b4225(0x220,0x51,0x11f,-0x298)+'\x20di\x20dalam\x20'+'bot\x20ini_';const _0x2aa2a6={};_0x2aa2a6[_0x4077ab(0x3e6,0x61c,0x8de,0x345)]=_0x3b4225(-0x13f,0xb2,0x7,-0x67),_0x2aa2a6[_0x3b4225(0x196,0x2ab,0x2cd,0x48b)]=[_0x24fb50];const sections=[_0xf2ee13,_0x48cdc6,_0x147f8d,_0x45d837,_0x54f287,_0x177c73,_0x3efa1a,_0x4693ea,_0x15fe54,_0xe2d295,_0x53a372,_0x15d356,_0x476826,_0x2f3da5,_0x273d54,_0x20a6de,_0x79bec,_0x4d8074,_0x550af1,_0x2ac8c8,_0x3c6df1,_0x1bcab5,_0x2dd800,_0x1ca498,_0x599b3d,_0x11fed2,_0x465de7,_0x2aa2a6],listMessage={'text':'╭─⬣「\x20_*INF'+_0x3b4225(0x453,0x349,0x47c,0x38d)+_0x4077ab(0x490,0x6a2,0x5b1,0x4ee)+_0x4077ab(0x5a2,0x4e4,0x6f4,0x70c)+pushname+(_0x4077ab(0x507,0x799,0x931,0x8d5)+'r*\x20:\x20@')+sender['split']('@')[0x15f3+0xce6+-0x32b*0xb]+(_0x3b4225(0x8f,0x54,0xc9,-0x4f)+'s*\x20:\x20')+(isCreator?_0x4077ab(0xac6,0x984,0xa3b,0xb2b)+botname:_0x4077ab(0x865,0x8cc,0xaac,0x7e8)+botname)+(_0x3b4225(0x54e,0x5d6,0x5e0,0x45f)+_0x3b4225(0x227,0x1f1,0x378,0x3e6)+_0x3b4225(0x7b5,0x548,0x6d0,0x317)+_0x4077ab(0x533,0x63e,0x619,0x578)+'\x20')+prefix+(_0x3b4225(0x33d,0x387,0xdf,0x39f)+_0x3b4225(0x20d,0x33f,0x360,0x317))+botname+(_0x4077ab(0x775,0x695,0x479,0x61e)+_0x4077ab(0x834,0x922,0xa5b,0x985))+ownernomer[_0x3b4225(-0x221,0xa3,0x70,0x1da)]('@')[0xd00+-0x2336+0x1636]+(_0x3b4225(0x68e,0x40c,0x4ee,0x65f)+':\x20')+(alpha['public']?_0x3b4225(0x311,0x6a,0x16,0x1cd)+'e':'Self-Mode')+('\x0a│\x20*Runtim'+_0x4077ab(0xbea,0xa46,0xc3d,0xd1b))+runtime(process[_0x3b4225(0x574,0x4c2,0x379,0x56a)]())+('\x0a│\x20*Lib*\x20:'+'\x20Baileys-M'+_0x3b4225(0x267,0x3d1,0x5d1,0x1da)+'⬣\x0a\x0a╭─⬣「\x20_*'+_0x3b4225(0x148,0x1ba,0xe9,-0x4f)+_0x3b4225(0x1f2,0x344,0xe7,0x43f)+_0x3b4225(0xfe,0x8e,-0x1c5,0xbe)+'\x20')+time+(_0x4077ab(0x8d3,0x73d,0x971,0x775)+':\x20')+wita+(_0x4077ab(0xb15,0x968,0x8cb,0x788)+'\x20')+wit+_0x4077ab(0x684,0x582,0x74c,0x6ae),'footer':'©\x20'+ownername,'title':_0x4077ab(0x9ca,0x7df,0x804,0xa81)+salam+'\x20'+pushname+_0x4077ab(0x7cf,0x66c,0x52e,0x543),'buttonText':_0x4077ab(0xaec,0x926,0xa4d,0xc11),'mentions':[sender,ownernomer+('@s.whatsap'+'p.net')],'sections':sections},_0x1d83b3={};_0x1d83b3[_0x3b4225(0x581,0x47d,0x1ac,0x58a)]=fgif,alpha[_0x3b4225(0x5bc,0x5c6,0x750,0x756)+'e'](m['chat'],listMessage,_0x1d83b3);break;case _0x3b4225(0x56f,0x3f3,0x5cf,0x495):case _0x3b4225(0x156,0xef,-0x140,-0x12d)+'e':case _0x4077ab(0xa90,0x92b,0xab1,0xbb7):{if(!text)return reply(_0x4077ab(0x4fa,0x748,0x5ff,0x71e)+_0x4077ab(0xa36,0x924,0xaee,0x6c8)+_0x3b4225(0x6d2,0x4f9,0x555,0x4d8)+'n\x20'+(prefix+command)+_0x3b4225(0x168,0xae,0x42,-0xce));if(text[_0x4077ab(0x45b,0x5af,0x4dd,0x617)]('|'))return reply(_0x4077ab(0x770,0x748,0x81f,0x5e8)+_0x4077ab(0x9cb,0x924,0x836,0x736)+_0x3b4225(0x676,0x4f9,0x542,0x48b)+'n\x20'+(prefix+command)+_0x4077ab(0x6a2,0x51a,0x233,0x30c));if(!/webp/[_0x4077ab(0x517,0x744,0x4d7,0x50f)](mime)&&/image/[_0x3b4225(0x467,0x2d8,0x31f,0x455)](mime)){reply(lang[_0x4077ab(0x90a,0x871,0xb65,0x9fd)]()),mee=await alpha[_0x3b4225(0x63d,0x59f,0x636,0x69e)+_0x4077ab(0x757,0x9e8,0xa56,0x87e)+'Message'](quoted),mem=await TelegraPh(mee),meme=_0x3b4225(0xd4,0x3cb,0x1af,0x2c2)+_0x3b4225(0x1be,0x19a,-0x45,0x13a)+_0x4077ab(0x576,0x6b0,0x945,0x4e1)+'s/custom/-'+'/'+text+(_0x3b4225(0x4b7,0x44f,0x5bd,0x391)+_0x3b4225(0x570,0x4b1,0x3cb,0x24a))+mem;const _0x280d09={};_0x280d09['packname']=global[_0x4077ab(0x5a9,0x6a8,0x72f,0x4f1)],_0x280d09['author']=global['author'],memek=await alpha['sendImageA'+_0x4077ab(0x723,0x7dd,0x785,0x7bd)](m[_0x3b4225(0x175,0x144,0x7b,0xea)],meme,m,_0x280d09),await fs[_0x4077ab(0x6c5,0x6dc,0x641,0x8ca)](memek);}else{if(/webp/[_0x4077ab(0x4d0,0x744,0xa12,0x507)](mime)){reply(lang['wait']());let media=await alpha[_0x4077ab(0x848,0xa0b,0x9c2,0x861)+_0x4077ab(0xc9b,0x9e8,0xc5d,0xabb)+_0x3b4225(0x3f1,0x204,0x2c7,0x286)](quoted),ran=await(_0x4077ab(0x854,0x96f,0x98f,0xa53)+_0x4077ab(0x706,0x94e,0x722,0x7ef))+getRandom(_0x4077ab(0x519,0x6a6,0x559,0x3df));exec(_0x4077ab(0x48c,0x66e,0x62c,0x948)+media+'\x20'+ran,_0xf585cd=>{const _0x40ce96={'gBjou':function(_0x11bc5e,_0x17a949){return _0x11bc5e(_0x17a949);},'harlJ':function(_0x476269,_0x4c2058){return _0x476269(_0x4c2058);}};fs[_0x368ba9(0x4e1,0x5fa,0x851,0x751)](media);if(_0xf585cd)return _0x40ce96[_0x3fb902(0x493,0x75b,0x74e,0xa31)](reply,_0x3fb902(0x540,0x6ec,0x50b,0x851));function _0x368ba9(_0x3878d7,_0xafc448,_0x58ff49,_0x298bb3){return _0x4077ab(_0x298bb3,_0xafc448- -0xe2,_0x58ff49-0x9e,_0x298bb3-0x177);}function _0x3fb902(_0x118d0e,_0x19a9da,_0x28e2ee,_0x2a3dc6){return _0x4077ab(_0x2a3dc6,_0x19a9da-0x56,_0x28e2ee-0x1e9,_0x2a3dc6-0x89);}_0x40ce96['harlJ'](TelegraPh,ran)['then'](async _0xb61fac=>{let _0x25b506=_0x38c101(0x1aa,0x698,0x492,0x5d4)+_0x38c101(0x4b0,0x489,0x261,0x4d9)+_0x38c101(0x184,0x380,0x30b,0x1ad)+_0x38c101(0x13a,0x23b,0x31f,0x45a)+'/'+text+(_0x38c101(0x288,0x5d3,0x516,0x636)+'round=')+_0xb61fac;const _0x4ba2f5={};function _0x4a4814(_0x4dcf9a,_0x34ca74,_0x21525d,_0x29f0bf){return _0x368ba9(_0x4dcf9a-0x1d8,_0x21525d-0x73,_0x21525d-0x68,_0x34ca74);}_0x4ba2f5[_0x4a4814(0x5ea,0x375,0x639,0x834)]=global[_0x4a4814(0x3c1,0x660,0x639,0x37b)],_0x4ba2f5[_0x38c101(0x2f0,0x766,0x569,0x720)]=global[_0x38c101(0x2bd,0x475,0x569,0x357)];function _0x38c101(_0xbd819d,_0x29181c,_0x49315f,_0x4aa0d4){return _0x368ba9(_0xbd819d-0x102,_0x49315f- -0x2c3,_0x49315f-0x1e8,_0xbd819d);}let _0xef215=await alpha[_0x38c101(0x463,0x171,0x204,0x3b0)+_0x38c101(0x666,0x277,0x438,0x6d2)](m['chat'],_0x25b506,m,_0x4ba2f5);await fs[_0x4a4814(0x778,0x8ce,0x66d,0x722)](_0xef215),await fs[_0x4a4814(0x3b1,0x58f,0x66d,0x700)](ran);});});}else reply('Kirim/Repl'+'y\x20Foto/Sti'+_0x4077ab(0x7ea,0x6ce,0x93c,0x811)+_0x3b4225(0x479,0x49f,0x6bf,0x5fe)+(prefix+command));}}break;case _0x3b4225(0xb8,0x240,-0x53,0x309):{if(!text)return reply(_0x3b4225(0x4d0,0x2dc,0x5c7,0x2d0)+'y\x20Foto\x20Den'+'gan\x20Captio'+'n\x20'+(prefix+command)+('\x20*teks|tek'+'s*'));if(!text[_0x4077ab(0x54b,0x5af,0x805,0x377)]('|'))return reply('Kirim/Repl'+_0x4077ab(0x89a,0x924,0xb53,0x7bd)+_0x3b4225(0x742,0x4f9,0x533,0x64d)+'n\x20'+(prefix+command)+('\x20*teks|tek'+'s*'));if(!/webp/['test'](mime)&&/image/[_0x4077ab(0x477,0x744,0x8b8,0x6fb)](mime)){reply(lang[_0x4077ab(0x5ea,0x871,0x7c6,0x7dc)]()),arg=args['join']('\x20'),atas=arg[_0x3b4225(0x2dd,0xa3,-0x254,0x170)]('|')[-0x347+-0x1*0x3b3+0x6fa],bawah=arg[_0x3b4225(0xe9,0xa3,-0xca,0x6e)]('|')[0xf93*0x1+-0x1f97+-0x1*-0x1005];let abeb=await alpha[_0x3b4225(0x83a,0x59f,0x33e,0x83d)+_0x3b4225(0x719,0x57c,0x7c1,0x690)+'Message'](quoted),abe=await TelegraPh(abeb),upz=_0x3b4225(0x3ce,0x3cb,0x585,0x2c6)+_0x3b4225(-0x48,0x19a,0x184,0x7e)+_0x3b4225(-0x6c,0x244,-0x5b,0x64)+_0x4077ab(0xa65,0x863,0xaff,0x9da)+atas+'/'+bawah+(_0x3b4225(0x54d,0x44f,0x3fb,0x728)+_0x3b4225(0x393,0x4b1,0x71f,0x6ee))+util[_0x3b4225(0x727,0x57d,0x709,0x606)](abe);const _0x37f1c6={};_0x37f1c6['packname']=global[_0x3b4225(0x2cf,0x23c,0x44d,0x1b1)],_0x37f1c6['author']=global[_0x4077ab(0x885,0x90e,0x79f,0x94a)];let mengmeme=await alpha['sendImageA'+_0x3b4225(0x2ca,0x371,0x27e,0x378)](m[_0x4077ab(0x4bb,0x5b0,0x5c7,0x3a2)],upz,m,_0x37f1c6);await fs[_0x4077ab(0x6c5,0x6dc,0x585,0x827)](mengmeme),await fs[_0x4077ab(0x47e,0x6dc,0x76c,0x79e)](abeb);}else{if(/webp/[_0x3b4225(0x40a,0x2d8,-0x11,0x2f9)](mime)){reply(lang[_0x3b4225(0x1a8,0x405,0x3d9,0x1c3)]()),arg=args['join']('\x20'),atas=arg['split']('|')[-0x47*-0x24+-0x1f1d*0x1+0x1521],bawah=arg[_0x4077ab(0x5a3,0x50f,0x747,0x7fa)]('|')[-0xdd8+0xa6*-0x2+-0x1*-0xf25];let media=await alpha[_0x4077ab(0x9c3,0xa0b,0x7a1,0xccb)+_0x3b4225(0x580,0x57c,0x3fa,0x5e8)+_0x4077ab(0x4a6,0x670,0x72a,0x749)](quoted),ran=await(_0x4077ab(0x770,0x96f,0x745,0x960)+_0x4077ab(0x7e6,0x94e,0xbc9,0x6cf))+getRandom('.png');exec(_0x4077ab(0x6c8,0x66e,0x752,0x391)+media+'\x20'+ran,_0x1374c1=>{function _0x2a195b(_0x1ee001,_0x31a4b9,_0x141e6d,_0x4516df){return _0x4077ab(_0x4516df,_0x31a4b9- -0x27e,_0x141e6d-0x1c1,_0x4516df-0x86);}const _0x174bc7={'nolWi':function(_0x1b62e1,_0x1a8c2e){return _0x1b62e1(_0x1a8c2e);},'NxmeT':function(_0x480e74,_0x38c88b){return _0x480e74+_0x38c88b;},'gVSrK':function(_0x1f2b05,_0xc3c0f9){return _0x1f2b05===_0xc3c0f9;},'XqHhP':_0x2a195b(0x53d,0x5dd,0x4b3,0x825),'LZcsw':'emror'};function _0x5f3ba5(_0x3a03f8,_0x1c7d4f,_0x4dcac7,_0xda5f5e){return _0x3b4225(_0x3a03f8,_0x1c7d4f-0x428,_0x4dcac7-0x18,_0xda5f5e-0x9e);}fs[_0x5f3ba5(0x741,0x698,0x515,0x3ae)](media);if(_0x1374c1)return reply(_0x174bc7[_0x2a195b(0x453,0x404,0x5f5,0x296)]);_0x174bc7[_0x5f3ba5(0x9c9,0x79e,0x9e7,0x6f2)](TelegraPh,ran)[_0x5f3ba5(0x8ce,0x6be,0x511,0x66b)](async _0x5b10de=>{function _0x2a9dfa(_0x3cceaa,_0x45d570,_0x1f68ab,_0x4335bb){return _0x5f3ba5(_0x1f68ab,_0x3cceaa- -0x1c9,_0x1f68ab-0x1c9,_0x4335bb-0x1e5);}function _0x45edcc(_0x590671,_0x5408b4,_0x1ea785,_0x2e49d4){return _0x2a195b(_0x590671-0x4f,_0x590671- -0x1cb,_0x1ea785-0x84,_0x5408b4);}if(_0x174bc7[_0x2a9dfa(0x62b,0x85a,0x59b,0x84c)](_0x174bc7[_0x2a9dfa(0x6fa,0x93f,0x462,0x44b)],_0x174bc7['XqHhP'])){let _0x152afc='https://ap'+'i.memegen.'+'link/image'+_0x2a9dfa(0x656,0x60e,0x6df,0x7e9)+atas+'/'+bawah+(_0x45edcc(0x472,0x2dc,0x4d5,0x3bd)+'round=')+_0x5b10de;const _0x3c69bf={};_0x3c69bf[_0x45edcc(0x25f,0x3e3,0x173,0x357)]=global[_0x45edcc(0x25f,0x247,0x1b6,0x293)],_0x3c69bf[_0x2a9dfa(0x701,0x68a,0x51a,0x67b)]=global[_0x2a9dfa(0x701,0x7a0,0x4c4,0x58c)];let _0x29b09d=await alpha[_0x45edcc(0x160,-0xfa,-0x18d,-0x113)+_0x45edcc(0x394,0x1e5,0x662,0x5a9)](m[_0x2a9dfa(0x3a3,0x278,0x5e9,0x1b6)],_0x152afc,m,_0x3c69bf);await fs[_0x45edcc(0x293,0x115,-0x53,0x2e8)](_0x29b09d),await fs[_0x2a9dfa(0x4cf,0x337,0x51c,0x73b)](ran);}else _0x174bc7[_0x2a9dfa(0x5d5,0x54b,0x7db,0x81c)](_0x376557,_0x2a9dfa(0x53b,0x259,0x783,0x5df)+'y\x20Foto/Sti'+_0x45edcc(0x285,0x1a1,0xf2,0x33c)+_0x45edcc(0x4c2,0x4ee,0x6a8,0x24e)+_0x174bc7[_0x2a9dfa(0x563,0x73e,0x7d4,0x691)](_0x58d01c,_0x545751));});});}else reply(_0x3b4225(0x3fa,0x2dc,0x309,0x4c9)+'y\x20Foto/Sti'+_0x3b4225(-0x4b,0x262,0x103,0x3f5)+'n\x20Caption\x20'+(prefix+command));}}break;case _0x4077ab(0xaee,0xa02,0x8af,0xa0b):{if(!text)return reply(_0x3b4225(0x3e6,0x2dc,0x2cb,0x509)+_0x3b4225(0x4e4,0x4b8,0x54d,0x468)+_0x4077ab(0xa16,0x965,0xb59,0x8f6)+'n\x20'+(prefix+command)+(_0x4077ab(0x37b,0x65e,0x571,0x3bc)+'s*'));if(!text['includes']('|'))return reply(_0x3b4225(0x531,0x2dc,0x267,0x39f)+_0x3b4225(0x6bc,0x4b8,0x318,0x70d)+_0x3b4225(0x4a1,0x4f9,0x72c,0x6da)+'n\x20'+(prefix+command)+(_0x3b4225(0x3c5,0x1f2,0x29f,0x248)+'s*'));if(!/webp/['test'](mime)&&/image/[_0x4077ab(0x470,0x744,0x574,0x684)](mime)){reply(lang[_0x4077ab(0x941,0x871,0x8fb,0xb27)]()),arg=args[_0x3b4225(0x38f,0xdf,-0x1ae,0x1eb)]('\x20'),atas=arg[_0x3b4225(-0x113,0xa3,-0x215,0x68)]('|')[-0xb1b*-0x2+-0x141*0x1+0x25*-0x91],bawah=arg[_0x4077ab(0x284,0x50f,0x2ab,0x2b1)]('|')[-0xe76+-0x11d*0x19+0x2a4c];let abeb=await alpha[_0x4077ab(0xbbc,0xa0b,0x7d6,0xb3c)+_0x3b4225(0x35a,0x57c,0x3c2,0x62b)+'Message'](quoted),abe=await TelegraPh(abeb),upz=_0x3b4225(0xdf,0x3cb,0x41c,0x6a3)+_0x4077ab(0x8ae,0x606,0x3a0,0x632)+_0x4077ab(0x42f,0x6b0,0x977,0x655)+_0x3b4225(0x374,0x3f7,0x58a,0x65c)+atas+'/'+bawah+(_0x3b4225(0x43b,0x44f,0x529,0x3a1)+_0x4077ab(0xb22,0x91d,0xa3f,0x8b5))+util[_0x3b4225(0x309,0x57d,0x40d,0x862)](abe),mengmeme=await alpha[_0x3b4225(0x1c9,0x17c,0x189,0x332)](m['chat'],upz,_0x3b4225(0x5f4,0x384,0x28f,0x38e),m);await fs[_0x3b4225(0x14a,0x270,0x30a,0x11a)](abeb);}else{if(/webp/[_0x4077ab(0x602,0x744,0x9f8,0x4f3)](mime)){reply(lang[_0x3b4225(0x26c,0x405,0x2a8,0x17f)]()),arg=args[_0x4077ab(0x2f1,0x54b,0x335,0x327)]('\x20'),atas=arg[_0x3b4225(-0xc8,0xa3,0x1ee,-0x19)]('|')[0x9b1*-0x2+-0xb09+0x1e6b],bawah=arg[_0x3b4225(-0x124,0xa3,-0x158,0x245)]('|')[0x1*0x2149+-0x1d93+-0x3b5];let media=await alpha[_0x4077ab(0xccb,0xa0b,0xb05,0x7ab)+_0x4077ab(0xccb,0x9e8,0x74e,0x900)+'Message'](quoted),ran=await('./image/to'+_0x4077ab(0xc01,0x94e,0x8b2,0x90c))+getRandom(_0x3b4225(0x3ce,0x23a,0x33b,0x4af));exec(_0x3b4225(0xeb,0x202,0x322,0x282)+media+'\x20'+ran,_0x2361a0=>{function _0x3a6a32(_0x556665,_0x28bc99,_0x1a60c7,_0x4da359){return _0x4077ab(_0x1a60c7,_0x28bc99- -0x2a6,_0x1a60c7-0x3,_0x4da359-0x4);}const _0x53f193={'nVoBE':_0x3a6a32(0x2a8,0x2fe,0x1c2,0x526),'VeZEx':'Nih','daokc':function(_0x40eaa4,_0x457a4c){return _0x40eaa4(_0x457a4c);},'YJvSL':_0x3d09d3(0x23,-0x239,-0x233,0x4f)};fs[_0x3d09d3(-0x238,0xd,0x374,0x95)](media);function _0x3d09d3(_0x1eca95,_0x488c22,_0x315c68,_0x1aa847){return _0x3b4225(_0x315c68,_0x1aa847- -0x1db,_0x315c68-0x1ee,_0x1aa847-0x5e);}if(_0x2361a0)return _0x53f193['daokc'](reply,_0x53f193[_0x3a6a32(0x4b6,0x3d7,0x6ba,0x606)]);TelegraPh(ran)[_0x3d09d3(-0x193,0x85,-0x144,0xbb)](async _0x58938b=>{function _0x3ba428(_0x19b030,_0x3e93d7,_0x1294fb,_0x13eb7d){return _0x3d09d3(_0x19b030-0xfe,_0x3e93d7-0x1d9,_0x1294fb,_0x19b030-0x5b4);}function _0x190dbd(_0x188a18,_0x44d4af,_0x2455b6,_0x15e7d2){return _0x3a6a32(_0x188a18-0x1d7,_0x44d4af-0xa2,_0x15e7d2,_0x15e7d2-0x1bc);}if(_0x3ba428(0x511,0x575,0x2c4,0x475)!==_0x53f193[_0x3ba428(0x9ea,0xb11,0x7b4,0x8a0)])throw new _0x18e8ae(_0xcf7288);else{let _0x16c86d=_0x190dbd(0x7ec,0x633,0x439,0x85c)+_0x190dbd(0x1dd,0x402,0x5b2,0x245)+_0x190dbd(0x5eb,0x4ac,0x4c5,0x22d)+_0x3ba428(0x7d0,0xa6f,0x950,0x93b)+atas+'/'+bawah+('.png?backg'+'round=')+_0x58938b,_0x32ce2e=await alpha[_0x3ba428(0x555,0x59f,0x396,0x408)](m[_0x190dbd(0x66a,0x3ac,0x324,0x5b6)],_0x16c86d,_0x53f193[_0x3ba428(0x889,0x608,0xafd,0xafa)],m);await fs['unlinkSync'](ran);}});});}else reply(_0x3b4225(0x13d,0x2dc,0x234,0x465)+_0x3b4225(0x473,0x25f,0x4b4,0x22f)+_0x4077ab(0x6aa,0x6ce,0x77c,0x5b1)+_0x4077ab(0xaa5,0x90b,0x8b4,0x93f)+(prefix+command));}}break;case _0x3b4225(0x54d,0x32b,0x36d,0x2b9):case _0x3b4225(0x723,0x43a,0x2d5,0x381):{if(kuismath[_0x3b4225(0x235,0x266,0x266,0x4b3)+'erty'](m[_0x3b4225(0x721,0x507,0x324,0x218)]['split']('@')[0x186c+0x244c+-0x3cb8]))throw _0x4077ab(0x622,0x549,0x56e,0x491)+'Sesi\x20Yang\x20'+_0x3b4225(0xc8,0x274,0x204,0x403)+_0x3b4225(0x428,0x614,0x498,0x72d);let {genMath,modes}=require(_0x4077ab(0x928,0x68b,0x4ef,0x805));if(!text)throw _0x4077ab(0x637,0x6e5,0x81a,0x96d)+Object[_0x3b4225(0x18a,0x392,0x12a,0x9e)](modes)['join'](_0x3b4225(0x4ef,0x5f5,0x504,0x340))+(_0x3b4225(0x783,0x4d8,0x717,0x2fc)+_0x3b4225(0x57f,0x4a4,0x2d2,0x227))+prefix+(_0x4077ab(0x9a1,0xaa2,0xc27,0xa79)+'m');let result=await genMath(text[_0x4077ab(0x672,0x592,0x459,0x3ab)+'e']());alpha[_0x3b4225(-0x148,0x15e,0x43,0x3be)](m[_0x4077ab(0x786,0x5b0,0x686,0x89c)],_0x4077ab(0xaa2,0x7cd,0x87e,0xa54)+'sil\x20dari:\x20'+result[_0x3b4225(0x489,0x24f,-0x17,0x2a5)]['toLowerCas'+'e']()+(_0x3b4225(0x892,0x618,0x786,0x66b)+'\x20')+(result[_0x4077ab(0x537,0x6f1,0x5e8,0x681)]/(-0x11f5+-0x1f6f+0x354c))[_0x3b4225(0x3b6,0x1ec,0x4ae,0x2ef)](-0xd3c+0x466*-0x7+0x2c08)+_0x4077ab(0x683,0x867,0xa2f,0x852),m)['then'](()=>{function _0x39e2ea(_0x46a18b,_0x77298d,_0x4ff30f,_0x2e51b2){return _0x3b4225(_0x77298d,_0x4ff30f-0x8a,_0x4ff30f-0xc5,_0x2e51b2-0x117);}const _0x14365e={};_0x14365e[_0x5ee5b3(0x779,0x68a,0x423,0x6f8)]=function(_0x2da1d0,_0x380619){return _0x2da1d0+_0x380619;};function _0x5ee5b3(_0x15b748,_0x3b21bf,_0x45ac35,_0x1df39f){return _0x4077ab(_0x3b21bf,_0x1df39f- -0x317,_0x45ac35-0x1a2,_0x1df39f-0x23);}_0x14365e[_0x39e2ea(0xb9,0x2f2,0x26f,0x137)]=_0x5ee5b3(0x301,0x1c4,0x6c0,0x455);const _0x5910e5=_0x14365e;console['log'](_0x5910e5[_0x5ee5b3(0x60b,0x490,0x665,0x6f8)](_0x5910e5[_0x39e2ea(0x463,0x491,0x26f,0x500)],result['jawaban'])),kuismath[m['sender'][_0x5ee5b3(0xc1,0x464,-0x7a,0x1f8)]('@')[0x1dbf+0xbdb*0x2+0x55*-0xa1]]=result['jawaban'];}),await sleep(result[_0x3b4225(0x448,0x285,0x397,0xe1)]),kuismath[_0x3b4225(0xec,0x266,0x181,0x238)+'erty'](m[_0x3b4225(0x347,0x507,0x308,0x4d6)]['split']('@')[-0x169a+-0x8*-0x30e+0x2*-0xeb])&&(m[_0x4077ab(0x9d1,0x745,0x869,0x7dd)](_0x4077ab(0x991,0x9d7,0x7bd,0x8bc)+'s\x0aJawaban:'+'\x20'+result[_0x4077ab(0x6cd,0x909,0x979,0x808)]),delete kuismath[m[_0x3b4225(0x365,0x507,0x36b,0x2ee)][_0x4077ab(0x3fb,0x50f,0x5b9,0x3b7)]('@')[0x716+-0xbf*-0x2+-0x894]]);}break;case'bc':case _0x3b4225(0x4b9,0x24d,0xed,0x3cd):case _0x4077ab(0x6fa,0x9ab,0x6eb,0xadd):{if(!isCreator&&!m[_0x3b4225(0x447,0x5af,0x871,0x778)][_0x4077ab(0xc61,0x9b3,0xb93,0x8d3)])throw mess[_0x4077ab(0xc27,0x986,0xa11,0xb88)];let anu=await store[_0x4077ab(0x816,0x663,0x3e5,0x721)][_0x4077ab(0x3bb,0x533,0x548,0x600)]()[_0x4077ab(0x8bb,0x987,0xb78,0x93b)](_0x137e1f=>_0x137e1f['id']);cc=await alpha[_0x4077ab(0xa63,0xa71,0x82b,0xa62)](q?m:m[_0x4077ab(0x613,0x8e9,0x5f0,0x690)]?await m[_0x4077ab(0x5ae,0x7b2,0x4fd,0xa21)+'bj']():![]||m),cck=q?q:cc[_0x3b4225(0x523,0x283,-0x2f,0x354)];let ranflam=await getBuffer(picak+_0x3b4225(0x4bd,0x5d7,0x3b1,0x365));m[_0x4077ab(0x520,0x745,0x783,0x5c3)](_0x4077ab(0x977,0x6ca,0x47f,0x4ef)+'roadcast\x20K'+'e\x20'+anu['length']+('\x20Chat\x0aWakt'+_0x4077ab(0xa94,0x7d0,0x9e2,0x815))+anu[_0x4077ab(0x901,0x6dd,0x456,0x74e)]*(0x2*-0xd96+0x1bb*0x3+-0x4*-0x57f+0.5)+_0x4077ab(0xa89,0x867,0x6ed,0x96c));for(let yoi of anu){await sleep(-0x1b44*-0x1+-0x221f+0x43d*0x3);const _0x6c2781={};_0x6c2781[_0x4077ab(0x679,0x812,0x942,0x91d)+'t']=_0x4077ab(0x809,0x599,0x4a7,0x427)+_0x4077ab(0x47f,0x60e,0x5f8,0x77c),_0x6c2781[_0x4077ab(0x503,0x764,0x4e5,0x6ef)]=''+youtube;const _0x1b0741={};_0x1b0741[_0x3b4225(0x340,0xbd,0x53,0x17f)]=_0x6c2781;const _0x573052={};_0x573052[_0x4077ab(0x9a2,0x812,0x6dc,0xa28)+'t']=_0x4077ab(0x7d7,0xa44,0x8a2,0xd16),_0x573052['url']=''+myweb;const _0x5b3016={};_0x5b3016['urlButton']=_0x573052;const _0x577539={};_0x577539[_0x4077ab(0x7fc,0x812,0x935,0x7c3)+'t']=_0x4077ab(0x64d,0x629,0x5c2,0x3ce),_0x577539['id']='donate';const _0x1f99e2={};_0x1f99e2[_0x4077ab(0x789,0x4da,0x56b,0x62b)+_0x3b4225(0x52c,0x621,0x683,0x7e3)]=_0x577539;const _0x277686={};_0x277686['displayTex'+'t']='Owner',_0x277686['id']='owner';const _0x547a64={};_0x547a64[_0x4077ab(0x5d3,0x4da,0x733,0x3f5)+_0x3b4225(0x338,0x621,0x57b,0x577)]=_0x277686;const _0xe978cb={};_0xe978cb['displayTex'+'t']=_0x3b4225(0x56a,0x5bc,0x673,0x666),_0xe978cb['id']=_0x4077ab(0x72e,0x88c,0x871,0x7a8);const _0x2340ab={};_0x2340ab[_0x4077ab(0x359,0x4da,0x363,0x1f8)+_0x3b4225(0x739,0x621,0x72d,0x64a)]=_0xe978cb;var but=[_0x1b0741,_0x5b3016,_0x1f99e2,_0x547a64,_0x2340ab];alpha[_0x3b4225(0x176,0x10b,-0x8,0x2e1)+'c'](yoi,_0x4077ab(0xbf6,0x90f,0xa0a,0x79c)+_0x4077ab(0x67f,0x4cf,0x796,0x49a)+cck,'©\x20'+ownername,ranflam,but);}m['reply'](_0x4077ab(0xa77,0xa4b,0xadb,0xbc4)+_0x3b4225(0x3ba,0x11e,-0x4,0x5f));}break;case _0x3b4225(0x372,0x263,-0x14,-0x84)+'c':case _0x4077ab(0x6db,0x6cf,0x664,0x7ce)+_0x3b4225(0x6ad,0x3fe,0x1b6,0x59c):case _0x3b4225(0x311,0x1e8,0x37,-0x78):{if(!isCreator&&!m[_0x3b4225(0x6ac,0x5af,0x810,0x610)][_0x4077ab(0x861,0x9b3,0xa07,0xc7c)])return reply(mess[_0x4077ab(0x6e4,0x986,0x8e1,0x752)]);if(!text)return reply('Kirim\x20peri'+'ntah\x20'+(prefix+command)+_0x3b4225(0x99,0xcd,0x2cd,-0x5f));let getGroups=await alpha[_0x3b4225(0x5f4,0x470,0x332,0x2b9)+'AllPartici'+_0x3b4225(0x178,0x399,0x3cb,0x2bd)](),groups=Object['entries'](getGroups)[_0x4077ab(0x995,0x917,0xb71,0x992)](0xb*-0x25+-0x54e+0x6e5)['map'](_0x24a104=>_0x24a104[-0x409*-0x7+-0xf6a*0x1+0x335*-0x4]),anu=groups['map'](_0x1793e8=>_0x1793e8['id']);reply(_0x3b4225(0x22,0x25e,0x3c6,0x116)+_0x3b4225(-0x5c,0x223,0x325,-0x9f)+'e\x20'+anu['length']+('\x20Group\x20Cha'+'t,\x20Waktu\x20S'+_0x3b4225(0x37f,0x459,0x363,0x6a1))+anu[_0x4077ab(0x7f3,0x6dd,0x54e,0x6d2)]*(0x1*0x1144+0x230+0x1373*-0x1+0.5)+_0x3b4225(0x453,0x3fb,0x4fd,0x50e));for(let i of anu){await sleep(0x8f8+-0x360*0x1+-0x22*-0x2);let ranflam=await getBuffer(picak+(_0x4077ab(0x77b,0x4e5,0x586,0x4ca)+_0x4077ab(0xa28,0x852,0x697,0x732)));const _0x38bad5={};_0x38bad5[_0x3b4225(0x692,0x3a6,0x3b4,0x45d)+'t']=_0x4077ab(0x629,0x599,0x654,0x3de)+_0x3b4225(0x24b,0x1a2,0x3c0,0x107),_0x38bad5[_0x4077ab(0x6fc,0x764,0x6bd,0x95f)]=''+youtube;const _0x4cb72b={};_0x4cb72b[_0x3b4225(0x199,0xbd,0x29e,0x22)]=_0x38bad5;const _0x743c53={};_0x743c53['displayTex'+'t']=_0x3b4225(0x4fa,0x5d8,0x84c,0x53d),_0x743c53[_0x3b4225(0x69,0x2f8,0x39e,0x3bf)]=''+myweb;const _0x2f750e={};_0x2f750e[_0x4077ab(0x71c,0x529,0x2ac,0x2ab)]=_0x743c53;const _0x535567={};_0x535567[_0x4077ab(0x79b,0x812,0xab7,0x555)+'t']='Donasi',_0x535567['id']='donate';const _0x8e04b8={};_0x8e04b8['quickReply'+_0x3b4225(0x86e,0x621,0x5a7,0x326)]=_0x535567;const _0x2bff25={};_0x2bff25['displayTex'+'t']=_0x4077ab(0x589,0x5ab,0x63f,0x8a6),_0x2bff25['id']=_0x3b4225(0x383,0x51a,0x386,0x4f5);const _0x533eb6={};_0x533eb6[_0x4077ab(0x23e,0x4da,0x22c,0x1eb)+'Button']=_0x2bff25;const _0x45bd21={};_0x45bd21[_0x3b4225(0x464,0x3a6,0x695,0x51a)+'t']='Rules',_0x45bd21['id']='rules';const _0x55c1bb={};_0x55c1bb[_0x4077ab(0x63b,0x4da,0x53f,0x318)+_0x3b4225(0x449,0x621,0x799,0x7a1)]=_0x45bd21;var but=[_0x4cb72b,_0x2f750e,_0x8e04b8,_0x533eb6,_0x55c1bb];alpha[_0x4077ab(0x593,0x577,0x868,0x494)+'c'](i,_0x4077ab(0x9b4,0x90f,0x791,0xade)+_0x3b4225(0xab,0x233,0x42c,0x73)+text,'©\x20'+ownername,ranflam,but);}reply('Sukses\x20Men'+_0x4077ab(0x76b,0x4b5,0x488,0x2a7)+_0x3b4225(0x5f4,0x467,0x30c,0x1ba)+anu[_0x3b4225(0x448,0x271,0x4b4,0x4ea)]+(_0x4077ab(0x5c1,0x56e,0x43b,0x3bc)+'t'));}break;case'stickertag':case'sticktag':case _0x4077ab(0xce5,0xa5f,0xac2,0x9af):{if(!m[_0x3b4225(0x6a5,0x52e,0x3e8,0x71d)])return reply(mess[_0x4077ab(0x635,0x8a3,0xa8f,0x743)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x4077ab(0x5c3,0x686,0x697,0x39d)]());if(!/webp/['test'](mime))return reply(_0x3b4225(0x1c5,0x3b0,0x655,0x6a8)+_0x4077ab(0x4c0,0x6e7,0x6ca,0x9b2)+_0x3b4225(0x78c,0x4ae,0x4a1,0x65d)+(prefix+command));quoted['download']()[_0x4077ab(0x474,0x702,0x797,0x4ba)](async _0x11aeea=>{function _0x40d30a(_0x754f6e,_0x3f3f39,_0x231d17,_0x36a46f){return _0x3b4225(_0x36a46f,_0x754f6e- -0x2eb,_0x231d17-0x17f,_0x36a46f-0xfe);}const _0x4a47e1={};_0x4a47e1[_0x40d30a(0x192,0x2d5,0x116,0x134)]=fkontak;function _0x2de1f9(_0x38b055,_0x29b707,_0x3353c9,_0x2e7eea){return _0x3b4225(_0x29b707,_0x3353c9-0x15,_0x3353c9-0x7c,_0x2e7eea-0x185);}alpha[_0x2de1f9(0x6bd,0x418,0x5db,0x68c)+'e'](m[_0x2de1f9(0x1e8,0x7f,0x159,-0x131)],{'sticker':_0x11aeea,'mentions':groupMembers[_0x40d30a(0x230,0x4dc,0x373,0x2c1)](_0x5a6f63=>_0x5a6f63['id'])},_0x4a47e1);});}break;case _0x3b4225(0x231,0x50d,0x6c5,0x306):case _0x3b4225(0x44b,0x1fb,0xf2,-0x10):{if(!m[_0x3b4225(0x72f,0x52e,0x582,0x7ef)])return reply(mess[_0x3b4225(0x2ab,0x437,0x2ad,0x259)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang['adminOnly']());if(!/video/[_0x3b4225(0x1a1,0x2d8,0x4cf,0x31c)](mime))return reply(_0x3b4225(0x216,0x1c2,0x19d,0x2d2)+_0x4077ab(0x549,0x5c5,0x823,0x744)+'ngan\x20capti'+_0x3b4225(0x9c,0x15f,-0x11c,-0x110)+(prefix+command));quoted[_0x4077ab(0x68e,0x710,0x84d,0x61c)]()['then'](async _0x5e603b=>{function _0x4669d3(_0x31742b,_0x555530,_0x31530d,_0x241737){return _0x3b4225(_0x241737,_0x31530d- -0x1ad,_0x31530d-0x1cd,_0x241737-0xd6);}const _0x3bbce5={};_0x3bbce5[_0x4669d3(0x23c,0x2c,0x2d0,0x4ab)]=fkontak,alpha['sendMessag'+'e'](m['chat'],{'video':_0x5e603b,'mentions':groupMembers['map'](_0x20a11c=>_0x20a11c['id'])},_0x3bbce5);});}break;case _0x3b4225(-0x1c2,0xe2,-0x6f,0x18a):case'voicetag':{if(!m['isGroup'])return reply(mess[_0x3b4225(0x330,0x437,0x555,0x225)]);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x4077ab(0x508,0x686,0x459,0x726)]());if(!/audio/['test'](mime))return reply(_0x3b4225(0x465,0x1c2,0xaa,0x397)+_0x4077ab(0x667,0x630,0x625,0x5be)+_0x3b4225(0x115,0x3c0,0x48a,0x4aa)+_0x3b4225(0x3a,0x15f,0x1e,-0x14f)+(prefix+command));quoted[_0x3b4225(0x254,0x2a4,-0x38,0x38d)]()['then'](async _0x7f5b3a=>{function _0x5d0e2a(_0x11c1a3,_0x4d1629,_0x59a254,_0x53fdd2){return _0x3b4225(_0x59a254,_0x11c1a3-0x147,_0x59a254-0x5f,_0x53fdd2-0xe2);}const _0x38b0db={};_0x38b0db[_0xb64547(0xb2,-0x4b,-0x44,-0x31d)]=_0xb64547(0x4d3,0x20d,0x19b,0x1);const _0x2f8730=_0x38b0db;function _0xb64547(_0x3874bb,_0x119fc7,_0x421b86,_0xaf4cc4){return _0x3b4225(_0x3874bb,_0x119fc7- -0xd3,_0x421b86-0x57,_0xaf4cc4-0xc7);}const _0x19804c={};_0x19804c[_0x5d0e2a(0x5c4,0x3ca,0x60c,0x89e)]=fkontak,alpha[_0x5d0e2a(0x70d,0x590,0x95b,0x92a)+'e'](m['chat'],{'audio':_0x7f5b3a,'ptt':!![],'mimetype':_0x2f8730['QaqDT'],'mentions':groupMembers[_0xb64547(0x3fd,0x448,0x702,0x4f4)](_0x57fda1=>_0x57fda1['id'])},_0x19804c);});}break;case _0x4077ab(0x771,0x7c7,0xa43,0x88b):case _0x3b4225(0x4b7,0x41f,0x437,0x248):case _0x4077ab(0x66f,0x875,0x653,0x59b):{if(!m[_0x4077ab(0xc6e,0x99a,0xa41,0xabb)])return reply(mess['group']);if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang['adminOnly']());if(!/image/[_0x4077ab(0xa2c,0x744,0x774,0x50d)](mime))return reply(_0x4077ab(0x384,0x62e,0x470,0x743)+_0x3b4225(0x4c7,0x416,0x3ff,0x1c3)+_0x4077ab(0x6a1,0x7a3,0x7d8,0x593)+'n\x20'+(prefix+command));quoted[_0x4077ab(0x8d8,0x710,0x4ff,0x84f)]()[_0x3b4225(0x360,0x296,0x298,0x285)](async _0x2e8cf6=>{function _0x3c06c6(_0x382e9c,_0x1d3452,_0x10d6d2,_0x202a0f){return _0x4077ab(_0x1d3452,_0x202a0f- -0x114,_0x10d6d2-0xa9,_0x202a0f-0x116);}function _0x5cf75c(_0x10f063,_0x22aa47,_0x4c8aea,_0x2ca640){return _0x4077ab(_0x10f063,_0x22aa47- -0x43,_0x4c8aea-0x62,_0x2ca640-0x11c);}const _0x4db0ad={};_0x4db0ad[_0x5cf75c(0x66e,0x8a6,0x677,0xa55)]=fkontak,alpha['sendMessag'+'e'](m['chat'],{'image':_0x2e8cf6,'mentions':groupMembers[_0x5cf75c(0xa1c,0x944,0x93b,0x6f5)](_0x43bf05=>_0x43bf05['id'])},_0x4db0ad);});}break;case _0x4077ab(0xc85,0xa2e,0xafb,0x933):case'tr':{if(!text)return reply(_0x4077ab(0x3a2,0x4ed,0x3b6,0x72e)+_0x4077ab(0xc26,0xaa0,0x965,0x7a9)+_0x3b4225(0x1c2,0x2ba,0x294,0x272)+(prefix+command)+(_0x3b4225(0x4be,0x352,0x4e5,0x45b)+'asa*\x20*teks'+_0x3b4225(0x52f,0x469,0x2a8,0x72d)+_0x3b4225(0x7e4,0x4f7,0x32c,0x6ae)+_0x3b4225(0x700,0x541,0x3b1,0x7d2)+'\x20')+(prefix+command)+('\x20*kode\x20bah'+_0x3b4225(0x84c,0x5ae,0x72b,0x317)+_0x3b4225(0xb2,0x35c,0x541,0x56d)+_0x3b4225(0x507,0x5b9,0x5cd,0x353)+_0x3b4225(0x290,0x4a0,0x4a7,0x3c3)+_0x3b4225(0x308,0x552,0x499,0x602)+'.google.co'+_0x3b4225(0x146,0x2e7,0x4de,0xc0)+_0x4077ab(0x34a,0x607,0x8fc,0x5a0)+'guages'));let teks=m[_0x3b4225(0x3c5,0x47d,0x41c,0x6a3)]?quoted['text']:quoted['text'][_0x3b4225(0x23,0xa3,-0x2f,-0x124)](args[0x1d1e+0x1*0x255a+-0x4278])[0x1*-0x9ce+0x26d0+0x9ab*-0x3];const _0x5df841={};_0x5df841['to']=args[0x3f3+-0x638+-0x1*-0x245],translate(teks,_0x5df841)['then'](_0x37c06d=>{function _0x1a452d(_0x32bd61,_0x48e606,_0x24a60f,_0x1ed790){return _0x4077ab(_0x48e606,_0x1ed790- -0x617,_0x24a60f-0x18b,_0x1ed790-0x194);}function _0xfb108a(_0xded9d6,_0x9ce486,_0x1e0b1a,_0x1d788d){return _0x4077ab(_0x9ce486,_0x1e0b1a- -0x169,_0x1e0b1a-0x1c,_0x1d788d-0x107);}alpha['sendText'](m[_0x1a452d(0x23c,0x182,-0x180,-0x67)],''+_0x37c06d[_0x1a452d(0x246,-0x4a,-0x211,0xd8)],m);});}break;case _0x3b4225(0x3f1,0x101,-0x2f,0x14d):{if(!db['data'][_0x4077ab(0x425,0x663,0x47c,0x616)][m[_0x4077ab(0x49c,0x5b0,0x2fb,0x51c)]][_0x3b4225(0x23a,0x492,0x1f1,0x3fc)])return reply(_0x3b4225(0x511,0x40e,0x4c1,0x53a)+_0x3b4225(0xa,0xe9,0x125,0x25e)+_0x4077ab(0x8aa,0x6b4,0x9ac,0x5c4));if(!text)return reply(_0x4077ab(0x838,0xa6b,0xc48,0xcf4)+_0x3b4225(0x14a,0x306,0x570,0x304)+(prefix+command)+('\x20https://w'+_0x4077ab(0x913,0x86d,0x741,0x6a4)+_0x3b4225(0x3a1,0x41e,0x1df,0x1e6)+'6f9p3a/att'+_0x3b4225(0x657,0x3e1,0x577,0x689)+'mi-soeur_v'+_0x3b4225(0x54,0xec,-0x1ac,-0x67)+_0x4077ab(0x329,0x590,0x503,0x2e3)+_0x4077ab(0x8aa,0xa31,0x811,0xd2a)+'_masturber'+_0x4077ab(0x9b5,0x946,0x801,0x9fc)+_0x3b4225(0x537,0x294,0x493,0x55c)+_0x4077ab(0xb4f,0x8cb,0xb9b,0x770)+'e_hentai*'));function xnxxsearch(_0x2d31be){function _0x38a542(_0xd7200,_0x3102af,_0x46ae74,_0x199e41){return _0x4077ab(_0x46ae74,_0xd7200- -0x230,_0x46ae74-0xe2,_0x199e41-0x1da);}function _0x9080ae(_0x5f11b8,_0x117767,_0x2da3ae,_0x586e05){return _0x3b4225(_0x117767,_0x586e05-0x1cf,_0x2da3ae-0x1a9,_0x586e05-0x109);}const _0xe3b940={'jPjnK':function(_0x25cce9,_0x47f126){return _0x25cce9(_0x47f126);},'xrCst':function(_0x5b63b5,_0x1f42ee){return _0x5b63b5(_0x1f42ee);},'YwmaA':function(_0x4561f1,_0x17f04f){return _0x4561f1!==_0x17f04f;},'rFDmw':_0x38a542(0x874,0x952,0x806,0x7f8),'aMgZg':_0x38a542(0x42c,0x567,0x39c,0x6fb)+'ue','rrZzz':function(_0x39fa71,_0x24d9af){return _0x39fa71(_0x24d9af);},'RtsXH':function(_0x43221f,_0x58008){return _0x43221f<_0x58008;},'riYAZ':_0x38a542(0x2da,0x4a9,0x9a,0x5c1),'cbpHy':function(_0x482924,_0x4b234f){return _0x482924(_0x4b234f);},'TgIMK':function(_0x4e4fb2,_0x1f91bf){return _0x4e4fb2+_0x1f91bf;},'ivdyi':function(_0x14122f,_0x5e2b81){return _0x14122f+_0x5e2b81;},'pTarJ':'/api/textp'+_0x38a542(0x3b7,0x1ab,0x482,0x5fb),'Qqzmm':function(_0x4c1b77,_0x27443b,_0x47e193,_0x43854c,_0xe65ce4){return _0x4c1b77(_0x27443b,_0x47e193,_0x43854c,_0xe65ce4);},'WneSS':function(_0x4cd21c,_0x38e29f){return _0x4cd21c===_0x38e29f;},'fCdYe':'xyyKf','NMAwB':function(_0x5bc89d,_0x319330){return _0x5bc89d(_0x319330);},'HLehY':_0x38a542(0x2d0,0x2b,0x274,0x311),'xHAJA':_0x9080ae(0x825,0x8c3,0x808,0x674)+_0x38a542(0x410,0x6f4,0x404,0x609),'bLkzK':function(_0x37c48a,_0x143873){return _0x37c48a===_0x143873;},'nURJP':_0x9080ae(0x563,0x61e,0x90e,0x65c),'FKYiG':'https://ww'+_0x38a542(0x685,0x70c,0x553,0x6d9),'GXmdw':function(_0x15c3c0,_0x323920,_0x45b911){return _0x15c3c0(_0x323920,_0x45b911);}};return new Promise((_0x127cea,_0x1b8317)=>{function _0x29f46a(_0x1d8449,_0x9d7a10,_0x2e30f8,_0x3590cb){return _0x38a542(_0x9d7a10- -0xe9,_0x9d7a10-0x5d,_0x1d8449,_0x3590cb-0xf8);}const _0x55783c={'FhKJT':function(_0x34dc7b,_0x5baec7){function _0x30f951(_0x50acea,_0xd0d954,_0x289a70,_0x226642){return _0x544f(_0x50acea-0x17c,_0x226642);}return _0xe3b940[_0x30f951(0x7f5,0x710,0xa43,0xa67)](_0x34dc7b,_0x5baec7);},'oDahQ':_0xe3b940[_0x453831(0x53e,0x54f,0x60c,0x37f)],'dUvrH':function(_0x2dfda4,_0x50465f){return _0x2dfda4+_0x50465f;},'SUxCt':function(_0x58c9c4,_0x2e020f){function _0x26c623(_0x59baf5,_0x5af846,_0x5b1ebc,_0x13e48b){return _0x453831(_0x59baf5-0x96,_0x13e48b,_0x5b1ebc-0x3fe,_0x13e48b-0x1a7);}return _0xe3b940[_0x26c623(0xa46,0xc54,0xaa6,0x854)](_0x58c9c4,_0x2e020f);},'OdCzX':_0xe3b940[_0x453831(0x2b1,0x2ac,0x313,0x242)],'phqij':function(_0x46c501,_0x2fa5fb){return _0x46c501(_0x2fa5fb);},'NELeT':_0x29f46a(0x5a3,0x473,0x228,0x6aa),'CRzmr':_0xe3b940['xHAJA'],'PXddN':function(_0x5720f7,_0x91dba2){function _0x5e508b(_0x21b763,_0xf13eca,_0x20c76a,_0x346acb){return _0x29f46a(_0x346acb,_0xf13eca- -0x2f8,_0x20c76a-0x1b8,_0x346acb-0x8c);}return _0xe3b940[_0x5e508b(-0x58,-0x14d,0x1a7,-0x113)](_0x5720f7,_0x91dba2);}};function _0x453831(_0x58445b,_0xe719f,_0x1c12e8,_0x582378){return _0x9080ae(_0x58445b-0xa5,_0xe719f,_0x1c12e8-0x1dd,_0x1c12e8- -0x12b);}if(_0xe3b940[_0x29f46a(0x95,0x326,0x519,0x26b)](_0xe3b940[_0x453831(0x472,0x2af,0x245,0x34f)],_0xe3b940[_0x29f46a(0x388,0x2f4,0xab,0x5e2)])){const _0x3a097f=_0xe3b940['FKYiG'],_0x463915={};_0x463915[_0x29f46a(0x38d,0x2ec,0x140,0x233)]='get',_0xe3b940[_0x29f46a(0x65e,0x5aa,0x609,0x42f)](fetch,_0x3a097f+_0x29f46a(0x25f,0x328,0x3e5,0xfe)+_0x2d31be+'/'+_0xe3b940[_0x29f46a(0x4ed,0x23a,0x2b2,0xe3)](Math[_0x453831(0x3a5,0x3b9,0x3a7,0x69c)](Math['random']()*(0x2589*-0x1+0x1d34+0x858)),0x26ab+0x162a+0x1ca*-0x22),_0x463915)[_0x29f46a(0x27a,0x3e9,0x616,0x3cd)](_0xd0b5c4=>_0xd0b5c4[_0x29f46a(0x597,0x3d6,0x1d5,0x1b5)]())[_0x453831(0x61c,0x454,0x33a,0x5bd)](_0x2c3105=>{function _0x4bbe0c(_0x1cbb8d,_0x59fb5a,_0x1493ae,_0x23e160){return _0x453831(_0x1cbb8d-0x69,_0x1cbb8d,_0x1493ae-0x1c5,_0x23e160-0xe);}const _0x479a51={'HIGbI':function(_0x5f30b3,_0x271407){return _0xe3b940['jPjnK'](_0x5f30b3,_0x271407);},'gsOFc':_0x156a66(-0x2f9,-0x286,-0x5,-0x54),'jiyQY':function(_0x188596,_0x79b726){return _0xe3b940['xrCst'](_0x188596,_0x79b726);}};function _0x156a66(_0x4da512,_0x50a0a8,_0x138d8a,_0xb34de8){return _0x29f46a(_0x138d8a,_0xb34de8- -0x357,_0x138d8a-0xe1,_0xb34de8-0x1ed);}if(_0xe3b940[_0x156a66(-0x22c,0x299,-0x2b8,0x17)]('pSRHA',_0xe3b940[_0x156a66(-0x11a,-0x434,-0x3fd,-0x13e)])){const _0x4c59f8={};_0x4c59f8[_0x4bbe0c(0x455,0x5da,0x4b4,0x3c6)]=![];let _0x23ddb4=cheerio['load'](_0x2c3105,_0x4c59f8),_0x42753a=[],_0x5e188e=[],_0x454dd1=[],_0x42b1a4=[];_0xe3b940[_0x4bbe0c(0x746,0x5e6,0x674,0x5f1)](_0x23ddb4,_0xe3b940[_0x4bbe0c(0x649,0x2dd,0x5a2,0x613)])[_0x4bbe0c(0x261,0x378,0x33b,0xa9)](function(_0x2f1624,_0x348cf5){function _0x1adbfa(_0x149a8c,_0x38fd14,_0x317f63,_0xe0cc1c){return _0x4bbe0c(_0x317f63,_0x38fd14-0x118,_0x149a8c- -0x3cd,_0xe0cc1c-0x1a6);}function _0x5c5b6d(_0x22b0a0,_0x20bd7f,_0x1cfb3d,_0x492d5f){return _0x156a66(_0x22b0a0-0x94,_0x20bd7f-0x77,_0x492d5f,_0x22b0a0-0x41b);}const _0x533b73={'NZvvc':function(_0x1bf10f,_0x24182e){function _0x29bdca(_0x35c1a0,_0x1a369f,_0x140726,_0x164e99){return _0x544f(_0x164e99- -0x33c,_0x1a369f);}return _0x55783c[_0x29bdca(0x5bb,0x508,0x66c,0x3ab)](_0x1bf10f,_0x24182e);},'hxRci':_0x55783c[_0x1adbfa(0x48b,0x4b3,0x3b9,0x417)],'kXhwu':function(_0x30f631,_0x277fef){function _0x12dc00(_0x4c7e5c,_0xc5c70a,_0x51d28d,_0x22b9d3){return _0x1adbfa(_0x51d28d-0x573,_0xc5c70a-0xee,_0x4c7e5c,_0x22b9d3-0x10f);}return _0x55783c[_0x12dc00(0x659,0x786,0x72c,0x904)](_0x30f631,_0x277fef);},'hQAIC':function(_0x4b8964,_0x4e35a8){function _0x26435c(_0x585671,_0x3a96a3,_0x1bb4b9,_0x598ee2){return _0x1adbfa(_0x598ee2-0x75,_0x3a96a3-0x8f,_0x3a96a3,_0x598ee2-0xd4);}return _0x55783c[_0x26435c(0x1a1,0x68e,0x125,0x3a1)](_0x4b8964,_0x4e35a8);},'yBWTN':_0x55783c[_0x1adbfa(0x16b,0x244,0xb6,0x108)]};_0x55783c[_0x5c5b6d(0x7fa,0x7e1,0x8b0,0x6af)](_0x23ddb4,_0x348cf5)[_0x1adbfa(0xe2,-0x209,0x1e5,0xca)](_0x55783c[_0x5c5b6d(0x739,0x57e,0x73e,0x7fc)])[_0x5c5b6d(0x2e9,0x1cd,0x491,0x35e)](function(_0x44432c,_0x3bc814){function _0x4c4e79(_0x48d7e7,_0x2baa28,_0x5f5cba,_0x548e1c){return _0x1adbfa(_0x48d7e7-0x334,_0x2baa28-0x19d,_0x2baa28,_0x548e1c-0x1e);}function _0x42b535(_0x391619,_0x3cdb37,_0x11bc59,_0x2052e0){return _0x5c5b6d(_0x391619- -0x484,_0x3cdb37-0xe3,_0x11bc59-0x11f,_0x3cdb37);}_0x533b73[_0x4c4e79(0x7f5,0x899,0x643,0x802)](_0x533b73[_0x4c4e79(0x218,0x4d8,0x174,0x196)],_0x533b73[_0x4c4e79(0x218,0x2a7,0x3ae,0x284)])?_0x5e188e['push'](_0x533b73[_0x42b535(0x260,0x35a,0x256,0x1a0)](_0x3a097f,_0x533b73[_0x4c4e79(0x5cd,0x509,0x5b3,0x6e0)](_0x23ddb4,_0x3bc814)[_0x4c4e79(0x416,0x41e,0x6d1,0x21f)]('a')['attr'](_0x533b73['yBWTN'])[_0x42b535(0x163,0x154,0x2d1,-0xbc)](_0x4c4e79(0x286,0x3b9,0x33d,0x2c0),'/'))):(_0xad7c7d+=_0x4c4e79(0x52a,0x3a7,0x5b8,0x7eb)+'*\x20'+_0x1cc1e3[_0x4c4e79(0x380,0x18c,0x469,0x55f)]+'\x0a',_0x205db3+=_0x4c4e79(0x283,0x30d,0x4a4,0x14d)+_0x598401[_0x42b535(0x1eb,0x4d7,-0x6c,0x4ce)]+(_0x42b535(0xe7,0x6f,0x15,0x157)+_0x42b535(-0x11a,-0x3da,-0x146,-0x3c7)+_0x42b535(-0x11a,-0x6a,0x1c1,0x170)+'----------'+_0x4c4e79(0x323,0x46,0x92,0x141)+_0x42b535(0x2bc,0x142,0x128,0xd3)));});}),_0xe3b940[_0x4bbe0c(0x969,0x84c,0x737,0x940)](_0x23ddb4,_0xe3b940['aMgZg'])[_0x156a66(-0x5d,-0xab,0x1c,-0x132)](function(_0x57d0ad,_0x240204){function _0x3e29c7(_0x22e920,_0x5bdebf,_0x516c83,_0x3226a4){return _0x4bbe0c(_0x22e920,_0x5bdebf-0x1ac,_0x516c83- -0x25f,_0x3226a4-0x154);}function _0x2ab335(_0x12345c,_0x202326,_0x202371,_0x3d0c20){return _0x156a66(_0x12345c-0x15d,_0x202326-0x1c3,_0x202371,_0x3d0c20-0x557);}_0x55783c[_0x3e29c7(0x445,0x1f8,0x49a,0x5fa)](_0x23ddb4,_0x240204)[_0x3e29c7(0x3ea,0x2a6,0x250,0x545)](_0x55783c['CRzmr'])[_0x3e29c7(0x39f,0x2f4,0xdc,-0x1a5)](function(_0x1089cb,_0x4a88ca){const _0x4be0f7={'RWUQX':_0x5ce0f7(0x17f,-0x54,0x42d,0x1e),'ELotA':function(_0x7e5704,_0x417259){function _0x22f314(_0x4349fc,_0x346a6f,_0x44bd01,_0x236f43){return _0x5ce0f7(_0x44bd01-0x136,_0x346a6f-0x1cf,_0x44bd01-0xea,_0x236f43);}return _0x479a51[_0x22f314(0x212,0xb1,0x378,0x5a5)](_0x7e5704,_0x417259);},'mOsAn':_0x479a51[_0x5ce0f7(0x421,0x6e6,0x512,0x2d5)]};function _0x18b979(_0x172238,_0x3e4f6c,_0x12ee02,_0x56afe4){return _0x2ab335(_0x172238-0x152,_0x3e4f6c-0x100,_0x56afe4,_0x3e4f6c- -0x28c);}_0x454dd1[_0x18b979(0x63b,0x65e,0x551,0x5fb)](_0x479a51['jiyQY'](_0x23ddb4,_0x4a88ca)[_0x5ce0f7(0x2e5,0x430,0xb7,0x3be)](_0x18b979(0x47e,0x3c0,0x4f9,0x424))[_0x18b979(0x543,0x34a,0x15f,0x113)]());function _0x5ce0f7(_0x21a60b,_0x7635e6,_0x2df02b,_0x2f7913){return _0x3e29c7(_0x2f7913,_0x7635e6-0x1b6,_0x21a60b-0x95,_0x2f7913-0x58);}_0x479a51['jiyQY'](_0x23ddb4,_0x4a88ca)[_0x18b979(0x3b0,0x30d,0x280,0x51)]('a')[_0x5ce0f7(0x171,0x1e7,0x272,0x461)](function(_0x291a7e,_0x367f54){function _0x4b442d(_0x329790,_0x90ec33,_0x4a429a,_0x243628){return _0x5ce0f7(_0x4a429a-0x1ec,_0x90ec33-0x2e,_0x4a429a-0x35,_0x243628);}function _0x184919(_0x3564a9,_0x3bb140,_0x5a8f21,_0x44ad4a){return _0x18b979(_0x3564a9-0xb6,_0x5a8f21- -0x17d,_0x5a8f21-0xe3,_0x3564a9);}if(_0x4be0f7[_0x184919(0x243,0x154,0x430,0x23e)]!==_0x4be0f7[_0x4b442d(0x860,0x53e,0x771,0x63b)]){const _0x4ea7c8={};_0x4ea7c8['low']=_0x27f6ca[_0x184919(0x42f,0x219,0x438,0x45c)][_0x4b442d(0x7cc,0x665,0x5a7,0x88f)]['profile_pi'+_0x184919(0x275,-0x141,0xdd,0xd8)],_0x4ea7c8['high']=_0x4b4e26['graphql'][_0x184919(0x4b6,0x4a4,0x266,0x72)][_0x184919(0x1b0,0x2aa,-0x23,0xfd)+_0x4b442d(0x319,0x67b,0x498,0x352)];const _0x3fbc01={};_0x3fbc01[_0x184919(0x273,0x345,0x242,0x376)]=_0x45873c[_0x4b442d(0x9ad,0xa3f,0x779,0xa02)][_0x184919(0x1ae,0x1d2,0x266,0x2cd)]['external_u'+'rl'],_0x3fbc01['id']=_0x3f79e5[_0x184919(0x6f8,0x49f,0x438,0x4d6)][_0x4b442d(0x6bf,0x4f9,0x5a7,0x7f0)]['id'],_0x3fbc01['username']=_0x13222a,_0x3fbc01[_0x4b442d(0x31d,0x442,0x3c7,0x6a7)]=_0x9d0f22['graphql']['user'][_0x4b442d(0xae5,0x65c,0x827,0x59e)],_0x3fbc01[_0x4b442d(0x1ff,0x4be,0x4b3,0x5e5)+'le']=_0x184919(-0x174,-0x18a,0x10d,0x34d)+_0x4b442d(0x729,0x848,0x59f,0x686)+'m/'+_0x306a6b,_0x3fbc01['private']=_0x214291['graphql'][_0x184919(-0x51,0x167,0x266,0x559)][_0x184919(0x1ce,-0xc3,0x24,0x2e5)],_0x3fbc01[_0x184919(0x591,0x53d,0x33e,0x1fe)]=_0x22131a['graphql'][_0x184919(0x1d,0x465,0x266,0x139)][_0x4b442d(0x477,0x61c,0x72c,0x645)+'d'],_0x3fbc01[_0x184919(0x5c3,0x44a,0x564,0x84f)]=_0x7eccfd[_0x4b442d(0x80e,0x93c,0x779,0x4b4)][_0x4b442d(0x5f5,0x73f,0x5a7,0x4d3)][_0x184919(0x4eb,0x361,0x314,0xcd)],_0x3fbc01[_0x4b442d(0x526,0x45f,0x3a0,0x3be)]=_0x1e13c9[_0x184919(0x485,0x51e,0x438,0x619)]['user']['edge_follo'+_0x184919(0xcd,0x1c7,0x2df,0x215)][_0x184919(0x113,0x47d,0x302,0x5ad)],_0x3fbc01[_0x4b442d(0x68f,0x7db,0x5f2,0x7f8)]=_0x5c8580[_0x184919(0x453,0x60d,0x438,0x149)][_0x184919(0x334,0xac,0x266,0x217)][_0x184919(0x15b,-0x2d0,-0x63,0x88)+'w']['count'],_0x3fbc01[_0x4b442d(0x346,0x8b2,0x5f4,0x740)+'b']=_0x51e985['graphql'][_0x4b442d(0x6f1,0x5e8,0x5a7,0x81b)][_0x184919(0xfa,0x209,0x258,-0x88)+_0x4b442d(0x39a,0x909,0x61a,0x834)],_0x3fbc01[_0x4b442d(0x54e,0x4b7,0x333,0x21e)+'ine']=_0x440ff6[_0x184919(0x2ca,0x6f8,0x438,0x6d5)][_0x184919(0x8d,0x227,0x266,0x472)][_0x184919(0x403,0x1f3,0x1f0,-0x106)+'_video_tim'+_0x184919(0x230,0x21a,0x435,0x280)][_0x184919(0x2b6,0x4bc,0x302,0x51b)],_0x3fbc01['timeline']=_0x14ef01['graphql'][_0x184919(0x60,0x183,0x266,0x228)][_0x184919(0x4ae,0x345,0x3b0,0x5bd)+_0x184919(-0x54,-0x11d,-0x51,-0x1bc)+_0x184919(0x51b,0x323,0x505,0x6bf)][_0x4b442d(0x570,0x34d,0x643,0x82b)],_0x3fbc01[_0x184919(0x1c9,-0x9a,0x153,0x148)]=_0x3f5a0f['graphql'][_0x4b442d(0x352,0x5fa,0x5a7,0x425)][_0x184919(0x37f,0x2fc,0x124,0x2f5)+_0x4b442d(0xb0b,0xaac,0x81b,0x819)][_0x184919(0x3fb,0x38b,0x302,0x312)],_0x3fbc01[_0x4b442d(0x3bc,0x50c,0x600,0x321)+'s']=_0x539c14[_0x184919(0x728,0x5ad,0x438,0x23a)][_0x4b442d(0x3a3,0x60d,0x5a7,0x62d)][_0x184919(-0xc,0x479,0x1c2,0x8d)+_0x4b442d(0x21e,0x3cd,0x360,0x4d3)+'ns'][_0x4b442d(0x856,0x4c8,0x643,0x452)],_0x3fbc01[_0x184919(0x290,-0x157,-0x21,0x1cb)+'s']=_0x220fc5[_0x4b442d(0x6cb,0x7e1,0x779,0x7dc)]['user'][_0x184919(0x219,0x15d,0xfd,0x1f6)+_0x4b442d(0x79d,0x2e0,0x4c3,0x25b)];const _0x2474db={};_0x2474db[_0x184919(0x687,0x2c7,0x3b8,0x466)]=0xc8,_0x2474db[_0x184919(-0x4,0x422,0x29d,0x418)]=_0x184919(0x49f,0x524,0x4f3,0x271)+_0x4b442d(0x2ba,0x5f1,0x537,0x60d),_0x2474db[_0x4b442d(0x29f,0x468,0x3c2,0x5c0)]=_0x4ea7c8,_0x2474db[_0x4b442d(0x668,0x340,0x46e,0x3d8)]=_0x3fbc01,_0x3511d4(_0x2474db);}else _0x42753a['push'](_0x4be0f7[_0x184919(0x545,0x26e,0x470,0x3fa)](_0x23ddb4,_0x367f54)['attr'](_0x4be0f7[_0x184919(0x38,0x48c,0x1b1,0x329)]));});});});for(let _0x249156=-0x2050+-0xc4f+0x2c9f;_0xe3b940[_0x4bbe0c(0x6a5,0x365,0x59c,0x58a)](_0x249156,_0x42753a[_0x4bbe0c(0x6b4,0x221,0x4da,0x229)]);_0x249156++){if('ScwUy'!==_0xe3b940[_0x4bbe0c(0x7b1,0x703,0x504,0x297)]){const _0x377412={};_0x377412['title']=_0x42753a[_0x249156],_0x377412[_0x4bbe0c(0x661,0xab2,0x88f,0x88f)]=_0x454dd1[_0x249156],_0x377412[_0x156a66(0x6c,0x4a2,0x318,0x254)]=_0x5e188e[_0x249156],_0x42b1a4[_0x4bbe0c(0x6f7,0x94f,0x800,0x946)](_0x377412);}else _0x55783c[_0x156a66(0x21c,0x345,0x202,0x28c)](_0x2bf08a,_0x14729d[_0x156a66(-0x188,0xc2,0xa2,-0x11c)]());}const _0x128c80={};_0x128c80[_0x156a66(0x33e,-0x192,0x452,0x159)]=0xc8,_0x128c80[_0x156a66(-0x6a,0x1b6,-0x40,0x26a)]=!![],_0x128c80[_0x156a66(0x289,0xf0,0x396,0xb8)]=_0x42b1a4,_0x127cea(_0x128c80);}else _0x55783c['SUxCt'](_0x54e19d,_0x156a66(-0x170,-0x199,0x9e,0xd8)+_0x156a66(0x273,-0x30,0x2c8,0x5b)+_0x4bbe0c(0x52b,0x5dd,0x4cb,0x1f7)+_0x4bbe0c(0x802,0x4a9,0x708,0x94a)+_0x55783c[_0x4bbe0c(0x83a,0xa00,0x865,0x6ef)](_0x1a725c,_0x37a878));})['catch'](_0x5f06b2=>_0x1b8317({'code':0x1f7,'status':![],'result':_0x5f06b2}));}else{const _0x40d584={'uoNvZ':function(_0x257014,_0xcd73ce){return _0x257014(_0xcd73ce);}};if(!_0x2e8eea)return _0xe3b940[_0x29f46a(0x8dd,0x744,0x73b,0x5ae)](_0x51fa14,'Kirim\x20peri'+_0x29f46a(0xf3,0x218,0x4cf,0x227)+_0xe3b940[_0x453831(0x2bd,-0x9a,0xfc,0x1c8)](_0x375acb,_0x2f1d3a)+(_0x453831(0x470,0x5f0,0x495,0x525)+_0x29f46a(0x44b,0x2d6,0x1bc,0x46e)));if(!_0x2481ad[_0x29f46a(0xfd,0x296,0x206,0x1ee)]('|'))return _0x4e8b69(_0x29f46a(0x7f5,0x752,0x586,0x677)+_0x453831(-0x65,0x2e4,0x169,-0x144)+(_0x556ee9+_0x34e8ff)+(_0x453831(0x6fc,0x49b,0x495,0x75f)+_0x453831(0x4ab,0xea,0x227,0x3da)));_0x89bc89=_0xaef7a3[_0x453831(0x3f2,-0xb4,0x183,0x14d)]('\x20'),_0xa0a093=_0x2319e2[_0x29f46a(0x3d6,0x1f6,0xf9,0x1a2)]('|')[0x1*0x44e+-0x16a5+-0x139*-0xf],_0x5bb6f5=_0x5d47a9[_0x29f46a(-0x8f,0x1f6,0x226,0xe2)]('|')[0xd*0xd5+0xcad*-0x1+0x1dd],_0x5741a6(_0x532f27[_0x29f46a(0x264,0x558,0x654,0x451)]());const _0x2a5fdb={};_0x2a5fdb['apikey']=_0x567785,_0x2a5fdb[_0x453831(0x73,0x41c,0x327,0x152)]=_0x3766b5,_0x2a5fdb[_0x453831(0x4db,0x584,0x409,0x340)]=_0x5d9dea;let _0xa4c72a=_0x3e51c1[_0x453831(0x602,0x572,0x610,0x49a)](_0x14aa5e[_0x453831(0x470,0x351,0x288,-0x1d)][_0x453831(0x1c2,0x464,0x271,0xec)],_0xe3b940[_0x29f46a(0x354,0x23a,0x212,0x23f)](_0xe3b940[_0x453831(0x3e3,0x654,0x3d4,0x353)],_0x4c7d0a),_0x2a5fdb);_0xe3b940[_0x453831(-0x33,0x7c,0x24b,-0xa0)](_0x559f3a,_0xff0889,_0xa4c72a,_0x3fef77['ok'](),_0x2c777e)['catch'](_0x378864=>{function _0x1881e8(_0x346111,_0x87cd43,_0x4ed48d,_0x57cfb0){return _0x29f46a(_0x57cfb0,_0x87cd43- -0x47,_0x4ed48d-0xc6,_0x57cfb0-0x3e);}function _0x1e1c9f(_0xa14853,_0x1b35cd,_0x5e8936,_0x5198b){return _0x29f46a(_0x5198b,_0x1b35cd- -0x3c5,_0x5e8936-0x163,_0x5198b-0xca);}_0x40d584[_0x1e1c9f(0x258,0x343,0x5e9,0x2b2)](_0x15476f,_0x24197b[_0x1e1c9f(-0x257,-0x18a,-0x346,-0x15)]());});}});}xnxxsearch(''+q)[_0x3b4225(0x460,0x296,0x216,0x414)](async _0x5a253c=>{function _0x5666c2(_0x43eb38,_0x232134,_0x539448,_0x430db3){return _0x3b4225(_0x539448,_0x43eb38-0x178,_0x539448-0x12,_0x430db3-0x16d);}const _0x2a0359={};function _0x3b2332(_0x7b0e02,_0x103650,_0xfb557a,_0x562fa5){return _0x4077ab(_0x562fa5,_0x103650- -0x9b,_0xfb557a-0x13d,_0x562fa5-0x1c6);}_0x2a0359[_0x5666c2(0x379,0x1e6,0x22b,0x307)]=function(_0x52be5b,_0x4e3070){return _0x52be5b+_0x4e3070;};const _0x48c23c=_0x2a0359;let _0x27543a=_0x5666c2(0x6f2,0x8e3,0x987,0x99a)+_0x3b2332(0x651,0x938,0xbec,0x83c)+'H\x20」-------'+'*\x0a\x0a';for(let _0x47cd97 of _0x5a253c['result']){_0x27543a+=_0x3b2332(0x98a,0x72b,0x703,0x943)+'*\x20'+_0x47cd97['title']+'\x0a',_0x27543a+=_0x3b2332(0x5ea,0x484,0x3fd,0x524)+_0x47cd97[_0x5666c2(0x5d0,0x776,0x79f,0x761)]+('\x0a---------'+'----------'+_0x3b2332(0x26a,0x524,0x6dd,0x780)+_0x3b2332(0x27a,0x524,0x5bd,0x23a)+_0x3b2332(0x69c,0x524,0x6af,0x51f)+'----\x0a');}await alpha[_0x3b2332(0xc48,0x997,0x7d2,0x7e7)+'e'](m['chat'],{'image':{'url':_0x48c23c['LMSoR'](picak,_0x5666c2(0x6d0,0x561,0x88e,0x88d)+'h')},'caption':_0x27543a},{'quoted':m});})['catch'](_0x1a5ae5=>{function _0x45c302(_0x5b6387,_0x20fad9,_0x7d349a,_0x3a3a20){return _0x3b4225(_0x20fad9,_0x5b6387-0x1ed,_0x7d349a-0x126,_0x3a3a20-0x17d);}const _0x1df378={'MQGPi':function(_0x1da010,_0x21a49a){return _0x1da010(_0x21a49a);}};_0x1df378['MQGPi'](reply,lang[_0x45c302(0x2d5,0x3ea,0x4e0,0x1a0)]());});}break;case _0x3b4225(0x2cf,0x160,0x25c,0x201):case _0x4077ab(0x873,0x57f,0x2b1,0x6fd)+'ad':{if(!db[_0x4077ab(0x852,0x64f,0x478,0x931)]['chats'][m['chat']][_0x4077ab(0x949,0x8fe,0x6a0,0x972)])return reply(_0x3b4225(0x476,0x40e,0x186,0x675)+_0x4077ab(0x7c3,0x555,0x498,0x4d6)+_0x4077ab(0x778,0x6b4,0x731,0x625));if(!text)return reply(_0x3b4225(0x7db,0x5ff,0x709,0x583)+_0x3b4225(0x289,0x306,0x5aa,0x11e)+(prefix+command)+(_0x4077ab(0x48b,0x676,0x557,0x914)+_0x4077ab(0xb25,0x86d,0x739,0x7cf)+'m/video-13'+_0x4077ab(0x43d,0x69e,0x75a,0x6fd)+_0x3b4225(0x6ac,0x3e1,0x69f,0x48c)+_0x3b4225(0x34c,0x2cc,0x4cd,0x209)+_0x3b4225(0x2f1,0xec,0x3c0,-0x15b)+_0x4077ab(0x46d,0x590,0x3f9,0x6c5)+_0x3b4225(0x600,0x5c5,0x5d5,0x880)+_0x3b4225(-0x41,0x28e,0x3cf,0x82)+'_avec_le_c'+'ontrole_de'+_0x4077ab(0x9ab,0x8cb,0x865,0x848)+'e_hentai*'));if(!text[_0x4077ab(0x41b,0x5af,0x44d,0x6d1)](_0x3b4225(0x254,0x388,0x4d8,0x308)+_0x3b4225(0x3af,0x449,0x20c,0x491)+'/'))return reply(_0x4077ab(0xab5,0xa6b,0xc98,0xc6f)+'ntah\x20*'+(prefix+command)+(_0x4077ab(0x964,0x676,0x414,0x6e4)+_0x4077ab(0x64d,0x86d,0xb63,0x85a)+_0x3b4225(0x5c8,0x41e,0x4f3,0x52f)+_0x3b4225(0x4bc,0x232,0xe4,0x389)+_0x4077ab(0xb38,0x84d,0x7f9,0xa85)+'mi-soeur_v'+_0x3b4225(0x171,0xec,0x13a,0x2a3)+_0x4077ab(0x564,0x590,0x733,0x702)+_0x3b4225(0x713,0x5c5,0x43b,0x4c6)+_0x4077ab(0x764,0x6fa,0x4e6,0x8bb)+_0x4077ab(0xc3f,0x946,0x7a4,0x982)+_0x3b4225(0x5,0x294,0x1cd,0x2e0)+_0x4077ab(0x76b,0x8cb,0x7ed,0x8e7)+_0x3b4225(0xb8,0x33a,0x2dc,0x193)));function xnxxdl(_0x12cfe1){const _0x25e1c6={'feYbV':_0x44bcce(0x578,0x4ef,0x5c9,0x786)+_0x44bcce(0x167,0x3fe,0x16b,0x324)+_0x44bcce(0x184,0x272,0x21f,0x29f),'SiMBP':_0x44bcce(0x5ef,0x2fe,0x3bc,0x16e),'xzBfK':function(_0x409592,_0x7a9cc1){return _0x409592(_0x7a9cc1);},'HiWxR':_0x44bcce(0x395,0x3de,0x5c9,0x6d5)+_0x44bcce(0x4d1,0x22c,0x523,0x3b1)+_0x25db39(0x420,0x16b,0x697,0x382),'VbfqD':function(_0x4d5381,_0x4353e8){return _0x4d5381(_0x4353e8);},'CPnhk':function(_0x339228,_0x35b5ce){return _0x339228(_0x35b5ce);},'roJuJ':function(_0x14f5a8,_0x50741d){return _0x14f5a8(_0x50741d);},'Xvohm':_0x25db39(0x75a,0x813,0x4c6,0x55e)+_0x25db39(0x209,0x413,0x2b1,-0x40)+_0x44bcce(0x3cb,0x4ee,0x239,0x20e)+']','yTkyV':_0x25db39(0x75a,0x546,0x62c,0x70c)+_0x25db39(0x209,0x32f,0x444,0x6e)+'deo:height'+'\x22]','lHOnk':_0x44bcce(0x1f,0x588,0x2d2,0x503)+_0x44bcce(-0x7f,-0x148,0x18b,0x25e),'xbtaf':_0x44bcce(-0x186,-0x151,0xb7,0x17c)+_0x44bcce(0x5a2,0x434,0x46b,0x6b2)+'cript:nth-'+_0x25db39(0x650,0x584,0x479,0x721),'aJoxp':'html5playe'+_0x25db39(0x66d,0x4c8,0x3c3,0x453)+_0x44bcce(-0x126,0x245,0xd5,0x304)+_0x44bcce(0x3b8,0x66a,0x446,0x71e),'eMLMW':_0x44bcce(0x35c,0x43d,0x583,0x3d3)+_0x44bcce(0x38c,0x5e1,0x4dc,0x681)+_0x25db39(0x3c1,0x2c7,0x693,0x567)+_0x25db39(0x5cb,0x8c4,0x2ea,0x5d1),'KHLDV':_0x44bcce(0x720,0x630,0x583,0x846)+_0x25db39(0x73d,0x5f4,0x5bb,0x578)+_0x44bcce(0x7dd,0x3fc,0x5a3,0x569)+_0x25db39(0x5cb,0x4f6,0x7de,0x51b),'WRYTf':'html5playe'+_0x44bcce(0x30e,0x447,0x5ac,0x653)+_0x25db39(0x779,0x806,0x484,0x7be)+_0x25db39(0x5a8,0x5f2,0x4b9,0x56e),'Bpzok':_0x25db39(0x714,0x47a,0x7a9,0x794)+_0x44bcce(0x5bc,0x49c,0x5ac,0x43f)+_0x44bcce(0x6d5,0x6a9,0x62d,0x3a3)+_0x25db39(0x493,0x23d,0x6e4,0x1d4),'QsCwc':'html5playe'+'r.setThumb'+_0x25db39(0x571,0x3e5,0x54a,0x4a3)+'\x27(.*?)\x27\x5c);','iYPob':_0x44bcce(-0x1dc,0x157,0xb5,-0x23f),'xIwxn':_0x44bcce(0x5d1,0x1c7,0x341,0x371),'vKJXH':'eUDfk','hYlFQ':_0x25db39(0x6c6,0x8c3,0x6a4,0x550),'BQIft':function(_0x2c8ce9,_0xf03cd2,_0x117076){return _0x2c8ce9(_0xf03cd2,_0x117076);},'DowQZ':_0x44bcce(0x452,0x2c7,0x1c6,0x1a0)};function _0x44bcce(_0x1d1eb3,_0x374157,_0x532e4d,_0x2ba71a){return _0x3b4225(_0x2ba71a,_0x532e4d-0x21,_0x532e4d-0x1be,_0x2ba71a-0x14b);}function _0x25db39(_0x4178e1,_0x393245,_0xf38085,_0x23de42){return _0x4077ab(_0xf38085,_0x4178e1- -0x2ba,_0xf38085-0x1b7,_0x23de42-0x125);}return new Promise((_0x5d8aa9,_0x3c9420)=>{function _0x490a65(_0x38786a,_0x4ddb2f,_0x22f18a,_0x53cf10){return _0x44bcce(_0x38786a-0x17,_0x4ddb2f-0x1d3,_0x4ddb2f-0x3a5,_0x22f18a);}function _0x53d3ce(_0x56457d,_0x31555e,_0xedaa83,_0x2307e3){return _0x44bcce(_0x56457d-0xc6,_0x31555e-0x16e,_0x2307e3-0x34d,_0x31555e);}if(_0x25e1c6[_0x53d3ce(0x5f4,0x8dc,0x70c,0x877)]!==_0x25e1c6[_0x53d3ce(0x82f,0x9c8,0x61a,0x899)])_0x25e1c6['BQIft'](fetch,''+_0x12cfe1,{'method':_0x25e1c6['DowQZ']})[_0x53d3ce(0x5aa,0x515,0x761,0x604)](_0xe27a02=>_0xe27a02[_0x53d3ce(0x69f,0x43c,0x593,0x5f1)]())['then'](_0x518927=>{const _0x2f5808={};_0x2f5808[_0x587f46(0x29a,0x121,0x297,-0xd2)]=![];let _0x1ac08d=cheerio['load'](_0x518927,_0x2f5808);const _0x53b689=_0x1ac08d(_0x25e1c6[_0x587f46(0x61d,0x447,0x236,0x60f)])['attr'](_0x25e1c6[_0x587f46(0x292,0x241,0x23f,0x189)]),_0x3059bd=_0x25e1c6[_0x375760(0x7c8,0x6e6,0xa1a,0x7a4)](_0x1ac08d,_0x25e1c6[_0x375760(0x9ea,0x66f,0x62f,0x86a)])[_0x375760(0x60c,0x34d,0x679,0x3a2)](_0x25e1c6[_0x375760(0x35c,0x349,0x8e8,0x603)]),_0x2a0fa4=_0x25e1c6[_0x587f46(0x1c3,0x1b,0x6c,0x2db)](_0x1ac08d,_0x587f46(0x766,0x47e,0x409,0x316)+_0x375760(0x305,0x6fa,0x3d4,0x4fc)+_0x375760(0x813,0x784,0x7fa,0x659))['attr'](_0x25e1c6[_0x587f46(0x29f,0x241,0x1e8,0x21f)]),_0x4c9848=_0x25e1c6['CPnhk'](_0x1ac08d,_0x587f46(0x723,0x47e,0x403,0x2fd)+_0x375760(0x5c1,0x4ff,0xd7,0x2ef)+_0x587f46(-0x24d,-0xc3,0xad,-0xa9))[_0x375760(0x29d,0x262,0x591,0x3a2)](_0x375760(0x5a0,0x399,0x59d,0x633)),_0x43766b=_0x25e1c6[_0x587f46(0x6f,0x105,0x391,-0x73)](_0x1ac08d,_0x25e1c6[_0x587f46(0x284,0x284,-0x69,0xab)])[_0x375760(0x4c3,0x2e5,0xa7,0x3a2)](_0x25e1c6[_0x375760(0x309,0x529,0x7b2,0x603)]),_0x435ed9=_0x1ac08d(_0x25e1c6[_0x375760(0x100,0x390,0x37a,0x350)])[_0x587f46(-0x260,-0x20,-0x284,0x1b3)](_0x587f46(0xea,0x271,0xb,0x4e)),_0x332b6d=_0x1ac08d(_0x25e1c6[_0x375760(0x90f,0x4d4,0x437,0x6bb)])['text'](),_0x2cff04=_0x25e1c6[_0x375760(0x4d8,0x46b,0x30c,0x55f)](_0x1ac08d,_0x25e1c6[_0x375760(0x7da,0x78e,0x480,0x593)])[_0x587f46(0x168,0x299,0x378,0x51d)](),_0x34d8f6={'low':(_0x2cff04[_0x375760(0x89f,0x449,0x598,0x5e3)]('html5playe'+_0x375760(0x83c,0x5b6,0x753,0x753)+_0x587f46(0x28f,0x429,0x57f,0x2bf)+_0x587f46(0x541,0x2cc,0xe5,0x2a1))||[])[-0x2215+0x337+0x1edf],'high':_0x2cff04[_0x587f46(0x2ef,0x221,0x34f,0xb9)](_0x25e1c6['aJoxp']||[])[-0x83*0x26+-0x1fd7+0x334a],'HLS':_0x2cff04['match'](_0x25e1c6[_0x587f46(0xc6,-0x52,-0x2c7,-0x24c)]||[])[-0x1*0x20e1+-0x274*0x1+-0x2*-0x11ab],'thumb':_0x2cff04[_0x587f46(-0xd8,0x221,0x383,0x38c)](_0x25e1c6[_0x587f46(0x1f7,0x424,0x520,0x1fc)]||[])[-0x1ed3+0x52d*0x5+0x4f3],'thumb69':_0x2cff04[_0x587f46(0x4da,0x221,0x3f1,0x456)](_0x25e1c6[_0x375760(0x6f6,0x807,0x954,0x7f5)]||[])[-0x2597*0x1+-0x5a*-0x67+0x3b*0x6],'thumbSlide':_0x2cff04[_0x375760(0x5c9,0x6be,0x50d,0x5e3)](_0x25e1c6['Bpzok']||[])[0x9*0x4f+-0x23a9+0x20e3],'thumbSlideBig':_0x2cff04[_0x587f46(0x35c,0x221,0x1ee,0x2d6)](_0x25e1c6[_0x587f46(0x620,0x32a,0x4aa,0x85)]||[])[0x1*-0x16af+-0x1f*0x76+-0x24fa*-0x1]},_0x486d4f={};_0x486d4f['title']=_0x53b689,_0x486d4f[_0x375760(0x72a,0x699,0x568,0x6c4)]=_0x12cfe1,_0x486d4f[_0x375760(0x7c3,0x4aa,0x6bf,0x52d)]=_0x3059bd,_0x486d4f['image']=_0x2a0fa4,_0x486d4f[_0x375760(0x606,0x5bb,0x4c,0x324)]=_0x4c9848,_0x486d4f['videoWidth']=_0x43766b,_0x486d4f[_0x375760(0x59c,0x552,0x6d1,0x835)+'t']=_0x435ed9,_0x486d4f[_0x375760(0x7e1,0x8ae,0x787,0x8be)]=_0x332b6d,_0x486d4f[_0x375760(0x89c,0x2d0,0x6f0,0x5a3)]=_0x34d8f6;function _0x375760(_0x2eabdf,_0x58a360,_0x53e529,_0x5dc274){return _0x53d3ce(_0x2eabdf-0x1d8,_0x58a360,_0x53e529-0x27,_0x5dc274- -0xd6);}const _0x4c9972={};_0x4c9972['status']=0xc8,_0x4c9972[_0x375760(0x47b,0x330,0x3e0,0x554)]=_0x486d4f;function _0x587f46(_0x19ebb3,_0x5638e7,_0x40a51d,_0x55deb2){return _0x53d3ce(_0x19ebb3-0x1c8,_0x55deb2,_0x40a51d-0x19,_0x5638e7- -0x498);}_0x25e1c6[_0x375760(0x75e,0x9b9,0xa90,0x7a4)](_0x5d8aa9,_0x4c9972);})[_0x490a65(0x791,0x73f,0x727,0x536)](_0x594a1e=>_0x3c9420({'code':0x1f7,'status':![],'result':_0x594a1e}));else{const _0x43bdd5={};_0x43bdd5[_0x490a65(0x364,0x4c9,0x566,0x6c5)]=function(_0x55bd26,_0x12bc76){return _0x55bd26+_0x12bc76;},_0x43bdd5['aNoKL']=_0x25e1c6[_0x490a65(0x45c,0x749,0x842,0x6e2)];const _0x921e8e=_0x43bdd5;_0x25e1c6['roJuJ'](_0x19eef2,_0x422139)[_0x53d3ce(0x3db,0x4cb,0x84a,0x5b4)](_0x25e1c6[_0x490a65(0x732,0x946,0x749,0xa12)])[_0x53d3ce(0x6b1,0x1a8,0x5da,0x440)](function(_0x104188,_0x1b9a0a){function _0x5db55e(_0x320040,_0x44b18b,_0x3ed827,_0x2da800){return _0x53d3ce(_0x320040-0x1c0,_0x3ed827,_0x3ed827-0x189,_0x44b18b- -0x11f);}function _0x4330e8(_0x7d5f0e,_0x3ece2d,_0x55c726,_0x5c5d8e){return _0x490a65(_0x7d5f0e-0xff,_0x55c726- -0x36b,_0x5c5d8e,_0x5c5d8e-0x1e4);}_0x32d4b9[_0x4330e8(0x7fe,0x3a9,0x5f2,0x2fc)](_0x921e8e[_0x5db55e(0x55e,0x352,0x2c6,0x5c6)](_0x100de1,_0x412110(_0x1b9a0a)[_0x5db55e(0x514,0x495,0x72e,0x697)]('a')[_0x4330e8(0x2ab,0x101,0x165,0x105)](_0x921e8e[_0x4330e8(0x55f,0x6ed,0x49f,0x4e7)])[_0x4330e8(0x68b,0x288,0x42b,0x6db)]('/THUMBNUM/','/')));});}});}xnxxdl(args[0x2*-0x5a6+-0x359+0xea5])[_0x3b4225(0x37f,0x296,0x4a3,0x15f)](async _0x22bebe=>{const _0x2dc0d3={'VRsOR':function(_0x264aa1,_0x5df6cf,_0x25d139,_0x13ff55,_0x280964){return _0x264aa1(_0x5df6cf,_0x25d139,_0x13ff55,_0x280964);}};let _0x2cb123='*----「\x20XNX'+_0x1f302e(0x9fe,0x86b,0x968,0x7e9)+'\x20」----*\x0a\x09\x0a'+_0x1f302e(0x56b,0x588,0x752,0x4d7)+_0x22bebe['result'][_0x1f302e(0x59a,0x49c,0x55d,0x5e7)]+(_0x378ad6(0x17f,0x2ac,0x196,0x3ba)+':\x20')+_0x22bebe[_0x378ad6(0x24,0x80,0x1d8,0xa1)][_0x378ad6(0xa4,0x383,0x19a,0x169)]+('\x0a🎭\x20Width\x20:'+'\x20')+_0x22bebe[_0x378ad6(0x2f8,0x80,0x277,0x29c)][_0x1f302e(0xbb9,0x923,0xbce,0x7b0)]+(_0x378ad6(-0xa8,-0x181,-0x225,-0xec)+':\x20')+_0x22bebe[_0x1f302e(0x5fb,0x5a8,0x600,0x660)][_0x378ad6(0x3c2,0x361,0x13a,0x4a0)+'t']+_0x378ad6(0x175,0x225,0x2dd,0x396)+_0x22bebe[_0x378ad6(-0x9d,0x80,-0xe5,0x2fa)][_0x378ad6(0x420,0x1f0,0x3ea,0x4b2)];function _0x378ad6(_0x598a71,_0x5c7ddc,_0x1cdd60,_0x45ad35){return _0x4077ab(_0x1cdd60,_0x5c7ddc- -0x6a8,_0x1cdd60-0x6,_0x45ad35-0x1f4);}await sendFileFromUrl(m[_0x1f302e(0x4b3,0x430,0x71c,0x69e)],_0x22bebe['result']['image'],_0x2cb123,m);function _0x1f302e(_0x564e9f,_0x566e46,_0x27005e,_0x2129e1){return _0x4077ab(_0x564e9f,_0x566e46- -0x180,_0x27005e-0xab,_0x2129e1-0x9b);}_0x2dc0d3[_0x378ad6(0x45d,0x1a7,0xbb,0x2f6)](sendFileFromUrl,m['chat'],_0x22bebe[_0x378ad6(-0x1cd,0x80,0x1c3,0x42)]['files'][_0x378ad6(-0x1c3,-0xc5,-0x307,-0x149)],lang['ok'](),m);})[_0x3b4225(0x410,0x379,0x61b,0x502)](_0x27e9ac=>{function _0x449d53(_0x18b3cc,_0x4f0968,_0x5631fa,_0x430787){return _0x4077ab(_0x430787,_0x4f0968- -0x697,_0x5631fa-0x6e,_0x430787-0x81);}reply(lang[_0x449d53(0x116,-0x143,-0x118,-0x2b)]());});}break;}
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