/*
# Edit owner di settings.js
# Edit case / fitur di index.js
# Edit foto bot di folder image 
# Edit tampilan menu di folder language file Indonesia.js
*/
require('./settings')

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

const {
    default: alphaConnect,
    useSingleFileAuthState,
    DisconnectReason,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    proto,
    makeInMemoryStore,
    jidDecode
} = require("@adiwajshing/baileys")

const {
    state,
    saveState
} = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const figlet = require("figlet");
const {
    Boom
} = require('@hapi/boom')
const moment = require('moment-timezone')
const chalk = require('chalk')
const fetch = require('node-fetch')
const yargs = require('yargs/yargs')
const {
    color
} = require("./lib/color");
const FileType = require('file-type')
const _ = require('lodash')
const PhoneNumber = require('awesome-phonenumber')
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif
} = require('./lib/exif')
const {
    toAudio,
    toPTT,
    toVideo
} = require('./lib/converter')
const {
    TelegraPh
} = require('./lib/uploader')
const {
    smsg,
    formatp,
    tanggal,
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
enter = '\n'
lang = global.language
const Jimp = require('jimp')
const fs = require('fs')
const { welcome } = require ('./lib/welcome')

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
}, 30 * 1000)

async function startalpha() {
    const low = (await import("lowdb"))
    const {
        Low,
        JSONFile
    } = low
    const mongoDB = require('./lib/mongoDB')

    global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
        ...query,
        ...(apikeyqueryname ? {
            [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
        } : {})
    })) : '')
    const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    })

    global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
    global.db = new Low(
        /https?:\/\//.test(opts['db'] || '') ?
        new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
        new mongoDB(opts['db']) :
        new JSONFile(`lib/database.json`)
    )

    global.DATABASE = global.db
    global.loadDatabase = async function loadDatabase() {
        if (global.db.READ) return new Promise((resolve) => setInterval(function() {
            (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
        }, 1 * 1000))
        if (global.db.data !== null) return
        global.db.READ = true
        await global.db.read()
        global.db.READ = false
        global.db.data = {
            users: {},
            chats: {},
            database: {},
            game: {},
            others: {},
            sticker: {},
            absen: {},
            cmd: {},
            settings: {},
            anonymous: {},
            store: [],
            RSticker: [],
            RImage: [],
            RVideo: [],
            RVn: [],
            ...(global.db.data || {})
        }
        global.db.chain = _.chain(global.db.data)
    }
    loadDatabase()

    // store can be used with legacy version as well
    const reSize = async (buffer, ukur1, ukur2) => {
        return new Promise(async (resolve, reject) => {
            var baper = await Jimp.read(buffer);
            var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
            resolve(ab)
        })
    }

    console.log(color(figlet.textSync('Alphabot-MD', {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        whitespaceBreak: false
    }), 'cyan'))
    console.log('|\x1b[1;32m Multi Device \x1b[1;37m|', color('Checking database configuration', 'yellow'))
    console.log('|\x1b[1;32m Multi Device \x1b[1;37m|', color('Done', 'skyblue'))
    console.log('|\x1b[1;32m Multi Device \x1b[1;37m|', color('Connecting to WhatsApp web', 'yellow'))
    
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }

    const alpha = alphaConnect({
        logger: pino({
            level: 'fatal'
        }),
        printQRInTerminal: true,
        browser: ['Bot By ZeeoneOfc', 'safari', '1.0.0'],
        auth: state,
        version: getVersionWaweb() || [2, 2204, 13]
    })
    store.bind(alpha.ev)

    alpha.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!alpha.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            m = smsg(alpha, mek, store)
            switch (m.mtype) {
                case "imageMessage":
                case "videoMessage":
                case "audioMessage":
                case "stickerMessage":
                case "documentMessage":
                case "senderKeyDistributionMessage":
                    if (!m.key.fromMe) await sleep(1000)
                    const quoted = m.msg ? m.msg.url : alpha.quoted.url
                    if (!quoted) await alpha.refreshMediaConn(true)
                    break
            }
            require("./index")(alpha, m, chatUpdate, store, reSize)
        } catch (err) {
            console.log(err)
        }
    })

    alpha.serializeM = (m) => smsg(alpha, m, store)
    // Group Update

    alpha.ev.on('group-participants.update', async (anu) => {
        welcome(alpha, anu, ownername, reSize)
    })

    // Setting
    alpha.public = true

    alpha.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                alpha.logout();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                startalpha();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                startalpha();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                alpha.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Scan Again And Run.`);
                alpha.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                startalpha();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                startalpha();
            } else if (reason === DisconnectReason.Multidevicemismatch) {
                console.log("Multi device mismatch, please scan again");
                alpha.logout();
            } else alpha.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
        //console.log('Connected To...', 'wa.me/' + alpha.user.id.split(':')[0])
    })

    alpha.ev.on('creds.update', saveState)

    alpha.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    alpha.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = alpha.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    /**
     * getBuffer hehe
     * @param {fs.PathLike} path
     * @param {Boolean} returnFilename
     */
    alpha.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }

    /**
     * Send Media/File with Automatic Type Specifier
     * @param {String} jid
     * @param {String|Buffer} path
     * @param {String} filename
     * @param {String} caption
     * @param {proto.WebMessageInfo} quoted
     * @param {Boolean} ptt
     * @param {Object} options
     */
    alpha.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await alpha.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            } catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await alpha.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        } catch (e) {
            //console.error(e)
            m = null
        } finally {
            if (!m) m = await alpha.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }

    // Add Other
    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    alpha.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        alpha.sendMessage(jid, buttonMessage, {
            quoted,
            ...options
        })
    }
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendText = (jid, text, quoted = '', options) => alpha.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted
    })
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} salam 
     * @param {*} pushname 
     * @param {*} ownername
     * @param {*} thumbnail 
     * @param {*} myweb 
     * @param {*} quoted 
     * @returns 
     */
    alpha.sendFakeLink = (jid, text, salam, pushname, ownername, thumbnail, myweb, quoted) => alpha.sendMessage(jid, {
        text: text,
        contextInfo: {
            "externalAdReply": {
                "title": `Selamat ${salam} ${pushname}`,
                "body": `© ${ownername}`,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": fs.readFileSync(thumbnail),
                "sourceUrl": `${myweb}`
            }
        }
    }, {
        quoted
    })
    /**
     * 
     * @param {*} jid 
     * @param {*} desc 
     * @param {*} footer 
     * @param {*} gam 
     * @param {*} but
     * @param {*} options 
     * @returns 
     */

    alpha.setStatus = (status) => {
        alpha.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    alpha.getBio = async (member) => {
        let about = (await alpha.fetchStatus(member).catch(console.error) || {}).status || '-'
        return about
    }

    alpha.sendButMessage = async (jid, desc = '', footer = '', but = [], options = {}) => {
        buttonMessage = {
            text: desc,
            footer: footer,
            buttons: but,
            headerType: 1
        }

        alpha.sendMessage(jid, buttonMessage, options)
    }

    alpha.send1ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
        let but = [{
            buttonId: butId,
            buttonText: {
                displayText: dispText
            },
            type: 1
        }]
        let butMes = {
            text: text,
            buttons: but,
            footer: footer,
            mentions: ments ? ments : []
        }
        alpha.sendMessage(jid, butMes, {
            quoted: quoted
        })
    }


    /** Send 2 Button Message
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} buttonId
     * @param {*} displayText
     * @param {*} buttonId2
     * @param {*} displayText2
     * @param {*} quoted
     * @param {*} mentions
     */


    alpha.send2ButMes = (jid, text = '', footer = '', butId = '', dispText = '', butId2 = '', dispText2 = '', quoted, ments) => {
        let but2 = [{
                buttonId: butId,
                buttonText: {
                    displayText: dispText
                },
                type: 1
            },
            {
                buttonId: butId2,
                buttonText: {
                    displayText: dispText2
                },
                type: 1
            }
        ]
        let butMes2 = {
            text: text,
            buttons: but2,
            footer: footer,
            mentions: ments ? ments : []
        }
        alpha.sendMessage(jid, butMes2, {
            quoted: quoted
        })
    }



    /** Send 3 Button Message
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} buttonId
     * @param {*} displayText
     * @param {*} buttonId2
     * @param {*} displayText2
     * @param {*} buttonId3
     * @param {*} displayText3
     * @param {*} quoted
     * @param {*} mentions

     */

    alpha.send3ButMes = (jid, text = '', footer = '', butId = '', dispText = '', butId2 = '', dispText2 = '', butId3 = '', dispText3 = '', quoted, ments) => {
        let but3 = [{
                buttonId: butId,
                buttonText: {
                    displayText: dispText
                },
                type: 1
            },
            {
                buttonId: butId2,
                buttonText: {
                    displayText: dispText2
                },
                type: 1
            },
            {
                buttonId: butId3,
                buttonText: {
                    displayText: dispText3
                },
                type: 1
            }
        ]
        let butMes3 = {
            text: text,
            buttons: but3,
            footer: footer,
            mentions: ments ? ments : []
        }
        alpha.sendMessage(jid, butMes3, {
            quoted: quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await alpha.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await alpha.sendMessage(jid, {
            video: buffer,
            caption: caption,
            gifPlayback: gif,
            ...options
        }, {
            quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    alpha.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await alpha.sendMessage(jid, {
            audio: buffer,
            ptt: ptt,
            ...options
        }, {
            quoted
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendTextWithMentions = async (jid, text, quoted, options = {}) => alpha.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendMedia = async (jid, path, filename, quoted = '', options = {}) => {
        let {
            ext,
            mime,
            data
        } = await alpha.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await alpha.sendMessage(m.chat, {
            [`${pase}`]: data,
            mimetype: mime,
            fileName: filename + ext ? filename + ext : getRandom(ext),
            ...options
        }, {
            quoted
        })
    }

    alpha.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
        let {
            ext,
            mime,
            data
        } = await alpha.getFile(path)
        let media = {}
        let buffer
        media.data = data
        media.mimetype = mime
        if (options && (options.packname || options.author)) {
            buffer = await writeExif(media, options)
        } else {
            buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
        }
        await alpha.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    alpha.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await alpha.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    alpha.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await alpha.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    alpha.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    alpha.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    alpha.cMod = (jid, copy, text = '', sender = alpha.user.id, options = {}) => {
        //let copy = message.toJSON()
        let mtype = Object.keys(copy.message)[0]
        let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
        let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
        else if (content.caption) content.caption = text || content.caption
        else if (content.text) content.text = text || content.text
        if (typeof content !== 'string') msg[mtype] = {
            ...content,
            ...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
        copy.key.remoteJid = jid
        copy.key.fromMe = sender === alpha.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }

    alpha.sendMessageFromContent = async (jid, message, options = {}) => {
        var option = {
            contextInfo: {},
            ...options
        }
        var prepare = await generateWAMessageFromContent(jid, message, option)
        await alpha.relayMessage(jid, prepare.message, {
            messageId: prepare.key.id
        })
        return prepare
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    alpha.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
            vtype = Object.keys(message.message.viewOnceMessage.message)[0]
            delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
            delete message.message.viewOnceMessage.message[vtype].viewOnce
            message.message = {
                ...message.message.viewOnceMessage.message
            }
        }

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
        let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await alpha.relayMessage(jid, waMessage.message, {
            messageId: waMessage.key.id
        })
        return waMessage
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    alpha.getFile = async (path) => {
        let res
        let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }

        return {
            res,
            ...type,
            data
        }
    }

    return alpha
}

startalpha()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})