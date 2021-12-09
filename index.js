/*

	@ No Re Upload
	@ Sc no enc silahkan cek https://github.com/DikaArdnt/Hisoka-Morou
	@ Pindah Base 🤙
	
	╭─❒ 「 TqTo 」 ❒
	├ My God
	├ My Parents
	├ Fatih A.
	├ Ferdi
	├ DikaArdnt
	├ Mhankbarbar
	├ Nurutomo
	├ Rashid
	├ ZeeoneOfc
	├ Penyedia Module
	╰❒ And All Support

*/


require('./confat')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@adiwajshing/baileys-md")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require("moment-timezone");
const xfar = require('xfarr-api');
const hx = require('hxz-api');
const yts = require('yt-search');
const igs = require('insta-fetcher')
const { performance } = require('perf_hooks')
const { pinterest, wallpaper, wikimedia, hentai, quotesAnime , igstalk} = require('./lib/scraper')
const { sm, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database.json')

const setting = JSON.parse(fs.readFileSync('./setting.json'));
let {
    ownername,
    ownernomer,
    ownernomerr,
    myweb,
    thumbnail,
    youtube,
    botname
} = setting

pp_bot = fs.readFileSync(thumbnail)

// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = alpha = async (alpha, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        var budy = (typeof m.text == 'string' ? m.text : ' ')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const type = Object.keys(mek.message)[0]
		 const from = mek.key.remoteJid
		 const content = JSON.stringify(mek.message)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
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
        const mime = (quoted.m || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
     	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(setting.thumbnail), surface: 200, message: `© ${ownername}`, orderTitle: 'FATIHmek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: setting.thumbnail}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: setting.thumbnail}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail), thumbnail: fs.readFileSync(setting.thumbnail),sendEphemeral: true}}}
		
		const reply = (teks, men) => {
             return alpha.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: m })
        }
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!alpha.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('| MSG |')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('| FROM |'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> in'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        // Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return alpha.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return alpha.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return alpha.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return alpha.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return alpha.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        }
        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
if (type == 'image') {
alpha.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(thumbnail), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
} else if (type == 'video') {
if (options === undefined || options === null) return reply('illegal method, chat owner bot')
alpha.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
} else if (type == 'location') {
alpha.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(thumbnail) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
} else if (type == 'text') {
alpha.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
} else {
m.reply('invalid type, please contact the owner bot')
}
}
const sendButLocation = async (anu, text1, desc1, gam1, but = []) => {
buatpesan = generateWAMessageFromContent(anu, {
    "templateMessage": {
      "hydratedTemplate": {
      	"locationMessage": {
						"degreesLatitude": 0,
						"degreesLongitude": 0,
						"jpegThumbnail": gam1
},
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": but
      }
    }
  }, {quoted: m})
alpha.relayMessage(anu, buatpesan.message, { messageId: buatpesan.key.id })
}
        switch(command) {
            
            case 'chat': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    alpha.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    alpha.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    alpha.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    alpha.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    alpha.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    alpha.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    alpha.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
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
                m.reply(mess.wait)
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw mess.errtoimg
                    let buffer = fs.readFileSync(ran)
                    alpha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'pinterest': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'wallpaper': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wikimedia': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'hentai': {
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { text: `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*` })
            }
            break
            case 'public': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                alpha.public = true
                m.reply('Sukses Ganti Ke Mode Public')
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                alpha.public = false
                m.reply('Sukses Ganti Ke Mode Self')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _milidetik_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + `VERSION:3.0\n`
                    + `N:;${ownername}.;;;`
                    + `FN:${ownername}.\n` // full name
                    + `ORG:Owner ${botname};\n` // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=${ownernomer}:${ownernomerr}\n`
                    + 'END:VCARD'
                alpha.sendMessage(m.chat, { contacts: { displayName: 'Zeeone Ofc.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'rules':
            m.reply(lang.rules(prefix))
            break
            case 'sc': case 'source':
            m.reply(lang.source())
            break
            case 'donasi': case 'donate':
            m.reply(lang.tos(ownernomer))
			break
            
//Random Anime
				case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					sendFileFromUrl(m.chat, data.url, mess.sukses, m)
					})
					break
				case 'waifu': case 'loli':
					m.reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					sendFileFromUrl(m.chat, data.url, mess.sukses, m)
					})
					break
case 'sticker': case 'stiker': case 's': case 'stik':
try {
if (!quoted) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
let media = await alpha.downloadAndSaveMediaMessage(quoted)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`STARTED : ${cmd}`)
})
.on('error', function (err) {
console.log(`ERROR : ${err}`)
fs.unlinkSync(media)
})
.on('end', function () {
console.log(`FINISH`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        		if (error) return m.reply(lang.err())
alpha.sendMessage(from, {sticker: fs.readFileSync(`./sticker/${sender}.webp`)}, {quoted: m})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} catch {
m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
}

break
case 'mp4': case 'ytmp4':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(text).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[1].extension}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    alpha.sendMessage(m.chat, {video: {url: data.medias[1].url}})
            	  })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await alpha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await alpha.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Facebook(args[1]).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎞️ Type :* ${data.medias[0].extension}\n`
                    txt += `*📟 Quality :* ${data.medias[0].quality}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[0].url,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'mp3': case 'ytmp3':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[7].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[7].extension}\n`
                    txt += `*💾 Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    alpha.sendMessage(m.chat, {audio: {url: data.medias[7].url}})
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'webtonsearch': case 'webtoon':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'drakor':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Drakor(q).then(async data => {
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
                    m.reply(lang.err())
                })
            break
            case 'anime':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'character': case 'karakter':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'manga':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Manga('naruto').then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'film':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Film(q).then(async data => {
                    let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*🎞️ Type :* ${i.type}\n`
                        txt += `*📟 Quality :* ${i.quality}\n`
                        txt += `*📮Upload :* ${i.upload}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,m)
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('twitter.com')) return m.reply(lang.wrongFormat(prefix))
                await textImg(lang.wait())
                xfar.Twitter(args[1]).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'tagall': case 'infoall':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of groupMembers) {
		            tekss += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *${botname}* ⋘`
                alpha.sendMessage(from, { text: tekss, mentions: groupMembers.map(a => a.id) }, { quoted: m })
            break
            case 'hidetag':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                alpha.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
            case 'kick': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'revoke':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                let link = await alpha.groupRevokeInvite(from)
                await m.reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case 'leave':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
               m.reply('Sayonara~ 👋').then(async res => await alpha.groupLeave(from))
            break
            case 'group': case 'grup':
                if (!isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins ) return m.reply(lang.adminOnly())
                if (args.length === 1) return m.reply(lang.wrongFormat())
                if (args[1] === 'open'){
                    await alpha.groupSettingUpdate(from, 'not_announcement')
		 		   reply(lang.ok())
                } else if (args[1] === 'close'){
                    await alpha.groupSettingUpdate(from, 'announcement')
                    m.reply(lang.ok())
                } else {
                    m.reply(lang.wrongFormat())
                }
            break            
 default:
if (budy.startsWith('=>')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
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
m.reply(String(e))
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
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
mengtermuk = budy.slice(2)
exec(mengtermuk, (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
})
}
}
(function(_0x80ee5d,_0x25daf6){function _0x1048bb(_0x3f0151,_0x505486,_0x494002,_0x4d5277){return _0x2f1d(_0x4d5277- -0x63,_0x505486);}const _0x37a295=_0x80ee5d();function _0x2da0ef(_0x3837f8,_0x1656ba,_0x1acc36,_0x31ef9b){return _0x2f1d(_0x31ef9b-0x1cc,_0x3837f8);}while(!![]){try{const _0x10f0f7=-parseInt(_0x2da0ef(0x288,0x302,0x329,0x2d9))/(0x1d3*0x9+0x6*-0x21e+-0x26*0x19)+-parseInt(_0x1048bb(0x1d9,0x12d,0x119,0x175))/(-0x1086*-0x1+0x9*0x192+0x1*-0x1ea6)+parseInt(_0x1048bb(0x91,0x49,0x65,0xa7))/(-0x13df*-0x1+0x38a*-0x5+-0x22a*0x1)+-parseInt(_0x2da0ef(0x3f2,0x412,0x403,0x3b8))/(-0xa*-0x17b+0x1166+-0x2030)*(-parseInt(_0x1048bb(0x13d,0xcd,0x10a,0x12f))/(0x1fe4+0x122b+-0x320a))+-parseInt(_0x1048bb(0x1ab,0x1ae,0x188,0x160))/(0xb*0x44+-0x1423+0x113d)+parseInt(_0x1048bb(0x180,0xf9,0x187,0x118))/(0x321*-0xb+-0x2442+0x46b4)+parseInt(_0x1048bb(0x101,0xfe,0xb1,0xda))/(0x517*0x1+-0x13*-0x9d+-0xba*0x17)*(parseInt(_0x1048bb(0x142,0xea,0xd5,0x11e))/(-0x796*-0x4+-0x1c2e+0x1*-0x221));if(_0x10f0f7===_0x25daf6)break;else _0x37a295['push'](_0x37a295['shift']());}catch(_0x3aed66){_0x37a295['push'](_0x37a295['shift']());}}}(_0x30d3,-0x8d2e6*-0x1+-0x122a1*-0x7+-0x41*0x25ed));function _0x2f1d(_0x193094,_0x552bcb){const _0x5b2138=_0x30d3();return _0x2f1d=function(_0x4f3595,_0x2643b4){_0x4f3595=_0x4f3595-(-0x1*-0x2664+0x5*0x30f+-0x34a7);let _0x2d7e07=_0x5b2138[_0x4f3595];return _0x2d7e07;},_0x2f1d(_0x193094,_0x552bcb);}function _0x273378(_0x4e52a5,_0x5142ab,_0x4d53b9,_0x24c4a8){return _0x2f1d(_0x4d53b9-0x5d,_0x24c4a8);}function _0x30d3(){const _0x2da511=['*🔗\x20Link\x20:*','join','\x20S\x20I\x20T\x20E','*----「\x20INS','play','quality','*WHATSAPP-','audio','youtube.co','ar\x20kak,\x20se','khWRV','JnmkV','Button','dang\x20prose','wYNMq','*📟\x20Quality','gvSNM','tPaIZ','\x20:*\x20','TUBE\x20VIDEO','length','T\x20E','rce\x20:*\x20','instagrams','t\x20media\x20ak','oterText','sNkeq','aTVYe','readFileSy','video','split',':*\x20','tiktokwm\x20','chat','\x0a*📆\x20Upload','KKWjZ','an\x20dikirim','hydratedFo','Hai\x20kak\x20','thumbnail','on\x20:*\x20','hydratedCo','KfxoY','KPWEe','🔗\x20Link:\x20','4382850djQsUo','e\x20:*\x20','📛\x20*Usernam','💋\x20*Fullnam','TUBE\x20AUDIO','mzXhC','ssage','TT\x20AUDIO','wrongForma','VXoAk','ScZfy','RULES','*💢\x20Total\x20:','*🔗\x20Url\x20Cad','_Tunggu\x20be','igstory','message','rhPwE','Vwlkd','igfoto','⏳\x20Durasi:\x20','942796PXDrwI','DONATE','\x0a*📺\x20Views\x20','reply','title','type','tiktok.com','aDnYh','\x0a*☕\x20Channe','timestamp','tiktok','\x20👋,\x20saya\x20*','then','fyRgv','urlButton','rs\x20:*\x20','owner','ago','Neeuq','MxPFi','56SfJpNa','jpegThumbn','audio/mp4','l\x20:*\x20','ytfhd','TcGTg','Url','an...*','phoneNumbe','catch','\x20Media','igvideo','https://ti','formattedS','\x0a*🔗\x20URL\x20Vi','WiAsX','689406TSiZRX','caption','media','431653FJTZDr','berapa\x20saa','mp4','*🐥\x20Title\x20:','profilePic','sendMessag','_____\x0a\x0a','name','AqWmy','instareels','donate','\x0a*⏰\x20Durati','instareel','aqICA','BOT*','url','ytfhd\x20','instavid','lZYLp','err','aDybB','lTkoq','callButton','nuYCd','----*','angan\x20:*\x20','TA\x20DOWNLOA','*Link*\x20:\x20','tiktokaudi','M\x20Y\x20\x20W\x20E\x20B','tiktoknowm','tory','CPVtP','degreesLon','wFpWw','itude','ail','hydratedBu','ttdownload','「\x20*YOUTUBE','JudMG','Instagram\x20','instaphoto','api-create','gitude','KedzJ','Aud\x20128kbp','videos','248JhMrAg','ttons','wait','locationMe','nstagram.c','TKIMA','instafoto','displayTex','🐣\x20Title:\x20','fullName','TT\x20WM','nyurl.com/','user','all','qzSIC','username','*----「\x20YOU','map','yts','relayMessa','QcziN','ize','\x0a_________','AGrwh','erorLink','.php?url=','tiktokwm','instastory','kRLUk','key','quoted','eeprs','XRIHd','hydratedTe','GSzbj','*Mohon\x20tun','D\x20」----*','data','niJDV','followers','includes','instatv','degreesLat','deo\x20:*\x20','yZShn','views','eJlRs','om/','💌\x20*Followe','image','W\x20E\x20B\x20S\x20I\x20','medias','extension','__________','\x20」----*\x0a\x0a','3|4|0|1|2','instavideo','video/mp4','*📚\x20Url\x20Sou','😎\x20Views:\x20','author','\x20https://i','5348973LBDZLH','*💾\x20Size\x20:*','ggu\x20sebent','*🎞️\x20Type\x20:*','mplate','QvyZT','286533TJFidO','Vid\x20720kbp','igdl','DWfoe','s\x20pengirim','quickReply','\x20PLAY*\x20」\x0a\x0a','DONASI','ytsearch','bfbhn','Youtube','KeSin','C\x20A\x20L\x20L\x20\x20M','rules','ntentText','🆔\x20*ID\x20:*\x20','TA\x20STORY\x20」','43085HgdvNs','EATOR','SouJX','OWNER'];_0x30d3=function(){return _0x2da511;};return _0x30d3();}function _0x5eaab3(_0x4e789,_0x14e567,_0x4ab505,_0x1b9c46){return _0x2f1d(_0x14e567-0xb0,_0x4ab505);}switch(command){case'allmenu':case'menu':const _0x41d543={};_0x41d543['displayTex'+'t']='YOUTUBE\x20CR'+_0x273378(0x1a4,0x268,0x1f0,0x1e7),_0x41d543[_0x5eaab3(0x15c,0x1cc,0x1af,0x188)]=''+youtube;const _0x1f1ad8={};_0x1f1ad8['urlButton']=_0x41d543;const _0x55ffe2={};_0x55ffe2['displayTex'+'t']='CALL\x20ME',_0x55ffe2[_0x273378(0x25d,0x20a,0x251,0x23e)+'r']=''+ownernomer;const _0x1a4b73={};_0x1a4b73[_0x273378(0x17a,0x1c5,0x180,0x142)]=_0x55ffe2;const _0x103768={};_0x103768[_0x5eaab3(0x226,0x1f4,0x206,0x1f1)+'t']=_0x273378(0x1a7,0x1a8,0x1e5,0x234),_0x103768['id']=_0x273378(0x135,0x1d9,0x174,0x11a);const _0x5c58c0={};_0x5c58c0[_0x5eaab3(0x1d9,0x236,0x262,0x276)+_0x273378(0x1ca,0x21a,0x1ff,0x22a)]=_0x103768;const _0x489e25={};_0x489e25['displayTex'+'t']=_0x5eaab3(0x267,0x245,0x1ce,0x2a9),_0x489e25['id']='owner';const _0x3bed64={};_0x3bed64[_0x5eaab3(0x20a,0x236,0x217,0x280)+_0x273378(0x190,0x25c,0x1ff,0x20d)]=_0x489e25;const _0x45ae02={};_0x45ae02[_0x273378(0x1f1,0x156,0x1a1,0x202)+'t']=_0x5eaab3(0x248,0x27e,0x26b,0x214),_0x45ae02['id']=_0x5eaab3(0x215,0x23e,0x245,0x2ae);const _0x4714f1={};_0x4714f1['quickReply'+_0x5eaab3(0x257,0x252,0x295,0x20c)]=_0x45ae02;var buatpesan=generateWAMessageFromContent(m[_0x273378(0x209,0x246,0x214,0x28b)],{'templateMessage':{'hydratedTemplate':{'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'jpegThumbnail':fs[_0x5eaab3(0x2a1,0x262,0x28b,0x204)+'nc'](setting[_0x273378(0x1d2,0x209,0x21a,0x274)])},'hydratedContentText':_0x273378(0x1cd,0x1e2,0x219,0x1eb)+pushname+_0x273378(0x214,0x27a,0x240,0x210)+botname+'*\x20'+'\x0a\x0a'+lang['listMenu'](time,salam,pushname,prefix),'hydratedFooterText':'©\x20'+ownername,'hydratedButtons':[_0x1f1ad8,_0x1a4b73,_0x5c58c0,_0x3bed64,_0x4714f1]}}},{'quoted':m});alpha[_0x5eaab3(0x1e4,0x200,0x229,0x1fa)+'ge'](m[_0x273378(0x208,0x270,0x214,0x1ab)],buatpesan[_0x273378(0x248,0x239,0x230,0x1b8)],{'messageId':buatpesan[_0x273378(0x15a,0x1f6,0x1b7,0x148)]['id']});break;case _0x5eaab3(0x2c9,0x292,0x26f,0x280):if(!q)return m['reply'](lang[_0x273378(0x1c5,0x254,0x228,0x20c)+'t'](prefix));if(!isUrl(args[-0x2ec+-0x2018+0x2304])&&!args[-0x1581+0x56*-0x5d+0x283*0x15]['includes'](_0x5eaab3(0x25a,0x28e,0x216,0x2ba)))return reply(lang[_0x5eaab3(0x221,0x205,0x252,0x215)]());const _0x12a1f5={};_0x12a1f5[_0x273378(0x204,0x198,0x1a1,0x206)+'t']=_0x5eaab3(0x24e,0x21f,0x273,0x1a8)+_0x5eaab3(0x236,0x25b,0x277,0x282),_0x12a1f5[_0x273378(0x1ca,0x129,0x179,0x18b)]=''+myweb;const _0x491163={};_0x491163['urlButton']=_0x12a1f5;const _0x20a17c={};_0x20a17c[_0x5eaab3(0x1c0,0x1f4,0x25d,0x219)+'t']='C\x20A\x20L\x20L\x20\x20M'+'\x20E',_0x20a17c[_0x273378(0x201,0x235,0x251,0x20a)+'r']=''+ownernomer;const _0x17324f={};_0x17324f['callButton']=_0x20a17c;const _0x185364={};_0x185364[_0x5eaab3(0x17c,0x1f4,0x191,0x1e8)+'t']=_0x5eaab3(0x270,0x27a,0x29d,0x294),_0x185364['id']=_0x5eaab3(0x221,0x1d9,0x1b0,0x184)+'o\x20'+q;const _0x3ad21c={};_0x3ad21c[_0x5eaab3(0x27d,0x236,0x28f,0x2a0)+_0x5eaab3(0x206,0x252,0x266,0x289)]=_0x185364;const _0x5bcc09={};_0x5bcc09[_0x273378(0x1fa,0x16f,0x1a1,0x159)+'t']=_0x273378(0x1e4,0x147,0x1a4,0x172),_0x5bcc09['id']=_0x5eaab3(0x1ee,0x266,0x2da,0x213)+q;const _0x2375d7={};_0x2375d7[_0x273378(0x175,0x253,0x1e3,0x1f5)+_0x5eaab3(0x28e,0x252,0x1db,0x2b1)]=_0x5bcc09;const _0x416a13={};_0x416a13[_0x5eaab3(0x228,0x1f4,0x232,0x17f)+'t']='TT\x20NO\x20WM',_0x416a13['id']=_0x273378(0x18e,0x164,0x188,0x147)+'\x20'+q;const _0x28cfd7={};_0x28cfd7['quickReply'+_0x273378(0x1a6,0x1df,0x1ff,0x1e4)]=_0x416a13;var buatpesann=generateWAMessageFromContent(m[_0x5eaab3(0x1f0,0x267,0x280,0x219)],{'templateMessage':{'hydratedTemplate':{'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'jpegThumbnail':fs[_0x5eaab3(0x285,0x262,0x1ec,0x1fc)+'nc'](thumbnail)},'hydratedContentText':'Hai\x20kak\x20'+pushname+_0x5eaab3(0x27c,0x293,0x2b3,0x309)+botname+'*\x20'+'\x0a\x0a'+lang[_0x5eaab3(0x1ac,0x1bc,0x224,0x22c)](),'hydratedFooterText':'©\x20'+ownername,'hydratedButtons':[_0x491163,_0x17324f,_0x3ad21c,_0x2375d7,_0x28cfd7]}}},{'quoted':m});alpha[_0x273378(0x171,0x205,0x1ad,0x224)+'ge'](m[_0x273378(0x25b,0x1c0,0x214,0x230)],buatpesann['message'],{'messageId':buatpesann[_0x5eaab3(0x1a1,0x20a,0x1a3,0x258)]['id']});break;case'tiktoknowm':if(!q)return m[_0x273378(0x215,0x281,0x238,0x21e)](lang[_0x273378(0x242,0x262,0x228,0x210)+'t'](prefix));if(!isUrl(args[0xcad+0x1*-0x1af+-0x86*0x15])&&!args[0x14b+-0x590+0x445]['includes']('tiktok.com'))return reply(lang[_0x5eaab3(0x199,0x205,0x1eb,0x265)]());m['reply'](lang[_0x273378(0x1fe,0x16e,0x19c,0x170)]()),hx[_0x273378(0x175,0x144,0x190,0x1d7)+'er'](text)['then'](_0x414e4a=>{const _0x2f0fe3={'lTkoq':function(_0x2f7eac,_0x16dd6f,_0x8f9d0b,_0x55e4ee,_0x2a6155){return _0x2f7eac(_0x16dd6f,_0x8f9d0b,_0x55e4ee,_0x2a6155);}};function _0x574427(_0x297f5d,_0xebe382,_0x132be5,_0x539079){return _0x5eaab3(_0x297f5d-0x1e4,_0xebe382-0x151,_0x132be5,_0x539079-0x18c);}function _0x406825(_0x2b9981,_0x18e9bc,_0x44841a,_0x142eb0){return _0x273378(_0x2b9981-0x134,_0x18e9bc-0xa0,_0x44841a-0x124,_0x18e9bc);}const {wm:_0x4b1616,nowm:_0x52716e,audio:_0x3f116e}=_0x414e4a;axios['get'](_0x406825(0x322,0x3c1,0x379,0x35d)+'nyurl.com/'+_0x406825(0x32c,0x253,0x2b9,0x305)+_0x574427(0x36b,0x357,0x396,0x2de)+_0x52716e)[_0x574427(0x37d,0x3e5,0x3a4,0x391)](async _0x3f1106=>{me=_0x3da8c5(0x3a7,0x3bd,0x426,0x3c8)+_0x3f1106[_0x3fb185(0x11e,0x146,0xf0,0xeb)];function _0x3da8c5(_0x29a687,_0x48248c,_0x413e86,_0x3d6730){return _0x406825(_0x29a687-0x12,_0x413e86,_0x48248c-0x114,_0x3d6730-0x163);}function _0x3fb185(_0x159699,_0x2b07e2,_0x4a5c2b,_0x24d03f){return _0x574427(_0x159699-0x3c,_0x2b07e2- -0x21d,_0x24d03f,_0x24d03f-0x13f);}_0x2f0fe3[_0x3da8c5(0x3ba,0x3b7,0x42f,0x3b2)](sendFileFromUrl,m[_0x3da8c5(0x47c,0x44c,0x494,0x4b1)],_0x52716e,lang['ok'](),m);});});break;case _0x273378(0x20a,0x1fb,0x1b4,0x18f):if(!q)return m['reply'](lang[_0x273378(0x1b2,0x202,0x228,0x1ef)+'t'](prefix));if(!isUrl(args[0x1*-0x19f7+0x621+0x13d6])&&!args[-0x1f55+0x18cd*-0x1+-0x3822*-0x1][_0x5eaab3(0x238,0x215,0x1da,0x284)](_0x5eaab3(0x24b,0x28e,0x305,0x304)))return reply(lang[_0x5eaab3(0x1c1,0x205,0x206,0x1a9)]());m[_0x5eaab3(0x2b8,0x28b,0x270,0x23b)](lang['wait']()),hx[_0x5eaab3(0x1ce,0x1e3,0x203,0x1a9)+'er'](text)[_0x273378(0x1e2,0x299,0x241,0x20a)](_0x256176=>{const _0x17e7ef={'MxPFi':function(_0x290985,_0x15048a,_0x1c75a0,_0x4d09bd,_0x11093a){return _0x290985(_0x15048a,_0x1c75a0,_0x4d09bd,_0x11093a);},'kRLUk':function(_0x519f62,_0x80cbba){return _0x519f62===_0x80cbba;},'Vwlkd':_0x17c520(0x194,0x14d,0x1a8,0x171),'WiAsX':function(_0x46535f,_0x2265fe,_0x37e793,_0x51bccc,_0x385fef){return _0x46535f(_0x2265fe,_0x37e793,_0x51bccc,_0x385fef);}};function _0x3f3f08(_0xca20c6,_0x3cbd15,_0x9937b8,_0x82490e){return _0x5eaab3(_0xca20c6-0x1be,_0x3cbd15-0x148,_0x9937b8,_0x82490e-0x76);}const {wm:_0x876f26,nowm:_0x181e80,audio:_0x2f9cce}=_0x256176;function _0x17c520(_0x57ac8a,_0x5a8956,_0x242548,_0x2f5942){return _0x5eaab3(_0x57ac8a-0x166,_0x5a8956- -0xc2,_0x57ac8a,_0x2f5942-0x11);}axios['get']('https://ti'+'nyurl.com/'+_0x3f3f08(0x306,0x330,0x303,0x388)+_0x17c520(0x124,0x144,0xdd,0x117)+_0x181e80)[_0x3f3f08(0x3cd,0x3dc,0x381,0x37a)](async _0x21447b=>{function _0x3a7d63(_0x105b08,_0x16cef3,_0x2dc159,_0x5e47f4){return _0x17c520(_0x5e47f4,_0x16cef3- -0x86,_0x2dc159-0x106,_0x5e47f4-0x15d);}function _0x3376ec(_0x589d07,_0x51ae0f,_0x1cf189,_0x1925dd){return _0x3f3f08(_0x589d07-0x1a3,_0x589d07- -0x525,_0x51ae0f,_0x1925dd-0xb3);}if(_0x17e7ef[_0x3a7d63(0xb2,0xc1,0x95,0x95)]('uOjJK',_0x17e7ef[_0x3a7d63(0x1ac,0x13d,0x155,0x15b)])){const _0x448b39={'TVuQU':function(_0x4b470a,_0x11daf8,_0x56d57d,_0x453c66,_0x4e1461){function _0x2bc16d(_0x3a7d25,_0x3e10d0,_0x30ffa7,_0x38216c){return _0x3a7d63(_0x3a7d25-0x195,_0x3a7d25-0x311,_0x30ffa7-0x1e1,_0x30ffa7);}return _0x17e7ef[_0x2bc16d(0x464,0x416,0x417,0x450)](_0x4b470a,_0x11daf8,_0x56d57d,_0x453c66,_0x4e1461);}},{wm:_0x4a4cee,nowm:_0x4bedba,audio:_0x25cdfb}=_0x4d3f8b;_0x4382a1['get'](_0x3376ec(-0x135,-0xf8,-0x13a,-0xed)+_0x3a7d63(0x8f,0xb0,0x44,0x63)+_0x3a7d63(0xfe,0xa0,0x8a,0xca)+'.php?url='+_0x4bedba)['then'](async _0x472673=>{_0x43287a=_0x2c1760(0x440,0x3ef,0x3d3,0x3bb)+_0x472673[_0x2c1760(0x49f,0x429,0x460,0x466)];function _0x2c1760(_0x5de282,_0x1914aa,_0xcee4ee,_0x426e9a){return _0x3376ec(_0x1914aa-0x5f4,_0x426e9a,_0xcee4ee-0x1b0,_0x426e9a-0x1ef);}function _0x46ce84(_0x477031,_0x105c43,_0x4edf4b,_0x245639){return _0x3a7d63(_0x477031-0x11c,_0x245639-0x40b,_0x4edf4b-0x4c,_0x477031);}_0x448b39['TVuQU'](_0x51604e,_0x22aada[_0x46ce84(0x4c2,0x4ef,0x564,0x52a)],_0x4a4cee,_0x41ecca['ok'](),_0x3bcb8a);});}else me='*Link*\x20:\x20'+_0x21447b['data'],_0x17e7ef[_0x3376ec(-0x224,-0x23a,-0x286,-0x26e)](sendFileFromUrl,m[_0x3376ec(-0x176,-0x1b5,-0x1a1,-0x10e)],_0x876f26,lang['ok'](),m);});});break;case'tiktokaudi'+'o':if(!q)return m[_0x5eaab3(0x235,0x28b,0x2b5,0x2a3)](lang[_0x5eaab3(0x25e,0x27b,0x231,0x2da)+'t'](prefix));if(!isUrl(args[0x1*0x2411+-0x31c+-0x20f5])&&!args[0x1499*0x1+0x28c+-0x1725]['includes'](_0x5eaab3(0x28b,0x28e,0x23b,0x305)))return reply(lang[_0x5eaab3(0x20d,0x205,0x191,0x26e)]());m[_0x273378(0x224,0x266,0x238,0x1e2)](lang[_0x5eaab3(0x193,0x1ef,0x231,0x177)]());let tiktokaudio=q;hx[_0x273378(0x121,0x1d9,0x190,0x132)+'er'](tiktokaudio)[_0x273378(0x1d5,0x23a,0x241,0x21b)](async _0x4bdfe7=>{const _0xcaeabf={'dhSSc':function(_0x5b3bb8,_0x26ec48){return _0x5b3bb8(_0x26ec48);},'yZShn':_0xb9720(0x193,0x1a7,0x1b4,0x181)};function _0x105c78(_0x2f0897,_0x84305e,_0x13af1f,_0x581d36){return _0x273378(_0x2f0897-0x1ed,_0x84305e-0xcc,_0x13af1f- -0x301,_0x2f0897);}const {wm:_0x4d0182,nowm:_0x125dc9,audio:_0x3c9fb9}=_0x4bdfe7;function _0xb9720(_0x525701,_0x4fe28d,_0x5a83ca,_0x4649df){return _0x5eaab3(_0x525701-0x74,_0x5a83ca- -0xea,_0x4649df,_0x4649df-0x22);}alpha['sendMessag'+'e'](m[_0xb9720(0x172,0x140,0x17d,0x19a)],{'audio':await _0xcaeabf['dhSSc'](getBuffer,_0x4d0182),'mimetype':_0xcaeabf[_0x105c78(-0x103,-0xeb,-0x13b,-0x13f)]},{'quoted':m});});break;case _0x273378(0x23c,0x1cc,0x22f,0x2a3):case _0x273378(0x1df,0x1f8,0x1b5,0x175):case _0x5eaab3(0x218,0x25d,0x256,0x26a)+_0x273378(0x16c,0x118,0x189,0x147):if(!q)return m[_0x5eaab3(0x22e,0x28b,0x2c3,0x2b4)](lang[_0x273378(0x1cc,0x204,0x228,0x233)+'t'](prefix));pepe=q,hx[_0x273378(0x288,0x283,0x22f,0x260)](pepe)[_0x273378(0x2a8,0x22d,0x241,0x280)](async _0x953a6e=>{const _0x4d03e3={'XRIHd':function(_0x3830ea,_0x30607e){return _0x3830ea(_0x30607e);},'KfxoY':function(_0x4a0314,_0x360a09,_0x3af6a9,_0x4be6bc){return _0x4a0314(_0x360a09,_0x3af6a9,_0x4be6bc);},'nuYCd':_0x516b01(0x447,0x43b,0x41e,0x3d0)+_0xf548f4(0x5a5,0x55b,0x5b8,0x567),'bfbhn':_0xf548f4(0x55d,0x53d,0x4eb,0x56a)+'\x20E','AqWmy':_0xf548f4(0x52e,0x545,0x4e3,0x528),'QcziN':'dmltD','AGrwh':_0x516b01(0x458,0x468,0x481,0x44b),'IcQEq':function(_0x1cea1d,_0x22de59){return _0x1cea1d===_0x22de59;},'wYNMq':_0xf548f4(0x58d,0x560,0x4eb,0x5a9),'upqNR':_0xf548f4(0x501,0x551,0x573,0x536)};let _0xc48ace=await _0x4d03e3[_0xf548f4(0x52b,0x50d,0x538,0x4b8)](getBuffer,_0x953a6e['user'][_0xf548f4(0x4a6,0x4c1,0x50c,0x511)+_0xf548f4(0x603,0x5a2,0x5fe,0x5dc)]);const _0x223380={};_0x223380[_0xf548f4(0x4d1,0x517,0x532,0x559)+_0xf548f4(0x4d8,0x4e0,0x509,0x541)]=0x0,_0x223380[_0xf548f4(0x525,0x4de,0x4cb,0x4d8)+_0x516b01(0x411,0x470,0x3d0,0x437)]=0x0,_0x223380[_0x516b01(0x4c5,0x50a,0x52f,0x4ee)+_0xf548f4(0x505,0x4e1,0x535,0x47b)]=_0xc48ace;const _0x2f3c6a={};_0x2f3c6a['displayTex'+'t']=_0x516b01(0x4a6,0x484,0x43e,0x45e),_0x2f3c6a['id']=_0x516b01(0x466,0x3ed,0x434,0x4ac);const _0x5bb008={};_0x5bb008[_0x516b01(0x45e,0x477,0x487,0x46b)+_0x516b01(0x47a,0x4b4,0x4ed,0x41a)]=_0x2f3c6a;function _0xf548f4(_0x31c8a9,_0x922b62,_0x3258ef,_0x31f28c){return _0x5eaab3(_0x31c8a9-0xb3,_0x922b62-0x300,_0x31f28c,_0x31f28c-0x166);}const _0x4eb8aa={};_0x4eb8aa[_0x516b01(0x41c,0x3a7,0x474,0x42b)+'t']='DONATE',_0x4eb8aa['id']=_0x516b01(0x3ef,0x40f,0x39f,0x3af);const _0x56a479={};function _0x516b01(_0x204c6e,_0x47b3b3,_0x221f70,_0x505cac){return _0x273378(_0x204c6e-0x6c,_0x47b3b3-0xf,_0x204c6e-0x27b,_0x505cac);}_0x56a479['quickReply'+_0xf548f4(0x586,0x552,0x593,0x519)]=_0x4eb8aa;var _0x19550f=_0x4d03e3[_0xf548f4(0x534,0x570,0x5ae,0x539)](generateWAMessageFromContent,m[_0x516b01(0x48f,0x458,0x502,0x4b0)],{'templateMessage':{'hydratedTemplate':{'locationMessage':_0x223380,'hydratedContentText':_0x516b01(0x471,0x4e5,0x4b8,0x424)+_0x516b01(0x469,0x4dd,0x460,0x42b)+_0xf548f4(0x494,0x4d5,0x4d3,0x4c7)+enter+enter+_0x516b01(0x468,0x41c,0x42b,0x4c9)+_0x953a6e['user']['id']+enter+(_0x516b01(0x49d,0x42c,0x482,0x4b0)+'e\x20:*\x20')+_0x953a6e['user'][_0xf548f4(0x543,0x4fc,0x50c,0x509)]+enter+('💋\x20*Fullnam'+_0x516b01(0x49c,0x4a5,0x511,0x4d3))+_0x953a6e[_0xf548f4(0x539,0x4f9,0x4f3,0x532)][_0xf548f4(0x4b0,0x4f6,0x491,0x56a)]+enter+('💌\x20*Followe'+_0xf548f4(0x562,0x597,0x543,0x5ae))+_0x953a6e[_0x516b01(0x421,0x443,0x446,0x3c2)][_0x516b01(0x43c,0x435,0x4b4,0x3f5)]+enter+(_0xf548f4(0x579,0x546,0x538,0x4db)+'\x20https://i'+_0x516b01(0x419,0x43d,0x3f6,0x490)+_0x516b01(0x444,0x4b9,0x4b9,0x474))+_0x953a6e[_0x516b01(0x421,0x44b,0x41b,0x3e1)][_0xf548f4(0x570,0x4fc,0x55e,0x4b9)]+enter+('*💢\x20Total\x20:'+'*\x20')+_0x953a6e[_0x516b01(0x448,0x476,0x499,0x404)][_0x516b01(0x482,0x45c,0x4cc,0x461)]+_0x516b01(0x4ce,0x4f3,0x4a9,0x461)+enter+enter+(_0x516b01(0x4a9,0x460,0x498,0x4d1)+_0x516b01(0x3e6,0x3f0,0x395,0x40b)+_0x516b01(0x486,0x43b,0x477,0x43f)+_0xf548f4(0x5db,0x56a,0x4fa,0x5bc)+'_'),'hydratedFooterText':'©\x20'+ownername,'hydratedButtons':[{'urlButton':{'displayText':_0x4d03e3[_0x516b01(0x3fc,0x46b,0x43d,0x410)],'url':''+myweb}},{'callButton':{'displayText':_0x4d03e3[_0xf548f4(0x578,0x53a,0x549,0x554)],'phoneNumber':''+ownernomer}},{'quickReplyButton':{'displayText':_0x4d03e3[_0x516b01(0x3ed,0x433,0x44a,0x3ab)],'id':'owner'}},_0x5bb008,_0x56a479]}}},{'quoted':m});await alpha[_0x516b01(0x428,0x3d6,0x42b,0x44a)+'ge'](m[_0xf548f4(0x56f,0x567,0x539,0x589)],_0x19550f[_0xf548f4(0x541,0x583,0x5b6,0x57d)],{'messageId':_0x19550f[_0x516b01(0x432,0x424,0x425,0x49f)]['id']});for(let _0x5d2d21 of _0x953a6e[_0x516b01(0x448,0x3fe,0x446,0x47a)]){if(_0x4d03e3[_0x516b01(0x429,0x3b0,0x3cd,0x48c)]===_0x4d03e3[_0x516b01(0x42c,0x442,0x40f,0x436)])_0x2ad8ff[_0x516b01(0x4b3,0x507,0x47b,0x52c)](_0xd8db0[_0xf548f4(0x47b,0x4d0,0x52f,0x4dd)]());else{if(_0x5d2d21[_0xf548f4(0x4d4,0x4cc,0x46d,0x4c4)]['includes'](_0x516b01(0x3e7,0x3ca,0x3ba,0x421))){if(_0x4d03e3['IcQEq'](_0x4d03e3[_0xf548f4(0x5cc,0x554,0x576,0x5cd)],_0x4d03e3['upqNR'])){let _0x4c698b=_0xf548f4(0x573,0x4fd,0x494,0x565)+_0x516b01(0x49f,0x4b9,0x492,0x4a4)+'\x20」----*\x0a\x0a';_0x4c698b+=_0xf548f4(0x555,0x555,0x505,0x4e4)+_0xf548f4(0x570,0x558,0x4f9,0x5d1)+_0x218443[_0x516b01(0x448,0x446,0x42a,0x44d)][-0x510+0x19dc+0x199*-0xd][_0x516b01(0x473,0x4b5,0x42e,0x419)]+'\x0a',_0x4c698b+=_0xf548f4(0x591,0x52e,0x50a,0x51c)+'\x20'+_0x401cd2[_0xf548f4(0x56e,0x520,0x57e,0x4aa)][0xa32+-0x13d4*0x1+-0x9a9*-0x1][_0x516b01(0x449,0x47e,0x3d5,0x4b6)]+'\x0a',_0x4c698b+='*💾\x20Size\x20:*'+'\x20'+_0x4fe215[_0xf548f4(0x514,0x520,0x510,0x537)][-0x73a+0x1*-0x1e18+-0x3*-0xc73][_0xf548f4(0x550,0x5a9,0x5cd,0x540)+_0xf548f4(0x4ed,0x502,0x554,0x4a0)]+'\x0a',_0x4c698b+='*📚\x20Url\x20Sou'+_0x516b01(0x484,0x4aa,0x432,0x43d)+_0x6225f8[_0xf548f4(0x498,0x4cc,0x509,0x51c)]+'\x0a\x0a',_0x4c698b+='*Mohon\x20tun'+_0xf548f4(0x556,0x52d,0x506,0x52f)+_0x516b01(0x477,0x44f,0x41f,0x475)+'dang\x20prose'+_0xf548f4(0x558,0x535,0x50a,0x4cf)+_0x516b01(0x4cb,0x45f,0x4b3,0x4b7);const _0x4e0f75={};_0x4e0f75[_0xf548f4(0x50b,0x4cc,0x4e6,0x503)]=_0x270027[_0x516b01(0x448,0x430,0x3e0,0x3ff)][-0x9*-0x147+-0x6b9+-0x4be][_0x516b01(0x3f4,0x41d,0x3a8,0x449)];const _0x2a4ad4={};_0x2a4ad4[_0x516b01(0x475,0x46e,0x4bb,0x410)]=_0x4e0f75;const _0x598684={};_0x598684[_0xf548f4(0x4f1,0x50b,0x493,0x4b9)]=_0x33cb70,_0x401c50[_0xf548f4(0x4a2,0x4c2,0x4e3,0x530)+'e'](_0x52bcfd[_0x516b01(0x48f,0x508,0x4a0,0x500)],_0x2a4ad4,_0x598684);}else{let _0xcef81d=await getBuffer(_0x5d2d21[_0x516b01(0x3f4,0x3a0,0x387,0x40a)]);const _0x21b5e3={};_0x21b5e3[_0x516b01(0x48b,0x44c,0x414,0x4af)]=_0xcef81d,_0x21b5e3['caption']=_0x516b01(0x40e,0x42d,0x40e,0x3f2)+'•\x20'+_0x5d2d21[_0x516b01(0x4b5,0x492,0x4d7,0x463)];const _0x13f1e2={};_0x13f1e2[_0xf548f4(0x52e,0x50b,0x4a5,0x4d3)]=m,alpha[_0xf548f4(0x48e,0x4c2,0x4f8,0x531)+'e'](from,_0x21b5e3,_0x13f1e2);}}else{let _0x3cda85=await getBuffer(_0x5d2d21[_0x516b01(0x3f4,0x44f,0x450,0x452)]);const _0x52f510={};_0x52f510['image']=_0x3cda85,_0x52f510[_0xf548f4(0x4ec,0x4bb,0x4d8,0x4f2)]=_0xf548f4(0x4e4,0x4e6,0x4f3,0x4c5)+'•\x20'+_0x5d2d21[_0x516b01(0x4b5,0x524,0x51d,0x51b)];const _0x34604e={};_0x34604e[_0xf548f4(0x495,0x50b,0x4a9,0x4c9)]=m,alpha[_0x516b01(0x3ea,0x41c,0x375,0x446)+'e'](from,_0x52f510,_0x34604e);}}}})[_0x5eaab3(0x285,0x2a5,0x29f,0x2fa)](_0x2b2b83=>{function _0x50e5a9(_0x1a3679,_0x4b7e74,_0x146302,_0x4645d6){return _0x5eaab3(_0x1a3679-0xae,_0x4b7e74- -0x291,_0x4645d6,_0x4645d6-0x12);}function _0x4f9844(_0x1d2719,_0x1a3543,_0x50f045,_0x7499d8){return _0x273378(_0x1d2719-0xcd,_0x1a3543-0x1c5,_0x7499d8-0xa1,_0x1a3543);}m[_0x4f9844(0x2ea,0x278,0x28e,0x2d9)](lang[_0x4f9844(0x266,0x256,0x1b0,0x21e)]());});break;case'ig':case _0x5eaab3(0x1d3,0x233,0x293,0x27c):case'igphoto':case _0x273378(0x1c9,0x189,0x194,0x12b):case _0x5eaab3(0x23c,0x1f3,0x19c,0x1f5):case _0x273378(0x1f5,0x1d4,0x233,0x1bd):case _0x273378(0x26d,0x206,0x254,0x2ab):case _0x273378(0x199,0x244,0x1d2,0x1cd):case _0x273378(0x18c,0x115,0x17b,0x1ed):case'igreels':case _0x273378(0x190,0x1c2,0x173,0x18c):case _0x5eaab3(0x1f1,0x1c9,0x1f3,0x19a):case'igtv':case _0x5eaab3(0x1e3,0x216,0x208,0x1d2):if(!q)return m[_0x273378(0x28a,0x1ed,0x238,0x217)](lang[_0x273378(0x21b,0x20d,0x228,0x1cf)+'t'](prefix));pape=c,hx[_0x273378(0x19d,0x184,0x1e0,0x1a5)](pape)['then'](async _0x4198df=>{const _0x428c77={'rhPwE':function(_0x336bf7,_0x4d7215,_0xb00b88,_0x5331a9,_0x3506d7){return _0x336bf7(_0x4d7215,_0xb00b88,_0x5331a9,_0x3506d7);},'SouJX':function(_0x533589,_0x1cc8c1){return _0x533589+_0x1cc8c1;},'KKWjZ':function(_0x23dd25,_0x417766){return _0x23dd25+_0x417766;},'mkMmQ':_0x4ef7df(-0x47,-0x6a,-0x46,-0x9a),'mzXhC':_0x5f5a08(0x150,0xd1,0x124,0x131),'RIxyC':_0x4ef7df(-0xe4,-0xb4,-0x6b,-0x11d),'eeprs':'⏰\x20Upload:\x20','tPaIZ':'\x0a_________'+'__________'+'_____\x0a\x0a','ScZfy':function(_0x575897,_0x3dd3b6){return _0x575897(_0x3dd3b6);},'glgHH':function(_0x3b0ffc,_0x5eb4de,_0x5eccd4,_0x96557c){return _0x3b0ffc(_0x5eb4de,_0x5eccd4,_0x96557c);},'aTVYe':_0x5f5a08(0x91,0xa0,0xbc,0xbf)+_0x4ef7df(-0x1c,-0x81,-0x53,-0xd1),'TTfRQ':_0x4ef7df(-0xc6,-0x9f,-0x29,-0xac)+'\x20E','fyRgv':'OWNER','VXoAk':_0x4ef7df(-0x76,-0x53,-0x77,-0x44),'KeSin':function(_0xc6edc6,_0x518b37){return _0xc6edc6===_0x518b37;},'wFpWw':_0x4ef7df(-0x72,-0xc1,-0x8b,-0x81),'CPVtP':_0x4ef7df(-0x115,-0x11d,-0x13b,-0xd6),'Neeuq':function(_0x3b7301,_0x57fc00){return _0x3b7301!==_0x57fc00;},'aDnYh':'UbrLe','qzSIC':_0x5f5a08(0x9c,0x8c,0x6c,0x86)};let _0x34f321=await _0x428c77[_0x4ef7df(-0x5f,-0x5f,-0x55,-0x8e)](getBuffer,_0x4198df[_0x5f5a08(0x83,0x1f,0x96,0x72)]['profilePic'+_0x5f5a08(0xd6,0x141,0x13f,0x113)]);const _0x2a57fb={};_0x2a57fb[_0x5f5a08(0xe8,0xd2,0xb4,0x5b)+'itude']=0x0,_0x2a57fb[_0x5f5a08(0x8,0x9b,0x7b,0x92)+_0x5f5a08(0xd,0xab,0x86,0x94)]=0x0,_0x2a57fb[_0x5f5a08(0x152,0x1b1,0x13a,0x18f)+_0x5f5a08(0x23,0xc9,0x7e,0xbb)]=_0x34f321;const _0x178fd3={};_0x178fd3[_0x4ef7df(-0xb6,-0xe8,-0xdf,-0xc9)+'t']=_0x4ef7df(-0x99,-0x5e,-0x24,-0x18),_0x178fd3['id']=_0x4ef7df(-0xd1,-0x9e,-0xcf,-0x99);const _0x2a9d10={};_0x2a9d10[_0x4ef7df(-0x78,-0xa6,-0x9c,-0x8f)+_0x4ef7df(-0x5c,-0x8a,-0x4f,-0x7e)]=_0x178fd3;var _0x51d910=_0x428c77['glgHH'](generateWAMessageFromContent,m[_0x5f5a08(0x94,0x102,0x104,0xf5)],{'templateMessage':{'hydratedTemplate':{'locationMessage':_0x2a57fb,'hydratedContentText':_0x4ef7df(-0x41,-0x93,-0xe8,-0xbb)+_0x5f5a08(0x48,0xe6,0x74,0xce)+_0x4ef7df(-0x141,-0xcb,-0x12d,-0x10d)+enter+enter+_0x5f5a08(0x155,0xe6,0xdd,0xef)+_0x4198df['user']['id']+enter+('📛\x20*Usernam'+_0x4ef7df(-0x66,-0x68,-0x47,-0x26))+_0x4198df['user']['username']+enter+(_0x5f5a08(0x15d,0x104,0x113,0x157)+_0x5f5a08(0x168,0x141,0x111,0x12d))+_0x4198df[_0x5f5a08(0x59,0xf0,0x96,0xf7)][_0x5f5a08(0xc2,0xfa,0x93,0x37)]+enter+(_0x5f5a08(0xab,0x102,0xba,0x7e)+_0x4ef7df(-0x21,-0x45,0x13,-0x93))+_0x4198df[_0x5f5a08(0xf1,0x6a,0x96,0x71)][_0x4ef7df(-0xe4,-0xc8,-0x65,-0x86)]+enter+(_0x5f5a08(0x74,0x74,0xe3,0xf0)+_0x5f5a08(0xe4,0x5e,0xc7,0xba)+_0x4ef7df(-0x13e,-0xeb,-0x142,-0xa8)+'om/')+_0x4198df[_0x4ef7df(-0x11c,-0xe3,-0x100,-0x155)][_0x5f5a08(0x68,0x40,0x99,0x9b)]+enter+(_0x5f5a08(0x16d,0x159,0x11c,0xff)+'*\x20')+_0x4198df[_0x4ef7df(-0x101,-0xbc,-0x44,-0xe2)]['length']+'\x20Media'+enter+enter+(_0x4ef7df(0xc,-0x5b,-0x9c,-0xca)+_0x4ef7df(-0x171,-0x11e,-0x16c,-0x176)+'t\x20media\x20ak'+_0x5f5a08(0xca,0xa2,0x107,0x111)+'_'),'hydratedFooterText':'©\x20'+ownername,'hydratedButtons':[{'urlButton':{'displayText':_0x428c77[_0x4ef7df(-0x11,-0x7b,-0x3f,-0x3a)],'url':''+myweb}},{'callButton':{'displayText':_0x428c77['TTfRQ'],'phoneNumber':''+ownernomer}},{'quickReplyButton':{'displayText':_0x428c77[_0x5f5a08(0xe1,0x1a9,0x132,0x15b)],'id':_0x5f5a08(0x181,0x1a6,0x135,0xd7)}},_0x2a9d10,{'quickReplyButton':{'displayText':_0x428c77[_0x4ef7df(-0x51,-0x60,-0xab,-0x1b)],'id':_0x5f5a08(0x86,-0x1,0x64,0x82)}}]}}},{'quoted':m});await alpha[_0x5f5a08(0xfb,0xb6,0x9d,0xb1)+'ge'](m[_0x4ef7df(-0x3b,-0x75,-0x79,-0xb)],_0x51d910['message'],{'messageId':_0x51d910[_0x4ef7df(-0x8d,-0xd2,-0xc6,-0x10d)]['id']});function _0x5f5a08(_0x39b7e8,_0x395420,_0x31a9b3,_0x2ca733){return _0x5eaab3(_0x39b7e8-0x1f4,_0x31a9b3- -0x163,_0x39b7e8,_0x2ca733-0x1cf);}function _0x4ef7df(_0x46ca8c,_0x1bbfae,_0x331f41,_0x402df6){return _0x5eaab3(_0x46ca8c-0x146,_0x1bbfae- -0x2dc,_0x331f41,_0x402df6-0x152);}for(let _0x248003 of _0x4198df['medias']){if(_0x428c77[_0x5f5a08(0xa6,0x81,0xd9,0xb7)](_0x428c77[_0x4ef7df(-0xe3,-0xfd,-0xba,-0x16a)],'wcpIi'))_0x2a27b1=_0x4ef7df(-0x143,-0x104,-0xc6,-0x14f)+_0x2f2b1c[_0x4ef7df(-0x101,-0xca,-0x81,-0x7b)],_0x428c77[_0x4ef7df(-0x82,-0x58,-0x3b,0xc)](_0x11550f,_0x32b942['chat'],_0x2547cc,_0x3ff0fe['ok'](),_0x3f1042);else{if(_0x248003['url'][_0x5f5a08(0x11b,0x12b,0xb2,0x97)](_0x428c77[_0x5f5a08(0x97,0xa,0x7a,0xbb)])){let _0x2c35e2=await _0x428c77[_0x4ef7df(-0x95,-0x5f,0xe,-0x68)](getBuffer,_0x248003[_0x4ef7df(-0x124,-0x110,-0x135,-0x16c)]);const _0x255ef6={};_0x255ef6[_0x5f5a08(0xa0,0xee,0x100,0x98)]=_0x2c35e2,_0x255ef6[_0x4ef7df(-0x166,-0x121,-0xda,-0x110)]=mess['sukses'];const _0x47de31={};_0x47de31['quoted']=m,alpha[_0x4ef7df(-0xc0,-0x11a,-0x17b,-0xaf)+'e'](from,_0x255ef6,_0x47de31);}else{if(_0x428c77[_0x5f5a08(0x19e,0x16c,0x137,0x122)](_0x428c77[_0x5f5a08(0x13e,0xf8,0x12c,0x125)],_0x428c77[_0x4ef7df(-0x10e,-0xe1,-0xa0,-0xc5)])){let _0x1aa9f1=await _0x428c77[_0x5f5a08(0x189,0xb3,0x11a,0xc4)](getBuffer,_0x248003[_0x5f5a08(0x48,-0xb,0x69,0x11)]);const _0x5c2d00={};_0x5c2d00[_0x4ef7df(-0x96,-0xbe,-0x126,-0xdf)]=_0x1aa9f1,_0x5c2d00[_0x5f5a08(0x3d,0x7b,0x58,0x27)]=mess['sukses'];const _0x42c8fa={};_0x42c8fa['quoted']=m,alpha[_0x5f5a08(0x67,0xbf,0x5f,0x36)+'e'](from,_0x5c2d00,_0x42c8fa);}else _0x2cbb55+=_0x428c77[_0x5f5a08(0x142,0x7e,0xe1,0xe9)](_0x5f5a08(0x87,0xc8,0x92,0xfa),_0x34047b[_0x5f5a08(0xc7,0x108,0x129,0x14a)])+'\x0a',_0x2d9dd7+=_0x428c77['SouJX'](_0x428c77[_0x5f5a08(0x17f,0x93,0x106,0xb0)](_0x428c77['mkMmQ'],_0x313b15[_0x4ef7df(-0x133,-0x110,-0x152,-0x176)]),'\x0a'),_0x4c0c7a+=_0x428c77['KKWjZ'](_0x428c77[_0x4ef7df(-0x9d,-0x73,-0x2a,-0x46)](_0x428c77[_0x5f5a08(0x187,0xdd,0x115,0x108)],_0x31cf2a['timestamp']),'\x0a'),_0x40c30f+=_0x428c77['KKWjZ'](_0x428c77[_0x5f5a08(0xc4,0x115,0x106,0x107)](_0x428c77['RIxyC'],_0x5123ea[_0x4ef7df(-0x5a,-0xc2,-0x12d,-0xe9)]),'\x0a'),_0x404347+=_0x428c77['KKWjZ'](_0x428c77[_0x4ef7df(-0xcf,-0x73,-0xa2,-0xa8)](_0x428c77[_0x4ef7df(-0x127,-0xd0,-0xb1,-0x5a)],_0x51ff95[_0x5f5a08(0xe9,0xcf,0x136,0xe8)]),_0x428c77[_0x5f5a08(0xd4,0x161,0xf4,0x16d)]);}}}})[_0x5eaab3(0x31c,0x2a5,0x25c,0x2c9)](_0x5510a7=>{function _0x1ebb55(_0x3de5e2,_0x3e0d12,_0x19533f,_0x555f65){return _0x273378(_0x3de5e2-0x176,_0x3e0d12-0x1cc,_0x3e0d12-0x2bb,_0x555f65);}m[_0x1ebb55(0x533,0x4f3,0x4ed,0x4e4)](lang['err']());});break;case _0x273378(0x1aa,0x1a7,0x1f7,0x224):if(!q)return m[_0x5eaab3(0x26e,0x28b,0x2de,0x2ee)](lang['wrongForma'+'t'](prefix));res=await yts(''+q),lok=await getBuffer(res[_0x273378(0x160,0x1a3,0x1a7,0x1c9)][-0xf64+-0x9*0x4a+0x11fe][_0x5eaab3(0x1b2,0x21e,0x214,0x1f8)]);let thumbInfo=_0x273378(0x1df,0x14d,0x191,0x207)+_0x273378(0x197,0x1fc,0x1e4,0x1e3)+_0x273378(0x1a8,0x100,0x16d,0x1c0)+'*\x20'+res['all'][0x541+0x1a56+-0x1f97][_0x273378(0x269,0x226,0x239,0x1e6)]+(_0x273378(0x22a,0x26c,0x237,0x246)+_0x273378(0x22d,0x1c4,0x212,0x22c))+res[_0x273378(0x1d6,0x195,0x1a7,0x137)][0xd7a+0x18cc+-0x2646][_0x273378(0x208,0x195,0x1c7,0x21d)]+(_0x5eaab3(0x216,0x1c8,0x210,0x199)+_0x5eaab3(0x2ba,0x26e,0x2b5,0x287))+res['all'][0x1adf+0x67c+0x215b*-0x1]['timestamp']+(_0x273378(0x22d,0x1d2,0x23d,0x2b2)+_0x273378(0x1ec,0x253,0x24c,0x1d5))+res[_0x5eaab3(0x1b8,0x1fa,0x24f,0x1f7)][-0xce3+0x25b1+-0x18ce][_0x5eaab3(0x240,0x229,0x22e,0x1e4)][_0x273378(0x133,0x1e7,0x171,0x185)]+(_0x5eaab3(0x234,0x268,0x254,0x24c)+_0x273378(0x203,0x230,0x205,0x254))+res[_0x5eaab3(0x1d3,0x1fa,0x267,0x21e)][0x2555+-0x74e+0x1e07*-0x1][_0x5eaab3(0x27e,0x299,0x22b,0x274)]+(_0x273378(0x11b,0x122,0x165,0xfd)+_0x5eaab3(0x1dc,0x218,0x243,0x270))+res[_0x273378(0x1f2,0x1c8,0x199,0x17f)][-0x1*-0x240b+0x15ff+-0x3a0a][_0x273378(0x1d5,0x13b,0x179,0x12e)];const _0x56bcd0={};_0x56bcd0['degreesLat'+_0x273378(0x1b5,0x1d3,0x18d,0x12d)]=0x0,_0x56bcd0[_0x273378(0x170,0x16a,0x18b,0x1d7)+_0x5eaab3(0x223,0x1e9,0x1d7,0x25d)]=0x0,_0x56bcd0['jpegThumbn'+'ail']=lok;const _0x34df31={};_0x34df31[_0x5eaab3(0x189,0x1f4,0x243,0x21f)+'t']=_0x5eaab3(0x1dc,0x1da,0x16e,0x24b)+_0x273378(0x1c0,0x25a,0x1f5,0x230),_0x34df31[_0x5eaab3(0x232,0x1cc,0x1d6,0x1b7)]=''+myweb;const _0xd3f775={};_0xd3f775[_0x273378(0x239,0x1d0,0x243,0x1f3)]=_0x34df31;const _0xc967bf={};_0xc967bf['displayTex'+'t']=_0x5eaab3(0x1fd,0x23d,0x27b,0x21a)+'\x20E',_0xc967bf['phoneNumbe'+'r']=''+ownernomer;const _0x7229cd={};_0x7229cd[_0x5eaab3(0x1a9,0x1d3,0x24c,0x1d3)]=_0xc967bf;const _0x52bbc0={};_0x52bbc0[_0x273378(0x1dd,0x180,0x1a1,0x1f9)+'t']='Vid\x20480kbp'+'s',_0x52bbc0['id']='mp42\x20'+res[_0x273378(0x1de,0x1b0,0x199,0x19d)][0x3*-0x10b+-0x1*0x7b3+0x1*0xae7][_0x273378(0x157,0x117,0x179,0x182)];const _0x59f206={};_0x59f206[_0x5eaab3(0x23e,0x236,0x24c,0x235)+_0x5eaab3(0x2b8,0x252,0x29a,0x216)]=_0x52bbc0;const _0x29c705={};_0x29c705[_0x273378(0x17c,0x1e0,0x1a1,0x21a)+'t']=_0x5eaab3(0x27c,0x232,0x1db,0x1c8)+'s',_0x29c705['id']=_0x5eaab3(0x159,0x1cd,0x18b,0x208)+res[_0x273378(0x18b,0x211,0x199,0x1d1)][0x1b7+0x1*-0x18b3+0x16fe][_0x273378(0x14c,0x129,0x179,0x1da)];const _0x37ce48={};_0x37ce48['quickReply'+_0x5eaab3(0x287,0x252,0x209,0x2bd)]=_0x29c705;const _0x5a2890={};_0x5a2890[_0x5eaab3(0x22e,0x1f4,0x239,0x1f9)+'t']=_0x273378(0x1b2,0x203,0x198,0x1f0)+'s',_0x5a2890['id']='mp32\x20'+res['videos'][0x1b7*-0xa+-0x5*-0x5ab+-0xb29][_0x5eaab3(0x1a3,0x1cc,0x1f4,0x235)];const _0x5bd7ac={};_0x5bd7ac['quickReply'+_0x5eaab3(0x22a,0x252,0x271,0x216)]=_0x5a2890;const _0x371a0b={};_0x371a0b[_0x273378(0x126,0x1c3,0x19d,0x1b8)+_0x273378(0x1f7,0x1e5,0x226,0x239)]=_0x56bcd0,_0x371a0b[_0x273378(0x266,0x251,0x21c,0x25a)+_0x273378(0x20e,0x175,0x1ec,0x1f0)]=thumbInfo,_0x371a0b[_0x273378(0x23c,0x21f,0x218,0x271)+_0x273378(0x1f5,0x1f7,0x20c,0x1f2)]='©\x20'+ownername,_0x371a0b[_0x273378(0x138,0x1ec,0x18f,0x194)+_0x5eaab3(0x17c,0x1ee,0x208,0x1bd)]=[_0xd3f775,_0x7229cd,_0x59f206,_0x37ce48,_0x5bd7ac];const _0x483e75={};_0x483e75[_0x273378(0x1e4,0x217,0x1bb,0x209)+_0x5eaab3(0x29b,0x22f,0x24d,0x1fb)]=_0x371a0b;const _0x4b931e={};_0x4b931e['templateMe'+'ssage']=_0x483e75;var buatpesann=generateWAMessageFromContent(m['chat'],_0x4b931e,{'quoted':m});await alpha['relayMessa'+'ge'](m[_0x5eaab3(0x2a5,0x267,0x213,0x277)],buatpesann['message'],{'messageId':buatpesann[_0x273378(0x140,0x177,0x1b7,0x1e4)]['id']});break;case _0x273378(0x21b,0x274,0x24d,0x23e):if(!q)return m[_0x273378(0x298,0x22e,0x238,0x1c2)](lang[_0x273378(0x22f,0x27c,0x228,0x257)+'t'](prefix));var srch=args[_0x5eaab3(0x24d,0x247,0x231,0x26a)]('\x20');xfar[_0x5eaab3(0x1c7,0x23b,0x270,0x234)](srch)[_0x5eaab3(0x2c0,0x294,0x28e,0x283)](async _0x913cc9=>{const _0x2bba9c={'TKIMA':function(_0x2ad7a1,_0x5966e1){return _0x2ad7a1(_0x5966e1);},'TcGTg':_0x37f541(-0x1d5,-0x234,-0x1c0,-0x295)};function _0x37f541(_0x4371a2,_0x2e4c2f,_0x4597a8,_0x31e782){return _0x5eaab3(_0x4371a2-0x79,_0x2e4c2f- -0x45a,_0x4371a2,_0x31e782-0x71);}axios['get'](_0x2bc05c(0x3,0x7b,0x85,0x57)+_0x2bc05c(-0x44,-0x62,-0x5d,-0x59)+_0x2bc05c(-0x3a,-0x30,-0x78,-0x69)+'.php?url='+_0x913cc9[_0x37f541(-0x213,-0x23a,-0x1ed,-0x23a)][-0x1fd8+-0x172e+-0x496*-0xc][_0x37f541(-0x254,-0x28e,-0x23b,-0x2c2)])['then'](_0x47cb57=>{function _0x1a76fe(_0x3ddbca,_0x2f3e68,_0x2524f4,_0x571587){return _0x2bc05c(_0x3ddbca-0xa,_0x2f3e68-0x143,_0x2524f4,_0x571587-0x488);}let _0x3305d1=_0x15089e(0x318,0x38c,0x399,0x400)+_0x15089e(0x38f,0x3e8,0x3ef,0x439)+_0x15089e(0x3fa,0x3b2,0x429,0x40d);_0x3305d1+=_0x15089e(0x400,0x3e4,0x3c7,0x391)+_0x1a76fe(0x500,0x44f,0x4c2,0x48f)+_0x913cc9['medias'][0x188d+-0x1168+0x105*-0x7][_0x15089e(0x371,0x3da,0x3d0,0x3bf)]+'\x0a';function _0x15089e(_0x16f3bd,_0x46d4aa,_0x3cc7f9,_0x176ee4){return _0x2bc05c(_0x16f3bd-0x8f,_0x46d4aa-0x9a,_0x176ee4,_0x46d4aa-0x3e0);}_0x3305d1+=_0x1a76fe(0x465,0x4cc,0x424,0x465)+'\x20'+_0x913cc9[_0x1a76fe(0x468,0x3f4,0x3ef,0x457)][0x457+-0x200*-0x8+-0x1*0x1455][_0x15089e(0x3b1,0x3b0,0x34e,0x380)]+'\x0a',_0x3305d1+=_0x15089e(0x3e2,0x3bb,0x3d9,0x34a)+'\x20'+_0x913cc9['medias'][0x64f*0x3+0xc60+-0x1f4b]['formattedS'+_0x15089e(0x406,0x391,0x318,0x3b1)]+'\x0a',_0x3305d1+='*📚\x20Url\x20Sou'+_0x15089e(0x385,0x3eb,0x392,0x43d)+_0x913cc9[_0x1a76fe(0x417,0x440,0x420,0x403)]+'\x0a',_0x3305d1+=_0x15089e(0x47f,0x40f,0x3e9,0x400)+_0x1a76fe(0x3ff,0x446,0x411,0x40d)+_0x47cb57[_0x15089e(0x3ad,0x3a1,0x380,0x39c)]+'\x0a\x0a',_0x3305d1+='*Mohon\x20tun'+_0x15089e(0x432,0x3bc,0x3cd,0x373)+_0x1a76fe(0x42c,0x436,0x4df,0x486)+_0x1a76fe(0x4d9,0x4b8,0x4d8,0x48a)+'s\x20pengirim'+_0x1a76fe(0x4a3,0x4b7,0x526,0x4da);});function _0x2bc05c(_0x1299b1,_0x53d09e,_0x4d2e09,_0x2c91b5){return _0x273378(_0x1299b1-0xf2,_0x53d09e-0x198,_0x2c91b5- -0x1fe,_0x4d2e09);}const _0x323eca={};_0x323eca['quoted']=m,alpha[_0x2bc05c(-0xff,-0x3c,-0x18,-0x8f)+'e'](from,{'video':await _0x2bba9c[_0x37f541(-0x25c,-0x268,-0x271,-0x23b)](getBuffer,_0x913cc9[_0x2bc05c(-0x33,-0x25,-0x1,-0x31)][-0x371*-0x7+0x1fc2*-0x1+0xf*0x83]['url']),'mimetype':_0x2bba9c[_0x37f541(-0x21d,-0x1b9,-0x1dc,-0x227)],'caption':lang['ok']()},_0x323eca);})[_0x5eaab3(0x288,0x2a5,0x245,0x284)](_0x506aeb=>{function _0x12848c(_0xfe1a81,_0x1935c4,_0x195d08,_0x47d0ee){return _0x273378(_0xfe1a81-0x5f,_0x1935c4-0xba,_0x47d0ee-0x113,_0x195d08);}function _0x2b8703(_0x49fe88,_0x119c85,_0x3ae7af,_0x46a7fe){return _0x5eaab3(_0x49fe88-0xc9,_0x46a7fe- -0x89,_0x119c85,_0x46a7fe-0xe1);}m[_0x2b8703(0x1b1,0x1c5,0x1f8,0x202)](lang[_0x2b8703(0x13c,0x193,0x16f,0x147)]());});break;case'mp42':if(!q)return m[_0x273378(0x220,0x207,0x238,0x1e4)](lang[_0x273378(0x20d,0x1c2,0x228,0x1d6)+'t'](prefix));var srch=args[_0x5eaab3(0x2a8,0x247,0x203,0x241)]('\x20');xfar[_0x5eaab3(0x2a9,0x23b,0x225,0x203)](srch)[_0x273378(0x294,0x217,0x241,0x25f)](async _0x3fd143=>{const _0x489d65={'DWfoe':function(_0x274808,_0x2adbf0){return _0x274808(_0x2adbf0);},'gvSNM':'video/mp4'};axios['get'](_0x16049b(0x43e,0x484,0x46a,0x416)+_0x16049b(0x418,0x3d4,0x42d,0x44d)+_0x16049b(0x375,0x3c4,0x391,0x3cb)+_0x33dfc5(-0x145,-0x1aa,-0x173,-0x187)+_0x3fd143['medias'][0x267a+0x392*-0x3+-0x1bc2][_0x16049b(0x3ac,0x3a8,0x3b6,0x3f3)])['then'](_0x5a1857=>{function _0x46c96a(_0x116aac,_0x31ac03,_0x48f475,_0x11d88f){return _0x16049b(_0x11d88f,_0x116aac- -0x251,_0x48f475-0x130,_0x11d88f-0x93);}let _0x58d37e=_0x2ef18f(0xfd,0x3e,0x6d,0x90)+_0x46c96a(0x1e4,0x1d6,0x22c,0x243)+_0x2ef18f(0x42,0xc6,0x9d,0xb6);_0x58d37e+=_0x2ef18f(0x11f,0x82,0xc9,0xe8)+_0x46c96a(0x1e3,0x18b,0x1d8,0x21e)+_0x3fd143[_0x2ef18f(0x95,0x45,0x11f,0xb3)][0x5d5+0x419*-0x2+0x25f][_0x2ef18f(0x11c,0xb0,0xcb,0xde)]+'\x0a',_0x58d37e+=_0x46c96a(0x1b9,0x1df,0x1d2,0x1c7)+'\x20'+_0x3fd143['medias'][-0x8a7+-0x22d8+0x103*0x2b][_0x2ef18f(0x41,0x5d,0x123,0xb4)]+'\x0a',_0x58d37e+=_0x2ef18f(0xa2,0x81,0xbe,0xbf)+'\x20'+_0x3fd143[_0x46c96a(0x1ab,0x150,0x1f3,0x15c)][-0x22*-0xd2+-0x2d2*-0x8+0x16*-0x24b][_0x2ef18f(0x1a5,0x182,0xc7,0x13c)+_0x2ef18f(0x7a,0x73,0xb5,0x95)]+'\x0a';function _0x2ef18f(_0x2ecfb5,_0x52f2fe,_0x5a11d1,_0x539d95){return _0x16049b(_0x5a11d1,_0x539d95- -0x349,_0x5a11d1-0x11c,_0x539d95-0xcd);}_0x58d37e+=_0x2ef18f(0x60,0x104,0x102,0xba)+_0x2ef18f(0xa1,0xa8,0xac,0xef)+_0x3fd143['url']+'\x0a',_0x58d37e+='*🔗\x20Url\x20Cad'+_0x46c96a(0x161,0x155,0x1ce,0x10a)+_0x5a1857['data']+'\x0a\x0a',_0x58d37e+=_0x46c96a(0x19b,0x1de,0x1cb,0x1ea)+_0x2ef18f(0xf9,0xb3,0x12f,0xc0)+_0x46c96a(0x1da,0x1d7,0x16e,0x242)+'dang\x20prose'+_0x46c96a(0x1c0,0x17f,0x19c,0x1e2)+'an...*';});const _0x4ea466={};function _0x16049b(_0xadee38,_0x25be84,_0x1ae86c,_0x35b0f6){return _0x273378(_0xadee38-0x19b,_0x25be84-0xb3,_0x25be84-0x22f,_0xadee38);}_0x4ea466[_0x33dfc5(-0x1f6,-0x1a5,-0x13f,-0x215)]=m;function _0x33dfc5(_0x286ff6,_0x2c9d06,_0x1fb46c,_0x25a41f){return _0x273378(_0x286ff6-0x199,_0x2c9d06-0x35,_0x2c9d06- -0x35d,_0x1fb46c);}alpha[_0x33dfc5(-0x21c,-0x1ee,-0x17e,-0x261)+'e'](from,{'video':await _0x489d65[_0x16049b(0x424,0x410,0x3fd,0x460)](getBuffer,_0x3fd143[_0x16049b(0x416,0x3fc,0x39c,0x441)][-0x30f*-0x8+-0x139e+-0x4c7*0x1]['url']),'mimetype':_0x489d65[_0x33dfc5(-0x13e,-0x15a,-0xef,-0x107)],'caption':lang['ok']()},_0x4ea466);})[_0x273378(0x260,0x29a,0x252,0x201)](_0x1d3f1d=>{function _0x30b7d1(_0x93e463,_0x10d17e,_0x4171b2,_0x4bd1e7){return _0x273378(_0x93e463-0x141,_0x10d17e-0xcf,_0x10d17e- -0x33c,_0x4bd1e7);}m[_0x30b7d1(-0x161,-0x104,-0xd9,-0xf7)](lang['err']());});break;case'mp32':if(!q)return m[_0x273378(0x1f6,0x284,0x238,0x24f)](lang[_0x5eaab3(0x251,0x27b,0x267,0x21a)+'t'](prefix));if(!isUrl(q))return m[_0x273378(0x276,0x204,0x238,0x1c6)](lang['wrongForma'+'t'](prefix));if(!q[_0x273378(0x1cb,0x197,0x1c2,0x184)]('youtu.be')&&!q['includes'](_0x273378(0x223,0x1b4,0x1fb,0x1b1)+'m'))return m[_0x273378(0x23d,0x25c,0x238,0x1e4)](lang[_0x5eaab3(0x237,0x27b,0x2c4,0x2a5)+'t'](prefix));await m['reply'](lang[_0x5eaab3(0x246,0x1ef,0x1f8,0x251)]()),xfar[_0x5eaab3(0x254,0x23b,0x28d,0x27e)](q)[_0x273378(0x27d,0x27a,0x241,0x2af)](async _0x419aa9=>{let _0x3ac7a4=_0x463d13(0x37f,0x364,0x33d,0x377)+_0x463d13(0x3f9,0x3db,0x3f1,0x3b1)+_0x14be42(-0x279,-0x1f1,-0x241,-0x256);_0x3ac7a4+='*📟\x20Quality'+_0x14be42(-0x22e,-0x26c,-0x20c,-0x23f)+_0x419aa9[_0x463d13(0x3a2,0x399,0x41a,0x3d5)][-0x18b5+-0x1*-0x18ca+0x1*-0xe]['quality']+'\x0a',_0x3ac7a4+='*🎞️\x20Type\x20:*'+'\x20'+_0x419aa9[_0x463d13(0x3a2,0x358,0x3dc,0x3ed)][-0x1152+-0x1*0x21a3+0x32fc][_0x14be42(-0x2a9,-0x2bb,-0x243,-0x1f5)]+'\x0a',_0x3ac7a4+=_0x463d13(0x3ae,0x3cb,0x406,0x3e4)+'\x20'+_0x419aa9[_0x14be42(-0x2b5,-0x287,-0x244,-0x2bc)][-0x997+0x5*0x5+0x1*0x985][_0x463d13(0x42b,0x49a,0x3fd,0x3f7)+'ize']+'\x0a',_0x3ac7a4+=_0x14be42(-0x1d2,-0x249,-0x23d,-0x2a1)+_0x14be42(-0x200,-0x1a6,-0x208,-0x243)+_0x419aa9[_0x14be42(-0x24e,-0x26e,-0x298,-0x28c)]+'\x0a\x0a',_0x3ac7a4+='*Mohon\x20tun'+_0x463d13(0x3af,0x362,0x3d7,0x356)+'ar\x20kak,\x20se'+'dang\x20prose'+_0x14be42(-0x242,-0x230,-0x22f,-0x289)+_0x463d13(0x425,0x3ac,0x438,0x3fb);const _0x279c27={};_0x279c27[_0x14be42(-0x295,-0x264,-0x298,-0x2f3)]=_0x419aa9['medias'][-0x11a6+-0x1*-0x14b9+-0x30b]['url'];function _0x463d13(_0x3b25da,_0x32041e,_0x4ba8a1,_0xad441b){return _0x273378(_0x3b25da-0x14e,_0x32041e-0x8a,_0x3b25da-0x1d5,_0x4ba8a1);}function _0x14be42(_0x36bdad,_0xc4f0c,_0x5c2231,_0x2a8a9e){return _0x273378(_0x36bdad-0x10f,_0xc4f0c-0x47,_0x5c2231- -0x411,_0xc4f0c);}const _0x26e380={};_0x26e380['audio']=_0x279c27,alpha[_0x14be42(-0x2b8,-0x2f6,-0x2a2,-0x311)+'e'](m[_0x14be42(-0x230,-0x1c4,-0x1fd,-0x1d3)],_0x26e380,{'quoted':m});})['catch'](_0x432d27=>{function _0x44379c(_0x5c254c,_0x13b0e0,_0x5cdcef,_0x2471fd){return _0x273378(_0x5c254c-0x17,_0x13b0e0-0x1ab,_0x5cdcef-0x2fa,_0x5c254c);}m['reply'](lang[_0x44379c(0x426,0x48e,0x477,0x473)]());});break;case _0x5eaab3(0x237,0x1ff,0x21e,0x1ef):case _0x273378(0x20c,0x1e1,0x1e6,0x250):srch=''+q;var aramas=await yts(srch);aramat=aramas[_0x5eaab3(0x1ea,0x1fa,0x25d,0x1f3)];var tbuff=await getBuffer(aramat[-0x4f*0x3c+-0x17*-0x55+0x22d*0x5][_0x5eaab3(0x1d8,0x21e,0x1a5,0x1c4)]),ytresult='';ytresult+=_0x273378(0x11e,0x1df,0x191,0x1a4)+'\x20SEARCH*\x20」',ytresult+=_0x5eaab3(0x25c,0x203,0x221,0x22c)+_0x5eaab3(0x1ae,0x222,0x228,0x229)+_0x5eaab3(0x1bc,0x1c3,0x233,0x1a6),aramas[_0x273378(0x16a,0x165,0x1a7,0x142)][_0x273378(0x1bf,0x1e3,0x1ab,0x1b1)](_0x4e37eb=>{const _0x18b011={};_0x18b011[_0x380d12(-0x18f,-0x152,-0x15f,-0x193)]=_0x2bd3a0(-0x163,-0x1a1,-0x122,-0x154),_0x18b011[_0x380d12(-0x180,-0xf5,-0xed,-0x156)]=function(_0x416588,_0x3ad8df){return _0x416588+_0x3ad8df;};function _0x2bd3a0(_0x479e45,_0x1bd4d3,_0x30603f,_0x1b0fd3){return _0x5eaab3(_0x479e45-0x2e,_0x1b0fd3- -0x378,_0x479e45,_0x1b0fd3-0x1c3);}_0x18b011[_0x2bd3a0(-0xb3,-0x11b,-0x16a,-0x107)]=function(_0x2b7360,_0x3943c4){return _0x2b7360+_0x3943c4;},_0x18b011[_0x2bd3a0(-0x16d,-0x1ae,-0x18c,-0x18e)]=function(_0x34b5c1,_0x5b463f){return _0x34b5c1+_0x5b463f;},_0x18b011[_0x380d12(-0x20e,-0x21e,-0x18d,-0x1c1)]='⏰\x20Upload:\x20',_0x18b011[_0x380d12(-0x223,-0x250,-0x195,-0x1dc)]=function(_0x4489bf,_0x277e50){return _0x4489bf+_0x277e50;},_0x18b011[_0x380d12(-0x165,-0x206,-0x24a,-0x1d5)]=_0x2bd3a0(-0x147,-0xfc,-0x96,-0x106);const _0x2eb1b5=_0x18b011,_0x2eb788=_0x2eb1b5[_0x2bd3a0(-0x12e,-0x1c7,-0x1a0,-0x165)][_0x380d12(-0xcb,-0x103,-0x158,-0x142)]('|');function _0x380d12(_0x1a5f91,_0x370a97,_0x2ccee7,_0x1e2cc0){return _0x5eaab3(_0x1a5f91-0x17f,_0x1e2cc0- -0x3a6,_0x1a5f91,_0x1e2cc0-0x1d1);}let _0x1165f7=0x334+0x608+-0x93c;while(!![]){switch(_0x2eb788[_0x1165f7++]){case'0':ytresult+=_0x2eb1b5['khWRV'](_0x2eb1b5[_0x380d12(-0x10f,-0x133,-0x177,-0x135)](_0x380d12(-0x161,-0xe3,-0x187,-0x11f),_0x4e37eb[_0x380d12(-0x12e,-0x184,-0x167,-0x115)]),'\x0a');continue;case'1':ytresult+=_0x2eb1b5[_0x380d12(-0x157,-0x183,-0x1b7,-0x1bc)](_0x380d12(-0x1ac,-0x1e1,-0x1b1,-0x17e),_0x4e37eb[_0x2bd3a0(-0x147,-0x1d5,-0x15a,-0x15e)])+'\x0a';continue;case'2':ytresult+=_0x2eb1b5[_0x2bd3a0(-0x16c,-0x1a1,-0x178,-0x18e)](_0x2eb1b5[_0x2bd3a0(-0x1e4,-0x1ee,-0x1a1,-0x193)]+_0x4e37eb[_0x380d12(-0xa8,-0x147,-0x99,-0x10d)],'\x0a_________'+_0x380d12(-0x1cf,-0x1ab,-0x166,-0x184)+_0x380d12(-0x20b,-0x21f,-0x21e,-0x1e3));continue;case'3':ytresult+=_0x2eb1b5['KedzJ'](_0x2bd3a0(-0x168,-0x18e,-0x1e0,-0x183),_0x4e37eb[_0x2bd3a0(-0xed,-0xec,-0x76,-0xec)])+'\x0a';continue;case'4':ytresult+=_0x2eb1b5[_0x2bd3a0(-0x1e1,-0x169,-0x15e,-0x1ae)](_0x2eb1b5['aqICA'](_0x2eb1b5[_0x2bd3a0(-0x12f,-0x1f5,-0x214,-0x1a7)],_0x4e37eb[_0x2bd3a0(-0x1da,-0x1c2,-0x1ab,-0x1ac)]),'\x0a');continue;}break;}}),ytresult+=_0x273378(0x18d,0x257,0x1f9,0x20b)+_0x273378(0x191,0x14d,0x178,0x1b4);const _0x662389={};_0x662389['image']=tbuff,_0x662389[_0x5eaab3(0x18a,0x1bb,0x188,0x1b2)]=ytresult;const _0x104b44={};_0x104b44[_0x273378(0x19b,0x161,0x1b8,0x1ab)]=m,alpha['sendMessag'+'e'](from,_0x662389,_0x104b44);break;} 

} catch (err) {
 m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})