require('../settings')
const fs = require('fs')
const levelling = require('./levelling')
const {
   smsg,
   getGroupAdmins,
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
} = require('./myfunc')
const PhoneNumber = require('awesome-phonenumber')
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
   sendContact,
   getName
} = require('./welcome')

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}

function msToTime(duration) {
   var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

   hours = (hours < 10) ? "0" + hours : hours
   minutes = (minutes < 10) ? "0" + minutes : minutes
   seconds = (seconds < 10) ? "0" + seconds : seconds

   return hours + " jam " + minutes + " menit"
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

/*const gplay = require ('google-play-scraper')

gplay.search({term : 'Free fire'}).then(async res =>{

res = res.map((v) => `*Title:* ${v.title}\n*Dev:* ${v.developer}\n*Score:* ${v.scoreText}\n*Link:* ${v.url}`).join`----------------------------------------\n\n`
	m.reply(res)
})
*/
const adventure = async (alpha, m, prefix) => {

   let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
   let _timers = (300000 - __timers)
   let timers = clockString(_timers)
   if (global.db.data.users[m.sender].healt > 79) {
      if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
         let armor = global.db.data.users[m.sender].armor
         let rubah = global.db.data.users[m.sender].rubah
         let kuda = global.db.data.users[m.sender].kuda
         let kucing = global.db.data.users[m.sender].kucing
         let ____health = `${Math.floor(Math.random() * 101)}`.trim()
         let ___health = (____health * 1)
         let kucingnya = (kucing == 0 ? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : '' || kucing == 5 ? 30 : '')
         let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
         let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
         let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
         let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
         let uang = `${Math.floor(Math.random() * 400)}`.trim()
         let _potion = `${Math.floor(Math.random() * 2)}`.trim()
         let potion = (_potion * 1)
         let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '')
         let diamond = (_diamond * 1)
         let _common = `${Math.floor(Math.random() * 3)}`.trim()
         let common = (_common * 1)
         let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
         let uncommon = (_uncommon * 1)
         let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
         let mythic = (_mythic * 1)
         let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
         let sampah = `${Math.floor(Math.random() * 300)}`.trim()
         let legendary = (_legendary * 1)
         let gambar1 = global.adventureRPG
         let str = `
♥️ Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵Jepang', '🇰🇷Korea', '🇮🇩Bali', '🇺🇲Amerika', '🇮🇶Iraq', '🇦🇪Arab', '🇵🇰Pakistan', '🇩🇪German', '🇫🇮Finlandia', '💭Ke bawa dunia mimpi', '🔚Ujung dunia', 'Mars', '🌑Bulan', 'Pluto', '☀️Matahari', '...'])} dan mendapatkan
\n*🎆 Exp:* ${exp} 
*💰 Uang:* ${uang}
*🗑️ Sampah:* ${sampah}${potion == 0 ? '' : '\n*🐦 Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*💎 Diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*🧰 Common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*⚡ Uncommon crate:* ' + uncommon + ''}
`.trim()
         sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(gambar1), [{
            buttonId: `.inv`,
            buttonText: {
               displayText: '🗃️ Inventory'
            },
            type: 1
         }], {
            userJid: m.chat,
            quoted: m
         })

         if (mythic > 0) {
            global.db.data.users[m.sender].mythic += mythic * 1
            alpha.sendMessage(m.chat, {
               text: '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate'
            }, {
               quoted: m
            })
         }
         if (legendary > 0) {
            global.db.data.users[m.sender].legendary += legendary * 1
            alpha.sendMessage(m.chat, {
               text: '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate'
            }, {
               quoted: m
            })
         }
         global.db.data.users[m.sender].healt -= healt * 1
         global.db.data.users[m.sender].exp += exp * 1
         global.db.data.users[m.sender].money += uang * 1
         global.db.data.users[m.sender].potion += potion * 1
         global.db.data.users[m.sender].diamond += diamond * 1
         global.db.data.users[m.sender].common += common * 1
         global.db.data.users[m.sender].uncommon += uncommon * 1
         global.db.data.users[m.sender].sampah += sampah * 1
         global.db.data.users[m.sender].lastadventure = new Date * 1
      }
      else m.reply(`Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`)
   }
   else m.reply('Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + prefix + 'shop buy potion <jumlah>*\ndan ketik *' + prefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + prefix + 'collect*')

}

const bank = async (alpha, m, prefix) => {
   let thumbnail = global.bankRPG
   let user = global.db.data.users[m.sender]
   let anu = `
🏦 Bank *${user.name}*
⭐ Role : *${user.role}*\n\n
*${user.exp}* Exp ✨
*${user.limit}* Limit 📊
*${user.money}* Money 💵`
   sendButLoc(alpha, m.chat, anu, '©' + ownername, await getBuffer(thumbnail), [{
         buttonId: `.menu`,
         buttonText: {
            displayText: '🪀 Menu'
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
}

const bansos = async (alpha, m, prefix) => {
   let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
   let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
   let Aku = (randomaku * 1)
   let Kamu = (randomkamu * 1)
   let kbansos = global.bansosRPG
   let mbansos = global.bansosRPG_
   let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
   let _timers = (604800000 - __timers)
   let timers = clockString(_timers)
   let user = global.db.data.users[m.sender]
   if (new Date - global.db.data.users[m.sender].lastbansos > 300000) {
      if (Aku > Kamu) {
         sendButLoc(alpha, m.chat, `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,  Dan kamu harus membayar denda 3 Juta rupiah💵`, '©' + ownername, await getBuffer(kbansos), [{
               buttonId: `.menu`,
               buttonText: {
                  displayText: '🪀 Menu'
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
         user.money -= 3000000
         global.db.data.users[m.sender].lastbansos = new Date * 1
      }
      else if (Aku < Kamu) {
         user.money += 3000000
         sendButLoc(alpha, m.chat, `Kamu berhasil  korupsi dana bansos🕴️💰,  Dan kamu mendapatkan 3 Juta rupiah💵`, '©' + ownername, await getBuffer(mbansos), [{
               buttonId: `.menu`,
               buttonText: {
                  displayText: '🪀 Menu'
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
         global.db.data.users[m.sender].lastbansos = new Date * 1
      }
      else {
         alpha.sendButMessage(m.chat, `Maaf, Kamu Tidak Berhasil Korupsi bansos Dan Tidak masuk penjara karna kamu *melarikan diri🏃*`, `© ${ownername}`, [{
            buttonId: '.menu',
            buttonText: {
               displayText: 'Back To Home'
            },
            type: 1
         }], {
            quoted: m
         })
         global.db.data.users[m.sender].lastbansos = new Date * 1
      }
   }
   else alpha.sendButMessage(m.chat, `Kamu sudah Melakukan Korupsi Bansos 💰\nDan kamu harus menunggu selama agar bisa korupsi bansos kembali \n▸ 🕓 *${timers}*`, `© ${ownername}`, [{
      buttonId: '.menu',
      buttonText: {
         displayText: 'Back To Home'
      },
      type: 1
   }], {
      quoted: m
   })
}


const berburu = async (alpha, m, prefix) => {
   let ___timers = (new Date - global.db.data.users[m.sender].as)
   let _timers = (500000 - ___timers)
   let timers = clockString(_timers)
   let user = global.db.data.users[m.sender]
   let gmbrt = global.berburuRPG
   if (new Date - global.db.data.users[m.sender].as > 500000) {
      let randomaku1 = `${Math.floor(Math.random() * 7)}`
      let randomaku2 = `${Math.floor(Math.random() * 7)}`
      let randomaku4 = `${Math.floor(Math.random() * 7)}`
      let randomaku3 = `${Math.floor(Math.random() * 7)}`
      let randomaku5 = `${Math.floor(Math.random() * 7)}`
      let randomaku6 = `${Math.floor(Math.random() * 7)}`
      let randomaku7 = `${Math.floor(Math.random() * 7)}`
      let randomaku8 = `${Math.floor(Math.random() * 7)}`
      let randomaku9 = `${Math.floor(Math.random() * 7)}`
      let randomaku10 = `${Math.floor(Math.random() * 7)}`
      let randomaku11 = `${Math.floor(Math.random() * 7)}`
      let randomaku12 = `${Math.floor(Math.random() * 7)}`
         .trim()

      let rbrb1 = (randomaku1 * 1)
      let rbrb2 = (randomaku2 * 1)
      let rbrb3 = (randomaku3 * 1)
      let rbrb4 = (randomaku4 * 1)
      let rbrb5 = (randomaku5 * 1)
      let rbrb6 = (randomaku6 * 1)
      let rbrb7 = (randomaku7 * 1)
      let rbrb8 = (randomaku8 * 1)
      let rbrb9 = (randomaku9 * 1)
      let rbrb10 = (randomaku10 * 1)
      let rbrb11 = (randomaku11 * 1)
      let rbrb12 = (randomaku12 * 1)

      zero1 = `${rbrb1}`
      zero2 = `${rbrb2}`
      zero3 = `${rbrb3}`
      zero4 = `${rbrb4}`
      zero5 = `${rbrb5}`
      zero6 = `${rbrb6}`
      zero7 = `${rbrb7}`
      zero8 = `${rbrb8}`
      zero9 = `${rbrb9}`
      zero10 = `${rbrb10}`
      zero11 = `${rbrb11}`
      zero12 = `${rbrb12}`

      let hsl = `*Hasil Berburu*

 *🐂 = [ ${zero1} ]*			*🐃 = [ ${zero7} ]*
 *🐅 = [ ${zero2} ]*			 *🐮 = [ ${zero8} ]*
 *🐘 = [ ${zero3} ]*			 *🐒 = [ ${zero9} ]*
 *🐐 = [ ${zero4} ]*			 *🐗 = [ ${zero10} ]*
 *🐼 = [ ${zero5} ]*			 *🐖 = [ ${zero11} ]*
 *🐊= [ ${zero6} ]*			  *🐓 = [${zero12} ]*

`
      global.db.data.users[m.sender].banteng += rbrb1
      global.db.data.users[m.sender].harimau += rbrb2
      global.db.data.users[m.sender].gajah += rbrb3
      global.db.data.users[m.sender].kambing += rbrb4
      global.db.data.users[m.sender].panda += rbrb5
      global.db.data.users[m.sender].buaya += rbrb6
      global.db.data.users[m.sender].kerbau += rbrb7
      global.db.data.users[m.sender].sapi += rbrb8
      global.db.data.users[m.sender].monyet += rbrb9
      global.db.data.users[m.sender].babihutan += rbrb10
      global.db.data.users[m.sender].babi += rbrb11
      global.db.data.users[m.sender].ayam += rbrb12
      setTimeout(async () => {
         sendButLoc(alpha, m.chat, hsl, '©' + ownername, await getBuffer(gmbrt), [{
               buttonId: `.kandang`,
               buttonText: {
                  displayText: '🕸️ Kandang'
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
      }, 20000)
      setTimeout(() => {
         m.reply(`_DUARRRR_`)
      }, 18000)
      setTimeout(() => {
         m.reply('_KPUMNN !!_')
      }, 15000)
      setTimeout(() => {
         m.reply('_DORR DORR !!_')
      }, 14000)
      setTimeout(() => {
         m.reply('_Sedang Berburu..._')
      }, 0)
      user.as = new Date * 1
   }
   else alpha.sendButMessage(m.chat, `📍 Sepertinya Kamu Sudah Kecapekan\nSilahkan Istirahat dulu Untuk melanjutkan berburu !\n🕖 *${timers}*`, `© ${ownername}`, [{
      buttonId: '.inv',
      buttonText: {
         displayText: '🗃️ Inventory'
      },
      type: 1
   }, {
      buttonId: '.menu',
      buttonText: {
         displayText: 'Menu 🎭'
      },
      type: 1
   }], {
      quoted: m
   })

}

const berdagang = async (alpha, m, prefix) => {
   let dapat = (Math.floor(Math.random() * 5000))
   let who
   if (m.isGroup) who = m.mentionedJid[0]
   else who = m.chat
   if (!who) return m.reply('Tag salah satu yang kamu ingin ajak berdagang')
   if (typeof global.db.data.users[who] == 'undefined') return m.reply('Pengguna tidak ada didalam data base')
   let __timers = (new Date - global.db.data.users[m.sender].lastdagang)
   let _timers = (28800000 - __timers)
   let timers = clockString(_timers)
   let users = global.db.data.users
   if (new Date - global.db.data.users[m.sender].lastdagang > 28800000) {
      if (4999 > users[who].money) return m.reply('Target tidak memiliki modal, harap masukkan modal 5000')
      if (4999 > users[m.sender].money) m.reply('Target tidak memiliki modal, harap masukkan modal 5000')
      users[who].money -= dapat * 1
      users[m.sender].money -= dapat * 1
      global.db.data.users[m.sender].lastdagang = new Date * 1
      alpha.sendTextWithMentions(m.chat, `Mohon tunggu kak..\nKamu dan @${who.split`@`[0]} sedang berdagang.. 😅\n\nKamu dan @${who.split`@`[0]} meletakkan modal -${dapat} 😅`, m)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 3600000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 7200000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 10800000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 14400000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 18000000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 21600000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +5000\n${users[who].money += 5000} Money @${who.split`@`[0]}`, m)
      }, 25200000)
      setTimeout(() => {
         alpha.sendTextWithMentions(m.chat, `Selamat kamu dan @${who.split`@`[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.split`@`[0]} didapatkan +10000\n${users[who].money += 10000} Money @${who.split`@`[0]}`, m)
      }, 28800000)
   }
   else m.reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)
}

const berkebon = async (alpha, m, prefix) => {
   let apelu = global.db.data.users[m.sender].bibitapel
   let angguru = global.db.data.users[m.sender].bibitanggur
   let manggau = global.db.data.users[m.sender].bibitmangga
   let pisangu = global.db.data.users[m.sender].bibitpisang
   let jeruku = global.db.data.users[m.sender].bibitjeruk
   let time = global.db.data.users[m.sender].lastberkebon + 1800000
   if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${prefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`)
   if (new Date - global.db.data.users[m.sender].lastberkebon < 1800000) return m.reply(`Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`)
   if (global.db.data.users[m.sender].bibitmangga > 499) {
      if (global.db.data.users[m.sender].bibitapel > 499) {
         if (global.db.data.users[m.sender].bibitpisang > 499) {
            if (global.db.data.users[m.sender].bibitjeruk > 499) {
               if (global.db.data.users[m.sender].bibitanggur > 499) {
                  let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
                  let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
                  let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
                  let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
                  let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
                  global.db.data.users[m.sender].pisang += pisangpoin * 1
                  global.db.data.users[m.sender].anggur += anggurpoin * 1
                  global.db.data.users[m.sender].mangga += manggapoin * 1
                  global.db.data.users[m.sender].jeruk += jerukpoin * 1
                  global.db.data.users[m.sender].apel += apelpoin * 1
                  global.db.data.users[m.sender].tiketcoin += 1
                  global.db.data.users[m.sender].bibitpisang -= 500
                  global.db.data.users[m.sender].bibitanggur -= 500
                  global.db.data.users[m.sender].bibitmangga -= 500
                  global.db.data.users[m.sender].bibitjeruk -= 500
                  global.db.data.users[m.sender].bibitapel -= 500
                  global.db.data.users[m.sender].lastberkebon = new Date * 1
                  m.reply(`🎊 Selamat kamu mendapatkan : \n+${pisangpoin} Pisang 🍌\n+${manggapoin} Mangga 🥭\n+${anggurpoin} Anggur 🍇\n+${jerukpoin} Jeruk 🍊\n+${apelpoin} Apel 🍎\n+1 Tiketcoin 🪙`)
                  setTimeout(() => {
                     m.reply(`Waktunya berkebon...`)
                  }, 1800000)
               }
               else m.reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebon`)
            }
            else m.reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebon`)
         }
         else m.reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebon`)
      }
      else m.reply(`Pastikan bibit apel kamu *500* untuk bisa berkebon`)
   }
   else m.reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebon`)
}

const build = async (alpha, m, prefix, args, command) => {
   let rumahsakit = 5827
   let benteng = 7373
   let camptroops = 9278
   let pertanian = 7288
   let pertambangan = 6278
   let type = (args[0] || '').toLowerCase()
   let upgrade = (args[0] || '').toLowerCase()
   let user = global.db.data.users[m.sender]
   let caption = `
*🚜 List Contruction For kingdoms facility*
*List facility | 🛒Harga pembangunan*
🏥 Hospital :    ${rumahsakit}
🌾 Pertanian:    ${pertanian}
🏕️ Camptroop:    ${camptroops}
⚒️ Pertambangan: ${pertambangan}
🏯 Benteng: ${benteng}
⌨️ Typing to build
${prefix}build <type>`
   try {
      if (/build|bangun/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'benteng':
            case 'fortress':
               if (global.db.data.users[m.sender].batu > benteng * count) {
                  global.db.data.users[m.sender].batu >= benteng * count
                  global.db.data.users[m.sender].fortress += count * 1
                  global.db.data.users[m.sender].kayu -= benteng * count
                  global.db.data.users[m.sender].batu -= benteng * count
                  m.reply(`Berhasil membangun benteng`)
               }
               else m.reply(`Sda Kamu tidak cukup untuk membangun benteng yg senilai ${benteng * count }Kayu 🪵 ${benteng * count} batu 🪨`)
               break
            case 'pertanian':
               if (user.batu > pertanian * count) {
                  user.batu >= pertanian * count
                  user.pertanian += count * 1
                  user.kayu -= pertanian * count
                  user.batu -= pertanian * count
               }
               else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${pertanian * count }Kayu 🪵 ${pertanian * count} batu 🪨`)
               break
            case 'camptroops':
            case 'camptroop':
               if (user.batu > camptroops * count) {
                  user.batu >= camptroops * count
                  user.camptroops += count * 1
                  user.kayu -= camptroops * count
                  user.batu -= camptroops * count
               }
               else m.reply(`Sda Kamu tidak cukup untuk membangun kamp pasukan yg senilai ${camptroops * count }Kayu 🪵 ${camptroops * count} batu 🪨`)

               break
            case 'pertambangan':
               if (user.tambang > pertambangan * count) {
                  user.batu >= pertambangan * count
                  user.tambang += count * 1
                  user.kayu -= pertambangan * count
                  user.batu -= pertambangan * count
               }
               else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${pertambangan * count }Kayu 🪵 ${pertambangan * count} batu 🪨`)
               break
            case 'rumahsakit':
            case 'hospital':
               if (user.rumahsakit > rumahsakit * count) {
                  user.rumahsakit += count * 1
                  user.kayu -= rumahsakit * count
                  user.batu -= rumahsakit * count
               }
               else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${rumahsakit * count }Kayu 🪵 ${rumahsakit * count} batu 🪨`)
               break
            default:
               return m.reply(caption)
         }
      }
   }
   catch (e) {
      m.reply(caption)
   }
}

const casino = async (alpha, m, prefix, args) => {
   this.casino = this.casino ? this.casino : {}
   if (m.chat in this.casino) return m.reply('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
   else this.casino[m.chat] = true
   try {
      let buatall = 1
      let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
      let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
      let Aku = (randomaku * 1)
      let Kamu = (randomkamu * 1)
      let count = args[0]
      count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
      count = Math.max(1, count)
      if (args.length < 1) return m.reply(prefix + 'casino <jumlah>\n ' + prefix + 'casino 1000')
      if (global.db.data.users[m.sender].exp >= count * 1) {
         global.db.data.users[m.sender].exp -= count * 1
         if (Aku > Kamu) {
            m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`.trim())
         }
         else if (Aku < Kamu) {
            global.db.data.users[m.sender].exp += count * 2
            m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`.trim())
         }
         else {
            global.db.data.users[m.sender].exp += count * 1
            m.reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`.trim())
         }
      }
      else m.reply(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *.kerja* terlebih dahulu!`)
   }
   catch (e) {
      m.reply('Error!!')
   }
}
//^(chop|choping)$/i
const chop = async (alpha, m, prefix) => {
   let __timers = (new Date - global.db.data.users[m.sender].lastmining)
   let _timers = (180000 - __timers)
   let timers = clockString(_timers)
   if (global.db.data.users[m.sender].healt > 79) {
      if (new Date - global.db.data.users[m.sender].lastmining > 180000) {
         let armor = global.db.data.users[m.sender].armor
         let rubah = global.db.data.users[m.sender].rubah
         let kuda = global.db.data.users[m.sender].kuda
         let kucing = global.db.data.users[m.sender].kucing
         let ____health = `${Math.floor(Math.random() * 101)}`.trim()
         let ___health = (____health * 1)
         let kucingnya = (kucing == 0 ? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : '' || kucing == 5 ? 30 : '')
         let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
         let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
         let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
         let _potion = `${Math.floor(Math.random() * 2)}`.trim()
         let potion = (_potion * 1)
         let _common = `${Math.floor(Math.random() * 3)}`.trim()
         let common = (_common * 1)
         let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
         let uncommon = (_uncommon * 1)
         let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
         let mythic = (_mythic * 1)
         let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
         let sampah = `${Math.floor(Math.random() * 300)}`.trim()
         let legendary = (_legendary * 1)
         let diamond = `${Math.floor(Math.random() * 10)}`.trim()
         let kayu = `${Math.floor(Math.random() * 150)}`.trim()
         let batu = `${Math.floor(Math.random() * 100)}`.trim()
         let iron = `${Math.floor(Math.random() * 100)}`.trim()
         let exp = `${Math.floor(Math.random() * 500)}`.trim()
         let uang = `${Math.floor(Math.random() * 500)}`.trim()
         m.reply('↓Chopping:')
         let str = `
❤️ While you chopping, you got:
🗡️ Wood: ${kayu}
🔩 Iron: ${iron}
💵 Gold: ${uang}
⚜️ Xp: ${exp}
and you got Additional gifts
💎 Diamond: ${diamond}
`.trim()
         alpha.sendButMessage(m.chat, str, `© ${ownername}`, [{
            buttonId: '.inv',
            buttonText: {
               displayText: '🗃️ Inventory'
            },
            type: 1
         }, {
            buttonId: '.menu',
            buttonText: {
               displayText: 'Menu 🎭'
            },
            type: 1
         }], {
            quoted: m
         })
         global.db.data.users[m.sender].kayu += kayu * 1
         global.db.data.users[m.sender].diamond += diamond * 1
         global.db.data.users[m.sender].batu += batu * 1
         global.db.data.users[m.sender].iron += iron * 1
         global.db.data.users[m.sender].exp += exp * 1
         global.db.data.users[m.sender].money += uang * 1
         global.db.data.users[m.sender].lastmining = new Date * 1
      }
      else m.reply(`Please wait  *${timers}* again`)
   }
   else m.reply('Minimum 80 healt to do choping')

}
//^(collect)$/i
/**/
const collect = async (alpha, m, prefix, args, command) => {
   let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
   let _timers = (43200000 - __timers)
   let timers = clockString(_timers)
   let user = global.db.data.users[m.sender]
   if (new Date - global.db.data.users[m.sender].lastclaim > 43200000) {
      m.reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵 money dan *1* 🥤potion`)
      user.money += 1000
      user.potion += 1
      user.lastclaim = new Date * 1
   }
   else m.reply(`Silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
//^(masak|cook)$/i
const cook = async (alpha, m, prefix, args, command) => {
   let type = (args[0] || '').toLowerCase()
   let msk = (args[0] || '').toLowerCase()
   let cok = `
Please choose what to cook🍳
🍖 ⟩ ${prefix}ayamb *[ to cook grilled chicken ]*
🍗 ⟩ ${prefix}ayamg *[ to cook fried chicken]*
🍣${prefix}leleg
🍣${prefix}leleb *[ lele bakar ]*
🍖${prefix}sapir
🍖${prefix}ssapi [ to cook beef steak ]
typing command↓
${prefix + command } sapir
Untuk makan ${prefix}eat ayamg
`

   try {
      if (/masak|cook/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'ayamb':
               if (global.db.data.users[m.sender].ayam >= count * 1) {
                  global.db.data.users[m.sender].ayam >= count * 1
                  global.db.data.users[m.sender].ayam -= count * 1
                  global.db.data.users[m.sender].ayamb += count * 1
                  m.reply(`Succes memmasak ${count } ayam bakar🍖`)
               }
               else m.reply(`Stok buruan mu tidak cukup untuk dimasak`)
               break

            case 'sapir':
               if (global.db.data.users[m.sender].ayam >= count * 1) {
                  global.db.data.users[m.sender].sapi >= count * 1
                  global.db.data.users[m.sender].sapi -= count * 1
                  global.db.data.users[m.sender].sapir += count * 1
                  m.reply(`Succes memasak ${ count } Rendang 🍜`)
               }
               else m.reply(`hewan yg kamu dapatkan tidak cukup untuk dimasak`)
               break
            case 'ayamg':
               if (global.db.data.users[m.sender].ayam >= count * 1) {
                  global.db.data.users[m.sender].ayam >= count * 1
                  global.db.data.users[m.sender].ayam -= count * 1
                  global.db.data.users[m.sender].ayamg += count * 1
                  m.reply(`Succes memmasak ${ count } ayam goreng🍗`)
               }
               else m.reply(`Stok buruan mu tidak cukup untuk dimasak`)
               break
            case 'leleg':
               if (global.db.data.users[m.sender].lele >= count * 1) {
                  global.db.data.users[m.sender].lele >= count * 1
                  global.db.data.users[m.sender].lele -= count * 1
                  global.db.data.users[m.sender].leleg += count * 1
                  m.reply(`Succes memasak ${ count } lele goreng 🍤`)
               }
               else m.reply(`Stok buruan mu tidak cukup untuk dimasak`)
               break
            case 'leleb':
               if (global.db.data.users[m.sender].lele >= count * 1) {
                  global.db.data.users[m.sender].lele >= count * 1 ///DONT DELETE THIS
                  global.db.data.users[m.sender].lele -= count * 1
                  global.db.data.users[m.sender].leleb += count * 1
                  m.reply(`Succes memmasak ${ count } lele bakar 🎏`)
               }
               else m.reply(`Stok buruan mu tidak cukup untuk dimasak`)
               break
            case 'ssapi':
               if (global.db.data.users[m.sender].sapi >= count * 1) {
                  global.db.data.users[m.sender].sapi >= count * 1 ///DONT DELETE THIS
                  global.db.data.users[m.sender].sapi -= count * 1
                  global.db.data.users[m.sender].ssapi += count * 1
                  m.reply(`Succes memmasak ${ count } steak sapi 🐄`)
               }
               else m.reply(`Stok buruan mu tidak cukup untuk dimasak`)
               break
            default:
               return alpha.sendButMessage(m.chat, cok, `© ${ownername}`, [{
                  buttonId: '.eat ayamb 1',
                  buttonText: {
                     displayText: '🍽️ Makan 🍴'
                  },
                  type: 1
               }], {
                  quoted: m
               })
         }
      }
   }
   catch (e) {
      m.reply(`Sepertinya ada yg eror`)
   }
}
//^(cd|cooldown)$/i
const cooldown = async (alpha, m, prefix, args, command) => {
   let {
      lasthourly,
      lastberburu,
      lastbansos,
      lastadventure,
      lastfishing,
      lastwar,
      lastduel,
      lastmining,
      lastdungeon,
      lastclaim,
      lastweekly,
      lastmonthly
   } = global.db.data.users[m.sender]

   let healt = global.db.data.users[m.sender].healt
   let stamina = global.db.data.users[m.sender].stamina
   let armor = global.db.data.users[m.sender].armor
   let sword = global.db.data.users[m.sender].sword
   let sdurability = global.db.data.users[m.sender].sworddurability
   let warn = global.db.data.users[m.sender].warn
   let banned = db.data.users[m.sender].banned
   let tprem = global.db.data.users[m.sender].tprem
   let pancing = global.db.data.users[m.sender].pancing
   let fdurability = global.db.data.users[m.sender].fishingroddurability
   let role = global.db.data.users[m.sender].role
   let pickaxe = global.db.data.users[m.sender].pickaxe
   let pdurability = global.db.data.users[m.sender].pickaxedurability

   let psepick = global.db.data.users[m.sender].psepick
   let psenjata = global.db.data.users[m.sender].psenjata

   let ikan = global.db.data.users[m.sender].ikan
   let nila = global.db.data.users[m.sender].nila
   let bawal = global.db.data.users[m.sender].bawal
   let lele = global.db.data.users[m.sender].lele
   let udangb = global.db.data.users[m.sender].udang

   let apel = global.db.data.users[m.sender].apel
   let ayamg = global.db.data.users[m.sender].ayamg
   let ayamb = global.db.data.users[m.sender].ayamb
   let sapir = global.db.data.users[m.sender].sapir
   let ssapi = global.db.data.users[m.sender].ssapi
   let kayu = global.db.data.users[m.sender].kayu
   let string = global.db.data.users[m.sender].string
   let emas = global.db.data.users[m.sender].emas
   let besi = global.db.data.users[m.sender].iron
   let batu = global.db.data.users[m.sender].batu
   let sapi = global.db.data.users[m.sender].sapi
   let ayam = global.db.data.users[m.sender].ayam
   let babi = global.db.data.users[m.sender].babi
   let banteng = global.db.data.users[m.sender].banteng
   let pet = global.db.data.users[m.sender].pet
   let kucing = global.db.data.users[m.sender].kucing
   let _kucing = global.db.data.users[m.sender].anakkucing
   let rubah = global.db.data.users[m.sender].rubah
   let _rubah = global.db.data.users[m.sender].anakrubah
   let kuda = global.db.data.users[m.sender].kuda
   let _kuda = global.db.data.users[m.sender].anakkuda
   let diamond = global.db.data.users[m.sender].diamond
   let potion = global.db.data.users[m.sender].potion
   let common = global.db.data.users[m.sender].common
   let makananpet = global.db.data.users[m.sender].makananpet
   let uncommon = global.db.data.users[m.sender].uncommon
   let mythic = global.db.data.users[m.sender].mythic
   let legendary = global.db.data.users[m.sender].legendary
   let level = global.db.data.users[m.sender].level
   let money = global.db.data.users[m.sender].money
   let exp = global.db.data.users[m.sender].exp
   let atm = global.db.data.users[m.sender].atm
   let arlok = global.db.data.users[m.sender].arlok
   let limit = global.db.data.users[m.sender].limit
   let glimit = global.db.data.users[m.sender].glimit
   let sampah = global.db.data.users[m.sender].sampah
   let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
   let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
   let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
   let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
   let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
   let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
   let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
   let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
   let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
   let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
   let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
   let usersmoney = sortedmoney.map(v => v[0])
   let usersgold = sortedgold.map(v => v[0])
   let usersarlok = sortedarlok.map(v => v[0])
   let usersdiamond = sorteddiamond.map(v => v[0])
   let userspotion = sortedpotion.map(v => v[0])
   let userssampah = sortedsampah.map(v => v[0])
   let userslevel = sortedlevel.map(v => v[0])
   let userscommon = sortedcommon.map(v => v[0])
   let usersuncommon = sorteduncommon.map(v => v[0])
   let usersmythic = sortedmythic.map(v => v[0])
   let userslegendary = sortedlegendary.map(v => v[0])
   let pp = global.cooldownRPG
   let str = `
*「 🕖 COOLDOWN 」*

*Last Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
*Last Memancing :* ${lastfishing > 0 ? '❌' : '✅'}
*Last Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
*Last Duel :* ${lastduel > 0 ? '❌' : '✅'}
*Last War :* ${lastwar > 0 ? '❌'  : '✅'}
*Last Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
*Last Mining :* ${lastmining > 0 ? '❌' : '✅'}
*Last Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
*Last Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
*Last Claim :* ${lastclaim > 0 ? '❌' : '✅'}
*Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
*Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
\n${readMore}
⚠️ *Warn:* ${warn}
⛔ *Banned:* ${banned}
`.trim()
   sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(pp), [{
         buttonId: `.inv`,
         buttonText: {
            displayText: '🗃️ Inventory'
         },
         type: 1
      },
      {
         buttonId: `.profile`,
         buttonText: {
            displayText: 'Profile 👤'
         },
         type: 1
      }
   ], {
      userJid: m.chat,
      quoted: m
   })
}
//^(craft|crafting|enchant)/i
const craft = async (alpha, m, prefix, args, command) => {
   let sword = 9800
   let pickaxe = 8927
   let armor = 17290
   let pancing = 9278
   let Upickaxe = 30000

   let Esword = 18290
   let Epickaxe = 18230
   let Earmor = 23847

   let type = (args[0] || '').toLowerCase()
   let _type = (args[0] || '').toLowerCase()
   let user = global.db.data.users[m.sender]
   global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
   global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
   global.db.data.users[m.sender].pancing = global.db.data.users[m.sender].pancing || 0
   let caption = `*💠 Crafting :*
  cara craft: #craft pickaxe
  cara enchant: #epickaxe
⛏️ Pickaxe
🗡️ Sword
🎣 Pancing

*🔮 Enchant*

⛏️  *Pickaxe = ${Epickaxe}*
Ketahanan ++
Nambang ++

🗡️️ *Sword = ${Esword}*
Ketahanan +++
kelemahan -
Ketajaman ++
Burning fire +
`

   try {
      if (/craft|Crafting/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'pickaxe':
               if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n10 kayu🪵 \n5 iron⛓\n20 String🕸️`)
               global.db.data.users[m.sender].kayu -= 10
               global.db.data.users[m.sender].iron -= 5
               global.db.data.users[m.sender].string -= 20
               global.db.data.users[m.sender].pickaxe += 1
               m.reply("Sukses membuat 1 pickaxe 🔨")
               break
            case 'sword':
               if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan : 10 kayu🪵 5 iron⛓️ dan 20 String🕸️`)
               global.db.data.users[m.sender].kayu -=
                  global.db.data.users[m.sender].iron -= 10
               global.db.data.users[m.sender].string -= 20
               global.db.data.users[m.sender].sword += 1
               m.reply("Sukses membuat 1 sword 🗡️")
               break
            case 'pancing':
               if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :\n10 kayu🪵\n5 iron⛓\n20 String🕸️`)
               global.db.data.users[m.sender].kayu -= 10
               global.db.data.users[m.sender].iron -= 2
               global.db.data.users[m.sender].string -= 20
               global.db.data.users[m.sender].pancing += 1
               global.db.data.users[m.sender].fishingroddurability += 999
               m.reply("Sukses membuat 1 Pancingan 🎣")
               break

            default:
               return alpha.sendButMessage(m.chat, caption, `© ${ownername}`, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '🪀 Command 🪀'
                  },
                  type: 1
               }], {
                  quoted: m
               })
         }
      }
      else if (/enchant|enchan/i.test(command)) {
         const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
         switch (_type) {
            case 'pickaxe':
               if (user.enchant < 1) return m.reply(`Barang tidak cukup!\nUntuk mengenchant pickaxe.Kamu memerlukan : 1 Buku Enchant`)
               global.db.data.users[m.sender].enchant -= 1
               global.db.data.users[m.sender].pickaxedurability -= 999
               m.reply("Sukses Mengenchat Pickaxe 🔨")
            case '':
               break
            default:
               return alpha.sendButMessage(m.chat, caption, `© ${ownername}`, [{
                  buttonId: '.menu',
                  buttonText: {
                     displayText: '🪀 Command 🪀'
                  },
                  type: 1
               }], {
                  quoted: m
               })
         }
      }
   }
   catch (err) {
      m.reply("Error\n\n\n" + err.stack)
   }
}
//^(claim|daily)$/i
const daily = async (alpha, m, prefix) => {
   let user = global.db.data.users[m.sender]
   let __timers = (new Date - user.lastclaim)
   let _timers = (86400000 - __timers)
   let timers = clockString(_timers)
   if (new Date - user.lastclaim > 86400000) {
      let clem = global.dailyRPG
      let str = `+1000 money 💰\n+2 potion 🥤\n+2 Kayu 🪵`
      sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(clem), [{
            buttonId: `.weekly`,
            buttonText: {
               displayText: '🌄 Weekly'
            },
            type: 1
         },
         {
            buttonId: `.monthly`,
            buttonText: {
               displayText: 'Monthly 🌚'
            },
            type: 1
         }
      ], {
         userJid: m.chat,
         quoted: m
      })
      global.db.data.users[m.sender].money += 1000
      global.db.data.users[m.sender].kayu += 2
      global.db.data.users[m.sender].potion += 2
      global.db.data.users[m.sender].lastclaim = new Date * 1
   }
   else {

      alpha.sendButMessage(m.chat, `Silahkan tunggu *⏱️${timers}* lagi untuk bisa mengclaim lagi`, `© ${ownername}`, [{
         buttonId: '.cooldown',
         buttonText: {
            displayText: '⏳ Cooldown ⏳'
         },
         type: 1
      }], {
         quoted: m
      })

   }
}
//^(duel|dya|dno)/i
const duel = async (alpha, m, prefix, args, command) => {
   this.duel = this.duel ? this.duel : []
   args.length != 0 ? this.duel.push(m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')) : ""
   let who = this.duel[0]
   let enemy = global.db.data.users[who]
   let user = global.db.data.users[m.sender]
   let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)
   let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
   let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
   let Aku = (randomaku * 1)
   let Kamu = (randomkamu * 1)

   let __timers = (new Date - user.lastduel)
   let _timers = (300000 - __timers)
   let timers = clockString(_timers)

   try {
      if (/duel/.test(command)) {
         if (!who) return m.reply('Tag yg ingin di ajak duel!')

         let pler = `@${m.sender.replace(/@.+/, '')} Mengajak duel ${args[0]}\n\nPilih Ya Atau No`
         let mentionedJid = [m.sender]
         if (new Date - user.lastduel > 300000) {
            alpha.send2ButMes(m.chat, pler, `© ${ownername}`, `.dya`, `Ya`, `.dno`, `No`, m, [mentionedJid, who])
         }
         else m.reply(`Kamu Sudah Berduel Tunggu hingga *${timers}* untuk melakukan duel kembali`)
      }

      if (/dya/.test(command)) {
         let kenal = !who.includes(m.sender)
         if (kenal) return m.reply('Lu siapa?\nkok ikut kut mau duel')
         user.lastduel = new Date * 1
         if (Aku > Kamu) {
            user.money -= 900
            enemy.money += 900
            delete this.duel[m.sender]
            alpha.sendTextWithMentions(m.chat, `@${who.split("@")[0]} Menang Gelud🤼\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
         }
         else if (Aku < Kamu) {
            user.money += 450
            enemy.money -= 450
            delete this.duel[m.sender]
            alpha.sendTextWithMentions(m.chat, `@${who.split("@")[0]} Kalah Gelud🤼\n*Hadiah:*\n 450 money Mayan buat beli Limit`.trim(), m)
         }
         else {
            user.money += 250
            enemy.money += 250
            delete this.duel[m.sender]
            alpha.sendTextWithMentions(m.chat, `@${who.split("@")[0]}\n *Seri*\n masing masing 250 Money`.trim(), m)
         }
      }
      if (/dno/.test(command)) {
         let kenal = !who.includes(m.sender)
         if (kenal) return m.reply('Lu siapa?\nkok ikut kut mau duel')
         alpha.sendTextWithMentions(m.chat, `@${who.split("@")[0]} Membatalkan Ajakan Duel`, m)
         delete this.duel[m.sender]
      }
   }
   catch (e) {
      return m.reply(`${e}`)
   }
}
//^(feed(ing)?)$/i
const feed = async (alpha, m, prefix, args) => {
   let type = (args[0] || '').toLowerCase()
   let phonix = global.db.data.users[m.sender].phonix
   let kuda = global.db.data.users[m.sender].kuda
   let naga = global.db.data.users[m.sender].naga
   let kucing = global.db.data.users[m.sender].kucing
   let rubah = global.db.data.users[m.sender].rubah
   switch (type) {
      case 'phonix':
         if (phonix == 0) return m.reply('*Kamu belum memiliki Pet phonix*')
         if (phonix == 5) return m.reply('*Pet kamu dah lvl max*')
         let __waktur = (new Date - global.db.data.users[m.sender].phonixlastclaim)
         let _waktur = (600000 - __waktur)
         let waktur = clockString(_waktur)
         if (new Date - global.db.data.users[m.sender].phonixlastclaim > 600000) {
            if (global.db.data.users[m.sender].makananpet > 0) {
               global.db.data.users[m.sender].makananpet -= 1
               global.db.data.users[m.sender].anakphonix += 20
               global.db.data.users[m.sender].phonixlastclaim = new Date * 1
               m.reply(`Berhasil memberi makan pet ${type}`)
               if (phonix > 0) {
                  let naiklvl = ((phonix * 100) - 1)
                  if (global.db.data.users[m.sender].anakphonix > naiklvl) {
                     global.db.data.users[m.sender].phonix += 1
                     global.db.data.users[m.sender].anakphonix -= (phonix * 100)
                     m.reply(`*Selamat Pet phonix kamu naik level*`)
                  }
               }
            }
            else m.reply(`Makanan pet kamu tidak cukup`)
         }
         else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
         break
      case 'kuda':
         if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
         if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
         let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
         let _waktuk = (600000 - __waktuk)
         let waktuk = clockString(_waktuk)
         if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
            if (global.db.data.users[m.sender].makananpet > 0) {
               global.db.data.users[m.sender].makananpet -= 1
               global.db.data.users[m.sender].anakkuda += 20
               global.db.data.users[m.sender].kudalastclaim = new Date * 1
               m.reply(`Berhasil memberi makan pet ${type}`)
               if (kuda > 0) {
                  let naiklvl = ((kuda * 100) - 1)
                  if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                     global.db.data.users[m.sender].kuda += 1
                     global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                     m.reply(`*Selamat Pet Kuda kamu naik level*`)
                  }
               }
            }
            else m.reply(`Makanan pet kamu tidak cukup`)
         }
         else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
         break
      case 'naga':
         if (naga == 0) return m.reply('*Kamu belum memiliki Pet Naga*')
         if (naga == 5) return m.reply('*Pet kamu dah lvl max*')
         let ___waktuuu = (new Date - global.db.data.users[m.sender].nagalastclaim)
         let ____waktuuu = (600000 - ___waktuuu)
         let waktuuu = clockString(____waktuuu)
         if (new Date - global.db.data.users[m.sender].nagalastclaim > 600000) {
            if (global.db.data.users[m.sender].makananpet > 0) {
               global.db.data.users[m.sender].makananpet -= 1
               global.db.data.users[m.sender].anaknaga += 20
               global.db.data.users[m.sender].kudalastclaim = new Date * 1
               m.reply(`Berhasil memberi makan pet ${type}`)
               if (naga > 0) {
                  let naiklvl = ((naga * 100) - 1)
                  if (global.db.data.users[m.sender].anaknaga > naiklvl) {
                     global.db.data.users[m.sender].naga += 1
                     global.db.data.users[m.sender].anaknaga -= (naga * 100)
                     m.reply(`*Selamat Pet Naga kamu naik level*`)
                  }
               }
            }
            else m.reply(`Makanan pet kamu tidak cukup`)
         }
         else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
         break
      case 'rubah':
         if (rubah == 0) return m.reply('*Kamu belum memiliki Pet rubah*')
         if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
         let __waktuu = (new Date - global.db.data.users[m.sender].rubahlastclaim)
         let _waktuu = (600000 - __waktuu)
         let waktuu = clockString(_waktuu)
         if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
            if (global.db.data.users[m.sender].makananpet > 0) {
               global.db.data.users[m.sender].makananpet -= 1
               global.db.data.users[m.sender].anakrubah += 20
               global.db.data.users[m.sender].rubahlastclaim = new Date * 1
               m.reply(`Berhasil memberi makan pet ${type}`)
               if (naga > 0) {
                  let naiklvl = ((rubah * 100) - 1)
                  if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                     global.db.data.users[m.sender].rubah += 1
                     global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                     m.reply(`*Selamat Pet rubah kamu naik level*`)
                  }
               }
            }
            else m.reply(`Makanan pet kamu tidak cukup`)
         }
         else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
         break
      case 'kucing':
         if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
         if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
         let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
         let _waktu = (600000 - __waktu)
         let waktu = clockString(_waktu)
         if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
            if (global.db.data.users[m.sender].makananpet > 0) {
               global.db.data.users[m.sender].makananpet -= 1
               global.db.data.users[m.sender].anakkucing += 20
               global.db.data.users[m.sender].kucinglastclaim = new Date * 1
               m.reply(`Berhasil memberi makan pet ${type}`)
               if (kucing > 0) {
                  let naiklvl = ((kucing * 100) - 1)
                  if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                     global.db.data.users[m.sender].kucing += 1
                     global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                     m.reply(`*Selamat Pet Kucing kamu naik level*`)
                  }
               }
            }
            else m.reply(`Makanan pet kamu tidak cukup`)
         }
         else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktu}* lagi`)
         break
      default:
         return m.reply(`Contoh penggunaan:\n${prefix}feed [kucing | phonix | kuda | naga]\n*${prefix}feed kucing*`)
   }
}
//^(fishop|tokoikan)$/i
const fishop = async (alpha, m, prefix, args, command) => {
   const Bpaus = 25000
   const Spaus = 10000
   const Bkepiting = 15000
   const Skepiting = 8000
   const Bgurita = 30000
   const Sgurita = 15000
   const Bcumi = 9000
   const Scumi = 5000
   const Bdory = 50000
   const Sdory = 30000
   const Blumba = 100000
   const Slumba = 100000
   const Bhiu = 80000
   const Shiu = 40000
   const Budang = 10000
   const Sudang = 8000
   const Bikan = 2000
   const Sikan = 1000
   const Borca = 20000
   const Sorca = 15000
   const Blobster = 10000
   const Slobster = 8000
   const Bbuntal = 15000
   const Sbuntal = 7000
   let user = global.db.data.users[m.sender]
   let type = (args[0] || '').toLowerCase()
   let _type = (args[1] || '').toLowerCase()
   let jualbeli = (args[0] || '').toLowerCase()
   const Schat = `
${prefix}fishop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${prefix}fishop buy orca 1*\n\n
List Ikan:\n\n
*Ikan   |  Harga beli*\n
🐳Paus.       ${Bpaus}
🦀Kepiting. ${Bkepiting}
🐋Orca.       ${Borca}
🐟Ikan.        ${Bikan}
🦐Udang     ${Budang}
🐙Gurita.     ${Bgurita}
🦑Cumi².     ${Bcumi}
🐠Dory.        ${Bdory}
🐬Lumba²    ${Blumba}
🦞Lobster    ${Blobster}
🐡Buntal.     ${Bbuntal}\n\n
*Ikan   |  Harga Jual*\n
🐳Paus.       ${Spaus}
🦀Kepiting. ${Skepiting}
🐋Orca.       ${Sorca}
🐟Ikan.        ${Sikan}
🦐Udang     ${Sudang}
🐙Gurita.     ${Sgurita}
🦑Cumi.       ${Scumi}
🐠Dory.        ${Sdory}
🐬Lumba².    ${Slumba}\n\n
`.trim()
   try {
      if (/fishop|tokoikan/i.test(command)) {
         const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
         switch (jualbeli) {
            case 'buy':
               switch (_type) {
                  case 'paus':
                     if (global.db.data.users[m.sender].money >= Bpaus * count) {
                        global.db.data.users[m.sender].money -= Bpaus * count
                        global.db.data.users[m.sender].paus += count * 1
                        m.reply(`Succes membeli ${count} paus dengan harga ${Bpaus * count} Money 💰 \n\n`)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} paus dengan harga ${paus * count} Money 💰 `)
                     break
                  case 'ikan':
                     if (global.db.data.users[m.sender].money >= Bikan * count) {
                        global.db.data.users[m.sender].ikan += count * 1
                        global.db.data.users[m.sender].money -= Bikan * count
                        m.reply(`Succes membeli ${count} ikan dengan harga ${Bikan * count} Money 💰 `)
                     }
                     else m.reply(`Money anda tidak cukup`)

                     break
                  case 'cumi':
                     if (global.db.data.users[m.sender].money >= Bcumi * count) {
                        global.db.data.users[m.sender].cumi += count * 1
                        global.db.data.users[m.sender].money -= Bcumi * count
                        m.reply(`Succes membeli ${count} cumi  dengan harga ${Bcumi * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} cumi dengan harga ${Bcumi * count} Money 💰 \n\n*`)

                     break
                  case 'kepiting':
                     if (global.db.data.users[m.sender].money >= Bkepiting * count) {
                        global.db.data.users[m.sender].kepiting += count * 1
                        global.db.data.users[m.sender].money -= Bkepiting * count
                        m.reply(`Succes membeli ${count} kepiting  dengan harga ${Bkepiting * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} kepiting  dengan harga ${Bkepiting * count} Money 💰 \n\n*`)

                     break
                  case 'udang':
                     if (global.db.data.users[m.sender].money >= Budang * count) {
                        global.db.data.users[m.sender].udang += count * 1
                        global.db.data.users[m.sender].money -= Budang * count
                        m.reply(`Succes membeli ${count} udang  dengan harga ${Budang * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} udang  dengan harga ${Budang* count} Money 💰 \n\n*`)

                     break
                  case 'dory':
                     if (global.db.data.users[m.sender].money >= Bdory * count) {
                        global.db.data.users[m.sender].dory += count * 1
                        global.db.data.users[m.sender].money -= Bdory * count
                        m.reply(`Succes membeli ${count} dory  dengan harga ${Bdory * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} dory  dengan harga ${Bdory * count} Money 💰 \n\n*`)

                     break
                  case 'lobster':
                     if (global.db.data.users[m.sender].money >= Blobster * count) {
                        global.db.data.users[m.sender].lobsyer += count * 1
                        global.db.data.users[m.sender].money -= Blobster * count
                        m.reply(`Succes membeli ${count} dory  dengan harga ${Blobster * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} lobster  dengan harga ${Blobster * count} Money 💰 \n\n*`)

                     break
                  case 'buntal':
                     if (global.db.data.users[m.sender].money >= Bbuntal * count) {
                        global.db.data.users[m.sender].buntal += count * 1
                        global.db.data.users[m.sender].money -= Bbuntal * count
                        m.reply(`Succes membeli ${count} buntal  dengan harga ${Bbuntal * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} buntal  dengan harga ${Bbuntal * count} Money 💰 \n\n*`)

                     break
                  case 'orca':
                     if (global.db.data.users[m.sender].money >= Borca * count) {
                        global.db.data.users[m.sender].money -= Borca * count
                        global.db.data.users[m.sender].orca += count * 1
                        m.reply(`Succes membeli  orca dengan harga ${Borca * count} Money 💰 \n\n`)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} orca dengan hargBo) * count} Money 💰 \n\n`)
                     break
                  case 'gurita':
                     if (global.db.data.users[m.sender].money >= Bgurita * count) {
                        global.db.data.users[m.sender].gurita += count * 1
                        global.db.data.users[m.sender].money -= Bgurita * count
                        m.reply(`Succes membeli ${count} gurita dengan harga ${Bgurita * count} Money 💰 `)
                     }
                     else m.reply(`Uang anda tidak cukup untuk membeli ${count} gurita dengan harga ${Bgurita * count} Money 💰 `.trim())
                     break
               }
               break
            case 'sell':
               switch (_type) {
                  case 'orca':
                     if (global.db.data.users[m.sender].orca >= count * 1) {
                        global.db.data.users[m.sender].money += Sorca * count
                        global.db.data.users[m.sender].orca -= count * 1
                        m.reply(`Succes menjual ${count} orca dengan harga ${Sorca * count} Money 💰 `.trim())
                     }
                     else m.reply(`orca kamu tidak cukup`.trim())
                     break
                  case 'ikan':
                     if (global.db.data.users[m.sender].ikan >= count * 1) {
                        global.db.data.users[m.sender].money += Sikan * count
                        global.db.data.users[m.sender].ikan -= count * 1
                        m.reply(`Succes menjual ${count} ikan  dengan harga ${Sikan * count} Money 💰 `.trim())
                     }
                     else m.reply(`ikan  kamu tidak cukup`.trim())
                     break
                  case 'paus':
                     if (global.db.data.users[m.sender].paus >= count * 1) {
                        global.db.data.users[m.sender].money += Spaus * count
                        global.db.data.users[m.sender].paus -= count * 1
                        m.reply(`Succes menjual ${count} paus  dengan harga ${Spaus * count} Money 💰 `.trim())
                     }
                     else m.reply(`paus  kamu tidak cukup`.trim())
                     break
                  case 'gurita':
                     if (global.db.data.users[m.sender].gurita >= count * 1) {
                        global.db.data.users[m.sender].money += Sgurita * count
                        global.db.data.users[m.sender].gurita -= count * 1
                        m.reply(`Succes menjual ${count} gurita  dengan harga ${Sgurita * count} Money 💰 `.trim())
                     }
                     else m.reply(`gurita  kamu tidak cukup`.trim())
                     break
                  case 'udang':
                     if (global.db.data.users[m.sender].udang >= count * 1) {
                        global.db.data.users[m.sender].money += Sudang * count
                        global.db.data.users[m.sender].udang -= count * 1
                        m.reply(`Succes menjual ${count} udang  dengan harga ${Sudang * count} Money 💰 `.trim())
                     }
                     else m.reply(`udang  kamu tidak cukup`.trim())
                     break
                  case 'buntal':
                     if (global.db.data.users[m.sender].buntal >= count * 1) {
                        global.db.data.users[m.sender].buntal -= count * 1
                        global.db.data.users[m.sender].money += Sbuntal * count
                        m.reply(`Succes menjual ${count} buntal, dan anda mendapatkan ${Sbuntal * count} Money 💰 `)
                     }
                     else m.reply(`buntal anda tidak cukup`)
                     break
                  case 'lobster':
                     if (global.db.data.users[m.sender].lobster >= count * 1) {
                        global.db.data.users[m.sender].lobster -= count * 1
                        global.db.data.users[m.sender].money += Slobster * count
                        m.reply(`Succes menjual ${count} lobster, dan anda mendapatkan ${Slobster * count} Money 💰 `)
                     }
                     else m.reply(`lobster anda tidak cukup`)
                     break
                  case 'dory':
                     if (global.db.data.users[m.sender].dory >= count * 1) {
                        global.db.data.users[m.sender].dory -= count * 1
                        global.db.data.users[m.sender].money += Sdory * count
                        m.reply(`Succes menjual ${count} dory, dan anda mendapatkan ${Sdory * count} Money 💰 `)
                     }
                     else m.reply(`dory anda tidak cukup`)
                     break
                  case 'cumi':
                     if (global.db.data.users[m.sender].cumi >= count * 1) {
                        global.db.data.users[m.sender].cumi -= count * 1
                        global.db.data.users[m.sender].money += Scumi * count
                        m.reply(`Succes menjual ${count} cumi, dan anda mendapatkan ${Scumi * count} Money 💰 `)
                     }
                     else m.reply(`cumi anda tidak cukup`)
                     break
                  case 'kepiting':
                     if (global.db.data.users[m.sender].kepiting >= count * 1) {
                        global.db.data.users[m.sender].kepiting -= count * 1
                        global.db.data.users[m.sender].money += Skepiting * count
                        m.reply(`Succes menjual ${count} kepiting, dan anda mendapatkan ${Skepiting * count} Money 💰 `)
                     }
                     else m.reply(`kepiting anda tidak cukup`)
                     break
                  case 'hiu':
                     if (global.db.data.users[m.sender].hiu >= count * 1) {
                        global.db.data.users[m.sender].hiu -= count * 1
                        global.db.data.users[m.sender].money += Shiu * count
                        m.reply(`Succes menjual ${count} hiu, dan anda mendapatkan ${Shiu * count} Money 💰 `)
                     }
                     else m.reply(`Hiu anda tidak cukup`)
                     break
                  case 'cumi':
                     if (global.db.data.users[m.sender].cumi >= count * 1) {
                        global.db.data.users[m.sender].cumi -= count * 1
                        global.db.data.users[m.sender].money += Scumi * count
                        m.reply(`Succes menjual ${count} cumi, dan anda mendapatkan ${Scumi * count} Money 💰 `)
                     }
                     else m.reply(`Cumi anda tidak cukup`)
                     break
                  case 'lumba':
                     if (global.db.data.users[m.sender].lumba >= count * 1) {
                        global.db.data.users[m.sender].lumba -= count * 1
                        global.db.data.users[m.sender].money += Slumba * count
                        m.reply(`Succes menjual ${count} lumba, dan anda mendapatkan ${Slumba * count} Money 💰 `)
                     }
                     else m.reply(`lumba anda tidak cukup`)
                     break
               }
               break
            default:
               return m.reply(Schat)
         }
      }
   }
   catch (e) {
      m.reply(Schat)
   }
}
//^(hourly)$/i
const hourly = async (alpha, m, prefix) => {
   let user = global.db.data.users[m.sender]
   let _timers = (3600000 - (new Date - user.lasthourly))
   let timers = clockString(_timers)
   if (new Date - user.lasthourly > 3600000) {
      let ghor = global.hourlyRPG
      let str = `+2500 money 💰\n+1 Legendary crate 🧰\n+2 String 🕸️\n+2 Iron ⛓️\n+3 Gold 🪙\n+1 Limit 🧬`
      sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(ghor), [{
            buttonId: `.claim`,
            buttonText: {
               displayText: '🗃️ Claim'
            },
            type: 1
         },
         {
            buttonId: `.monthly`,
            buttonText: {
               displayText: 'Monthly 🌚'
            },
            type: 1
         }
      ], {
         userJid: m.chat,
         quoted: m
      })
      user.money += 2500
      user.legendary += 1
      user.iron += 2
      user.emas += 2
      user.string += 3
      user.limit += 1
      user.lasthourly = new Date * 1
   }
   else {
      alpha.send1ButMes(m.chat, `Silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, `© ${ownername}`, `.inv`, `🗃️ Inventory 🗃️`, m)
   }
}
//^(inv(entory)?|level(ing)?|myinv|e?xp)$/i
const inventory = async (ispremium, alpha, m, prefix) => {
   let {
      registered,
      age,
      lastrampok,
      lastdagang,
      lastcodereg,
      lastberkebon,
      lasthourly,
      lastberburu,
      lastbansos,
      lastadventure,
      lastfishing,
      lastwar,
      lastduel,
      lastmining,
      lastdungeon,
      lastclaim,
      lastweekly,
      lastmonthly
   } = global.db.data.users[m.sender]

   let healt = global.db.data.users[m.sender].healt
   let lapar = global.db.data.users[m.sender].laper
   let haus = global.db.data.users[m.sender].haus
   let usrname = global.db.data.users[m.sender].name
   let stamina = global.db.data.users[m.sender].stamina
   let armor = global.db.data.users[m.sender].armor
   let sword = global.db.data.users[m.sender].sword
   let sdurability = global.db.data.users[m.sender].sworddurability
   let warn = global.db.data.users[m.sender].warn
   let banned = db.data.users[m.sender].banned
   let premium = global.db.data.users[m.sender].premium
   let tprem = global.db.data.users[m.sender].tprem
   let pancing = global.db.data.users[m.sender].pancing
   let fdurability = global.db.data.users[m.sender].fishingroddurability
   let role = global.db.data.users[m.sender].role
   let pickaxe = global.db.data.users[m.sender].pickaxe
   let pdurability = global.db.data.users[m.sender].pickaxedurability

   let psepick = global.db.data.users[m.sender].psepick
   let psenjata = global.db.data.users[m.sender].psenjata

   let ikan = global.db.data.users[m.sender].ikan
   let nila = global.db.data.users[m.sender].nila
   let bawal = global.db.data.users[m.sender].bawal
   let lele = global.db.data.users[m.sender].lele
   let udangb = global.db.data.users[m.sender].udang

   let apel = global.db.data.users[m.sender].apel
   let ayamg = global.db.data.users[m.sender].ayamg
   let ayamb = global.db.data.users[m.sender].ayamb
   let sapir = global.db.data.users[m.sender].sapir
   let ssapi = global.db.data.users[m.sender].ssapi
   let kayu = global.db.data.users[m.sender].kayu
   let string = global.db.data.users[m.sender].string
   let emas = global.db.data.users[m.sender].emas
   let besi = global.db.data.users[m.sender].iron
   let batu = global.db.data.users[m.sender].batu
   let sapi = global.db.data.users[m.sender].sapi
   let ayam = global.db.data.users[m.sender].ayam
   let babi = global.db.data.users[m.sender].babi
   let banteng = global.db.data.users[m.sender].banteng
   let pet = global.db.data.users[m.sender].pet
   let kucing = global.db.data.users[m.sender].kucing
   let _kucing = global.db.data.users[m.sender].anakkucing
   let rubah = global.db.data.users[m.sender].rubah
   let _rubah = global.db.data.users[m.sender].anakrubah
   let kuda = global.db.data.users[m.sender].kuda
   let _kuda = global.db.data.users[m.sender].anakkuda
   let serigala = global.db.data.users[m.sender].serigala
   let _serigala = global.db.data.users[m.sender].anakserigala
   let phonix = global.db.data.users[m.sender].phonix
   let _phonix = global.db.data.users[m.sender].anakphonix
   let griffin = global.db.data.users[m.sender].griffin
   let _griffin = global.db.data.users[m.sender].anakgriffin
   let kyubi = global.db.data.users[m.sender].kyubi
   let _kyubi = global.db.data.users[m.sender].anakkyubi
   let centaur = global.db.data.users[m.sender].centaur
   let _centaur = global.db.data.users[m.sender].anakcentaur
   let naga = global.db.data.users[m.sender].naga
   let _naga = global.db.data.users[m.sender].anaknaga
   let diamond = global.db.data.users[m.sender].diamond
   let potion = global.db.data.users[m.sender].potion
   let common = global.db.data.users[m.sender].common
   let makananpet = global.db.data.users[m.sender].makananpet
   let makanannaga = global.db.data.users[m.sender].makanannaga
   let makananphonix = global.db.data.users[m.sender].makananphonix
   let makanangriffin = global.db.data.users[m.sender].makanangriffin
   let makanankyubi = global.db.data.users[m.sender].makanankyubi
   let makanancentaur = global.db.data.users[m.sender].makanancentaur
   let uncommon = global.db.data.users[m.sender].uncommon
   let mythic = global.db.data.users[m.sender].mythic
   let legendary = global.db.data.users[m.sender].legendary
   let level = global.db.data.users[m.sender].level
   let money = global.db.data.users[m.sender].money
   let exp = global.db.data.users[m.sender].exp
   let atm = global.db.data.users[m.sender].atm
   let aqua = global.db.data.users[m.sender].aqua
   let pasangan = global.db.data.users[m.sender].pasangan
   let ramuan = global.db.data.users[m.sender].ramuan
   let kaleng = global.db.data.users[m.sender].kaleng
   let kardus = global.db.data.users[m.sender].kardus
   let botol = global.db.data.users[m.sender].botol
   let arlok = global.db.data.users[m.sender].arlok
   let limit = global.db.data.users[m.sender].limit
   let glimit = global.db.data.users[m.sender].glimit
   let sampah = global.db.data.users[m.sender].sampah
   let anggur = global.db.data.users[m.sender].anggur
   let jeruk = global.db.data.users[m.sender].jeruk
   let mangga = global.db.data.users[m.sender].mangga
   let pisang = global.db.data.users[m.sender].pisang
   let bibitanggur = global.db.data.users[m.sender].bibitanggur
   let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
   let bibitapel = global.db.data.users[m.sender].bibitapel
   let bibitmangga = global.db.data.users[m.sender].bibitmangga
   let bibitpisang = global.db.data.users[m.sender].bibitpisang
   let {
      max
   } = levelling.xpRange(level, exp, global.multiplier)
   let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
   let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
   let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
   let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
   let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
   let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
   let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
   let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
   let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
   let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
   let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
   let usersmoney = sortedmoney.map(v => v[0])
   let usersgold = sortedgold.map(v => v[0])
   let usersarlok = sortedarlok.map(v => v[0])
   let usersdiamond = sorteddiamond.map(v => v[0])
   let userspotion = sortedpotion.map(v => v[0])
   let userssampah = sortedsampah.map(v => v[0])
   let userslevel = sortedlevel.map(v => v[0])
   let userscommon = sortedcommon.map(v => v[0])
   let usersuncommon = sorteduncommon.map(v => v[0])
   let usersmythic = sortedmythic.map(v => v[0])
   let userslegendary = sortedlegendary.map(v => v[0])

   let kambing = global.db.data.users[m.sender].kambing
   let kerbau = global.db.data.users[m.sender].kerbau
   let harimau = global.db.data.users[m.sender].harimau
   let monyet = global.db.data.users[m.sender].monyet
   let babihutan = global.db.data.users[m.sender].babihutan
   let panda = global.db.data.users[m.sender].panda
   let gajah = global.db.data.users[m.sender].gajah
   let buaya = global.db.data.users[m.sender].buaya

   let paus = global.db.data.users[m.sender].paus
   let kepiting = global.db.data.users[m.sender].kepiting
   let gurita = global.db.data.users[m.sender].gurita
   let cumi = global.db.data.users[m.sender].cumi
   let lumba = global.db.data.users[m.sender].lumba
   let lobster = global.db.data.users[m.sender].lobster
   let hiu = global.db.data.users[m.sender].hiu
   let udang = global.db.data.users[m.sender].udang
   let orca = global.db.data.users[m.sender].orca

   let number = `${PhoneNumber('+' + pasangan.replace('@s.whatsapp.net', '')).getNumber('international')}`
//   let namapsng = getName(pasangan)

   let str = `• *STATUS*
📡 *Status:* ${ispremium ? "Premium": "Free"} User
📇 *Name:* ${usrname} 
💌 *Pasangan:* ${ pasangan ? pasangan : '❌'}
❗ *Warn:* ${warn}
⛔ *Banned:* ${banned}

❤️️ *Health:* ${healt}
⚡ *Stamina:* ${stamina}
💹 *Money:* ${money}
💳 *Bank:* ${atm}
📊 *Level:* ${level}
✨ *Exp:* ${exp}
📍 *Role:* ${role}
🎫 *Limit:* ${ispremium ? global.limitawal.premium : global.limitawal.free}
${registered ? '🎨 *Age:* ' + age : ''}

${readMore}
🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
⚔️ *Sword:* ${sword == 0 ? '❌' : '' || sword == 1 ? 'wooden sword' : '' || sword == 2 ? 'Stone sword' : '' || sword == 3 ? 'Iron sword' : '' || sword == 4 ? 'Diamond sword' : '' || sword > 0 && sword < 5 ? `Ketahanan (*${_sword}* / *${sword *100}*)` : '' || sword == 5 ? '*Netherite Sword*' : ''}
╰ *Durability:* ${sdurability}
⛏️ *Pickaxe:* ${pickaxe == 0 ? '❌' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'stone pickaxe' : '' || pickaxe == 3 ? 'Iron pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
╰ *Durability:* ${pdurability}
🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
╰ *Durability:* ${fdurability}
🏹 *Bow:* Cooming Soon!


• *KANDANG*
🐔 *Ayam:* ${ayam}    
🐐 *Kambing:* ${kambing}
🐄 *Sapi:* ${sapi} 
🐃 *Kerbau:* ${kerbau}
🐖 *Babi:* ${babi}    
🐅 *Harimau:* ${harimau}
🐂 *Banteng:* ${banteng} 
🐒 *Monyet:* ${monyet}
🐗 *Babi Hutan:* ${babihutan}
🐼 *Panda:* ${panda}
🐘 *Gajah:* ${gajah}
🐊 *Buaya:* ${buaya}

🥢 Bisa kamu masak *.masak ayamb*
💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan


• *KOLAM*
🐋 *Orca:* ${orca}
🐳 *Paus:* ${paus}
🐬 *Lumba:* ${lumba}
🦈 *Hiu:* ${hiu}
🐟 *Ikan:* ${ikan}
🐟 *Lele:* ${lele}
🐡 *Bawal:* ${bawal}
🐠 *Nila:* ${nila}
🦀 *Kepiting:* ${kepiting}
🦞 *Lobster:* ${lobster}
🐙 *Gurita:* ${gurita}
🦑 *Cumi:* ${cumi}
🦐 *Udang:* ${udang}

💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus + nila + bawal + ikan + lele + psepick + psenjata }

• *INVENTORY*
💎 *Diamond:* ${diamond}
🧪 *Ramuan:* ${ramuan}
🥤 *Potion:* ${potion}
🗑️ *Sampah:* ${sampah}
🥫 *Kaleng:* ${kaleng}
📦 *Kardus:* ${kardus}
🪵  *Kayu:* ${kayu}
🕸️ *String:* ${string}
🪙  *Gold:* ${emas}
⛓  *Iron:* ${besi}
🪨  *Batu:* ${batu}
🧭 *Arloji:* ${arlok}


• *FOOD*
🥓 *FoodPet :* ${makananpet}
🍖 *Ayam Bakar:* ${ayamb}
🍗 *Ayam Goreng:* ${ayamg}
🥘 *Rendang Sapi :* ${sapir}
🥩 *Steak Sapi:* ${ssapi}

🎒 *Total inv:* ${aqua + ramuan + kardus + kaleng + arlok + psepick + psenjata + common + uncommon + mythic + legendary + pet + diamond + potion + besi + emas + string + sampah + kayu + batu + potion + sampah + makananpet + apel + ayamb + ayamg + sapir + ssapi } item


• *FRUIT & SEED*
🥭 *Mangga:* ${mangga}
🍇 *Anggur:* ${anggur}
🍌 *Pisang:* ${pisang}
🍊 *Jeruk:* ${jeruk}
🍎 *Apel:* ${apel}

🥭 *Bibit Mangga:* ${bibitmangga}
🍇 *Bibit Anggur:* ${bibitanggur}                                    
🍌 *Bibit Pisang:* ${bibitpisang}
🍊 *Bibit Jeruk:* ${bibitjeruk}
🍎 *Bibit Apel:* ${bibitapel}

• *CRATE*
📦 *Common:* ${common}
🛍️ *Uncommon:* ${uncommon}
🎁 *Mythic:* ${mythic}
🧰 *Legendary:* ${legendary}
📫 *Pet:* ${pet}

• *PET*
🐴 *Kuda:* ${kuda == 0 ? '❌' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
🦊 *Rubah:* ${rubah == 0 ? '❌' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
🐱 *Kucing:* ${kucing == 0 ? '❌' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
🐉 *Naga:* ${naga == 0 ? '❌' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level MAX' : ''}
🦜 *Phonix:* ${phonix == 0 ? '❌' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level MAX' : ''}
🐎 *Centaur:* ${centaur == 0 ? '❌' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level MAX' : ''}
🦅 *Griffin:* ${griffin == 0 ? '❌' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level MAX' : ''}
🐺 *Serigala:* ${serigala == 0 ? '❌' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level MAX' : ''}

• *PROGSES*
 📊 *Level:* ${level} ➠  ${level + 1}
 ✨ *Exp:* ${exp} ➠ ${max}

🦊 *Rubah :* ${rubah == 0 ? '❌' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* ➠ *${rubah + 1}*\nExp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
🐱 *Kucing :* ${kucing == 0 ? '❌' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* ➠ *${kucing + 1}*\nExp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
🐴 *Kuda :* ${kuda == 0 ? '❌' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* ➠ *${kuda + 1}*\nExp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
🐉 *Naga :* ${naga == 0 ? '❌' : '' || naga > 0 && naga < 5 ? `Level *${naga}* ➠ *${naga + 1}*\nExp *${_naga}* -> *${naga *100}*` : '' || naga == 5 ? '*Max Level*' : ''}
🦜 *Phonix :* ${phonix == 0 ? '❌' : '' || phonix > 0 && phonix < 5 ? `Level *${phonix}* ➠ *${phonix + 1}*\nExp *${_phonix}* -> *${phonix *100}*` : '' || phonix == 5 ? '*Max Level*' : ''}
🐎 *Centaur :* ${centaur == 0 ? '❌' : '' || centaur > 0 && centaur < 5 ? `Level *${centaur}* ➠ *${centaur + 1}*\nExp *${_cetaur}* -> *${centaur *100}*` : '' || centaur == 5 ? '*Max Level*' : ''}
🦅 *Griffin :* ${griffin == 0 ? '❌' : '' || griffin > 0 && griffin < 5 ? `Level *${griffin}* ➠ *${griffin + 1}*\nExp *${_griffin}* -> *${griffin *100}*` : '' || griffin == 5 ? '*Max Level*' : ''}
🐺 *Serigala :* ${serigala == 0 ? '❌' : '' || serigala > 0 && serigala < 5 ? `Level *${serigala}* ➠ *${serigala + 1}*\nExp *${_serigala}* -> *${serigala *100}*` : '' || serigala == 5 ? '*Max Level*' : ''}

• *COOLDOWN*
 *🏹 Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
 *⛰️ Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
 *⚔️ Duel :* ${lastduel > 0 ? '❌' : '✅'}
 *🛡️ War :* ${lastwar > 0 ? '❌'  : '✅'}
 *🎃 Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
 *💱 Berdagang :* ${lastdagang > 0 ? '❌'  : '✅'}
 *🧺 Berkebun :* ${lastberkebon > 0 ? '❌'  : '✅'}
 *⛏️ Mining :* ${lastmining > 0 ? '❌' : '✅'}
 *🎣 Fishing :* ${lastfishing > 0 ? '❌'  : '✅'}
 *💰 Bansos :* ${lastbansos > 0 ? '❌' : '✅'}

 *🕐 Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
 *📦 Claim :* ${lastclaim > 0 ? '❌' : '✅'}
 *🎁 Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
 *📮 Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}


• *ACHIEVEMENT*
📊 *Top level:* ${userslevel.indexOf(m.sender) + 1} / ${userslevel.length}
💹 *Top Money:* ${usersmoney.indexOf(m.sender) + 1} / ${usersmoney.length}
🪙  *Top Gold:* ${usersgold.indexOf(m.sender) + 1} / ${usersgold.length}
💎 *Top Diamond:* ${usersdiamond.indexOf(m.sender) + 1} / ${usersdiamond.length}
🧭 *Top Arloji:* ${usersarlok.indexOf(m.sender) + 1} / ${usersarlok.length}
🥤 *Top Potion:* ${userspotion.indexOf(m.sender) + 1} / ${userspotion.length}
📦 *Top Common:* ${userscommon.indexOf(m.sender) + 1} / ${userscommon.length}
🛍️ *Top Uncommon:* ${usersuncommon.indexOf(m.sender) + 1} / ${usersuncommon.length}
🎁 *Top Mythic:* ${usersmythic.indexOf(m.sender) + 1} / ${usersmythic.length}
🧰 *Top Legendary:* ${userslegendary.indexOf(m.sender) + 1} / ${userslegendary.length}
🗑️ *Top Sampah:* ${userssampah.indexOf(m.sender) + 1} / ${userssampah.length}
`
   sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(global.inventoryRPG), [{
         buttonId: `${healt < 40 ? '.heal' : '.adventure'}`,
         buttonText: {
            displayText: `${healt < 40 ? 'Heal' : 'Adventure'}`
         },
         type: 1
      },
      {
         buttonId: `.shop`,
         buttonText: {
            displayText: 'Shop '
         },
         type: 1
      }
   ], {
      userJid: m.chat,
      quoted: m
   })
}
//^(judi)$/i
const judi = async (alpha, m, prefix, args) => {
   let buatall = 1
   this.judi = this.judi ? this.judi : {}
   if (m.chat in this.judi) return m.reply('Masih ada yang melakukan judi disini, tunggu sampai selesai!!')
   else this.judi[m.chat] = true
   try {
      let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
      let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
      let Aku = (randomaku * 1)
      let Kamu = (randomkamu * 1)
      let count = args[0]
      count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
      count = Math.max(1, count)
      if (args.length < 1) return m.reply(prefix + 'judi <jumlah>\n' + prefix + 'judi 1000')
      if (global.db.data.users[m.sender].money >= count * 1) {
         global.db.data.users[m.sender].money -= count * 1
         await m.reply('*Ayo judi klo menang dapat banyak uang!!') //Kwkwwkkwlwlw
         if (Aku > Kamu) {
            m.reply(`Aku roll:${Aku}\nKamu roll: ${Kamu}\n\nAwokawokawok kamu *Kalah*, kamu kehilangan ${count} Money 💰 `.trim())
         }
         else if (Aku < Kamu) {
            global.db.data.users[m.sender].money += count * 2
            m.reply(`Aku roll:${Aku}\nKamu roll: ${Kamu}\n\nsialan, kamu *Menang*, kamu Mendapatkan ${count * 2} Money`.trim())
         }
         else {
            global.db.data.users[m.sender].money += count * 1
            m.reply(`Aku roll:${Aku}\nKamu roll: ${Kamu}\n\nYahh kamu *Seri*, kamu Mendapatkan ${count * 1} Money`.trim())
         }
      }
      else m.reply(`Uang kamu tidak cukup untuk melakukan judi sebesar ${count} Money 💰 `.trim())
   }
   catch (e) {
      console.log(e)
      m.reply('Error!')
   }
   finally {
      delete this.judi[m.chat]
   }
}
//^(kandang)$/i
const kandang = async (alpha, m, prefix) => {
   let banteng = global.db.data.users[m.sender].banteng
   let harimau = global.db.data.users[m.sender].harimau
   let gajah = global.db.data.users[m.sender].gajah
   let kambing = global.db.data.users[m.sender].kambing
   let panda = global.db.data.users[m.sender].panda
   let buaya = global.db.data.users[m.sender].buaya
   let kerbau = global.db.data.users[m.sender].kerbau
   let sapi = global.db.data.users[m.sender].sapi
   let monyet = global.db.data.users[m.sender].monyet
   let babihutan = global.db.data.users[m.sender].babihutan
   let babi = global.db.data.users[m.sender].babi
   let ayam = global.db.data.users[m.sender].ayam

   let zer = `
*「 KANDANG  」*
    
 *🐂 = [ ${banteng} ] Ekor Banteng*
 *🐅 = [ ${harimau} ] Ekor Harimau*
 *🐘 = [ ${gajah} ] Ekor Gajah*
 *🐐 = [ ${kambing} ] Ekor Kambing*
 *🐼 = [ ${panda} ] Ekor Panda*
 *🐊 = [ ${buaya} ] Ekor Buaya*
 *🐃 = [ ${kerbau} ] Ekor Kerbau*
 *🐮 = [ ${sapi} ] Ekor Sapi*
 *🐒 = [ ${monyet} ] Ekor Monyet*
 *🐗 = [ ${babihutan} ] Ekor Babi Hutan*
 *🐖 = [ ${babi} ] Ekor Babi*
 *🐓 = [ ${ayam} ] Ekor Ayam*
 `.trim()
   sendButLoc(alpha, m.chat, zer, '©' + ownername, await getBuffer(global.kandangRPG), [{
         buttonId: `.toko`,
         buttonText: {
            displayText: `🛍️ Toko`
         },
         type: 1
      },
      {
         buttonId: `.owner`,
         buttonText: {
            displayText: 'Owner 👤 '
         },
         type: 1
      }
   ], {
      userJid: m.chat,
      quoted: m
   })
}
//^kerja$/i 
const kerja = async (alpha, m, prefix, args, command) => {
   let type = (args[0] || '').toLowerCase()
   let users = global.db.data.users[m.sender]
   let time = global.db.data.users[m.sender].lastjb + 300000
   let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
   let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
   let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
   let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
   let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
   let pasien = pasie[Math.floor(Math.random() * pasie.length)]
   let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
   let panen = pane[Math.floor(Math.random() * pane.length)]
   let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
   let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
   let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
   let rumah = ruma[Math.floor(Math.random() * ruma.length)]

   let pppecat = ['Ruko Kebakaran', 'Lo Ngocok Didepan Umum', 'Males Malesan', 'Ngew istrinya yg punya ruko']
   let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
   let ddppecat = ['Bakar Pasien', 'Jual Organ Dalem ke Lapak ilegal', 'sering telat']
   let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
   //Uang
   let uangm = Math.floor(Math.random() * 10) + 4000
   let duit = Math.floor(Math.random() * 20) + 2500
   let duitm = Math.floor(Math.random() * 50) + 9500
   let duitd = Math.floor(Math.random() * 62) + 5200
   let duitr = Math.floor(Math.random() * 20) + 4200
   let duitk = Math.floor(Math.random() * 70) + 7800
   //ANJAY
   let _pecat = `${pickRandom(['1', '1', '1', '1'])}`
   let pecat = (_pecat * 1)
   let ppecat = `Kamu Kena Pecat Karna Kamu ${alasanpecat}`
   let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
   let dpecat = (_dpecat * 1)
   let dppecat = `Kamu Di Pecat Karna ${alasanpasien}`
   let kerjam = `
*🧪 Contoh:*
${prefix +command} ojek

*🌟 Untuk Claim Pekerjaan ketik:*
${prefix}selectjob ojek

*📝List Kerja:*
🎐 Ojek
🎐 Dokter
🎐 Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli
`.trim()
   switch (type) {
      case 'ojek':
         if (global.db.data.users[m.sender].ojek == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`)
         global.db.data.users[m.sender].atm += uangm
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${uangm} 💰*`)
         break
      case 'pedagang':
         if (global.db.data.users[m.sender].pedagang == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`)
         global.db.data.users[m.sender].atm += duit
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${duit} 💰*`)
         if (pecat > 1) {
            global.db.data.users[m.sender].pedagang -= pecat * 1
            m.reply(ppecat)
         }
         break
      case 'dokter':
         if (global.db.data.users[m.sender].dokter == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`)
         global.db.data.users[m.sender].atm += duitm
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${duitm}* 💰`)
         break
      case 'petani':
         if (global.db.data.users[m.sender].petani == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`)
         global.db.data.users[m.sender].atm += uangm
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${duitd} 💰*`)
         break
      case 'montir':
         if (global.db.data.users[m.sender].montir == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`)
         global.db.data.users[m.sender].atm += duitr
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${duitr}* 💰`)
         break
      case 'kuli':
         if (global.db.data.users[m.sender].kuli == false) return m.reply('ini bukan tugas kamu atau kamu pengangguran!')
         if (new Date - global.db.data.users[m.sender].lastkerja < 300000) return m.reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`)
         global.db.data.users[m.sender].atm += duitk
         global.db.data.users[m.sender].lastkerja = new Date * 1
         m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${duitk} 💰*`)
         break
      default:
         return alpha.send1ButMes(m.chat, kerjam, `© ${ownername}`, `.menu`, `🪀 Commands 🪀`, m)
   }

}
//^(koboy)/i
const koboy = async (alpha, m, prefix, args, command, text) => {
   this.tembak = this.tembak || {
      musuh: [],
      tembak: []
   }
   if (/kiri/i.test(text)) {

      let kiri = [
         ["🤠", "-", "-", "-", "-"],
         ["-", "🤠", "-", "-", "-"],
         ["-", "-", "🤠", "-", "-"],
         ["-", "-", "-", "🤠", "-"],
         ["-", "-", "-", "-", "🤠"]
      ]

      if (this.tembak.tembak.indexOf("🤠") == 0) {
         this.tembak.tembak = kiri[0]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 1) {
         this.tembak.tembak = kiri[0]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 2) {
         this.tembak.tembak = kiri[1]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 3) {
         this.tembak.tembak = kiri[2]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 4) {
         this.tembak.tembak = kiri[3]
      }

      let pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")


      if (this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return alpha.send1ButMes(m.chat, pos, `© ${ownername}`, `.tembak`, `Tembak 🔫`, m)
      return alpha.send2ButMes(m.chat, pos, `© ${ownername}`, `${prefix}${command} kiri`, `👈 Kiri`, `${prefix}${command} kanan`, `Kanan 👉`, m)
   }
   else if (/kanan/i.test(text)) {

      let kanan = [
         ["🤠", "-", "-", "-", "-"],
         ["-", "🤠", "-", "-", "-"],
         ["-", "-", "🤠", "-", "-"],
         ["-", "-", "-", "🤠", "-"],
         ["-", "-", "-", "-", "🤠"]
      ]

      if (this.tembak.tembak.indexOf("🤠") == 0) {
         this.tembak.tembak = kanan[1]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 1) {
         this.tembak.tembak = kanan[2]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 2) {
         this.tembak.tembak = kanan[3]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 3) {
         this.tembak.tembak = kanan[4]
      }
      else if (this.tembak.tembak.indexOf("🤠") == 4) {
         this.tembak.tembak = kanan[4]
      }

      let pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")


      if (this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return alpha.send1ButMes(m.chat, pos, `© ${ownername}`, `.tembak`, `Tembak 🔫`, m)
      return alpha.send2ButMes(m.chat, pos, `© ${ownername}`, `${prefix}${command} kiri`, `👈 Kiri`, `${prefix}${command} kanan`, `Kanan 👉`, m)
   }
   else if (/tembak/i.test(text)) {

      if (this.tembak.tembak.indexOf("🤠") == this.tembak.musuh.indexOf("🥷")) {
         this.tembak = {}
         global.db.data.users[m.sender].money += 1000
         m.reply("Kamu menang!\n\nUang += 1000")
      }

   }
   else {
      randMusuh = [
         ["🥷", "-", "-", "-", "-"],
         ["-", "🥷", "-", "-", "-"],
         ["-", "-", "🥷", "-", "-"],
         ["-", "-", "-", "🥷", "-"],
         ["-", "-", "-", "-", "🥷"]
      ]
      randAku = [
         ["🤠", "-", "-", "-", "-"],
         ["-", "🤠", "-", "-", "-"],
         ["-", "-", "🤠", "-", "-"],
         ["-", "-", "-", "🤠", "-"],
         ["-", "-", "-", "-", "🤠"]
      ]

      musuh = pickRandom(randMusuh)
      aku = pickRandom(randAku)

      this.tembak.musuh = musuh
      this.tembak.tembak = aku

      let pos = this.tembak.musuh.join(" ") + "\n\n\n" + this.tembak.tembak.join(" ")

      if (this.tembak.musuh.indexOf("🥷") === this.tembak.tembak.indexOf("🤠")) return alpha.send1ButMes(m.chat, pos, `© ${ownername}`, `.tembak`, `Tembak 🔫`, m)
      return alpha.send2ButMes(m.chat, pos, `© ${ownername}`, `${prefix}${command} kiri`, `👈 Kiri`, `${prefix}${command} kanan`, `Kanan 👉`, m)
   }
}
//^(kotak(ikan)?|kolam(ikan)?)$/i
const kolam = async (alpha, m, prefix) => {
   let name = global.db.data.users[m.sender].name
   let level = global.db.data.users[m.sender].level
   let exp = global.db.data.users[m.sender].exp
   let paus = global.db.data.users[m.sender].paus
   let kepiting = global.db.data.users[m.sender].kepiting
   let gurita = global.db.data.users[m.sender].gurita
   let cumi = global.db.data.users[m.sender].cumi
   let buntal = global.db.data.users[m.sender].buntal
   let dory = global.db.data.users[m.sender].dory
   let lumba = global.db.data.users[m.sender].lumba
   let lobster = global.db.data.users[m.sender].lobster
   let hiu = global.db.data.users[m.sender].hiu
   let udang = global.db.data.users[m.sender].udang
   let ikan = global.db.data.users[m.sender].ikan
   let orca = global.db.data.users[m.sender].orca
   let past = `*「 KOLAM 🏝️ 」*
  
*💌 Name :* ${name}
*📊 Level :* ${level}
*✨ Exp :* ${exp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐳 Paus: *${paus}*   
🦀 Kepiting: *${kepiting}*   
🐙 Gurita: *${gurita}*   
🦑 Cumi: *${cumi}*   
🐡 Buntal: *${buntal}*  
🐠 Dory: *${dory}*
🐬 Lumba: *${lumba}*
🦞 Lobster: *${lobster}*
🦈 Hiu: *${hiu}*
🦐 Udang: *${udang}*
🐟 Ikan: *${ikan}*
🐋 Orca: *${orca}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎏 Total Isi: *${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* Jenis`
   let isi = ` *🦀Kepiting = ${kepiting}*
*🐠Dory = ${dory}*
*🦞Lobster = ${lobster}*
*🐟Ikan = ${ikan}*
*🦐Udang = ${udang}*
*🐬Lumba² = ${lumba}*
*🦑Cumi² = ${cumi}*
*🐋Paus = ${paus}*
*🐙Gurita = ${gurita}*
*🦈Hiu = ${hiu}*
*🐡Buntal = ${buntal}*
*🐳Orca = ${orca}*`.trim()
   sendButLoc(alpha, m.chat, past, '©' + ownername, await getBuffer(global.kolamRGP), [{
         buttonId: `.pasar`,
         buttonText: {
            displayText: `🎪 Pasar`
         },
         type: 1
      },
      {
         buttonId: `.owner`,
         buttonText: {
            displayText: 'Owner 👤 '
         },
         type: 1
      }
   ], {
      userJid: m.chat,
      quoted: m
   })
}
//^(mancing|memancing|fish)$/i 
const mancing = async (alpha, m, prefix, pushname) => {
   let __timers = (new Date - global.db.data.users[m.sender].lastfishing)
   let _timers = (240000 - __timers)
   let timers = clockString(_timers)
   let you = pushname
   let user = global.db.data.users[m.sender]
   if (global.db.data.users[m.sender].pancing > 0) {
      if (new Date - global.db.data.users[m.sender].lastfishing > 240000) {
         let ikan = `${Math.floor(Math.random() * 30)}`.trim()
         let lele = `${Math.floor(Math.random() * 15)}`.trim()
         let nila = `${Math.floor(Math.random() * 10)}`.trim()
         let bawal = `${Math.floor(Math.random() * 10)}`.trim()
         let udang = `${Math.floor(Math.random() * 39)}`.trim()
         let paus = `${Math.floor(Math.random() * 2)}`.trim()
         let kepiting = `${Math.floor(Math.random() * 27)}`.trim()
         let _psepick = `${pickRandom(['1', '0', '0', '1'])}`
         let psepick = (_psepick * 1)
         let _psenjata = `${pickRandom(['1', '0', '0', '0'])}`
         let psenjata = (_psenjata * 1)

         let gggd = global.mancingRPG
         let mcng = `
*Your 🎣Fishing Results!*
        
🐟 Ikan Nila : ${nila}
🐡 Bawal : ${bawal}
🐟 Lele : ${lele}
🐟 Ikan : ${ikan}
🦐 Udang : ${udang}
🐋 Paus: ${paus}
🦀 Kepiting: ${kepiting}

_Total pancingan↓_
${nila + bawal + ikan + lele}
        
you can cook it to increase stamina or blood💉
_example:_
${prefix}cook catfish `
         setTimeout(async () => {
            sendButLoc(alpha, m.chat, mcng, '©' + ownername, await getBuffer(gggd), [{
                  buttonId: `.inv`,
                  buttonText: {
                     displayText: `🗃️ Inventory `
                  },
                  type: 1
               },
               {
                  buttonId: `.owner`,
                  buttonText: {
                     displayText: 'Owner 👤 '
                  },
                  type: 1
               }
            ], {
               userJid: m.chat,
               quoted: m
            })
            if (psepick > 0) {
               global.db.data.users[m.sender].psepick += psepick * 1
               alpha.send1ButMes(m.chat, `You Get 🎁chest weapons epic ${psepick} item`, `© ${ownername}`, `.mancing`, `Mancing Lagi`, m)
            }
            if (psenjata > 0) {
               global.db.data.users[m.sender].psenjata += psenjata * 1
               alpha.send1ButMes(m.chat, `You Get 🎁chest weapons ${psenjata} item`, `© ${ownername}`, `.mancing`, `Mancing Lagi`, m)
            }
         }, 38000)

         setTimeout(() => {
            m.reply(`*The hook is pulled by the fish, and you try to pull it*`)
         }, 28000)
         setTimeout(() => {
            m.reply(`*Waiting for the fish to be hooked*`)
         }, 18000)
         setTimeout(() => {
            m.reply(`*You throw a fishing hook into the river*`)
         }, 8000)
         setTimeout(() => {
            m.reply(`*You go fishing🎣*`)
         }, 0)

         global.db.data.users[m.sender].nila += nila * 1
         global.db.data.users[m.sender].ikan += ikan * 1
         global.db.data.users[m.sender].lele += lele * 1
         global.db.data.users[m.sender].bawal += bawal * 1
         global.db.data.users[m.sender].udang += udang * 1
         global.db.data.users[m.sender].lastfishing += new Date * 1
         user.paus += paus * 1
         user.kepiting += kepiting * 1

      }
      else m.reply(`You're already fishing, wait until ${timers}`)
   }
   else alpha.send1ButMes(m.chat, `*Kamu tidak punya kail pancingan 🎣*`, `© ${ownername}`, `.craft pancing`, `Beli Pancingan`, m)
}
//^merampok$/
const merampok = async (alpha, m, prefix) => {
   let pajak = 0.02
   let dapat = (Math.floor(Math.random() * 100))
   let who
   if (m.isGroup) who = m.mentionedJid[0]
   else who = m.chat
   if (!who) return m.reply('Tag salah satu lah')
   let __timers = (new Date - global.db.data.users[m.sender].lastrob)
   let _timers = (3600000 - __timers)
   let timers = clockString(_timers)
   let users = global.db.data.users
   if (new Date - global.db.data.users[m.sender].lastrob > 3600000) {
      if (10000 > users[who].money) return m.reply('Target Gaada Uang bodoh, Kismin dia')
      users[who].money -= dapat // dapat * 1
      users[m.sender].money += dapat // dapat * 1
      global.db.data.users[m.sender].lastrob = new Date * 1
      m.reply(`Berhasil Merampok Money Target Sebesar ${dapat}`)
   }
   else m.reply(`Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
//^mining/i
const mining = async (alpha, m, prefix) => {
   let user = global.db.data.users[m.sender]
   let __timers = (new Date - user.lastmining)
   let _timers = (300000 - __timers)
   let timers = clockString(_timers)
   let minim = `${Math.floor(Math.random() * 3)}`.trim()
   let minam = `${Math.floor(Math.random() * 5)}`.trim()
   let minkm = `${Math.floor(Math.random() * 10)}`.trim()

   if (user.pickaxe > 0) {
      if (new Date - user.lastmining > 3000000) {

         user.emas += minim * 1
         user.iron += minam * 1
         user.string += minkm * 1
         user.lastmining = new Date * 1

         m.reply(`Kamu Menambang Di ${pickRandom(['⛰️Lembah', '⛰️Goa mletre', '🏞️ Sungai Selandia', '⛰️Goa texas', '...'])}\n*⚒️Hasil Tambang:* 🪙 Emas: *${minim}*\n⛓️ Besi: *${minam}*\n🕸️ String: *${minkm}*`)
      }
      else alpha.send1ButMes(m.chat, `Tunggu 🕓${timers} lagi, untuk menambang`, `© ${ownername}`, `.menu`, `🎪 Commands 🎪`, m)
   }
   else alpha.send1ButMes(m.chat, `Kamu Tidak Mempunyai *⛏️Pickaxe* untuk menambang\nBuat Lah Pickaxe menggunakan string kayu dan batu!`, `© ${ownername}`, `.craft pickaxe`, `Craft Pickaxe`, m)
}
//^(monthly)$/i
const monthly = async (alpha, m, prefix) => {
   let user = global.db.data.users[m.sender]
   let _timers = (2592000000 - (new Date - user.lastmonthly))
   let timers = clockString(_timers)
   if (new Date - user.lastmonthly > 2592000000) {
      let yeg = global.monthlyRPG
      let str = `+10000 Money 💰 \n+5 Legendary crate 🧰\n+3 Pet crate 📫\n+7 Iron ⛓\n+2 gold 🪙\n+7 string 🕸\n+10 kayu 🪵`
      sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(yeg), [{
            buttonId: `.claim`,
            buttonText: {
               displayText: `🎪 Claim `
            },
            type: 1
         },
         {
            buttonId: `.weekly`,
            buttonText: {
               displayText: 'Weekly 🌜 '
            },
            type: 1
         }
      ], {
         userJid: m.chat,
         quoted: m
      })
      user.money += 100000
      user.legendary += 5
      user.string += 7
      user.kayu += 10
      user.iron += 7
      user.gold += 2
      user.pet += 3
      user.lastmonthly = new Date * 1
   }
   else {
      let cede = `Silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`
      m.reply(cede)
   }
}
//^nabung ([0-9]+)|nabung$/i
const nabung = async (alpha, m, prefix, args, command) => {
   const xppermoney = 1
   let count = command.replace(/^nabung/i, '')
   count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xppermoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
   count = Math.max(1, count)
   if (global.db.data.users[m.sender].money >= xppermoney * count) {
      global.db.data.users[m.sender].money -= xppermoney * count
      global.db.data.users[m.sender].atm += count
      m.reply(`-Rp. ${xppermoney * count} 💰\n+ ${count} 💳\n\nSucces menabung !`)
   }
   else m.reply(`Uang anda tidak mencukupi untuk menabung ${count} !`)
}
//^narik ([0-9]+)|narik|tarik$/i
const narik = async (alpha, m, prefix, args, command) => {
   const xpperatm = 1
   let count = command.replace(/^narik|tarik/i, '')
   count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].atm / xpperatm) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
   count = Math.max(1, count)
   if (global.db.data.users[m.sender].atm >= xpperatm * count) {
      global.db.data.users[m.sender].atm -= xpperatm * count
      global.db.data.users[m.sender].money += count
      m.reply(`Rp. ${xpperatm * count} 💳\n+Rp.${count} 💰\n\nSucces menarik uang !`)
   }
   else m.reply(`Uang anda tidak mencukupi untuk menarik ${count} !`)
}

//^(nguli)$/i
const nguli = async (alpha, m, prefix) => {
   if (new Date - global.db.data.users[m.sender].lastnguli > 86400000) {
      global.db.data.users[m.sender].limit += 10
      m.reply('_Selamat kamu mendapatkan +10 limit_')
      global.db.data.users[m.sender].lastnguli = new Date * 1
   }
   else m.reply('Anda sudah mengklaim upah nguli hari ini')
}
//^(ojek|ngojek|gojek|jadiojek)$/i
const ojek = async (alpha, m, prefix, pushname) => {
   let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
   let _timers = (300000 - __timers)
   let order = global.db.data.users[m.sender].ojekk
   let timers = clockString(_timers)
   let name = m.fromMe ? alpha.user.name : pushname
   let user = global.db.data.users[m.sender]

   if (new Date - global.db.data.users[m.sender].lastngojek > 300000) {
      let randomaku1 = `${Math.floor(Math.random() * 10)}`
      let randomaku2 = `${Math.floor(Math.random() * 10)}`
      let randomaku4 = `${Math.floor(Math.random() * 5)}`
      let randomaku3 = `${Math.floor(Math.random() * 10)}`
      let randomaku5 = `${Math.floor(Math.random() * 10)}`

         .trim()

      let rbrb1 = (randomaku1 * 2)
      let rbrb2 = (randomaku2 * 10)
      let rbrb3 = (randomaku3 * 1)
      let rbrb4 = (randomaku4 * 15729)
      let rbrb5 = (randomaku5 * 120)


      zero1 = `${rbrb1}`
      zero2 = `${rbrb2}`
      zero3 = `${rbrb3}`
      zero4 = `${rbrb4}`
      zero5 = `${rbrb5}`

      dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵


✔️ Mendapatkan orderan....
`

      dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`

      dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan....
`

      dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  


➕ 💰 Menerima gaji....
`

      hsl = `
*Hasil Ngojek ${name}*

💰 Uang = [ ${zero4} ]
✨ Exp = [ ${zero5} ] 		 
😍 Order Selesai = +1

📥Total Order Sebelumnya : ${order}

`


      global.db.data.users[m.sender].money += rbrb4
      global.db.data.users[m.sender].exp += rbrb5
      global.db.data.users[m.sender].ojekk += 1


      setTimeout(() => {
         m.reply(`${hsl}`)
      }, 27000)

      setTimeout(() => {
         m.reply(`${dimas4}`)
      }, 25000)

      setTimeout(() => {
         m.reply(`${dimas3}`)
      }, 20000)

      setTimeout(() => {
         m.reply(`${dimas2}`)
      }, 15000)

      setTimeout(() => {
         m.reply(`${dimas}`)
      }, 10000)

      setTimeout(() => {
         m.reply('🔍Mencari pelanggan.....')
      }, 0)
      user.lastngojek = new Date * 1
   }
   else alpha.send1ButMes(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, `© ${ownername}`, `.inv`, '🎊 Inventory', m)
}
//^(pasar|jual)$/i
const pasar = async (alpha, m, prefix, args, command) => {
   const Skepiting = 7000
   const Slobster = 7000
   const Sudang = 7000
   const Scumi = 7000
   const Sgurita = 7000
   const Sbuntal = 7000
   const Sdory = 7000
   const Sorca = 7000
   const Slumba = 7000
   const Spaus = 7000
   const Sikan = 7000
   const Shiu = 7000
   const Sbanteng = 9000
   const Sharimau = 9000
   const Sgajah = 9000
   const Skambing = 9000
   const Spanda = 9000
   const Sbuaya = 9000
   const Skerbau = 9000
   const Ssapi = 9000
   const Smonyet = 9000
   const Sbabihutan = 9000
   const Sbabi = 9000
   const Sayam = 9000
   const _armor = global.db.data.users[m.sender].armor
   const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
   let type = (args[0] || '').toLowerCase()
   let _type = (args[1] || '').toLowerCase()
   let jualbeli = (args[0] || '').toLowerCase()
   const Kchat = `━━━━━━━━━━━━━━━━━
*🌱 Hewan   | 💲 Harga Jual*\n━━━━━━━━━━━━━━━━━\n
🦀 Kepiting:      ${Skepiting}
🦞 Lobster:       ${Slobster}
🦐 Udang:         ${Sudang}
🦑 Cumi:           ${Scumi}
🐙 Gurita:         ${Sgurita}
🐡 Buntal:         ${Sbuntal}
🐠 Dory:            ${Sdory}
🐳 Orca:            ${Sorca}
🐬 Lumba:        ${Slumba}
🐋 Paus:           ${Spaus}
🦈 Hiu:              ${Shiu}
━━━━━━━━━━━━━━━━━━━━━━━
🐃 Banteng:      ${Sbanteng}
🐅 Harimau:      ${Sharimau}
🐘 Gajah:           ${Sgajah}
🐐 Kambing:     ${Skambing}
🐼 Panda:         ${Spanda}
🐃 Kerbau:        ${Skerbau}
🐊 Buaya:         ${Sbuaya}
🐂 Sapi:            ${Ssapi}
🐒 Monyet:       ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi:             ${Sbabi}
🐔 Ayam:           ${Sayam}\n━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━
🧪 *Contoh penggunaan :*

${prefix}pasar jual ayam
`.trim()
   try {
      if (/pasar|toko/i.test(command)) {
         const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
         const sampah = global.db.data.users[m.sender].sampah
         switch (jualbeli) {
            case 'jual':
               switch (_type) {
                  case 'banteng':
                     if (global.db.data.users[m.sender].banteng >= count * 1) {
                        global.db.data.users[m.sender].money += Spaus * count
                        global.db.data.users[m.sender].banteng -= count * 1
                        m.reply(`Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money 💰  `.trim())
                     }
                     else m.reply(`Banteng Kamu Tidak Cukup`.trim())
                     break
                  case 'harimau':
                     if (global.db.data.users[m.sender].harimau >= count * 1) {
                        global.db.data.users[m.sender].money += Sharimau * count
                        global.db.data.users[m.sender].harimau -= count * 1
                        m.reply(`Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money 💰  `.trim())
                     }
                     else m.reply(`Harimau Kamu Tidak Cukup`.trim())
                     break
                  case 'gajah':
                     if (global.db.data.users[m.sender].gajah >= count * 1) {
                        global.db.data.users[m.sender].money += Sgajah * count
                        global.db.data.users[m.sender].gajah -= count * 1
                        m.reply(`Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money 💰  `.trim())
                     }
                     else m.reply(`Gajah Kamu Tidak Cukup`.trim())
                     break
                  case 'kambing':
                     if (global.db.data.users[m.sender].kambing >= count * 1) {
                        global.db.data.users[m.sender].money += Skambing * count
                        global.db.data.users[m.sender].kambing -= count * 1
                        m.reply(`Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money 💰  `.trim())
                     }
                     else m.reply(`Kambing Kamu Tidak Cukup`.trim())
                     break
                  case 'panda':
                     if (global.db.data.users[m.sender].panda >= count * 1) {
                        global.db.data.users[m.sender].money += Spanda * count
                        global.db.data.users[m.sender].panda -= count * 1
                        m.reply(`Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money 💰  `.trim())
                     }
                     else m.reply(`Panda Kamu Tidak Cukup`.trim())
                     break
                  case 'buaya':
                     if (global.db.data.users[m.sender].buaya >= count * 1) {
                        global.db.data.users[m.sender].money += Sbuaya * count
                        global.db.data.users[m.sender].buaya -= count * 1
                        m.reply(`Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money 💰  `.trim())
                     }
                     else m.reply(`Buaya Kamu Tidak Cukup`.trim())
                     break
                  case 'kerbau':
                     if (global.db.data.users[m.sender].kerbau >= count * 1) {
                        global.db.data.users[m.sender].money += Skerbau * count
                        global.db.data.users[m.sender].kerbau -= count * 1
                        m.reply(`Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money 💰  `.trim())
                     }
                     else m.reply(`Kerbau Kamu Tidak Cukup`.trim())
                     break
                  case 'sapi':
                     if (global.db.data.users[m.sender].sapi >= count * 1) {
                        global.db.data.users[m.sender].money += Ssapi * count
                        global.db.data.users[m.sender].sapi -= count * 1
                        m.reply(`Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money 💰  `.trim())
                     }
                     else m.reply(`Sapi Kamu Tidak Cukup`.trim())
                     break
                  case 'monyet':
                     if (global.db.data.users[m.sender].monyet >= count * 1) {
                        global.db.data.users[m.sender].money += Smonyet * count
                        global.db.data.users[m.sender].monyet -= count * 1
                        m.reply(`Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money 💰  `.trim())
                     }
                     else m.reply(`Monyet Kamu Tidak Cukup`.trim())
                     break
                  case 'babi':
                     if (global.db.data.users[m.sender].babi >= count * 1) {
                        global.db.data.users[m.sender].money += Skepiting * count
                        global.db.data.users[m.sender].babi -= count * 1
                        m.reply(`Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money 💰  `.trim())
                     }
                     else m.reply(`Babi Kamu Tidak Cukup`.trim())
                     break
                  case 'babihutan':
                     if (global.db.data.users[m.sender].babihutan >= count * 1) {
                        global.db.data.users[m.sender].money += Sbabihutan * count
                        global.db.data.users[m.sender].babihutan -= count * 1
                        m.reply(`Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money 💰  `.trim())
                     }
                     else m.reply(`Babi Hutan Kamu Tidak Cukup`.trim())
                     break
                  case 'ayam':
                     if (global.db.data.users[m.sender].ayam >= count * 1) {
                        global.db.data.users[m.sender].money += Sayam * count
                        global.db.data.users[m.sender].ayam -= count * 1
                        m.reply(`Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money 💰  `.trim())
                     }
                     else m.reply(`Ayam Kamu Tidak Cukup`.trim())
                     break
                     //mancing
                  case 'kepiting':
                     if (global.db.data.users[m.sender].kepiting >= count * 1) {
                        global.db.data.users[m.sender].money += Skepiting * count
                        global.db.data.users[m.sender].kepiting -= count * 1
                        m.reply(`Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money 💰  `.trim())
                     }
                     else m.reply(`Kepiting Kamu Tidak Cukup`.trim())
                     break
                  case 'ikan':
                     if (global.db.data.users[m.sender].ikan >= count * 1) {
                        global.db.data.users[m.sender].money += Skepiting * count
                        global.db.data.users[m.sender].ikan -= count * 1
                        m.reply(`Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money 💰  `.trim())
                     }
                     else m.reply(`Ikan Kamu Tidak Cukup`.trim())
                     break
                  case 'dory':
                     if (global.db.data.users[m.sender].dory >= count * 1) {
                        global.db.data.users[m.sender].money += Sdory * count
                        global.db.data.users[m.sender].dory -= count * 1
                        m.reply(`Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money 💰  `.trim())
                     }
                     else m.reply(`Ikan Dory Kamu Tidak Cukup`.trim())
                     break
                  case 'gurita':
                     if (global.db.data.users[m.sender].gurita >= count * 1) {
                        global.db.data.users[m.sender].money += Skepiting * count
                        global.db.data.users[m.sender].gurita -= count * 1
                        m.reply(`Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money 💰  `.trim())
                     }
                     else m.reply(`Gurita Kamu Tidak Cukup`.trim())
                     break
                  case 'buntal':
                     if (global.db.data.users[m.sender].buntal >= count * 1) {
                        global.db.data.users[m.sender].money += Sbuntal * count
                        global.db.data.users[m.sender].buntal -= count * 1
                        m.reply(`Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money 💰  `.trim())
                     }
                     else m.reply(`Ikan Buntal Kamu Tidak Cukup`.trim())
                     break
                  case 'hiu':
                     if (global.db.data.users[m.sender].hiu >= count * 1) {
                        global.db.data.users[m.sender].money += Shiu * count
                        global.db.data.users[m.sender].hiu -= count * 1
                        m.reply(`Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money 💰  `.trim())
                     }
                     else m.reply(`Hiu Kamu Tidak Cukup`.trim())
                     break
                  case 'orca':
                     if (global.db.data.users[m.sender].orca >= count * 1) {
                        global.db.data.users[m.sender].money += Sorca * count
                        global.db.data.users[m.sender].orca -= count * 1
                        m.reply(`Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money 💰  `.trim())
                     }
                     else m.reply(`Paus Orca Kamu Tidak Cukup`.trim())
                     break
                  case 'lumba':
                     if (global.db.data.users[m.sender].lumba >= count * 1) {
                        global.db.data.users[m.sender].money += Skepiting * count
                        global.db.data.users[m.sender].lumba -= count * 1
                        m.reply(`Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money 💰  `.trim())
                     }
                     else m.reply(`Lumba Lumba Kamu Tidak Cukup`.trim())
                     break
                  case 'paus':
                     if (global.db.data.users[m.sender].paus >= count * 1) {
                        global.db.data.users[m.sender].money += Spaus * count
                        global.db.data.users[m.sender].paus -= count * 1
                        m.reply(`Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money 💰  `.trim())
                     }
                     else m.reply(`Paus Kamu Tidak Cukup`.trim())
                     break
                  case 'lobster':
                     if (global.db.data.users[m.sender].lobster >= count * 1) {
                        global.db.data.users[m.sender].money += Slobster * count
                        global.db.data.users[m.sender].lobster -= count * 1
                        m.reply(`Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money 💰  `.trim())
                     }
                     else m.reply(`Lobster Kamu Tidak Cukup`.trim())
                     break
                  case 'udang':
                     if (global.db.data.users[m.sender].udang >= count * 1) {
                        global.db.data.users[m.sender].money += Sudang * count
                        global.db.data.users[m.sender].udang -= count * 1
                        m.reply(`Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money 💰  `.trim())
                     }
                     else m.reply(`Udang Kamu Tidak Cukup`.trim())
                     break
                  case 'cumi':
                     if (global.db.data.users[m.sender].cumi >= count * 1) {
                        global.db.data.users[m.sender].money += Scumi * count
                        global.db.data.users[m.sender].cumi -= count * 1
                        m.reply(`Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money 💰  `.trim())
                     }
                     else m.reply(`Cumi Kamu Tidak Cukup`.trim())
                     break
                  default:
                     return m.reply(Kchat, m)
               }
               break
            default:
               return alpha.send1ButMes(m.chat, Kchat, `© ${ownername}`, `.kolam`, '🏊 Kolam 🏊', m)
         }

      }
      else if (/sell|jual|/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'banteng':
               if (global.db.data.users[m.sender].banteng >= count * 1) {
                  global.db.data.users[m.sender].money += Spaus * count
                  global.db.data.users[m.sender].banteng -= count * 1
                  m.reply(`Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money 💰  `.trim())
               }
               else m.reply(`Banteng Kamu Tidak Cukup`.trim())
               break
            case 'harimau':
               if (global.db.data.users[m.sender].harimau >= count * 1) {
                  global.db.data.users[m.sender].money += Sharimau * count
                  global.db.data.users[m.sender].harimau -= count * 1
                  m.reply(`Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money 💰  `.trim())
               }
               else m.reply(`Harimau Kamu Tidak Cukup`.trim())
               break
            case 'gajah':
               if (global.db.data.users[m.sender].gajah >= count * 1) {
                  global.db.data.users[m.sender].money += Sgajah * count
                  global.db.data.users[m.sender].gajah -= count * 1
                  m.reply(`Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money 💰  `.trim())
               }
               else m.reply(`Gajah Kamu Tidak Cukup`.trim())
               break
            case 'kambing':
               if (global.db.data.users[m.sender].kambing >= count * 1) {
                  global.db.data.users[m.sender].money += Skambing * count
                  global.db.data.users[m.sender].kambing -= count * 1
                  m.reply(`Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money 💰  `.trim())
               }
               else m.reply(`Kambing Kamu Tidak Cukup`.trim())
               break
            case 'panda':
               if (global.db.data.users[m.sender].panda >= count * 1) {
                  global.db.data.users[m.sender].money += Spanda * count
                  global.db.data.users[m.sender].panda -= count * 1
                  m.reply(`Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money 💰  `.trim())
               }
               else m.reply(`Panda Kamu Tidak Cukup`.trim())
               break
            case 'buaya':
               if (global.db.data.users[m.sender].buaya >= count * 1) {
                  global.db.data.users[m.sender].money += Sbuaya * count
                  global.db.data.users[m.sender].buaya -= count * 1
                  m.reply(`Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money 💰  `.trim())
               }
               else m.reply(`Buaya Kamu Tidak Cukup`.trim())
               break
            case 'kerbau':
               if (global.db.data.users[m.sender].kerbau >= count * 1) {
                  global.db.data.users[m.sender].money += Skerbau * count
                  global.db.data.users[m.sender].kerbau -= count * 1
                  m.reply(`Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money 💰  `.trim())
               }
               else m.reply(`Kerbau Kamu Tidak Cukup`.trim())
               break
            case 'sapi':
               if (global.db.data.users[m.sender].sapi >= count * 1) {
                  global.db.data.users[m.sender].money += Ssapi * count
                  global.db.data.users[m.sender].sapi -= count * 1
                  m.reply(`Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money 💰  `.trim())
               }
               else m.reply(`Sapi Kamu Tidak Cukup`.trim())
               break
            case 'monyet':
               if (global.db.data.users[m.sender].monyet >= count * 1) {
                  global.db.data.users[m.sender].money += Smonyet * count
                  global.db.data.users[m.sender].monyet -= count * 1
                  m.reply(`Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money 💰  `.trim())
               }
               else m.reply(`Monyet Kamu Tidak Cukup`.trim())
               break
            case 'babi':
               if (global.db.data.users[m.sender].babi >= count * 1) {
                  global.db.data.users[m.sender].money += Sbabi * count
                  global.db.data.users[m.sender].babi -= count * 1
                  m.reply(`Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money 💰  `.trim())
               }
               else m.reply(`Babi Kamu Tidak Cukup`.trim())
               break
            case 'babihutan':
               if (global.db.data.users[m.sender].babihutan >= count * 1) {
                  global.db.data.users[m.sender].money += Sbabihutan * count
                  global.db.data.users[m.sender].babihutan -= count * 1
                  m.reply(`Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money 💰  `.trim())
               }
               else m.reply(`Babi Hutan Kamu Tidak Cukup`.trim())
               break
            case 'ayam':
               if (global.db.data.users[m.sender].ayam >= count * 1) {
                  global.db.data.users[m.sender].money += Sayam * count
                  global.db.data.users[m.sender].ayam -= count * 1
                  m.reply(`Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money 💰  `.trim())
               }
               else m.reply(`Ayam Kamu Tidak Cukup`.trim())
               break
               //mancing
            case 'kepiting':
               if (global.db.data.users[m.sender].kepiting >= count * 1) {
                  global.db.data.users[m.sender].money += Skepiting * count
                  global.db.data.users[m.sender].kepiting -= count * 1
                  m.reply(`Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money 💰  `.trim())
               }
               else m.reply(`Kepiting Kamu Tidak Cukup`.trim())
               break
            case 'ikan':
               if (global.db.data.users[m.sender].ikan >= count * 1) {
                  global.db.data.users[m.sender].money += Skepiting * count
                  global.db.data.users[m.sender].ikan -= count * 1
                  m.reply(`Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money 💰  `.trim())
               }
               else m.reply(`Ikan Kamu Tidak Cukup`.trim())
               break
            case 'dory':
               if (global.db.data.users[m.sender].dory >= count * 1) {
                  global.db.data.users[m.sender].money += Sdory * count
                  global.db.data.users[m.sender].dory -= count * 1
                  m.reply(`Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money 💰  `.trim())
               }
               else m.reply(`Ikan Dory Kamu Tidak Cukup`.trim())
               break
            case 'gurita':
               if (global.db.data.users[m.sender].gurita >= count * 1) {
                  global.db.data.users[m.sender].money += Skepiting * count
                  global.db.data.users[m.sender].gurita -= count * 1
                  m.reply(`Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money 💰  `.trim())
               }
               else m.reply(`Gurita Kamu Tidak Cukup`.trim())
               break
            case 'buntal':
               if (global.db.data.users[m.sender].buntal >= count * 1) {
                  global.db.data.users[m.sender].money += Sbuntal * count
                  global.db.data.users[m.sender].buntal -= count * 1
                  m.reply(`Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money 💰  `.trim())
               }
               else m.reply(`Ikan Buntal Kamu Tidak Cukup`.trim())
               break
            case 'hiu':
               if (global.db.data.users[m.sender].hiu >= count * 1) {
                  global.db.data.users[m.sender].money += Shiu * count
                  global.db.data.users[m.sender].hiu -= count * 1
                  m.reply(`Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money 💰  `.trim())
               }
               else m.reply(`Hiu Kamu Tidak Cukup`.trim())
               break
            case 'orca':
               if (global.db.data.users[m.sender].orca >= count * 1) {
                  global.db.data.users[m.sender].money += Sorca * count
                  global.db.data.users[m.sender].orca -= count * 1
                  m.reply(`Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money 💰  `.trim())
               }
               else m.reply(`Paus Orca Kamu Tidak Cukup`.trim())
               break
            case 'lumba':
               if (global.db.data.users[m.sender].lumba >= count * 1) {
                  global.db.data.users[m.sender].money += Skepiting * count
                  global.db.data.users[m.sender].lumba -= count * 1
                  m.reply(`Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money 💰  `.trim())
               }
               else m.reply(`Lumba Lumba Kamu Tidak Cukup`.trim())
               break
            case 'paus':
               if (global.db.data.users[m.sender].paus >= count * 1) {
                  global.db.data.users[m.sender].money += Spaus * count
                  global.db.data.users[m.sender].paus -= count * 1
                  m.reply(`Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money 💰  `.trim())
               }
               else m.reply(`Paus Kamu Tidak Cukup`.trim())
               break
            case 'lobster':
               if (global.db.data.users[m.sender].lobster >= count * 1) {
                  global.db.data.users[m.sender].money += Slobster * count
                  global.db.data.users[m.sender].lobster -= count * 1
                  m.reply(`Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money 💰  `.trim())
               }
               else m.reply(`Lobster Kamu Tidak Cukup`.trim())
               break
            case 'udang':
               if (global.db.data.users[m.sender].udang >= count * 1) {
                  global.db.data.users[m.sender].money += Sudang * count
                  global.db.data.users[m.sender].udang -= count * 1
                  m.reply(`Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money 💰  `.trim())
               }
               else m.reply(`Udang Kamu Tidak Cukup`.trim())
               break
            case 'cumi':
               if (global.db.data.users[m.sender].cumi >= count * 1) {
                  global.db.data.users[m.sender].money += Scumi * count
                  global.db.data.users[m.sender].cumi -= count * 1
                  m.reply(`Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money 💰  `.trim())
               }
               else m.reply(`Cumi Kamu Tidak Cukup`.trim())
               break
            default:
               return m.reply(Kchat)
         }
      }
   }
   catch (e) {
      m.reply(Kchat)
      console.log(e)
   }
}

//^(shop|toko|buy|beli|sell|jual|up|upgrade|repair)$/i
const shop = async (alpha, m, prefix, args, command) => {
   const potion = 500
   const Sgold = 3000
   const Bgold = 6000
   const Bstring = 500
   const Sstring = 200
   const Bbatu = 500
   const Sbatu = 200
   const Bkayu = 500
   const Skayu = 200
   const Sarloji = 9000000
   const Biron = 800
   const Siron = 700
   const Spotion = 150
   const Bdiamond = 900
   const Sdiamond = 750
   const Bcommon = 200
   const Scommon = 20
   const Suncommon = 100
   const Buncommon = 600
   const Bmythic = 2500
   const Smythic = 900
   const Blegendary = 7500
   const Slegendary = 3000
   const Bsampah = 10
   const Ssampah = 2
   const Bjagung = 20
   const Bjeruk = 20
   const Bapel = 20
   const Bmangga = 20
   const Banggur = 20
   const Sjagung = 100
   const Sjeruk = 100
   const Sapel = 100
   const Smangga = 100
   const Sanggur = 100
   const Baqua = 50
   const Bumpan = 150
   const Bkucing = 5
   const Banjing = 5
   const Bkuda = 7
   const Bfox = 10
   const Bserigala = 10
   const Bphonix = 20
   const Bcentaur = 35
   const Bgriffin = 35
   const Bnaga = 1000
   const Bfood = 500
   const Bpet = 1500
   const Spet = 750
   const _armor = global.db.data.users[m.sender].armor
   const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
   const uparmor = (_armor == 0 ? 'Kamu belum mempunyai Armor' : '' || _armor == 1 ? 135 : '' || _armor == 2 ? 175 : '' || _armor == 3 ? 250 : '' || _armor == 4 ? 320 : '')
   const _pancing = global.db.data.users[m.sender].pancing
   const pancing = (_pancing == 0 ? 1700 : '' || _pancing == 1 ? 3000 : '' || _pancing == 2 ? 5500 : '' || _pancing == 3 ? 10500 : '')
   const uppancing = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 25 : '' || _pancing == 2 ? 55 : '' || _pancing == 3 ? 75 : '')
   const durfishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 50 : '' || _pancing == 2 ? 70 : '' || _pancing == 3 ? 100 : '')
   const refishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 35 : '' || _pancing == 3 ? 65 : '')
   const drefishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 25 : '' || _pancing == 3 ? 40 : '')

   const _pickaxe = global.db.data.users[m.sender].pickaxe
   const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
   const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
   const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pikaxe == 4 ? 100 : '')
   const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pikaxe == 4 ? 100 : '')
   const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pikaxe == 4 ? 60 : '')

   const _sword = global.db.data.users[m.sender].sword
   const sword = (_sword == 0 ? 1700 : '' || _sword == 1 ? 3000 : '' || _sword == 2 ? 5500 : '' || _sword == 3 ? 10500 : '' || _sword == 4 ? 27000 : '')
   const upsword = (_sword == 0 ? 0 : '' || _sword == 1 ? 15 : '' || _sword == 2 ? 40 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
   const dursword = (_sword == 0 ? 0 : '' || _sword == 1 ? 40 : '' || _sword == 2 ? 60 : '' || _sword == 3 ? 80 : '' || _sword == 4 ? 100 : '')
   const resword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 35 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
   const dresword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 25 : '' || _sword == 3 ? 40 : '' || _sword == 4 ? 60 : '')

   let upgrd = (args[0] || '').toLowerCase()
   let type = (args[0] || '').toLowerCase()
   let _type = (args[1] || '').toLowerCase()
   let jualbeli = (args[0] || '').toLowerCase()
   const Kchat = `
*🎒 SHOP*

*🧪 Penggunaan :*
_${prefix}shop <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${prefix}shop buy potion 1*_

*📮 Note :* 
bila sudah tidak ada harganya, berarti sudah tidak bisa dibeli / sudah level max

🛍️ List Barang:
━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga beli*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${potion}
*🍶 Aqua:* ${Baqua}
*🪙 Gold :* ${Bgold}
*💎 Diamond:* ${Bdiamond}
*🪨 Batu:* ${Bbatu}
*🪵 Kayu:* ${Bkayu}
*🕸️ String:* ${Bstring}
*⛓️ Iron:* ${Biron}
*🗑️ Sampah:* ${Bsampah}

*📦 Common:* ${Bcommon} 
*🛍️ Uncommon:* ${Buncommon}
*🎁 Mythic:* ${Bmythic}
*🧰 Legendary:* ${Blegendary}
*📫 Pet:* ${Bpet}

*🥼 Armor:* ${armor}
*🎣 Fishingrod:* ${pancing}
*🪱 Umpan:* ${Bumpan}

*🥭 Bibit mangga:* ${Bjagung}
*🍎 Bibit apel:* ${Bapel}
*🍊 Bibit jeruk:* ${Bjeruk}
*🍌 Bibit pisang:* ${Bapel}
*🍇 Bibit anggur:* ${Banggur}

━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga Jual*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${Spotion}
*🪙 Gold:* ${Sgold}
*🧭 Arloji:* ${Sarloji}
*🪨 Batu:* ${Sbatu}
*🪵 Kayu:* ${Skayu}
*🕸️ String:* ${Sstring}
*⛓️ Iron:* ${Siron}
*💎 Diamond:* ${Sdiamond}
*🗑️ Sampah:* ${Ssampah}

*📦 Common:* ${Scommon}
*🛍️ Uncommon:* ${Suncommon}
*🎁 Mythic:* ${Smythic}
*🧰 Legendary:* ${Slegendary}
*📫 Pet:* ${Spet}

*🥭 Mangga:* ${Sjagung}
*🍎 Apel:* ${Sapel}
*🍊 Jeruk:* ${Sjeruk}
*🍌 Pisang:* ${Sapel}
*🍇 Anggur:* ${Sanggur}

━━━━━━━━━━━━━━━━━
*🦊 Pet.      | 💲 Harga Beli*
━━━━━━━━━━━━━━━━━
*🐱 Kucing:* ${Bkucing} 🪙
*🐶 Anjing:* ${Banjing} 🪙
*🦊 Fox:* ${Bfox} 🪙 
*🐴 Kuda:* ${Bkuda} 🪙 
*🐺 Serigala:* ${Bserigala} 🪙
*🦜 Phonix:* ${Bphonix} 🪙
*🐎 Centaur:* ${Bcentaur} 🪙
*🦅 Griffin:* ${Bgriffin} 🪙
*🐉 Naga:* ${Bnaga} 🪙

*🥩 Foodpet:* ${Bfood} 💲

━━━━━━━━━━━━━━━━━
*🔨 Upgrade & Repair | 💲 Harga*
━━━━━━━━━━━━━━━━━
*◪ Upgrade ⏫*

*🥼 Armor:* ${uparmor} 💎 ${_armor == 0 ? '(Belum memiliki)' : _armor == 5 ? '( *Level max* )' : ''}

*🎣 Fishingrod:* ${uppancing} 💎
╰▸ *Durability:* ${durfishingrod} ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}

*⛏️ Pickaxe:* ${uppickaxe} 💎
╰▸ *Durability:* ${durpickaxe} ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}

*🗡️ Sword:* ${upsword} 💎
╰▸ *Durability:* ${dursword} ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*◪ Repair 🔨*

*🎣 Fishingrod:* ${refishingrod} 💎 ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
╰▸ + ${drefishingrod} Durability 

*⛏️ Pickaxe:* ${repickaxe} 💎 ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
╰▸ + ${drepickaxe} Durability

*🗡️ Sword:* ${resword} 💎 ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
╰▸ + ${dresword} Durability

━━━━━━━━━━━━━━━━━
━━━━━━━━━━━━━━━━━
`.trim()
   try {
      if (/shop|toko|buy/i.test(command)) {
         const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
         const sampah = global.db.data.users[m.sender].sampah
         switch (jualbeli) {
            case 'buy':
               switch (_type) {
                  case 'kucing':
                     if (global.db.data.users[m.sender].kucing == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                        global.db.data.users[m.sender].kucing += count * 1
                        global.db.data.users[m.sender].emas -= Bkucing * count
                        m.reply(`✅ Sukses Membeli Pet Kucing 🐱 Dengan Harga ${Bkucing * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'anjing':
                     if (global.db.data.users[m.sender].anjing == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                        global.db.data.users[m.sender].anjing += count * 1
                        global.db.data.users[m.sender].emas -= Bkucing * count
                        m.reply(`✅ Sukses Membeli Pet Anjing 🐶 Dengan Harga ${Bkucing * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'kuda':
                     if (global.db.data.users[m.sender].kuda == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bkuda * count) {
                        global.db.data.users[m.sender].kuda += count * 1
                        global.db.data.users[m.sender].emas -= Bkuda * count
                        m.reply(`✅ Sukses Membeli Pet Kuda 🐴 Dengan Harga ${Bkuda * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'fox':
                     if (global.db.data.users[m.sender].rubah == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bfox * count) {
                        global.db.data.users[m.sender].rubah += count * 1
                        global.db.data.users[m.sender].emas -= Bfox * count
                        m.reply(`✅ Sukses Membeli Pet Rubah 🦊 Dengan Harga ${Bfox * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'serigala':
                     if (global.db.data.users[m.sender].serigala == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bserigala * count) {
                        global.db.data.users[m.sender].serigala += count * 1
                        global.db.data.users[m.sender].emas -= Bserigala * count
                        m.reply(`✅ Sukses Membeli Pet Serigala 🐺 Dengan Harga ${Bserigala * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'phonix':
                     if (global.db.data.users[m.sender].phonix == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bphonix * count) {
                        global.db.data.users[m.sender].phonix += count * 1
                        global.db.data.users[m.sender].emas -= Bphonix * count
                        m.reply(`✅ Sukses Membeli Pet Phonix 🦜 Dengan Harga ${Bphonix * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'centaur':
                     if (global.db.data.users[m.sender].centaur == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bcentaur * count) {
                        global.db.data.users[m.sender].centaur += count * 1
                        global.db.data.users[m.sender].emas -= Bcentaur * count
                        m.reply(`✅ Sukses Membeli Pet Centaur 🐎 Dengan Harga ${Bcentaur * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'griffin':
                     if (global.db.data.users[m.sender].griffin == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bgriffin * count) {
                        global.db.data.users[m.sender].griffin += count * 1
                        global.db.data.users[m.sender].emas -= Bgriffin * count
                        m.reply(`✅ Sukses Membeli Pet Griffin 🦅 Dengan Harga ${Bgriffin * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'naga':
                     if (global.db.data.users[m.sender].naga == 1) return m.reply('Kamu sudah memiliki pet ini')
                     if (global.db.data.users[m.sender].emas >= Bnaga * count) {
                        global.db.data.users[m.sender].naga += count * 1
                        global.db.data.users[m.sender].emas -= Bnaga * count
                        m.reply(`✅ Sukses Membeli Pet Naga 🐉 Dengan Harga ${Bnaga * count} Gold 🪙`)
                     }
                     else m.reply(`Gold Anda Tidak Cukup`)

                     break
                  case 'foodpet':
                     if (global.db.data.users[m.sender].money >= Bfood * count) {
                        global.db.data.users[m.sender].makananpet += count * 1
                        global.db.data.users[m.sender].money -= Bfood * count
                        m.reply(`✅ Sukses Membeli FoodPet 🥩 Dengan Harga ${Bfood * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)

                     break
                  case 'potion':
                     if (global.db.data.users[m.sender].money >= potion * count) {
                        global.db.data.users[m.sender].money -= potion * count
                        global.db.data.users[m.sender].potion += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Potion 🥤 Dengan Harga ${potion * count} Money 💰  💰 \n\n📍 Gunakan Potion Dengan Ketik: *${prefix}use potion <jumlah>*`)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money 💰  `, )
                     break
                  case `gold`:
                     if (global.db.data.users[m.sender].money >= Bgold * count) {
                        global.db.data.users[m.sender].money -= Bgold * count
                        global.db.data.users[m.sender].emas += count * 1
                        m.reply(`Sukses Membeli ${count} Gold 🪙 Dengan Harga ${Bgold * count} Money 💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money 💰  `, )
                     break
                  case 'bibitmangga':
                     if (global.db.data.users[m.sender].money >= Bjagung * count) {
                        global.db.data.users[m.sender].money -= Bjagung * count
                        global.db.data.users[m.sender].bibitmangga += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `, )
                     break
                  case 'bibitapel':
                     if (global.db.data.users[m.sender].money >= Bapel * count) {
                        global.db.data.users[m.sender].money -= Bapel * count
                        global.db.data.users[m.sender].bibitapel += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Bibit Apel🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `, )
                     break
                  case 'bibitjeruk':
                     if (global.db.data.users[m.sender].money >= Bapel * count) {
                        global.db.data.users[m.sender].money -= Bapel * count
                        global.db.data.users[m.sender].bibitjeruk += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Bibit Jeruk🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `, )
                     break
                  case 'bibitpisang':
                     if (global.db.data.users[m.sender].money >= Bapel * count) {
                        global.db.data.users[m.sender].money -= Bapel * count
                        global.db.data.users[m.sender].bibitpisang += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Bibit Pisang🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `, )
                     break
                  case 'bibitanggur':
                     if (global.db.data.users[m.sender].money >= Bapel * count) {
                        global.db.data.users[m.sender].money -= Bapel * count
                        global.db.data.users[m.sender].bibitanggur += count * 1
                        m.reply(`✅ Sukses Membeli ${count} Bibit Anggur🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur 🌾\nDengan Harga ${Bapel * count} Money 💰  💰 `, )
                     break
                  case 'diamond':
                     if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                        global.db.data.users[m.sender].diamond += count * 1
                        global.db.data.users[m.sender].money -= Bdiamond * count
                        m.reply(`✅ Sukses Membeli ${count} Diamond 💎 Dengan Harga ${Bdiamond * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'batu':
                     if (global.db.data.users[m.sender].money >= Bbatu * count) {
                        global.db.data.users[m.sender].batu += count * 1
                        global.db.data.users[m.sender].money -= Bbatu * count
                        m.reply(`✅ Sukses Membeli ${count} Batu 🪨 Dengan Harga ${Bbatu * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'umpan':
                     if (global.db.data.users[m.sender].money >= Bumpan * count) {
                        global.db.data.users[m.sender].umpan += count * 1
                        global.db.data.users[m.sender].money -= Bumpan * count
                        m.reply(`✅ Sukses Membeli ${count} Umpan 🪱 Dengan Harga ${Bumpan * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'kayu':
                     if (global.db.data.users[m.sender].money >= Bkayu * count) {
                        global.db.data.users[m.sender].kayu += count * 1
                        global.db.data.users[m.sender].money -= Bkayu * count
                        m.reply(`✅ Sukses Membeli ${count} Kayu 🪵 Dengan Harga ${Bkayu * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'aqua':
                     if (global.db.data.users[m.sender].money >= Baqua * count) {
                        global.db.data.users[m.sender].aqua += count * 1
                        global.db.data.users[m.sender].money -= Bkayu * count
                        m.reply(`✅ Sukses Membeli ${count} Aqua 🍶 Dengan Harga ${Baqua * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'string':
                     if (global.db.data.users[m.sender].money >= Bstring * count) {
                        global.db.data.users[m.sender].string += count * 1
                        global.db.data.users[m.sender].money -= Bstring * count
                        m.reply(`✅ Sukses Membeli ${count} String 🕸️ Dengan Harga ${Bstring * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'iron':
                     if (global.db.data.users[m.sender].money >= Biron * count) {
                        global.db.data.users[m.sender].iron += count * 1
                        global.db.data.users[m.sender].money -= Biron * count
                        m.reply(`✅ Sukses Membeli ${count} Iron ⛓️ Dengan Harga ${Biron * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup`)
                     break
                  case 'common':
                     if (global.db.data.users[m.sender].money >= Bcommon * count) {
                        global.db.data.users[m.sender].common += count * 1
                        global.db.data.users[m.sender].money -= Bcommon * count
                        m.reply(`✅ Sukses Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💰  💰  \n\n📍 Buka Crate Dengan Ketik: *${prefix}open common*`)

                     break
                  case 'uncommon':
                     if (global.db.data.users[m.sender].money >= Buncommon * count) {
                        global.db.data.users[m.sender].uncommon += count * 1
                        global.db.data.users[m.sender].money -= Buncommon * count
                        m.reply(`✅ Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate 🛍️ Dengan Harga ${Buncommon * count} Money 💰  💰 \n\n📍 Buka Crate Dengan Ketik: *${prefix}open uncommon*`)

                     break
                  case 'mythic':
                     if (global.db.data.users[m.sender].money >= Bmythic * count) {
                        global.db.data.users[m.sender].mythic += count * 1
                        global.db.data.users[m.sender].money -= Bmythic * count
                        m.reply(`✅ Sukses Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic* count} Money 💰 \n\n📍 Buka Crate Dengan Ketik:*${prefix}open mythic*`)

                     break
                  case 'legendary':
                     if (global.db.data.users[m.sender].money >= Blegendary * count) {
                        global.db.data.users[m.sender].legendary += count * 1
                        global.db.data.users[m.sender].money -= Blegendary * count
                        m.reply(`✅ Sukses Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money 💰   💹\n\n📍 Buka Crate Dengan Ketik: *${prefix}open legendary*`)

                     break
                  case 'pet':
                     if (global.db.data.users[m.sender].money >= Bpet * count) {
                        global.db.data.users[m.sender].pet += count * 1
                        global.db.data.users[m.sender].money -= Bpet * count
                        m.reply(`✅ Sukses Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money 💰  💰 `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money 💰   💹\n\n📍 Buka Crate Dengan Ketik: *${prefix}open legendary*`)

                     break
                  case 'sampah':
                     if (global.db.data.users[m.sender].money >= Bsampah * count) {
                        global.db.data.users[m.sender].sampah += count * 1
                        global.db.data.users[m.sender].money -= Bsampah * count
                        m.reply(`✅ Sukses Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💰  💰  `)
                     }
                     else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💰  💰 `.trim())

                     break
                  case 'armor':
                     if (global.db.data.users[m.sender].armor == 1) return m.reply('Kamu sudah memiliki Armor')
                     if (global.db.data.users[m.sender].money > armor) {
                        global.db.data.users[m.sender].armor += 1
                        global.db.data.users[m.sender].money -= armor * 1
                        m.reply(`✅ Sukses Membeli Armor 🥼 Seharga ${armor} Money`)
                     }
                     else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Armor 🥼 Seharga ${armor} Money 💰 `)

                     break
                  case 'fishingrod':
                     if (global.db.data.users[m.sender].pancing == 1) return m.reply('Kamu sudah memiliki pancingan')
                     if (global.db.data.users[m.sender].money > armor) {
                        global.db.data.users[m.sender].pancing += 1
                        global.db.data.users[m.sender].money -= armor * 1
                        global.db.data.users[m.sender].fishingroddurability = durfishingrod
                        m.reply(`✅ Sukses Membeli Pancingan 🎣 Seharga ${pancing} Money`)
                     }
                     else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Pancingan 🎣 Seharga ${pancing} Money 💰 `)

                     break
                  default:
                     return m.reply(Kchat)
               }
               break
            case 'sell':
               switch (_type) {
                  case 'potion':
                     if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Potion 🥤 Dengan Harga ${Spotion * count} Money 💰  💰  `.trim())
                     }
                     else m.reply(`🥤 Potion Kamu Tidak Cukup`.trim())
                     break
                  case 'gold':
                     if (global.db.data.users[m.sender].gold >= count * 1) {
                        global.db.data.users[m.sender].money += Sgold * count
                        global.db.data.users[m.sender].gold -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Gold 🪙 Dengan Harga ${Sgold * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`Gold Kamu Tidak Cukup`.trim())
                     break
                  case 'arloji':
                     if (global.db.data.users[m.sender].arlok >= count * 1) {
                        global.db.data.users[m.sender].money += Sarloji * count
                        global.db.data.users[m.sender].arlok -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Arloji 🧭 Dengan Harga ${Sarloji * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🧭 Arloji Kamu Tidak Cukup`.trim())
                     break
                  case 'batu':
                     if (global.db.data.users[m.sender].batu >= count * 1) {
                        global.db.data.users[m.sender].money += Sbatu * count
                        global.db.data.users[m.sender].batu -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Batu 🪨 Dengan Harga ${Sbatu * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🪨 Batu Kamu Tidak Cukup`.trim())
                     break
                  case 'kayu':
                     if (global.db.data.users[m.sender].kayu >= count * 1) {
                        global.db.data.users[m.sender].money += Skayu * count
                        global.db.data.users[m.sender].kayu -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Kayu 🪵 Dengan Harga ${Skayu * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🪵 Kayu Kamu Tidak Cukup`.trim())
                     break
                  case 'string':
                     if (global.db.data.users[m.sender].string >= count * 1) {
                        global.db.data.users[m.sender].money += Sstring * count
                        global.db.data.users[m.sender].string -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} String 🕸️ Dengan Harga ${Sstring * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🕸️ String Kamu Tidak Cukup`.trim())
                     break
                  case 'iron':
                     if (global.db.data.users[m.sender].iron >= count * 1) {
                        global.db.data.users[m.sender].money += Siron * count
                        global.db.data.users[m.sender].iron -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Iron ⛓️ Dengan Harga ${Siron * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`⛓️ Iron Kamu Tidak Cukup`.trim())
                     break
                  case 'common':
                     if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Common Crate 📦 Dengan Harga ${Scommon * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`📦 Common Crate Kamu Tidak Cukup`.trim())
                     break
                  case 'uncommon':
                     if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Uncommon Crate 🛍️ Dengan Harga ${Suncommon * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🛍️ Uncommon Crate Kamu Tidak Cukup`.trim())
                     break
                  case 'mythic':
                     if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Mythic Crate 🎁 Dengan Harga ${Smythic * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🎁 Mythic Crate Kamu Tidak Cukup `.trim())
                     break
                  case 'legendary':
                     if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Legendary Crate 🧰 Dengan Harga ${Slegendary * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`🧰 Legendary Crate Kamu Tidak Cukup `.trim())
                     break
                  case 'pet':
                     if (global.db.data.users[m.sender].pet >= count * 1) {
                        global.db.data.users[m.sender].money += Spet * count
                        global.db.data.users[m.sender].pet -= count * 1
                        m.reply(`✅ Sukses Menjual ${count} Pet Crate 📫 Dengan Harga ${Spet * count} Money 💰  💰 `.trim())
                     }
                     else m.reply(`📫 Pet Crate Kamu Tidak Cukup `.trim())
                     break
                  case 'sampah':
                     if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        m.reply(`✅ Sukses Menjual ${count} Sampah 🗑️ Dengan Harga ${Ssampah * count} Money 💰  💰 `)
                     }
                     else m.reply(`🗑️ Sampah Anda Tidak Cukup `)
                     break
                  case 'diamond':
                     if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        m.reply(`✅ Sukses Menjual ${count} Diamond 💎 Dengan Harga ${Sdiamond * count} Money 💰  💰 `)
                     }
                     else m.reply(`💎 Diamond Anda Tidak Cukup `)
                     break
                  case 'mangga':
                     if (global.db.data.users[m.sender].mangga >= count * 1) {
                        global.db.data.users[m.sender].mangga -= count * 1
                        global.db.data.users[m.sender].money += Smangga * count
                        m.reply(`✅ Sukses Menjual ${count} Mangga 🥭 Dengan Harga ${Smangga * count} Money 💰  💰 `)
                     }
                     else m.reply(`🥭 Mangga Anda Tidak Cukup `)
                     break
                  case 'apel':
                     if (global.db.data.users[m.sender].apel >= count * 1) {
                        global.db.data.users[m.sender].apel -= count * 1
                        global.db.data.users[m.sender].money += Smangga * count
                        m.reply(`✅ Sukses Menjual ${count} Apel 🍎 Dengan Harga ${Smangga * count} Money 💰  💰 `)
                     }
                     else m.reply(`🍎 Apel Anda Tidak Cukup `)
                     break
                  case 'jeruk':
                     if (global.db.data.users[m.sender].jeruk >= count * 1) {
                        global.db.data.users[m.sender].jeruk -= count * 1
                        global.db.data.users[m.sender].money += Smangga * count
                        m.reply(`✅ Sukses Menjual ${count} Jeruk 🍊 Dengan Harga ${Smangga * count} Money 💰  💰 `)
                     }
                     else m.reply(`🍊 Jeruk Anda Tidak Cukup `)
                     break
                  case 'anggur':
                     if (global.db.data.users[m.sender].anggur >= count * 1) {
                        global.db.data.users[m.sender].anggur -= count * 1
                        global.db.data.users[m.sender].money += Smangga * count
                        m.reply(`✅ Sukses Menjual ${count} Anggur 🍇 Dengan Harga ${Smangga * count} Money 💰  💰 `)
                     }
                     else m.reply(`🍇 Anggur Anda Tidak Cukup `)
                     break
                  case 'pisang':
                     if (global.db.data.users[m.sender].pisang >= count * 1) {
                        global.db.data.users[m.sender].pisang -= count * 1
                        global.db.data.users[m.sender].money += Smangga * count
                        m.reply(`✅ Sukses Menjual ${count} Pisang 🍌 Dengan Harga ${Smangga * count} Money 💰  💰 `)
                     }
                     else m.reply(`🍌 Pisang Anda Tidak Cukup `)
                     break
                  default:
                     return m.reply(Kchat)
               }
               break
            case 'upgrade':
               switch (_type) {
                  case 'armor':
                     if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*')
                     if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor')
                     if (global.db.data.users[m.sender].diamond > uparmor) {
                        global.db.data.users[m.sender].armor += 1
                        global.db.data.users[m.sender].diamond -= uparmor * 1
                        m.reply(`✅ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`)

                     break
                  case 'fishingrod':
                     if (global.db.data.users[m.sender].fishingrod == 4) return m.reply('Pancingan mu udah *Level Max*')
                     if (global.db.data.users[m.sender].fishingrod == 0) return m.reply('Kamu belum mempunyai Pancingan')
                     if (global.db.data.users[m.sender].diamond > uppancing) {
                        global.db.data.users[m.sender].pancing += 1
                        global.db.data.users[m.sender].diamond -= uppancing * 1
                        global.db.data.users[m.sender].fishingroddurability = durpancing
                        m.reply(`✅ Sukses Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`)

                     break

                  case 'sword':
                     if (global.db.data.users[m.sender].sword == 5) return m.reply('Sword mu udah *Level Max*')
                     if (global.db.data.users[m.sender].sword == 0) return m.reply('Kamu belum mempunyai Sword')
                     if (global.db.data.users[m.sender].diamond > upsword) {
                        global.db.data.users[m.sender].sword += 1
                        global.db.data.users[m.sender].diamond -= upsword * 1
                        global.db.data.users[m.sender].sworddurability = dursword
                        m.reply(`✅ Sukses Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`)
                     break
                  case 'pickaxe':
                     if (global.db.data.users[m.sender].pickaxe == 5) return m.reply('Pickaxe mu udah *Level Max*')
                     if (global.db.data.users[m.sender].pickaxe == 0) return m.reply('Kamu belum mempunyai Pickaxe')
                     if (global.db.data.users[m.sender].diamond > uppickaxe) {
                        global.db.data.users[m.sender].pickaxe += 1
                        global.db.data.users[m.sender].diamond -= uppickaxe * 1
                        global.db.data.users[m.sender].pickaxedurability = durpickaxe
                        m.reply(`✅ Sukses Mengupgrade Pickaxe ⛏️ Seharga ${uppickaxe} Diamond 💎`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Pickaxe ⛏️  Seharga ${uppickaxe} Diamond 💎`)
                     break
                  default:
                     return m.reply(Kchat)
               }
               break
            case 'repair':
               switch (_type) {
                  case 'fishingrod':
                     if (global.db.data.users[m.sender].fishingroddurability == 80) return m.reply('Pancingan mu belum ada kerusakan')
                     if (global.db.data.users[m.sender].fishingrod == 0) return m.reply('Kamu belum mempunyai Pancingan')
                     if (global.db.data.users[m.sender].diamond > refishingrod) {
                        global.db.data.users[m.sender].pancing += 1
                        global.db.data.users[m.sender].diamond -= refishingrod * 1
                        global.db.data.users[m.sender].fishingroddurability += drefishingrod
                        m.reply(`✅ Sukses Mengrepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎\n➕ ${drefishingrod} Durability`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎`)

                     break
                  case 'pickaxe':
                     if (global.db.data.users[m.sender].pickaxedurability == 80) return m.reply('Pickaxe mu belum ada kerusakan')
                     if (global.db.data.users[m.sender].pickaxe == 0) return m.reply('Kamu belum mempunyai Pickaxe')
                     if (global.db.data.users[m.sender].diamond > repickaxe) {
                        global.db.data.users[m.sender].pickaxe += 1
                        global.db.data.users[m.sender].diamond -= repickaxe * 1
                        global.db.data.users[m.sender].pickaxedurability += drepickaxe
                        m.reply(`✅ Sukses Mengrepair Pickaxe ⛏️ Seharga ${repickaxe} Diamond 💎\n➕ ${drepickaxe} Durability`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Pickaxe ⛏️  Seharga ${repickaxe} Diamond 💎`)

                     break
                  case 'sword':
                     if (global.db.data.users[m.sender].sworddurability == 80) return m.reply('Sword mu belum ada kerusakan')
                     if (global.db.data.users[m.sender].sword == 0) return m.reply('Kamu belum mempunyai Sword')
                     if (global.db.data.users[m.sender].diamond > resword) {
                        global.db.data.users[m.sender].sword += 1
                        global.db.data.users[m.sender].diamond -= resword * 1
                        global.db.data.users[m.sender].sworddurability += dresword
                        m.reply(`✅ Sukses Mengrepair Sword 🗡️ Seharga ${resword} Diamond 💎\n➕ ${dresword} Durability`)
                     }
                     else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Sword 🗡️  Seharga ${resword} Diamond 💎`)

                     break

                  default:
                     return m.reply(Kchat)
               }
               break
            default:
               return alpha.send1ButMes(m.chat, Kchat, `© ${ownername}`, `.inv`, 'Inventory', m)
         }
      }
      else if (/beli|buy/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'potion':
               if (global.db.data.users[m.sender].money >= potion * count) {
                  global.db.data.users[m.sender].money -= potion * count
                  global.db.data.users[m.sender].potion += count * 1
                  m.reply(`Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money 💰  \n\nGunakan Potion Dengan Ketik: *${prefix}use potion <jumlah>*`)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money 💰 `)

               break
            case 'tprem':
               if (global.db.data.users[m.sender].money >= Btprem * count) {
                  global.db.data.users[m.sender].tprem += count * 1
                  global.db.data.users[m.sender].money -= Btprem * count
                  m.reply(`Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money 💰 `)
               }
               else m.reply(`Uang Anda Tidak Cukup`)
               break
            case 'diamond':
               if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                  global.db.data.users[m.sender].diamond += count * 1
                  global.db.data.users[m.sender].money -= Bdiamond * count
                  m.reply(`Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money 💰  `)
               }
               else m.reply(`Money Anda Tidak Cukup `)

               break
            case 'common':
               if (global.db.data.users[m.sender].money >= Bcommon * count) {
                  global.db.data.users[m.sender].common += count * 1
                  global.db.data.users[m.sender].money -= Bcommon * count
                  m.reply(`Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money 💰  `)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money 💰  \n\nBuka Crate Dengan Ketik : *${prefix}open common*`)

               break
            case 'uncommon':
               if (global.db.data.users[m.sender].money >= Buncommon * count) {
                  global.db.data.users[m.sender].uncommon += count * 1
                  global.db.data.users[m.sender].money -= Buncommon * count
                  m.reply(`Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💰  `)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💰  \n\nBuka Crate Dengan Ketik: *${prefix}open uncommon*`)

               break
            case 'mythic':
               if (global.db.data.users[m.sender].money >= Bmythic * count) {
                  global.db.data.users[m.sender].mythic += count * 1
                  global.db.data.users[m.sender].money -= Bmythic * count
                  m.reply(`Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money 💰  `)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money 💰 \n\nBuka Crate Dengan Ketik: *${prefix}open mythic*`)

               break
            case 'legendary':
               if (global.db.data.users[m.sender].money >= Blegendary * count) {
                  global.db.data.users[m.sender].legendary += count * 1
                  global.db.data.users[m.sender].money -= Blegendary * count
                  m.reply(`Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money 💰 `)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money 💰  \n\nBuka Crate Dengan Ketik: *${prefix}open legendary*`)

               break
            case 'sampah':
               if (global.db.data.users[m.sender].money >= Bsampah * count) {
                  global.db.data.users[m.sender].sampah += count * 1
                  global.db.data.users[m.sender].money -= Bsampah * count
                  m.reply(`Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money 💰 `)
               }
               else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money 💰  `.trim())

               break
            case 'armor':
               if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu Telah *Level Max*')
               if (global.db.data.users[m.sender].money > armor * 1) {
                  global.db.data.users[m.sender].armor += 1
                  global.db.data.users[m.sender].money -= armor * 1
                  m.reply(`Sukses Membeli Armor Seharga ${armor} Money`)

               }
               else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`)

               break
            default:
               return m.reply(Kchat)
         }
      }
      else if (/sell|jual|/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'potion':
               if (global.db.data.users[m.sender].potion >= count * 1) {
                  global.db.data.users[m.sender].money += Spotion * count
                  global.db.data.users[m.sender].potion -= count * 1
                  m.reply(`Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money 💰 `.trim())
               }
               else m.reply(`Potion Kamu Tidak Cukup `.trim())
               break
            case 'common':
               if (global.db.data.users[m.sender].common >= count * 1) {
                  global.db.data.users[m.sender].money += Scommon * count
                  global.db.data.users[m.sender].common -= count * 1
                  m.reply(`Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money 💰 `.trim())
               }
               else m.reply(`Common Crate Kamu Tidak Cukup `.trim())
               break
            case 'uncommon':
               if (global.db.data.users[m.sender].uncommon >= count * 1) {
                  global.db.data.users[m.sender].money += Suncommon * count
                  global.db.data.users[m.sender].uncommon -= count * 1
                  m.reply(`Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money 💰 `.trim())
               }
               else m.reply(`Uncommon Crate Kamu Tidak Cukup`.trim())
               break
            case 'mythic':
               if (global.db.data.users[m.sender].mythic >= count * 1) {
                  global.db.data.users[m.sender].money += Smythic * count
                  global.db.data.users[m.sender].mythic -= count * 1
                  m.reply(`Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money 💰 `.trim())
               }
               else m.reply(`Mythic Crate Kamu Tidak Cukup `.trim())
               break
            case 'legendary':
               if (global.db.data.users[m.sender].legendary >= count * 1) {
                  global.db.data.users[m.sender].money += Slegendary * count
                  global.db.data.users[m.sender].legendary -= count * 1
                  m.reply(`Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money 💰 `.trim())
               }
               else m.reply(`Legendary Crate Kamu Tidak Cukup`.trim())
               break
            case 'sampah':
               if (global.db.data.users[m.sender].sampah >= count * 1) {
                  global.db.data.users[m.sender].sampah -= count * 1
                  global.db.data.users[m.sender].money += Ssampah * count
                  m.reply(`Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money 💰 `.trim())
               }
               else m.reply(`Sampah Anda Tidak Cukup`.trim())
               break
            case 'diamond':
               if (global.db.data.users[m.sender].diamond >= count * 1) {
                  global.db.data.users[m.sender].diamond -= count * 1
                  global.db.data.users[m.sender].money += Sdiamond * count
                  m.reply(`Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money 💰`)
               }
               else m.reply(`Diamond Anda Tidak Cukup `)
               break
            default:
               return m.reply(Kchat)
         }
      }
      else if (/up|upgrade/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'armor':
               if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*')
               if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor')
               if (global.db.data.users[m.sender].diamond > uparmor) {
                  global.db.data.users[m.sender].armor += 1
                  global.db.data.users[m.sender].diamond -= uparmor * 1
                  m.reply(`✅ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💰 `)
               }
               else m.reply(`Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💰  💰 `)

               break
            default:
               return m.reply(Kchat)
         }
      }
      else if (/repair/i.test(command)) {
         const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
         switch (type) {
            case 'armor':
               if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*')
               if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor')
               if (global.db.data.users[m.sender].diamond > uparmor) {
                  global.db.data.users[m.sender].armor += 1
                  global.db.data.users[m.sender].diamond -= uparmor * 1
                  m.reply(`✅ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💰 `)
               }
               else m.reply(`Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💰  💰 `)

               break
            default:
               return m.reply(Kchat)

         }
      }
   }
   catch (e) {
      m.reply(Kchat)
      console.log(e)
   }
}
//^slot?|jac?kpot$/i
const slot = async (alpha, m, prefix, args, command, text) => {
   this.slots = this.slots ? this.slots : {}
   if (m.chat in this.slots) return m.reply('Masih ada Yang Melakukan Slots Disini, Tunggu Sampai selesai!!')
   else this.slots[m.chat] = true
   try {
      if (args.length < 1) return m.reply(`Gunakan format *${prefix}${command} [jumlah]*
contoh *${prefix}${command} 10*`)
      let count = (typeof args[0] == 'number' ? Math.round(Math.max(args[0], 1)) : 1)
      let _spin1 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
      let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
      let spin1 = (_spin1 * 1)
      let spin2 = (_spin2 * 1)
      let spin3 = (_spin3 * 1)
      let spin4 = (_spin4 * 1)
      let spin5 = (_spin5 * 1)
      let spin6 = (_spin6 * 1)
      let spin7 = (_spin7 * 1)
      let spin8 = (_spin8 * 1)
      let spin9 = (_spin9 * 1)
      let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
      let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
      let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
      let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
      let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
      let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
      let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
      let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
      let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '')
      let user = global.db.data.users[m.sender]
      user.money -= count * 1
      for (let i = 0; i < 2; i++) {
         m.reply(`
            *🎰 VIRTUAL SLOTS 🎰*
            
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])} <<==
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}
            
            `)
      }
      let WinOrLose, Hadiah
      if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
         WinOrLose = 'BIG JACKPOT 🥳🥳'
         Hadiah = `+${count * 4}`
         user.money += count * 4
      }
      else if (spin4 == spin5 && spin5 == spin6) {
         WinOrLose = 'JACKPOT 🥳'
         Hadiah = `+${count * 2}`
         user.money += count * 2
      }
      else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {
         Hadiah = `-${count * 1}`
         WinOrLose = 'DIKIT LAGI!!'
      }
      else {
         Hadiah = `-${count * 1}`
         WinOrLose = 'YOU LOSE'
      }

      setTimeout(async () => {
         alpha.send1ButMes(m.chat, `
       *🎰 VIRTUAL SLOTS 🎰*

${spins1}|${spins2}|${spins3}
${spins4}|${spins5}|${spins6} <<==
${spins7}|${spins8}|${spins9}

*${WinOrLose}* *${Hadiah}*
`, `© ${ownername}`, `.slot ${text}`, 'Main Lagi', m)
      }, 10000)
   }
   catch (e) {
      console.log(e)
      m.reply('Error')
   }
   finally {
      delete this.slots[m.chat]
   }
}
//^(transfer|tf)$/i
const transfer = async (alpha, m, prefix, args) => {
   if (args.length < 3) {
      return m.reply(`Gunakan format .transfer <type> <jumlah> <@tag>\n📍contoh penggunaan: *.transfer money 100 @tag*\n\n*List yang bisa di transfer :*\n💰 Money\n💳 Tabungan\n🥤 Potion\n🗑️ Sampah\n💎 Diamond\n📦 Common\n🛍️ Uncommon\n🎁 Mythic\n🧰 Legendary\n🕸️ string\n🪵 kayu\n🪨 batu\n⛓ iron`.trim())
   }
   else try {
      let type = (args[0] || '').toLowerCase()
      let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
      let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
      if (!m.mentionedJid || !args[2]) return m.reply('Tag salah satu, atau ketik Nomernya!!')
      let users = global.db.data.users
      switch (type) {
         case 'money':
            if (global.db.data.users[m.sender].money >= count * 1) {
               try {
                  global.db.data.users[m.sender].money -= count * 1
                  global.db.data.users[who].money += count * 1
                  m.reply(`Berhasil mentransfer money sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].money += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim())
            break
         case 'tabungan':
            if (global.db.data.users[m.sender].atm >= count * 1) {
               try {
                  global.db.data.users[m.sender].atm -= count * 1
                  global.db.data.users[who].atm += count * 1
                  m.reply(`Berhasil mentransfer Uang dari bank sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].atm += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Limit kamu tidak mencukupi untuk mentransfer Uang dari Bank sebesar ${count}`.trim())
            break
         case 'limit':
            if (global.db.data.users[m.sender].limit >= count * 1) {
               try {
                  global.db.data.users[m.sender].limit -= count * 1
                  global.db.data.users[who].limit += count * 1
                  m.reply(`Berhasil mentransfer limit sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].limit += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Limit kamu tidak mencukupi untuk mentransfer Limit sebesar ${count}`.trim())
            break
         case 'potion':
            if (global.db.data.users[m.sender].potion >= count * 1) {
               try {
                  global.db.data.users[m.sender].potion -= count * 1
                  global.db.data.users[who].potion += count * 1
                  m.reply(`Berhasil mentransfer ${count} Potion`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].potion += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Potion kamu tidak cukup`.trim())
            break
         case 'sampah':
            if (global.db.data.users[m.sender].sampah >= count * 1) {
               try {
                  global.db.data.users[m.sender].sampah -= count * 1
                  global.db.data.users[who].sampah += count * 1
                  m.reply(`Berhasil mentransfer ${count} Sampah`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].sampah += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Sampah kamu tidak cukup`.trim())
            break
         case 'diamond':
            if (global.db.data.users[m.sender].diamond >= count * 1) {
               try {
                  global.db.data.users[m.sender].diamond -= count * 1
                  global.db.data.users[who].diamond += count * 1
                  m.reply(`Berhasil mentransfer ${count} Diamond`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].diamond += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Diamond kamu kamu tidak cukup`.trim())
            break
         case 'common':
            if (global.db.data.users[m.sender].common >= count * 1) {
               try {
                  global.db.data.users[m.sender].common -= count * 1
                  global.db.data.users[who].common += count * 1
                  m.reply(`Berhasil mentransfer ${count} Common Crate`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].common += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Common crate kamu kamu tidak cukup`.trim())
            break
         case 'uncommon':
            if (global.db.data.users[m.sender].uncommon >= count * 1) {
               try {
                  global.db.data.users[m.sender].uncommon -= count * 1
                  global.db.data.users[who].uncommon += count * 1
                  m.reply(`Berhasil mentransfer ${count} Uncommon Crate`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].uncommon += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Uncommon crate kamu kamu tidak cukup`.trim())
            break
         case 'mythic':
            if (global.db.data.users[m.sender].mythic >= count * 1) {
               try {
                  global.db.data.users[m.sender].mythic -= count * 1
                  global.db.data.users[who].mythic += count * 1
                  m.reply(`Berhasil mentransfer ${count} Mythic crate`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].mythic += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Mythic crate kamu kamu tidak cukup`.trim())
            break
         case 'legendary':
            if (global.db.data.users[m.sender].legendary >= count * 1) {
               try {
                  global.db.data.users[m.sender].legendary -= count * 1
                  global.db.data.users[who].legendary += count * 1
                  m.reply(`Berhasil mentransfer ${count} Legendary crate`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].legendary += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Legendary crate kamu kamu tidak cukup`.trim())
            break
         case 'string':
            if (global.db.data.users[m.sender].string >= count * 1) {
               try {
                  global.db.data.users[m.sender].string -= count * 1
                  global.db.data.users[who].string += count * 1
                  m.reply(`Berhasil mentransfer string sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].string += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Uang kamu tidak mencukupi untuk mentransfer String sebesar ${count}`.trim())
            break
         case 'batu':
            if (global.db.data.users[m.sender].batu >= count * 1) {
               try {
                  global.db.data.users[m.sender].batu -= count * 1
                  global.db.data.users[who].batu += count * 1
                  m.reply(`Berhasil mentransfer Batu sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].batu += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)
               }
            }
            else m.reply(`Uang kamu tidak mencukupi untuk mentransfer Batu sebesar ${count}`.trim())
            break
         case 'kayu':
            if (global.db.data.users[m.sender].kayu >= count * 1) {
               try {
                  global.db.data.users[m.sender].kayu -= count * 1
                  global.db.data.users[who].kayu += count * 1
                  m.reply(`Berhasil mentransfer kayu sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].kayu += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)

               }
            }
            else m.reply(`Uang kamu tidak mencukupi untuk mentransfer Kayu sebesar ${count}`.trim())
            break
         case 'iron':
            if (global.db.data.users[m.sender].iron >= count * 1) {
               try {
                  global.db.data.users[m.sender].iron -= count * 1
                  global.db.data.users[who].iron += count * 1
                  m.reply(`Berhasil mentransfer iron sebesar ${count}`.trim())
               }
               catch (e) {
                  global.db.data.users[m.sender].iron += count * 1
                  m.reply('Gagal Menstransfer')
                  console.log(e)

               }
            }
            else m.reply(`Uang kamu tidak mencukupi untuk mentransfer Iron sebesar ${count}`.trim())
            break
         default:
            return m.reply(`Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\n📍 Contoh penggunaan: *${prefix}transfer money 100 @tag*\n\n*List yang bisa di transfer*\n💰 Money\n💳 Tabungan\n🥤 Potion\n🗑️ Sampah\n💎 Diamond\n📦 Common\n🛍️ Uncommon\n🎁 Mythic\n🧰 Legendary\n🕸️ String\n🪵 Kayu\n🪨 Batu\n⛓️ Iron`.trim())
      }
   }
   catch (e) {
      m.reply(`Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\📍 Contoh penggunaan: *${prefix}transfer money 100 @tag*\n\n*List yang bisa di transfer :*\n💰 Money\n💳 Tabungan\n🥤 Potion\n🗑️ Sampah\n💎 Diamond\n📦 Common\n🛍️ Uncommon\n🎁 Mythic\n🧰 Legendary\n🕸️ String\n🪵 Kayu\n🪨 Batu\n⛓ iron`.trim())
      console.log(e)
   }
}
//^(use|heal)$/i
const use = async (alpha, m, prefix, args, command) => {
   if (!args[0]) return m.reply(`Contoh penggunaan: ${prefix + command} potion`)
   let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
   try {
      let msgkurang = (pickRandom(['Potionmu tidak cukup', 'Ciaa gk cukup potionyya :v', 'Wtf gk cukup :v', 'Beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'Eyyyy potionmu kurang', 'Beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'Minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
      let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'Coba deh liat inv mu, Nyawamu kan dah 100 ngapai ngunain potion lagi?', 'Health mu dah penuh woyy', 'Ws kebek weh :v', 'Nyawamu dah penuh :v', 'Udh weh, udh penuh']))
      let kucing = global.db.data.users[m.sender].kucing
      let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
      let healt = global.db.data.users[m.sender].healt
      if (/use|pakai/i.test(command)) {
         try {
            let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
            let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
            if (args[0] === 'potion') {
               if (global.db.data.users[m.sender].healt < 100) {
                  if (global.db.data.users[m.sender].potion >= count * 1) {
                     global.db.data.users[m.sender].potion -= count * 1
                     global.db.data.users[m.sender].healt += usepotion * count
                     m.reply(msgsucces)
                  }
                  else m.reply(msgkurang)
               }
               else m.reply(msgpenuh)
            }
            else if (args.length > 2 && args[0] === !'potion') m.reply(pickRandom(['Hanya bisa menggunakan potion', 'Mau ngunain apa? Cuma bisa gunain potion :v', 'Wih mau gunain apa kamu, kan hanya bisa potion', 'Waduheck, hanya bisa potion', 'lah, mau gunain apa?, kan hanya bisa potion']) + '\nContoh penggunaan: *' + prefix + 'potion 1*')
         }
         catch (e) {
            console.log(e)
            m.reply(msgerror)

         }
      }
      else if (/heal/i.test(command)) {
         try {
            let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
            let msgsucces = (pickRandom(['Success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
            if (global.db.data.users[m.sender].healt < 100) {
               if (global.db.data.users[m.sender].potion >= count * 1) {
                  global.db.data.users[m.sender].potion -= count * 1
                  global.db.data.users[m.sender].healt += usepotion * count
                  alpha.send1ButMes(m.chat, msgsucces, `© ${ownername}`, `.adventure`, 'Adventure', m)
               }
               else m.reply(msgkurang)
            }
            else m.reply(msgpenuh)
         }
         catch (e) {
            console.log(e)
            m.reply(msgerror)

         }
      }
   }
   catch (e) {
      console.log(e)
      m.reply(msgerror)
   }
}
//^(weekly)$/i
const weekly = async (alpha, m, prefix) => {
   let user = global.db.data.users[m.sender]
   let _timers = (604800000 - (new Date - user.lastweekly))
   let timers = clockString(_timers)
   if (new Date - user.lastweekly > 604800000) {
      let wekli = global.weeklyRPG
      let str = `+2000 money 💰\n+3 Legendary crate 🧰\n+5 String 🕸️\n+2 Iron ⛓️\n+1 Gold 🪙`
      sendButLoc(alpha, m.chat, str, '©' + ownername, await getBuffer(wekli), [{
            buttonId: `.claim`,
            buttonText: {
               displayText: `🎪 Claim `
            },
            type: 1
         },
         {
            buttonId: `.monthly`,
            buttonText: {
               displayText: 'Monthly 🌝 '
            },
            type: 1
         }
      ], {
         userJid: m.chat,
         quoted: m
      })
      user.money += 20000
      user.legendary += 3
      user.iron += 2
      user.emas += 1
      user.string += 5
      user.lastweekly = new Date * 1
   }
   else {
      let buts = `Silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`
      alpha.send1ButMes(m.chat, buts, `© ${ownername}`, `.berburu`, 'Berburu', m)
   }
}
const buy = async (alpha, m, prefix, args, command) => {
   const xpperlimit = 350
   let count = command.replace(/^buy/i, '')
   count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
   count = Math.max(1, count)
   if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
      global.db.data.users[m.sender].exp -= xpperlimit * count
      global.db.data.users[m.sender].limit += count
      m.reply(`-Rp.${xpperlimit * count}\n+ ${count} Limit`)
   }
   else m.reply(`Uang anda tidak mencukupi untuk membeli ${count} limit\n\nMainkan Math untuk dapatkan beberapa Uang!`)
}

const openc = async (alpha, m, prefix, args, command) => {
   let bruh = `Contoh penggunaan: \n\n${prefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\n*${prefix}open common 10*\n\nlist crate:\n*pet*\n*boxs*\n*cupon*\n*common*\n*uncommon*\n*mythic*\n*legendary*\n*gardenboxs*`
   let _lmao = args[0]
   let Lmao = `Pake salah satu 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
   let type = (args[0] || '').toLowerCase()
   let jumlah = (args[1] || '').toLowerCase()
   switch (type) {
      case 'common':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastime = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastime = (30000 - __lastime)
               let lastime = clockString(_lastime)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                  let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                  let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                  let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                  let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                  let cm = (_cm * 1)
                  let cc = (_cc * 1)
                  let cp = (_cp * 1)
                  let ce = (_ce * 1)
                  let cu = (_cu * 1)
                  let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:${cm > 0 ? `\nMoney: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].common >= 1) {
                     global.db.data.users[m.sender].common -= 1
                     global.db.data.users[m.sender].money += cm * 1
                     global.db.data.users[m.sender].exp += ce * 1
                     global.db.data.users[m.sender].potion += cp * 1
                     global.db.data.users[m.sender].uncommon += cu * 1
                     global.db.data.users[m.sender].common += cc * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hcom)
                  }
                  else m.reply('Common crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastime} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimeq = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeq = (30000 - __lastimeq)
               let lastimeq = clockString(_lastimeq)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _cm1 = `${Math.floor(Math.random() * 500)}`.trim()
                  let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                  let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
                  let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                  let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                  let cm1 = (_cm1 * 1)
                  let cc1 = (_cc1 * 1)
                  let cp1 = (_cp1 * 1)
                  let ce1 = (_ce1 * 1)
                  let cu1 = (_cu1 * 1)
                  let Hcom1 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm1 > 0 ? `\nMoney: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].common >= 10) {
                     global.db.data.users[m.sender].common -= 10
                     global.db.data.users[m.sender].money += cm1 * 1
                     global.db.data.users[m.sender].exp += ce1 * 1
                     global.db.data.users[m.sender].potion += cp1 * 1
                     global.db.data.users[m.sender].uncommon += cu1 * 1
                     global.db.data.users[m.sender].common += cc1 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hcom1)
                  }
                  else m.reply('Common crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeq} lagi untuk bisa membuka fitur open`)
               break
            case '100':
               let __lastimeqq = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeqq = (30000 - __lastimeqq)
               let lastimeqq = clockString(_lastimeqq)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
                  let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                  let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                  let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                  let cm2 = (_cm2 * 1)
                  let cc2 = (_cc2 * 1)
                  let cp2 = (_cp2 * 1)
                  let ce2 = (_ce2 * 1)
                  let cu2 = (_cu2 * 1)
                  let Hcom2 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm2 > 0 ? `\nMoney: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].common >= 100) {
                     global.db.data.users[m.sender].common -= 100
                     global.db.data.users[m.sender].money += cm2 * 1
                     global.db.data.users[m.sender].exp += ce2 * 1
                     global.db.data.users[m.sender].potion += cp2 * 1
                     global.db.data.users[m.sender].uncommon += cu2 * 1
                     global.db.data.users[m.sender].common += cc2 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hcom2)
                  }
                  else m.reply('Common crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeqq} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
               let __lastimeqqq = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeqqq = (30000 - __lastimeqqq)
               let lastimeqqq = clockString(_lastimeqqq)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                  let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                  let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                  let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                  let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                  let cm3 = (_cm3 * 1)
                  let cc3 = (_cc3 * 1)
                  let cp3 = (_cp3 * 1)
                  let ce3 = (_ce3 * 1)
                  let cu3 = (_cu3 * 1)
                  let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:${cm3 > 0 ? `\nMoney: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].common >= 1000) {
                     global.db.data.users[m.sender].common -= 1000
                     global.db.data.users[m.sender].money += cm3 * 1
                     global.db.data.users[m.sender].exp += ce3 * 1
                     global.db.data.users[m.sender].potion += cp3 * 1
                     global.db.data.users[m.sender].uncommon += cu3 * 1
                     global.db.data.users[m.sender].common += cc3 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hcom3)
                  }
                  else m.reply('Common crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeqqq} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'uncommon':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimew = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimew = (30000 - __lastimew)
               let lastimew = clockString(_lastimew)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                  let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                  let _um = `${Math.floor(Math.random() * 150)}`.trim()
                  let _up = `${Math.floor(Math.random() * 2)}`.trim()
                  let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                  let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                  let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                  let ud = (_ud * 1)
                  let ue = (_ue * 1)
                  let um = (_um * 1)
                  let up = (_up * 1)
                  let umc = (_umc * 1)
                  let uu = (_uu * 1)
                  let uc = (_uc * 1)
                  let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMoney: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].uncommon >= 1) {
                     global.db.data.users[m.sender].uncommon -= 1
                     global.db.data.users[m.sender].money += um * 1
                     global.db.data.users[m.sender].diamond += ud * 1
                     global.db.data.users[m.sender].exp += ue * 1
                     global.db.data.users[m.sender].potion += up * 1
                     global.db.data.users[m.sender].common += uc * 1
                     global.db.data.users[m.sender].uncommon += uu * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hun)
                     if (umc > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += umc * 1
                     }
                  }
                  else m.reply('Uncommon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimew} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimewe = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimewe = (30000 - __lastimewe)
               let lastimewe = clockString(_lastimewe)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
                  let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                  let _um1 = `${Math.floor(Math.random() * 400)}`.trim()
                  let _up1 = `${Math.floor(Math.random() * 7)}`.trim()
                  let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                  let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                  let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                  let ud1 = (_ud1 * 1)
                  let ue1 = (_ue1 * 1)
                  let um1 = (_um1 * 1)
                  let up1 = (_up1 * 1)
                  let umc1 = (_umc1 * 1)
                  let uu1 = (_uu1 * 1)
                  let uc1 = (_uc1 * 1)
                  let Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um1 > 0 ? `\nMoney: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\nDiamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].uncommon >= 10) {
                     global.db.data.users[m.sender].uncommon -= 10
                     global.db.data.users[m.sender].money += um1 * 1
                     global.db.data.users[m.sender].diamond += ud1 * 1
                     global.db.data.users[m.sender].exp += ue1 * 1
                     global.db.data.users[m.sender].potion += up1 * 1
                     global.db.data.users[m.sender].common += uc1 * 1
                     global.db.data.users[m.sender].uncommon += uu1 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hun1)
                     if (umc1 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc1} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += umc1 * 1
                     }
                  }
                  else m.reply('Uncommon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimewe} lagi untuk bisa membuka fitur open`)
               break
            case '100':
               let __lastimewee = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimewee = (30000 - __lastimewee)
               let lastimewee = clockString(_lastimewee)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
                  let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                  let _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
                  let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                  let _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
                  let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                  let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                  let ud2 = (_ud2 * 1)
                  let ue2 = (_ue2 * 1)
                  let um2 = (_um2 * 1)
                  let up2 = (_up2 * 1)
                  let umc2 = (_umc2 * 1)
                  let uu2 = (_uu2 * 1)
                  let uc2 = (_uc2 * 1)
                  let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMoney: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].uncommon >= 100) {
                     global.db.data.users[m.sender].uncommon -= 100
                     global.db.data.users[m.sender].money += um2 * 1
                     global.db.data.users[m.sender].diamond += ud2 * 1
                     global.db.data.users[m.sender].exp += ue2 * 1
                     global.db.data.users[m.sender].potion += up2 * 1
                     global.db.data.users[m.sender].common += uc2 * 1
                     global.db.data.users[m.sender].uncommon += uu2 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hun2)
                     if (umc2 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += umc2 * 1
                     }
                  }
                  else m.reply('Uncommon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimewee} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
               let __lastimeweee = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeweee = (30000 - __lastimeweee)
               let lastimeweee = clockString(_lastimeweee)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                  let _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
                  let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
                  let _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
                  let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                  let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                  let ud3 = (_ud3 * 1)
                  let ue3 = (_ue3 * 1)
                  let um3 = (_um3 * 1)
                  let up3 = (_up3 * 1)
                  let umc3 = (_umc3 * 1)
                  let uu3 = (_uu3 * 1)
                  let uc3 = (_uc3 * 1)
                  let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMoney: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].uncommon >= 1000) {
                     global.db.data.users[m.sender].uncommon -= 1000
                     global.db.data.users[m.sender].money += um3 * 1
                     global.db.data.users[m.sender].diamond += ud3 * 1
                     global.db.data.users[m.sender].exp += ue3 * 1
                     global.db.data.users[m.sender].potion += up3 * 1
                     global.db.data.users[m.sender].common += uc3 * 1
                     global.db.data.users[m.sender].uncommon += uu3 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Hun3)
                     if (umc3 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += umc3 * 1
                     }
                  }
                  else m.reply('Uncommon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeweee} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'mythic':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimep = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimep = (30000 - __lastimep)
               let lastimep = clockString(_lastimep)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mm = `${Math.floor(Math.random() * 200)}`.trim()
                  let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                  let _me = `${Math.floor(Math.random() * 250)}`.trim()
                  let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                  let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                  let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                  let _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
                  let _md = `${Math.floor(Math.random() * 3)}`.trim()
                  let mm = (_mm * 1)
                  let mmm = (_mmm * 1)
                  let me = (_me * 1)
                  let mp = (_mp * 1)
                  let mu = (_mu * 1)
                  let mc = (_mc * 1)
                  let ml = (_ml * 1)
                  let md = (_md * 1)
                  let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].mythic >= 1) {
                     global.db.data.users[m.sender].mythic -= 1
                     global.db.data.users[m.sender].money += mm * 1
                     global.db.data.users[m.sender].diamond += md * 1
                     global.db.data.users[m.sender].exp += me * 1
                     global.db.data.users[m.sender].potion += mp * 1
                     global.db.data.users[m.sender].common += mc * 1
                     global.db.data.users[m.sender].uncommon += mu * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychat)
                     if (mmm > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += mmm * 1
                     }
                     if (ml > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += ml * 1
                     }
                  }
                  else m.reply('Mythic crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimep} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimepa = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimepa = (30000 - __lastimepa)
               let lastimepa = clockString(_lastimepa)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
                  let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                  let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
                  let _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
                  let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                  let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                  let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                  let mm1 = (_mm1 * 1)
                  let mmm1 = (_mmm1 * 1)
                  let me1 = (_me1 * 1)
                  let mp1 = (_mp1 * 1)
                  let mu1 = (_mu1 * 1)
                  let mc1 = (_mc1 * 1)
                  let ml1 = (_ml1 * 1)
                  let md1 = (_md1 * 1)
                  let Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm1 > 0 ? `\nMoney: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu1} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].mythic >= 10) {
                     global.db.data.users[m.sender].mythic -= 10
                     global.db.data.users[m.sender].money += mm1 * 1
                     global.db.data.users[m.sender].diamond += md1 * 1
                     global.db.data.users[m.sender].exp += me1 * 1
                     global.db.data.users[m.sender].potion += mp1 * 1
                     global.db.data.users[m.sender].common += mc1 * 1
                     global.db.data.users[m.sender].uncommon += mu1 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychat1)
                     if (mmm1 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm1} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += mmm1 * 1
                     }
                     if (ml1 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml1} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += ml1 * 1
                     }
                  }
                  else m.reply('Mythic crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimepa} lagi untuk bisa membuka fitur open`)
               break
            case '100':
               let __lastimepaa = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimepaa = (30000 - __lastimepaa)
               let lastimepaa = clockString(_lastimepaa)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
                  let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                  let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                  let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                  let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                  let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                  let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                  let mm2 = (_mm2 * 1)
                  let mmm2 = (_mmm2 * 1)
                  let me2 = (_me2 * 1)
                  let mp2 = (_mp2 * 1)
                  let mu2 = (_mu2 * 1)
                  let mc2 = (_mc2 * 1)
                  let ml2 = (_ml2 * 1)
                  let md2 = (_md2 * 1)
                  let Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm2 > 0 ? `\nMoney: ${mm2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].mythic >= 100) {
                     global.db.data.users[m.sender].mythic -= 100
                     global.db.data.users[m.sender].money += mm2 * 1
                     global.db.data.users[m.sender].diamond += md2 * 1
                     global.db.data.users[m.sender].exp += me2 * 1
                     global.db.data.users[m.sender].potion += mp2 * 1
                     global.db.data.users[m.sender].common += mc2 * 1
                     global.db.data.users[m.sender].uncommon += mu2 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychat2)
                  }
                  else m.reply('Mythic crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimepaa} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
               let __lastimepaaa = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimepaaa = (30000 - __lastimepaaa)
               let lastimepaaa = clockString(_lastimepaaa)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mm3 = `${Math.floor(Math.random() * 500000)}`.trim()
                  let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _me3 = `${Math.floor(Math.random() * 750000)}`.trim()
                  let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                  let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                  let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                  let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                  let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                  let mm3 = (_mm3 * 1)
                  let mmm3 = (_mmm3 * 1)
                  let me3 = (_me3 * 1)
                  let mp3 = (_mp3 * 1)
                  let mu3 = (_mu3 * 1)
                  let mc3 = (_mc3 * 1)
                  let ml3 = (_ml3 * 1)
                  let md3 = (_md3 * 1)
                  let Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm3 > 0 ? `\nMoney: ${mm3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].mythic >= 1000) {
                     global.db.data.users[m.sender].mythic -= 1000
                     global.db.data.users[m.sender].money += mm3 * 1
                     global.db.data.users[m.sender].diamond += md3 * 1
                     global.db.data.users[m.sender].exp += me3 * 1
                     global.db.data.users[m.sender].potion += mp3 * 1
                     global.db.data.users[m.sender].common += mc3 * 1
                     global.db.data.users[m.sender].uncommon += mu3 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychat3)
                     if (mmm3 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += mmm3 * 1
                     }
                     if (ml3 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml3} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += ml3 * 1
                     }
                  }
                  else m.reply('Mythic crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimepaaa} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'boxs':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimed = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimed = (30000 - __lastimed)
               let lastimed = clockString(_lastimed)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mmz = `${Math.floor(Math.random() * 500)}`.trim()
                  let _bbbz = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                  let _mez = `${Math.floor(Math.random() * 250)}`.trim()
                  let _mpz = `${Math.floor(Math.random() * 3)}`.trim()
                  let _lmz = `${Math.floor(Math.random() * 3)}`.trim()
                  let _hmz = `${Math.floor(Math.random() * 5)}`.trim()
                  let _mlz = `${Math.floor(Math.random() * 1)}`.trim()
                  let _ebz = `${Math.floor(Math.random() * 3)}`.trim()
                  let mmz = (_mmz * 1)
                  let bbbz = (_bbbz * 1)
                  let mez = (_mez * 1)
                  let mpz = (_mpz * 1)
                  let mlz = (_mlz * 1)
                  let hmz = (_hmz * 1)
                  let lmz = (_lmz * 1)
                  let ebz = (_ebz * 1)
                  let Mychatz = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmz > 0 ? `\nMoney: ${mmz}` : ''}${mez > 0 ? `\nExp: ${mez} *exp*` : ''}${ebz > 0 ? `\nEmasBiasa: ${ebz} *emasbiasa*` : ''}${mpz > 0 ? `\nPotion: ${mpz} *potion*` : ''}${hmz > 0 ? `\nTiketM: ${hmz} *tiketm*` : ''}${lmz > 0 ? `\nMakanan Pet: ${lmz} *makananpet*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].boxs >= 1) {
                     global.db.data.users[m.sender].boxs -= 1
                     global.db.data.users[m.sender].money += mmz * 1
                     global.db.data.users[m.sender].exp += mez * 1
                     global.db.data.users[m.sender].potion += mpz * 1
                     global.db.data.users[m.sender].healtmonster += hmz * 1
                     global.db.data.users[m.sender].makananpet += lmz * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatz)
                     if (bbbz > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${bbbz} Boxs Crate`)
                        global.db.data.users[m.sender].boxs += bbbz * 1
                     }
                     if (mlz > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${mlz} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += mlz * 1
                     }
                  }
                  else m.reply('Boxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimed} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimedo = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedo = (30000 - __lastimedo)
               let lastimedo = clockString(_lastimedo)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mme = `${Math.floor(Math.random() * 5000)}`.trim()
                  let _bbbe = `${Math.floor(Math.random() * 4)}`.trim()
                  let _mee = `${Math.floor(Math.random() * 2500)}`.trim()
                  let _mpe = `${Math.floor(Math.random() * 6)}`.trim()
                  let _lme = `${Math.floor(Math.random() * 8)}`.trim()
                  let _hme = `${Math.floor(Math.random() * 10)}`.trim()
                  let _mle = `${Math.floor(Math.random() * 3)}`.trim()
                  let _ebe = `${Math.floor(Math.random() * 8)}`.trim()
                  let mme = (_mme * 1)
                  let bbbe = (_bbbe * 1)
                  let mee = (_mee * 1)
                  let mpe = (_mpe * 1)
                  let mle = (_mle * 1)
                  let hme = (_hme * 1)
                  let lme = (_lme * 1)
                  let ebe = (_ebe * 1)
                  let Mychate = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mme > 0 ? `\nMoney: ${mme}` : ''}${mee > 0 ? `\nExp: ${mee} *exp*` : ''}${ebe > 0 ? `\nEmasBiasa: ${ebe} *emasbiasa*` : ''}${mpe > 0 ? `\nPotion: ${mpe} *potion*` : ''}${hme > 0 ? `\nTiketM: ${hme} *tiketm*` : ''}${lme > 0 ? `\nMakanan Pet: ${lme} *makananpet*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].boxs >= 10) {
                     global.db.data.users[m.sender].boxs -= 10
                     global.db.data.users[m.sender].money += mme * 1
                     global.db.data.users[m.sender].exp += mee * 1
                     global.db.data.users[m.sender].potion += mpe * 1
                     global.db.data.users[m.sender].healtmonster += hme * 1
                     global.db.data.users[m.sender].makananpet += lme * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychate)
                     if (bbbe > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${bbbe} Boxs Crate`)
                        global.db.data.users[m.sender].boxs += bbbe * 1
                     }
                     if (mle > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${mle} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += mle * 1
                     }
                  }
                  else m.reply('Boxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedo} lagi untuk bisa membuka fitur open`)
               break
            case '100':
               let __lastimedoo = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedoo = (30000 - __lastimedoo)
               let lastimedoo = clockString(_lastimedoo)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mmk = `${Math.floor(Math.random() * 50000)}`.trim()
                  let _bbbk = `${Math.floor(Math.random() * 10)}`.trim()
                  let _mek = `${Math.floor(Math.random() * 40000)}`.trim()
                  let _mpk = `${Math.floor(Math.random() * 16)}`.trim()
                  let _lmk = `${Math.floor(Math.random() * 12)}`.trim()
                  let _hmk = `${Math.floor(Math.random() * 30)}`.trim()
                  let _mlk = `${Math.floor(Math.random() * 5)}`.trim()
                  let _ebk = `${Math.floor(Math.random() * 14)}`.trim()
                  let mmk = (_mmk * 1)
                  let bbbk = (_bbbk * 1)
                  let mek = (_mek * 1)
                  let mpk = (_mpk * 1)
                  let mlk = (_mlk * 1)
                  let hmk = (_hmk * 1)
                  let lmk = (_lmk * 1)
                  let ebk = (_ebk * 1)
                  let Mychatp = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmk > 0 ? `\nMoney: ${mmk}` : ''}${mek > 0 ? `\nExp: ${mek} *exp*` : ''}${ebk > 0 ? `\nEmasBiasa: ${ebk} *emasbiasa*` : ''}${mpk > 0 ? `\nPotion: ${mpk} *potion*` : ''}${hmk > 0 ? `\nTiketM: ${hmk} *tiketm*` : ''}${lmk > 0 ? `\nMakanan Pet: ${lmk} *makananpet*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].boxs >= 100) {
                     global.db.data.users[m.sender].boxs -= 100
                     global.db.data.users[m.sender].money += mmk * 1
                     global.db.data.users[m.sender].exp += mek * 1
                     global.db.data.users[m.sender].potion += mpk * 1
                     global.db.data.users[m.sender].healtmonster += hmk * 1
                     global.db.data.users[m.sender].makananpet += lmk * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatp)
                     if (bbbk > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${bbbk} Boxs Crate`)
                        global.db.data.users[m.sender].boxs += bbbk * 1
                     }
                     if (mlk > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${mlk} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += mlk * 1
                     }
                  }
                  else m.reply('Boxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedoo} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
               let __lastimedooo = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedooo = (30000 - __lastimedooo)
               let lastimedooo = clockString(_lastimedooo)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _mmo = `${Math.floor(Math.random() * 500000)}`.trim()
                  let _bbbo = `${Math.floor(Math.random() * 50)}`.trim()
                  let _meo = `${Math.floor(Math.random() * 400000)}`.trim()
                  let _mpo = `${Math.floor(Math.random() * 100)}`.trim()
                  let _lmo = `${Math.floor(Math.random() * 100)}`.trim()
                  let _hmo = `${Math.floor(Math.random() * 100)}`.trim()
                  let _mlo = `${Math.floor(Math.random() * 50)}`.trim()
                  let _ebo = `${Math.floor(Math.random() * 100)}`.trim()
                  let mmo = (_mmo * 1)
                  let bbbo = (_bbbo * 1)
                  let meo = (_meo * 1)
                  let mpo = (_mpo * 1)
                  let mlo = (_mlo * 1)
                  let hmo = (_hmo * 1)
                  let lmo = (_lmo * 1)
                  let ebo = (_ebo * 1)
                  let Mychatk = `
Anda telah membuka *Boxs crate* dan mendapatkan:${mmo > 0 ? `\nMoney: ${mmo}` : ''}${meo > 0 ? `\nExp: ${meo} *exp*` : ''}${ebo > 0 ? `\nEmasBiasa: ${ebo} *emasbiasa*` : ''}${mpo > 0 ? `\nPotion: ${mpo} *potion*` : ''}${hmo > 0 ? `\nTiketM: ${hmo} *tiketm*` : ''}${lmo > 0 ? `\nMakanan Pet: ${lmo} *makananpet*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].boxs >= 1000) {
                     global.db.data.users[m.sender].boxs -= 1000
                     global.db.data.users[m.sender].money += mmo * 1
                     global.db.data.users[m.sender].emasbiasa += ebo * 1
                     global.db.data.users[m.sender].exp += meo * 1
                     global.db.data.users[m.sender].potion += mpo * 1
                     global.db.data.users[m.sender].healtmonster += hmo * 1
                     global.db.data.users[m.sender].makananpet += lmo * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatk)
                     if (bbbo > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${bbbo} Boxs Crate`)
                        global.db.data.users[m.sender].boxs += bbbo * 1
                     }
                     if (mlo > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${mlo} Legendary Crate`)
                        global.db.data.users[m.sender].legendary += mlo * 1
                     }
                  }
                  else m.reply('Boxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedooo} lagi untuk bisa membuka fitur open`)
               break

            default:
               return m.reply(Lmao)
         }
         break
      case 'gardenboxs':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimedz = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedz = (30000 - __lastimedz)
               let lastimedz = clockString(_lastimedz)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _alp = `${Math.floor(Math.random() * 300)}`.trim()
                  let _blp = `${Math.floor(Math.random() * 300)}`.trim()
                  let _clp = `${Math.floor(Math.random() * 300)}`.trim()
                  let _dlp = `${Math.floor(Math.random() * 300)}`.trim()
                  let _elp = `${Math.floor(Math.random() * 300)}`.trim()
                  let alp = (_alp * 1)
                  let dlp = (_dlp * 1)
                  let clp = (_clp * 1)
                  let blp = (_blp * 1)
                  let elp = (_elp * 1)
                  let Mychatzi = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${alp > 0 ? `\nBibitmangga: ${alp}` : ''}${dlp > 0 ? `\nBibitpisang: ${dlp}` : ''}${elp > 0 ? `\nBibitanggur: ${elp}` : ''}${clp > 0 ? `\nBibitjeruk: ${clp}` : ''}${blp > 0 ? `\nBibitapel: ${blp}` : ''}
`.trim()
                  if (global.db.data.users[m.sender].gardenboxs >= 0) {
                     global.db.data.users[m.sender].gardenboxs -= 1
                     global.db.data.users[m.sender].bibitmangga += alp * 1
                     global.db.data.users[m.sender].bibitpisang += dlp * 1
                     global.db.data.users[m.sender].bibitjeruk += clp * 1
                     global.db.data.users[m.sender].bibitapel += blp * 1
                     global.db.data.users[m.sender].bibitanggur += elp * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatzi)
                  }
                  else m.reply('gardenboxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedz} lagi untuk bisa membuka fitur open`)
               break
            case '10':
            case 'crate':
               let __lastimedzx = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedzx = (30000 - __lastimedzx)
               let lastimedzx = clockString(_lastimedzx)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lks = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkd = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lke = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkr = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lky = `${Math.floor(Math.random() * 3000)}`.trim()
                  let lks = (_lks * 1)
                  let lkr = (_lkr * 1)
                  let lke = (_lke * 1)
                  let lkd = (_lkd * 1)
                  let lky = (_lky * 1)
                  let Mychatze = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lks > 0 ? `\nBibitmangga: ${lks}` : ''}${lkr > 0 ? `\nBibitpisang: ${lkr}` : ''}${lky > 0 ? `\nBibitanggur: ${lky}` : ''}${lke > 0 ? `\nBibitjeruk: ${lke}` : ''}${lkd > 0 ? `\nBibitapel: ${lkd}` : ''}
`.trim()
                  if (global.db.data.users[m.sender].gardenboxs >= 9) {
                     global.db.data.users[m.sender].gardenboxs -= 10
                     global.db.data.users[m.sender].bibitmangga += lks * 1
                     global.db.data.users[m.sender].bibitpisang += lkr * 1
                     global.db.data.users[m.sender].bibitjeruk += lke * 1
                     global.db.data.users[m.sender].bibitapel += lkd * 1
                     global.db.data.users[m.sender].bibitanggur += lky * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatze)
                  }
                  else m.reply('gardenboxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedzx} lagi untuk bisa membuka fitur open`)
               break
            case '100':
            case 'crate':
               let __lastimedzxy = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedzxy = (30000 - __lastimedzxy)
               let lastimedzxy = clockString(_lastimedzxy)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lksb = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkdb = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkeb = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkrb = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkyb = `${Math.floor(Math.random() * 3000)}`.trim()
                  let lksb = (_lksb * 1)
                  let lkrb = (_lkrb * 1)
                  let lkeb = (_lkeb * 1)
                  let lkdb = (_lkdb * 1)
                  let lkyb = (_lkyb * 1)
                  let Mychatzo = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lksb > 0 ? `\nBibitmangga: ${lksb}` : ''}${lkrb > 0 ? `\nBibitpisang: ${lkrb}` : ''}${lkyb > 0 ? `\nBibitanggur: ${lkyb}` : ''}${lkeb > 0 ? `\nBibitjeruk: ${lkeb}` : ''}${lkdb > 0 ? `\nBibitapel: ${lkdb}` : ''}
`.trim()
                  if (global.db.data.users[m.sender].gardenboxs >= 99) {
                     global.db.data.users[m.sender].gardenboxs -= 100
                     global.db.data.users[m.sender].bibitmangga += lksb * 1
                     global.db.data.users[m.sender].bibitpisang += lkrb * 1
                     global.db.data.users[m.sender].bibitjeruk += lkeb * 1
                     global.db.data.users[m.sender].bibitapel += lkdb * 1
                     global.db.data.users[m.sender].bibitanggur += lkyb * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatzo)
                  }
                  else m.reply('gardenboxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedzxy} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
            case 'crate':
               let __lastimedzxk = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimedzxk = (30000 - __lastimedzxk)
               let lastimedzxk = clockString(_lastimedzxk)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lksk = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkdk = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkek = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkrk = `${Math.floor(Math.random() * 3000)}`.trim()
                  let _lkyk = `${Math.floor(Math.random() * 3000)}`.trim()
                  let lksk = (_lksk * 1)
                  let lkrk = (_lkrk * 1)
                  let lkek = (_lkek * 1)
                  let lkdk = (_lkdk * 1)
                  let lkyk = (_lkyk * 1)
                  let Mychatzu = `
Anda telah membuka *Gardenboxs crate* dan mendapatkan:${lksk > 0 ? `\nBibitmangga: ${lksk}` : ''}${lkrk > 0 ? `\nBibitpisang: ${lkrk}` : ''}${lkyk > 0 ? `\nBibitanggur: ${lkyk}` : ''}${lkek > 0 ? `\nBibitjeruk: ${lkek}` : ''}${lkdk > 0 ? `\nBibitapel: ${lkdk}` : ''}
`.trim()
                  if (global.db.data.users[m.sender].gardenboxs >= 999) {
                     global.db.data.users[m.sender].gardenboxs -= 1000
                     global.db.data.users[m.sender].bibitmangga += lksk * 1
                     global.db.data.users[m.sender].bibitpisang += lkrk * 1
                     global.db.data.users[m.sender].bibitjeruk += lkek * 1
                     global.db.data.users[m.sender].bibitapel += lkdk * 1
                     global.db.data.users[m.sender].bibitanggur += lkyk * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mychatzu)
                  }
                  else m.reply('gardenboxs crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimedzxyk} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'cupon':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimeki = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeki = (30000 - __lastimeki)
               let lastimeki = clockString(_lastimeki)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let mm = 100000
                  let me = 100000
                  let mp = 50
                  // let mc = 50000
                  let mci = 50000
                  let Mochat = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm} *money*` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${mp > 0 ? `\nLimit: ${mp} *limit*` : ''}${mci > 0 ? `\nNabung Money: ${mci} *nabung money*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].cupon >= 1) {
                     global.db.data.users[m.sender].cupon -= 1
                     global.db.data.users[m.sender].money += mm * 1
                     global.db.data.users[m.sender].exp += me * 1
                     global.db.data.users[m.sender].limit += mp * 1
                     global.db.data.users[m.sender].bank += mci * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mochat)
                  }
                  else m.reply('Cupon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeki} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimekise = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimekise = (30000 - __lastimekise)
               let lastimekise = clockString(_lastimekise)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let mmse = 1000000
                  let mese = 1000000
                  let mpse = 500
                  //  let mcse = 500000
                  let mcise = 500000
                  let Mochatse = `
Anda telah membuka *Cupon crate* dan mendapatkan:${mmse > 0 ? `\nMoney: ${mmse} *money*` : ''}${mese > 0 ? `\nExp: ${mese} *exp*` : ''}${mpse > 0 ? `\nLimit: ${mpse} *limit*` : ''}${mcise > 0 ? `\nNabung Money: ${mcise} *nabung money*` : ''}
`.trim()

                  if (global.db.data.users[m.sender].cupon >= 10) {
                     global.db.data.users[m.sender].cupon -= 10
                     global.db.data.users[m.sender].money += mmse * 1
                     global.db.data.users[m.sender].exp += mese * 1
                     global.db.data.users[m.sender].limit += mpse * 1
                     global.db.data.users[m.sender].bank += mcise * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Mochatse)
                  }
                  else m.reply('Cupon crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimekise} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'legendary':
         switch (jumlah) {
            case '1':
            case 'crate':
               let __lastimel = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimel = (30000 - __lastimel)
               let lastimel = clockString(_lastimel)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lm = `${Math.floor(Math.random() * 450)}`.trim()
                  let _le = `${Math.floor(Math.random() * 550)}`.trim()
                  let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                  let _lu = `${Math.floor(Math.random() * 7)}`.trim()
                  let _lc = `${Math.floor(Math.random() * 10)}`.trim()
                  let _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                  let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                  let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                  let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                  let lm = (_lm * 1)
                  let le = (_le * 1)
                  let lp = (_lp * 1)
                  let lu = (_lu * 1)
                  let lc = (_lc * 1)
                  let ll = (_ll * 1)
                  let lpp = (_lpp * 1)
                  let ld = (_ld * 1)
                  let lmm = (_lmm * 1)
                  let Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm > 0 ? `\nMoney: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}${lc > 0 ? `\nCommon crate: ${lc} *crate*` : ''}${lu > 0 ? `\nUncommon crate: ${lu} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].legendary >= 1) {
                     global.db.data.users[m.sender].legendary -= 1
                     global.db.data.users[m.sender].money += lm * 1
                     global.db.data.users[m.sender].diamond += ld * 1
                     global.db.data.users[m.sender].exp += le * 1
                     global.db.data.users[m.sender].potion += lp * 1
                     global.db.data.users[m.sender].common += lc * 1
                     global.db.data.users[m.sender].uncommon += lu * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Lechat)
                     if (lmm > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += lmm * 1
                     }
                     if (ll > 0 || lpp > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} Legendary Crate` : ''}${lpp > 0 ? `\n${lpp} Pet Crate` : ''}`)
                        global.db.data.users[m.sender].legendary += ll * 1
                        global.db.data.users[m.sender].pet += lpp * 1
                     }
                  }
                  else m.reply('Legendary crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimel} lagi untuk bisa membuka fitur open`)
               break
            case '10':
               let __lastimele = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimele = (30000 - __lastimele)
               let lastimele = clockString(_lastimele)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lm1 = `${Math.floor(Math.random() * 10000)}`.trim()
                  let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                  let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                  let _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
                  let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                  let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                  let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                  let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                  let lm1 = (_lm1 * 1)
                  let le1 = (_le1 * 1)
                  let lp1 = (_lp1 * 1)
                  let lu1 = (_lu1 * 1)
                  let lc1 = (_lc1 * 1)
                  let ll1 = (_ll1 * 1)
                  let lpp1 = (_lpp1 * 1)
                  let ld1 = (_ld1 * 1)
                  let lmm1 = (_lmm1 * 1)
                  let Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm1 > 0 ? `\nMoney: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}${lc1 > 0 ? `\nCommon crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\nUncommon crate: ${lu1} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].legendary >= 10) {
                     global.db.data.users[m.sender].legendary -= 10
                     global.db.data.users[m.sender].money += lm1 * 1
                     global.db.data.users[m.sender].diamond += ld1 * 1
                     global.db.data.users[m.sender].exp += le1 * 1
                     global.db.data.users[m.sender].potion += lp1 * 1
                     global.db.data.users[m.sender].common += lc1 * 1
                     global.db.data.users[m.sender].uncommon += lu1 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Lechat1)
                     if (lmm1 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += lmm1 * 1
                     }
                     if (ll1 > 0 || lpp1 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} Legendary Crate` : ''}${lpp1 > 0 ? `\n${lpp1} Pet Crate` : ''}`)
                        global.db.data.users[m.sender].legendary += ll1 * 1
                        global.db.data.users[m.sender].pet += lpp1 * 1
                     }
                  }
                  else m.reply('Legendary crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimele} lagi untuk bisa membuka fitur open`)
               break
            case '100':
               let __lastimelee = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimelee = (30000 - __lastimelee)
               let lastimelee = clockString(_lastimelee)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lm2 = `${Math.floor(Math.random() * 100000)}`.trim()
                  let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                  let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                  let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
                  let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
                  let _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
                  let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                  let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                  let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                  let lm2 = (_lm2 * 1)
                  let le2 = (_le2 * 1)
                  let lp2 = (_lp2 * 1)
                  let lu2 = (_lu2 * 1)
                  let lc2 = (_lc2 * 1)
                  let ll2 = (_ll2 * 1)
                  let lpp2 = (_lpp2 * 1)
                  let ld2 = (_ld2 * 1)
                  let lmm2 = (_lmm2 * 1)
                  let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMoney: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].legendary >= 100) {
                     global.db.data.users[m.sender].legendary -= 100
                     global.db.data.users[m.sender].money += lm2 * 1
                     global.db.data.users[m.sender].diamond += ld2 * 1
                     global.db.data.users[m.sender].exp += le2 * 1
                     global.db.data.users[m.sender].potion += lp2 * 1
                     global.db.data.users[m.sender].common += lc2 * 1
                     global.db.data.users[m.sender].uncommon += lu2 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Lechat2)
                     if (lmm2 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += lmm2 * 1
                     }
                     if (ll2 > 0 || lpp2 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`)
                        global.db.data.users[m.sender].legendary += ll2 * 1
                        global.db.data.users[m.sender].pet += lpp2 * 1
                     }
                  }
                  else m.reply('Legendary crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimelee} lagi untuk bisa membuka fitur open`)
               break
            case '1000':
               let __lastimeleee = (new Date - global.db.data.users[m.sender].lastopen)
               let _lastimeleee = (30000 - __lastimeleee)
               let lastimeleee = clockString(_lastimeleee)
               if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
                  let _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
                  let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                  let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                  let _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
                  let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
                  let _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
                  let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                  let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                  let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                  let lm3 = (_lm3 * 1)
                  let le3 = (_le3 * 1)
                  let lp3 = (_lp3 * 1)
                  let lu3 = (_lu3 * 1)
                  let lc3 = (_lc3 * 1)
                  let ll3 = (_ll3 * 1)
                  let lpp3 = (_lpp3 * 1)
                  let ld3 = (_ld3 * 1)
                  let lmm3 = (_lmm3 * 1)
                  let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMoney: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
`.trim()
                  if (global.db.data.users[m.sender].legendary >= 1000) {
                     global.db.data.users[m.sender].legendary -= 1000
                     global.db.data.users[m.sender].money += lm3 * 1
                     global.db.data.users[m.sender].diamond += ld3 * 1
                     global.db.data.users[m.sender].exp += le3 * 1
                     global.db.data.users[m.sender].potion += lp3 * 1
                     global.db.data.users[m.sender].common += lc3 * 1
                     global.db.data.users[m.sender].uncommon += lu3 * 1
                     global.db.data.users[m.sender].lastopen = new Date * 1
                     m.reply(Lechat3)
                     if (lmm3 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`)
                        global.db.data.users[m.sender].mythic += lmm3 * 1
                     }
                     if (ll3 > 0 || lpp3 > 0) {
                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`)
                        global.db.data.users[m.sender].legendary += ll3 * 1
                        global.db.data.users[m.sender].pet += lpp3 * 1
                     }
                  }
                  else m.reply('Legendary crate anda tidak cukup')
               }
               else m.reply(`Mohon tunggu ${lastimeleee} lagi untuk bisa membuka fitur open`)
               break
            default:
               return m.reply(Lmao)
         }
         break
      case 'pet':
         let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
         let mknp = (_mknp * 1)
         let kucing = global.db.data.users[m.sender].kucing
         let rubah = global.db.data.users[m.sender].rubah
         let kuda = global.db.data.users[m.sender].kuda
         let serigala = global.db.data.users[m.sender].serigala
         let naga = global.db.data.users[m.sender].naga
         let phonix = global.db.data.users[m.sender].phonix
         let kyubi = global.db.data.users[m.sender].kyubi
         let griffin = global.db.data.users[m.sender].griffin
         let centaur = global.db.data.users[m.sender].centaur
         let _pet = `${pickRandom(['kucing', 'rubah','serigala','naga','centaur','phonix','kuda','griffin','kyubi'])}`.trim()
         let randpet = `${pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'Upps gadapat pet'])}`.trim()
         let __lastimepet = (new Date - global.db.data.users[m.sender].lastopen)
         let _lastimepet = (30000 - __lastimepet)
         let lastimepet = clockString(_lastimepet)
         if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
            global.db.data.users[m.sender].lastopen = new Date * 1
            if (global.db.data.users[m.sender].pet > 0) {
               global.db.data.users[m.sender].pet -= 1
               if (_pet == 'kucing' && kucing > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'kucing' && kucing == 0) {
                  global.db.data.users[m.sender].kucing += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'rubah' && rubah > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'rubah' && rubah == 0) {
                  global.db.data.users[m.sender].rubah += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'naga' && naga > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'naga' && naga == 0) {
                  global.db.data.users[m.sender].naga += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'phonix' && phonix > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'phonix' && phonix == 0) {
                  global.db.data.users[m.sender].phonix += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'kyubi' && kyubi > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makanankyubi += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'kyubi' && kyubi == 0) {
                  global.db.data.users[m.sender].kyubi += 1
                  global.db.data.users[m.sender].makanankyubi += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'centaur' && centaur > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makanancentaur += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'centaur' && centaur == 0) {
                  global.db.data.users[m.sender].centaur += 1
                  global.db.data.users[m.sender].makanancentaur += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'griffin' && griffin > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makanangriffin += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'griffin' && griffin == 0) {
                  global.db.data.users[m.sender].griffin += 1
                  global.db.data.users[m.sender].makanangriffin += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'serigala' && serigala > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'serigala' && serigala == 0) {
                  global.db.data.users[m.sender].serigala += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else if (_pet == 'kuda' && kuda > 0) {
                  global.db.data.users[m.sender].potion += 2
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`)
               }
               else if (_pet == 'kuda' && kuda == 0) {
                  global.db.data.users[m.sender].kuda += 1
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
               }
               else {
                  global.db.data.users[m.sender].makananpet += mknp * 1
                  m.reply(randpet + 'Anda hanya mendapatkan *' + mknp + '* makanan pet')
               }
            }
            else m.reply('Pet Crate kamu tidak cukup')
         }
         else m.reply(`Mohon tunggu ${lastimepet} lagi untuk bisa membuka fitur open`)
         break
      default:
         return m.reply(bruh)
   }
}

const tebakgambar = async (tebakgambar, alpha, m, lang, fetchJson, ownername) => {
   if (tebakgambar[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakgambar[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tebakgambar[m.chat] = [
      await alpha.sendMessage(m.chat, {image:{url: result.img}, caption: lang.TbGambar(result.deskripsi, (120000 / 1000).toFixed(2), 4999)},{quoted: m}
      ), result, 4999,
      setTimeout(() => {
         if (tebakgambar[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakgambar',
               buttonText: {
                  displayText: lang.TbGam()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tebakgambar[m.chat]
         }
      }, 120000)
   ]
}
const tebakkata = async (tebakkata, alpha, m, lang, fetchJson, ownername) => {
   if (tebakkata[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakkata[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tebakkata[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tebakkata[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakkata',
               buttonText: {
                  displayText: lang.TbKa()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tebakkata[m.chat]
         }
      }, 120000)
   ]
}
const tebakbendera = async (tebakbendera, alpha, m, lang, fetchJson, ownername) => {
   if (tebakbendera[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakbendera[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.name)
   tebakbendera[m.chat] = [
      await alpha.sendMessage(m.chat, {image:{url:result.img}, caption: lang.TbBendera((120000 / 1000).toFixed(2), 4999)}, {quoted: m}), 
      result, 4999,
      setTimeout(() => {
         if (tebakbendera[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakbendera',
               buttonText: {
                  displayText: lang.TbBe()
               },
               type: 1
            }], lang.TbGambar_(result.name), `© ${ownername}`, m)
            delete tebakbendera[m.chat]
         }
      }, 120000)
   ]
}
const tebakkalimat = async (tebakkalimat, alpha, m, lang, fetchJson, ownername) => {
   if (tebakkalimat[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakkalimat[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tebakkalimat[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tebakkalimat[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakkalimat',
               buttonText: {
                  displayText: lang.TbAt()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tebakkalimat[m.chat]
         }
      }, 120000)
   ]
}
const tebaksiapa = async (siapaaku, alpha, m, lang, fetchJson, ownername) => {
   if (siapaaku[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: siapaaku[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   siapaaku[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (siapaaku[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebaksiapa',
               buttonText: {
                  displayText: lang.TbSi()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete siapaaku[m.chat]
         }
      }, 120000)
   ]
}
const tebakkabupaten = async (tebakkabupaten, alpha, m, lang, fetchJson, ownername) => {
   if (tebakkabupaten[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakkabupaten[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.title)
   tebakkabupaten[m.chat] = [
      await alpha.sendMedia(m.chat, result.url, '', m, {
         caption: lang.TbKabupaten((120000 / 1000).toFixed(2), 4999)
      }), result, 4999,
      setTimeout(() => {
         if (tebakkabupaten[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakkabupaten',
               buttonText: {
                  displayText: lang.TbEn()
               },
               type: 1
            }], lang.TbGambar_(result.title), `© ${ownername}`, m)
            delete tebakkabupaten[m.chat]
         }
      }, 120000)
   ]
}
const tebakkimia = async (tebakkimia, alpha, m, lang, fetchJson, ownername) => {
   if (tebakkimia[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebakkimia[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.unsur)
   tebakkimia[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKimia(result.lambang, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tebakkimia[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebakkimia',
               buttonText: {
                  displayText: lang.TbKi()
               },
               type: 1
            }], lang.TbGambar_(result.unsur), `© ${ownername}`, m)
            delete tebakkimia[m.chat]
         }
      }, 120000)
   ]
}
const tebaklirik = async (tebaklirik, alpha, m, lang, fetchJson, ownername) => {
   if (tebaklirik[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebaklirik[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tebaklirik[m.chat] = [
      await alpha.sendText(m.chat, lang.TbLirik(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tebaklirik[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebaklirik',
               buttonText: {
                  displayText: lang.TbLi()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tebaklirik[m.chat]
         }
      }, 120000)
   ]
}
const tebaktebakan = async (tebaktebakan, alpha, m, lang, fetchJson, ownername) => {
   if (tebaktebakan[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tebaktebakan[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tebaktebakan[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tebaktebakan[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tebaktebakan',
               buttonText: {
                  displayText: lang.TbKan()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tebaktebakan[m.chat]
         }
      }, 120000)
   ]
}
const caklontong = async (caklontong, alpha, m, lang, fetchJson, ownername) => {
   const iio = require('@bochilteam/scraper')
   if (caklontong[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: caklontong[m.chat][0]
   })
   let result = await iio.caklontong()
   console.log("Jawaban: " + result.jawaban)
   caklontong[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (caklontong[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.caklontong',
               buttonText: {
                  displayText: lang.TbCak()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete caklontong[m.chat]
         }
      }, 120000)
   ]
}
const susunkata = async (susunkata, alpha, m, lang, fetchJson, ownername) => {
   if (susunkata[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: susunkata[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   susunkata[m.chat] = [
      await alpha.sendText(m.chat, lang.TbSusun(result.soal, result.tipe, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (susunkata[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.susunkata',
               buttonText: {
                  displayText: lang.TbSu()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete susunkata[m.chat]
         }
      }, 120000)
   ]
}
const tekateki = async (tekateki, alpha, m, lang, fetchJson, ownername) => {
   if (tekateki[m.chat]) return alpha.sendMessage(m.chat, {
      text: lang.Family()
   }, {
      quoted: tekateki[m.chat][0]
   })
   let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
   let result = anu[Math.floor(Math.random() * anu.length)]
   console.log("Jawaban: " + result.jawaban)
   tekateki[m.chat] = [
      await alpha.sendText(m.chat, lang.TbKata(result.soal, (120000 / 1000).toFixed(2), 4999), m), result, 4999,
      setTimeout(() => {
         if (tekateki[m.chat]) {
            alpha.sendButtonText(m.chat, [{
               buttonId: '.tekateki',
               buttonText: {
                  displayText: lang.Tbte()
               },
               type: 1
            }], lang.TbGambar_(result.jawaban), `© ${ownername}`, m)
            delete tekateki[m.chat]
         }
      }, 120000)
   ]
}
const animeinfo = async (text, m, lang, fetch, prefix, command, sendFileFromUrl) => {
   if (!text) return m.reply(lang.KisahNabi(prefix, command, 'loli'))
   let res = await fetch(global.api('https://api.jikan.moe', '/v4/anime', {
      q: text
   }))

   if (!res.ok) return m.reply('Not Found')
   let json = await res.json()
   if (!json.data[0]) return m.reply('Not found')
   let {
      title,
      members,
      synopsis,
      episodes,
      url,
      rating,
      score,
      images,
      type,
      start_date,
      end_date,
      mal_id
   } = json.data[0]
   if (!mal_id) m.reply('Not found')
   let animeingfo = `📚 *Title:* ${title}
🎆 *Episode:* ${episodes}
✉️ *Transmisi:* ${type}
🌟 *Rating:* ${rating}
🧮 *Score:* ${score}
👥 *Members:* ${members}
💬 *Sinopsis:* ${synopsis}
`
   sendFileFromUrl(m.chat, images.jpg.image_url, animeingfo, m)
}
const jadiantembak = async (alpha, text, m, reply, prefix) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return reply(`Masukan nomor, tag atau balas pesan member yang ingin kamu ajak pacaran`)
  
  if(isNaN(number)) return reply(`_*Nomor tidak valid.*_`)
  if(number.length > 15) return reply(`*_Format Tidak Valid.*_`)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
    if(user === m.sender) return reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
    if(user === alpha.user.jid) return reply(`_*Bot gk mau pacaran*_`)

    if (typeof global.db.data.users[user] == "undefined") return reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")
    
    if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
      alpha.sendMessage(m.chat, {text :`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putus untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}`, mentions: [user,global.db.data.users[m.sender].pasangan]})
    }else if(global.db.data.users[user].pasangan != ""){
      var pacar = global.db.data.users[user].pasangan
      if (global.db.data.users[pacar].pasangan == user){
        if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return alpha.sendMessage(m.chat, {text: `Anda sudah berpacaran dengan @${beb.split('@')[0]}`, mentions: [beb]})

        alpha.sendMessage(m.chat, {text: `Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,mentions: [user,pacar]})
      }else{
        global.db.data.users[m.sender].pasangan = user
        alpha.sendMessage(m.chat, {text: `Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terima @user* untuk menerima\n*${prefix}tolak @user untuk menolak*`, mentions: [user]})
      }
    }else if (global.db.data.users[user].pasangan == m.sender){
      global.db.data.users[m.sender].pasangan = user
      alpha.sendMessage(m.chat,{text: `Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng 🦖`, mentions: [user]})
    }else {
      global.db.data.users[m.sender].pasangan = user
      alpha.sendMessage(m.chat, {text: `Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terima @user* untuk menerima\n*${prefix}tolak @user untuk menolak*`,mentions: [user]})
    }
	}	
}
const jadianterima = async (alpha, text, m, reply, prefix) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return reply(`Masukkan nomor, tag atau balas pesan member`)
  
  if(isNaN(number)) return reply(`Nomor tidak valid!`)
  if(number.length > 15) return reply(`Format salah!`)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
    if(user === m.sender) return reply(`Tidak bisa berpacaran dengan diri sendiri!`)
    if(user === alpha.user.jid) return reply(`Bot tidak ingin berpacaran`)
    
    if(global.db.data.users[user].pasangan != m.sender){
      alpha.sendMessage(m.chat,{text: `Maaf @${user.split('@')[0]} tidak pernah menembak anda`,mentions: [user]})
    }else{
      global.db.data.users[m.sender].pasangan = user
      alpha.sendMessage(m.chat,{text: `Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng @${user.split('@')[0]} 💓 @${m.sender.split('@')[0]}`,mentions: [m.sender,user]})
    }
  }
}
const jadiantolak = async (alpha, text, m, reply, prefix) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return reply(`Masukkan nomor, tag atau balas pesan member`)
  
  if(isNaN(number)) return reply(`Nomor tidak valid!`)
  if(number.length > 15) return reply(`Format salah!`)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
    if(user === m.sender) return reply(`Tidak bisa berpacaran dengan diri sendiri!`)
    if(user === alpha.user.jid) return reply(`Bot tidak ingin berpacaran`)
    
    if(global.db.data.users[user].pasangan != m.sender){
      alpha.sendMessage(m.chat,{text: `Maaf @${user.split('@')[0]} tidak sedang menembak anda`,mentions: [user]})
    }else{
      global.db.data.users[user].pasangan = ""
      alpha.sendMessage(m.chat, {text: `Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan!`,mentions: [user]})
    }
	}	
}
const jadianikhlas = async (alpha, text, m, reply, prefix) => {
  if (global.db.data.users[m.sender].pasangan == "") return reply(`Kamu sedang tidak pernah mengajak pacaran siapapun!`)
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return alpha.sendMessage(m.chat, {text: `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, mentions: [global.db.data.users[m.sender].pasangan]})
  alpha.sendMessage(m.chat, {text: `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban`, mentions: [global.db.data.users[m.sender].pasangan]})
  global.db.data.users[m.sender].pasangan = ""
}    
const jadiancek = async (alpha, text, m, reply, prefix) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return reply(`Nomor tidak valid!`)

  if (!text && !m.quoted){
    user = m.sender
    orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    orang = "Orang yang kamu reply"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return reply("Target tidak terdaftar di dalam database!")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return reply("Target tidak terdaftar di dalam database!")
  }

  if (global.db.data.users[user].pasangan == "") {
    reply(`${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembak @user untuk menembak seseorang*`)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    alpha.sendMessage(m.chat, {text: `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasin* untuk mengikhlaskan!`, mentions: [global.db.data.users[user].pasangan]})
  }else {
    alpha.sendMessage(m.chat,{text:`${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} 💓`, mentions: [global.db.data.users[user].pasangan]})
  }
}
const jadianputus = async (alpha, text, m, reply, prefix) => {
  ayg = global.db.data.users[m.sender]

  if(ayg.pasangan == ""){
    return reply(`Anda tidak memiliki pasangan.`)
  }
  
  beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if (typeof beb == "undefined"){
    alpha.sendMessage(m.chat, {text:`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,mentions: [global.db.data.users[m.sender].pasangan]})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    alpha.sendMessage(m.chat, {text: `Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,mentions: [global.db.data.users[m.sender].pasangan]})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    reply(`Anda tidak memiliki pasangan.`)
  }
}
const levelup = async (alpha, pushname, m, reply, ownername) => {
let user = db.data.users[m.sender]
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        reply(`
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim())
    }
    else {
    let before = user.level * 1
    if (before !== user.level) {
        user.role = global.rpg.role(user.level).name
        let teks = `🎉 Congrats ${pushname} kamu naik level`
        let str = `
${teks} 
-> Level Sebelumnya : ${before}
-> Level Baru : ${user.level}
-> Role Kamu : ${user.role}
-> Pada Jam : ${new Date().toLocaleString('id-ID')}
`.trim()
alpha.send2ButMes(m.chat, str, '© ' + ownername, '.gamemenu', '🎮 Games', '.inv', 'Inventory 🎉', m)
    }
    }
}

module.exports = {
  levelup,
  jadiantembak,
  jadianterima,
  jadiantolak,
  jadianikhlas,
  jadiancek,
  jadianputus,
   tebakgambar,
   tebakkata,
   tebakbendera,
   tebakkalimat,
   tebaksiapa,
   tebakkabupaten,
   tebakkimia,
   tebaklirik,
   tebaktebakan,
   caklontong,
   susunkata,
   tekateki,
   animeinfo,
   adventure,
   weekly,
   use,
   transfer,
   slot,
   shop,
   pasar,
   ojek,
   openc,
   nguli,
   narik,
   nabung,
   monthly,
   mining,
   merampok,
   mancing,
   kolam,
   koboy,
   kerja,
   kandang,
   judi,
   inventory,
   hourly,
   fishop,
   feed,
   duel,
   daily,
   craft,
   cooldown,
   cook,
   collect,
   chop,
   casino,
   berburu,
   buy,
   bank,
   bansos,
   berdagang,
   berkebon,
   build
}