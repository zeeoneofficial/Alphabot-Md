/**
	@ No Re Upload, recode sendiri base nya klo mau 😏
	@ Sc no enc silahkan cek https://github.com/DikaArdnt/Hisoka-Morou
 
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
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
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

const setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
lang = global.language 
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


module.exports = alpha = async (alpha, m, chatUpdate, store, reSize) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 	var budy = (typeof m.text == 'string' ? m.text : '')
       var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
		const content = JSON.stringify(mek.message)
        const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz( timezone).locale('id').format('a')
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
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		hit_today = []
		hit_today.push(command)
		const ini_mark = `0@s.whatsapp.net`
		const timestampi = speed();
		const latensii = speed() - timestampi
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
		const randomArr = (arr = []) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }

		// DATABASE
		try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            	if (!('premium' in user)) user.premium = isPremium
				if (!isNumber(user.premiumTime)) user.premiumTime = -1
				if (!('banned' in user)) user.banned = false
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else db.data.users[m.sender] = {
            	premium: isPremium,
        	    premiumTime: -1,
            	banned : false, 
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

			let chats = db.data.chats[m.chat]
				if (typeof chats !== 'object') db.data.chats[m.chat] = {}
				if (chats) {
				if (!('goodbye' in chats)) chats.goodbye = true
				if (!('welcome' in chats)) chats.welcome = true
				if (!('mute' in chats)) chats.mute = false
				if (!('nsfw' in chats)) chats.nsfw = false
				if (!('antilink' in chats)) chats.antilink = false
				if (!('setWelcome' in chats)) chats.setWelcome = ''
				if (!('setLeave' in chats)) chats.setLeave = ''
					} else db.data.chats[m.chat] = {
					goodbye: true, 
					welcome: true, 
					mute: false,
					nsfw: false,
					antilink: false,
					setWelcome: '',
					setLeave: '',
				}
			
					let setting = db.data.settings[botNumber]
					if (typeof setting !== 'object') db.data.settings[botNumber] = {}
					if (setting) {
						if (!('autobio' in setting)) setting.autobio = autobio
						if (!('available' in setting)) setting.available = false
						if (!('composing' in setting)) setting.composing = false
						if (!('recording' in setting)) setting.recording = false
						if (!('autorespond' in setting)) setting.autorespond = false
							} else db.data.settings[botNumber] = {
								autobio: autobio,
								available: false,
								composing: false,
								recording: false,
								autorespond:false,
							}
						} catch (err) {
							console.log(err)
						}

for (let jid of mentionUser) {
let user = db.data.users[jid]
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
let user = db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	alpha.sendMessage(m.chat, {text: lang.KickAh(groupMetadata.subject)}, {quoted:m})
     	   let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
	        let isLinkThisGc = new RegExp(gclink, 'i')
  	      let isgclink = isLinkThisGc.test(m.text)
		  if (isgclink) return reply(lang.GjdKick())
			alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
		}
	}
	
		if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
            const jawab_salam = [
                'Wa\'alaikumusalam',
                'Wa\'alaikumusalam wb',
                'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
            ]
            return reply(randomArr(jawab_salam))
        }
        
        if (isCmd && db.data.users[m.sender].banned === true){
        	reply(lang.getBan())
        	throw false
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
} else reply(lang.JwbErr())
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
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: lang.TbGam()}, type: 1 }], lang.JwbTrue(lang.TbGam()), `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: lang.TbKa() }, type: 1 }], lang.JwbTrue(lang.TbKa()), `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: lang.TbBe() }, type: 1 }], lang.JwbTrue(lang.TbBe()), `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: lang.TbCak() }, type: 1 }], lang.JwbTrue(lang.TbCak()), `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: lang.TbSu() }, type: 1 }], lang.JwbTrue(lang.TbSu()), `© ${ownername}`, m)
delete susunkata[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: lang.TbAt() }, type: 1 }], lang.JwbTrue(lang.TbAt()), `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = siapaaku[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebaksiapa', buttonText: { displayText: lang.TbSi() }, type: 1 }], lang.JwbTrue(lang.TbSi()), `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}



if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: lang.Tbte()}, type: 1 }], lang.JwbTrue(lang.Tbte()), `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: lang.TbEn() }, type: 1 }], lang.JwbTrue(lang.TbEn()), `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: lang.TbKi() }, type: 1 }], lang.JwbTrue(lang.TbKi()), `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: lang.TbLi() }, type: 1 }], lang.JwbTrue(lang.TbLi()), `© ${ownername}`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}


if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await alpha.sendButtonText(m.chat, [{ buttonId: 'tebaktebakan', buttonText: { displayText: lang.TbKan() }, type: 1 }], lang.JwbTrue(lang.TbKan()), `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply(lang.JwbErr())
}

// Auto Read
if(m.message && global.autoread == true) {
alpha.sendReadReceipt(m.chat, sender, [m.key.id])
}

// Auto Read2
if(!isMedia && global.autoread == true) {
alpha.sendReadReceipt(m.chat, sender, [m.key.id])
}

(function(_0x1bae49,_0x3b64b2){function _0x297553(_0x3c5eb9,_0x271f20,_0x4a7169,_0x421703,_0x23874b){return _0x279a(_0x421703-0x232,_0x23874b);}const _0x4e0be4=_0x1bae49();function _0x1cbb8a(_0x355e74,_0x27c9ac,_0x4f774c,_0x4b83f4,_0x5a5177){return _0x279a(_0x355e74- -0x1e0,_0x5a5177);}function _0x17ea7d(_0x386baa,_0x1162f5,_0x338927,_0x39fb0b,_0x13daa0){return _0x279a(_0x1162f5-0x75,_0x338927);}function _0x36214f(_0x11b361,_0x4ea6ac,_0x395303,_0x8c3c30,_0x4c35d8){return _0x279a(_0x395303- -0x247,_0x8c3c30);}function _0x18699b(_0x240185,_0x3a67b0,_0x288f70,_0x192cc1,_0x2fadc1){return _0x279a(_0x2fadc1-0x23,_0x3a67b0);}while(!![]){try{const _0x1042c5=parseInt(_0x36214f(-0x110,-0x135,-0x12b,-0x10d,-0x141))/(-0x61b*0x1+0x2*-0x24e+-0x55c*-0x2)+parseInt(_0x17ea7d(0x1dc,0x1de,0x219,0x1a4,0x1fe))/(-0x21d2+0x43*-0x8b+0x9*0x7cd)+-parseInt(_0x17ea7d(0x19f,0x192,0x17d,0x1a5,0x17a))/(0x829+-0x227c+-0xd2b*-0x2)*(parseInt(_0x18699b(0x186,0x13a,0x16e,0x18a,0x156))/(0x35*-0x8+-0x617*-0x2+0x21a*-0x5))+-parseInt(_0x36214f(-0x143,-0xd6,-0x113,-0x11c,-0xdd))/(-0x1*0x12df+0x1*0x78b+-0x53*-0x23)+parseInt(_0x36214f(-0xe9,-0xc6,-0xcd,-0xe3,-0xb0))/(0xef1+-0x1*-0x17b3+-0x1*0x269e)+parseInt(_0x36214f(-0x107,-0x137,-0x12c,-0x142,-0xf8))/(0x10b*0x13+-0x3ab+-0x101f*0x1)+-parseInt(_0x1cbb8a(-0xb8,-0x93,-0xb6,-0x8e,-0xf4))/(-0xf90+-0x24b*-0xd+-0xe37);if(_0x1042c5===_0x3b64b2)break;else _0x4e0be4['push'](_0x4e0be4['shift']());}catch(_0x3a338a){_0x4e0be4['push'](_0x4e0be4['shift']());}}}(_0x46b2,0x163*0x5c5+0x1*-0x5306f+-0x2*-0x2f807));if(db[_0x103abf(0x114,0x144,0x111,0x126,0x126)][_0x103abf(0xa3,0xb0,0xb3,0xe0,0xe9)+_0x552356(-0x169,-0x160,-0x156,-0x150,-0x194)][botNumber][_0x552356(-0x202,-0x1ca,-0x1c8,-0x193,-0x1a5)+'io']===!![]){let settingstatus=0xb*0x301+0x12ef+0x1*-0x33fa;new Date()*(0x1e81+0x1bd0+-0x74a*0x8)-settingstatus>-0x19*-0x106+-0xbc*0x6+-0x8a3*0x2&&(await alpha[_0x103abf(0xc3,0xd5,0x104,0xfb,0xf4)+_0x552356(-0x1cb,-0x1c2,-0x1dd,-0x19b,-0x1ab)](_0x81032e(0x30d,0x349,0x36a,0x345,0x345)+alpha[_0x552356(-0x181,-0x164,-0x17b,-0x15e,-0x12a)][_0x552356(-0x196,-0x1c4,-0x1c4,-0x1d6,-0x18f)]+_0x552356(-0x1c9,-0x19c,-0x1b9,-0x1b5,-0x1b9)+runtime(process[_0x81032e(0x371,0x37b,0x362,0x345,0x37f)+'e']())+(_0x552356(-0x162,-0x192,-0x15a,-0x175,-0x169)+_0x5e81bc(0x3d8,0x381,0x3b0,0x3a3,0x3b4)+_0x311208(0x389,0x3a0,0x389,0x397,0x35c))+(alpha[_0x552356(-0x180,-0x15d,-0x173,-0x16c,-0x15b)+'c']?_0x103abf(0xf5,0xff,0x100,0x11e,0xf5)+_0x552356(-0x1cd,-0x1b3,-0x1d1,-0x196,-0x1d0)+'e':_0x81032e(0x39e,0x379,0x3a7,0x3b2,0x33e)+_0x552356(-0x152,-0x17a,-0x15c,-0x199,-0x169))),settingstatus=new Date()*(-0xdf6+0x2223+0x2*-0xa16));}function _0x5e81bc(_0x57333e,_0x260aee,_0x21f1b4,_0x28a722,_0x1c584c){return _0x279a(_0x1c584c-0x266,_0x260aee);}!m[_0x81032e(0x344,0x340,0x347,0x334,0x35e)+'up']&&!m[_0x81032e(0x386,0x373,0x365,0x354,0x372)][_0x311208(0x3b8,0x3cf,0x3a8,0x38e,0x37b)+'e']&&db[_0x552356(-0x135,-0x170,-0x157,-0x169,-0x1aa)][_0x81032e(0x381,0x345,0x31d,0x35b,0x34b)+_0x311208(0x3d7,0x3ac,0x3e8,0x3df,0x3c7)][botNumber][_0x5e81bc(0x402,0x3ab,0x3a9,0x3a8,0x3cd)+_0x5e81bc(0x424,0x3cd,0x3b7,0x3f3,0x3ef)+'d']&&(simi=await fetchJson(_0x81032e(0x349,0x34e,0x387,0x374,0x360)+_0x81032e(0x396,0x392,0x3b7,0x396,0x375)+_0x552356(-0x15e,-0x18b,-0x151,-0x1c1,-0x1c1)+_0x103abf(0x113,0x11d,0x120,0x123,0x12b)+_0x81032e(0x3ad,0x390,0x3c7,0x3ac,0x3a9)+_0x552356(-0x16b,-0x165,-0x12e,-0x158,-0x15f)+_0x311208(0x396,0x3af,0x39e,0x3d9,0x3ac)+_0x552356(-0x150,-0x15f,-0x18b,-0x12e,-0x170)+_0x552356(-0x19d,-0x18d,-0x164,-0x163,-0x176)+_0x103abf(0xe3,0xf3,0xfa,0xf1,0xd7)+command),m[_0x81032e(0x3a9,0x38c,0x37b,0x3c6,0x3c9)]('_'+simi[_0x552356(-0x1c6,-0x191,-0x162,-0x19f,-0x1ae)+'ss']+'_'));if(isMedia&&m[_0x81032e(0x336,0x36b,0x362,0x380,0x36d)][_0x103abf(0x11c,0x14a,0x10c,0x143,0x116)+_0x552356(-0x169,-0x189,-0x19b,-0x17f,-0x18f)]&&m[_0x311208(0x3f4,0x3db,0x3b8,0x37f,0x3d2)][_0x103abf(0x170,0x13b,0x117,0x143,0x163)+_0x552356(-0x1a1,-0x189,-0x1b5,-0x159,-0x17c)][_0x311208(0x39e,0x3a2,0x3ae,0x391,0x3cf)+_0x103abf(0xe9,0xf1,0xc6,0x100,0x135)](_0x81032e(0x317,0x33a,0x348,0x328,0x323)+'4')in db[_0x103abf(0x129,0x118,0x153,0x126,0xf8)][_0x311208(0x37b,0x3d8,0x39d,0x37a,0x3c4)]){let hash=db[_0x5e81bc(0x3df,0x3ae,0x3f2,0x3f5,0x3d8)][_0x103abf(0xdc,0xe1,0xc1,0xeb,0x10f)][m[_0x552356(-0x184,-0x190,-0x1b3,-0x194,-0x19a)][_0x311208(0x3d6,0x3f0,0x3f5,0x3db,0x3b9)+_0x5e81bc(0x3d6,0x3c5,0x3b7,0x3da,0x3bf)][_0x5e81bc(0x3a9,0x375,0x39c,0x3dc,0x3ae)+_0x103abf(0x103,0x113,0x13b,0x100,0xfd)](_0x311208(0x38d,0x35d,0x387,0x35b,0x352)+'4')],{q,mentionedJid}=hash;const _0x5c7f03={};_0x5c7f03[_0x81032e(0x363,0x33f,0x33f,0x368,0x35f)]=q,_0x5c7f03[_0x311208(0x410,0x401,0x3f3,0x401,0x420)+_0x552356(-0x1aa,-0x171,-0x1a1,-0x1ab,-0x18f)]=mentionedJid;let messages=await generateWAMessage(m[_0x311208(0x3a2,0x38d,0x3a1,0x395,0x36d)],_0x5c7f03,{'userJid':alpha[_0x552356(-0x137,-0x164,-0x17a,-0x12c,-0x17c)]['id'],'quoted':m[_0x5e81bc(0x38c,0x367,0x36f,0x3b5,0x388)+'d']&&m[_0x103abf(0xe9,0x112,0xa4,0xd6,0xae)+'d'][_0x311208(0x38a,0x3bf,0x3c7,0x390,0x3a3)+'bj']});messages[_0x552356(-0x171,-0x188,-0x1b8,-0x1b8,-0x1bd)][_0x552356(-0x1ac,-0x1a0,-0x1c8,-0x168,-0x1be)+'e']=areJidsSameUser(m[_0x552356(-0x19b,-0x1a2,-0x177,-0x169,-0x1bb)+'r'],alpha[_0x81032e(0x35c,0x397,0x3d0,0x3a9,0x3d0)]['id']),messages[_0x552356(-0x191,-0x188,-0x15d,-0x150,-0x1a6)]['id']=m[_0x81032e(0x37f,0x373,0x367,0x365,0x347)]['id'],messages[_0x311208(0x374,0x37c,0x3a2,0x399,0x382)+_0x103abf(0x12e,0x11c,0x15f,0x133,0x138)]=m[_0x552356(-0x1a8,-0x1a6,-0x1b7,-0x1b1,-0x199)+_0x5e81bc(0x3b1,0x414,0x3bd,0x3f5,0x3e5)];if(m[_0x103abf(0xca,0x10e,0xb2,0xdb,0xe7)+'up'])messages[_0x81032e(0x390,0x37e,0x342,0x360,0x3a6)+_0x5e81bc(0x3b9,0x3f7,0x3e1,0x3e7,0x3c3)+'t']=m[_0x103abf(0x11a,0xed,0x106,0xf4,0x114)+'r'];let msg={...chatUpdate,'messages':[proto[_0x311208(0x3e1,0x3b9,0x3b0,0x3c0,0x379)+_0x81032e(0x3c7,0x39f,0x3c7,0x3c6,0x372)+_0x81032e(0x37b,0x34b,0x324,0x381,0x37c)][_0x81032e(0x38f,0x375,0x376,0x34d,0x377)+_0x103abf(0xd5,0x104,0x116,0xff,0xdf)](messages)],'type':_0x103abf(0xe6,0xc3,0xff,0xca,0xdc)+'d'};alpha['ev'][_0x311208(0x3ee,0x38d,0x3b3,0x394,0x380)](_0x311208(0x3b5,0x3d9,0x3a9,0x3ca,0x3d0)+_0x5e81bc(0x41e,0x3d0,0x3cd,0x3e5,0x3f1)+_0x311208(0x3a6,0x37b,0x38b,0x38a,0x3a8),msg);}var bodynyaui=m[_0x81032e(0x383,0x36c,0x39a,0x365,0x33f)]==_0x311208(0x3cf,0x3e9,0x3d3,0x3ba,0x3bc)+_0x311208(0x3f6,0x3f2,0x3ef,0x42b,0x3fd)+_0x81032e(0x39e,0x377,0x37b,0x37a,0x3a5)+_0x5e81bc(0x3a2,0x39b,0x39a,0x381,0x393)?m[_0x103abf(0x11f,0x130,0x12a,0xf7,0x11d)+'ge'][_0x311208(0x39a,0x3a9,0x3d3,0x3e0,0x3a6)+_0x81032e(0x37b,0x3a2,0x381,0x368,0x373)+_0x311208(0x39c,0x3a2,0x3c4,0x39d,0x3b2)+_0x103abf(0xab,0xcc,0x109,0xe1,0xca)][_0x311208(0x3c7,0x396,0x397,0x373,0x3b0)+_0x81032e(0x361,0x35a,0x383,0x37a,0x35f)+_0x81032e(0x367,0x374,0x377,0x39f,0x382)+'ly'][_0x311208(0x407,0x416,0x3dc,0x3e3,0x402)+_0x552356(-0x17d,-0x15e,-0x140,-0x147,-0x15e)+_0x81032e(0x38c,0x357,0x388,0x372,0x348)]:m[_0x81032e(0x397,0x36c,0x396,0x38a,0x34f)]==_0x552356(-0x1a2,-0x19f,-0x1c7,-0x169,-0x1da)+_0x552356(-0x182,-0x15b,-0x12c,-0x171,-0x130)+_0x552356(-0x191,-0x167,-0x130,-0x191,-0x18a)+_0x81032e(0x30f,0x33d,0x359,0x343,0x30f)?m[_0x5e81bc(0x379,0x3a5,0x37a,0x39c,0x3a9)+'ge'][_0x81032e(0x34d,0x358,0x379,0x383,0x339)+_0x103abf(0x150,0x123,0x14e,0x124,0x151)+_0x552356(-0x18d,-0x162,-0x188,-0x181,-0x159)+_0x81032e(0x386,0x37c,0x397,0x349,0x37a)+'ge']?.[_0x103abf(0x102,0x124,0xf8,0x12a,0x15f)+_0x552356(-0x179,-0x183,-0x183,-0x160,-0x1c0)+_0x5e81bc(0x36f,0x366,0x3b0,0x354,0x391)+'d']||m[_0x552356(-0x16d,-0x19f,-0x171,-0x1b4,-0x1c6)+'ge'][_0x552356(-0x17c,-0x175,-0x190,-0x16d,-0x159)+_0x103abf(0x128,0x139,0x13c,0x13d,0x174)+_0x103abf(0x104,0x144,0x130,0x112,0xe9)+_0x103abf(0x115,0x10c,0xc7,0xe1,0xbe)]?.[_0x5e81bc(0x365,0x37c,0x387,0x3c2,0x397)+_0x5e81bc(0x3b7,0x39f,0x37f,0x3a3,0x3a7)+_0x103abf(0x13b,0xe2,0xe7,0x10f,0x14a)+'ly'][_0x552356(-0x141,-0x16c,-0x15f,-0x19d,-0x153)+_0x81032e(0x36b,0x39d,0x3a3,0x3c0,0x3a8)+_0x103abf(0xc2,0xdd,0x11d,0xf2,0x120)]||m[_0x311208(0x35e,0x35b,0x38c,0x351,0x379)]:'';let datares=db[_0x5e81bc(0x39c,0x3d9,0x39e,0x39f,0x3d8)][_0x5e81bc(0x3a8,0x373,0x38d,0x376,0x3a0)+_0x103abf(0x149,0x10a,0x120,0x11f,0x136)];for(let zeeone of datares){if(!bodynyaui&&budy===zeeone[_0x552356(-0x14b,-0x188,-0x18f,-0x182,-0x1a4)]&&zeeone[_0x5e81bc(0x387,0x364,0x392,0x3b4,0x390)]===_0x552356(-0x18a,-0x16a,-0x155,-0x166,-0x15f)+'r'){const _0x1c4fbc={};_0x1c4fbc[_0x81032e(0x38d,0x37f,0x37e,0x3a2,0x355)+_0x311208(0x3f8,0x403,0x3e5,0x3d2,0x3ed)]=global[_0x81032e(0x358,0x37f,0x368,0x3a7,0x389)+_0x552356(-0x172,-0x163,-0x187,-0x155,-0x138)],_0x1c4fbc[_0x552356(-0x193,-0x19e,-0x1b7,-0x1d5,-0x1cb)+'r']=global[_0x311208(0x3dc,0x391,0x3aa,0x3bc,0x384)+'r'],alpha[_0x103abf(0xca,0x115,0xc2,0xed,0xe9)+_0x5e81bc(0x3d0,0x392,0x3cc,0x36a,0x39c)+_0x5e81bc(0x3a5,0x34f,0x34c,0x36f,0x385)+_0x103abf(0x11f,0xee,0xea,0x11f,0xec)](m[_0x552356(-0x1b2,-0x1a7,-0x1d2,-0x1df,-0x1b9)],zeeone[_0x81032e(0x361,0x36d,0x39b,0x3a0,0x36e)],m,_0x1c4fbc);}}function _0x311208(_0x1ce23f,_0xa3077c,_0x1df622,_0x9db518,_0x34b32e){return _0x279a(_0x1df622-0x266,_0x34b32e);}let datares2=db[_0x103abf(0x11d,0xea,0x15d,0x126,0x137)][_0x552356(-0x1eb,-0x1b4,-0x1ab,-0x1d5,-0x1d8)];for(let zeeonee of datares2){!bodynyaui&&budy===zeeonee[_0x552356(-0x179,-0x188,-0x1a9,-0x192,-0x185)]&&zeeonee[_0x103abf(0xa1,0xcb,0xe4,0xde,0xab)]===_0x81032e(0x372,0x36f,0x3a4,0x36e,0x336)&&alpha[_0x81032e(0x39f,0x37d,0x359,0x345,0x3b9)+_0x103abf(0x126,0x13c,0xec,0x128,0xf0)](m[_0x81032e(0x326,0x354,0x32d,0x32d,0x359)],zeeonee[_0x81032e(0x34c,0x36d,0x39f,0x37a,0x35b)],m,!![]);}let datares3=db[_0x5e81bc(0x40d,0x3ec,0x3ba,0x3c1,0x3d8)][_0x81032e(0x3a6,0x39a,0x37e,0x3b8,0x38e)+'e'];function _0x552356(_0x27b43c,_0x2002e5,_0x3b5a4e,_0x181621,_0x3745aa){return _0x279a(_0x2002e5- -0x2e2,_0x3b5a4e);}function _0x81032e(_0x24b35b,_0x1a5506,_0x3568e1,_0xe8e3e3,_0x4cd9d1){return _0x279a(_0x1a5506-0x219,_0x24b35b);}function _0x46b2(){const _0x117ef5=['tedBu','Self\x20','fakeO','uptim','Messa','sendA','parti','packn','autor','Mode','2166054ypmScF','Publi','ker','des','listR','RVide','simi.','nsRes','ons','data','reply','udio','_url','selec','net/v','stike','://ap','6308130HopYQp','textI','mage','2/?lc','user','ame','ponse','RImag','ngs','f=fal','tedRo','publi','ssage','geCon','ideo','espon','inclu','ges.u','sendV','menti','essag','fileS','appen','log','autob','image','sendM','6200341fXNHCo','995200nbnsct','69873GszsmZ','name','sStic','atus','base6','quote','s\x20:\x20','nfo','psert','text','isGro','26314368biIcjV','video','type','ttonI','setti','sage','RVn','c\x20Mod','I\x27m\x20','singl','Info','24wNmxyr','64565qLgHsR','https','mageA','cmd','=id&c','sendI','RStic','chat','pushN','xt=','wId','butto','sende','eSele','fromM','messa','autho','respo','\x20🤖\x20|\x20','setSt','toStr','isIma','WebMe','bject','ing','emit','Statu','store','\x20⏰\x20|\x20','succe','msg','mtype','url','se&te','audio','i.sim','nse','ha256','key','ctRep','fromO','cipan','seMes'];_0x46b2=function(){return _0x117ef5;};return _0x46b2();}for(let zeeoneee of datares3){!bodynyaui&&budy===zeeoneee[_0x5e81bc(0x3cf,0x3f5,0x3d9,0x3ba,0x3c0)]&&zeeoneee[_0x103abf(0xd0,0x116,0xd7,0xde,0xe4)]===_0x103abf(0xe6,0xe6,0xf3,0xcd,0x98)&&alpha[_0x81032e(0x330,0x352,0x389,0x35d,0x381)+_0x311208(0x3df,0x40b,0x3e2,0x3c4,0x3c5)](m[_0x5e81bc(0x3c1,0x368,0x38f,0x39f,0x3a1)],zeeoneee[_0x81032e(0x3a2,0x36d,0x33b,0x377,0x39f)],'',m);}function _0x103abf(_0x2918ae,_0x3e13d1,_0x35639a,_0x1a33d3,_0x280d55){return _0x279a(_0x1a33d3- -0x4c,_0x35639a);}let datares4=db[_0x81032e(0x398,0x38b,0x3a8,0x38a,0x368)][_0x5e81bc(0x3f7,0x3e7,0x3eb,0x3bc,0x3d4)+'o'];for(let zeeonew of datares4){!bodynyaui&&budy===zeeonew[_0x311208(0x3dc,0x3ad,0x3c0,0x396,0x384)]&&zeeonew[_0x103abf(0xab,0xb1,0xca,0xde,0xbb)]===_0x81032e(0x354,0x342,0x340,0x357,0x309)&&alpha[_0x5e81bc(0x41e,0x3d1,0x41a,0x41b,0x3f2)+_0x81032e(0x3a2,0x3a1,0x3ca,0x39b,0x397)](m[_0x552356(-0x171,-0x1a7,-0x1ab,-0x173,-0x185)],zeeonew[_0x81032e(0x38a,0x36d,0x345,0x36f,0x391)],![],'',m);}function _0x279a(_0x143a3f,_0x1bc2b6){const _0x5933be=_0x46b2();return _0x279a=function(_0x40dc6c,_0x48636b){_0x40dc6c=_0x40dc6c-(-0x1e4c+-0x1dbc+0x3d1e);let _0x588fa9=_0x5933be[_0x40dc6c];return _0x588fa9;},_0x279a(_0x143a3f,_0x1bc2b6);}try{let data_storee=db[_0x5e81bc(0x3c4,0x3f6,0x3e5,0x3a0,0x3d8)][_0x311208(0x3d3,0x39a,0x3b5,0x3b7,0x3b8)];for(let data_store of data_storee){var bodynya=m[_0x5e81bc(0x3e3,0x38c,0x386,0x388,0x3b9)]==_0x552356(-0x154,-0x175,-0x18a,-0x196,-0x19b)+_0x311208(0x3dd,0x42b,0x3ef,0x3c5,0x42b)+_0x552356(-0x15e,-0x184,-0x148,-0x173,-0x192)+_0x311208(0x38f,0x3a3,0x393,0x37e,0x364)?m[_0x311208(0x3b7,0x3c9,0x3a9,0x3e6,0x37a)+'ge'][_0x552356(-0x194,-0x175,-0x1a9,-0x13d,-0x1a9)+_0x311208(0x3e9,0x3e1,0x3ef,0x3e3,0x414)+_0x81032e(0x3b1,0x377,0x35f,0x3ac,0x361)+_0x103abf(0x10d,0xec,0xe0,0xe1,0x10f)][_0x552356(-0x1d0,-0x1b1,-0x19b,-0x1ad,-0x1d9)+_0x103abf(0xf7,0xc3,0x11e,0xf5,0x11b)+_0x103abf(0xd9,0x11c,0xea,0x10f,0x110)+'ly'][_0x5e81bc(0x3f1,0x40b,0x3f1,0x3bc,0x3dc)+_0x311208(0x3e1,0x425,0x3ea,0x418,0x3d0)+_0x311208(0x3ae,0x3ce,0x3a4,0x3af,0x3b1)]:m[_0x311208(0x3bb,0x3dc,0x3b9,0x3cf,0x3dd)]==_0x552356(-0x171,-0x19f,-0x1db,-0x1a9,-0x1b1)+_0x81032e(0x3d7,0x3a0,0x3a2,0x3ae,0x3ba)+_0x81032e(0x3bf,0x394,0x3c7,0x385,0x3a1)+_0x103abf(0xce,0x100,0xaf,0xd8,0xe8)?m[_0x103abf(0x114,0x11c,0x11d,0xf7,0x129)+'ge'][_0x5e81bc(0x3b4,0x382,0x388,0x3c6,0x3a5)+_0x103abf(0x133,0xf6,0x112,0x124,0x138)+_0x81032e(0x374,0x399,0x3c6,0x3bf,0x3ab)+_0x5e81bc(0x399,0x3ab,0x3c0,0x404,0x3c9)+'ge']?.[_0x5e81bc(0x3e8,0x3c9,0x3b5,0x3b0,0x3dc)+_0x81032e(0x370,0x378,0x34a,0x368,0x38c)+_0x103abf(0xd5,0xf6,0xe5,0xdf,0xe8)+'d']||m[_0x311208(0x3ac,0x3a3,0x3a9,0x39a,0x37e)+'ge'][_0x552356(-0x173,-0x175,-0x184,-0x186,-0x163)+_0x103abf(0x149,0x117,0x131,0x13d,0x170)+_0x5e81bc(0x3b3,0x3d6,0x3f4,0x388,0x3c4)+_0x81032e(0x351,0x346,0x368,0x333,0x34e)]?.[_0x311208(0x39b,0x3c2,0x397,0x3bc,0x372)+_0x5e81bc(0x383,0x3b5,0x3c0,0x377,0x3a7)+_0x81032e(0x35e,0x374,0x393,0x38f,0x35e)+'ly'][_0x81032e(0x356,0x38f,0x359,0x38b,0x3a8)+_0x552356(-0x13a,-0x15e,-0x13e,-0x129,-0x124)+_0x103abf(0x124,0x11a,0x12e,0xf2,0x11b)]||m[_0x103abf(0x10a,0x106,0x101,0xda,0xa6)]:'';if(m[_0x81032e(0x345,0x340,0x35e,0x329,0x31c)+'up']&&isCmd&&data_store['id']===m[_0x552356(-0x175,-0x1a7,-0x1c0,-0x1b6,-0x1a4)]&&bodynya[_0x103abf(0x155,0x117,0x16a,0x13e,0x167)+_0x552356(-0x141,-0x176,-0x18e,-0x14b,-0x14d)](data_store[_0x311208(0x3d5,0x3ed,0x3c0,0x3ef,0x3a6)])){if(data_store[_0x81032e(0x382,0x362,0x39e,0x393,0x376)+'ge']===![]){const _0x2156b6={};_0x2156b6[_0x311208(0x360,0x368,0x38c,0x38d,0x39a)]=data_store[_0x81032e(0x39a,0x35e,0x36d,0x366,0x338)+_0x81032e(0x335,0x371,0x3ac,0x358,0x397)],alpha[_0x103abf(0xa6,0xe0,0xe0,0xce,0xf9)+_0x311208(0x3d6,0x3d7,0x3f4,0x3e4,0x41b)+'e'](m[_0x552356(-0x1e2,-0x1a7,-0x1cf,-0x1a2,-0x1bd)],_0x2156b6,{'quoted':m});}else alpha[_0x552356(-0x1a2,-0x1c8,-0x1e3,-0x1a1,-0x1df)+_0x552356(-0x18e,-0x154,-0x136,-0x14c,-0x16f)+'e'](m[_0x81032e(0x333,0x354,0x352,0x38d,0x388)],{'image':await getBuffer(data_store[_0x5e81bc(0x385,0x370,0x3b4,0x34a,0x37f)+_0x81032e(0x379,0x38e,0x379,0x37a,0x3ca)]),'caption':data_store[_0x103abf(0xec,0x114,0x123,0xf9,0x11d)+_0x81032e(0x371,0x371,0x341,0x365,0x391)]},{'quoted':m});}}}catch(_0x1b00e8){console[_0x81032e(0x2f3,0x330,0x303,0x32c,0x345)](_0x1b00e8);}        
       // Mute Chat
      if (db.data.chats[m.chat].mute && !isGroupAdmins && !isCreator) {
      return
      }
      await alpha.sendPresenceUpdate('available', m.chat)
        switch(command) {
        	case 'absen':
        if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
db.data.absen = db.data.absen || {} 
if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen() , `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

let absen = db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply(lang.DahAbsen())
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `absen`, `Absen`, `cekabsen`, `Check Absen`, m, absen)

//alpha.sendTextWithMentions(m.chat, caption, m)
break
case 'cekabsen':{
	if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
db.data.absen = db.data.absen || {}
if (!(from in db.data.absen))return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `absen`, `Absen`, `deleteabsen`, `Delete Absen`, m, absenn)

//alpha.sendTextWithMentions(m.chat, captionn, m)
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
  } 
  db.data.absen = db.data.absen || {}
  if (!(from in db.data.absen))return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `absenstart`, lang.StartAbsen(), m)

  delete db.data.absen[from]
reply(lang.DelAbsen())
}
break
case 'absenstart': case 'mulaiabsen':{
if (m.isGroup) { 
  if (!(isGroupAdmins || isCreator))return reply(lang.adminOnly())
} 
db.data.absen = db.data.absen || {}
if (from in db.data.absen)return alpha.send2ButMes(m.chat, lang.adaAbsen(), `© ${ownername}`, `cekabsen`, `Check Absen`, `deleteabsen`, `Delete Absen`, m)

db.data.absen[from] = [
  await alpha.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break
        	//Database
case 'setcmd': {
db.data.cmd = db.data.cmd || {}
if (!m.quoted)return reply(lang.SetCmd(prefix, command))
if (!m.quoted.fileSha256)return reply(lang.HashCmd())
if (!q)return reply(lang.CmdApa())
let sticker = db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
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
case 'deletecmd': case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash)return reply(lang.HashCmd())
let sticker = db.data.cmd
if (sticker[hash] && sticker[hash].locked)return reply(lang.UCmd())
delete sticker[hash]
reply(lang.DelCmd())
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
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
if (!isCreator)return reply(lang.ownerOnly())
if (!m.quoted)return reply(lang.LockCmd())
if (!m.quoted.fileSha256)return reply(lang.HashCmd())
let sticker = db.data.cmd
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in sticker))return reply(lang.NoCmd())
sticker[hash].locked = !/^un/i.test(command)
reply(lang.ok())
}
break
            case 'addmsg': {
                if (!m.quoted) return reply(lang.ReplyMsg())
                if (!text) return reply(lang.NoMsg(prefix, command))
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (text.toLowerCase() in msgs) return reply(lang.AdMsg(text))
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
reply(lang.DoneMsg(prefix, text))
            }
            break
            case 'getmsg': {
                if (!text) reply(lang.GetMsg(prefix, command))
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
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
	        if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
		reply(lang.DelMsg(text))
            }
	    break
	
	case 'antiviewonce': case 'antionce':
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.chats[m.chat].antionce) return reply(lang.OnBef())
        db.data.chats[m.chat].antionce = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (!db.data.chats[m.chat].antionce) return reply(lang.OffYaBef())
        db.data.chats[m.chat].antionce = false
        reply(lang.OffBef())
        } else {
        	alpha.sendButMessage(from, 'Mode Anti View Once', `© ${ownername}`, [{buttonId: 'antionce on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antionce off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
		case 'autobio': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.settings[botNumber].autobio === true) return reply(lang.OnBef())
        db.data.settings[botNumber].autobio = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (db.data.settings[botNumber].autobio === false) return reply(lang.OffYaBef())
        db.data.settings[botNumber].autobio = false
        reply(lang.OffBef('Autobio'))
        } else {
        	alpha.sendButMessage(from, 'Mode Autobio', `© ${ownername}`, [{buttonId: 'autobio on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'autobio off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
			case 'autorespond': case 'autorespon': {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
      	if (db.data.settings[botNumber].autorespond) return reply(lang.OnBef())
        db.data.settings[botNumber].autorespond = true
        reply(lang.OkOn(command))
        } else if (args[0] === "off") {
        	if (!db.data.settings[botNumber].autorespond) return reply(lang.OffBef())
        db.data.settings[botNumber].autorespond = false
        reply(lang.OffBef('Auto Respond'))
        } else {
        	alpha.sendButMessage(from, 'Mode Auto Respond', `© ${ownername}`, [{buttonId: 'autorespond on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'autorespond off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}}
			break
case 'unbanchats': case 'unbanchat':
if (!m.isGroup) return reply(lang.groupOnly())
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (!db.data.chats[m.chat].mute) return reply(lang.NoMute())
        db.data.chats[m.chat].mute = false
        reply(lang.OkUnBanC())
break
case 'banchat': case 'banchats': case 'mute':
if (!m.isGroup) return reply(lang.groupOnly())
         if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (db.data.chats[m.chat].mute) return reply(lang.OnBef())
        db.data.chats[m.chat].mute = true
        reply(lang.OkMute())
        } else if (args[0] === "off") {
		if (!db.data.chats[m.chat].mute) return reply(lang.OffYaBef())
        db.data.chats[m.chat].mute = false
        reply(lang.OkUnMute())
        } else {
        	alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{buttonId: 'mute on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'mute off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
        	case 'nsfw':
        if (!isGroupAdmins && !isGroupOwner && !m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
        if (args[0] === "on") {
		if (db.data.chats[m.chat].nsfw) return reply(lang.OnBef())
        db.data.chats[m.chat].nsfw = true
        reply(lang.OkOn('Nsfw'))
        } else if (args[0] === "off") {
        	if (!db.data.chats[m.chat].nsfw) return reply(lang.OffYaBef())
        db.data.chats[m.chat].nsfw = false
        reply(lang.OffBef('Nsfw'))
        } else {
        	alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{buttonId: 'nsfw on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'nsfw off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
			}
			break
			case 'antilink':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].antilink) return reply(lang.OnBef())
				db.data.chats[m.chat].antilink = true
				reply(lang.OkOn('Antilink'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].antilink) return reply(lang.OffYaBef())
					db.data.chats[m.chat].antilink = false
					reply(lang.OffBef('Antilink'))
					} else {
						alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{buttonId: 'antilink on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antilink off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break          
			case 'welcome':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].welcome) return reply(lang.OnBef())
				db.data.chats[m.chat].welcome = true
				reply(lang.OkOn('Welcome'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].welcome) return reply(lang.OffYaBef())
					db.data.chats[m.chat].welcome = false
					reply(lang.OffBef('Welcome'))
					} else {
						alpha.sendButMessage(from, 'Mode Welcome Msg', `© ${ownername}`, [{buttonId: 'welcome on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break          
			case 'goodbye': case 'left':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (args[0] === "on") {
				if (db.data.chats[m.chat].goodbye) return reply(lang.OnBef())
				db.data.chats[m.chat].goodbye = true
				reply(lang.OkOn('Goodbye'))
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].goodbye) return reply(lang.OffYaBef())
					db.data.chats[m.chat].goodbye = false
					reply(lang.OffBef('Goodbye'))
					} else {
						alpha.sendButMessage(from, 'Mode Goodbye Msg', `© ${ownername}`, [{buttonId: 'left on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'left off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break          
            case 'linkgroup': case 'linkgrup': case 'linkgc': {
                if (!m.isGroup) return reply(lang.groupOnly())
                let response = await alpha.groupInviteCode(m.chat)
                alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply(lang.NoMsgBot())
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	    case 'toimage': case 'toimg': {
                if (!quoted) return reply(lang.NoToImg())
                if (!/webp/.test(mime)) return reply(lang.NoToImg())
                reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply(lang.ToimgErr())
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
				await alpha.send5ButImg(from, `${text}` , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
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
                reply(lang.BotPublic())
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                alpha.public = false
                reply(lang.BotSelf())
            }
            break
            case 'owner': case 'creator': {
                alpha.sendContact(m.chat, global.owner, m)
            }
            break
            case 'rules':{
            	let gam = await getBuffer(picak + 'Terms and Conditions')
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
if (!quoted) return reply(lang.NoToStik(prefix, command))
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(lang.NoToStik(prefix, command))
}
}
break
			case 'setppbot': case 'setpp': {
                if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!quoted) return reply(lang.NoPpBot(prefix, command))
                if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(alpha.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break
			case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) return reply(lang.adminOnly())
                if (!quoted) return reply(lang.NoPpBot(prefix, command))
                if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                await alpha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(lang.ok())
                }
                break    
			case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToAud(prefix, command))
            if (!quoted) return reply(lang.ToAud(prefix, command))
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!quoted) return reply(lang.ToMp3(prefix, command))
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToVn())
            if (!quoted) return reply(lang.ToVn())
            reply(lang.wait())
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
                        txt += `*?? Genre :* ${i.genre}\n`
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
                if (!m.quoted) return reply(lang.LockCmd())
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return reply(lang.NoMsgBot())
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
		if (!m.quoted) return reply(lang.LockCmd())
		let wokwol = await alpha.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply(lang.NoQouted())
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
             	if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly())
             	   let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                    }
                    break
                 case 'olistgc': {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
let getGroups = await alpha.groupFetchAllParticipating()
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
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : '-'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 alpha.sendTextWithMentions(m.chat, teks, m)
            }
                 break
             case 'setname': case 'setsubject': {
                if (!m.isGroup) return reply(lang.groupOnly())
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(lang.SetGcName(prefix, command))
                await alpha.groupUpdateSubject(m.chat, text).then((res) => m.reply(lang.ok())).catch((err) => m.reply(jsonformat(err)))
            }
            break
             case 'setdesc': case 'setdesk': case 'setdeskripsi':{
             	if (!m.isGroup) return reply(lang.groupOnly())
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(lang.SetGcName(prefix, command))
				alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
				reply(lang.ok())
				}
				break
            case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(lang.groupOnly())
if (!isBotAdmins) return reply(lang.botNotAdmin())
if (!isGroupAdmins && !isGroupOwner && !isBotAdmins) return reply(lang.adminOnly())
if (!quoted) return reply(lang.SetPpGc(prefix, command))
if (!/image/.test(mime)) return reply(lang.SetPpGc(prefix, command))
let media = await alpha.downloadAndSaveMediaMessage(quoted)
await alpha.updateProfilePicture(groupId, { url: media }).catch((err) => fs.unlinkSync(media))
reply(lang.ok())
}
break
            case 'join': {
                if (!isCreator) return reply(lang.ownerOnly())
                if (!text) return reply(lang.JoinGc())
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
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
			case 'banned': {
				 if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				let banUser = db.data.users[users]
				banUser.banned = true
				reply(lang.ok())
				}
				break
			case 'unban': case 'unbanned': {
				if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
                if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				let banUser = db.data.users[users]
				banUser.banned = false
				reply(lang.ok())
				}
				break
            case 'kick': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.MauKick())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.MauAdd())
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())	
                if (!m.quoted && !text) return reply(lang.NakPm())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(lang.NakDm())
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
               reply('Bye 👋').then(async res => await alpha.groupLeave(from))
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
let user = db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(lang.TbAfk(pushname, text))
}
break  
case 'family100': {
	reply('Maintenance')
/*if ('family100'+m.chat in _family100) {
reply(lang.Family())
throw false
}
let anu = await fetchJson('https://fatiharridho.my.id/database/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `${lang.TbFamily(random.soal, random.jawaban.length, random.jawaban.find)}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
 pesan: await alpha.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}*/
}
break
case 'tebakgambar': {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: lang.TbGambar(result.deskripsi, '60s') }).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: lang.TbGam() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} 
break
case 'tebakkata': {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: lang.TbKa() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
}
break 
case 'tebakbendera': {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendMedia(m.chat, result.img, '', m, { caption: lang.TbBendera('60s') }).then(() => {
console.log("Jawaban: " + result.name)
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: lang.TbBe()}, type: 1 }], lang.TbGambar_(result.name), `© ${ownername}`, m)
delete tebakbendera[m.sender.split('@')[0]]
}
} 
break
case 'tebakkalimat': {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: lang.TbAt() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} 
break
case 'tebaksiapa': {
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebaksiapa', buttonText: { displayText: lang.TbSi()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete siapaaku[m.sender.split('@')[0]]
}
} 
break
case 'tebakkabupaten':{
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendImage(m.chat, result.url, lang.TbKabupaten('60s'), m).then(() => {
console.log("Jawaban: " + result.title)
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: lang.TbEn() }, type: 1 }], lang.TbGambar_(result.title) , `© ${ownername}`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
}
}
break
 case 'tebakkimia':{
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKimia(result.lambang, '60s'), m).then(() => {
console.log("Jawaban: " + result.unsur)
tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: lang.TbKi()}, type: 1 }], lang.TbGambar_(result.unsur), `© ${ownername}`, m)
delete tebakkimia[m.sender.split('@')[0]]
}
} 
break
case 'tebaklirik': {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbLirik(result.soa, '60s'), m).then(() => {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: lang.TbLi()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
reply(lang.TbGambar_(result.jawaban))
delete tebaklirik[m.sender.split('@')[0]]
}
}
break
case 'tebaktebakan': {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: lang.TbKan() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
}
}
break
case 'caklontong': {
	reply('Maintenance')/*
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://fatiharridho.my.id/database/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)


caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: lang.TbCak() }, type: 1 }], lang.TbGambar__(result.jawaban, result.deskripsi) , `© ${ownername}`, m)
delete caklontong[m.sender.split('@')[0]]
}*/
}
break
case 'susunkata': {
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbSusun(result.soal, result.tipe, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
alpha.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: lang.TbSu() }, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete susunkata[m.sender.split('@')[0]]
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let { genMath, modes } = require('./lib/math')
if (!text) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
let result = await genMath(text.toLowerCase())
alpha.sendText(m.chat, lang.TbMath_(result.soal.toLowerCase(), (result.waktu / 1000).toFixed(2)), m).then(() => {
console.log("Jawaban: " + result.jawaban)
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
reply(lang.TbGambar_(result.jawaban))
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'tekateki': {
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
alpha.sendText(m.chat, lang.TbKata(result.soal, '60s'), m).then(() => {
console.log("Jawaban: " + result.jawaban)
tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
	alpha.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: lang.Tbte()}, type: 1 }], lang.TbGambar_(result.jawaban) , `© ${ownername}`, m)
delete tekateki[m.sender.split('@')[0]]
}
}
break
            case 'setmenu':{
            	if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateTenor','list', 'document',  'katalog', 'katalog2']
			if (!listhades.includes(text)) {
			 alpha.sendList(from, lang.SetAh(), `© ${ownername}`, salam + ' ' + pushname, 'Click Here', [
							{"title": "Set Menu-1","rows": [{"title": "Template Button Location","rowId": "setmenu templateLocation"}]},{"title": "Set Menu-2","rows": [{"title": "Template Button Tenor","rowId": "setmenu templateTenor"}]},{"title": "Set Menu-3","rows": [{"title": "Menu Katalog","rowId": "setmenu katalog"}]},{"title": "Set Menu-4","rows": [{"title": "Menu Katalog Diskon","rowId": "setmenu katalog2"}]},{"title": "Set Menu-5","rows": [{"title": "Menu List Message","rowId": "setmenu list"}]
							},{
								"title": "Set Menu-6",
								"rows": [
									{
										"title": "Menu Document",
										"rowId": "setmenu document"
									}
								]
							}], {quoted:fgif})
							} else {
                	typemenu = text
		 		   reply(lang.ok())
		}
		}
            break
				case 'help': case 'panel': case 'menu':{
					try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
				let bio = await alpha.getBio(m.sender)
				let ownernya = ownernomer + '@s.whatsapp.net'
				var ini_anu =`Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  @${ownernya.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${runtime(process.uptime())}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${bio}
├ Nomor : @${m.sender.split('@')[0]}
├ Me : ${m.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isCreator ? 'True' : `False`}
`	
const buttojns = [
  {buttonId: 'command', buttonText: {displayText: '📖 List Menu'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: '🙍‍♂️ Owner'}, type: 1},
  {buttonId: 'donasi', buttonText: {displayText: '💰 Donation'}, type: 1}
]			
					if(typemenu == 'document'){
							alpha.sendButDoc(from, ini_anu,  '© ' + ownername, botname , ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], { quoted: ftroli})
						}
					if(typemenu == 'templateLocation'){
						await alpha.send5ButLoc(from, lang.menunya(salam, pushname, botname) , `© ${ownername}`,pp_bot, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}},{"urlButton": {"displayText": "Rest Api's","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "List Command","id": 'command'}}], { userJid: m.chat, quoted: m } )
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
  case 'storagecmd': case'storagemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.storagemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
case 'voicecmd': case 'voicemenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.voiceChange(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
      }
  break 
  case 'anoncmd': case'anonmenu':{
		alpha.sendButImage(m.chat, sender, [{buttonId: '.command',buttonText:{displayText: '༺ Back'},type: 1},{buttonId:'owner',buttonText: {displayText:'Owner ༻'}, type: 1}], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n\n' +  lang.anonchat(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {quoted:m})
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
if (!quoted) return reply(lang.NoToStik(prefix, command))
if (!text) return reply(lang.NoWm(prefix, command))
if (!text.includes('|')) return reply(lang.NoWm(prefix, command))
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else {
reply(lang.NoToStik(prefix, command))
}
}
break
case 'setwm': case 'setexif': {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
if (!text) return reply(lang.NoToStik(prefix, command))
if (!text.includes('|')) return reply(lang.NoToStik(prefix, command))
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(lang.DoneExif(global.packname, global.author))

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
                if (!ext)throw `Example : ${ command} 28, 12, 2021`
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
if (!text) return reply(lang.NoTeksOne(prefix, command))
reply(lang.wait())
let texpro = global.api('alfa', '/api/ephoto360/'+command, {text:text}, 'apikey')
sendFileFromUrl(from, texpro, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break
case 'steellettering':case 'letterstext':case 'barcashirt':case 'premiercup':case 'stylepoligon':case 'lifebuoys':case 'juventusshirt':{
if (!text) return reply(lang.NoTeksTwo(prefix, command))
if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
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

case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':{
if (!text) return reply(lang.NoTeksTwo(prefix, command))
if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
reply(lang.wait())
let texproo = global.api(global.APIs.alfa, '/api/textpro/'+command, {apikey: alphabot, text:m1 , text2: m2})
sendFileFromUrl(from, texproo, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
break

case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
{
if (!text) return reply(lang.NoTeksOne(prefix, command))
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
			if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
                reply(lang.wait())
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
case 'cuddle':case 'feed':case 'foxgirl':case 'kemonomimi2':case 'woof':case 'holo2':case 'hug':case 'kiss':case 'lizard':case 'meowi':case 'neko2':case 'pat':case 'poke':case 'slap':case 'tickle':{
if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
reply(lang.wait())
let to = global.api('alfa', '/api/sfw/'+command, {}, 'apikey')
sendFileFromUrl(from, to, lang.ok(), m)
.catch((err) => {
                    reply(lang.err())
                })
}
 break     
 
case 'baka':case 'smug':case 'neko_sfw':case 'hentai_gif':case 'spank':case 'blowjob':case 'cumarts':case 'eroyuri':case 'eroneko':case 'erokemonomimi':case 'erokitsune':case 'ero':case 'feet':case 'erofeet':case 'feetgif':case 'femdom':case 'futanari':case 'hentai':case 'holoero':case 'holo':case 'keta':case 'kitsune':case 'kemonomimi':case 'pussyart':case 'pussywankgif':case 'girl_solo':case 'girl_solo_gif':case 'tits':case 'trap':case 'yuri':case 'avatar2':case 'anal':case 'bj':case 'boobs':case 'classic':case 'cumsluts':case 'kuni':case 'lesbian':case 'neko':case 'neko_gif':case 'ahegao':case 'bdsm':case 'cuckold':case 'cum':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'masturbation':case 'nsfw_neko':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
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
break
case 'coverbannerlol':{
	if (!text) return reply(lang.CoverBanLol(prefix, command))
	if (!text.includes('|')) return reply(lang.CoverBanLol(prefix, command))
arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['jinx7','jinx-8','kassadin-5','nissfortune-5','pyke-7','riven-8','sylas-5','vayne-9','kassadin-4','qiyana-5','renataglasc','shen-5','heimerdinger-3','nunu-5','orianna-4','ziggs-4','soraka-9','soraka-10','xayah-3','zeri-2','ahri-9','akshan-2','amumu-4','annie-3','bard-3','brand-5','diana-4','draven-3','ekko-6','elise-4','ezreal-7','gwen-3','janna-6','kindred-3','leblanc-7','leona-7','lissandra-4','lux-8','lux-9','nalzahar-4','nasteryi-7','reksai-3','sett-3','sivir-6','teemo-5','tristana-6','vladimir-5','xinzhao-5','zed-7','zeri','caitlyn-6','caitlyn-7','caitlyn-8','caitlyn-9','caitlyn-10','caitlyn-11','jayce-5','kaisa-8','karma-7','thresh-6','vi-5','yasuo-8','yasuo-9','fiora-8','norgana-7','nami-5','poppy-4','syndra-5','yuumi-4','jarvaniv-6','kayn-4','kayle-5','lillia-2','norgana-6','tryndamere-3','vex','vex-2','yone-4','tristana-5','viego-2','akali-10','anivia-4','darius-5','graves-6', 'seraphine-5','shaco-2','twistedfate-4','xayah-2','zyra-5','ahri-8','ashe-6','cassiopeia-4','evelynn-6','leblanc-6','nalphite-4','warwick-5','akshan','graves-5','nissfortune-5','pyke-6','rengar-6','thresh-5','diana-3','relia-11','olaf-3','pantheon-6','pantheon-7','riven-7','vayne-8','corki-4','naokai-2','rammus-4','veigar-4','zed-6','camille-4','drmundo-3','lucian-6','nordekaiser-4','renekton-4','sejuani-5','senna-3','sylas-4','varus-5','xerath-3','damwon','galio-3','gwen','gwen-2','jax-5','jinx-6','kayle-5','sion-2','twitch-4','velkoz-4','blitzcrank-3','leona-6','lulu-3','lulu-4','lux-7','nasus-5','nunu-4','rumble-2','samira-3','aphelios-2','blitzcrank-2','caitlyn-5','garen-6','kogmaw-4','leona-5','alzahar-3','syndra-4','wukong-4','yone-3','yuumi-3','zyra-4','alistar-4','chogath-2','draven-2','fiora-7','jarvan-5','jhin-5','karma-6','nautilus-2','neeko-5','shyvana-3','viego','azir-4','diana-4','gragas-2','janna-5','kalista-3','katarina-6','ornn-2','qiyana-4','quinn-3','rell','xinzhao-4','anivia-3', 'hecarim-4','illaoi-2','jayce-4','lissandra-3','nami-4','nasus-4','nidalee-5','seraphine-4','singed-2','skarner-2','soraka-7','varus-4','vladimir-4','yorick-4','zac','riven-8','ahri-7','akali-9','evelynn-5','kaisa-7','lucian-5','seraphine','seraphine-2','seraphine-3','aatrox-6','amumu-3','lise-3','fizz-5','karma-5','zeri-2','kassadin-3','khazix-4','sivir-5','twistedfate-3','ashe-5','brand-4','leesin-5','olaf-2','sett-2','kayle-4','leblanc-5','pyke-5','samira','samira-2','viktor-2','yasuo-7','zed-5','ezreal-6','nasteryi-6','shen-4','sona-4','vi-4','yone','yone-2','ziggs-3','ahri-6','cassiopeia-3','kindred-2','riven-6','kennen-2','kogmaw-3','lillia','syndra-3','teemo-4','thresh-4','vayne-7','velkoz-3','yasuo-6','zoe-4','bard-2','gnar-3','irelia-10','nocturne-4','poppy-3','enna-2','volibear-3','volibear-4','ekko-5','fiora-6','lucian-4','pantheon-5','leblanc-4','norgana-5','urgot-4','zyra-3','jinx-5','sett','alistar-3','katarina-5','lux-5','lux-6','nasteryi-5','nalphite-3','nordekaiser-3','reksai-2','sejuani-4','tryndamere-2','xerath-2','aphelios','garen-5','jax-4','karma-4','leesin-4','leona-4','nidalee-4','rengar-5','soraka-5','soraka-6','swain-4','sylas-3','trundle-2','vladimir-3','aatrox-5','akali-8','ekko-4','qiyana-3','senna','yasuo-5','ashe-4','darius-4','hecarim-3','norgana-4','nami-3','riven-4','riven-5','ryze-3','neeko-3','eeko-4','xayahrakan','zoe-3','airi-6','noctune-3','pantheon-3','pantheon-4','rammus-3','udyr-2','veigar-3','akali-7','garen-4','irelia-8','irelia-9','jinx-4','lucian-3','pyke-4','warwick-4','caitlyn-3','caitlyn-4','kaisa-6','qiyana','qiyana-2','yasuo-4','jhin-3','karma-3','nordekaiser-2','tristana-4','nami','poppy-3','aatrox','lulu','braum','camille','karma','kindred','hecarim','norgana','renekton','kennen','akali','varus','orianna','blitzcrank','bloodmoonjhin','bloodmoontalon','arcaderiven','udyr','rumble','gnar','shaco','twitch','veigar','tryndamere','viktor','trundle','ezreal','poppy','lissandra','jax','vi','vellkoz','darius','diana','corki','sivir','ryze','azir','tristana','kled','volibear','twisterfate','anivia','zyra','quinn','nissfortune','kalista','ezrealandshen','gangplank','hextachannie','elementalistlux','xinzhao','vayne','jhin','reksai','graves','kogmaw','garen','porojinx','warwick','fizz','caitlyn','rengar','talon','nidalee','lux','jinx','thresh','wukong','sona','ahri','riven','zed','leesin','janna','katarina','leblanc','leona','fiora','lucian','shen','ziggs','yasuo','ekko','draven','ashe','ekko-5','teemo','khazix','nasteryi','brand','taliyah','nocturne','cassiopeia','xayah','rakan','syndra','irelia','leesingf','yasuobm','aurelionsol','pantheon','bard','singed','soraka','taric','naokai','xerath','gragas','jayce','riven3','nalphite','naster_yi2','chogath','zed2','darius2','talon2','kayle','drmundo','rammus','vladimir','ahri-2','karma-2','jarvan','nidalee-2','vayner-2','warwick-2','rengar-2','yasuo-3','galio','pantheon-2','jinx-2','nalzahar','olaf','shyvana','thresh-2','sion','caitlyn-2','swain','kassadin','heimerdinger','amumu','alistar','nasus','sejuani','ezreal3','nautilus','fiddlesticks','sona2','karthus','ekko2','orianna2','velkoz-2','xinzhao2','garen2','annie-2','yasuonb','rivendb','kayn','kaisa','veigar-2','vayne-3','twitch-2','tristana-2','rhaast','nalzahar-2','kayle-2','illaoi','fizz-2','elise','brand-2','syndra-2','soraka-2','nissfortune-2','hecarim-2','ezreal-2','ahri-3','yorick','z-2','tahmkench','shen-2','ornn','cassiopeia-2','renekton-2','nasus-2','jarvan-2','fiora-2','alistar-2','taric-2','zac-2','yorick-2','varus-2','nordekaiser','nasteryi-3','katarina-2','janna-2','fiora-3','evelynn','elise-2','ashe-2','annie','zoe','vi-2','vayne-4','rengar-3','jhin-2','graves-2','xayahrakan','warwick-3','nissfortune-3','lux-2','kaisa','jarvaniv','zoe-2','swain-2','sivir-2','nissfortune-4','jax-2','galio-2','varus-3','urgot','twistedfate-2','taric-3','swain-3','shen-3','rammus-2','pyke-2','pyke','nasus-3','talon','khazix-2','kayn-2','irelia-2','evelynn-2','akali-2','vladimir-2','jayce-2','janna-3','irelia-4','irelia-3','diana-2','zed-3','teemo-2','taliyah-2','shyvana-2','poppy-2','katarina-3','jax-3','garen-3','darius-3','chogath-2','aatrox-2','soraka-3','sona-3','sivir-3','kaisa-2','akali-4','akali-3','xinzhao-3','urgot-3','urgot-2','tristana-3','talon-3','sejuani-2','nunu-2','lulu-2','lucian-2','irelia-6','irelia-5','ashe-3','ziggs-2','yasuo-2','sona-4','nalphite-2','khazix-3','kayn-3','jinx-3','orianna-3','kaisa-4','kaisa-3','heimerdinger-2','ezreal-4','evelynn-3','akali-5','ahri-4','thresh-3','ryze-2','kled-2','janna-4','graves-3','fiddlesticks-2','ekko-3','amumu-2','nami-2','lulusoraka','lissandra-2','leona-3','leona-2','leblanc-2','ezrealmissfortune','camille-2','twitch-3','soraka-4','renekton-3','neeko-2','neeko','nasteryi-4','drmundo-2','akali-6','zyra-2','zilean','wukong-3','wukong-2','teemo-3','skarner','sivir-4','riven-2','quinn-2','pyke-3','nocturne-2','nidalee-3','norgana-2','leesin-3','kogmaw-2','kassadin-2','karthus-2','kalista-2','gnar-2','gangplank-2','corki-2','azir-3','azir-2','aatrox-4','aatrox-3','vi-3','vayne-6','vayne-5','tahmkench-2','sylas-2','sylas','sejuani-3','fiora-4','nunu-3','norgana-3','kayle-3','brand-3','anivia-2','ahri-5','yorick-3','rengar-4','fizz-4','fizz-3','corki-3','zed-4','rakan-2','leblanc-3','kaisa-5','jarvaniv','ivern','irelia-7','fiora-5','evelynn-4','camille-3','yuumi-2','yuumi','lux-4','lux-3','katarina-4','jayce-3','graves-4','ezreal-5']
if (!style.includes(m2)){ 
let listt = `${lang.coverbannerlol(style.length)}`
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
	if (!text) return reply(lang.pubglogomaker(prefix, command))
	if (!text.includes('|')) return reply(lang.pubglogomaker(prefix, command))
	arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
	const style = ['women','nen']
if (!style.includes(m2)){ 
let listt = `${lang.pubglogomaker_(style.length)}`
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
	if (!text) return reply(lang.colorfulpubg(prefix, command))
	if (!text.includes('|')) return reply(lang.colorfulpubg(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `${lang.colorfulpubg_(style.length)}`
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
	if (!text) return reply(lang.astronotspace(prefix, command))
	if (!text.includes('|')) return reply(lang.astronotspace(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','dragon','duck','gorilla','panda','panther','shark','squirrel','tiger','wolf','bull','rhino','rooster','pikachu','parrot','boar','bee','hurricane','deer','horse','crocodile','pitbull']
if (!style.includes(m2)){ 
let listt = `${lang.pubglogomaker_(style.length)}`
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
	if (!text) return reply(lang.wallpaperaov(prefix, command))
	if (!text.includes('|')) return reply(lang.wallpaperaov(prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['allain','allain-2','kahlii-3','nakroth-4','preyta-2','skud-2','taara-4','valhein-4','arum-4','butterfly-6','capheny-3','elandorr-2','ilumia-3','ishar-4','lauriel-6','laville','liliana-5','nurad-8','quillen-5','rouie','rouie-2','taara-3','telannas-5','yena-4','yena-5','zata','ata','lauriel-5','qi-3','roxie-3','wukong-5','aleister-2','amily-3','arthur-3','arum-3','astrid-2','dirak','dirak-2','grakk-5','hayate-4','ishar-2','ishar-3','jinna-2','keera','keera-3','lauriel-4','nax','natalya-5','quillen-4','raz-3','richter-2','ryoma-4','telannas-4','ulen-6','valhein-3','violet-7','yorn-4','zill-3','ignis-2','lubu-2','naloch-2','sephera-3','butterfly-5','diaochan-4','elandoor','krizzix-2','nina-2','natalya-3','veera-3','violet-6','yena-2','yena-3','krizziz','nurad-7','volkath','volkath-2','airi-4','arduin-3','enzo-3','hayate-3','krixi-3','nurad-6','quillen-3','telannas-3', 'wisp-2','zip-2','gildur-2','ishar','tulen-5','amily-2','annette-3','arthur-2','butterfly-4','errol-2','joker','kahlii-2','kilgroth','lauriel-3','nurad-5','arduin-2','darcy-2','florentino-3','noren','quillen-2','ryoma-5','sephera-3','violet-5','airi-3','diaochan-3','diaochanlubu','elsuroxie','lindis-3','taara-2','toro-2','tulen-4','violet-4','wonderwoman','ybneth','zill-2','arum-2','florentino-2','liliana-4','nurad-4','yorn-3','zip','annette-2','qi','qi-2','celica','capheny-2','diaochan-2','elsu-2','ilumia-2','krixi-2','narja-2','nurad-3','preyta','telannas-2','valhein','veera-2','veres-2','yorn-2','zephys-2','airi-2','annette','baldum','butterfly-3','elsu-2','errol','fennik','lauriel-2','liliana-2','liliana-3','lindis-2','nurad-2','nakroth-2','nakroth-3','natalya-2','raz-2','ryoma-2','slimz','teemee','tulen-2','tulen-3','violet-3','wiro','wukong-3','wukong-4','zill','aleister','alice','arduin','arthur','azzenka','batman','butterfly-2','cresh','darcy', 'diaochan','enzo-2','hayate-2','jinna','lubu','nganga','violet-2','wukong-2','zanis-2','florentino','gildur','ignis','naloch','narja','nakroth','omen','payna','raz','rourke','roxie','ryoma','skud','taara','toro','valhein','veres','violet','wisp','wukong','wonderwoman','xeniel','yorn','zanis','elsu','flash','hayate','ilumia','kahlii','krixi','lauriel','liliana','lindis','nina','nurad','natalya','quillen','richter','sephera','superman','telannas','thane','airi','amily','arum','astrid','butterfly','capheny','enzo','tulen','veera','yena','ryoma-4','zephys','zuka']
if (!style.includes(m2)){ 
let listt = `${lang.coverbannerlol(style.length)}`
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
	if (!text) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['anubis','cowgirl','dragon','duck','ghost','gorilla','panda','panther','shark','squirrel','tiger','wolf','bee','crocodile','deer','pitbull','horse','hurricane','indian','assassin','boar','rapid','raven','warrior','pikachu','pubg','ninja','drift','yasuo','rhino','phoenix','bull','hornet','eagle','hunter','parrot','rooster','lion','skull','wolver','wolf','cobra','dragon','panther','owl','tiger','reaper','warrior']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['panther','rhino','squirrel','unicorn','zebra','lionsnake','bear','bull','dragon','eagle','fox','griffin','hawk','lion','peacock','phoenix','tiger','wolver']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
	if (!text) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aldous','alice-2','angela-2','argus-2','chou','chou-2','estes','eudora','eudora-2','granger','granger-2','gusion-3','hanabi-2','hanzo','helcurt','layla-3','lesley-4','lunox-2','odette-3','saber','thamuz','vexana','argus','dyrroth','esmeralda-2','kadita-2','lancelot','leomord-2','lylia','vale','valir','xborg','zhask','alice','alpha','athena','badang','balmond','bane','diggie','trunks','fanny-2','fanny-3','freya','guinevere','gusion','gusion-2','hanabi','harith','harith-2','hayabusa-2','kadita','kagura-2','kagura-3','karina-2','kimmy','layla-2','leomord','lesley-2','lesley-3','lunox','nartis','niya-2','nana','nana-2','natalia','natalia-2','odette-2','pharsa','rafaela-2','selena-2','zilong','alucard','angela','bruno','change','claude','fanny','hayabusa','hilda','hylos','kagura','karina','karrie', 'layla','lesley','lolita','ninotaur','ninsittar','niya','noskov','odette','rafaela','selena']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
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
	if (!text) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['cabba','caulifla','cooler','cumber','hit','kale','kaminoren','gokuui','xenogokuss3','xenogokuss4','xenovegeta','xenovegito','android-18','blackgoku','bulma','frieza','gotenks-2','kaio','krillinandroid-18','launch','nutenroshi-2','oldkai','oolong','pilaf','tienshinhan','trunks-3','bardock','gotenks','nutenroshi','piccolo','songoku-2','songoku-3','songoten','trunks-2','vegeta-2','vegito','krillin','najinbuu','songohan','songoku','trunks','vegeta']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
	if (!text) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aphelios','karma','leesin-2','nidalee-2','soraka-2','soraka-3','swain','akali-4','ekko-2','qiyana','senna','yasuo-3','ahri-2','akali-3','ashe-3','caitlyn','camille','darius','draven','evelynn-2','kaisa','kayle','pantheon','rengar','sivir-2','sona','vayne-3','wukong','zoe-2','zyra','azir','garen','jinx-3','katarina-3','lux-3','nasus','nidalee','sejuani','sylas','vayner-2','vi-2','warwick-2','fiora-2','irelia-3','janna-2','jax','leesin','nasteryi-2','norgana','nami','riven-2','riven-3','talon-2','neeko','neeko-2','xayahrakan','zoe','ahri','ezreal-2','janna','jinx-2','lulu','lux-2','nissfortune','poopy','soraka','syndra','ezreal','graves','jayce','katarina-2','lux','yuumi','aatrox','akali-2','diana','elise','evelynn','jhin-2','kalista-2','kennen','pyke-2','shen','sivir','talon','twistedfate','thresh-2','yasuo-2','zilean','ashe-2','kalista','khazix','riven','riven','shyvana','thresh','zed-2','akali','ashe','ekko','fiora','irelia','irelia-2','jhin','jinx','katarina','leona','lucian','nasteryi','pyke','vayne','vi','warwick','yasuo','zed']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
	if (!text) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
const style = ['beach-1','beach-2','beach-3','beach-4','beach-5','beach-6']
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6', 'style-7','style-8','style-9', 'style-10','style-11','style-12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['nau-1','nau-2','nau-3','nau-4','nau-5','nau-6']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
	if (!text) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['aleister','alice','butterfly','diaochan','kahlii','krixi','nina','nakroth','natalya','taara','thane','violet','zanis','zata','airi','annette','arthur','arum','astrid','elandorr','gildur','gildur','hayate','ilumia','ishar','lauriel','lindis','nurad','quillen','rouie','sephera','yena','yorn']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Champion')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['chicken','soldier']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
		if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','rhino','tiger']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10','style-11','style-12','style-13','style-14','style-15','style-16','style-17','style-18','style-19','style-20','style-21','style-22','style-23','style-24']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
		if (!text) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['bull','dragon','eagle','lion','tiger','skull']
 if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
	if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['girl','ghost','soldier-2','swat','woman','soldier','sniper','raccoon','rabbit','panda','chicken']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
		if (!text) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['tiger','shark','dugong','bull','cheetah','lion']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
		if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['snakelion','dragon','ragon-2','eagle','falcon','fox','lion','panther','phoenix','phoenix','rhino','squirrel','tiger','unicorn','wolf','zebra']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
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
case 'anonymous2':{
	if (!text) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['style1','style2','style3']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = (api('alfa', '/api/ephoto360/anonymous'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
	case 'lolpentakill':{
		if (!text) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
	if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['jhin','syndra','olaf','nocturne','chogath','kassadin','nidalee','fiora','fiddlesticks','garen','irelia-2','janna','lissandra','ezreal','riven','nalphite','khazix','nasteryi','irelia','alista','jayce','singed','galio','velkoz','yi','yasuo','sona','nidalee-2','teemo','leesin','jinx','zed','camille','brand','warwick','rengar','vayne','leona','ashe','ezreal','annie','xerath','ahri','kayle','nissfortune','caitlyn','vi','leesin','darius','fizz','bloodyasuo','ekko','lucian','rakanandayah']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
if (!text) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','yuumi','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','yasuo','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','ford','hayato','joseph','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie','wukong']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ana','ashe','ashe-2','baptiste','baptiste-2','brigitte','dva','dva-2','genji','hanzo','junkrat','lucio','nccree','nei','nercy','nercy-2','nercy-3','noira','pharah','reaper','roadhog','soldier-76','sombra','sombra-2','symmetra','tracer','tracer-2','widowmaker','widowmaker-2','zarya']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-5','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-8','volkath','volkath-2','wisp-4','wukong-6','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja-3','veres-3','violet-10','zip-2','zip-3','diaochan-5','enzo-2','lubu-7','payna-4','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','zephys-3','zephys-2','zephys','zanis-5','zanis-4','zanis-3','zanis-2','zanis','violet-5','violet-4','violet-3','violet-2','violet','veera-4','veera-3','veera-2','valhein-3','valhein-2','valhein','thane-2','thane','nina-3','nina-2','nina','nganga-2','nganga','lubu-5','lubu-4','lubu-3','lubu-2','lubu','krixi-5','krixi-4','krixi-3','krixi-2','krixi','kahlii-3','kahlii-2','kahlii','diaochan-3','diaochan-2','diaochan','chaugnar','butterfly-5','butterfly-4','butterfly-2','butterfly','yorn-4','yorn-3','yorn-2','yorn','wukong-3','wukong-2','wukong','toro-2','toro','taara-2','taara','slimz-3','slimz-2','slimz','payna-2','payna','ormarr-4','ormarr-3','ormarr-2','kaisa-2','ormarr','natalya-5','natalya-4','natalya-3','natalya-2','natalya','nakroth-4','nakroth-3','nakroth-2','nakroth','naloch-3','naloch-2','naloch','lumburr','kriknak-2','kriknak','jinna-2','jinna','grakk-3','grakk-2','grakk','gildur-2','gildur','fennik-4','fennik-3','fennik-2','fennik','cresht','azzenka-2','azzenka','arthur-3','arthur-2','arthur','alice-2','alice','aleister-2','aleister','zuka-2','zuka','zill-2','zill','xeniel-2','xeniel','wonderwoman-2','wonderwoman','telannas-4','telannas-3','telannas-2','telannas','superman-2','superman','skud-2','skud','ryoma-2','ryoma','preyta-3','preyta-2','preyta','nurad-3','nurad-2','nurad','noren-2','noren','lauriel-4','lauriel-3','lauriel-2','lauriel','kilgroth-2','kilgroth','joker','illumia-3','illumia-2','illumia','ignis-2','ignis','batman-2','batman','astrid-2','astrid','arduin-2','arduin','airi-5','airi-4','airi-3','airi-2','airi','teemee-2','teemee','zuka-3','tulen','raz-2','raz','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','toro-3','omen-2','omen','zuka-4','tulen-2','nakroth-5','nax','liliana','zill-3','raz-3','liliana-2','tulen-3','telannas-5','taara-3','ryoma-3','nax-2','kriknak-3','flash','cresht-3','cresht-2','arthur-4','aleister-3','airi-6','arum-2','arum','wisp-2','wisp','rourke-2','rourke','narja-2','narja','butterfly-6','batman-3','astris-3','jinna-3','butterfly-7','arthur-5','valhein-4','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-3','veera-5','liliana4','flash-2','arthur-6','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
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
if (!text) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera-2','lorion','grakk-6','keera-2','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','dextra','dextra-2','lindis-6','nurad-10','nakroth-9','quillen-7','sephera-5','yorn-8','airi-10','amily-6','astrid-6','ata-3','capheny-5','darcy-4','diaochan-8','hayate-6','lauriel-10','laville-3','rourke-4','ryoma-7','sinestrea','sinestrea-2','telannas-9','thorne','thorne-2','veres-4','yena-6','zephys-7','allain','allain-2','butterfly-12','kahlii-6','nakroth-8','preyta-4','taara-7','valhein-8','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-6','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','kerra-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','keera','raz-4','ishar-2','nax-4','valhein-7','zill-5','arthur-7','rum-5','lubu-8','naloch-7','sephera-4','diaochan-6','ignis-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','elsu-5','narja-3','annette-4','capheny-3','veres-3','zip-2','zip','diaochan-5','enzo-2','lubu-7','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','errol','yena-2','zuka-8','valhein','violet','airi','skud','zanis','zephis','butterfly','wukong','taara','nakroth','prayta','yorn','natalya','thane','toro','ormarr','omega','nina','nganga','lubu2','lubu','kahlii-2','kahlii','fennik-2','fennik','diaochan','cresht','azzenka','aleister','zuka2','zuka','payna-2','payna','nakroth-2','nortos-2','nortos','kriknak','jinna-2','jinna','batman','airi-2','violet-3','violet-2','skud-2','raz-2','raz','ignis-2','ignis','gildur','butterfly-4','butterfly-3','zanis-2','nurad','yorn-2','slimz','ormarr-2','nurad-2','nina-2','lauriel-2','grakk-2','grakk','diaochan-2','airi-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','taara-2','joker','ilumia-2','batman-2','arduin-2','arduin','wukong-2','nakroth-3','ilumia-3','arthur','ryoma-2','ryoma','astrid-2','astrid','zephis-2','natalya-3','natalya-2','ubu-3','chaugnar','azzenka-2','zanis-4','wukong-3','noren','lubu-4','lauriel-3','aleister-2','nurad-3','noren-2','lubu-5','kilgroth','gildur-2','fennik-3','lauriel-4','zephys-3','xeniel-2','wonderwomen','superman-2','slimz-2','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','xeniel','wonderwoman-2','violet-4','preyta2','diaochan-3','airi-4','valhein-4','preyta-3','nina-3','alice-2','airi-5','telannas-3','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','teemee-2','teemee','lindis','zuka-3','valhein-2','tulen','toro-2','naloch-4','naloch-3','lumburr','lindis-2','grakk-4','gildur-3','toro-3','omen-2','omen','zill-3','telannas-','athur-4','zuka-4','tulen-2','nakroth-5','nax','liliana','raz-3','liliana-2','tulen-3','nax-2','flash','cresht-3','cresht-2','chaugnar-2','aleister-3','ryoma-3','kriknak-3','airi-6','wisp-2','wisp','batman-3','arum-2','arum','butterfly-6','rourke-2','rourke','narja-2','narja','taara-3','jinna-3','butterfly-7','arthur-4','arthur-3','arthur-2','valhein-3','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','astrid-3','amily-2','liliana-4','xeniel-5','veera-5','flash-2','athur-5','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','utterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
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
if (!text) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ashe-2','darius-2','hecarim-2','akali-2','jhin-2','jinx-2','kaisa-2','khazix-2','nordekaiser-2','pantheon-2','qiyana','rammus-2','renekton-2','tahmkench-2','teemo-2','udyr-2','yasuo-2','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana-2','kayle-2','akali-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','swat','switcher','redpower','whitenurse','blthefates','jns','natahari','dx','nursezombie','omohswat','sfg','fox','bllaswat','bljtf','grjtf','blarch','hero-4','gsg9','hero-3','opes','abf','shadows','devilhunter']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['aatrox-2','arhi-2','akali-3','akali-2','braum','camille','evelynn-5','ezreal-2','fizz','graves-2','irelia-3','irelia-2','jayce-2','jhin-2','jinx-2','kaisa','katarina-2','lux-2','neeko','orianna-2','pantheon','pyke','qiyana','riven-2','sylas','teemo-2','viktor','vladimir','warwick-2','yasuo-3','yasuo-2','zoe','nasteryi','lux','lulu','leesin','jinx','jhin','ezreal','janna','ashe','arhi','poppy','nissfortune','soraka','syndra','zyra','yasuo','vi','vayne','taliyah','sona','sivir','shyvana','riven','quinn','nidalee','norgana','leblanc','kennen','karma','irelia','fiora','elise','diana','caitlyn','zed','xayah','tristana','talon','shen','rakan','orianna','nami','kayn','kayle','katarina','kalista','ekko','azir','udyr','thresh','tf','teemo','ryze','nocturne','lucian','khazik','graves','darius','annie','akali','zilean','ziggs','yorick','warwick','nasteryi-2','janna-2','hecarim','gangplank','fiora-2','draven','brand','aatrox','velkoz','shaco','rengar','reksai','ornn','leona','kindred','jayce','jax','jarvan-iv','garen','xinzhao','nasus','kled','evelynn-4','evelynn-3','evelynn-2','evelynn','cassiopeia','zac','xerath','wukong','velkoz-2','veigar','varus','urgot','twich','kassadin','elise-2','annie-2','alistar']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Wallpaper')}`
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
if (!text) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['void','riki','lycan','ursa','zeus','dragonkinght','warlord','phantomassassin','bountyhunter','antimage','spectre','luna','vengerfulspirit','undying','tusk','tinker','shadowfiend','sandking','nightstalker','nagasiren','nirana','neepo','lina','juggernaut','huskar','emberspirit','emberspirit','emberspirit','earthshaker','drowranger','clockwerk','bristleback','bloodseeker','axe']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['thane','orrmarr','omega','nakroth','nina','ngangar','gildur','dieuthuyen','chaugnar','butterfly','azzenka','alice','lubo','kriknak-2','natalya-2','trieu-van','taara-2','naloch','kriknak','natalya','taara','ngo-khong','airi','butterfly-2','butterfly-3','kahlii','krixi','toro','grakk','ilumia','zephys','veera-2','violet','preyta-2','violet-2','valhein','yorn','veera','notos','valhein-2','preyta','illumia-2','fennik-2','lumburr','fennik','nakroth-2','krixi-2','gildur2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['tieu_kieu','luu_bi','truong_oanh_oanh','truong_phi','tu_ma_y','van_uong','hoang_nguyet_anh','hoang_nguyet_anh2','hoang_trung','hua_chu','truong_giac','dieu_thuyen','renekton','tahmkench','teemo','udyr','yasuo','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana','kayle','akali','aatrox']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['warface-4','warface-3','warface-2','warface','sniper-3','sniper-2','sniper','rifleman','nedic-2','nedic','exosuit','engineer']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['udyr','twitch','twistedfate','trundle','teemo','swain','shyvana','shen','sejuani','renekton','reksai','rammus','zyra','zilean','ziggs','zac','xerath','warwick','vladimir','viktor','vi','velkoz','veigar','vayne','volibear','tristana','taliyah','shaco','leblanc','jinx','graves','fizz','ekko','corki','cassiopeia','caitlyn','blitzcrank','bard','alistar','akali','aatrox','janna','wukong','thresh','taric','talon','ryze','nordekaiser','karma','kalista','irelia','gnar','garen','galio','soraka','sona','sivir','riven','quinn','nocturne','nami','lux','kindred','khazix','katarina','jarvan','fiora','diana','aurelionsol','ashe','ahri','varus','syndra','nidalee','kennen','jhin','zed','yasuo','rengar','lucian','ezreal','azir','annie','leesin','nasteryi','poppy','pantheon','orianna','nasus','norgana','nissfortune','naokai','nalzaha','lulu','lissandra','leona','kled','jayce','jax','illaoi','xayah','rakan','gangplank','naster_yi2','riven2','elise','darius','xayah_rakan','katarina2','nauthilus','hecarim','thresh2','ashe2','xinzhao','tryndamere','syndra-2','sivir-2','lissandra2','karma-2','draven']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
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
if (!text) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ump45','tec9','n4a1','xm1014','famas','np9','pp-bizon','p2000','negev','usps','dualberettas','np5','karambit','awpdragonlore','np7','galilar','ak-47','glock','sg-553','ak47','r8revolver','aug','butterflyknife','deserteagle','gsg9','p90asiimov','awphawking','n4a4','sas','awpasiimov','ssg08bitw','sg553ds','r8fade','p90ed','n4a1sdecimator','n4a1howl','karambitds','flipknifemf','awmmedusa','augaa','ak47vulcan','ak47fs']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
if (!text) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-5','teemee-3','telannas-6','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','capheny-4','lsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-4','jinna-5','kerra-2','lauriel-7','nina-5','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-7','volkath','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy','florentino-3','noren-3','ryoma-5','sephera-3','annettte-4','capheny-3','elsu-5','narja-3','vilolet-10','violet-10','zip-2','zip-2a','airi-9','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena','yena-2','zuka-8','yorn','violet','zanis','thane','slimz','skud','preyta','payna','nakroth','nina','naloch','illumia','krixi','diaochan','butterfly','veera','valhein','toro','taara','raz','ormarr','nganga','lubu','kriknak','kahlil','grakk','gildur','alice','omega','wukong','natalya','nortos','cresht','airi','aleister','lumburr','zephis','violet-2','jinna','chaugnar','azzenka','valhein-2','zanis-2','skud-2','payna-2','natalya-3','natalya-2','nortos-2','krixi-2','jinna-2','illumia-2','butterfly-3','butterfly-2','yorn-2','taara-2','nakroth-2','lubu2','lauriel','kahlii-2','zuka-2','zuka','batman','airi-2','airi-3','butterfly-4','diaochan-2','grakk-2','ignis','ignis-2','lauriel2','nina-2','nurad','nurad-2','ormarr-2','raz-2','slimz2','violet-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','joker','illumia-3','batman-2','arduin-2','arduin','zephis-2','wukong-2','ryoma-2','ryoma','nakroth-3','nganga-2','azzenka-2','astrid-2','astrid','arthur','zanis-4','wukong-3','noren','lubu-4','lauriel-3','lubu-3','chaugnar-2','aleister-2','xeniel','telannas-3','preyta-2','nurad-3','kriknak-2','fennik-2','diaochanlubu','alice-2','noren-2','lubu-5','lauriel-4','kilgroth','gildur-2','fennik-3','zephys-3','xeniel-2','xeniel-2','wonderwoman','supeman-2','slimz-3','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','wonderwoman-2','violet-4','prayta-3','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','airi-5','natalya-5','fennik-4','valhein-4','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','telannas-5','athur-2','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','kriknak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','flash','cresht-3','cresht-2','astris-3','arum-2','arum','butterfly-6','lice-3','xeniel-3','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-2','violet-6','valhein-5','superman-3','liliana-3','kilgroth-3','diaochan-3','wirosabaleng-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-4','veera-5','liliana-4','flash-2','arthur-3','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-6','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','veera-6','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
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
if (!text) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['yasuo','shen','riven','pantheon','orianna','nocturne','nami','norgana','naster-yi','lux','lucian','katarina','kalista','jinx','jhin','irelia','hecarim','graves','garen','fizz','fiora','ezreal','ekko','diana','darius','cassiopeia','caitlyn','braum','azir','ashe','warwick','thresh','leblanc','khazix','kayn','draven','zyra','zed','xayah','taric','talon','sona','sivir','rengar','rakan','leesin','gnar','elise']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Letters')}`
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
if (!text) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zwinston','zjunkrat','zwidowmaker','ztracer','ztorbjorn','zsymmetra','zsombra','zsoldier76','zroadhog','zreinhardt','zreaper','zpharah','zorisa','zmercy','zmei','zmccree','zlucio','zhanzo','zgenji','zenyatta','zdva','zbastion','zarya','zana','yzenyatta','yzarya','ywinston','ywidowmaker','ytracer','ytorbjorn','ysymmetra','ysombra','ysoldier76','yroadhog','yreinhardt','yreaper','ypharah','yorisa','ymercy','ymei','ymccree','ylucio','yjunkrat','yhanzo','ygenji','ydva','ybastion','yana','xzenyatta','xzarya','xwinston','xwidowmaker','xtracer','xtorbjorn','xsymmetra','xsombra','xsoldier76','xroadhog','xreinhardt','xreaper','xpharah','xorisa','xmercy','xmei','xmccree','xlucio','xjunkrat','xhanzo','xgenji','xdva','xbastion','xana','wzenyatta','wzarya','wtracer','wtorbjorn','wsymmetra','wsombra','wsoldier76','wroadhog','wreinhardt','wreaper','wpharah','worisa','wmercy','wmei','wmccree','wlucio','wjunkrat','winston','widowmaker','whanzo','wgenji','wdva','wbastion','wana','vzenyatta','vzarya','vwinston','vwidowmaker','vtracer','vtorbjorn','vsymmetra','vsombra','vsoldier76','vroadhog','vreinhardt','vreaper','vpharah','vorisa','vmercy','vmei','vmccree','vlucio','vjunkrat','vhanzo','vgenji','vdva','vbastion','vana','uzenyatta','uzarya','uwinston','uwidowmaker','utracer','utorbjorn','usymmetra','usombra','usoldier76','uroadhog','ureinhardt','ureaper','upharah','uorisa','umercy','umei','umccree','ulucio','ujunkrat','uhanzo','ugenji','udva','ubastion','uana','tzenyatta','tzarya','twinston','twidowmaker','tsymmetra','tsombra','tsoldier76','troadhog','treinhardt','treaper','tracer','tpharah','torisa','torbjorn','tmercy','tmei','tmccree','tlucio','tjunkrat','thanzo','tgenji','tdva','tbastion','tana','szenyatta','szarya','symmetra','swinston','swidowmaker','stracer','storbjorn','sroadhog','sreinhardt','sreaper','spharah','sorisa','sombra','soldier76','smercy','smei','smccree','slucio','sjunkrat','shanzo','sgenji','sdva','sbastion','sana','rzenyatta','rzarya','rwinston','rwidowmaker','rtracer','rtorbjorn','rsymmetra','rsombra','rsoldier76','rrmei','rpharah','rorisa','roadhog','rmercy','rmccree','rlucio','rjunkrat','rhanzo','rgenji','reinhardt','reaper','rdva','rbastion','rana','qzenyatta','qzarya','qwinston','qwidowmaker','qtracer','qtorbjorn','qsymmetra','qsombra','qsoldier76','qroadhog','qreinhardt','qreaper','qpharah','qorisa','qmercy','qmei','qmccree','qlucio','qjunkrat','qhanzo','qgenji','qdva','qbastion','qana','pzenyatta','pzarya','pwinston','pwidowmaker','ptracer','ptorbjorn','psymmetra','psombra','psoldier76','proadhog','preinhardt','preaper','porisa','pmercy','pmei','pmccree','plucio','pjunkrat','pharah','phanzo','pgenji','pdva','pbastion','pana','ozenyatta','ozarya','owinston','owidowmaker','otracer','otorbjorn','osymmetra','osombra','osoldier76','oroadhog','orisa','oreinhardt','oreaper','opharah','omercy','omei','omccree','olucio','ojunkrat','ohanzo','ogenji','odva','obastion','oana','nzenyatta','nzarya','nwinston','nwidowmaker','ntracer','ntorbjorn','nsymmetra','nsombra','nsoldier76','nroadhog','nreinhardt','nreaper','npharah','norisa','nmercy','nmei','nmccree','nlucio','njunkrat','nhanzo','ngenji','ndva','nbastion','nana','mzenyatta','mzarya','mwinston','mwidowmaker','mtracer','mtorbjorn','msymmetra','msombra','msoldier76','mroadhog','mreinhardt','mreaper','mpharah','morisa','mlucio','mjunkrat','mhanzo','mgenji','mercy','mei','mdva','mccree','mbastion','mana','lzenyatta','lzarya','lwinston','lwidowmaker','lucio','ltracer','ltorbjorn','lsymmetra','lsombra','lsoldier76','lroadhog','lreinhardt','lreaper','lpharah','lorisa','lmercy','lmei','lmccree','ljunkrat','lhanzo','lgenji','ldva','lbastion','lana','kzenyatta','kzarya','kwinston','kwidowmaker','ktracer','ktorbjorn','ksymmetra','ksombra','ksoldier76','kroadhog','kreinhardt','kreaper','kpharah','korisa','kmercy','kmei','kmccree','klucio','kjunkrat','khanzo','kgenji','kdva','kbastion','kana','jzenyatta','jzarya','jwinston','jwidowmaker','junkrat','jtracer','jtorbjorn','jsymmetra','jsombra','jsoldier76','jroadhog','jreinhardt','jreaper','jpharah','jorisa','jmercy','jmei','jmccree','jlucio','jhanzo','jgenji','jdva','jbastion','jana','izenyatta','izarya','iwinston','iwidowmaker','itracer','itorbjorn','isymmetra','isombra','isoldier76','iroadhog','ireinhardt','ireaper','ipharah','iorisa','imercy','imei','imccree','ilucio','ijunkrat','ihanzo','igenji','idva','ibastion','iana','hzenyatta','hzarya','hwinston','hwidowmaker','htracer','htorbjorn','hsymmetra','hsombra','hsoldier76','hroadhog','hreinhardt','hreaper','hpharah','horisa','hmercy','hmei','hmccree','hlucio','hjunkrat','hgenji','hdva','hbastion','hanzo','hana','gzenyatta','gzarya','gwinston','gwidowmaker','gtracer','gtorbjorn','gsymmetra','gsombra','gsoldier76','groadhog','greinhardt','greaper','gpharah','gorisa','gmercy','gmei','gmccree','glucio','gjunkrat','genji','gdva','gbastion','ganafzenyatta','fzarya','fwinston','fwidowmaker','ftracer','ftorbjorn','fsymmetra','fsombra','fsoldier76','froadhog','freinhardt','freaper','fpharah','forisa','fmercy','fmei','fmccree','flucio','fjunkrat','fhanzo','fgenji','fdva','fbastion','fana','ezenyatta','ezarya','ewinston','ewidowmaker','etracer','etorbjorn','esymmetra','esombra','esoldier76','eroadhog','ereinhardt','ereaper','epharah','eorisa','emercy','emei','emccree','elucio','ejunkrat','ehanzo','egenji','edva','ebastion','eana','dzenyatta','dzarya','dwinston','dwidowmaker','dva','dtracer','dtorbjorn','dsymmetra','dsombra','dsoldier76','droadhog','dreinhardt','dreaper','dpharah','dorisa','dmercy','dmei','dmccree','dlucio','djunkrat','dhanzo','dgenji','dbastion','dana','czenyatta','czarya','cwinston','cwidowmaker','ctracer','ctorbjorn','csymmetra','csombra','csoldier76','croadhog','creinhardt','creaper','cpharah','corisa','cmercy','cmei','cmccree','clucio','cjunkrat','chanzo','cgenji','cdva','cbastion','cana','bzenyatta','bzarya','bwinston','bwidowmaker','btracer','btorbjorn','bsymmetra','bsombra','bsoldier76','broadhog','breinhardt','breaper','bpharah','borisa','bmercy','bmei','bmccree','blucio','bjunkrat','bhanzo','bgenji','bdva','bastion','bana','azenyatta','azarya','awinston','awidowmaker','atracer','atorbjorn','asymmetra','asombra','asoldier76','aroadhog','areinhardt','areaper','apharah','aorisa','ana','amercy','amei','amccree','alucio','ajunkrat','ahanzo','agenji','adva','abastion','zdoomfist','ydoomfist','xdoomfist','wdoomfist','vdoomfist','udoomfist','tdoomfist','sdoomfist','rdoomfist','qdoomfist','pdoomfist','odoomfist','ndoomfist','mdoomfist','ldoomfist','kdoomfist','jdoomfist','idoomfist','hdoomfist','gdoomfist','fdoomfist','edoomfist','doomfist','cdoomfist','bdoomfist','adoomfist']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
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
if (!text) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['spop','switcher','switcher-2','switcher-3 ','thefates','thefates-2','thefates-3','swat','fox','star','omoh','sabel','sas','sia','navy-seals','jtf','jns','laswat','sraf','shadow','nemesis','nocha','ixions','gsg-9','ghosty','hermes','foxu','dh','angelapt','ac']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
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
if (!text) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['katarina-0','zyra-4','zyra-3','zyra-2','zyra-1','zyra-0','zilean-5','zilean-4','zilean-3','zilean-2','zilean-1','zilean-0','ziggs-5','ziggs-4','ziggs-3','ziggs-2','ziggs-1','ziggs-0','zed-3','zed-2','zed-10','zed-1','zed-0','zac-2','zac-1','zac-0','yorick-2','yorick-1','yorick-0','yasuo-4','yasuo-3','yasuo-2','yasuo-1','yasuo-0','xinzhao-6','xinzhao-13','xinzhao-5','xinzhao-4','xinzhao-3','xinzhao-2','xinzhao-1','xinzhao-0','xerath-4','xerath-3','xerath-2','xerath-1','xerath-0','xayah-1','xayah-0','warwick-8','warwick-7','warwick-6','warwick-5','warwick-4','warwick-3','warwick-2','warwick-1','warwick-0','volibear-5','volibear-4','volibear-3','volibear-2','volibear-1','volibear-0','vladimir-7','vladimir-6','vladimir-5','vladimir-4','vladimir-3','vladimir-2','vladimir-1','vladimir-0','viktor-2','viktor-1','viktor-0','vi-5','vi-4','vi-3','vi-2','vi-1','vi-0','velkoz-3','velkoz-2','velkoz-1','velkoz-0','veigar-8','veigar-7','veigar-6','veigar-5','veigar-4','veigar-3','veigar-2','veigar-1','veigar-0','vayne-6','vayne-5','vayne-4','vayne-3','vayne-2','vayne-1','vayne-0','vayne-10','varus-6','varus-5','varus-4','varus-3','varus-2','varus-1','varus-0','urgot-3','urgot-2','urgot-1','urgot-0','udyr-4','udyr-3','udyr-2','udyr-1','udyr-0','twitch-7','twitch-6','twitch-5','twitch-4','twitch-3','twitch-2','twitch-1','twitch-0','twistedfate-9','twistedfate-10','twistedfate-8','twistedfate-7','twistedfate-6','twistedfate-5','twistedfate-4','twistedfate-3','twistedfate-2','twistedfate-1','twistedfate-0','tryndamere-9','tryndamere-8','tryndamere-7','tryndamere-6','tryndamere-5','tryndamere-4','tryndamere-3','tryndamere-2','tryndamere-1','tryndamere-0','trundle-5','trundle-4','trundle-3','trundle-2','trundle-1','trundle-0','tristana-6','tristana-5','tristana-4','tristana-3','tristana-2','tristana-1','tristana-0','tristana-10','tristana-11','thresh-5','thresh-4','thresh-3','thresh-2','thresh-1','thresh-0','teemo-8','teemo-7','teemo-6','teemo-5','teemo-4','teemo-3','teemo-2','teemo-1','teemo-0','teemo-14','taric-4','taric-3','taric-2','taric-1','taric-0','talon-5','talon-4','talon-3','talon-2','talon-1','talon-0','taliyah-1','taliyah-0','tahmkench-2','tahmkench-1','tahmkench-0','syndra-4','syndra-3','syndra-2','syndra-1','syndra-0','swain-3','swain-2','swain-1','swain-0','soraka-6','soraka-5','soraka-4','soraka-3','soraka-2','soraka-1','soraka-0','sona-6','sona-5','sona-4','sona-3','sona-2','sona-1','sona-0','skarner-4','skarner-3','skarner-2','skarner-1','skarner-0','sivir-7','sivir-6','sivir-5','sivir-4','sivir-3','sivir-2','sivir-1','sivir-0','sion-5','sion-4','sion-3','sion-2','sion-1','sion-0','singed-8','singed-7','singed-6','singed-5','singed-4','singed-3','singed-2','singed-1','singed-0','shyvana-6','shyvana-5','shyvana-4','shyvana-3','shyvana-3','shyvana-2','shyvana-1','shyvana-0','shen-6','shen-5','shen-4','shen-3','shen-2','shen-1','shen-0','shaco-7','shaco-6','shaco-5','shaco-4','shaco-3','shaco-2','shaco-1','shaco-0','sejuani-7','sejuani-6','sejuani-5','sejuani-4','sejuani-3','sejuani-2','sejuani-1','sejuani-0','ryze-10','ryze-9','ryze-8','ryze-7','ryze-6','ryze-5','ryze-4','ryze-3','ryze-2','ryze-1','ryze-0','rumble-3','rumble-2','rumble-1','rumble-0','riven-8','riven-7','riven-6','riven-5','riven-4','riven-3','riven-2','riven-1','riven-0','rengar-3','rengar-2','rengar-1','rengar-0','renekton-9','renekton-8','renekton-7','renekton-6','renekton-5','renekton-4','renekton-3','renekton-2','renekton-1','renekton-0','reksai-1','reksai-2','reksai-0','rammus-7','rammus-6','rammus-5','rammus-4','rammus-3','rammus-2','rammus-1','rammus-0','rakan-1','rakan-0','quinn-4','quinn-3','quinn-2','quinn-1','quinn-0','poppy-7','poppy-6','poppy-5','poppy-4','poppy-3','poppy-2','poppy-1','poppy-0','pantheon-8','pantheon-7','pantheon-6','pantheon-5','pantheon-4','pantheon-3','pantheon-2','pantheon-1','pantheon-0','orianna-7','orianna-6','orianna-5','orianna-4','orianna-3','orianna-2','orianna-1','orianna-0','olaf-6','olaf-5','olaf-4','olaf-3','olaf-2','olaf-1','olaf-0','nunu-7','nunu-6','nunu-5','nunu-4','nunu-3','nunu-2','nunu-1','nunu-0','nocturne-6','nocturne-5','nocturne-4','nocturne-3','nocturne-2','nocturne-1','nocturne-0','nidalee-8','nidalee-7','nidalee-6','nidalee-5','nidalee-4','nidalee-3','nidalee-2','nidalee-1','nidalee-0','nautilus-5','nautilus-4','nautilus-3','nautilus-2','nautilus-1','nautilus-0','nasus-6','nasus-5','nasus-4','nasus-3','nasus-2','nasus-1','nasus-0','nasus-10','nami-7','nami-6','nami-5','nami-4','nami-3','nami-2','nami-1','nami-0','norgana-6','norgana-5','norgana-4','norgana-3','norgana-2','norgana-1','norgana-0','norgana-10','norgana-11','nordekaiser-4','nordekaiser-3','nordekaiser-2','nordekaiser-1','nordekaiser-0','nonkeyking-5','nonkeyking-4','nonkeyking-3','nonkeyking-2','nonkeyking-1','nonkeyking-0','nissfortune-9','nissfortune-8','nissfortune-7','nissfortune-6','nissfortune-5','nissfortune-4','nissfortune-3','nissfortune-2','nissfortune-1','nissfortune-0','nasteryi-3','nasteryi-2','nasteryi-1','nasteryi-0','nasteryi-9','nasteryi-5','nasteryi-4','nasteryi-10','naokai-7','naokai-6','naokai-5','naokai-4','naokai-3','naokai-2','naokai-1','naokai-0','nalzahar-5','nalzahar-4','nalzahar-3','nalzahar-2','nalzahar-1','nalzahar-0','nalphite-7','nalphite-6','nalphite-5','nalphite-4','nalphite-3','nalphite-2','nalphite-1','nalphite-0','lux-7','lux-6','lux-5','lux-4','lux-3','lux-2','lux-1','lux-0','lulu-6','lulu-5','lulu-4','lulu-3','lulu-2','lulu-1','lulu-0','lucian-6','lucian-7','lucian-2','lucian-1','lucian-0','lissandra-3','lissandra-2','lissandra-1','lissandra-0','leona-9','leona-8','leona-7','leona-6','leona-5','leona-4','leona-3','leona-2','leona-1','leona-0','leesin-6','leesin-5','leesin-4','leesin-3','leesin-2','leesin-1','leesin-0','leesin-10','leesin-11','leblanc-5','leblanc-4','leblanc-3','leblanc-2','leblanc-1','leblanc-0','kogmaw-9','kogmaw-8','kogmaw-7','kogmaw-6','kogmaw-5','kogmaw-4','kogmaw-3','kogmaw-2','kogmaw-1','kogmaw-0','kled-1','kled-0','kindred-2','kindred-1','kindred-0','khazix-4','khazix-3','khazix-2','khazix-1','khazix-0','kennen-7','kennen-6','kennen-5','kennen-4','kennen-3','kennen-2','kennen-1','kennen-0','kayle-8','kayle-7','kayle-6','kayle-5','kayle-4','kayle-3','kayle-2','kayle-1','kayle-0','katarina-9','katarina-8','katarina-7','katarina-5','katarina-6','katarina-4','katarina-3','katarina-2','katarina-1','kassadin-4','kassadin-3','kassadin-2','kassadin-1','kassadin-0','karthus-9','karthus-5','karthus-4','karthus-3','karthus-2','karthus-1','karthus-0','karma-7','karma-6','karma-5','karma-4','karma-3','karma-2','karma-1','karma-0','kalista-3','kalista-2','kalista-1','kalista-0','jinx-4','jinx-3','jinx-2','jinx-1','jinx-0','jayce-4','jayce-3','jayce-2','jayce-1','jayce-0','jax-9','jax-8','jax-7','jax-6','jax-5','jax-4','jax-3','jax-2','jax-1','jax-0','jarvaniv-6','jarvaniv-5','jarvaniv-4','jarvaniv-3','jarvaniv-2','jarvaniv-1','jarvaniv-0','janna-7','janna-6','janna-5','janna-4','janna-3','janna-2','janna-1','ivern-1','ivern-0','irelia-5','irelia-4','irelia-3','irelia-2','irelia-1','irelia-0','illaoi-1','illaoi-0','heimerdinger-5','heimerdinger-4','heimerdinger-3','heimerdinger-2','heimerdinger-1','heimerdinger-0','hecarim-6','hecarim-5','hecarim-4','hecarim-3','hecarim-2','hecarim-1','hecarim-0','graves-7','graves-6','graves-5','graves-4','graves-3','graves-2','graves-1','graves-0','gragas-9','gragas-8','gragas-7','gragas-6','gragas-5','gragas-4','gragas-3','gragas-3','gragas-2','gragas-1','gragas-0','gnar-4','gnar-3','gnar-2','gnar-1','gnar-0','garen-6','garen-5','garen-4','garen-3','garen-2','garen-1','garen-0','garen-10','garen-11','gangplank-8','gangplank-7','gangplank-6','gangplank-5','gangplank-4','gangplank-3','gangplank-2','gangplank-1','gangplank-0','galio-5','galio-4','galio-3','galio-2','galio-1','galio-0','fizz-9','fizz-8','fizz-4','fizz-3','fizz-2','fizz-1','fizz-0','fiora-5','fiora-4','fiora-3','fiora-2','fiora-1','fiora-0','fiddlesticks-7','fiddlesticks-6','fiddlesticks-5','fiddlesticks-4','fiddlesticks-3','fiddlesticks-2','fiddlesticks-1','fiddlesticks-0','ezreal-9','ezreal-8','ezreal-7','ezreal-6','ezreal-5','ezreal-4','ezreal-3','ezreal-2','ezreal-1','ezreal-0','evelynn-4','evelynn-3','evelynn-2','evelynn-1','evelynn-0','elise-4','elise-3','elise-2','elise-1','elise-0','ekko-3','ekko-2','ekko-1','ekko-0','draven-6','draven-5','draven-4','draven-3','draven-2','draven-1','draven-0','drmundo-9','drmundo-8','drmundo-7','drmundo-6','drmundo-5','drmundo-4','drmundo-3','drmundo-2','drmundo-1','drmundo-0','diana-3','diana-2','diana-1','diana-0','diana-11','darius-8','darius-4','darius-3','darius-2','darius-1','darius-0','darius-14','corki-8','corki-7','corki-6','corki-5','corki-4','corki-3','corki-2','corki-1','corki-0','chogath-6','chogath-5','chogath-4','chogath-3','chogath-2','chogath-1','chogath-0','cassiopeia-4','cassiopeia-3','cassiopeia-2','cassiopeia-1','cassiopeia-0','camille-1','camille-0','caitlyn-6','caitlyn-5','caitlyn-4','caitlyn-3','caitlyn-2','caitlyn-1','caitlyn-0','caitlyn-10','caitlyn-11','braum-3','braum-2','braum-1','braum-0','braum-10','brand-5','brand-4','brand-3','brand-2','brand-1','brand-0','blitzcrank-7','blitzcrank-6','blitzcrank-5','blitzcrank-4','blitzcrank-3','blitzcrank-2','blitzcrank-1','blitzcrank-0','blitzcrank-11','bard-6','bard-5','bard-4','bard-3','bard-2','bard-1','bard-0','azir-4','azir-3','azir-2','azir-1','azir-0','aurelionsol-1','aurelionsol-0','ashe-8','ashe-7','ashe-6','ashe-5','ashe-4','ashe-3','ashe-2','ashe-1','ashe-0','annie-9','annie-8','annie-7','annie-6','annie-5','annie-4','annie-3','annie-2','annie-1','annie-0','annie-10','anivia-7','anivia-6','anivia-5','anivia-4','anivia-3','anivia-2','anivia-1','anivia-0','amumu-8','amumu-7','amumu-6','amumu-5','amumu-4','amumu-3','amumu-2','amumu-1','amumu-0','alistar-9','alistar-8','alistar-7','alistar-6','alistar-5','alistar-4','alistar-3','alistar-2','alistar-1','alistar-0','akali-8','akali-7','akali-6','akali-5','akali-4','akali-3','akali-2','akali-1','akali-0','ahri-7','ahri-6','ahri-5','ahri-4','ahri-3','ahri-2','ahri-1','ahri-0','aatrox-3','aatrox-2','aatrox-1','aatrox-0','zacskt','teemoskt','olafskt','namiskt','syndraskt','jhinskt','ekkoskt','urgot-8','urgot-7','urgot-6','urgot-5','kayn-2','kayn','sona-8','veigaros','twitchos','tristanaos','fizzos','zigg','nalzah01','kayle','hecarim','brand','ornn2','ornn','syndra','soraka','nissfortune','ezreal','ahri','yorick','singed','nasteryi','janna','fiora','cassiopeia','ashe','zed','viktor','nidalee','katarina','gnar','evelynn-7','evelynn-6','evelynn-5','evelynn','elise','annie','rengar','blitzcrank-9','blitzcrank-8','zoe-2','zoe','vi','vayne','varus','poppy','kogmaw','jinx','jhin','jax','graves','draven','xinzhao','warwick','swain-8','swain-7','swain-6','swain-5','swain-4','rakan','nasus','nissfortune-15','nissfortune-14','nissfortune-13','nissfortune-12','nissfortune-11','nissfortune-10','lux','kaisa-2','kaisa','jarvan-iv','illaoi','gragas','wukong','sivir','nissfortune-16','irelia-11','irelia-10','irelia-9','irelia-8','irelia-7','irelia-6','galio','alistar','varus-7','twistedfate','teemo','shen','rumble','riven','evelynn-8','zoe3','xinzhao-7','urgot','thresh','talon','taliya','pyke-2','pyke','poppy-8','nunu-15','nunu-14','nunu-13','nunu-12','nunu-11','nunu-10','nunu-9','nunu-8','lulu','lucian','jarvan-iv-7','irelia-12','garen','gangplank','darius','caitlyn','braum','aurelionsol-2','ashe-9','akali-18','akali-17','akali-16','akali-15','akali-14','akali-13','akali-12','akali-11','akali-10','akali-9','aatrox-7','aatrox-6','aatrox-5','aatrox-4','ziggs-6','yasuo','sona','nalphite','khazix','kayn-3','jinx-5']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
if (!text) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['zyra','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twictch','tryndamere','trundle','tristana','thresh','twistedfate','teemo','taric','talon','taliyah','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','orianna','olaf','nunu','nasteryi','naokai','nalzahar','nalphite','lux','lulu','lucian','nocturne','nedalee','nautilus','nasus','nami','norgana','noderkaiser','nissfortune','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','jinx','jhin','jayce','jax','jarvan','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','drmundo','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','zoe','sylas','swain-2','pyke','nunu-2','neeko','norgana2','kayle-2','kaisa','evelynn-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
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
if (!text) return reply(lang.maketeamlogo('character', '10', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', '10', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['1','2','3','4','5','6','7','8','9','10','11','12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['a124','alok','alvaro','andrew','antonio','caroline','hayato','kapella','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['bear-2','dragon-2','hydra','lion','reaper','wolf-2','bear','eagle','iguana','shark','snake','spartan','griffin','owl','wolf','tiger','wolver','dragon']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
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
if (!text) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['ace','brook','chopper','franky','garp','jinbei','law','luffy','nerry','nami','rayleigh','robin','sabo','sanji','shanks','sunny','usopp','zoro']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
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
if (!text) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6','banner-7']
		if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
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
if (!text) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
if (!text.includes('|')) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
const style = ['cover-1','cover-2','cover-3','cover-4','cover-5','cover-6','cover-7','cover-8','cover-9','cover-10','cover-11','cover-12']
if (!style.includes(m2)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Template')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
var memek = args.join(" ").split("|")
var m1 = memek[0]
var m2 = memek[1]
var m3 = memek[2]
const style = ['ahri-2','neeko','nocturne','shen-2','veigar','rakanayah-2','zoe-2','pantheon-2','rammus','udyr','darius-2','ekko-2','lablanc','leona','nissfotune','poppy','quinn','talon-2','akali-2','irelia-2','jinx-2','nordekaiser','pyke-2','renekton','rengar','sivir','sona','soraka','tristana','warwick','yuumi','ziggs','leesin','lulu','lux','naster-yi','norgana','nasus','pantheon','pyke','qiyana','rakan','rakanxayah','riven','shen','sylas','talon','teemo','thresh','tryndamere','varus','vayne','velkoz','vladimir','yasuo','zed','zoe','hecarim','heimerdinger','illaoi','irelia','ivern','janna','jarvan-iv','jax','jayce','jhin','jinx','kaisa','kalista','karma','karthus','kassadin','katarina','kayle','kayn','kennen','khazix','kindred','kled','kogmaw','aatrox','ahri','akali','alistar','amumu','anivia','annie','ashe','aurelionsol','azir','bard','blitzcrank','brand','braum','caitlyn','camille','cassiopeia','chogath','corki','darius','diana','drmundo','draven','ekko','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gnar','gragas','graves']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
const style = ['airi-2','aleister','astrid-2','ata','butterfly-2','dirak','ignis-2','ishar','jinna','lauriel-3','nina-2','natalya-2','omen-2','qi-2','quillen3','raz','roxie-2','ryoma-2','taara-2','violet-3','wukong-4','wukong-3','krixi-2','krizziz','nurad-5','volkath','wisp-2','wukong-2','enzo-2','hayate-2','annette-2','capheny-2','celica','gildur-2','lauriel-2','nurad-4','quillen-2','sephera-2','qi','nurad-3','nurad-2','nakroth-2','zip','diao-chan-2','enzo','errol','joker','payna','slimz','thane','toro','veres','violet-2','wisp','yena','zill','arduin','arthur','batman','capheny','darcy','elsu','florentino','gildur','ignis','wukong','yena','zanis','violet','tulen','sephera','nurad','nina','lindis','liliana','lauriel','krixi','kahlii','hayate','diao-chan','butterfly','astrid','arum','annette','amily','airi','zuka','zephys','zanis','yorn','xeniel','veres','veera','tel-annas','taara','superman','skud','ryoma','roxie','quillen','omen','natalya','nakroth','lubu']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
const style = ['cobra','dragon','eagle2','falcon','lion2','tiger2','bear','buffalo','eagle','lion','tiger','wolf']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
const style = ['1','2','3','4','5','6']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
const style = ['bird','butterfly','coffee','dove','leaf','like','lotus','milk-tea','panda','tree','woman','bear','bull','dragon','eagle','hawk','ninja','paw','rooster','sabertooth','skull','warrior','zebra']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Icon')}`
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
if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
const style = ['ak47','ak47-s','an94','ar15','aug','awm','g36k','m4a1','m4-s','m14ebr','m16','m60','m82a1','mp5','scar','svd','xm8','xm1014']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
const style = ['andrew','caroline','kelly','laura','maxim','miguel','misha','moco','nikita','notora','olivia','steffi']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
const style = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
const style = ['widowmaker','tracer','symmetra','sombra','soldier76','reinhardt','reaper','orisa','mercy','mei','genji','dva','doomfist','ashe','ana']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
const style = ['bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
const style = ['bg11','bg10','bg9','bg8','bg7','bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
const style = ['dragon-5','jet','knight','skull-3','skull-cyborg','tiger-4','bee-3','dragon-4','fox-3','goat-2','kitsune','octopus-2','piranha','wolf','bear-2','cat','ceberus','crocodile','dinosaur','dragon-3','eagle-3','horse-2','husky','kraken','lynx','sabertooh','assassin','bee','cat2','demon','fox','gorilla','horus','octopus','rounin','scorpion','skull2','tiger3','tiger2','tiger','shark','sabertooth','rooster','rhino','puma','phoenix','panther','owl','lion','horse','hornet','griffin','goat','fox','eagle','dragon2','dragon','devil','cobra','bull','bear','monkey','warrior','rabbit','pirates','owl2','neonwolf','lionking','godzilla','flashwolf','fire','eagle2','dog','mask','team','pubg','drift','bee2']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
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
		if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
const style = ['bear2','cat2','ceberus','crocodile','dinosaur','dragon3','eagle3','horse2','husky','kraken','lynx','sabertooh','assassin','bee','cat','demon','fox-2','gorilla','horus','octopus','rounin','scorpion','-2','tiger-3','bg-tiger','bg-buffalo','chicken','bull','bg-wolf','jaguar','horse','eagle','dragon','wolver','shark','sabertooth','rhino','phoenix','lion','hornet','griffin','bear','tiger2','panther','owl','monkey','goat','fox','dragon2','devil','cobra','reaper','pirates','owl2','mask','fire','eagle2','chamois','neptune','parrots','samurai']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
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
		if (!text ) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
const style = ['mccree','mercy','zenyatta','zarya','winston','widowmaker','tracer','torbjorn','symmetra','sombra','soldier76','soldier_76','roadhog','reinhardt','reaper2','reaper','pharah','orisa','mei','lucio','junkrat','hanzo','genji','dva','bastion','ana2','ana','doomfist','bg-1']
if (!style.includes(m3)){ 
let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
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
	if (!text) return reply(lang.KisahNabi(prefix, command, 'Adam'))
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
	if (!text) return reply(lang.KisahNabi(prefix, command, 'Makassar'))
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
	if (!text) return reply(lang.quran2(prefix, commad , 'Juz', '1'))
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
	if (!text) return reply(lang.quran2(prefix, command , 'Surah', 'Al-fatihah'))
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
	if(!text) return reply(lang.quran3(prefix, command, 'Surah', 'ayat', '1','2'))
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
                if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
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
                case 'nulis':
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya https://youtube.com/c/zeeoneofc`)
            break
        case 'nuliskiri': {
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(11)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './image/nulis/images/buku/sebelumkiri.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '22',
                '-interline-spacing',
                '2',
                '-annotate',
                '+140+153',
                fixHeight,
                './image/nulis/images/buku/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/buku/setelahkiri.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            }
            break
        case 'nuliskanan': {
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './image/nulis/images/buku/sebelumkanan.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '2',
                '-annotate',
                '+128+129',
                fixHeight,
                './image/nulis/images/buku/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/buku/setelahkanan.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            }
            break
        case 'foliokiri': {
             if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(11)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './image/nulis/images/folio/sebelumkiri.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '1720x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '4',
                '-annotate',
                '+48+185',
                fixHeight,
                './image/nulis/images/folio/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/folio/setelahkiri.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            }
            break
        case 'foliokanan': {
             if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'Support Bot WhatsApp'))
            reply(lang.wait())
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './image/nulis/images/folio/sebelumkanan.jpg',
                '-font',
                './image/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '3',
                '-annotate',
                '+89+190',
                fixHeight,
                './image/nulis/images/folio/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    alpha.sendMessage(from, { caption: lang.ok(), image: fs.readFileSync('./image/nulis/images/folio/setelahkanan.jpg') }, { quoted: m, thumbnail: Buffer.alloc(0) })
                    
                })
            }
            break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                alpha.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(lang.NoAudRep(prefix, command))
                } catch (e) {
                console.log(e)
                }
                break
 default:
if (budy.startsWith('=>')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
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
if (!m.key.fromMe && !isCreator) return m.reply(lang.ownerOnly())
try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }


if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')) {
if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
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

⭔ Name : ${m.pushName}
⭔ User : @${m.sender.split("@")[0]}
⭔ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ Date : ${tanggal(new Date())}
⭔ MessageType : ${m.mtype}`

alpha.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
}
function _0x5229(){const _0x4292a3=['RVideo','/zipball','🌟\x20〉ɞ\x20Primb','Github','floor','ain_de_se_','nsfw','RHucs','berapa\x20saa','voicecmd','KjpQW','NyuAm','MauJualan','@bochiltea','Owner','wasted','fototag','「\x20*INSTAGR','*----「\x20XNX','distort','smeme2','buttonId','Svv4AHsQ','Anon','high','c/zeeoneof','title','.leave','ytmp4','2065488yPNfXG','rowId','.next','\x20:\x20Pending','YYpqs','👻\x20〉ɞ\x20Stick','\x0a⚠️\x20Size\x20:\x20','fdEbd','nVDkN','\x20:*\x20','dSaveMedia','ync','\x20Sticker','append','w.mediafir','🥁\x20〉ɞ\x20Teles','ic\x20Command','keluar','\x0a│\x20\x20*Numbe','m\x20Anime\x20Co','xnxxdl','\x0a\x0aTerimaka','TktnA','ration\x22]','donate','proses','div.mozaiq','hy\x20:\x20\x0a','AddlistDon','groupcmd','mimee','erty','YDVTJ','stagram.co','/archive/r','T\x20:*\x0a\x0a','igstory','conneted_f','DataBor','ytshort','profilePic','downloadAn','bJySi','➿\x20Url\x20:\x20ht','om/users/','on\x20Command','addstik','moustache','2989573374','DjmzP','listvid','?file&text','RY\x20」----*','EHdId','durasi','test','addimage','iafire\x20Dow','207508QIpYvC','📛\x20*Usernam','SI\x20PENDING','StopAnon','🆔\x20ID\x20:\x20',')\x27\x5c);','sendImage','apis.com/v','÷,\x20π,\x20e,\x20(','caption','\x0a⌚\x20JAM\x20\x20\x20\x20','6127tIvzZs','ownerOnly','r.setVideo','rty=\x22og:ti','sticker','images','log','split','ownercmd','Smeme','ImageDewas','Url169\x5c(\x27(','Addlist','80Kbps\x0a*🌀\x20','╭─⬣「\x20_*INF','HH:mm:ss\x20D','s\x20Command','storagecmd','e-8','Addstik','Rphnd','DoNnd','1120890ATAlFN','WAITING','round=','TANGGAL\x20:\x20','Audio','rcyduk,\x20Ma','posterize','fLGpP','SoundNih','reply','e\x20Code','e\x20:\x20','*STICKER\x20L','Selamat\x20','content','kGnTZ','semoji','\x0a*📆\x20Upload','Donasi','getMsgBuff','animecmd','iIQEp','Message','&\x20Sfw\x20Comm','collection','find','catch','Thanks\x20To','nvfYS','islamcmd','gkGRY','RULES','RandRik','emoji','twitter_us','JCmAZ','burn','\x0a✴️\x20Followi','adcast','e-15','.*?)\x27\x5c);','nload\x20」---','etdxM','whvZA','owner','ChLFO','⏳\x20Durasi:\x20','\x20Video','sendMediaA','Download\x20V','image_url','BuatLogoLa','\x20TIME*_\x20」⬣','moGto','soundcmd','i-soeur_vi','user','Self-Mode','mp4','\x0a👻\x20Subscri','push','slice','*----「\x20INS','e-25','hrUhJ','1031815vVoSdC','unsharpen','instavid','e-26','🔏\x20Company\x20','company','link_profi','linkk','Rvmcc','anonymous','i:\x20','passed','UTUBE\x20PLAY','🤳\x20〉ɞ\x20Ephot','\x20changer\x20C','Kirim\x20peri',',\x20)\x20yang\x20d','e-20','addvn','updated_at','D/MM/YYYY','bcgc','Group\x20Chat','profile','TUBE\x20VIDEO','t\x20media\x20ak','s/custom/','\x20Mp4\x0a*👍\x20Qu','me-random-','ytsearch2','sposition','tWwbf','uAbBj','ffmpeg\x20-i\x20','span.metad','🎀\x20Username','Nih','searchcmd','message','*-------「\x20','qRCwl','https://te','cbmgw','False','\x0a\x0aPesanan\x20','rUAPx','PUzuO','\x0a*📺\x20Views\x20','send5ButIm','OffNsfw','\x0a📬\x20Timelin','wMzVF','ing\x20Comman','ago','email','6|2|0|5|4|','e-29','start','tomp4','ilSte','sessionid=','videotag','\x20」----*\x0a\x0a*','yts','edge_saved','legra.ph','⛲\x20〉ɞ\x20Sourc','\x0a*Total\x20:\x20','rs\x20:*\x20','stop','RamalOi','then','hrabU','\x0a🌐\x20Height\x20','Sub\x20Menu\x20K','next','api.ml/can','TJUsh','tmp.','text','entuk\x20link','_____\x0a\x0a','Example\x20:\x20','Kmlsi','triggered','ooacj','?key=AIzaS','XDbuN','Rest\x20Api\x27s','\x0a🕹️\x20Video\x20T','\x20:\x20*','\x20Effect\x20Co','get','mediaType','youtu.be','2NAoyeN','e-14','legra.ph/u','Alphabot-M','readFileSy','MwgnB','GnSxq','stiker','challenger','OuwZO','\x0a│\x20*Lib*\x20:','🥰\x20Name\x20:\x20','ytmp3','medias','all','file','missionpas','-*\x0a\x0a📬\x20Name','edge_media','masturber_','thanksto','e-9','sendButton','📧\x20Email\x20:\x20','Keluar','Hoja','_ans_en_tr','plAvs','gitdl','videoHeigh','XslAM','buttonText','trim','scary','✨\x20*Followi','AnonOn','video','\x0a🗃️\x20Savemed','dio','Image','⏰\x20Upload:\x20','SumberBot','MmyCn','ng\x20:*\x20','(.*?)\x27\x5c);','ub.com/','bTsFS','each','N\x20LIST\x20:*\x0a','join','PdTyz','u\x20Ngecheat','Click\x20Here','mulai','\x0a🚀\x20Diuploa','scale','random','EmXbm','textprocmd','NqztR','rules','eBiii','ocSar','sendMedia','displayTex','storecmd','blog','cecancmd','yKcKy','leave','tiktok','f9p3a/attr','\x20MB','comrade','listaudio','28Kbps\x0a*🌀\x20','erorLink','./image/to','generate','unlinkSync','audio','on\x20:*\x20','YXZHe','contextInf','.zip','duration','under','videoCount','mvIMQ','type','_to_timeli','AnonDahSto','state','PJCIu','TobatBro','Procfile\x20U','send5ButLo','filter=png','Dellist__','urlButton','\x0a│\x20*Wita*\x20','\x208\x20+\x209','DellistDon','tovideo','instavideo','om/repos/','matika','dari\x20batas','smeme','VgcOs','Ybdjz','UdlxF','l\x20:*\x20','ah,\x20hanya\x20','aBzvf','Tqnya','facebook','igstalk','ng\x20:\x20','👨‍💻\x20〉ɞ\x20Contr','8240xnoCQS','DojMk','instareels','\x20*text*','📺\x20〉ɞ\x20Asupa','done','\x0a\x0a_Untuk\x20s','AGfeS','deo:width\x22','hzzUZ','\x0a*📺\x20Ext\x20:*','igdl','an\x20dikirim','views','ntah\x20','3:6LxSkBb8','CZPwD','wanted','kalkulator','stickertag','emror','yts2','ip/file','\x20\x0a│\x20*Name*','s\x20:\x20','seconds','allmenu','n\x20Command','♎\x20Followin','public_rep','vendor','check','dho','🔥\x20Follower','\x20sedang\x20di','nIohd','getUserMet','map','lanjut','gpeiY','https://ap','FkrTX','renhave','🌍\x20Public\x20G','e-24','data','12468AIZOjK','connected_','Subscribe','hcBYH','name','count','href','🌁\x20〉ɞ\x20Other','blue','following','instareel','RImage','session-mu','mimetype','SI\x20BERHASI','c/ZeeoneOf','1|3','\x0a🆔\x20Id\x20:\x20','Video\x20:\x20','0|2|5|1|4|','「\x20*TRANSAK','tourl','img-','Command','Start','rty=\x22og:vi','wTGpP','Source\x20Cod','g\x20:\x20','*\x0a\x0a','naman','instafoto','Xnxx\x20Searc','return\x20','its\x20:\x20','\x20:\x20@','*🔗\x20Link\x20:*','https://so','KZwty','🎎\x20〉ɞ\x20Rando','r.setThumb','fromMe','co/upload','📭\x20Twitter\x20','__________','ommand','vAhLY','AllPartici','MAGql','uWYQy','sendImageA','⁉️\x20〉ɞ\x20\x20Info','thub.com/','HtWBi','userJid','rFbgk','xkYYK','profile_pi','image','🎭\x20〉ɞ\x20Voice','📛\x20Username','format','jNwtq','dCYQ&conte','Group','s/custom/-','🧿\x20〉ɞ\x20Conve','redple','Url','iMYzT','cYtPj','nYvTW','sendButMes','timeline','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','rWZrj','QOYyd','Hayoloh\x20Te','\x0a📲\x20Connect','\x0a📛\x20Channel','\x0a│\x20*Wit*\x20:','m/scraper','njhMK','-----「\x20*YO','All\x20menu\x20b','ytmp3\x20','thMentions','and','.start','AM\x20DOWNLOA','gitclone','urasi\x20lebi','w.xnxx.com','content-di','e\x20:*\x20','.tmp','Stop','threshold','Qigta','translate','IvTGT','🖼️\x20〉ɞ\x20Logo\x20','pengiriman','chats','imagelist','tps://gith','\x0a🏷️\x20Followe','L*\x20」\x0a\x0a```📆','imeline\x20:\x20','https://xt','JpbAB','SlideBig\x5c(','location','https://yo','o360\x20Comma','info','atan\x20:\x0a','Sitya','O\x20USER*_\x20」','username','ality\x20:*\x201','Hasil\x20Dari','source','tle\x22]','YngFg','imagetag','0|1|3|4|2','oader\x20Comm','videoType','💋\x20*Fullnam','e-5','⛩️\x20〉ɞ\x20Anime','PuYrc','egsGn','filter','\x20Mp3\x0a*👍\x20Qu','inpAz','XqMZE','DBvpi','INDONESIAN','\x20_*INFO\x20BO','Stag','adminOnly','e-19','e-7','TbRepo','tiktokaudi','edge_follo','mediafire','AnonFind','\x0a😎\x20Views\x20:','child(6)','ext','tiktokwm','*💢\x20Total\x20:','XXYpl','mp3','mqYhl','replace','audio/mpeg','Video','dcast\x20Ke\x20','QIjpX','🎀\x20Title\x20:*','wait','ps4','url','videoWidth','Gvvhi','stalkcmd','i.memegen.','followers','WUvDv','avatar_url','rhPwy','ytsearch','rs\x20:\x20','ehHGl','X\x20DOWNLOAD','TszOq','kurang','src','Dellist','tiktok.com','an\x20dalam\x20b','meta[prope','WmSOp','🛍️\x20〉ɞ\x20Stora','🎀\x20*Followi','ICdel','edge_owner','l```\x0a\x0a📝\x20Ca','session','Button','facebook.c','RiGQs','biography','videos','Prefix*\x20:\x20','FaMpY','link/image','Check\x20List','listvn','full_name','ghuser','facebooksd','Text','\x0a*⚙️\x20Size\x20:','chat','ata','UXxSt','writeFileS','RSticker','xGrgg','QWreV','Math.E','StalkOrk','length','xZhxT','\x20Baileys-M','fb_page','skip','FWWVb','\x0a│\x20*Runtim','\x0a╰─⬣\x0a\x0a╭─⬣「','c_url','ntfilter=h','e-10','fuFQt','copyNForwa','video/mp4','\x20*soal\x20mat','💌\x20*Followe','ephotocmd','XNXX\x20SEARC','*\x20」\x0a\x0a```📆\x20','Mediafire\x20','ontoh\x20:\x20','togif','created_at','github','Maustorage','yAyimkuYQY','----------','6714kRPVaH','No\x20Name\x20In','e-6','rter\x20Comma','TeleStik','zeeoneofc','\x20:\x20','listimage','cHFPc','ylwDe','html','stiktag','https://in','sendTextWi','ddungeon','\x0a🔔\x20Reels\x20:','r\x20ya🙏','\x0a🎭\x20Width\x20:','CLICK\x20HERE','RagUd','EloDown','channel','sendAudio','🔗\x20Link:\x20','MenuGc','AllFitur','GadaChat','er\x20Effect\x20','\x20Group\x20Cha','emoji1','calc','gyJai','listimg','1938510ygbZmy','igtv','Broadcast','fullName','Public-Mod','ape_ma_dem','/THUMBNUM/','fire','/search/','👦\x20〉ɞ\x20Owner','AnonSearch','public','ListStik','ne_media','\x0a_________','\x0a\x0a©\x20','girim\x20Broa','json','anonmenu','tuk\x20link_','\x20Media','\x0a🌀\x20Url\x20:\x20','⬣\x0a│\x20\x20*Name','4|3|5|2|0|','includes','AddstikOk_','thub.com/z','body','result','sendMessag','downloadMe','ElFAk','🌐\x20Blog\x20:\x20','MenuAni','_video_tim','nt=proacti','?avatar=','bio','iGniE','itbLi','294AacyQE','rtGBT','「\x20*YOUTUBE','.jpg','NoAnon','HEAD','URlGz','LVDTT','broadcastg','follower','hasOwnProp','red','serializeM','0-9\x20dan\x20Si','rows','*\x20=\x20_','html5playe',':*\x20','RVn','TAGRAM\x20STO','instatouch','link','\x20:\x20Berhasi','ugzbG','pload','ttons','err','」-----*','i.github.c','e*\x20:\x20','nstagram.c','UrlLow\x5c(\x27(','akAwe','xJJHN','Wdcob','e-18','p.net','quoted','\x0a🌀\x20Bio\x20Url','ia\x20Link','s*\x20:\x20','_Tunggu\x20be','\x20Command','invertgrey','*\x0a🌀\x20Url\x20:\x20','Chat','NJdIo','\x20proses!','emoji1\x20','📝\x20Type\x20:\x20','scLZW','ytshortmp3','hitungmate','locale','sage','sticktag','_Untuk\x20dur','sendsessio','\x0a│\x20*Mode*\x20','rty=\x22og:du','KanLogoLag','rejected','Slide\x5c(\x27(.','.stop','📖\x20Update\x20:','attr','\x0a---------','Instagram\x20','BOiBO','files','1+2','e-3','T*_\x20」⬣\x0a│\x20*','Math.PI','\x0a*⏰\x20Durati','primboncmd','\x0a⏰\x20Durasi\x20','\x20Fb\x20:\x20','TbJail','e-13','eDCnD','utube.com/','\x20List\x20Emoj','instagrams','https://gi','eline','gamecmd','e-1','asupancmd','KisahNabi','\x20*,\x20/,\x20×,\x20','e-22','ion=emoji_','quickReply','addvideo','instatv','TWZma','habotV16.z','HkomN','footer','uptime','Tomp4','facebookdl','AWVma','h\x20dari\x20bat','stickercmd','aXYOl','RDZmj','BXjQu','UrlHigh\x5c(\x27','\x20SEARCH*\x20」','\x0a💌\x20Biograp','Cgcrr','*AUDIO\x20&\x20V','ibutors','NckxT','eofc.repl.','sendVideo','is_verifie','d@4.0.0\x0a╰─','telecmd','stxcr','XUzYE','groupOnly','blurple2','reel_count','videotimel','ySafj','aDwDa','broadcast','avec_le_co','*\x20:\x20','Dellist_','QSzTO','\x0a\x20\x20\x20\x20\x20\x20','StopAnonBy','igvideo','kali','PrBDJ','r*\x20:\x20@','Smeme_','timestamp','low','jfTku','nQeXz','/video-136','sniper','as\x20disajik','sakura','mimeType','🎮\x20〉ɞ\x20Games','sSticker','h\x20Command','match','*-----\x20「GI','YayPO','youtube.co','DpIzC','method','lsWgf','e-21','eeone-ofc/','PiXTc','----\x0a','JqOPb','\x20dalam\x20ben','mand','nTdzH','KhususOwn','age\x22]','efExN','public_gis','packname','GIrWz','key','author','memegen','glass','efs/heads/','QVBZm','YPnVd','values','THUB\x20STALK','\x0a\x0a_Untuk\x20d','wbovP','is_private','calculator','ber\x20:\x20','liststc','fbdl','geff-','isImage','👭\x20〉ɞ\x20Cecan','AddstikOk','SYLpb','ge\x20Command','bagi','*?)\x27\x5c);','jail','oterMenu','loVCQ','subCountLa','*\x20」-----\x0a\x0a','load','txCyh','ar..._','e-4','SaNDF','private','🕌\x20〉ɞ\x20Islam','CHATTING','Url\x5c(\x27(.*?','F_FXVALexP','erge_de_18','MRIjV','existsSync','🐣\x20Title:\x20','Subscribe\x20','🛍️\x20〉ɞ\x20Store','e-28','.png','e-17','subCount','isupport','sendsesi','e.com/file','cmd','UpList','headers','ghstalk','zCyWo','🆔\x20*ID\x20:*\x20','uwVYS','uGQctUWRUR','yZRWL','ZEEONE\x20OFC','ine','fullname','*📫\x20Title\x20:','utu.be/7wf','./image/im','ma_console','wuBRg','Us\x20✨','attp','graphql','.json','igreels','store','_hentai','emojimix','0|4|1|2|3','ZjOqB','igphoto','status','*🐥\x20Title\x20:','TUBE\x20AUDIO','hitungmath','mmand','addimg','fcfky','facebookau','afJTh','beautiful','Bcall','listvideo','pixelize','donasi','a#download','timeout','vidtag','voicetag','📸\x20〉ɞ\x20Text\x20','😎\x20Views:\x20','GgtZe','brightness','&q=','BOT*','POST','\x20Next\x20Orde','fbaudio','pBhIU','VoceN','Vtag','sepia','code','🎧\x20〉ɞ\x20Sound','tory','wed_by','mXwJH','tiktoknowm','nvWcC','response','pPMtU','AnonNew','wsbrm','OTqIy','isGroup','Support\x20Me','nsfwcmd','🤖\x20〉ɞ\x20\x20All\x20','\x20https://i','3|4|2|1|0','bel','\x20😅+💩','bcall','ubWEe','sizee','green','.png?backg','https://ww','_transpare','Bot\x20WhatsA','🉑\x20Node\x20ID\x20','Url\x20:*\x20','4dUlYHJ','kitchen_v5','stickermem','xmlMode','Sticker','node_id','ranimecmd','\x20Vn','download','\x20disajikan','ntrole_de_','1/2','🔎\x20〉ɞ\x20Searc','wrongForma','🧐\x20〉ɞ\x20Stalk','\x20Owner️\x20','Skip','databasecm','DER*\x20」','sender','blurple','glitch','\x20\x20\x0a╰─⬣','HMuWt','vas/','foto','*----「\x20YOU','\x0a🌀\x20Link\x20:\x20','Cari\x20Partn','login','liststik','rip','cript:nth-','Tourl','e-12','div.thumb-','IanAJ','llXrb','\x20TANGGAL\x20:','HajuStik','Broadcast\x20','other','XJJnZ','*VIDEO\x20LIS','youtubesta','DONATE','📥\x20〉ɞ\x20Downl','Fren','githubstal','liststiker','greyscale','BGbhR','1*2','ality\x20:*\x204','addvid','2/featured','msg','liYrG','rty=\x22og:im'];_0x5229=function(){return _0x4292a3;};return _0x5229();}(function(_0x2a8044,_0x1e0316){function _0x4fc134(_0x2c127a,_0x1fd456,_0x3c9cf2,_0x263daf){return _0xa869(_0x2c127a-0x2d6,_0x3c9cf2);}const _0x4ebe40=_0x2a8044();function _0x3b398d(_0xe01d78,_0x54e75f,_0x17301d,_0x460e40){return _0xa869(_0x54e75f- -0x3be,_0x17301d);}while(!![]){try{const _0x4af2c2=-parseInt(_0x4fc134(0x6de,0x858,0x790,0x5e7))/(0x258a+0x263*-0x1+-0x2326)*(-parseInt(_0x4fc134(0x77e,0x9ae,0x8d9,0x5de))/(-0x7b2+-0x1279+0x1a2d*0x1))+-parseInt(_0x4fc134(0x683,0x4b6,0x788,0x6ff))/(0x6f*-0x10+0x26ff+-0x200c)+-parseInt(_0x3b398d(-0xc7,-0x69,-0x170,0x87))/(0x1d1d+0x3*0x13a+-0x20c7*0x1)*(-parseInt(_0x3b398d(-0x172,0x8b,0x95,0x2c2))/(-0xe49+-0x1d*-0x107+0x131*-0xd))+-parseInt(_0x3b398d(-0x199,-0x1a4,-0x242,-0x4f))/(-0xdff*-0x2+0xb2a*-0x3+-0xe*-0x65)*(parseInt(_0x3b398d(-0x6,0x29,-0x187,0xf2))/(-0x1b74*-0x1+0x20b3+-0x8*0x784))+parseInt(_0x4fc134(0x385,0x40e,0x1f4,0x258))/(0x6e2+-0x83*-0x2+0x3*-0x2a0)*(parseInt(_0x4fc134(0x4a7,0x3d3,0x5d5,0x5f3))/(0x20fd+-0x57*-0x1f+-0x2b7d))+parseInt(_0x4fc134(0x4c8,0x316,0x6d5,0x361))/(0x1f*0x1+-0x1a30+0x1a1b)+parseInt(_0x4fc134(0x6c8,0x6db,0x8f8,0x8ca))/(-0x3f9*-0x2+-0x15d5+-0x2*-0x6f7)*(parseInt(_0x3b398d(-0x17a,-0x2e1,-0x1ec,-0x364))/(0x26b*0x4+0x138b+-0x9b9*0x3));if(_0x4af2c2===_0x1e0316)break;else _0x4ebe40['push'](_0x4ebe40['shift']());}catch(_0x100df5){_0x4ebe40['push'](_0x4ebe40['shift']());}}}(_0x5229,0x629cf+0x57239*-0x1+0xa60dd));function _0xa869(_0x9ea97e,_0x5b2131){const _0x303d50=_0x5229();return _0xa869=function(_0x3bb785,_0x53df63){_0x3bb785=_0x3bb785-(-0x2d6*-0x1+0x23d4*0x1+-0x260e);let _0x84d26=_0x303d50[_0x3bb785];return _0x84d26;},_0xa869(_0x9ea97e,_0x5b2131);}switch(command){case _0x185cf8(0x6db,0x52f,0x6f9,0x6a2):{if(!m['key']['fromMe']&&!isCreator)return reply(lang[_0x42ed2f(0x560,0x74d,0x784,0x985)]());if(!/webp/[_0x42ed2f(0x66b,0x8b2,0x775,0x61e)](mime))return reply(lang[_0x185cf8(0x4f8,0x559,0x3d7,0x3b9)](prefix,command,'sticker'));if(!text)return reply(lang[_0x185cf8(0x467,0x559,0x775,0x788)](prefix,command,_0x185cf8(0x36a,0x54a,0x4ae,0x53c)));if(text[_0x42ed2f(0x70a,0x70e,0x59b,0x4cd)]('|'))return reply(lang['Addstik'](prefix,command,_0x185cf8(0x4c1,0x54a,0x73b,0x571)));let media=await alpha[_0x185cf8(0x35e,0x52a,0x6b7,0x68d)+_0x185cf8(0x3f7,0x50b,0x5cd,0x38d)+_0x42ed2f(0x60c,0x79c,0x7af,0x9aa)](quoted),ran=await('./image/to'+'img-')+getRandom('.png');exec(_0x42ed2f(0x7a8,0x5ef,0x7fb,0x7c6)+media+'\x20'+ran,_0x82e23f=>{function _0x3d683c(_0x62c100,_0x2afe30,_0x484079,_0x109e73){return _0x42ed2f(_0x62c100-0x10d,_0x484079,_0x62c100- -0x2bc,_0x109e73-0xc3);}const _0x35b493={'JpbAB':function(_0x48e0e9,_0x1e468c){return _0x48e0e9===_0x1e468c;},'nvWcC':function(_0x258543,_0x3b6cfd){return _0x258543(_0x3b6cfd);},'ElFAk':function(_0x43462c,_0x56e938){return _0x43462c!==_0x56e938;},'scLZW':_0x3d683c(0x1fe,0x215,0x303,0x2e4),'QVBZm':function(_0x4715e1,_0x483784){return _0x4715e1(_0x483784);},'ZjOqB':_0x34235b(0x16b,0x363,0x348,0x319)};function _0x34235b(_0x99682d,_0x4907b2,_0x500afc,_0x36bbca){return _0x42ed2f(_0x99682d-0xa7,_0x36bbca,_0x99682d- -0x2e9,_0x36bbca-0x99);}fs['unlinkSync'](media);if(_0x82e23f)return _0x35b493[_0x3d683c(0x3a2,0x213,0x4a4,0x21a)](reply,_0x35b493[_0x34235b(0x3be,0x1e7,0x33f,0x27d)]);TelegraPh(ran)[_0x34235b(0x538,0x37e,0x706,0x3e5)](async _0x21d4e7=>{function _0x4ec1e6(_0x20e93f,_0x13111b,_0x15fd3a,_0x3f280e){return _0x3d683c(_0x15fd3a- -0x487,_0x13111b-0x9e,_0x20e93f,_0x3f280e-0xe3);}function _0xfdc905(_0x245ec2,_0x326b6b,_0x470ebb,_0x53dc2f){return _0x34235b(_0x53dc2f- -0x488,_0x326b6b-0xc7,_0x470ebb-0x28,_0x326b6b);}if(_0x35b493[_0xfdc905(-0x21a,-0x1c7,-0x317,-0x1cf)](_0x35b493[_0xfdc905(-0x359,-0x9e,0x4,-0x194)],_0x35b493[_0xfdc905(-0x2c,-0x221,-0xef,-0x194)]))_0x5075cf['id']===_0x24dc37[_0x4ec1e6(0x1a,-0x2b4,-0x205,-0x2cd)]&&_0x35b493[_0x4ec1e6(-0x3ce,-0x3b7,-0x267,-0x2d2)](_0x11a577[_0xfdc905(-0x279,-0x64,-0x3b,-0x118)],_0x1abbfb)?(_0x46949b[_0xfdc905(-0xd3,-0x158,-0xb6,-0xa2)]=_0x214def,_0x1a1115['isImage']=!![],_0x1be41f['image_url']=_0x4ec1e6(0x3a,0x7e,0xc0,-0x35)+_0xfdc905(-0x11b,0x105,0xa3,0xaa)+_0x24fd9e[-0x479*0x2+0x8f4+-0x1*0x2][_0x4ec1e6(-0x8c,-0x36d,-0x220,-0x215)],_0x2b1628(_0x2fa9bf['UpList'](_0x57d22a))):_0x35b493[_0xfdc905(0xd3,0x105,-0x2d9,-0xa3)](_0x20777b,_0x1056f7[_0x4ec1e6(0xa0,0x28a,0x158,-0x6a)](_0x282797));else{const _0x338d97={};_0x338d97[_0xfdc905(-0x299,-0x209,0x70,-0x118)]=text,_0x338d97[_0x4ec1e6(-0x322,-0x25,-0x22f,-0xd1)]=_0x21d4e7,_0x338d97[_0x4ec1e6(0x138,-0x26,0x14f,0x350)]=_0x4ec1e6(0x2d5,-0x1b,0xfd,0x143);var _0x43187a=_0x338d97;db[_0xfdc905(-0x123,-0x4bc,-0x443,-0x304)][_0xfdc905(-0x427,-0x2e5,-0x89,-0x22f)]['push'](_0x43187a);}});});const _0x504c64={};_0x504c64['displayTex'+'t']=_0x42ed2f(0x76b,0x698,0x537,0x50f)+_0x42ed2f(0x678,0x75b,0x74a,0x543);const _0x5b4ec2={};_0x5b4ec2['buttonId']=_0x42ed2f(0x4e5,0x589,0x717,0x8c8),_0x5b4ec2[_0x185cf8(0x7d0,0x61b,0x845,0x576)]=_0x504c64,_0x5b4ec2[_0x42ed2f(0x897,0x907,0x892,0x8da)]=0x1;const _0x13caca={};_0x13caca['quoted']=floc,alpha['sendButMes'+_0x185cf8(0x470,0x3a4,0x1e4,0x191)](from,lang[_0x185cf8(0x3e0,0x42f,0x465,0x3df)](text,_0x42ed2f(0x71e,0x69d,0x6ea,0x5c0),'liststiker',prefix,command),'©\x20'+ownername,[_0x5b4ec2],_0x13caca);break;}case _0x185cf8(0x440,0x4c7,0x6f2,0x4ff):case _0x42ed2f(0x86c,0x6f8,0x717,0x917):case _0x185cf8(0x46f,0x42a,0x611,0x25a):{bg=[],bdd=db[_0x185cf8(0x45c,0x230,0x24c,0x3ea)][_0x185cf8(0x3cc,0x305,0x205,0x2af)],teks=_0x42ed2f(0x58c,0x749,0x7a5,0x67e)+'IST\x20:*\x0a\x0a';for(let x of bdd){x[_0x185cf8(0x63d,0x655,0x4f0,0x581)]==='stiker'?(teks+='-\x20'+x[_0x42ed2f(0x477,0x4f1,0x659,0x6d5)]+'\x0a',bg[_0x185cf8(0x674,0x598,0x472,0x596)](x[_0x185cf8(0x3d6,0x41c,0x3f6,0x624)])):reply(lang['Dellist']());}teks+=_0x42ed2f(0x8b1,0xa41,0x81d,0x85a)+bg[_0x185cf8(0x39e,0x30a,0x4ec,0x4cf)]+_0x185cf8(0x36b,0x24e,0x100,0x270)+lang[_0x185cf8(0x56d,0x352,0x167,0x3eb)](_0x185cf8(0x600,0x54a,0x4fa,0x32a)),reply(teks);}break;case'addfoto':case _0x42ed2f(0x5ec,0x77e,0x776,0x5c5):case'addphoto':case _0x185cf8(0x416,0x471,0x5b5,0x4d4):{if(!m[_0x185cf8(0x372,0x41c,0x493,0x242)][_0x185cf8(0x37a,0x25a,0x39b,0x39e)]&&!isCreator)return reply(lang[_0x42ed2f(0x6f4,0x97d,0x784,0x8f9)]());if(!/image/[_0x42ed2f(0x9a4,0x74d,0x775,0x95f)](mime))return reply(lang[_0x42ed2f(0x6b9,0x67e,0x796,0x567)](prefix,command,'image'));if(!text)return reply(lang['Addstik'](prefix,command,_0x185cf8(0xa3,0x26b,0x371,0x40b)));let media=await alpha['downloadAn'+'dSaveMedia'+_0x42ed2f(0x5cf,0x938,0x7af,0x712)](quoted),anu=await TelegraPh(media);var obj_add={'key':text,'url':util[_0x185cf8(0x2d4,0x26e,0x3c7,0x105)](anu),'type':'image'};db['data'][_0x42ed2f(0x347,0x4bb,0x479,0x47a)]['push'](obj_add);const _0x5ccd87={};_0x5ccd87[_0x42ed2f(0x836,0x8d3,0x879,0x798)+'t']=_0x42ed2f(0x3b8,0x405,0x537,0x45c)+'\x20Image';const _0x3048b9={};_0x3048b9[_0x185cf8(0x655,0x4f9,0x365,0x5c5)]=_0x185cf8(0x542,0x32c,0x52a,0x25c),_0x3048b9[_0x185cf8(0x6b2,0x61b,0x6b6,0x44d)]=_0x5ccd87,_0x3048b9[_0x185cf8(0x437,0x655,0x6c4,0x736)]=0x1;const _0x568f85={};_0x568f85['quoted']=fkontak,alpha['sendButMes'+_0x185cf8(0x55e,0x3a4,0x541,0x1a9)](from,lang[_0x42ed2f(0x570,0x6cd,0x66c,0x7e3)](text,_0x185cf8(0x667,0x623,0x5e3,0x72d),'listimage',prefix,command),'©\x20'+ownername,[_0x3048b9],_0x568f85);break;}case _0x42ed2f(0x48a,0x4c8,0x569,0x789):case _0x185cf8(0x153,0x299,0x169,0x34a):case _0x185cf8(0x470,0x345,0x386,0x13c):{bg=[],bdd=db[_0x185cf8(0x344,0x230,0x14b,0x224)]['RImage'],teks='*IMAGE\x20LIS'+'T\x20:*\x0a\x0a';for(let x of bdd){x[_0x42ed2f(0x998,0xa12,0x892,0x82b)]===_0x185cf8(0xb6,0x26b,0x2f1,0x3c6)?(teks+='-\x20'+x[_0x185cf8(0x577,0x41c,0x36a,0x490)]+'\x0a',bg[_0x185cf8(0x542,0x598,0x41b,0x53f)](x[_0x42ed2f(0x439,0x4b3,0x659,0x5c9)])):reply(lang[_0x42ed2f(0x35f,0x678,0x524,0x6f2)]());}teks+=_0x42ed2f(0x8fb,0x61f,0x81d,0x5f6)+bg[_0x42ed2f(0x729,0x472,0x547,0x5c4)]+_0x42ed2f(0x368,0x4c5,0x48b,0x295)+lang['ListStik'](_0x185cf8(0x70e,0x623,0x7f4,0x6de)),reply(teks);}break;case _0x185cf8(0x205,0x3cc,0x335,0x343):case'addvidio':case _0x42ed2f(0x579,0x633,0x71c,0x624):{if(!m[_0x42ed2f(0x745,0x83b,0x659,0x77f)][_0x185cf8(0x192,0x25a,0x1e1,0x70)]&&!isCreator)return reply(lang['ownerOnly']());if(!/video/[_0x185cf8(0x5db,0x538,0x495,0x4d4)](mime))return reply(lang['Addstik'](prefix,command,_0x185cf8(0x4f0,0x620,0x542,0x545)));if((quoted[_0x42ed2f(0x87e,0x848,0x71e,0x86b)]||quoted)[_0x185cf8(0x1a1,0x21c,0x1a0,0x33b)]>0x1f40+-0x1*-0xf19+-0x2e4e)return reply(lang[_0x185cf8(0x474,0x35f,0x379,0x24b)]('10',_0x42ed2f(0x9dd,0x9c1,0x85d,0x6d7)));if(!text)return reply(lang[_0x42ed2f(0x772,0x79f,0x796,0x687)](prefix,command,_0x42ed2f(0x982,0x78f,0x85d,0x75f)));let media=await alpha[_0x42ed2f(0x5d6,0x7f4,0x767,0x558)+_0x42ed2f(0x54f,0x84e,0x748,0x871)+'Message'](quoted),anu=await TelegraPh(media);var obj_add={'key':text,'url':util[_0x42ed2f(0x401,0x6d8,0x4ab,0x622)](anu),'type':'video'};db[_0x185cf8(0x89,0x230,0x152,0x2fb)][_0x185cf8(0x413,0x4e4,0x5d7,0x4f0)][_0x185cf8(0x423,0x598,0x537,0x51d)](obj_add);const _0xfab53c={};_0xfab53c[_0x185cf8(0x51d,0x63c,0x57d,0x6cb)+'t']=_0x42ed2f(0x4bb,0x651,0x537,0x71d)+_0x42ed2f(0x60b,0x6eb,0x7c8,0x847);const _0x226a3d={};_0x226a3d[_0x185cf8(0x31b,0x4f9,0x6a3,0x457)]=_0x42ed2f(0x5ed,0x60b,0x6b4,0x66b),_0x226a3d[_0x42ed2f(0x9d7,0x813,0x858,0x6bd)]=_0xfab53c,_0x226a3d[_0x185cf8(0x78c,0x655,0x7a1,0x882)]=0x1;const _0x562a9b={};_0x562a9b[_0x185cf8(0x1ba,0x393,0x56f,0x281)]=fgif,alpha[_0x185cf8(0x21f,0x279,0xf1,0x406)+'sage'](from,lang[_0x185cf8(0x488,0x42f,0x37d,0x3e0)](text,_0x185cf8(0xe7,0x2d1,0x1b9,0x211),_0x42ed2f(0x5af,0x5e6,0x6b4,0x5b3),prefix,command),'©\x20'+ownername,[_0x226a3d],_0x562a9b);break;}case'videolist':case'listvidio':case _0x185cf8(0x475,0x533,0x3d9,0x628):case _0x185cf8(0x25f,0x477,0x2b7,0x2b1):{bg=[],bdd=db[_0x42ed2f(0x560,0x23b,0x46d,0x38c)][_0x185cf8(0x71a,0x4e4,0x6d1,0x623)],teks=_0x42ed2f(0x8cd,0x66e,0x711,0x562)+_0x42ed2f(0x98f,0x756,0x761,0x68c);for(let x of bdd){x[_0x42ed2f(0x717,0x7ba,0x892,0x7b5)]===_0x185cf8(0x68d,0x620,0x7b3,0x5c2)?(teks+='-\x20'+x['key']+'\x0a',bg['push'](x[_0x42ed2f(0x62d,0x5bd,0x659,0x751)])):reply(lang[_0x42ed2f(0x437,0x426,0x524,0x71b)]());}teks+='\x0a*Total\x20:\x20'+bg['length']+_0x185cf8(0x2c5,0x24e,0x1c8,0x33c)+lang[_0x42ed2f(0x69e,0x667,0x58f,0x446)](_0x185cf8(0x634,0x620,0x5a2,0x7e4)),reply(teks);}break;case'addaudio':case _0x42ed2f(0x6e5,0x8d3,0x7ec,0x8ee):{if(!m[_0x185cf8(0x49f,0x41c,0x257,0x4de)]['fromMe']&&!isCreator)return reply(lang[_0x42ed2f(0x9bb,0x932,0x784,0x7b0)]());if(!/audio/[_0x42ed2f(0x89a,0x72e,0x775,0x885)](mime))return reply(lang[_0x42ed2f(0x8e2,0x81e,0x796,0x7f4)](prefix,command,_0x185cf8(0x71b,0x64c,0x6c8,0x5cb)));if((quoted[_0x42ed2f(0x6cd,0x50f,0x71e,0x760)]||quoted)['seconds']>0x1*0xc3+-0x12d2+0x122e)return reply(lang[_0x42ed2f(0x764,0x3e1,0x59c,0x7c8)]('30',_0x42ed2f(0x9e8,0x98a,0x889,0x680)));if(!text)return reply(lang[_0x42ed2f(0x8e4,0x6b3,0x796,0x872)](prefix,command,_0x185cf8(0x6cc,0x64c,0x83b,0x6e5)));let media=await alpha[_0x42ed2f(0x514,0x4c2,0x5a1,0x41f)+'diaMessage'](quoted);async function floNime(_0x1cf34f,_0x4af22e={}){const _0xf17e5={'YngFg':function(_0x52d3b6,_0x149879){return _0x52d3b6!==_0x149879;},'RtEIz':_0x4fea4f(-0x210,-0x351,-0x147,-0x1b4),'xZhxT':'BuVav','QWreV':function(_0x44f6d6,_0x2b7b4f){return _0x44f6d6(_0x2b7b4f);},'JCmAZ':_0x175088(0x287,0x3de,0x3d4,0x47d),'GgtZe':function(_0x2e0e53,_0x181961,_0x4bc37a){return _0x2e0e53(_0x181961,_0x4bc37a);},'ilSte':'https://ex'+'press-uplo'+'ader.zeeon'+_0x4fea4f(0x140,-0x1a4,-0x97,-0xb4)+_0x4fea4f(-0x369,-0x3aa,-0x2a1,-0x23b),'OpMMw':_0x175088(0x3d8,0x30f,0x26d,0x337)},{ext:_0x113a26}=await _0xf17e5[_0x4fea4f(-0x3b4,-0x266,-0x204,-0x18f)](fromBuffer,_0x1cf34f)||_0x4af22e[_0x4fea4f(-0x1b,-0x173,-0x2b6,-0x1cd)];function _0x175088(_0x23ba6d,_0x4543a9,_0x23c8aa,_0x511841){return _0x42ed2f(_0x23ba6d-0x28,_0x511841,_0x23c8aa- -0x454,_0x511841-0x174);}var _0x27567c=new FormData();function _0x4fea4f(_0x2802f5,_0x4b1792,_0x9eff6b,_0x2a2a3d){return _0x42ed2f(_0x2802f5-0x6e,_0x9eff6b,_0x2a2a3d- -0x6d3,_0x2a2a3d-0x5);}return _0x27567c[_0x175088(0x11a,0x50a,0x2f7,0x519)](_0x4fea4f(0x37f,0x2fc,0x2d0,0x175),_0x1cf34f,_0xf17e5[_0x175088(0x45c,0x13f,0x368,0x564)]+_0x113a26),jsonnya=await _0xf17e5[_0x175088(0x40c,0x395,0x269,0x25f)](fetch,_0xf17e5[_0x175088(0x2d6,0x4eb,0x3c1,0x504)],{'method':_0xf17e5['OpMMw'],'body':_0x27567c})[_0x4fea4f(-0xc2,0x327,-0x31,0x14e)](_0x3c271c=>_0x3c271c[_0x175088(0x16,0x1d8,0x140,-0xb3)]())[_0x4fea4f(0x254,0x32c,0x121,0x14e)](_0x367df7=>{return _0x367df7;})[_0x4fea4f(0x1ea,-0x40,0x78,0xe0)](_0x921019=>{function _0x4167a9(_0x53870a,_0x5d1ee9,_0x5ceb25,_0x164b85){return _0x4fea4f(_0x53870a-0x6f,_0x5d1ee9-0x16a,_0x5ceb25,_0x53870a-0x468);}function _0x12ed51(_0x8a765a,_0x1a811e,_0x5d8b15,_0x3ced39){return _0x175088(_0x8a765a-0x1e2,_0x1a811e-0x1e1,_0x1a811e-0x1d1,_0x5d8b15);}if(_0xf17e5[_0x4167a9(0x27f,0x2ae,0x31c,0x170)](_0xf17e5['RtEIz'],_0xf17e5[_0x12ed51(0xf3,0x2c5,0x2af,0x28c)]))return _0x921019;else{const _0xa1c823={};_0xa1c823['quoted']=_0x15fd9b,_0x7f08c8[_0x4167a9(0x335,0x4b0,0x38f,0x305)+'e'](_0x2c41e2['chat'],{'video':_0x12bb11,'mentions':_0x4e6927[_0x12ed51(0xbd,0x1e2,0xd,0x231)](_0x391824=>_0x391824['id'])},_0xa1c823);}}),jsonnya;}let anu=await floNime(media);var obj_add={'key':text,'url':util['format'](anu[_0x185cf8(0x438,0x362,0x57c,0x563)][_0x42ed2f(0x6db,0x6d5,0x514,0x3a5)]),'type':_0x185cf8(0x4c0,0x64c,0x81e,0x661)};db[_0x185cf8(0x27c,0x230,0x2fa,0x3f6)][_0x42ed2f(0x7df,0x58e,0x5bd,0x7d3)]['push'](obj_add);const _0x4bbc1f={};_0x4bbc1f[_0x185cf8(0x717,0x63c,0x507,0x715)+'t']=_0x42ed2f(0x4c0,0x54f,0x537,0x5c5)+_0x42ed2f(0x59e,0x5a7,0x6ed,0x7c4);const _0x23e760={};_0x23e760[_0x42ed2f(0x909,0x563,0x736,0x57b)]=_0x185cf8(0x4f2,0x2fb,0x360,0x417),_0x23e760[_0x42ed2f(0x7aa,0x906,0x858,0x757)]=_0x4bbc1f,_0x23e760[_0x42ed2f(0x868,0x7d8,0x892,0x7db)]=0x1;const _0x34a783={};_0x34a783[_0x185cf8(0x341,0x393,0x4ac,0x2c7)]=fgif,alpha[_0x42ed2f(0x636,0x357,0x4b6,0x456)+_0x185cf8(0x580,0x3a4,0x5be,0x226)](from,lang[_0x185cf8(0x5e2,0x42f,0x2be,0x3ba)](text,_0x42ed2f(0x58a,0x60a,0x79d,0x685),_0x42ed2f(0x3df,0x499,0x538,0x471),prefix,command),'©\x20'+ownername,[_0x23e760],_0x34a783);break;}case _0x42ed2f(0x308,0x331,0x538,0x76d):case _0x42ed2f(0x872,0x79e,0x883,0x9ac):{bg=[],bdd=db[_0x42ed2f(0x311,0x449,0x46d,0x2b2)][_0x185cf8(0x33f,0x380,0x385,0x42e)],teks=_0x42ed2f(0x438,0x44c,0x61c,0x46c)+_0x42ed2f(0x708,0xa3d,0x869,0x8f8)+'\x0a';for(let x of bdd){x[_0x185cf8(0x78b,0x655,0x86b,0x554)]===_0x42ed2f(0x6fb,0x948,0x889,0x699)?(teks+='-\x20'+x[_0x42ed2f(0x4b8,0x671,0x659,0x56b)]+'\x0a',bg[_0x42ed2f(0x996,0x6e3,0x7d5,0x943)](x[_0x185cf8(0x520,0x41c,0x3b5,0x1f3)])):reply(lang[_0x42ed2f(0x4bb,0x645,0x524,0x4d6)]());}teks+=_0x185cf8(0x6a5,0x5e0,0x436,0x674)+bg[_0x185cf8(0x1b9,0x30a,0x527,0x1f8)]+'*\x0a\x0a'+lang[_0x185cf8(0x2ae,0x352,0x507,0x55a)]('vn'),reply(teks);}break;case'facebookhd':case'fbhd':case _0x42ed2f(0x514,0x447,0x53b,0x619):case'fbsd':case _0x42ed2f(0x441,0x3b5,0x43c,0x2ad):case'fb':case _0x42ed2f(0x88e,0x497,0x668,0x61f):case _0x42ed2f(0x404,0x4e9,0x611,0x4ac):{if(!q)return reply(lang[_0x185cf8(0x43e,0x4b6,0x4e3,0x534)+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text[_0x42ed2f(0x3ee,0x608,0x59b,0x4e4)](_0x42ed2f(0x350,0x43b,0x530,0x607)+'om')&&!text[_0x185cf8(0x157,0x35e,0x572,0x3a2)]('fb.watch'))return reply(lang['wrongForma'+'t'](prefix));await reply(lang['wait']());const {savefrom}=require('@bochiltea'+_0x42ed2f(0x4e2,0x6f2,0x4bf,0x445));savefrom(text)[_0x185cf8(0x75e,0x5e4,0x7f9,0x49a)](async _0x4c98fd=>{function _0x4c4fe8(_0x17038d,_0xd60fb0,_0x15cc0e,_0x375242){return _0x185cf8(_0x17038d-0xf3,_0xd60fb0- -0x508,_0x15cc0e-0x1c9,_0x17038d);}const _0x1fb13b={'yKcKy':function(_0x53d0af,_0xd0b573){return _0x53d0af(_0xd0b573);},'efXqz':function(_0x53005d,_0x2758c8){return _0x53005d>_0x2758c8;},'PuEKI':function(_0x3c63ba,_0x54c6fb){return _0x3c63ba!==_0x54c6fb;},'inpAz':_0x5145d1(-0x11,0xc,0x1c8,0x4e),'vHmpw':'Qpibg','IUxQR':_0x4c4fe8(0x157,0x131,-0xda,0x19c)};function _0x5145d1(_0x59fb62,_0x377449,_0x1fca03,_0x36d6c4){return _0x42ed2f(_0x59fb62-0x58,_0x36d6c4,_0x377449- -0x75c,_0x36d6c4-0x195);}_0x1fb13b['efXqz'](_0x4c98fd['meta'][_0x5145d1(0x222,0x132,0x100,0x169)][_0x5145d1(-0x468,-0x250,-0x2a3,-0x410)](':',''),-0x11c3*-0x1+0xf8*-0x1f+0xd53)?_0x1fb13b['PuEKI'](_0x1fb13b[_0x5145d1(-0x23a,-0x266,-0x3a9,-0x11a)],_0x1fb13b['vHmpw'])?alpha[_0x4c4fe8(-0x209,-0x125,-0x165,-0x12a)](m['chat'],_0x4c98fd[_0x5145d1(-0x3aa,-0x248,-0x35b,-0x3b1)][-0x2429*-0x1+0x1*0xecc+0xa31*-0x5][_0x4c4fe8(-0x467,-0x231,-0x223,-0x1bd)],![],lang['ok'](),m,{}):(_0x1e62f6[_0x4c4fe8(-0x14,-0x76,-0x1f5,-0x1ad)]=_0x177413,_0x2533bb[_0x4c4fe8(-0x286,-0xdb,0x47,-0x19f)]=!![],_0x160f4d[_0x4c4fe8(-0x29,0x86,-0xe8,0x1a3)]=_0x4c4fe8(-0x136,0xbe,0x1be,0x257)+'legra.ph'+_0x2ae7cd[-0x1*0x22f9+0x1cb1+-0xc*-0x86][_0x5145d1(-0x29,-0x239,-0x3b7,-0x29b)],_0x1fb13b[_0x5145d1(0x2c,0x121,0x271,0xcc)](_0x5b9f23,_0x242f8b[_0x4c4fe8(-0x17a,-0xb7,-0xb3,-0x15)](_0xfb5eba))):_0x5145d1(0x2e2,0x118,0x1d2,-0x65)!==_0x1fb13b['IUxQR']?alpha['sendVideo'](m['chat'],_0x4c98fd['url'][0x150+0x2*-0x71f+-0x12d*-0xb][_0x4c4fe8(-0x387,-0x231,-0x3ab,-0x207)],![],lang['ok'](),m,{}):_0x26f1f9[_0x5145d1(-0x5a,-0x1e4,-0x25,-0x1bc)](_0x2b1478['chat'],_0x13b68e[_0x4c4fe8(-0x288,-0x231,-0x33,-0x1ba)][-0x3ae+-0x15*0x12a+-0x13*-0x17b][_0x4c4fe8(-0x3e9,-0x231,-0x410,-0x1f7)],_0x3d89ff,![],{});})[_0x185cf8(0x598,0x576,0x4ee,0x630)](_0x258127=>{const _0x429460={'hrUhJ':function(_0x5a8f96,_0x5d38c0){return _0x5a8f96(_0x5d38c0);}};function _0x333662(_0x930b0b,_0x5149ba,_0x4a6a60,_0x5a3b2e){return _0x185cf8(_0x930b0b-0xbb,_0x4a6a60- -0x40b,_0x4a6a60-0x1c3,_0x930b0b);}_0x429460[_0x333662(0x153,0x155,0x191,0x151)](reply,lang['err']());});}break;case _0x185cf8(0x4ae,0x473,0x341,0x5bd)+_0x42ed2f(0x9d5,0x7d0,0x85f,0xa7a):case _0x42ed2f(0x809,0x727,0x6c3,0x4db):{if(!q)return reply(lang[_0x42ed2f(0x6eb,0x7f0,0x6f3,0x57a)+'t'](prefix));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text[_0x185cf8(0x210,0x35e,0x502,0x479)](_0x42ed2f(0x6d4,0x634,0x530,0x629)+'om')&&!text[_0x185cf8(0x3b9,0x35e,0x1a0,0x19e)]('fb.watch'))return reply(lang['wrongForma'+'t'](prefix));await reply(lang[_0x42ed2f(0x55c,0x60e,0x512,0x61d)]());const {savefrom}=require(_0x42ed2f(0x7e8,0x8d1,0x72e,0x88a)+_0x42ed2f(0x480,0x4a9,0x4bf,0x5ea));savefrom(text)['then'](async _0x1e65a6=>{function _0x1f2570(_0x10091c,_0x536b61,_0x274330,_0x48b2a2){return _0x185cf8(_0x10091c-0x118,_0x48b2a2-0x161,_0x274330-0xd5,_0x10091c);}function _0x12a534(_0x505d80,_0x11b9e7,_0x53bb60,_0x37b7f2){return _0x185cf8(_0x505d80-0x3d,_0x37b7f2- -0x24c,_0x53bb60-0x130,_0x505d80);}alpha[_0x12a534(0x220,0x2e,0x12d,0xef)](m[_0x12a534(0x2a1,-0xf1,0x194,0xb5)],_0x1e65a6[_0x1f2570(0x5c3,0x659,0x2cc,0x438)][-0x1*-0x1937+-0x13df*0x1+-0x1*0x557][_0x12a534(0x21f,-0x8e,0x164,0x8b)],m,![],{});})[_0x42ed2f(0x713,0x735,0x7b3,0x758)](_0x3b281e=>{const _0x27b5e8={'MRIjV':function(_0x5bb437,_0x21c828){return _0x5bb437(_0x21c828);}};function _0x271c11(_0x15b4bb,_0x4e110d,_0x51764e,_0x19c25f){return _0x42ed2f(_0x15b4bb-0x75,_0x4e110d,_0x15b4bb- -0x76f,_0x19c25f-0xc6);}function _0x2ce5ab(_0x2e4176,_0x1d3fc1,_0x5b073b,_0x4524ff){return _0x185cf8(_0x2e4176-0x1b0,_0x1d3fc1- -0x361,_0x5b073b-0x9,_0x2e4176);}_0x27b5e8[_0x271c11(-0xee,0xe1,-0x11f,-0x2ab)](reply,lang[_0x2ce5ab(0x12b,0x27,0x16,-0x5e)]());});}break;case _0x185cf8(0x31e,0x2ca,0x451,0x2ae):case _0x42ed2f(0x7c1,0x666,0x87f,0x68c):case _0x185cf8(0x590,0x490,0x379,0x4a5):{if(!q)return reply(lang['wrongForma'+'t'](prefix));if(!isUrl(args[0x26fa+-0x140e+-0x12ec])&&!args[0x351*0xb+0x2287+-0x4702][_0x185cf8(0x1dc,0x35e,0x1c6,0x54c)](_0x185cf8(0x2bb,0x2e8,0x225,0x452)))return reply(lang[_0x42ed2f(0x6a2,0xa8d,0x885,0x727)]());const {tiktokdl,tiktokdlv3}=require(_0x185cf8(0x5a5,0x4f1,0x42d,0x404)+_0x185cf8(0x370,0x282,0x385,0x28a));reply(lang['wait']());try{tiktokdl(text)[_0x42ed2f(0x7c0,0x68d,0x821,0x620)](_0x14de68=>{const _0x54ff26={};_0x54ff26[_0x5aa2e6(0x540,0x513,0x40d,0x710)]=_0x18aa0c(-0xb8,0xde,0x164,0x245);function _0x5aa2e6(_0x2eb55f,_0x267a28,_0x2625ed,_0x13e2d3){return _0x185cf8(_0x2eb55f-0x44,_0x267a28- -0x5e,_0x2625ed-0x99,_0x2eb55f);}const _0x26af9e=_0x54ff26,{no_watermark:_0x5f5b20,no_watermark2:_0x54e268,no_watermark_raw:_0x48a508}=_0x14de68['video'],_0x53c54b={};_0x53c54b['url']=_0x54e268;function _0x18aa0c(_0x39c49e,_0x1c60e8,_0x44ab2a,_0x96fa2a){return _0x42ed2f(_0x39c49e-0xc4,_0x39c49e,_0x44ab2a- -0x3f0,_0x96fa2a-0x1a7);}alpha[_0x5aa2e6(0x38c,0x305,0x3a9,0x483)+'e'](m['chat'],{'video':_0x53c54b,'caption':lang['ok'](),'mimetype':_0x26af9e[_0x5aa2e6(0x41e,0x513,0x675,0x6f2)]},{'quoted':m});});}catch{tiktokdlv3(text)[_0x185cf8(0x637,0x5e4,0x5a4,0x4ce)](_0x468cae=>{const _0x57bde9={};function _0x2ebb05(_0x3a8726,_0x93bd08,_0x3b6647,_0x4dfd6a){return _0x42ed2f(_0x3a8726-0x1ce,_0x93bd08,_0x3a8726- -0x271,_0x4dfd6a-0x117);}_0x57bde9[_0x5d5281(0x3e6,0x7cf,0x5f7,0x586)]='video/mp4';const _0x353a5e=_0x57bde9,{no_watermark:_0x483e32,no_watermark2:_0x3b5338}=_0x468cae[_0x2ebb05(0x5ec,0x7ec,0x6b6,0x513)],_0x192166={};_0x192166[_0x5d5281(0x4e3,0x3b2,0x309,0x493)]=_0x3b5338;function _0x5d5281(_0x26834c,_0x182867,_0x2f625e,_0x428fb0){return _0x42ed2f(_0x26834c-0x7d,_0x428fb0,_0x2f625e- -0x20b,_0x428fb0-0x1d9);}alpha[_0x5d5281(0x599,0x181,0x395,0x447)+'e'](m[_0x2ebb05(0x2cd,0x366,0x30b,0x491)],{'video':_0x192166,'caption':lang['ok'](),'mimetype':_0x353a5e[_0x2ebb05(0x591,0x64c,0x385,0x508)]},{'quoted':m});})[_0x42ed2f(0x79b,0x981,0x7b3,0x5ac)](_0x1d92e5=>{const _0x5eb290={'DjmzP':function(_0x1a55b6,_0x2ca415){return _0x1a55b6(_0x2ca415);}};function _0x13d06f(_0xf5d590,_0x3a2cec,_0x5aefe8,_0x34755f){return _0x185cf8(_0xf5d590-0x1e7,_0x3a2cec-0x10e,_0x5aefe8-0xf8,_0xf5d590);}function _0x14d9a0(_0xb03761,_0x4f5d0d,_0x224cdb,_0x1fddec){return _0x185cf8(_0xb03761-0x142,_0x4f5d0d- -0x231,_0x224cdb-0x116,_0xb03761);}_0x5eb290[_0x13d06f(0x650,0x640,0x80e,0x516)](reply,lang[_0x14d9a0(0xa5,0x157,-0xd7,0x206)]());});}break;}case _0x42ed2f(0x424,0x5c0,0x500,0x4a6)+'o':{if(!q)return reply(lang[_0x42ed2f(0x828,0x753,0x6f3,0x827)+'t'](prefix));if(!isUrl(args[0x220f+-0xb*0x1f3+0x5f*-0x22])&&!args[-0x249b+-0x2136+0x45d1][_0x42ed2f(0x5e4,0x7ae,0x59b,0x5e3)](_0x185cf8(0x1a8,0x2e8,0x104,0x203)))return reply(lang[_0x185cf8(0x4f3,0x648,0x82c,0x615)]());reply(lang['wait']());const {tiktokdl,tiktokdlv3}=require(_0x42ed2f(0x816,0x8a4,0x72e,0x6b0)+'m/scraper');try{tiktokdl(text)[_0x42ed2f(0x9fd,0x95f,0x821,0x85b)](_0x21e7a6=>{const _0x57a4dd={};_0x57a4dd[_0x331980(0x2fc,0x297,0x1ca,0xbb)]='audio/mpeg';const _0x3be81a=_0x57a4dd,{no_watermark:_0x240710,no_watermark2:_0x56519b,no_watermark_raw:_0x32fa8b}=_0x21e7a6[_0xa1b9d3(0x4f,0x2f2,0x6b,0x147)],_0xd360b5={};function _0x331980(_0x14125f,_0x1a0ef3,_0x4102ea,_0x1d4985){return _0x42ed2f(_0x14125f-0x6f,_0x14125f,_0x1a0ef3- -0x5a7,_0x1d4985-0x133);}_0xd360b5[_0x331980(-0x25f,-0x93,-0x29a,-0x165)]=_0x240710;function _0xa1b9d3(_0x201fcc,_0x4c5e7b,_0x2d60e6,_0x707868){return _0x185cf8(_0x201fcc-0xa3,_0x707868- -0x4d9,_0x2d60e6-0x1bd,_0x2d60e6);}const _0x20de9e={};_0x20de9e['audio']=_0xd360b5,_0x20de9e[_0xa1b9d3(-0x2ea,-0x2a7,-0x497,-0x29b)]=_0x3be81a[_0x331980(0x130,0x297,0x2f1,0x211)],alpha[_0xa1b9d3(-0x31e,-0x2d5,-0x293,-0x176)+'e'](m[_0xa1b9d3(-0x2df,-0x2d4,-0x78,-0x1d8)],_0x20de9e,{'quoted':m});});}catch{tiktokdlv3(text)[_0x42ed2f(0x94f,0x5f0,0x821,0x73b)](_0x3a4e3e=>{const _0x480ce7={};_0x480ce7[_0x1b15f9(0x292,0x204,0x6a,0x3e2)]=_0x507508(0x219,0x25a,0x2c5,0x320);const _0x521ebe=_0x480ce7,{no_watermark:_0x1550b7,no_watermark2:_0x54c07c}=_0x3a4e3e[_0x1b15f9(0x584,0x4cf,0x6ad,0x54a)],_0x1707b6={};function _0x507508(_0xa6617c,_0x239fca,_0x4823f4,_0x19491b){return _0x42ed2f(_0xa6617c-0x13a,_0xa6617c,_0x4823f4- -0x248,_0x19491b-0xb6);}_0x1707b6['url']=_0x1550b7;const _0x1f17a9={};_0x1f17a9['audio']=_0x1707b6,_0x1f17a9['mimetype']=_0x521ebe['ylwDe'];function _0x1b15f9(_0x19c799,_0xcad9fd,_0x2c1168,_0x16aaa1){return _0x42ed2f(_0x19c799-0x84,_0xcad9fd,_0x19c799- -0x2d9,_0x16aaa1-0x9b);}alpha[_0x507508(0x243,0x4cf,0x358,0x37d)+'e'](m[_0x1b15f9(0x265,0x481,0x2b5,0x38e)],_0x1f17a9,{'quoted':m});})['catch'](_0x5c5fe9=>{function _0x540321(_0x59b625,_0x51c07e,_0x105811,_0x3a34b6){return _0x42ed2f(_0x59b625-0xa6,_0x59b625,_0x51c07e- -0x20,_0x3a34b6-0x195);}reply(lang[_0x540321(0x764,0x5a5,0x57e,0x582)]());});}break;}case _0x185cf8(0x6e7,0x525,0x54c,0x369):case'instastory':case _0x185cf8(0x49f,0x3c1,0x240,0x384)+_0x42ed2f(0x4e7,0x519,0x6ca,0x6c4):if(!q)return reply(lang['wrongForma'+'t'](prefix));pepe=''+q,hx[_0x185cf8(0x59a,0x525,0x727,0x5dc)](pepe)[_0x42ed2f(0xa3c,0x8dc,0x821,0x92f)](async _0x4f8709=>{const _0xf646a1={'hvejg':_0x24ebe4(0x94,0x358,0x193,0x2ba),'CZPwD':function(_0x2b10e7,_0x22bffa){return _0x2b10e7(_0x22bffa);},'ocSar':'Rest\x20Api\x27s','ubWEe':'OWNER','OvswO':_0x24ebe4(0x3c2,0x2cc,0x43e,0x337),'wyffS':_0x216481(0x751,0x671,0x740,0x877),'zCyWo':'xNGGO','ZQUuV':_0x216481(0x891,0x731,0x8be,0x908),'DoNnd':_0x24ebe4(0x500,0x421,0x4b7,0x30b),'XSpVm':function(_0x39c16a,_0x31d4c4){return _0x39c16a(_0x31d4c4);},'fcfky':function(_0x4d8cef,_0x5e8858){return _0x4d8cef===_0x5e8858;},'JflUd':'dEugl','iMYzT':function(_0x26d243,_0x231750){return _0x26d243(_0x231750);}};let _0x438be9=await _0xf646a1[_0x24ebe4(0x254,0x79,0xd6,0x65)](getBuffer,_0x4f8709[_0x216481(0x75a,0x72f,0x90d,0x6d8)][_0x24ebe4(0x314,0x553,0x3ec,0x526)+_0x216481(0x1e7,0x410,0x4de,0x40c)]);const _0x2e7d35={};_0x2e7d35['displayTex'+'t']=_0xf646a1[_0x24ebe4(0x6e4,0x2e6,0x4fd,0x4a6)],_0x2e7d35[_0x24ebe4(0x3b0,0x394,0x19a,0x1f9)]=''+myweb;function _0x24ebe4(_0x302797,_0x2d811e,_0x5e17d1,_0x236b91){return _0x42ed2f(_0x302797-0x39,_0x302797,_0x5e17d1- -0x37a,_0x236b91-0xa2);}const _0xf256bd={};_0xf256bd[_0x24ebe4(0x5fa,0x48a,0x522,0x755)]=_0x2e7d35;const _0x405cf9={};_0x405cf9[_0x24ebe4(0x30a,0x30d,0x4ff,0x32f)+'t']=_0x216481(0x877,0x682,0x89e,0x6a1),_0x405cf9[_0x216481(0x547,0x472,0x570,0x381)]=''+github;const _0x209957={};_0x209957[_0x216481(0x861,0x7fa,0x7c5,0x6b2)]=_0x405cf9;const _0x2acd6a={};_0x2acd6a[_0x216481(0x7b1,0x7d7,0x5ec,0x69b)+'t']=_0xf646a1[_0x216481(0x76e,0x63b,0x820,0x7e8)],_0x2acd6a['id']=_0x24ebe4(0x3c5,0x3db,0x44b,0x2da);const _0x5ca869={};_0x5ca869['quickReply'+'Button']=_0x2acd6a;const _0xea6e13={};_0xea6e13[_0x216481(0x77b,0x7d7,0x6a7,0x932)+'t']=_0xf646a1['OvswO'];function _0x216481(_0x5df37a,_0x4a1887,_0x17b7fd,_0x2e28a1){return _0x42ed2f(_0x5df37a-0xdf,_0x5df37a,_0x4a1887- -0xa2,_0x2e28a1-0x13f);}_0xea6e13['id']=_0x216481(0x996,0x7d3,0x90a,0x5f7);const _0x241dfb={};_0x241dfb[_0x216481(0x62b,0x566,0x67b,0x791)+'Button']=_0xea6e13;const _0x14f341={};_0x14f341['displayTex'+'t']=_0xf646a1['wyffS'],_0x14f341['id']=_0x24ebe4(0x4a5,0x2d4,0x3dc,0x2ab);const _0x4bc61c={};_0x4bc61c[_0x216481(0x525,0x566,0x569,0x6f6)+_0x24ebe4(0x26a,0x33f,0x1b5,-0x1d)]=_0x14f341;var _0x1b8ccb=[_0xf256bd,_0x209957,_0x5ca869,_0x241dfb,_0x4bc61c];await alpha[_0x216481(0x963,0x7f7,0x674,0x7f1)+'c'](from,_0x216481(0x962,0x735,0x5d0,0x5a7)+_0x216481(0x2f1,0x51c,0x405,0x6c5)+_0x24ebe4(0x235,0x2db,0x3f8,0x557)+enter+enter+_0x24ebe4(0x4e2,0x199,0x318,0x2b0)+_0x4f8709['user']['id']+enter+('📛\x20*Usernam'+'e\x20:*\x20')+_0x4f8709[_0x24ebe4(0x418,0x3da,0x457,0x467)][_0x216481(0x38b,0x443,0x289,0x5a0)]+enter+'🍁\x20*Bio*\x20:\x20'+_0x4f8709[_0x24ebe4(0x4f2,0x616,0x457,0x453)]['biography']+enter+(_0x216481(0x604,0x44d,0x23a,0x4bc)+_0x216481(0x4d9,0x42a,0x3a3,0x3bf))+_0x4f8709[_0x24ebe4(0x479,0x43d,0x457,0x670)][_0x216481(0x418,0x4e4,0x462,0x70c)]+enter+(_0x24ebe4(0x206,0x270,0x1dc,0x168)+_0x24ebe4(0x514,0x5c5,0x4a4,0x3f1))+_0x4f8709[_0x216481(0x8c7,0x72f,0x81f,0x587)][_0x24ebe4(0xec,0x1e,0x19f,0x1a4)]+enter+(_0x216481(0x684,0x488,0x6ac,0x423)+_0x24ebe4(0x43a,0x5fe,0x4ea,0x2f2))+_0x4f8709[_0x216481(0x864,0x72f,0x672,0x758)][_0x24ebe4(-0x28,0x185,0xfd,0x19d)]+enter+(_0x216481(0x5fd,0x3f0,0x2fa,0x34a)+_0x216481(0x6ff,0x636,0x44c,0x702)+_0x216481(0x4f3,0x527,0x44b,0x325)+'om/')+_0x4f8709[_0x216481(0x925,0x72f,0x5d8,0x8bb)][_0x216481(0x63d,0x443,0x3ae,0x381)]+enter+(_0x24ebe4(0x17a,0x397,0x18e,-0x6e)+'*\x20')+_0x4f8709['medias'][_0x24ebe4(0x3d0,0x27d,0x1cd,-0x7)]+'\x20Media'+enter+enter+(_0x24ebe4(0x8e,0x37b,0x25a,0x98)+_0x216481(0x62a,0x687,0x5c6,0x7e7)+_0x216481(0x87b,0x751,0x794,0x5f8)+'an\x20dikirim'+'_'),'©\x20'+ownername,_0x438be9,_0x1b8ccb);for(let _0x126eef of _0x4f8709[_0x216481(0x724,0x7a4,0x795,0x56e)]){if(_0xf646a1[_0x216481(0x622,0x5ef,0x565,0x4d2)]!=='aTHxP'){if(_0x126eef[_0x24ebe4(0x2c7,0x1b9,0x19a,-0xa)][_0x216481(0x2db,0x4f9,0x349,0x58a)](_0xf646a1['ZQUuV'])){if(_0xf646a1[_0x216481(0x50c,0x6f6,0x78d,0x716)]===_0xf646a1[_0x24ebe4(0x2e6,0x532,0x41e,0x385)]){let _0x44f760=await _0xf646a1['XSpVm'](getBuffer,_0x126eef[_0x216481(0x4a7,0x472,0x498,0x5e0)]);const _0x86218a={};_0x86218a[_0x24ebe4(0x563,0x70a,0x4e3,0x6c7)]=_0x44f760,_0x86218a[_0x24ebe4(0x455,0x24d,0x407,0x4b3)]='Instagram\x20'+'•\x20'+_0x126eef[_0x216481(0x9db,0x7f0,0x5e7,0x6d7)];const _0x25f7b7={};_0x25f7b7[_0x216481(0x647,0x52e,0x6f7,0x32a)]=m,alpha['sendMessag'+'e'](from,_0x86218a,_0x25f7b7);}else{const _0x569525={};_0x569525['title']=_0x513777[_0x16e6c5],_0x569525['info']=_0x2ce512[_0x4c9b],_0x569525['link']=_0x1e317f[_0x4d77a],_0x24558a[_0x216481(0x777,0x733,0x61a,0x507)](_0x569525);}}else{if(_0xf646a1[_0x216481(0x564,0x60d,0x813,0x5f8)](_0xf646a1['JflUd'],_0x216481(0x341,0x42e,0x519,0x401)))_0x478c03['sendText'](_0x306d10['chat'],''+_0x289ec1[_0x24ebe4(0x341,0x6af,0x4af,0x59f)],_0x4c65b1);else{let _0x2463f9=await _0xf646a1[_0x24ebe4(0x33c,-0x2f,0x139,-0x89)](getBuffer,_0x126eef['url']);const _0x486537={};_0x486537[_0x216481(0x4ef,0x406,0x45c,0x370)]=_0x2463f9,_0x486537['caption']=_0x24ebe4(0x2c6,0x347,0x274,0x394)+'•\x20'+_0x126eef[_0x216481(0x960,0x7f0,0x8ee,0x822)];const _0x4da34d={};_0x4da34d[_0x24ebe4(0x228,0x415,0x256,0x38a)]=m,alpha['sendMessag'+'e'](from,_0x486537,_0x4da34d);}}}else{const _0x4cabdc={};_0x4cabdc[_0x24ebe4(0x3c5,0x5d,0x19a,0x1d5)]=_0x23ab96[_0x7bba57][_0x24ebe4(0x399,0x598,0x467,0x639)];const _0x405246={};_0x405246[_0x24ebe4(0x41b,0x340,0x50f,0x6a3)]=_0x4cabdc,_0x405246['mimetype']=_0xf646a1['hvejg'];const _0x370d90={};_0x370d90[_0x216481(0x65e,0x52e,0x559,0x307)]=_0x22f8ce,_0x27e246[_0x24ebe4(0x3c7,0x15e,0x226,0x271)+'e'](_0x450853,_0x405246,_0x370d90);}}})[_0x185cf8(0x688,0x576,0x356,0x780)](_0x4917bf=>{function _0x36811b(_0xa7c1b1,_0x565a3e,_0x3355a7,_0x39e359){return _0x42ed2f(_0xa7c1b1-0x1b0,_0x39e359,_0x565a3e- -0x742,_0x39e359-0x65);}reply(lang[_0x36811b(-0xd9,-0x17d,0x71,-0x2a3)]());});break;case'ig':case _0x185cf8(0x379,0x20e,0x3dc,0x43a):case _0x185cf8(0x396,0x46b,0x3c4,0x3d3):case'instaphoto':case _0x42ed2f(0x6b0,0x34e,0x48d,0x38a):case'igfoto':case _0x42ed2f(0x3fc,0x684,0x633,0x427):case _0x42ed2f(0x530,0x235,0x430,0x5a9):case _0x185cf8(0x44d,0x59f,0x753,0x606):case _0x42ed2f(0x48d,0x84b,0x6a2,0x769):case _0x185cf8(0x171,0x205,0x3ea,0x1ae):case _0x185cf8(0x3f1,0x23b,0x1a1,0x61):case _0x42ed2f(0x74e,0x637,0x584,0x44e):case _0x42ed2f(0x3fb,0x715,0x60a,0x4c6):if(!q)return reply(lang[_0x42ed2f(0x6b5,0x52e,0x6f3,0x745)+'t'](prefix));await reply(lang[_0x185cf8(0x2b5,0x2d5,0x1f1,0xf6)]());var urlnya=''+q;hx[_0x185cf8(0x71,0x20e,0x16,0x33f)](urlnya)[_0x185cf8(0x647,0x5e4,0x6cd,0x604)](async _0x5e1e3f=>{const _0x1dc37e={'TktnA':function(_0x5e57e1,_0x28a5c0){return _0x5e57e1(_0x28a5c0);},'DpIzC':_0x10a45a(0x70b,0x580,0x6ee,0x608),'osApw':'mp4','TszOq':function(_0x5903e8,_0x39e218){return _0x5903e8===_0x39e218;},'YPnVd':_0x10a45a(0x931,0x7d7,0x7e4,0xa02),'QrADM':'video/mp4'};function _0x10a45a(_0x56025f,_0x4c9eee,_0x2c7707,_0x18e2e6){return _0x185cf8(_0x56025f-0x3d,_0x4c9eee-0x20c,_0x2c7707-0x5b,_0x56025f);}const _0x31276b={};_0x31276b[_0x10a45a(0x5ad,0x4e3,0x5a6,0x65e)]=_0x5e1e3f[_0x1329f5(0x7dc,0x5f2,0x609,0x5bc)][_0x1329f5(0x384,0x4c6,0x59e,0x62d)+_0x1329f5(0x10f,0x130,0x2ea,0x466)];const _0x27454d={};_0x27454d[_0x1329f5(0x208,0x22a,0x2e0,0x304)]=_0x31276b,_0x27454d[_0x10a45a(0x8b0,0x750,0x5e9,0x70f)]=_0x10a45a(0x7e7,0x701,0x524,0x612)+_0x1329f5(0x12e,0x41b,0x2ff,0x3ba)+_0x1329f5(0x522,0x54b,0x530,0x4da)+enter+enter+'🆔\x20*ID\x20:*\x20'+_0x5e1e3f[_0x10a45a(0x625,0x7a0,0x6f2,0x966)]['id']+enter+(_0x10a45a(0x7ad,0x748,0x900,0x887)+_0x1329f5(0x158,0x510,0x304,0x25c))+_0x5e1e3f['user'][_0x10a45a(0x52e,0x4b4,0x6b3,0x40b)]+enter+(_0x1329f5(0x357,0x2a9,0x327,0x4d6)+_0x10a45a(0x461,0x49b,0x5f3,0x288))+_0x5e1e3f[_0x10a45a(0x82b,0x7a0,0x755,0x77e)]['fullName']+enter+(_0x10a45a(0x4a0,0x525,0x4ab,0x62a)+_0x1329f5(0x622,0x78d,0x656,0x50e))+_0x5e1e3f[_0x1329f5(0x654,0x602,0x609,0x597)][_0x10a45a(0x657,0x4e8,0x546,0x6f4)]+enter+(_0x10a45a(0x873,0x82a,0x6b2,0x9a7)+'ng\x20:*\x20')+_0x5e1e3f[_0x10a45a(0x5af,0x7a0,0x6e8,0x896)][_0x1329f5(0x276,0xa3,0x2af,0x218)]+enter+(_0x1329f5(0x2de,0x48e,0x2ca,0x218)+_0x10a45a(0x71c,0x6a7,0x517,0x597)+_0x1329f5(0x22e,0x35f,0x401,0x281)+'om/')+_0x5e1e3f['user'][_0x10a45a(0x3fa,0x4b4,0x56a,0x38a)]+enter+('*💢\x20Total\x20:'+'*\x20')+_0x5e1e3f['medias'][_0x10a45a(0x73d,0x516,0x373,0x472)]+_0x1329f5(0x391,0x3c7,0x3cf,0x4a1)+enter+enter+(_0x10a45a(0x3e8,0x5a3,0x38b,0x79c)+_0x10a45a(0x77b,0x6f8,0x6dc,0x839)+_0x1329f5(0x6ee,0x82b,0x62b,0x858)+_0x10a45a(0x265,0x41b,0x535,0x612)+'_');function _0x1329f5(_0x7151d6,_0x5bc810,_0x3e670c,_0x305d0b){return _0x185cf8(_0x7151d6-0x178,_0x3e670c-0x75,_0x3e670c-0x22,_0x305d0b);}await alpha[_0x1329f5(0x271,0x215,0x3d8,0x422)+'e'](m[_0x10a45a(0x6f6,0x50d,0x56d,0x726)],_0x27454d,{'quoted':m});for(let _0x17b23d of _0x5e1e3f[_0x1329f5(0x660,0x594,0x67e,0x6f7)]){if(_0x1dc37e[_0x1329f5(0x250,0x42e,0x480,0x663)]===_0x1dc37e[_0x10a45a(0x670,0x617,0x3e0,0x700)]){if(_0x17b23d[_0x10a45a(0x35c,0x4e3,0x42b,0x2bb)][_0x1329f5(0x1f6,0x409,0x3d3,0x2fc)](_0x1dc37e['osApw'])){if(_0x1dc37e[_0x10a45a(0x49c,0x4f0,0x2ee,0x409)]('PUzuO',_0x1dc37e[_0x1329f5(0x28d,0x5ed,0x497,0x563)])){const _0xec8533={};_0xec8533[_0x10a45a(0x5e3,0x4e3,0x639,0x566)]=_0x17b23d[_0x10a45a(0x65f,0x4e3,0x553,0x499)];const _0x4ae609={};_0x4ae609[_0x10a45a(0x7f8,0x82c,0x724,0x933)]=_0xec8533,_0x4ae609['mimetype']=_0x1dc37e['QrADM'],alpha['sendMessag'+'e'](m[_0x10a45a(0x592,0x50d,0x6b7,0x46e)],_0x4ae609,{'quoted':m});}else _0x1dc37e[_0x10a45a(0x50b,0x723,0x8fe,0x6fe)](_0x37133e,_0x2c0f07[_0x10a45a(0x337,0x4f3,0x463,0x6a3)]());}else{const _0x1e4895={};_0x1e4895[_0x10a45a(0x310,0x4e3,0x3ae,0x4ce)]=_0x17b23d['url'];const _0x380358={};_0x380358[_0x10a45a(0x4b0,0x477,0x2a9,0x242)]=_0x1e4895,alpha[_0x10a45a(0x3a3,0x56f,0x37c,0x422)+'e'](m[_0x1329f5(0x35f,0x42c,0x376,0x5a2)],_0x380358,{'quoted':m});}}else{const _0x3e3c08={};_0x3e3c08[_0x10a45a(0x353,0x4e3,0x67c,0x4fc)]=_0x3d1d3e[_0x1329f5(0x300,0x55d,0x34c,0x510)];const _0x10ccb9={};_0x10ccb9[_0x10a45a(0x25b,0x477,0x55c,0x48e)]=_0x3e3c08;const _0x2b0ca1={};_0x2b0ca1[_0x10a45a(0x40f,0x59f,0x3fe,0x781)]=_0x2aac6f,_0x537aee[_0x10a45a(0x695,0x56f,0x671,0x509)+'e'](_0x3bbd33[_0x1329f5(0x58b,0x17d,0x376,0x293)],_0x10ccb9,_0x2b0ca1);}}})['catch'](_0x4800f7=>{function _0x44973c(_0x4646b2,_0x3ff69f,_0x1886f0,_0xcdc9e4){return _0x185cf8(_0x4646b2-0x15,_0x4646b2- -0x2e2,_0x1886f0-0x6c,_0x3ff69f);}const _0x4e34a8={'jfTku':function(_0xc1e516,_0x21cfee){return _0xc1e516(_0x21cfee);}};function _0x3a2754(_0x596da6,_0x2c22e2,_0x1a5f7a,_0x47a310){return _0x185cf8(_0x596da6-0x10d,_0x2c22e2- -0x162,_0x1a5f7a-0x1e2,_0x596da6);}_0x4e34a8[_0x44973c(0x11b,0x1d8,0xee,0x46)](reply,lang[_0x3a2754(0x399,0x226,0x56,0x2a6)]());});break;case'ytshortsmp'+'3':case _0x42ed2f(0x54e,0x612,0x5de,0x670):case'mp3':case _0x42ed2f(0x63e,0x773,0x845,0xa00):{if(!q)return reply(lang['KisahNabi'](prefix,command,_0x185cf8(0x478,0x2a2,0x227,0xd1)+_0x185cf8(0x541,0x45d,0x2b5,0x3fc)+_0x185cf8(0x6c3,0x4fa,0x6d2,0x376)));if(!isUrl(q))return reply(lang['wrongForma'+'t'](prefix));if(!text[_0x185cf8(0x225,0x35e,0x22a,0x2e5)]('youtu.be')&&!text[_0x42ed2f(0x369,0x6c1,0x59b,0x4f6)](_0x42ed2f(0x703,0x731,0x647,0x611)+'m'))return reply(lang[_0x185cf8(0x676,0x4b6,0x652,0x55d)+'t'](prefix));await reply(lang[_0x42ed2f(0x6cd,0x6c1,0x512,0x48f)]()),ytmp3=args['join']('\x20'),yta(ytmp3)['then'](async _0x1e6761=>{const _0x51cb4b={'pBhIU':function(_0x33ded5,_0x1fce83){return _0x33ded5(_0x1fce83);},'Fyjmp':function(_0xd62f51,_0x1e5e72){return _0xd62f51>=_0x1e5e72;},'HMuWt':function(_0x23b197,_0x386d39){return _0x23b197(_0x386d39);},'oVnSp':_0x298131(0x520,0x573,0x58d,0x37e),'hGCdy':_0x58e2b2(0x3d,0x193,0x15f,0x6e),'djoph':'donasi','HkomN':_0x58e2b2(-0x168,-0x216,-0x13f,-0x18f)},{dl_link:_0x325fe2,filesizeF:_0x2a391e,filesize:_0x10efb1,title:_0x5c131b,thumb:_0x4ab074}=_0x1e6761;let _0x5aab68=await _0x51cb4b[_0x58e2b2(0x9c,0x94,0x78,0x114)](getBuffer,_0x4ab074);if(_0x51cb4b['Fyjmp'](_0x51cb4b[_0x58e2b2(0xc0,0x121,0xb1,-0x4)](Number,_0x2a391e[_0x58e2b2(-0x214,-0x22c,-0x140,-0x1ac)](_0x51cb4b['oVnSp'],'')),-0x35d+-0x1*0x1d2a+0x20eb*0x1))return await alpha[_0x298131(0x493,0x396,0x2f5,0x396)+'c'](from,_0x58e2b2(-0xdd,-0x114,0xb4,0x2d0)+_0x58e2b2(0xe0,-0x5b,0x5f,-0x102)+_0x58e2b2(0x3e,0x159,0x1cc,0x285)+_0x58e2b2(-0x22d,-0x268,-0x13b,-0x1e2)+'\x20'+_0x5c131b+(_0x58e2b2(0x10c,0xb9,-0x10f,0x81)+'*\x20')+_0x2a391e+(_0x298131(0x125,0x58,-0xb7,-0xb9)+_0x298131(0x47,-0x110,-0x19a,-0xe)+_0x58e2b2(-0x36f,0xaf,-0x166,0xa8)+_0x298131(0x569,0x535,0x2b5,0x381)+_0x298131(0x276,0x1f,0xe,0x1e2))+_0x325fe2+(_0x58e2b2(0x152,-0xc2,0x16,-0x196)+_0x58e2b2(0x6f,-0x1a4,-0x183,0x20)+_0x298131(-0x1d,0xc6,0x145,0x110)+_0x298131(0xe,-0x38,0xdd,0x13b)+_0x298131(0x41,-0x38,0x3,0x23)+_0x298131(0x11e,0x180,0x384,0x327)+'_'),'©\x20'+ownername,_0x5aab68,[{'urlButton':{'displayText':'Download\x20V'+_0x298131(0x14e,0x105,-0xc,0xcf),'url':''+_0x325fe2}}]);let _0x49d179=_0x298131(0x417,0x215,0x376,0x1fd)+_0x298131(0x225,0xb8,0x374,0x1a8)+_0x58e2b2(0x3f4,0x31b,0x1cc,0x68)+'🎀\x20Title\x20:*'+'\x20'+_0x5c131b+(_0x298131(0x27,0x40,0x123,0x3a)+'*\x20')+_0x2a391e+(_0x58e2b2(-0x2a8,-0x31d,-0x202,-0x1ae)+'\x20Mp3\x0a*👍\x20Qu'+_0x58e2b2(-0x244,-0x1a,-0x166,0x48)+_0x58e2b2(0x2e3,0x9c,0x238,0x25c)+'Url\x20:*\x20')+q;function _0x58e2b2(_0x4a255d,_0x555853,_0xd8e306,_0x178aa2){return _0x42ed2f(_0x4a255d-0x1dd,_0x178aa2,_0xd8e306- -0x64c,_0x178aa2-0x19e);}const _0x5b7a32={};_0x5b7a32[_0x298131(0x38d,0x194,0x57b,0x376)+'t']=_0x58e2b2(0x75,-0x2c6,-0x1c3,-0x16b)+'e',_0x5b7a32[_0x298131(0x133,-0x120,-0x22,0x11)]=''+youtube;const _0x4d9f63={};_0x4d9f63[_0x58e2b2(0x59,0x456,0x250,0x1e8)]=_0x5b7a32;const _0x4ac8a1={};_0x4ac8a1[_0x298131(0x31d,0x579,0x4fb,0x376)+'t']=_0x51cb4b['hGCdy'],_0x4ac8a1['id']=_0x51cb4b['djoph'];const _0x52299f={};_0x52299f[_0x298131(0x288,0x86,0x27f,0x105)+_0x58e2b2(-0x16a,-0x2fa,-0x11d,-0x20e)]=_0x4ac8a1;const _0x40ac6d={};_0x40ac6d['displayTex'+'t']=_0x58e2b2(0x1e4,0x282,0xe3,0x145),_0x40ac6d['id']='owner';const _0x3ff194={};_0x3ff194[_0x298131(-0xf3,-0x128,0x318,0x105)+_0x298131(0x1ee,0xf2,-0x10a,0x2c)]=_0x40ac6d;var _0x88e4f9=[_0x4d9f63,_0x52299f,_0x3ff194];await alpha[_0x58e2b2(0x63,0xe8,0x24d,0x2bf)+'c'](from,_0x49d179,'©\x20'+ownername,_0x5aab68,_0x88e4f9);function _0x298131(_0x988378,_0x31a78a,_0x1f3b28,_0x5e6d1f){return _0x42ed2f(_0x988378-0x180,_0x1f3b28,_0x5e6d1f- -0x503,_0x5e6d1f-0xe2);}const _0x1e670c={};_0x1e670c['url']=_0x325fe2;const _0x955290={};_0x955290[_0x58e2b2(0x241,0x328,0x23d,0x38)]=_0x1e670c,_0x955290[_0x58e2b2(0x17,-0x1fb,-0x1d1,-0x2a5)]=_0x51cb4b[_0x58e2b2(-0x17,-0x135,-0x3f,-0xc)],alpha['sendMessag'+'e'](m['chat'],_0x955290,{'quoted':m});});}break;case'mediafire':{if(!q)return reply(lang[_0x42ed2f(0x7d1,0x584,0x604,0x7fc)](prefix,command,_0x185cf8(0x300,0x4a4,0x5fd,0x4c4)+_0x185cf8(0x6b2,0x50f,0x43b,0x52a)+_0x185cf8(0x29b,0x44f,0x3bd,0x41b)+'/6tknikx5f'+'3jfsh8/Alp'+_0x42ed2f(0x792,0x4f9,0x60c,0x4da)+_0x42ed2f(0x3d4,0x54b,0x456,0x646)));if(!text['includes'](_0x185cf8(0x4ad,0x2c5,0x351,0x20c)))return reply(lang[_0x42ed2f(0x60d,0x8bb,0x6f3,0x4d6)+'t'](prefix));const mf=async _0x5d0b65=>{const _0x49c306={'Kmlsi':function(_0x5ee7d8,_0x395b22){return _0x5ee7d8(_0x395b22);},'Rphnd':_0x1cffc4(0x57b,0x7f3,0x5d6,0x5d3)+_0x5106a3(0x472,0x27f,0x3b2,0x2f0),'akAwe':function(_0x2ca5a9,_0x5240c0){return _0x2ca5a9(_0x5240c0);},'gkGRY':'Download','VgcOs':_0x5106a3(0x106,0x2ba,0x33b,0x52b)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20'},_0x4ef9c4=await axios['get'](_0x5d0b65),_0x58595d=cheerio[_0x1cffc4(0x4ee,0x35d,0x735,0x592)](_0x4ef9c4[_0x5106a3(0x47f,0x463,0x2f0,0x1dc)]),_0x16edb0=[],_0x17a717=_0x49c306[_0x1cffc4(0x910,0x5f9,0x924,0x749)](_0x58595d,_0x49c306['Rphnd'])[_0x1cffc4(0x5ab,0x413,0x2cf,0x508)](_0x5106a3(0x4a1,0x388,0x2f7,0x373)),_0x3970da=_0x49c306[_0x5106a3(0x34c,0x315,0x44e,0x534)](_0x58595d,_0x49c306[_0x1cffc4(0x5d5,0x723,0x4c2,0x6b3)])[_0x1cffc4(0x659,0x69c,0x632,0x745)]()[_0x5106a3(0x175,0x4b3,0x38f,0x310)](_0x49c306[_0x5106a3(0x4c0,0x6f5,0x63a,0x457)],'')[_0x1cffc4(0x406,0x1f5,0x2bc,0x428)]('(','')[_0x1cffc4(0x3ae,0x1f7,0x5ad,0x428)](')','')[_0x1cffc4(0x35d,0x560,0x203,0x428)]('\x0a','')[_0x1cffc4(0x488,0x294,0x51c,0x428)]('\x0a','')[_0x5106a3(0x170,0x506,0x38f,0x4ce)](_0x49c306[_0x1cffc4(0x1bf,0x582,0x175,0x351)],''),_0x5bbb4f=_0x17a717[_0x1cffc4(0x6db,0x75b,0x747,0x6a6)]('/'),_0xc3d490=_0x5bbb4f[0x17be+-0x9+-0x17b0];mimep=_0xc3d490[_0x5106a3(0x483,0x3e6,0x60d,0x718)]('.'),mimee=mimep[0x9*0x41b+0xa72+-0x2f64];const _0x299b95={};_0x299b95[_0x5106a3(0x447,0x3b1,0x30f,0x500)]=_0xc3d490;function _0x5106a3(_0x22f75e,_0x19e86a,_0x168de4,_0x960083){return _0x185cf8(_0x22f75e-0x58,_0x168de4-0xc0,_0x168de4-0xf7,_0x22f75e);}function _0x1cffc4(_0x3581bb,_0x30bc55,_0x48a4a5,_0xe4a8e){return _0x42ed2f(_0x3581bb-0x58,_0x48a4a5,_0xe4a8e- -0xe4,_0xe4a8e-0x1eb);}return _0x299b95[_0x5106a3(0x6fa,0x49a,0x5df,0x5bf)]=mimee,_0x299b95[_0x5106a3(0x5b3,0x6ff,0x561,0x71a)]=_0x3970da,_0x299b95['linkk']=_0x17a717,_0x16edb0['push'](_0x299b95),_0x16edb0;};kom=q[_0x185cf8(0x328,0x54d,0x67b,0x6e1)]('?d')[-0x684+0xe1f*0x1+0x1*-0x79b],mf(''+kom)['then'](async _0x3f4016=>{const _0x690bf0={};function _0x1a6ee3(_0x4420a2,_0x2a70e1,_0x499927,_0x1ac6a3){return _0x42ed2f(_0x4420a2-0x12e,_0x499927,_0x2a70e1- -0x20e,_0x1ac6a3-0xe7);}_0x690bf0['BFxUr']=function(_0x4251bb,_0x43c829){return _0x4251bb===_0x43c829;};function _0x258a66(_0x5085e4,_0x4efe52,_0x5cc605,_0x542cb9){return _0x185cf8(_0x5085e4-0x78,_0x4efe52- -0x487,_0x5cc605-0x198,_0x542cb9);}_0x690bf0[_0x1a6ee3(0x5a3,0x408,0x476,0x475)]=function(_0x362830,_0x18d493){return _0x362830<_0x18d493;},_0x690bf0['wMzVF']=function(_0x168dd0,_0x225cd8){return _0x168dd0+_0x225cd8;},_0x690bf0[_0x258a66(0xb,0x9a,0x126,0x2c9)]=_0x1a6ee3(0x4d4,0x34c,0x2ea,0x4cc)+'Download',_0x690bf0[_0x258a66(-0x14e,-0x1ae,-0x7c,0x13)]=_0x258a66(0x1b5,0x106,0xec,0x2d4)+_0x1a6ee3(0x58f,0x3c4,0x3ac,0x242),_0x690bf0[_0x1a6ee3(0x441,0x2e9,0xcc,0x17f)]=_0x1a6ee3(0x66a,0x5c5,0x488,0x64f),_0x690bf0[_0x1a6ee3(0x90,0x255,0x25d,0x122)]=_0x258a66(-0x211,-0x31,-0x20f,-0x1dc),_0x690bf0[_0x258a66(-0x21d,-0x99,-0xb,0x13c)]='GTxvY',_0x690bf0['AGfeS']=_0x1a6ee3(0x2ca,0x346,0x573,0x3b9),_0x690bf0['MLhXu']=_0x1a6ee3(0x49f,0x2fc,0x2ef,0x3b9),_0x690bf0['FkrTX']='applicatio'+'n/';const _0x3f5d44=_0x690bf0;for(var _0x1d1aba=-0x13*-0x4b+-0x1*-0xc4f+0x2*-0x8f0;_0x3f5d44[_0x1a6ee3(0x5b0,0x408,0x3d0,0x27a)](_0x1d1aba,_0x3f4016[_0x258a66(-0x1c0,-0x17d,-0x25d,-0x1fd)]);_0x1d1aba++){let _0x4945d4=await getBuffer(_0x3f5d44[_0x1a6ee3(0x768,0x5ff,0x698,0x7db)](picak,_0x3f5d44[_0x1a6ee3(0x593,0x550,0x6e0,0x760)]));if(_0x3f4016[_0x1d1aba][_0x258a66(-0x14e,0x1a,-0x21,0x111)][_0x1a6ee3(0xf9,0x2fe,0x21a,0x2ad)]('MB','')>=0x3c8+-0x147a*-0x1+0xbef*-0x2||_0x3f4016[_0x1d1aba]['sizee'][_0x1a6ee3(0x4b9,0x2fe,0x1be,0x311)]('GB','')>=-0xf8c+-0x1a8d+-0x2*-0x150d)return await alpha[_0x1a6ee3(0x76f,0x68b,0x88a,0x523)+'c'](from,'*----「\x20Med'+_0x258a66(0x24f,0xb3,0x15,0x231)+'nload\x20」---'+_0x258a66(-0x1a,0x186,0x213,0x3ae)+_0x258a66(-0x6d,-0x15c,-0x2fa,-0x2c4)+_0x3f4016[_0x1d1aba][_0x258a66(-0x213,-0x238,-0x9f,-0x321)]+'\x0a📁\x20Type\x20:\x20'+_0x3f4016[_0x1d1aba][_0x1a6ee3(0x700,0x54e,0x76e,0x71f)]+'\x0a⚠️\x20Size\x20:\x20'+_0x3f4016[_0x1d1aba][_0x258a66(0x131,0x1a,0x214,-0x1bd)]+_0x258a66(0x47,0x3d,0x164,-0x4b)+_0x3f4016[_0x1d1aba][_0x258a66(0x1ed,0x11d,0x1bc,0x2a6)]+(_0x1a6ee3(0x6a,0x238,0x34c,0x228)+'ize\x20lebih\x20'+_0x258a66(-0x24e,-0x291,-0x3d9,-0xa2)+'\x20disajikan'+_0x1a6ee3(0x393,0x442,0x5c1,0x440)+_0x1a6ee3(0x5aa,0x388,0x391,0x3ee)),'©\x20'+ownername,_0x4945d4,[{'urlButton':{'displayText':_0x3f5d44['Gvvhi'],'url':''+_0x3f4016[_0x1d1aba]['linkk']}}]);alpha[_0x258a66(0x34c,0x1d5,0x316,-0x41)+'c'](from,'*----「\x20Med'+_0x258a66(-0xef,0xb3,-0x165,0x1b8)+_0x1a6ee3(0x723,0x5b4,0x498,0x756)+'-*\x0a\x0a📬\x20Name'+_0x1a6ee3(0x126,0x35a,0x555,0x517)+_0x3f4016[_0x1d1aba][_0x258a66(-0x25d,-0x238,-0x3b0,-0x376)]+'\x0a📁\x20Type\x20:\x20'+_0x3f4016[_0x1d1aba][_0x1a6ee3(0x71a,0x54e,0x58e,0x6eb)]+_0x1a6ee3(0x64e,0x536,0x4a1,0x401)+_0x3f4016[_0x1d1aba][_0x258a66(-0x128,0x1a,-0xa8,-0x36)]+_0x258a66(0x246,0x3d,0x259,0x23)+_0x3f4016[_0x1d1aba][_0x258a66(0x32e,0x11d,0x131,-0xca)]+('\x0a\x0a_Proses\x20'+_0x258a66(-0x417,-0x1f0,-0x16d,-0x144)+'\x20file,\x20tun'+'ggu\x20sebent'+_0x258a66(-0x236,-0x4c,-0x170,-0xf7)),'©\x20'+ownername,_0x4945d4,[{'urlButton':{'displayText':'Download\x20V'+_0x1a6ee3(0x21e,0x3c4,0x4d8,0x2a1),'url':''+_0x3f4016[_0x1d1aba][_0x258a66(0x1c8,0x11d,0x2c3,0x32f)]}}]);if(_0x3f4016[_0x1d1aba][_0x258a66(-0x8d,0x98,0x2bd,-0x4c)][_0x258a66(-0x1ac,-0x129,0xdc,-0x171)](_0x3f5d44['XqMZE'])){if(_0x3f5d44[_0x1a6ee3(0x9f,0x255,0x290,0x387)]===_0x3f5d44[_0x1a6ee3(0x567,0x41d,0x30f,0x647)]){if(_0x3f5d44['BFxUr'](_0x39e53c['id'],_0x589706[_0x258a66(-0x1b3,-0x186,0x82,0xb2)])){const _0x3ae069={};_0x3ae069[_0x258a66(-0x193,0x77,0x134,-0x195)]=_0x48089a[_0x1a6ee3(0x2bd,0x44b,0x3d3,0x58f)],_0x3ae069['rowId']=_0x5480d5['key'],_0x5d5bb0[_0x1a6ee3(0x5eb,0x5c7,0x780,0x3a6)](_0x3ae069);}}else{const _0x4adb22={};_0x4adb22['url']=_0x3f4016[_0x1d1aba][_0x1a6ee3(0x59a,0x5d3,0x41d,0x7b9)];const _0x47df7c={};_0x47df7c[_0x258a66(-0x29,0x199,0xb3,0x37d)]=_0x4adb22,_0x47df7c[_0x258a66(-0x235,-0x249,-0x69,-0x303)]=_0x3f5d44[_0x1a6ee3(0x2f4,0x239,0x1d,0x275)];const _0x401e4c={};_0x401e4c[_0x1a6ee3(0x2d6,0x3c2,0x28d,0x5a2)]=m,alpha[_0x258a66(-0x31a,-0x124,-0x54,0x3c)+'e'](from,_0x47df7c,_0x401e4c);}}else{if(_0x3f4016[_0x1d1aba][_0x1a6ee3(0x3ff,0x54e,0x3ee,0x668)][_0x1a6ee3(0x2bb,0x38d,0x446,0x4e6)](_0x3f5d44['MLhXu'])){const _0x58aa73={};_0x58aa73[_0x1a6ee3(0x232,0x306,0x2a4,0x37d)]=_0x3f4016[_0x1d1aba]['linkk'];const _0x4e0502={};_0x4e0502[_0x258a66(0x31d,0x1c5,0x3b2,0x3a8)]=_0x58aa73,_0x4e0502[_0x258a66(-0x384,-0x249,-0x16c,-0xc8)]=_0x258a66(-0x190,-0x1b7,-0x126,-0x39c);const _0x1d7012={};_0x1d7012[_0x258a66(-0x1b4,-0xf4,-0xd3,0x95)]=m,alpha[_0x1a6ee3(0x29b,0x392,0x4f5,0x20f)+'e'](from,_0x4e0502,_0x1d7012);}else{const _0x484f05={};_0x484f05[_0x258a66(-0x2ed,-0x1b0,-0x1ef,-0x32b)]=_0x3f4016[_0x1d1aba][_0x1a6ee3(0x43b,0x5d3,0x76f,0x77f)];const _0xdbd042={};_0xdbd042[_0x258a66(0x99,-0xf4,-0x1,0xd9)]=m,alpha[_0x258a66(-0x10f,-0x124,-0x2a1,-0x1bd)+'e'](from,{'document':_0x484f05,'mimetype':_0x3f5d44[_0x1a6ee3(0x63e,0x5ff,0x76e,0x510)](_0x3f5d44[_0x258a66(-0x112,-0x25b,-0x378,-0x31b)],_0x3f4016[_0x1d1aba][_0x1a6ee3(0x60f,0x54e,0x6b3,0x475)])},_0xdbd042);}}}})[_0x185cf8(0x457,0x576,0x35e,0x4b1)](_0x523759=>{const _0x5d5c06={'stxcr':function(_0x25abc8,_0x2d081c){return _0x25abc8(_0x2d081c);}};function _0x50d350(_0x55398f,_0x4de0b8,_0x289c64,_0xe9746c){return _0x42ed2f(_0x55398f-0x76,_0x4de0b8,_0x55398f- -0x687,_0xe9746c-0x33);}function _0x584aea(_0x395fc0,_0x1f7d2f,_0x5e659b,_0xade00f){return _0x185cf8(_0x395fc0-0x146,_0x5e659b- -0x32b,_0x5e659b-0x1be,_0x1f7d2f);}_0x5d5c06[_0x584aea(-0xab,-0x44,0xbc,-0x136)](reply,lang[_0x584aea(0x81,0x9f,0x5d,0x282)]());});}break;case'mp4':case _0x42ed2f(0x61f,0x69f,0x73d,0x88c):case'ytshorts':case _0x42ed2f(0x5bb,0x651,0x765,0x648):{if(!q)return reply(lang[_0x42ed2f(0x643,0x5aa,0x604,0x7b1)](prefix,command,_0x42ed2f(0x2c9,0x6a9,0x4df,0x399)+_0x42ed2f(0x775,0x548,0x69a,0x684)+_0x185cf8(0x5b4,0x4fa,0x513,0x3cf)));if(!isUrl(q))return reply(lang[_0x185cf8(0x300,0x4b6,0x39b,0x687)+'t'](prefix));if(!text[_0x185cf8(0x3b7,0x35e,0x1ed,0x18f)](_0x42ed2f(0x9e0,0x76d,0x838,0x83e))&&!text[_0x42ed2f(0x632,0x757,0x59b,0x6bf)](_0x185cf8(0x35b,0x40a,0x40d,0x524)+'m'))return reply(lang[_0x42ed2f(0x794,0x761,0x6f3,0x595)+'t'](prefix));await reply(lang[_0x42ed2f(0x3f3,0x30e,0x512,0x4c9)]()),ytv(''+q)[_0x42ed2f(0x9fe,0x7e2,0x821,0x6ab)](async _0x36faec=>{const _0x370abc={'SIaog':function(_0xbf2686,_0x5b95f5){return _0xbf2686(_0x5b95f5);},'fuFQt':'\x20MB','WUvDv':_0x4b2a9c(0x523,0x38c,0x3c0,0x53f)+'ia\x20Link','UdlxF':_0x4b2a9c(0x1e2,0x268,0x1a9,0xec)+'e','tWwbf':_0x4b2a9c(0x504,0x42b,0x621,0x6ee),'gyJai':_0x21cf7f(0x185,0x2ff,0x27e,0x333)},{dl_link:_0x1e2fc,filesizeF:_0x173e21,filesize:_0x1548f5,title:_0x26d0af,thumb:_0x261b9f}=_0x36faec;let _0x2ef76b=await _0x370abc['SIaog'](getBuffer,_0x261b9f);if(_0x370abc['SIaog'](Number,_0x173e21[_0x4b2a9c(0x265,0x208,0x45c,0xbe)](_0x370abc[_0x21cf7f(0x1f5,0x2fd,0x50f,0xdf)],''))>=0x78*-0x52+0x1066+0x166e)return await alpha[_0x21cf7f(0x6e4,0x644,0x449,0x5b3)+'c'](from,_0x4b2a9c(0x459,0x400,0x2a0,0x457)+'TUBE\x20VIDEO'+'\x20」----*\x0a\x0a*'+_0x4b2a9c(0x26a,0xe6,0x1c5,0xd2)+'\x20'+_0x26d0af+(_0x4b2a9c(0x296,0x94,0x1d0,0x43b)+'*\x20')+_0x173e21+(_0x21cf7f(0x344,0x1f5,0x2cc,0x170)+_0x21cf7f(0x502,0x5a0,0x7d4,0x57d)+_0x21cf7f(0x558,0x4c6,0x2f1,0x56b)+_0x21cf7f(0x604,0x53b,0x5a5,0x6e3)+_0x21cf7f(0x6c3,0x490,0x309,0x56a))+_0x1e2fc+enter+enter+(_0x21cf7f(0x2f9,0x38e,0x383,0x514)+'asi\x20lebih\x20'+'dari\x20batas'+_0x21cf7f(0x321,0x49a,0x61f,0x4e7)+_0x4b2a9c(0x3a9,0x2f1,0x1de,0x38d)+'tuk\x20link_'),'©\x20'+ownername,_0x2ef76b,[{'urlButton':{'displayText':_0x370abc[_0x21cf7f(0x3d4,0x2c5,0x395,0x226)],'url':''+_0x1e2fc}}]);let _0x413976=_0x21cf7f(0x314,0x4ab,0x342,0x690)+_0x21cf7f(0x649,0x59d,0x649,0x54d)+_0x4b2a9c(0x571,0x775,0x569,0x711)+'🎀\x20Title\x20:*'+'\x20'+_0x26d0af+(_0x21cf7f(0xc7,0x2e8,0x19a,0x243)+'*\x20')+_0x173e21+(_0x21cf7f(0x1b9,0x1f5,0x39,0x335)+_0x4b2a9c(0x54e,0x533,0x386,0x54d)+_0x21cf7f(0x6ac,0x4c6,0x6c7,0x58f)+_0x4b2a9c(0x4e9,0x38a,0x41d,0x42b)+_0x4b2a9c(0x43e,0x3fd,0x5d9,0x62c))+q;_0x413976+='';const _0x2643aa={};_0x2643aa['displayTex'+'t']=_0x370abc[_0x21cf7f(0x3d2,0x1e2,0x15d,0x3c6)],_0x2643aa['url']=''+youtube;const _0x245942={};_0x245942[_0x4b2a9c(0x5f5,0x3ef,0x64d,0x3dd)]=_0x2643aa;const _0x385d7a={};_0x385d7a[_0x21cf7f(0x7c1,0x624,0x564,0x784)+'t']=_0x370abc[_0x4b2a9c(0x552,0x5c2,0x773,0x448)],_0x385d7a['id']=_0x4b2a9c(0x40f,0x411,0x460,0x63c);function _0x21cf7f(_0x21f213,_0x52bf57,_0x418f2d,_0x206b77){return _0x42ed2f(_0x21f213-0xa0,_0x418f2d,_0x52bf57- -0x255,_0x206b77-0xee);}const _0x4a0b88={};_0x4a0b88[_0x21cf7f(0x273,0x3b3,0x56d,0x4d1)+_0x21cf7f(0x3eb,0x2da,0x2ef,0x228)]=_0x385d7a;function _0x4b2a9c(_0x492feb,_0x2267ab,_0x7b407b,_0x14a422){return _0x42ed2f(_0x492feb-0x59,_0x2267ab,_0x492feb- -0x2a7,_0x14a422-0xb4);}const _0x3a010e={};_0x3a010e['displayTex'+'t']=_0x4b2a9c(0x488,0x570,0x2cc,0x688),_0x3a010e['id']=_0x21cf7f(0x501,0x570,0x48a,0x474);const _0x35be63={};_0x35be63[_0x4b2a9c(0x361,0x387,0x16e,0x469)+_0x21cf7f(0x49f,0x2da,0x384,0x374)]=_0x3a010e;var _0x524648=[_0x245942,_0x4a0b88,_0x35be63];await alpha['send5ButLo'+'c'](from,_0x413976,'©\x20'+ownername,_0x2ef76b,_0x524648);const _0x4d8687={};_0x4d8687[_0x21cf7f(0x1c1,0x2bf,0x3ff,0x456)]=_0x1e2fc;const _0xe4c887={};_0xe4c887[_0x4b2a9c(0x5b6,0x591,0x425,0x732)]=_0x4d8687,_0xe4c887['mimetype']=_0x370abc[_0x21cf7f(0x3d5,0x32c,0x28a,0x507)],alpha[_0x21cf7f(0x192,0x34b,0x2a5,0x4c6)+'e'](m['chat'],_0xe4c887,{'quoted':m});});}break;case'play':{if(!q)return reply(lang[_0x185cf8(0x1fe,0x3c7,0x27f,0x3d5)](prefix,command,_0x185cf8(0x2f5,0x4a6,0x36c,0x4cf)+'pp'));reply(lang[_0x42ed2f(0x4b2,0x3dd,0x512,0x6c1)]()),res=await yts(''+q),lok=await getBuffer(res[_0x185cf8(0x5d7,0x60a,0x4e6,0x3d2)][-0xf67*-0x1+-0x5*-0x119+-0x14e4][_0x42ed2f(0x500,0x2ba,0x4a8,0x517)]);let thumbInfo=_0x42ed2f(0x5c3,0x461,0x4c1,0x2bc)+_0x42ed2f(0x9d1,0x722,0x7e6,0xa01)+_0x185cf8(0x4cf,0x438,0x4e3,0x552)+_0x185cf8(0x3b9,0x46d,0x460,0x310)+'*\x20'+res[_0x42ed2f(0x80f,0x787,0x847,0x8bb)][0x19*0xbf+0x72*0x18+-0x1d57][_0x42ed2f(0x67c,0x839,0x73b,0x71d)]+(_0x42ed2f(0x94c,0x7a6,0x809,0x9d7)+_0x185cf8(0x3e6,0x37f,0x4e0,0x264))+res[_0x42ed2f(0x7ad,0xa7e,0x847,0x873)][-0x772*-0x3+-0x21*-0x115+-0x3a0b][_0x42ed2f(0x654,0x4d4,0x44d,0x2c9)]+(_0x42ed2f(0x448,0x71b,0x5f5,0x7f1)+_0x185cf8(0x73c,0x64d,0x787,0x52e))+res[_0x42ed2f(0xa30,0x64e,0x847,0xa2f)][0x22e3+-0x323+-0x40*0x7f][_0x185cf8(0x2e2,0x3fb,0x3bf,0x376)]+('\x0a*☕\x20Channe'+_0x185cf8(0x16a,0x1fb,0x21d,0x1a4))+res[_0x185cf8(0x69b,0x60a,0x7ad,0x771)][0x1724*0x1+0xc*0x23a+0x31dc*-0x1]['author'][_0x42ed2f(0x4c7,0x261,0x472,0x4ae)]+(_0x42ed2f(0x64e,0x835,0x7aa,0x6f0)+_0x185cf8(0x309,0x50a,0x496,0x722))+res[_0x42ed2f(0x82a,0x890,0x847,0x979)][-0x1*0x4ea+0x1e8f+-0xd*0x1f9][_0x185cf8(0x4cd,0x5d2,0x705,0x4ad)]+('\x0a*🔗\x20URL\x20Vi'+'deo\x20:*\x20')+res['videos'][-0xa90+0x1b92+0x2*-0x881][_0x185cf8(0x17f,0x2d7,0x351,0xcd)];const _0x200670={};_0x200670[_0x42ed2f(0xa8b,0x760,0x879,0x6da)+'t']=_0x185cf8(0x6d9,0x5f5,0x501,0x75c),_0x200670[_0x185cf8(0x368,0x2d7,0x389,0x33c)]=''+myweb;const _0x54ba7e={};_0x54ba7e[_0x185cf8(0x618,0x65f,0x840,0x672)]=_0x200670;const _0x262f8a={};_0x262f8a[_0x185cf8(0x656,0x63c,0x603,0x4f7)+'t']='Github',_0x262f8a[_0x185cf8(0x20a,0x2d7,0xb8,0x210)]=''+github;const _0xfa41fb={};_0xfa41fb[_0x42ed2f(0x989,0x797,0x89c,0xa67)]=_0x262f8a;const _0x43e439={};_0x43e439['displayTex'+'t']=_0x42ed2f(0x9a0,0x895,0x79d,0x674),_0x43e439['id']=_0x185cf8(0x12d,0x286,0x20b,0x413)+res[_0x42ed2f(0x638,0x653,0x533,0x3d6)][-0x1f59+-0x2*0x68b+0x2c70]['url'];const _0x3b50ab={};_0x3b50ab[_0x185cf8(0x3bf,0x3cb,0x386,0x3ef)+_0x185cf8(0x2cd,0x2f2,0xec,0x436)]=_0x43e439;const _0x38bafc={};_0x38bafc[_0x42ed2f(0xa97,0x7dd,0x879,0x849)+'t']=_0x42ed2f(0x431,0x609,0x50e,0x613),_0x38bafc['id']='ytmp4\x20'+res['videos'][-0x15d*0x1b+-0x2ab*-0x9+0x71*0x1d][_0x42ed2f(0x5ea,0x4cc,0x514,0x6de)];const _0x1ff076={};_0x1ff076['quickReply'+_0x42ed2f(0x4f2,0x4be,0x52f,0x6f0)]=_0x38bafc;var buatpesann=[_0x54ba7e,_0xfa41fb,_0x3b50ab,_0x1ff076];await alpha[_0x42ed2f(0x72f,0x6f5,0x899,0xa07)+'c'](from,thumbInfo,'©\x20'+ownername,lok,buatpesann);}break;case'sc':case _0x42ed2f(0x2cc,0x2b0,0x4e8,0x5bb):{let gam=await getBuffer(picak+('Source\x20Cod'+'e'));const _0x3e0a2d={};_0x3e0a2d[_0x185cf8(0x567,0x63c,0x7e8,0x4b1)+'t']=_0x185cf8(0x44e,0x233,0x251,0x37b),_0x3e0a2d[_0x42ed2f(0x501,0x61d,0x514,0x6dd)]='https://yo'+'utube.com/'+'c/zeeoneof'+'c';const _0x4f88a4={};_0x4f88a4[_0x185cf8(0x4dc,0x65f,0x70c,0x657)]=_0x3e0a2d;var but=[_0x4f88a4];const _0x503179={};_0x503179[_0x42ed2f(0x365,0x499,0x4a4,0x582)]=m['chat'],_0x503179[_0x185cf8(0x320,0x393,0x439,0x394)]=m,await alpha[_0x185cf8(0x69d,0x65c,0x54a,0x42f)+'c'](from,lang[_0x42ed2f(0x46b,0x573,0x4e8,0x46b)](),'©\x20'+ownername,gam,but,_0x503179);}break;case _0x42ed2f(0x805,0x44a,0x671,0x556):case _0x185cf8(0x4f5,0x379,0x1ca,0x21b):case'gay':case _0x42ed2f(0x360,0x42f,0x476,0x47a):case _0x42ed2f(0x8b4,0x89d,0x6c7,0x6a1):case _0x185cf8(0x43c,0x4a2,0x5d4,0x469):case _0x185cf8(0x4bf,0x41f,0x32e,0x4a8):case'invert':case _0x185cf8(0x624,0x4bd,0x529,0x3b0):case _0x42ed2f(0x7d3,0x547,0x627,0x6f5):case _0x185cf8(0x55d,0x4f3,0x4c2,0x512):case _0x42ed2f(0x870,0xa12,0x7e5,0x713):case _0x42ed2f(0x81d,0x83e,0x82e,0x61e):case _0x185cf8(0x5d8,0x645,0x51f,0x72b):case _0x42ed2f(0x6ba,0x75a,0x718,0x778):case _0x42ed2f(0x5fc,0x5b2,0x4cf,0x2a4):case _0x42ed2f(0x816,0x648,0x6be,0x491):case _0x185cf8(0x209,0x399,0x2b9,0x4aa)+_0x185cf8(0x709,0x633,0x4c4,0x5ef):{if(!quoted)return reply(lang[_0x185cf8(0x448,0x3bc,0x55f,0x4bd)](prefix,command));if(!/webp/['test'](mime)&&/image/[_0x185cf8(0x61a,0x538,0x5ae,0x56e)](mime)){reply(lang[_0x42ed2f(0x6bd,0x614,0x512,0x62c)]());let sefek=await alpha[_0x42ed2f(0x936,0x6bc,0x767,0x7bb)+_0x185cf8(0x4e2,0x50b,0x672,0x3de)+_0x185cf8(0x3e8,0x572,0x60b,0x5a8)](quoted),fatz=await TelegraPh(sefek),stikfek='https://so'+'me-random-'+_0x185cf8(0x7db,0x5e9,0x766,0x3f7)+_0x185cf8(0x537,0x4c1,0x3dd,0x6e5)+command+_0x185cf8(0x32f,0x36a,0x277,0x550)+fatz;const _0x10ae4a={};_0x10ae4a[_0x42ed2f(0x712,0x75d,0x657,0x751)]=global[_0x185cf8(0x343,0x41a,0x573,0x3ac)],_0x10ae4a[_0x42ed2f(0x72b,0x85a,0x65a,0x452)]=global[_0x185cf8(0x258,0x41d,0x1f0,0x616)];let fatmd=await alpha['sendImageA'+_0x185cf8(0x606,0x405,0x33b,0x543)](m['chat'],stikfek,m,_0x10ae4a);await fs[_0x185cf8(0x777,0x64b,0x83b,0x618)](fatmd),await fs[_0x42ed2f(0x8dc,0x6bc,0x888,0x778)](sefek);}else{if(/webp/[_0x185cf8(0x343,0x538,0x3ad,0x383)](mime)){reply(lang[_0x42ed2f(0x317,0x62d,0x512,0x5e3)]());let media=await alpha[_0x185cf8(0x491,0x52a,0x587,0x623)+'dSaveMedia'+'Message'](quoted),ran=await(_0x42ed2f(0x806,0x928,0x886,0x68a)+'img-')+getRandom(_0x185cf8(0x4b6,0x44a,0x4f2,0x436));exec(_0x185cf8(0x7f3,0x5be,0x5e0,0x50e)+media+'\x20'+ran,_0x538fe9=>{const _0x25aee2={'wbovP':function(_0x5eb242,_0x2389dd){return _0x5eb242(_0x2389dd);}};fs['unlinkSync'](media);function _0x23f9c1(_0x15a0af,_0x33f0de,_0x2d4065,_0x33ab88){return _0x185cf8(_0x15a0af-0x187,_0x2d4065- -0x14a,_0x2d4065-0x15e,_0x15a0af);}if(_0x538fe9)return reply(_0x2412eb(-0x276,-0x3c5,-0x263,-0x499));function _0x2412eb(_0x7df8b,_0x3e364d,_0x3c8c2e,_0x13e40f){return _0x185cf8(_0x7df8b-0x5,_0x3c8c2e- -0x47a,_0x3c8c2e-0x56,_0x13e40f);}_0x25aee2[_0x2412eb(-0xf9,0xb,-0x54,0xa0)](TelegraPh,ran)[_0x23f9c1(0x26c,0x369,0x49a,0x40d)](async _0x553df8=>{let _0x1bed64=_0x416032(0x10c,-0x3d,-0x19d,0x12f)+_0x5c4cae(0x22f,0x8c,0x2a8,0x323)+'api.ml/can'+_0x5c4cae(0x1fe,0x366,0x1b0,0xe)+command+_0x5c4cae(0x31,-0x13f,0x59,0xbc)+_0x553df8;const _0x38a234={};function _0x416032(_0x3b16aa,_0x1f787c,_0x2ff6e4,_0x5abfd8){return _0x23f9c1(_0x5abfd8,_0x1f787c-0x192,_0x1f787c- -0x149,_0x5abfd8-0x1ea);}_0x38a234[_0x416032(-0x77,0x187,0x8,0x4)]=global[_0x5c4cae(0x28e,0x26a,0x109,-0x5)],_0x38a234[_0x416032(0x13e,0x18a,0x2d6,0xee)]=global[_0x416032(0xa0,0x18a,0x203,0x24e)];function _0x5c4cae(_0x3e9922,_0x12b234,_0x3f75b2,_0x3afae7){return _0x23f9c1(_0x3afae7,_0x12b234-0x15,_0x3f75b2- -0x1c7,_0x3afae7-0x1f2);}let _0x47f22d=await alpha[_0x416032(0x128,-0x30,0x6f,-0x89)+_0x416032(-0x96,0x172,0x1de,-0x27)](m[_0x5c4cae(-0x195,0x137,-0x10,0x83)],_0x1bed64,m,_0x38a234);await fs[_0x5c4cae(0x409,0x3d4,0x33a,0x1c9)](_0x47f22d),await fs[_0x5c4cae(0x52d,0x564,0x33a,0x55e)](ran);});});}else reply(lang[_0x185cf8(0x23d,0x3bc,0x5d3,0x2c7)](prefix,command));}}break;case _0x185cf8(0x50e,0x4c8,0x4cb,0x2ca):case _0x185cf8(0x1a5,0x34d,0x1a3,0x1f1):case _0x42ed2f(0x717,0x3c1,0x513,0x4aa):case _0x185cf8(0x46f,0x580,0x557,0x72d):case'circle':case _0x42ed2f(0x629,0x72b,0x6fb,0x564):case _0x42ed2f(0x867,0x6b1,0x85a,0x883):case _0x42ed2f(0x713,0x7aa,0x63d,0x729):case _0x42ed2f(0x43f,0x30e,0x4b1,0x688):case'frame':case _0x185cf8(0x5de,0x4f7,0x566,0x69e):case'utatoo':case _0x42ed2f(0x633,0x2ae,0x451,0x413):case'thanos':case _0x42ed2f(0x6fa,0x5e4,0x6b5,0x79f):case'dictator':case'deepfry':case'sharpen':case _0x42ed2f(0x47d,0x6f3,0x5e8,0x679):case'brazzers':case _0x185cf8(0x425,0x475,0x3e9,0x58b):case _0x185cf8(0x708,0x562,0x746,0x763):case'instagram':case _0x185cf8(0x201,0x333,0x266,0x17c):case _0x185cf8(0x417,0x604,0x735,0x49b):case _0x185cf8(0x676,0x59e,0x700,0x5c0):case _0x42ed2f(0x77a,0x8ba,0x76d,0x57c):case _0x42ed2f(0x89e,0x665,0x849,0x9ec)+'sed':case'lookwhatka'+_0x42ed2f(0x347,0x489,0x46a,0x266):{if(!quoted)return reply(lang[_0x42ed2f(0x6db,0x80c,0x5f9,0x609)](prefix,command));if(!/webp/['test'](mime)&&/image/['test'](mime)){reply(lang[_0x185cf8(0x33a,0x2d5,0x4f7,0x40c)]());var ini_gen=''+command,ciclee=await alpha[_0x42ed2f(0x80f,0x885,0x767,0x646)+'dSaveMedia'+_0x185cf8(0x71f,0x572,0x405,0x60f)](quoted),annnu=await TelegraPh(ciclee);const _0x459ccf={};_0x459ccf['url']=annnu;var imoj=await ameApi[_0x185cf8(0x524,0x64a,0x48a,0x5b2)](ini_gen,_0x459ccf)[_0x42ed2f(0x69b,0x6cf,0x821,0x9e4)](async _0x343f5e=>{function _0x54bffd(_0x3be2b6,_0xe0cc7,_0x536ed7,_0x5c8dec){return _0x42ed2f(_0x3be2b6-0x1b7,_0xe0cc7,_0x536ed7- -0x5d9,_0x5c8dec-0x106);}const _0x2811e1={'rFbgk':_0x54bffd(0x279,0x60,0xcd,-0x40),'XMvAO':_0x5832cd(0x2fc,0x280,0x492,0x4b2)+_0x54bffd(0x279,-0x109,0x90,0xf3),'SaNDF':function(_0x56dee2,_0x4024e3){return _0x56dee2(_0x4024e3);},'KjpQW':_0x5832cd(0x4e4,0x5a3,0x3e3,0x49e)},_0x5c2255=_0x2811e1[_0x54bffd(-0x163,-0x1c3,-0x134,0x5b)][_0x5832cd(0x4cd,0x5ac,0x53e,0x5a1)]('|');let _0x1a889c=0x6c9+-0x559*-0x3+-0x16d4;function _0x5832cd(_0x193097,_0x5b4800,_0xdabd44,_0x422464){return _0x185cf8(_0x193097-0x5c,_0x422464-0x54,_0xdabd44-0x16f,_0x193097);}while(!![]){switch(_0x5c2255[_0x1a889c++]){case'0':emm=await _0x2811e1['XMvAO']+_0x2811e1[_0x54bffd(0x125,-0xca,0xa1,0x2c1)](getRandom,_0x2811e1[_0x5832cd(0x357,0x3a3,0x4b8,0x542)]);continue;case'1':alpha[_0x54bffd(0x14e,-0x1d0,-0x39,0x12d)+'e'](m[_0x5832cd(0x2f9,0x53f,0x514,0x355)],{'image':fs[_0x54bffd(0x1c0,0x41f,0x264,0x235)+'nc'](emm),'caption':lang['ok']()},{'quoted':m});continue;case'2':await fs['unlinkSync'](emm);continue;case'3':await fs[_0x5832cd(0x7e5,0x88d,0x691,0x69f)](ciclee);continue;case'4':await fs['writeFileS'+'ync'](emm,_0x343f5e);continue;}break;}});}else{if(/webp/[_0x42ed2f(0x76e,0x9a8,0x775,0x5fc)](mime)){reply(lang[_0x185cf8(0x165,0x2d5,0x465,0x3cb)]());var inigen=''+command;let media=await alpha[_0x185cf8(0x682,0x52a,0x4b1,0x5f5)+'dSaveMedia'+_0x185cf8(0x629,0x572,0x717,0x39e)](quoted),ran=await(_0x185cf8(0x465,0x649,0x4a9,0x73c)+_0x185cf8(0x474,0x247,0x1f8,0x252))+getRandom(_0x185cf8(0x3ac,0x44a,0x287,0x4ce));exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0xa3e643=>{function _0x1ecb6e(_0x3ffc4a,_0x437e2d,_0x5702ec,_0x5e9a0f){return _0x185cf8(_0x3ffc4a-0x1c3,_0x5e9a0f- -0x36d,_0x5702ec-0x1ae,_0x437e2d);}const _0xdbaf85={'VoceN':'3|4|2|1|0','bygDK':function(_0x1a4e71,_0x57d820){return _0x1a4e71+_0x57d820;},'SYLpb':function(_0x234f64,_0x530ea2){return _0x234f64(_0x530ea2);},'XslAM':'Eror'};if(_0xa3e643)return _0xdbaf85[_0x1ecb6e(0x3d,0x2ad,0xa5,0xc3)](reply,_0xdbaf85[_0x1ecb6e(0x288,0x36b,0x4ad,0x2ad)]);function _0x184c4a(_0x5821f7,_0x3b3b4e,_0x2c4f05,_0xed2b83){return _0x42ed2f(_0x5821f7-0x74,_0x5821f7,_0xed2b83-0x10,_0xed2b83-0x143);}_0xdbaf85[_0x184c4a(0x83d,0x65d,0x6d5,0x67d)](TelegraPh,ran)[_0x1ecb6e(0xbe,0x374,0x17d,0x277)](async _0x100807=>{function _0x17a068(_0xeddb92,_0x2bfe83,_0xc405c4,_0x422754){return _0x1ecb6e(_0xeddb92-0x169,_0x2bfe83,_0xc405c4-0x84,_0xeddb92- -0xed);}const _0x49e4cb={'PJCIu':_0xdbaf85[_0x3eb64a(0x5bb,0x49a,0x58b,0x58c)],'llXrb':function(_0x396963,_0x38a756){return _0xdbaf85['bygDK'](_0x396963,_0x38a756);},'LVDTT':_0x3eb64a(0x318,0x470,0x5b8,0x278)+_0x17a068(-0x2e,0x8c,-0x25c,0x144),'fLGpP':function(_0x570656,_0xdc81e5){function _0x476cb1(_0xd19447,_0x18ff51,_0x44942a,_0x89cdb1){return _0x3eb64a(_0xd19447-0x99,_0xd19447- -0x3ad,_0x44942a,_0x89cdb1-0xc8);}return _0xdbaf85[_0x476cb1(0x95,-0xb,-0x38,0x75)](_0x570656,_0xdc81e5);},'UXxSt':_0x17a068(-0x10,-0x94,0x57,-0x9a)};function _0x3eb64a(_0x2924b4,_0x39ea1e,_0x19c174,_0x2c61fc){return _0x1ecb6e(_0x2924b4-0x12,_0x19c174,_0x19c174-0x58,_0x39ea1e-0x37f);}const _0x169c46={};_0x169c46['url']=_0x100807,ameApi[_0x3eb64a(0x75c,0x65c,0x50b,0x513)](inigen,_0x169c46)[_0x17a068(0x18a,0x15b,0x218,0x1d8)](async _0xb338fb=>{function _0xd49a07(_0x1a18a7,_0x2b8f79,_0x6a4d60,_0x73897){return _0x3eb64a(_0x1a18a7-0x64,_0x1a18a7- -0x25e,_0x6a4d60,_0x73897-0x136);}const _0x51715d=_0x49e4cb[_0x53cf02(0x2ad,0x175,0xd,-0x39)][_0x53cf02(-0x1ab,0x69,0x206,0xd)]('|');function _0x53cf02(_0x479aa8,_0x5888f3,_0x2c777c,_0x251644){return _0x17a068(_0x5888f3- -0x8a,_0x2c777c,_0x2c777c-0x13d,_0x251644-0x1bd);}let _0xfb2af4=-0x8a4*-0x3+-0x5f5+-0x13*0x10d;while(!![]){switch(_0x51715d[_0xfb2af4++]){case'0':await fs['unlinkSync'](ran);continue;case'1':await fs[_0x53cf02(0x20e,0x167,0x262,0xac)](emh);continue;case'2':alpha[_0xd49a07(0x117,0x140,0x11b,-0x5c)+'e'](m[_0x53cf02(-0x54,-0x1e3,-0x3d4,-0x306)],{'image':fs[_0x53cf02(0x2fc,0x11c,-0x92,0x1d5)+'nc'](emh),'caption':lang['ok']()},{'quoted':m});continue;case'3':emh=_0x49e4cb[_0xd49a07(0x282,0x46a,0x1cb,0x2ef)](await _0x49e4cb[_0xd49a07(0x129,0xb4,0x8e,0x1dd)],_0x49e4cb[_0xd49a07(0x317,0x372,0x520,0x23b)](getRandom,_0x49e4cb[_0x53cf02(0x3a,-0x1e1,-0x290,0x30)]));continue;case'4':await fs[_0xd49a07(0xb8,0x188,-0x119,0x294)+_0x53cf02(-0x1b9,0x28,-0x117,-0x8c)](emh,_0xb338fb);continue;}break;}});}),fs[_0x184c4a(0x6ba,0x9ac,0x9d3,0x898)](media);});}else reply(lang[_0x185cf8(0x5e0,0x3bc,0x38e,0x200)](prefix,command));}}break;case _0x185cf8(0x308,0x321,0x4a8,0x3b9):case _0x185cf8(0x665,0x618,0x56c,0x56b):case _0x185cf8(0x156,0x28b,0x26b,0xca):{if(!text)return reply(lang['KisahNabi'](prefix,command,_0x42ed2f(0x4e1,0x73b,0x5ff,0x5ec)+_0x185cf8(0x525,0x360,0x2ba,0x18b)+_0x42ed2f(0x84a,0x6e6,0x64c,0x7d9)+_0x185cf8(0x4df,0x5ff,0x508,0x6f0)+'d'));let gitRegex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!gitRegex['test'](args[0x1*0x1f83+-0x1*0x806+0x1*-0x177d]))return reply(lang[_0x42ed2f(0xa94,0x6c4,0x885,0x8c3)]());reply(lang[_0x42ed2f(0x4e5,0x56b,0x512,0x629)]());let [,user,repo]=args[-0xde1*0x1+0xb38+0x3*0xe3][_0x42ed2f(0x7eb,0x76f,0x644,0x4a0)](gitRegex)||[];repo=repo['replace'](/.git$/,'');let url=_0x42ed2f(0x434,0x296,0x468,0x5e2)+'i.github.c'+_0x42ed2f(0x440,0x2a4,0x431,0x356)+user+'/'+repo+_0x42ed2f(0x854,0x71d,0x722,0x893);const _0x2c6913={};_0x2c6913[_0x185cf8(0x41f,0x40c,0x4e5,0x244)]=_0x185cf8(0x3e7,0x373,0x527,0x18d);let filename=(await fetch(url,_0x2c6913))[_0x185cf8(0x610,0x452,0x32f,0x220)][_0x42ed2f(0x607,0x93b,0x836,0x83a)](_0x185cf8(0x23d,0x28e,0x309,0x2bf)+_0x42ed2f(0x7f9,0x669,0x7f8,0x751))[_0x185cf8(0x60e,0x407,0x2c4,0x5ff)](/attachment; filename=(.*)/)[0x2*-0x11ed+0x904*-0x1+0x2cdf];alpha[_0x42ed2f(0x711,0x896,0x878,0xa69)](m[_0x42ed2f(0x566,0x390,0x53e,0x524)],url,filename,m);}break;case'gitrepo':{if(!args[0xd4*-0x8+0x1590+-0xef0])return reply(lang[_0x185cf8(0x392,0x2c2,0x26b,0x110)](prefix,command));if(!args[-0x17b9+-0x9bc+-0x2176*-0x1])return reply(lang[_0x185cf8(0x23d,0x2c2,0x46b,0x2d0)](prefix,command));if(!args[0x10c1*-0x1+0x16e8+-0xb*0x8f])reply(lang[_0x185cf8(0x276,0x2c2,0x2ea,0x1b3)](prefix,command));let url=_0x185cf8(0x375,0x3c2,0x23a,0x43f)+_0x185cf8(0x115,0x265,0x264,0xfc)+args[-0x121f*0x2+0x2571+-0x133]+'/'+args[-0x1*-0x1b15+0x1*0x16ed+-0x3201]+(_0x185cf8(0x4bb,0x523,0x6c8,0x5cc)+'efs/heads/')+args[-0x1*0x157d+-0x10e0+0x265f]+_0x42ed2f(0x780,0x8de,0x88d,0x9ee);reply(lang[_0x42ed2f(0x41b,0x6af,0x512,0x3ae)]()),alpha[_0x42ed2f(0x651,0x88b,0x878,0xa2a)](m[_0x185cf8(0x524,0x301,0xca,0x113)],url,args[0x2287+0x8f3*-0x2+-0x10a1]+'-'+args[0x750+0x1bef+-0x233e]+'-'+args[0x1*0x2709+0x1d74+-0x447b]+'.',m);}break;case _0x185cf8(0x42,0x200,0x61,0x42e):{if(!text)return reply(lang['KisahNabi'](prefix,command,_0x185cf8(0x48e,0x32a,0x260,0x43d)));var halzmal=text;const ig=require(_0x185cf8(0x3f6,0x382,0x4d3,0x365)),_0x3c7220={};_0x3c7220['count']=0x0,_0x3c7220[_0x185cf8(0x7ad,0x5fa,0x40d,0x577)]=_0x42ed2f(0xa3c,0xa5a,0x847,0x9bb),_0x3c7220[_0x42ed2f(0x5c8,0x51d,0x6b8,0x83a)]=0x0,_0x3c7220[_0x185cf8(0x136,0x2f1,0x1e3,0x1e7)]=_0x42ed2f(0xa4c,0x90e,0x816,0x81b)+_0x42ed2f(0x6e0,0x89a,0x76e,0x71e)+_0x42ed2f(0x322,0x2d6,0x44f,0x446)+'nCfoNR:9';const options=_0x3c7220,igstalk=_0x130d00=>new Promise((_0x41743a,_0x250b8a)=>{const _0x10d27e={'WmSOp':function(_0x1d9fb5,_0x1247ba){return _0x1d9fb5(_0x1247ba);},'KZwty':'Fatih\x20Arri'+_0x6f5640(-0x3b0,-0x339,-0x17b,-0x1d1),'FaMpY':function(_0x2176da,_0x21a901){return _0x2176da===_0x21a901;},'RagUd':_0xf7fe72(-0x10e,0xb6,0x31e,0x11e)+'cluded.','HtWBi':function(_0x2df509,_0x5d86df){return _0x2df509!==_0x5d86df;},'rtGBT':_0xf7fe72(0x27f,0x24b,0x264,0x57),'WGzCd':'BWEbo'};function _0x6f5640(_0x3bd93e,_0x2076ae,_0x25ea2b,_0x12ed63){return _0x185cf8(_0x3bd93e-0x87,_0x12ed63- -0x3f4,_0x25ea2b-0xbc,_0x3bd93e);}function _0xf7fe72(_0x5dacf1,_0x3657c6,_0x31f1e1,_0x9a86e3){return _0x185cf8(_0x5dacf1-0x30,_0x9a86e3- -0x208,_0x31f1e1-0x4b,_0x31f1e1);}user=_0x130d00[_0x6f5640(0x1f,-0x21c,-0x176,-0x125)](/@/gi,'');(_0x10d27e[_0x6f5640(-0x4b,0x129,-0x275,-0xfc)](user,undefined)||!user)&&_0x10d27e[_0xf7fe72(-0x4a,0x226,0x10b,0xe3)](_0x250b8a,_0x10d27e[_0x6f5640(-0x21e,-0x192,-0x190,-0xbc)]);try{_0x10d27e[_0xf7fe72(0x134,0x117,0x3e,0x5e)](_0x10d27e[_0x6f5640(-0x55,0x49,0xe1,-0x85)],_0x10d27e['WGzCd'])?ig[_0xf7fe72(0x2,0x132,-0xc5,0x1f)+'a'](user,options)['then'](async _0x372131=>{const _0x4d5d1b={};_0x4d5d1b[_0x2677fb(0x12,0x226,-0x127,0x104)]=_0x372131[_0x22ef5a(-0x21f,0xd,0x150,-0x2a)][_0x22ef5a(0xc0,0x13e,0xba,-0x57)][_0x2677fb(-0x79,0xa1,0x13f,-0x8e)+_0x2677fb(0x249,0x1c1,-0xcc,0x1a)],_0x4d5d1b[_0x22ef5a(0x1be,0xa6,0x2d0,-0x58)]=_0x372131[_0x2677fb(0x201,0x1f5,0x1f,0x16b)]['user']['profile_pi'+'c_url_hd'];const _0x16eb4e={};_0x16eb4e[_0x2677fb(0x187,0x190,0xac,-0x21)]=_0x372131['graphql'][_0x2677fb(0x336,0x3e1,0x41c,0x29c)]['external_u'+'rl'],_0x16eb4e['id']=_0x372131['graphql'][_0x2677fb(0x45d,0xf8,0xbb,0x29c)]['id'],_0x16eb4e[_0x22ef5a(-0xbc,-0x1ae,-0x11e,-0x25)]=user,_0x16eb4e[_0x2677fb(0x1e9,-0xa0,0x19a,0x163)]=_0x372131[_0x22ef5a(0x25,0xd,0x18c,0x17)][_0x2677fb(0x233,0x64,0x3c4,0x29c)][_0x2677fb(-0x218,-0x9c,0x30,0x4)];function _0x2677fb(_0x5a2fae,_0x28285d,_0x4fd1e5,_0x5b86b8){return _0xf7fe72(_0x5a2fae-0x12b,_0x28285d-0x76,_0x5a2fae,_0x5b86b8- -0xf0);}_0x16eb4e[_0x22ef5a(0x21,0x14d,0x23f,0x4)+'le']=_0x2677fb(-0x91,0x96,0x22b,0x39)+_0x22ef5a(-0x13e,0xcc,0x14,-0x74)+'m/'+user,_0x16eb4e[_0x2677fb(0x2be,0x35,-0x7d,0x146)]=_0x372131[_0x2677fb(0x325,-0xe,-0xcb,0x16b)][_0x2677fb(0x182,0x3f6,0x1aa,0x29c)][_0x22ef5a(0x1cb,-0x2f,0x86,-0x1ce)],_0x16eb4e['verified']=_0x372131[_0x22ef5a(-0x4b,0xd,-0xb1,-0x121)][_0x2677fb(0x182,0x7d,0x307,0x29c)][_0x22ef5a(0xe1,-0x72,0x125,0x150)+'d'],_0x16eb4e['bio']=_0x372131[_0x22ef5a(0x1ec,0xd,-0x1f4,0x161)][_0x2677fb(0x146,0x124,0xd6,0x29c)][_0x2677fb(-0x146,-0x1d8,-0x171,-0x3)],_0x16eb4e[_0x2677fb(0x8f,0x1b0,-0x5a,0x7f)]=_0x372131[_0x22ef5a(-0xc5,0xd,-0x54,-0x28)][_0x22ef5a(0x1c2,0x13e,0x1fb,0xdc)][_0x22ef5a(0x97,-0x192,-0x51,-0x17d)+_0x2677fb(0x13c,0x34b,0x35e,0x196)][_0x22ef5a(-0x115,-0x220,-0x104,-0xc3)],_0x16eb4e[_0x22ef5a(-0x273,-0x21c,-0x64,-0x453)]=_0x372131[_0x2677fb(0x2f,0x120,-0x1e,0x16b)][_0x2677fb(0x20d,0x7f,0x4b5,0x29c)][_0x2677fb(0x32,-0xc0,-0x203,-0x34)+'w']['count'];function _0x22ef5a(_0x3acc7d,_0x5f1b06,_0x3d9068,_0x579faf){return _0x6f5640(_0x3acc7d,_0x5f1b06-0x18d,_0x3d9068-0x4a,_0x5f1b06- -0x62);}_0x16eb4e[_0x22ef5a(0x40,0xd0,0x1de,0x182)+'b']=_0x372131[_0x22ef5a(0xf2,0xd,-0x1,-0x1cf)][_0x2677fb(0x4cc,0xb8,0x3be,0x29c)][_0x2677fb(-0xc5,-0x2df,-0xc8,-0xc6)+_0x2677fb(-0x1c4,0xd,0x10f,0x15)],_0x16eb4e[_0x2677fb(-0x19,0x16e,-0x13d,0xf4)+_0x2677fb(0xfc,0x2a6,0x220,0x162)]=_0x372131[_0x2677fb(-0x83,0x363,0x2aa,0x16b)][_0x2677fb(0x437,0x2e9,0x42f,0x29c)]['edge_felix'+_0x2677fb(0x2a,0x12d,0x24e,0x70)+_0x2677fb(0x29a,0x84,-0x10,0xcb)][_0x22ef5a(-0x446,-0x220,-0x335,-0x426)],_0x16eb4e[_0x2677fb(-0x217,-0x2e,-0x25d,-0x7e)]=_0x372131['graphql']['user'][_0x22ef5a(-0x2d7,-0x167,-0x2c8,0x3c)+_0x2677fb(0x558,0x1f8,0x405,0x35e)+_0x2677fb(0x106,0x107,0x1cf,0x5b)][_0x2677fb(-0x4f,-0x20c,-0x41,-0xc2)],_0x16eb4e['savedmedia']=_0x372131[_0x22ef5a(0xe5,0xd,0x1ec,0x15a)][_0x22ef5a(0x370,0x13e,0x2b3,0x223)][_0x22ef5a(0x147,0x187,0x5e,0xf2)+'_media'][_0x2677fb(0xbc,-0x2f1,-0x125,-0xc2)],_0x16eb4e[_0x22ef5a(0x2e1,0x11e,0x15c,0x1c2)+'s']=_0x372131[_0x22ef5a(0x118,0xd,-0x1ff,0x16c)]['user'][_0x22ef5a(0x100,0x1b8,0x2d3,0x291)+'_collectio'+'ns'][_0x22ef5a(-0xc0,-0x220,-0xd2,-0x154)],_0x16eb4e['total_reel'+'s']=_0x372131[_0x2677fb(0x98,0x17b,0x99,0x16b)][_0x2677fb(0x120,0x12b,0x30e,0x29c)]['highlight_'+_0x22ef5a(-0x13d,-0x6b,0xaf,-0x1f)],_0x10d27e[_0x22ef5a(-0x2b5,-0x16b,-0xc3,0x27)](_0x41743a,{'status':0xc8,'creator':_0x10d27e[_0x2677fb(-0x12b,-0x31,-0x1a5,-0xa1)],'profile':_0x4d5d1b,'data':_0x16eb4e});})[_0x6f5640(-0x5a,0x2ec,0x26,0x182)](_0x18d3f7=>_0x250b8a({'status':0x1f4,'message':toString(_0x18d3f7[_0x6f5640(0x3ad,-0x39,0x2e2,0x1cf)])})):_0x10d27e[_0x6f5640(0x49,-0x19c,0xb4,-0x109)](_0x6bcf02,_0x31b25e[_0x6f5640(0x1a9,-0x12b,0x4e,-0x6c)]());}catch(_0x33981f){_0x10d27e['WmSOp'](_0x250b8a,_0x33981f);}});igstalk(halzmal)[_0x42ed2f(0x634,0x6a6,0x821,0x849)](async _0x1739f7=>{const _0x411aa8={};_0x411aa8[_0x10f136(0x167,0x122,0x135,0x8c)]=_0x10f136(0x5f6,0x673,0x4f1,0x2d2);function _0x10f136(_0x42a584,_0x615ca0,_0x35794c,_0x390fff){return _0x185cf8(_0x42a584-0x10f,_0x35794c- -0xd7,_0x35794c-0x1c4,_0x390fff);}_0x411aa8[_0xca0599(0x652,0x5d3,0x2ff,0x41e)]='Donasi';const _0x494488=_0x411aa8;let {url:_0x11f845,id:_0x31386b,username:_0x132827,fullname:_0x59b489,link_profile:_0x53d17b,private:_0x24e953,verified:_0x286e8f,bio:_0xe86a45,follower:_0x45f19d,following:_0x24a86e,connected_fb:_0x2f797c,videotimeline:_0x5a06ad,timeline:_0xf65baa,savedmedia:_0x23ed54,collections:_0xae99fc,total_reels:_0x1263f3}=_0x1739f7[_0xca0599(0x55e,0x2dd,0x295,0x37b)],_0x310048=await getBuffer(_0x1739f7[_0xca0599(0x6ce,0x669,0x5bc,0x6ff)][_0xca0599(0x55f,0x4c3,0x448,0x647)]);const _0xd658c9=_0x10f136(0x6ce,0x525,0x4e9,0x689)+_0xca0599(0x3e6,0x437,0x3c0,0x476)+_0x132827+_0x10f136(-0x11,-0xb9,0x16b,0x166)+_0x31386b+('\x0a👻\x20Fullnam'+_0xca0599(0x565,0x6c1,0x4c9,0x6b2))+_0x59b489+(_0x10f136(-0xc,-0x6d,0x1c4,0x329)+_0xca0599(0x3ab,0x478,0x25e,0x42c))+_0x45f19d+(_0xca0599(0x592,0x5a0,0x4d6,0x6cc)+_0x10f136(0x269,0xac,0x12a,-0x5f))+_0x24a86e+(_0x10f136(0x71b,0x496,0x4f8,0x430)+_0x10f136(0x333,0x285,0x490,0x29c))+_0xf65baa+(_0xca0599(0x87d,0x6f7,0x85b,0x741)+_0x10f136(0x1ae,0x3cd,0x1c6,0xf2))+_0x5a06ad+(_0x10f136(0x25d,0x190,0x25d,0x46a)+'\x20')+_0x1263f3+('\x0a👁️\x20Private'+_0x10f136(0x468,0xa9,0x254,0xd4))+_0x24e953+('\x0a✅\x20Verifie'+'d\x20:\x20')+_0x286e8f+(_0x10f136(0x10d,0x27e,0x1a8,0x1a5)+_0xca0599(0x308,0x5c6,0x3be,0x506))+(_0x2f797c?_0x2f797c:_0x494488[_0xca0599(0x309,0x52f,0x308,0x357)])+(_0x10f136(0x6a9,0x65a,0x54a,0x622)+'ia\x20:\x20')+_0x23ed54+('\x0a🔭\x20Koleksi'+_0x10f136(0x3f6,0x465,0x254,0xa6))+_0xae99fc+(_0x10f136(0x34e,0x3c9,0x2bd,0x153)+_0x10f136(0x44f,0x25c,0x254,0x288))+_0x11f845+(_0x10f136(0x1ea,0x1ea,0x306,0xd2)+_0x10f136(0x28f,0x334,0x445,0x3cc))+_0xe86a45,_0x2d1f69={};function _0xca0599(_0x81c4ec,_0x5803db,_0x34691f,_0xe0ed30){return _0x42ed2f(_0x81c4ec-0x40,_0x34691f,_0xe0ed30- -0xf2,_0xe0ed30-0x1a9);}_0x2d1f69[_0x10f136(0x534,0x420,0x565,0x474)+'t']=_0x10f136(0x4c5,0x699,0x584,0x6dd)+'rl',_0x2d1f69[_0xca0599(0x612,0x21b,0x5dc,0x422)]=''+_0x53d17b;const _0x4e1822={};_0x4e1822[_0x10f136(0x388,0x5df,0x588,0x59a)]=_0x2d1f69;const _0x1a13ed={};_0x1a13ed[_0xca0599(0x80e,0x913,0x755,0x787)+'t']=_0x494488['QIjpX'],_0x1a13ed['id']=_0x10f136(0x34a,0x5c2,0x3a2,0x327);const _0x2e62c2={};_0x2e62c2['quickReply'+_0xca0599(0x5f3,0x225,0x45d,0x43d)]=_0x1a13ed;const _0x3968f4={};_0x3968f4[_0x10f136(0x381,0x3f3,0x565,0x6da)+'t']=_0xca0599(0x424,0x664,0x5fb,0x63d),_0x3968f4['id']='owner';const _0x590abb={};_0x590abb['quickReply'+_0xca0599(0x4ed,0x340,0x377,0x43d)]=_0x3968f4;var _0x309313=[_0x4e1822,_0x2e62c2,_0x590abb];const _0x591cf9={};_0x591cf9[_0x10f136(0x102,0x1f7,0x190,-0xf)]=m['chat'],_0x591cf9[_0x10f136(0x140,0x347,0x2bc,0x26e)]=m,await alpha[_0x10f136(0x3af,0x3b5,0x585,0x44c)+'c'](from,_0xd658c9,'©\x20'+ownername,_0x310048,_0x309313,_0x591cf9);})[_0x42ed2f(0x887,0x6a9,0x7b3,0x9ba)](_0x5b0711=>{function _0x2a5aea(_0x13a719,_0x2ddf0a,_0x17d0c9,_0x1a4377){return _0x185cf8(_0x13a719-0xd0,_0x13a719- -0xff,_0x17d0c9-0x15e,_0x2ddf0a);}reply(lang[_0x2a5aea(0x289,0x1bb,0x105,0x13f)]());});}break;case'ytstalk':case _0x42ed2f(0x732,0x526,0x712,0x650)+'lk':{if(!q)return reply(lang['KisahNabi'](prefix,command,_0x42ed2f(0x5e3,0x489,0x696,0x7c8)));srch=''+q,yts(''+srch)[_0x42ed2f(0x8fe,0x8c9,0x821,0x80e)](async _0x227b87=>{const _0x5d7592={'JqOPb':_0x4d110d(0x2f0,0x472,0x2df,0x331),'wjssm':'channel','ooacj':function(_0x5f53d8,_0xda6a25){return _0x5f53d8(_0xda6a25);},'oeaog':_0x188a83(0x63d,0x504,0x42e,0x68a)+'----------'+_0x188a83(0x5b1,0x4ae,0x732,0x596)+_0x4d110d(-0x114,0x187,-0x1d,-0x247)+'-\x0a'};aramat=_0x227b87[_0x188a83(0x897,0x9cd,0x8f3,0x978)];var _0x5e7a62=await _0x5d7592[_0x188a83(0x87f,0x706,0x8d8,0x716)](getBuffer,aramat[-0x2c5+-0x4*-0x350+0xa7b*-0x1][_0x4d110d(0x140,-0x171,-0xd6,-0x2)]);function _0x188a83(_0x19c98f,_0x43b556,_0x45e066,_0x27ff4b){return _0x185cf8(_0x19c98f-0xe9,_0x19c98f-0x28d,_0x45e066-0x16f,_0x45e066);}let _0x4e0576=_0x227b87[_0x188a83(0x897,0x715,0x65e,0xa39)]['map'](_0x203869=>{function _0x2c448e(_0x5b586b,_0x37361c,_0x5001eb,_0x3cdc25){return _0x4d110d(_0x5b586b-0x8c,_0x37361c-0x188,_0x37361c-0x21d,_0x5b586b);}function _0x1933ba(_0x206a72,_0x1910f7,_0x13bf8d,_0x2d3290){return _0x188a83(_0x206a72- -0x270,_0x1910f7-0x165,_0x2d3290,_0x2d3290-0x15b);}switch(_0x203869[_0x1933ba(0x672,0x89e,0x7b6,0x539)]){case _0x5d7592[_0x2c448e(0x20c,0x2ee,0x4e9,0x301)]:return'\x0a'['trim']();case _0x5d7592['wjssm']:return(_0x1933ba(0x29d,0x157,0x3fa,0x18e)+'\x20:\x20*'+_0x203869[_0x1933ba(0x252,0x117,0x1f6,0x20a)]+'*\x0a🌀\x20Url\x20:\x20'+_0x203869['url']+(_0x2c448e(0x313,0x473,0x69d,0x2e4)+_0x2c448e(0x1ef,0x305,0x28f,0x16e))+_0x203869[_0x1933ba(0x454,0x488,0x421,0x3ef)+_0x2c448e(0x586,0x379,0x490,0x2d2)]+'\x20('+_0x203869[_0x2c448e(0x400,0x328,0x146,0x239)]+(')\x0a🎦\x20Total\x20'+_0x2c448e(0x15c,0x11f,0x259,0x173))+_0x203869[_0x2c448e(0x52d,0x52f,0x483,0x501)]+'\x0a')[_0x1933ba(0x639,0x5fd,0x747,0x728)]();}})[_0x4d110d(0x89,0x166,-0x8a,0x74)](_0x12598e=>_0x12598e)[_0x4d110d(0x202,0x4e0,0x2ec,0xba)](_0x5d7592['oeaog']);const _0x2895a7={};_0x2895a7[_0x4d110d(0x120,0x492,0x2fb,0x2f5)+'t']=_0x188a83(0x4c0,0x40c,0x33f,0x566),_0x2895a7[_0x188a83(0x564,0x6c2,0x694,0x788)]=aramat[0xadd+-0x5*0x293+0x202][_0x188a83(0x564,0x790,0x32e,0x70f)];const _0x4dabcc={};function _0x4d110d(_0x1e42fd,_0x1e2f1c,_0x231e00,_0x760748){return _0x185cf8(_0x1e42fd-0xbc,_0x231e00- -0x341,_0x231e00-0x2a,_0x760748);}_0x4dabcc['urlButton']=_0x2895a7;let _0x3337f2=[_0x4dabcc];alpha[_0x188a83(0x8e9,0xaff,0x79f,0x7b8)+'c'](m[_0x4d110d(-0x13d,0x2e,-0x40,-0x1c)],_0x4e0576,'©\x20'+ownername,_0x5e7a62,_0x3337f2);})['catch'](_0x4d311d=>{function _0xb19a51(_0x2207cd,_0x2d656a,_0x4e2425,_0x5a5351){return _0x185cf8(_0x2207cd-0x7e,_0x5a5351-0x225,_0x4e2425-0x80,_0x4e2425);}function _0x5e7fb2(_0x4ac89f,_0x331f96,_0x33b676,_0x275d1a){return _0x185cf8(_0x4ac89f-0x14d,_0x275d1a- -0x73,_0x33b676-0x1a7,_0x33b676);}const _0x1be278={'YYpqs':function(_0x499913,_0xf7099b){return _0x499913(_0xf7099b);}};_0x1be278[_0x5e7fb2(0x412,0x2ad,0x42e,0x492)](reply,lang[_0x5e7fb2(0x364,0x46b,0x311,0x315)]());});}break;case _0x42ed2f(0x864,0x6c4,0x819,0x9c7):case _0x185cf8(0x354,0x2e0,0x111,0x2a8):{if(!q)return reply(lang[_0x42ed2f(0x77f,0x659,0x604,0x691)](prefix,command,_0x185cf8(0x311,0x459,0x56a,0x4ee)));srch=''+q,yts(''+srch)[_0x185cf8(0x67b,0x5e4,0x582,0x73e)](async _0x1906ba=>{function _0x3df51b(_0x2886c9,_0x34fbfe,_0x4affa6,_0x59d85c){return _0x42ed2f(_0x2886c9-0xbe,_0x34fbfe,_0x4affa6- -0x4c0,_0x59d85c-0x15);}const _0x47d9c2={'nVDkN':function(_0x41772c,_0x34645e){return _0x41772c===_0x34645e;},'liYrG':'MEswu','XUzYE':_0x2406cf(0x56b,0x46b,0x3e8,0x460),'txCyh':function(_0x3a43fb,_0x1ce52e){return _0x3a43fb(_0x1ce52e);},'nYvTW':_0x2406cf(0x2ae,0x429,0x45e,0x2c9)+'----------'+_0x3df51b(0x27f,0x2ca,0xa1,0x246)+_0x2406cf(0x3a9,0x4e2,0x3d2,0x5bc)+'-\x0a'};aramat=_0x1906ba[_0x3df51b(0x51e,0x4ac,0x387,0x228)];var _0x3607cc=await _0x47d9c2[_0x2406cf(0x3bc,0x4fa,0x4e8,0x49d)](getBuffer,aramat[-0xd95+0x2*0x7ac+0x1*-0x1c3][_0x3df51b(-0x225,0xf8,-0x18,-0x69)]);let _0x26ec68=_0x1906ba[_0x2406cf(0x5f6,0x7c3,0x6b8,0x7c2)]['map'](_0xf9769a=>{function _0x136c13(_0xb40128,_0x33fe4f,_0x2624d5,_0x2e6b92){return _0x2406cf(_0xb40128-0x163,_0xb40128,_0x33fe4f- -0x24d,_0x2e6b92-0xa9);}function _0x333100(_0x785769,_0x1c88aa,_0xf8f7c7,_0x42569a){return _0x2406cf(_0x785769-0xa,_0x1c88aa,_0xf8f7c7- -0x175,_0x42569a-0xf6);}if(_0x47d9c2[_0x333100(0x243,0x4b4,0x442,0x2b0)](_0x47d9c2[_0x333100(0x579,0x235,0x41b,0x374)],_0x47d9c2['liYrG']))switch(_0xf9769a[_0x136c13(0x65f,0x4b6,0x42e,0x310)]){case _0x333100(0x391,0x38a,0x559,0x594):return('\x0a📛\x20Title\x20:'+'\x20*'+_0xf9769a['title']+('*\x20\x0a⏰\x20Duras'+_0x136c13(0x2e4,0x408,0x4b0,0x22b))+_0xf9769a['timestamp']+(_0x136c13(0x4cc,0x493,0x2d9,0x4cb)+'d\x20')+_0xf9769a[_0x136c13(0x290,0x433,0x63e,0x457)]+(_0x136c13(-0xec,0x128,-0xf6,0x21b)+'\x20')+_0xf9769a[_0x136c13(0xa2,0x71,0x151,0x1b0)]+_0x333100(0x198,0x1f4,0x294,0x2f7)+_0xf9769a[_0x333100(0x1e0,0x444,0x210,0xef)]+_0x136c13(0x3bc,0x255,0x3a8,0x238))['trim']();case _0x47d9c2[_0x136c13(0x36b,0x249,0x236,0xb7)]:return(_0x136c13(0x1e5,0xe1,-0x11d,0x302)+_0x333100(0x591,0x416,0x530,0x382)+_0xf9769a[_0x333100(-0x66,0x352,0x16e,-0x9d)]+_0x136c13(0x50,0x1fb,0x30e,0x287)+_0xf9769a[_0x136c13(-0xbc,0x138,-0x1e,0x320)]+('\x0a👻\x20Subscri'+'ber\x20:\x20')+_0xf9769a[_0x136c13(0x10d,0x298,0x40d,0x1a0)+_0x136c13(0x1e1,0x2fe,0x1b2,0x1c5)]+'\x20('+_0xf9769a[_0x136c13(0xa7,0x2ad,0x311,0x44e)]+(')\x0a🎦\x20Total\x20'+_0x333100(0x16c,-0x1,0x17c,0x178))+_0xf9769a[_0x333100(0x475,0x476,0x58c,0x548)]+'\x0a')[_0x333100(0x4b5,0x6ac,0x555,0x5d7)]();}else return _0xb06f12;})[_0x2406cf(0x399,0x515,0x365,0x40b)](_0x6d2773=>_0x6d2773)[_0x2406cf(0x8d4,0x758,0x6db,0x8a4)](_0x47d9c2[_0x3df51b(0x1c0,-0x232,-0xb,-0xbf)]);const _0x1f3cbe={};_0x1f3cbe[_0x3df51b(0x462,0x219,0x3b9,0x3f4)+'t']=aramat[0x1de3+0x1dee+-0x3bd1]['title'],_0x1f3cbe[_0x2406cf(0x4ca,0x1f8,0x385,0x498)]=aramat[-0x1*0x9d+-0x32+0xcf*0x1]['url'];const _0x4c552a={};function _0x2406cf(_0x1d3455,_0x47eb16,_0x48a742,_0x5c64de){return _0x185cf8(_0x1d3455-0x4a,_0x48a742-0xae,_0x48a742-0x5c,_0x47eb16);}_0x4c552a[_0x3df51b(0x1f3,0x5da,0x3dc,0x4e7)]=_0x1f3cbe;const _0x1f6767={};_0x1f6767['displayTex'+'t']=aramat[0x21*0x6b+-0x1fef+0x1225][_0x2406cf(0x69b,0x5b2,0x5ac,0x629)],_0x1f6767[_0x2406cf(0x36d,0x30e,0x385,0x211)]=aramat[0x232*-0x10+-0x1f64+0x1*0x4285]['url'];const _0x3f07aa={};_0x3f07aa[_0x2406cf(0x7c9,0x8fb,0x70d,0x616)]=_0x1f6767;const _0x245b6c={};_0x245b6c[_0x3df51b(0x3db,0x373,0x3b9,0x2ce)+'t']=aramat[0x1205+-0x653*-0x1+0xb2*-0x23]['title'],_0x245b6c['url']=aramat[-0x405+-0x30a*0xa+0x226b][_0x2406cf(0x46b,0x1fa,0x385,0x175)];const _0x132995={};_0x132995[_0x3df51b(0x437,0x20b,0x3dc,0x484)]=_0x245b6c;let _0x140de0=[_0x4c552a,_0x3f07aa,_0x132995];alpha[_0x3df51b(0x328,0x320,0x3d9,0x606)+'c'](m[_0x3df51b(0x54,0x290,0x7e,0x1d9)],_0x26ec68,'©\x20'+ownername,_0x3607cc,_0x140de0);});}break;case _0x185cf8(0x3ea,0x218,0x33d,0x2f4):case _0x42ed2f(0x685,0x96c,0x7f7,0x66c):if(!q)return reply(lang['KisahNabi'](prefix,command,_0x185cf8(0x552,0x459,0x556,0x536)));srch=''+q;var aramas=await yts(srch);aramat=aramas[_0x42ed2f(0x91e,0x7dd,0x847,0x788)];var tbuff=await getBuffer(aramat[-0xc4b+-0xebe+-0x1b09*-0x1]['image']),ytresult='';ytresult+=_0x185cf8(0x1c0,0x370,0x441,0x4b0)+_0x42ed2f(0x7ed,0x535,0x619,0x807),ytresult+=_0x185cf8(0x3ea,0x354,0x37f,0x31d)+_0x185cf8(0x2c8,0x25d,0x49,0x36b)+_0x42ed2f(0x6bc,0x89d,0x82b,0x92a),aramas['all']['map'](_0x2bfb4d=>{const _0xb6191c={};_0xb6191c[_0x4972a0(0x360,0x266,0x464,0x481)]=function(_0x2c5147,_0x3b5feb){return _0x2c5147+_0x3b5feb;};function _0x4972a0(_0x5349fe,_0x37a837,_0x41efb4,_0x807b84){return _0x185cf8(_0x5349fe-0x168,_0x5349fe- -0xb5,_0x41efb4-0x100,_0x37a837);}_0xb6191c[_0x4972a0(0x427,0x650,0x4b9,0x61e)]=_0x4972a0(0x56f,0x70e,0x4a3,0x66a);function _0x2abb9a(_0x4a9534,_0x34336e,_0xe1f013,_0x499504){return _0x185cf8(_0x4a9534-0xe6,_0xe1f013-0x159,_0xe1f013-0x19a,_0x34336e);}_0xb6191c[_0x2abb9a(0x95d,0x5be,0x73e,0x8e0)]=_0x2abb9a(0x6c9,0x3aa,0x4ad,0x2ad)+_0x2abb9a(0x4d7,0x56a,0x3b6,0x38b)+_0x2abb9a(0x829,0x689,0x747,0x86a),_0xb6191c['EmXbm']=function(_0x5c9d3c,_0x1dd0b1){return _0x5c9d3c+_0x1dd0b1;},_0xb6191c[_0x2abb9a(0x6f6,0x6be,0x6c4,0x490)]=_0x4972a0(0x391,0x5b4,0x2fe,0x2e1),_0xb6191c[_0x4972a0(0x436,0x4c7,0x523,0x42f)]=function(_0x1744ca,_0x3c48ef){return _0x1744ca+_0x3c48ef;},_0xb6191c['RjSHS']=_0x2abb9a(0x612,0x493,0x495,0x3e9),_0xb6191c[_0x4972a0(0x32c,0x386,0x51f,0x344)]=_0x4972a0(0x3ca,0x2ec,0x482,0x3bb);const _0x418a1c=_0xb6191c,_0x527f09='2|3|1|4|0'['split']('|');let _0x46b125=-0x1*-0x66b+-0x257d+0x1f12;while(!![]){switch(_0x527f09[_0x46b125++]){case'0':ytresult+=_0x418a1c[_0x2abb9a(0x69a,0x528,0x56e,0x79d)](_0x418a1c[_0x2abb9a(0x7e2,0x527,0x635,0x6b7)],_0x2bfb4d[_0x4972a0(0x51d,0x692,0x2f7,0x3e3)])+_0x418a1c[_0x4972a0(0x530,0x74f,0x33d,0x490)];continue;case'1':ytresult+=_0x418a1c['nTdzH'](_0x418a1c[_0x4972a0(0x360,0x301,0x46d,0x537)](_0x4972a0(0x4d5,0x51a,0x656,0x305),_0x2bfb4d[_0x2abb9a(0x466,0x781,0x554,0x74c)]),'\x0a');continue;case'2':ytresult+=_0x418a1c[_0x2abb9a(0x75e,0x66f,0x78e,0x99f)](_0x418a1c['EmXbm'](_0x418a1c[_0x2abb9a(0x78b,0x4ff,0x6c4,0x824)],_0x2bfb4d['title']),'\x0a');continue;case'3':ytresult+=_0x418a1c['RHucs'](_0x418a1c['RjSHS'],_0x2bfb4d[_0x2abb9a(0x5f0,0x496,0x430,0x5f6)])+'\x0a';continue;case'4':ytresult+=_0x418a1c[_0x4972a0(0x436,0x3a1,0x60e,0x460)](_0x418a1c[_0x4972a0(0x360,0x182,0x371,0x37b)](_0x418a1c['NckxT'],_0x2bfb4d['views']),'\x0a');continue;}break;}}),ytresult+='*WHATSAPP-'+_0x185cf8(0x609,0x483,0x527,0x333);const _0x59d866={};_0x59d866[_0x185cf8(0x2c9,0x26b,0x428,0x83)]=tbuff,_0x59d866[_0x42ed2f(0x5b8,0x72e,0x781,0x568)]=ytresult;const _0x54f850={};_0x54f850[_0x42ed2f(0x791,0x7ad,0x5d0,0x4bd)]=m,alpha[_0x42ed2f(0x45c,0x669,0x5a0,0x4a0)+'e'](from,_0x59d866,_0x54f850);break;case _0x42ed2f(0x63e,0x56c,0x690,0x605):case _0x42ed2f(0x4ff,0x8a3,0x716,0x8af)+'k':case _0x42ed2f(0x631,0x43a,0x53a,0x46a):{if(!text)return reply(lang[_0x42ed2f(0x400,0x826,0x604,0x47c)](prefix,command,_0x185cf8(0x400,0x32a,0x495,0x225)));reply(lang[_0x185cf8(0x442,0x2d5,0x1a6,0x3a0)]());let y=await fetchJson('https://ap'+_0x185cf8(0x4c3,0x38a,0x171,0x3d2)+_0x185cf8(0x3c3,0x52d,0x58d,0x37f)+q),ppgt=await getBuffer(y[_0x42ed2f(0x470,0x360,0x51b,0x73b)]),textt=_0x42ed2f(0x480,0x575,0x645,0x60b)+_0x42ed2f(0x84b,0x7f0,0x661,0x66a)+_0x42ed2f(0x5a5,0x777,0x5c6,0x44c)+enter+enter+(_0x42ed2f(0x53d,0x495,0x4aa,0x277)+'\x20:\x20')+y[_0x42ed2f(0x5bb,0x7e1,0x703,0x59c)]+enter+_0x185cf8(0x593,0x607,0x6b8,0x700)+y['name']+enter+_0x185cf8(0x424,0x53f,0x449,0x4db)+y['id']+enter+(_0x42ed2f(0x6d2,0x5c2,0x6e4,0x54a)+':\x20')+y[_0x42ed2f(0x751,0x80f,0x6eb,0x8d7)]+enter+(_0x185cf8(0x2bd,0x224,0x16e,0x13f)+_0x185cf8(-0x11,0x21b,0x42f,0x2de))+y[_0x42ed2f(0x399,0x6f0,0x519,0x2fd)]+enter+(_0x42ed2f(0x666,0x260,0x45c,0x416)+_0x185cf8(0x2d0,0x24d,0x19e,0x28d))+y[_0x185cf8(0xcd,0x23a,0x2c5,0x268)]+enter+_0x185cf8(0x260,0x39f,0x53a,0x417)+y[_0x42ed2f(0x883,0x7ca,0x892,0x9bf)]+enter+(_0x42ed2f(0x90e,0x7df,0x7de,0x82d)+':\x20')+y[_0x42ed2f(0x673,0x7d8,0x7df,0x857)]+enter+_0x42ed2f(0x5cc,0x650,0x5a3,0x3f8)+y[_0x42ed2f(0x7c4,0x7e2,0x87b,0x67a)]+enter+('📍\x20Location'+_0x42ed2f(0x3dd,0x38c,0x568,0x700))+y[_0x42ed2f(0x4bf,0x439,0x4de,0x39b)]+enter+_0x42ed2f(0x660,0x6f3,0x850,0x92d)+y[_0x185cf8(0x766,0x5d3,0x7f7,0x728)]+enter+'💌\x20Bio\x20:\x20'+y[_0x185cf8(0x13f,0x36b,0x4f5,0x370)]+enter+(_0x42ed2f(0x468,0x523,0x499,0x4e0)+'Username\x20:'+'\x20')+y[_0x185cf8(0x48c,0x57e,0x5d3,0x755)+'ername']+enter+('🔮\x20Public\x20R'+'epo\x20:\x20')+y[_0x185cf8(-0x17,0x220,0xbb,0x376)+'os']+enter+(_0x42ed2f(0x267,0x498,0x46b,0x5f4)+_0x42ed2f(0x475,0x4a0,0x490,0x4e5))+y[_0x185cf8(0x54e,0x419,0x214,0x537)+'ts']+enter+('📅\x20Created\x20'+':\x20')+moment(y[_0x185cf8(0x361,0x320,0x271,0x20e)])['tz']('Asia/Jakar'+'ta')['locale']('id')[_0x185cf8(0x261,0x26e,0x1f6,0x106)](_0x42ed2f(0x930,0x66e,0x792,0x85b)+_0x42ed2f(0x665,0x79d,0x7ee,0x7d9))+enter+(_0x185cf8(0x294,0x3ae,0x1f1,0x2a7)+'\x20')+moment(y[_0x185cf8(0x5b3,0x5b0,0x4f2,0x7ba)])['tz']('Asia/Jakar'+'ta')[_0x185cf8(0x530,0x3a3,0x206,0x2e6)]('id')['format']('HH:mm:ss\x20D'+_0x185cf8(0x73c,0x5b1,0x40c,0x49f))+enter+(_0x185cf8(0x584,0x52c,0x405,0x492)+_0x42ed2f(0x3eb,0x3d6,0x4d7,0x693)+_0x185cf8(0x7d8,0x629,0x67d,0x62c))+q;const _0x417f6d={};_0x417f6d[_0x42ed2f(0x6cd,0x84b,0x879,0xa27)+'t']=_0x42ed2f(0x3f0,0x5c6,0x489,0x56d)+'e',_0x417f6d[_0x42ed2f(0x6f7,0x34f,0x514,0x53e)]=''+youtube;const _0x260341={};_0x260341[_0x42ed2f(0x9f7,0x985,0x89c,0x722)]=_0x417f6d;const _0x432b00={};_0x432b00['displayTex'+'t']=_0x42ed2f(0x775,0x830,0x7ab,0x8fa),_0x432b00['id']=_0x42ed2f(0x87d,0x5ea,0x6b6,0x54a);const _0x3ed74a={};_0x3ed74a[_0x185cf8(0x2f7,0x3cb,0x50b,0x1e5)+_0x185cf8(0x213,0x2f2,0x2b8,0x501)]=_0x432b00;const _0x4ab217={};_0x4ab217['displayTex'+'t']=_0x42ed2f(0x80c,0x902,0x72f,0x87d),_0x4ab217['id']='owner';const _0x1270ae={};_0x1270ae['quickReply'+_0x42ed2f(0x39a,0x302,0x52f,0x579)]=_0x4ab217;var but=[_0x260341,_0x3ed74a,_0x1270ae];const _0x691cf1={};_0x691cf1[_0x42ed2f(0x293,0x478,0x4a4,0x577)]=m['chat'],_0x691cf1[_0x42ed2f(0x6fe,0x3d1,0x5d0,0x436)]=m,await alpha[_0x185cf8(0x3ab,0x5cd,0x433,0x430)+'g'](from,textt,'©\x20'+ownername,ppgt,but,_0x691cf1);break;}break;case _0x185cf8(0x4d0,0x3a2,0x58e,0x172)+_0x185cf8(0x2ba,0x1f5,0x7b,0x9b):case _0x185cf8(0x5ed,0x46f,0x62f,0x298):case _0x185cf8(0x337,0x343,0x502,0x552):case _0x42ed2f(0x4fc,0x548,0x665,0x679):case _0x185cf8(0x3e6,0x215,0x230,0x1be):{if(kuismath[_0x42ed2f(0x3a7,0x489,0x5b5,0x401)+_0x185cf8(0x2fd,0x520,0x3f5,0x63a)](m['sender'][_0x185cf8(0x31b,0x54d,0x319,0x41a)]('@')[-0x551+0x1928+0x69d*-0x3]))return reply(_0x42ed2f(0x624,0x4d7,0x4bb,0x335)+_0x42ed2f(0x867,0x9a6,0x79e,0x783)+_0x42ed2f(0x75b,0x96c,0x86c,0x8f7)+'\x20Kah?');if(!text)return reply(_0x42ed2f(0x82d,0x5b4,0x7e9,0x80a)+_0x42ed2f(0x63d,0x256,0x44e,0x5bf)+(prefix+command)+(_0x42ed2f(0x43e,0x572,0x555,0x3ec)+'ematika*\x0aC'+_0x185cf8(0x322,0x31e,0x324,0x40b))+(prefix+command)+_0x42ed2f(0x421,0x3bb,0x42d,0x28d));let val=text[_0x42ed2f(0x4dd,0x5cb,0x50c,0x524)](/[^0-9\-\/+*×÷πEe()piPI/]/g,'')[_0x185cf8(0xbf,0x2cf,0x272,0x25c)](/×/g,'*')[_0x185cf8(0x36d,0x2cf,0x4f5,0x3d3)](/÷/g,'/')[_0x185cf8(0x38d,0x2cf,0x252,0x352)](/π|pi/gi,_0x185cf8(0x497,0x3b7,0x54a,0x4dc))[_0x185cf8(0x4c4,0x2cf,0xfa,0x1ed)](/e/gi,_0x42ed2f(0x31f,0x329,0x545,0x577))[_0x42ed2f(0x512,0x3d0,0x50c,0x49c)](/\/+/g,'/')[_0x185cf8(0x3f1,0x2cf,0x30f,0x210)](/\++/g,'+')[_0x42ed2f(0x5d8,0x44e,0x50c,0x5a7)](/-+/g,'-'),format=val[_0x42ed2f(0x622,0x720,0x50c,0x539)](/Math\.PI/g,'π')[_0x42ed2f(0x681,0x3ee,0x50c,0x626)](/Math\.E/g,'e')[_0x185cf8(0x345,0x2cf,0x285,0x187)](/\//g,'÷')[_0x42ed2f(0x342,0x384,0x50c,0x471)](/\*×/g,'×');try{console[_0x185cf8(0x647,0x54c,0x4b7,0x4b1)](val);let result=new Function(_0x42ed2f(0x56c,0x41a,0x48f,0x3bf)+val)();if(!result)throw result;reply(_0x185cf8(0x3e7,0x2aa,0x7b,0x46c)+'\x20*'+format+_0x185cf8(0x568,0x37d,0x2f9,0x350)+result+'_');}catch(_0x3509e5){if(_0x3509e5==undefined)reply('Isinya?');reply('Format\x20sal'+_0x185cf8(0x427,0x1fc,0x1e5,0x2ca)+_0x42ed2f(0x3c2,0x4ac,0x5b8,0x40c)+'mbol\x20-,\x20+,'+_0x185cf8(0x253,0x3c8,0x5fe,0x259)+_0x42ed2f(0x9b0,0x75f,0x780,0x99b)+_0x185cf8(0x3e3,0x5ad,0x63e,0x42b)+_0x185cf8(0x391,0x44d,0x24a,0x469));}}break;case'ttp':case _0x185cf8(0x29f,0x462,0x666,0x49f):if(!text)return reply(lang[_0x185cf8(0x4a7,0x3c7,0x5e0,0x217)](prefix,command,_0x42ed2f(0x7d0,0x7e6,0x696,0x502)));const _0x5691bf={};_0x5691bf[_0x42ed2f(0x438,0x6f3,0x657,0x820)]=global[_0x42ed2f(0x77f,0x658,0x657,0x45d)],_0x5691bf[_0x42ed2f(0x727,0x591,0x65a,0x4e8)]=global[_0x185cf8(0x341,0x41d,0x623,0x363)];let encmedia=await alpha[_0x185cf8(0x7a8,0x58c,0x681,0x644)+_0x42ed2f(0x6c3,0x524,0x642,0x4a5)](m[_0x185cf8(0x3dc,0x301,0x318,0x351)],_0x42ed2f(0x3c1,0x2ee,0x4db,0x5a4)+'eam.xyz/'+command+(_0x185cf8(0x470,0x534,0x3c2,0x426)+'=')+text,m,_0x5691bf);await fs[_0x42ed2f(0x8c8,0x743,0x888,0x994)](encmedia);break;case _0x42ed2f(0x749,0x5c6,0x6a5,0x72a):{let [emoji1,emoji2]=text[_0x185cf8(0x3f7,0x54d,0x53b,0x533)]`+`;if(!emoji1)throw'Example\x20:\x20'+(prefix+command)+'\x20😅+💩';if(!emoji2)return reply(_0x42ed2f(0x845,0x7b9,0x82c,0x7c1)+(prefix+command)+_0x42ed2f(0x4fb,0x77d,0x6db,0x8bf));let anu=await fetchJson(_0x185cf8(0x7cc,0x5c6,0x55b,0x497)+'nor.google'+_0x42ed2f(0x99d,0x94a,0x77f,0x8a9)+_0x185cf8(0x42d,0x4e0,0x3d9,0x2c8)+_0x42ed2f(0x661,0x97b,0x830,0x8da)+_0x185cf8(0x477,0x323,0x1cf,0x507)+_0x42ed2f(0x4bd,0x467,0x67f,0x68c)+_0x185cf8(0x46e,0x457,0x31d,0x583)+_0x42ed2f(0x354,0x6e1,0x4ad,0x28f)+_0x42ed2f(0x4c5,0x3fc,0x550,0x4b6)+'igh&media_'+_0x185cf8(0x52c,0x65d,0x4e9,0x566)+_0x42ed2f(0x5be,0x8ba,0x6e2,0x7e2)+'nt&compone'+_0x42ed2f(0x6ae,0x692,0x5a6,0x682)+'ve&collect'+_0x42ed2f(0x73c,0x4fa,0x607,0x7ac)+_0x42ed2f(0x66e,0x7dd,0x6e7,0x53f)+_0x185cf8(0x3d7,0x482,0x4f5,0x34b)+encodeURIComponent(emoji1)+'_'+encodeURIComponent(emoji2));for(let res of anu['results']){let encmedia=await alpha[_0x185cf8(0x2d0,0x263,0x261,0x411)+_0x185cf8(0x635,0x405,0x2e7,0x268)](m[_0x42ed2f(0x460,0x365,0x53e,0x5db)],res[_0x185cf8(0x34f,0x2d7,0x10f,0x2b7)],m,{'packname':global[_0x42ed2f(0x59d,0x472,0x657,0x48d)],'author':global[_0x42ed2f(0x5e1,0x687,0x65a,0x5b6)],'categories':res['tags']});await fs['unlinkSync'](encmedia);}}break;case _0x185cf8(0x706,0x5d7,0x6f9,0x5ce):case _0x42ed2f(0x3c8,0x592,0x42f,0x3b5):{if(!quoted)return reply(lang['Tomp4'](prefix,command));if(!/webp/[_0x185cf8(0x495,0x538,0x46c,0x601)](mime))return reply(lang['Tomp4'](prefix,command));m[_0x42ed2f(0x766,0x785,0x7a2,0x6b7)](lang[_0x185cf8(0xd3,0x2d5,0x2bc,0x213)]());let media=await alpha['downloadAn'+'dSaveMedia'+_0x185cf8(0x6e8,0x572,0x5aa,0x697)](quoted),webpToMp4=await webp2mp4File(media);const _0x36469a={};_0x36469a[_0x42ed2f(0x3f3,0x6cd,0x514,0x512)]=webpToMp4['result'],await alpha[_0x42ed2f(0x43f,0x64b,0x5a0,0x698)+'e'](m[_0x42ed2f(0x65e,0x597,0x53e,0x54d)],{'video':_0x36469a,'caption':lang['ok']()},{'quoted':m}),await fs[_0x42ed2f(0x8a4,0x6a5,0x888,0x686)](media);}break;case _0x185cf8(0x443,0x31f,0x414,0x2ef):{if(!quoted)return reply(lang[_0x42ed2f(0x605,0x426,0x610,0x6a9)](prefix,command));if(!/webp/[_0x42ed2f(0x82b,0x78a,0x775,0x57e)](mime))return reply(lang[_0x42ed2f(0x42a,0x414,0x610,0x42a)](prefix,command));reply(lang[_0x42ed2f(0x3c1,0x5c1,0x512,0x434)]());let media=await alpha[_0x185cf8(0x5f4,0x52a,0x483,0x6c6)+'dSaveMedia'+'Message'](quoted),webpToMp4=await webp2mp4File(media);const _0x4eec74={};_0x4eec74['url']=webpToMp4['result'],await alpha[_0x185cf8(0x388,0x363,0x503,0x1c6)+'e'](m[_0x185cf8(0x302,0x301,0x3e2,0x37e)],{'video':_0x4eec74,'caption':lang['ok'](),'gifPlayback':!![]},{'quoted':m}),await fs[_0x42ed2f(0x706,0x8a6,0x888,0x69f)](media);}break;case _0x42ed2f(0x598,0x5fd,0x483,0x45f):{if(!quoted)return reply(lang[_0x42ed2f(0x557,0x8d6,0x707,0x8da)](prefix,command));reply(mess[_0x185cf8(0x2ca,0x2d5,0x4fe,0xe3)]);if(!/webp/[_0x185cf8(0x300,0x538,0x33a,0x44c)](mime)&&/image|video|gif/[_0x185cf8(0x5d8,0x538,0x406,0x540)](mime)){let media=await alpha[_0x185cf8(0x3dd,0x52a,0x6ee,0x72a)+_0x185cf8(0x6b8,0x50b,0x36b,0x339)+'Message'](quoted),anu=await TelegraPh(media);reply(util['format'](anu)),await fs[_0x185cf8(0x7c7,0x64b,0x604,0x79d)](media);}else{if(!/video|gif/[_0x42ed2f(0x7b6,0x965,0x775,0x5f2)](mime)){let media=await m[_0x42ed2f(0x9bb,0x7bb,0x7ac,0x87b)+'er'](quoted),anu=await fileIO(media,mime[_0x42ed2f(0x962,0x7e0,0x78a,0x593)]('/')[-0x109c+0x26f4+-0x1657]);reply(util[_0x185cf8(0x44b,0x26e,0x29c,0x3b6)](anu['link']+'\x20('+anu[_0x42ed2f(0x7bf,0x623,0x640,0x765)]+')'));}}}break;case _0x185cf8(0x25d,0x44e,0x2c6,0x624):case'session':case _0x42ed2f(0x4f4,0x7e1,0x5e4,0x6ef)+'n':if(!m[_0x42ed2f(0x79f,0x7e5,0x659,0x696)][_0x185cf8(0x16d,0x25a,0x482,0xe4)]&&!isCreator)return reply(lang[_0x42ed2f(0x8d5,0x912,0x784,0x94d)]());alpha[_0x42ed2f(0x532,0x3a5,0x5a0,0x69d)+'e'](m[_0x42ed2f(0x74c,0x75a,0x53e,0x4bf)],{'document':fs[_0x42ed2f(0x8ee,0x673,0x83d,0x7b5)+'nc'](sessionName+_0x185cf8(0x22c,0x464,0x514,0x457)),'mimetype':_0x185cf8(0x48b,0x357,0x3f9,0x3b5),'fileName':_0x42ed2f(0x5ac,0x63d,0x47a,0x5a2)+'lti-device'+_0x185cf8(0x36f,0x464,0x486,0x66c)},{'quoted':m});break;case'command':const sections=[{'title':_0x42ed2f(0x537,0x61c,0x4c2,0x66a)+'ot','rows':[{'title':_0x42ed2f(0x7c9,0x7d4,0x6d7,0x61e)+'Menu','rowId':_0x42ed2f(0x539,0x3e6,0x45a,0x65b),'description':lang[_0x185cf8(0x3ba,0x33e,0x1a2,0x238)]()}]},{'title':_0x42ed2f(0x8e9,0x7dc,0x824,0x6ce)+_0x42ed2f(0x5a0,0x6cc,0x602,0x578),'rows':[{'title':_0x185cf8(0x4d,0x264,0xcc,0x3db)+'rmation\x20Co'+_0x42ed2f(0x602,0x706,0x6ad,0x55e),'rowId':'infocmd','description':lang['InfoMenu']()}]},{'title':_0x42ed2f(0x974,0x849,0x824,0x61f)+'e-2','rows':[{'title':_0x42ed2f(0x648,0x4a3,0x58c,0x668)+'\x20Command','rowId':_0x185cf8(0x67d,0x54e,0x52c,0x604),'description':lang[_0x42ed2f(0x5d2,0x855,0x653,0x64f)]()}]},{'title':'Sub\x20Menu\x20K'+_0x42ed2f(0x3d2,0x775,0x5f2,0x5a6),'rows':[{'title':'📁\x20〉ɞ\x20Datab'+'ase\x20Comman'+'d','rowId':_0x42ed2f(0x526,0x8b6,0x6f7,0x6c7)+'d','description':lang[_0x42ed2f(0x56d,0x8ba,0x764,0x8da)]()}]},{'title':'Sub\x20Menu\x20K'+_0x185cf8(0x3ee,0x43c,0x392,0x2ac),'rows':[{'title':'👥\x20〉ɞ\x20Group'+_0x42ed2f(0x4ca,0x792,0x5d5,0x6b7),'rowId':_0x185cf8(0x485,0x51e,0x658,0x5d0),'description':lang[_0x185cf8(0x3fe,0x33d,0x348,0x196)]()}]},{'title':_0x42ed2f(0x76b,0x9dc,0x824,0x728)+_0x42ed2f(0x4d0,0x598,0x4f0,0x3f2),'rows':[{'title':_0x185cf8(0x309,0x2b4,0x450,0x37a)+_0x185cf8(0x28f,0x398,0x182,0x4ac),'rowId':_0x42ed2f(0x678,0x59b,0x7ad,0x944),'description':lang[_0x42ed2f(0x38a,0x755,0x5a4,0x3b8)]()}]},{'title':_0x185cf8(0x54e,0x5e7,0x57b,0x442)+_0x42ed2f(0x507,0x40d,0x564,0x6e1),'rows':[{'title':'⚠️\x20〉ɞ\x20Tag\x20C'+_0x42ed2f(0x493,0x414,0x49b,0x480),'rowId':'tagcmd','description':lang['TagMem']()}]},{'title':_0x185cf8(0x437,0x5e7,0x6a2,0x655)+_0x185cf8(0x15f,0x2c1,0x415,0x30d),'rows':[{'title':_0x42ed2f(0x533,0x7f2,0x6f4,0x6dd)+_0x42ed2f(0x5ed,0x8ae,0x80e,0x638)+'d','rowId':_0x42ed2f(0x3aa,0x6d5,0x517,0x70b),'description':lang[_0x185cf8(0x1e1,0x309,0xf1,0x52c)]()}]},{'title':_0x42ed2f(0x8f2,0x741,0x824,0x8be)+_0x185cf8(0x4e3,0x558,0x510,0x3cf),'rows':[{'title':_0x185cf8(0x3b7,0x4b5,0x6e4,0x3ed)+_0x42ed2f(0x749,0x7cf,0x643,0x7ee),'rowId':_0x42ed2f(0x8b9,0x929,0x7ff,0x6a8),'description':lang[_0x42ed2f(0x724,0x7ad,0x852,0x61e)]()}]},{'title':_0x185cf8(0x816,0x5e7,0x503,0x591)+_0x42ed2f(0x6ed,0x724,0x84e,0x677),'rows':[{'title':_0x185cf8(0x398,0x273,0x60,0x358)+_0x42ed2f(0x3a7,0x676,0x565,0x64a)+'nd','rowId':'converterc'+'md','description':lang['CovertWi']()}]},{'title':_0x42ed2f(0x967,0x7bd,0x824,0x752)+_0x42ed2f(0x507,0x77f,0x551,0x76a),'rows':[{'title':'🖼️\x20〉ɞ\x20Image'+_0x42ed2f(0x9e0,0x6d7,0x835,0xa08)+_0x185cf8(0x490,0x470,0x462,0x692),'rowId':_0x42ed2f(0x57a,0x3e6,0x614,0x565),'description':lang['AnuFoto']()}]},{'title':_0x185cf8(0x3e3,0x5e7,0x550,0x7b3)+'e-11','rows':[{'title':_0x185cf8(0x46f,0x506,0x5a2,0x59e)+_0x42ed2f(0x3be,0x473,0x57d,0x386)+_0x185cf8(0x208,0x248,0xb3,0x16e),'rowId':_0x42ed2f(0x73f,0x70e,0x614,0x747)+'2','description':lang[_0x185cf8(0x625,0x4d0,0x4e0,0x443)]()}]},{'title':_0x185cf8(0x6ce,0x5e7,0x4a4,0x43f)+_0x185cf8(0x327,0x4cb,0x2b4,0x4d2),'rows':[{'title':_0x42ed2f(0x926,0x661,0x714,0x6bf)+_0x42ed2f(0x3ee,0x50f,0x4ed,0x376)+'and','rowId':'downloader'+_0x185cf8(0x2de,0x450,0x3a4,0x351),'description':lang[_0x185cf8(0x26c,0x339,0x4e0,0x4d5)]()}]},{'title':'Sub\x20Menu\x20K'+_0x185cf8(0x338,0x3bd,0x43f,0x540),'rows':[{'title':_0x42ed2f(0x3ea,0x61d,0x495,0x370)+_0x42ed2f(0x60a,0x565,0x751,0x81d)+_0x42ed2f(0x7cc,0x6f1,0x6ad,0x510),'rowId':_0x185cf8(0x67b,0x4af,0x4a9,0x5d9),'description':lang['StikerWibu']()}]},{'title':_0x185cf8(0x6e5,0x5e7,0x4d1,0x68c)+_0x42ed2f(0x7c9,0xa04,0x83a,0x828),'rows':[{'title':'📬\x20〉ɞ\x20Nsfw\x20'+_0x185cf8(0x6ef,0x573,0x4e4,0x515)+_0x42ed2f(0x471,0x403,0x4c5,0x570),'rowId':_0x185cf8(0x3c5,0x499,0x486,0x5b3),'description':lang[_0x42ed2f(0x62c,0x802,0x78d,0x8e3)+'a']()}]},{'title':_0x42ed2f(0x880,0x979,0x824,0x689)+_0x42ed2f(0x65d,0x80c,0x7c0,0x631),'rows':[{'title':_0x185cf8(0x4a9,0x47e,0x541,0x2e9)+'Pro\x20Comman'+'d','rowId':_0x185cf8(0x588,0x636,0x5f9,0x557),'description':lang['MakeLogo']()}]},{'title':_0x42ed2f(0x64e,0x815,0x824,0x977)+'e-16','rows':[{'title':_0x42ed2f(0x4cc,0x47d,0x475,0x328)+_0x42ed2f(0x93d,0x69c,0x793,0x741),'rowId':'othercmd','description':lang[_0x185cf8(0x45f,0x435,0x3ed,0x40e)]()}]},{'title':_0x42ed2f(0x98c,0x707,0x824,0x8ef)+_0x42ed2f(0x6de,0x660,0x688,0x47e),'rows':[{'title':_0x42ed2f(0x5c9,0x6d9,0x641,0x4d2)+_0x185cf8(0x49b,0x398,0x4c4,0x3e4),'rowId':_0x185cf8(0x208,0x3c4,0x2de,0x518),'description':lang['GameBot']()}]},{'title':_0x42ed2f(0x978,0x738,0x824,0x9a0)+_0x185cf8(0x24f,0x391,0x1be,0x1b0),'rows':[{'title':_0x185cf8(0x179,0x207,0x31c,0x39c)+_0x42ed2f(0x231,0x649,0x45b,0x5de),'rowId':_0x42ed2f(0x7b2,0x76b,0x603,0x739),'description':lang[_0x185cf8(0x6cf,0x57c,0x5e1,0x660)]()}]},{'title':_0x42ed2f(0xa43,0x624,0x824,0x75c)+_0x185cf8(0x3a6,0x2c0,0x194,0x25d),'rows':[{'title':_0x185cf8(0x43b,0x42e,0x58f,0x3e6)+'\x20Command','rowId':_0x42ed2f(0x864,0x64f,0x87c,0x7a3),'description':lang['RandCew']()}]},{'title':_0x185cf8(0x5d6,0x5e7,0x431,0x461)+_0x185cf8(0x6c3,0x5ae,0x697,0x646),'rows':[{'title':_0x185cf8(0x49e,0x4e6,0x592,0x40e)+_0x185cf8(0x36d,0x52e,0x6b9,0x5d2),'rowId':_0x42ed2f(0x509,0x5d8,0x5f6,0x42c),'description':lang[_0x185cf8(0x533,0x5e3,0x6bc,0x644)]()}]},{'title':_0x42ed2f(0x75e,0x95f,0x824,0x6ec)+_0x185cf8(0x435,0x40e,0x218,0x347),'rows':[{'title':_0x185cf8(0x72e,0x510,0x708,0x35f)+'ticker\x20Com'+_0x42ed2f(0x761,0x5d6,0x651,0x591),'rowId':_0x42ed2f(0x4d6,0x530,0x623,0x689),'description':lang[_0x42ed2f(0x739,0x5b9,0x566,0x39f)]()}]},{'title':_0x185cf8(0x78c,0x5e7,0x469,0x70d)+_0x42ed2f(0x5e0,0x48c,0x606,0x7a4),'rows':[{'title':_0x185cf8(0x74a,0x5aa,0x525,0x4c2)+_0x185cf8(0x1ba,0x2a3,0x16b,0x44b)+'nd','rowId':_0x42ed2f(0x425,0x649,0x557,0x4ec),'description':lang[_0x185cf8(0x4dd,0x58f,0x46c,0x3de)+'gi']()}]},{'title':_0x185cf8(0x5b5,0x5e7,0x6a2,0x69f)+'e-23','rows':[{'title':_0x42ed2f(0x674,0x72e,0x6c9,0x6d5)+_0x42ed2f(0x409,0x56a,0x5d5,0x521),'rowId':_0x42ed2f(0x89c,0x5ee,0x7cf,0x9f2),'description':lang[_0x185cf8(0x41f,0x564,0x70a,0x45a)]()}]},{'title':'Sub\x20Menu\x20K'+_0x42ed2f(0x4e7,0x518,0x46c,0x479),'rows':[{'title':_0x42ed2f(0x69b,0x382,0x4d3,0x3a9)+'Maker\x20Comm'+_0x185cf8(0x1ba,0x288,0x4f,0x4ba),'rowId':'logocmd','description':lang[_0x185cf8(0x19a,0x3aa,0x2ce,0x360)+'i']()}]},{'title':'Sub\x20Menu\x20K'+_0x185cf8(0x551,0x59b,0x553,0x43f),'rows':[{'title':_0x42ed2f(0x74a,0x668,0x67c,0x636)+_0x42ed2f(0x5f6,0x616,0x74e,0x84e),'rowId':_0x185cf8(0x6bc,0x579,0x6c0,0x75d),'description':lang[_0x42ed2f(0x808,0x825,0x897,0x963)]()}]},{'title':'Sub\x20Menu\x20K'+_0x42ed2f(0x862,0x721,0x7dd,0x9a4),'rows':[{'title':_0x42ed2f(0x744,0x497,0x685,0x80c)+_0x185cf8(0x433,0x398,0x418,0x37a),'rowId':_0x42ed2f(0xa44,0x910,0x87a,0x88d),'description':lang[_0x185cf8(0x382,0x4f0,0x662,0x41e)]()}]},{'title':'Sub\x20Menu\x20K'+'e-27','rows':[{'title':'🎭\x20〉ɞ\x20Anony'+'mous\x20Comma'+'nd','rowId':_0x185cf8(0x19d,0x358,0x364,0x1c8),'description':lang[_0x185cf8(0x567,0x33f,0x4e1,0x4d0)]()}]},{'title':'Sub\x20Menu\x20K'+_0x185cf8(0x474,0x449,0x479,0x59e),'rows':[{'title':_0x185cf8(0x2e2,0x2ec,0x46d,0xca)+_0x42ed2f(0x437,0x558,0x66e,0x4d7),'rowId':_0x185cf8(0x644,0x557,0x769,0x683),'description':lang[_0x42ed2f(0x5f4,0x355,0x55f,0x6ad)]()}]},{'title':'Sub\x20Menu\x20K'+_0x185cf8(0x550,0x5d5,0x5c6,0x520),'rows':[{'title':_0x42ed2f(0x5a9,0x40b,0x4a9,0x5bc)+_0x42ed2f(0x823,0x97e,0x7e8,0x5ff)+_0x185cf8(0x27d,0x25e,0x299,0x46f),'rowId':_0x185cf8(0x5ec,0x4ed,0x68f,0x43c),'description':lang['MauChanger']()}]},{'title':_0x185cf8(0x182,0x24c,0x450,0x353)+'e','rows':[{'title':_0x42ed2f(0x76f,0x942,0x81c,0x7ca)+_0x185cf8(0x6c0,0x566,0x386,0x694),'rowId':'sc','description':lang[_0x42ed2f(0x96e,0x95d,0x862,0xa36)]()}]},{'title':_0x42ed2f(0x5c1,0x922,0x7b4,0x8ec),'rows':[{'title':_0x42ed2f(0x206,0x225,0x43f,0x41a)+_0x185cf8(0x383,0x3e0,0x5b9,0x24c),'rowId':_0x42ed2f(0x659,0xa48,0x84d,0x7f2),'description':lang[_0x42ed2f(0x282,0x5ad,0x43b,0x62c)]()}]}],listMessage={'text':_0x185cf8(0x3f4,0x554,0x6ef,0x4ff)+_0x42ed2f(0x529,0x5d1,0x4e4,0x693)+_0x185cf8(0x42c,0x35c,0x4a2,0x532)+_0x42ed2f(0x6f6,0x561,0x62e,0x7a3)+pushname+(_0x42ed2f(0x8a7,0x875,0x750,0x5d5)+_0x185cf8(0x311,0x3f9,0x5b4,0x47e))+sender[_0x42ed2f(0x935,0x6db,0x78a,0x665)]('@')[-0xd01*0x3+0x53*-0x5c+0x44d7]+('\x0a│\x20\x20*Statu'+_0x185cf8(0x4d7,0x396,0x414,0x37b))+(isCreator?_0x185cf8(0x335,0x4b8,0x422,0x6b0)+botname:'User\x20'+botname)+(_0x185cf8(0x32a,0x311,0x21e,0x325)+_0x185cf8(0x215,0x2bd,0x19e,0xda)+_0x42ed2f(0x47d,0x40f,0x5f3,0x607)+_0x42ed2f(0x58f,0x408,0x534,0x372)+'\x20')+prefix+(_0x42ed2f(0x534,0x25a,0x457,0x5b4)+'\x20:\x20')+botname+('\x0a│\x20*Owner*'+_0x185cf8(0x200,0x254,0x12e,0x232))+ownernomer[_0x42ed2f(0x99a,0x567,0x78a,0x67b)]('@')[-0x1*-0x2191+-0x262f+0x1*0x49e]+(_0x185cf8(0x361,0x3a8,0x5b7,0x49d)+':\x20')+(alpha[_0x185cf8(0x199,0x351,0x4f5,0x50c)]?_0x42ed2f(0x72f,0x3e6,0x587,0x39f)+'e':_0x185cf8(0x6a2,0x595,0x672,0x5a5))+(_0x42ed2f(0x55b,0x554,0x54d,0x6b3)+_0x185cf8(0x30d,0x38b,0x3a3,0x55e))+runtime(process[_0x185cf8(0x4e1,0x3d2,0x58e,0x3ec)]())+(_0x42ed2f(0x69d,0x666,0x843,0x9cf)+_0x42ed2f(0x398,0x3e1,0x549,0x342)+_0x42ed2f(0x7a4,0x756,0x622,0x63e)+'⬣\x0a\x0a╭─⬣「\x20_*'+_0x42ed2f(0x345,0x34c,0x4f9,0x6ce)+_0x185cf8(0x46e,0x590,0x555,0x488)+'\x0a│\x20*Wib*\x20:'+'\x20')+time+(_0x42ed2f(0x7d5,0xab1,0x89d,0x8df)+':\x20')+wita+(_0x185cf8(0x370,0x281,0x1c2,0x346)+'\x20')+wit+_0x185cf8(0x5a1,0x4bf,0x692,0x614),'footer':'©\x20'+ownername,'title':_0x185cf8(0x52e,0x569,0x724,0x585)+salam+'\x20'+pushname+'\x20☺️','buttonText':_0x42ed2f(0x375,0x470,0x574,0x364),'mentions':[sender,ownernomer+('@s.whatsap'+_0x185cf8(0x3f7,0x392,0x205,0x483))],'sections':sections},_0x4fbced={};_0x4fbced[_0x42ed2f(0x6e1,0x717,0x5d0,0x72c)]=fgif,alpha['sendMessag'+'e'](m[_0x185cf8(0x269,0x301,0x3ca,0x203)],listMessage,_0x4fbced);break;case _0x42ed2f(0x3d0,0x39e,0x434,0x2b7):case _0x185cf8(0x491,0x4ab,0x362,0x377)+'e':case'stickmeme':{if(!text)return reply(lang[_0x185cf8(0x674,0x54f,0x681,0x700)](prefix,command));if(text['includes']('|'))return reply(lang[_0x42ed2f(0x56d,0x8c8,0x78c,0x983)](prefix,command));if(!/webp/[_0x42ed2f(0x920,0x821,0x775,0x628)](mime)&&/image/['test'](mime)){const HFxZSH=(_0x42ed2f(0x4ef,0x6b9,0x481,0x643)+'3')[_0x42ed2f(0x700,0x6ef,0x78a,0x5f4)]('|');let sxIXVI=0x267*-0xb+0x168f+0x2*0x1ef;while(!![]){switch(HFxZSH[sxIXVI++]){case'0':reply(lang[_0x185cf8(0x2f2,0x2d5,0x23f,0xcd)]());continue;case'1':meme=_0x185cf8(0x27d,0x22b,0x34a,0x2c6)+_0x185cf8(0x16e,0x2db,0x346,0xfd)+_0x185cf8(0x20d,0x2f9,0x231,0x15d)+_0x42ed2f(0x370,0x6d8,0x4af,0x5fb)+'/'+text+(_0x42ed2f(0x87a,0x6a7,0x6e0,0x609)+_0x42ed2f(0x5f7,0x80f,0x79b,0x87d))+mem;continue;case'2':mee=await alpha[_0x185cf8(0x694,0x52a,0x389,0x310)+_0x42ed2f(0x55e,0x8a8,0x748,0x61d)+_0x42ed2f(0x9e2,0x604,0x7af,0x5ed)](quoted);continue;case'3':await fs['unlinkSync'](memek);continue;case'4':const _0x3c07c6={};_0x3c07c6[_0x185cf8(0x3b9,0x41a,0x537,0x2ab)]=global[_0x42ed2f(0x5b1,0x56d,0x657,0x4e5)],_0x3c07c6['author']=global['author'],memek=await alpha[_0x185cf8(0x1e5,0x263,0x30,0x268)+_0x42ed2f(0x547,0x501,0x642,0x45d)](m[_0x185cf8(0x36b,0x301,0x358,0x43f)],meme,m,_0x3c07c6);continue;case'5':mem=await TelegraPh(mee);continue;}break;}}else{if(/webp/[_0x185cf8(0x502,0x538,0x524,0x6a5)](mime)){reply(lang[_0x42ed2f(0x5f8,0x5ad,0x512,0x591)]());let media=await alpha[_0x185cf8(0x695,0x52a,0x537,0x714)+_0x42ed2f(0x6c3,0x847,0x748,0x59e)+_0x42ed2f(0x6df,0x650,0x7af,0x601)](quoted),ran=await(_0x42ed2f(0x7c9,0x742,0x886,0x790)+_0x42ed2f(0x285,0x643,0x484,0x2cd))+getRandom('.png');exec(_0x185cf8(0x470,0x5be,0x7c7,0x6ea)+media+'\x20'+ran,_0x8159ee=>{const _0xc40995={'ARVvl':function(_0x475e16,_0x429b80){return _0x475e16(_0x429b80);},'wTGpP':'emror','OuwZO':function(_0x6f1b7a,_0x579c33){return _0x6f1b7a(_0x579c33);}};fs[_0x3afe39(0x5ce,0x69f,0x3f2,0x559)](media);function _0x3afe39(_0x3dc2c0,_0x1c918b,_0x15bde8,_0x476bbe){return _0x185cf8(_0x3dc2c0-0x188,_0x3dc2c0- -0x7d,_0x15bde8-0x182,_0x476bbe);}function _0x493fa5(_0x485e3f,_0x55581e,_0x49d108,_0x125375){return _0x42ed2f(_0x485e3f-0x17,_0x125375,_0x49d108- -0x13e,_0x125375-0x1e2);}if(_0x8159ee)return _0xc40995['ARVvl'](reply,_0xc40995[_0x493fa5(0x255,0x540,0x34a,0x47f)]);_0xc40995[_0x493fa5(0x6a7,0x7d0,0x704,0x5dd)](TelegraPh,ran)[_0x3afe39(0x567,0x380,0x657,0x563)](async _0xf0b20e=>{let _0x51706c=_0x852bc8(-0x1c5,-0x1dc,-0x36e,-0x8a)+'i.memegen.'+_0x39a512(-0x2c6,-0x264,-0x101,-0x103)+'s/custom/-'+'/'+text+(_0x852bc8(0x2b8,0x9c,-0x4a,-0x16d)+_0x852bc8(-0xe,0x157,0x18c,0x2d5))+_0xf0b20e;const _0x30e32d={};function _0x39a512(_0x5ab4ed,_0x10a6aa,_0x1cdd90,_0x3cad9a){return _0x493fa5(_0x5ab4ed-0x1c2,_0x10a6aa-0x120,_0x3cad9a- -0x4fb,_0x5ab4ed);}_0x30e32d['packname']=global[_0x39a512(0x69,0x231,0x1eb,0x1e)],_0x30e32d['author']=global[_0x852bc8(0x227,0x16,-0x1e7,-0x181)];function _0x852bc8(_0x20fe4b,_0xff80d3,_0x1bec66,_0x38b64c){return _0x493fa5(_0x20fe4b-0x187,_0xff80d3-0x58,_0xff80d3- -0x506,_0x1bec66);}let _0x3130dd=await alpha['sendImageA'+'sSticker'](m[_0x852bc8(-0x230,-0x106,-0x1a7,-0x1eb)],_0x51706c,m,_0x30e32d);await fs[_0x39a512(0x58,0x337,0x22c,0x24f)](_0x3130dd),await fs['unlinkSync'](ran);});});}else reply(lang[_0x185cf8(0x41e,0x54f,0x67b,0x3fe)](prefix,command));}}break;case _0x185cf8(0x5ce,0x4f8,0x41a,0x4ca):{if(!text)return reply(lang[_0x42ed2f(0x516,0x757,0x637,0x644)](prefix,command));if(!text['includes']('|'))return reply(lang['Smeme_'](prefix,command));if(!/webp/[_0x185cf8(0x4e1,0x538,0x690,0x33e)](mime)&&/image/[_0x185cf8(0x388,0x538,0x5fa,0x724)](mime)){reply(lang[_0x185cf8(0x160,0x2d5,0x2fe,0x2ab)]()),arg=args[_0x42ed2f(0x949,0x63d,0x86a,0x841)]('\x20'),atas=arg['split']('|')[0x1e85*-0x1+-0xb8*0xa+-0x7*-0x563],bawah=arg[_0x42ed2f(0x751,0x7b1,0x78a,0x70c)]('|')[0x11d+-0x15d4*-0x1+-0x16f0*0x1];let abeb=await alpha[_0x42ed2f(0x6a3,0x76e,0x767,0x95c)+_0x42ed2f(0x6a6,0x862,0x748,0x733)+_0x185cf8(0x62e,0x572,0x6e7,0x429)](quoted),abe=await TelegraPh(abeb),upz=_0x42ed2f(0x3fc,0x5ea,0x468,0x60d)+_0x185cf8(0x399,0x2db,0x505,0x2a9)+_0x42ed2f(0x605,0x367,0x536,0x66b)+_0x185cf8(0x7c6,0x5b7,0x6bf,0x4b2)+atas+'/'+bawah+(_0x185cf8(0x50c,0x4a3,0x36b,0x523)+_0x42ed2f(0x971,0x67d,0x79b,0x898))+util['format'](abe);const _0x17f4c3={};_0x17f4c3['packname']=global['packname'],_0x17f4c3[_0x42ed2f(0x816,0x6a2,0x65a,0x783)]=global['author'];let mengmeme=await alpha[_0x42ed2f(0x48e,0x407,0x4a0,0x606)+_0x42ed2f(0x860,0x6ff,0x642,0x47f)](m['chat'],upz,m,_0x17f4c3);await fs[_0x42ed2f(0x98a,0xa7f,0x888,0x99b)](mengmeme),await fs[_0x42ed2f(0x9ee,0x9cc,0x888,0x8ba)](abeb);}else{if(/webp/[_0x42ed2f(0x870,0x95c,0x775,0x8a1)](mime)){reply(lang[_0x42ed2f(0x3e1,0x575,0x512,0x491)]()),arg=args[_0x42ed2f(0x80d,0xa6e,0x86a,0x6ea)]('\x20'),atas=arg[_0x42ed2f(0x6ad,0x72d,0x78a,0x982)]('|')[0x2565*-0x1+0x1e41+0x1c9*0x4],bawah=arg['split']('|')[0x5*0x3c3+-0xf50+-0x37e*0x1];let media=await alpha[_0x185cf8(0x75d,0x52a,0x643,0x455)+_0x42ed2f(0x689,0x8e6,0x748,0x63b)+_0x42ed2f(0x609,0x651,0x7af,0x6d1)](quoted),ran=await('./image/to'+_0x42ed2f(0x4be,0x4af,0x484,0x3f6))+getRandom('.png');exec(_0x42ed2f(0x9fa,0x70d,0x7fb,0x80a)+media+'\x20'+ran,_0x4d11a0=>{const _0x275d1e={};_0x275d1e[_0x2b47b4(-0x135,-0x2a3,-0x247,-0xa2)]=_0x3b04ad(0x1b,-0x173,0x1c4,-0x1b2);function _0x3b04ad(_0x387071,_0x286887,_0x4a2c54,_0x4e9c21){return _0x185cf8(_0x387071-0xd8,_0x387071- -0x1fc,_0x4a2c54-0xd0,_0x4e9c21);}const _0x2d34f6=_0x275d1e;function _0x2b47b4(_0x5d8e36,_0x4ed9ec,_0x4625af,_0x39e231){return _0x42ed2f(_0x5d8e36-0xe7,_0x4ed9ec,_0x39e231- -0x774,_0x39e231-0x10a);}fs[_0x2b47b4(0x29a,0x22a,0xca,0x114)](media);if(_0x4d11a0)return reply(_0x2d34f6[_0x3b04ad(0x299,0x90,0xfb,0x1d6)]);TelegraPh(ran)[_0x2b47b4(-0xd8,0x226,0xa5,0xad)](async _0x17df7a=>{let _0x4eb913='https://ap'+'i.memegen.'+_0x43b02a(0x2b8,0x16a,0x374,-0x14)+_0x2a267f(0x599,0x4a7,0x504,0x4e9)+atas+'/'+bawah+(_0x2a267f(0x358,0x1c8,0x3f0,0x582)+'round=')+_0x17df7a;const _0x1e0510={};_0x1e0510['packname']=global[_0x43b02a(0x1db,0x28b,0xce,0x448)];function _0x43b02a(_0x229dc5,_0x3927a1,_0x20da74,_0x2df695){return _0x3b04ad(_0x3927a1-0x6d,_0x3927a1-0x3f,_0x20da74-0xc6,_0x229dc5);}_0x1e0510['author']=global['author'];let _0x2991d1=await alpha['sendImageA'+'sSticker'](m[_0x43b02a(0x10e,0x172,0x2c6,0x2d0)],_0x4eb913,m,_0x1e0510);function _0x2a267f(_0x53d052,_0x268866,_0x1fd032,_0x29e799){return _0x3b04ad(_0x1fd032-0x149,_0x268866-0x83,_0x1fd032-0x157,_0x53d052);}await fs['unlinkSync'](_0x2991d1),await fs['unlinkSync'](ran);});});}else reply(lang['Smeme_'](prefix,command));}}break;case _0x185cf8(0x238,0x41e,0x43c,0x457):{if(!text)return reply(lang[_0x42ed2f(0x4ea,0x83d,0x637,0x658)](prefix,command));if(!text['includes']('|'))return reply(lang[_0x185cf8(0x2b3,0x3fa,0x40f,0x58b)](prefix,command));if(!/webp/[_0x185cf8(0x716,0x538,0x59d,0x6b9)](mime)&&/image/[_0x42ed2f(0x65b,0x6e8,0x775,0x7cc)](mime)){reply(lang[_0x42ed2f(0x5bc,0x5e2,0x512,0x4f8)]()),arg=args[_0x185cf8(0x820,0x62d,0x6ff,0x6f1)]('\x20'),atas=arg[_0x42ed2f(0x996,0x6a6,0x78a,0x7a6)]('|')[0xde*-0x1d+-0x10b4+0x29da],bawah=arg[_0x42ed2f(0x83a,0x78f,0x78a,0x617)]('|')[-0x2184+-0x2097+0x421c];let abeb=await alpha[_0x42ed2f(0x6df,0x56c,0x767,0x702)+'dSaveMedia'+_0x185cf8(0x5d1,0x572,0x3f0,0x73a)](quoted),abe=await TelegraPh(abeb),upz=_0x185cf8(0x3f,0x22b,0x3c1,0x281)+_0x42ed2f(0x324,0x3f6,0x518,0x375)+_0x42ed2f(0x3ee,0x547,0x536,0x759)+_0x42ed2f(0x7a7,0x9ff,0x7f4,0x70b)+atas+'/'+bawah+('.png?backg'+_0x42ed2f(0x6ca,0x606,0x79b,0x75d))+util[_0x42ed2f(0x322,0x6ad,0x4ab,0x416)](abe),mengmeme=await alpha['sendImage'](m[_0x185cf8(0x265,0x301,0x4dc,0x281)],upz,_0x185cf8(0x7a3,0x5c1,0x555,0x77f),m);await fs[_0x42ed2f(0x95a,0x9c4,0x888,0x750)](abeb);}else{if(/webp/[_0x42ed2f(0x608,0x7fe,0x775,0x604)](mime)){reply(lang['wait']()),arg=args[_0x185cf8(0x72b,0x62d,0x455,0x74d)]('\x20'),atas=arg[_0x185cf8(0x74d,0x54d,0x61d,0x45e)]('|')[-0x1381+0x31*0xb+-0x11*-0x106],bawah=arg[_0x185cf8(0x6dc,0x54d,0x3ab,0x4cb)]('|')[-0x2a3+-0x1da8+-0x2b1*-0xc];let media=await alpha[_0x185cf8(0x4b6,0x52a,0x48f,0x703)+_0x185cf8(0x33a,0x50b,0x3dc,0x2fa)+_0x42ed2f(0x79f,0x898,0x7af,0x837)](quoted),ran=await(_0x185cf8(0x807,0x649,0x48d,0x6a2)+_0x185cf8(0x64,0x247,0x10f,0x5e))+getRandom('.png');exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x4bbc6=>{const _0x11cd28={'nvfYS':_0x21ec55(0x6a3,0x673,0x34f,0x52f),'fdEbd':function(_0x3e3dd6,_0x5f00d1){return _0x3e3dd6(_0x5f00d1);}};function _0x21ec55(_0xfdde58,_0xad08f6,_0x4aaf4a,_0x3214af){return _0x185cf8(_0xfdde58-0x199,_0x3214af- -0x92,_0x4aaf4a-0xc7,_0x4aaf4a);}fs[_0x5f5877(0x3ff,0x2fb,0x4ad,0x2b0)](media);function _0x5f5877(_0x36d3b2,_0x386c6d,_0x24f7ec,_0x563fa2){return _0x42ed2f(_0x36d3b2-0xc7,_0x386c6d,_0x563fa2- -0x5d8,_0x563fa2-0x1c5);}if(_0x4bbc6)return _0x11cd28[_0x5f5877(0x12e,0x111,-0x81,0x16d)](reply,_0x5f5877(-0x258,-0x82,-0x392,-0x184));_0x11cd28[_0x21ec55(0x661,0x59d,0x2e0,0x476)](TelegraPh,ran)[_0x21ec55(0x488,0x5ad,0x59d,0x552)](async _0x2c5f45=>{let _0x158eb7='https://ap'+_0x302eb0(-0x207,-0x114,-0x17a,-0x116)+'link/image'+_0x4ee22d(0x63c,0x86c,0x828,0x721)+atas+'/'+bawah+('.png?backg'+'round=')+_0x2c5f45,_0x3d2049=await alpha[_0x4ee22d(0x714,0x605,0x896,0x6ab)](m['chat'],_0x158eb7,_0x11cd28[_0x302eb0(-0x1a,0x35f,0x257,0x187)],m);function _0x302eb0(_0x5d04a2,_0x20e9d3,_0xd5097,_0x14d737){return _0x5f5877(_0x5d04a2-0x1c2,_0x5d04a2,_0xd5097-0x173,_0x14d737- -0x56);}function _0x4ee22d(_0x4300c0,_0x3bb6d8,_0x3ff816,_0x2f907b){return _0x21ec55(_0x4300c0-0x75,_0x3bb6d8-0xd0,_0x3bb6d8,_0x2f907b-0x1fc);}await fs['unlinkSync'](ran);});});}else reply(lang[_0x42ed2f(0x646,0x7bb,0x637,0x6eb)](prefix,command));}}break;case'bc':case _0x42ed2f(0x7e9,0x759,0x62c,0x754):case _0x42ed2f(0x7f6,0x844,0x6dc,0x89d):{if(!isCreator&&!m['key'][_0x185cf8(0x181,0x25a,0x451,0x3c7)])return reply(lang[_0x42ed2f(0x6aa,0x9b8,0x784,0x97b)]());let anu=await store['chats'][_0x185cf8(0x6af,0x60a,0x788,0x6b8)]()[_0x42ed2f(0x40f,0x2b8,0x465,0x2c6)](_0x376c28=>_0x376c28['id']),cc=await alpha[_0x42ed2f(0x769,0x764,0x5b7,0x6fb)](q?m:m[_0x185cf8(0x4c1,0x393,0x5aa,0x50b)]?await m['getQuotedO'+'bj']():![]||m),cck=q?q:cc[_0x185cf8(0x4a4,0x5ec,0x565,0x506)],ranflam=await getBuffer(picak+_0x42ed2f(0x4d5,0x450,0x585,0x757));reply(lang[_0x185cf8(0x374,0x476,0x5a8,0x553)](anu[_0x42ed2f(0x55b,0x608,0x547,0x674)],anu['length'],_0x185cf8(0x486,0x39b,0x567,0x5c9)));for(let yoi of anu){await sleep(0x1*-0x151f+0x724*-0x1+-0x1*-0x221f);const _0x5441c0={};_0x5441c0['displayTex'+'t']=_0x185cf8(0x2f0,0x447,0x4c2,0x533)+_0x185cf8(0x429,0x461,0x5ed,0x653),_0x5441c0[_0x185cf8(0xbd,0x2d7,0x120,0x2e3)]=_0x42ed2f(0x672,0x3bd,0x4df,0x543)+_0x185cf8(0x314,0x3bf,0x368,0x59b)+_0x42ed2f(0x3a5,0x6ad,0x47d,0x543)+'c';const _0x3b02a5={};_0x3b02a5[_0x42ed2f(0x7e2,0x9b9,0x89c,0x8a0)]=_0x5441c0;const _0x280ed6={};_0x280ed6[_0x185cf8(0x44a,0x63c,0x63b,0x801)+'t']='Donasi',_0x280ed6['id']='donate';const _0x2e5e2b={};_0x2e5e2b[_0x185cf8(0x505,0x3cb,0x3ec,0x4df)+_0x42ed2f(0x504,0x524,0x52f,0x64d)]=_0x280ed6;const _0xa93d82={};_0xa93d82[_0x42ed2f(0x86f,0xa47,0x879,0x8ad)+'t']=_0x42ed2f(0x59d,0x6c1,0x72f,0x7b9),_0xa93d82['id']='owner';const _0x4dc51e={};_0x4dc51e[_0x185cf8(0x41f,0x3cb,0x1e3,0x27a)+_0x42ed2f(0x377,0x603,0x52f,0x2fc)]=_0xa93d82;var but=[_0x3b02a5,_0x2e5e2b,_0x4dc51e];alpha['send5ButLo'+'c'](yoi,''+cck,'©\x20'+ownername,ranflam,but);}m[_0x185cf8(0x423,0x565,0x608,0x3e3)]('Sukses\x20Bro'+_0x185cf8(0x4dc,0x582,0x50b,0x551));}break;case _0x42ed2f(0x4b3,0x64f,0x5b3,0x57d)+'c':case _0x42ed2f(0x5e5,0x473,0x5b3,0x5b8)+'roup':case _0x185cf8(0x4d2,0x5b2,0x543,0x772):{if(!isCreator&&!m[_0x42ed2f(0x658,0x815,0x659,0x4b2)][_0x185cf8(0x31e,0x25a,0x278,0x227)])return reply(lang['ownerOnly']());if(!text)return reply(_0x185cf8(0x3e3,0x5ac,0x59e,0x513)+_0x42ed2f(0x478,0x5d5,0x44e,0x25a)+(prefix+command)+_0x185cf8(0x362,0x206,0x20a,0x1fe));let getGroups=await alpha['groupFetch'+_0x185cf8(0x106,0x260,0x137,0x15a)+'pating'](),groups=Object['entries'](getGroups)[_0x42ed2f(0x825,0x919,0x7d6,0x6bc)](-0x72*0x38+-0x12f3+-0x217*-0x15)[_0x42ed2f(0x4f3,0x60f,0x465,0x351)](_0x1ae305=>_0x1ae305[0x2*-0x1253+0xd*0x191+0x104a]),anu=groups[_0x185cf8(0x281,0x228,0x24c,0xe8)](_0x29369b=>_0x29369b['id']);reply(lang[_0x42ed2f(0x8d1,0x480,0x6b3,0x83a)](anu['length'],anu[_0x42ed2f(0x384,0x600,0x547,0x3a3)],_0x42ed2f(0x9bc,0x80b,0x7f0,0xa11)));for(let i of anu){await sleep(-0x1*0x1a6+-0x26b1+0x2e33*0x1);let ranflam=await getBuffer(picak+(_0x42ed2f(0x647,0x86e,0x70e,0x5a5)+_0x42ed2f(0x63f,0x56a,0x4ae,0x588)));const _0x27bbe8={};_0x27bbe8[_0x185cf8(0x4a6,0x63c,0x811,0x4c3)+'t']=_0x42ed2f(0x54b,0x519,0x684,0x846)+_0x42ed2f(0x80b,0x8c7,0x69e,0x671),_0x27bbe8[_0x185cf8(0x19c,0x2d7,0x115,0x1b2)]=_0x42ed2f(0x3e8,0x4b6,0x4df,0x49d)+_0x185cf8(0x453,0x3bf,0x22d,0x3ea)+_0x185cf8(0x25c,0x240,0x16b,0x377)+'c';const _0x2d9b5a={};_0x2d9b5a[_0x42ed2f(0x99b,0x840,0x89c,0x82f)]=_0x27bbe8;const _0x1c5426={};_0x1c5426[_0x42ed2f(0x9f0,0x9c3,0x879,0x8c0)+'t']=_0x42ed2f(0x9c5,0x9dd,0x7ab,0x728),_0x1c5426['id']=_0x185cf8(0x70a,0x519,0x5e6,0x3a1);const _0x19fbc7={};_0x19fbc7[_0x42ed2f(0x79c,0x588,0x608,0x4bb)+_0x185cf8(0x30d,0x2f2,0x395,0x481)]=_0x1c5426;const _0xa7153f={};_0xa7153f[_0x185cf8(0x4ab,0x63c,0x431,0x766)+'t']=_0x42ed2f(0x69d,0x79a,0x72f,0x8da),_0xa7153f['id']=_0x42ed2f(0x947,0x790,0x7c5,0x798);const _0x492406={};_0x492406[_0x42ed2f(0x469,0x6ec,0x608,0x735)+_0x42ed2f(0x69d,0x671,0x52f,0x3fc)]=_0xa7153f;var but=[_0x2d9b5a,_0x19fbc7,_0x492406];alpha[_0x185cf8(0x4b3,0x65c,0x4f0,0x817)+'c'](i,''+text,'©\x20'+ownername,ranflam,but);}reply('Sukses\x20Men'+_0x42ed2f(0x4c5,0x3ed,0x593,0x56e)+_0x42ed2f(0x451,0x4dd,0x50f,0x3b8)+anu[_0x185cf8(0x1c9,0x30a,0x1bf,0x1ff)]+(_0x185cf8(0x1c1,0x341,0x4bd,0x343)+'t'));}break;case _0x42ed2f(0x452,0x243,0x453,0x45d):case _0x185cf8(0x313,0x3a5,0x5ce,0x542):case _0x42ed2f(0x3ba,0x784,0x56d,0x6a9):{if(!m['isGroup'])return reply(lang['groupOnly']());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x185cf8(0x3e1,0x2bf,0x2ed,0x150)]());if(!/webp/[_0x42ed2f(0x556,0x87c,0x775,0x8af)](mime))return reply(lang[_0x42ed2f(0x4c6,0x4cb,0x4fb,0x710)](prefix,command));quoted[_0x42ed2f(0x8b7,0x8e8,0x6ee,0x520)]()['then'](async _0x4af8c6=>{function _0x9e792a(_0x5c4c41,_0x425eec,_0x3946f6,_0x55f780){return _0x42ed2f(_0x5c4c41-0x89,_0x425eec,_0x3946f6- -0x497,_0x55f780-0x148);}const _0x5f3699={};function _0x45e7f5(_0x47f0fe,_0x2b0766,_0xf8da03,_0x519348){return _0x185cf8(_0x47f0fe-0x5f,_0x47f0fe-0x207,_0xf8da03-0xbe,_0x519348);}_0x5f3699[_0x45e7f5(0x59a,0x468,0x561,0x6e9)]=fkontak,alpha[_0x9e792a(0x30,0x9b,0x109,0x93)+'e'](m[_0x45e7f5(0x508,0x4ee,0x731,0x5e9)],{'sticker':_0x4af8c6,'mentions':groupMembers[_0x45e7f5(0x42f,0x2b8,0x3ac,0x459)](_0x7c3594=>_0x7c3594['id'])},_0x5f3699);});}break;case _0x42ed2f(0x70d,0x9f3,0x817,0x7c0):case _0x42ed2f(0x7aa,0x70f,0x6b9,0x6f6):{if(!m['isGroup'])return reply(lang[_0x42ed2f(0x50a,0x3f6,0x626,0x554)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x185cf8(0x38c,0x2bf,0x41a,0x1c0)]());if(!/video/[_0x185cf8(0x48b,0x538,0x453,0x40c)](mime))return reply(lang[_0x185cf8(0x328,0x489,0x642,0x3c5)](prefix,command,_0x42ed2f(0xa6a,0x79b,0x85d,0x831)));quoted['download']()[_0x185cf8(0x440,0x5e4,0x803,0x493)](async _0xd42e99=>{function _0x474d1c(_0x116d23,_0x2d5fcc,_0x942ec0,_0x3ffbb9){return _0x185cf8(_0x116d23-0x16b,_0x3ffbb9- -0xe7,_0x942ec0-0x18f,_0x116d23);}const _0x5c359e={};_0x5c359e[_0x5dbf02(-0x89,-0xb2,0x15,-0x2e)]=fkontak;function _0x5dbf02(_0x4978c0,_0x195da6,_0x396760,_0x1416bc){return _0x42ed2f(_0x4978c0-0x171,_0x195da6,_0x396760- -0x5bb,_0x1416bc-0x18a);}alpha[_0x5dbf02(0x1e2,0x2a,-0x1b,-0x14)+'e'](m['chat'],{'video':_0xd42e99,'mentions':groupMembers[_0x474d1c(0xa6,0x16c,0x337,0x141)](_0x340daa=>_0x340daa['id'])},_0x5c359e);});}break;case'vntag':case _0x185cf8(0x585,0x47d,0x456,0x5fa):{if(!m[_0x185cf8(0x67a,0x497,0x663,0x3e0)])return reply(lang[_0x42ed2f(0x82e,0x541,0x626,0x55c)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang['adminOnly']());if(!/audio/[_0x185cf8(0x4ab,0x538,0x38d,0x372)](mime))return reply(lang[_0x185cf8(0x2bb,0x489,0x5e3,0x64f)](prefix,command,'audio'));quoted[_0x185cf8(0x585,0x4b1,0x6b1,0x3f0)]()[_0x185cf8(0x494,0x5e4,0x666,0x623)](async _0x53e8b9=>{const _0x33f4a={};_0x33f4a[_0x35319d(0xec,0x198,0x2bc,-0x27)]=fkontak;function _0x35319d(_0x751aff,_0x4641b0,_0x4a5aba,_0x2e9c03){return _0x185cf8(_0x751aff-0x9c,_0x4641b0- -0x1fb,_0x4a5aba-0x22,_0x4a5aba);}function _0x2970d2(_0x19f9fc,_0x305367,_0x175e0b,_0x43a1d9){return _0x185cf8(_0x19f9fc-0x4c,_0x19f9fc- -0x2e0,_0x175e0b-0x19b,_0x175e0b);}alpha[_0x2970d2(0x83,0xf3,0x279,-0x35)+'e'](m[_0x2970d2(0x21,0x9f,0x137,-0x1fe)],{'audio':_0x53e8b9,'ptt':!![],'mimetype':_0x35319d(0x308,0xd5,0x13a,0x278),'mentions':groupMembers['map'](_0x16847c=>_0x16847c['id'])},_0x33f4a);});}break;case _0x42ed2f(0x446,0x6bd,0x4eb,0x413):case _0x42ed2f(0x65c,0x8a2,0x731,0x8ab):case'imgtag':{if(!m[_0x42ed2f(0x769,0x76e,0x6d4,0x557)])return reply(lang[_0x42ed2f(0x7eb,0x840,0x626,0x601)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x42ed2f(0x59a,0x651,0x4fc,0x6ce)]());if(!/image/[_0x42ed2f(0x8fd,0x6bc,0x775,0x5e3)](mime))return reply(lang[_0x42ed2f(0x70f,0x4db,0x6c6,0x723)](prefix,command,_0x185cf8(0x40a,0x4c2,0x45c,0x508)));quoted[_0x185cf8(0x4b2,0x4b1,0x3e6,0x465)]()['then'](async _0x431932=>{const _0x4bb5d8={};function _0x49366a(_0x4a300c,_0x15a10e,_0x4a081f,_0x55ec92){return _0x42ed2f(_0x4a300c-0x1ce,_0x4a300c,_0x55ec92- -0x1e3,_0x55ec92-0x83);}function _0x5b8396(_0x518a6f,_0x53ed9c,_0x52ad90,_0x2b9613){return _0x42ed2f(_0x518a6f-0x4b,_0x52ad90,_0x518a6f- -0x46,_0x2b9613-0x13f);}_0x4bb5d8[_0x5b8396(0x58a,0x473,0x485,0x54b)]=fkontak,alpha[_0x49366a(0x315,0x2b5,0x2a6,0x3bd)+'e'](m[_0x49366a(0x34e,0x20c,0x2c9,0x35b)],{'image':_0x431932,'mentions':groupMembers[_0x49366a(0x479,0x419,0x2ea,0x282)](_0x1c37dc=>_0x1c37dc['id'])},_0x4bb5d8);});}break;case _0x185cf8(0x114,0x294,0x26d,0x26c):case'tr':{if(!text)return reply(lang['TrLate'](prefix,command));let teks=m[_0x42ed2f(0x475,0x42b,0x5d0,0x47b)]?quoted[_0x42ed2f(0x96c,0x913,0x829,0x7ec)]:quoted['text'][_0x185cf8(0x59c,0x54d,0x44c,0x395)](args[0x9e9*0x1+-0x1*-0x1f52+-0x293b])[0x1f1b*0x1+0xd80+0x16*-0x207];const _0x2c7b33={};_0x2c7b33['to']=args[0x279*0xb+-0x1*-0x18b8+-0x33eb],translate(teks,_0x2c7b33)[_0x185cf8(0x510,0x5e4,0x776,0x756)](_0x49a0f2=>{function _0x6b6e32(_0x5ad183,_0x326fe6,_0x3d11aa,_0x3f9711){return _0x42ed2f(_0x5ad183-0x154,_0x3f9711,_0x5ad183- -0x3be,_0x3f9711-0x1c8);}function _0x12880a(_0x33961f,_0x5e9fe9,_0x2140ae,_0x59b1cc){return _0x185cf8(_0x33961f-0x1d4,_0x2140ae-0x1c6,_0x2140ae-0xe4,_0x5e9fe9);}alpha['sendText'](m[_0x12880a(0x4fb,0x68c,0x4c7,0x509)],''+_0x49a0f2[_0x6b6e32(0x46b,0x4a3,0x422,0x344)],m);});}break;case'xnxxsearch':{if(!db['data'][_0x185cf8(0x385,0x298,0x2fb,0x10d)][m[_0x42ed2f(0x5be,0x366,0x53e,0x68d)]][_0x42ed2f(0x560,0x877,0x727,0x688)])return reply(lang['OffNsfw']());if(!text)return reply(lang['KisahNabi'](prefix,command,_0x42ed2f(0x478,0x69e,0x63f,0x4a2)));function xnxxsearch(_0x482019){const _0x2bd0ca={'ugzbG':function(_0x56ee9d,_0x48b9df){return _0x56ee9d+_0x48b9df;},'DBvpi':'return\x20','MAGql':function(_0xcbfa77,_0x4709d5){return _0xcbfa77(_0x4709d5);},'GIrWz':'href','eDCnD':_0x568379(0x3a0,0x383,0x3e9,0x21e),'YayPO':function(_0x493fed,_0x33cd08){return _0x493fed!==_0x33cd08;},'pPMtU':_0x568379(0xc5,0x94,-0x39,0x1bb),'egsGn':'XgHvQ','avnkk':_0x5129fb(0x297,0x1b8,0x3a3,0x337),'TWZma':function(_0x106994,_0x52d57a){return _0x106994<_0x52d57a;},'ViQug':function(_0x4cd39c,_0x2bb0b1){return _0x4cd39c===_0x2bb0b1;},'uWYQy':_0x568379(-0x73,0x15,-0x320,-0x10e),'ZaVQb':_0x568379(0x153,0x95,0x26,0x184),'cYtPj':function(_0x134133,_0x44c7c6){return _0x134133*_0x44c7c6;},'yZRWL':'get'};function _0x5129fb(_0x2c7b21,_0x2f4b95,_0x1c3d79,_0x314204){return _0x185cf8(_0x2c7b21-0xc6,_0x314204- -0x1c7,_0x1c3d79-0x107,_0x2f4b95);}function _0x568379(_0x2d6495,_0x696dbf,_0x422c2a,_0x1a8d49){return _0x185cf8(_0x2d6495-0x36,_0x1a8d49- -0x402,_0x422c2a-0x0,_0x696dbf);}return new Promise((_0x42bb10,_0x188e7a)=>{function _0x630360(_0x5b226b,_0x398a07,_0x4969b3,_0x1fae74){return _0x568379(_0x5b226b-0x1d,_0x1fae74,_0x4969b3-0xd1,_0x398a07-0x63d);}function _0x204c51(_0x5d09d2,_0x20cbcd,_0x45cd7e,_0x2d977e){return _0x568379(_0x5d09d2-0x85,_0x20cbcd,_0x45cd7e-0xcd,_0x5d09d2-0x1cc);}const _0x590969={'Wdcob':function(_0x4018a7,_0x207491){function _0x2a5ead(_0x5be810,_0x178cab,_0x32e291,_0x396da7){return _0xa869(_0x396da7- -0x4b,_0x178cab);}return _0x2bd0ca[_0x2a5ead(0x256,0x3db,0x91,0x1e6)](_0x4018a7,_0x207491);},'JxNUc':_0x2bd0ca[_0x630360(0x54c,0x656,0x5b7,0x602)],'IvTGT':_0x204c51(0x116,0xd,0x11b,0x2da),'PuYrc':function(_0x40372b,_0x5bf105){function _0x91b5e1(_0xec00d6,_0x2d97fa,_0x56c3e5,_0x3183af){return _0x204c51(_0xec00d6- -0x14f,_0x2d97fa,_0x56c3e5-0x73,_0x3183af-0x1b);}return _0x2bd0ca[_0x91b5e1(-0x124,-0x2cc,-0x1e5,0xb4)](_0x40372b,_0x5bf105);},'cbmgw':_0x2bd0ca[_0x630360(0x6ea,0x5f9,0x7e9,0x45b)],'mXwJH':function(_0x4d5e75,_0x53e7d6){function _0x2c9411(_0x470e6a,_0x5bab97,_0x2e2452,_0x201616){return _0x630360(_0x470e6a-0x149,_0x470e6a- -0x45f,_0x2e2452-0x1c8,_0x2e2452);}return _0x2bd0ca[_0x2c9411(0x1e5,0x1b4,-0x36,0x396)](_0x4d5e75,_0x53e7d6);},'cIcLb':_0x2bd0ca[_0x630360(0x55c,0x6ce,0x59a,0x5e0)],'NyuAm':_0x2bd0ca[_0x204c51(0x80,0xb1,-0x1ab,0x2b8)],'PdTyz':_0x2bd0ca['avnkk'],'YaEXj':function(_0x26e0cd,_0x501b29){function _0x7d008e(_0x52808e,_0x2d2bdb,_0x1137fb,_0xc94120){return _0x204c51(_0x1137fb- -0x2a,_0xc94120,_0x1137fb-0x187,_0xc94120-0x52);}return _0x2bd0ca[_0x7d008e(0x1a9,0x1e8,0x1,-0x147)](_0x26e0cd,_0x501b29);},'njhMK':function(_0x4504a1,_0x122162){function _0x493a72(_0x38386f,_0x363578,_0x2da5cd,_0x8b25df){return _0x204c51(_0x2da5cd- -0x2de,_0x8b25df,_0x2da5cd-0xa5,_0x8b25df-0x1b7);}return _0x2bd0ca[_0x493a72(-0x1fc,-0x22d,-0x2b3,-0x354)](_0x4504a1,_0x122162);},'mvIMQ':function(_0x44aaf8,_0x145088){function _0x4b39f3(_0x4e8b5e,_0x2678d3,_0x3910b9,_0x56f173){return _0x204c51(_0x4e8b5e- -0x29,_0x2678d3,_0x3910b9-0xf3,_0x56f173-0x4c);}return _0x2bd0ca[_0x4b39f3(0x16f,-0x77,0x18d,0x129)](_0x44aaf8,_0x145088);},'wQcYl':function(_0x208902,_0x4a8066){function _0x53a1aa(_0x47ed42,_0x3b90c9,_0xb86fac,_0x528b64){return _0x204c51(_0x47ed42-0x450,_0x3b90c9,_0xb86fac-0x88,_0x528b64-0x143);}return _0x2bd0ca[_0x53a1aa(0x47b,0x3e6,0x2b1,0x51c)](_0x208902,_0x4a8066);}};if(_0x2bd0ca['ViQug'](_0x2bd0ca[_0x204c51(0x2c,-0x80,0x229,0xd0)],_0x2bd0ca['ZaVQb'])){_0x201343[_0x630360(0x983,0x787,0x5dd,0x907)](_0x18c1f1);let _0x58a5e8=new _0x570fbf(_0x2bd0ca[_0x204c51(0x14f,0x85,0x1ef,0x31e)](_0x2bd0ca[_0x630360(0x61d,0x4f6,0x300,0x482)],_0x2cf207))();if(!_0x58a5e8)throw _0x58a5e8;_0x2bd0ca[_0x204c51(0x2b,0xc0,0x9c,0x10b)](_0x131172,_0x204c51(0x74,-0x22,0x273,-0x39)+'\x20*'+_0x3711a8+_0x204c51(0x147,0x90,0x279,0x130)+_0x58a5e8+'_');}else{const _0x2ce313=_0x630360(0x766,0x6df,0x6ad,0x530)+_0x204c51(0x57,0xe1,0x168,0x173);fetch(_0x2ce313+_0x630360(0x6be,0x589,0x796,0x4ca)+_0x482019+'/'+(Math[_0x630360(0x6cd,0x723,0x551,0x888)](_0x2bd0ca[_0x204c51(0x41,0x2c,0x11d,0x70)](Math[_0x630360(0x773,0x86f,0x796,0x69f)](),-0x3*0x948+-0x1851+0x342c*0x1))+(-0x2023*0x1+-0x1333+-0x1*-0x3357)),{'method':_0x2bd0ca[_0x204c51(0x222,0x2e8,0x23,0x353)]})[_0x204c51(0x3ae,0x3a0,0x1d1,0x275)](_0x25e064=>_0x25e064[_0x204c51(0x3b6,0x254,0x56c,0x416)]())[_0x204c51(0x3ae,0x451,0x460,0x567)](_0x3336b4=>{const _0x4f59a1={'IanAJ':function(_0x2181af,_0x54eed9){function _0x12184e(_0x4184da,_0x298312,_0x18bc80,_0x31c640){return _0xa869(_0x31c640-0x34d,_0x4184da);}return _0x590969[_0x12184e(0x790,0x655,0x652,0x589)](_0x2181af,_0x54eed9);},'dlCPd':_0x590969['JxNUc'],'vDtnO':_0x590969[_0x35a316(-0xb0,-0x1b0,-0xe6,-0x1d4)],'BQlMc':'div.thumb','Rvmcc':function(_0x54ff2b,_0x479fc0){function _0x3e427e(_0x2d2b28,_0x132c0d,_0x47e328,_0x56b54e){return _0x35a316(_0x132c0d,_0x132c0d-0x95,_0x47e328- -0x5f,_0x56b54e-0x1c0);}return _0x590969[_0x3e427e(-0x87,-0xa0,-0x125,-0x26f)](_0x54ff2b,_0x479fc0);},'jZzKg':_0x590969[_0x13130e(0x72f,0x42c,0x416,0x547)],'whvZA':function(_0x1dbe89,_0x18f6d2){function _0x34486e(_0x55de43,_0x3dcdeb,_0x35d6f3,_0x2e386b){return _0x35a316(_0x55de43,_0x3dcdeb-0x6f,_0x2e386b-0x25c,_0x2e386b-0x25);}return _0x590969[_0x34486e(0x2ef,0x1e4,0x1f4,0x370)](_0x1dbe89,_0x18f6d2);},'AWVma':_0x590969['cIcLb'],'vVvMq':_0x590969[_0x35a316(-0x98,0x12d,0x174,0x257)],'iGniE':function(_0x19bb43,_0x1b5e53){return _0x19bb43(_0x1b5e53);},'moGto':'p.metadata','dlAnM':function(_0x44d988,_0xfd3f87){function _0x56e594(_0x5dec8b,_0x161436,_0x59599c,_0x4d394f){return _0x13130e(_0x5dec8b-0x1c4,_0x161436-0x1c6,_0x161436,_0x59599c-0x217);}return _0x590969[_0x56e594(0x430,0x299,0x44c,0x284)](_0x44d988,_0xfd3f87);},'mqYhl':_0x590969[_0x35a316(0x32c,0x36b,0x2b3,0x3c5)],'QorWH':function(_0x951502,_0x6426ac){return _0x590969['YaEXj'](_0x951502,_0x6426ac);}},_0x81e76b={};_0x81e76b[_0x35a316(0x16d,0x204,0x131,0x26a)]=![];let _0x9dcfdc=cheerio[_0x13130e(0x580,0x5d2,0x266,0x3b9)](_0x3336b4,_0x81e76b),_0x486955=[];function _0x13130e(_0x1442dd,_0x558b5c,_0x44967b,_0x4bb18e){return _0x204c51(_0x4bb18e-0x1b6,_0x44967b,_0x44967b-0x76,_0x4bb18e-0xd2);}let _0x244c6e=[],_0x72aa8d=[],_0x108a30=[];_0x590969[_0x35a316(-0x254,-0x150,-0xf8,-0x1d3)](_0x9dcfdc,_0x13130e(0x51b,0x688,0x6ca,0x49b)+'ue')['each'](function(_0x458693,_0x65f0cc){function _0x5be941(_0x1010fa,_0x55ac16,_0x18c283,_0x266444){return _0x13130e(_0x1010fa-0x60,_0x55ac16-0x1d7,_0x55ac16,_0x1010fa-0x5);}function _0x24a9ba(_0x226da2,_0x52fbdb,_0x26e519,_0x23b1e9){return _0x35a316(_0x26e519,_0x52fbdb-0xfd,_0x52fbdb-0x342,_0x23b1e9-0x8f);}_0x9dcfdc(_0x65f0cc)[_0x5be941(0x4fa,0x61f,0x67b,0x5b3)](_0x4f59a1['BQlMc'])[_0x24a9ba(0x41d,0x5f2,0x489,0x78b)](function(_0x630c25,_0x3a951b){function _0x435104(_0xdf6def,_0x1aebc0,_0x513d88,_0x429525){return _0x5be941(_0xdf6def- -0x3bd,_0x513d88,_0x513d88-0xd4,_0x429525-0x1c8);}function _0x29da50(_0x1d3d9d,_0x30fe2a,_0x5ea6f4,_0x545773){return _0x24a9ba(_0x1d3d9d-0x1a3,_0x1d3d9d-0x172,_0x30fe2a,_0x545773-0x1a5);}_0x244c6e['push'](_0x4f59a1[_0x29da50(0x606,0x5af,0x50d,0x4c8)](_0x2ce313,_0x9dcfdc(_0x3a951b)['find']('a')[_0x29da50(0x4e8,0x4da,0x676,0x385)](_0x4f59a1['dlCPd'])[_0x29da50(0x408,0x624,0x396,0x227)](_0x4f59a1['vDtnO'],'/')));});}),_0x590969[_0x13130e(0x1dc,0x295,0x1df,0x235)](_0x9dcfdc,_0x13130e(0x665,0x5be,0x586,0x49b)+'ue')['each'](function(_0x332fb5,_0x10ea1b){function _0x202f42(_0x4ad8f5,_0x5e0731,_0x261358,_0x3eef5f){return _0x35a316(_0x4ad8f5,_0x5e0731-0x1d,_0x5e0731-0x2a6,_0x3eef5f-0x10c);}const _0x236946={'ChLFO':function(_0x23d89d,_0x20d09f){return _0x23d89d(_0x20d09f);},'lsWgf':_0x4f59a1[_0x2601d6(0x2ab,0x31c,0x29c,0x86)]};function _0x2601d6(_0x39cfe7,_0x5e386e,_0x24a792,_0x12a0c6){return _0x35a316(_0x12a0c6,_0x5e386e-0x120,_0x24a792-0x349,_0x12a0c6-0x178);}_0x4f59a1['QorWH'](_0x9dcfdc,_0x10ea1b)[_0x202f42(0x437,0x4a0,0x394,0x56d)](_0x2601d6(0x52b,0x474,0x49a,0x5ce)+_0x202f42(0x381,0x57d,0x521,0x640))[_0x202f42(0x5bf,0x556,0x69b,0x4d3)](function(_0x269ed6,_0x5e96c6){const _0x4e9d66={'PiXTc':function(_0x4a6e0c,_0x59d847){return _0x4a6e0c(_0x59d847);},'OTqIy':function(_0x4be447,_0x5055c8){return _0x4be447&&_0x5055c8;},'rUAPx':function(_0x59ca1f,_0x1bcb4e){function _0x4c5a35(_0x360a67,_0x514bec,_0x4698fe,_0x5e422b){return _0xa869(_0x360a67- -0x307,_0x4698fe);}return _0x4f59a1[_0x4c5a35(0x14a,0x15c,0x268,0xbe)](_0x59ca1f,_0x1bcb4e);},'bTsFS':_0x4f59a1['jZzKg']};function _0x49e815(_0xac123f,_0xdb9a6b,_0x59f31e,_0x500807){return _0x2601d6(_0xac123f-0x11d,_0xdb9a6b-0x1b7,_0x59f31e- -0x7b,_0xdb9a6b);}function _0x5d4b4f(_0x4a90c6,_0x2b5079,_0x360d72,_0xf0a4e){return _0x202f42(_0x2b5079,_0x360d72-0x24,_0x360d72-0x4a,_0xf0a4e-0x0);}if(_0x4f59a1[_0x5d4b4f(0x3c4,0x59b,0x4d6,0x529)](_0x4f59a1[_0x5d4b4f(0x442,0x169,0x324,0x186)],_0x4f59a1['vVvMq']))_0x72aa8d[_0x5d4b4f(0x393,0x428,0x4e7,0x383)](_0x4f59a1[_0x49e815(0x4f7,0x166,0x2bf,0x40a)](_0x9dcfdc,_0x5e96c6)[_0x49e815(0x554,0x38e,0x4c8,0x65e)](_0x4f59a1[_0x5d4b4f(0x317,0x5d8,0x4e0,0x5ac)])[_0x5d4b4f(0x325,0x363,0x53b,0x648)]()),_0x4f59a1['dlAnM'](_0x9dcfdc,_0x5e96c6)[_0x5d4b4f(0x52c,0x37f,0x4c4,0x668)]('a')[_0x5d4b4f(0x3a0,0x615,0x57a,0x622)](function(_0x35ffb2,_0xff3930){function _0x13dbc0(_0x2bd224,_0xb86e9c,_0x198138,_0xa75fa3){return _0x5d4b4f(_0x2bd224-0x3d,_0xa75fa3,_0x198138-0x21d,_0xa75fa3-0x74);}function _0xa90d75(_0x1288a5,_0x474b69,_0x29adfe,_0x17e6f2){return _0x5d4b4f(_0x1288a5-0x114,_0x1288a5,_0x29adfe- -0x9a,_0x17e6f2-0xab);}_0x486955[_0xa90d75(0x4f5,0x623,0x44d,0x270)](_0x236946[_0xa90d75(0x268,0x516,0x43e,0x264)](_0x9dcfdc,_0xff3930)['attr'](_0x236946[_0x13dbc0(0x63b,0x6b1,0x579,0x760)]));});else{if(!_0x3de943[_0x5d4b4f(0x227,0x29b,0x3e6,0x30a)])return _0x4e9d66[_0x5d4b4f(0x33d,0x1e0,0x35f,0x1cd)](_0x3e4306,_0x21eba2[_0x5d4b4f(0x398,0x4df,0x338,0x3f2)]());if(_0x4e9d66[_0x49e815(0x2b7,0x46b,0x3e9,0x39e)](!_0x5d1f76,!_0x2fdb31)&&!_0x1b88f8)return _0x31ac8e(_0x411a84[_0x49e815(0x30d,0x2c7,0x212,0x370)]());if(!/video/[_0x49e815(0x2cd,0x620,0x48b,0x3dd)](_0x46ada2))return _0x4e9d66[_0x5d4b4f(0x6d2,0x524,0x519,0x3ae)](_0x4a86b2,_0x3483a0['Vtag'](_0x732b47,_0x3168f6,_0x4e9d66[_0x49e815(0x706,0x517,0x57d,0x721)]));_0x6e9fe7[_0x5d4b4f(0x553,0x5f4,0x400,0x1f2)]()[_0x5d4b4f(0x54a,0x3ca,0x533,0x32e)](async _0x39dfa0=>{function _0x2009cd(_0x1d0c26,_0x27b3f5,_0x3805ad,_0x4b60c0){return _0x49e815(_0x1d0c26-0xda,_0x27b3f5,_0x3805ad- -0x2ae,_0x4b60c0-0xcc);}function _0x5f4084(_0x62e2e1,_0x5afa27,_0x560830,_0x3512d3){return _0x5d4b4f(_0x62e2e1-0xa4,_0x3512d3,_0x62e2e1-0x28b,_0x3512d3-0x173);}const _0x8adb32={};_0x8adb32[_0x2009cd(-0x45,-0x192,0x38,0x250)]=_0x3272e2,_0xd1b255[_0x5f4084(0x53d,0x666,0x610,0x30b)+'e'](_0x4cac2e[_0x2009cd(-0x4,-0xd0,-0x5a,0x133)],{'video':_0x39dfa0,'mentions':_0x288e80[_0x5f4084(0x402,0x526,0x55e,0x5f5)](_0x1336c8=>_0x1336c8['id'])},_0x8adb32);});}});});function _0x35a316(_0x4a565b,_0x1e658f,_0x10d654,_0x46c646){return _0x630360(_0x4a565b-0x1d8,_0x10d654- -0x5b6,_0x10d654-0x138,_0x4a565b);}for(let _0x36c6bb=0x15b*0x16+-0x349*-0x5+-0x2e3f;_0x590969[_0x35a316(0x4e9,0x1e9,0x2d9,0x343)](_0x36c6bb,_0x486955[_0x35a316(-0xc5,0xd6,-0x71,-0x152)]);_0x36c6bb++){const _0x11f210={};_0x11f210[_0x13130e(0x550,0x4ea,0x27f,0x47e)]=_0x486955[_0x36c6bb],_0x11f210[_0x13130e(0x3d2,0xb8,-0x5,0x224)]=_0x72aa8d[_0x36c6bb],_0x11f210[_0x13130e(0x3ae,0x211,0x4e0,0x303)]=_0x244c6e[_0x36c6bb],_0x108a30[_0x13130e(0x35c,0x59f,0x2e2,0x518)](_0x11f210);}const _0x1b05a3={};_0x1b05a3[_0x35a316(0x151,0xf1,0x110,0x306)]=0xc8,_0x1b05a3['status']=!![],_0x1b05a3[_0x13130e(0x191,0x289,0x1bc,0x2e2)]=_0x108a30,_0x590969['wQcYl'](_0x42bb10,_0x1b05a3);})[_0x630360(0x998,0x7b1,0x723,0x6b5)](_0x515b01=>_0x188e7a({'code':0x1f7,'status':![],'result':_0x515b01}));}});}xnxxsearch(''+q)[_0x185cf8(0x589,0x5e4,0x69e,0x642)](async _0x196f88=>{let _0x1db671=_0x3c5594(0x69c,0x539,0x4b2,0x6ea)+_0x3c5594(0x4b3,0x343,0x5cf,0x441)+'H\x20」-------'+_0x41f01d(-0x1cb,-0x31b,-0x2e0,0x3);function _0x3c5594(_0x454fe1,_0x4182c3,_0x11a875,_0x32bfb0){return _0x185cf8(_0x454fe1-0x11f,_0x32bfb0-0x126,_0x11a875-0x1e,_0x11a875);}function _0x41f01d(_0x2d5a86,_0x149504,_0x33ac31,_0x17bc30){return _0x42ed2f(_0x2d5a86-0xe0,_0x33ac31,_0x2d5a86- -0x656,_0x17bc30-0x4d);}for(let _0x5dd39f of _0x196f88[_0x41f01d(-0xb7,-0xb4,-0x1e6,-0x48)]){_0x1db671+=_0x41f01d(0x43,0x211,0x197,0x153)+'*\x20'+_0x5dd39f[_0x41f01d(0xe5,-0x10b,0x187,-0xed)]+'\x0a',_0x1db671+='*📚\x20Url\x20:*\x20'+_0x5dd39f['link']+('\x0a---------'+_0x3c5594(0x274,0x5fd,0x608,0x44a)+_0x3c5594(0x4e5,0x55c,0x61a,0x44a)+_0x41f01d(-0xf5,-0x168,-0x6c,-0x13f)+_0x41f01d(-0xf5,-0x2e9,-0x78,-0x1b5)+_0x41f01d(-0x8,-0x20d,-0x1a3,-0x2b));}const _0x1c2161={};_0x1c2161[_0x41f01d(-0x142,0x31,-0xbc,-0x55)]=picak+(_0x3c5594(0x4a3,0x220,0x4c9,0x377)+'h');const _0x5624d4={};_0x5624d4['image']=_0x1c2161,_0x5624d4['caption']=_0x1db671,await alpha[_0x41f01d(-0xb6,0x124,-0x6a,0x12)+'e'](m[_0x41f01d(-0x118,-0x110,-0x2f7,-0x29c)],_0x5624d4,{'quoted':m});})[_0x42ed2f(0x5d3,0x710,0x7b3,0x740)](_0x168833=>{function _0x4cc301(_0x5f0302,_0x2b6002,_0x235950,_0x332fe2){return _0x42ed2f(_0x5f0302-0x9e,_0x2b6002,_0x332fe2- -0x4e8,_0x332fe2-0x47);}reply(lang[_0x4cc301(-0xbd,0x9d,-0x12b,0xdd)]());});}break;case _0x185cf8(0x532,0x515,0x705,0x32b):case'xnxxdownlo'+'ad':{if(!db[_0x185cf8(0x244,0x230,0x3ec,0x218)]['chats'][m[_0x185cf8(0x428,0x301,0x372,0x4aa)]]['nsfw'])return reply(lang[_0x185cf8(0x6ab,0x5ce,0x494,0x735)]());if(!text)return reply(lang['KisahNabi'](prefix,command,_0x42ed2f(0x599,0x89b,0x6e1,0x631)+_0x185cf8(0x285,0x28d,0x309,0x61)+_0x185cf8(0x612,0x3ff,0x458,0x41d)+_0x185cf8(0x725,0x643,0x5bd,0x412)+_0x185cf8(0x4da,0x34b,0x422,0x332)+_0x185cf8(0x7ca,0x593,0x39d,0x636)+'erge_de_18'+_0x42ed2f(0x6c8,0x88b,0x853,0x6c2)+_0x185cf8(0x5ad,0x4e9,0x454,0x46a)+_0x42ed2f(0x99a,0xa07,0x84c,0x9cb)+_0x42ed2f(0x42e,0x67d,0x62d,0x6a4)+_0x42ed2f(0x850,0x60c,0x6f0,0x4e8)+_0x185cf8(0x36d,0x45f,0x4d0,0x3bb)+_0x42ed2f(0x4b8,0x87b,0x6a4,0x6c9)));if(!text[_0x185cf8(0x2d7,0x35e,0x196,0x478)](_0x42ed2f(0x4e6,0x51a,0x6e1,0x617)+_0x185cf8(0x2f5,0x28d,0x459,0x402)+'/'))return reply(lang['KisahNabi'](prefix,command,_0x185cf8(0x40a,0x4a4,0x623,0x34c)+'w.xnxx.com'+_0x42ed2f(0x61b,0x857,0x63c,0x4ff)+'f9p3a/attr'+'ape_ma_dem'+_0x42ed2f(0x800,0x899,0x7d0,0x629)+_0x185cf8(0x535,0x443,0x25f,0x327)+_0x42ed2f(0x62e,0x73a,0x853,0x817)+_0x185cf8(0x626,0x4e9,0x3c7,0x2f5)+'masturber_'+_0x42ed2f(0x808,0x585,0x62d,0x678)+_0x185cf8(0x6dd,0x4b3,0x5c2,0x27a)+_0x185cf8(0x482,0x45f,0x2f1,0x47d)+'_hentai'));function xnxxdl(_0x225112){function _0x499ff4(_0x44077b,_0x5b7060,_0x3635d0,_0x169086){return _0x42ed2f(_0x44077b-0x3d,_0x5b7060,_0x44077b- -0x4a9,_0x169086-0x1c2);}function _0x291269(_0x553258,_0x5e8077,_0x2086bc,_0x15ceae){return _0x42ed2f(_0x553258-0x11c,_0x2086bc,_0x553258- -0x288,_0x15ceae-0x134);}const _0x3e8765={'TJUsh':_0x499ff4(0x2fe,0x4e6,0x12f,0x468),'MmyCn':function(_0x4e5abe,_0x33d653){return _0x4e5abe(_0x33d653);},'PrBDJ':'meta[prope'+_0x499ff4(0x13d,-0xf8,0xe2,0x43)+_0x291269(0x4cd,0x5b3,0x3c9,0x47f),'XXYpl':_0x291269(0x29f,0x41f,0x2d3,0x2a9)+_0x291269(0x498,0x2c4,0x349,0x5a9)+_0x499ff4(0x1ab,0x2a,0x1fb,0xb8),'XJJnZ':_0x291269(0x29f,0xab,0x43c,0x12f)+_0x291269(0x1ff,0x18f,-0x31,0xa1)+'deo:type\x22]','EHdId':'meta[prope'+'rty=\x22og:vi'+_0x291269(0x1c0,0x1e6,0x37d,0x210)+']','QSzTO':function(_0x2be291,_0x15f2ec){return _0x2be291(_0x15f2ec);},'Cgcrr':_0x499ff4(0x7e,0x21,-0x19b,0x1a7)+_0x499ff4(-0x22,-0xfe,0x16d,-0x183)+'deo:height'+'\x22]','IFKOk':_0x499ff4(0x353,0x366,0x36b,0x2e2)+_0x291269(0x2b7,0x207,0x43c,0x430),'xGrgg':'#video-pla'+'yer-bg\x20>\x20s'+_0x499ff4(0x25d,0x156,0x131,0x300)+_0x291269(0x27d,0xb4,0x29e,0xb0),'BXjQu':_0x499ff4(0x112,0x210,0xc9,-0x54)+_0x499ff4(0x2dc,0x2aa,0x336,0x2a2)+_0x499ff4(0x121,0x79,-0x30,0x12f)+_0x499ff4(0x318,0x519,0x473,0x2c8),'ySafj':'html5playe'+'r.setVideo'+_0x499ff4(0x16f,-0x3d,0x3a6,0x283)+_0x499ff4(0x3bc,0x4cc,0x513,0x355),'hcBYH':_0x499ff4(0x112,-0x7d,0x281,-0x4f)+'r.setVideo'+'HLS\x5c(\x27(.*?'+_0x291269(0x4f5,0x700,0x4af,0x3c1),'GnSxq':_0x291269(0x333,0x15c,0x2f2,0x265)+_0x499ff4(-0x13,-0x8a,-0x34,0xb4)+_0x499ff4(0x1d5,0x109,0x392,0x203)+_0x499ff4(0x2d4,0x216,0x477,0x344),'eASnI':_0x499ff4(0x112,0x24c,0x2a2,0xb5)+_0x499ff4(-0x13,-0x3a,0x132,-0x12d)+_0x499ff4(0x140,-0x4c,0xaa,0xa6)+_0x291269(0x3e8,0x48e,0x5c3,0x558),'wKtWA':_0x291269(0x344,0x4f3,0x1ce,0x432),'tyBSO':function(_0x4b60b6,_0x11ddb4,_0x244cb1){return _0x4b60b6(_0x11ddb4,_0x244cb1);},'rWZrj':_0x499ff4(0x38d,0x32b,0x526,0x547)};return new Promise((_0x5e7fe9,_0x4e04c2)=>{function _0x1ed62c(_0x3704dd,_0x5a581d,_0x584cf0,_0x260031){return _0x499ff4(_0x584cf0-0x32d,_0x5a581d,_0x584cf0-0x57,_0x260031-0x10e);}const _0x207bc1={};_0x207bc1[_0xb7f74f(0x2e2,-0x23,0x24e,0x164)]=_0x1ed62c(0x77f,0x53f,0x6c4,0x7ae),_0x207bc1[_0x1ed62c(0x52a,0x5f5,0x521,0x2ee)]=_0xb7f74f(-0x107,0x73,-0x88,0x112);function _0xb7f74f(_0x2d9536,_0x2a951a,_0x1cd213,_0x15103e){return _0x499ff4(_0x15103e-0x167,_0x2d9536,_0x1cd213-0xcb,_0x15103e-0x8);}const _0x51ec27=_0x207bc1;if(_0x3e8765['wKtWA']!==_0x1ed62c(0x4e2,0x560,0x450,0x508)){_0x340a46[_0x1ed62c(0x87e,0x7ad,0x70c,0x61c)](_0xd3332b);if(_0x235674)return _0x590fb0(_0x51ec27[_0x1ed62c(0x481,0x413,0x521,0x64e)]);_0x105124(_0x1de894)['then'](async _0x2014fe=>{function _0x11d9ed(_0x1e1f84,_0x5e13d2,_0x34e53a,_0x455d9c){return _0x1ed62c(_0x1e1f84-0x128,_0x34e53a,_0x1e1f84- -0x15f,_0x455d9c-0xe6);}const _0x244db3={};_0x244db3[_0x48fe4a(0x1bf,0x81,0xec,0x38e)]=_0x3c4749,_0x244db3[_0x48fe4a(0x7a,0x1c1,0x4f,0x275)]=_0x2014fe,_0x244db3['type']=_0x51ec27[_0x11d9ed(0x1cb,-0x6c,0x2aa,0x2be)];function _0x48fe4a(_0x4998fd,_0x5ac2ad,_0x178e35,_0x1c48e2){return _0x1ed62c(_0x4998fd-0x1f1,_0x178e35,_0x4998fd- -0x31e,_0x1c48e2-0x55);}var _0x26e22=_0x244db3;_0x3cd64a[_0x11d9ed(0x192,0x99,0x2f6,0x385)][_0x11d9ed(0x267,0x43a,0x3f5,0x3ce)][_0x48fe4a(0x33b,0x3d4,0x18c,0x36a)](_0x26e22);});}else _0x3e8765['tyBSO'](fetch,''+_0x225112,{'method':_0x3e8765[_0x1ed62c(0x53f,0x3b8,0x33d,0x56c)]})[_0xb7f74f(0x6ef,0x5fc,0x6ec,0x4df)](_0x355d5a=>_0x355d5a[_0xb7f74f(0x4fd,0x35a,0x70c,0x4e7)]())['then'](_0x2f7c01=>{const _0x16a2cf={};_0x16a2cf[_0x16bc8b(0x343,0x665,0x4b2,0x4fd)]=![];let _0x23c93f=cheerio[_0x16bc8b(0x65b,0x4d0,0x43f,0x383)](_0x2f7c01,_0x16a2cf);function _0x16bc8b(_0x445dda,_0x13e3b6,_0x5e6e58,_0x2e3164){return _0xb7f74f(_0x445dda,_0x13e3b6-0x72,_0x5e6e58-0x9e,_0x5e6e58-0x10b);}const _0x2bf46a=_0x23c93f(_0x16bc8b(0x1b7,0x40f,0x2f0,0x355)+_0x16bc8b(0x76e,0x4a8,0x54f,0x425)+_0x4ea553(-0xb3,-0x1ce,-0x74,0x21))[_0x16bc8b(0x468,0x57e,0x3b5,0x46f)](_0x3e8765[_0x16bc8b(0x779,0x652,0x5f0,0x6a8)]),_0x25f1d2=_0x3e8765[_0x4ea553(0x2c7,0x1af,0x341,0x4dd)](_0x23c93f,_0x3e8765[_0x16bc8b(0x349,0x496,0x3fe,0x2fe)])[_0x4ea553(0x50,0x6f,0x5d,0x98)](_0x3e8765[_0x4ea553(0x28b,0x1a2,0x14e,0x362)]),_0x5cd3ba=_0x3e8765[_0x4ea553(0x2c7,0x4fe,0x2a5,0x4da)](_0x23c93f,_0x3e8765[_0x4ea553(-0x93,-0x28c,-0x1d1,-0x168)])['attr']('content'),_0x3de979=_0x3e8765[_0x16bc8b(0x759,0x5cf,0x62c,0x5c3)](_0x23c93f,_0x3e8765[_0x4ea553(0x174,-0x67,0x153,0x239)])[_0x4ea553(0x50,0x18c,0x1df,0xe2)](_0x3e8765[_0x16bc8b(0x4d9,0x819,0x5f0,0x632)]),_0x4483bf=_0x3e8765[_0x16bc8b(0x4b2,0x803,0x62c,0x7ab)](_0x23c93f,_0x3e8765[_0x16bc8b(0x76b,0x30b,0x53c,0x65c)])[_0x16bc8b(0x3b0,0x1be,0x3b5,0x2cc)](_0x3e8765[_0x16bc8b(0x780,0x72b,0x5f0,0x81a)]),_0x212646=_0x3e8765[_0x16bc8b(0x351,0x2f6,0x3f9,0x558)](_0x23c93f,_0x3e8765[_0x4ea553(0x7f,-0x63,0x1e7,0x1c6)])['attr'](_0x3e8765[_0x16bc8b(0x495,0x580,0x5f0,0x414)]),_0x466552=_0x3e8765[_0x16bc8b(0x5a2,0x3cf,0x3f9,0x4a1)](_0x23c93f,_0x3e8765['IFKOk'])[_0x16bc8b(0x7de,0x652,0x5f2,0x6d4)](),_0x499bfd=_0x3e8765['QSzTO'](_0x23c93f,_0x3e8765[_0x16bc8b(0x2a8,0x203,0x30c,0x18d)])[_0x16bc8b(0x4b3,0x520,0x335,0x559)](),_0x4c5176={'low':(_0x499bfd[_0x4ea553(0xa8,0x1f9,0x1,0x136)](_0x3e8765[_0x16bc8b(0x5d1,0x1ae,0x3e0,0x1c6)])||[])[0x16d3+-0x18c6+0x1f4],'high':_0x499bfd[_0x16bc8b(0x59f,0x337,0x40d,0x2a3)](_0x3e8765[_0x16bc8b(0x4d3,0x472,0x3f3,0x37b)]||[])[-0x1*0x4d5+-0x1cd5+-0xd*-0x297],'HLS':_0x499bfd[_0x4ea553(0xa8,0x1b8,-0x105,0x169)](_0x3e8765[_0x16bc8b(0x86,0x1ff,0x23a,0x39d)]||[])[0x3*-0x97d+-0x11de+-0x7b9*-0x6],'thumb':_0x499bfd['match'](_0x3e8765[_0x16bc8b(0x3e9,0x76c,0x608,0x756)]||[])[0x2b*0x9d+0x1*-0x10a6+-0x9b8],'thumb69':_0x499bfd[_0x4ea553(0xa8,0x22d,0x198,-0x12f)](_0x4ea553(0x1f,0x1fc,0x22,-0x165)+_0x4ea553(-0x106,-0x2a2,-0x20a,-0x92)+_0x16bc8b(0x5f0,0x76f,0x557,0x49b)+_0x16bc8b(0x656,0x454,0x58a,0x6f9)||[])[0x231c+-0x11a*0xe+-0x13af],'thumbSlide':_0x499bfd[_0x4ea553(0xa8,0x7e,0x2d9,0xac)](_0x3e8765['eASnI']||[])[-0x7f1+0x10bb*0x1+-0x8c9],'thumbSlideBig':_0x499bfd[_0x16bc8b(0x47a,0x536,0x40d,0x5b1)](_0x16bc8b(0x319,0x375,0x384,0x15e)+_0x16bc8b(0x3de,0x2fe,0x25f,0x304)+_0x16bc8b(0x31e,0xce,0x2a6,0x411)+'\x27(.*?)\x27\x5c);'||[])[0xf39+0x1b37+-0x2a6f]},_0x4ba493={};_0x4ba493[_0x4ea553(0x19f,-0x49,0x1c0,0x132)]=_0x2bf46a,_0x4ba493['URL']=_0x225112,_0x4ba493[_0x4ea553(0x2f2,0x14e,0x101,0x2a8)]=_0x25f1d2;function _0x4ea553(_0x5ae8f4,_0x3c37b9,_0x43e328,_0x231956){return _0x1ed62c(_0x5ae8f4-0x108,_0x3c37b9,_0x5ae8f4- -0x420,_0x231956-0xc3);}_0x4ba493['image']=_0x5cd3ba,_0x4ba493[_0x16bc8b(0x1b2,0x3cb,0x2b7,0x13a)]=_0x3de979,_0x4ba493[_0x16bc8b(0x26c,0xb5,0x2de,0xbc)]=_0x4483bf,_0x4ba493[_0x4ea553(0x2ba,0x40a,0x3c9,0x412)+'t']=_0x212646,_0x4ba493['info']=_0x466552,_0x4ba493[_0x4ea553(0x54,0x1f3,0x131,0x288)]=_0x4c5176;const _0x30ff7f={};_0x30ff7f[_0x16bc8b(0x560,0x28b,0x472,0x601)]=0xc8,_0x30ff7f[_0x16bc8b(0x496,0x26f,0x368,0x273)]=_0x4ba493,_0x3e8765['QSzTO'](_0x5e7fe9,_0x30ff7f);})[_0x1ed62c(0x859,0x4ab,0x637,0x863)](_0x3a9ab7=>_0x4e04c2({'code':0x1f7,'status':![],'result':_0x3a9ab7}));});}xnxxdl(args[0xf51*-0x1+-0x2237+0x2*0x18c4])[_0x185cf8(0x757,0x5e4,0x59d,0x4db)](async _0x3c7620=>{function _0x1ff059(_0x2aa105,_0x395280,_0x410885,_0x12697a){return _0x185cf8(_0x2aa105-0x15,_0x395280- -0x4d9,_0x410885-0xce,_0x12697a);}const _0x5b73fc={'itbLi':function(_0x5b0eed,_0x2188fa,_0x4f1f23,_0x21d8ca,_0x25d0dd){return _0x5b0eed(_0x2188fa,_0x4f1f23,_0x21d8ca,_0x25d0dd);}};function _0x5bd74a(_0x198ed4,_0x44da6a,_0x646e99,_0x9ef457){return _0x185cf8(_0x198ed4-0x63,_0x44da6a-0xd8,_0x646e99-0x6f,_0x198ed4);}let _0x1ad7c9=_0x5bd74a(0x57b,0x5ce,0x6a5,0x541)+_0x5bd74a(0x5ed,0x3bb,0x5b5,0x45e)+'\x20」----*\x0a\x09\x0a'+'📬\x20Title\x20:\x20'+_0x3c7620[_0x5bd74a(0x610,0x43a,0x275,0x2a6)][_0x1ff059(0x221,0x25,-0xa5,0xac)]+(_0x1ff059(-0x213,-0x11f,-0x222,-0xf)+':\x20')+_0x3c7620['result'][_0x5bd74a(0x672,0x60f,0x5de,0x59f)]+(_0x5bd74a(0x4fa,0x40e,0x1dd,0x612)+'\x20')+_0x3c7620[_0x5bd74a(0x201,0x43a,0x60c,0x211)]['videoWidth']+(_0x1ff059(0x1f4,0x10d,0x1af,-0x116)+':\x20')+_0x3c7620[_0x5bd74a(0x2b3,0x43a,0x426,0x50b)][_0x5bd74a(0x753,0x6f1,0x730,0x5e8)+'t']+'\x0a🔗\x20Url\x20:\x20'+_0x3c7620[_0x1ff059(-0x1f,-0x177,0x7e,0x69)]['URL'];await _0x5b73fc[_0x1ff059(-0x1af,-0x16c,0x75,-0x8e)](sendFileFromUrl,m[_0x1ff059(-0x286,-0x1d8,-0x2c8,-0xdc)],_0x3c7620['result'][_0x5bd74a(0x3e8,0x343,0x534,0x286)],_0x1ad7c9,m),sendFileFromUrl(m[_0x5bd74a(0x552,0x3d9,0x443,0x3d2)],_0x3c7620['result'][_0x5bd74a(0x444,0x48b,0x3c1,0x380)][_0x1ff059(0x35,0x23,-0x146,-0x178)],lang['ok'](),m);})[_0x42ed2f(0x8cd,0x77a,0x7b3,0x993)](_0x286fe3=>{function _0x4bdd48(_0x466738,_0xae0f50,_0x562af2,_0x30f1c9){return _0x185cf8(_0x466738-0x113,_0x30f1c9- -0x291,_0x562af2-0x6,_0x562af2);}const _0x4e219a={'aXYOl':function(_0x3d1bff,_0x3e026e){return _0x3d1bff(_0x3e026e);}};function _0x4affb3(_0x5d1b73,_0x4eb289,_0x380c04,_0x1ec831){return _0x185cf8(_0x5d1b73-0xad,_0x380c04- -0x2a5,_0x380c04-0x1d,_0x1ec831);}_0x4e219a[_0x4affb3(-0xf2,0x3d,0x133,0x6a)](reply,lang[_0x4affb3(-0x133,0x2ef,0xe3,0x96)]());});}break;case'list':case'store':{if(!m[_0x42ed2f(0x8d2,0x6c1,0x6d4,0x5df)])return reply(lang['groupOnly']());let data_store=db[_0x185cf8(0x153,0x230,0x3e4,0x287)][_0x42ed2f(0x84c,0x6e5,0x6a3,0x67d)];var arr_rows=[];for(let x of data_store){if(x['id']===m['chat']){const _0x348c0f={};_0x348c0f[_0x185cf8(0x64d,0x4fe,0x699,0x34e)]=x[_0x185cf8(0x36f,0x41c,0x522,0x31f)],_0x348c0f['rowId']=x[_0x185cf8(0x3c4,0x41c,0x37b,0x25a)],arr_rows[_0x185cf8(0x526,0x598,0x61b,0x73d)](_0x348c0f);}}var listMsg={'text':salam+'\x20@'+sender['split']('@')[0x499*-0x2+0x1166+-0x15e*0x6],'buttonText':_0x185cf8(0x85c,0x630,0x747,0x505),'footer':'List\x20'+groupName+_0x185cf8(0x20d,0x355,0x566,0x502)+ownername,'mentions':[sender],'sections':[{'title':groupName,'rows':arr_rows}]};alpha[_0x42ed2f(0x3d1,0x4ba,0x5a0,0x763)+'e'](from,listMsg);break;}case _0x42ed2f(0x814,0x754,0x7ba,0x66a):case _0x42ed2f(0x98d,0x7bd,0x7a9,0x7fb):{if(!text)return reply(lang[_0x42ed2f(0x4de,0x6d6,0x604,0x4e1)](prefix,command,'😱'));if(!isEmoji(text))return reply(lang[_0x42ed2f(0x63d,0x5b4,0x604,0x4f3)](prefix,command,'😱'));if(text[_0x42ed2f(0x669,0x541,0x547,0x4c2)]>-0x439+-0x569*0x1+0x9a4)return reply(lang['KisahNabi'](prefix,command,'😱'));emoji[_0x42ed2f(0x7e0,0x678,0x836,0x7c2)](text)[_0x42ed2f(0x651,0x940,0x821,0x7de)](async _0x135e6e=>{const _0x502862={'afJTh':function(_0x509243,_0x2e6050){return _0x509243(_0x2e6050);},'Ybdjz':function(_0x13a827,_0x1d940c){return _0x13a827(_0x1d940c);},'efExN':function(_0x213c46,_0x298167){return _0x213c46+_0x298167;},'DojMk':function(_0x5daa6,_0x139c2c){return _0x5daa6+_0x139c2c;},'gpeiY':function(_0x23d88f,_0x30fa63){return _0x23d88f===_0x30fa63;},'nQeXz':_0x408d04(0x4a2,0x4c0,0x666,0x4a5),'jNwtq':_0x408d04(0x671,0x73e,0x648,0x906)};var _0x4a1551=[];for(let _0x5caaf5 of _0x135e6e[_0x408d04(0x60d,0x659,0x84e,0x742)]){if(_0x502862[_0x17dcdb(-0x1ee,-0x21f,-0x186,-0x220)]('hPzbC',_0x502862[_0x17dcdb(-0x145,-0x4b,-0x204,-0x193)])){if(!_0x92202e[-0x1d*-0x14b+-0x2447+-0x18*0xd])return _0x4b5e16(_0x3c8afc[_0x17dcdb(-0x3b0,-0x187,-0x28e,-0x258)](_0x285213,_0x3c62ab));if(!_0x36eab8[-0x21e1+0x1386+-0x4*-0x397])return _0x152576(_0x5789f2['TbRepo'](_0x59b64f,_0x3d75b9));if(!_0x1548a3[0x255+0x9a6+-0xbf9])_0x502862[_0x17dcdb(-0x9a,0x2b,0x213,0x23)](_0x5a531c,_0x4efa87['TbRepo'](_0x2fecb9,_0x2d3fed));let _0xffdbe0='https://gi'+'thub.com/'+_0x1ce3ce[0xc*0x1cd+-0x2*0xe6b+-0x172*-0x5]+'/'+_0x1cd388[0x1*-0x2293+0x1*0x6bb+0x1bd9]+('/archive/r'+_0x408d04(0x3fa,0x52e,0x5c3,0x6bc))+_0x18de79[0x1*0x2b3+0x1ff3*0x1+0x2e3*-0xc]+_0x17dcdb(0x39,0x207,0x291,0xf9);_0x502862[_0x408d04(0x27d,0x307,0x301,0x396)](_0x1af8df,_0x37f8a5[_0x17dcdb(-0x3a9,-0x174,-0x27a,0x14)]()),_0x34a2f0['sendMedia'](_0x44fb2a[_0x17dcdb(-0x66,-0x148,-0x16f,-0xc)],_0xffdbe0,_0x502862['efExN'](_0x502862[_0x408d04(0x49b,0x526,0x75d,0x5d5)](_0x502862[_0x408d04(0x18e,0x312,0x214,0x1dd)](_0x5ca6c9[0x254e+-0x1780+0x6*-0x24d],'-'),_0x367d4d[0x2525+0x140a+-0x392e]),'-')+_0x53fa61[-0x12*-0x54+0x66c+0xc52*-0x1]+'.',_0x31b707);}else{const _0x42bd17={};_0x42bd17[_0x17dcdb(0x5c,0xb5,0x283,-0x7d)]=_0x5caaf5[_0x17dcdb(-0x442,-0x228,-0x3d9,-0xa9)],_0x42bd17[_0x17dcdb(0x277,0xb9,0x2d0,-0x2e)]=_0x408d04(0x5e1,0x4ac,0x6c7,0x43f)+_0x5caaf5[_0x408d04(0x4a9,0x3e5,0x1ea,0x400)],_0x4a1551[_0x17dcdb(-0x82,0x14f,-0x1a,0x26)](_0x42bd17);}}const _0x2dca64={};function _0x408d04(_0x34c82f,_0x3371fc,_0x7b0734,_0x3b34e6){return _0x42ed2f(_0x34c82f-0xbd,_0x7b0734,_0x3371fc- -0x12f,_0x3b34e6-0xa1);}function _0x17dcdb(_0x4e2d23,_0x1ee52c,_0x455f82,_0x4b3020){return _0x185cf8(_0x4e2d23-0x9a,_0x1ee52c- -0x449,_0x455f82-0x115,_0x4e2d23);}_0x2dca64['title']=groupName,_0x2dca64[_0x408d04(0x350,0x48a,0x4ac,0x398)]=_0x4a1551;var _0x469712={'text':'@'+m[_0x17dcdb(-0x8f,0x73,0x25d,-0x139)][_0x408d04(0x440,0x65b,0x86d,0x860)]('@')[-0x1c*0x13d+-0x1775+0x3a21]+(_0x17dcdb(0x118,-0x89,-0x42,-0x53)+'i'),'buttonText':_0x502862[_0x17dcdb(-0x6b,-0x1da,-0x1d9,0x34)],'footer':'©\x20'+ownername,'mentions':[m[_0x408d04(0x61c,0x5ca,0x563,0x4e2)]],'sections':[_0x2dca64]};const _0x2f53c2={};_0x2f53c2[_0x17dcdb(0x37,-0xb6,0x120,-0x18b)]=fkontak,alpha['sendMessag'+'e'](m[_0x408d04(0x423,0x40f,0x383,0x2f4)],_0x469712,_0x2f53c2);});break;}case _0x185cf8(0x12a,0x342,0x193,0x390):{if(!text)return reply(lang[_0x185cf8(0x3f0,0x3c7,0x427,0x47e)](prefix,command,'😱'));reply(lang[_0x185cf8(0x253,0x2d5,0x10f,0x4b8)]());const _0x40e68={};_0x40e68[_0x185cf8(0x5f3,0x41a,0x436,0x401)]=global[_0x185cf8(0x387,0x41a,0x5bc,0x43a)],_0x40e68[_0x185cf8(0x4b5,0x41d,0x3c2,0x5b9)]=global[_0x42ed2f(0x5cf,0x54b,0x65a,0x871)],alpha[_0x42ed2f(0x60b,0x4d2,0x4a0,0x42d)+_0x185cf8(0x32e,0x405,0x36b,0x48c)](m['chat'],text,m,_0x40e68);}break;case'addlist':{if(!m['isGroup'])return reply(lang[_0x42ed2f(0x4cb,0x521,0x626,0x573)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x42ed2f(0x567,0x6df,0x4fc,0x2e8)]());let data_store=db[_0x42ed2f(0x688,0x687,0x46d,0x4b3)]['store'];var args1=q[_0x185cf8(0x54f,0x54d,0x4fe,0x47f)]('|')[0x18f1+0x12f*-0xb+-0xbec];if(args1[_0x185cf8(0x552,0x35e,0x385,0x2fa)](command))return reply(lang[_0x42ed2f(0x7da,0x847,0x78f,0x66b)]());var args2=q[_0x185cf8(0x5cd,0x54d,0x430,0x431)]('|')[-0x1*-0x839+-0x2398+0x1b60];if(!text[_0x42ed2f(0x68f,0x5a0,0x59b,0x629)]('|'))return reply(lang['Addlist_'](prefix,command));if(/image/['test'](mime)){let media=await alpha[_0x185cf8(0x477,0x52a,0x6c5,0x522)+_0x42ed2f(0x977,0x819,0x748,0x85e)+_0x42ed2f(0x716,0x6db,0x7af,0x7d6)](quoted);const fd=new FormData();fd[_0x185cf8(0x310,0x50e,0x5b3,0x6d5)]('file',fs[_0x185cf8(0x5b4,0x600,0x6e5,0x6a3)+'nc'](media),_0x42ed2f(0x642,0x41d,0x4cd,0x538),_0x42ed2f(0x380,0x4d3,0x5ae,0x66e));const _0x240f01={};_0x240f01[_0x185cf8(0x334,0x40c,0x455,0x31e)]=_0x42ed2f(0x665,0x551,0x6c1,0x833),_0x240f01[_0x42ed2f(0x4a6,0x6d8,0x59e,0x723)]=fd,fetch(_0x185cf8(0x780,0x5c6,0x56b,0x3be)+_0x185cf8(0x763,0x5fe,0x41c,0x3ff)+_0x185cf8(0x457,0x386,0x5b9,0x4af),_0x240f01)[_0x185cf8(0x55e,0x5e4,0x6ab,0x513)](_0x2c2e0a=>_0x2c2e0a[_0x185cf8(0x3a0,0x357,0x23c,0x1a6)]())[_0x42ed2f(0x84d,0x80f,0x821,0x735)](_0x38e423=>{const _0x1aff60={'aBzvf':function(_0x31c181,_0x466e5c){return _0x31c181(_0x466e5c);}},_0x2b8642={};_0x2b8642['id']=m[_0x4d4982(0x5cf,0x583,0x388,0x48b)],_0x2b8642[_0x3ac2f6(0x323,0x454,0x34b,0x415)]=args1,_0x2b8642['response']=args2,_0x2b8642['isImage']=!![],_0x2b8642[_0x4d4982(0x877,0x810,0x6b8,0x7b9)]=_0x4d4982(0x881,0x848,0x9f6,0xa45)+_0x4d4982(0x795,0x860,0x928,0x7f6)+_0x38e423[0x1*0x23de+0x971+0x679*-0x7]['src'];function _0x4d4982(_0x5aed85,_0x403667,_0x43670e,_0x4fb9da){return _0x42ed2f(_0x5aed85-0x104,_0x5aed85,_0x403667-0x45,_0x4fb9da-0x1a5);}var _0xda7e9e=_0x2b8642;function _0x3ac2f6(_0x515018,_0x121b1a,_0x260311,_0xab3621){return _0x185cf8(_0x515018-0x150,_0x515018- -0xf9,_0x260311-0x119,_0x121b1a);}data_store[_0x4d4982(0x668,0x81a,0x7e1,0x6b9)](_0xda7e9e),_0x1aff60[_0x4d4982(0x668,0x47f,0x4f0,0x28c)](reply,lang[_0x3ac2f6(0x424,0x2d2,0x27c,0x482)+'e'](args1));if(fs[_0x4d4982(0x641,0x6c7,0x891,0x60f)](media))fs['unlinkSync'](media);});}else{const _0x515b5b={};_0x515b5b['id']=m[_0x185cf8(0x335,0x301,0x4cb,0x2ea)],_0x515b5b[_0x42ed2f(0x871,0x88d,0x659,0x709)]=args1,_0x515b5b[_0x42ed2f(0x675,0x8bc,0x6cf,0x56c)]=args2,_0x515b5b['isImage']=![],_0x515b5b[_0x185cf8(0x4aa,0x58e,0x4e1,0x4aa)]='-';var obj_add=_0x515b5b;data_store[_0x185cf8(0x66e,0x598,0x6be,0x4a5)](obj_add),reply(lang[_0x42ed2f(0x75c,0x5dc,0x75a,0x94a)+'e'](args1));}break;}case'dellist':{if(!m[_0x42ed2f(0x603,0x66d,0x6d4,0x715)])return reply(lang[_0x185cf8(0x546,0x3e9,0x2df,0x47a)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x185cf8(0x232,0x2bf,0x260,0x343)]());if(!q)return reply(lang[_0x42ed2f(0x6a1,0x666,0x62f,0x7ae)](prefix,command));let data=db['data'][_0x185cf8(0x2e9,0x466,0x62b,0x4cf)];for(let _db of data){if(_db['id']===m[_0x42ed2f(0x471,0x672,0x53e,0x4c5)]&&_db[_0x185cf8(0x64d,0x41c,0x515,0x5d6)]===text){const uUripr=(_0x42ed2f(0x52c,0x638,0x59a,0x6a1)+'1')[_0x185cf8(0x764,0x54d,0x552,0x433)]('|');let NNTOjI=-0xc83*0x3+-0x27*0x3b+-0x6*-0x7c1;while(!![]){switch(uUripr[NNTOjI++]){case'0':reply(lang['DellistDon'+'e'](text));continue;case'1':throw![];continue;case'2':delete _db[_0x185cf8(0x754,0x58e,0x6a4,0x75b)];continue;case'3':delete _db['id'];continue;case'4':delete _db[_0x42ed2f(0x663,0x470,0x659,0x45e)];continue;case'5':delete _db[_0x42ed2f(0x5bc,0x6a6,0x66a,0x686)];continue;}break;}}else reply(lang[_0x185cf8(-0x15,0x1f1,0xb1,0x416)+'e'](text));}break;}case'updatelist':case'update':{if(!m[_0x42ed2f(0x522,0x6d3,0x6d4,0x54d)])return reply(lang[_0x42ed2f(0x847,0x63a,0x626,0x47c)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x42ed2f(0x5b6,0x5aa,0x4fc,0x3bf)]());var args1=q['split']('|')[0xbaa*0x2+-0x21d8+0xa84*0x1],args2=q[_0x185cf8(0x40e,0x54d,0x49a,0x518)]('|')[0x224a+-0xfd4+-0x1275];let data=db['data'][_0x42ed2f(0x575,0x47a,0x6a3,0x827)];if(!q[_0x185cf8(0x4df,0x35e,0x1c2,0x3fd)]('|'))return reply(lang['Addlist_'](prefix,command));if(/image/[_0x42ed2f(0x932,0x7ec,0x775,0x7eb)](mime)){let media=await alpha[_0x185cf8(0x6af,0x52a,0x318,0x59a)+_0x185cf8(0x375,0x50b,0x3cc,0x541)+_0x42ed2f(0x68b,0x821,0x7af,0x8a9)](quoted);const fd=new FormData();fd[_0x42ed2f(0x878,0x65b,0x74b,0x6fa)]('file',fs[_0x42ed2f(0x7ba,0x725,0x83d,0x794)+'nc'](media),'.tmp','.jpg');const _0x2f6dac={};_0x2f6dac[_0x42ed2f(0x436,0x43f,0x649,0x873)]=_0x42ed2f(0x808,0x896,0x6c1,0x830),_0x2f6dac[_0x42ed2f(0x376,0x608,0x59e,0x6f0)]=fd,fetch(_0x42ed2f(0x955,0x6c6,0x803,0x677)+_0x42ed2f(0x7d4,0x93c,0x83b,0x7e7)+_0x42ed2f(0x7e3,0x6bb,0x5c3,0x612),_0x2f6dac)[_0x185cf8(0x788,0x5e4,0x576,0x63d)](_0x2e2ae2=>_0x2e2ae2['json']())[_0x42ed2f(0x8ba,0x797,0x821,0x6bc)](_0x1e372c=>{function _0x1a796a(_0x360647,_0x5ca510,_0x171d50,_0x5a8be0){return _0x185cf8(_0x360647-0x143,_0x5ca510- -0x3f5,_0x171d50-0x11b,_0x360647);}function _0x3ab1c5(_0x22e18a,_0x4ad4ac,_0x418c86,_0x2099ea){return _0x185cf8(_0x22e18a-0x16f,_0x4ad4ac- -0x4,_0x418c86-0x83,_0x418c86);}const _0x3a468f={'ICdel':'audio/mpeg','loVCQ':function(_0x43b6c8,_0x417d66){return _0x43b6c8(_0x417d66);},'YXZHe':function(_0x34fef4,_0x44217e){return _0x34fef4===_0x44217e;},'plAvs':function(_0x3787eb,_0x490012){return _0x3787eb===_0x490012;},'rhPwy':function(_0xde1f9b,_0x1130e2){return _0xde1f9b!==_0x1130e2;},'NJdIo':_0x1a796a(-0x14d,-0x14f,0x6d,-0x31c)};for(let _0x2f6dc0 of data){_0x3a468f[_0x1a796a(0x3af,0x259,0x307,0x301)](_0x2f6dc0['id'],m[_0x3ab1c5(0x34f,0x2fd,0x4e9,0x455)])&&_0x3a468f[_0x3ab1c5(0x757,0x613,0x530,0x57f)](_0x2f6dc0[_0x3ab1c5(0x1ec,0x418,0x607,0x37b)],args1)?_0x3a468f[_0x1a796a(-0x13,-0x116,0x90,-0x1f4)](_0x1a796a(-0x2f4,-0x14f,-0x2ef,-0x2ed),_0x3a468f[_0x3ab1c5(0x305,0x398,0x488,0x31e)])?_0x3a468f[_0x3ab1c5(0x5f4,0x432,0x470,0x4f4)](_0x90775a,_0x3d14f0)[_0x3ab1c5(0x5d3,0x5e0,0x771,0x735)](_0x150797=>{const {no_watermark:_0x28debf,no_watermark2:_0x419b49,no_watermark_raw:_0x37d10a}=_0x150797['video'],_0x5895f3={};_0x5895f3[_0x1b9609(0x4a8,0x377,0x556,0x615)]=_0x28debf;const _0x54a704={};_0x54a704[_0x1b9609(0xa11,0x7c3,0x8cb,0x846)]=_0x5895f3,_0x54a704[_0x180189(0x486,0x3cc,0x279,0x3d3)]=_0x3a468f[_0x1b9609(0x5d7,0x38a,0x56d,0x686)];const _0x253970={};_0x253970[_0x1b9609(0x72d,0x65f,0x612,0x496)]=_0x57e132;function _0x180189(_0x509dc3,_0x3558ff,_0x4545e5,_0xb825f){return _0x3ab1c5(_0x509dc3-0x1cf,_0x509dc3-0x24c,_0x3558ff,_0xb825f-0xed);}function _0x1b9609(_0x4135cb,_0x48a223,_0x55b353,_0x2d94b2){return _0x3ab1c5(_0x4135cb-0xe8,_0x55b353-0x283,_0x2d94b2,_0x2d94b2-0x9f);}_0x373258[_0x180189(0x5ab,0x78b,0x763,0x7d3)+'e'](_0x1d96aa['chat'],_0x54a704,_0x253970);}):(_0x2f6dc0[_0x1a796a(0x156,0x9d,0xa2,0x2b4)]=args2,_0x2f6dc0[_0x1a796a(0x60,0x38,-0x1bb,-0x1d5)]=!![],_0x2f6dc0['image_url']=_0x1a796a(-0x3b,0x1d1,0xe,0xa3)+_0x1a796a(0x128,0x1e9,0x14e,0x309)+_0x1e372c[-0x15d5+-0x234a+0x391f][_0x1a796a(-0x136,-0x10f,-0x1a6,0x54)],reply(lang['UpList'](args1))):reply(lang[_0x3ab1c5(0x768,0x65a,0x65c,0x477)](args1));}});}else for(let _db of data){_db['id']===m[_0x185cf8(0x29b,0x301,0x354,0x1f3)]&&_db[_0x42ed2f(0x4fa,0x4a5,0x659,0x44c)]===args1?(_db[_0x185cf8(0x3cd,0x492,0x5b3,0x3ed)]=args2,_db[_0x185cf8(0x2fe,0x42d,0x5ee,0x3be)]=![],_db['image_url']='-',reply(lang[_0x185cf8(0x601,0x451,0x2b8,0x527)](args1))):reply(lang[_0x185cf8(0x4c9,0x65e,0x605,0x5f1)](args1));}break;}case'tambah':{if(!text[_0x42ed2f(0x705,0x4b5,0x59b,0x3cb)]('+'))return reply(lang[_0x42ed2f(0x70c,0x6c8,0x604,0x4de)](prefix,command,_0x185cf8(0x4dd,0x3b4,0x215,0x5d9)));arg=args['join']('\x20'),atas=arg[_0x185cf8(0x654,0x54d,0x536,0x48a)]('+')[-0x1e1f+0x14e4+0x93b],bawah=arg[_0x42ed2f(0x890,0x597,0x78a,0x5c1)]('+')[-0x4*-0x5d4+0x1059+0x4*-0x9ea];var nilai_one=Number(atas),nilai_two=Number(bawah);reply(''+(nilai_one+nilai_two));}break;case _0x42ed2f(0x562,0x60f,0x522,0x56e):{if(!text['includes']('-'))return reply(lang[_0x185cf8(0x30b,0x3c7,0x32b,0x1f4)](prefix,command,'1-2'));arg=args['join']('\x20'),atas=arg['split']('-')[-0x71e*-0x1+0xa*0x264+-0x13*0x1a2],bawah=arg[_0x185cf8(0x704,0x54d,0x702,0x3b4)]('-')[-0x18ad+0x359*0x6+0x498];var nilai_one=Number(atas),nilai_two=Number(bawah);reply(''+(nilai_one-nilai_two));}break;case _0x185cf8(0x2ee,0x3f7,0x1e1,0x5ab):{if(!text['includes']('*'))return reply(lang[_0x42ed2f(0x486,0x4de,0x604,0x732)](prefix,command,_0x185cf8(0x3d5,0x4dd,0x62e,0x3ae)));arg=args['join']('\x20'),atas=arg['split']('*')[0x970*-0x1+-0x1d18+0x2688],bawah=arg[_0x185cf8(0x5d8,0x54d,0x346,0x746)]('*')[0x49d*-0x2+0x27*0x69+-0x6c4*0x1];var nilai_one=Number(atas),nilai_two=Number(bawah);reply(''+nilai_one*nilai_two);}break;case _0x42ed2f(0x69a,0x608,0x66f,0x5f2):{const dhuGnt=(_0x185cf8(0x7fa,0x5d4,0x5be,0x4b9)+_0x42ed2f(0x569,0x2f4,0x47e,0x4d3))[_0x42ed2f(0x6c6,0x7dd,0x78a,0x67d)]('|');let jFIPRE=0x350*-0x6+-0x1104+0x24e4;while(!![]){switch(dhuGnt[jFIPRE++]){case'0':atas=arg['split']('/')[-0x1*-0x1dc3+-0x3ca+0x3d*-0x6d];continue;case'1':var nilai_two=Number(bawah);continue;case'2':arg=args[_0x185cf8(0x7c9,0x62d,0x4fb,0x40c)]('\x20');continue;case'3':reply(''+nilai_one/nilai_two);continue;case'4':var nilai_one=Number(atas);continue;case'5':bawah=arg[_0x185cf8(0x753,0x54d,0x5b1,0x55f)]('/')[-0x1dbe+0x109c+0xb1*0x13];continue;case'6':if(!text['includes']('/'))return reply(lang[_0x185cf8(0x5de,0x3c7,0x47f,0x5a4)](prefix,command,_0x42ed2f(0x8dd,0x512,0x6f1,0x8da)));continue;}break;}}break;case'p':case _0x42ed2f(0x82e,0x58b,0x757,0x816):{if(!m['isGroup'])return reply(lang['groupOnly']());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang['adminOnly']());let tek=m['quoted']?quoted[_0x185cf8(0x6ba,0x5ec,0x790,0x4bf)]:quoted[_0x185cf8(0x7b7,0x5ec,0x4d4,0x6ae)][_0x185cf8(0x720,0x54d,0x485,0x41a)](args[0x78+0x1*0x67f+0x1*-0x6f7])[-0x139*-0x6+0xe5d*-0x1+0x708],proses='「\x20*TRANSAK'+_0x42ed2f(0x733,0x803,0x77a,0x8b5)+_0x42ed2f(0x3f2,0x6a1,0x559,0x641)+_0x185cf8(0x63f,0x55f,0x5ef,0x5b7)+tanggal(new Date())+(_0x185cf8(0x3cf,0x545,0x453,0x594)+_0x42ed2f(0x3c9,0x4db,0x568,0x624))+time+('\x0a✨\x20STATUS\x20'+_0x185cf8(0x488,0x504,0x55b,0x428)+'```\x0a\x0a📝\x20Cat'+_0x42ed2f(0x494,0x57d,0x4e2,0x5e0))+(tek?tek:'-')+(_0x185cf8(0x41d,0x5c9,0x39f,0x44c)+'@')+m[_0x185cf8(0x47c,0x4bc,0x560,0x6ef)][_0x42ed2f(0x8dd,0x831,0x78a,0x8aa)]('@')[0x371*0x8+-0x272*0xb+0x3*-0x36]+(_0x185cf8(0x160,0x225,0x8,-0xc)+_0x185cf8(0x4b8,0x39d,0x40c,0x2d0));alpha[_0x42ed2f(0x3c8,0x350,0x56f,0x6f1)+'thMentions'](m[_0x42ed2f(0x6b6,0x3ec,0x53e,0x3a3)],proses,m);}break;case'd':case _0x42ed2f(0x645,0x25a,0x445,0x353):{if(!m[_0x185cf8(0x682,0x497,0x6c1,0x651)])return reply(lang[_0x185cf8(0x4e8,0x3e9,0x42c,0x5f8)]());if(!isGroupAdmins&&!isGroupOwner&&!isCreator)return reply(lang[_0x185cf8(0x341,0x2bf,0x492,0x148)]());let tek=m[_0x185cf8(0x4b3,0x393,0x4f2,0x224)]?quoted[_0x185cf8(0x4e4,0x5ec,0x5af,0x762)]:quoted[_0x42ed2f(0x80a,0x9d5,0x829,0x6bb)][_0x42ed2f(0x784,0x5bb,0x78a,0x768)](args[-0x2*0xe82+-0x23fa+0x15aa*0x3])[0xa04+-0x1*0x20a2+-0x169f*-0x1],sukses=_0x185cf8(0xbe,0x245,0x205,0x326)+_0x42ed2f(0x386,0x470,0x47c,0x3d6)+_0x42ed2f(0x30f,0x34a,0x4d9,0x2fc)+_0x42ed2f(0x4f5,0x7c1,0x70c,0x53f)+'\x20'+tanggal(new Date())+(_0x185cf8(0x341,0x545,0x6da,0x5e4)+'\x20:\x20')+time+('\x0a✨\x20STATUS\x20'+_0x185cf8(0x355,0x384,0x151,0x1b8)+_0x185cf8(0x45d,0x2f0,0x166,0x470)+'tatan\x20:\x0a')+(tek?tek:'-')+(_0x42ed2f(0x876,0x84f,0x753,0x65a)+'sih\x20@')+m['sender'][_0x185cf8(0x780,0x54d,0x4fc,0x721)]('@')[0x26a*-0x4+-0x8ed+-0x1*-0x1295]+(_0x185cf8(0x2d0,0x485,0x57a,0x61d)+_0x42ed2f(0x6b8,0x4e2,0x572,0x70f));alpha[_0x185cf8(0x171,0x332,0x258,0x4ec)+_0x42ed2f(0x53a,0x36a,0x4c4,0x4cf)](m[_0x185cf8(0x30d,0x301,0x269,0x251)],sukses,m);}break;case _0x185cf8(0x3ad,0x5a6,0x605,0x534):if(m[_0x185cf8(0x544,0x497,0x30f,0x53b)])return reply(lang[_0x42ed2f(0x585,0x4de,0x67b,0x88a)]());const _0x4fa428={};_0x4fa428[_0x185cf8(0x67b,0x63c,0x6aa,0x637)+'t']='Support\x20Me'+'\x20✨',_0x4fa428['url']='https://yo'+_0x185cf8(0x2d6,0x3bf,0x414,0x40d)+_0x42ed2f(0x65f,0x84e,0x73a,0x5f3)+'c';const _0x4786c8={};_0x4786c8[_0x185cf8(0x4cc,0x65f,0x529,0x78c)]=_0x4fa428;var but=[_0x4786c8,{'quickReplyButton':{'displayText':lang[_0x42ed2f(0x87e,0x5d7,0x738,0x864)](),'id':_0x42ed2f(0x68a,0x4a3,0x4c6,0x329)}}],teks=''+lang['Anonymous'](pushname,prefix);const _0x6e3cd={};_0x6e3cd[_0x185cf8(0x5dd,0x5ec,0x682,0x7e2)]=teks,_0x6e3cd[_0x42ed2f(0x4e4,0x5af,0x60e,0x558)]='©\x20'+ownername,_0x6e3cd['templateBu'+_0x185cf8(0x3c3,0x387,0x17a,0x335)]=but,alpha[_0x185cf8(0x438,0x363,0x20a,0x45b)+'e'](from,_0x6e3cd);break;case _0x185cf8(0x837,0x641,0x6c8,0x49d):case _0x42ed2f(0x975,0x660,0x81f,0x829):case _0x42ed2f(0x7c5,0x88a,0x74f,0x5d0):{if(m[_0x42ed2f(0x7a4,0x7ca,0x6d4,0x53e)])return reply(lang[_0x42ed2f(0x5dd,0x5f0,0x67b,0x4b4)]());let room=Object[_0x185cf8(0x4c1,0x423,0x589,0x647)](db[_0x42ed2f(0x253,0x3b4,0x46d,0x298)][_0x42ed2f(0x94e,0x9c9,0x7e3,0xa16)])[_0x42ed2f(0x942,0x750,0x7b2,0x5b6)](_0x192e30=>_0x192e30[_0x185cf8(0x1e2,0x222,0x27,0x21f)](m[_0x185cf8(0x5ff,0x4bc,0x561,0x6d2)]));if(!room){const _0x32ff15={};_0x32ff15[_0x42ed2f(0x818,0x64d,0x879,0x9aa)+'t']=_0x42ed2f(0x256,0x463,0x486,0x4a4);const _0x41b6a7={};_0x41b6a7[_0x42ed2f(0x7bc,0x578,0x736,0x607)]=_0x42ed2f(0x301,0x5d5,0x4c6,0x38c),_0x41b6a7[_0x185cf8(0x704,0x61b,0x596,0x563)]=_0x32ff15,_0x41b6a7['type']=0x1;let buttons=[_0x41b6a7];await alpha[_0x185cf8(0x5ca,0x612,0x82e,0x726)+_0x42ed2f(0x38e,0x397,0x53c,0x4ee)](m['chat'],buttons,lang[_0x42ed2f(0x640,0x94a,0x77b,0x5b4)]());throw![];}const _0x588101={};_0x588101[_0x42ed2f(0x992,0x7da,0x879,0x733)+'t']=_0x185cf8(0x375,0x498,0x41c,0x33d)+'\x20✨',_0x588101[_0x185cf8(0x341,0x2d7,0x2fb,0x1e1)]='https://yo'+'utube.com/'+_0x185cf8(0x60f,0x4fd,0x365,0x411)+'c';const _0x11fc5d={};_0x11fc5d[_0x185cf8(0x5dc,0x65f,0x70f,0x720)]=_0x588101;var but=[_0x11fc5d,{'quickReplyButton':{'displayText':lang[_0x42ed2f(0x5b1,0x8c1,0x6d1,0x503)](),'id':'start'}}];await alpha[_0x42ed2f(0x6eb,0x579,0x5a0,0x418)+'e'](from,{'text':lang[_0x185cf8(0x874,0x657,0x78c,0x6df)+'p'](),'footer':'©\x20'+ownername,'templateButtons':but});let other=room[_0x42ed2f(0x922,0x7c6,0x70f,0x846)](m[_0x185cf8(0x504,0x4bc,0x563,0x607)]);if(other)await alpha[_0x185cf8(0x4aa,0x363,0x3fb,0x446)+'e'](other,{'text':lang[_0x185cf8(0x208,0x3f5,0x33e,0x25c)+_0x185cf8(0x44c,0x4d8,0x432,0x452)](),'footer':'©\x20'+ownername,'templateButtons':but});delete db[_0x42ed2f(0x42e,0x63a,0x46d,0x463)][_0x185cf8(0x544,0x5a6,0x3b0,0x399)][room['id']];if(command===_0x42ed2f(0x6f6,0x9bc,0x87e,0x89a))break;}break;case _0x185cf8(0x7a3,0x631,0x6f8,0x620):case _0x42ed2f(0x8a6,0xa17,0x813,0x9ac):if(m['isGroup'])return reply(lang['private']());if(Object[_0x42ed2f(0x57e,0x69e,0x660,0x4cd)](db[_0x185cf8(0x2a5,0x230,0x27a,0x30a)][_0x185cf8(0x454,0x5a6,0x761,0x567)])[_0x185cf8(0x751,0x575,0x381,0x4ea)](_0x3ada14=>_0x3ada14[_0x185cf8(0x405,0x222,0x1dd,0x5a)](m[_0x185cf8(0x2d0,0x4bc,0x5cd,0x421)]))){const _0x50d13c={};_0x50d13c['displayTex'+'t']=_0x185cf8(0x3fa,0x498,0x2e8,0x530)+'\x20✨',_0x50d13c[_0x185cf8(0x339,0x2d7,0x1b2,0x3ef)]='https://yo'+_0x42ed2f(0x6ff,0x81b,0x5fc,0x45f)+_0x42ed2f(0x61f,0x57b,0x73a,0x8b8)+'c';const _0x432192={};_0x432192[_0x42ed2f(0x985,0x8e2,0x89c,0x81a)]=_0x50d13c;const _0xb08d3e={};_0xb08d3e[_0x42ed2f(0x944,0x8da,0x879,0x87e)+'t']=_0x42ed2f(0x6e7,0x5fc,0x4ce,0x628),_0xb08d3e['id']=_0x42ed2f(0x61a,0x791,0x81f,0x711);const _0x5d95d6={};_0x5d95d6[_0x185cf8(0x2e1,0x3cb,0x51a,0x1bc)+'Button']=_0xb08d3e;const _0x2a5085={};_0x2a5085[_0x185cf8(0x4f2,0x63c,0x7b9,0x768)+'t']='Skip',_0x2a5085['id']=_0x42ed2f(0x60f,0x353,0x54b,0x601);const _0x335262={};_0x335262['quickReply'+_0x42ed2f(0x45c,0x58b,0x52f,0x4a7)]=_0x2a5085;var but=[_0x432192,_0x5d95d6,_0x335262];await alpha[_0x42ed2f(0x58a,0x3b9,0x5a0,0x621)+'e'](m[_0x42ed2f(0x64f,0x4cb,0x53e,0x38f)],{'text':lang[_0x42ed2f(0x783,0x6a3,0x85c,0xa03)](),'footer':'©\x20'+ownername,'templateButtons':but});throw![];}let room=Object['values'](db[_0x185cf8(0x3e0,0x230,0x39f,0x2e9)][_0x185cf8(0x517,0x5a6,0x597,0x688)])[_0x42ed2f(0x793,0x9c2,0x7b2,0x8ff)](_0x54f2d7=>_0x54f2d7[_0x42ed2f(0xa18,0x91e,0x895,0x7cf)]==='WAITING'&&!_0x54f2d7['check'](m['sender']));if(room){const ZGdKVV=_0x185cf8(0x162,0x2af,0x47e,0x130)[_0x185cf8(0x66d,0x54d,0x54b,0x39c)]('|');let Ppteav=-0x145d*0x1+-0x18*-0x122+-0x6d3*0x1;while(!![]){switch(ZGdKVV[Ppteav++]){case'0':const _0x2e97f3={};_0x2e97f3[_0x42ed2f(0x7ed,0x7c7,0x879,0x711)+'t']=_0x185cf8(0x481,0x498,0x289,0x6af)+'\x20✨',_0x2e97f3['url']=_0x185cf8(0x388,0x2a2,0x219,0x476)+_0x185cf8(0x5b4,0x3bf,0x26a,0x21f)+'c/zeeoneof'+'c';const _0x23d9c0={};_0x23d9c0[_0x185cf8(0x6cc,0x65f,0x4da,0x670)]=_0x2e97f3;const _0x27014f={};_0x27014f[_0x185cf8(0x6e8,0x63c,0x756,0x72c)+'t']='Stop',_0x27014f['id']='stop';const _0x405ab5={};_0x405ab5[_0x42ed2f(0x67c,0x47a,0x608,0x492)+'Button']=_0x27014f;const _0x3d091b={};_0x3d091b['displayTex'+'t']=_0x42ed2f(0x890,0x62b,0x6f6,0x51a),_0x3d091b['id']=_0x42ed2f(0x5ed,0x3f7,0x54b,0x72a);const _0x4882e0={};_0x4882e0['quickReply'+'Button']=_0x3d091b;var but=[_0x23d9c0,_0x405ab5,_0x4882e0];continue;case'1':await alpha[_0x42ed2f(0x731,0x664,0x5a0,0x72c)+'e'](room['a'],{'text':lang[_0x42ed2f(0x5c2,0x548,0x503,0x63a)](prefix),'footer':'©\x20'+ownername,'templateButtons':but});continue;case'2':await alpha[_0x42ed2f(0x48a,0x7b0,0x5a0,0x738)+'e'](room['b'],{'text':lang[_0x42ed2f(0x645,0x719,0x503,0x52f)](prefix),'footer':'©\x20'+ownername,'templateButtons':but});continue;case'3':room['b']=m[_0x42ed2f(0x6e6,0x932,0x6f9,0x6be)];continue;case'4':room['state']='CHATTING';continue;}break;}}else{let id=+new Date();db['data'][_0x42ed2f(0x987,0x607,0x7e3,0x855)][id]={'id':id,'a':m[_0x42ed2f(0x50b,0x4de,0x6f9,0x5ad)],'b':'','state':'WAITING','check':function(_0x11ba20=''){function _0x90f38(_0x5b03f9,_0x16959e,_0x3125b1,_0x28c815){return _0x185cf8(_0x5b03f9-0x6b,_0x16959e- -0x7c,_0x3125b1-0x63,_0x5b03f9);}return[this['a'],this['b']][_0x90f38(0x179,0x2e2,0x2f9,0x4a1)](_0x11ba20);},'other':function(_0xfad7cf=''){const _0x8dd22e={};function _0x3ebffd(_0x4a75ef,_0x1b5582,_0x520997,_0x31fe69){return _0x42ed2f(_0x4a75ef-0xc8,_0x520997,_0x1b5582- -0x10f,_0x31fe69-0x1cd);}_0x8dd22e[_0x111a7a(-0x24b,-0x2a1,-0xc2,-0x243)]=function(_0x233b79,_0x15a492){return _0x233b79===_0x15a492;};function _0x111a7a(_0x441247,_0x4058e7,_0x5e46a2,_0x39d7c3){return _0x42ed2f(_0x441247-0x138,_0x4058e7,_0x5e46a2- -0x60e,_0x39d7c3-0x3a);}const _0x2f5727=_0x8dd22e;return _0x2f5727[_0x3ebffd(0x551,0x43d,0x339,0x227)](_0xfad7cf,this['a'])?this['b']:_0x2f5727[_0x3ebffd(0x367,0x43d,0x476,0x55f)](_0xfad7cf,this['b'])?this['a']:'';}};const _0x26f99e={};_0x26f99e[_0x42ed2f(0x7dc,0x76f,0x879,0x9bc)+'t']=_0x185cf8(0x3db,0x498,0x556,0x2d1)+'\x20✨',_0x26f99e[_0x42ed2f(0x510,0x3db,0x514,0x34a)]=_0x185cf8(0x307,0x2a2,0x155,0x4bb)+_0x185cf8(0x2d2,0x3bf,0x3f0,0x4a4)+_0x42ed2f(0x5c9,0x943,0x73a,0x787)+'c';const _0x1d6b4e={};_0x1d6b4e[_0x185cf8(0x63d,0x65f,0x6ad,0x49b)]=_0x26f99e;const _0x3cff86={};_0x3cff86['displayTex'+'t']=_0x42ed2f(0x65f,0x6f6,0x4ce,0x2f3),_0x3cff86['id']=_0x42ed2f(0x6b3,0x939,0x81f,0x6ee);const _0x198caf={};_0x198caf[_0x185cf8(0x2fc,0x3cb,0x52b,0x49c)+_0x42ed2f(0x6c3,0x540,0x52f,0x46f)]=_0x3cff86;var but=[_0x1d6b4e,_0x198caf];await alpha['sendMessag'+'e'](m['chat'],{'text':lang[_0x42ed2f(0x43d,0x3d0,0x58d,0x6d3)](),'footer':'©\x20'+ownername,'templateButtons':but});}break;case _0x185cf8(0x346,0x30e,0x1bb,0x4e3):case _0x185cf8(0x727,0x5e8,0x584,0x6bf):case _0x185cf8(0x3b9,0x229,0x18b,0x32d):{if(m[_0x42ed2f(0x4e0,0x665,0x6d4,0x57c)])return reply(lang[_0x185cf8(0x4d7,0x43e,0x24f,0x5cf)]());let romeo=Object[_0x185cf8(0x237,0x423,0x616,0x3a7)](db[_0x185cf8(0x2cf,0x230,0x10,0x3e0)]['anonymous'])[_0x185cf8(0x668,0x575,0x675,0x58c)](_0x16e130=>_0x16e130['check'](m['sender']));const _0x13536e={};_0x13536e[_0x42ed2f(0x836,0x834,0x879,0xaaa)+'t']=_0x42ed2f(0x8cc,0x503,0x6d5,0x738)+'\x20✨',_0x13536e['url']=_0x42ed2f(0x2f8,0x4e3,0x4df,0x596)+_0x42ed2f(0x4e6,0x75f,0x5fc,0x58e)+_0x185cf8(0x34e,0x4fd,0x2f8,0x552)+'c';const _0x8f2113={};_0x8f2113[_0x42ed2f(0x9a2,0x98f,0x89c,0x774)]=_0x13536e;var but=[_0x8f2113,{'quickReplyButton':{'displayText':lang[_0x185cf8(0x3ac,0x4fb,0x6b6,0x4a3)](),'id':_0x185cf8(0x6a5,0x5d6,0x801,0x4e3)}}];if(!romeo){await alpha[_0x42ed2f(0x56e,0x416,0x5a0,0x4f3)+'e'](m[_0x42ed2f(0x44c,0x5bc,0x53e,0x368)],{'text':lang[_0x185cf8(0x422,0x372,0x554,0x44b)](),'footer':'©\x20'+ownername,'templateButtons':but});throw![];}let other=romeo[_0x42ed2f(0x919,0x564,0x70f,0x647)](m[_0x185cf8(0x4b2,0x4bc,0x359,0x380)]);if(other)await alpha[_0x42ed2f(0x5bc,0x44b,0x5a0,0x627)+'e'](other,{'text':lang[_0x42ed2f(0x520,0x7d4,0x632,0x4de)+_0x42ed2f(0x500,0x624,0x715,0x6be)](),'footer':'©\x20'+ownername,'templateButtons':but});delete db[_0x185cf8(0x7b,0x230,0x3f6,0x240)][_0x185cf8(0x4be,0x5a6,0x735,0x6ed)][romeo['id']];let room=Object[_0x185cf8(0x501,0x423,0x21b,0x31a)](this[_0x42ed2f(0x8e3,0x739,0x7e3,0x834)])[_0x185cf8(0x345,0x575,0x675,0x565)](_0xb71085=>_0xb71085[_0x185cf8(0x44b,0x658,0x71a,0x480)]===_0x42ed2f(0x634,0x635,0x79a,0x615)&&!_0xb71085[_0x185cf8(-0x17,0x222,0x2f7,0x3e9)](m[_0x42ed2f(0x723,0x924,0x6f9,0x6bf)]));if(room){const sByLEj=_0x42ed2f(0x7bd,0x7df,0x6d9,0x645)[_0x42ed2f(0x70c,0x749,0x78a,0x59e)]('|');let MyzsKY=0x1c73+0x8e*-0x3+-0x1ac9;while(!![]){switch(sByLEj[MyzsKY++]){case'0':await alpha[_0x42ed2f(0x5a6,0x511,0x5a0,0x3ee)+'e'](room['b'],{'text':lang[_0x185cf8(0xe7,0x2c6,0x191,0x44b)](),'footer':'©\x20'+ownername,'templateButtons':but});continue;case'1':room[_0x42ed2f(0xa4c,0x6bf,0x895,0x749)]='CHATTING';continue;case'2':room['b']=m[_0x42ed2f(0x723,0x772,0x6f9,0x6fd)];continue;case'3':const _0x92a5ff={};_0x92a5ff[_0x185cf8(0x67a,0x63c,0x78b,0x6bc)+'t']=_0x42ed2f(0x8eb,0x8a4,0x6d5,0x868)+'\x20✨',_0x92a5ff[_0x185cf8(0x420,0x2d7,0x447,0x150)]='https://yo'+'utube.com/'+_0x42ed2f(0x959,0x5f2,0x73a,0x561)+'c';const _0x37adda={};_0x37adda['urlButton']=_0x92a5ff;const _0x453513={};_0x453513[_0x185cf8(0x434,0x63c,0x75c,0x55c)+'t']=_0x42ed2f(0x3e2,0x4a6,0x4ce,0x30c),_0x453513['id']=_0x185cf8(0x69f,0x5e2,0x677,0x77d);const _0x87fa77={};_0x87fa77[_0x42ed2f(0x6f0,0x78f,0x608,0x756)+_0x42ed2f(0x556,0x513,0x52f,0x3c3)]=_0x453513;const _0x4ef8f1={};_0x4ef8f1[_0x185cf8(0x7c2,0x63c,0x645,0x641)+'t']=_0x185cf8(0x4bc,0x4b9,0x380,0x39d),_0x4ef8f1['id']=_0x185cf8(0x224,0x30e,0x28b,0x23a);const _0x5a6df7={};_0x5a6df7[_0x42ed2f(0x7a0,0x4af,0x608,0x52d)+_0x185cf8(0x44b,0x2f2,0x397,0x429)]=_0x4ef8f1;var but=[_0x37adda,_0x87fa77,_0x5a6df7];continue;case'4':await aruka[_0x185cf8(0x423,0x363,0x14c,0x55a)+'e'](room['a'],{'text':lang[_0x185cf8(0x3c9,0x2c6,0x330,0x282)](),'footer':'©\x20'+ownername,'templateButtons':but});continue;}break;}}else{let id=+new Date();db[_0x185cf8(0x3ea,0x230,0x22d,0x239)][_0x42ed2f(0x666,0x98d,0x7e3,0x906)][id]={'id':id,'a':m[_0x42ed2f(0x866,0x6f3,0x6f9,0x92b)],'b':'','state':_0x42ed2f(0x8b8,0x8e9,0x79a,0x607),'check':function(_0x1fdd33=''){function _0x2ca522(_0xcaeef,_0x8cf8b,_0x343ea8,_0x4bfadf){return _0x42ed2f(_0xcaeef-0x2c,_0xcaeef,_0x4bfadf- -0x2d3,_0x4bfadf-0xa0);}return[this['a'],this['b']][_0x2ca522(0x208,0x12c,0x369,0x2c8)](_0x1fdd33);},'other':function(_0x58e657=''){function _0x5316ce(_0x22bf44,_0x255fbc,_0x48b52d,_0x13051f){return _0x185cf8(_0x22bf44-0x1ac,_0x13051f- -0x48e,_0x48b52d-0xf2,_0x48b52d);}const _0x5cbe54={};_0x5cbe54[_0x5c90b2(0x144,-0x59,0x18d,0x2b)]=function(_0xdd2447,_0x46a77e){return _0xdd2447===_0x46a77e;};function _0x5c90b2(_0x76107f,_0x2f6442,_0x128ff3,_0x2f3b41){return _0x185cf8(_0x76107f-0x1d6,_0x2f3b41- -0x302,_0x128ff3-0x115,_0x2f6442);}const _0x5004f0=_0x5cbe54;return _0x58e657===this['a']?this['b']:_0x5004f0[_0x5316ce(-0xa0,0x8d,-0x109,-0x161)](_0x58e657,this['b'])?this['a']:'';}};const _0x1f8e97={};_0x1f8e97['displayTex'+'t']=_0x185cf8(0x66f,0x498,0x372,0x55a)+'\x20✨',_0x1f8e97[_0x185cf8(0x49b,0x2d7,0x43c,0xbf)]=_0x185cf8(0x38e,0x2a2,0x42a,0x8b)+_0x42ed2f(0x453,0x6c7,0x5fc,0x686)+'c/zeeoneof'+'c';const _0x35e875={};_0x35e875[_0x185cf8(0x4a3,0x65f,0x81f,0x5a8)]=_0x1f8e97;const _0x523397={};_0x523397['displayTex'+'t']=_0x185cf8(0x1e6,0x291,0x1cd,0x271),_0x523397['id']='stop';const _0x355db7={};_0x355db7['quickReply'+_0x42ed2f(0x75c,0x494,0x52f,0x2fe)]=_0x523397;var but=[_0x35e875,_0x355db7];await alpha['sendMessag'+'e'](m[_0x42ed2f(0x71d,0x38c,0x53e,0x742)],{'text':lang['AnonSearch'](),'footer':'©\x20'+ownername,'templateButtons':but});}break;}}function _0x42ed2f(_0x4c4af5,_0x32ec08,_0x5e3938,_0x571402){return _0xa869(_0x5e3938-0x391,_0x32ec08);}function _0x185cf8(_0x59c80b,_0x5a9ed1,_0x1a5604,_0x1a2efa){return _0xa869(_0x5a9ed1-0x154,_0x1a2efa);}if(!m[_0x42ed2f(0x6a6,0x5dd,0x6d4,0x800)]&&!m[_0x42ed2f(0x524,0x811,0x659,0x7b9)][_0x185cf8(0x45a,0x25a,0x2b2,0x19b)]&&isCmd){let room=Object[_0x185cf8(0x5be,0x423,0x4ba,0x39a)](db['data']['anonymous'])[_0x185cf8(0x3b2,0x575,0x6b0,0x74a)](_0x2ee34f=>[_0x2ee34f['a'],_0x2ee34f['b']]['includes'](m['sender'])&&_0x2ee34f[_0x42ed2f(0x756,0xa18,0x895,0x9f7)]===_0x42ed2f(0x53a,0x76c,0x67d,0x75b));if(room){if(/^.*(next|leave|start)/[_0x185cf8(0x64f,0x538,0x540,0x52c)](m[_0x185cf8(0x64c,0x5ec,0x586,0x3b5)]))return;if([_0x42ed2f(0x8e4,0x65f,0x740,0x882),_0x185cf8(0x6d3,0x4ff,0x5be,0x4ec),_0x42ed2f(0x60f,0x687,0x5ea,0x783),_0x42ed2f(0x5c3,0x3a5,0x4c6,0x2d8),_0x42ed2f(0x7a2,0x900,0x702,0x5ec)+'er',_0x42ed2f(0x6b3,0x725,0x851,0x8b7),'Lanjut',_0x42ed2f(0x3c3,0x654,0x4ce,0x46d)][_0x185cf8(0x39d,0x35e,0x54d,0x41f)](m['text']))return;let other=[room['a'],room['b']][_0x185cf8(0x3a2,0x575,0x5f3,0x5f1)](_0xe30fe8=>_0xe30fe8!==m[_0x185cf8(0x69d,0x4bc,0x406,0x359)]);m[_0x185cf8(0x1b0,0x316,0x204,0x2c0)+'rd'](other,!![],m[_0x42ed2f(0x725,0x53d,0x5d0,0x6ea)]&&m[_0x42ed2f(0x515,0x590,0x5d0,0x72c)][_0x42ed2f(0x430,0x644,0x497,0x27b)]?{'contextInfo':{...m['msg'][_0x185cf8(0x77a,0x64f,0x7e0,0x43e)+'o'],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!(0x11d1*-0x1+0x23cb+-0x11fa);}
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