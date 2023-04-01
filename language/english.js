//I only use google translate, so if there is an error please correct it 
exports.DelSetWel = `Success delete set welcome in this group`
exports.NoSetWel = `There is no welcome set in this group yet`
exports.DelSetLeft = `Success delete set goodbye in this group`
exports.NoSetLeft = `There is no set goodbye yet in this group`
exports.doneSet = `It's been changed before`
exports.serverErr = `Server is down!`
exports.limitLu = (m) =>{
	return`Your remaining limit : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} with key ${b} already in the database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} with key ${b} not in database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal_, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Name: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Number: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal_(regTime) + ')': '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal_(lastclaim) : ''}`
	}

exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



🇺🇲 Please register first



Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Your limit today has run out ⚠️\n\nPlease buy a limit by typing ${prefix}buy or ${prefix}buyall`
	}
exports.i = () =>{
	return`The serial number (sn) is wrong\n.ceksn -- _check serial number_`
	}
exports.NoseriOk = () =>{
	return`Successfully cancel registration!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



🇺🇲 Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`You are already registered in the database`
	}
exports.UmurReg = () =>{
	return`Age must be a number`
	}
exports.NamaReg = () =>{
	return`Your name is really long, just use your first name`
	}
exports.HobiReg = () =>{
	return`You have a lot of hobbies, just 1 or 2 hobbies`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *SUCCESSFUL VERIFICATION* 」
│\`\`\`Verification Success With\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`On : ${b}\`\`\`
│\`\`\`Name : ${c}\`\`\`
│\`\`\`Age : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Number : @${f}\`\`\`
│\`\`\`To use bot Please \`\`\`
│\`\`\`Send command ${g}menu\`\`\`
│\`\`\`or ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Select one ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`You are too old`
	}
exports.firstChat = (a, b, c) =>{
	return`Hi ${a} ${b} 🤗, I am ${c} whatsapp bots. Can i help u?`
	}

exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Success Add ${q} Into Database ${a}\n\nCheck with command ${prefix}${b}`
	}

exports.Addvn = () =>{
	return`Wait a minute, I will try to upload this media to the database`
	}

exports.AddstikOk_ = (a, b) =>{
	return`The duration is ${a} seconds, which is the maximum ${b} duration that bots can save into the database`
	}

exports.ListStik = (a) =>{
	return`_To take ${a} please send a message according to the list of ${a} the one above_`
	}


exports.noAbsen = () =>{
return `❌ No absences take place in this group!\n.absen -- start absen`
}
exports.StartAbsen = () =>{
	return`Start Absence`
	}
exports.DahAbsen = () =>{
	return`You're absent`
	}
exports.DelAbsen = () =>{
	return`✅ Successfully deleted absences in this group`
	}
exports.adaAbsen = () =>{
	return`There are still absent sessions in this group!`
	}
exports.SAbsen = () =>{
	return`Absence begins`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Must be accompanied by a Prefix!!*`
	}
exports.CmdApa = () =>{
	return`For What Command?`
	}
exports.UCmd = () =>{
	return`You don't have permission to modify this sticker order`
	}
exports.HashCmd = () =>{
	return`No hashes`
	}
exports.DelCmd = () =>{
	return`✅ The cmd sticker has been removed`
	}
exports.LockCmd = () =>{
	return`Reply message`
	}
exports.NoCmd = () =>{
	return`Hash not found in database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message You Want To Save In Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Example : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' has been registered in the message list`
}
exports.DoneMsg = (prefix, text) => {
    return `Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' not listed in the message list`
}
exports.DelMsg = (text) => {
    return `Delete successfully '${text}' from the message list`
}

exports.OnBef = () => {
    return `It's been activated before`
}
exports.OffYaBef = () => {
    return `It's been deactivated before`
}
exports.OkOn = (command) => {
    return `${command} Successfully Activated !`
}
exports.OffBef = (command) => {
    return `${command} Successfully Deactivated !`
}
exports.OkMute = () => {
    return `Bot has been muted in this group`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send command ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `This question is not finished!`
}
exports.NoWm = (prefix, command) => {
    return `Send command ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send command ${prefix + command} *teks*\n\nExample : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send command ${prefix + command} *teks 1|teks 2*\n\nExample : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Example : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Example : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Example : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Example: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Example: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Example: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Example : ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Send orders: \n${prefix + command} ${style2}\n\nExamples of use:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Example : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Example : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Wrong answer`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nCorrect answer 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Please Answer The Question Above\n\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `The picture above is a picture of the district?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send command ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send command ${prefix + command} *language code* *teks*
	• Example : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	• Example : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${key}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `✅ Successfully stopped chat\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = () => {
    return `⚠️ This chat session has been terminated by your chat friend\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = () => {
    return `️ You are still in a chat session with a partner\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found 🐼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `🔎 Please wait looking for chat friends\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = () => {
    return `⚠️ You've never started a chat!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Reply to the audio you want to change with caption *${prefix + command}*`
}
exports.NoTagBan = () => {
    return `Usage examples :\n${prefix + command} 62938828728992 \nor\n${prefix + command} @tagmember`
}

exports.getBan = (a) => {
    return `⚠️ Sorry, your number has been banned by the owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} with caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}

exports.AllFitur = () => {
    return `\nAll bot features`
}
exports.InfoMenu = () => {
    return `\n_Looking for the latest information via bot_`
}
exports.KhususOwn = () => {
    return `\n_Owner Bots Special Features_`
}
exports.DataBor = () => {
    return `\n_Storing something in the bot database_`
}
exports.MenuGc = () => {
    return `\n_Show group specific features_`
}
exports.MenuAni = () => {
    return `\n_Looking for random anime pictures_`
}
exports.TagMem = () => {
    return `\n_Tag group member_`
}
exports.StalkOrk = () => {
    return `\n_People's social media stalking_`
}
exports.Hoja = () => {
    return `\n_Looking for something unimportant_`
}
exports.CovertWi = () => {
    return `\n_Convert something with bot_`
}
exports.AnuFoto = () => {
    return `\n_Change the picture to be more interesting_`
}
exports.HajuStik = () => {
    return `\n_Create unique stickers_`
}
exports.EloDown= () => {
    return `\n_Show download feature_`
}
exports.StikerWibu = () => {
    return `\n_Random anime stickers_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_To create a logo using a bot_`
}
exports.oterMenu = () => {
    return `\n_More menu_`
}
exports.GameBot = () => {
    return `\n_Features for playing with bots_`
}
exports.RandRik = () => {
    return `\n_Random tiktok videos_`
}
exports.RandCew = () => {
    return `\n_Random pictures of beautiful girls_`
}
exports.RamalOi = () => {
    return `\n_Today's forecast_`
}
exports.TeleStik= () => {
    return `\n_Random sticker from telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Create cool logos with bots_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Make an attractive logo_`
}
exports.TobatBro = () => {
    return `\n_Islamic features_`
}
exports.MauJualan = () => {
    return `\n_Features for selling_`
}
exports.Maustorage = () => {
    return `\n_Features to save stickers, audio, photos and videos_`
}
exports.MauChanger = () => {
    return `\n_Feature to change audio/vn sound_`
}
exports.GadaChat = () => {
    return `\n_Features for random chat_`
}
exports.SumberBot = () => {
    return `\n_Source of this bot script_`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `⏳ Please wait a moment`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Error Moderate Features`
}
exports.erorLink = () => {
    return `⚠️ The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ This command is for the owner`
}

exports.doneOwner = () => {
    return `✅  ️It's done, Owner ~`
}

exports.groupOnly = () => {
    return `👥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `🙅  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User is not an admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hi bro ${pushname} 👋 good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
`
}
exports.listMenu = (prefix) => {
    return `╭─❒ 「 List Menu 」 
│○ ${prefix}infomenu
│○ ${prefix}storemenu
│○ ${prefix}rpgmenu
│○ ${prefix}photooxymenu
│○ ${prefix}storagemenu
│○ ${prefix}voicemenu
│○ ${prefix}anonymouscmd
│○ ${prefix}ownermenu
│○ ${prefix}databasemenu
│○ ${prefix}groupmenu
│○ ${prefix}animemenu
│○ ${prefix}tagmenu
│○ ${prefix}stalkmenu
│○ ${prefix}searchmenu
│○ ${prefix}convertmenu
│○ ${prefix}imageeffect
│○ ${prefix}stickereffect
│○ ${prefix}downloadmenu
│○ ${prefix}randomanime
│○ ${prefix}nsfwmenu
│○ ${prefix}textpromenu
│○ ${prefix}othermenu
│○ ${prefix}gamemenu
│○ ${prefix}soundmenu
│○ ${prefix}logomenu
│○ ${prefix}islammenu
│○ ${prefix}asupanmenu
│○ ${prefix}cecanmenu
│○ ${prefix}primboncmd
│○ ${prefix}telestiker
│○ ${prefix}ephotocmd
╰❒ ${prefix}tqto
`
}
exports.listMenu2 = (prefix) => {
    return `╭─❒ 「 Bot Info 」 
│○ ${prefix}owner
│○ ${prefix}rules
│○ ${prefix}sc
│○ ${prefix}ping
│○ ${prefix}runtime
│○ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
│○ ${prefix}setmenu [query]
│○ ${prefix}setmenu katalog
│○ ${prefix}setmenu katalog2
│○ ${prefix}setmenu list
│○ ${prefix}setwm packname|author
│○ ${prefix}sendsesi
│○ ${prefix}listpc
│○ ${prefix}listgc
│○ ${prefix}broadcast [text]
│○ ${prefix}bc [text]
│○ ${prefix}bcgc 
│○ ${prefix}bcimage
│○ ${prefix}bcaudio
│○ ${prefix}bcstiker
│○ ${prefix}bcvn
│○ ${prefix}bcvideo
│○ ${prefix}banuser
│○ ${prefix}unban
│○ ${prefix}banned
│○ ${prefix}listbanned
│○ ${prefix}block
│○ ${prefix}ublock
│○ ${prefix}listblock
│○ ${prefix}addpremium
│○ ${prefix}delpremium
│○ ${prefix}listpremium
│○ ${prefix}nsfw [on/off]
│○ ${prefix}mute [on/off]
│○ ${prefix}autoblok212 [on/off]
│○ ${prefix}banchat
│○ ${prefix}unbanchat
│○ ${prefix}autorespond [on/off]
│○ ${prefix}antiviewonce [on/off]
│○ ${prefix}antidelete [on/off]
│○ ${prefix}autobio [on/off]
│○ ${prefix}anticall [on/off]
│○ ${prefix}join [link]
│○ ${prefix}self
│○ ${prefix}public [only bot]
│○ ${prefix}del [reply pesan bot]
│○ ${prefix}pppanjang
│○ ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Store Menu 」
│○ ${prefix}list
│○ ${prefix}addlist [key|respond]
│○ ${prefix}dellist [key]
│○ ${prefix}update [key|respond]
│○ ${prefix}store
│○ ${prefix}kali
│○ ${prefix}bagi
│○ ${prefix}tambah
│○ ${prefix}kurang
│○ ${prefix}kalkulator
│○ ${prefix}setproses
│○ ${prefix}updateproses
│○ ${prefix}cekproses
│○ ${prefix}delproses
│○ ${prefix}setdone
│○ ${prefix}updatedone
│○ ${prefix}cekdone
│○ ${prefix}deldone
│○ ${prefix}pay
│○ ${prefix}setcaptionpay
│○ ${prefix}setpaysewa
│○ proses
╰❒ done

╭─❒ 「 Anonymous 」
│○ ${prefix}menfess
│○ ${prefix}confess
│○ ${prefix}balasmenfess
│○ ${prefix}tolakmenfess
│○ ${prefix}stopmenfess
│○ ${prefix}anonymous 
│○ ${prefix}start
│○ ${prefix}skip
╰❒ ${prefix}stop


╭─❒ 「 Database 」 
│○ ${prefix}setcmd [reply stiker]
│○ ${prefix}delcmd [reply stiker]
│○ ${prefix}listcmd
│○ ${prefix}absen
│○ ${prefix}cekabsen
│○ ${prefix}deleteabsen
│○ ${prefix}absenstart
│○ ${prefix}addmsg [nama file]
│○ ${prefix}getmsg [nama file]
│○ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]

╭─❒ 「 Rpg Games 」
│○ ${prefix}adventure
│○ ${prefix}weekly
│○ ${prefix}use
│○ ${prefix}transfer
│○ ${prefix}slot
│○ ${prefix}shop
│○ ${prefix}pasar
│○ ${prefix}profile
│○ ${prefix}ojek
│○ ${prefix}open
│○ ${prefix}nguli
│○ ${prefix}narik
│○ ${prefix}nabung
│○ ${prefix}monthly
│○ ${prefix}mining
│○ ${prefix}merampok
│○ ${prefix}mancing
│○ ${prefix}kolam
│○ ${prefix}koboy
│○ ${prefix}kerja
│○ ${prefix}kandang
│○ ${prefix}levelup
│○ ${prefix}judi
│○ ${prefix}inventory
│○ ${prefix}hourly
│○ ${prefix}fishop
│○ ${prefix}feed
│○ ${prefix}duel
│○ ${prefix}daily
│○ ${prefix}craft
│○ ${prefix}cooldown
│○ ${prefix}cook
│○ ${prefix}collect
│○ ${prefix}chop
│○ ${prefix}casino
│○ ${prefix}buy
│○ ${prefix}bank 
│○ ${prefix}bansos
│○ ${prefix}berdagang
│○ ${prefix}berkebon
╰❒ ${prefix}build

╭─❒ 「 Group 」 
│○ ${prefix}addsewa
│○ ${prefix}delsewa
│○ ${prefix}listsewa
│○ ${prefix}ceksewa
│○ ${prefix}register
│○ ${prefix}unregister
│○ ${prefix}ceksn
│○ ${prefix}listonline
│○ ${prefix}sider
│○ ${prefix}wm packname|author
│○ ${prefix}infochat
│○ ${prefix}setdesk [text]
│○ ${prefix}setppgrup [reply image]
│○ ${prefix}pppanjanggc
│○ ${prefix}setpppanjanggc
│○ ${prefix}revoke
│○ ${prefix}leave
│○ ${prefix}add [62***]
│○ ${prefix}kick @tag
│○ ${prefix}leave
│○ ${prefix}linkgc
│○ ${prefix}welcome [on/off]
│○ ${prefix}goodbye [on/off]
│○ ${prefix}demotedetect [on/off]
│○ ${prefix}promotedetect  [on/off]
│○ ${prefix}setwelcome
│○ ${prefix}updatewelcome
│○ ${prefix}delwelcome
│○ ${prefix}cekwelcome
│○ ${prefix}setgoodbye
│○ ${prefix}updategoodbye
│○ ${prefix}delgoodbye
│○ ${prefix}cekgoodbye
│○ ${prefix}setpromote
│○ ${prefix}updatepromote
│○ ${prefix}setdemote
│○ ${prefix}updatedemote
│○ ${prefix}cekpromote
│○ ${prefix}cekdemote
│○ ${prefix}delpromote
│○ ${prefix}deldemote
│○ ${prefix}nsfw [on/off]
│○ ${prefix}antilink [on/off]
│○ ${prefix}antiwame [on/off]
│○ ${prefix}take packname|author
│○ ${prefix}group [open/close]
│○ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
│○ ${prefix}quotesanime
│○ ${prefix}anime [query]
│○ ${prefix}animeinfo
│○ ${prefix}manga [query]
╰❒ ${prefix}character [query]

╭─❒ 「 Tag 」 
│○ ${prefix}stickertag
│○ ${prefix}videotag [query]
│○ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalking 」 
│○ ${prefix}mlstalk [id|zona id]
│○ ${prefix}ffstalk [id]
│○ ${prefix}igstalk [username]
│○ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
│○ ${prefix}ytsearch [query]
│○ ${prefix}openai [query]
│○ ${prefix}openaiimg [query]
│○ ${prefix}chatgpt [query]
│○ ${prefix}githubsearch [query]
│○ ${prefix}kbbi [query]
│○ ${prefix}lirik [query]
│○ ${prefix}wallpaper [query]
│○ ${prefix}google [query]
│○ ${prefix}wikimedia [query]
│○ ${prefix}apksearch
│○ ${prefix}findapk
│○ ${prefix}hentai
│○ ${prefix}wattpad [query]
│○ ${prefix}webtoons [query]
│○ ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
│○ ${prefix}emoji [😭]
│○ ${prefix}emojimix [😭+💩]
│○ ${prefix}toaudio [video]
│○ ${prefix}tomp3 [video]
│○ ${prefix}tovn [video]
│○ ${prefix}stiker [reply image]
│○ ${prefix}tourl [image/video]
│○ ${prefix}ssweb [url]
│○ ${prefix}togif [sticker]
│○ ${prefix}tomp4 [sticker]
╰❒ ${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│○ ${prefix}wanted [reply image/stiker]
│○ ${prefix}utatoo [reply image/stiker]
│○ ${prefix}unsharpen [reply image/stiker]
│○ ${prefix}thanos [reply image/stiker]
│○ ${prefix}sniper [reply image/stiker]
│○ ${prefix}sharpen [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}scary [reply image/stiker]
│○ ${prefix}rip [reply image/stiker]
│○ ${prefix}redple [reply image/stiker]
│○ ${prefix}rejected [reply image/stiker]
│○ ${prefix}posterize [reply image/stiker]
│○ ${prefix}ps4 [reply image/stiker]
│○ ${prefix}pixelize [reply image/stiker]
│○ ${prefix}missionpassed [reply image/stiker]
│○ ${prefix}moustache [reply image/stiker]
│○ ${prefix}lookwhatkarenhave [reply image/stiker]
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}instagram [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}glitch2 [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}frame [reply image/stiker]
│○ ${prefix}fire [reply image/stiker]
│○ ${prefix}distort [reply image/stiker]
│○ ${prefix}dictator [reply image/stiker]
│○ ${prefix}deepfry [reply image/stiker]
│○ ${prefix}ddungeon [reply image/stiker]
│○ ${prefix}circle [reply image/stiker]
│○ ${prefix}challenger [reply image/stiker]
│○ ${prefix}burn [reply image/stiker]
│○ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}red [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}bloo [reply image/stiker]
│○ ${prefix}blue [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}green [reply image/stiker]
│○ ${prefix}glass [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}blurple [reply image/stiker]
│○ ${prefix}blurple2 [reply image/stiker]
│○ ${prefix}wasted [reply image/stiker]
│○ ${prefix}passed [reply image/stiker]
│○ ${prefix}triggered [reply image/stiker]
│○ ${prefix}comrade [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}threshold [reply image/stiker]
│○ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
│○ ${prefix}tiktok [link]
│○ ${prefix}tiktoknowm [link]
│○ ${prefix}tiktokwm [link]
│○ ${prefix}tiktokaudio [link]
│○ ${prefix}ytdl [link]
│○ ${prefix}play [query]
│○ ${prefix}ytmp3 [link]
│○ ${prefix}ytshortmp3 [link]
│○ ${prefix}ytmp4 [link]
│○ ${prefix}ytshorts [link]
│○ ${prefix}facebook [link]
│○ ${prefix}facebooksd [link]
│○ ${prefix}facebookhd [link]
│○ ${prefix}fbaudio [link]
│○ ${prefix}igstory [username]
│○ ${prefix}igdl [link]
│○ ${prefix}igphoto [link]
│○ ${prefix}igvideo [link]
│○ ${prefix}igreels [link]
│○ ${prefix}igtv [link]
│○ ${prefix}soundcloud [link]
│○ ${prefix}gitclone [link repo]
│○ ${prefix}gitrepo [username repo branch]
│○ ${prefix}mediafire [link]
│○ ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link

╭─❒ 「 Primbon 」
│○ ${prefix}nomorhoki 887435047326
│○ ${prefix}artimimpi [query]
│○ ${prefix}artinama [query]
│○ ${prefix}ramaljodoh
│○ ${prefix}ramaljodohbali
│○ ${prefix}suamiistri
│○ ${prefix}ramalcinta
│○ ${prefix}cocoknama
│○ ${prefix}pasangan
│○ ${prefix}jadiannikah
│○ ${prefix}sifatusaha
│○ ${prefix}rezeki
│○ ${prefix}pekerjaan
│○ ${prefix}nasib
│○ ${prefix}penyakit
│○ ${prefix}tarot
│○ ${prefix}fengshui
│○ ${prefix}haribaik
│○ ${prefix}harisangar
│○ ${prefix}harisial
│○ ${prefix}nagahari
│○ ${prefix}arahrezeki
│○ ${prefix}peruntungan
│○ ${prefix}weton
│○ ${prefix}karakter
│○ ${prefix}keberuntungan
│○ ${prefix}memancing
│○ ${prefix}masasubur
│○ ${prefix}zodiak 
╰❒ ${prefix}shio [query]

╭─❒ 「 Random Anime 」
│○ ${prefix}loli
│○ ${prefix}neko
│○ ${prefix}waifu
│○ ${prefix}shinobu
│○ ${prefix}megumin
│○ ${prefix}bully
│○ ${prefix}cuddle
│○ ${prefix}cry
│○ ${prefix}hug
│○ ${prefix}awoo
│○ ${prefix}kiss
│○ ${prefix}lick
│○ ${prefix}pat
│○ ${prefix}smug
│○ ${prefix}bonk
│○ ${prefix}yeet
│○ ${prefix}blush
│○ ${prefix}smile
│○ ${prefix}wave
│○ ${prefix}highfive
│○ ${prefix}handhold
│○ ${prefix}nom
│○ ${prefix}bite
│○ ${prefix}glomp
│○ ${prefix}slap
│○ ${prefix}kill
│○ ${prefix}happy
│○ ${prefix}wink
│○ ${prefix}poke
│○ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Voice Change Menu 」
│○ ${prefix}bass
│○ ${prefix}blown
│○ ${prefix}deep
│○ ${prefix}earrape
│○ ${prefix}fast
│○ ${prefix}fat
│○ ${prefix}nightcore
│○ ${prefix}reverse
│○ ${prefix}robot
│○ ${prefix}slow
│○ ${prefix}smooth
╰❒ ${prefix}tupai

╭─❒ 「 Storage Menu 」
│○ ${prefix}addvn
│○ ${prefix}listvn
│○ ${prefix}delvn
│○ ${prefix}adddocument
│○ ${prefix}listdocument
│○ ${prefix}deldocument
│○ ${prefix}addtext
│○ ${prefix}listtext
│○ ${prefix}deltext
│○ ${prefix}addaudio
│○ ${prefix}listaudio
│○ ${prefix}delaudio
│○ ${prefix}addimage
│○ ${prefix}listimage
│○ ${prefix}delimage
│○ ${prefix}addvideo
│○ ${prefix}listvideo
│○ ${prefix}delvideo
│○ ${prefix}addstik
│○ ${prefix}delstik
╰❒ ${prefix}liststik

╭─❒ 「 Nsfw & Sfw 」
│○ ${prefix}ahegao
│○ ${prefix}anal
│○ ${prefix}avatar2
│○ ${prefix}baka
│○ ${prefix}bdsm
│○ ${prefix}bj
│○ ${prefix}blowjob
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cuckold
│○ ${prefix}cuddle
│○ ${prefix}cum
│○ ${prefix}cumarts
│○ ${prefix}cumsluts
│○ ${prefix}ero
│○ ${prefix}erofeet
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}eroneko
│○ ${prefix}eroyuri
│○ ${prefix}feed
│○ ${prefix}feet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}foot
│○ ${prefix}foxgirl
│○ ${prefix}futanari
│○ ${prefix}gangbang
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}glasses
│○ ${prefix}hentai
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}holo
│○ ${prefix}holo2
│○ ${prefix}holoero
│○ ${prefix}hug
│○ ${prefix}jahy
│○ ${prefix}kemonomimi
│○ ${prefix}kemonomimi2
│○ ${prefix}keta
│○ ${prefix}kiss
│○ ${prefix}kitsune
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}lizard
│○ ${prefix}masturbation
│○ ${prefix}meowi
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}neko-sfw
│○ ${prefix}neko2
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}slap
│○ ${prefix}smug
│○ ${prefix}spank
│○ ${prefix}tentacles
│○ ${prefix}thighs
│○ ${prefix}tickle
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}woof
│○ ${prefix}yuri
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
│○ ${prefix}1917text
│○ ${prefix}angelwing
│○ ${prefix}announofwin
│○ ${prefix}birthdaycake
│○ ${prefix}capercut
│○ ${prefix}cardhalloween
│○ ${prefix}cartoonstyle
│○ ${prefix}christmascard 
│○ ${prefix}christmasseason
│○ ${prefix}covergamepubg
│○ ${prefix}covergraffiti
│○ ${prefix}dragonfire
│○ ${prefix}embroider
│○ ${prefix}fabrictext
│○ ${prefix}facebookgold
│○ ${prefix}facebooksilver
│○ ${prefix}funnyanimations
│○ ${prefix}funnyhalloween
│○ ${prefix}galaxybat
│○ ${prefix}galaxywallpaper
│○ ${prefix}generalexam 
│○ ${prefix}glowingtext
│○ ${prefix}graffiti3d
│○ ${prefix}graffititext
│○ ${prefix}graffititext2
│○ ${prefix}graffititext3
│○ ${prefix}greetingcardvideo 
│○ ${prefix}halloweenbats
│○ ${prefix}heartcup
│○ ${prefix}heartflashlight
│○ ${prefix}horrorletter
│○ ${prefix}icetext
│○ ${prefix}instagramgold
│○ ${prefix}instagramsilver
│○ ${prefix}lightningpubg
│○ ${prefix}lovecard
│○ ${prefix}lovelycute
│○ ${prefix}masteryavatar
│○ ${prefix}merrycard
│○ ${prefix}messagecoffee
│○ ${prefix}metalstar
│○ ${prefix}milkcake
│○ ${prefix}moderngold
│○ ${prefix}moderngold2
│○ ${prefix}moderngold3
│○ ${prefix}moderngoldsilver
│○ ${prefix}multicolor
│○ ${prefix}nameonheart
│○ ${prefix}noeltext
│○ ${prefix}projectyasuo
│○ ${prefix}pubgbirthday
│○ ${prefix}pubgglicthvideo 
│○ ${prefix}pubgmascotlogo
│○ ${prefix}puppycute
│○ ${prefix}realembroidery
│○ ${prefix}retrotext
│○ ${prefix}rosebirthday
│○ ${prefix}shirtclub
│○ ${prefix}snowontext
│○ ${prefix}starsnight
│○ ${prefix}summerbeach
│○ ${prefix}sunglightshadow
│○ ${prefix}textcakes
│○ ${prefix}texthalloween
│○ ${prefix}textonglass
│○ ${prefix}textsky
│○ ${prefix}thundertext
│○ ${prefix}twittergold
│○ ${prefix}twittersilver
│○ ${prefix}viettel
│○ ${prefix}vintagetelevision
│○ ${prefix}watercolor2
│○ ${prefix}womansday
│○ ${prefix}writeblood
│○ ${prefix}writegalaxy
│○ ${prefix}writehorror
│○ ${prefix}youtubegold
│○ ${prefix}youtubesilver
╰❒ ${prefix}zombie3d


╭─❒ 「 Textpro Menu 」
│○ ${prefix}halloween2 text|text2
│○ ${prefix}horror text|text2
│○ ${prefix}game8bit text|text2
│○ ${prefix}layered text|text2
│○ ${prefix}glitch2 text|text2
│○ ${prefix}cool-graffiti text|text2
│○ ${prefix}cool-wall-graffiti text|text2
│○ ${prefix}realistic text|text2
│○ ${prefix}space3d text|text2
│○ ${prefix}glitch-tiktok text|text2
│○ ${prefix}stone text|text2
│○ ${prefix}marvel text|text2
│○ ${prefix}marvel2 text|text2
│○ ${prefix}pornhub text|text2
│○ ${prefix}avengers text|text2
│○ ${prefix}metal-rainbow text|text2
│○ ${prefix}metal-gold text|text2
│○ ${prefix}metal-galaxy text|text2
│○ ${prefix}halloween2 text|text2
│○ ${prefix}lion text|text2
│○ ${prefix}wolf-black-white text|text2
│○ ${prefix}wolf-galaxy text|text2
│○ ${prefix}ninja text|text2
│○ ${prefix}3dsteel text|text2
│○ ${prefix}horror2 text|text2
│○ ${prefix}lava text|text2
│○ ${prefix}bagel text|text2
│○ ${prefix}blackpink text
│○ ${prefix}rainbow2 text
│○ ${prefix}water-pipe text
│○ ${prefix}halloween text
│○ ${prefix}sketch text
│○ ${prefix}sircuit text
│○ ${prefix}discovery text
│○ ${prefix}metallic2 text
│○ ${prefix}fiction text
│○ ${prefix}demon text
│○ ${prefix}transformer text
│○ ${prefix}berry text
│○ ${prefix}thunder text
│○ ${prefix}magma text
│○ ${prefix}3dstone text
│○ ${prefix}neon text
│○ ${prefix}glitch text
│○ ${prefix}harry-potter text
│○ ${prefix}embossed text
│○ ${prefix}broken text
│○ ${prefix}papercut text
│○ ${prefix}gradient text
│○ ${prefix}glossy text
│○ ${prefix}watercolor text
│○ ${prefix}multicolor text
│○ ${prefix}neon-devil text
│○ ${prefix}underwater text
│○ ${prefix}bear text
│○ ${prefix}wonderful-graffiti text
│○ ${prefix}christmas text
│○ ${prefix}neon-light text
│○ ${prefix}snow text
│○ ${prefix}cloudsky text
│○ ${prefix}luxury2 text
│○ ${prefix}gradient2 text
│○ ${prefix}summer text
│○ ${prefix}writing text
│○ ${prefix}engraved text
│○ ${prefix}summery text
│○ ${prefix}3dglue text
│○ ${prefix}metaldark text
│○ ${prefix}neonlight text
│○ ${prefix}oscar text
│○ ${prefix}minion text
│○ ${prefix}holographic text
│○ ${prefix}purple text
│○ ${prefix}glossy-blue text
│○ ${prefix}deluxe-gold text
│○ ${prefix}glossy-carbon text
│○ ${prefix}fabric text
│○ ${prefix}neonc text
│○ ${prefix}newyear text
│○ ${prefix}newyear2 text
│○ ${prefix}metal-silver text
│○ ${prefix}xmas text
│○ ${prefix}blood text
│○ ${prefix}dark-gold text
│○ ${prefix}joker text
│○ ${prefix}wicker text
│○ ${prefix}natural text
│○ ${prefix}firework text
│○ ${prefix}skeleton text
│○ ${prefix}red-balloon text
│○ ${prefix}purple-balloon text
│○ ${prefix}pink-balloon text
│○ ${prefix}green-balloon text
│○ ${prefix}cyan-balloon text
│○ ${prefix}blue-balloon text
│○ ${prefix}gold-balloon text
│○ ${prefix}steel text
│○ ${prefix}gloss text
│○ ${prefix}denim text
│○ ${prefix}decorate text
│○ ${prefix}decorate-purple text
│○ ${prefix}peridot text
│○ ${prefix}rock text
│○ ${prefix}yellow-glass text
│○ ${prefix}purple-glass text
│○ ${prefix}orange-glass text
│○ ${prefix}green-glass text
│○ ${prefix}cyan-glass text
│○ ${prefix}blue-glass text
│○ ${prefix}red-glass text
│○ ${prefix}purple-shiny-glass text
│○ ${prefix}captain-as2 text
│○ ${prefix}robot text
│○ ${prefix}equalizer text
│○ ${prefix}toxic text
│○ ${prefix}pink-sparkling text
│○ ${prefix}blue-sparkling text
│○ ${prefix}green-sparkling text
│○ ${prefix}purple-sparkling text
│○ ${prefix}gold-sparkling text
│○ ${prefix}red-sparkling text
│○ ${prefix}cyan-sparkling text
│○ ${prefix}decorative text
│○ ${prefix}chocolate text
│○ ${prefix}strawberry text
│○ ${prefix}koifish text
│○ ${prefix}bread text
│○ ${prefix}matrix text
│○ ${prefix}blood2 text
│○ ${prefix}neonligth2 text
│○ ${prefix}thunder2 text
│○ ${prefix}3dbox text
│○ ${prefix}neon2 text
│○ ${prefix}road-warning text
│○ ${prefix}bokeh text
│○ ${prefix}green-neon text
│○ ${prefix}advanced text
│○ ${prefix}dropwater text
│○ ${prefix}wall text
│○ ${prefix}chrismast text
│○ ${prefix}honey2 text
│○ ${prefix}drug text
│○ ${prefix}marble text
│○ ${prefix}marble2 text
│○ ${prefix}ice text
│○ ${prefix}juice text
│○ ${prefix}rusty text
│○ ${prefix}abstra text
│○ ${prefix}biscuit text
│○ ${prefix}wood text
│○ ${prefix}scifi text
│○ ${prefix}metal-rainbow text
│○ ${prefix}metal-rose-gold text
│○ ${prefix}purple-gem text
│○ ${prefix}shiny text 
│○ ${prefix}yellow-jewelry text
│○ ${prefix}silver-jewelry text
│○ ${prefix}red-jewelry text
│○ ${prefix}purple-jewelry text
│○ ${prefix}orange-jewelry text
│○ ${prefix}green-jewelry text
│○ ${prefix}cyan-jewelry text
│○ ${prefix}blue-jewelry text
│○ ${prefix}hot-metal text
│○ ${prefix}golden text
│○ ${prefix}blue-glitter text
│○ ${prefix}purple-glitter text
│○ ${prefix}pink-glitter text
│○ ${prefix}green-glitter text
│○ ${prefix}silver-glitter text
│○ ${prefix}gold-glitter text
│○ ${prefix}bronze-glitter text
│○ ${prefix}eroded-metal text
│○ ${prefix}carbon text
│○ ${prefix}candy text
│○ ${prefix}blue-metal text
│○ ${prefix}blue-gem text
│○ ${prefix}3dchrome text
│○ ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
 

╭─❒ 「 Others 」
│○ ${prefix}afk [reason]
│○ ${prefix}translate kode_bahasa text
│○ ${prefix}kalkulator [query]
│○ ${prefix}smeme [text]
│○ ${prefix}smeme2 [text|text]
│○ ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
│○ ${prefix}tembak
│○ ${prefix}tolak
│○ ${prefix}terima
│○ ${prefix}putusin
│○ ${prefix}ikhlasin
│○ ${prefix}cekpacar
│○ ${prefix}kuismath
│○ ${prefix}tebakgambar
│○ ${prefix}tebakkata
│○ ${prefix}tebakbendera
│○ ${prefix}tebakkalimat
│○ ${prefix}tebaksiapa
│○ ${prefix}tebakkabupaten
│○ ${prefix}tebakkimia
│○ ${prefix}tebaklirik
│○ ${prefix}tebaktebakan
│○ ${prefix}tekateki
│○ ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
│○ ${prefix}chika
│○ ${prefix}delvira
│○ ${prefix}ayu
│○ ${prefix}bunga
│○ ${prefix}aura
│○ ${prefix}nisa
│○ ${prefix}ziva
│○ ${prefix}yana
│○ ${prefix}viona
│○ ${prefix}syania
│○ ${prefix}riri
│○ ${prefix}syifa
│○ ${prefix}mama_gina
│○ ${prefix}alcakenya
│○ ${prefix}mangayutri
│○ ${prefix}rikagusriani
│○ ${prefix}asupan
│○ ${prefix}bocil
│○ ${prefix}geayubi
│○ ${prefix}santuy
│○ ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
│○ ${prefix}awoawo
│○ ${prefix}benedict
│○ ${prefix}chat
│○ ${prefix}dbfly
│○ ${prefix}dino_kuning
│○ ${prefix}doge
│○ ${prefix}gojosatoru
│○ ${prefix}hope_boy
│○ ${prefix}jisoo
│○ ${prefix}kr_robot
│○ ${prefix}kucing
│○ ${prefix}lonte
│○ ${prefix}manusia_lidi
│○ ${prefix}menjamet
│○ ${prefix}meow
│○ ${prefix}nicholas
│○ ${prefix}patrick
│○ ${prefix}popoci
│○ ${prefix}sponsbob
│○ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni

╭─❒ 「 Random Cewe 」
│○ ${prefix}china 
│○ ${prefix}indonesia 
│○ ${prefix}malaysia 
│○ ${prefix}thailand 
│○ ${prefix}korea 
│○ ${prefix}japan 
│○ ${prefix}vietnam 
│○ ${prefix}jenni 
│○ ${prefix}jiso 
│○ ${prefix}lisa  
╰❒ ${prefix}rose

╭─❒ 「 Logo Menu 」
│○ ${prefix}anonymous2
│○ ${prefix}astronotspace
│○ ${prefix}avatar3q360
│○ ${prefix}avatarff
│○ ${prefix}avatarleagueofking
│○ ${prefix}avatarlolbyname
│○ ${prefix}avataroverwatch
│○ ${prefix}bannerofaov
│○ ${prefix}bannerofaov2
│○ ${prefix}bannerofapex
│○ ${prefix}banneroffreefire
│○ ${prefix}banneroflol
│○ ${prefix}bannerofoverwatch
│○ ${prefix}bannerofpubg
│○ ${prefix}bannerytcsgo
│○ ${prefix}beautifulgalaxylol
│○ ${prefix}beautifulshimmering
│○ ${prefix}blueneon
│○ ${prefix}circlemarcotteam
│○ ${prefix}colorfulpubg
│○ ${prefix}companylogo
│○ ${prefix}companylogo2
│○ ${prefix}coverbannerlol
│○ ${prefix}coverdota2
│○ ${prefix}coverfblol
│○ ${prefix}coverfreefirefb
│○ ${prefix}coverleagueofking
│○ ${prefix}coverloknew
│○ ${prefix}coverofwarface
│○ ${prefix}coveronepiecefb
│○ ${prefix}crossfirecover
│○ ${prefix}crossfirestyle
│○ ${prefix}csgocover
│○ ${prefix}cutegirlgamer
│○ ${prefix}cyberhunterfb
│○ ${prefix}dragonballfb
│○ ${prefix}effect3donbeach
│○ ${prefix}elegantrotation
│○ ${prefix}fbgamepubgcover
│○ ${prefix}footballteam
│○ ${prefix}gaminglogo4fvs
│○ ${prefix}gamingmascot
│○ ${prefix}gradientlogo
│○ ${prefix}gunlogogaming
│○ ${prefix}introvideomaker
│○ ${prefix}letterlogos 
│○ ${prefix}logoaccording 
│○ ${prefix}logogamingassasin 
│○ ${prefix}lolcoverbyname 
│○ ${prefix}lolpentakill 
│○ ${prefix}lolwallpaper 
│○ ${prefix}maketeamlogo 
│○ ${prefix}mascotstyle 
│○ ${prefix}metalmascot 
│○ ${prefix}newlolavatar 
│○ ${prefix}overwatchcover 
│○ ${prefix}overwatchwallpaper 
│○ ${prefix}pencilsketch 
│○ ${prefix}pubgcutelogo 
│○ ${prefix}pubglogomaker 
│○ ${prefix}rovwallpaper 
│○ ${prefix}rovwallpaperhd 
│○ ${prefix}teamlogo 
│○ ${prefix}wallpaperaov 
╰❒ ${prefix}wallpaperml 


╭─❒ 「 Islamic Menu 」
│○ ${prefix}asmaulhusna
│○ ${prefix}kisahnabi [nabi]
│○ ${prefix}jadwalshalat [daerah]
│○ ${prefix}randomquran
│○ ${prefix}randomquran2
│○ ${prefix}listsurah
│○ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
│○ ${prefix}sound1
│○ ${prefix}sound2
│○ ${prefix}sound3
│○ ${prefix}sound4
│○ ${prefix}sound5
│○ ${prefix}sound6
│○ ${prefix}sound7
│○ ${prefix}sound8
│○ ${prefix}sound9
│○ ${prefix}sound10
│○ ${prefix}sound11
│○ ${prefix}sound12
│○ ${prefix}sound13
│○ ${prefix}sound14
│○ ${prefix}sound15
│○ ${prefix}sound16
│○ ${prefix}sound17
│○ ${prefix}sound18 
│○ ${prefix}sound19
│○ ${prefix}sound20
│○ ${prefix}sound21
│○ ${prefix}sound22
│○ ${prefix}sound23
│○ ${prefix}sound24
│○ ${prefix}sound25
│○ ${prefix}sound26
│○ ${prefix}sound27
│○ ${prefix}sound28
│○ ${prefix}sound29
│○ ${prefix}sound30
│○ ${prefix}sound31
│○ ${prefix}sound32
│○ ${prefix}sound33
│○ ${prefix}sound34
│○ ${prefix}sound35
│○ ${prefix}sound36
│○ ${prefix}sound37
│○ ${prefix}sound38
│○ ${prefix}sound39
│○ ${prefix}sound40
│○ ${prefix}sound41
│○ ${prefix}sound42
│○ ${prefix}sound43
│○ ${prefix}sound44
│○ ${prefix}sound45
│○ ${prefix}sound46
│○ ${prefix}sound47
│○ ${prefix}sound48
│○ ${prefix}sound49
│○ ${prefix}sound50
│○ ${prefix}sound51
│○ ${prefix}sound52
│○ ${prefix}sound53
│○ ${prefix}sound54
│○ ${prefix}sound55
│○ ${prefix}sound56
│○ ${prefix}sound57
│○ ${prefix}sound58
│○ ${prefix}sound59
│○ ${prefix}sound60
│○ ${prefix}sound61
│○ ${prefix}sound62
│○ ${prefix}sound63
│○ ${prefix}sound64
│○ ${prefix}sound65
│○ ${prefix}sound66
│○ ${prefix}sound67
│○ ${prefix}sound68
│○ ${prefix}sound69
╰❒ ${prefix}sound70

╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
│○ 𝖴𝗆𝗎𝗋 :
│○ 𝖦𝖾𝗇𝖽𝖾𝗋 :
│○ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hi bro ☺️ 
You can support me to keep this bot up to date by donating

Any amount of your donation will be very meaningful 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│○ ${prefix}owner
│○ ${prefix}rules
│○ ${prefix}sc
│○ ${prefix}ping
│○ ${prefix}runtime
│○ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ ${prefix}setmenu [query]
│○ ${prefix}setmenu katalog
│○ ${prefix}setmenu katalog2
│○ ${prefix}setmenu list
│○ ${prefix}setwm packname|author
│○ ${prefix}sendsesi
│○ ${prefix}listpc
│○ ${prefix}listgc
│○ ${prefix}broadcast [text]
│○ ${prefix}bc [text]
│○ ${prefix}bcgc 
│○ ${prefix}bcimage
│○ ${prefix}bcaudio
│○ ${prefix}bcstiker
│○ ${prefix}bcvn
│○ ${prefix}bcvideo
│○ ${prefix}banuser
│○ ${prefix}unban
│○ ${prefix}banned
│○ ${prefix}listbanned
│○ ${prefix}block
│○ ${prefix}ublock
│○ ${prefix}listblock
│○ ${prefix}addpremium
│○ ${prefix}delpremium
│○ ${prefix}listpremium
│○ ${prefix}nsfw [on/off]
│○ ${prefix}mute [on/off]
│○ ${prefix}autoblok212 [on/off]
│○ ${prefix}banchat
│○ ${prefix}unbanchat
│○ ${prefix}autorespond [on/off]
│○ ${prefix}antiviewonce [on/off]
│○ ${prefix}antidelete [on/off]
│○ ${prefix}autobio [on/off]
│○ ${prefix}anticall [on/off]
│○ ${prefix}join [link]
│○ ${prefix}self
│○ ${prefix}public [only bot]
│○ ${prefix}del [reply pesan bot]
│○ ${prefix}pppanjang
│○ ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ ${prefix}setcmd [reply stiker]
│○ ${prefix}delcmd [reply stiker]
│○ ${prefix}listcmd
│○ ${prefix}absen
│○ ${prefix}cekabsen
│○ ${prefix}deleteabsen
│○ ${prefix}absenstart
│○ ${prefix}addmsg [nama file]
│○ ${prefix}getmsg [nama file]
│○ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ ${prefix}addsewa
│○ ${prefix}delsewa
│○ ${prefix}listsewa
│○ ${prefix}ceksewa
│○ ${prefix}delsewa
│○ ${prefix}register
│○ ${prefix}unregister
│○ ${prefix}ceksn
│○ ${prefix}listonline
│○ ${prefix}sider
│○ ${prefix}wm packname|author
│○ ${prefix}infochat
│○ ${prefix}setdesk [text]
│○ ${prefix}setppgrup [reply image]
│○ ${prefix}pppanjanggc
│○ ${prefix}setpppanjanggc
│○ ${prefix}revoke
│○ ${prefix}leave
│○ ${prefix}add [62***]
│○ ${prefix}kick @tag
│○ ${prefix}leave
│○ ${prefix}linkgc
│○ ${prefix}welcome [on/off]
│○ ${prefix}goodbye [on/off]
│○ ${prefix}demotedetect [on/off]
│○ ${prefix}promotedetect  [on/off]
│○ ${prefix}setwelcome
│○ ${prefix}updatewelcome
│○ ${prefix}delwelcome
│○ ${prefix}cekwelcome
│○ ${prefix}setgoodbye
│○ ${prefix}updategoodbye
│○ ${prefix}delgoodbye
│○ ${prefix}cekgoodbye
│○ ${prefix}setpromote
│○ ${prefix}updatepromote
│○ ${prefix}setdemote
│○ ${prefix}updatedemote
│○ ${prefix}cekpromote
│○ ${prefix}cekdemote
│○ ${prefix}delpromote
│○ ${prefix}deldemote
│○ ${prefix}nsfw [on/off]
│○ ${prefix}antilink [on/off]
│○ ${prefix}antiwame [on/off]
│○ ${prefix}take packname|author
│○ ${prefix}group [open/close]
│○ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ ${prefix}quotesanime
│○ ${prefix}anime [query]
│○ ${prefix}animeinfo
│○ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ ${prefix}stickertag
│○ ${prefix}videotag [query]
│○ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ ${prefix}mlstalk [id|zona id]
│○ ${prefix}ffstalk [id]
│○ ${prefix}igstalk [username]
│○ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ ${prefix}ytsearch [query]
│○ ${prefix}openai [query]
│○ ${prefix}openaiimg [query]
│○ ${prefix}chatgpt [query]
│○ ${prefix}githubsearch [query]
│○ ${prefix}kbbi [query]
│○ ${prefix}lirik [query]
│○ ${prefix}wallpaper [query]
│○ ${prefix}google [query]
│○ ${prefix}wikimedia [query]
│○ ${prefix}apksearch
│○ ${prefix}findapk
│○ ${prefix}hentai
│○ ${prefix}wattpad [query]
│○ ${prefix}webtoons [query]
│○ ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ ${prefix}emoji [😭]
│○ ${prefix}emojimix [😭+💩]
│○ ${prefix}toaudio [video]
│○ ${prefix}tomp3 [video]
│○ ${prefix}tovn [video]
│○ ${prefix}stiker [reply image]
│○ ${prefix}tourl [image/video]
│○ ${prefix}ssweb [url]
│○ ${prefix}togif [sticker]
│○ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ ${prefix}wanted [reply image/stiker]
│○ ${prefix}utatoo [reply image/stiker]
│○ ${prefix}unsharpen [reply image/stiker]
│○ ${prefix}thanos [reply image/stiker]
│○ ${prefix}sniper [reply image/stiker]
│○ ${prefix}sharpen [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}scary [reply image/stiker]
│○ ${prefix}rip [reply image/stiker]
│○ ${prefix}redple [reply image/stiker]
│○ ${prefix}rejected [reply image/stiker]
│○ ${prefix}posterize [reply image/stiker]
│○ ${prefix}ps4 [reply image/stiker]
│○ ${prefix}pixelize [reply image/stiker]
│○ ${prefix}missionpassed [reply image/stiker]
│○ ${prefix}moustache [reply image/stiker]
│○ ${prefix}lookwhatkarenhave [reply image/stiker]
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}instagram [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}glitch [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}frame [reply image/stiker]
│○ ${prefix}fire [reply image/stiker]
│○ ${prefix}distort [reply image/stiker]
│○ ${prefix}dictator [reply image/stiker]
│○ ${prefix}deepfry [reply image/stiker]
│○ ${prefix}ddungeon [reply image/stiker]
│○ ${prefix}circle [reply image/stiker]
│○ ${prefix}challenger [reply image/stiker]
│○ ${prefix}burn [reply image/stiker]
│○ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}red [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}bloo [reply image/stiker]
│○ ${prefix}blue [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}green [reply image/stiker]
│○ ${prefix}glass [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}blurple [reply image/stiker]
│○ ${prefix}blurple2 [reply image/stiker]
│○ ${prefix}wasted [reply image/stiker]
│○ ${prefix}passed [reply image/stiker]
│○ ${prefix}triggered [reply image/stiker]
│○ ${prefix}comrade [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}threshold [reply image/stiker]
│○ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ ${prefix}tiktok [link]
│○ ${prefix}tiktoknowm [link]
│○ ${prefix}tiktokwm [link]
│○ ${prefix}tiktokaudio [link]
│○ ${prefix}ytdl [link]
│○ ${prefix}play [query]
│○ ${prefix}ytmp3 [link]
│○ ${prefix}ytshortmp3 [link]
│○ ${prefix}ytmp4 [link]
│○ ${prefix}ytshorts [link]
│○ ${prefix}facebook [link]
│○ ${prefix}facebooksd [link]
│○ ${prefix}facebookhd [link]
│○ ${prefix}fbaudio [link]
│○ ${prefix}igstory [username]
│○ ${prefix}igdl [link]
│○ ${prefix}igphoto [link]
│○ ${prefix}igvideo [link]
│○ ${prefix}igreels [link]
│○ ${prefix}igtv [link]
│○ ${prefix}soundcloud [link]
│○ ${prefix}gitclone [link repo]
│○ ${prefix}gitrepo [username repo branch]
│○ ${prefix}mediafire [link]
│○ ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ ${prefix}loli
│○ ${prefix}neko
│○ ${prefix}waifu
│○ ${prefix}shinobu
│○ ${prefix}megumin
│○ ${prefix}bully
│○ ${prefix}cuddle
│○ ${prefix}cry
│○ ${prefix}hug
│○ ${prefix}awoo
│○ ${prefix}kiss
│○ ${prefix}lick
│○ ${prefix}pat
│○ ${prefix}smug
│○ ${prefix}bonk
│○ ${prefix}yeet
│○ ${prefix}blush
│○ ${prefix}smile
│○ ${prefix}wave
│○ ${prefix}highfive
│○ ${prefix}handhold
│○ ${prefix}nom
│○ ${prefix}bite
│○ ${prefix}glomp
│○ ${prefix}slap
│○ ${prefix}kill
│○ ${prefix}happy
│○ ${prefix}wink
│○ ${prefix}poke
│○ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ ${prefix}cuddle
│○ ${prefix}feed
│○ ${prefix}foxgirl
│○ ${prefix}kemonomimi2
│○ ${prefix}woof
│○ ${prefix}holo2
│○ ${prefix}hug
│○ ${prefix}kiss
│○ ${prefix}lizard
│○ ${prefix}meowi
│○ ${prefix}neko2
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}slap
│○ ${prefix}tickle
│○ ${prefix}baka
│○ ${prefix}smug
│○ ${prefix}neko-sfw
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}spank
│○ ${prefix}blowjob
│○ ${prefix}cumarts
│○ ${prefix}eroyuri
│○ ${prefix}eroneko
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}ero
│○ ${prefix}feet
│○ ${prefix}erofeet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}futanari
│○ ${prefix}hentai
│○ ${prefix}holoero
│○ ${prefix}holo
│○ ${prefix}keta
│○ ${prefix}kitsune
│○ ${prefix}kemonomimi
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}yuri
│○ ${prefix}avatar2
│○ ${prefix}anal
│○ ${prefix}bj
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cumsluts
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}ahegao
│○ ${prefix}bdsm
│○ ${prefix}cuckold
│○ ${prefix}cum
│○ ${prefix}foot
│○ ${prefix}gangbang
│○ ${prefix}glasses
│○ ${prefix}jahy
│○ ${prefix}masturbation
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}tentacles
│○ ${prefix}thighs
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ ${prefix}halloween2 text|text2
│○ ${prefix}horror text|text2
│○ ${prefix}game8bit text|text2
│○ ${prefix}layered text|text2
│○ ${prefix}glitch2 text|text2
│○ ${prefix}cool-graffiti text|text2
│○ ${prefix}cool-wall-graffiti text|text2
│○ ${prefix}realistic text|text2
│○ ${prefix}space3d text|text2
│○ ${prefix}glitch-tiktok text|text2
│○ ${prefix}stone text|text2
│○ ${prefix}marvel text|text2
│○ ${prefix}marvel2 text|text2
│○ ${prefix}pornhub text|text2
│○ ${prefix}avengers text|text2
│○ ${prefix}metal-rainbow text|text2
│○ ${prefix}metal-gold text|text2
│○ ${prefix}metal-galaxy text|text2
│○ ${prefix}halloween2 text|text2
│○ ${prefix}lion text|text2
│○ ${prefix}wolf-black-white text|text2
│○ ${prefix}wolf-galaxy text|text2
│○ ${prefix}ninja text|text2
│○ ${prefix}3dsteel text|text2
│○ ${prefix}horror2 text|text2
│○ ${prefix}lava text|text2
│○ ${prefix}bagel text|text2
│○ ${prefix}blackpink text
│○ ${prefix}rainbow2 text
│○ ${prefix}water-pipe text
│○ ${prefix}halloween text
│○ ${prefix}sketch text
│○ ${prefix}sircuit text
│○ ${prefix}discovery text
│○ ${prefix}metallic2 text
│○ ${prefix}fiction text
│○ ${prefix}demon text
│○ ${prefix}transformer text
│○ ${prefix}berry text
│○ ${prefix}thunder text
│○ ${prefix}magma text
│○ ${prefix}3dstone text
│○ ${prefix}neon text
│○ ${prefix}glitch text
│○ ${prefix}harry-potter text
│○ ${prefix}embossed text
│○ ${prefix}broken text
│○ ${prefix}papercut text
│○ ${prefix}gradient text
│○ ${prefix}glossy text
│○ ${prefix}watercolor text
│○ ${prefix}multicolor text
│○ ${prefix}neon-devil text
│○ ${prefix}underwater text
│○ ${prefix}bear text
│○ ${prefix}wonderful-graffiti text
│○ ${prefix}christmas text
│○ ${prefix}neon-light text
│○ ${prefix}snow text
│○ ${prefix}cloudsky text
│○ ${prefix}luxury2 text
│○ ${prefix}gradient2 text
│○ ${prefix}summer text
│○ ${prefix}writing text
│○ ${prefix}engraved text
│○ ${prefix}summery text
│○ ${prefix}3dglue text
│○ ${prefix}metaldark text
│○ ${prefix}neonlight text
│○ ${prefix}oscar text
│○ ${prefix}minion text
│○ ${prefix}holographic text
│○ ${prefix}purple text
│○ ${prefix}glossy-blue text
│○ ${prefix}deluxe-gold text
│○ ${prefix}glossy-carbon text
│○ ${prefix}fabric text
│○ ${prefix}neonc text
│○ ${prefix}newyear text
│○ ${prefix}newyear2 text
│○ ${prefix}metal-silver text
│○ ${prefix}xmas text
│○ ${prefix}blood text
│○ ${prefix}dark-gold text
│○ ${prefix}joker text
│○ ${prefix}wicker text
│○ ${prefix}natural text
│○ ${prefix}firework text
│○ ${prefix}skeleton text
│○ ${prefix}red-balloon text
│○ ${prefix}purple-balloon text
│○ ${prefix}pink-balloon text
│○ ${prefix}green-balloon text
│○ ${prefix}cyan-balloon text
│○ ${prefix}blue-balloon text
│○ ${prefix}gold-balloon text
│○ ${prefix}steel text
│○ ${prefix}gloss text
│○ ${prefix}denim text
│○ ${prefix}decorate text
│○ ${prefix}decorate-purple text
│○ ${prefix}peridot text
│○ ${prefix}rock text
│○ ${prefix}yellow-glass text
│○ ${prefix}purple-glass text
│○ ${prefix}orange-glass text
│○ ${prefix}green-glass text
│○ ${prefix}cyan-glass text
│○ ${prefix}blue-glass text
│○ ${prefix}red-glass text
│○ ${prefix}purple-shiny-glass text
│○ ${prefix}captain-as2 text
│○ ${prefix}robot text
│○ ${prefix}equalizer text
│○ ${prefix}toxic text
│○ ${prefix}pink-sparkling text
│○ ${prefix}blue-sparkling text
│○ ${prefix}green-sparkling text
│○ ${prefix}purple-sparkling text
│○ ${prefix}gold-sparkling text
│○ ${prefix}red-sparkling text
│○ ${prefix}cyan-sparkling text
│○ ${prefix}decorative text
│○ ${prefix}chocolate text
│○ ${prefix}strawberry text
│○ ${prefix}koifish text
│○ ${prefix}bread text
│○ ${prefix}matrix text
│○ ${prefix}blood2 text
│○ ${prefix}neonligth2 text
│○ ${prefix}thunder2 text
│○ ${prefix}3dbox text
│○ ${prefix}neon2 text
│○ ${prefix}road-warning text
│○ ${prefix}bokeh text
│○ ${prefix}green-neon text
│○ ${prefix}advanced text
│○ ${prefix}dropwater text
│○ ${prefix}wall text
│○ ${prefix}chrismast text
│○ ${prefix}honey2 text
│○ ${prefix}drug text
│○ ${prefix}marble text
│○ ${prefix}marble2 text
│○ ${prefix}ice text
│○ ${prefix}juice text
│○ ${prefix}rusty text
│○ ${prefix}abstra text
│○ ${prefix}biscuit text
│○ ${prefix}wood text
│○ ${prefix}scifi text
│○ ${prefix}metal-rainbow text
│○ ${prefix}metal-rose-gold text
│○ ${prefix}purple-gem text
│○ ${prefix}shiny text 
│○ ${prefix}yellow-jewelry text
│○ ${prefix}silver-jewelry text
│○ ${prefix}red-jewelry text
│○ ${prefix}purple-jewelry text
│○ ${prefix}orange-jewelry text
│○ ${prefix}green-jewelry text
│○ ${prefix}cyan-jewelry text
│○ ${prefix}blue-jewelry text
│○ ${prefix}hot-metal text
│○ ${prefix}golden text
│○ ${prefix}blue-glitter text
│○ ${prefix}purple-glitter text
│○ ${prefix}pink-glitter text
│○ ${prefix}green-glitter text
│○ ${prefix}silver-glitter text
│○ ${prefix}gold-glitter text
│○ ${prefix}bronze-glitter text
│○ ${prefix}eroded-metal text
│○ ${prefix}carbon text
│○ ${prefix}candy text
│○ ${prefix}blue-metal text
│○ ${prefix}blue-gem text
│○ ${prefix}3dchrome text
│○ ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ ${prefix}ttp [text]
│○ ${prefix}attp [text]
│○ ${prefix}afk [reason]
│○ ${prefix}translate kode_bahasa text
│○ ${prefix}kalkulator [query]
│○ ${prefix}smeme [text]
│○ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ ${prefix}tembak
│○ ${prefix}tolak
│○ ${prefix}terima
│○ ${prefix}putusin
│○ ${prefix}ikhlasin
│○ ${prefix}cekpacar
│○ ${prefix}kuismath
│○ ${prefix}tebakgambar
│○ ${prefix}tebakkata
│○ ${prefix}tebakbendera
│○ ${prefix}tebakkalimat
│○ ${prefix}tebaksiapa
│○ ${prefix}tebakkabupaten
│○ ${prefix}tebakkimia
│○ ${prefix}tebaklirik
│○ ${prefix}tebaktebakan
│○ ${prefix}tekateki
│○ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ ${prefix}chika
│○ ${prefix}delvira
│○ ${prefix}ayu
│○ ${prefix}bunga
│○ ${prefix}aura
│○ ${prefix}nisa
│○ ${prefix}ziva
│○ ${prefix}yana
│○ ${prefix}viona
│○ ${prefix}syania
│○ ${prefix}riri
│○ ${prefix}syifa
│○ ${prefix}mama_gina
│○ ${prefix}alcakenya
│○ ${prefix}mangayutri
│○ ${prefix}rikagusriani
│○ ${prefix}asupan
│○ ${prefix}bocil
│○ ${prefix}geayubi
│○ ${prefix}santuy
│○ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ ${prefix}china 
│○ ${prefix}indonesia 
│○ ${prefix}malaysia 
│○ ${prefix}thailand 
│○ ${prefix}korea 
│○ ${prefix}japan 
│○ ${prefix}vietnam 
│○ ${prefix}jenni 
│○ ${prefix}jiso 
│○ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ ${prefix}nomorhoki 887435047326
│○ ${prefix}artimimpi [query]
│○ ${prefix}artinama [query]
│○ ${prefix}ramaljodoh
│○ ${prefix}ramaljodohbali
│○ ${prefix}suamiistri
│○ ${prefix}ramalcinta
│○ ${prefix}cocoknama
│○ ${prefix}pasangan
│○ ${prefix}jadiannikah
│○ ${prefix}sifatusaha
│○ ${prefix}rezeki
│○ ${prefix}pekerjaan
│○ ${prefix}nasib
│○ ${prefix}penyakit
│○ ${prefix}tarot
│○ ${prefix}fengshui
│○ ${prefix}haribaik
│○ ${prefix}harisangar
│○ ${prefix}harisial
│○ ${prefix}nagahari
│○ ${prefix}arahrezeki
│○ ${prefix}peruntungan
│○ ${prefix}weton
│○ ${prefix}karakter
│○ ${prefix}keberuntungan
│○ ${prefix}memancing
│○ ${prefix}masasubur
│○ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ ${prefix}awoawo
│○ ${prefix}benedict
│○ ${prefix}chat
│○ ${prefix}dbfly
│○ ${prefix}dino_kuning
│○ ${prefix}doge
│○ ${prefix}gojosatoru
│○ ${prefix}hope_boy
│○ ${prefix}jisoo
│○ ${prefix}kr_robot
│○ ${prefix}kucing
│○ ${prefix}lonte
│○ ${prefix}manusia_lidi
│○ ${prefix}menjamet
│○ ${prefix}meow
│○ ${prefix}nicholas
│○ ${prefix}patrick
│○ ${prefix}popoci
│○ ${prefix}sponsbob
│○ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ ${prefix}youtubegold text
│○ ${prefix}youtubesilver text
│○ ${prefix}facebookgold text
│○ ${prefix}facebooksilver text
│○ ${prefix}instagramgold text
│○ ${prefix}instagramsilver text
│○ ${prefix}twittergold text
│○ ${prefix}twittersilver text
│○ ${prefix}retrotext text
│○ ${prefix}halloweenbats text
│○ ${prefix}texthalloween text
│○ ${prefix}cardhalloween text
│○ ${prefix}birthdaycake text
│○ ${prefix}thundertext text
│○ ${prefix}icetext text
│○ ${prefix}milkcake text
│○ ${prefix}snowontext text
│○ ${prefix}metalstar text
│○ ${prefix}dragonfire text
│○ ${prefix}zombie3d text
│○ ${prefix}merrycard text
│○ ${prefix}generalexam text 
│○ ${prefix}viettel text
│○ ${prefix}embroider text
│○ ${prefix}graffititext text
│○ ${prefix}graffititext2 text
│○ ${prefix}graffititext3 text
│○ ${prefix}covergraffiti text
│○ ${prefix}moderngold text
│○ ${prefix}capercut text
│○ ${prefix}lovecard text
│○ ${prefix}heartflashlight text
│○ ${prefix}heartcup text
│○ ${prefix}sunglightshadow text
│○ ${prefix}graffiti3d text
│○ ${prefix}moderngoldsilver text
│○ ${prefix}moderngold2 text
│○ ${prefix}moderngold3 text
│○ ${prefix}fabrictext text
│○ ${prefix}masteryavatar text
│○ ${prefix}messagecoffee text
│○ ${prefix}announofwin text
│○ ${prefix}writeblood text
│○ ${prefix}horrorletter text
│○ ${prefix}writehorror text
│○ ${prefix}shirtclub text
│○ ${prefix}angelwing text
│○ ${prefix}christmasseason text
│○ ${prefix}projectyasuo text
│○ ${prefix}lovelycute text
│○ ${prefix}womansday text
│○ ${prefix}covergamepubg text
│○ ${prefix}nameonheart text
│○ ${prefix}funnyhalloween text
│○ ${prefix}lightningpubg text
│○ ${prefix}greetingcardvideo text 
│○ ${prefix}christmascard text 
│○ ${prefix}galaxybat text
│○ ${prefix}writegalaxy text
│○ ${prefix}starsnight text
│○ ${prefix}noeltext text
│○ ${prefix}textcakes text
│○ ${prefix}pubgbirthday text
│○ ${prefix}galaxywallpaper text
│○ ${prefix}pubgglicthvideo text 
│○ ${prefix}pubgmascotlogo text
│○ ${prefix}realembroidery text
│○ ${prefix}vintagetelevision text
│○ ${prefix}funnyanimations text
│○ ${prefix}glowingtext text
│○ ${prefix}textonglass text
│○ ${prefix}cartoonstyle text
│○ ${prefix}multicolor text
│○ ${prefix}watercolor2 text
│○ ${prefix}textsky text
│○ ${prefix}summerbeach text
│○ ${prefix}1917text text
│○ ${prefix}puppycute text
│○ ${prefix}rosebirthday text
│○ ${prefix}steellettering text|text2
│○ ${prefix}letterstext text|text2
│○ ${prefix}barcashirt text|text2
│○ ${prefix}premiercup text|text2
│○ ${prefix}stylepoligon text|text2
│○ ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ ${prefix}coverbannerlol text|heroes
│○ ${prefix}pubglogomaker text|style
│○ ${prefix}colorfulpubg text|color
│○ ${prefix}astronotspace text|style
│○ ${prefix}wallpaperaov text|heroes
│○ ${prefix}maketeamlogo text|style
│○ ${prefix}circlemarcotteam text|logo
│○ ${prefix}wallpaperml text|heroes
│○ ${prefix}dragonballfb text|character
│○ ${prefix}bannerofaov text|character
│○ ${prefix}effect3donbeach text|background
│○ ${prefix}cutegirlgamer text|logo
│○ ${prefix}footballteam text|logo
│○ ${prefix}beautifulshimmering text|champion
│○ ${prefix}pubgcutelogo text|logo
│○ ${prefix}elegantrotation text|logo
│○ ${prefix}logogamingassasin text|logo
│○ ${prefix}introvideomaker text|logo
│○ ${prefix}gaminglogo4fvs text|logo
│○ ${prefix}blueneon text|logo
│○ ${prefix}metalmascot text|logo
│○ ${prefix}anonymous2 text|style
│○ ${prefix}lolpentakill text|style
│○ ${prefix}avatarleagueofking text|style
│○ ${prefix}avatarff text|character
│○ ${prefix}overwatchwallpaper text|character
│○ ${prefix}rovwallpaperhd text|hero
│○ ${prefix}rovwallpaper text|avatar
│○ ${prefix}beautifulgalaxylol text|style
│○ ${prefix}crossfirecover text|character
│○ ${prefix}lolwallpaper text|wallpaper
│○ ${prefix}coverdota2 text|heroes
│○ ${prefix}coverleagueofking text|character
│○ ${prefix}avatar3q360 text|avatar
│○ ${prefix}coverofwarface text|character
│○ ${prefix}newlolavatar text|avatar
│○ ${prefix}csgocover text|background
│○ ${prefix}coverloknew text|hero
│○ ${prefix}coverfblol text|letters
│○ ${prefix}overwatchcover text|hero
│○ ${prefix}crossfirestyle text|avatar
│○ ${prefix}avatarlolbyname text|style
│○ ${prefix}lolcoverbyname text|avatar
│○ ${prefix}cyberhunterfb text|character
│○ ${prefix}coverfreefirefb text|character
│○ ${prefix}gamingmascot text|style
│○ ${prefix}coveronepiecefb text|character
│○ ${prefix}bannerytcsgo text|banner
│○ ${prefix}fbgamepubgcover text|template
│○ ${prefix}banneroflol text|text2|banner
│○ ${prefix}bannerofaov2 text|text2|banner
│○ ${prefix}teamlogo text|text2|background
│○ ${prefix}companylogo2 text|text2|background
│○ ${prefix}companylogo text|text2|background
│○ ${prefix}gradientlogo text|text2|background
│○ ${prefix}pencilsketch text|text2|icon
│○ ${prefix}gunlogogaming text|text2|background
│○ ${prefix}banneroffreefire text|text2|background
│○ ${prefix}letterlogos text|text2|thumb
│○ ${prefix}bannerofoverwatch text|text2|background
│○ ${prefix}bannerofapex text|text2|background
│○ ${prefix}bannerofpubg text|text2|background
│○ ${prefix}mascotstyle text|text2|thumb
│○ ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ ${prefix}asmaulhusna
│○ ${prefix}kisahnabi [nabi]
│○ ${prefix}jadwalshalat [daerah]
│○ ${prefix}randomquran
│○ ${prefix}randomquran2
│○ ${prefix}listsurah
│○ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ ${prefix}menfess
│○ ${prefix}confess
│○ ${prefix}balasmenfess
│○ ${prefix}tolakmenfess
│○ ${prefix}stopmenfess
│○ ${prefix}anonymous 
│○ ${prefix}start
│○ ${prefix}skip [daerah]
╰❒ ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ ${prefix}list
│○ ${prefix}addlist [key|respond]
│○ ${prefix}dellist [key]
│○ ${prefix}update [key|respond]
│○ ${prefix}store
│○ ${prefix}kali
│○ ${prefix}bagi
│○ ${prefix}tambah
│○ ${prefix}kurang
│○ ${prefix}kalkulator
│○ ${prefix}setproses
│○ ${prefix}updateproses
│○ ${prefix}cekproses
│○ ${prefix}delproses
│○ ${prefix}setdone
│○ ${prefix}updatedone
│○ ${prefix}cekdone
│○ ${prefix}deldone
│○ ${prefix}pay
│○ ${prefix}setcaptionpay
│○ ${prefix}setpaysewa
│○ proses
╰❒ done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ ${prefix}bass
│○ ${prefix}blown
│○ ${prefix}deep
│○ ${prefix}earrape
│○ ${prefix}fast
│○ ${prefix}fat
│○ ${prefix}nightcore
│○ ${prefix}reverse
│○ ${prefix}robot
│○ ${prefix}slow
│○ ${prefix}smooth
╰❒ ${prefix}tupai
`
}

exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ ${prefix}addvn
│○ ${prefix}listvn
│○ ${prefix}delvn
│○ ${prefix}adddocument
│○ ${prefix}listdocument
│○ ${prefix}deldocument
│○ ${prefix}addtext
│○ ${prefix}listtext
│○ ${prefix}deltext
│○ ${prefix}addaudio
│○ ${prefix}listaudio
│○ ${prefix}delaudio
│○ ${prefix}addimage
│○ ${prefix}listimage
│○ ${prefix}delimage
│○ ${prefix}addvideo
│○ ${prefix}listvideo
│○ ${prefix}delvideo
│○ ${prefix}addstik
│○ ${prefix}delstik
╰❒ ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ ${prefix}adventure
│○ ${prefix}weekly
│○ ${prefix}use
│○ ${prefix}transfer
│○ ${prefix}slot
│○ ${prefix}shop
│○ ${prefix}pasar
│○ ${prefix}profile
│○ ${prefix}ojek
│○ ${prefix}open
│○ ${prefix}nguli
│○ ${prefix}narik
│○ ${prefix}nabung
│○ ${prefix}monthly
│○ ${prefix}mining
│○ ${prefix}merampok
│○ ${prefix}mancing
│○ ${prefix}kolam
│○ ${prefix}koboy
│○ ${prefix}kerja
│○ ${prefix}kandang
│○ ${prefix}levelup
│○ ${prefix}judi
│○ ${prefix}inventory
│○ ${prefix}hourly
│○ ${prefix}fishop
│○ ${prefix}feed
│○ ${prefix}duel
│○ ${prefix}daily
│○ ${prefix}craft
│○ ${prefix}cooldown
│○ ${prefix}cook
│○ ${prefix}collect
│○ ${prefix}chop
│○ ${prefix}casino
│○ ${prefix}buy
│○ ${prefix}bank 
│○ ${prefix}bansos
│○ ${prefix}berdagang
│○ ${prefix}berkebon
╰❒ ${prefix}build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ ${prefix}battlegrounds-logo
│○ ${prefix}battlefield4
│○ ${prefix}text-8bit
│○ ${prefix}typography-flower 
│○ ${prefix}under-flower 
│○ ${prefix}bevel-text 
│○ ${prefix}silk-text 
│○ ${prefix}sweet-andy 
│○ ${prefix}smoke-typography 
│○ ${prefix}carvedwood 
│○ ${prefix}scary-cemetery 
│○ ${prefix}royallook 
│○ ${prefix}coffeecup2 
│○ ${prefix}illuminated 
│○ ${prefix}harry-potter2 //
│○ ${prefix}woodblack //
│○ ${prefix}butterfly-reflection //
│○ ${prefix}watermelon // 
│○ ${prefix}striking // 
│○ ${prefix}metallicglow //
│○ ${prefix}rainbow-text 
│○ ${prefix}birthday-cake 
│○ ${prefix}embroidery // 
│○ ${prefix}crisp 
│○ ${prefix}flaming 
│○ ${prefix}furtext 
│○ ${prefix}nightsky 
│○ ${prefix}glow-rainbow 
│○ ${prefix}gradient-avatar 
│○ ${prefix}white-cube // 
│○ ${prefix}honey-text // 
│○ ${prefix}vintage-style //
│○ ${prefix}glowing-3d // 
│○ ${prefix}army-camouflage 
│○ ${prefix}graffiti-cover 
│○ ${prefix}rainbow-shine 
│○ ${prefix}smoky-neon 
│○ ${prefix}quotes-underfall //
│○ ${prefix}layered-leaves 
│○ ${prefix}vector-nature 
│○ ${prefix}yellow-rose 
│○ ${prefix}love-text 
│○ ${prefix}underwater-ocean 
│○ ${prefix}nature-text 
│○ ${prefix}wolf-metal 
│○ ${prefix}summer-text 
│○ ${prefix}wooden-board //
│○ ${prefix}flower-heart
│○ ${prefix}quote-wood 
│○ ${prefix}love-text 
│○ ${prefix}quotes-undergrass 
│○ ${prefix}naruto-banner 
│○ ${prefix}love-message 
│○ ${prefix}textoncup2 
│○ ${prefix}burn-paper 
│○ ${prefix}smoke 
│○ ${prefix}romantic-messages 
│○ ${prefix}shadow-sky 
│○ ${prefix}text-cup 
╰❒ ${prefix}coffecup
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ ${prefix}sound1
│○ ${prefix}sound2
│○ ${prefix}sound3
│○ ${prefix}sound4
│○ ${prefix}sound5
│○ ${prefix}sound6
│○ ${prefix}sound7
│○ ${prefix}sound8
│○ ${prefix}sound9
│○ ${prefix}sound10
│○ ${prefix}sound11
│○ ${prefix}sound12
│○ ${prefix}sound13
│○ ${prefix}sound14
│○ ${prefix}sound15
│○ ${prefix}sound16
│○ ${prefix}sound17
│○ ${prefix}sound18 
│○ ${prefix}sound19
│○ ${prefix}sound20
│○ ${prefix}sound21
│○ ${prefix}sound22
│○ ${prefix}sound23
│○ ${prefix}sound24
│○ ${prefix}sound25
│○ ${prefix}sound26
│○ ${prefix}sound27
│○ ${prefix}sound28
│○ ${prefix}sound29
│○ ${prefix}sound30
│○ ${prefix}sound31
│○ ${prefix}sound32
│○ ${prefix}sound33
│○ ${prefix}sound34
│○ ${prefix}sound35
│○ ${prefix}sound36
│○ ${prefix}sound37
│○ ${prefix}sound38
│○ ${prefix}sound39
│○ ${prefix}sound40
│○ ${prefix}sound41
│○ ${prefix}sound42
│○ ${prefix}sound43
│○ ${prefix}sound44
│○ ${prefix}sound45
│○ ${prefix}sound46
│○ ${prefix}sound47
│○ ${prefix}sound48
│○ ${prefix}sound49
│○ ${prefix}sound50
│○ ${prefix}sound51
│○ ${prefix}sound52
│○ ${prefix}sound53
│○ ${prefix}sound54
│○ ${prefix}sound55
│○ ${prefix}sound56
│○ ${prefix}sound57
│○ ${prefix}sound58
│○ ${prefix}sound59
│○ ${prefix}sound60
│○ ${prefix}sound61
│○ ${prefix}sound62
│○ ${prefix}sound63
│○ ${prefix}sound64
│○ ${prefix}sound65
│○ ${prefix}sound66
│○ ${prefix}sound67
│○ ${prefix}sound68
│○ ${prefix}sound69
╰❒ ${prefix}sound70
`
}
