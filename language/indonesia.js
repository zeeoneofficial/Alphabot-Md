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
│𒆜 ${prefix}infomenu
│𒆜 ${prefix}storemenu
│𒆜 ${prefix}rpgmenu
│𒆜 ${prefix}photooxymenu
│𒆜 ${prefix}storagemenu
│𒆜 ${prefix}voicemenu
│𒆜 ${prefix}anonymouscmd
│𒆜 ${prefix}ownermenu
│𒆜 ${prefix}databasemenu
│𒆜 ${prefix}groupmenu
│𒆜 ${prefix}animemenu
│𒆜 ${prefix}tagmenu
│𒆜 ${prefix}stalkmenu
│𒆜 ${prefix}searchmenu
│𒆜 ${prefix}convertmenu
│𒆜 ${prefix}imageeffect
│𒆜 ${prefix}stickereffect
│𒆜 ${prefix}downloadmenu
│𒆜 ${prefix}randomanime
│𒆜 ${prefix}nsfwmenu
│𒆜 ${prefix}textpromenu
│𒆜 ${prefix}othermenu
│𒆜 ${prefix}gamemenu
│𒆜 ${prefix}soundmenu
│𒆜 ${prefix}logomenu
│𒆜 ${prefix}islammenu
│𒆜 ${prefix}asupanmenu
│𒆜 ${prefix}cecanmenu
│𒆜 ${prefix}primboncmd
│𒆜 ${prefix}telestiker
│𒆜 ${prefix}ephotocmd
╰❒ ${prefix}tqto
`
}
exports.listMenu2 = (prefix) => {
    return `╭─❒ 「 Bot Info 」 
│𒆜 ${prefix}owner
│𒆜 ${prefix}rules
│𒆜 ${prefix}sc
│𒆜 ${prefix}ping
│𒆜 ${prefix}runtime
│𒆜 ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
│𒆜 ${prefix}setmenu [query]
│𒆜 ${prefix}setmenu katalog
│𒆜 ${prefix}setmenu katalog2
│𒆜 ${prefix}setmenu list
│𒆜 ${prefix}setwm packname|author
│𒆜 ${prefix}sendsesi
│𒆜 ${prefix}listpc
│𒆜 ${prefix}listgc
│𒆜 ${prefix}broadcast [text]
│𒆜 ${prefix}bc [text]
│𒆜 ${prefix}bcgc 
│𒆜 ${prefix}bcimage
│𒆜 ${prefix}bcaudio
│𒆜 ${prefix}bcstiker
│𒆜 ${prefix}bcvn
│𒆜 ${prefix}bcvideo
│𒆜 ${prefix}banuser
│𒆜 ${prefix}unban
│𒆜 ${prefix}banned
│𒆜 ${prefix}listbanned
│𒆜 ${prefix}block
│𒆜 ${prefix}ublock
│𒆜 ${prefix}listblock
│𒆜 ${prefix}addpremium
│𒆜 ${prefix}delpremium
│𒆜 ${prefix}listpremium
│𒆜 ${prefix}nsfw [on/off]
│𒆜 ${prefix}mute [on/off]
│𒆜 ${prefix}autoblok212 [on/off]
│𒆜 ${prefix}banchat
│𒆜 ${prefix}unbanchat
│𒆜 ${prefix}autorespond [on/off]
│𒆜 ${prefix}antiviewonce [on/off]
│𒆜 ${prefix}antidelete [on/off]
│𒆜 ${prefix}autobio [on/off]
│𒆜 ${prefix}anticall [on/off]
│𒆜 ${prefix}join [link]
│𒆜 ${prefix}self
│𒆜 ${prefix}public [only bot]
│𒆜 ${prefix}del [reply pesan bot]
│𒆜 ${prefix}pppanjang
│𒆜 ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Store Menu 」
│𒆜 ${prefix}list
│𒆜 ${prefix}addlist [key|respond]
│𒆜 ${prefix}dellist [key]
│𒆜 ${prefix}update [key|respond]
│𒆜 ${prefix}store
│𒆜 ${prefix}kali
│𒆜 ${prefix}bagi
│𒆜 ${prefix}tambah
│𒆜 ${prefix}kurang
│𒆜 ${prefix}kalkulator
│𒆜 ${prefix}setproses
│𒆜 ${prefix}updateproses
│𒆜 ${prefix}cekproses
│𒆜 ${prefix}delproses
│𒆜 ${prefix}setdone
│𒆜 ${prefix}updatedone
│𒆜 ${prefix}cekdone
│𒆜 ${prefix}deldone
│𒆜 ${prefix}pay
│𒆜 ${prefix}setcaptionpay
│𒆜 ${prefix}setpaysewa
│𒆜 proses
╰❒ done

╭─❒ 「 Anonymous 」
│𒆜 ${prefix}menfess
│𒆜 ${prefix}confess
│𒆜 ${prefix}balasmenfess
│𒆜 ${prefix}tolakmenfess
│𒆜 ${prefix}stopmenfess
│𒆜 ${prefix}anonymous 
│𒆜 ${prefix}start
│𒆜 ${prefix}skip
╰❒ ${prefix}stop


╭─❒ 「 Database 」 
│𒆜 ${prefix}setcmd [reply stiker]
│𒆜 ${prefix}delcmd [reply stiker]
│𒆜 ${prefix}listcmd
│𒆜 ${prefix}absen
│𒆜 ${prefix}cekabsen
│𒆜 ${prefix}deleteabsen
│𒆜 ${prefix}absenstart
│𒆜 ${prefix}addmsg [nama file]
│𒆜 ${prefix}getmsg [nama file]
│𒆜 ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]

╭─❒ 「 Rpg Games 」
│𒆜 ${prefix}adventure
│𒆜 ${prefix}weekly
│𒆜 ${prefix}use
│𒆜 ${prefix}transfer
│𒆜 ${prefix}slot
│𒆜 ${prefix}shop
│𒆜 ${prefix}pasar
│𒆜 ${prefix}profile
│𒆜 ${prefix}ojek
│𒆜 ${prefix}open
│𒆜 ${prefix}nguli
│𒆜 ${prefix}narik
│𒆜 ${prefix}nabung
│𒆜 ${prefix}monthly
│𒆜 ${prefix}mining
│𒆜 ${prefix}merampok
│𒆜 ${prefix}mancing
│𒆜 ${prefix}kolam
│𒆜 ${prefix}koboy
│𒆜 ${prefix}kerja
│𒆜 ${prefix}kandang
│𒆜 ${prefix}levelup
│𒆜 ${prefix}judi
│𒆜 ${prefix}inventory
│𒆜 ${prefix}hourly
│𒆜 ${prefix}fishop
│𒆜 ${prefix}feed
│𒆜 ${prefix}duel
│𒆜 ${prefix}daily
│𒆜 ${prefix}craft
│𒆜 ${prefix}cooldown
│𒆜 ${prefix}cook
│𒆜 ${prefix}collect
│𒆜 ${prefix}chop
│𒆜 ${prefix}casino
│𒆜 ${prefix}buy
│𒆜 ${prefix}bank 
│𒆜 ${prefix}bansos
│𒆜 ${prefix}berdagang
│𒆜 ${prefix}berkebon
╰❒ ${prefix}build

╭─❒ 「 Group 」 
│𒆜 ${prefix}addsewa
│𒆜 ${prefix}delsewa
│𒆜 ${prefix}listsewa
│𒆜 ${prefix}ceksewa
│𒆜 ${prefix}register
│𒆜 ${prefix}unregister
│𒆜 ${prefix}ceksn
│𒆜 ${prefix}listonline
│𒆜 ${prefix}sider
│𒆜 ${prefix}wm packname|author
│𒆜 ${prefix}infochat
│𒆜 ${prefix}setdesk [text]
│𒆜 ${prefix}setppgrup [reply image]
│𒆜 ${prefix}pppanjanggc
│𒆜 ${prefix}setpppanjanggc
│𒆜 ${prefix}revoke
│𒆜 ${prefix}leave
│𒆜 ${prefix}add [62***]
│𒆜 ${prefix}kick @tag
│𒆜 ${prefix}leave
│𒆜 ${prefix}linkgc
│𒆜 ${prefix}welcome [on/off]
│𒆜 ${prefix}goodbye [on/off]
│𒆜 ${prefix}demotedetect [on/off]
│𒆜 ${prefix}promotedetect  [on/off]
│𒆜 ${prefix}setwelcome
│𒆜 ${prefix}updatewelcome
│𒆜 ${prefix}delwelcome
│𒆜 ${prefix}cekwelcome
│𒆜 ${prefix}setgoodbye
│𒆜 ${prefix}updategoodbye
│𒆜 ${prefix}delgoodbye
│𒆜 ${prefix}cekgoodbye
│𒆜 ${prefix}setpromote
│𒆜 ${prefix}updatepromote
│𒆜 ${prefix}setdemote
│𒆜 ${prefix}updatedemote
│𒆜 ${prefix}cekpromote
│𒆜 ${prefix}cekdemote
│𒆜 ${prefix}delpromote
│𒆜 ${prefix}deldemote
│𒆜 ${prefix}nsfw [on/off]
│𒆜 ${prefix}antilink [on/off]
│𒆜 ${prefix}antiwame [on/off]
│𒆜 ${prefix}take packname|author
│𒆜 ${prefix}group [open/close]
│𒆜 ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
│𒆜 ${prefix}quotesanime
│𒆜 ${prefix}anime [query]
│𒆜 ${prefix}animeinfo
│𒆜 ${prefix}manga [query]
╰❒ ${prefix}character [query]

╭─❒ 「 Tag 」 
│𒆜 ${prefix}stickertag
│𒆜 ${prefix}videotag [query]
│𒆜 ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalking 」 
│𒆜 ${prefix}mlstalk [id|zona id]
│𒆜 ${prefix}ffstalk [id]
│𒆜 ${prefix}igstalk [username]
│𒆜 ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
│𒆜 ${prefix}ytsearch [query]
│𒆜 ${prefix}openai [query]
│𒆜 ${prefix}openaiimg [query]
│𒆜 ${prefix}chatgpt [query]
│𒆜 ${prefix}githubsearch [query]
│𒆜 ${prefix}kbbi [query]
│𒆜 ${prefix}lirik [query]
│𒆜 ${prefix}wallpaper [query]
│𒆜 ${prefix}google [query]
│𒆜 ${prefix}wikimedia [query]
│𒆜 ${prefix}apksearch
│𒆜 ${prefix}findapk
│𒆜 ${prefix}hentai
│𒆜 ${prefix}wattpad [query]
│𒆜 ${prefix}webtoons [query]
│𒆜 ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
│𒆜 ${prefix}emoji [😭]
│𒆜 ${prefix}emojimix [😭+💩]
│𒆜 ${prefix}toaudio [video]
│𒆜 ${prefix}tomp3 [video]
│𒆜 ${prefix}tovn [video]
│𒆜 ${prefix}stiker [reply image]
│𒆜 ${prefix}tourl [image/video]
│𒆜 ${prefix}ssweb [url]
│𒆜 ${prefix}togif [sticker]
│𒆜 ${prefix}tomp4 [sticker]
╰❒ ${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│𒆜 ${prefix}wanted [reply image/stiker]
│𒆜 ${prefix}utatoo [reply image/stiker]
│𒆜 ${prefix}unsharpen [reply image/stiker]
│𒆜 ${prefix}thanos [reply image/stiker]
│𒆜 ${prefix}sniper [reply image/stiker]
│𒆜 ${prefix}sharpen [reply image/stiker]
│𒆜 ${prefix}sepia [reply image/stiker]
│𒆜 ${prefix}scary [reply image/stiker]
│𒆜 ${prefix}rip [reply image/stiker]
│𒆜 ${prefix}redple [reply image/stiker]
│𒆜 ${prefix}rejected [reply image/stiker]
│𒆜 ${prefix}posterize [reply image/stiker]
│𒆜 ${prefix}ps4 [reply image/stiker]
│𒆜 ${prefix}pixelize [reply image/stiker]
│𒆜 ${prefix}missionpassed [reply image/stiker]
│𒆜 ${prefix}moustache [reply image/stiker]
│𒆜 ${prefix}lookwhatkarenhave [reply image/stiker]
│𒆜 ${prefix}jail [reply image/stiker]
│𒆜 ${prefix}invert [reply image/stiker]
│𒆜 ${prefix}instagram [reply image/stiker]
│𒆜 ${prefix}greyscale [reply image/stiker]
│𒆜 ${prefix}glitch2 [reply image/stiker]
│𒆜 ${prefix}gay [reply image/stiker]
│𒆜 ${prefix}frame [reply image/stiker]
│𒆜 ${prefix}fire [reply image/stiker]
│𒆜 ${prefix}distort [reply image/stiker]
│𒆜 ${prefix}dictator [reply image/stiker]
│𒆜 ${prefix}deepfry [reply image/stiker]
│𒆜 ${prefix}ddungeon [reply image/stiker]
│𒆜 ${prefix}circle [reply image/stiker]
│𒆜 ${prefix}challenger [reply image/stiker]
│𒆜 ${prefix}burn [reply image/stiker]
│𒆜 ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
│𒆜 ${prefix}jail [reply image/stiker]
│𒆜 ${prefix}red [reply image/stiker]
│𒆜 ${prefix}gay [reply image/stiker]
│𒆜 ${prefix}bloo [reply image/stiker]
│𒆜 ${prefix}blue [reply image/stiker]
│𒆜 ${prefix}sepia [reply image/stiker]
│𒆜 ${prefix}green [reply image/stiker]
│𒆜 ${prefix}glass [reply image/stiker]
│𒆜 ${prefix}invert [reply image/stiker]
│𒆜 ${prefix}blurple [reply image/stiker]
│𒆜 ${prefix}blurple2 [reply image/stiker]
│𒆜 ${prefix}wasted [reply image/stiker]
│𒆜 ${prefix}passed [reply image/stiker]
│𒆜 ${prefix}triggered [reply image/stiker]
│𒆜 ${prefix}comrade [reply image/stiker]
│𒆜 ${prefix}greyscale [reply image/stiker]
│𒆜 ${prefix}threshold [reply image/stiker]
│𒆜 ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
│𒆜 ${prefix}tiktok [link]
│𒆜 ${prefix}tiktoknowm [link]
│𒆜 ${prefix}tiktokwm [link]
│𒆜 ${prefix}tiktokaudio [link]
│𒆜 ${prefix}ytdl [link]
│𒆜 ${prefix}play [query]
│𒆜 ${prefix}ytmp3 [link]
│𒆜 ${prefix}ytshortmp3 [link]
│𒆜 ${prefix}ytmp4 [link]
│𒆜 ${prefix}ytshorts [link]
│𒆜 ${prefix}facebook [link]
│𒆜 ${prefix}facebooksd [link]
│𒆜 ${prefix}facebookhd [link]
│𒆜 ${prefix}fbaudio [link]
│𒆜 ${prefix}igstory [username]
│𒆜 ${prefix}igdl [link]
│𒆜 ${prefix}igphoto [link]
│𒆜 ${prefix}igvideo [link]
│𒆜 ${prefix}igreels [link]
│𒆜 ${prefix}igtv [link]
│𒆜 ${prefix}soundcloud [link]
│𒆜 ${prefix}gitclone [link repo]
│𒆜 ${prefix}gitrepo [username repo branch]
│𒆜 ${prefix}mediafire [link]
│𒆜 ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link

╭─❒ 「 Primbon 」
│𒆜 ${prefix}nomorhoki 887435047326
│𒆜 ${prefix}artimimpi [query]
│𒆜 ${prefix}artinama [query]
│𒆜 ${prefix}ramaljodoh
│𒆜 ${prefix}ramaljodohbali
│𒆜 ${prefix}suamiistri
│𒆜 ${prefix}ramalcinta
│𒆜 ${prefix}cocoknama
│𒆜 ${prefix}pasangan
│𒆜 ${prefix}jadiannikah
│𒆜 ${prefix}sifatusaha
│𒆜 ${prefix}rezeki
│𒆜 ${prefix}pekerjaan
│𒆜 ${prefix}nasib
│𒆜 ${prefix}penyakit
│𒆜 ${prefix}tarot
│𒆜 ${prefix}fengshui
│𒆜 ${prefix}haribaik
│𒆜 ${prefix}harisangar
│𒆜 ${prefix}harisial
│𒆜 ${prefix}nagahari
│𒆜 ${prefix}arahrezeki
│𒆜 ${prefix}peruntungan
│𒆜 ${prefix}weton
│𒆜 ${prefix}karakter
│𒆜 ${prefix}keberuntungan
│𒆜 ${prefix}memancing
│𒆜 ${prefix}masasubur
│𒆜 ${prefix}zodiak 
╰❒ ${prefix}shio [query]

╭─❒ 「 Random Anime 」
│𒆜 ${prefix}loli
│𒆜 ${prefix}neko
│𒆜 ${prefix}waifu
│𒆜 ${prefix}shinobu
│𒆜 ${prefix}megumin
│𒆜 ${prefix}bully
│𒆜 ${prefix}cuddle
│𒆜 ${prefix}cry
│𒆜 ${prefix}hug
│𒆜 ${prefix}awoo
│𒆜 ${prefix}kiss
│𒆜 ${prefix}lick
│𒆜 ${prefix}pat
│𒆜 ${prefix}smug
│𒆜 ${prefix}bonk
│𒆜 ${prefix}yeet
│𒆜 ${prefix}blush
│𒆜 ${prefix}smile
│𒆜 ${prefix}wave
│𒆜 ${prefix}highfive
│𒆜 ${prefix}handhold
│𒆜 ${prefix}nom
│𒆜 ${prefix}bite
│𒆜 ${prefix}glomp
│𒆜 ${prefix}slap
│𒆜 ${prefix}kill
│𒆜 ${prefix}happy
│𒆜 ${prefix}wink
│𒆜 ${prefix}poke
│𒆜 ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Voice Change Menu 」
│𒆜 ${prefix}bass
│𒆜 ${prefix}blown
│𒆜 ${prefix}deep
│𒆜 ${prefix}earrape
│𒆜 ${prefix}fast
│𒆜 ${prefix}fat
│𒆜 ${prefix}nightcore
│𒆜 ${prefix}reverse
│𒆜 ${prefix}robot
│𒆜 ${prefix}slow
│𒆜 ${prefix}smooth
╰❒ ${prefix}tupai

╭─❒ 「 Storage Menu 」
│𒆜 ${prefix}addvn
│𒆜 ${prefix}listvn
│𒆜 ${prefix}delvn
│𒆜 ${prefix}adddocument
│𒆜 ${prefix}listdocument
│𒆜 ${prefix}deldocument
│𒆜 ${prefix}addtext
│𒆜 ${prefix}listtext
│𒆜 ${prefix}deltext
│𒆜 ${prefix}addaudio
│𒆜 ${prefix}listaudio
│𒆜 ${prefix}delaudio
│𒆜 ${prefix}addimage
│𒆜 ${prefix}listimage
│𒆜 ${prefix}delimage
│𒆜 ${prefix}addvideo
│𒆜 ${prefix}listvideo
│𒆜 ${prefix}delvideo
│𒆜 ${prefix}addstik
│𒆜 ${prefix}delstik
╰❒ ${prefix}liststik

╭─❒ 「 Nsfw & Sfw 」
│𒆜 ${prefix}ahegao
│𒆜 ${prefix}anal
│𒆜 ${prefix}avatar2
│𒆜 ${prefix}baka
│𒆜 ${prefix}bdsm
│𒆜 ${prefix}bj
│𒆜 ${prefix}blowjob
│𒆜 ${prefix}boobs
│𒆜 ${prefix}classic
│𒆜 ${prefix}cuckold
│𒆜 ${prefix}cuddle
│𒆜 ${prefix}cum
│𒆜 ${prefix}cumarts
│𒆜 ${prefix}cumsluts
│𒆜 ${prefix}ero
│𒆜 ${prefix}erofeet
│𒆜 ${prefix}erokemonomimi
│𒆜 ${prefix}erokitsune
│𒆜 ${prefix}eroneko
│𒆜 ${prefix}eroyuri
│𒆜 ${prefix}feed
│𒆜 ${prefix}feet
│𒆜 ${prefix}feetgif
│𒆜 ${prefix}femdom
│𒆜 ${prefix}foot
│𒆜 ${prefix}foxgirl
│𒆜 ${prefix}futanari
│𒆜 ${prefix}gangbang
│𒆜 ${prefix}girl-solo
│𒆜 ${prefix}girl-solo-gif
│𒆜 ${prefix}glasses
│𒆜 ${prefix}hentai
│𒆜 ${prefix}hentai
│𒆜 ${prefix}hentai-gif
│𒆜 ${prefix}holo
│𒆜 ${prefix}holo2
│𒆜 ${prefix}holoero
│𒆜 ${prefix}hug
│𒆜 ${prefix}jahy
│𒆜 ${prefix}kemonomimi
│𒆜 ${prefix}kemonomimi2
│𒆜 ${prefix}keta
│𒆜 ${prefix}kiss
│𒆜 ${prefix}kitsune
│𒆜 ${prefix}kuni
│𒆜 ${prefix}lesbian
│𒆜 ${prefix}lizard
│𒆜 ${prefix}masturbation
│𒆜 ${prefix}meowi
│𒆜 ${prefix}neko
│𒆜 ${prefix}neko-gif
│𒆜 ${prefix}neko-sfw
│𒆜 ${prefix}neko2
│𒆜 ${prefix}nsfw-neko
│𒆜 ${prefix}orgy
│𒆜 ${prefix}panties
│𒆜 ${prefix}pat
│𒆜 ${prefix}poke
│𒆜 ${prefix}pussyart
│𒆜 ${prefix}pussywankgif
│𒆜 ${prefix}slap
│𒆜 ${prefix}smug
│𒆜 ${prefix}spank
│𒆜 ${prefix}tentacles
│𒆜 ${prefix}thighs
│𒆜 ${prefix}tickle
│𒆜 ${prefix}tits
│𒆜 ${prefix}trap
│𒆜 ${prefix}woof
│𒆜 ${prefix}yuri
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
│𒆜 ${prefix}1917text
│𒆜 ${prefix}angelwing
│𒆜 ${prefix}announofwin
│𒆜 ${prefix}birthdaycake
│𒆜 ${prefix}capercut
│𒆜 ${prefix}cardhalloween
│𒆜 ${prefix}cartoonstyle
│𒆜 ${prefix}christmascard 
│𒆜 ${prefix}christmasseason
│𒆜 ${prefix}covergamepubg
│𒆜 ${prefix}covergraffiti
│𒆜 ${prefix}dragonfire
│𒆜 ${prefix}embroider
│𒆜 ${prefix}fabrictext
│𒆜 ${prefix}facebookgold
│𒆜 ${prefix}facebooksilver
│𒆜 ${prefix}funnyanimations
│𒆜 ${prefix}funnyhalloween
│𒆜 ${prefix}galaxybat
│𒆜 ${prefix}galaxywallpaper
│𒆜 ${prefix}generalexam 
│𒆜 ${prefix}glowingtext
│𒆜 ${prefix}graffiti3d
│𒆜 ${prefix}graffititext
│𒆜 ${prefix}graffititext2
│𒆜 ${prefix}graffititext3
│𒆜 ${prefix}greetingcardvideo 
│𒆜 ${prefix}halloweenbats
│𒆜 ${prefix}heartcup
│𒆜 ${prefix}heartflashlight
│𒆜 ${prefix}horrorletter
│𒆜 ${prefix}icetext
│𒆜 ${prefix}instagramgold
│𒆜 ${prefix}instagramsilver
│𒆜 ${prefix}lightningpubg
│𒆜 ${prefix}lovecard
│𒆜 ${prefix}lovelycute
│𒆜 ${prefix}masteryavatar
│𒆜 ${prefix}merrycard
│𒆜 ${prefix}messagecoffee
│𒆜 ${prefix}metalstar
│𒆜 ${prefix}milkcake
│𒆜 ${prefix}moderngold
│𒆜 ${prefix}moderngold2
│𒆜 ${prefix}moderngold3
│𒆜 ${prefix}moderngoldsilver
│𒆜 ${prefix}multicolor
│𒆜 ${prefix}nameonheart
│𒆜 ${prefix}noeltext
│𒆜 ${prefix}projectyasuo
│𒆜 ${prefix}pubgbirthday
│𒆜 ${prefix}pubgglicthvideo 
│𒆜 ${prefix}pubgmascotlogo
│𒆜 ${prefix}puppycute
│𒆜 ${prefix}realembroidery
│𒆜 ${prefix}retrotext
│𒆜 ${prefix}rosebirthday
│𒆜 ${prefix}shirtclub
│𒆜 ${prefix}snowontext
│𒆜 ${prefix}starsnight
│𒆜 ${prefix}summerbeach
│𒆜 ${prefix}sunglightshadow
│𒆜 ${prefix}textcakes
│𒆜 ${prefix}texthalloween
│𒆜 ${prefix}textonglass
│𒆜 ${prefix}textsky
│𒆜 ${prefix}thundertext
│𒆜 ${prefix}twittergold
│𒆜 ${prefix}twittersilver
│𒆜 ${prefix}viettel
│𒆜 ${prefix}vintagetelevision
│𒆜 ${prefix}watercolor2
│𒆜 ${prefix}womansday
│𒆜 ${prefix}writeblood
│𒆜 ${prefix}writegalaxy
│𒆜 ${prefix}writehorror
│𒆜 ${prefix}youtubegold
│𒆜 ${prefix}youtubesilver
╰❒ ${prefix}zombie3d


╭─❒ 「 Textpro Menu 」
│𒆜 ${prefix}halloween2 text|text2
│𒆜 ${prefix}horror text|text2
│𒆜 ${prefix}game8bit text|text2
│𒆜 ${prefix}layered text|text2
│𒆜 ${prefix}glitch2 text|text2
│𒆜 ${prefix}cool-graffiti text|text2
│𒆜 ${prefix}cool-wall-graffiti text|text2
│𒆜 ${prefix}realistic text|text2
│𒆜 ${prefix}space3d text|text2
│𒆜 ${prefix}glitch-tiktok text|text2
│𒆜 ${prefix}stone text|text2
│𒆜 ${prefix}marvel text|text2
│𒆜 ${prefix}marvel2 text|text2
│𒆜 ${prefix}pornhub text|text2
│𒆜 ${prefix}avengers text|text2
│𒆜 ${prefix}metal-rainbow text|text2
│𒆜 ${prefix}metal-gold text|text2
│𒆜 ${prefix}metal-galaxy text|text2
│𒆜 ${prefix}halloween2 text|text2
│𒆜 ${prefix}lion text|text2
│𒆜 ${prefix}wolf-black-white text|text2
│𒆜 ${prefix}wolf-galaxy text|text2
│𒆜 ${prefix}ninja text|text2
│𒆜 ${prefix}3dsteel text|text2
│𒆜 ${prefix}horror2 text|text2
│𒆜 ${prefix}lava text|text2
│𒆜 ${prefix}bagel text|text2
│𒆜 ${prefix}blackpink text
│𒆜 ${prefix}rainbow2 text
│𒆜 ${prefix}water-pipe text
│𒆜 ${prefix}halloween text
│𒆜 ${prefix}sketch text
│𒆜 ${prefix}sircuit text
│𒆜 ${prefix}discovery text
│𒆜 ${prefix}metallic2 text
│𒆜 ${prefix}fiction text
│𒆜 ${prefix}demon text
│𒆜 ${prefix}transformer text
│𒆜 ${prefix}berry text
│𒆜 ${prefix}thunder text
│𒆜 ${prefix}magma text
│𒆜 ${prefix}3dstone text
│𒆜 ${prefix}neon text
│𒆜 ${prefix}glitch text
│𒆜 ${prefix}harry-potter text
│𒆜 ${prefix}embossed text
│𒆜 ${prefix}broken text
│𒆜 ${prefix}papercut text
│𒆜 ${prefix}gradient text
│𒆜 ${prefix}glossy text
│𒆜 ${prefix}watercolor text
│𒆜 ${prefix}multicolor text
│𒆜 ${prefix}neon-devil text
│𒆜 ${prefix}underwater text
│𒆜 ${prefix}bear text
│𒆜 ${prefix}wonderful-graffiti text
│𒆜 ${prefix}christmas text
│𒆜 ${prefix}neon-light text
│𒆜 ${prefix}snow text
│𒆜 ${prefix}cloudsky text
│𒆜 ${prefix}luxury2 text
│𒆜 ${prefix}gradient2 text
│𒆜 ${prefix}summer text
│𒆜 ${prefix}writing text
│𒆜 ${prefix}engraved text
│𒆜 ${prefix}summery text
│𒆜 ${prefix}3dglue text
│𒆜 ${prefix}metaldark text
│𒆜 ${prefix}neonlight text
│𒆜 ${prefix}oscar text
│𒆜 ${prefix}minion text
│𒆜 ${prefix}holographic text
│𒆜 ${prefix}purple text
│𒆜 ${prefix}glossy-blue text
│𒆜 ${prefix}deluxe-gold text
│𒆜 ${prefix}glossy-carbon text
│𒆜 ${prefix}fabric text
│𒆜 ${prefix}neonc text
│𒆜 ${prefix}newyear text
│𒆜 ${prefix}newyear2 text
│𒆜 ${prefix}metal-silver text
│𒆜 ${prefix}xmas text
│𒆜 ${prefix}blood text
│𒆜 ${prefix}dark-gold text
│𒆜 ${prefix}joker text
│𒆜 ${prefix}wicker text
│𒆜 ${prefix}natural text
│𒆜 ${prefix}firework text
│𒆜 ${prefix}skeleton text
│𒆜 ${prefix}red-balloon text
│𒆜 ${prefix}purple-balloon text
│𒆜 ${prefix}pink-balloon text
│𒆜 ${prefix}green-balloon text
│𒆜 ${prefix}cyan-balloon text
│𒆜 ${prefix}blue-balloon text
│𒆜 ${prefix}gold-balloon text
│𒆜 ${prefix}steel text
│𒆜 ${prefix}gloss text
│𒆜 ${prefix}denim text
│𒆜 ${prefix}decorate text
│𒆜 ${prefix}decorate-purple text
│𒆜 ${prefix}peridot text
│𒆜 ${prefix}rock text
│𒆜 ${prefix}yellow-glass text
│𒆜 ${prefix}purple-glass text
│𒆜 ${prefix}orange-glass text
│𒆜 ${prefix}green-glass text
│𒆜 ${prefix}cyan-glass text
│𒆜 ${prefix}blue-glass text
│𒆜 ${prefix}red-glass text
│𒆜 ${prefix}purple-shiny-glass text
│𒆜 ${prefix}captain-as2 text
│𒆜 ${prefix}robot text
│𒆜 ${prefix}equalizer text
│𒆜 ${prefix}toxic text
│𒆜 ${prefix}pink-sparkling text
│𒆜 ${prefix}blue-sparkling text
│𒆜 ${prefix}green-sparkling text
│𒆜 ${prefix}purple-sparkling text
│𒆜 ${prefix}gold-sparkling text
│𒆜 ${prefix}red-sparkling text
│𒆜 ${prefix}cyan-sparkling text
│𒆜 ${prefix}decorative text
│𒆜 ${prefix}chocolate text
│𒆜 ${prefix}strawberry text
│𒆜 ${prefix}koifish text
│𒆜 ${prefix}bread text
│𒆜 ${prefix}matrix text
│𒆜 ${prefix}blood2 text
│𒆜 ${prefix}neonligth2 text
│𒆜 ${prefix}thunder2 text
│𒆜 ${prefix}3dbox text
│𒆜 ${prefix}neon2 text
│𒆜 ${prefix}road-warning text
│𒆜 ${prefix}bokeh text
│𒆜 ${prefix}green-neon text
│𒆜 ${prefix}advanced text
│𒆜 ${prefix}dropwater text
│𒆜 ${prefix}wall text
│𒆜 ${prefix}chrismast text
│𒆜 ${prefix}honey2 text
│𒆜 ${prefix}drug text
│𒆜 ${prefix}marble text
│𒆜 ${prefix}marble2 text
│𒆜 ${prefix}ice text
│𒆜 ${prefix}juice text
│𒆜 ${prefix}rusty text
│𒆜 ${prefix}abstra text
│𒆜 ${prefix}biscuit text
│𒆜 ${prefix}wood text
│𒆜 ${prefix}scifi text
│𒆜 ${prefix}metal-rainbow text
│𒆜 ${prefix}metal-rose-gold text
│𒆜 ${prefix}purple-gem text
│𒆜 ${prefix}shiny text 
│𒆜 ${prefix}yellow-jewelry text
│𒆜 ${prefix}silver-jewelry text
│𒆜 ${prefix}red-jewelry text
│𒆜 ${prefix}purple-jewelry text
│𒆜 ${prefix}orange-jewelry text
│𒆜 ${prefix}green-jewelry text
│𒆜 ${prefix}cyan-jewelry text
│𒆜 ${prefix}blue-jewelry text
│𒆜 ${prefix}hot-metal text
│𒆜 ${prefix}golden text
│𒆜 ${prefix}blue-glitter text
│𒆜 ${prefix}purple-glitter text
│𒆜 ${prefix}pink-glitter text
│𒆜 ${prefix}green-glitter text
│𒆜 ${prefix}silver-glitter text
│𒆜 ${prefix}gold-glitter text
│𒆜 ${prefix}bronze-glitter text
│𒆜 ${prefix}eroded-metal text
│𒆜 ${prefix}carbon text
│𒆜 ${prefix}candy text
│𒆜 ${prefix}blue-metal text
│𒆜 ${prefix}blue-gem text
│𒆜 ${prefix}3dchrome text
│𒆜 ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
 

╭─❒ 「 Others 」
│𒆜 ${prefix}afk [reason]
│𒆜 ${prefix}translate kode_bahasa text
│𒆜 ${prefix}kalkulator [query]
│𒆜 ${prefix}smeme [text]
│𒆜 ${prefix}smeme2 [text|text]
│𒆜 ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
│𒆜 ${prefix}tembak
│𒆜 ${prefix}tolak
│𒆜 ${prefix}terima
│𒆜 ${prefix}putusin
│𒆜 ${prefix}ikhlasin
│𒆜 ${prefix}cekpacar
│𒆜 ${prefix}kuismath
│𒆜 ${prefix}tebakgambar
│𒆜 ${prefix}tebakkata
│𒆜 ${prefix}tebakbendera
│𒆜 ${prefix}tebakkalimat
│𒆜 ${prefix}tebaksiapa
│𒆜 ${prefix}tebakkabupaten
│𒆜 ${prefix}tebakkimia
│𒆜 ${prefix}tebaklirik
│𒆜 ${prefix}tebaktebakan
│𒆜 ${prefix}tekateki
│𒆜 ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
│𒆜 ${prefix}chika
│𒆜 ${prefix}delvira
│𒆜 ${prefix}ayu
│𒆜 ${prefix}bunga
│𒆜 ${prefix}aura
│𒆜 ${prefix}nisa
│𒆜 ${prefix}ziva
│𒆜 ${prefix}yana
│𒆜 ${prefix}viona
│𒆜 ${prefix}syania
│𒆜 ${prefix}riri
│𒆜 ${prefix}syifa
│𒆜 ${prefix}mama_gina
│𒆜 ${prefix}alcakenya
│𒆜 ${prefix}mangayutri
│𒆜 ${prefix}rikagusriani
│𒆜 ${prefix}asupan
│𒆜 ${prefix}bocil
│𒆜 ${prefix}geayubi
│𒆜 ${prefix}santuy
│𒆜 ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
│𒆜 ${prefix}awoawo
│𒆜 ${prefix}benedict
│𒆜 ${prefix}chat
│𒆜 ${prefix}dbfly
│𒆜 ${prefix}dino_kuning
│𒆜 ${prefix}doge
│𒆜 ${prefix}gojosatoru
│𒆜 ${prefix}hope_boy
│𒆜 ${prefix}jisoo
│𒆜 ${prefix}kr_robot
│𒆜 ${prefix}kucing
│𒆜 ${prefix}lonte
│𒆜 ${prefix}manusia_lidi
│𒆜 ${prefix}menjamet
│𒆜 ${prefix}meow
│𒆜 ${prefix}nicholas
│𒆜 ${prefix}patrick
│𒆜 ${prefix}popoci
│𒆜 ${prefix}sponsbob
│𒆜 ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni

╭─❒ 「 Random Cewe 」
│𒆜 ${prefix}china 
│𒆜 ${prefix}indonesia 
│𒆜 ${prefix}malaysia 
│𒆜 ${prefix}thailand 
│𒆜 ${prefix}korea 
│𒆜 ${prefix}japan 
│𒆜 ${prefix}vietnam 
│𒆜 ${prefix}jenni 
│𒆜 ${prefix}jiso 
│𒆜 ${prefix}lisa  
╰❒ ${prefix}rose

╭─❒ 「 Logo Menu 」
│𒆜 ${prefix}anonymous2
│𒆜 ${prefix}astronotspace
│𒆜 ${prefix}avatar3q360
│𒆜 ${prefix}avatarff
│𒆜 ${prefix}avatarleagueofking
│𒆜 ${prefix}avatarlolbyname
│𒆜 ${prefix}avataroverwatch
│𒆜 ${prefix}bannerofaov
│𒆜 ${prefix}bannerofaov2
│𒆜 ${prefix}bannerofapex
│𒆜 ${prefix}banneroffreefire
│𒆜 ${prefix}banneroflol
│𒆜 ${prefix}bannerofoverwatch
│𒆜 ${prefix}bannerofpubg
│𒆜 ${prefix}bannerytcsgo
│𒆜 ${prefix}beautifulgalaxylol
│𒆜 ${prefix}beautifulshimmering
│𒆜 ${prefix}blueneon
│𒆜 ${prefix}circlemarcotteam
│𒆜 ${prefix}colorfulpubg
│𒆜 ${prefix}companylogo
│𒆜 ${prefix}companylogo2
│𒆜 ${prefix}coverbannerlol
│𒆜 ${prefix}coverdota2
│𒆜 ${prefix}coverfblol
│𒆜 ${prefix}coverfreefirefb
│𒆜 ${prefix}coverleagueofking
│𒆜 ${prefix}coverloknew
│𒆜 ${prefix}coverofwarface
│𒆜 ${prefix}coveronepiecefb
│𒆜 ${prefix}crossfirecover
│𒆜 ${prefix}crossfirestyle
│𒆜 ${prefix}csgocover
│𒆜 ${prefix}cutegirlgamer
│𒆜 ${prefix}cyberhunterfb
│𒆜 ${prefix}dragonballfb
│𒆜 ${prefix}effect3donbeach
│𒆜 ${prefix}elegantrotation
│𒆜 ${prefix}fbgamepubgcover
│𒆜 ${prefix}footballteam
│𒆜 ${prefix}gaminglogo4fvs
│𒆜 ${prefix}gamingmascot
│𒆜 ${prefix}gradientlogo
│𒆜 ${prefix}gunlogogaming
│𒆜 ${prefix}introvideomaker
│𒆜 ${prefix}letterlogos 
│𒆜 ${prefix}logoaccording 
│𒆜 ${prefix}logogamingassasin 
│𒆜 ${prefix}lolcoverbyname 
│𒆜 ${prefix}lolpentakill 
│𒆜 ${prefix}lolwallpaper 
│𒆜 ${prefix}maketeamlogo 
│𒆜 ${prefix}mascotstyle 
│𒆜 ${prefix}metalmascot 
│𒆜 ${prefix}newlolavatar 
│𒆜 ${prefix}overwatchcover 
│𒆜 ${prefix}overwatchwallpaper 
│𒆜 ${prefix}pencilsketch 
│𒆜 ${prefix}pubgcutelogo 
│𒆜 ${prefix}pubglogomaker 
│𒆜 ${prefix}rovwallpaper 
│𒆜 ${prefix}rovwallpaperhd 
│𒆜 ${prefix}teamlogo 
│𒆜 ${prefix}wallpaperaov 
╰❒ ${prefix}wallpaperml 


╭─❒ 「 Islamic Menu 」
│𒆜 ${prefix}asmaulhusna
│𒆜 ${prefix}kisahnabi [nabi]
│𒆜 ${prefix}jadwalshalat [daerah]
│𒆜 ${prefix}randomquran
│𒆜 ${prefix}randomquran2
│𒆜 ${prefix}listsurah
│𒆜 ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
│𒆜 ${prefix}sound1
│𒆜 ${prefix}sound2
│𒆜 ${prefix}sound3
│𒆜 ${prefix}sound4
│𒆜 ${prefix}sound5
│𒆜 ${prefix}sound6
│𒆜 ${prefix}sound7
│𒆜 ${prefix}sound8
│𒆜 ${prefix}sound9
│𒆜 ${prefix}sound10
│𒆜 ${prefix}sound11
│𒆜 ${prefix}sound12
│𒆜 ${prefix}sound13
│𒆜 ${prefix}sound14
│𒆜 ${prefix}sound15
│𒆜 ${prefix}sound16
│𒆜 ${prefix}sound17
│𒆜 ${prefix}sound18 
│𒆜 ${prefix}sound19
│𒆜 ${prefix}sound20
│𒆜 ${prefix}sound21
│𒆜 ${prefix}sound22
│𒆜 ${prefix}sound23
│𒆜 ${prefix}sound24
│𒆜 ${prefix}sound25
│𒆜 ${prefix}sound26
│𒆜 ${prefix}sound27
│𒆜 ${prefix}sound28
│𒆜 ${prefix}sound29
│𒆜 ${prefix}sound30
│𒆜 ${prefix}sound31
│𒆜 ${prefix}sound32
│𒆜 ${prefix}sound33
│𒆜 ${prefix}sound34
│𒆜 ${prefix}sound35
│𒆜 ${prefix}sound36
│𒆜 ${prefix}sound37
│𒆜 ${prefix}sound38
│𒆜 ${prefix}sound39
│𒆜 ${prefix}sound40
│𒆜 ${prefix}sound41
│𒆜 ${prefix}sound42
│𒆜 ${prefix}sound43
│𒆜 ${prefix}sound44
│𒆜 ${prefix}sound45
│𒆜 ${prefix}sound46
│𒆜 ${prefix}sound47
│𒆜 ${prefix}sound48
│𒆜 ${prefix}sound49
│𒆜 ${prefix}sound50
│𒆜 ${prefix}sound51
│𒆜 ${prefix}sound52
│𒆜 ${prefix}sound53
│𒆜 ${prefix}sound54
│𒆜 ${prefix}sound55
│𒆜 ${prefix}sound56
│𒆜 ${prefix}sound57
│𒆜 ${prefix}sound58
│𒆜 ${prefix}sound59
│𒆜 ${prefix}sound60
│𒆜 ${prefix}sound61
│𒆜 ${prefix}sound62
│𒆜 ${prefix}sound63
│𒆜 ${prefix}sound64
│𒆜 ${prefix}sound65
│𒆜 ${prefix}sound66
│𒆜 ${prefix}sound67
│𒆜 ${prefix}sound68
│𒆜 ${prefix}sound69
╰❒ ${prefix}sound70

╭─❒ 「 TqTo 」 
│𒆜 My God
│𒆜 My Parents
│𒆜 Fatih A.
│𒆜 Ferdiz
│𒆜 DikaArdnt
│𒆜 Mhankbarbar
│𒆜 Nurutomo
│𒆜 ZeeoneOfc
│𒆜 Penyedia Module
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
│𒆜 𝖴𝗆𝗎𝗋 :
│𒆜 𝖦𝖾𝗇𝖽𝖾𝗋 :
│𒆜 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 𝗝𝗢-𝗝0 𝗕𝗢𝗧 」 ------*


http://wa.me/918593074023
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 𝗝𝗢-𝗝0 𝗕𝗢𝗧 」 -------*

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
│𒆜 ${prefix}owner
│𒆜 ${prefix}rules
│𒆜 ${prefix}sc
│𒆜 ${prefix}ping
│𒆜 ${prefix}runtime
│𒆜 ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│𒆜 ${prefix}setmenu [query]
│𒆜 ${prefix}setmenu katalog
│𒆜 ${prefix}setmenu katalog2
│𒆜 ${prefix}setmenu list
│𒆜 ${prefix}setwm packname|author
│𒆜 ${prefix}sendsesi
│𒆜 ${prefix}listpc
│𒆜 ${prefix}listgc
│𒆜 ${prefix}broadcast [text]
│𒆜 ${prefix}bc [text]
│𒆜 ${prefix}bcgc 
│𒆜 ${prefix}bcimage
│𒆜 ${prefix}bcaudio
│𒆜 ${prefix}bcstiker
│𒆜 ${prefix}bcvn
│𒆜 ${prefix}bcvideo
│𒆜 ${prefix}banuser
│𒆜 ${prefix}unban
│𒆜 ${prefix}banned
│𒆜 ${prefix}listbanned
│𒆜 ${prefix}block
│𒆜 ${prefix}ublock
│𒆜 ${prefix}listblock
│𒆜 ${prefix}addpremium
│𒆜 ${prefix}delpremium
│𒆜 ${prefix}listpremium
│𒆜 ${prefix}nsfw [on/off]
│𒆜 ${prefix}mute [on/off]
│𒆜 ${prefix}autoblok212 [on/off]
│𒆜 ${prefix}banchat
│𒆜 ${prefix}unbanchat
│𒆜 ${prefix}autorespond [on/off]
│𒆜 ${prefix}antiviewonce [on/off]
│𒆜 ${prefix}antidelete [on/off]
│𒆜 ${prefix}autobio [on/off]
│𒆜 ${prefix}anticall [on/off]
│𒆜 ${prefix}join [link]
│𒆜 ${prefix}self
│𒆜 ${prefix}public [only bot]
│𒆜 ${prefix}del [reply pesan bot]
│𒆜 ${prefix}pppanjang
│𒆜 ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│𒆜 ${prefix}setcmd [reply stiker]
│𒆜 ${prefix}delcmd [reply stiker]
│𒆜 ${prefix}listcmd
│𒆜 ${prefix}absen
│𒆜 ${prefix}cekabsen
│𒆜 ${prefix}deleteabsen
│𒆜 ${prefix}absenstart
│𒆜 ${prefix}addmsg [nama file]
│𒆜 ${prefix}getmsg [nama file]
│𒆜 ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│𒆜 ${prefix}addsewa
│𒆜 ${prefix}delsewa
│𒆜 ${prefix}listsewa
│𒆜 ${prefix}ceksewa
│𒆜 ${prefix}delsewa
│𒆜 ${prefix}register
│𒆜 ${prefix}unregister
│𒆜 ${prefix}ceksn
│𒆜 ${prefix}listonline
│𒆜 ${prefix}sider
│𒆜 ${prefix}wm packname|author
│𒆜 ${prefix}infochat
│𒆜 ${prefix}setdesk [text]
│𒆜 ${prefix}setppgrup [reply image]
│𒆜 ${prefix}pppanjanggc
│𒆜 ${prefix}setpppanjanggc
│𒆜 ${prefix}revoke
│𒆜 ${prefix}leave
│𒆜 ${prefix}add [62***]
│𒆜 ${prefix}kick @tag
│𒆜 ${prefix}leave
│𒆜 ${prefix}linkgc
│𒆜 ${prefix}welcome [on/off]
│𒆜 ${prefix}goodbye [on/off]
│𒆜 ${prefix}demotedetect [on/off]
│𒆜 ${prefix}promotedetect  [on/off]
│𒆜 ${prefix}setwelcome
│𒆜 ${prefix}updatewelcome
│𒆜 ${prefix}delwelcome
│𒆜 ${prefix}cekwelcome
│𒆜 ${prefix}setgoodbye
│𒆜 ${prefix}updategoodbye
│𒆜 ${prefix}delgoodbye
│𒆜 ${prefix}cekgoodbye
│𒆜 ${prefix}setpromote
│𒆜 ${prefix}updatepromote
│𒆜 ${prefix}setdemote
│𒆜 ${prefix}updatedemote
│𒆜 ${prefix}cekpromote
│𒆜 ${prefix}cekdemote
│𒆜 ${prefix}delpromote
│𒆜 ${prefix}deldemote
│𒆜 ${prefix}nsfw [on/off]
│𒆜 ${prefix}antilink [on/off]
│𒆜 ${prefix}antiwame [on/off]
│𒆜 ${prefix}take packname|author
│𒆜 ${prefix}group [open/close]
│𒆜 ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│𒆜 ${prefix}quotesanime
│𒆜 ${prefix}anime [query]
│𒆜 ${prefix}animeinfo
│𒆜 ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│𒆜 ${prefix}stickertag
│𒆜 ${prefix}videotag [query]
│𒆜 ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│𒆜 ${prefix}mlstalk [id|zona id]
│𒆜 ${prefix}ffstalk [id]
│𒆜 ${prefix}igstalk [username]
│𒆜 ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│𒆜 ${prefix}ytsearch [query]
│𒆜 ${prefix}openai [query]
│𒆜 ${prefix}openaiimg [query]
│𒆜 ${prefix}chatgpt [query]
│𒆜 ${prefix}githubsearch [query]
│𒆜 ${prefix}kbbi [query]
│𒆜 ${prefix}lirik [query]
│𒆜 ${prefix}wallpaper [query]
│𒆜 ${prefix}google [query]
│𒆜 ${prefix}wikimedia [query]
│𒆜 ${prefix}apksearch
│𒆜 ${prefix}findapk
│𒆜 ${prefix}hentai
│𒆜 ${prefix}wattpad [query]
│𒆜 ${prefix}webtoons [query]
│𒆜 ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│𒆜 ${prefix}emoji [😭]
│𒆜 ${prefix}emojimix [😭+💩]
│𒆜 ${prefix}toaudio [video]
│𒆜 ${prefix}tomp3 [video]
│𒆜 ${prefix}tovn [video]
│𒆜 ${prefix}stiker [reply image]
│𒆜 ${prefix}tourl [image/video]
│𒆜 ${prefix}ssweb [url]
│𒆜 ${prefix}togif [sticker]
│𒆜 ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│𒆜 ${prefix}wanted [reply image/stiker]
│𒆜 ${prefix}utatoo [reply image/stiker]
│𒆜 ${prefix}unsharpen [reply image/stiker]
│𒆜 ${prefix}thanos [reply image/stiker]
│𒆜 ${prefix}sniper [reply image/stiker]
│𒆜 ${prefix}sharpen [reply image/stiker]
│𒆜 ${prefix}sepia [reply image/stiker]
│𒆜 ${prefix}scary [reply image/stiker]
│𒆜 ${prefix}rip [reply image/stiker]
│𒆜 ${prefix}redple [reply image/stiker]
│𒆜 ${prefix}rejected [reply image/stiker]
│𒆜 ${prefix}posterize [reply image/stiker]
│𒆜 ${prefix}ps4 [reply image/stiker]
│𒆜 ${prefix}pixelize [reply image/stiker]
│𒆜 ${prefix}missionpassed [reply image/stiker]
│𒆜 ${prefix}moustache [reply image/stiker]
│𒆜 ${prefix}lookwhatkarenhave [reply image/stiker]
│𒆜 ${prefix}jail [reply image/stiker]
│𒆜 ${prefix}invert [reply image/stiker]
│𒆜 ${prefix}instagram [reply image/stiker]
│𒆜 ${prefix}greyscale [reply image/stiker]
│𒆜 ${prefix}glitch [reply image/stiker]
│𒆜 ${prefix}gay [reply image/stiker]
│𒆜 ${prefix}frame [reply image/stiker]
│𒆜 ${prefix}fire [reply image/stiker]
│𒆜 ${prefix}distort [reply image/stiker]
│𒆜 ${prefix}dictator [reply image/stiker]
│𒆜 ${prefix}deepfry [reply image/stiker]
│𒆜 ${prefix}ddungeon [reply image/stiker]
│𒆜 ${prefix}circle [reply image/stiker]
│𒆜 ${prefix}challenger [reply image/stiker]
│𒆜 ${prefix}burn [reply image/stiker]
│𒆜 ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│𒆜 ${prefix}jail [reply image/stiker]
│𒆜 ${prefix}red [reply image/stiker]
│𒆜 ${prefix}gay [reply image/stiker]
│𒆜 ${prefix}bloo [reply image/stiker]
│𒆜 ${prefix}blue [reply image/stiker]
│𒆜 ${prefix}sepia [reply image/stiker]
│𒆜 ${prefix}green [reply image/stiker]
│𒆜 ${prefix}glass [reply image/stiker]
│𒆜 ${prefix}invert [reply image/stiker]
│𒆜 ${prefix}blurple [reply image/stiker]
│𒆜 ${prefix}blurple2 [reply image/stiker]
│𒆜 ${prefix}wasted [reply image/stiker]
│𒆜 ${prefix}passed [reply image/stiker]
│𒆜 ${prefix}triggered [reply image/stiker]
│𒆜 ${prefix}comrade [reply image/stiker]
│𒆜 ${prefix}greyscale [reply image/stiker]
│𒆜 ${prefix}threshold [reply image/stiker]
│𒆜 ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│𒆜 ${prefix}tiktok [link]
│𒆜 ${prefix}tiktoknowm [link]
│𒆜 ${prefix}tiktokwm [link]
│𒆜 ${prefix}tiktokaudio [link]
│𒆜 ${prefix}ytdl [link]
│𒆜 ${prefix}play [query]
│𒆜 ${prefix}ytmp3 [link]
│𒆜 ${prefix}ytshortmp3 [link]
│𒆜 ${prefix}ytmp4 [link]
│𒆜 ${prefix}ytshorts [link]
│𒆜 ${prefix}facebook [link]
│𒆜 ${prefix}facebooksd [link]
│𒆜 ${prefix}facebookhd [link]
│𒆜 ${prefix}fbaudio [link]
│𒆜 ${prefix}igstory [username]
│𒆜 ${prefix}igdl [link]
│𒆜 ${prefix}igphoto [link]
│𒆜 ${prefix}igvideo [link]
│𒆜 ${prefix}igreels [link]
│𒆜 ${prefix}igtv [link]
│𒆜 ${prefix}soundcloud [link]
│𒆜 ${prefix}gitclone [link repo]
│𒆜 ${prefix}gitrepo [username repo branch]
│𒆜 ${prefix}mediafire [link]
│𒆜 ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│𒆜 ${prefix}loli
│𒆜 ${prefix}neko
│𒆜 ${prefix}waifu
│𒆜 ${prefix}shinobu
│𒆜 ${prefix}megumin
│𒆜 ${prefix}bully
│𒆜 ${prefix}cuddle
│𒆜 ${prefix}cry
│𒆜 ${prefix}hug
│𒆜 ${prefix}awoo
│𒆜 ${prefix}kiss
│𒆜 ${prefix}lick
│𒆜 ${prefix}pat
│𒆜 ${prefix}smug
│𒆜 ${prefix}bonk
│𒆜 ${prefix}yeet
│𒆜 ${prefix}blush
│𒆜 ${prefix}smile
│𒆜 ${prefix}wave
│𒆜 ${prefix}highfive
│𒆜 ${prefix}handhold
│𒆜 ${prefix}nom
│𒆜 ${prefix}bite
│𒆜 ${prefix}glomp
│𒆜 ${prefix}slap
│𒆜 ${prefix}kill
│𒆜 ${prefix}happy
│𒆜 ${prefix}wink
│𒆜 ${prefix}poke
│𒆜 ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│𒆜 ${prefix}cuddle
│𒆜 ${prefix}feed
│𒆜 ${prefix}foxgirl
│𒆜 ${prefix}kemonomimi2
│𒆜 ${prefix}woof
│𒆜 ${prefix}holo2
│𒆜 ${prefix}hug
│𒆜 ${prefix}kiss
│𒆜 ${prefix}lizard
│𒆜 ${prefix}meowi
│𒆜 ${prefix}neko2
│𒆜 ${prefix}pat
│𒆜 ${prefix}poke
│𒆜 ${prefix}slap
│𒆜 ${prefix}tickle
│𒆜 ${prefix}baka
│𒆜 ${prefix}smug
│𒆜 ${prefix}neko-sfw
│𒆜 ${prefix}hentai
│𒆜 ${prefix}hentai-gif
│𒆜 ${prefix}spank
│𒆜 ${prefix}blowjob
│𒆜 ${prefix}cumarts
│𒆜 ${prefix}eroyuri
│𒆜 ${prefix}eroneko
│𒆜 ${prefix}erokemonomimi
│𒆜 ${prefix}erokitsune
│𒆜 ${prefix}ero
│𒆜 ${prefix}feet
│𒆜 ${prefix}erofeet
│𒆜 ${prefix}feetgif
│𒆜 ${prefix}femdom
│𒆜 ${prefix}futanari
│𒆜 ${prefix}hentai
│𒆜 ${prefix}holoero
│𒆜 ${prefix}holo
│𒆜 ${prefix}keta
│𒆜 ${prefix}kitsune
│𒆜 ${prefix}kemonomimi
│𒆜 ${prefix}pussyart
│𒆜 ${prefix}pussywankgif
│𒆜 ${prefix}girl-solo
│𒆜 ${prefix}girl-solo-gif
│𒆜 ${prefix}tits
│𒆜 ${prefix}trap
│𒆜 ${prefix}yuri
│𒆜 ${prefix}avatar2
│𒆜 ${prefix}anal
│𒆜 ${prefix}bj
│𒆜 ${prefix}boobs
│𒆜 ${prefix}classic
│𒆜 ${prefix}cumsluts
│𒆜 ${prefix}kuni
│𒆜 ${prefix}lesbian
│𒆜 ${prefix}neko
│𒆜 ${prefix}neko-gif
│𒆜 ${prefix}ahegao
│𒆜 ${prefix}bdsm
│𒆜 ${prefix}cuckold
│𒆜 ${prefix}cum
│𒆜 ${prefix}foot
│𒆜 ${prefix}gangbang
│𒆜 ${prefix}glasses
│𒆜 ${prefix}jahy
│𒆜 ${prefix}masturbation
│𒆜 ${prefix}nsfw-neko
│𒆜 ${prefix}orgy
│𒆜 ${prefix}panties
│𒆜 ${prefix}tentacles
│𒆜 ${prefix}thighs
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│𒆜 ${prefix}halloween2 text|text2
│𒆜 ${prefix}horror text|text2
│𒆜 ${prefix}game8bit text|text2
│𒆜 ${prefix}layered text|text2
│𒆜 ${prefix}glitch2 text|text2
│𒆜 ${prefix}cool-graffiti text|text2
│𒆜 ${prefix}cool-wall-graffiti text|text2
│𒆜 ${prefix}realistic text|text2
│𒆜 ${prefix}space3d text|text2
│𒆜 ${prefix}glitch-tiktok text|text2
│𒆜 ${prefix}stone text|text2
│𒆜 ${prefix}marvel text|text2
│𒆜 ${prefix}marvel2 text|text2
│𒆜 ${prefix}pornhub text|text2
│𒆜 ${prefix}avengers text|text2
│𒆜 ${prefix}metal-rainbow text|text2
│𒆜 ${prefix}metal-gold text|text2
│𒆜 ${prefix}metal-galaxy text|text2
│𒆜 ${prefix}halloween2 text|text2
│𒆜 ${prefix}lion text|text2
│𒆜 ${prefix}wolf-black-white text|text2
│𒆜 ${prefix}wolf-galaxy text|text2
│𒆜 ${prefix}ninja text|text2
│𒆜 ${prefix}3dsteel text|text2
│𒆜 ${prefix}horror2 text|text2
│𒆜 ${prefix}lava text|text2
│𒆜 ${prefix}bagel text|text2
│𒆜 ${prefix}blackpink text
│𒆜 ${prefix}rainbow2 text
│𒆜 ${prefix}water-pipe text
│𒆜 ${prefix}halloween text
│𒆜 ${prefix}sketch text
│𒆜 ${prefix}sircuit text
│𒆜 ${prefix}discovery text
│𒆜 ${prefix}metallic2 text
│𒆜 ${prefix}fiction text
│𒆜 ${prefix}demon text
│𒆜 ${prefix}transformer text
│𒆜 ${prefix}berry text
│𒆜 ${prefix}thunder text
│𒆜 ${prefix}magma text
│𒆜 ${prefix}3dstone text
│𒆜 ${prefix}neon text
│𒆜 ${prefix}glitch text
│𒆜 ${prefix}harry-potter text
│𒆜 ${prefix}embossed text
│𒆜 ${prefix}broken text
│𒆜 ${prefix}papercut text
│𒆜 ${prefix}gradient text
│𒆜 ${prefix}glossy text
│𒆜 ${prefix}watercolor text
│𒆜 ${prefix}multicolor text
│𒆜 ${prefix}neon-devil text
│𒆜 ${prefix}underwater text
│𒆜 ${prefix}bear text
│𒆜 ${prefix}wonderful-graffiti text
│𒆜 ${prefix}christmas text
│𒆜 ${prefix}neon-light text
│𒆜 ${prefix}snow text
│𒆜 ${prefix}cloudsky text
│𒆜 ${prefix}luxury2 text
│𒆜 ${prefix}gradient2 text
│𒆜 ${prefix}summer text
│𒆜 ${prefix}writing text
│𒆜 ${prefix}engraved text
│𒆜 ${prefix}summery text
│𒆜 ${prefix}3dglue text
│𒆜 ${prefix}metaldark text
│𒆜 ${prefix}neonlight text
│𒆜 ${prefix}oscar text
│𒆜 ${prefix}minion text
│𒆜 ${prefix}holographic text
│𒆜 ${prefix}purple text
│𒆜 ${prefix}glossy-blue text
│𒆜 ${prefix}deluxe-gold text
│𒆜 ${prefix}glossy-carbon text
│𒆜 ${prefix}fabric text
│𒆜 ${prefix}neonc text
│𒆜 ${prefix}newyear text
│𒆜 ${prefix}newyear2 text
│𒆜 ${prefix}metal-silver text
│𒆜 ${prefix}xmas text
│𒆜 ${prefix}blood text
│𒆜 ${prefix}dark-gold text
│𒆜 ${prefix}joker text
│𒆜 ${prefix}wicker text
│𒆜 ${prefix}natural text
│𒆜 ${prefix}firework text
│𒆜 ${prefix}skeleton text
│𒆜 ${prefix}red-balloon text
│𒆜 ${prefix}purple-balloon text
│𒆜 ${prefix}pink-balloon text
│𒆜 ${prefix}green-balloon text
│𒆜 ${prefix}cyan-balloon text
│𒆜 ${prefix}blue-balloon text
│𒆜 ${prefix}gold-balloon text
│𒆜 ${prefix}steel text
│𒆜 ${prefix}gloss text
│𒆜 ${prefix}denim text
│𒆜 ${prefix}decorate text
│𒆜 ${prefix}decorate-purple text
│𒆜 ${prefix}peridot text
│𒆜 ${prefix}rock text
│𒆜 ${prefix}yellow-glass text
│𒆜 ${prefix}purple-glass text
│𒆜 ${prefix}orange-glass text
│𒆜 ${prefix}green-glass text
│𒆜 ${prefix}cyan-glass text
│𒆜 ${prefix}blue-glass text
│𒆜 ${prefix}red-glass text
│𒆜 ${prefix}purple-shiny-glass text
│𒆜 ${prefix}captain-as2 text
│𒆜 ${prefix}robot text
│𒆜 ${prefix}equalizer text
│𒆜 ${prefix}toxic text
│𒆜 ${prefix}pink-sparkling text
│𒆜 ${prefix}blue-sparkling text
│𒆜 ${prefix}green-sparkling text
│𒆜 ${prefix}purple-sparkling text
│𒆜 ${prefix}gold-sparkling text
│𒆜 ${prefix}red-sparkling text
│𒆜 ${prefix}cyan-sparkling text
│𒆜 ${prefix}decorative text
│𒆜 ${prefix}chocolate text
│𒆜 ${prefix}strawberry text
│𒆜 ${prefix}koifish text
│𒆜 ${prefix}bread text
│𒆜 ${prefix}matrix text
│𒆜 ${prefix}blood2 text
│𒆜 ${prefix}neonligth2 text
│𒆜 ${prefix}thunder2 text
│𒆜 ${prefix}3dbox text
│𒆜 ${prefix}neon2 text
│𒆜 ${prefix}road-warning text
│𒆜 ${prefix}bokeh text
│𒆜 ${prefix}green-neon text
│𒆜 ${prefix}advanced text
│𒆜 ${prefix}dropwater text
│𒆜 ${prefix}wall text
│𒆜 ${prefix}chrismast text
│𒆜 ${prefix}honey2 text
│𒆜 ${prefix}drug text
│𒆜 ${prefix}marble text
│𒆜 ${prefix}marble2 text
│𒆜 ${prefix}ice text
│𒆜 ${prefix}juice text
│𒆜 ${prefix}rusty text
│𒆜 ${prefix}abstra text
│𒆜 ${prefix}biscuit text
│𒆜 ${prefix}wood text
│𒆜 ${prefix}scifi text
│𒆜 ${prefix}metal-rainbow text
│𒆜 ${prefix}metal-rose-gold text
│𒆜 ${prefix}purple-gem text
│𒆜 ${prefix}shiny text 
│𒆜 ${prefix}yellow-jewelry text
│𒆜 ${prefix}silver-jewelry text
│𒆜 ${prefix}red-jewelry text
│𒆜 ${prefix}purple-jewelry text
│𒆜 ${prefix}orange-jewelry text
│𒆜 ${prefix}green-jewelry text
│𒆜 ${prefix}cyan-jewelry text
│𒆜 ${prefix}blue-jewelry text
│𒆜 ${prefix}hot-metal text
│𒆜 ${prefix}golden text
│𒆜 ${prefix}blue-glitter text
│𒆜 ${prefix}purple-glitter text
│𒆜 ${prefix}pink-glitter text
│𒆜 ${prefix}green-glitter text
│𒆜 ${prefix}silver-glitter text
│𒆜 ${prefix}gold-glitter text
│𒆜 ${prefix}bronze-glitter text
│𒆜 ${prefix}eroded-metal text
│𒆜 ${prefix}carbon text
│𒆜 ${prefix}candy text
│𒆜 ${prefix}blue-metal text
│𒆜 ${prefix}blue-gem text
│𒆜 ${prefix}3dchrome text
│𒆜 ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│𒆜 ${prefix}ttp [text]
│𒆜 ${prefix}attp [text]
│𒆜 ${prefix}afk [reason]
│𒆜 ${prefix}translate kode_bahasa text
│𒆜 ${prefix}kalkulator [query]
│𒆜 ${prefix}smeme [text]
│𒆜 ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│𒆜 ${prefix}tembak
│𒆜 ${prefix}tolak
│𒆜 ${prefix}terima
│𒆜 ${prefix}putusin
│𒆜 ${prefix}ikhlasin
│𒆜 ${prefix}cekpacar
│𒆜 ${prefix}kuismath
│𒆜 ${prefix}tebakgambar
│𒆜 ${prefix}tebakkata
│𒆜 ${prefix}tebakbendera
│𒆜 ${prefix}tebakkalimat
│𒆜 ${prefix}tebaksiapa
│𒆜 ${prefix}tebakkabupaten
│𒆜 ${prefix}tebakkimia
│𒆜 ${prefix}tebaklirik
│𒆜 ${prefix}tebaktebakan
│𒆜 ${prefix}tekateki
│𒆜 ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│𒆜 ${prefix}chika
│𒆜 ${prefix}delvira
│𒆜 ${prefix}ayu
│𒆜 ${prefix}bunga
│𒆜 ${prefix}aura
│𒆜 ${prefix}nisa
│𒆜 ${prefix}ziva
│𒆜 ${prefix}yana
│𒆜 ${prefix}viona
│𒆜 ${prefix}syania
│𒆜 ${prefix}riri
│𒆜 ${prefix}syifa
│𒆜 ${prefix}mama_gina
│𒆜 ${prefix}alcakenya
│𒆜 ${prefix}mangayutri
│𒆜 ${prefix}rikagusriani
│𒆜 ${prefix}asupan
│𒆜 ${prefix}bocil
│𒆜 ${prefix}geayubi
│𒆜 ${prefix}santuy
│𒆜 ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│𒆜 ${prefix}china 
│𒆜 ${prefix}indonesia 
│𒆜 ${prefix}malaysia 
│𒆜 ${prefix}thailand 
│𒆜 ${prefix}korea 
│𒆜 ${prefix}japan 
│𒆜 ${prefix}vietnam 
│𒆜 ${prefix}jenni 
│𒆜 ${prefix}jiso 
│𒆜 ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│𒆜 My God
│𒆜 My Parents
│𒆜 Fatih A.
│𒆜 Ferdiz
│𒆜 DikaArdnt
│𒆜 Mhankbarbar
│𒆜 Nurutomo
│𒆜 ZeeoneOfc
│𒆜 Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│𒆜 ${prefix}nomorhoki 887435047326
│𒆜 ${prefix}artimimpi [query]
│𒆜 ${prefix}artinama [query]
│𒆜 ${prefix}ramaljodoh
│𒆜 ${prefix}ramaljodohbali
│𒆜 ${prefix}suamiistri
│𒆜 ${prefix}ramalcinta
│𒆜 ${prefix}cocoknama
│𒆜 ${prefix}pasangan
│𒆜 ${prefix}jadiannikah
│𒆜 ${prefix}sifatusaha
│𒆜 ${prefix}rezeki
│𒆜 ${prefix}pekerjaan
│𒆜 ${prefix}nasib
│𒆜 ${prefix}penyakit
│𒆜 ${prefix}tarot
│𒆜 ${prefix}fengshui
│𒆜 ${prefix}haribaik
│𒆜 ${prefix}harisangar
│𒆜 ${prefix}harisial
│𒆜 ${prefix}nagahari
│𒆜 ${prefix}arahrezeki
│𒆜 ${prefix}peruntungan
│𒆜 ${prefix}weton
│𒆜 ${prefix}karakter
│𒆜 ${prefix}keberuntungan
│𒆜 ${prefix}memancing
│𒆜 ${prefix}masasubur
│𒆜 ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│𒆜 ${prefix}awoawo
│𒆜 ${prefix}benedict
│𒆜 ${prefix}chat
│𒆜 ${prefix}dbfly
│𒆜 ${prefix}dino_kuning
│𒆜 ${prefix}doge
│𒆜 ${prefix}gojosatoru
│𒆜 ${prefix}hope_boy
│𒆜 ${prefix}jisoo
│𒆜 ${prefix}kr_robot
│𒆜 ${prefix}kucing
│𒆜 ${prefix}lonte
│𒆜 ${prefix}manusia_lidi
│𒆜 ${prefix}menjamet
│𒆜 ${prefix}meow
│𒆜 ${prefix}nicholas
│𒆜 ${prefix}patrick
│𒆜 ${prefix}popoci
│𒆜 ${prefix}sponsbob
│𒆜 ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│𒆜 ${prefix}youtubegold text
│𒆜 ${prefix}youtubesilver text
│𒆜 ${prefix}facebookgold text
│𒆜 ${prefix}facebooksilver text
│𒆜 ${prefix}instagramgold text
│𒆜 ${prefix}instagramsilver text
│𒆜 ${prefix}twittergold text
│𒆜 ${prefix}twittersilver text
│𒆜 ${prefix}retrotext text
│𒆜 ${prefix}halloweenbats text
│𒆜 ${prefix}texthalloween text
│𒆜 ${prefix}cardhalloween text
│𒆜 ${prefix}birthdaycake text
│𒆜 ${prefix}thundertext text
│𒆜 ${prefix}icetext text
│𒆜 ${prefix}milkcake text
│𒆜 ${prefix}snowontext text
│𒆜 ${prefix}metalstar text
│𒆜 ${prefix}dragonfire text
│𒆜 ${prefix}zombie3d text
│𒆜 ${prefix}merrycard text
│𒆜 ${prefix}generalexam text 
│𒆜 ${prefix}viettel text
│𒆜 ${prefix}embroider text
│𒆜 ${prefix}graffititext text
│𒆜 ${prefix}graffititext2 text
│𒆜 ${prefix}graffititext3 text
│𒆜 ${prefix}covergraffiti text
│𒆜 ${prefix}moderngold text
│𒆜 ${prefix}capercut text
│𒆜 ${prefix}lovecard text
│𒆜 ${prefix}heartflashlight text
│𒆜 ${prefix}heartcup text
│𒆜 ${prefix}sunglightshadow text
│𒆜 ${prefix}graffiti3d text
│𒆜 ${prefix}moderngoldsilver text
│𒆜 ${prefix}moderngold2 text
│𒆜 ${prefix}moderngold3 text
│𒆜 ${prefix}fabrictext text
│𒆜 ${prefix}masteryavatar text
│𒆜 ${prefix}messagecoffee text
│𒆜 ${prefix}announofwin text
│𒆜 ${prefix}writeblood text
│𒆜 ${prefix}horrorletter text
│𒆜 ${prefix}writehorror text
│𒆜 ${prefix}shirtclub text
│𒆜 ${prefix}angelwing text
│𒆜 ${prefix}christmasseason text
│𒆜 ${prefix}projectyasuo text
│𒆜 ${prefix}lovelycute text
│𒆜 ${prefix}womansday text
│𒆜 ${prefix}covergamepubg text
│𒆜 ${prefix}nameonheart text
│𒆜 ${prefix}funnyhalloween text
│𒆜 ${prefix}lightningpubg text
│𒆜 ${prefix}greetingcardvideo text 
│𒆜 ${prefix}christmascard text 
│𒆜 ${prefix}galaxybat text
│𒆜 ${prefix}writegalaxy text
│𒆜 ${prefix}starsnight text
│𒆜 ${prefix}noeltext text
│𒆜 ${prefix}textcakes text
│𒆜 ${prefix}pubgbirthday text
│𒆜 ${prefix}galaxywallpaper text
│𒆜 ${prefix}pubgglicthvideo text 
│𒆜 ${prefix}pubgmascotlogo text
│𒆜 ${prefix}realembroidery text
│𒆜 ${prefix}vintagetelevision text
│𒆜 ${prefix}funnyanimations text
│𒆜 ${prefix}glowingtext text
│𒆜 ${prefix}textonglass text
│𒆜 ${prefix}cartoonstyle text
│𒆜 ${prefix}multicolor text
│𒆜 ${prefix}watercolor2 text
│𒆜 ${prefix}textsky text
│𒆜 ${prefix}summerbeach text
│𒆜 ${prefix}1917text text
│𒆜 ${prefix}puppycute text
│𒆜 ${prefix}rosebirthday text
│𒆜 ${prefix}steellettering text|text2
│𒆜 ${prefix}letterstext text|text2
│𒆜 ${prefix}barcashirt text|text2
│𒆜 ${prefix}premiercup text|text2
│𒆜 ${prefix}stylepoligon text|text2
│𒆜 ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│𒆜 ${prefix}coverbannerlol text|heroes
│𒆜 ${prefix}pubglogomaker text|style
│𒆜 ${prefix}colorfulpubg text|color
│𒆜 ${prefix}astronotspace text|style
│𒆜 ${prefix}wallpaperaov text|heroes
│𒆜 ${prefix}maketeamlogo text|style
│𒆜 ${prefix}circlemarcotteam text|logo
│𒆜 ${prefix}wallpaperml text|heroes
│𒆜 ${prefix}dragonballfb text|character
│𒆜 ${prefix}bannerofaov text|character
│𒆜 ${prefix}effect3donbeach text|background
│𒆜 ${prefix}cutegirlgamer text|logo
│𒆜 ${prefix}footballteam text|logo
│𒆜 ${prefix}beautifulshimmering text|champion
│𒆜 ${prefix}pubgcutelogo text|logo
│𒆜 ${prefix}elegantrotation text|logo
│𒆜 ${prefix}logogamingassasin text|logo
│𒆜 ${prefix}introvideomaker text|logo
│𒆜 ${prefix}gaminglogo4fvs text|logo
│𒆜 ${prefix}blueneon text|logo
│𒆜 ${prefix}metalmascot text|logo
│𒆜 ${prefix}anonymous2 text|style
│𒆜 ${prefix}lolpentakill text|style
│𒆜 ${prefix}avatarleagueofking text|style
│𒆜 ${prefix}avatarff text|character
│𒆜 ${prefix}overwatchwallpaper text|character
│𒆜 ${prefix}rovwallpaperhd text|hero
│𒆜 ${prefix}rovwallpaper text|avatar
│𒆜 ${prefix}beautifulgalaxylol text|style
│𒆜 ${prefix}crossfirecover text|character
│𒆜 ${prefix}lolwallpaper text|wallpaper
│𒆜 ${prefix}coverdota2 text|heroes
│𒆜 ${prefix}coverleagueofking text|character
│𒆜 ${prefix}avatar3q360 text|avatar
│𒆜 ${prefix}coverofwarface text|character
│𒆜 ${prefix}newlolavatar text|avatar
│𒆜 ${prefix}csgocover text|background
│𒆜 ${prefix}coverloknew text|hero
│𒆜 ${prefix}coverfblol text|letters
│𒆜 ${prefix}overwatchcover text|hero
│𒆜 ${prefix}crossfirestyle text|avatar
│𒆜 ${prefix}avatarlolbyname text|style
│𒆜 ${prefix}lolcoverbyname text|avatar
│𒆜 ${prefix}cyberhunterfb text|character
│𒆜 ${prefix}coverfreefirefb text|character
│𒆜 ${prefix}gamingmascot text|style
│𒆜 ${prefix}coveronepiecefb text|character
│𒆜 ${prefix}bannerytcsgo text|banner
│𒆜 ${prefix}fbgamepubgcover text|template
│𒆜 ${prefix}banneroflol text|text2|banner
│𒆜 ${prefix}bannerofaov2 text|text2|banner
│𒆜 ${prefix}teamlogo text|text2|background
│𒆜 ${prefix}companylogo2 text|text2|background
│𒆜 ${prefix}companylogo text|text2|background
│𒆜 ${prefix}gradientlogo text|text2|background
│𒆜 ${prefix}pencilsketch text|text2|icon
│𒆜 ${prefix}gunlogogaming text|text2|background
│𒆜 ${prefix}banneroffreefire text|text2|background
│𒆜 ${prefix}letterlogos text|text2|thumb
│𒆜 ${prefix}bannerofoverwatch text|text2|background
│𒆜 ${prefix}bannerofapex text|text2|background
│𒆜 ${prefix}bannerofpubg text|text2|background
│𒆜 ${prefix}mascotstyle text|text2|thumb
│𒆜 ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│𒆜 ${prefix}asmaulhusna
│𒆜 ${prefix}kisahnabi [nabi]
│𒆜 ${prefix}jadwalshalat [daerah]
│𒆜 ${prefix}randomquran
│𒆜 ${prefix}randomquran2
│𒆜 ${prefix}listsurah
│𒆜 ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│𒆜 ${prefix}menfess
│𒆜 ${prefix}confess
│𒆜 ${prefix}balasmenfess
│𒆜 ${prefix}tolakmenfess
│𒆜 ${prefix}stopmenfess
│𒆜 ${prefix}anonymous 
│𒆜 ${prefix}start
│𒆜 ${prefix}skip [daerah]
╰❒ ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│𒆜 ${prefix}list
│𒆜 ${prefix}addlist [key|respond]
│𒆜 ${prefix}dellist [key]
│𒆜 ${prefix}update [key|respond]
│𒆜 ${prefix}store
│𒆜 ${prefix}kali
│𒆜 ${prefix}bagi
│𒆜 ${prefix}tambah
│𒆜 ${prefix}kurang
│𒆜 ${prefix}kalkulator
│𒆜 ${prefix}setproses
│𒆜 ${prefix}updateproses
│𒆜 ${prefix}cekproses
│𒆜 ${prefix}delproses
│𒆜 ${prefix}setdone
│𒆜 ${prefix}updatedone
│𒆜 ${prefix}cekdone
│𒆜 ${prefix}deldone
│𒆜 ${prefix}pay
│𒆜 ${prefix}setcaptionpay
│𒆜 ${prefix}setpaysewa
│𒆜 proses
╰❒ done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│𒆜 ${prefix}bass
│𒆜 ${prefix}blown
│𒆜 ${prefix}deep
│𒆜 ${prefix}earrape
│𒆜 ${prefix}fast
│𒆜 ${prefix}fat
│𒆜 ${prefix}nightcore
│𒆜 ${prefix}reverse
│𒆜 ${prefix}robot
│𒆜 ${prefix}slow
│𒆜 ${prefix}smooth
╰❒ ${prefix}tupai
`
}

exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│𒆜 ${prefix}addvn
│𒆜 ${prefix}listvn
│𒆜 ${prefix}delvn
│𒆜 ${prefix}adddocument
│𒆜 ${prefix}listdocument
│𒆜 ${prefix}deldocument
│𒆜 ${prefix}addtext
│𒆜 ${prefix}listtext
│𒆜 ${prefix}deltext
│𒆜 ${prefix}addaudio
│𒆜 ${prefix}listaudio
│𒆜 ${prefix}delaudio
│𒆜 ${prefix}addimage
│𒆜 ${prefix}listimage
│𒆜 ${prefix}delimage
│𒆜 ${prefix}addvideo
│𒆜 ${prefix}listvideo
│𒆜 ${prefix}delvideo
│𒆜 ${prefix}addstik
│𒆜 ${prefix}delstik
╰❒ ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│𒆜 ${prefix}adventure
│𒆜 ${prefix}weekly
│𒆜 ${prefix}use
│𒆜 ${prefix}transfer
│𒆜 ${prefix}slot
│𒆜 ${prefix}shop
│𒆜 ${prefix}pasar
│𒆜 ${prefix}profile
│𒆜 ${prefix}ojek
│𒆜 ${prefix}open
│𒆜 ${prefix}nguli
│𒆜 ${prefix}narik
│𒆜 ${prefix}nabung
│𒆜 ${prefix}monthly
│𒆜 ${prefix}mining
│𒆜 ${prefix}merampok
│𒆜 ${prefix}mancing
│𒆜 ${prefix}kolam
│𒆜 ${prefix}koboy
│𒆜 ${prefix}kerja
│𒆜 ${prefix}kandang
│𒆜 ${prefix}levelup
│𒆜 ${prefix}judi
│𒆜 ${prefix}inventory
│𒆜 ${prefix}hourly
│𒆜 ${prefix}fishop
│𒆜 ${prefix}feed
│𒆜 ${prefix}duel
│𒆜 ${prefix}daily
│𒆜 ${prefix}craft
│𒆜 ${prefix}cooldown
│𒆜 ${prefix}cook
│𒆜 ${prefix}collect
│𒆜 ${prefix}chop
│𒆜 ${prefix}casino
│𒆜 ${prefix}buy
│𒆜 ${prefix}bank 
│𒆜 ${prefix}bansos
│𒆜 ${prefix}berdagang
│𒆜 ${prefix}berkebon
╰❒ ${prefix}build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│𒆜 ${prefix}battlegrounds-logo
│𒆜 ${prefix}battlefield4
│𒆜 ${prefix}text-8bit
│𒆜 ${prefix}typography-flower 
│𒆜 ${prefix}under-flower 
│𒆜 ${prefix}bevel-text 
│𒆜 ${prefix}silk-text 
│𒆜 ${prefix}sweet-andy 
│𒆜 ${prefix}smoke-typography 
│𒆜 ${prefix}carvedwood 
│𒆜 ${prefix}scary-cemetery 
│𒆜 ${prefix}royallook 
│𒆜 ${prefix}coffeecup2 
│𒆜 ${prefix}illuminated 
│𒆜 ${prefix}harry-potter2 //
│𒆜 ${prefix}woodblack //
│𒆜 ${prefix}butterfly-reflection //
│𒆜 ${prefix}watermelon // 
│𒆜 ${prefix}striking // 
│𒆜 ${prefix}metallicglow //
│𒆜 ${prefix}rainbow-text 
│𒆜 ${prefix}birthday-cake 
│𒆜 ${prefix}embroidery // 
│𒆜 ${prefix}crisp 
│𒆜 ${prefix}flaming 
│𒆜 ${prefix}furtext 
│𒆜 ${prefix}nightsky 
│𒆜 ${prefix}glow-rainbow 
│𒆜 ${prefix}gradient-avatar 
│𒆜 ${prefix}white-cube // 
│𒆜 ${prefix}honey-text // 
│𒆜 ${prefix}vintage-style //
│𒆜 ${prefix}glowing-3d // 
│𒆜 ${prefix}army-camouflage 
│𒆜 ${prefix}graffiti-cover 
│𒆜 ${prefix}rainbow-shine 
│𒆜 ${prefix}smoky-neon 
│𒆜 ${prefix}quotes-underfall //
│𒆜 ${prefix}layered-leaves 
│𒆜 ${prefix}vector-nature 
│𒆜 ${prefix}yellow-rose 
│𒆜 ${prefix}love-text 
│𒆜 ${prefix}underwater-ocean 
│𒆜 ${prefix}nature-text 
│𒆜 ${prefix}wolf-metal 
│𒆜 ${prefix}summer-text 
│𒆜 ${prefix}wooden-board //
│𒆜 ${prefix}flower-heart
│𒆜 ${prefix}quote-wood 
│𒆜 ${prefix}love-text 
│𒆜 ${prefix}quotes-undergrass 
│𒆜 ${prefix}naruto-banner 
│𒆜 ${prefix}love-message 
│𒆜 ${prefix}textoncup2 
│𒆜 ${prefix}burn-paper 
│𒆜 ${prefix}smoke 
│𒆜 ${prefix}romantic-messages 
│𒆜 ${prefix}shadow-sky 
│𒆜 ${prefix}text-cup 
╰❒ ${prefix}coffecup
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│𒆜 ${prefix}sound1
│𒆜 ${prefix}sound2
│𒆜 ${prefix}sound3
│𒆜 ${prefix}sound4
│𒆜 ${prefix}sound5
│𒆜 ${prefix}sound6
│𒆜 ${prefix}sound7
│𒆜 ${prefix}sound8
│𒆜 ${prefix}sound9
│𒆜 ${prefix}sound10
│𒆜 ${prefix}sound11
│𒆜 ${prefix}sound12
│𒆜 ${prefix}sound13
│𒆜 ${prefix}sound14
│𒆜 ${prefix}sound15
│𒆜 ${prefix}sound16
│𒆜 ${prefix}sound17
│𒆜 ${prefix}sound18 
│𒆜 ${prefix}sound19
│𒆜 ${prefix}sound20
│𒆜 ${prefix}sound21
│𒆜 ${prefix}sound22
│𒆜 ${prefix}sound23
│𒆜 ${prefix}sound24
│𒆜 ${prefix}sound25
│𒆜 ${prefix}sound26
│𒆜 ${prefix}sound27
│𒆜 ${prefix}sound28
│𒆜 ${prefix}sound29
│𒆜 ${prefix}sound30
│𒆜 ${prefix}sound31
│𒆜 ${prefix}sound32
│𒆜 ${prefix}sound33
│𒆜 ${prefix}sound34
│𒆜 ${prefix}sound35
│𒆜 ${prefix}sound36
│𒆜 ${prefix}sound37
│𒆜 ${prefix}sound38
│𒆜 ${prefix}sound39
│𒆜 ${prefix}sound40
│𒆜 ${prefix}sound41
│𒆜 ${prefix}sound42
│𒆜 ${prefix}sound43
│𒆜 ${prefix}sound44
│𒆜 ${prefix}sound45
│𒆜 ${prefix}sound46
│𒆜 ${prefix}sound47
│𒆜 ${prefix}sound48
│𒆜 ${prefix}sound49
│𒆜 ${prefix}sound50
│𒆜 ${prefix}sound51
│𒆜 ${prefix}sound52
│𒆜 ${prefix}sound53
│𒆜 ${prefix}sound54
│𒆜 ${prefix}sound55
│𒆜 ${prefix}sound56
│𒆜 ${prefix}sound57
│𒆜 ${prefix}sound58
│𒆜 ${prefix}sound59
│𒆜 ${prefix}sound60
│𒆜 ${prefix}sound61
│𒆜 ${prefix}sound62
│𒆜 ${prefix}sound63
│𒆜 ${prefix}sound64
│𒆜 ${prefix}sound65
│𒆜 ${prefix}sound66
│𒆜 ${prefix}sound67
│𒆜 ${prefix}sound68
│𒆜 ${prefix}sound69
╰❒ ${prefix}sound70
`
}
