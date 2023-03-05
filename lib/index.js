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
const {
   default: makeWASocket,
   BufferJSON,
   WAMessageStubType,
   WA_DEFAULT_EPHEMERAL,
   generateWAMessageFromContent,
   downloadContentFromMessage,
   downloadHistory,
   proto,
   getMessage,
   generateWAMessageContent,
   prepareWAMessageMedia,
   generateWAMessage,
   areJidsSameUser,
   makeInMemoryStore
} = require('@adiwajshing/baileys')
const translate = require('@vitalets/google-translate-api')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
   exec,
   spawn,
   execSync
} = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const {
   fromBuffer
} = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const {
   EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI()
const FormData = require("form-data");
const speed = require('performance-now')
const {
   Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const hx = require('hxz-api');
const {
   performance
} = require('perf_hooks')
const zee = require('xfarr-api')
const ms = require('ms')
const similarity = require('similarity')
const threshold = 0.72

const {
   toAudio,
   toPTT
} = require('./lib/converter')
const {
   yta,
   ytv,
   servers
} = require('./lib/y2mate')
const rpg = require('./lib/games-rpg')
const levelling = require('./lib/levelling')
const _sewa = require("./lib/sewa");
const {
   pinterest,
   wallpaper,
   wikimedia,
   hentai,
   quotesAnime
} = require('./lib/scraper')
const {
   bytesToSize,
   fileIO,
   UploadFileUgu,
   telesticker,
   webp2mp4File,
   TelegraPh
} = require('./lib/uploader')
const {
   UdhAdCoy,
   ApusAhh
} = require('./lib/dbs');
const {
   addResponList,
   delResponList,
   isAlreadyResponList,
   isAlreadyResponListGroup,
   sendResponList,
   updateResponList,
   getDataResponList
} = require('./lib/respon-list');
const {
   smsg,
   getGroupAdmins,
   formatp,
   tanggal,
   tanggal_,
   tanggal__,
   formatDate,
   getTime,
   isUrl,
   sleep,
   clockString,
   runtime,
   fetchJson,
   getBuffer,
   jsonformat,
   delay,
   format,
   logic,
   generateProfilePicture,
   parseMention,
   getRandom
} = require('./lib/myfunc')
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const mute = JSON.parse(fs.readFileSync('./database/antilink.json'));
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
const {
   sendButLoc,
   sendButDoC,
   sendButDoc,
   sendListMenu,
   sendListAge,
   sendListGender,
   sendListLang,
   sendButImage,
   sendKatalog,
   sendKatalog2,
   sendContact
} = require('./lib/welcome')

pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
moment.tz.setDefault("Asia/Jakarta").locale("id");

// Database Game
const hit_today = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
var dbs = []
global.dbc = dbs

module.exports = alpha = async (alpha, m, chatUpdate, mek, store, reSize, _welcome, _left, antionce, antidelete) => {
   try {
      var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
      const type = Object.keys(mek.message)[0];
      if (m && type == "protocolMessage") alpha.ev.emit("message.delete", m.message.protocolMessage.key);
      const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
      const prefix = isCmd ? budy[0] : ''
      const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
      const from = mek.key.remoteJid
      const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
      const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
      const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
      const salam = moment(Date.now()).tz(timezone).locale('id').format('a')
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
      const botNumber = alpha.user.id ? alpha.user.id.split(":")[0] + "@s.whatsapp.net" : alpha.user.id
      const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : ''
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
      const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
      const isAntiLink = antilink.includes(m.chat) ? true : false
      const isAntiwame = antiwame.includes(m.chat) ? true : false
      const isAntidelete = antidelete.includes(m.chat)
      const isAntionce = antionce.includes(m.chat)
      const isWelcome = _welcome.includes(m.chat)
      const isLeft = _left.includes(m.chat)
      const isMute = mute.includes(m.chat) ? true : false
      const blockList = await alpha.fetchBlocklist()
      if (blockList?.includes(m.sender)) return
      dbs.push({
       id: m.key.id,
		 	 m
		  }); 
      const ini_mark = `0@s.whatsapp.net`
      const timestampi = speed();
      const latensii = speed() - timestampi
      const ftroli = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "6289523258649-1604595598@g.us"
         },
         "message": {
            orderMessage: {
               itemCount: 2021,
               status: 200,
               thumbnail: pp_bot,
               surface: 200,
               message: `© ${ownername}`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
      const fdoc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            documentMessage: {
               title: `© ${ownername}`,
               jpegThumbnail: pp_bot
            }
         }
      }
      const fvn = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "audioMessage": {
               "mimetype": "audio/ogg; codecs=opus",
               "seconds": 359996400,
               "ptt": "true"
            }
         }
      }
      const fgif = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "status@broadcast"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `© ${ownername}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'gifPlayback': 'true',
               'caption': `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         }
      }
      const fgclink = {
         key: {
            participant: "0@s.whatsapp.net",
            "remoteJid": "0@s.whatsapp.net"
         },
         "message": {
            "groupInviteMessage": {
               "groupJid": "6288213840883-1616169743@g.us",
               "inviteCode": "m",
               "groupName": "P",
               "caption": `© ${ownername}`,
               'jpegThumbnail': pp_bot
            }
         }
      }
      const fvideo = {
         key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: "6289643739077-1613049930@g.us"
            } : {})
         },
         message: {
            "videoMessage": {
               "title": `${pushname}`,
               "h": `Hmm`,
               'seconds': '359996400',
               'caption': `${pushname}`,
               'jpegThumbnail': pp_bot
            }
         }
      }
      const floc = {
         key: {
            participant: '0@s.whatsapp.net'
         },
         message: {
            locationMessage: {
               name: `${ownername}`,
               jpegThumbnail: pp_bot
            }
         }
      }
      const fkontak = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: `6283136505591-1614953337@g.us`
            } : {})
         },
         message: {
            'contactMessage': {
               'displayName': `${pushname}`,
               'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
               'jpegThumbnail': pp_bot,
               thumbnail: pp_bot,
               sendEphemeral: true
            }
         }
      }
      let picaks = [flaming, fluming, flarun, flasmurf]
      let picak = picaks[Math.floor(Math.random() * picaks.length)]


      const reply = async (teks) => {
         return await alpha.sendFakeLink(m.chat, teks, salam, pushname, ownername, thumbnail, myweb, m)
      }
      async function getGcName(groupID) {
         try {
            let data_name = await alpha.groupMetadata(groupID)
            return data_name.subject
         }
         catch (err) {
            return '-'
         }
      }
      const randomArr = (arr = []) => {
         return arr[Math.floor(Math.random() * arr.length)]
      }
      const isEmoji = (emo) => {
         let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
         let regexEmoji = new RegExp(emoji_ranges, 'gi');
         return emo.match(regexEmoji)
      }
      try {
         let user = await global.db.data.users[m.sender]
         let chats = await global.db.data.chats[m.chat]
         let setting = await global.db.data.settings[botNumber]
         let isNumber = x => typeof x === 'number' && !isNaN(x)

         if (typeof user !== 'object') db.data.users[m.sender] = {}
         if (user) {
            if (!('premium' in user)) user.premium = false
            if (!isNumber(user.premiumTime)) user.premiumTime = 0
            if (!('banned' in user)) user.banned = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!isNumber(user.pc)) user.pc = 0
            if (!('afkReason' in user)) user.afkReason = ''
            if (!('language' in user)) user.language = "id"
            if (!isNumber(user.limit)) user.limit = limitawal.free

            if (!isNumber(user.healt)) user.healt = 100
            if (!isNumber(user.healtmonster)) user.healtmonster = 0
            if (!isNumber(user.title)) user.title = 0
            if (!isNumber(user.stamina)) user.stamina = 100
            if (!isNumber(user.haus)) user.haus = 100
            if (!isNumber(user.laper)) user.laper = 100
            if (!isNumber(user.level)) user.level = 0
            if (!('pasangan' in user)) user.pasangan = ''
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
            if (!isNumber(user.ojekk)) user.ojekk = 0
            if (!isNumber(user.trofi)) user.trofi = 0
            if (!user.rtrofi) user.rtrofi = 'Perunggu'
            if (!isNumber(user.troopcamp)) user.troopcamp = 0
            if (!isNumber(user.coin)) user.coin = 0
            if (!isNumber(user.atm)) user.atm = 0
            if (!isNumber(user.tprem)) user.tprem = 0
            if (!isNumber(user.tigame)) user.tigame = 50
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.money)) user.money = 1000
            if (!isNumber(user.bank)) user.bank = 1000
            if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
            if (!isNumber(user.fortress)) user.fortress = 0
            if (!isNumber(user.shield)) user.shield = false
            if (!isNumber(user.pertanian)) user.pertanian = 0
            if (!isNumber(user.pertambangan)) user.pertambangan = 0
            if (!isNumber(user.botol)) user.botol = 0
            if (!isNumber(user.kardus)) user.kardus = 0
            if (!isNumber(user.kaleng)) user.kaleng = 0
            if (!isNumber(user.aqua)) user.aqua = 0
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0
            if (!isNumber(user.emas)) user.emas = 0
            if (!isNumber(user.arlok)) user.arlok = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.boxs)) user.boxs = 0
            if (!isNumber(user.cupon)) user.cupon = 0
            if (!isNumber(user.as)) user.as = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.glory)) user.glory = 0
            if (!isNumber(user.enchant)) user.enchant = 0
            if (!isNumber(user.pet)) user.pet = 0
            if (!isNumber(user.psepick)) user.psepick = 0
            if (!isNumber(user.psenjata)) user.psenjata = 0

            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            if (!isNumber(user.pancing)) user.pancing = 0

            if (!isNumber(user.apel)) user.apel = 0
            if (!isNumber(user.ayamb)) user.ayamb = 0
            if (!isNumber(user.ayamg)) user.ayamg = 0
            if (!isNumber(user.sapir)) user.sapir = 0
            if (!isNumber(user.ssapi)) user.ssapi = 0
            if (!isNumber(user.esteh)) user.esteh = 0
            if (!isNumber(user.leleg)) user.leleg = 0
            if (!isNumber(user.leleb)) user.leleb = 0

            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
            if (!isNumber(user.umpan)) user.umpan = 0
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
            if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
            if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
            if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
            if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
            if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
            if (!isNumber(user.makananpet)) user.makananpet
            if (!isNumber(user.makanannaga)) user.makanannaga = 0
            if (!isNumber(user.makananphonix)) user.makananphonix = 0
            if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
            if (!isNumber(user.makananserigala)) user.makananserigala = 0
            if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.healthmonster)) user.healthmonster = 0
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.serigala)) user.serigala = 0
            if (!isNumber(user.anakserigala)) user.anakserigala = 0
            if (!isNumber(user.naga)) user.naga = 0
            if (!isNumber(user.anaknaga)) user.anaknaga = 0
            if (!isNumber(user.phonix)) user.phonix = 0
            if (!isNumber(user.anakphonix)) user.anakphonix = 0
            if (!isNumber(user.griffin)) user.griffin = 0
            if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
            if (!isNumber(user.kyubi)) user.kyubi = 0
            if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
            if (!isNumber(user.centaur)) user.centaur = 0
            if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!('kingdom' in user)) user.kingdom = false
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.ramuan)) user.ramuan = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
            if (!isNumber(user.gurita)) user.gurita = 0
            if (!isNumber(user.cumi)) user.cumi = 0
            if (!isNumber(user.buntal)) user.buntal = 0
            if (!isNumber(user.dory)) user.dory = 0
            if (!isNumber(user.lumba)) user.lumba = 0
            if (!isNumber(user.lobster)) user.lobster = 0
            if (!isNumber(user.hiu)) user.hiu = 0
            if (!isNumber(user.udang)) user.udang = 0
            if (!isNumber(user.ikan)) user.ikan = 0
            if (!isNumber(user.nila)) user.nila = 0
            if (!isNumber(user.bawal)) user.bawal = 0
            if (!isNumber(user.lele)) user.lele = 0
            if (!isNumber(user.orca)) user.orca = 0

            if (!isNumber(user.banteng)) user.banteng = 0
            if (!isNumber(user.harimau)) user.harimau = 0
            if (!isNumber(user.gajah)) user.gajah = 0
            if (!isNumber(user.kambing)) user.kambing = 0
            if (!isNumber(user.panda)) user.panda = 0
            if (!isNumber(user.buaya)) user.buaya = 0
            if (!isNumber(user.kerbau)) user.kerbau = 0
            if (!isNumber(user.sapi)) user.sapi = 0
            if (!isNumber(user.monyet)) user.monyet = 0
            if (!isNumber(user.babihutan)) user.babihutan = 0
            if (!isNumber(user.babi)) user.babi = 0
            if (!isNumber(user.ayam)) user.ayam = 0

            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastopen)) user.lastopen = 0
            if (!isNumber(user.lastkill)) user.lastkill = 0
            if (!isNumber(user.lastbanned)) user.lastbanned = 0
            if (!isNumber(user.lastnguli)) user.lastnguli = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastwar)) user.lastwar = 0
            if (!isNumber(user.lastsda)) user.lastsda = 0
            if (!isNumber(user.lastberbru)) user.lastberbru = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastjb)) user.lastjb = 0
            if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastngocok)) user.lastngocok = 0
            if (!isNumber(user.lastgift)) user.lastgift = 0
            if (!isNumber(user.lastrob)) user.lastrob = 0
            if (!isNumber(user.lastngojek)) user.lastngojek = 0
            if (!isNumber(user.lastgrab)) user.lastgrab = 0
            if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
            if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
            if (!isNumber(user.lastdagang)) user.lastdagang = 0
            if (!isNumber(user.lasthourly)) user.lasthourly = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
            if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
            if (!isNumber(user.lastturu)) user.lastturu = 0
            if (!isNumber(user.lastseen)) user.lastseen = 0
            if (!isNumber(user.lastbansos)) user.lastbansos = 0
            if (!isNumber(user.lastrampok)) user.lastrampok = 0
            if (!('registered' in user)) user.registered = false

            if (!user.registered) {
               if (!('name' in user)) user.name = m.pushName || "No Name"
               if (!('gender' in user)) user.gender = ''
               if (!('hobi' in user)) user.hobi = ''
               if (!('serialNumber' in user)) user.serialNumber = ''
               if (!isNumber(user.apel)) user.apel = 0
               if (!isNumber(user.anggur)) user.anggur = 0
               if (!isNumber(user.jeruk)) user.jeruk = 0
               if (!isNumber(user.semangka)) user.semangka = 0
               if (!isNumber(user.mangga)) user.mangga = 0
               if (!isNumber(user.stroberi)) user.stroberi = 0
               if (!isNumber(user.pisang)) user.pisang = 0
               if (!isNumber(user.kayu)) user.kayu = 0
               if (!isNumber(user.emas)) user.emas = 0
               if (!isNumber(user.makanan)) user.makanan = 0
               if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
               if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
               if (!isNumber(user.bibitapel)) user.bibitapel = 0
               if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
               if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
               if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
               if (!isNumber(user.age)) user.age = -1
               if (!isNumber(user.premiumDate)) user.premiumDate = -1
               if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!user.job) user.job = 'Pengangguran'
            if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
            if (!user.role) user.role = 'Newbie ㋡'
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!('lastIstigfar' in user)) user.lastIstigfar = true
         }
         else db.data.users[m.sender] = {
            premium: false,
            banned: false,
            afkTime: -1,
            pc: 0,
            afkReason: '',
            language: "id",
            limit: limitawal.free,
            healt: 100,
            title: '',
            healtmonster: 0,
            haus: 100,
            laper: 100,
            tprem: 0,
            stamina: 100,
            level: 0,
            pasangan: '',
            exp: 0,
            coin: 0,
            atm: 0,
            tigame: 50,
            lastclaim: 0,
            money: 1000,
            bank: 1000,
            diamond: 0,
            iron: 0,
            pisang: 0,
            anggur: 0,
            mangga: 0,
            jeruk: 0,
            apel: 0,
            bibitpisang: 0,
            bibitanggur: 0,
            bibitmangga: 0,
            bibitjeruk: 0,
            bibitapel: 0,
            gardenboxs: 0,
            emas: 0,
            common: 0,
            boxs: 0,
            cupon: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            rumahsakit: 0,
            fortress: 0,
            trofi: 0,
            rtrofi: 'perunggu',
            makanan: 0,
            troopcamp: 0,
            shield: 0,
            arlok: 0,
            ojekk: 0,
            korbanngocok: 0,
            as: 0,
            paus: 0,
            kepiting: 0,
            gurita: 0,
            cumi: 0,
            buntal: 0,
            dory: 0,
            lumba: 0,
            lobster: 0,
            hiu: 0,
            lele: 0,
            nila: 0,
            bawal: 0,
            udang: 0,
            ikan: 0,
            orca: 0,
            banteng: 0,
            harimau: 0,
            gajah: 0,
            kambing: 0,
            panda: 0,
            buaya: 0,
            kerbau: 0,
            sapi: 0,
            monyet: 0,
            babihutan: 0,
            babi: 0,
            ayam: 0,
            apel: 20,
            ayamb: 0,
            ayamg: 0,
            ssapi: 0,
            sapir: 0,
            leleb: 0,
            leleg: 0,
            esteh: 0,
            pet: 0,
            potion: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            naga: 0,
            nagalastclaim: 0,
            griffin: 0,
            griffinlastclaim: 0,
            centaur: 0,
            centaurlastclaim: 0,
            serigala: 0,
            serigalalastclaim: 0,
            phonix: 0,
            phonixlastclaim: 0,
            makanannaga: 0,
            makananphonix: 0,
            makanancentaur: 0,
            makananserigala: 0,
            BannedReason: '',
            warn: 0,
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            kayu: 0,
            batu: 0,
            string: 0,
            umpan: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastbanned: 0,
            lastopen: 0,
            lastkill: 0,
            lastnguli: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastmining: 0,
            lasthourly: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastmonthly: 0,
            lastjb: 0,
            lastrob: 0,
            lastdaang: 0,
            lastngojek: 0,
            lastgrab: 0,
            lastngocok: 0,
            lastturu: 0,
            lastseen: 0,
            lastSetStatus: 0,
            registered: false,
            apel: 20,
            mangga: 0,
            stroberi: 0,
            semangka: 0,
            jeruk: 0,
            semangka: 0,
            premiumTime: 0,
            job: 'Pengangguran',
            lbars: '[▒▒▒▒▒▒▒▒▒]',
            role: 'Newbie ㋡',
            registered: false,
            name: m.pushName || "No Name",
            gender: '',
            hobi: '',
            serialNumber: '',
            age: -1,
            premiumDate: -1,
            regTime: -1,
            autolevelup: true,
            lastIstigfar: 0,
         }


         if (typeof chats !== 'object') db.data.chats[m.chat] = {}
         if (chats) {
            if (!('name' in chats)) chats.name = groupName ? groupName : '-'
            if (!('goodbye' in chats)) chats.goodbye = true
            if (!('welcome' in chats)) chats.welcome = true
            if (!('promote' in chats)) chats.promote = true
            if (!('demote' in chats)) chats.demote = true
            if (!('mute' in chats)) chats.mute = false
            if (!('captionPay' in chats)) chats.captionPay = ''
            if (!('nsfw' in chats)) chats.nsfw = false
            if (!('sewa' in chats)) chats.sewa = false
            if (!('antilink' in chats)) chats.antilink = false
            if (!('antionce' in chats)) chats.antionce = false
            if (!('setWelcome' in chats)) chats.setWelcome = ''
            if (!('setLeave' in chats)) chats.setLeave = ''
            if (!('setPromote' in chats)) chats.setPromote = ''
            if (!('setDemote' in chats)) chats.setDemote = ''
            if (!('setProses' in chats)) chats.setProses = ''
            if (!('setDone' in chats)) chats.setDone = ''
            if (!('paygc' in chats)) chats.paygc = ''
            if (!isNumber(chats.expired)) chats.expired = 0
         }
         else db.data.chats[m.chat] = {
            name: groupName ? groupName : '-',
            goodbye: true,
            welcome: true,
            promote: true,
            demote: true,
            mute: false,
            captionPay: '',
            nsfw: false,
            sewa: false,
            antilink: false,
            antionce: false,
            setWelcome: '',
            setLeave: '',
            setPromote: '',
            setDemote: '',
            setProses: '',
            setDone: '',
            paygc: '',
            expired: 0,
         }


         if (typeof setting !== 'object') db.data.settings[botNumber] = {}
         if (setting) {
            if (!('autoread' in setting)) setting.autoread = autoread
            if (!('anticall' in setting)) setting.anticall = anticall
            if (!('autobio' in setting)) setting.autobio = autobio
            if (!('available' in setting)) setting.available = false
            if (!('userRegister' in setting)) setting.userRegister = userRegister
            if (!('composing' in setting)) setting.composing = false
            if (!('recording' in setting)) setting.recording = false
            if (!('autoblok' in setting)) setting.autoblok = autoblok212
            if (!('autorespond' in setting)) setting.autorespond = false
         }
         else db.data.settings[botNumber] = {
            autoread: autoread,
            anticall: anticall,
            autobio: autobio,
            available: false,
            userRegister: userRegister,
            composing: false,
            recording: false,
            autoblok: autoblok212,
            autorespond: false,
         }
      }
      catch (err) {
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
         reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
         user.afkTime = -1
         user.afkReason = ''
      }


      const {
         indonesia,
         english,
         spanyol
      } = require(`./language`)
      let lang = db.data.users[m.sender].language;
      if (lang === "id") {
         lang = indonesia;
      }
      else if (lang === "en") {
         lang = english;
      }
      else if (lang === "sp") {
         lang = spanyol;
      }
      else {
         lang = indonesia;
      }

      if (m.isGroup && !m.key.fromMe && isAntiLink && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`https://chat.whatsapp.com`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            let gclink = (`https://chat.whatsapp.com/` + await alpha.groupInviteCode(m.chat))
            let isLinkThisGc = new RegExp(gclink, 'i')
            let isgclink = isLinkThisGc.test(m.text)
            if (isgclink) return reply(lang.GjdKick())
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      if (m.isGroup && !m.key.fromMe && isAntiwame && !isCreator && !isGroupAdmins && !isGroupOwner) {
         if (budy.match(`wa.me`)) {
            if (!isBotAdmins) return
            alpha.sendMessage(m.chat, {
               text: lang.KickAh(groupMetadata.subject)
            }, {
               quoted: m
            })
            await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
            alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
         }
      }
      
/*if(!m.isGroup && !isCreator){
	  //m.reply(`Limit kamu kurang/sudah tidak cukup 🥺\n\n🇮🇩 Join Group Agar bisa menggunakan bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV\n\n🇺🇲 Please join the group to use this bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV`)
	  return
	}
           if (db.data.users[m.sender].limit < 20 && !m.isGroup && !isCreator) {
               reply(`Limit kamu kurang sudah tidak cukup 🥺\n\n🇮🇩 Join Group Agar bisa menggunakan bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV\n\n🇺🇲 Please join the group to use this bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV`)
               return
           }*/

      if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
         const jawab_salam = [
            'Wa\'alaikumusalam',
            'Wa\'alaikumusalam wb',
            'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
         ]
         return reply(randomArr(jawab_salam))
      }

      let cron = require('node-cron')
      cron.schedule('00 23 * * *', () => {
         let user = Object.keys(global.db.data.users)
         for (let jid of user) {
            let limitUser = db.data.users[jid].premium ? global.limitawal.premium : global.limitawal.free
            global.db.data.users[jid].limit = limitUser
         }
         console.log('Reseted Limit')
      }, {
         scheduled: true,
         timezone: "Asia/Jakarta"
      })

      if (!m.key.fromMe && isCmd && db.data.users[m.sender].banned) {
         if (!(new Date - db.data.users[m.sender].lastbanned < 3600000)) {
            let user = db.data.users[m.sender]
            user.lastbanned = new Date * 1
            await alpha.sendMessage(m.chat, {
               text: lang.getBan(ownernomer)
            }, {
               quoted: m
            })
         }
         return
      }

      // Public & Self
      if (!alpha.public) {
         if (!m.key.fromMe && !isCreator) return
      }

      // Push Message To Console
      if (m.message) {
         console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(isCmd ? body : m.mtype || body.slice(0, 20))) + '\n' + chalk.magenta('=> from'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> in'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
      }

      const sendFileFromUrl = async (from, url, caption, mek, men) => {
         let mime = '';
         let res = await axios.head(url)
         mime = res.headers['content-type']
         if (mime.split("/")[1] === "gif") {
            return alpha.sendMessage(from, {
               video: await getBuffer(url),
               caption: caption,
               gifPlayback: true,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         let type = mime.split("/")[0] + "Message"
         if (mime === "application/pdf") {
            return alpha.sendMessage(m.chat, {
               document: await getBuffer(url),
               mimetype: 'application/pdf',
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "image") {
            return alpha.sendMessage(m.chat, {
               image: await getBuffer(url),
               caption: caption,
               mentions: men ? men : []
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "video") {
            return alpha.sendMessage(m.chat, {
               video: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'video/mp4'
            }, {
               quoted: m
            })
         }
         if (mime.split("/")[0] === "audio") {
            return alpha.sendMessage(m.chat, {
               audio: await getBuffer(url),
               caption: caption,
               mentions: men ? men : [],
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
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

      if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
         kuis = true
         jawaban = kuismath[m.sender.split('@')[0]][0]
         hadiah = kuismath[m.sender.split('@')[0]][1]
         if (budy.toLowerCase() == jawaban) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.math medium',
               buttonText: {
                  displayText: 'Kuis Math'
               },
               type: 1
            }], ` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+${hadiah} XP`, `© ${ownername}`, m)
            db.data.users[m.sender].exp += hadiah
            delete kuismath[m.sender.split('@')[0]]
         }
         else reply(lang.JwbErr())
      }


      if (('family100' + m.chat in _family100) && !isCmd) {
         kuis = true
         let room = _family100['family100' + m.chat]
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
         alpha.sendTextWithMentions(m.chat, caption, m)
            .then(mes => {
               return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
         if (isWin || isSurender) delete _family100['family100' + m.chat]
      }
      if (tebakgambar[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakgambar[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakgambar',
                  buttonText: {
                     displayText: lang.TbGam()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbGam(), tebakgambar[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakgambar[m.chat][3])
               delete tebakgambar[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tega', 'Hint', '.ytega', 'Nyerah', m)
         }
      }

      if (tebakkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkata',
                  buttonText: {
                     displayText: lang.TbKa()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKa(), tebakkata[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakkata[m.chat][3])
               delete tebakkata[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.teka', 'Hint', '.yteka', 'Nyerah', m)
         }
      }

      if (tebakbendera[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
            jawaban = json.name.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakbendera[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakbendera',
                  buttonText: {
                     displayText: lang.TbBe()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbBe(), tebakbendera[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakbendera[m.chat][3])
               delete tebakbendera[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tebe', 'Hint', '.ytebe', 'Nyerah', m)
         }
      }

      if (caklontong[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == caklontong[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += caklontong[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.caklontong',
                  buttonText: {
                     displayText: lang.TbCak()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbCak(), caklontong[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(caklontong[m.chat][3])
               delete caklontong[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.telo', 'Hint', '.ytelo', 'Nyerah', m)
         }
      }

      if (susunkata[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == susunkata[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += susunkata[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.susunkata',
                  buttonText: {
                     displayText: lang.TbSu()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSu(), susunkata[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(susunkata[m.chat][3])
               delete susunkata[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tesuka', 'Hint', '.ytesuka', 'Nyerah', m)
         }
      }

      if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkalimat[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkalimat',
                  buttonText: {
                     displayText: lang.TbAt()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbAt(), tebakkalimat[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakkalimat[m.chat][3])
               delete tebakkalimat[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tekatu', 'Hint', '.ytekatu', 'Nyerah', m)
         }
      }

      if (siapaaku[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == siapaaku[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += siapaaku[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaksiapa',
                  buttonText: {
                     displayText: lang.TbSi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbSi(), siapaaku[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(siapaaku[m.chat][3])
               delete siapaaku[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tesi', 'Hint', '.ytesi', 'Nyerah', m)
         }
      }

      if (tekateki[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tekateki[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tekateki[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tekateki',
                  buttonText: {
                     displayText: lang.Tbte()
                  },
                  type: 1
               }], lang.JwbTrue(lang.Tbte(), tekateki[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tekateki[m.chat][3])
               delete tekateki[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tete', 'Hint', '.ytete', 'Nyerah', m)
         }
      }
      if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
            jawaban = json.title.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkabupaten[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkabupaten',
                  buttonText: {
                     displayText: lang.TbEn()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbEn(), tebakkabupaten[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakkabupaten[m.chat][3])
               delete tebakkabupaten[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.tekabu', 'Hint', '.ytekabu', 'Nyerah', m)
         }
      }
      if (tebakkimia[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
            jawaban = json.unsur.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebakkimia[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebakkimia',
                  buttonText: {
                     displayText: lang.TbKi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKi(), tebakkimia[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebakkimia[m.chat][3])
               delete tebakkimia[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.teki', 'Hint', '.yteki', 'Nyerah', m)
         }
      }

      if (tebaklirik[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaklirik[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaklirik',
                  buttonText: {
                     displayText: lang.TbLi()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbLi(), tebaklirik[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebaklirik[m.chat][3])
               delete tebaklirik[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.teli', 'Hint', '.yteli', 'Nyerah', m)
         }
      }

      if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
         if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
            let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
            jawaban = json.jawaban.toLowerCase().trim()
            if (m.text.toLowerCase() == jawaban) {
               global.db.data.users[m.sender].exp += tebaktebakan[m.chat][2]
               await alpha.sendButtonText(m.chat, [{
                  buttonId: '.tebaktebakan',
                  buttonText: {
                     displayText: lang.TbKan()
                  },
                  type: 1
               }], lang.JwbTrue(lang.TbKan(), tebaktebakan[m.chat][2]), `© ${ownername}`, m)
               clearTimeout(tebaktebakan[m.chat][3])
               delete tebaktebakan[m.chat]
            }
            else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
               reply(`_Ya, Dikit Lagi!_`)
            else alpha.send2ButMes(m.chat, lang.JwbErr(), '© ' + ownername, '.teteb', 'Hint', '.yteteb', 'Nyerah', m)
         }
      }

      await alpha.sendPresenceUpdate('available', m.chat)
      // Auto Read
      if (m.message && global.autoread) {
         const readkey = {
            remoteJid: m.chat,
            id: m.key.id,
            participant: m.isGroup ? m.key.participant : undefined
         }
         await alpha.readMessages([readkey]);
      }
      //antispam
      const msgFilter = require('./lib/antispam');
      if (!isCreator && !m.key.fromMe && isCmd && msgFilter.isFiltered(m.sender)) {
         console.log(chalk.black(chalk.bgWhite('[ SPAM ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
         reply('Don\'t spam, Cooldown 3 seconds!!!')
         return
      }
      if (isCmd) {
         msgFilter.addFilter(m.sender)
      }


      /*if (m.isGroup && db.data.chats[m.chat].expired != 0) {
          let chats = db.data.chats[m.chat]
          if (!chats.expired) return !0
          if (+new Date() > chats.expired) {
              db.data.chats[m.chat].sewa = false
              db.data.chats[m.chat].expired = 0
              await alpha.sendMessage(m.chat, {
                  text: `Waktu sewa telah habis 👋 silahkan hubungi owner untuk perpanjangan sewa`
              }, {
                  quoted: fkontak
              })
              await sendContact(alpha, m.chat, global.owner, fkontak, {})
              setTimeout(() => {
                  alpha.groupLeave(m.chat)
              }, 5000)
          }
      }*/

      //sewabot
      _sewa.expiredCheck(alpha, sewa)

      // Auto Block +212
      if (m.sender.startsWith('212') && global.autoblok212) {
         return alpha.updateBlockStatus(m.sender, 'block')
      }

      if (!m.isGroup && !m.key.fromMe && m.message && !(new Date - db.data.users[m.sender].pc < 86400000)) {
         let user = db.data.users[m.sender]
         alpha.sendButMessage(m.chat, `${user.banned ? lang.getBan() : lang.firstChat(salam, pushname, botname)}`, `© ${ownername}`, [{
            buttonId: `${user.banned ? '.owner' : '.menu'}`,
            buttonText: {
               displayText: `${user.banned ? '👤 Owner Bot' : '🪀 Commands 🪀'}`
            },
            type: 1
         }], {
            quoted: fkontak
         })
         user.pc = new Date * 1
      }

      // auto set bio
      if (global.autobio) {
         let settingstatus = 0;
         if (new Date() * 1 - settingstatus > 1000) {
            await alpha.setStatus(`I'm ${botname} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${alpha.public ? "Public Mode" : "Self Mode"} | ${Object.keys(global.db.data.users).length} Users`)
            settingstatus = new Date() * 1
         }
      }

      if (!m.isGroup && !m.key.fromMe && db.data.settings[botNumber].autorespond && !isCmd) {
         simi = await fetchJson(`https://api.simsimi.net/v2/?lc=id&cf=false&text=${m.text}`)
         reply('_' + simi.success + '_')
      }

      if (!m.isGroup && db.data.users[m.sender].premium) {
         if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
            reply("Maaf waktu untuk status premium anda telah berakhir\nChat owner untuk upgrade premium lagi").then(() => {
               global.db.data.users[m.sender].premium = false
               global.db.data.users[m.sender].limit = global.limitawal.free
               sendContact(alpha, m.chat, global.owner, m)
            })
         }
      }
      // Respon Cmd with media
      if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.cmd)) {
         let hash = db.data.cmd[m.msg.fileSha256.toString('base64')]
         let {
            q,
            mentionedJid
         } = hash
         let messages = await generateWAMessage(m.chat, {
            text: q,
            mentions: mentionedJid
         }, {
            userJid: alpha.user.id,
            quoted: m.quoted && m.quoted.fakeObj
         })
         messages.key.fromMe = areJidsSameUser(m.sender, alpha.user.id)
         messages.key.id = m.key.id
         messages.pushName = m.pushName
         if (m.isGroup) messages.participant = m.sender
         let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
         }
         alpha.ev.emit('messages.upsert', msg)
      }

      /////
      var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
      let datares = db.data.RSticker
      for (let zeeone of datares) {
         if (!bodynyaui && budy === zeeone.key && zeeone.type === 'stiker') {
            alpha.sendImageAsSticker(m.chat, zeeone.url, m, {
               packname: global.packname,
               author: global.author
            })
         }
      }
      let datares2 = db.data.RVn
      for (let zeeonee of datares2) {
         if (!bodynyaui && budy === zeeonee.key && zeeonee.type === 'audio') {
            alpha.sendAudio(m.chat, zeeonee.url, m, true)
         }
      }
      let datares3 = db.data.RImage
      for (let zeeoneee of datares3) {
         if (!bodynyaui && budy === zeeoneee.key && zeeoneee.type === 'image') {
            alpha.sendImage(m.chat, zeeoneee.url, '', m)
         }
      }
      let datares4 = db.data.RVideo
      for (let zeeonew of datares4) {
         if (!bodynyaui && budy === zeeonew.key && zeeonew.type === 'video') {
            alpha.sendVideo(m.chat, zeeonew.url, false, "", m)
         }
      }

      // Storeu
        if (m.isGroup && isAlreadyResponList(m.chat, body, db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, body, db_respon_list)
            if (get_data_respon.isImage === false) {
                alpha.sendMessage(m.chat, { text: sendResponList(m.chat, body, db_respon_list) }, {
                    quoted: m
                })
            } else {
                alpha.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
 
      /*try {
         let data_storee = db.data.store
         for (let data_store of data_storee) {
            var bodynya = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
            if (m.isGroup && m.message && data_store.id === m.chat && bodynya.includes(data_store.key)) {
               //var get_data_respon = getDataResponList(from, body, db_respon_list)
               if (data_store.isImage === false) {
                  //alpha.send2ButMes(m.chat, data_store.response, `© ${ownername}`, `.paygc`, `🛍️ Payment`, `.owner`, `Owner 🌟`, fkontak)
                  alpha.sendMessage(m.chat, {
                     text: data_store.response
                  }, {
                     quoted: m
                  })
               }
               else {
                  /*const buttonMessagei = {
    image: await getBuffer(data_store.image_url),
    caption: data_store.response,
    footer: `© ${ownername}`,
    buttons: [{buttonId: '.paygc',buttonText:{displayText: '🛍️ Payment'},type: 1}],
    headerType: 'IMAGE',
}

alpha.sendMessage(m.chat, buttonMessagei, {quoted: m}//
                  alpha.sendMessage(m.chat, {
                     image: await getBuffer(data_store.image_url),
                     caption: data_store.response
                  }, {
                     quoted: m
                  })
               }
            }
         }
      }
      catch (e) {
         console.log(e)
      }*/


      // Mute Chat
      if (m.isGroup && isMute && !isGroupAdmins && !isCreator) {
         return
      }


      switch (command) {
         case 'absen':
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let absen = db.data.absen[from][1]
            const wasVote = absen.includes(m.sender)
            if (wasVote) return reply(lang.DahAbsen())
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
            await alpha.send2ButMes(m.chat, caption, `© ${ownername}`, `.absen`, `Absen`, `.cekabsen`, `Check Absen`, m, absen)

            //alpha.sendTextWithMentions(m.chat, caption, m)
            break
         case 'cekabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

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
            alpha.send2ButMes(m.chat, captionn, `© ${ownername}`, `.absen`, `Absen`, `.deleteabsen`, `Delete Absen`, m, absenn)

            //alpha.sendTextWithMentions(m.chat, captionn, m)
         }
         break

         case 'delabsen':
         case 'deleteabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return alpha.send1ButMes(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            delete db.data.absen[from]
            reply(lang.DelAbsen())
         }
         break
         case 'absenstart':
         case 'mulaiabsen': {
            if (m.isGroup) {
               if (!(isGroupAdmins || isCreator)) return reply(lang.adminOnly())
            }
            db.data.absen = db.data.absen || {}
            if (from in db.data.absen) return alpha.send2ButMes(m.chat, lang.adaAbsen(), `© ${ownername}`, `.cekabsen`, `Check Absen`, `.deleteabsen`, `Delete Absen`, m)

            db.data.absen[from] = [
               await alpha.send1ButMes(m.chat, lang.SAbsen(), `© ${ownername}`, `.absen`, `Absen`, m),

               [], q ? q : ''
            ]
         }
         break
         //Database
         case 'setcmd': {
            db.data.cmd = db.data.cmd || {}
            if (!m.quoted) return reply(lang.SetCmd(prefix, command))
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            if (!text) return reply(lang.CmdApa())
            let sticker = db.data.cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
            sticker[hash] = {
               q,
               mentionedJid: m.mentionedJid,
               creator: m.sender,
               at: +new Date,
               locked: false,
            }
            reply(`Done!`)
         }
         break
         case 'deletecmd':
         case 'delcmd': {
            let hash = m.quoted.fileSha256.toString('base64')
            if (!hash) return reply(lang.HashCmd())
            let sticker = db.data.cmd
            if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd())
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
            if (!isCreator) return reply(lang.ownerOnly())
            if (!m.quoted) return reply(lang.LockCmd())
            if (!m.quoted.fileSha256) return reply(lang.HashCmd())
            let sticker = db.data.cmd
            let hash = m.quoted.fileSha256.toString('base64')
            if (!(hash in sticker)) return reply(lang.NoCmd())
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
            let seplit = Object.entries(msgs).map(([nama, isi]) => {
               return {
                  nama,
                  ...isi
               }
            })
            let teks = '「 LIST DATABASE 」\n\n'
            for (let i of seplit) {
               teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
            }
            reply(teks)
         }
         break
         case 'delmsg':
         case 'deletemsg': {
            let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
            if (!(text.toLowerCase() in msgs)) return reply(lang.NoInMsg(text))
            delete msgs[text.toLowerCase()]
            fs.writeFileSync('./database/database.json', JSON.stringify(msgs))
            reply(lang.DelMsg(text))
         }
         break
         case 'autoblok':
         case 'autoblok212': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoblok === true) return reply(lang.OnBef())
               global.autoblok = true
               reply(lang.OkOn(command))
            }
            else if (args[0] === "off") {
               if (global.autoblok === false) return reply(lang.OffYaBef())
               global.autoblok = false
               reply(lang.OffBef('Autoblok'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Autoblok', `© ${ownername}`, [{
                  buttonId: '.autoblok on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoblok off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
         }
         break
         case 'autobio': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autobio === true) return reply(lang.OnBef())
               global.autobio = true
               reply(lang.OkOn(command))
            }
            else if (args[0] === "off") {
               if (global.autobio === false) return reply(lang.OffYaBef())
               global.autobio = false
               reply(lang.OffBef('Autobio'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Autobio', `© ${ownername}`, [{
                  buttonId: '.autobio on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autobio off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
         }
         break
         case 'anticall': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.anticall === true) return reply(lang.OnBef())
               global.anticall = true
               reply(lang.OkOn(command))
            }
            else if (args[0] === "off") {
               if (global.anticall === false) return reply(lang.OffYaBef())
               global.anticall = false
               reply(lang.OffBef('Anticall'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Anticall', `© ${ownername}`, [{
                  buttonId: '.anticall on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.anticall off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
         }
         break
         case 'autorespond':
         case 'autorespon': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.settings[botNumber].autorespond) return reply(lang.OnBef())
               db.data.settings[botNumber].autorespond = true
               reply(lang.OkOn(command))
            }
            else if (args[0] === "off") {
               if (!db.data.settings[botNumber].autorespond) return reply(lang.OffBef())
               db.data.settings[botNumber].autorespond = false
               reply(lang.OffBef('Auto Respond'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Auto Respond', `© ${ownername}`, [{
                  buttonId: '.autorespond on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autorespond off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
         }
         break
         case 'autoread': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (global.autoread) return reply(lang.OnBef())
               global.autoread = true
               reply(lang.OkOn(command))
            }
            else if (args[0] === "off") {
               if (!global.autoread) return reply(lang.OffBef())
               global.autoread = false
               reply(lang.OffBef('Auto Read'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Auto Read', `© ${ownername}`, [{
                  buttonId: '.autoread on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.autoread off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
         }
         break
         case 'unbanchats':
         case 'unbanchat':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!db.data.chats[m.chat].mute) return reply(lang.NoMute())
            db.data.chats[m.chat].mute = false
            reply(lang.OkUnBanC())
            break
         case 'banchat':
         case 'banchats':
         case 'mute':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (isMute) return reply(lang.OnBef())
               mute.push(m.chat)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkMute())
            }
            else if (args[0] === "off") {
               if (!isMute) return reply(lang.OffYaBef())
               let anu = mute.indexOf(m.chat)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
               reply(lang.OkUnMute())
            }
            else {
               alpha.sendButMessage(from, 'Mode Mute', `© ${ownername}`, [{
                  buttonId: '.mute on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.mute off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'nsfw':
            if (!isGroupAdmins && !isGroupOwner && !m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (args[0] === "on") {
               if (db.data.chats[m.chat].nsfw) return reply(lang.OnBef())
               db.data.chats[m.chat].nsfw = true
               reply(lang.OkOn('Nsfw'))
            }
            else if (args[0] === "off") {
               if (!db.data.chats[m.chat].nsfw) return reply(lang.OffYaBef())
               db.data.chats[m.chat].nsfw = false
               reply(lang.OffBef('Nsfw'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Nfsw', `© ${ownername}`, [{
                  buttonId: '.nsfw on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.nsfw off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'antilink':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiLink) return reply(lang.OnBef())
               antilink.push(m.chat)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OkOn('Antilink'))
            }
            else if (args[0] === "off") {
               if (!isAntiLink) return reply(lang.OffYaBef())
               let anu = antilink.indexOf(m.chat)
               antilink.splice(anu, 1)
               fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
               reply(lang.OffBef('Antilink'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{
                  buttonId: '.antilink on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antilink off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'antiwame':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (isAntiwame) return reply(lang.OnBef())
               antiwame.push(m.chat)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OkOn('antiwame'))
            }
            else if (args[0] === "off") {
               if (!isAntiwame) return reply(lang.OffYaBef())
               let anu = antiwame.indexOf(m.chat)
               antiwame.splice(anu, 1)
               fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
               reply(lang.OffBef('antiwame'))
            }
            else {
               alpha.sendButMessage(m.chat, 'Mode Antilink', `© ${ownername}`, [{
                  buttonId: '.antiwame on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antiwame off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'detectpromote':
         case 'promotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (db.data.chats[m.chat].promote) return reply(lang.OnBef())
               db.data.chats[m.chat].promote = true
               reply(lang.OkOn('Detect Promote'))
            }
            else if (args[0] === "off") {
               if (!db.data.chats[m.chat].promote) return reply(lang.OffYaBef())
               db.data.chats[m.chat].promote = false
               reply(lang.OffBef('Detect Promote'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                  buttonId: '.detectpromote on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.detectpromote off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'detectdemote':
         case 'demotedetect':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (args[0] === "on") {
               if (db.data.chats[m.chat].demote) return reply(lang.OnBef())
               db.data.chats[m.chat].demote = true
               reply(lang.OkOn('Detect Demote'))
            }
            else if (args[0] === "off") {
               if (!db.data.chats[m.chat].demote) return reply(lang.OffYaBef())
               db.data.chats[m.chat].demote = false
               reply(lang.OffBef('Detect Demote'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Detect Promote', `© ${ownername}`, [{
                  buttonId: '.detectdemote on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.detectdemote off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'updatewelcome':
         case 'setwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            db.data.chats[m.chat].setWelcome = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.cekwelcome',
               buttonText: {
                  displayText: 'Check Welcome'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'updatepromote':
         case 'setpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Promote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            db.data.chats[m.chat].setPromote = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.cekpromote',
               buttonText: {
                  displayText: 'Check Promote'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'updatedemote':
         case 'setdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Demote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            db.data.chats[m.chat].setDemote = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.cekdemote',
               buttonText: {
                  displayText: 'Check Demote'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'updateproses':
         case 'setproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Proses @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            db.data.chats[m.chat].setProses = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.cekpromote',
               buttonText: {
                  displayText: 'Check Proses'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'updatedone':
         case 'setdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Done @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`)
            db.data.chats[m.chat].setDone = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.cekdone',
               buttonText: {
                  displayText: 'Check Done'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'cekproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`
            textwel = (db.data.chats[m.chat].setProses || defaultwel)
            reply('Text proses in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`
            textwel = (db.data.chats[m.chat].setDone || defaultwel)
            reply('Text done in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'deldone': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setDone = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekdone',
               buttonText: {
                  displayText: 'Check Done'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'delproses': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setProses = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekproses',
               buttonText: {
                  displayText: 'Check Proses'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'delpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setPromote = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekpromote',
               buttonText: {
                  displayText: 'Check Promote'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'deldemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setDemote = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekdemote',
               buttonText: {
                  displayText: 'Check Demote'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'cekpromote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `@user Promote From @group`
            textwel = (db.data.chats[m.chat].setPromote || defaultwel)
            reply('Text promote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekdemote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `@user Demote From @group`
            textwel = (db.data.chats[m.chat].setDemote || defaultwel)
            reply('Text demote in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `*Welcome to @group*\n\n📛 : _@user_\n🔢 : _@number_\n💌 : _@bio_\n🏅 : _@members Members_\n📆 : _@day, @date_\n⏰ : _@time Asia/Jakarta_`
            textwel = (db.data.chats[m.chat].setWelcome || defaultwel)
            reply('Text welcome in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'cekleft':
         case 'cekgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            defaultwel = `◪ Goodbye @user\n◪ Leave from group: \n@group\n\n└─ ❏ Nomor: @number\nGoodBye~~`
            textwel = (db.data.chats[m.chat].setLeave || defaultwel)
            reply('Text googbye in group ' + groupName + `\n\n` + textwel)
         }
         break
         case 'delgoodbye': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setLeave = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekleft',
               buttonText: {
                  displayText: 'Check Welcome'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'delwelcome': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            db.data.chats[m.chat].setWelcome = ''
            alpha.sendButMessage(m.chat, lang.ok(), `© ${ownername}`, [{
               buttonId: '.cekwelcome',
               buttonText: {
                  displayText: 'Check Welcome'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'updategoodbye':
         case 'setgoodbye':
         case 'setleft':
         case 'setleave': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`)
            db.data.chats[m.chat].setLeave = text
            alpha.sendButMessage(m.chat, lang.ok() + '\n' + text, `© ${ownername}`, [{
               buttonId: '.cekleft',
               buttonText: {
                  displayText: 'Check Welcome'
               },
               type: 1
            }], {
               quoted: fgif
            })

         }
         break
         case'antidelete':{
			if (!isCreator) return reply(lang.ownerOnly())
           if (args[0] === "on") {
               if (global.antidelete) return reply(lang.OnBef())
                global.antidelete = true
                reply(lang.OkOn('Anti delete'))
            } else if (args[0] === "off") {
               if (!global.antidelete) return reply(lang.OffYaBef())
                global.antidelete = false
                reply(lang.OffBef('Anti delete'))
            } else {
alpha.sendButMessage(from, 'Mode Anti Delete', `© ${ownername}`, [{
                  buttonId: '.antidelete on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antidelete off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
               }
        }
            break
			case'antionce': case 'antiviewonce':{
			if (!isCreator) return reply(lang.ownerOnly())
           if (args[0] === "on") {
               if (global.antiviewonce) return m.reply(`Udah aktif`)
                global.antiviewonce = true
reply(lang.OkOn('Anti view once'))
            } else if (args[0] === "off") {
               if (!global.antiviewonce) return reply(lang.OffYaBef())
               global.antiviewonce = false
                reply(lang.OffBef('Anti view once'))
            } else {
alpha.sendButMessage(from, 'Mode Anti ViewOnce', `© ${ownername}`, [{
                  buttonId: '.antionce on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.antionce off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
           }
			}
            break
         case 'welcome':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
                if (isWelcome) return reply(lang.OnBef())
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply(lang.OkOn('Welcome'))
            }
            else if (args[0] === "off") {
               if (!isWelcome) return reply(lang.OffYaBef())
               let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
               reply(lang.OffBef('Welcome'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Welcome Msg', `© ${ownername}`, [{
                  buttonId: '.welcome on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.welcome off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'goodbye':
         case 'left':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (args[0] === "on") {
                if (isLeft) return reply(lang.OnBef())
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply(lang.OkOn('Goodbye'))
            }
            else if (args[0] === "off") {
                if (!isLeft) return reply(lang.OffYaBef())
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply(lang.OffBef('Goodbye'))
            }
            else {
               alpha.sendButMessage(from, 'Mode Goodbye Msg', `© ${ownername}`, [{
                  buttonId: '.left on',
                  buttonText: {
                     displayText: 'ON'
                  },
                  type: 1
               }, {
                  buttonId: '.left off',
                  buttonText: {
                     displayText: 'OFF'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'linkgroup':
         case 'linkgrup':
         case 'linkgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let response = await alpha.groupInviteCode(m.chat)
            alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, {
               detectLink: true
            })
         }
         break
         case 'd':
         case 'delete':
         case 'del': {
            if (!m.isGroup) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               if (!isBaileys) return reply(lang.NoMsgBot())
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            }
            else {
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
               if (!isBotAdmins) return reply(lang.botNotAdmin())
               if (!m.quoted) throw false
               let {
                  chat,
                  fromMe,
                  id,
                  isBaileys
               } = m.quoted
               alpha.sendMessage(m.chat, {
                  delete: {
                     remoteJid: m.chat,
                     id: m.quoted.id,
                     participant: m.quoted.sender
                  }
               })
            }
         }
         break
         case 'unreg':
         case 'unregister': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (!text) return alpha.send1ButMes(m.chat, `Example : ${prefix + command} 8kapqlPnapQp`, `© ${ownername}`, `.ceksn`, 'Check SN', m)
            if (db.data.users[m.sender].serialNumber !== args[0]) return alpha.send1ButMes(m.chat, lang.Noseri(), `© ${ownername}`, `ceksn`, 'Check SN', m)
            db.data.users[m.sender].registered = false
            reply(lang.NoseriOk())
         }
         break
         case 'ceksn':
         case 'serialnumber': {
            if (!db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            alpha.send1ButMes(m.chat, 'Serial Number 👇\n\n' + db.data.users[m.sender].serialNumber, `© ${ownername}`, `.unreg ` + db.data.users[m.sender].serialNumber, 'Unreg Now', m)
         }
         break
         case 'daftar':
         case 'regis':
         case 'register': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            //if(namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (m.isGroup) {
               await reply('🇮🇩 _Bot telah mengirimkan list pendaftaran ke private chat, silahkan selesaikan agar dapat menggunakan fitur bot_\n\n🇺🇸 _The bot has sent a registration list to the private chat, please complete it so you can use the bot feature_')
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
            }
            else {
               if (!umurx) return sendListAge(alpha, m.sender, pushname, {
                  quoted: m
               })
               if (isNaN(umurx)) return reply(lang.UmurReg())
               if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
               if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
               genderx = arg.split('|')[2]
               if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(m.chat, pushname, text, {
                  quoted: m
               })
               langx = arg.split('|')[3]
               if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
                  quoted: m
               })
               if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
                  quoted: m
               })
               const crypto = require('crypto');
               let user = db.data.users[m.sender]
               user.registered = true
               user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
               user.age = umurx
               user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
               user.language = langx
               user.regTime = +new Date
               user.serialNumber = crypto.randomBytes(10).toString('hex');
               reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
               await sleep(3000)
               if (langx == 'id') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               }
               else if (langx == 'en') {
                  await sendButImage(alpha, m.chat, m.sender, [{
                     buttonId: '.menu',
                     buttonText: {
                        displayText: '✅ Command'
                     },
                     type: 1
                  }, {
                     buttonId: '.profile',
                     buttonText: {
                        displayText: 'Profile 👤'
                     },
                     type: 1
                  }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                     quoted: m
                  })
               }
               else sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Dominio'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Perfil 👤'
                  },
                  type: 1
               }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })

            }
         }
         break
         case 'kzowjsijzpappaka': {
            if (db.data.users[m.sender].registered) return reply(lang.DoneReg())
            arg = args.join(' ')
            namax = arg.split('|')[0]
            if (namax.length > 30) return reply(lang.NamaReg())
            umurx = arg.split('|')[1]
            if (!umurx) return sendListAge(alpha, m.sender, pushname, {
               quoted: m
            })
            if (isNaN(umurx)) return reply(lang.UmurReg())
            if (parseInt(umurx) > 99) return reply(lang.UmurXReg())
            if (parseInt(umurx) < 5) return reply('Bocil kintil, Mending nyusu sana ama mak lu')
            genderx = arg.split('|')[2]
            if (!genderx) return sendListGender(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['male', 'female', 'Male', 'Female', 'cewe', 'cowo', 'pria', 'wanita', 'Cowo', 'Cewe', 'Pria', 'Wanita'].includes(genderx)) return sendListGender(alpha, m.chat, pushname, text, {
               quoted: m
            })
            langx = arg.split('|')[3]
            if (!langx) return sendListLang(alpha, m.sender, pushname, text, {
               quoted: m
            })
            if (!['id', 'en', 'sp'].includes(langx)) return sendListLang(alpha, m.chat, pushname, text, {
               quoted: m
            })
            const crypto = require('crypto');
            let user = db.data.users[m.sender]
            user.registered = true
            user.name = namax.slice(0, 1).toUpperCase() + namax.slice(1)
            user.age = umurx
            user.gender = genderx.slice(0, 1).toUpperCase() + genderx.slice(1)
            user.language = langx
            user.regTime = +new Date
            user.serialNumber = crypto.randomBytes(10).toString('hex');
            reply('🇮🇩 _Data kamu sedang di kumpulkan, tunggu sebentar..._\n\n🇺🇸 _Your data is being collected, wait a moment..._')
            await sleep(3000)
            if (langx == 'id') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], indonesia.RegReg(crypto.randomBytes(10).toString('hex'), tanggal(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            }
            else if (langx == 'en') {
               await sendButImage(alpha, m.chat, m.sender, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '✅ Command'
                  },
                  type: 1
               }, {
                  buttonId: '.profile',
                  buttonText: {
                     displayText: 'Profile 👤'
                  },
                  type: 1
               }], english.RegReg(crypto.randomBytes(10).toString('hex'), tanggal_(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
                  quoted: m
               })
            }
            else sendButImage(alpha, m.chat, m.sender, [{
               buttonId: '.menu',
               buttonText: {
                  displayText: '✅ Dominio'
               },
               type: 1
            }, {
               buttonId: '.profile',
               buttonText: {
                  displayText: 'Perfil 👤'
               },
               type: 1
            }], spanyol.RegReg(crypto.randomBytes(10).toString('hex'), tanggal__(new Date()), namax.slice(0, 1).toUpperCase() + namax.slice(1), umurx, genderx.slice(0, 1).toUpperCase() + genderx.slice(1), m.sender.split('@')[0], prefix, prefix, Object.keys(global.db.data.users).length), `© ${ownername}`, [m.sender], {
               quoted: m
            })

         }
         break
         case 'procfile':
         case 'profile': {
            try {
               ppnu = await alpha.profilePictureUrl(m.sender, 'image')
            }
            catch {
               ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
            }

            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }

            let about = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || ''
            let {
               name,
               pasangan,
               limit,
               exp,
               bank,
               lastclaim,
               premiumDate,
               premium,
               registered,
               regTime,
               age,
               level,
               role
            } = global.db.data.users[m.sender]
            let now = new Date() * 1
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let username = pushname
            let math = max - xp
            if (db.data.users[m.sender].language == 'id') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: indonesia.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime, premium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            }
            else if (db.data.users[m.sender].language == 'en') {
               alpha.sendMessage(m.chat, {
                  image: {
                     url: ppnu
                  },
                  caption: english.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal_, regTime, premium, msToDate, premiumDate, now, lastclaim),
                  mentions: [m.sender]
               }, {
                  quoted: m
               })
            }
            else alpha.sendMessage(m.chat, {
               image: {
                  url: ppnu
               },
               caption: spanyol.profile(username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal__, regTime, premium, msToDate, premiumDate, now, lastclaim),
               mentions: [m.sender]
            }, {
               quoted: m
            })
         }
         break
         case 'setthumb':
         case 'setthumbnail': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 100000) return reply('Maximum file size 100kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(thumbnail, delb)
            reply(lang.ok())
         }
         break
         case 'setdonasi':
         case 'setdonate': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.NoToImg(prefix, command).replace('sticker', 'image'))
            if ((quoted.msg || quoted).fileLength.low > 200000) return reply('Maximum file size 200kb!')
            let delb = await alpha.downloadAndSaveMediaMessage(quoted)
            await fs.writeFileSync(donasi, delb)
            reply(lang.ok())
         }
         break
         case 'toimage':
         case 'toimg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToImg(prefix, command))
            if (!/webp/.test(mime)) return reply(lang.NoToImg(prefix, command))
            reply(lang.wait())
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(lang.ToimgErr())
               let buffer = fs.readFileSync(ran)
               alpha.sendMessage(m.chat, {
                  image: buffer
               }, {
                  quoted: m
               })
               fs.unlinkSync(ran)
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'pinterest': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            anu = await pinterest(text)
            result = anu[Math.floor(Math.random(), anu.length)]
            let gam = await getBuffer(result)
            var but = [{
               "urlButton": {
                  "displayText": "Media Url",
                  "url": `${result}`
               }
            }]

            await alpha.sendMessage(m.chat, {
                  image: gam,
                  caption: text
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'wallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wallpaper(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'wikimedia': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            reply(lang.wait())
            wikimedia(text).then(async anu => {
                  result = anu[Math.floor(Math.random(), anu.length)]
                  let gam = await getBuffer(result.image[0])
                  await alpha.sendMessage(m.chat, {
                     image: gam,
                     caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
                  }, {
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'quotesanime':
         case 'quoteanime': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            quotesAnime().then(async anu => {
               gam = await getBuffer(picak + 'quotes anime')
               result = anu[Math.floor(Math.random(), anu.length)]
               await sendButLoc(alpha, m.chat, `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*`, '©' + ownername, gam, [{
                  buttonId: `.quotesanime`,
                  buttonText: {
                     displayText: 'Next Quotes'
                  },
                  type: 1
               }], {
                  userJid: m.chat,
                  quoted: m
               })
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'ping': {
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
               cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
               return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, {
               length
            }) => {
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
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
            reply(respon)
         }
         break
         case 'tes':
         case 'runtime':
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
         case 'owner':
         case 'creator': {
            sendContact(alpha, m.chat, global.owner, m)
         }
         break
         case 'rules': {
            let gam = await getBuffer(picak + 'Terms and Conditions')
            var but = [{
               "urlButton": {
                  "displayText": "Website",
                  "url": `${myweb}`
               }
            }]
            await alpha.sendMessage(m.chat, {
               image: gam,
               caption: lang.rules(prefix)
            }, {
               quoted: m
            })
         }
         break
         case 'setcaptionpay': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} Payment`)
            db.data.chats[m.chat].captionPay = text
            alpha.sendButMessage(m.chat, lang.ok() + ' ' + command + '\n\n' + text, `© ${ownername}`, [{
               buttonId: '.menu',
               buttonText: {
                  displayText: 'Menu'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'donasi':
         case 'donate': {
            await alpha.sendMessage(m.chat, {
               image: qris,
               caption: lang.tos(ownernomer)
            }, {
               quoted: m
            })
         }
         break

         //Random Anime
         case 'cry':
         case 'kill':
         case 'hug':
         case 'pat':
         case 'lick':
         case 'kiss':
         case 'bite':
         case 'yeet':
         case 'neko':
         case 'bully':
         case 'bonk':
         case 'wink':
         case 'poke':
         case 'nom':
         case 'slap':
         case 'smile':
         case 'wave':
         case 'awoo':
         case 'blush':
         case 'smug':
         case 'glomp':
         case 'happy':
         case 'dance':
         case 'cringe':
         case 'highfive':
         case 'shinobu':
         case 'megumin':
         case 'handhold': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/${command}`)
               .then(({
                  data
               }) => {
                  alpha.sendMediaAsSticker(m.chat, data.url, m, {
                     packname: global.packname,
                     author: global.author
                  })


               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'waifu':
         case 'loli': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  alpha.sendImage(m.chat, data.url, lang.ok(), m)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'sgif':
         case 'stikerin':
         case 's':
         case 'sticker':
         case 'stiker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            }
            else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            }
            else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'setppbot':
         case 'setpp': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(alpha.user.id, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break

         case 'setppgroup':
         case 'setppgrup':
         case 'setppgc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            await alpha.updateProfilePicture(m.chat, {
               url: media
            }).catch((err) => fs.unlinkSync(media))
            reply(lang.ok())
         }
         break
         case 'toaud':
         case 'toaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToAud(prefix, command))
            if (!quoted) return reply(lang.ToAud(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'tomp3': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (/document/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToMp3(prefix, command))
            if (!quoted) return reply(lang.ToMp3(prefix, command))
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'tovn':
         case 'toptt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(lang.ToVn())
            if (!quoted) return reply(lang.ToVn())
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            reply(lang.wait())
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {
               audio: audio,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'webtonsearch':
         case 'webtoon':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Bot whatsapp'))
            await reply(lang.wait())
            zee.Webtoons(q).then(async data => {
                  let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                  for (let i of data) {
                     txt += `*📫 Title :* ${i.judul}\n`
                     txt += `*👍🏻 Like :* ${i.like}\n`
                     txt += `*🤴🏻 Creator :* ${i.creator}\n`
                     txt += `*🎪 Genre :* ${i.genre}\n`
                     txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                  }
                  await reply(txt)
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break
         case 'drakor':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'fall in love'))
            await reply(lang.wait())
            zee.Drakor(`${text}`).then(async data => {
                  let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                  for (let i of data) {
                     txt += `*📫 Title :* ${i.judul}\n`
                     txt += `*📆 Years :* ${i.years}\n`
                     txt += `*🎥 Genre :* ${i.genre}\n`
                     txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                  }
                  await sendFileFromUrl(from, data[0].thumbnail, txt, m)
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break

         case 'character':
         case 'karakter': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'naruto'))
            await reply(lang.wait())
            zee.Character(q).then(async data => {
                  let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                  for (let i of data) {
                     txt += `*📫 Character :* ${i.character}\n`
                     txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                  }
                  let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                  var but = [{
                     "urlButton": {
                        "displayText": "Website",
                        "url": `${myweb}`
                     }
                  }]
                  await sendButLoc(alpha, m.chat, txt, '©' + ownername, gam, [{
                     buttonId: `.menu`,
                     buttonText: {
                        displayText: 'Menu'
                     },
                     type: 1
                  }], {
                     userJid: m.chat,
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'manga':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'naruto'))
            await reply(lang.wait())
            zee.Manga(`${text}`).then(async data => {
                  let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                  for (let i of data) {
                     txt += `*📫 Title :* ${i.judul}\n`
                     txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                  }
                  let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                  var but = [{
                     "urlButton": {
                        "displayText": "Website",
                        "url": `${myweb}`
                     }
                  }]
                  await sendButLoc(alpha, m.chat, txt, '©' + ownername, gam, [{
                     buttonId: `.menu`,
                     buttonText: {
                        displayText: 'Menu'
                     },
                     type: 1
                  }], {
                     userJid: m.chat,
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break
         case 'soundcloud': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
            if (!text.includes('soundcloud.com')) return reply(lang.KisahNabi(prefix, command, 'Url SoundCloud'))
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
               await sendButLoc(alpha, m.chat, txt, '©' + ownername, gam, [{
                  buttonId: `.menu`,
                  buttonText: {
                     displayText: 'Menu'
                  },
                  type: 1
               }], {
                  userJid: m.chat,
                  quoted: m
               })
            })
            alpha.sendMessage(from, {
               audio: {
                  url: data.medias[0].url
               },
               fileName: `${data.title}.mp3`,
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
         }
         db.data.users[m.sender].limit -= 1
         break

         case 'twtdl':
         case 'twt':
         case 'twitterdl':
         case 'twitter':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
            if (!text.includes('twitter.com')) return reply(lang.KisahNabi(prefix, command, 'url Twitter'))
            await reply(lang.wait())
            zee.Twitter(`${q}`).then(async data => {
                  let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                  txt += `*📫 Title :* ${data.title}\n`
                  txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                  txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                  txt += `*📚 Url :* ${data.url}`
                  sendFileFromUrl(from, data.medias[1].url, txt, m)
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break
         case 'infochat':
         case 'sider': {
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
         case 'q':
         case 'quoted': {
            if (!m.quoted) return reply(lang.LockCmd())
            let wokwol = await alpha.serializeM(await m.getQuotedObj())
            if (!wokwol.quoted) return reply(lang.NoQouted())
            await wokwol.quoted.copyNForward(m.chat, true)
         }
         break
         case 'listchat':
         case 'listpc': {
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
         case 'liston':
         case 'listonline': {
            if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly())
            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
            let online = [...Object.keys(store.presences[id]), botNumber]
            alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
               mentions: online
            })
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
         case 'listgroup':
         case 'listgc': {
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
         case 'setname':
         case 'setsubject': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            await alpha.groupUpdateSubject(m.chat, text).then((res) => reply(lang.ok())).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc':
         case 'setdesk':
         case 'setdeskripsi': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!text) return reply(lang.SetGcName(prefix, command))
            alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
            reply(lang.ok())
         }
         break

         case 'join': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.JoinGc())
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
            reply(lang.wait())
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await alpha.groupAcceptInvite(result).then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'tagall':
         case 'infoall':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
            for (let mem of participants) {
               tekss += `🏅 @${mem.id.split('@')[0]}\n`
            }
            tekss += `\n⋙ *${botname}* ⋘`
            alpha.sendMessage(from, {
               text: tekss,
               mentions: participants.map(a => a.id)
            }, {
               quoted: fkontak
            })
            break
         case 'h': case 'hidetag':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            alpha.sendMessage(from, {
               text: q ? q : '',
               mentions: participants.map(a => a.id)
            }, {
               quoted: fkontak
            })
            break
         case 'banuser':
         case 'banned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            if (typeof db.data.users[users] == 'undefined') reply('Pengguna tidak ada didalam data base')
            let banUser = db.data.users[users]
            banUser.banned = true
            banUser.BannedReason = text.split('|')[1] ? text.split('|')[1] : "I don't know"
            reply(lang.ok())
         }
         break
         case 'unbanuser':
         case 'unban':
         case 'unbanned': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            let banUser = db.data.users[users]
            banUser.banned = false
            reply(lang.ok())
         }
         break
         case 'block': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'block').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'unblock': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command))
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'kick': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauKick())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'add': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.MauAdd())
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'promote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakPm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'demote': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!m.quoted && !text) return reply(lang.NakDm())
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(lang.ok())).catch((err) => reply(lang.err()))
         }
         break
         case 'revoke':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            let link = await alpha.groupRevokeInvite(from)
            await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
         case 'out':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            reply('Bye 👋').then(async res => await alpha.groupLeave(m.chat))
            break
         case 'group':
         case 'grup':
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (args[0] === 'open') {
               await alpha.groupSettingUpdate(from, 'not_announcement')
               reply(lang.ok())
            }
            else if (args[0] === 'close') {
               await alpha.groupSettingUpdate(from, 'announcement')
               reply(lang.ok())
            }
            else {
               alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{
                  buttonId: '.group open',
                  buttonText: {
                     displayText: 'Open'
                  },
                  type: 1
               }, {
                  buttonId: '.group close',
                  buttonText: {
                     displayText: 'Close'
                  },
                  type: 1
               }], {
                  quoted: fgif
               })
            }
            break
         case 'afk': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let user = db.data.users[m.sender]
            user.afkTime = +new Date
            user.afkReason = text
            reply(lang.TbAfk(pushname, text))
         }
         break
         case 'family100': {
            const {
               family100
            } = require('@bochilteam/scraper')
            if ('family100' + m.chat in _family100) {
               reply(lang.Family())
               throw false
            }
            let random = await family100()
            let hasil = `${lang.TbFamily(random.soal, random.jawaban.length, random.jawaban.find(v => v.includes(' ')) ? '(Beberapa jawaban memiliki spasi)' : '')}`.trim()
            console.log(random.jawaban)
            _family100['family100' + m.chat] = {
               id: 'family100' + m.chat,
               pesan: await alpha.sendText(m.chat, hasil, m),
               ...random,
               terjawab: Array.from(random.jawaban, () => false),
               hadiah: 6,
            }
         }
         break

         case 'kuismath':
         case 'math': {
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(lang.Family())
            let {
               genMath,
               modes
            } = require('./lib/math')
            if (!text) return reply(lang.TbMath(Object.keys(modes).join(' | '), prefix, command))
            let result = await genMath(text.toLowerCase())
            alpha.sendText(m.chat, lang.TbMath_(result.soal.toLowerCase(), (result.waktu / 1000).toFixed(2)), m).then(() => {
               console.log("Jawaban: " + result.jawaban)
               kuismath[m.sender.split('@')[0]] = [result.jawaban, result.hadiah]
            })
            await sleep(result.waktu)
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
               reply(lang.TbGambar_(result.jawaban))
               delete kuismath[m.sender.split('@')[0]]
            }
         }
         break
         case 'setmenu': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            const listhades = ['templateLocation', 'templateTenor', 'list', 'document', 'katalog', 'katalog2']
            if (!listhades.includes(text)) {
               const sections = [{
                  "title": "Set Menu-1",
                  "rows": [{
                     "title": "Menu Katalog",
                     "rowId": ".setmenu katalog"
                  }]
               }, {
                  "title": "Set Menu-2",
                  "rows": [{
                     "title": "Menu Katalog Diskon",
                     "rowId": ".setmenu katalog2"
                  }]
               }, {
                  "title": "Set Menu-3",
                  "rows": [{
                     "title": "Menu List Message",
                     "rowId": ".setmenu list"
                  }]
               }, {
                  "title": "Set Menu-4",
                  "rows": [{
                     "title": "Menu Document",
                     "rowId": ".setmenu document"
                  }]
               }]

               const listMessage = {
                  text: lang.SetAh(),
                  footer: `© ${ownername}`,
                  title: salam + ' ' + pushname,
                  buttonText: "Select Here",
                  sections
               }

               alpha.sendMessage(m.chat, listMessage, {
                  quoted: m
               })
            }
            else {
               typemenu = text
               reply(lang.ok())
            }
         }
         break
         case 'help':
         case 'panel':
         case 'menu': {
            try {
               hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
            }
            catch {
               hit_total = {
                  value: "-"
               }
            }
            hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
            //let bio = (await alpha.fetchStatus(m.sender).catch(console.error) || {}).status || '-'
            let {
               exp,
               limit,
               level,
               money,
               role
            } = global.db.data.users[m.sender]
            let goblock = await alpha.fetchBlocklist()
            let {
               min,
               xp,
               max
            } = levelling.xpRange(level, global.multiplier)
            let dnew = new Date(new Date + 3600000)
            let user = db.data.users[m.sender]
            let week = dnew.toLocaleDateString('en', {
               weekday: 'long'
            })
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            let date = dnew.toLocaleDateString('en', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)

            let ownernya = ownernomer + '@s.whatsapp.net'
            var ini_anu = `Hi ${user.name}

╭─❒ 「 Bot Info 」 
├ Creator :  @${ownernya.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Private chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length)}
├ Group chat : ${(Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)}
├ Total chats :  ${(Object.keys(db.data.chats).filter(v => v.endsWith('@s.whatsapp.net')).map(v => v).length) + (Object.keys(db.data.chats).filter(v => v.endsWith('@g.us')).map(v => v).length)} 
├ User In Database : ${Object.keys(global.db.data.users).length} Users
├ User Registered : ${(Object.values(global.db.data.users).filter(user => user.registered == true).length)} Users
├ User Banned : ${(Object.values(global.db.data.users).filter(user => user.banned == true).length)} Users
├ User Blockir : ${goblock == undefined ? '0' : goblock.length} Users
╰❒ Runtime : ${runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Register: ${user.registered ? `✅\n├ Name : ${user.name}\n├ Age : ${user.age} years\n├ Gender : ${user.gender}\n├ Registered on : ${tanggal(user.regTime)}` : '❌'}
├ Nomor : @${m.sender.split('@')[0]}
├ Limit : ${limit} limit
├ XP : ${exp}
├ Premium : ${user.premium ? '✅' : '❌'}
├ Me : ${m.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
            const buttojns = [{
                  buttonId: '.command',
                  buttonText: {
                     displayText: '📖 List Menu'
                  },
                  type: 1
               },
               {
                  buttonId: '.owner',
                  buttonText: {
                     displayText: '🙍‍♂️ Owner'
                  },
                  type: 1
               },
               {
                  buttonId: '.donasi',
                  buttonText: {
                     displayText: '💰 Donation'
                  },
                  type: 1
               }
            ]
            if (typemenu == 'document') {
               if (db.data.users[m.sender].registered) {
                  sendButDoC(alpha, m.chat, ini_anu, '© ' + ownername, botname, ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], {
                     quoted: ftroli
                  })
               }
               else sendButDoc(alpha, m.chat, ini_anu, '© ' + ownername, botname, ownername, `WhatsApp Bot Multi Device`, time, pp_bot, pp_bot, buttojns, [ownernya, ini_mark, m.sender], {
                  quoted: ftroli
               })
            }
            if (typemenu == 'templateLocation') {
               await sendButLoc(alpha, m.chat, lang.menunya(salam, pushname, botname), '©' + ownername, pp_bot, [{
                     buttonId: `.owner`,
                     buttonText: {
                        displayText: '🙍‍♂️ Owner'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.donasi`,
                     buttonText: {
                        displayText: 'Donation 💰'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            if (typemenu == 'templateTenor') {
               alpha.send5ButGif(m.chat, lang.menunya(salam, pushname, botname), `© ${ownername}`, pp_bot, thumbGif, [{
                  "urlButton": {
                     "displayText": "YouTube Creator",
                     "url": `${youtube}`
                  }
               }, {
                  "urlButton": {
                     "displayText": "Rest Api's",
                     "url": `${myweb}`
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Donasi",
                     "id": '.donate'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "Owner",
                     "id": '.owner'
                  }
               }, {
                  "quickReplyButton": {
                     "displayText": "List Command",
                     "id": '.command'
                  }
               }], {
                  quoted: m
               })
            }
            if (typemenu == 'katalog') {
               sendKatalog(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (typemenu == 'katalog2') {
               sendKatalog2(alpha, m.chat, "ALL MENU BOT", lang.listMenu(time, salam, pushname, prefix), pp_bot, {
                  quoted: m
               })
            }
            if (typemenu == 'list') {
               sendListMenu(alpha, m.chat, `╭─⬣「 _*INFO USER*_ 」⬣\n│  *Name* : ${pushname}\n│  *Number* : ${sender.split("@")[0]}\n│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}\n╰─⬣\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : ${ownername}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣\n\n╭─⬣「 _*INDONESIAN TIME*_ 」⬣\n│ *Wib* : ${time}\n│ *Wita* : ${wita}\n│ *Wit* : ${wit}  \n╰─⬣`, `© ${ownername}`, `Selamat ${salam} ${pushname} ☺️`, `CLICK HERE`, {
                  quoted: fgif
               })
            }
         }
         break
         case 'allmenu': {
            await sendButLoc(alpha, m.chat, `Hai kak ${pushname} 👋, saya *${botname}* ` + '\n\n' + lang.listMenu(time, salam, pushname, prefix), '©' + ownername, pp_bot, [{
                  buttonId: `.owner`,
                  buttonText: {
                     displayText: '🙍‍♂️ Owner'
                  },
                  type: 1
               },
               {
                  buttonId: `.donasi`,
                  buttonText: {
                     displayText: 'Donation 💰'
                  },
                  type: 1
               }
            ], {
               userJid: m.chat,
               quoted: m
            })
         }
         break
         case 'infocmd':
         case 'infomenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.info(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'storecmd':
         case 'storemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.storemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'rpgcmd':
         case 'rpgmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.rpgmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break

         case 'photooxycmd':
         case 'photooxymenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.photooxy(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'storagecmd':
         case 'storagemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.storagemenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'voicecmd':
         case 'voicemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.voiceChange(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'anoncmd':
         case 'anonmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.anonchat(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'ownercmd':
         case 'ownermenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.ownermenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'databasecmd':
         case 'databasemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.database(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'groupcmd':
         case 'groupmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.group(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'animecmd':
         case 'animemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.anime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'tagcmd':
         case 'tagmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.tag(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'stalkcmd':
         case 'stalkmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.stalk(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'searchcmd':
         case 'searchmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.search(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'convertercmd':
         case 'convertmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.converter(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'stickercmd':
         case 'stickermenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.effect(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'stickercmd2':
         case 'stickermenu2': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.effect2(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'downloadercmd':
         case 'downloadmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.download(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'ranimecmd':
         case 'animemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.ranime(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'nsfwcmd':
         case 'nsfwcommand': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.nsfw(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'textprocmd':
         case 'textpromenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.textpro(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'othercmd':
         case 'othermenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.other(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'gamecmd':
         case 'gamemenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.game(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'soundcmd':
         case 'soundmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.soundmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'logocmd':
         case 'logomenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.logomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'islamcmd':
         case 'islammenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.islammenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'asupancmd':
         case 'asupanmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.asupan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'cecancmd':
         case 'cecanmenu': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.cecan(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'primbonmenu':
         case 'primboncmd': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.primbonmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'telestc':
         case 'telecmd': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.stcmenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'ephotomenu':
         case 'ephotocmd': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.ephotomenu(prefix), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'thanksto':
         case 'tqto': {
            sendButImage(alpha, m.chat, sender, [{
               buttonId: '.command',
               buttonText: {
                  displayText: '༺ Back'
               },
               type: 1
            }, {
               buttonId: '.owner',
               buttonText: {
                  displayText: 'Owner ༻'
               },
               type: 1
            }], `Selamat ${salam} @${sender.split('@')[0]} 😊\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefix* :  ${prefix} \n│ *Name* : ${botname}\n│ *Owner* : @${ownernomer.split("@")[0]}\n│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.4.0\n╰─⬣` + '\n\n' + lang.tqto(), `© ${ownername}`, [sender, ownernomer + '@s.whatsapp.net'], {
               quoted: m
            })
         }
         break
         case 'take':
         case 'wm': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.NoToStik(prefix, command))
            if (quoted.isAnimated) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await alpha.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            }
            else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            }
            else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return reply(lang.NoToStik(prefix, command))
               let media = await quoted.download()
               let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            }
            else {
               reply(lang.NoToStik(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'setwm':
         case 'setexif': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.NoToStik(prefix, command))
            if (!text.includes('|')) return reply(lang.NoToStik(prefix, command))
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            reply(lang.DoneExif(global.packname, global.author))

         }

         break
         case 'nomerhoki':
         case 'nomorhoki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!Number(text)) return reply(`Example : ${prefix + command} 887435047326`)
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'artimimpi':
         case 'tafsirmimpi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} belanja`)
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ramalanjodoh':
         case 'ramaljodoh': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ramalanjodohbali':
         case 'ramaljodohbali': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'suamiistri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ramalancinta':
         case 'ramalcinta': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'artinama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone`)
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'kecocokannama':
         case 'cocoknama': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'kecocokanpasangan':
         case 'cocokpasangan':
         case 'pasangan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone|Clara`)
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'jadianpernikahan':
         case 'jadiannikah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'sifatusaha': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!ext) return reply(`Example : ${ command} 28, 12, 2021`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'rejeki':
         case 'rezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'pekerjaan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ramalannasib':
         case 'ramalnasib':
         case 'nasib': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'potensipenyakit':
         case 'penyakit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'artitarot':
         case 'tarot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'fengshui': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'haribaik': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'harisangar':
         case 'taliwangke': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'harinaas':
         case 'harisial': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'nagahari':
         case 'harinaga': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'arahrejeki':
         case 'arahrezeki': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'peruntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'weton':
         case 'wetonjawa': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `???? Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'sifat':
         case 'karakter': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone,12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'keberuntungan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'memancing': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'masasubur': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return reply(anu.message)
            alpha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ppcp':
         case 'ppcouple':
         case 'couple': {
            let data = fs.readFileSync('./lib/ppcp.js');
            let jsonData = JSON.parse(data);
            let randIndex = Math.floor(Math.random() * jsonData.length);
            let json = jsonData[randIndex];
            let randCowo = await getBuffer(json.cowo)
            alpha.sendMessage(m.chat, {
               image: randCowo,
               caption: '*Boy*',
               quoted: m
            })
            let randCewe = await getBuffer(json.cewe)
            alpha.sendMessage(m.chat, {
               image: randCewe,
               caption: '*Girl*',
               quoted: m
            })
         }
         break
         //ephoto360
case "1917text":
case "angelwing":
case "announofwin":
case "birthdaycake":
case "capercut":
case "cardhalloween":
case "cartoonstyle":
case "christmascard":
case "christmasseason":
case "covergamepubg":
case "covergraffiti":
case "dragonfire":
case "embroider":
case "fabrictext":
case "facebookgold":
case "facebooksilver":
case "funnyanimations":
case "funnyhalloween":
case "galaxybat":
case "galaxywallpaper":
case "generalexam":
case "glowingtext":
case "graffiti3d":
case "graffititext":
case "graffititext2":
case "graffititext3":
case "greetingcardvideo":
case "halloweenbats":
case "heartcup":
case "heartflashlight":
case "horrorletter":
case "icetext":
case "instagramgold":
case "instagramsilver":
case "lightningpubg":
case "lovecard":
case "lovelycute":
case "masteryavatar":
case "merrycard":
case "messagecoffee":
case "metalstar":
case "milkcake":
case "modengold3":
case "moderngold":
case "moderngold2":
case "moderngoldsilver":
case "multicolor":
case "nameonheart":
case "noeltext":
case "projectyasuo":
case "pubgbirthday":
case "pubgglicthvideo":
case "pubgmascotlogo":
case "puppycute":
case "realembroidery":
case "retrotext":
case "rosebirthday":
case "shirtclub":
case "snowontext":
case "starsnight":
case "summerbeach":
case "sunglightshadow":
case "textcakes":
case "texthalloween":
case "textonglass":
case "textsky":
case "thundertext":
case "twittergold":
case "twittersilver":
case "viettel":
case "vintagetelevision":
case "watercolor2":
case "womansday":
case "writeblood":
case "writegalaxy":
case "writehorror":
case "youtubegold":
case "youtubesilver":
case "zombie3d": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'steellettering':
         case 'letterstext':
         case 'barcashirt':
         case 'premiercup':
         case 'stylepoligon':
         case 'lifebuoys':
         case 'juventusshirt': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/ephoto360/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'ephoto.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'horror':
         case 'game8bit':
         case 'layered':
         case 'glitch2':
         case 'cool-graffiti':
         case 'cool-wall-graffiti':
         case 'realistic':
         case 'space3d':
         case 'glitch-tiktok':
         case 'stone':
         case 'marvel':
         case 'marvel2':
         case 'pornhub':
         case 'avengers':
         case 'metal-rainbow':
         case 'metal-gold':
         case 'metal-galaxy':
         case 'lion':
         case 'wolf-black-white':
         case 'wolf-galaxy':
         case 'ninja':
         case '3dsteel':
         case 'horror2':
         case 'lava':
         case 'bagel': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/textpro/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'battlegrounds-logo':
         case 'battlefield4':
         case 'text-8bit': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksTwo(prefix, command))
            if (!text.includes('|')) return reply(lang.NoTeksTwo(prefix, command))
            mm = args.join(' ')
            m1 = mm.split("|")[0];
            m2 = mm.split("|")[1];
            reply(lang.wait())
            let res = await fetch(global.api(global.APIs.alfa, '/api/photooxy/' + command, {
               text: m1,
               text2: m2
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'typography-flower':
         case 'under-flower':
         case 'bevel-text':
         case 'silk-text':
         case 'sweet-andy':
         case 'smoke-typography':
         case 'carvedwood':
         case 'scary-cemetery':
         case 'royallook':
         case 'coffeecup2':
         case 'illuminated':
         case 'harry-potter2': //case 'woodblack': //case 'butterfly-reflection': //case 'watermelon': // case 'striking':// case 'metallicglow': //case 'rainbow-text':
         case 'birthday-cake':
         case 'embroidery': // case 'crisp': 
         case 'flaming':
         case 'furtext':
         case 'nightsky':
         case 'glow-rainbow':
         case 'gradient-avatar':
         case 'white-cube': // case 'honey-text': // case 'vintage-style': //case 'glowing-3d': // case 'army-camouflage': 
         case 'graffiti-cover':
         case 'rainbow-shine':
         case 'smoky-neon':
         case 'quotes-underfall': //case 'layered-leaves': 
         case 'vector-nature':
         case 'yellow-rose':
         case 'love-text':
         case 'underwater-ocean':
         case 'nature-text':
         case 'wolf-metal':
         case 'summer-text':
         case 'wooden-board': //case 'flower-heart':
         case 'quote-wood':
         case 'love-text':
         case 'quotes-undergrass':
         case 'naruto-banner':
         case 'love-message':
         case 'textoncup2':
         case 'burn-paper':
         case 'smoke':
         case 'romantic-messages':
         case 'shadow-sky':
         case 'text-cup':
         case 'coffecup': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/photooxy/' + command, {
               text: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'photooxy.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         case "3dbox":
case "3dchrome":
case "3dglue":
case "3dstone":
case "abstra":
case "advanced":
case "bear":
case "berry":
case "biscuit":
case "black-metal":
case "blackpink":
case "blood":
case "blood2":
case "blue-balloon":
case "blue-gem":
case "blue-glass":
case "blue-glitter":
case "blue-jewelry":
case "blue-metal":
case "blue-sparkling":
case "bokeh":
case "bread":
case "broken":
case "bronze-glitter":
case "candy":
case "captain-as2":
case "carbon":
case "chocolate":
case "chrismast":
case "christmas":
case "cloudsky":
case "cyan-balloon":
case "cyan-glass":
case "cyan-jewelry":
case "cyan-sparkling":
case "dark-gold":
case "decorate":
case "decorate-purple":
case "decorative":
case "deluxe-gold":
case "demon":
case "denim":
case "discovery":
case "dropwater":
case "drug":
case "embossed":
case "engraved":
case "equalizer":
case "eroded-metal":
case "fabric":
case "fiction":
case "firework":
case "glitch":
case "gloss":
case "glossy":
case "glossy-blue":
case "glossy-carbon":
case "gold-balloon":
case "gold-glitter":
case "gold-sparkling":
case "golden":
case "gradient":
case "gradient2":
case "green-balloon":
case "green-glass":
case "green-glitter":
case "green-jewelry":
case "green-neon":
case "green-sparkling":
case "halloween":
case "halloween2":
case "holographic":
case "honey":
case "hot-metal":
case "ice":
case "joker":
case "juice":
case "koifish":
case "luxury2":
case "magma":
case "marble":
case "marble2":
case "matrix":
case "metal-rose-gold":
case "metal-silver":
case "metaldark":
case "metallic2":
case "minion":
case "multicolor":
case "natural":
case "neon":
case "neon-devil":
case "neon-light":
case "neon2":
case "neonc":
case "neonlight":
case "neonligth2":
case "newyear":
case "newyear2":
case "orange-glass":
case "orange-jewelry":
case "oscar":
case "papercut":
case "peridot":
case "pink-balloon":
case "pink-glitter":
case "pink-sparkling":
case "purple":
case "purple-balloon":
case "purple-gem":
case "purple-glass":
case "purple-glitter":
case "purple-jewelry":
case "purple-shiny-glass":
case "purple-sparkling":
case "rainbow2":
case "red-balloon":
case "red-glass":
case "red-jewelry":
case "red-sparkling":
case "road-warning":
case "robot":
case "rock":
case "rusty":
case "scifi":
case "shiny":
case "silver-glitter":
case "silver-jewelry":
case "sircuit":
case "skeleton":
case "sketch":
case "snow":
case "steel":
case "strawberry":
case "summer":
case "summery":
case "thunder":
case "thunder2":
case "toxic":
case "transformer":
case "underwater":
case "wall":
case "water-pipe":
case "watercolor":
case "wicker":
case "wonderful-graffiti":
case "wood":
case "writing":
case "xmas":
case "yellow-glass":
case "yellow-jewelry": {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.NoTeksOne(prefix, command))
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/textpro/' + command, {
               text: text
            }, 'apikey'))
            if (res.status != 200) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'chika':
         case 'rikagusriani':
         case 'bocil':
         case 'geayubi':
         case 'santuy':
         case 'ukhty':
         case 'asupan':
         case 'delvira':
         case 'ayu':
         case 'bunga':
         case 'aura':
         case 'nisa':
         case 'ziva':
         case 'yana':
         case 'viona':
         case 'syania':
         case 'riri':
         case 'syifa':
         case 'mama_gina':
         case 'alcakenya':
         case 'mangayutri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'asupan.mp4', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'china':
         case 'indonesia':
         case 'malaysia':
         case 'thailand':
         case 'korea':
         case 'japan':
         case 'vietnam':
         case 'jenni':
         case 'jiiso':
         case 'lisa':
         case 'rose': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'textpro.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'hentai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            anu = await hentai()
            result = anu[Math.floor(Math.random(), anu.length)]
            alpha.sendMessage(m.chat, {
               video: {
                  url: result.video_1
               },
               caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}`
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'cuddle':
         case 'foxgirl':
         case 'kemonomimi2':
         case 'woof':
         case 'holo2':
         case 'hug':
         case 'kiss':
         case 'lizard':
         case 'meowi':
         case 'neko2':
         case 'pat':
         case 'poke':
         case 'slap':
         case 'tickle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'sfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'baka':
         case 'smug':
         case 'neko-sfw':
         case 'hentai-gif':
         case 'spank':
         case 'blowjob':
         case 'cumarts':
         case 'eroyuri':
         case 'eroneko':
         case 'erokemonomimi':
         case 'erokitsune':
         case 'ero':
         case 'feet':
         case 'erofeet':
         case 'feetgif':
         case 'femdom':
         case 'futanari':
         case 'hentai':
         case 'holoero':
         case 'holo':
         case 'keta':
         case 'kitsune':
         case 'kemonomimi':
         case 'pussyart':
         case 'pussywankgif':
         case 'girl-solo':
         case 'girl-solo-gif':
         case 'tits':
         case 'trap':
         case 'yuri':
         case 'avatar2':
         case 'anal':
         case 'bj':
         case 'boobs':
         case 'classic':
         case 'cumsluts':
         case 'kuni':
         case 'lesbian':
         case 'neko':
         case 'neko-gif':
         case 'ahegao':
         case 'bdsm':
         case 'cuckold':
         case 'cum':
         case 'foot':
         case 'gangbang':
         case 'glasses':
         case 'jahy':
         case 'masturbation':
         case 'nsfw-neko':
         case 'orgy':
         case 'panties':
         case 'tentacles':
         case 'thighs':
         case 'zettai': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/nsfw/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'nsfw.jpg', lang.ok(), m)
            db.data.users[m.sender].limit -= 1
         }
         break
         //sound
         case 'sound71':
         case 'sound72':
         case 'sound73':
         case 'sound74':
         case 'sound75':
         case 'sound1':
         case 'sound2':
         case 'sound3':
         case 'sound4':
         case 'sound5':
         case 'sound6':
         case 'sound7':
         case 'sound8':
         case 'sound9':
         case 'sound10':
         case 'sound11':
         case 'sound12':
         case 'sound13':
         case 'sound14':
         case 'sound15':
         case 'sound16':
         case 'sound17':
         case 'sound18 ':
         case 'sound19':
         case 'sound20':
         case 'sound21':
         case 'sound22':
         case 'sound23':
         case 'sound24':
         case 'sound25':
         case 'sound26':
         case 'sound27':
         case 'sound28':
         case 'sound29':
         case 'sound30':
         case 'sound31':
         case 'sound32':
         case 'sound33':
         case 'sound34':
         case 'sound35':
         case 'sound36':
         case 'sound37':
         case 'sound38':
         case 'sound39':
         case 'sound40':
         case 'sound41':
         case 'sound42':
         case 'sound43':
         case 'sound44':
         case 'sound45':
         case 'sound46':
         case 'sound47':
         case 'sound48':
         case 'sound49':
         case 'sound50':
         case 'sound51':
         case 'sound52':
         case 'sound53':
         case 'sound54':
         case 'sound55':
         case 'sound56':
         case 'sound57':
         case 'sound58':
         case 'sound59':
         case 'sound60':
         case 'sound61':
         case 'sound62':
         case 'sound63':
         case 'sound64':
         case 'sound65':
         case 'sound66':
         case 'sound67':
         case 'sound68':
         case 'sound69':
         case 'sound70': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let res = await fetch(global.api('alfa', '/api/sound/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendMessage(m.chat, {
               audio: img,
               mimetype: 'audio/mpeg',
               ptt: true
            }, {
               quoted: m
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'coverbannerlol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.CoverBanLol(prefix, command))
            if (!text.includes('|')) return reply(lang.CoverBanLol(prefix, command))
            arg = args.join(' ')
            atas = arg.split('|')[0]
            bawah = arg.split('|')[1]
            const style = ['jinx7', 'jinx-8', 'kassadin-5', 'nissfortune-5', 'pyke-7', 'riven-8', 'sylas-5', 'vayne-9', 'kassadin-4', 'qiyana-5', 'renataglasc', 'shen-5', 'heimerdinger-3', 'nunu-5', 'orianna-4', 'ziggs-4', 'soraka-9', 'soraka-10', 'xayah-3', 'zeri-2', 'ahri-9', 'akshan-2', 'amumu-4', 'annie-3', 'bard-3', 'brand-5', 'diana-4', 'draven-3', 'ekko-6', 'elise-4', 'ezreal-7', 'gwen-3', 'janna-6', 'kindred-3', 'leblanc-7', 'leona-7', 'lissandra-4', 'lux-8', 'lux-9', 'nalzahar-4', 'nasteryi-7', 'reksai-3', 'sett-3', 'sivir-6', 'teemo-5', 'tristana-6', 'vladimir-5', 'xinzhao-5', 'zed-7', 'zeri', 'caitlyn-6', 'caitlyn-7', 'caitlyn-8', 'caitlyn-9', 'caitlyn-10', 'caitlyn-11', 'jayce-5', 'kaisa-8', 'karma-7', 'thresh-6', 'vi-5', 'yasuo-8', 'yasuo-9', 'fiora-8', 'norgana-7', 'nami-5', 'poppy-4', 'syndra-5', 'yuumi-4', 'jarvaniv-6', 'kayn-4', 'kayle-5', 'lillia-2', 'norgana-6', 'tryndamere-3', 'vex', 'vex-2', 'yone-4', 'tristana-5', 'viego-2', 'akali-10', 'anivia-4', 'darius-5', 'graves-6', 'seraphine-5', 'shaco-2', 'twistedfate-4', 'xayah-2', 'zyra-5', 'ahri-8', 'ashe-6', 'cassiopeia-4', 'evelynn-6', 'leblanc-6', 'nalphite-4', 'warwick-5', 'akshan', 'graves-5', 'nissfortune-5', 'pyke-6', 'rengar-6', 'thresh-5', 'diana-3', 'relia-11', 'olaf-3', 'pantheon-6', 'pantheon-7', 'riven-7', 'vayne-8', 'corki-4', 'naokai-2', 'rammus-4', 'veigar-4', 'zed-6', 'camille-4', 'drmundo-3', 'lucian-6', 'nordekaiser-4', 'renekton-4', 'sejuani-5', 'senna-3', 'sylas-4', 'varus-5', 'xerath-3', 'damwon', 'galio-3', 'gwen', 'gwen-2', 'jax-5', 'jinx-6', 'kayle-5', 'sion-2', 'twitch-4', 'velkoz-4', 'blitzcrank-3', 'leona-6', 'lulu-3', 'lulu-4', 'lux-7', 'nasus-5', 'nunu-4', 'rumble-2', 'samira-3', 'aphelios-2', 'blitzcrank-2', 'caitlyn-5', 'garen-6', 'kogmaw-4', 'leona-5', 'alzahar-3', 'syndra-4', 'wukong-4', 'yone-3', 'yuumi-3', 'zyra-4', 'alistar-4', 'chogath-2', 'draven-2', 'fiora-7', 'jarvan-5', 'jhin-5', 'karma-6', 'nautilus-2', 'neeko-5', 'shyvana-3', 'viego', 'azir-4', 'diana-4', 'gragas-2', 'janna-5', 'kalista-3', 'katarina-6', 'ornn-2', 'qiyana-4', 'quinn-3', 'rell', 'xinzhao-4', 'anivia-3', 'hecarim-4', 'illaoi-2', 'jayce-4', 'lissandra-3', 'nami-4', 'nasus-4', 'nidalee-5', 'seraphine-4', 'singed-2', 'skarner-2', 'soraka-7', 'varus-4', 'vladimir-4', 'yorick-4', 'zac', 'riven-8', 'ahri-7', 'akali-9', 'evelynn-5', 'kaisa-7', 'lucian-5', 'seraphine', 'seraphine-2', 'seraphine-3', 'aatrox-6', 'amumu-3', 'lise-3', 'fizz-5', 'karma-5', 'zeri-2', 'kassadin-3', 'khazix-4', 'sivir-5', 'twistedfate-3', 'ashe-5', 'brand-4', 'leesin-5', 'olaf-2', 'sett-2', 'kayle-4', 'leblanc-5', 'pyke-5', 'samira', 'samira-2', 'viktor-2', 'yasuo-7', 'zed-5', 'ezreal-6', 'nasteryi-6', 'shen-4', 'sona-4', 'vi-4', 'yone', 'yone-2', 'ziggs-3', 'ahri-6', 'cassiopeia-3', 'kindred-2', 'riven-6', 'kennen-2', 'kogmaw-3', 'lillia', 'syndra-3', 'teemo-4', 'thresh-4', 'vayne-7', 'velkoz-3', 'yasuo-6', 'zoe-4', 'bard-2', 'gnar-3', 'irelia-10', 'nocturne-4', 'poppy-3', 'enna-2', 'volibear-3', 'volibear-4', 'ekko-5', 'fiora-6', 'lucian-4', 'pantheon-5', 'leblanc-4', 'norgana-5', 'urgot-4', 'zyra-3', 'jinx-5', 'sett', 'alistar-3', 'katarina-5', 'lux-5', 'lux-6', 'nasteryi-5', 'nalphite-3', 'nordekaiser-3', 'reksai-2', 'sejuani-4', 'tryndamere-2', 'xerath-2', 'aphelios', 'garen-5', 'jax-4', 'karma-4', 'leesin-4', 'leona-4', 'nidalee-4', 'rengar-5', 'soraka-5', 'soraka-6', 'swain-4', 'sylas-3', 'trundle-2', 'vladimir-3', 'aatrox-5', 'akali-8', 'ekko-4', 'qiyana-3', 'senna', 'yasuo-5', 'ashe-4', 'darius-4', 'hecarim-3', 'norgana-4', 'nami-3', 'riven-4', 'riven-5', 'ryze-3', 'neeko-3', 'eeko-4', 'xayahrakan', 'zoe-3', 'airi-6', 'noctune-3', 'pantheon-3', 'pantheon-4', 'rammus-3', 'udyr-2', 'veigar-3', 'akali-7', 'garen-4', 'irelia-8', 'irelia-9', 'jinx-4', 'lucian-3', 'pyke-4', 'warwick-4', 'caitlyn-3', 'caitlyn-4', 'kaisa-6', 'qiyana', 'qiyana-2', 'yasuo-4', 'jhin-3', 'karma-3', 'nordekaiser-2', 'tristana-4', 'nami', 'poppy-3', 'aatrox', 'lulu', 'braum', 'camille', 'karma', 'kindred', 'hecarim', 'norgana', 'renekton', 'kennen', 'akali', 'varus', 'orianna', 'blitzcrank', 'bloodmoonjhin', 'bloodmoontalon', 'arcaderiven', 'udyr', 'rumble', 'gnar', 'shaco', 'twitch', 'veigar', 'tryndamere', 'viktor', 'trundle', 'ezreal', 'poppy', 'lissandra', 'jax', 'vi', 'vellkoz', 'darius', 'diana', 'corki', 'sivir', 'ryze', 'azir', 'tristana', 'kled', 'volibear', 'twisterfate', 'anivia', 'zyra', 'quinn', 'nissfortune', 'kalista', 'ezrealandshen', 'gangplank', 'hextachannie', 'elementalistlux', 'xinzhao', 'vayne', 'jhin', 'reksai', 'graves', 'kogmaw', 'garen', 'porojinx', 'warwick', 'fizz', 'caitlyn', 'rengar', 'talon', 'nidalee', 'lux', 'jinx', 'thresh', 'wukong', 'sona', 'ahri', 'riven', 'zed', 'leesin', 'janna', 'katarina', 'leblanc', 'leona', 'fiora', 'lucian', 'shen', 'ziggs', 'yasuo', 'ekko', 'draven', 'ashe', 'ekko-5', 'teemo', 'khazix', 'nasteryi', 'brand', 'taliyah', 'nocturne', 'cassiopeia', 'xayah', 'rakan', 'syndra', 'irelia', 'leesingf', 'yasuobm', 'aurelionsol', 'pantheon', 'bard', 'singed', 'soraka', 'taric', 'naokai', 'xerath', 'gragas', 'jayce', 'riven3', 'nalphite', 'naster_yi2', 'chogath', 'zed2', 'darius2', 'talon2', 'kayle', 'drmundo', 'rammus', 'vladimir', 'ahri-2', 'karma-2', 'jarvan', 'nidalee-2', 'vayner-2', 'warwick-2', 'rengar-2', 'yasuo-3', 'galio', 'pantheon-2', 'jinx-2', 'nalzahar', 'olaf', 'shyvana', 'thresh-2', 'sion', 'caitlyn-2', 'swain', 'kassadin', 'heimerdinger', 'amumu', 'alistar', 'nasus', 'sejuani', 'ezreal3', 'nautilus', 'fiddlesticks', 'sona2', 'karthus', 'ekko2', 'orianna2', 'velkoz-2', 'xinzhao2', 'garen2', 'annie-2', 'yasuonb', 'rivendb', 'kayn', 'kaisa', 'veigar-2', 'vayne-3', 'twitch-2', 'tristana-2', 'rhaast', 'nalzahar-2', 'kayle-2', 'illaoi', 'fizz-2', 'elise', 'brand-2', 'syndra-2', 'soraka-2', 'nissfortune-2', 'hecarim-2', 'ezreal-2', 'ahri-3', 'yorick', 'z-2', 'tahmkench', 'shen-2', 'ornn', 'cassiopeia-2', 'renekton-2', 'nasus-2', 'jarvan-2', 'fiora-2', 'alistar-2', 'taric-2', 'zac-2', 'yorick-2', 'varus-2', 'nordekaiser', 'nasteryi-3', 'katarina-2', 'janna-2', 'fiora-3', 'evelynn', 'elise-2', 'ashe-2', 'annie', 'zoe', 'vi-2', 'vayne-4', 'rengar-3', 'jhin-2', 'graves-2', 'xayahrakan', 'warwick-3', 'nissfortune-3', 'lux-2', 'kaisa', 'jarvaniv', 'zoe-2', 'swain-2', 'sivir-2', 'nissfortune-4', 'jax-2', 'galio-2', 'varus-3', 'urgot', 'twistedfate-2', 'taric-3', 'swain-3', 'shen-3', 'rammus-2', 'pyke-2', 'pyke', 'nasus-3', 'talon', 'khazix-2', 'kayn-2', 'irelia-2', 'evelynn-2', 'akali-2', 'vladimir-2', 'jayce-2', 'janna-3', 'irelia-4', 'irelia-3', 'diana-2', 'zed-3', 'teemo-2', 'taliyah-2', 'shyvana-2', 'poppy-2', 'katarina-3', 'jax-3', 'garen-3', 'darius-3', 'chogath-2', 'aatrox-2', 'soraka-3', 'sona-3', 'sivir-3', 'kaisa-2', 'akali-4', 'akali-3', 'xinzhao-3', 'urgot-3', 'urgot-2', 'tristana-3', 'talon-3', 'sejuani-2', 'nunu-2', 'lulu-2', 'lucian-2', 'irelia-6', 'irelia-5', 'ashe-3', 'ziggs-2', 'yasuo-2', 'sona-4', 'nalphite-2', 'khazix-3', 'kayn-3', 'jinx-3', 'orianna-3', 'kaisa-4', 'kaisa-3', 'heimerdinger-2', 'ezreal-4', 'evelynn-3', 'akali-5', 'ahri-4', 'thresh-3', 'ryze-2', 'kled-2', 'janna-4', 'graves-3', 'fiddlesticks-2', 'ekko-3', 'amumu-2', 'nami-2', 'lulusoraka', 'lissandra-2', 'leona-3', 'leona-2', 'leblanc-2', 'ezrealmissfortune', 'camille-2', 'twitch-3', 'soraka-4', 'renekton-3', 'neeko-2', 'neeko', 'nasteryi-4', 'drmundo-2', 'akali-6', 'zyra-2', 'zilean', 'wukong-3', 'wukong-2', 'teemo-3', 'skarner', 'sivir-4', 'riven-2', 'quinn-2', 'pyke-3', 'nocturne-2', 'nidalee-3', 'norgana-2', 'leesin-3', 'kogmaw-2', 'kassadin-2', 'karthus-2', 'kalista-2', 'gnar-2', 'gangplank-2', 'corki-2', 'azir-3', 'azir-2', 'aatrox-4', 'aatrox-3', 'vi-3', 'vayne-6', 'vayne-5', 'tahmkench-2', 'sylas-2', 'sylas', 'sejuani-3', 'fiora-4', 'nunu-3', 'norgana-3', 'kayle-3', 'brand-3', 'anivia-2', 'ahri-5', 'yorick-3', 'rengar-4', 'fizz-4', 'fizz-3', 'corki-3', 'zed-4', 'rakan-2', 'leblanc-3', 'kaisa-5', 'jarvaniv', 'ivern', 'irelia-7', 'fiora-5', 'evelynn-4', 'camille-3', 'yuumi-2', 'yuumi', 'lux-4', 'lux-3', 'katarina-4', 'jayce-3', 'graves-4', 'ezreal-5']
            if (!style.includes(bawah)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0

               for (var i = 0; i < style.length; i++) {
                  no += 1

                  listt += no.toString() + '.  ' + style[i] + '\n'

               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: atas,
                  heroes: bawah
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'pubglogomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.pubglogomaker(prefix, command))
            if (!text.includes('|')) return reply(lang.pubglogomaker(prefix, command))
            arg = args.join(' ')
            atas = arg.split('|')[0]
            bawah = arg.split('|')[1]
            const style = ['women', 'nen']
            if (!style.includes(bawah)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'colorfulpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.colorfulpubg(prefix, command))
            if (!text.includes('|')) return reply(lang.colorfulpubg(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['gold', 'green-blue', 'pink-yellow', 'green-yellow', 'cyan-purple', 'orange-red']
            if (!style.includes(m2)) {
               let listt = `${lang.colorfulpubg_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  color: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'astronotspace': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}??🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.astronotspace(prefix, command))
            if (!text.includes('|')) return reply(lang.astronotspace(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'dragon', 'duck', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bull', 'rhino', 'rooster', 'pikachu', 'parrot', 'boar', 'bee', 'hurricane', 'deer', 'horse', 'crocodile', 'pitbull']
            if (!style.includes(m2)) {
               let listt = `${lang.pubglogomaker_(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'wallpaperaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.wallpaperaov(prefix, command))
            if (!text.includes('|')) return reply(lang.wallpaperaov(prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['allain', 'allain-2', 'kahlii-3', 'nakroth-4', 'preyta-2', 'skud-2', 'taara-4', 'valhein-4', 'arum-4', 'butterfly-6', 'capheny-3', 'elandorr-2', 'ilumia-3', 'ishar-4', 'lauriel-6', 'laville', 'liliana-5', 'nurad-8', 'quillen-5', 'rouie', 'rouie-2', 'taara-3', 'telannas-5', 'yena-4', 'yena-5', 'zata', 'ata', 'lauriel-5', 'qi-3', 'roxie-3', 'wukong-5', 'aleister-2', 'amily-3', 'arthur-3', 'arum-3', 'astrid-2', 'dirak', 'dirak-2', 'grakk-5', 'hayate-4', 'ishar-2', 'ishar-3', 'jinna-2', 'keera', 'keera-3', 'lauriel-4', 'nax', 'natalya-5', 'quillen-4', 'raz-3', 'richter-2', 'ryoma-4', 'telannas-4', 'ulen-6', 'valhein-3', 'violet-7', 'yorn-4', 'zill-3', 'ignis-2', 'lubu-2', 'naloch-2', 'sephera-3', 'butterfly-5', 'diaochan-4', 'elandoor', 'krizzix-2', 'nina-2', 'natalya-3', 'veera-3', 'violet-6', 'yena-2', 'yena-3', 'krizziz', 'nurad-7', 'volkath', 'volkath-2', 'airi-4', 'arduin-3', 'enzo-3', 'hayate-3', 'krixi-3', 'nurad-6', 'quillen-3', 'telannas-3', 'wisp-2', 'zip-2', 'gildur-2', 'ishar', 'tulen-5', 'amily-2', 'annette-3', 'arthur-2', 'butterfly-4', 'errol-2', 'joker', 'kahlii-2', 'kilgroth', 'lauriel-3', 'nurad-5', 'arduin-2', 'darcy-2', 'florentino-3', 'noren', 'quillen-2', 'ryoma-5', 'sephera-3', 'violet-5', 'airi-3', 'diaochan-3', 'diaochanlubu', 'elsuroxie', 'lindis-3', 'taara-2', 'toro-2', 'tulen-4', 'violet-4', 'wonderwoman', 'ybneth', 'zill-2', 'arum-2', 'florentino-2', 'liliana-4', 'nurad-4', 'yorn-3', 'zip', 'annette-2', 'qi', 'qi-2', 'celica', 'capheny-2', 'diaochan-2', 'elsu-2', 'ilumia-2', 'krixi-2', 'narja-2', 'nurad-3', 'preyta', 'telannas-2', 'valhein', 'veera-2', 'veres-2', 'yorn-2', 'zephys-2', 'airi-2', 'annette', 'baldum', 'butterfly-3', 'elsu-2', 'errol', 'fennik', 'lauriel-2', 'liliana-2', 'liliana-3', 'lindis-2', 'nurad-2', 'nakroth-2', 'nakroth-3', 'natalya-2', 'raz-2', 'ryoma-2', 'slimz', 'teemee', 'tulen-2', 'tulen-3', 'violet-3', 'wiro', 'wukong-3', 'wukong-4', 'zill', 'aleister', 'alice', 'arduin', 'arthur', 'azzenka', 'batman', 'butterfly-2', 'cresh', 'darcy', 'diaochan', 'enzo-2', 'hayate-2', 'jinna', 'lubu', 'nganga', 'violet-2', 'wukong-2', 'zanis-2', 'florentino', 'gildur', 'ignis', 'naloch', 'narja', 'nakroth', 'omen', 'payna', 'raz', 'rourke', 'roxie', 'ryoma', 'skud', 'taara', 'toro', 'valhein', 'veres', 'violet', 'wisp', 'wukong', 'wonderwoman', 'xeniel', 'yorn', 'zanis', 'elsu', 'flash', 'hayate', 'ilumia', 'kahlii', 'krixi', 'lauriel', 'liliana', 'lindis', 'nina', 'nurad', 'natalya', 'quillen', 'richter', 'sephera', 'superman', 'telannas', 'thane', 'airi', 'amily', 'arum', 'astrid', 'butterfly', 'capheny', 'enzo', 'tulen', 'veera', 'yena', 'ryoma-4', 'zephys', 'zuka']
            if (!style.includes(m2)) {
               let listt = `${lang.coverbannerlol(style.length)}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'maketeamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'anubis', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['anubis', 'cowgirl', 'dragon', 'duck', 'ghost', 'gorilla', 'panda', 'panther', 'shark', 'squirrel', 'tiger', 'wolf', 'bee', 'crocodile', 'deer', 'pitbull', 'horse', 'hurricane', 'indian', 'assassin', 'boar', 'rapid', 'raven', 'warrior', 'pikachu', 'pubg', 'ninja', 'drift', 'yasuo', 'rhino', 'phoenix', 'bull', 'hornet', 'eagle', 'hunter', 'parrot', 'rooster', 'lion', 'skull', 'wolver', 'wolf', 'cobra', 'dragon', 'panther', 'owl', 'tiger', 'reaper', 'warrior']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'circlemarcotteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'lionsnake', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['panther', 'rhino', 'squirrel', 'unicorn', 'zebra', 'lionsnake', 'bear', 'bull', 'dragon', 'eagle', 'fox', 'griffin', 'hawk', 'lion', 'peacock', 'phoenix', 'tiger', 'wolver']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'wallpaperml': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aldous', 'alice-2', 'angela-2', 'argus-2', 'chou', 'chou-2', 'estes', 'eudora', 'eudora-2', 'granger', 'granger-2', 'gusion-3', 'hanabi-2', 'hanzo', 'helcurt', 'layla-3', 'lesley-4', 'lunox-2', 'odette-3', 'saber', 'thamuz', 'vexana', 'argus', 'dyrroth', 'esmeralda-2', 'kadita-2', 'lancelot', 'leomord-2', 'lylia', 'vale', 'valir', 'xborg', 'zhask', 'alice', 'alpha', 'athena', 'badang', 'balmond', 'bane', 'diggie', 'trunks', 'fanny-2', 'fanny-3', 'freya', 'guinevere', 'gusion', 'gusion-2', 'hanabi', 'harith', 'harith-2', 'hayabusa-2', 'kadita', 'kagura-2', 'kagura-3', 'karina-2', 'kimmy', 'layla-2', 'leomord', 'lesley-2', 'lesley-3', 'lunox', 'nartis', 'niya-2', 'nana', 'nana-2', 'natalia', 'natalia-2', 'odette-2', 'pharsa', 'rafaela-2', 'selena-2', 'zilong', 'alucard', 'angela', 'bruno', 'change', 'claude', 'fanny', 'hayabusa', 'hilda', 'hylos', 'kagura', 'karina', 'karrie', 'layla', 'lesley', 'lolita', 'ninotaur', 'ninsittar', 'niya', 'noskov', 'odette', 'rafaela', 'selena']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'dragonballfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aldous', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cabba', 'caulifla', 'cooler', 'cumber', 'hit', 'kale', 'kaminoren', 'gokuui', 'xenogokuss3', 'xenogokuss4', 'xenovegeta', 'xenovegito', 'android-18', 'blackgoku', 'bulma', 'frieza', 'gotenks-2', 'kaio', 'krillinandroid-18', 'launch', 'nutenroshi-2', 'oldkai', 'oolong', 'pilaf', 'tienshinhan', 'trunks-3', 'bardock', 'gotenks', 'nutenroshi', 'piccolo', 'songoku-2', 'songoku-3', 'songoten', 'trunks-2', 'vegeta-2', 'vegito', 'krillin', 'najinbuu', 'songohan', 'songoku', 'trunks', 'vegeta']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerofaov': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'aphelios', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aphelios', 'karma', 'leesin-2', 'nidalee-2', 'soraka-2', 'soraka-3', 'swain', 'akali-4', 'ekko-2', 'qiyana', 'senna', 'yasuo-3', 'ahri-2', 'akali-3', 'ashe-3', 'caitlyn', 'camille', 'darius', 'draven', 'evelynn-2', 'kaisa', 'kayle', 'pantheon', 'rengar', 'sivir-2', 'sona', 'vayne-3', 'wukong', 'zoe-2', 'zyra', 'azir', 'garen', 'jinx-3', 'katarina-3', 'lux-3', 'nasus', 'nidalee', 'sejuani', 'sylas', 'vayner-2', 'vi-2', 'warwick-2', 'fiora-2', 'irelia-3', 'janna-2', 'jax', 'leesin', 'nasteryi-2', 'norgana', 'nami', 'riven-2', 'riven-3', 'talon-2', 'neeko', 'neeko-2', 'xayahrakan', 'zoe', 'ahri', 'ezreal-2', 'janna', 'jinx-2', 'lulu', 'lux-2', 'nissfortune', 'poopy', 'soraka', 'syndra', 'ezreal', 'graves', 'jayce', 'katarina-2', 'lux', 'yuumi', 'aatrox', 'akali-2', 'diana', 'elise', 'evelynn', 'jhin-2', 'kalista-2', 'kennen', 'pyke-2', 'shen', 'sivir', 'talon', 'twistedfate', 'thresh-2', 'yasuo-2', 'zilean', 'ashe-2', 'kalista', 'khazix', 'riven', 'riven', 'shyvana', 'thresh', 'zed-2', 'akali', 'ashe', 'ekko', 'fiora', 'irelia', 'irelia-2', 'jhin', 'jinx', 'katarina', 'leona', 'lucian', 'nasteryi', 'pyke', 'vayne', 'vi', 'warwick', 'yasuo', 'zed']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'effect3donbeach': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'beach-1', prefix, command))
            const style = ['beach-1', 'beach-2', 'beach-3', 'beach-4', 'beach-5', 'beach-6']
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'cutegirlgamer': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'footballteam': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'nau-6', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['nau-1', 'nau-2', 'nau-3', 'nau-4', 'nau-5', 'nau-6']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'beautifulshimmering': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('champion', 'kahlii', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aleister', 'alice', 'butterfly', 'diaochan', 'kahlii', 'krixi', 'nina', 'nakroth', 'natalya', 'taara', 'thane', 'violet', 'zanis', 'zata', 'airi', 'annette', 'arthur', 'arum', 'astrid', 'elandorr', 'gildur', 'gildur', 'hayate', 'ilumia', 'ishar', 'lauriel', 'lindis', 'nurad', 'quillen', 'rouie', 'sephera', 'yena', 'yorn']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Champion')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  champion: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'pubgcutelogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['chicken', 'soldier']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'elegantrotation': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'rhino', 'tiger']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'logogamingassasin': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'style-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6', 'style-7', 'style-8', 'style-9', 'style-10', 'style-11', 'style-12', 'style-13', 'style-14', 'style-15', 'style-16', 'style-17', 'style-18', 'style-19', 'style-20', 'style-21', 'style-22', 'style-23', 'style-24']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'introvideomaker': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'tiger', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bull', 'dragon', 'eagle', 'lion', 'tiger', 'skull']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'gaminglogo4fvs': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'soldier', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['girl', 'ghost', 'soldier-2', 'swat', 'woman', 'soldier', 'sniper', 'raccoon', 'rabbit', 'panda', 'chicken']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'blueneon': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dugong', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tiger', 'shark', 'dugong', 'bull', 'cheetah', 'lion']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'metalmascot': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('logo', 'dragon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['snakelion', 'dragon', 'ragon-2', 'eagle', 'falcon', 'fox', 'lion', 'panther', 'phoenix', 'phoenix', 'rhino', 'squirrel', 'tiger', 'unicorn', 'wolf', 'zebra']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Logo')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  logo: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'anonymous2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'style1', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['style1', 'style2', 'style3']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = (api('alfa', '/api/ephoto360/anonymous' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'lolpentakill': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'kassadin', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['jhin', 'syndra', 'olaf', 'nocturne', 'chogath', 'kassadin', 'nidalee', 'fiora', 'fiddlesticks', 'garen', 'irelia-2', 'janna', 'lissandra', 'ezreal', 'riven', 'nalphite', 'khazix', 'nasteryi', 'irelia', 'alista', 'jayce', 'singed', 'galio', 'velkoz', 'yi', 'yasuo', 'sona', 'nidalee-2', 'teemo', 'leesin', 'jinx', 'zed', 'camille', 'brand', 'warwick', 'rengar', 'vayne', 'leona', 'ashe', 'ezreal', 'annie', 'xerath', 'ahri', 'kayle', 'nissfortune', 'caitlyn', 'vi', 'leesin', 'darius', 'fizz', 'bloodyasuo', 'ekko', 'lucian', 'rakanandayah']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'avatarleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'ishar-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'yuumi', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'yasuo', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'keera-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak-2', 'grakk-5', 'kerra', 'raz-5', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-6', 'natalya-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizziz-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'krizziz', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja', 'veres-3', 'violet-10', 'zip', 'zip-2', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'notos', 'chaugnar', 'kahlii', 'lubo', 'nina', 'krixi', 'zanis-3', 'jinna', 'fennik', 'airi', 'ormarr', 'toro', 'butterfly', 'nakroth', 'gildur', 'omega', 'natalya', 'lumburr', 'yorn', 'dieu-thuyen', 'nganga', 'grankk-2', 'azzenka', 'alice', 'violet', 'violet2', 'butterfly2', 'krixi2', 'natalya2', 'taara', 'ormarr2', 'valhein', 'zephys', 'nakroth2', 'aleister', 'payna', 'wukong', 'naloch', 'kricnak', 'slimz2', 'cresht', 'slimz', 'dieu-thuyen2', 'thane-2', 'preyta', 'fennik-2', 'raz', 'preyta-2', 'payna-2', 'illumia', 'nortos-2', 'yorn-2', 'violet-3', 'valhein-2', 'taara-2', 'skud-1', 'skud', 'natalya-3', 'lu-bu', 'jinna-2', 'illumia-2', 'butterfly-4', 'batman', 'zuka-2', 'airi-2', 'zanis', 'nurad', 'nurad-2', 'nina-2', 'lauriel-2', 'ignis-2', 'ignis', 'grakk', 'airi-3', 'zill-2', 'zill', 'zanis-2', 'yorn-3', 'veera-3', 'veera-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'arthur', 'ryoma-2', 'ryoma', 'raz-2', 'nganga-2', 'astrid-2', 'astrid', 'zanis-4', 'xeniel', 'wukong-3', 'noren', 'lauriel-3', 'joker', 'xeniel-2', 'telannas-3', 'nurad-3', 'lubu-4', 'lubu-3', 'kriknak-2', 'kahlii-2', 'diaochanlubu', 'chaugnar-2', 'azzenka-2', 'alice-2', 'aleister-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgoth', 'gildur-2', 'fennik-3', 'zephys-3', 'wonderwoman', 'superman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zephys-2', 'zanis-5', 'yorn-4', 'xeniel-3', 'wonderwoman-2', 'violet-4', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'valhein-3', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'arthurtelannas', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'krixnak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'cresht-3', 'cresht-2', 'astris-3', 'flash', 'arum-2', 'arum', 'butterfly-6', 'alice-3', 'xeniel-4', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth', 'wirosabaleng', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-5', 'veera-5', 'liliana-4', 'flash-2', 'arthur-2', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-7', 'yorn-6', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-5', 'violet-8', 'valhein-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'avatarff': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'antonio', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'ford', 'hayato', 'joseph', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie', 'wukong']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'overwatchwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'brigitte', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ana', 'ashe', 'ashe-2', 'baptiste', 'baptiste-2', 'brigitte', 'dva', 'dva-2', 'genji', 'hanzo', 'junkrat', 'lucio', 'nccree', 'nei', 'nercy', 'nercy-2', 'nercy-3', 'noira', 'pharah', 'reaper', 'roadhog', 'soldier-76', 'sombra', 'sombra-2', 'symmetra', 'tracer', 'tracer-2', 'widowmaker', 'widowmaker-2', 'zarya']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'rovwallpaperhd': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'keera', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-5', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annette-4', 'capheny-3', 'elsu-5', 'narja-3', 'veres-3', 'violet-10', 'zip-2', 'zip-3', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-4', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena-2', 'zuka-8', 'zephys-3', 'zephys-2', 'zephys', 'zanis-5', 'zanis-4', 'zanis-3', 'zanis-2', 'zanis', 'violet-5', 'violet-4', 'violet-3', 'violet-2', 'violet', 'veera-4', 'veera-3', 'veera-2', 'valhein-3', 'valhein-2', 'valhein', 'thane-2', 'thane', 'nina-3', 'nina-2', 'nina', 'nganga-2', 'nganga', 'lubu-5', 'lubu-4', 'lubu-3', 'lubu-2', 'lubu', 'krixi-5', 'krixi-4', 'krixi-3', 'krixi-2', 'krixi', 'kahlii-3', 'kahlii-2', 'kahlii', 'diaochan-3', 'diaochan-2', 'diaochan', 'chaugnar', 'butterfly-5', 'butterfly-4', 'butterfly-2', 'butterfly', 'yorn-4', 'yorn-3', 'yorn-2', 'yorn', 'wukong-3', 'wukong-2', 'wukong', 'toro-2', 'toro', 'taara-2', 'taara', 'slimz-3', 'slimz-2', 'slimz', 'payna-2', 'payna', 'ormarr-4', 'ormarr-3', 'ormarr-2', 'kaisa-2', 'ormarr', 'natalya-5', 'natalya-4', 'natalya-3', 'natalya-2', 'natalya', 'nakroth-4', 'nakroth-3', 'nakroth-2', 'nakroth', 'naloch-3', 'naloch-2', 'naloch', 'lumburr', 'kriknak-2', 'kriknak', 'jinna-2', 'jinna', 'grakk-3', 'grakk-2', 'grakk', 'gildur-2', 'gildur', 'fennik-4', 'fennik-3', 'fennik-2', 'fennik', 'cresht', 'azzenka-2', 'azzenka', 'arthur-3', 'arthur-2', 'arthur', 'alice-2', 'alice', 'aleister-2', 'aleister', 'zuka-2', 'zuka', 'zill-2', 'zill', 'xeniel-2', 'xeniel', 'wonderwoman-2', 'wonderwoman', 'telannas-4', 'telannas-3', 'telannas-2', 'telannas', 'superman-2', 'superman', 'skud-2', 'skud', 'ryoma-2', 'ryoma', 'preyta-3', 'preyta-2', 'preyta', 'nurad-3', 'nurad-2', 'nurad', 'noren-2', 'noren', 'lauriel-4', 'lauriel-3', 'lauriel-2', 'lauriel', 'kilgroth-2', 'kilgroth', 'joker', 'illumia-3', 'illumia-2', 'illumia', 'ignis-2', 'ignis', 'batman-2', 'batman', 'astrid-2', 'astrid', 'arduin-2', 'arduin', 'airi-5', 'airi-4', 'airi-3', 'airi-2', 'airi', 'teemee-2', 'teemee', 'zuka-3', 'tulen', 'raz-2', 'raz', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'zill-3', 'raz-3', 'liliana-2', 'tulen-3', 'telannas-5', 'taara-3', 'ryoma-3', 'nax-2', 'kriknak-3', 'flash', 'cresht-3', 'cresht-2', 'arthur-4', 'aleister-3', 'airi-6', 'arum-2', 'arum', 'wisp-2', 'wisp', 'rourke-2', 'rourke', 'narja-2', 'narja', 'butterfly-6', 'batman-3', 'astris-3', 'jinna-3', 'butterfly-7', 'arthur-5', 'valhein-4', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-3', 'veera-5', 'liliana4', 'flash-2', 'arthur-6', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'rovwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'lorion', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['alice-5', 'arthur-8', 'dirak-3', 'errol', 'grakk-6', 'keera-2', 'lorion', 'grakk-6', 'keera-2', 'lorion', 'nina-6', 'tulen-10', 'yena', 'zip-3', 'zuka-9', 'dextra', 'dextra-2', 'lindis-6', 'nurad-10', 'nakroth-9', 'quillen-7', 'sephera-5', 'yorn-8', 'airi-10', 'amily-6', 'astrid-6', 'ata-3', 'capheny-5', 'darcy-4', 'diaochan-8', 'hayate-6', 'lauriel-10', 'laville-3', 'rourke-4', 'ryoma-7', 'sinestrea', 'sinestrea-2', 'telannas-9', 'thorne', 'thorne-2', 'veres-4', 'yena-6', 'zephys-7', 'allain', 'allain-2', 'butterfly-12', 'kahlii-6', 'nakroth-8', 'preyta-4', 'taara-7', 'valhein-8', 'arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-6', 'teemee-3', 'telannas-8', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-6', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'elsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-3', 'jinna-5', 'kerra-2', 'lauriel-7', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-7', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'keera', 'raz-4', 'ishar-2', 'nax-4', 'valhein-7', 'zill-5', 'arthur-7', 'rum-5', 'lubu-8', 'naloch-7', 'sephera-4', 'diaochan-6', 'ignis-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'nurad-8', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'qi', 'qi-2', 'darcy-3', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'elsu-5', 'narja-3', 'annette-4', 'capheny-3', 'veres-3', 'zip-2', 'zip', 'diaochan-5', 'enzo-2', 'lubu-7', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'errol', 'yena-2', 'zuka-8', 'valhein', 'violet', 'airi', 'skud', 'zanis', 'zephis', 'butterfly', 'wukong', 'taara', 'nakroth', 'prayta', 'yorn', 'natalya', 'thane', 'toro', 'ormarr', 'omega', 'nina', 'nganga', 'lubu2', 'lubu', 'kahlii-2', 'kahlii', 'fennik-2', 'fennik', 'diaochan', 'cresht', 'azzenka', 'aleister', 'zuka2', 'zuka', 'payna-2', 'payna', 'nakroth-2', 'nortos-2', 'nortos', 'kriknak', 'jinna-2', 'jinna', 'batman', 'airi-2', 'violet-3', 'violet-2', 'skud-2', 'raz-2', 'raz', 'ignis-2', 'ignis', 'gildur', 'butterfly-4', 'butterfly-3', 'zanis-2', 'nurad', 'yorn-2', 'slimz', 'ormarr-2', 'nurad-2', 'nina-2', 'lauriel-2', 'grakk-2', 'grakk', 'diaochan-2', 'airi-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'taara-2', 'joker', 'ilumia-2', 'batman-2', 'arduin-2', 'arduin', 'wukong-2', 'nakroth-3', 'ilumia-3', 'arthur', 'ryoma-2', 'ryoma', 'astrid-2', 'astrid', 'zephis-2', 'natalya-3', 'natalya-2', 'ubu-3', 'chaugnar', 'azzenka-2', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'aleister-2', 'nurad-3', 'noren-2', 'lubu-5', 'kilgroth', 'gildur-2', 'fennik-3', 'lauriel-4', 'zephys-3', 'xeniel-2', 'wonderwomen', 'superman-2', 'slimz-2', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'xeniel', 'wonderwoman-2', 'violet-4', 'preyta2', 'diaochan-3', 'airi-4', 'valhein-4', 'preyta-3', 'nina-3', 'alice-2', 'airi-5', 'telannas-3', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'natalya-5', 'fennik-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'valhein-2', 'tulen', 'toro-2', 'naloch-4', 'naloch-3', 'lumburr', 'lindis-2', 'grakk-4', 'gildur-3', 'toro-3', 'omen-2', 'omen', 'zill-3', 'telannas-', 'athur-4', 'zuka-4', 'tulen-2', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'tulen-3', 'nax-2', 'flash', 'cresht-3', 'cresht-2', 'chaugnar-2', 'aleister-3', 'ryoma-3', 'kriknak-3', 'airi-6', 'wisp-2', 'wisp', 'batman-3', 'arum-2', 'arum', 'butterfly-6', 'rourke-2', 'rourke', 'narja-2', 'narja', 'taara-3', 'jinna-3', 'butterfly-7', 'arthur-4', 'arthur-3', 'arthur-2', 'valhein-3', 'superman-3', 'liliana-3', 'kilgroth-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'alice-3', 'telannas6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'astrid-3', 'amily-2', 'liliana-4', 'xeniel-5', 'veera-5', 'flash-2', 'athur-5', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'wirosableng', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'utterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-5', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'beautifulgalaxylol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'akali-2', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ashe-2', 'darius-2', 'hecarim-2', 'akali-2', 'jhin-2', 'jinx-2', 'kaisa-2', 'khazix-2', 'nordekaiser-2', 'pantheon-2', 'qiyana', 'rammus-2', 'renekton-2', 'tahmkench-2', 'teemo-2', 'udyr-2', 'yasuo-2', 'yuumi', 'drmundo', 'zyra', 'zoe', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twitch', 'twistedfate', 'tryndamere', 'trundle', 'tristana', 'thresh', 'teemo', 'taric', 'talyah', 'talon', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'ornn', 'orianna', 'olaf', 'nunu', 'nocturne', 'nidalee', 'nautilus', 'nasus', 'nami', 'norgana', 'norderkaiser', 'nissfortune', 'nasteryi', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'kaisa', 'jinx', 'jhin', 'jayce', 'jax', 'jarvaniv', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'sylas', 'pyke', 'nunuwillump', 'neeko', 'norgana-2', 'kayle-2', 'akali-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'crossfirecover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'blthefates', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'swat', 'switcher', 'redpower', 'whitenurse', 'blthefates', 'jns', 'natahari', 'dx', 'nursezombie', 'omohswat', 'sfg', 'fox', 'bllaswat', 'bljtf', 'grjtf', 'blarch', 'hero-4', 'gsg9', 'hero-3', 'opes', 'abf', 'shadows', 'devilhunter']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'lolwallpaper': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('wallpaper', 'braum', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['aatrox-2', 'arhi-2', 'akali-3', 'akali-2', 'braum', 'camille', 'evelynn-5', 'ezreal-2', 'fizz', 'graves-2', 'irelia-3', 'irelia-2', 'jayce-2', 'jhin-2', 'jinx-2', 'kaisa', 'katarina-2', 'lux-2', 'neeko', 'orianna-2', 'pantheon', 'pyke', 'qiyana', 'riven-2', 'sylas', 'teemo-2', 'viktor', 'vladimir', 'warwick-2', 'yasuo-3', 'yasuo-2', 'zoe', 'nasteryi', 'lux', 'lulu', 'leesin', 'jinx', 'jhin', 'ezreal', 'janna', 'ashe', 'arhi', 'poppy', 'nissfortune', 'soraka', 'syndra', 'zyra', 'yasuo', 'vi', 'vayne', 'taliyah', 'sona', 'sivir', 'shyvana', 'riven', 'quinn', 'nidalee', 'norgana', 'leblanc', 'kennen', 'karma', 'irelia', 'fiora', 'elise', 'diana', 'caitlyn', 'zed', 'xayah', 'tristana', 'talon', 'shen', 'rakan', 'orianna', 'nami', 'kayn', 'kayle', 'katarina', 'kalista', 'ekko', 'azir', 'udyr', 'thresh', 'tf', 'teemo', 'ryze', 'nocturne', 'lucian', 'khazik', 'graves', 'darius', 'annie', 'akali', 'zilean', 'ziggs', 'yorick', 'warwick', 'nasteryi-2', 'janna-2', 'hecarim', 'gangplank', 'fiora-2', 'draven', 'brand', 'aatrox', 'velkoz', 'shaco', 'rengar', 'reksai', 'ornn', 'leona', 'kindred', 'jayce', 'jax', 'jarvan-iv', 'garen', 'xinzhao', 'nasus', 'kled', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn', 'cassiopeia', 'zac', 'xerath', 'wukong', 'velkoz-2', 'veigar', 'varus', 'urgot', 'twich', 'kassadin', 'elise-2', 'annie-2', 'alistar']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Wallpaper')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  wallpaper: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coverdota2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('heroes', 'warlord', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['void', 'riki', 'lycan', 'ursa', 'zeus', 'dragonkinght', 'warlord', 'phantomassassin', 'bountyhunter', 'antimage', 'spectre', 'luna', 'vengerfulspirit', 'undying', 'tusk', 'tinker', 'shadowfiend', 'sandking', 'nightstalker', 'nagasiren', 'nirana', 'neepo', 'lina', 'juggernaut', 'huskar', 'emberspirit', 'emberspirit', 'emberspirit', 'earthshaker', 'drowranger', 'clockwerk', 'bristleback', 'bloodseeker', 'axe']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Heroes')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  heroes: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coverleagueofking': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'ngangar', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['thane', 'orrmarr', 'omega', 'nakroth', 'nina', 'ngangar', 'gildur', 'dieuthuyen', 'chaugnar', 'butterfly', 'azzenka', 'alice', 'lubo', 'kriknak-2', 'natalya-2', 'trieu-van', 'taara-2', 'naloch', 'kriknak', 'natalya', 'taara', 'ngo-khong', 'airi', 'butterfly-2', 'butterfly-3', 'kahlii', 'krixi', 'toro', 'grakk', 'ilumia', 'zephys', 'veera-2', 'violet', 'preyta-2', 'violet-2', 'valhein', 'yorn', 'veera', 'notos', 'valhein-2', 'preyta', 'illumia-2', 'fennik-2', 'lumburr', 'fennik', 'nakroth-2', 'krixi-2', 'gildur2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'avatar3q360': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'truong_phi', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['tieu_kieu', 'luu_bi', 'truong_oanh_oanh', 'truong_phi', 'tu_ma_y', 'van_uong', 'hoang_nguyet_anh', 'hoang_nguyet_anh2', 'hoang_trung', 'hua_chu', 'truong_giac', 'dieu_thuyen', 'renekton', 'tahmkench', 'teemo', 'udyr', 'yasuo', 'yuumi', 'drmundo', 'zyra', 'zoe', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twitch', 'twistedfate', 'tryndamere', 'trundle', 'tristana', 'thresh', 'teemo', 'taric', 'talyah', 'talon', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'ornn', 'orianna', 'olaf', 'nunu', 'nocturne', 'nidalee', 'nautilus', 'nasus', 'nami', 'norgana', 'norderkaiser', 'nissfortune', 'nasteryi', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'kaisa', 'jinx', 'jhin', 'jayce', 'jax', 'jarvaniv', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'sylas', 'pyke', 'nunuwillump', 'neeko', 'norgana', 'kayle', 'akali', 'aatrox']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coverofwarface': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'warface', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['warface-4', 'warface-3', 'warface-2', 'warface', 'sniper-3', 'sniper-2', 'sniper', 'rifleman', 'nedic-2', 'nedic', 'exosuit', 'engineer']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'newlolavatar': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'teemo', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['udyr', 'twitch', 'twistedfate', 'trundle', 'teemo', 'swain', 'shyvana', 'shen', 'sejuani', 'renekton', 'reksai', 'rammus', 'zyra', 'zilean', 'ziggs', 'zac', 'xerath', 'warwick', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'volibear', 'tristana', 'taliyah', 'shaco', 'leblanc', 'jinx', 'graves', 'fizz', 'ekko', 'corki', 'cassiopeia', 'caitlyn', 'blitzcrank', 'bard', 'alistar', 'akali', 'aatrox', 'janna', 'wukong', 'thresh', 'taric', 'talon', 'ryze', 'nordekaiser', 'karma', 'kalista', 'irelia', 'gnar', 'garen', 'galio', 'soraka', 'sona', 'sivir', 'riven', 'quinn', 'nocturne', 'nami', 'lux', 'kindred', 'khazix', 'katarina', 'jarvan', 'fiora', 'diana', 'aurelionsol', 'ashe', 'ahri', 'varus', 'syndra', 'nidalee', 'kennen', 'jhin', 'zed', 'yasuo', 'rengar', 'lucian', 'ezreal', 'azir', 'annie', 'leesin', 'nasteryi', 'poppy', 'pantheon', 'orianna', 'nasus', 'norgana', 'nissfortune', 'naokai', 'nalzaha', 'lulu', 'lissandra', 'leona', 'kled', 'jayce', 'jax', 'illaoi', 'xayah', 'rakan', 'gangplank', 'naster_yi2', 'riven2', 'elise', 'darius', 'xayah_rakan', 'katarina2', 'nauthilus', 'hecarim', 'thresh2', 'ashe2', 'xinzhao', 'tryndamere', 'syndra-2', 'sivir-2', 'lissandra2', 'karma-2', 'draven']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'csgocover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('background', 'famas', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ump45', 'tec9', 'n4a1', 'xm1014', 'famas', 'np9', 'pp-bizon', 'p2000', 'negev', 'usps', 'dualberettas', 'np5', 'karambit', 'awpdragonlore', 'np7', 'galilar', 'ak-47', 'glock', 'sg-553', 'ak47', 'r8revolver', 'aug', 'butterflyknife', 'deserteagle', 'gsg9', 'p90asiimov', 'awphawking', 'n4a4', 'sas', 'awpasiimov', 'ssg08bitw', 'sg553ds', 'r8fade', 'p90ed', 'n4a1sdecimator', 'n4a1howl', 'karambitds', 'flipknifemf', 'awmmedusa', 'augaa', 'ak47vulcan', 'ak47fs']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  background: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coverloknew': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'hayate-5', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['arum-6', 'baldum-3', 'elandorr-3', 'hayate-5', 'ilumia-5', 'ishar-4', 'lauriel-8', 'nax-5', 'nurad-9', 'quillen-5', 'teemee-3', 'telannas-6', 'volkath-3', 'yena-4', 'yena-5', 'butterfly-10', 'laville', 'laville-2', 'nakroth-7', 'omen-6', 'rouie-2', 'taara-4', 'zanis-8', 'zata', 'zata-2', 'capheny-4', 'lsu-6', 'fennik-5', 'liliana-7', 'paine', 'paine-2', 'rouie', 'astrid-4', 'ata', 'ata-2', 'lauriel-8', 'omen-5', 'qi-3', 'roxie-5', 'taara-5', 'violet-12', 'wukong-7', 'wukong-8', 'hayate-4', 'ishar-4', 'jinna-5', 'kerra-2', 'lauriel-7', 'nina-5', 'quillen-5', 'richter-4', 'ryoma-6', 'telannas-8', 'tulen-9', 'yorn-8', 'aleister-4', 'dirak', 'dirak-2', 'grakk-5', 'kerra', 'raz-4', 'amily-5', 'athur-7', 'arum-5', 'ishar-2', 'nax-4', 'natalya-7', 'valhein-7', 'zill-5', 'diaochan-6', 'ignis-4', 'lubu-8', 'naloch-7', 'sephera-4', 'elandorr', 'elandorr-2', 'krizzix', 'krizzix-2', 'violet-11', 'yena-3', 'arduin-4', 'enzo-3', 'errol-3', 'hayate-3', 'krixi-7', 'nurad-7', 'volkath', 'volkath', 'volkath-2', 'wisp-4', 'wukong-6', 'celica', 'gildur-4', 'ishar', 'nurad-7', 'quillen-4', 'tulen-8', 'lauriel-6', 'qi', 'qi-2', 'darcy', 'florentino-3', 'noren-3', 'ryoma-5', 'sephera-3', 'annettte-4', 'capheny-3', 'elsu-5', 'narja-3', 'vilolet-10', 'violet-10', 'zip-2', 'zip-2a', 'airi-9', 'diaochan-5', 'enzo-2', 'lubu-7', 'nganga-4', 'payna-3', 'roxie-4', 'violet-9', 'zanis-7', 'zephys-6', 'enzo', 'liliana-6', 'lindis-5', 'xeniel-5', 'airi-9', 'errol-2', 'yena', 'yena-2', 'zuka-8', 'yorn', 'violet', 'zanis', 'thane', 'slimz', 'skud', 'preyta', 'payna', 'nakroth', 'nina', 'naloch', 'illumia', 'krixi', 'diaochan', 'butterfly', 'veera', 'valhein', 'toro', 'taara', 'raz', 'ormarr', 'nganga', 'lubu', 'kriknak', 'kahlil', 'grakk', 'gildur', 'alice', 'omega', 'wukong', 'natalya', 'nortos', 'cresht', 'airi', 'aleister', 'lumburr', 'zephis', 'violet-2', 'jinna', 'chaugnar', 'azzenka', 'valhein-2', 'zanis-2', 'skud-2', 'payna-2', 'natalya-3', 'natalya-2', 'nortos-2', 'krixi-2', 'jinna-2', 'illumia-2', 'butterfly-3', 'butterfly-2', 'yorn-2', 'taara-2', 'nakroth-2', 'lubu2', 'lauriel', 'kahlii-2', 'zuka-2', 'zuka', 'batman', 'airi-2', 'airi-3', 'butterfly-4', 'diaochan-2', 'grakk-2', 'ignis', 'ignis-2', 'lauriel2', 'nina-2', 'nurad', 'nurad-2', 'ormarr-2', 'raz-2', 'slimz2', 'violet-3', 'zill-2', 'zill', 'zanis-3', 'yorn-3', 'veera-3', 'veera-2', 'thane-2', 'telannas', 'superman', 'naloch-2', 'krixi-3', 'butterfly-5', 'violet-5', 'veera-4', 'telannas-2', 'joker', 'illumia-3', 'batman-2', 'arduin-2', 'arduin', 'zephis-2', 'wukong-2', 'ryoma-2', 'ryoma', 'nakroth-3', 'nganga-2', 'azzenka-2', 'astrid-2', 'astrid', 'arthur', 'zanis-4', 'wukong-3', 'noren', 'lubu-4', 'lauriel-3', 'lubu-3', 'chaugnar-2', 'aleister-2', 'xeniel', 'telannas-3', 'preyta-2', 'nurad-3', 'kriknak-2', 'fennik-2', 'diaochanlubu', 'alice-2', 'noren-2', 'lubu-5', 'lauriel-4', 'kilgroth', 'gildur-2', 'fennik-3', 'zephys-3', 'xeniel-2', 'xeniel-2', 'wonderwoman', 'supeman-2', 'slimz-3', 'natalya-4', 'krixi-5', 'krixi-4', 'zanis-5', 'yorn-4', 'wonderwoman-2', 'violet-4', 'prayta-3', 'naloch-3', 'airi-4', 'telannas-4', 'ormarr-4', 'ormarr-3', 'nakroth-4', 'kilgroth-2', 'kahlii-3', 'grakk-3', 'airi-5', 'natalya-5', 'fennik-4', 'valhein-4', 'teemee-2', 'teemee', 'lindis', 'zuka-3', 'tulen', 'toro-2', 'nina-3', 'naloch-4', 'lumburr-2', 'lindis-2', 'joker-2', 'grakk-4', 'gildur-3', 'aleister-3', 'tulen-2', 'toro-3', 'taara-3', 'omen-2', 'omen', 'zill-3', 'telannas-5', 'athur-2', 'zuka-4', 'nakroth-5', 'nax', 'liliana', 'raz-3', 'liliana-2', 'nax-2', 'kriknak-3', 'joker-3', 'chaugnar-3', 'wisp', 'ryoma-3', 'batman-3', 'airi-6', 'tulen-3', 'flash', 'cresht-3', 'cresht-2', 'astris-3', 'arum-2', 'arum', 'butterfly-6', 'lice-3', 'xeniel-3', 'valhein-4', 'tulen-4', 'rourke-2', 'rourke', 'nurad-4', 'nax-3', 'wisp-2', 'narja-2', 'narja', 'zuka-5', 'jinna-3', 'butterfly-7', 'arthur-2', 'violet-6', 'valhein-5', 'superman-3', 'liliana-3', 'kilgroth-3', 'diaochan-3', 'wirosabaleng-3', 'roxie-2', 'roxie', 'wukong-4', 'baldum-2', 'baldum', 'zephys-4', 'annette-2', 'annette', 'telannas-6', 'raz-4', 'nurad-6', 'nurad-5', 'jinna-4', 'amily', 'ybneth-2', 'ybneth', 'ilumia-4', 'amily-2', 'xeniel-4', 'veera-5', 'liliana-4', 'flash-2', 'arthur-3', 'omen-3', 'lindis-3', 'elsu-2', 'elsu', 'richter-2', 'richter', 'nina-4', 'thane-3', 'ryoma-4', 'quillen-2', 'quillen', 'lauriel-5', 'arum-3', 'wisp-3', 'violet-7', 'sephera-2', 'sephera', 'naloch-5', 'krixi-6', 'alice-4', 'tulen-5', 'skud-3', 'rourke-3', 'nakroth-6', 'florentino-2', 'florentino', 'elsu-3', 'butterfly-8', 'amily-3', 'zuka-7', 'zuka-6', 'yorn-6', 'yorn-5', 'veres-2', 'veres', 'naloch-6', 'cresht-4', 'azzenka-3', 'airi-7', 'zephys-5', 'yorn-7', 'violet-8', 'valhein-6', 'tulen-6', 'thane-4', 'roxie-3', 'nakroth-7', 'kahlii-4', 'elsu-4', 'darcy-2', 'darcy', 'capheny', 'zill-4', 'hayate-2', 'hayate', 'cresht-5', 'annette-3', 'amily-4', 'veera-6', 'tulen-7', 'telannas-7', 'omen-4', 'lindis-4', 'liliana-5', 'ignis-3', 'errol', 'capheny-2', 'arum-4', 'zanis-6', 'wukong-5', 'thane-5', 'slimz-4', 'skud-4', 'richter-3', 'quillen-3', 'azzenka-4', 'arduin-3', 'airi-8']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'coverfblol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('letters', 'pantheon', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['yasuo', 'shen', 'riven', 'pantheon', 'orianna', 'nocturne', 'nami', 'norgana', 'naster-yi', 'lux', 'lucian', 'katarina', 'kalista', 'jinx', 'jhin', 'irelia', 'hecarim', 'graves', 'garen', 'fizz', 'fiora', 'ezreal', 'ekko', 'diana', 'darius', 'cassiopeia', 'caitlyn', 'braum', 'azir', 'ashe', 'warwick', 'thresh', 'leblanc', 'khazix', 'kayn', 'draven', 'zyra', 'zed', 'xayah', 'taric', 'talon', 'sona', 'sivir', 'rengar', 'rakan', 'leesin', 'gnar', 'elise']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Letters')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  letters: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'overwatchcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('hero', 'zwidowmaker', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zwinston', 'zjunkrat', 'zwidowmaker', 'ztracer', 'ztorbjorn', 'zsymmetra', 'zsombra', 'zsoldier76', 'zroadhog', 'zreinhardt', 'zreaper', 'zpharah', 'zorisa', 'zmercy', 'zmei', 'zmccree', 'zlucio', 'zhanzo', 'zgenji', 'zenyatta', 'zdva', 'zbastion', 'zarya', 'zana', 'yzenyatta', 'yzarya', 'ywinston', 'ywidowmaker', 'ytracer', 'ytorbjorn', 'ysymmetra', 'ysombra', 'ysoldier76', 'yroadhog', 'yreinhardt', 'yreaper', 'ypharah', 'yorisa', 'ymercy', 'ymei', 'ymccree', 'ylucio', 'yjunkrat', 'yhanzo', 'ygenji', 'ydva', 'ybastion', 'yana', 'xzenyatta', 'xzarya', 'xwinston', 'xwidowmaker', 'xtracer', 'xtorbjorn', 'xsymmetra', 'xsombra', 'xsoldier76', 'xroadhog', 'xreinhardt', 'xreaper', 'xpharah', 'xorisa', 'xmercy', 'xmei', 'xmccree', 'xlucio', 'xjunkrat', 'xhanzo', 'xgenji', 'xdva', 'xbastion', 'xana', 'wzenyatta', 'wzarya', 'wtracer', 'wtorbjorn', 'wsymmetra', 'wsombra', 'wsoldier76', 'wroadhog', 'wreinhardt', 'wreaper', 'wpharah', 'worisa', 'wmercy', 'wmei', 'wmccree', 'wlucio', 'wjunkrat', 'winston', 'widowmaker', 'whanzo', 'wgenji', 'wdva', 'wbastion', 'wana', 'vzenyatta', 'vzarya', 'vwinston', 'vwidowmaker', 'vtracer', 'vtorbjorn', 'vsymmetra', 'vsombra', 'vsoldier76', 'vroadhog', 'vreinhardt', 'vreaper', 'vpharah', 'vorisa', 'vmercy', 'vmei', 'vmccree', 'vlucio', 'vjunkrat', 'vhanzo', 'vgenji', 'vdva', 'vbastion', 'vana', 'uzenyatta', 'uzarya', 'uwinston', 'uwidowmaker', 'utracer', 'utorbjorn', 'usymmetra', 'usombra', 'usoldier76', 'uroadhog', 'ureinhardt', 'ureaper', 'upharah', 'uorisa', 'umercy', 'umei', 'umccree', 'ulucio', 'ujunkrat', 'uhanzo', 'ugenji', 'udva', 'ubastion', 'uana', 'tzenyatta', 'tzarya', 'twinston', 'twidowmaker', 'tsymmetra', 'tsombra', 'tsoldier76', 'troadhog', 'treinhardt', 'treaper', 'tracer', 'tpharah', 'torisa', 'torbjorn', 'tmercy', 'tmei', 'tmccree', 'tlucio', 'tjunkrat', 'thanzo', 'tgenji', 'tdva', 'tbastion', 'tana', 'szenyatta', 'szarya', 'symmetra', 'swinston', 'swidowmaker', 'stracer', 'storbjorn', 'sroadhog', 'sreinhardt', 'sreaper', 'spharah', 'sorisa', 'sombra', 'soldier76', 'smercy', 'smei', 'smccree', 'slucio', 'sjunkrat', 'shanzo', 'sgenji', 'sdva', 'sbastion', 'sana', 'rzenyatta', 'rzarya', 'rwinston', 'rwidowmaker', 'rtracer', 'rtorbjorn', 'rsymmetra', 'rsombra', 'rsoldier76', 'rrmei', 'rpharah', 'rorisa', 'roadhog', 'rmercy', 'rmccree', 'rlucio', 'rjunkrat', 'rhanzo', 'rgenji', 'reinhardt', 'reaper', 'rdva', 'rbastion', 'rana', 'qzenyatta', 'qzarya', 'qwinston', 'qwidowmaker', 'qtracer', 'qtorbjorn', 'qsymmetra', 'qsombra', 'qsoldier76', 'qroadhog', 'qreinhardt', 'qreaper', 'qpharah', 'qorisa', 'qmercy', 'qmei', 'qmccree', 'qlucio', 'qjunkrat', 'qhanzo', 'qgenji', 'qdva', 'qbastion', 'qana', 'pzenyatta', 'pzarya', 'pwinston', 'pwidowmaker', 'ptracer', 'ptorbjorn', 'psymmetra', 'psombra', 'psoldier76', 'proadhog', 'preinhardt', 'preaper', 'porisa', 'pmercy', 'pmei', 'pmccree', 'plucio', 'pjunkrat', 'pharah', 'phanzo', 'pgenji', 'pdva', 'pbastion', 'pana', 'ozenyatta', 'ozarya', 'owinston', 'owidowmaker', 'otracer', 'otorbjorn', 'osymmetra', 'osombra', 'osoldier76', 'oroadhog', 'orisa', 'oreinhardt', 'oreaper', 'opharah', 'omercy', 'omei', 'omccree', 'olucio', 'ojunkrat', 'ohanzo', 'ogenji', 'odva', 'obastion', 'oana', 'nzenyatta', 'nzarya', 'nwinston', 'nwidowmaker', 'ntracer', 'ntorbjorn', 'nsymmetra', 'nsombra', 'nsoldier76', 'nroadhog', 'nreinhardt', 'nreaper', 'npharah', 'norisa', 'nmercy', 'nmei', 'nmccree', 'nlucio', 'njunkrat', 'nhanzo', 'ngenji', 'ndva', 'nbastion', 'nana', 'mzenyatta', 'mzarya', 'mwinston', 'mwidowmaker', 'mtracer', 'mtorbjorn', 'msymmetra', 'msombra', 'msoldier76', 'mroadhog', 'mreinhardt', 'mreaper', 'mpharah', 'morisa', 'mlucio', 'mjunkrat', 'mhanzo', 'mgenji', 'mercy', 'mei', 'mdva', 'mccree', 'mbastion', 'mana', 'lzenyatta', 'lzarya', 'lwinston', 'lwidowmaker', 'lucio', 'ltracer', 'ltorbjorn', 'lsymmetra', 'lsombra', 'lsoldier76', 'lroadhog', 'lreinhardt', 'lreaper', 'lpharah', 'lorisa', 'lmercy', 'lmei', 'lmccree', 'ljunkrat', 'lhanzo', 'lgenji', 'ldva', 'lbastion', 'lana', 'kzenyatta', 'kzarya', 'kwinston', 'kwidowmaker', 'ktracer', 'ktorbjorn', 'ksymmetra', 'ksombra', 'ksoldier76', 'kroadhog', 'kreinhardt', 'kreaper', 'kpharah', 'korisa', 'kmercy', 'kmei', 'kmccree', 'klucio', 'kjunkrat', 'khanzo', 'kgenji', 'kdva', 'kbastion', 'kana', 'jzenyatta', 'jzarya', 'jwinston', 'jwidowmaker', 'junkrat', 'jtracer', 'jtorbjorn', 'jsymmetra', 'jsombra', 'jsoldier76', 'jroadhog', 'jreinhardt', 'jreaper', 'jpharah', 'jorisa', 'jmercy', 'jmei', 'jmccree', 'jlucio', 'jhanzo', 'jgenji', 'jdva', 'jbastion', 'jana', 'izenyatta', 'izarya', 'iwinston', 'iwidowmaker', 'itracer', 'itorbjorn', 'isymmetra', 'isombra', 'isoldier76', 'iroadhog', 'ireinhardt', 'ireaper', 'ipharah', 'iorisa', 'imercy', 'imei', 'imccree', 'ilucio', 'ijunkrat', 'ihanzo', 'igenji', 'idva', 'ibastion', 'iana', 'hzenyatta', 'hzarya', 'hwinston', 'hwidowmaker', 'htracer', 'htorbjorn', 'hsymmetra', 'hsombra', 'hsoldier76', 'hroadhog', 'hreinhardt', 'hreaper', 'hpharah', 'horisa', 'hmercy', 'hmei', 'hmccree', 'hlucio', 'hjunkrat', 'hgenji', 'hdva', 'hbastion', 'hanzo', 'hana', 'gzenyatta', 'gzarya', 'gwinston', 'gwidowmaker', 'gtracer', 'gtorbjorn', 'gsymmetra', 'gsombra', 'gsoldier76', 'groadhog', 'greinhardt', 'greaper', 'gpharah', 'gorisa', 'gmercy', 'gmei', 'gmccree', 'glucio', 'gjunkrat', 'genji', 'gdva', 'gbastion', 'ganafzenyatta', 'fzarya', 'fwinston', 'fwidowmaker', 'ftracer', 'ftorbjorn', 'fsymmetra', 'fsombra', 'fsoldier76', 'froadhog', 'freinhardt', 'freaper', 'fpharah', 'forisa', 'fmercy', 'fmei', 'fmccree', 'flucio', 'fjunkrat', 'fhanzo', 'fgenji', 'fdva', 'fbastion', 'fana', 'ezenyatta', 'ezarya', 'ewinston', 'ewidowmaker', 'etracer', 'etorbjorn', 'esymmetra', 'esombra', 'esoldier76', 'eroadhog', 'ereinhardt', 'ereaper', 'epharah', 'eorisa', 'emercy', 'emei', 'emccree', 'elucio', 'ejunkrat', 'ehanzo', 'egenji', 'edva', 'ebastion', 'eana', 'dzenyatta', 'dzarya', 'dwinston', 'dwidowmaker', 'dva', 'dtracer', 'dtorbjorn', 'dsymmetra', 'dsombra', 'dsoldier76', 'droadhog', 'dreinhardt', 'dreaper', 'dpharah', 'dorisa', 'dmercy', 'dmei', 'dmccree', 'dlucio', 'djunkrat', 'dhanzo', 'dgenji', 'dbastion', 'dana', 'czenyatta', 'czarya', 'cwinston', 'cwidowmaker', 'ctracer', 'ctorbjorn', 'csymmetra', 'csombra', 'csoldier76', 'croadhog', 'creinhardt', 'creaper', 'cpharah', 'corisa', 'cmercy', 'cmei', 'cmccree', 'clucio', 'cjunkrat', 'chanzo', 'cgenji', 'cdva', 'cbastion', 'cana', 'bzenyatta', 'bzarya', 'bwinston', 'bwidowmaker', 'btracer', 'btorbjorn', 'bsymmetra', 'bsombra', 'bsoldier76', 'broadhog', 'breinhardt', 'breaper', 'bpharah', 'borisa', 'bmercy', 'bmei', 'bmccree', 'blucio', 'bjunkrat', 'bhanzo', 'bgenji', 'bdva', 'bastion', 'bana', 'azenyatta', 'azarya', 'awinston', 'awidowmaker', 'atracer', 'atorbjorn', 'asymmetra', 'asombra', 'asoldier76', 'aroadhog', 'areinhardt', 'areaper', 'apharah', 'aorisa', 'ana', 'amercy', 'amei', 'amccree', 'alucio', 'ajunkrat', 'ahanzo', 'agenji', 'adva', 'abastion', 'zdoomfist', 'ydoomfist', 'xdoomfist', 'wdoomfist', 'vdoomfist', 'udoomfist', 'tdoomfist', 'sdoomfist', 'rdoomfist', 'qdoomfist', 'pdoomfist', 'odoomfist', 'ndoomfist', 'mdoomfist', 'ldoomfist', 'kdoomfist', 'jdoomfist', 'idoomfist', 'hdoomfist', 'gdoomfist', 'fdoomfist', 'edoomfist', 'doomfist', 'cdoomfist', 'bdoomfist', 'adoomfist']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Hero')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  hero: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'crossfirestyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'switcher', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['spop', 'switcher', 'switcher-2', 'switcher-3 ', 'thefates', 'thefates-2', 'thefates-3', 'swat', 'fox', 'star', 'omoh', 'sabel', 'sas', 'sia', 'navy-seals', 'jtf', 'jns', 'laswat', 'sraf', 'shadow', 'nemesis', 'nocha', 'ixions', 'gsg-9', 'ghosty', 'hermes', 'foxu', 'dh', 'angelapt', 'ac']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'avatarlolbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'katarina-0', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['katarina-0', 'zyra-4', 'zyra-3', 'zyra-2', 'zyra-1', 'zyra-0', 'zilean-5', 'zilean-4', 'zilean-3', 'zilean-2', 'zilean-1', 'zilean-0', 'ziggs-5', 'ziggs-4', 'ziggs-3', 'ziggs-2', 'ziggs-1', 'ziggs-0', 'zed-3', 'zed-2', 'zed-10', 'zed-1', 'zed-0', 'zac-2', 'zac-1', 'zac-0', 'yorick-2', 'yorick-1', 'yorick-0', 'yasuo-4', 'yasuo-3', 'yasuo-2', 'yasuo-1', 'yasuo-0', 'xinzhao-6', 'xinzhao-13', 'xinzhao-5', 'xinzhao-4', 'xinzhao-3', 'xinzhao-2', 'xinzhao-1', 'xinzhao-0', 'xerath-4', 'xerath-3', 'xerath-2', 'xerath-1', 'xerath-0', 'xayah-1', 'xayah-0', 'warwick-8', 'warwick-7', 'warwick-6', 'warwick-5', 'warwick-4', 'warwick-3', 'warwick-2', 'warwick-1', 'warwick-0', 'volibear-5', 'volibear-4', 'volibear-3', 'volibear-2', 'volibear-1', 'volibear-0', 'vladimir-7', 'vladimir-6', 'vladimir-5', 'vladimir-4', 'vladimir-3', 'vladimir-2', 'vladimir-1', 'vladimir-0', 'viktor-2', 'viktor-1', 'viktor-0', 'vi-5', 'vi-4', 'vi-3', 'vi-2', 'vi-1', 'vi-0', 'velkoz-3', 'velkoz-2', 'velkoz-1', 'velkoz-0', 'veigar-8', 'veigar-7', 'veigar-6', 'veigar-5', 'veigar-4', 'veigar-3', 'veigar-2', 'veigar-1', 'veigar-0', 'vayne-6', 'vayne-5', 'vayne-4', 'vayne-3', 'vayne-2', 'vayne-1', 'vayne-0', 'vayne-10', 'varus-6', 'varus-5', 'varus-4', 'varus-3', 'varus-2', 'varus-1', 'varus-0', 'urgot-3', 'urgot-2', 'urgot-1', 'urgot-0', 'udyr-4', 'udyr-3', 'udyr-2', 'udyr-1', 'udyr-0', 'twitch-7', 'twitch-6', 'twitch-5', 'twitch-4', 'twitch-3', 'twitch-2', 'twitch-1', 'twitch-0', 'twistedfate-9', 'twistedfate-10', 'twistedfate-8', 'twistedfate-7', 'twistedfate-6', 'twistedfate-5', 'twistedfate-4', 'twistedfate-3', 'twistedfate-2', 'twistedfate-1', 'twistedfate-0', 'tryndamere-9', 'tryndamere-8', 'tryndamere-7', 'tryndamere-6', 'tryndamere-5', 'tryndamere-4', 'tryndamere-3', 'tryndamere-2', 'tryndamere-1', 'tryndamere-0', 'trundle-5', 'trundle-4', 'trundle-3', 'trundle-2', 'trundle-1', 'trundle-0', 'tristana-6', 'tristana-5', 'tristana-4', 'tristana-3', 'tristana-2', 'tristana-1', 'tristana-0', 'tristana-10', 'tristana-11', 'thresh-5', 'thresh-4', 'thresh-3', 'thresh-2', 'thresh-1', 'thresh-0', 'teemo-8', 'teemo-7', 'teemo-6', 'teemo-5', 'teemo-4', 'teemo-3', 'teemo-2', 'teemo-1', 'teemo-0', 'teemo-14', 'taric-4', 'taric-3', 'taric-2', 'taric-1', 'taric-0', 'talon-5', 'talon-4', 'talon-3', 'talon-2', 'talon-1', 'talon-0', 'taliyah-1', 'taliyah-0', 'tahmkench-2', 'tahmkench-1', 'tahmkench-0', 'syndra-4', 'syndra-3', 'syndra-2', 'syndra-1', 'syndra-0', 'swain-3', 'swain-2', 'swain-1', 'swain-0', 'soraka-6', 'soraka-5', 'soraka-4', 'soraka-3', 'soraka-2', 'soraka-1', 'soraka-0', 'sona-6', 'sona-5', 'sona-4', 'sona-3', 'sona-2', 'sona-1', 'sona-0', 'skarner-4', 'skarner-3', 'skarner-2', 'skarner-1', 'skarner-0', 'sivir-7', 'sivir-6', 'sivir-5', 'sivir-4', 'sivir-3', 'sivir-2', 'sivir-1', 'sivir-0', 'sion-5', 'sion-4', 'sion-3', 'sion-2', 'sion-1', 'sion-0', 'singed-8', 'singed-7', 'singed-6', 'singed-5', 'singed-4', 'singed-3', 'singed-2', 'singed-1', 'singed-0', 'shyvana-6', 'shyvana-5', 'shyvana-4', 'shyvana-3', 'shyvana-3', 'shyvana-2', 'shyvana-1', 'shyvana-0', 'shen-6', 'shen-5', 'shen-4', 'shen-3', 'shen-2', 'shen-1', 'shen-0', 'shaco-7', 'shaco-6', 'shaco-5', 'shaco-4', 'shaco-3', 'shaco-2', 'shaco-1', 'shaco-0', 'sejuani-7', 'sejuani-6', 'sejuani-5', 'sejuani-4', 'sejuani-3', 'sejuani-2', 'sejuani-1', 'sejuani-0', 'ryze-10', 'ryze-9', 'ryze-8', 'ryze-7', 'ryze-6', 'ryze-5', 'ryze-4', 'ryze-3', 'ryze-2', 'ryze-1', 'ryze-0', 'rumble-3', 'rumble-2', 'rumble-1', 'rumble-0', 'riven-8', 'riven-7', 'riven-6', 'riven-5', 'riven-4', 'riven-3', 'riven-2', 'riven-1', 'riven-0', 'rengar-3', 'rengar-2', 'rengar-1', 'rengar-0', 'renekton-9', 'renekton-8', 'renekton-7', 'renekton-6', 'renekton-5', 'renekton-4', 'renekton-3', 'renekton-2', 'renekton-1', 'renekton-0', 'reksai-1', 'reksai-2', 'reksai-0', 'rammus-7', 'rammus-6', 'rammus-5', 'rammus-4', 'rammus-3', 'rammus-2', 'rammus-1', 'rammus-0', 'rakan-1', 'rakan-0', 'quinn-4', 'quinn-3', 'quinn-2', 'quinn-1', 'quinn-0', 'poppy-7', 'poppy-6', 'poppy-5', 'poppy-4', 'poppy-3', 'poppy-2', 'poppy-1', 'poppy-0', 'pantheon-8', 'pantheon-7', 'pantheon-6', 'pantheon-5', 'pantheon-4', 'pantheon-3', 'pantheon-2', 'pantheon-1', 'pantheon-0', 'orianna-7', 'orianna-6', 'orianna-5', 'orianna-4', 'orianna-3', 'orianna-2', 'orianna-1', 'orianna-0', 'olaf-6', 'olaf-5', 'olaf-4', 'olaf-3', 'olaf-2', 'olaf-1', 'olaf-0', 'nunu-7', 'nunu-6', 'nunu-5', 'nunu-4', 'nunu-3', 'nunu-2', 'nunu-1', 'nunu-0', 'nocturne-6', 'nocturne-5', 'nocturne-4', 'nocturne-3', 'nocturne-2', 'nocturne-1', 'nocturne-0', 'nidalee-8', 'nidalee-7', 'nidalee-6', 'nidalee-5', 'nidalee-4', 'nidalee-3', 'nidalee-2', 'nidalee-1', 'nidalee-0', 'nautilus-5', 'nautilus-4', 'nautilus-3', 'nautilus-2', 'nautilus-1', 'nautilus-0', 'nasus-6', 'nasus-5', 'nasus-4', 'nasus-3', 'nasus-2', 'nasus-1', 'nasus-0', 'nasus-10', 'nami-7', 'nami-6', 'nami-5', 'nami-4', 'nami-3', 'nami-2', 'nami-1', 'nami-0', 'norgana-6', 'norgana-5', 'norgana-4', 'norgana-3', 'norgana-2', 'norgana-1', 'norgana-0', 'norgana-10', 'norgana-11', 'nordekaiser-4', 'nordekaiser-3', 'nordekaiser-2', 'nordekaiser-1', 'nordekaiser-0', 'nonkeyking-5', 'nonkeyking-4', 'nonkeyking-3', 'nonkeyking-2', 'nonkeyking-1', 'nonkeyking-0', 'nissfortune-9', 'nissfortune-8', 'nissfortune-7', 'nissfortune-6', 'nissfortune-5', 'nissfortune-4', 'nissfortune-3', 'nissfortune-2', 'nissfortune-1', 'nissfortune-0', 'nasteryi-3', 'nasteryi-2', 'nasteryi-1', 'nasteryi-0', 'nasteryi-9', 'nasteryi-5', 'nasteryi-4', 'nasteryi-10', 'naokai-7', 'naokai-6', 'naokai-5', 'naokai-4', 'naokai-3', 'naokai-2', 'naokai-1', 'naokai-0', 'nalzahar-5', 'nalzahar-4', 'nalzahar-3', 'nalzahar-2', 'nalzahar-1', 'nalzahar-0', 'nalphite-7', 'nalphite-6', 'nalphite-5', 'nalphite-4', 'nalphite-3', 'nalphite-2', 'nalphite-1', 'nalphite-0', 'lux-7', 'lux-6', 'lux-5', 'lux-4', 'lux-3', 'lux-2', 'lux-1', 'lux-0', 'lulu-6', 'lulu-5', 'lulu-4', 'lulu-3', 'lulu-2', 'lulu-1', 'lulu-0', 'lucian-6', 'lucian-7', 'lucian-2', 'lucian-1', 'lucian-0', 'lissandra-3', 'lissandra-2', 'lissandra-1', 'lissandra-0', 'leona-9', 'leona-8', 'leona-7', 'leona-6', 'leona-5', 'leona-4', 'leona-3', 'leona-2', 'leona-1', 'leona-0', 'leesin-6', 'leesin-5', 'leesin-4', 'leesin-3', 'leesin-2', 'leesin-1', 'leesin-0', 'leesin-10', 'leesin-11', 'leblanc-5', 'leblanc-4', 'leblanc-3', 'leblanc-2', 'leblanc-1', 'leblanc-0', 'kogmaw-9', 'kogmaw-8', 'kogmaw-7', 'kogmaw-6', 'kogmaw-5', 'kogmaw-4', 'kogmaw-3', 'kogmaw-2', 'kogmaw-1', 'kogmaw-0', 'kled-1', 'kled-0', 'kindred-2', 'kindred-1', 'kindred-0', 'khazix-4', 'khazix-3', 'khazix-2', 'khazix-1', 'khazix-0', 'kennen-7', 'kennen-6', 'kennen-5', 'kennen-4', 'kennen-3', 'kennen-2', 'kennen-1', 'kennen-0', 'kayle-8', 'kayle-7', 'kayle-6', 'kayle-5', 'kayle-4', 'kayle-3', 'kayle-2', 'kayle-1', 'kayle-0', 'katarina-9', 'katarina-8', 'katarina-7', 'katarina-5', 'katarina-6', 'katarina-4', 'katarina-3', 'katarina-2', 'katarina-1', 'kassadin-4', 'kassadin-3', 'kassadin-2', 'kassadin-1', 'kassadin-0', 'karthus-9', 'karthus-5', 'karthus-4', 'karthus-3', 'karthus-2', 'karthus-1', 'karthus-0', 'karma-7', 'karma-6', 'karma-5', 'karma-4', 'karma-3', 'karma-2', 'karma-1', 'karma-0', 'kalista-3', 'kalista-2', 'kalista-1', 'kalista-0', 'jinx-4', 'jinx-3', 'jinx-2', 'jinx-1', 'jinx-0', 'jayce-4', 'jayce-3', 'jayce-2', 'jayce-1', 'jayce-0', 'jax-9', 'jax-8', 'jax-7', 'jax-6', 'jax-5', 'jax-4', 'jax-3', 'jax-2', 'jax-1', 'jax-0', 'jarvaniv-6', 'jarvaniv-5', 'jarvaniv-4', 'jarvaniv-3', 'jarvaniv-2', 'jarvaniv-1', 'jarvaniv-0', 'janna-7', 'janna-6', 'janna-5', 'janna-4', 'janna-3', 'janna-2', 'janna-1', 'ivern-1', 'ivern-0', 'irelia-5', 'irelia-4', 'irelia-3', 'irelia-2', 'irelia-1', 'irelia-0', 'illaoi-1', 'illaoi-0', 'heimerdinger-5', 'heimerdinger-4', 'heimerdinger-3', 'heimerdinger-2', 'heimerdinger-1', 'heimerdinger-0', 'hecarim-6', 'hecarim-5', 'hecarim-4', 'hecarim-3', 'hecarim-2', 'hecarim-1', 'hecarim-0', 'graves-7', 'graves-6', 'graves-5', 'graves-4', 'graves-3', 'graves-2', 'graves-1', 'graves-0', 'gragas-9', 'gragas-8', 'gragas-7', 'gragas-6', 'gragas-5', 'gragas-4', 'gragas-3', 'gragas-3', 'gragas-2', 'gragas-1', 'gragas-0', 'gnar-4', 'gnar-3', 'gnar-2', 'gnar-1', 'gnar-0', 'garen-6', 'garen-5', 'garen-4', 'garen-3', 'garen-2', 'garen-1', 'garen-0', 'garen-10', 'garen-11', 'gangplank-8', 'gangplank-7', 'gangplank-6', 'gangplank-5', 'gangplank-4', 'gangplank-3', 'gangplank-2', 'gangplank-1', 'gangplank-0', 'galio-5', 'galio-4', 'galio-3', 'galio-2', 'galio-1', 'galio-0', 'fizz-9', 'fizz-8', 'fizz-4', 'fizz-3', 'fizz-2', 'fizz-1', 'fizz-0', 'fiora-5', 'fiora-4', 'fiora-3', 'fiora-2', 'fiora-1', 'fiora-0', 'fiddlesticks-7', 'fiddlesticks-6', 'fiddlesticks-5', 'fiddlesticks-4', 'fiddlesticks-3', 'fiddlesticks-2', 'fiddlesticks-1', 'fiddlesticks-0', 'ezreal-9', 'ezreal-8', 'ezreal-7', 'ezreal-6', 'ezreal-5', 'ezreal-4', 'ezreal-3', 'ezreal-2', 'ezreal-1', 'ezreal-0', 'evelynn-4', 'evelynn-3', 'evelynn-2', 'evelynn-1', 'evelynn-0', 'elise-4', 'elise-3', 'elise-2', 'elise-1', 'elise-0', 'ekko-3', 'ekko-2', 'ekko-1', 'ekko-0', 'draven-6', 'draven-5', 'draven-4', 'draven-3', 'draven-2', 'draven-1', 'draven-0', 'drmundo-9', 'drmundo-8', 'drmundo-7', 'drmundo-6', 'drmundo-5', 'drmundo-4', 'drmundo-3', 'drmundo-2', 'drmundo-1', 'drmundo-0', 'diana-3', 'diana-2', 'diana-1', 'diana-0', 'diana-11', 'darius-8', 'darius-4', 'darius-3', 'darius-2', 'darius-1', 'darius-0', 'darius-14', 'corki-8', 'corki-7', 'corki-6', 'corki-5', 'corki-4', 'corki-3', 'corki-2', 'corki-1', 'corki-0', 'chogath-6', 'chogath-5', 'chogath-4', 'chogath-3', 'chogath-2', 'chogath-1', 'chogath-0', 'cassiopeia-4', 'cassiopeia-3', 'cassiopeia-2', 'cassiopeia-1', 'cassiopeia-0', 'camille-1', 'camille-0', 'caitlyn-6', 'caitlyn-5', 'caitlyn-4', 'caitlyn-3', 'caitlyn-2', 'caitlyn-1', 'caitlyn-0', 'caitlyn-10', 'caitlyn-11', 'braum-3', 'braum-2', 'braum-1', 'braum-0', 'braum-10', 'brand-5', 'brand-4', 'brand-3', 'brand-2', 'brand-1', 'brand-0', 'blitzcrank-7', 'blitzcrank-6', 'blitzcrank-5', 'blitzcrank-4', 'blitzcrank-3', 'blitzcrank-2', 'blitzcrank-1', 'blitzcrank-0', 'blitzcrank-11', 'bard-6', 'bard-5', 'bard-4', 'bard-3', 'bard-2', 'bard-1', 'bard-0', 'azir-4', 'azir-3', 'azir-2', 'azir-1', 'azir-0', 'aurelionsol-1', 'aurelionsol-0', 'ashe-8', 'ashe-7', 'ashe-6', 'ashe-5', 'ashe-4', 'ashe-3', 'ashe-2', 'ashe-1', 'ashe-0', 'annie-9', 'annie-8', 'annie-7', 'annie-6', 'annie-5', 'annie-4', 'annie-3', 'annie-2', 'annie-1', 'annie-0', 'annie-10', 'anivia-7', 'anivia-6', 'anivia-5', 'anivia-4', 'anivia-3', 'anivia-2', 'anivia-1', 'anivia-0', 'amumu-8', 'amumu-7', 'amumu-6', 'amumu-5', 'amumu-4', 'amumu-3', 'amumu-2', 'amumu-1', 'amumu-0', 'alistar-9', 'alistar-8', 'alistar-7', 'alistar-6', 'alistar-5', 'alistar-4', 'alistar-3', 'alistar-2', 'alistar-1', 'alistar-0', 'akali-8', 'akali-7', 'akali-6', 'akali-5', 'akali-4', 'akali-3', 'akali-2', 'akali-1', 'akali-0', 'ahri-7', 'ahri-6', 'ahri-5', 'ahri-4', 'ahri-3', 'ahri-2', 'ahri-1', 'ahri-0', 'aatrox-3', 'aatrox-2', 'aatrox-1', 'aatrox-0', 'zacskt', 'teemoskt', 'olafskt', 'namiskt', 'syndraskt', 'jhinskt', 'ekkoskt', 'urgot-8', 'urgot-7', 'urgot-6', 'urgot-5', 'kayn-2', 'kayn', 'sona-8', 'veigaros', 'twitchos', 'tristanaos', 'fizzos', 'zigg', 'nalzah01', 'kayle', 'hecarim', 'brand', 'ornn2', 'ornn', 'syndra', 'soraka', 'nissfortune', 'ezreal', 'ahri', 'yorick', 'singed', 'nasteryi', 'janna', 'fiora', 'cassiopeia', 'ashe', 'zed', 'viktor', 'nidalee', 'katarina', 'gnar', 'evelynn-7', 'evelynn-6', 'evelynn-5', 'evelynn', 'elise', 'annie', 'rengar', 'blitzcrank-9', 'blitzcrank-8', 'zoe-2', 'zoe', 'vi', 'vayne', 'varus', 'poppy', 'kogmaw', 'jinx', 'jhin', 'jax', 'graves', 'draven', 'xinzhao', 'warwick', 'swain-8', 'swain-7', 'swain-6', 'swain-5', 'swain-4', 'rakan', 'nasus', 'nissfortune-15', 'nissfortune-14', 'nissfortune-13', 'nissfortune-12', 'nissfortune-11', 'nissfortune-10', 'lux', 'kaisa-2', 'kaisa', 'jarvan-iv', 'illaoi', 'gragas', 'wukong', 'sivir', 'nissfortune-16', 'irelia-11', 'irelia-10', 'irelia-9', 'irelia-8', 'irelia-7', 'irelia-6', 'galio', 'alistar', 'varus-7', 'twistedfate', 'teemo', 'shen', 'rumble', 'riven', 'evelynn-8', 'zoe3', 'xinzhao-7', 'urgot', 'thresh', 'talon', 'taliya', 'pyke-2', 'pyke', 'poppy-8', 'nunu-15', 'nunu-14', 'nunu-13', 'nunu-12', 'nunu-11', 'nunu-10', 'nunu-9', 'nunu-8', 'lulu', 'lucian', 'jarvan-iv-7', 'irelia-12', 'garen', 'gangplank', 'darius', 'caitlyn', 'braum', 'aurelionsol-2', 'ashe-9', 'akali-18', 'akali-17', 'akali-16', 'akali-15', 'akali-14', 'akali-13', 'akali-12', 'akali-11', 'akali-10', 'akali-9', 'aatrox-7', 'aatrox-6', 'aatrox-5', 'aatrox-4', 'ziggs-6', 'yasuo', 'sona', 'nalphite', 'khazix', 'kayn-3', 'jinx-5']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'lolcoverbyname': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('avatar', 'yorick', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['zyra', 'zilean', 'ziggs', 'zed', 'zac', 'yorick', 'yasuo', 'xinzhao', 'xerath', 'xayah', 'wukong', 'warwick', 'volibear', 'vladimir', 'viktor', 'vi', 'velkoz', 'veigar', 'vayne', 'varus', 'urgot', 'udyr', 'twictch', 'tryndamere', 'trundle', 'tristana', 'thresh', 'twistedfate', 'teemo', 'taric', 'talon', 'taliyah', 'tahmkench', 'syndra', 'swain', 'soraka', 'sona', 'skarner', 'sivir', 'sion', 'singed', 'shyvana', 'shen', 'shaco', 'sejuani', 'ryze', 'rumble', 'riven', 'rengar', 'renekton', 'reksai', 'rammus', 'rakan', 'quinn', 'poppy', 'pantheon', 'orianna', 'olaf', 'nunu', 'nasteryi', 'naokai', 'nalzahar', 'nalphite', 'lux', 'lulu', 'lucian', 'nocturne', 'nedalee', 'nautilus', 'nasus', 'nami', 'norgana', 'noderkaiser', 'nissfortune', 'lissandra', 'leona', 'leesin', 'leblanc', 'kogmaw', 'kled', 'kindred', 'khazix', 'kennen', 'kayn', 'kayle', 'katarina', 'kassadin', 'karthus', 'karma', 'kalista', 'jinx', 'jhin', 'jayce', 'jax', 'jarvan', 'janna', 'ivern', 'irelia', 'illaoi', 'heimerdinger', 'hecarim', 'graves', 'gragas', 'gnar', 'garen', 'gangplank', 'galio', 'fizz', 'fiora', 'fiddlesticks', 'ezreal', 'drmundo', 'evelynn', 'elise', 'ekko', 'draven', 'diana', 'darius', 'corki', 'chogath', 'cassiopeia', 'camille', 'caitlyn', 'braum', 'brand', 'blitzcrank', 'bard', 'azir', 'aurelionsol', 'ashe', 'annie', 'anivia', 'amumu', 'alistar', 'akali', 'ahri', 'aatrox', 'zoe', 'sylas', 'swain-2', 'pyke', 'nunu-2', 'neeko', 'norgana2', 'kayle-2', 'kaisa', 'evelynn-2', 'aatrox-2']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Avatar')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  avatar: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'cyberhunterfb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', '10', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', '10', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coverfreefirefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'kelly', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['a124', 'alok', 'alvaro', 'andrew', 'antonio', 'caroline', 'hayato', 'kapella', 'kelly', 'kla', 'laura', 'naxim', 'niguel', 'nisa', 'noco', 'nikita', 'notora', 'olivia', 'paloma', 'rafael', 'shani', 'steffie']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'gamingmascot': {
            if (!text) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('style', 'reaper', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['bear-2', 'dragon-2', 'hydra', 'lion', 'reaper', 'wolf-2', 'bear', 'eagle', 'iguana', 'shark', 'snake', 'spartan', 'griffin', 'owl', 'wolf', 'tiger', 'wolver', 'dragon']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Style')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  style: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'coveronepiecefb': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('character', 'franky', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['ace', 'brook', 'chopper', 'franky', 'garp', 'jinbei', 'law', 'luffy', 'nerry', 'nami', 'rayleigh', 'robin', 'sabo', 'sanji', 'shanks', 'sunny', 'usopp', 'zoro']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Character')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  character: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerytcsgo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('banner', 'banner-3', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5', 'banner-6', 'banner-7']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  banner: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'fbgamepubgcover': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            if (!text.includes('|')) return reply(lang.maketeamlogo('template', 'cover-4', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            const style = ['cover-1', 'cover-2', 'cover-3', 'cover-4', 'cover-5', 'cover-6', 'cover-7', 'cover-8', 'cover-9', 'cover-10', 'cover-11', 'cover-12']
            if (!style.includes(m2)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Template')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  template: m2
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'banneroflol': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'veigar', 'zeeone', 'ofc', prefix, command))
            var memek = args.join(" ").split("|")
            var m1 = memek[0]
            var m2 = memek[1]
            var m3 = memek[2]
            const style = ['ahri-2', 'neeko', 'nocturne', 'shen-2', 'veigar', 'rakanayah-2', 'zoe-2', 'pantheon-2', 'rammus', 'udyr', 'darius-2', 'ekko-2', 'lablanc', 'leona', 'nissfotune', 'poppy', 'quinn', 'talon-2', 'akali-2', 'irelia-2', 'jinx-2', 'nordekaiser', 'pyke-2', 'renekton', 'rengar', 'sivir', 'sona', 'soraka', 'tristana', 'warwick', 'yuumi', 'ziggs', 'leesin', 'lulu', 'lux', 'naster-yi', 'norgana', 'nasus', 'pantheon', 'pyke', 'qiyana', 'rakan', 'rakanxayah', 'riven', 'shen', 'sylas', 'talon', 'teemo', 'thresh', 'tryndamere', 'varus', 'vayne', 'velkoz', 'vladimir', 'yasuo', 'zed', 'zoe', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvan-iv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'drmundo', 'draven', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerofaov2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'banner', 'ishar', 'zeeone', 'ofc', prefix, command))
            const style = ['airi-2', 'aleister', 'astrid-2', 'ata', 'butterfly-2', 'dirak', 'ignis-2', 'ishar', 'jinna', 'lauriel-3', 'nina-2', 'natalya-2', 'omen-2', 'qi-2', 'quillen3', 'raz', 'roxie-2', 'ryoma-2', 'taara-2', 'violet-3', 'wukong-4', 'wukong-3', 'krixi-2', 'krizziz', 'nurad-5', 'volkath', 'wisp-2', 'wukong-2', 'enzo-2', 'hayate-2', 'annette-2', 'capheny-2', 'celica', 'gildur-2', 'lauriel-2', 'nurad-4', 'quillen-2', 'sephera-2', 'qi', 'nurad-3', 'nurad-2', 'nakroth-2', 'zip', 'diao-chan-2', 'enzo', 'errol', 'joker', 'payna', 'slimz', 'thane', 'toro', 'veres', 'violet-2', 'wisp', 'yena', 'zill', 'arduin', 'arthur', 'batman', 'capheny', 'darcy', 'elsu', 'florentino', 'gildur', 'ignis', 'wukong', 'yena', 'zanis', 'violet', 'tulen', 'sephera', 'nurad', 'nina', 'lindis', 'liliana', 'lauriel', 'krixi', 'kahlii', 'hayate', 'diao-chan', 'butterfly', 'astrid', 'arum', 'annette', 'amily', 'airi', 'zuka', 'zephys', 'zanis', 'yorn', 'xeniel', 'veres', 'veera', 'tel-annas', 'taara', 'superman', 'skud', 'ryoma', 'roxie', 'quillen', 'omen', 'natalya', 'nakroth', 'lubu']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Banner')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  banner: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'teamlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'buffalo', 'zeeone', 'ofc', prefix, command))
            const style = ['cobra', 'dragon', 'eagle2', 'falcon', 'lion2', 'tiger2', 'bear', 'buffalo', 'eagle', 'lion', 'tiger', 'wolf']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'companylogo2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '16', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'companylogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '20', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'gradientlogo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', '3', 'zeeone', 'ofc', prefix, command))
            const style = ['1', '2', '3', '4', '5', '6']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'pencilsketch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'icon', 'panda', 'zeeone', 'ofc', prefix, command))
            const style = ['bird', 'butterfly', 'coffee', 'dove', 'leaf', 'like', 'lotus', 'milk-tea', 'panda', 'tree', 'woman', 'bear', 'bull', 'dragon', 'eagle', 'hawk', 'ninja', 'paw', 'rooster', 'sabertooth', 'skull', 'warrior', 'zebra']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Icon')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  icon: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'gunlogogaming': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'm14ebr', 'zeeone', 'ofc', prefix, command))
            const style = ['ak47', 'ak47-s', 'an94', 'ar15', 'aug', 'awm', 'g36k', 'm4a1', 'm4-s', 'm14ebr', 'm16', 'm60', 'm82a1', 'mp5', 'scar', 'svd', 'xm8', 'xm1014']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'banneroffreefire': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'misha', 'zeeone', 'ofc', prefix, command))
            const style = ['andrew', 'caroline', 'kelly', 'laura', 'maxim', 'miguel', 'misha', 'moco', 'nikita', 'notora', 'olivia', 'steffi']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'letterlogos': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'w', 'zeeone', 'ofc', prefix, command))
            const style = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerofoverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'reinhardt', 'zeeone', 'ofc', prefix, command))
            const style = ['widowmaker', 'tracer', 'symmetra', 'sombra', 'soldier76', 'reinhardt', 'reaper', 'orisa', 'mercy', 'mei', 'genji', 'dva', 'doomfist', 'ashe', 'ana']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerofapex': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'bannerofpubg': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.MaketeamlogoT('teks', 'teks2', 'background', 'bg3', 'zeeone', 'ofc', prefix, command))
            const style = ['bg11', 'bg10', 'bg9', 'bg8', 'bg7', 'bg6', 'bg5', 'bg4', 'bg3', 'bg2', 'bg1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Background')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  background: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'mascotstyle': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon-4', 'zeeone', 'ofc', prefix, command))
            const style = ['dragon-5', 'jet', 'knight', 'skull-3', 'skull-cyborg', 'tiger-4', 'bee-3', 'dragon-4', 'fox-3', 'goat-2', 'kitsune', 'octopus-2', 'piranha', 'wolf', 'bear-2', 'cat', 'ceberus', 'crocodile', 'dinosaur', 'dragon-3', 'eagle-3', 'horse-2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat2', 'demon', 'fox', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', 'skull2', 'tiger3', 'tiger2', 'tiger', 'shark', 'sabertooth', 'rooster', 'rhino', 'puma', 'phoenix', 'panther', 'owl', 'lion', 'horse', 'hornet', 'griffin', 'goat', 'fox', 'eagle', 'dragon2', 'dragon', 'devil', 'cobra', 'bull', 'bear', 'monkey', 'warrior', 'rabbit', 'pirates', 'owl2', 'neonwolf', 'lionking', 'godzilla', 'flashwolf', 'fire', 'eagle2', 'dog', 'mask', 'team', 'pubg', 'drift', 'bee2']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'logoaccording': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'dragon3', 'zeeone', 'ofc', prefix, command))
            const style = ['bear2', 'cat2', 'ceberus', 'crocodile', 'dinosaur', 'dragon3', 'eagle3', 'horse2', 'husky', 'kraken', 'lynx', 'sabertooh', 'assassin', 'bee', 'cat', 'demon', 'fox-2', 'gorilla', 'horus', 'octopus', 'rounin', 'scorpion', '-2', 'tiger-3', 'bg-tiger', 'bg-buffalo', 'chicken', 'bull', 'bg-wolf', 'jaguar', 'horse', 'eagle', 'dragon', 'wolver', 'shark', 'sabertooth', 'rhino', 'phoenix', 'lion', 'hornet', 'griffin', 'bear', 'tiger2', 'panther', 'owl', 'monkey', 'goat', 'fox', 'dragon2', 'devil', 'cobra', 'reaper', 'pirates', 'owl2', 'mask', 'fire', 'eagle2', 'chamois', 'neptune', 'parrots', 'samurai']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'avataroverwatch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            if (!text.includes('|')) return reply(lang.MaketeamlogoT('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
            if (!m3) return reply(lang.maketeamlogo('teks', 'teks2', 'thumb', 'zenyatta', 'zeeone', 'ofc', prefix, command))
            const style = ['mccree', 'mercy', 'zenyatta', 'zarya', 'winston', 'widowmaker', 'tracer', 'torbjorn', 'symmetra', 'sombra', 'soldier76', 'soldier_76', 'roadhog', 'reinhardt', 'reaper2', 'reaper', 'pharah', 'orisa', 'mei', 'lucio', 'junkrat', 'hanzo', 'genji', 'dva', 'bastion', 'ana2', 'ana', 'doomfist', 'bg-1']
            if (!style.includes(m3)) {
               let listt = `${lang.maketeamlogo_(style.length, 'Thumb')}`
               no = 0
               for (var i = 0; i < style.length; i++) {
                  no += 1
                  listt += no.toString() + '.  ' + style[i] + '\n'
               }
               reply(listt)
            }
            else {
               reply(lang.wait())
               let textpro2 = await fetch(api('alfa', '/api/ephoto360/' + command, {
                  text: m1,
                  text2: m2,
                  thumb: m3
               }, 'apikey'))
               if (!textpro2.ok) throw await textpro2.text()
               let img = await textpro2.buffer()
               alpha.sendFile(m.chat, img, 'ephoto360.jpg', lang.ok(), m)
            }
            db.data.users[m.sender].limit -= 1
         }

         break

         case 'asmaulhusna': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  let txt = '*Asmaul Husna*\n\n'
                  txt += `• Latin : ${data.result.latin}\n`
                  txt += `• Arabic : ${data.result.arabic}\n`
                  txt += `• Tr id : ${data.result.translation_id}\n`
                  txt += `• Tr en : ${data.result.translation_en}`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'kisahnabi': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Adam'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  nabi: q
               }, 'apikey'))
               .then(async data => {
                  let txt = '*Kisah Nabi*\n\n'
                  txt += `• Name : ${data.result.name}\n`
                  txt += `• Birth : ${data.result.birth}\n`
                  txt += `• Death Age : ${data.result.death_age}\n`
                  txt += `• Country : ${data.result.country_from}\n`
                  txt += `• Story : ${data.result.story}\n`
                  reply(txt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'jadwalshalat': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Makassar'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  daerah: q
               }, 'apikey'))
               .then(async data => {
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
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'randomquran': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
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
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'randomquran2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, commad, 'Juz', '1'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  juz: q
               }, 'apikey'))
               .then(async data => {
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
                  alpha.sendMessage(from, {
                     audio: {
                        url: short.ayah.audio.primary
                     },
                     mimetype: 'audio/mpeg'
                  }, {
                     quoted: m
                  })
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'listsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {}, 'apikey'))
               .then(async data => {
                  listt = '*List Surah*\n\n'
                  reply(listt + data.result)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'tafsirsurah': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran2(prefix, command, 'Surah', 'Al-fatihah'))
            var asma = await fetchJson(api('alfa', '/api/islam/' + command, {
                  surah: q
               }, 'apikey'))
               .then(async data => {
                  let listt = '*Tafsir Surah*\n\n'
                  let no = 0
                  for (var i = 0; i < data.result.length; i++) {
                     no += 1
                     listt += `• Surah : ${data.result[i].surah}\n`
                     listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
                  }
                  reply(listt)
               })
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'alquranaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `??🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.quran3(prefix, command, 'Surah', 'ayat', '1', '2'))
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {
               ayat: m2,
               surah: m1
            }, 'apikey'))
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
            alpha.sendMessage(from, {
               audio: {
                  url: short.audio.primary
               },
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            })
            reply(listt)
               .catch(e => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'awoawo':
         case 'benedict':
         case 'chat':
         case 'dbfly':
         case 'dino_kuning':
         case 'doge':
         case 'gojosatoru':
         case 'hope_boy':
         case 'jisoo':
         case 'kr_robot':
         case 'kucing':
         case 'lonte':
         case 'manusia_lidi':
         case 'menjamet':
         case 'meow':
         case 'nicholas':
         case 'patrick':
         case 'popoci':
         case 'sponsbob':
         case 'kawan_sponsbob':
         case 'tyni': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            let textpro2 = await fetch(api('alfa', '/api/telegram-sticker/' + command, {}, 'apikey'))
            if (!textpro2.ok) throw await textpro2.text()
            let img = await textpro2.buffer()
            alpha.sendImageAsSticker(m.chat, img, m, {
               packname: global.packname,
               author: global.author
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'brainly': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            let res = await fetch(api('alfa', '/api/search/brainly', {
               query: text
            }, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.json()
            let answer = await img.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n----------------------------------------\n\n')
            reply(answer)
         }
         break
         case 'google': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Indonesia'))
            google({
               'query': text
            }).then(res => {
               let teks = `*Google Search*\n_Query : ${text}_\n\n`
               for (let g of res) {
                  teks += `*Title* : ${g.title}\n`
                  teks += `*Description* : ${g.snippet}\n`
                  teks += `*Link* : ${g.link}\n\n----------------------------------------\n\n`
               }
               reply(teks)
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'fetch':
         case 'get': {
            if (text.length < 2) return reply(lang.KisahNabi(prefix, command, 'https://google.com'))
            if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://'
            let _url = new URL(text)
            let url = global.api(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'apikey')
            let res = await fetch(url)
            if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
            }
            if (!/text|json/.test(res.headers.get('content-type'))) return alpha.sendFile(m.chat, url, 'file', lang.ok(), m)
            let txt = await res.buffer()
            try {
               txt = util.format(JSON.parse(txt + ''))
            }
            catch (e) {
               txt = txt + ''
            }
            finally {
               reply(txt.slice(0, 65536) + '')
            }
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
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
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
                  alpha.sendMessage(from, {
                     caption: lang.ok(),
                     image: fs.readFileSync('./image/nulis/images/buku/setelahkiri.jpg')
                  }, {
                     quoted: m,
                     thumbnail: Buffer.alloc(0)
                  })

               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'nuliskanan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
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
                  alpha.sendMessage(from, {
                     caption: lang.ok(),
                     image: fs.readFileSync('./image/nulis/images/buku/setelahkanan.jpg')
                  }, {
                     quoted: m,
                     thumbnail: Buffer.alloc(0)
                  })

               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'foliokiri': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
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
                  alpha.sendMessage(from, {
                     caption: lang.ok(),
                     image: fs.readFileSync('./image/nulis/images/folio/setelahkiri.jpg')
                  }, {
                     quoted: m,
                     thumbnail: Buffer.alloc(0)
                  })

               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'foliokanan': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
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
                  alpha.sendMessage(from, {
                     caption: lang.ok(),
                     image: fs.readFileSync('./image/nulis/images/folio/setelahkanan.jpg')
                  }, {
                     quoted: m,
                     thumbnail: Buffer.alloc(0)
                  })

               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'bass':
         case 'blown':
         case 'deep':
         case 'earrape':
         case 'fast':
         case 'fat':
         case 'nightcore':
         case 'reverse':
         case 'robot':
         case 'slow':
         case 'smooth':
         case 'tupai':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if ((quoted.msg || quoted).seconds > 60) return reply('Maximum 60 seconds!')
            try {
               let set
               if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
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
                     if (err) return reply(lang.err())
                     let buff = fs.readFileSync(ran)
                     alpha.sendMessage(m.chat, {
                        audio: buff,
                        mimetype: 'audio/mpeg'
                     }, {
                        quoted: m
                     })
                     fs.unlinkSync(ran)
                  })
               }
               else reply(lang.NoAudRep(prefix, command))
            }
            catch (e) {
               reply(lang.err())

            }
            db.data.users[m.sender].limit -= 1
            break
         case 'adventure': {
            rpg.adventure(alpha, m, prefix)
         }
         break
         case 'open': {
            rpg.openc(alpha, m, prefix, args, command)
         }
         break
         case 'bangun':
         case 'build': {
            rpg.build(alpha, m, prefix, args, command)
         }
         break
         case 'berkebon': {
            rpg.berkebon(alpha, m, prefix)
         }
         break
         case 'berdagang': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin ajak berdagang')
            rpg.berdagang(alpha, m, prefix)
         }
         break
         case 'bansos': {
            rpg.bansos(alpha, m, prefix)
         }
         break
         case 'bank': {
            rpg.bank(alpha, m, prefix)
         }
         break
         case 'casino': {
            rpg.casino(alpha, m, prefix, args)
         }
         break
         case 'chop': {
            rpg.chop(alpha, m, prefix)
         }
         break
         case 'collect': {
            rpg.collect(alpha, m, prefix, args, command)
         }
         break
         case 'cook': {
            rpg.cook(alpha, m, prefix, args, command)
         }
         break
         //case 'cd':
         case 'cooldown': {
            rpg.cooldown(alpha, m, prefix, args, command)
         }
         break
         case 'craft': {
            rpg.craft(alpha, m, prefix, args, command)
         }
         break
         case 'claim':
         case 'daily': {
            rpg.daily(alpha, m, prefix)
         }
         break
         case 'dya':
         case 'dno':
         case 'duel': {
            rpg.duel(alpha, m, prefix, args, command)
         }
         break
         case 'feed': {
            rpg.feed(alpha, m, prefix, args)
         }
         break
         case 'tokoikan':
         case 'fishop': {
            rpg.fishop(alpha, m, prefix, args, command)
         }
         break
         case 'hourly': {
            rpg.hourly(alpha, m, prefix)
         }
         break
         case 'inventory':
         case 'inv': {
            rpg.inventory(alpha, m, prefix)
         }
         break

         case 'judi': {
            rpg.judi(alpha, m, prefix, args)
         }
         break
         case 'kandang': {
            rpg.kandang(alpha, m, prefix)
         }
         break
         case 'work':
         case 'kerja': {
            rpg.kerja(alpha, m, prefix, args, command)
         }
         break
         case 'buyall':
         case 'buy': {
            rpg.buy(alpha, m, prefix, args, command)
         }
         break
         case 'koboy': {
            rpg.koboy(alpha, m, prefix, args, command, text)
         }
         break
         case 'kolam': {
            rpg.kolam(alpha, m, prefix)
         }
         break
         case 'mancing': {
            rpg.mancing(alpha, m, prefix, pushname)
         }
         break
         case 'merampok': {
            if (!m.isGroup) return reply(lang.groupOnly())
            let whoi = m.mentionedJid[0]
            if (!whoi) return reply('Tag salah satu yang kamu ingin rampok')
            rpg.merampok(alpha, m, prefix)
         }
         break
         case 'mining': {
            rpg.mining(alpha, m, prefix)
         }
         break
         case 'monthly': {
            rpg.monthly(alpha, m, prefix)
         }
         break
         case 'nabung': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.nabung(alpha, m, prefix, args, command)
         }
         break

         case 'narik': {
            if (!text) return reply(`Contoh penggunaan: ${prefix + command} 100`)
            rpg.narik(alpha, m, prefix, args, command)
         }
         break
         case 'nguli': {
            rpg.nguli(alpha, m, prefix)
         }
         break
         case 'jadiojek':
         case 'ngojek':
         case 'ojek': {
            rpg.ojek(alpha, m, prefix, pushname)
         }
         break
         case 'toko':
         case 'pasar': {
            if (!text) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix + command} jual ayam`)
            rpg.pasar(alpha, m, prefix, args, command)
         }
         break
         case 'buy':
         case 'shell':
         case 'toko':
         case 'shop': {
            if (!text) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            if (!args[0] && !args[1]) return reply(`Contoh penggunaan : ${prefix}shop <Buy|sell> <item> <jumlah>\n*${prefix}shop buy potion 1*`)
            rpg.shop(alpha, m, prefix, args, command)
         }
         break
         case 'slot': {
            rpg.slot(alpha, m, prefix, args, command, text)
         }
         break
         case 'transfer': {
            rpg.transfer(alpha, m, prefix, args)
         }
         break
         case 'heal':
         case 'use': {
            rpg.use(alpha, m, prefix, args, command)
         }
         break
         case 'weekly': {
            rpg.weekly(alpha, m, prefix)
         }
         break
         case 'berburu': {
            rpg.berburu(alpha, m, prefix)
         }
         break
         case 'ceklimit':
         case 'checklimit':
         case 'limit': {
            reply(lang.limitLu(db.data.users[m.sender].limit))
         }
         break
         default:
            if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd) {
               if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               let proses = (db.data.chats[m.chat].setProses || `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, proses, m)
            }


            if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd) {
               if (!m.isGroup) return
               if (!isGroupAdmins && !isGroupOwner && !isCreator) return
               if (!m.quoted) return reply(lang.LockCmd())
               let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
               let sukses = (db.data.chats[m.chat].setDone || `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
               alpha.sendTextWithMentions(m.chat, sukses, m)
            }


            if (budy.startsWith('=>')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())

               function Return(sul) {
                  sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                  if (sat == undefined) {
                     bang = util.format(sul)
                  }
                  return reply(bang)
               }
               try {
                  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
               }
               catch (e) {
                  reply(util.format(e))
               }
            }

            if (budy.startsWith('>')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  let evaled = await eval(budy.slice(2))
                  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                  await reply(evaled)
               }
               catch (err) {
                  await reply(util.format(err))
               }
            }


            if (budy.startsWith('<')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               try {
                  return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
               }
               catch (e) {
                  reply(util.format(e))
               }
            }

            if (budy.startsWith('$')) {
               if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
               mengtermuk = budy.slice(2)
               exec(mengtermuk, (err, stdout) => {
                  if (err) return reply(err)
                  if (stdout) return reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
               })
            }
      }

      //Anti View Once

      if (m.mtype == 'viewOnceMessage') {
         if (global.antiviewonce){
         let msg = m.message.viewOnceMessage.message
         let type = Object.keys(msg)[0]
         let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
         let buffer = Buffer.from([])
let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Makassar').format('HH:mm:ss')} WITA 
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await alpha.sendTextWithMentions(m.chat, teks, m)
  await delay(500)
         for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
         }
         if (/video/.test(type)) {
            return alpha.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
         }
         else if (/image/.test(type)) {
            return alpha.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
         }
      }
      }


      switch (command) {
         case 'tega': {
            if (!(m.chat in tebakgambar)) return
            let json = tebakgambar[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytega', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytega': {
            if (!(m.chat in tebakgambar)) return
            clearTimeout(tebakgambar[m.chat][3])
            delete tebakgambar[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakgambar', 'Soal baru', m)
         }
         break
         case 'tebakgambar': {
            rpg.tebakgambar(tebakgambar, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'teka': {
            if (!(m.chat in tebakkata)) return
            let json = tebakkata[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.yteka', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'yteka': {
            if (!(m.chat in tebakkata)) return
            clearTimeout(tebakkata[m.chat][3])
            delete tebakkata[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakkata', 'Soal baru', m)
         }
         break
         case 'tebakkata': {
            rpg.tebakkata(tebakkata, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tebe': {
            if (!(m.chat in tebakbendera)) return
            let json = tebakbendera[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytebe', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytebe': {
            if (!(m.chat in tebakbendera)) return
            clearTimeout(tebakbendera[m.chat][3])
            delete tebakbendera[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakbendera', 'Soal baru', m)
         }
         break
         case 'tebakbendera': {
            rpg.tebakbendera(tebakbendera, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tekatu': {
            if (!(m.chat in tebakkalimat)) return
            let json = tebakkalimat[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytekatu', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytekatu': {
            if (!(m.chat in tebakkalimat)) return
            clearTimeout(tebakkalimat[m.chat][3])
            delete tebakkalimat[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakkalimat', 'Soal baru', m)
         }
         break
         case 'tebakkalimat': {
            rpg.tebakkalimat(tebakkalimat, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tesi': {
            if (!(m.chat in siapaaku)) return
            let json = siapaaku[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytesi', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytesi': {
            if (!(m.chat in siapaaku)) return
            clearTimeout(siapaaku[m.chat][3])
            delete siapaaku[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebaksiapa', 'Soal baru', m)
         }
         break
         case 'tebaksiapa': {
            rpg.tebaksiapa(siapaaku, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tekabu': {
            if (!(m.chat in tebakkabupaten)) return
            let json = tebakkabupaten[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytekabu', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytekabu': {
            if (!(m.chat in tebakkabupaten)) return
            clearTimeout(tebakkabupaten[m.chat][3])
            delete tebakkabupaten[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakkabupaten', 'Soal baru', m)
         }
         break
         case 'tebakkabupaten': {
            rpg.tebakkabupaten(tebakkabupaten, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'teki': {
            if (!(m.chat in tebakkimia)) return
            let json = tebakkimia[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.yteki', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'yteki': {
            if (!(m.chat in tebakkimia)) return
            clearTimeout(tebakkimia[m.chat][3])
            delete tebakkimia[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebakkimia', 'Soal baru', m)
         }
         break
         case 'tebakkimia': {
            rpg.tebakkimia(tebakkimia, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'teli': {
            if (!(m.chat in tebaklirik)) return
            let json = tebaklirik[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.yteli', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'yteli': {
            if (!(m.chat in tebaklirik)) return
            clearTimeout(tebaklirik[m.chat][3])
            delete tebaklirik[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebaklirik', 'Soal baru', m)
         }
         break
         case 'tebaklirik': {
            rpg.tebaklirik(tebaklirik, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'teteb': {
            if (!(m.chat in tebaktebakan)) return
            let json = tebaktebakan[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.yteteb', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'yteteb': {
            if (!(m.chat in tebaktebakan)) return
            clearTimeout(tebaktebakan[m.chat][3])
            delete tebaktebakan[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tebaktebakan', 'Soal baru', m)
         }
         break
         case 'tebaktebakan': {
            rpg.tebaktebakan(tebaktebakan, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'telo': {
            if (!(m.chat in caklontong)) return
            let json = caklontong[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytelo', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytelo': {
            if (!(m.chat in caklontong)) return
            clearTimeout(caklontong[m.chat][3])
            delete caklontong[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.caklontong', 'Soal baru', m)
         }
         break
         case 'caklontong': {
            rpg.caklontong(caklontong, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tesuka': {
            if (!(m.chat in susunkata)) return
            let json = susunkata[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ytesuka', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ytesuka': {
            if (!(m.chat in susunkata)) return
            clearTimeout(susunkata[m.chat][3])
            delete susunkata[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.susunkata', 'Soal baru', m)
         }
         break
         case 'susunkata': {
            rpg.susunkata(susunkata, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'tete': {
            if (!(m.chat in tekateki)) return
            let json = tekateki[m.chat][1]
            alpha.send1ButMes(m.chat, '```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', '© ' + ownername, '.ttete', 'Dahlah Nyerah Aja✌️', m)
         }
         break
         case 'ttete': {
            if (!(m.chat in tekateki)) return
            clearTimeout(tekateki[m.chat][3])
            delete tekateki[m.chat]
            return alpha.send1ButMes(m.chat, 'Payah lu, gitu aja nyerah', '© ' + ownername, '.tekateki', 'Soal baru', m)
         }
         break
         case 'tekateki': {
            rpg.tekateki(tekateki, alpha, m, lang, fetchJson, ownername)
         }
         break
         case 'db': {
            if (!m.key.fromMe && !isCreator) return
            let evaled = await eval('db')
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            reply(evaled)
         }
         break
         case 'anime':
         case 'animeinfo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            reply(lang.wait())
            rpg.animeinfo(text, m, lang, fetch, prefix, command, sendFileFromUrl)
         }
         break
         case 'apk':
         case 'apksearch':
         case 'searchapk':
         case 'findapk': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Whatsapp'))
            async function apk(query) {
               return new Promise((resolve) => {
                  axios.get('https://rexdl.com/?s=' + query)
                     .then(({
                        data
                     }) => {
                        const $ = cheerio.load(data)
                        const judul = [];
                        const jenis = [];
                        const date = [];
                        const desc = [];
                        const link = [];
                        const thumb = [];
                        const result = [];
                        $('div > div.post-content').each(function (a, b) {
                           judul.push($(b).find('h2.post-title > a').attr('title'))
                           jenis.push($(b).find('p.post-category').text())
                           date.push($(b).find('p.post-date').text())
                           desc.push($(b).find('div.entry.excerpt').text())
                           link.push($(b).find('h2.post-title > a').attr('href'))
                        })
                        $('div > div.post-thumbnail > a > img').each(function (a, b) {
                           thumb.push($(b).attr('data-src'))
                        })
                        for (let i = 0; i < judul.length; i++) {
                           result.push({
                              judul: judul[i],
                              kategori: jenis[i],
                              upload_date: date[i],
                              deskripsi: desc[i],
                              thumb: thumb[i],
                              link: link[i]
                           })
                        }
                        resolve(result)
                     })
               })
            }

            apk(text).then(async res => {
               let txt = `*---「 APK SEARCH 」---*\n\n`
               for (let i of res) {
                  txt += `*Category :* ${i.kategori}\n`
                  txt += `*Upload :* ${i.upload_date}\n`
                  txt += `*Description :* ${i.deskripsi}\n`
                  txt += `*Link :* ${i.link}\n\n-----------------------------------\n\n`
               }
               alpha.sendMessage(m.chat, {
                  image: {
                     url: res[0].thumb
                  },
                  caption: txt
               }, {
                  quoted: m
               })
            }).catch(async _ => await reply('Not found'))
         }
         break
         case 'addsewa': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (text < 2) return reply(`Gunakan dengan cara ${command} *linkgc waktu*\n\nContoh : ${prefix + command} https://chat.whatsapp.com/PnwpPqn0b 30d\n\ns = second\nh = hour\nd=day`)
            if (!isUrl(args[0])) return reply(`Gunakan dengan cara ${command} *linkgc waktu*\n\nContoh : ${prefix + command} https://chat.whatsapp.com/PnwpPqn0b 30d\n\ns = second\nh = hour\nd=day`)
            var urlo = args[0]
            let urlp = urlo.split('https://chat.whatsapp.com/')[1]
            if (!args[1]) return reply(`Waktunya?`)
            var data = await alpha.groupAcceptInvite(urlp)
            if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[1], sewa)
            reply(`Success Add Sewa Group Berwaktu!`)
         }
         break
         case 'delsewa': {
            if (!isCreator) return reply(lang.ownerOnly())
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
            sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            reply(`Sukses`)
         }
         break
         /*case 'sewaadd':
         case 'addsewa': {
             if (!m.isGroup) return reply(lang.groupOnly())
             if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
             if (!args[0] || isNaN(args[0])) return reply(`Masukan angka (jumlah hari sewa)\n\ncontoh:\n${prefix + command} 30\n\nJadi bot akan keluar dari grup setelah 30 hari ke depan`)

             function msToDate(ms) {
                 temp = ms
                 days = Math.floor(ms / (24 * 60 * 60 * 1000));
                 daysms = ms % (24 * 60 * 60 * 1000);
                 hours = Math.floor((daysms) / (60 * 60 * 1000));
                 hoursms = ms % (60 * 60 * 1000);
                 minutes = Math.floor((hoursms) / (60 * 1000));
                 minutesms = ms % (60 * 1000);
                 sec = Math.floor((minutesms) / (1000));
                 return days + "days " + hours + "hours " + minutes + "m";
             }

             var jumlahHari = 86400000 * args[0]
             var now = new Date() * 1
             if (now < db.data.chats[m.chat].expired) {
                 db.data.chats[m.chat].expired += jumlahHari
                 db.data.chats[m.chat].sewa = true
             } else {
                 db.data.chats[m.chat].expired = now + jumlahHari
                 db.data.chats[m.chat].sewa = true
             }
             reply(`「 *SEWA ADD* 」\n\n*Name Group :* ${groupName}\n*Time :* ${args[0]} days.\n*Countdown :* ${msToDate(global.db.data.chats[m.chat].expired - now)}`)

         }
         break
         case 'sewadel':
         case 'delsewa': {
             if (!m.isGroup) return reply(lang.groupOnly())
             if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
             if (new Date() * 1 < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired = 0
             else global.db.data.chats[m.chat].expired = 0
             reply(lang.ok())

         }
         break*/
         case 'delprem':
         case 'unprem':
         case 'delpremium': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())

            function no(number) {
               return number.replace(/\s/g, '').replace(/([@+-])/g, '')
            }

            if (!text) return reply(`*Kek gini bang*\n\n• ${prefix + command} number\n*Example:* ${prefix + command} 62887435047326\n\n• ${prefix + command} @tag\n*Example:* ${prefix + command} @62887435047326`)
            textt = no(text) + "@s.whatsapp.net"
            db.data.users[textt].premium = false
            db.data.users[textt].premiumDate = 0
            db.data.users[textt].limit = global.limitawal.free
            alpha.sendTextWithMentions(m.chat, `*Berhasil menghapus akses premium @${textt.split('@')[0]}.*`, m)

         }
         break
         case 'addprem':
         case 'addpremium': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())

            function no(number) {
               return number.replace(/\s/g, '').replace(/([@+-])/g, '')
            }

            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + "days " + hours + "hours " + minutes + "m";
            }

            var hl = []
            hl[0] = text.split('|')[0]
            hl[0] = no(hl[0]) + "@s.whatsapp.net"
            hl[1] = text.split('|')[1]

            if (!text) return reply(`*Kek gini bang*\n\n• ${prefix}addprem number|days\n*Example:* ${prefix}addprem 62887435047326|30\n\n• ${prefix}addprem @tag|days\n*Example:* ${prefix}addprem @62887435047326|30`)
            if (!hl[1]) return reply(`*Kek gini bang*\n\n• ${prefix}addprem number|days\n*Example:* ${prefix}addprem 62887435047326|30\n\n• ${prefix}addprem @tag|days\n*Example:* ${prefix}addprem @62887435047326|30`)
            if (typeof db.data.users[hl[0]] == 'undefined') reply('Pengguna tidak ada didalam data base')
            var jumlahHari = 86400000 * hl[1]
            var now = new Date() * 1
            db.data.users[hl[0]].premium = true
            db.data.users[hl[0]].limit = limitawal.premium

            if (now < db.data.users[hl[0]].premiumDate) db.data.users[hl[0]].premiumDate += jumlahHari
            else db.data.users[hl[0]].premiumDate = now + jumlahHari
            alpha.sendTextWithMentions(m.chat, `*Berhasil upgrade premium*\nNomor : _@${hl[0].split('@')[0]}_ \nWaktu : _${hl[1]} hari_\nExpired : _${msToDate(db.data.users[hl[0]].premiumDate - now)}_`, m)
            alpha.sendMessage(hl[0], {
               text: `*Berhasil upgrade premium*\nNomor : _@${hl[0].split('@')[0]}_ \nWaktu : _${hl[1]} hari_\nExpired : _${msToDate(db.data.users[hl[0]].premiumDate - now)}_`,
               mentions: [hl[0]]
            }, {})

         }
         break
         case 'ceksewa':
         case 'checksewa': {
            if (!m.isGroup) return reply(lang.groupOnly())

            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
               // +minutes+":"+sec;
            }

            let users = global.db.data.chats
            let {
               sewa,
               expired,
               name
            } = global.db.data.chats[m.chat]
            if (!sewa) return reply('Bot tidak di sewakan di grup ini')
            var textt = ""
            var i = 1
            if (users[m.chat].sewa) {
               textt += `\n\n📛 *Name :* ${global.db.data.chats[m.chat].name}\n🆔 *ID :* ${m.chat}\n⏰ *Expired*: ${msToDate(global.db.data.chats[m.chat].expired - new Date() * 1)}\n-------------------------------------------`
               i += 1
            }

            alpha.sendTextWithMentions(m.chat, `${textt}`, m)
         }
         break
         case 'listprem':
         case 'premlist':
         case 'listpremium': {
            function msToDate(ms) {
               temp = ms
               days = Math.floor(ms / (24 * 60 * 60 * 1000));
               daysms = ms % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = ms % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = ms % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
               // +minutes+":"+sec;
            }

            let users = global.db.data.users
            let {
               registered,
               name
            } = global.db.data.users[m.sender]

            var textt = ""
            var i = 1
            for (let jid in users) {
               if (users[jid].premium) {
                  textt += `\n\n📛 *Name :* ${global.db.data.users[jid].name}\n🆔 *ID :* @${jid.replace(/@.+/, '')}\n⏰ *Expired*: ${msToDate(global.db.data.users[jid].premiumDate - new Date() * 1)}\n-------------------------------------------`
                  i += 1
               }
            }

            alpha.sendTextWithMentions(m.chat, `「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : ${i-1} user*\n${textt}`, m)
         }
         break
         case 'listsewa':
            let list_sewa_list = `「 *GROUP SEWA LIST* 」\n\n*👑 Total Group:* ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
               list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
               if (x.expired === 'PERMANENT') {
                  let ceksewa = 'PERMANENT'
                  list_sewa_list += `*Expire :* PERMANENT\n\n`
               }
               else {
                  let ceksewa = ms(x.expired - Date.now())
                  list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
               }
            }
            alpha.sendMessage(m.chat, {
               text: list_sewa_list
            }, {
               quoted: m
            })
            break
            /*case 'listsewa':
            case 'sewalist': {
                function msToDate(ms) {
                    temp = ms
                    days = Math.floor(ms / (24 * 60 * 60 * 1000));
                    daysms = ms % (24 * 60 * 60 * 1000);
                    hours = Math.floor((daysms) / (60 * 60 * 1000));
                    hoursms = ms % (60 * 60 * 1000);
                    minutes = Math.floor((hoursms) / (60 * 1000));
                    minutesms = ms % (60 * 1000);
                    sec = Math.floor((minutesms) / (1000));
                    return days + " Days " + hours + " Hours " + minutes + " Minutes";
                    // +minutes+":"+sec;
                }

                let users = global.db.data.chats
                let {
                    expired,
                    name
                } = global.db.data.chats[m.chat]

                var textt = ""
                var i = 1
                for (let jid in users) {
                    if (users[jid].sewa) {
                        textt += `\n\n📛 *Name :* ${global.db.data.chats[jid].name}\n🆔 *ID :* ${jid}\n⏰ *Expired*: ${msToDate(global.db.data.chats[jid].expired - new Date() * 1)}\n-------------------------------------------`
                        i += 1
                    }
                }

                alpha.sendTextWithMentions(m.chat, `「 *GROUP SEWA LIST* 」\n\n*👑 Total Group : ${i-1} Groups*\n${textt}`, m)
            }
            break*/
         case 'listblok':
         case 'listblock':
         case 'bloklist':
         case 'blocklist': {
            var textt = ""
            var i = 1
            let block = await alpha.fetchBlocklist()
            for (let jid of block) {
               textt += `${i}. @${jid.split('@')[0]}\n`
               i += 1
            }

            alpha.sendTextWithMentions(m.chat, `「 *BLOCK USER LIST* 」\n\n*🚫 Total Block : ${i-1} users*\n\n${textt}`, m)
         }
         break
         case 'listbanned':
         case 'bannedlist': {
            let users = global.db.data.users
            let {
               registered,
               name
            } = global.db.data.users[m.sender]

            var textt = ""
            var i = 1
            for (let jid in users) {
               if (users[jid].banned) {
                  textt += `\n\n📛 *Name :* ${global.db.data.users[jid].name}\n🆔 *ID :* @${jid.replace(/@.+/, '')}\n📝 *Reason:* ${global.db.data.users[jid].BannedReason}\n-------------------------------------------`
                  i += 1
               }
            }

            alpha.sendTextWithMentions(m.chat, `「 *BANNED USER LIST* 」\n\n*📵 Total Banned : ${i-1} user*\n_Contact the #owner to open your ban_\n${textt}`, m)
         }
         break
         case 'pppanjanggc':
         case 'setppgc2':
         case 'setpppanjanggc': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isBotAdmins) return reply(lang.botNotAdmin())
            if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly())
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            const jimp_1 = require('jimp')
            async function pepe(media) {
               const jimp = await jimp_1.read(media)
               const min = jimp.getWidth()
               const max = jimp.getHeight()
               const cropped = jimp.crop(0, 0, min, max)
               return {
                  img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
                  preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
               }
            }
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            var {
               img
            } = await pepe(media)
            await alpha.query({
               tag: 'iq',
               attrs: {
                  to: m.chat,
                  type: 'set',
                  xmlns: 'w:profile:picture'
               },
               content: [{
                  tag: 'picture',
                  attrs: {
                     type: 'image'
                  },
                  content: img
               }]
            })
            reply(lang.ok())
         }
         break
         case 'pppanjang':
         case 'setppbot2':
         case 'setpppanjang': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!quoted) return reply(lang.NoPpBot(prefix, command))
            if (!/image/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            if (/webp/.test(mime)) return reply(lang.NoPpBot(prefix, command))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            var {
               img
            } = await generateProfilePicture(media)
            await alpha.query({
               tag: 'iq',
               attrs: {
                  to: botNumber,
                  type: 'set',
                  xmlns: 'w:profile:picture'
               },
               content: [{
                  tag: 'picture',
                  attrs: {
                     type: 'image'
                  },
                  content: img
               }]
            })
            reply(lang.ok())
         }
         break
         case 'addstiker':
         case 'addsticker':
         case 'addstik': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!/webp/.test(mime)) return reply(lang.Addstik(prefix, command, 'sticker'))
            if (!text) return reply(lang.Addstik(prefix, command, 'sticker'))
            if (text.includes('|')) return reply(lang.Addstik(prefix, command, 'sticker'))
            if (UdhAdCoy('stiker', text, db.data.RSticker)) return reply(lang.addstik('Sticker', text))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let ran = await './image/toimg-' + getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply('Not support stiker gif')
               TelegraPh(ran).then(async uyy => {
                  var obj_add = {
                     key: text,
                     url: uyy,
                     type: 'stiker',
                  }
                  db.data.RSticker.push(obj_add)
               })
            })
            alpha.sendButMessage(from, lang.AddstikOk(text, 'Sticker', 'liststiker', prefix, command), `© ${ownername}`, [{
               buttonId: '.liststiker',
               buttonText: {
                  displayText: 'Check List Sticker'
               },
               type: 1
            }], {
               quoted: floc
            })
         }
         break
         case 'delstiker':
         case 'delsticker':
         case 'delstik': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (text.includes('|')) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (!UdhAdCoy('stiker', text, db.data.RSticker)) return reply(lang.delstik('Sticker', text))
            ApusAhh('stiker', text, db.data.RSticker)
            reply(lang.ok())
         }
         break
         case 'liststik':
         case 'liststiker':
         case 'liststc': {
            bg = []
            bdd = db.data.RSticker
            teks = '*STICKER LIST :*\n\n'
            for (let x of bdd) {
               if (x.type === 'stiker') {
                  teks += `- ${x.key}\n`
                  bg.push(x.key)
               }
               else {
                  reply(lang.Dellist())
               }
            }
            teks += `\n*Total : ${bg.length}*\n\n${lang.ListStik('sticker')}`
            reply(teks)
         }
         break

         case 'addfoto':
         case 'addimage':
         case 'addphoto':
         case 'addimg': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!/image/.test(mime)) return reply(lang.Addstik(prefix, command, 'image'))
            if (!text) return reply(lang.Addstik(prefix, command, 'image'))
            if (UdhAdCoy('image', text, db.data.RSticker)) return reply(lang.addstik('Image', text))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let anu = await TelegraPh(media)
            var obj_add = {
               key: text,
               url: util.format(anu),
               type: 'image',
            }
            db.data.RImage.push(obj_add)
            alpha.sendButMessage(from, lang.AddstikOk(text, 'Image', 'listimage', prefix, command), `© ${ownername}`, [{
               buttonId: '.listimage',
               buttonText: {
                  displayText: 'Check List Image'
               },
               type: 1
            }], {
               quoted: fkontak
            })
         }
         break
         case 'delfoto':
         case 'delimage':
         case 'delphoto':
         case 'delimg': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (text.includes('|')) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (!UdhAdCoy('image', text, db.data.RImage)) return reply(lang.delstik('Image', text))
            ApusAhh('image', text, db.data.RImage)
            reply(lang.ok())
         }
         break
         case 'listfoto':
         case 'listphoto':
         case 'listimage':
         case 'imagelist':
         case 'listimg': {
            bg = []
            bdd = db.data.RImage
            teks = '*IMAGE LIST :*\n\n'
            for (let x of bdd) {
               if (x.type === 'image') {
                  teks += `- ${x.key}\n`
                  bg.push(x.key)
               }
               else {
                  reply(lang.Dellist())
               }
            }
            teks += `\n*Total : ${bg.length}*\n\n${lang.ListStik('Image')}`
            reply(teks)
         }
         break
         case 'addvideo':
         case 'addvidio':
         case 'addvid': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!/video/.test(mime)) return reply(lang.Addstik(prefix, command, 'video'))
            if ((quoted.msg || quoted).seconds > 11) return reply(lang.AddstikOk_('10', 'video'))
            if (!text) return reply(lang.Addstik(prefix, command, 'video'))
            if (UdhAdCoy('video', text, db.data.RVideo)) return reply(lang.addstik('video', text))
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let anu = await TelegraPh(media)
            var obj_add = {
               key: text,
               url: util.format(anu),
               type: 'video',
            }
            db.data.RVideo.push(obj_add)
            alpha.sendButMessage(from, lang.AddstikOk(text, 'Video', 'listvideo', prefix, command), `© ${ownername}`, [{
               buttonId: '.listvideo',
               buttonText: {
                  displayText: 'Check List Video'
               },
               type: 1
            }], {
               quoted: fgif
            })
         }
         break
         case 'delvideo':
         case 'delvidio':
         case 'delvid': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (text.includes('|')) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (!UdhAdCoy('video', text, db.data.RVideo)) return reply(lang.delstik('video', text))
            ApusAhh('video', text, db.data.RVideo)
            reply(lang.ok())
         }
         break
         case 'videolist':
         case 'listvidio':
         case 'listvid':
         case 'listvideo': {
            bg = []
            bdd = db.data.RVideo
            teks = '*VIDEO LIST :*\n\n'
            for (let x of bdd) {
               if (x.type === 'video') {
                  teks += `- ${x.key}\n`
                  bg.push(x.key)
               }
               else {
                  reply(lang.Dellist())
               }
            }
            teks += `\n*Total : ${bg.length}*\n\n${lang.ListStik('video')}`
            reply(teks)
         }
         break

         case 'addaud':
         case 'addaudio':
         case 'addvn': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!/audio/.test(mime)) return reply(lang.Addstik(prefix, command, 'audio'))
            if ((quoted.msg || quoted).seconds > 31) return reply(lang.AddstikOk_('30', 'audio'))
            if (!text) return reply(lang.Addstik(prefix, command, 'audio'))
            if (UdhAdCoy('audio', text, db.data.RVn)) return reply(lang.delstik('audio', text))
            let media = await alpha.downloadMediaMessage(quoted)
            async function floNime(medianya, options = {}) {
               const {
                  ext
               } = await fromBuffer(medianya) || options.ext
               var form = new FormData()
               form.append('file', medianya, 'tmp.' + ext)
               jsonnya = await fetch('https://express-uploader.zeeoneofc.repl.co/upload', {
                     method: 'POST',
                     body: form
                  })
                  .then((response) => response.json())
                  .then((result) => {
                     return result
                  })
                  .catch(e => {
                     return e
                  })
               return jsonnya
            }

            let anu = await floNime(media)
            var obj_add = {
               key: text,
               url: util.format(anu.result.url),
               type: 'audio',
            }
            db.data.RVn.push(obj_add)
            alpha.sendButMessage(from, lang.AddstikOk(text, 'Audio', 'listvn', prefix, command), `© ${ownername}`, [{
               buttonId: '.listvn',
               buttonText: {
                  displayText: 'Check List Vn'
               },
               type: 1
            }], {
               quoted: fgif
            })
            //reply()
         }
         break
         case 'delaud':
         case 'delaudio':
         case 'delvn': {
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (text.includes('|')) return reply(lang.KisahNabi(prefix, command, 'oi'))
            if (!UdhAdCoy('audio', text, db.data.RVn)) return reply(lang.delstik('audio', text))
            ApusAhh('audio', text, db.data.RVn)
            reply(lang.ok())
         }
         break
         case 'listvn':
         case 'listaudio': {
            bg = []
            bdd = db.data.RVn
            teks = '*AUDIO & VN LIST :*\n\n'
            for (let x of bdd) {
               if (x.type === 'audio') {
                  teks += `- ${x.key}\n`
                  bg.push(x.key)
               }
               else {
                  reply(lang.Dellist())
               }
            }
            teks += `\n*Total : ${bg.length}*\n\n${lang.ListStik('vn')}`
            reply(teks)
         }
         break
         case 'facebookhd':
         case 'fbhd':
         case 'facebooksd':
         case 'fbsd':
         case 'facebook':
         case 'fb':
         case 'fbdl':
         case 'facebookdl': {
            if (!text) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            if (!text.includes('facebook.com') && !text.includes('fb.watch')) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            await reply(lang.wait())
            const {
               savefrom
            } = require('@bochilteam/scraper')
            savefrom(text).then(async data => {
                  if (data.meta.duration.replace(':', '') > 270) {
                     alpha.sendVideo(m.chat, data.url[0].url, false, lang.ok(), m, {})
                  }
                  else {
                     alpha.sendVideo(m.chat, data.url[1].url, false, lang.ok(), m, {})
                  }
               })
               .catch((err) => {
                  reply(lang.err())
               })
         }
         break
         case 'facebookaudio':
         case 'fbaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)

            if (!text) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            if (!text.includes('facebook.com') && !text.includes('fb.watch')) return reply(lang.KisahNabi(prefix, command, 'url Facebook video'))
            await reply(lang.wait())
            const {
               savefrom
            } = require('@bochilteam/scraper')
            savefrom(text).then(async data => {
                  alpha.sendAudio(m.chat, data.url[1].url, m, false, {})
               })
               .catch((err) => {
                  reply(lang.err())
               })
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'tiktokmp4':
         case 'tiktokwm':
         case 'tiktok':
         case 'tiktoknowm': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'url tiktok video'))
            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(lang.KisahNabi(prefix, command, 'url tiktok video'))
            reply(lang.wait())
            const {
               tiktokdl,
               tiktokdlv3,
               tiktokdlv2
            } = require('@bochilteam/scraper')
            const {
               author: {
                  nickname
               },
               video,
               description
            } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
            const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
            alpha.sendMessage(m.chat, {
                  video: {
                     url: url
                  },
                  caption: lang.ok(),
                  mimetype: 'video/mp4'
               }, {
                  quoted: m
               })
               .catch(async _ => await reply(lang.err()))

            /*async function tiktokk(url) {
                try {
                    const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
                    let a = cheerio.load(tokenn.data);
                    let token = a("#token").attr("value");
                    const param = {
                        url: url,
                        token: token,
                    };
                    const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                            method: "post",
                            data: new URLSearchParams(Object.entries(param)),
                            headers: {
                                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                                "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                            },
                        }
                    );
                    return {
                        status: 200,
                        author: '-',
                        title: data.title,
                        thumbnail: "https:" + data.thumbnail,
                        duration: data.duration,
                        media: data.medias,
                    };
                } catch (e) {
                    return e
                }
            }

            tiktokk(args[0]).then(async data =>{
            await alpha.sendMessage(m.chat, {video : {url : data.media[1].url}, mimetype:'video/mp4'}, {quoted:m})
            .catch((err) => {
                                reply(lang.serverErr)
                            })
            })*/
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'tiktokmp3':
         case 'tiktokmusik':
         case 'tiktokmusic':
         case 'tiktokaudio': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'url tiktok video'))
            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(lang.KisahNabi(prefix, command, 'url tiktok video'))
            reply(lang.wait())
            const {
               tiktokdl,
               tiktokdlv3,
               tiktokdlv2
            } = require('@bochilteam/scraper')
            const {
               author: {
                  nickname
               },
               video,
               description
            } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
            const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
            alpha.sendMessage(m.chat, {
               audio: {
                  url: url
               },
               mimetype: 'audio/mpeg'
            }, {
               quoted: m
            }).catch((err) => {
               reply(lang.serverErr)
            })
            /*async function tiktok(url) {
                try {
                    const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
                    let a = cheerio.load(tokenn.data);
                    let token = a("#token").attr("value");
                    const param = {
                        url: url,
                        token: token,
                    };
                    const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                            method: "post",
                            data: new URLSearchParams(Object.entries(param)),
                            headers: {
                                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                                "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                            },
                        }
                    );
                    return {
                        status: 200,
                        author: '-',
                        title: data.title,
                        thumbnail: "https:" + data.thumbnail,
                        duration: data.duration,
                        media: data.medias,
                    };
                } catch (e) {
                    return e
                }
            }

            tiktok(args[0]).then(async data =>{
            alpha.sendMessage(m.chat, {audio : {url : data.media[1].url}, mimetype:'audio/mpeg'}, {quoted:m}).catch((err) => {
                                reply(lang.serverErr)
                            })
            })*/
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'igstory':
         case 'instastory':
         case 'instagramstory':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!q) return reply(lang.KisahNabi(prefix, command, 'instagram'))
            pepe = `${q}`
            hx.igstory(args[0]).then(async result => {
                  let linkk = await getBuffer(result.user.profilePicUrl)
                  var but = [{
                        "urlButton": {
                           "displayText": "Rest Api's",
                           "url": `${myweb}`
                        }
                     },
                     {
                        "urlButton": {
                           "displayText": "My Website",
                           "url": `${myweb2}`

                        }
                     },
                     {
                        "quickReplyButton": {
                           "displayText": "OWNER",
                           "id": `.owner`
                        }
                     },
                     {
                        "quickReplyButton": {
                           "displayText": "RULES",
                           "id": `.rules`
                        }
                     },
                     {
                        "quickReplyButton": {
                           "displayText": "DONATE",
                           "id": `.donate`
                        }
                     }
                  ]
                  await alpha.send5ButLoc(from, `*----「 INSTAGRAM STORY 」----*${enter}${enter}🆔 *ID :* ${result.user.id}${enter}📛 *Username :* ${result.user.username}${enter}🍁 *Bio* : ${result.user.biography}${enter}💋 *Fullname :* ${result.user.fullName}${enter}💌 *Followers :* ${result.user.followers}${enter}🎀 *Following :* ${result.user.following}${enter}*🔗 Link :* https://instagram.com/${result.user.username}${enter}*💢 Total :* ${result.medias.length} Media${enter}${enter}_Tunggu beberapa saat media akan dikirim_`, `© ${ownername}`, linkk, but)

                  //await alpha.sendMessage(from, {image: linkk, caption: `*----「 INSTAGRAM STORY 」----*${enter}${enter}🆔 *ID :* ${result.user.id}${enter}📛 *Username :* ${result.user.username}${enter}💋 *Fullname :* ${result.user.fullName}${enter}💌 *Followers :* ${result.user.followers}${enter}*🔗 Link :* https://instagram.com/${result.user.username}${enter}*💢 Total :* ${result.medias.length} Media${enter}${enter}_Tunggu beberapa saat media akan dikirim_`})
                  for (let i of result.medias) {
                     if (i.url.includes('mp4')) {
                        let link = await getBuffer(i.url)
                        alpha.sendMessage(from, {
                           video: link,
                           caption: `Instagram • ${i.type}`
                        }, {
                           quoted: m
                        })
                     }
                     else {
                        let link = await getBuffer(i.url)
                        alpha.sendMessage(from, {
                           image: link,
                           caption: `Instagram • ${i.type}`
                        }, {
                           quoted: m
                        })
                     }
                  }
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break
         case 'ig':
         case 'igdl':
         case 'igphoto':
         case 'instaphoto':
         case 'instafoto':
         case 'igfoto':
         case 'igvideo':
         case 'instavideo':
         case 'instavid':
         case 'igreels':
         case 'instareels':
         case 'instareel':
         case 'igtv':
         case 'instatv':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'url Instagram'))
            await reply(lang.wait())
            /*await hx.igdl(text)
	    .then(async(result) => {
await alpha.sendMessage(m.chat, {image : { url : result.user.profilePicUrl } , caption: `「 *INSTAGRAM DOWNLOADER* 」${enter}${enter}🆔 *ID :* ${result.user.id}${enter}📛 *Username :* ${result.user.username}${enter}💋 *Fullname :* ${result.user.fullName}${enter}💌 *Followers :* ${result.user.followers}${enter}✨ *Following :* ${result.user.following}${enter}*🔗 Link :* https://instagram.com/${result.user.username}${enter}*💢 Total :* ${result.medias.length} Media${enter}${enter}_Tunggu beberapa saat media akan dikirim_`}, {quoted: m})
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    alpha.sendMessage(m.chat, {video : {url : i.url}, mimetype:'video/mp4'}, {quoted:m})
                } else {
                      alpha.sendMessage(m.chat, {image : {url : i.url}}, {quoted:m})
                }
            }
            })*/
            const {
               instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, instagramStory, instagramStoryv2
            } = require('@bochilteam/scraper')
            const results = await instagramdl(args[0])
               .catch(async _ => await instagramdlv2(args[0]))
               .catch(async _ => await instagramdlv3(args[0]))
               .catch(async _ => await instagramdlv4(args[0]))
            for (const {
                  url
               } of results) await sendFileFromUrl(m.chat, url, lang.ok(), m)
               .catch(async _ => await reply(lang.err()))
            db.data.users[m.sender].limit -= 1

            break
         case 'ytshortsmp3':
         case 'ytshortmp3':
         case 'mp3':
         case 'ytmp3': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_\n\n🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            if (!text.includes('youtu.be') && !text.includes('youtube.com')) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            await reply(lang.wait())
            const {
               youtubedl,
               youtubedlv2,
               youtubedlv3
            } = require('@bochilteam/scraper')
            limit = 100
            jk = args[0]
            let chat = db.data.chats[m.chat]
            const isY = /y(es)/gi.test(jk)
            const {
               thumbnail,
               audio: _audio,
               title
            } = await youtubedl(jk).catch(async _ => await youtubedlv2(jk)).catch(async _ => await youtubedlv3(jk))

            const limitedSize = (isCreator ? 2000 : limit) * 1024
            let audio, source, res, link, lastError, isLimit
            for (let i in _audio) {
               try {
                  audio = _audio[i]
                  if (isNaN(audio.fileSize)) continue
                  isLimit = limitedSize < audio.fileSize
                  if (isLimit) continue
                  link = await audio.download()
                  if (link) res = await fetch(link)
                  if (audio.fileSize > 50000) return reply('Size audio melebihi 50MB')
                  isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
                  if (isLimit) continue
                  if (res) source = await res.arrayBuffer()
                  if (source instanceof ArrayBuffer) break
               }
               catch (e) {
                  audio = link = source = null
                  lastError = e
               }
            }
            if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')

            //let o = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
            let ggnya = await getBuffer(thumbnail)
            if (!isY && !isLimit) await sendButLoc(alpha, m.chat, `-----「 *YOUTUBE MP3* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${audio.fileSizeH}
*🚀 Quality:* ${audio.quality}
*${isLimit ? 'Untuk durasi lebih dari batas disajikan dalam bentuk link ' : ''}Link:* ${link}\n\nSilahkan download melalui link diatas jika media tidak dikirim.`, '©' + ownername, ggnya, [{
                  buttonId: `.donasi`,
                  buttonText: {
                     displayText: '🎂 Donasi'
                  },
                  type: 1
               },
               {
                  buttonId: `.owner`,
                  buttonText: {
                     displayText: 'Owner 👤'
                  },
                  type: 1
               }
            ], {
               userJid: m.chat,
               quoted: m
            })
            if (!isLimit) await alpha.sendMessage(m.chat, {
                  audio: {
                     url: link
                  },
                  mimetype: 'audio/mpeg'
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            /*let ttnya = await fetchJson (`https://greetings.zeeoneofc2.repl.co/api/ytmp4?query=${q}`)
                if(ttnya.result == 'undefined') return reply(lang.serverErr)
const { title, result, size , thumb, views, likes, dislike, channel, uploadDate, desc } = ttnya.result
let ggnya = await getBuffer (thumb)              
       	if (Number(size.replace(' MB','')) >= 100) return await sendButLoc(alpha, m.chat,  `-----「 *YOUTUBE MP3* 」-----

💬 Title : ${title}
📺 Views : ${views}
💦 Size : ${size}
▶️ Channel : ${channel}
📆 Upload : ${uploadDate}
🔗 URL Video : ${q}
📝 Description : ${desc ? desc.slice(0,100) + '...': '-'}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_` ,  '©' + ownername, ggnya, [
{buttonId: `.donasi` , buttonText: {displayText: '🎂 Donasi'}, type: 1},
{buttonId: `.owner` , buttonText: {displayText: 'Owner 👤'}, type: 1}
], {userJid: m.chat, quoted: m})

let thumbInfo = `-----「 *YOUTUBE MP3* 」-----

💬 Title : ${title}
📺 Views : ${views}
💦 Size : ${size}
▶️ Channel : ${channel}
📆 Upload : ${uploadDate}
🔗 URL Video : ${q}
📝 Description : ${desc ? desc.slice(0,100) + '...': '-'}`

await sendButLoc(alpha, m.chat,  thumbInfo ,  '©' + ownername, ggnya, [
{buttonId: `.donasi` , buttonText: {displayText: '🎂 Donasi'}, type: 1},
{buttonId: `.owner` , buttonText: {displayText: 'Owner 👤'}, type: 1}
], {userJid: m.chat, quoted: m})
alpha.sendMessage(m.chat, {audio : {url : result}, mimetype:'audio/mpeg'}, {quoted:m})      
*/
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'lirik':
         case 'liriklagu': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'indonesia raya'))
            reply(lang.wait())
            let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
            if (!anu.data) return reply('server eror')
            let anuu = await fetchJson(anu.data[0].songLyrics)
            let {
               artist,
               songTitle,
               songLyrics
            } = anuu.data
            reply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
               .catch((e) => {
                  //console.log(e)
                  reply(`Judul lagu tidak ditemukan`)

               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'kbbi':{
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'indonesia'))
            reply(lang.wait())
            const {
               kbbi
            } = require('@bochilteam/scraper')
            let res = await kbbi(text)
            reply(`
${res.map(v => `
*📌 ${v.title}*
${v.means.map(v => '- ' + v).join('\n')}
`).join('\n').trim()}

Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim())
               .catch((e) => {
                  //console.log(e)
                  reply(`not found`)

               })
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'mediafire': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'https://www.mediafire.com/file/6tknikx5f3jfsh8/AlphabotV16.zip/file'))
            if (!text.includes('mediafire')) return reply(lang.KisahNabi(prefix, command, 'https://www.mediafire.com/file/6tknikx5f3jfsh8/AlphabotV16.zip/file'))
            const mf = async (url) => {
               const ress = await axios.get(url)
               const $ = cheerio.load(ress.data)
               const hasill = []
               const linkk = $('a#downloadButton').attr('href')
               const sizee = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
               const seplitt = linkk.split('/')
               const naman = seplitt[5]
               mimep = naman.split('.')
               mimee = mimep[1]
               hasill.push({
                  naman,
                  mimee,
                  sizee,
                  linkk
               })
               return hasill
            }
            kom = q.split('?d')[0]
            mf(`${kom}`).then(async da => {
               for (var i = 0; i < da.length; i++) {
                  let pa = await getBuffer(picak + 'Mediafire Download')
                  if (da[i].sizee.replace('MB', '') >= 100 || da[i].sizee.replace('GB', '') >= 1) return await sendButLoc(alpha, m.chat, `*----「 Mediafire Download 」----*

📬 Name : ${da[i].naman}
📁 Type : ${da[i].mimee}
⚠️ Size : ${da[i].sizee}
🌀 Link : ${da[i].linkk}

_Untuk size lebih dari batas disajikan dalam bentuk link_`, '©' + ownername, pa, [{
                        buttonId: `.owner`,
                        buttonText: {
                           displayText: '🙍‍♂️ Owner'
                        },
                        type: 1
                     },
                     {
                        buttonId: `.donasi`,
                        buttonText: {
                           displayText: 'Donation 💰'
                        },
                        type: 1
                     }
                  ], {
                     userJid: m.chat,
                     quoted: m
                  })

                  sendButLoc(alpha, m.chat, `*----「 Mediafire Download 」----*

📬 Name : ${da[i].naman}
📁 Type : ${da[i].mimee}
⚠️ Size : ${da[i].sizee}
🌀 Link : ${da[i].linkk}

_Proses pengiriman file, tunggu sebentar..._`, '©' + ownername, pa, [{
                        buttonId: `.owner`,
                        buttonText: {
                           displayText: '🙍‍♂️ Owner'
                        },
                        type: 1
                     },
                     {
                        buttonId: `.donasi`,
                        buttonText: {
                           displayText: 'Donation 💰'
                        },
                        type: 1
                     }
                  ], {
                     userJid: m.chat,
                     quoted: m
                  })

                  if (da[i].mimee.includes('mp4')) {
                     alpha.sendMessage(from, {
                        video: {
                           url: da[i].linkk
                        },
                        mimetype: 'video/mp4'
                     }, {
                        quoted: m
                     })
                  }
                  else if (da[i].mimee.includes('mp3')) {
                     alpha.sendMessage(from, {
                        audio: {
                           url: da[i].linkk
                        },
                        mimetype: 'audio/mpeg'
                     }, {
                        quoted: m
                     })
                  }
                  else {
                     alpha.sendMessage(from, {
                        document: {
                           url: da[i].linkk
                        },
                        mimetype: 'application/' + da[i].mimee,
                        fileName: da[i].naman
                     }, {
                        quoted: m
                     })
                  }
               }
            }).catch((err) => {
               reply(lang.serverErr)
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'youtube':
         case 'yt':
         case 'ytv':
         case 'mp4':
         case 'ytmp4':
         case 'ytshorts':
         case 'ytshort': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮?? _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            if (!isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            if (!text.includes('youtu.be') && !text.includes('youtube.com')) return reply(lang.KisahNabi(prefix, command, 'https://youtu.be/7wfSvv4AHsQ'))
            await reply(lang.wait())
            const {
               youtubedl,
               youtubedlv2,
               youtubedlv3
            } = require('@bochilteam/scraper')
            limit = 100
            jk = args[0]
            let chat = db.data.chats[m.chat]
            const isY = /y(es)/gi.test(jk)
            const {
               thumbnail,
               video: _video,
               title
            } = await youtubedl(jk).catch(async _ => await youtubedlv2(jk)).catch(async _ => await youtubedlv3(jk))

            const limitedSize = (isCreator ? 2000 : limit) * 1024
            let video, source, res, link, lastError, isLimit
            for (let i in _video) {
               try {
                  video = _video[i]
                  if (isNaN(video.fileSize)) continue
                  isLimit = limitedSize < video.fileSize
                  if (isLimit) continue
                  link = await video.download()
                  if (link) res = await fetch(link)
                  if (video.fileSize > 50000) return reply('Size video melebihi 50MB')
                  isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
                  if (isLimit) continue
                  if (res) source = await res.arrayBuffer()
                  if (source instanceof ArrayBuffer) break
               }
               catch (e) {
                  video = link = source = null
                  lastError = e
               }
            }
            if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')

            //let o = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
            let ggnya = await getBuffer(thumbnail)
            if (!isY && !isLimit) await sendButLoc(alpha, m.chat, `-----「 *YOUTUBE MP4* 」-----

*💬 Title:* ${title}
*▶️ Size:* ${video.fileSizeH}
*🚀 Quality:* ${video.quality}
*${isLimit ? 'Untuk durasi lebih dari batas disajikan dalam bentuk link' : ''}Link:* ${link}\n\nSilahkan download melalui link diatas jika media tidak dikirim.`, '©' + ownername, ggnya, [{
                  buttonId: `.donasi`,
                  buttonText: {
                     displayText: '🎂 Donasi'
                  },
                  type: 1
               },
               {
                  buttonId: `.owner`,
                  buttonText: {
                     displayText: 'Owner 👤'
                  },
                  type: 1
               }
            ], {
               userJid: m.chat,
               quoted: m
            })
            if (!isLimit) await alpha.sendMessage(m.chat, {
                  video: {
                     url: link
                  },
                  mimetype: 'video/mp4'
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            /*let ttnya = await fetchJson (`https://greetings.zeeoneofc2.repl.co/api/ytmp4?query=${q}`)
            if(ttnya.result == 'undefined') return reply(lang.serverErr)
            const { title, result, size , thumb, views, likes, dislike, channel, uploadDate, desc } = ttnya.result
            let ggnya = await getBuffer (thumb)              
                   	if (Number(size.replace(' MB','')) >= 100) return await sendButLoc(alpha, m.chat,  `-----「 *YOUTUBE MP4* 」-----

            💬 Title : ${title}
            📺 Views : ${views}
            💦 Size : ${size}
            ▶️ Channel : ${channel}
            📆 Upload : ${uploadDate}
            🔗 URL Video : ${q}
            📝 Description : ${desc ? desc.slice(0,100) + '...': '-'}

            _Untuk durasi lebih dari batas disajikan dalam bentuk link_` ,  '©' + ownername, ggnya, [
            {buttonId: `.donasi` , buttonText: {displayText: '🎂 Donasi'}, type: 1},
            {buttonId: `.owner` , buttonText: {displayText: 'Owner 👤'}, type: 1}
            ], {userJid: m.chat, quoted: m})
            //
            let thumbInfo = `-----「 *YOUTUBE MP4* 」-----

            💬 Title : ${title}
            📺 Views : ${views}
            💦 Size : ${size}
            ▶️ Channel : ${channel}
            📆 Upload : ${uploadDate}
            🔗 URL Video : ${q}
            📝 Description : ${desc ? desc.slice(0,100) + '...': '-'}`

            await sendButLoc(alpha, m.chat,  thumbInfo ,  '©' + ownername, ggnya, [
            {buttonId: `.donasi` , buttonText: {displayText: '🎂 Donasi'}, type: 1},
            {buttonId: `.owner` , buttonText: {displayText: 'Owner 👤'}, type: 1}
            ], {userJid: m.chat, quoted: m})
            alpha.sendMessage(m.chat, {video : {url : result}, mimetype:'video/mp4'}, {quoted:m})      
            .catch((err) => {
                                reply(lang.serverErr)
                            })*/
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'play': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!q) return reply(lang.KisahNabi(prefix, command, 'Bot WhatsApp Zeeoneofc'))
            if (isUrl(q)) return reply(lang.KisahNabi(prefix, command, 'Bot WhatsApp Zeeoneofc'))
            reply(lang.wait())
            //let reso = await fetchJson(`https://greetings.zeeoneofc2.repl.co/api/yts?q=${q}`)
            let yts = require("yt-search")
            let reso = await yts(q)
            let res = reso
            let lok = await getBuffer(res.all[0].image)
            let thumbInfo = `-----「 *YOUTUBE PLAY* 」-----

🆔 ID : ${res.all[0].videoId}
💬 Title : ${res.all[0].title}
📺 Views : ${res.all[0].views}
⏰ Duration : ${res.all[0].duration}
▶️ Channel : ${res.all[0].author.name}
📆 Upload : ${res.all[0].ago}
🔗 URL Video : ${res.videos[0].url}
📝 Description : ${res.videos[0].description}`
            await sendButLoc(alpha, m.chat, thumbInfo, '©' + ownername, lok, [{
                     buttonId: `.ytmp3 ${res.videos[0].url}`,
                     buttonText: {
                        displayText: '🥁 Audio'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.ytmp4 ${res.videos[0].url}`,
                     buttonText: {
                        displayText: 'Video 🎦'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
         }
         break
         case 'sc':
         case 'source': {
            let gam = await getBuffer(`${picak}Source Code`)
            await sendButLoc(alpha, m.chat, lang.source(), '©' + ownername, gam, [{
                  buttonId: `.owner`,
                  buttonText: {
                     displayText: '🙍‍♂️ Owner'
                  },
                  type: 1
               },
               {
                  buttonId: `.donasi`,
                  buttonText: {
                     displayText: 'Donation 💰'
                  },
                  type: 1
               }
            ], {
               userJid: m.chat,
               quoted: m
            })
         }
         break
         //Sticker Effect
         case 'jail':
         case 'red':
         case 'gay':
         case 'blue':
         case 'sepia':
         case 'green':
         case 'glass':
         case 'invert':
         case 'blurple':
         case 'blurple2':
         case 'wasted':
         case 'passed':
         case 'triggered':
         case 'comrade':
         case 'greyscale':
         case 'threshold':
         case 'brightness':
         case 'invertgreyscale': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.TbJail(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               let sefek = await alpha.downloadAndSaveMediaMessage(quoted)
               let fatz = await TelegraPh(sefek)
               let stikfek = `https://some-random-api.ml/canvas/${command}?avatar=${fatz}`
               let fatmd = await alpha.sendImageAsSticker(m.chat, stikfek, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(fatmd)
               await fs.unlinkSync(sefek)
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) return reply('emror')
                  TelegraPh(ran).then(async uyy => {
                     let stiks = `https://some-random-api.ml/canvas/${command}?avatar=${uyy}`
                     let fthz = await alpha.sendImageAsSticker(m.chat, stiks, m, {
                        packname: global.packname,
                        author: global.author
                     })
                     await fs.unlinkSync(fthz)
                     await fs.unlinkSync(ran)
                  })
               })
            }
            else {
               reply(lang.TbJail(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'rip':
         case 'fire':
         case 'ps4':
         case 'burn':
         case 'circle':
         case 'scary':
         case 'sniper':
         case 'redple':
         case 'frame':
         case 'distort':
         case 'utatoo':
         case 'wanted':
         case 'thanos':
         case 'pixelize':
         case 'dictator':
         case 'deepfry':
         case 'sharpen':
         case 'rejected':
         case 'brazzers':
         case 'beautiful':
         case 'posterize':
         case 'instagram':
         case 'ddungeon':
         case 'challenger':
         case 'unsharpen':
         case 'moustache':
         case 'missionpassed':
         case 'lookwhatkarenhave': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.TbJail(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               var ini_gen = `${command}`
               var ciclee = await alpha.downloadAndSaveMediaMessage(quoted)
               var annnu = await TelegraPh(ciclee)
               var imoj = await ameApi.generate(ini_gen, {
                     url: annnu
                  })
                  .then(async image => {
                     emm = await './image/imgeff-' + getRandom('.png')
                     await fs.writeFileSync(emm, image)
                     alpha.sendMessage(m.chat, {
                        image: fs.readFileSync(emm),
                        caption: lang.ok()
                     }, {
                        quoted: m
                     })
                     await fs.unlinkSync(emm)
                     await fs.unlinkSync(ciclee)
                  })
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               var inigen = `${command}`
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  if (err) return reply('Eror')
                  TelegraPh(ran).then(async uyy => {
                     ameApi.generate(inigen, {
                        url: uyy
                     }).then(async image => {
                        emh = await './image/imgeff-' + getRandom('.png')
                        await fs.writeFileSync(emh, image)
                        alpha.sendMessage(m.chat, {
                           image: fs.readFileSync(emh),
                           caption: lang.ok()
                        }, {
                           quoted: m
                        })
                        await fs.unlinkSync(emh)
                        await fs.unlinkSync(ran)
                     })
                  })
                  fs.unlinkSync(media)
               })
            }
            else {
               reply(lang.TbJail(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'glitchimage': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.TbJail(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               var ini_gen = `glitch`
               var ciclee = await alpha.downloadAndSaveMediaMessage(quoted)
               var annnu = await TelegraPh(ciclee)
               var imoj = await ameApi.generate(ini_gen, {
                     url: annnu
                  })
                  .then(async image => {
                     emm = await './image/imgeff-' + getRandom('.png')
                     await fs.writeFileSync(emm, image)
                     alpha.sendMessage(m.chat, {
                        image: fs.readFileSync(emm),
                        caption: lang.ok()
                     }, {
                        quoted: m
                     })
                     await fs.unlinkSync(emm)
                     await fs.unlinkSync(ciclee)
                  })
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               var inigen = `${command}`
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  if (err) return reply('Eror')
                  TelegraPh(ran).then(async uyy => {
                     ameApi.generate(inigen, {
                        url: uyy
                     }).then(async image => {
                        emh = await './image/imgeff-' + getRandom('.png')
                        await fs.writeFileSync(emh, image)
                        alpha.sendMessage(m.chat, {
                           image: fs.readFileSync(emh),
                           caption: lang.ok()
                        }, {
                           quoted: m
                        })
                        await fs.unlinkSync(emh)
                        await fs.unlinkSync(ran)
                     })
                  })
                  fs.unlinkSync(media)
               })
            }
            else {
               reply(lang.TbJail(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'github':
         case 'gitdl':
         case 'gitclone': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'https://github.com/zeeone-ofc/Alphabot-Md'))
            let gitRegex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!gitRegex.test(args[0])) return reply(lang.erorLink())
            reply(lang.wait())
            let [, user, repo] = args[0].match(gitRegex) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {
               method: 'HEAD'
            })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            alpha.sendMedia(m.chat, url, filename, m)
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'gitrepo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!args[0]) return reply(lang.TbRepo(prefix, command))
            if (!args[1]) return reply(lang.TbRepo(prefix, command))
            if (!args[2]) reply(lang.TbRepo(prefix, command))
            let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
            reply(lang.wait())
            alpha.sendMedia(m.chat, url, args[0] + '-' + args[1] + '-' + args[2] + '.', m)
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }

         break
         // fitur baru 
         case 'igstalk': {
            if (!text) return reply(lang.KisahNabi(prefix, command, 'zeeoneofc'))
            /*var halzmal = text
					const ig = require('instatouch');

const options = {
    count: 0,
    mediaType: 'all',
	timeout: 0,
     session: "sessionid=54535851041%3AFIi8d71Heqtnbj%3A29%3AAYfnK-z5HNJF-dK_WyHWbAuhw7ZZ_ut8st-u1QXUpg"
};
const igstalk = (users) => new Promise((resolve, reject) => {
     user = users.replace(/@/gi, '')
	if(user === undefined || !user) { reject('No Name Included.')}
	try {
		ig.getUserMeta(user, options).then(async data => {
			resolve({
				status:200,
                    creator: 'Fatih Arridho',
					profile:{
          low: data.graphql.user.profile_pic_url,
					high: data.graphql.user.profile_pic_url_hd
                       },
				data: {
                    url: data.graphql.user.external_url,
                    id: data.graphql.user.id,
                    username: user,
                    fullname: data.graphql.user.full_name,
                    link_profile: `https://instagram.com/${user}`,
					private: data.graphql.user.is_private,
					verified: data.graphql.user.is_verified,
					bio: data.graphql.user.biography,
					follower: data.graphql.user.edge_followed_by.count,
					following: data.graphql.user.edge_follow.count,
					conneted_fb: data.graphql.user.connected_fb_page,
					videotimeline: data.graphql.user.edge_felix_video_timeline.count,
					timeline: data.graphql.user.edge_owner_to_timeline_media.count,
					savedmedia: data.graphql.user.edge_saved_media.count,
					collections: data.graphql.user.edge_media_collections.count,
					total_reels: data.graphql.user.highlight_reel_count
				}
			})
		}).catch(err => reject({ status: 500, message: toString(err.message)}))
	}catch(err) {reject(err)}
})
		*/
            async function getMetaFromNameUsername(name) {
               var data = await axios({
                  url: "https://gramhir.com/search/" + name,
                  method: "get"
               })
               var getMeta = data.data.split('<div class="profile-result"')[1].split('<a href="')[1].split('"')[0]
               return getMeta;
            }

            async function getUserMeta(username) {
               var urlGet = await getMetaFromNameUsername(username)
               var data = await axios({
                  url: urlGet,
                  method: "get",
                  headers: {
                     accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                     referer: "https://gramhir.com/search/" + username
                  }
               })
               var newObj = new Object();
               newObj.profile_pic = data.data.split('<div class="profile-avatar">')[1].split(
                  'src="'
               )[1].split('"')[0]
               newObj.bio = data.data.split(
                  '<div class="profile-description">'
               )[1].split('</div>')[0].replace("\r\n", "").replace('            ', "").replace('        ', "")
               newObj.post_count = data.data.split('<span class="black-box">')[1].split('Posts')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
               newObj.followers = data.data.split('<span data-followers="')[1].split('"')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
               newObj.following = data.data.split('<span class="bold"><span>')[1].split('<')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
               newObj.id = Number(
                  urlGet.split("profile")[1].split(
                     '/'
                  )[2]
               ).toString()
               var if_rate = false
               try {
                  var afdata = data.data.split('Account rate')
                  if_rate = true
               }
               catch {
                  if_rate = false
               }
               if (if_rate) {
                  try {
                     newObj.popularity = data.data.split(
                        '<canvas id="chartjs_circle"'
                     )[1].split(
                        '<span>'
                     )[1].split(
                        '<'
                     )[0]
                  }
                  catch {
                     newObj.popularity = "0%"
                  }
                  try {
                     newObj.avarage_likes = data.data.split(
                        '<div class="profile-statistics__block-stat">'
                     )[1].split(
                        '</div>'
                     )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace("k", "000").replace("m", "000000")
                  }
                  catch {
                     newObj.avarage_likes = "0"
                  }
                  try {
                     newObj.avarage_comments = data.data.split(
                        '<div class="profile-statistics__block-stat">'
                     )[2].split(
                        '</div>'
                     )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace("k", "000").replace("m", "000000")
                  }
                  catch {
                     newObj.avarage_comments = "0"
                  }
                  try {
                     newObj.avarage_post_time = data.data.split(
                        '<div class="profile-statistics__block-stat">'
                     )[3].split(
                        '</div>'
                     )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace(/ /g, "").replace("day", " day")
                  }
                  catch {
                     newObj.avarage_post_time = "0 day"
                  }
                  try {
                     newObj.video_percentage = data.data.split(
                        '<div class="chart_labels__videos">'
                     )[1].split('</span>')[1].split(" ")[0]
                     newObj.photo_percentage = data.data.split(
                        '<div class="chart_labels__photos">'
                     )[1].split('</span>')[1].split(" ")[0]
                  }
                  catch {
                     newObj.video_percentage = "0%"
                     newObj.photo_percentage = "0%"
                  }
               }
               return newObj
            }
            //const tod = await fetchJson(`https://api.popcat.xyz/instagram?user=${halzmal}`)
            //var { username,full_name, biography, posts, reels, followers, following, private, verified, profile_pic} = tod
            //var gam = await getBuffer(profile_pic)
            getUserMeta(text).then(async mp => {
                  let {
                     profile_pic,
                     id,
                     bio,
                     post_count,
                     followers,
                     following,
                     popularity
                  } = mp
                  let gam = await getBuffer(profile_pic)
                  const txt = `🎀 Username : @${text}
🆔 Id : ${id}
🏷️ Followers : ${followers}
✴️ Following : ${following}
📬 Timeline : ${post_count}
👍 Popularity : ${popularity}
💌 Biography : \n${bio}`
                  await sendButLoc(alpha, m.chat, `${txt}`, '©' + ownername, gam, [{
                        buttonId: `.owner`,
                        buttonText: {
                           displayText: '🙍‍♂️ Owner'
                        },
                        type: 1
                     },
                     {
                        buttonId: `.donasi`,
                        buttonText: {
                           displayText: 'Donation 💰'
                        },
                        type: 1
                     }
                  ], {
                     userJid: m.chat,
                     quoted: m
                  })
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
         }

         break
         case 'ytstalk':
         case 'youtubestalk': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'ZEEONE OFC'))
            let reso = await fetchJson(`https://greetings.zeeoneofc2.repl.co/api/yts?q=${q}`)
            let aramat = reso.result.all
            var tbuff = await getBuffer(aramat[0].image)
            let teks = await aramat.map(v => {
               switch (v.type) {
                  case 'video':
                     return `
`.trim()
                  case 'channel':
                     return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
               }
            }).filter(v => v).join('\n----------------------------------------\n')

            await sendButLoc(alpha, m.chat, teks, '©' + ownername, tbuff, [{
                     buttonId: `.owner`,
                     buttonText: {
                        displayText: '🙍‍♂️ Owner'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.donasi`,
                     buttonText: {
                        displayText: 'Donation 💰'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })
               //alpha.send5ButLoc(m.chat, teks, `© ${ownername}`, tbuff, but)
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'yts':
         case 'ytsearch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'Cara membuat bot wa ZEEONE OFC'))
            const yts
             = require('yt-search')
            let cari = await yts(text)
            let dapet = cari.all
            let listSections = []
            Object.values(dapet).map(async (v, index) => {
              let cap = `🆔 ID : ${v.videoId}
💬 Title : ${v.title}
📺 Views : ${v.views}
⏰ Duration : ${v.duration}
▶️ Channel : ${v.author.name}
📆 Upload : ${v.ago}
🔗 URL Video : ${v.url}
📝 Description : ${v.description}`
               await listSections.push([index + ' ' + v.title, [
                  ['*Video 🎦*', '.ytmp4 ' + v.url, cap],
                  ['*Audio 🎧*', '.ytmp3 ' + v.url, cap]
               ]])
            })

            const sections = listSections.map(([title, rows]) => ({
               title: title,
               rows: rows.map(([rowTitle, rowId, description]) => ({
                  title: rowTitle || rowId || '',
                  rowId: rowId || rowTitle || '',
                  description: description || ''
               }))
            }))

            const listMessage = {
               text: `Silahkan pilih video atau audio yang ingin kamu download!`,
               footer: '© ' + ownername,
               title: "「 *YOUTUBE SEARCH* 」",
               buttonText: "SELECT HERE",
               sections
            }
            return await alpha.sendMessage(m.chat, listMessage, {
               quoted: m,
               upload: alpha.waUploadToServer
            })
         }
         break
         case 'ytss': {

            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'ZEEONE OFC'))
            let reso = await fetchJson(`https://greetings.zeeoneofc2.repl.co/api/yts?q=${q}`)
            //let reso = await yts(q)
            let aramat = reso.result.all
            var tbuff = await getBuffer(aramat[0].image)
            let teks = aramat.map(v => {
               switch (v.type) {
                  case 'video':
                     return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
      `.trim()
                  case 'channel':
                     return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
               }
            }).filter(v => v).join('\n----------------------------------------\n')
            await sendButLoc(alpha, m.chat, teks, '©' + ownername, tbuff, [{
                     buttonId: `.owner`,
                     buttonText: {
                        displayText: '🙍‍♂️ Owner'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.donasi`,
                     buttonText: {
                        displayText: 'Donation 💰'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })
               .catch(async (err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'yts2':
         case 'ytsearch2':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'ZEEONE OFC'))
            reso = await fetchJson(`https://greetings.zeeoneofc2.repl.co/api/yts?q=${q}`)
            aramat = reso.result.all
            var tbuff = await getBuffer(aramat[0].image)
            var ytresult = '';
            ytresult += '「 *YOUTUBE SEARCH* 」'
            ytresult += '\n________________________\n\n'
            aramas.all.map((video) => {
               ytresult += '🐣 Title: ' + video.title + '\n'
               ytresult += '?? Link: ' + video.url + '\n'
               ytresult += '⏳ Durasi: ' + video.timestamp + '\n'
               ytresult += '😎 Views: ' + video.views + '\n'
               ytresult += '⏰ Upload: ' + video.ago + '\n________________________\n\n'
            });
            ytresult += '*WHATSAPP-BOT*'
            alpha.sendMessage(from, {
                  image: tbuff,
                  caption: ytresult
               }, {
                  quoted: m
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            db.data.users[m.sender].limit -= 1
            break
         case 'ghstalk':
         case 'githubstalk':
         case 'ghuser': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar ??🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'zeeoneofc'))
            reply(lang.wait())
            let y = await fetchJson(`https://api.github.com/users/${q}`)
            let ppgt = await getBuffer(y.avatar_url)
            let textt = `*----- 「GITHUB STALK」-----*${enter}${enter}📛 Username : ${y.login}${enter}🥰 Name : ${y.name}${enter}🆔 ID : ${y.id}${enter}🉑 Node ID : ${y.node_id}${enter}🔥 Followers : ${y.followers}${enter}♎ Following : ${y.following}${enter}📝 Type : ${y.type}${enter}🔏 Company : ${y.company}${enter}🌐 Blog : ${y.blog}${enter}📍 Location : ${y.location}${enter}📧 Email : ${y.email}${enter}💌 Bio : ${y.bio}${enter}📭 Twitter Username : ${y.twitter_username}${enter}🔮 Public Repo : ${y.public_repos}${enter}🌍 Public Gits : ${y.public_gists}${enter}📅 Created : ${moment(y.created_at).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}${enter}📖 Update : ${moment(y.updated_at).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}${enter}➿ Url : https://github.com/${q}`
            await alpha.sendMessage(m.chat, {
               image: ppgt,
               caption: textt
            }, {
               quoted: m
            })
            break
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'hitungmatematika':
         case 'hitungmath':
         case 'calc':
         case 'calculator':
         case 'kalkulator': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(`Hayoloh Tercyduk, Mau Ngecheat Kah?`)
            if (!text) return reply(`Kirim perintah ${prefix + command} *soal matematika*\nContoh : ${prefix + command} 8 + 9`)
            let val = text
               .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
               .replace(/×/g, '*')
               .replace(/÷/g, '/')
               .replace(/π|pi/gi, 'Math.PI')
               .replace(/e/gi, 'Math.E')
               .replace(/\/+/g, '/')
               .replace(/\++/g, '+')
               .replace(/-+/g, '-')
            let format = val
               .replace(/Math\.PI/g, 'π')
               .replace(/Math\.E/g, 'e')
               .replace(/\//g, '÷')
               .replace(/\*×/g, '×')
            try {
               console.log(val)
               let result = (new Function('return ' + val))()
               if (!result) throw result
               reply(`Hasil Dari *${format}* = _${result}_`)
            }
            catch (e) {
               if (e == undefined) reply('Isinya?')
               reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
            }
         }
         db.data.users[m.sender].limit -= 1
         break
         case 'ttp':
         case 'attp':
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, 'ZEEONE OFC'))
            let encmedia = await alpha.sendMediaAsSticker(m.chat, `https://xteam.xyz/${command}?file&text=${text.toLowerCase()}`, m, {
                  packname: global.packname,
                  author: global.author
               })
               .catch((err) => {
                  reply(lang.serverErr)
               })
            await fs.unlinkSync(encmedia)
            db.data.users[m.sender].limit -= 1
            break

         case 'emojimix': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            let [emoji1, emoji2] = text.split`+`
            if (!emoji1) return reply(`Example : ${prefix + command} 😅+💩`)
            if (!emoji2) return reply(`Example : ${prefix + command} 😅+💩`)
            let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of anu.results) {
               let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, {
                  packname: global.packname,
                  author: global.author,
                  categories: res.tags
               })
               await fs.unlinkSync(encmedia)
            }
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'tomp4':
         case 'tovideo': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.Tomp4(prefix, command))
            if (!/webp/.test(mime)) return reply(lang.Tomp4(prefix, command))
            reply(lang.wait())
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await alpha.sendMessage(m.chat, {
               video: {
                  url: webpToMp4.result
               },
               caption: lang.ok()
            }, {
               quoted: m
            })
            await fs.unlinkSync(media)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'togif': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.Tomp4(prefix, command))
            if (!/webp/.test(mime)) return reply(lang.Tomp4(prefix, command))
            reply(lang.wait())
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await alpha.sendMessage(m.chat, {
               video: {
                  url: webpToMp4.result
               },
               caption: lang.ok(),
               gifPlayback: true
            }, {
               quoted: m
            })
            await fs.unlinkSync(media)
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'tourl': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!quoted) return reply(lang.Tourl(prefix, command))
            reply(mess.wait)
            if (!/webp/.test(mime) && /image|video|gif/.test(mime)) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let anu = await TelegraPh(media)
               reply(util.format(anu))
               await fs.unlinkSync(media)
            }
            else if (!/video|gif/.test(mime)) {
               let media = await m.getMsgBuffer(quoted)
               let anu = await fileIO(media, mime.split("/")[1])
               reply(util.format(anu.link + ' (' + anu.mimeType + ')'))
            }
            db.data.users[m.sender].limit -= 1
         }
         break

         case 'sendsesi':
         case 'session':
         case 'sendsession':
            if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
            alpha.sendMessage(m.chat, {
               document: fs.readFileSync(`${sessionName}.json`),
               mimetype: 'json',
               fileName: `session-multi-device.json`
            }, {
               quoted: m
            })
            break

         case 'command':
            const sections = [{
                  title: "All menu bot",
                  rows: [{
                     title: "🤖 〉ɞ  All Menu",
                     rowId: ".allmenu",
                     description: lang.AllFitur()
                  }]
               },
               {
                  title: "Sub Menu Ke-1",
                  rows: [{
                     title: "⁉️ 〉ɞ  Information Command",
                     rowId: ".infocmd",
                     description: lang.InfoMenu()
                  }]
               },
               {
                  title: "Sub Menu Ke-2",
                  rows: [{
                     title: "👦 〉ɞ Owner Command",
                     rowId: ".ownercmd",
                     description: lang.KhususOwn()
                  }]
               },
               {
                  title: "Sub Menu Ke-3",
                  rows: [{
                     title: "📁 〉ɞ Database Command",
                     rowId: ".databasecmd",
                     description: lang.DataBor()
                  }]
               },
               {
                  title: "Sub Menu Ke-4",
                  rows: [{
                     title: "👥 〉ɞ Group Command",
                     rowId: ".groupcmd",
                     description: lang.MenuGc()
                  }]
               },
               {
                  title: "Sub Menu Ke-5",
                  rows: [{
                     title: "⛩️ 〉ɞ Anime Command",
                     rowId: ".animecmd",
                     description: lang.MenuAni()
                  }]
               },
               {
                  title: "Sub Menu Ke-6",
                  rows: [{
                     title: "⚠️ 〉ɞ Tag Command",
                     rowId: ".tagcmd",
                     description: lang.TagMem()
                  }]
               },
               {
                  title: "Sub Menu Ke-7",
                  rows: [{
                     title: "🧐 〉ɞ Stalking Command",
                     rowId: ".stalkcmd",
                     description: lang.StalkOrk()
                  }]
               },
               {
                  title: "Sub Menu Ke-8",
                  rows: [{
                     title: "🔎 〉ɞ Search Command",
                     rowId: ".searchcmd",
                     description: lang.Hoja()
                  }]
               }, {
                  title: "Sub Menu Ke-9",
                  rows: [{
                     title: "🧿 〉ɞ Converter Command",
                     rowId: ".convertercmd",
                     description: lang.CovertWi()
                  }]
               },
               {
                  title: "Sub Menu Ke-10",
                  rows: [{
                     title: "🖼️ 〉ɞ Image Effect Command",
                     rowId: ".stickercmd",
                     description: lang.AnuFoto()
                  }]
               },
               {
                  title: "Sub Menu Ke-11",
                  rows: [{
                     title: "👻 〉ɞ Sticker Effect Command",
                     rowId: ".stickercmd2",
                     description: lang.HajuStik()
                  }]
               },
               {
                  title: "Sub Menu Ke-12",
                  rows: [{
                     title: "📥 〉ɞ Downloader Command",
                     rowId: ".downloadercmd",
                     description: lang.EloDown()
                  }]
               },
               {
                  title: "Sub Menu Ke-13",
                  rows: [{
                     title: "🎎 〉ɞ Random Anime Command",
                     rowId: ".ranimecmd",
                     description: lang.StikerWibu()
                  }]
               },
               {
                  title: "Sub Menu Ke-14",
                  rows: [{
                     title: "📬 〉ɞ Nsfw & Sfw Command",
                     rowId: ".nsfwcmd",
                     description: lang.ImageDewasa()
                  }]
               },
               {
                  title: "Sub Menu Ke-15",
                  rows: [{
                     title: "📸 〉ɞ Text Pro Command",
                     rowId: ".textprocmd",
                     description: lang.MakeLogo()
                  }]
               },
               {
                  title: "Sub Menu Ke-16",
                  rows: [{
                     title: "🌁 〉ɞ Others Command",
                     rowId: ".othercmd",
                     description: lang.oterMenu()
                  }]
               },
               {
                  title: "Sub Menu Ke-17",
                  rows: [{
                     title: "🎮 〉ɞ Games Command",
                     rowId: ".gamecmd",
                     description: lang.GameBot()
                  }]
               },
               {
                  title: "Sub Menu Ke-18",
                  rows: [{
                     title: "📺 〉ɞ Asupan Command",
                     rowId: ".asupancmd",
                     description: lang.RandRik()
                  }]
               }, {
                  title: "Sub Menu Ke-19",
                  rows: [{
                     title: "👭 〉ɞ Cecan Command",
                     rowId: ".cecancmd",
                     description: lang.RandCew()
                  }]
               }, {
                  title: "Sub Menu Ke-20",
                  rows: [{
                     title: "🌟 〉ɞ Primbon Command",
                     rowId: ".primboncmd",
                     description: lang.RamalOi()
                  }]
               }, {
                  title: "Sub Menu Ke-21",
                  rows: [{
                     title: "🥁 〉ɞ Telesticker Command",
                     rowId: ".telecmd",
                     description: lang.TeleStik()
                  }]
               }, {
                  title: "Sub Menu Ke-22",
                  rows: [{
                     title: "🤳 〉ɞ Ephoto360 Command",
                     rowId: ".ephotocmd",
                     description: lang.BuatLogoLagi()
                  }]
               }, {
                  title: "Sub Menu Ke-23",
                  rows: [{
                     title: "🎧 〉ɞ Sound Command",
                     rowId: ".soundcmd",
                     description: lang.SoundNih()
                  }]
               }, {
                  title: "Sub Menu Ke-24",
                  rows: [{
                     title: "🖼️ 〉ɞ Logo Maker Command",
                     rowId: ".logocmd",
                     description: lang.KanLogoLagi()
                  }]
               }, {
                  title: "Sub Menu Ke-25",
                  rows: [{
                     title: "🕌 〉ɞ Islamic Command",
                     rowId: ".islamcmd",
                     description: lang.TobatBro()
                  }]
               }, {
                  title: "Sub Menu Ke-26",
                  rows: [{
                     title: "🛍️ 〉ɞ Store Command",
                     rowId: ".storecmd",
                     description: lang.MauJualan()
                  }]
               }, {
                  title: "Sub Menu Ke-27",
                  rows: [{
                     title: "🎭 〉ɞ Anonymous Command",
                     rowId: ".anonmenu",
                     description: lang.GadaChat()
                  }]
               }, {
                  title: "Sub Menu Ke-28",
                  rows: [{
                     title: "🗃️ 〉ɞ Storage Command",
                     rowId: ".storagecmd",
                     description: lang.Maustorage()
                  }]
               }, {
                  title: "Sub Menu Ke-29",
                  rows: [{
                     title: "🔊 〉ɞ Voice changer Command",
                     rowId: ".voicecmd",
                     description: lang.MauChanger()
                  }]
               }, {
                  title: "Sub Menu Ke-30",
                  rows: [{
                     title: "🎰 〉ɞ Rpg Games Command",
                     rowId: ".rpgcmd",
                     description: 'Rpg games'
                  }]
               }, {
                  title: "Sub Menu Ke-31",
                  rows: [{
                     title: "🖼️ 〉ɞ Photooxy Command",
                     rowId: ".photooxycmd",
                     description: 'Photooxy'
                  }]
               },
               {
                  title: "Source Code",
                  rows: [{
                     title: "⛲ 〉ɞ Source Code",
                     rowId: ".sc",
                     description: lang.SumberBot()
                  }]
               },
               {
                  title: "Thanks To",
                  rows: [{
                     title: "👨‍💻 〉ɞ Contributors",
                     rowId: ".thanksto",
                     description: lang.Tqnya()
                  }]
               },
            ]

            const listMessage = {
               text: `╭─⬣「 _*INFO USER*_ 」⬣
│  *Name* : ${pushname}
│  *Number* : @${sender.split("@")[0]}
│  *Status* : ${isCreator? ` Owner️ ${botname}` :`User ${botname}`}
╰─⬣

╭─⬣「 _*INFO BOT*_ 」⬣
│ *Prefix* :  ${prefix} 
│ *Name* : ${botname}
│ *Owner* : @${ownernomer.split("@")[0]}
│ *Mode* : ${alpha.public ? 'Public-Mode' : 'Self-Mode'}
│ *Runtime* : ${runtime(process.uptime())}
│ *Lib* : Baileys-Md@4.4.0
╰─⬣

╭─⬣「 _*INDONESIAN TIME*_ 」⬣
│ *Wib* : ${time}
│ *Wita* : ${wita}
│ *Wit* : ${wit}  
╰─⬣`,
               footer: `© ${ownername}`,
               title: `Selamat ${salam} ${pushname} ☺️`,
               buttonText: `CLICK HERE`,
               mentions: [sender, ownernomer + '@s.whatsapp.net'],
               sections
            }
            alpha.sendMessage(m.chat, listMessage, {
               quoted: fgif
            })
            break
         case 'smeme':
         case 'stickermeme':
         case 'stickmeme': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.Smeme(prefix, command))
            if (text.includes('|')) return reply(lang.Smeme(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               mee = await alpha.downloadAndSaveMediaMessage(quoted)
               mem = await TelegraPh(mee)
               meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
               memek = await alpha.sendImageAsSticker(m.chat, meme, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(memek)
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) return reply('emror')
                  TelegraPh(ran).then(async uyy => {
                     let stiks = `https://api.memegen.link/images/custom/-/${text}.png?background=${uyy}`
                     let fthz = await alpha.sendImageAsSticker(m.chat, stiks, m, {
                        packname: global.packname,
                        author: global.author
                     })
                     await fs.unlinkSync(fthz)
                     await fs.unlinkSync(ran)
                  })
               })
            }
            else {
               reply(lang.Smeme(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'smeme2': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `??🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.Smeme_(prefix, command))
            //if (!text.includes('|')) return reply(lang.Smeme_(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               arg = args.join(' ')
               atas = arg.split('|')[0]
               bawah = arg.split('|')[1]
               let abeb = await alpha.downloadAndSaveMediaMessage(quoted)
               let abe = await TelegraPh(abeb)
               let upz = `https://api.memegen.link/images/custom/${atas ? atas : '-'}/${bawah ? bawah : '-'}.png?background=${util.format(abe)}`
               let mengmeme = await alpha.sendImageAsSticker(m.chat, upz, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(mengmeme)
               await fs.unlinkSync(abeb)
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               arg = args.join(' ')
               atas = arg.split('|')[0]
               bawah = arg.split('|')[1]
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) return reply('emror')
                  TelegraPh(ran).then(async uyy => {
                     let stiks = `https://api.memegen.link/images/custom/${atas ? atas : '-'}/${bawah ? bawah : '-'}.png?background=${uyy}`
                     let fthz = await alpha.sendImageAsSticker(m.chat, stiks, m, {
                        packname: global.packname,
                        author: global.author
                     })
                     await fs.unlinkSync(fthz)
                     await fs.unlinkSync(ran)
                  })
               })
            }
            else {
               reply(lang.Smeme_(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'memegen': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺?? _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.Smeme_(prefix, command))
            //if (!text.includes('|')) return reply(lang.Smeme_(prefix, command))
            if (!/webp/.test(mime) && /image/.test(mime)) {
               reply(lang.wait())
               arg = args.join(' ')
               atas = arg.split('|')[0]
               bawah = arg.split('|')[1]
               let abeb = await alpha.downloadAndSaveMediaMessage(quoted)
               let abe = await TelegraPh(abeb)
               let upz = `https://api.memegen.link/images/custom/${atas ? atas : '-'}/${bawah ? bawah : '-'}.png?background=${util.format(abe)}`
               let mengmeme = await alpha.sendImage(m.chat, upz, 'Nih', m)
               await fs.unlinkSync(abeb)
            }
            else if (/webp/.test(mime)) {
               reply(lang.wait())
               arg = args.join(' ')
               atas = arg.split('|')[0]
               bawah = arg.split('|')[1]
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               let ran = await './image/toimg-' + getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                  fs.unlinkSync(media)
                  if (err) return reply('emror')
                  TelegraPh(ran).then(async uyy => {
                     let stiks = `https://api.memegen.link/images/custom/${atas ? atas : '-'}/${bawah ? bawah : '-'}.png?background=${uyy}`
                     let fthz = await alpha.sendImage(m.chat, stiks, 'Nih', m)
                     await fs.unlinkSync(ran)
                  })
               })
            }
            else {
               reply(lang.Smeme_(prefix, command))
            }
            db.data.users[m.sender].limit -= 1
         }
         break
         /*
         case 'bcgc': case 'bcgroup': {
                         if (!isCreator) return reply(lang.ownerOnly())
                         let getGroups = await alpha.groupFetchAllParticipating()
                         let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                         let anu = groups.map(v => v.id)
                         cc = await alpha.serializeM(text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                         cck = text ? text : cc.text
                         reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                         for (let i of anu) {
                             await sleep(1500)
                             await alpha.copyNForward(i, alpha.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `「 *${alpha.user.name} Broadcast* 」\n\n ${cck}`), true).catch(_ => _)
                         }
                         reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
                     }
                     break*/
         case 'bcimage':
         case 'bcimg': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!text) return reply(`Reply image with caption ${prefix + command} Tes`)
            if (!/image/.test(mime)) return reply(`Reply image with caption ${prefix + command} Tes`)
            let anu = await store.chats.all().map(v => v.id)
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let buffer = fs.readFileSync(media)
            for (let apaan of anu) {
               let txt = `*「 BROADCAST 」*\n\n${text}`
               alpha.sendMessage(apaan, {
                  image: buffer,
                  caption: txt
               }, {
                  quoted: fkontak
               })
            }
            reply('Sukses Broadcast')
         }
         break
         case 'bcvideo':
         case 'bcvid': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!text) return reply(`Reply video with caption ${prefix + command} Tes`)
            if (!/video/.test(mime)) return reply(`Reply video with caption ${prefix + command} Tes`)
            let anu = await store.chats.all().map(v => v.id)
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let buffer = fs.readFileSync(media)
            for (let apaan of anu) {
               let txt = `*「 BROADCAST 」*\n\n${text}`
               alpha.sendMessage(apaan, {
                  video: buffer,
                  caption: txt,
                  mimetype: 'video/mp4',
                  duration: 909090909
               }, {
                  quoted: fkontak
               })
            }
            reply('Sukses Broadcast')
         }
         break
         case 'bcaudio':
         case 'bcaud': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/audio/.test(mime)) return reply(`Reply audio with caption ${prefix + command} Tes`)
            let anu = await store.chats.all().map(v => v.id)
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let buffer = fs.readFileSync(media)
            for (let apaan of anu) {
               let txt = `「 BROADCAST 」\n\n${text}`
               alpha.sendMessage(apaan, {
                  audio: buffer,
                  mimetype: 'audio/mpeg',
                  ptt: false,
                  duration: 909090909
               }, {
                  quoted: fkontak
               })
            }
            reply('Sukses Broadcast')
         }
         break
         case 'bcvn': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/audio/.test(mime)) return reply(`Reply audio with caption ${prefix + command} Tes`)
            let anu = await store.chats.all().map(v => v.id)
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let buffer = fs.readFileSync(media)
            for (let apaan of anu) {
               let txt = `「 BROADCAST 」\n\n${text}`
               alpha.sendMessage(apaan, {
                  audio: buffer,
                  mimetype: 'audio/mpeg',
                  ptt: true,
                  duration: 909090909
               }, {
                  quoted: fkontak
               })
            }
            reply('Sukses Broadcast')
         }
         break
         case 'bcstiker':
         case 'bcstik':
         case 'bcsticker': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!/webp/.test(mime)) return reply(`Reply stiker with caption ${prefix + command}`)
            let anu = await store.chats.all().map(v => v.id)
            let media = await alpha.downloadAndSaveMediaMessage(quoted)
            let buffer = fs.readFileSync(media)
            for (let apaan of anu) {
               let txt = `「 BROADCAST 」\n\n${text}`
               alpha.sendMessage(apaan, {
                  sticker: {
                     url: media
                  }
               }, {
                  quoted: fkontak
               })
            }
            reply('Sukses Broadcast')
         }
         break
         case 'bc':
         case 'broadcast':
         case 'bcall': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            let anu = await store.chats.all().map(v => v.id)
            let cc = await alpha.serializeM(q ? m : m.quoted ? await m.getQuotedObj() : false || m)
            let cck = q ? q : cc.text
            let ranflam = await getBuffer(`${picak}Broadcast`)
            reply(lang.Bcall(anu.length, anu.length, 'Chat'))
            for (let yoi of anu) {
               await sleep(1500)
               await sendButLoc(alpha, yoi, `${cck}`, '©' + ownername, ranflam, [{
                     buttonId: `.owner`,
                     buttonText: {
                        displayText: '🙍‍♂️ Owner'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.donasi`,
                     buttonText: {
                        displayText: 'Donation 💰'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })
            }
            reply('Sukses Broadcast')
         }
         break

         case 'broadcastgc':
         case 'broadcastgroup':
         case 'bcgc': {
            if (!isCreator && !m.key.fromMe) return reply(lang.ownerOnly())
            if (!text) return reply(`Kirim perintah ${prefix + command} *text*`)
            let getGroups = await alpha.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            reply(lang.Bcall(anu.length, anu.length, 'Group Chat'))
            for (let i of anu) {
               await sleep(1500)
               let ranflam = await getBuffer(`${picak}Broadcast Group`)
               await sendButLoc(alpha, i, `${text}`, '©' + ownername, ranflam, [{
                     buttonId: `.owner`,
                     buttonText: {
                        displayText: '🙍‍♂️ Owner'
                     },
                     type: 1
                  },
                  {
                     buttonId: `.donasi`,
                     buttonText: {
                        displayText: 'Donation 💰'
                     },
                     type: 1
                  }
               ], {
                  userJid: m.chat,
                  quoted: m
               })

            }

            reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group Chat`)

         }

         break
         case 'stickertag':
         case 'sticktag':
         case 'stiktag': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!/webp/.test(mime)) return reply(lang.Stag(prefix, command))
            quoted.download().then(async puki => {
               alpha.sendMessage(m.chat, {
                  sticker: puki,
                  mentions: groupMembers.map(a => a.id)
               }, {
                  quoted: fkontak
               })
            })
         }
         break
         case 'videotag':
         case 'vidtag': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!/video/.test(mime)) return reply(lang.Vtag(prefix, command, 'video'))
            quoted.download().then(async puki => {
               alpha.sendMessage(m.chat, {
                  video: puki,
                  mentions: groupMembers.map(a => a.id)
               }, {
                  quoted: fkontak
               })
            })
         }
         break
         case 'vntag':
         case 'voicetag': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!/audio/.test(mime)) return reply(lang.Vtag(prefix, command, 'audio'))
            quoted.download().then(async puki => {
               alpha.sendMessage(m.chat, {
                  audio: puki,
                  ptt: true,
                  mimetype: 'audio/mpeg',
                  mentions: groupMembers.map(a => a.id)
               }, {
                  quoted: fkontak
               })
            })
         }
         break

         case 'imagetag':
         case 'fototag':
         case 'imgtag': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!/image/.test(mime)) return reply(lang.Vtag(prefix, command, 'foto'))
            quoted.download().then(async puki => {
               alpha.sendMessage(m.chat, {
                  image: puki,
                  mentions: groupMembers.map(a => a.id)
               }, {
                  quoted: fkontak
               })
            })
         }
         break
         case 'translate':
         case 'tr': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly ??`, m)
            if (!text) return reply(lang.TrLate(prefix, command))
            let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            translate(teks, {
               to: args[0]
            }).then((res) => {
               alpha.sendText(m.chat, `${res.text}`, m)
            })
            db.data.users[m.sender].limit -= 1
         }

         break
         case 'xnxxsearch': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'sakura'))

            function xnxxsearch(query) {
               return new Promise((resolve, reject) => {
                  const baseurl = 'https://www.xnxx.com'
                  fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {
                        method: 'get'
                     })
                     .then(res => res.text())
                     .then(res => {
                        let $ = cheerio.load(res, {
                           xmlMode: false
                        });
                        let title = [];
                        let url = [];
                        let desc = [];
                        let results = [];

                        $('div.mozaique').each(function (a, b) {
                           $(b).find('div.thumb').each(function (c, d) {
                              url.push(baseurl + $(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
                           })
                        })
                        $('div.mozaique').each(function (a, b) {
                           $(b).find('div.thumb-under').each(function (c, d) {
                              desc.push($(d).find('p.metadata').text())
                              $(d).find('a').each(function (e, f) {
                                 title.push($(f).attr('title'))
                              })
                           })
                        })
                        for (let i = 0; i < title.length; i++) {
                           results.push({
                              title: title[i],
                              info: desc[i],
                              link: url[i]
                           })
                        }
                        resolve({
                           code: 200,
                           status: true,
                           result: results
                        })
                     })
                     .catch(err => reject({
                        code: 503,
                        status: false,
                        result: err
                     }))
               })
            }
            xnxxsearch(`${q}`).then(async data => {
               let txt = `*-------「 XNXX SEARCH 」-------*\n\n`
               for (let i of data.result) {
                  txt += `*📫 Title :* ${i.title}\n`
                  txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
               }
               await alpha.sendMessage(m.chat, {
                  image: {
                     url: picak + 'Xnxx Search'
                  },
                  caption: txt
               }, {
                  quoted: m
               })
            }).catch((err) => {
               reply(lang.serverErr)
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'xnxxdl':
         case 'xnxxdownload': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!db.data.chats[m.chat].nsfw) return reply(lang.OffNsfw())
            if (!text) return reply(lang.KisahNabi(prefix, command, 'https://www.xnxx.com/video-136f9p3a/attrape_ma_demi-soeur_vierge_de_18_ans_en_train_de_se_masturber_avec_le_controle_de_ma_console_hentai'))
            if (!text.includes('https://www.xnxx.com/')) return reply(lang.KisahNabi(prefix, command, 'https://www.xnxx.com/video-136f9p3a/attrape_ma_demi-soeur_vierge_de_18_ans_en_train_de_se_masturber_avec_le_controle_de_ma_console_hentai'))

            function xnxxdl(URL) {
               return new Promise((resolve, reject) => {
                  fetch(`${URL}`, {
                        method: 'get'
                     })
                     .then(res => res.text())
                     .then(res => {
                        let $ = cheerio.load(res, {
                           xmlMode: false
                        });
                        const title = $('meta[property="og:title"]').attr('content');
                        const duration = $('meta[property="og:duration"]').attr('content');
                        const image = $('meta[property="og:image"]').attr('content');
                        const videoType = $('meta[property="og:video:type"]').attr('content');
                        const videoWidth = $('meta[property="og:video:width"]').attr('content');
                        const videoHeight = $('meta[property="og:video:height"]').attr('content');
                        const info = $('span.metadata').text();
                        const videoScript = $('#video-player-bg > script:nth-child(6)').html();
                        const files = {
                           low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
                           high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
                           HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
                           thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
                           thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
                           thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
                           thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
                        };
                        resolve({
                           status: 200,
                           result: {
                              title,
                              URL,
                              duration,
                              image,
                              videoType,
                              videoWidth,
                              videoHeight,
                              info,
                              files
                           }
                        })
                     })
                     .catch(err => reject({
                        code: 503,
                        status: false,
                        result: err
                     }))
               })
            }

            xnxxdl(args[0]).then(async data => {
               let txt = `*----「 XNXX DOWNLOAD 」----*
	
📬 Title : ${data.result.title}
⏰ Durasi : ${data.result.durasi}
🎭 Width : ${data.result.videoWidth}
🌐 Height : ${data.result.videoHeight}
🔗 Url : ${data.result.URL}`
               await sendFileFromUrl(m.chat, data.result.image, txt, m)
               sendFileFromUrl(m.chat, data.result.files.high, lang.ok(), m)
            }).catch((err) => {
               reply(lang.serverErr)
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'list':
         case 'store': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isAlreadyResponListGroup(m.chat, db.data.store)) return reply(lang.Dellist())
            //let data_store = db.data.store
            var arr_rows = [];
            for (let x of db_respon_list) {
               if (x.id === m.chat) {
                  arr_rows.push({
                     title: x.key,
                     rowId: x.key
                  })
               }
            }
            var listMsg = {
               text: `${salam} @${sender.split("@")[0]}`,
               buttonText: 'Click Here',
               footer: `List ${groupName}\n\n© ${ownername}`,
               mentions: [sender],
               sections: [{
                  title: groupName,
                  rows: arr_rows
               }]
            }
            alpha.sendMessage(from, listMsg, {
               quoted: fkontak
            })
            break
         }
         case 'emoji':
         case 'semoji': {
            if (!text) return reply(lang.KisahNabi(prefix, command, '😱'))
            if (!isEmoji(text)) return reply(lang.KisahNabi(prefix, command, '😱'))
            if (text.length > 2) return reply(lang.KisahNabi(prefix, command, '😱'))
            emoji.get(text).then(async emot => {
               var arr_rows = [];
               for (let x of emot.images) {
                  arr_rows.push({
                     title: x.vendor,
                     rowId: `.emoji1 ${x.url}`
                  })
               }

               var listMsg = {
                  text: `@${m.sender.split("@")[0]} List Emoji`,
                  buttonText: 'Click Here',
                  footer: `© ${ownername}`,
                  mentions: [m.sender],
                  sections: [{
                     title: groupName,
                     rows: arr_rows
                  }]
               }
               alpha.sendMessage(m.chat, listMsg, {
                  quoted: fkontak
               })
            })
            db.data.users[m.sender].limit -= 1
            break
         }
         case 'emoji1': {
            if (db.data.settings[botNumber].userRegister && !db.data.users[m.sender].registered) return alpha.send2ButMes(m.chat, `🇮🇩 _Hi @${m.sender.split('@')[0]} silahkan verifikasi terlebih dahulu sebelum memakai fitur bot_${enter}${enter}🇺🇸 _Hi @${m.sender.split('@')[0]} please verify first before using the bot feature_`, `© ${ownername}`, `.daftar ` + pushname, `🇺🇸 Verify`, `.daftar ` + pushname, 'Daftar 🇮🇩', fkontak, [m.sender])
            if (db.data.users[m.sender].limit < 1) return alpha.send2ButMes(m.chat, lang.Nolimit(prefix), `© ${ownername}`, `.daily`, `👉 Daily`, `.weekly`, `Weekly 👈`, m)
            if (!text) return reply(lang.KisahNabi(prefix, command, '😱'))
            reply(lang.wait())
            alpha.sendImageAsSticker(m.chat, text, m, {
               packname: global.packname,
               author: global.author
            })
            db.data.users[m.sender].limit -= 1
         }
         break
         case 'bayar':
         case 'pay':
         case 'payment':
         case 'paygc': {
            alpha.sendFile(m.chat, m.isGroup ? (db.data.chats[m.chat].paygc || qris) : qris, 'pay.jpg', m.isGroup ? (db.data.chats[m.chat].captionPay || 'Payment.\n\ncaption pay bisa ubah dengan cara #setcaptionpay  & payment (qris) bisa diganti dgn cara #setpaysewa') : 'Payment', m)
         }
         break
         case 'setpaygc':
         case 'setpaysewa': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (/image/.test(mime)) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               const fd = new FormData();
               fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
               fetch('https://telegra.ph/upload', {
                     method: 'POST',
                     body: fd
                  }).then(res => res.json())
                  .then((json) => {
                     db.data.chats[m.chat].paygc = `https://telegra.ph${json[0].src}`
                     reply(lang.ok())
                     if (fs.existsSync(media)) fs.unlinkSync(media)
                  })
            }
            else {
               reply('Reply gambar dgn caption .setpaysewa')
            }
         }
         break
         case 'addlist': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            //let data_store = db.data.store
            var args1 = q.split("|")[0]
            if (args1.includes(command)) return reply(lang.Addlist())
            var args2 = q.split("|")[1]
            if (!text.includes("|")) return reply(lang.Addlist_(prefix, command))
            //if (isAlreadyResponList(m.chat, args1, db.data.store)) return reply(lang.Addlist__(args1))
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(lang.Addlist__(args1))
            if (/image/.test(mime)) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               const fd = new FormData();
               fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
               fetch('https://telegra.ph/upload', {
                     method: 'POST',
                     body: fd
                  }).then(res => res.json())
                  .then((json) => {
                    /* var obj_add = {
                        id: m.chat,
                        key: args1,
                        response: args2,
                        isImage: true,
                        image_url: `https://telegra.ph${json[0].src}`
                     }
                     data_store.push(obj_add)*/
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                     reply(lang.AddlistDone(args1))
                     if (fs.existsSync(media)) fs.unlinkSync(media)
                  })
            }
            else {
              /* var obj_add = {
                  id: m.chat,
                  key: args1,
                  response: args2,
                  isImage: false,
                  image_url: `-`
               }
               data_store.push(obj_add)*/
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
               reply(lang.AddlistDone(args1))
            }
         }
         break
         case 'dellist': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            if (!text) return reply(lang.Dellist_(prefix, command))
            //_db = db.data.store
            if (!isAlreadyResponList(m.chat, text, db_respon_list)) return reply(lang.Dellist__(text))
            delResponList(m.chat, text, _db)
            reply(lang.DellistDone(text))
         }
         break
         case 'updatelist':
         case 'update': {
            if (!m.isGroup) return reply(lang.groupOnly())
            if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
            var args1 = q.split("|")[0]
            var args2 = q.split("|")[1]
           // let _data = db.data.store
            if (!q.includes("|")) return reply(lang.Addlist_(prefix, command))
            if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(lang.ListUp(args1))
            if (/image/.test(mime)) {
               let media = await alpha.downloadAndSaveMediaMessage(quoted)
               const fd = new FormData();
               fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
               fetch('https://telegra.ph/upload', {
                     method: 'POST',
                     body: fd
                  }).then(res => res.json())
                  .then((json) => {
                    // updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, _data)
                     updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                     reply(lang.UpList(args1))
                  })
            }
            else {
               updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
               //updateResponList(m.chat, args1, args2, false, '-', _data)
               reply(lang.UpList(args1))
            }
         }
         break
         case 'tambah': {
            if (!text.includes('+')) return reply(lang.KisahNabi(prefix, command, '1+2'))
            arg = args.join(' ')
            atas = arg.split('+')[0]
            bawah = arg.split('+')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one + nilai_two}`)
         }
         break
         case 'kurang': {
            if (!text.includes('-')) return reply(lang.KisahNabi(prefix, command, '1-2'))
            arg = args.join(' ')
            atas = arg.split('-')[0]
            bawah = arg.split('-')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one - nilai_two}`)
         }
         break
         case 'kali': {
            if (!text.includes('*')) return reply(lang.KisahNabi(prefix, command, '1*2'))
            arg = args.join(' ')
            atas = arg.split('*')[0]
            bawah = arg.split('*')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one * nilai_two}`)
         }
         break
         case 'bagi': {
            if (!text.includes('/')) return reply(lang.KisahNabi(prefix, command, '1/2'))
            arg = args.join(' ')
            atas = arg.split('/')[0]
            bawah = arg.split('/')[1]
            var nilai_one = Number(atas)
            var nilai_two = Number(bawah)
            reply(`${nilai_one / nilai_two}`)
         }
         break

         // Anonymous Chat
         case 'anonymous':
            if (m.isGroup) return reply(lang.private())
            var but = [{
                  urlButton: {
                     displayText: "Support Me ✨",
                     url: "https://youtube.com/c/zeeoneofc"
                  }
               },
               {
                  quickReplyButton: {
                     displayText: lang.Anon(),
                     id: '.start'
                  }
               }
            ]
            var teks = `${lang.Anonymous(pushname, prefix)}`
            alpha.send2ButMes(m.chat, teks, `© ${ownername}`, `.start`, lang.Anon(), `.owner`, 'Owner', fkontak, [m.sender])
            // alpha.sendMessage(from, { text: teks, footer: `© ${ownername}`, templateButtons: but })
            break
         case 'leave':
         case 'stop':
         case 'keluar': {
            if (m.isGroup) return reply(lang.private())
            let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
            if (!room) {
               let buttons = [{
                  buttonId: '.start',
                  buttonText: {
                     displayText: 'Start'
                  },
                  type: 1
               }]
               await alpha.sendButtonText(m.chat, buttons, lang.StopAnon())
               throw false
            }
            await alpha.send2ButMes(m.chat, lang.AnonDahStop(), `© ${ownername}`, `.start`, lang.AnonNew(), `.owner`, 'Owner', fkontak, [m.sender])
            let other = room.other(m.sender)
            if (other) await alpha.send2ButMes(other, lang.StopAnonByFren(), `© ${ownername}`, `.start`, lang.AnonNew(), `.owner`, 'Owner', fkontak, [m.sender])
            delete db.data.anonymous[room.id]
            if (command === 'leave') break
         }
         break
         case 'mulai':
         case 'start':
            if (m.isGroup) return reply(lang.private())
            if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
               await alpha.send2ButMes(m.chat, lang.AnonOn(), `© ${ownername}`, `.skip`, 'Skip', `.stop`, 'Stop', fkontak, [m.sender])
               throw false
            }
            let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
               await alpha.send2ButMes(room.a, lang.AnonFind(prefix), `© ${ownername}`, `.skip`, 'Skip', `.stop`, 'Stop', fkontak, [m.sender])
               room.b = m.sender
               room.state = 'CHATTING'
               await alpha.send2ButMes(room.b, lang.AnonFind(prefix), `© ${ownername}`, `.skip`, 'Skip', `.stop`, 'Stop', fkontak, [m.sender])
            }
            else {
               let id = +new Date
               db.data.anonymous[id] = {
                  id,
                  a: m.sender,
                  b: '',
                  state: 'WAITING',
                  check: function (who = '') {
                     return [this.a, this.b].includes(who)
                  },
                  other: function (who = '') {
                     return who === this.a ? this.b : who === this.b ? this.a : ''
                  },
               }
               var but = [{
                     urlButton: {
                        displayText: "Support Me ✨",
                        url: "https://youtube.com/c/zeeoneofc"
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: "Stop",
                        id: '.stop'
                     }
                  }
               ]
               await alpha.send2ButMes(m.chat, lang.AnonSearch(), `© ${ownername}`, `.owner`, 'Owner', `.stop`, 'Stop', fkontak, [m.sender])
            }
            break
         case 'menfes':
         case 'menfess': {
            if (m.isGroup) return reply(lang.private())
            if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
            if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
            let [namaNya, nomorNya, pesanNya] = text.split`|`
            if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
            if (isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
            var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_`
            let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg')
            const buttons = [{
               buttonId: `.baljzpapnxoqpoknzpakxijsponxnjwojxjskkbxowbbbxbbsowokxbjhsoqknxbbxboaojxbaoizbkaokbzbbapobxjqpkxbapasmenfess ${m.sender}|tes|maikipala|ngetid lo|hehe anu bang`,
               buttonText: {
                  displayText: '✍️ Balas'
               },
               type: 1
            }]
            await sendButLoc(alpha, nomorNya + '@s.whatsapp.net', yoi, `Mau di balas? Pencet button nya`, tod, buttons, {
               userJid: m.chat,
               quoted: m
            })
            reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja di balas coy')
         }
         break

         case 'baljzpapnxoqpoknzpakxijsponxnjwojxjskkbxowbbbxbbsowokxbjhsoqknxbbxboaojxbaoizbkaokbzbbapobxjqpkxbapasmenfess': {
            if (!text) return
            if (!text.includes('|')) return
            let [nomorNya, pesanNya, a, b, c] = text.split`|`
            this.menfes = this.menfes ? this.menfes : {}
            let id = +new Date
            this.menfes[id] = {
               id,
               a: m.sender,
               b: nomorNya,
               state: 'CHATTING',
               check: function (who = '') {
                  return [this.a, this.b].includes(who)
               },
               other: function (who = '') {
                  return who === this.a ? this.b : who === this.b ? this.a : ''
               },
            }
            reply('Ok, sekarang kirim pesan balasan nya')
         }
         break
         case 'skip':
         case 'next':
         case 'lanjut': {
            if (m.isGroup) return reply(lang.private())
            let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
            var but = [{
                  urlButton: {
                     displayText: "Support Me ✨",
                     url: "https://youtube.com/c/zeeoneofc"
                  }
               },
               {
                  quickReplyButton: {
                     displayText: lang.Anon(),
                     id: '.start'
                  }
               }
            ]
            if (!romeo) {
               await alpha.send2ButMes(m.chat, lang.NoAnon(), `© ${ownername}`, lang.Anon(), 'Start', `.owner`, 'Owner', fkontak, [m.sender])
               throw false
            }
            let other = romeo.other(m.sender)
            if (other) await alpha.send2ButMes(other, lang.StopAnonByFren(), `© ${ownername}`, lang.Anon(), 'Start', `.owner`, 'Owner', fkontak, [m.sender])
            delete db.data.anonymous[romeo.id]
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
               var but = [{
                     urlButton: {
                        displayText: "Support Me ✨",
                        url: "https://youtube.com/c/zeeoneofc"
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: "Stop",
                        id: '.stop'
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: "Skip",
                        id: '.skip'
                     }
                  }
               ]
               await alpha.send2ButMes(room.a, lang.AnonFind(), `© ${ownername}`, '.stop', 'Stop', `.skip`, 'Skip', fkontak, [m.sender])
               room.b = m.sender
               room.state = 'CHATTING'
               await alpha.send2ButMes(room.b, lang.AnonFind(), `© ${ownername}`, '.stop', 'Stop', `.skip`, 'Skip', fkontak, [m.sender])
            }
            else {
               let id = +new Date
               db.data.anonymous[id] = {
                  id,
                  a: m.sender,
                  b: '',
                  state: 'WAITING',
                  check: function (who = '') {
                     return [this.a, this.b].includes(who)
                  },
                  other: function (who = '') {
                     return who === this.a ? this.b : who === this.b ? this.a : ''
                  },
               }
               var but = [{
                     urlButton: {
                        displayText: "Support Me ✨",
                        url: "https://youtube.com/c/zeeoneofc"
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: "Stop",
                        id: '.stop'
                     }
                  }
               ]
               await alpha.send2ButMes(m.chat, lang.AnonSearch(), `© ${ownername}`, '.stop', 'Stop', `.skip`, 'Skip', fkontak, [m.sender])
            }
            break
         }
      }
      //menfess
      if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
         this.menfes = this.menfes ? this.menfes : {}
         let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
         let room2 = Object.values(this.menfes).find(room => room.check(m.sender))
         if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return
            if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
            let other = [room.a, room.b].find(user => user !== m.sender)
            await alpha.sendMessage(other, {
               text: 'Ada balasan nih dari menfes kamu'
            }, {
               quoted: fkontak
            })
            await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
               contextInfo: {
                  ...m.msg.contextInfo,
                  participant: other
               }
            } : {})
            delete this.menfes[room2.id]
         }
      }

      // Anonymous Chat
      if (!m.isGroup && !m.key.fromMe && !isCmd) {
         let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
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

   }
   catch (err) {
      //console.log(err)
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